import { NextRequest } from "next/server";
import { and, eq, inArray, notInArray } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";
import { getCurrentTeacher, normalizeName } from "@/lib/server";
import { categories } from "@/lib/types";
import { BackupError, restoreFromBackup } from "@/lib/backup";

class InputError extends Error {}
const fail = (message: string): never => { throw new InputError(message); };
const text = (value: unknown, label: string, max = 200, required = true) => {
  const result = String(value ?? "").trim();
  if ((required && !result) || result.length > max) fail(`تحقق من ${label}`);
  return result;
};
const integer = (value: unknown, label: string, min = 0, max = 10000000) => {
  const result = Number(value);
  if (!Number.isSafeInteger(result) || result < min || result > max) fail(`تحقق من ${label}`);
  return result;
};
const id = (value: unknown) => integer(value, "الرقم", 1);
const date = (value: unknown) => {
  const result = text(value, "التاريخ", 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(result) || Number.isNaN(Date.parse(`${result}T12:00:00Z`)) || new Date(`${result}T12:00:00Z`).toISOString().slice(0, 10) !== result) fail("تاريخ غير صالح");
  return result;
};
const ids = (value: unknown) => {
  if (!Array.isArray(value) || value.length > 1000) fail("قائمة غير صالحة");
  return [...new Set((value as unknown[]).map(id))];
};
const oneOf = (value: unknown, allowed: string[], label: string) => {
  const result = String(value);
  if (!allowed.includes(result)) fail(`تحقق من ${label}`);
  return result;
};

export async function POST(request: NextRequest) {
  if (!await getCurrentTeacher()) return Response.json({ error: "يرجى تسجيل الدخول أولاً" }, { status: 401 });
  try {
    if (!request.headers.get("content-type")?.includes("application/json")) fail("طلب غير صالح");
    const b = await request.json();
    switch (b.action) {
      case "restoreBackup": {
        await restoreFromBackup(b.backup);
        break;
      }
      case "saveStudent": {
        const name = text(b.name, "اسم الطالب", 120).replace(/\s+/g, " ");
        if (name.length < 3) fail("اسم الطالب قصير جداً");
        const grade = text(b.grade, "الصف الدراسي", 80);
        const phone = text(b.phone, "رقم الهاتف", 30, false);
        const monthlyFee = integer(b.monthlyFee, "الاشتراك الشهري");
        const notes = text(b.notes, "الملاحظات", 2000, false);
        const groupIds = ids(b.groupIds);
        await db.transaction(async tx => {
          const selectedGroups = groupIds.length ? await tx.select().from(s.groups).where(inArray(s.groups.id, groupIds)) : [];
          if (selectedGroups.length !== groupIds.length) fail("إحدى المجموعات غير موجودة");
          let studentId: number;
          if (b.id) {
            studentId = id(b.id);
            const result = await tx.update(s.students).set({ name, normalizedName: normalizeName(name), grade, phone, monthlyFee, notes }).where(eq(s.students.id, studentId)).returning({ id: s.students.id });
            if (!result.length) fail("الطالب غير موجود");
          } else {
            const result = await tx.insert(s.students).values({ name, normalizedName: normalizeName(name), grade, phone, monthlyFee, notes }).returning({ id: s.students.id });
            studentId = result[0].id;
          }
          if (groupIds.length) await tx.delete(s.memberships).where(and(eq(s.memberships.studentId, studentId), notInArray(s.memberships.groupId, groupIds)));
          else await tx.delete(s.memberships).where(eq(s.memberships.studentId, studentId));
          for (const group of selectedGroups) {
            const fee = groupIds.length === 1 ? monthlyFee : group.monthlyFee;
            await tx.insert(s.memberships).values({ studentId, groupId: group.id, fee }).onConflictDoNothing();
            if (groupIds.length === 1) await tx.update(s.memberships).set({ fee }).where(and(eq(s.memberships.studentId, studentId), eq(s.memberships.groupId, group.id)));
          }
        });
        break;
      }
      case "deleteStudent": {
        const rows = await db.delete(s.students).where(eq(s.students.id, id(b.id))).returning({ id: s.students.id });
        if (!rows.length) fail("الطالب غير موجود");
        break;
      }
      case "saveGroup": {
        const name = text(b.name, "اسم المجموعة", 120);
        const grade = text(b.grade, "الصف الدراسي", 80);
        const subject = text(b.subject, "المادة", 80);
        const day = integer(b.day, "اليوم", 0, 6);
        const time = text(b.time, "الوقت", 5);
        if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) fail("وقت غير صالح");
        const duration = integer(b.duration, "مدة الحصة", 15, 480);
        const monthlyFee = integer(b.monthlyFee, "الاشتراك الشهري");
        const color = oneOf(b.color || "blue", ["blue", "purple", "orange", "teal", "pink", "indigo"], "اللون");
        const studentIds = ids(b.studentIds);
        await db.transaction(async tx => {
          if (studentIds.length) {
            const found = await tx.select({ id: s.students.id }).from(s.students).where(inArray(s.students.id, studentIds));
            if (found.length !== studentIds.length) fail("أحد الطلاب غير موجود");
          }
          let groupId: number;
          if (b.id) {
            groupId = id(b.id);
            const [old] = await tx.select().from(s.groups).where(eq(s.groups.id, groupId));
            if (!old) fail("المجموعة غير موجودة");
            await tx.update(s.groups).set({ name, grade, subject, day, time, duration, monthlyFee, color }).where(eq(s.groups.id, groupId));
            if (old.monthlyFee !== monthlyFee) await tx.update(s.memberships).set({ fee: monthlyFee }).where(and(eq(s.memberships.groupId, groupId), eq(s.memberships.fee, old.monthlyFee)));
          } else {
            const result = await tx.insert(s.groups).values({ name, grade, subject, day, time, duration, monthlyFee, color }).returning({ id: s.groups.id });
            groupId = result[0].id;
          }
          if (studentIds.length) await tx.delete(s.memberships).where(and(eq(s.memberships.groupId, groupId), notInArray(s.memberships.studentId, studentIds)));
          else await tx.delete(s.memberships).where(eq(s.memberships.groupId, groupId));
          for (const studentId of studentIds) await tx.insert(s.memberships).values({ studentId, groupId, fee: monthlyFee }).onConflictDoNothing();
        });
        break;
      }
      case "deleteGroup": {
        const rows = await db.delete(s.groups).where(eq(s.groups.id, id(b.id))).returning({ id: s.groups.id });
        if (!rows.length) fail("المجموعة غير موجودة");
        break;
      }
      case "saveAttendance": {
        const groupId = id(b.groupId); const lessonDate = date(b.lessonDate);
        if (!Array.isArray(b.records) || b.records.length > 1000) fail("بيانات الحضور غير صالحة");
        const members = await db.select({ studentId: s.memberships.studentId }).from(s.memberships).where(eq(s.memberships.groupId, groupId));
        const memberIds = new Set(members.map(m => m.studentId));
        await db.transaction(async tx => {
          for (const r of b.records) {
            const studentId = id(r.studentId);
            if (!memberIds.has(studentId)) fail("الطالب ليس عضواً في المجموعة");
            const status = oneOf(r.status, ["present", "absent"], "حالة الحضور");
            await tx.insert(s.attendance).values({ groupId, studentId, lessonDate, status }).onConflictDoUpdate({ target: [s.attendance.studentId, s.attendance.groupId, s.attendance.lessonDate], set: { status } });
          }
        });
        break;
      }
      case "savePayment": {
        const studentId = id(b.studentId); const groupId = id(b.groupId); const amount = integer(b.amount, "المبلغ", 1);
        const paymentDate = date(b.paymentDate); const month = text(b.month, "الشهر", 7);
        if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) fail("الشهر غير صالح");
        const notes = text(b.notes, "الملاحظات", 500, false);
        await db.transaction(async tx => {
          const [member] = await tx.select().from(s.memberships).where(and(eq(s.memberships.studentId, studentId), eq(s.memberships.groupId, groupId)));
          if (!member) fail("الطالب ليس عضواً في هذه المجموعة");
          const existing = await tx.select().from(s.payments).where(and(eq(s.payments.studentId, studentId), eq(s.payments.groupId, groupId), eq(s.payments.month, month)));
          const prior = existing.filter(p => !b.id || p.id !== Number(b.id)).reduce((sum, p) => sum + p.amount, 0);
          if (amount + prior > member.fee) fail(`المبلغ أكبر من المتبقي (${Math.max(0, member.fee - prior)} ج.م)`);
          if (b.id) {
            const result = await tx.update(s.payments).set({ studentId, groupId, amount, paymentDate, month, notes }).where(eq(s.payments.id, id(b.id))).returning({ id: s.payments.id });
            if (!result.length) fail("الدفعة غير موجودة");
          } else await tx.insert(s.payments).values({ studentId, groupId, amount, paymentDate, month, notes });
        });
        break;
      }
      case "deletePayment": {
        const rows = await db.delete(s.payments).where(eq(s.payments.id, id(b.id))).returning({ id: s.payments.id });
        if (!rows.length) fail("الدفعة غير موجودة");
        break;
      }
      case "saveExpense": {
        const description = text(b.description, "الوصف", 200); const category = oneOf(b.category, categories, "التصنيف");
        const amount = integer(b.amount, "المبلغ", 1); const expenseDate = date(b.expenseDate);
        if (b.id) {
          const rows = await db.update(s.expenses).set({ description, category, amount, expenseDate }).where(eq(s.expenses.id, id(b.id))).returning({ id: s.expenses.id });
          if (!rows.length) fail("المصروف غير موجود");
        } else await db.insert(s.expenses).values({ description, category, amount, expenseDate });
        break;
      }
      case "deleteExpense": {
        const rows = await db.delete(s.expenses).where(eq(s.expenses.id, id(b.id))).returning({ id: s.expenses.id });
        if (!rows.length) fail("المصروف غير موجود");
        break;
      }
      case "saveAssignment": {
        const groupId = id(b.groupId); const lessonDate = date(b.lessonDate);
        const homework = text(b.homework, "الواجب", 3000, false); const memorization = text(b.memorization, "الحفظ", 3000, false);
        if (!homework && !memorization) fail("أضف واجباً أو حفظاً على الأقل");
        const [group] = await db.select({ id: s.groups.id }).from(s.groups).where(eq(s.groups.id, groupId));
        if (!group) fail("المجموعة غير موجودة");
        if (b.id) {
          const [old] = await db.select().from(s.assignments).where(eq(s.assignments.id, id(b.id)));
          if (!old || old.groupId !== groupId) fail("لا يمكن تغيير مجموعة الواجب");
          await db.update(s.assignments).set({ lessonDate, homework, memorization }).where(eq(s.assignments.id, old.id));
        } else await db.insert(s.assignments).values({ groupId, lessonDate, homework, memorization });
        break;
      }
      case "deleteAssignment": {
        const rows = await db.delete(s.assignments).where(eq(s.assignments.id, id(b.id))).returning({ id: s.assignments.id });
        if (!rows.length) fail("الواجب غير موجود");
        break;
      }
      case "saveProgress": {
        const assignmentId = id(b.assignmentId);
        const [assignment] = await db.select().from(s.assignments).where(eq(s.assignments.id, assignmentId));
        if (!assignment || !Array.isArray(b.records) || b.records.length > 1000) fail("بيانات المتابعة غير صالحة");
        const members = await db.select({ studentId: s.memberships.studentId }).from(s.memberships).where(eq(s.memberships.groupId, assignment.groupId));
        const memberIds = new Set(members.map(m => m.studentId));
        await db.transaction(async tx => {
          for (const r of b.records) {
            const studentId = id(r.studentId);
            if (!memberIds.has(studentId)) fail("الطالب ليس عضواً في المجموعة");
            const homeworkStatus = oneOf(r.homeworkStatus, ["completed", "partial", "not_completed"], "حالة الواجب");
            const memorizationStatus = oneOf(r.memorizationStatus, ["completed", "partial", "not_completed"], "حالة الحفظ");
            await tx.insert(s.progress).values({ assignmentId, studentId, homeworkStatus, memorizationStatus }).onConflictDoUpdate({ target: [s.progress.assignmentId, s.progress.studentId], set: { homeworkStatus, memorizationStatus } });
          }
        });
        break;
      }
      default: fail("عملية غير معروفة");
    }
    return Response.json({ ok: true });
  } catch (error) {
    const cause = error as { code?: string; cause?: { code?: string } };
    if (cause.code === "23505" || cause.cause?.code === "23505") return Response.json({ error: "يوجد طالب بنفس الاسم بالفعل. تأكد من عدم تكرار السجل." }, { status: 409 });
    if (error instanceof InputError || error instanceof BackupError) return Response.json({ error: error.message }, { status: 400 });
    console.error("Action error", error);
    return Response.json({ error: "تعذر حفظ البيانات. حاول مرة أخرى." }, { status: 500 });
  }
}
