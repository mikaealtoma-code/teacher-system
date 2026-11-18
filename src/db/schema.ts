import { pgTable, serial, text, integer, timestamp, date, uniqueIndex, index } from "drizzle-orm/pg-core";

export const teachers = pgTable("teachers", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  failedAttempts: integer("failed_attempts").notNull().default(0),
  lockedUntil: timestamp("locked_until", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  teacherId: integer("teacher_id").notNull().references(() => teachers.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
});

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  normalizedName: text("normalized_name").notNull().unique(),
  grade: text("grade").notNull(),
  phone: text("phone").notNull().default(""),
  monthlyFee: integer("monthly_fee").notNull().default(0),
  notes: text("notes").notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const groups = pgTable("groups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  grade: text("grade").notNull(),
  subject: text("subject").notNull(),
  day: integer("day").notNull(),
  time: text("time").notNull(),
  duration: integer("duration").notNull().default(90),
  monthlyFee: integer("monthly_fee").notNull().default(0),
  color: text("color").notNull().default("blue"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const memberships = pgTable("memberships", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").notNull().references(() => students.id, { onDelete: "cascade" }),
  groupId: integer("group_id").notNull().references(() => groups.id, { onDelete: "cascade" }),
  fee: integer("fee").notNull().default(0),
}, (table) => [uniqueIndex("membership_student_group_unique").on(table.studentId, table.groupId)]);

export const attendance = pgTable("attendance", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").notNull().references(() => students.id, { onDelete: "cascade" }),
  groupId: integer("group_id").notNull().references(() => groups.id, { onDelete: "cascade" }),
  lessonDate: date("lesson_date").notNull(),
  status: text("status").notNull(),
}, (table) => [uniqueIndex("attendance_student_group_date_unique").on(table.studentId, table.groupId, table.lessonDate), index("attendance_date_idx").on(table.lessonDate)]);

export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").notNull().references(() => students.id, { onDelete: "cascade" }),
  groupId: integer("group_id").notNull().references(() => groups.id, { onDelete: "cascade" }),
  amount: integer("amount").notNull(),
  paymentDate: date("payment_date").notNull(),
  month: text("month").notNull(),
  notes: text("notes").notNull().default(""),
}, (table) => [index("payments_month_idx").on(table.month)]);

export const expenses = pgTable("expenses", {
  id: serial("id").primaryKey(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  amount: integer("amount").notNull(),
  expenseDate: date("expense_date").notNull(),
});

export const assignments = pgTable("assignments", {
  id: serial("id").primaryKey(),
  groupId: integer("group_id").notNull().references(() => groups.id, { onDelete: "cascade" }),
  lessonDate: date("lesson_date").notNull(),
  homework: text("homework").notNull().default(""),
  memorization: text("memorization").notNull().default(""),
});

export const progress = pgTable("progress", {
  id: serial("id").primaryKey(),
  assignmentId: integer("assignment_id").notNull().references(() => assignments.id, { onDelete: "cascade" }),
  studentId: integer("student_id").notNull().references(() => students.id, { onDelete: "cascade" }),
  homeworkStatus: text("homework_status").notNull().default("not_completed"),
  memorizationStatus: text("memorization_status").notNull().default("not_completed"),
}, (table) => [uniqueIndex("progress_assignment_student_unique").on(table.assignmentId, table.studentId)]);
