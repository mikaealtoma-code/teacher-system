export type Student = { id: number; name: string; grade: string; phone: string; monthlyFee: number; notes: string };
export type Group = { id: number; name: string; grade: string; subject: string; day: number; time: string; duration: number; monthlyFee: number; color: string };
export type Membership = { id: number; studentId: number; groupId: number; fee: number };
export type Attendance = { id: number; studentId: number; groupId: number; lessonDate: string; status: "present" | "absent" };
export type Payment = { id: number; studentId: number; groupId: number; amount: number; paymentDate: string; month: string; notes: string };
export type Expense = { id: number; description: string; category: string; amount: number; expenseDate: string };
export type Assignment = { id: number; groupId: number; lessonDate: string; homework: string; memorization: string };
export type Completion = "completed" | "partial" | "not_completed";
export type Progress = { id: number; assignmentId: number; studentId: number; homeworkStatus: Completion; memorizationStatus: Completion };
export type Dataset = { students: Student[]; groups: Group[]; memberships: Membership[]; attendance: Attendance[]; payments: Payment[]; expenses: Expense[]; assignments: Assignment[]; progress: Progress[] };

export const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
export const categories = ["المواصلات", "الطباعة", "الأدوات التعليمية", "الإيجار", "أخرى"];
export const completionLabels: Record<Completion, string> = { completed: "مكتمل", partial: "مكتمل جزئياً", not_completed: "غير مكتمل" };
export const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
export const currentMonth = () => today().slice(0, 7);
export const formatMoney = (amount: number) => new Intl.NumberFormat("en-US").format(Math.round(amount));
export const formatDate = (date: string, options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" }) => {
  if (!date) return "—";
  const d = new Date(`${date.slice(0, 10)}T12:00:00`);
  return Number.isNaN(d.getTime()) ? "—" : new Intl.DateTimeFormat("ar-EG", options).format(d);
};
export const paidFor = (data: Dataset, studentId: number, groupId: number, month: string) => data.payments.filter(p => p.studentId === studentId && p.groupId === groupId && p.month === month).reduce((sum, p) => sum + p.amount, 0);
export const studentBalance = (data: Dataset, studentId: number, month: string) => {
  const ms = data.memberships.filter(m => m.studentId === studentId);
  const due = ms.reduce((sum, m) => sum + m.fee, 0);
  const paid = ms.reduce((sum, m) => sum + Math.min(m.fee, paidFor(data, studentId, m.groupId, month)), 0);
  return { due, paid, remaining: Math.max(0, due - paid), status: due > 0 && paid >= due ? "paid" : paid > 0 ? "partial" : "unpaid" } as const;
};
