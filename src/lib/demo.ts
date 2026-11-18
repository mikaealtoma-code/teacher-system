import type { Dataset, Group, Student } from "./types";
import { today } from "./types";

const names = ["أحمد محمد علي", "مريم أحمد حسن", "يوسف محمود إبراهيم", "فاطمة خالد سعيد", "عمر أشرف عادل", "نورهان محمد سمير", "عبد الرحمن مصطفى", "ملك حسام أحمد", "زياد طارق محمود", "سارة عمرو حسن", "محمد شريف السيد", "جنى أيمن محمد", "علي أحمد عبد الله", "ياسمين عادل فتحي", "كريم محمود حسن", "منة الله أشرف", "آدم وليد محمد", "حبيبة محمد طارق", "مصطفى خالد إبراهيم", "ريم أحمد سامي", "عمر محمد صلاح", "فرح محمود علي", "خالد حسام سعيد", "لينا شريف أحمد", "يوسف عادل عمر", "روان محمد حسن", "عبد الله أحمد محمود", "آية خالد سمير"];

function dateOffset(days: number) { const d = new Date(); d.setDate(d.getDate() - days); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; }
function monthOffset(months: number) { const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() - months); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`; }

export function makeDemoData(): Dataset {
  const weekday = new Date().getDay();
  const groups: Group[] = [
    { id: 1, name: "الصف الأول الثانوي", grade: "الأول الثانوي", subject: "اللغة العربية", day: weekday, time: "14:00", duration: 90, monthlyFee: 400, color: "blue" },
    { id: 2, name: "الصف الثاني الإعدادي", grade: "الثاني الإعدادي", subject: "اللغة العربية", day: weekday, time: "16:00", duration: 90, monthlyFee: 350, color: "purple" },
    { id: 3, name: "الصف الثالث الإعدادي", grade: "الثالث الإعدادي", subject: "اللغة العربية", day: (weekday + 1) % 7, time: "15:00", duration: 90, monthlyFee: 400, color: "orange" },
    { id: 4, name: "الصف الأول الإعدادي", grade: "الأول الإعدادي", subject: "اللغة العربية", day: (weekday + 2) % 7, time: "12:00", duration: 90, monthlyFee: 300, color: "teal" },
    { id: 5, name: "الصف الثاني الثانوي", grade: "الثاني الثانوي", subject: "اللغة العربية", day: (weekday + 3) % 7, time: "17:00", duration: 90, monthlyFee: 450, color: "pink" },
    { id: 6, name: "مجموعة المراجعة", grade: "الثالث الثانوي", subject: "اللغة العربية", day: (weekday + 4) % 7, time: "13:00", duration: 90, monthlyFee: 450, color: "indigo" },
  ];
  const students: Student[] = names.map((name, i) => ({ id: i + 1, name, grade: groups[i % 6].grade, phone: `01${[0,1,2,5][i%4]}${String(78234100 + i * 147).padStart(8, "0")}`, monthlyFee: groups[i % 6].monthlyFee, notes: i % 5 === 0 ? "طالب مجتهد ويشارك بانتظام في الحصة." : "" }));
  const memberships = students.map((s, i) => ({ id: i + 1, studentId: s.id, groupId: (i % 6) + 1, fee: groups[i % 6].monthlyFee }));
  [1, 4, 8, 13].forEach((studentId, i) => memberships.push({ id: memberships.length + 1, studentId, groupId: 6, fee: groups[5].monthlyFee }));
  const attendance: Dataset["attendance"] = [];
  memberships.forEach((m, i) => [2, 9, 16, 23].forEach((offset, j) => attendance.push({ id: attendance.length + 1, studentId: m.studentId, groupId: m.groupId, lessonDate: dateOffset(offset), status: (i * 3 + j) % 11 === 0 ? "absent" : "present" })));
  const payments: Dataset["payments"] = [];
  for (let back = 5; back >= 0; back--) {
    const month = monthOffset(back);
    memberships.forEach((m, i) => {
      if ((i + back * 2) % 7 === 0 || (back === 0 && i % 8 === 3)) return;
      const partial = back === 0 && i % 9 === 2;
      const day = back === 0 ? Math.min(new Date().getDate(), 8 + i % 8) : 8 + i % 14;
      payments.push({ id: payments.length + 1, studentId: m.studentId, groupId: m.groupId, amount: partial ? Math.round(m.fee / 2) : m.fee, paymentDate: `${month}-${String(day).padStart(2,"0")}`, month, notes: "" });
    });
  }
  const expenses: Dataset["expenses"] = [];
  for (let back = 5; back >= 0; back--) {
    const month = monthOffset(back);
    const day = back === 0 ? Math.max(1, Math.min(new Date().getDate(), 5)) : 5;
    [["إيجار مكان الدروس", "الإيجار", 1200], ["طباعة مذكرات الطلاب", "الطباعة", 450 + back * 35], ["أدوات ومستلزمات تعليمية", "الأدوات التعليمية", 260 + back * 20], ["مواصلات", "المواصلات", 180 + back * 15]].forEach(([description, category, amount], i) => expenses.push({ id: expenses.length + 1, description: String(description), category: String(category), amount: Number(amount), expenseDate: `${month}-${String(Math.min(back === 0 ? new Date().getDate() : 28, day + i * 3)).padStart(2,"0")}` }));
  }
  const assignments: Dataset["assignments"] = [];
  groups.forEach((g, i) => {
    assignments.push({ id: assignments.length + 1, groupId: g.id, lessonDate: dateOffset(2), homework: i % 2 ? "حل تدريبات الوحدة الثانية من المذكرة" : "حل تدريبات الدرس ومراجعة القواعد", memorization: i % 2 ? "حفظ المفردات الجديدة ومعانيها" : "حفظ النص الأدبي من السطر الأول إلى الخامس" });
    assignments.push({ id: assignments.length + 1, groupId: g.id, lessonDate: dateOffset(9), homework: "مراجعة الدرس السابق وحل التقييم", memorization: "مراجعة ما تم حفظه في الحصة" });
  });
  const progress: Dataset["progress"] = [];
  assignments.forEach(a => memberships.filter(m => m.groupId === a.groupId).forEach((m, i) => progress.push({ id: progress.length + 1, assignmentId: a.id, studentId: m.studentId, homeworkStatus: i % 5 === 0 ? "not_completed" : i % 4 === 0 ? "partial" : "completed", memorizationStatus: i % 6 === 0 ? "not_completed" : i % 4 === 0 ? "partial" : "completed" })));
  return { students, groups, memberships, attendance, payments, expenses, assignments, progress };
}
