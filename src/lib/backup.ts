import "server-only";
import { db } from "@/db";
import * as schema from "@/db/schema";
import { normalizeName } from "./server";
import { categories } from "./types";

export class BackupError extends Error {}
const invalid = (): never => { throw new BackupError("ملف النسخة الاحتياطية غير صالح أو يحتوي على بيانات متعارضة."); };
type Raw = Record<string, unknown>;
function object(value: unknown): Raw { if (!value || typeof value !== "object" || Array.isArray(value)) return invalid(); return value as Raw; }
function array(value: unknown, max: number): Raw[] { if (!Array.isArray(value) || value.length > max) return invalid(); return value.map(object); }
function number(value: unknown, min = 0, max = 10000000) { if (typeof value !== "number" || !Number.isSafeInteger(value) || value < min || value > max) return invalid(); return value; }
function string(value: unknown, max: number, required = false) { if (typeof value !== "string" || value.length > max || (required && !value.trim())) return invalid(); return value.trim(); }
function day(value: unknown) { const v = string(value,10,true); if (!/^\d{4}-\d{2}-\d{2}$/.test(v) || Number.isNaN(Date.parse(`${v}T12:00:00Z`)) || new Date(`${v}T12:00:00Z`).toISOString().slice(0,10) !== v) return invalid(); return v; }
function choice(value: unknown, choices: string[]) { if (typeof value !== "string" || !choices.includes(value)) return invalid(); return value; }
function unique<T>(items: T[], key: (item: T) => string | number) { const keys = items.map(key); if (new Set(keys).size !== keys.length) invalid(); }
function chunks<T>(items: T[], size = 300) { const result: T[][] = []; for (let i=0; i<items.length; i+=size) result.push(items.slice(i,i+size)); return result; }

/** Validate every reference before making any change; replace data atomically. */
export async function restoreFromBackup(value: unknown) {
  const backup = object(value);
  if (backup.version !== 1) invalid();
  const data = object(backup.data);
  const groups = array(data.groups, 1000).map(g => {
    const time = string(g.time,5,true); if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) invalid();
    return { oldId: number(g.id,1), name:string(g.name,120,true), grade:string(g.grade,80,true), subject:string(g.subject,80,true), day:number(g.day,0,6), time, duration:number(g.duration,15,480), monthlyFee:number(g.monthlyFee), color:choice(g.color,["blue","purple","orange","teal","pink","indigo"]) };
  });
  const students = array(data.students, 10000).map(s => { const name = string(s.name,120,true).replace(/\s+/g," "); if (name.length < 3) invalid(); return { oldId:number(s.id,1), name, normalizedName:normalizeName(name), grade:string(s.grade,80,true), phone:string(s.phone,30), monthlyFee:number(s.monthlyFee), notes:string(s.notes,2000) }; });
  const memberships = array(data.memberships, 30000).map(m => ({ oldId:number(m.id,1), studentId:number(m.studentId,1), groupId:number(m.groupId,1), fee:number(m.fee) }));
  const attendance = array(data.attendance, 100000).map(a => ({ oldId:number(a.id,1), studentId:number(a.studentId,1), groupId:number(a.groupId,1), lessonDate:day(a.lessonDate), status:choice(a.status,["present","absent"]) }));
  const payments = array(data.payments, 100000).map(p => { const month = string(p.month,7,true); if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) invalid(); return { oldId:number(p.id,1), studentId:number(p.studentId,1), groupId:number(p.groupId,1), amount:number(p.amount,1), paymentDate:day(p.paymentDate), month, notes:string(p.notes,500) }; });
  const expenses = array(data.expenses, 50000).map(e => ({ oldId:number(e.id,1), description:string(e.description,200,true), category:choice(e.category,categories), amount:number(e.amount,1), expenseDate:day(e.expenseDate) }));
  const assignments = array(data.assignments, 50000).map(a => { const homework=string(a.homework,3000), memorization=string(a.memorization,3000); if (!homework && !memorization) invalid(); return { oldId:number(a.id,1), groupId:number(a.groupId,1), lessonDate:day(a.lessonDate), homework, memorization }; });
  const progress = array(data.progress, 100000).map(p => ({ oldId:number(p.id,1), assignmentId:number(p.assignmentId,1), studentId:number(p.studentId,1), homeworkStatus:choice(p.homeworkStatus,["completed","partial","not_completed"]), memorizationStatus:choice(p.memorizationStatus,["completed","partial","not_completed"]) }));
  for (const list of [groups,students,memberships,attendance,payments,expenses,assignments,progress]) unique<{ oldId: number }>(list, x => x.oldId);
  unique(students, x => x.normalizedName); unique(memberships, x => `${x.studentId}:${x.groupId}`); unique(attendance, x => `${x.studentId}:${x.groupId}:${x.lessonDate}`); unique(progress, x => `${x.assignmentId}:${x.studentId}`);
  const groupIds = new Set(groups.map(g => g.oldId)), studentIds = new Set(students.map(s => s.oldId)), assignmentIds = new Set(assignments.map(a => a.oldId));
  if (memberships.some(m => !studentIds.has(m.studentId) || !groupIds.has(m.groupId)) || attendance.some(a => !studentIds.has(a.studentId) || !groupIds.has(a.groupId)) || payments.some(p => !studentIds.has(p.studentId) || !groupIds.has(p.groupId)) || assignments.some(a => !groupIds.has(a.groupId)) || progress.some(p => !studentIds.has(p.studentId) || !assignmentIds.has(p.assignmentId))) invalid();
  await db.transaction(async tx => {
    // Cascades remove the old dependent records while preserving the teacher and sessions.
    await tx.delete(schema.groups); await tx.delete(schema.students); await tx.delete(schema.expenses);
    const groupMap = new Map<number,number>(), studentMap = new Map<number,number>(), assignmentMap = new Map<number,number>();
    for (const chunk of chunks(groups)) { const inserted = await tx.insert(schema.groups).values(chunk.map(({oldId:_id,...g}) => g)).returning({id:schema.groups.id}); chunk.forEach((g,i) => groupMap.set(g.oldId,inserted[i].id)); }
    for (const chunk of chunks(students)) { const inserted = await tx.insert(schema.students).values(chunk.map(({oldId:_id,...s}) => s)).returning({id:schema.students.id}); chunk.forEach((s,i) => studentMap.set(s.oldId,inserted[i].id)); }
    const g = (id: number) => groupMap.get(id)!; const s = (id: number) => studentMap.get(id)!;
    for (const chunk of chunks(memberships)) await tx.insert(schema.memberships).values(chunk.map(({oldId:_id,...m}) => ({...m,studentId:s(m.studentId),groupId:g(m.groupId)})));
    for (const chunk of chunks(attendance)) await tx.insert(schema.attendance).values(chunk.map(({oldId:_id,...a}) => ({...a,studentId:s(a.studentId),groupId:g(a.groupId)})));
    for (const chunk of chunks(payments)) await tx.insert(schema.payments).values(chunk.map(({oldId:_id,...p}) => ({...p,studentId:s(p.studentId),groupId:g(p.groupId)})));
    for (const chunk of chunks(expenses)) await tx.insert(schema.expenses).values(chunk.map(({oldId:_id,...e}) => e));
    for (const chunk of chunks(assignments)) { const inserted = await tx.insert(schema.assignments).values(chunk.map(({oldId:_id,...a}) => ({...a,groupId:g(a.groupId)}))).returning({id:schema.assignments.id}); chunk.forEach((a,i) => assignmentMap.set(a.oldId,inserted[i].id)); }
    for (const chunk of chunks(progress)) await tx.insert(schema.progress).values(chunk.map(({oldId:_id,...p}) => ({...p,studentId:s(p.studentId),assignmentId:assignmentMap.get(p.assignmentId)!})));
  });
}
