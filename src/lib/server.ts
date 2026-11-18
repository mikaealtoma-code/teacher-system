import "server-only";
import { createHash, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { and, eq, gt, sql } from "drizzle-orm";
import { db } from "@/db";
import * as schema from "@/db/schema";
import { makeDemoData } from "./demo";
import type { Dataset } from "./types";

export const COOKIE_NAME = "mikhail_session";
export const normalizeName = (name: string) => name.trim().replace(/\s+/g, " ").toLocaleLowerCase();
export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  return `${salt}:${scryptSync(password, salt, 64).toString("hex")}`;
}
export function verifyPassword(password: string, stored: string) {
  try {
    const [salt, hash] = stored.split(":");
    const expected = Buffer.from(hash, "hex");
    const actual = scryptSync(password, salt, 64);
    return expected.length === actual.length && timingSafeEqual(expected, actual);
  } catch { return false; }
}
export function tokenHash(token: string) { return createHash("sha256").update(token).digest("hex"); }

let seedPromise: Promise<void> | undefined;
export function ensureSeeded() {
  if (!seedPromise) seedPromise = seed().catch(error => { seedPromise = undefined; throw error; });
  return seedPromise;
}
async function seed() {
  await db.transaction(async tx => {
    await tx.execute(sql`select pg_advisory_xact_lock(74921182)`);
    const existing = await tx.select({ id: schema.teachers.id }).from(schema.teachers).limit(1);
    if (existing.length) return;
    await tx.insert(schema.teachers).values({ username: "mikhail", passwordHash: hashPassword(process.env.TEACHER_PASSWORD || "Teacher@2026") });
    const demo = makeDemoData();
    const newGroups = await tx.insert(schema.groups).values(demo.groups.map(({ id: _id, ...g }) => g)).returning({ id: schema.groups.id });
    const newStudents = await tx.insert(schema.students).values(demo.students.map(({ id: _id, ...s }) => ({ ...s, normalizedName: normalizeName(s.name) }))).returning({ id: schema.students.id });
    const groupId = (id: number) => newGroups[id - 1].id;
    const studentId = (id: number) => newStudents[id - 1].id;
    await tx.insert(schema.memberships).values(demo.memberships.map(({ id: _id, ...m }) => ({ ...m, studentId: studentId(m.studentId), groupId: groupId(m.groupId) })));
    await tx.insert(schema.attendance).values(demo.attendance.map(({ id: _id, ...a }) => ({ ...a, studentId: studentId(a.studentId), groupId: groupId(a.groupId) })));
    await tx.insert(schema.payments).values(demo.payments.map(({ id: _id, ...p }) => ({ ...p, studentId: studentId(p.studentId), groupId: groupId(p.groupId) })));
    await tx.insert(schema.expenses).values(demo.expenses.map(({ id: _id, ...e }) => e));
    const newAssignments = await tx.insert(schema.assignments).values(demo.assignments.map(({ id: _id, ...a }) => ({ ...a, groupId: groupId(a.groupId) }))).returning({ id: schema.assignments.id });
    await tx.insert(schema.progress).values(demo.progress.map(({ id: _id, ...p }) => ({ ...p, studentId: studentId(p.studentId), assignmentId: newAssignments[p.assignmentId - 1].id })));
  });
}

export async function getCurrentTeacher() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;
  const rows = await db.select({ id: schema.teachers.id, username: schema.teachers.username }).from(schema.sessions).innerJoin(schema.teachers, eq(schema.sessions.teacherId, schema.teachers.id)).where(and(eq(schema.sessions.id, tokenHash(token)), gt(schema.sessions.expiresAt, new Date()))).limit(1);
  return rows[0] || null;
}

export async function hasDefaultDemoPassword() {
  if (process.env.TEACHER_PASSWORD) return false;
  const [teacher] = await db.select({ passwordHash: schema.teachers.passwordHash }).from(schema.teachers).limit(1);
  return !!teacher && verifyPassword("Teacher@2026", teacher.passwordHash);
}

export async function getDataset(): Promise<Dataset> {
  const [students, groups, memberships, attendance, payments, expenses, assignments, progress] = await Promise.all([
    db.select().from(schema.students), db.select().from(schema.groups), db.select().from(schema.memberships), db.select().from(schema.attendance),
    db.select().from(schema.payments), db.select().from(schema.expenses), db.select().from(schema.assignments), db.select().from(schema.progress),
  ]);
  return { students, groups, memberships, attendance, payments, expenses, assignments, progress } as unknown as Dataset;
}
