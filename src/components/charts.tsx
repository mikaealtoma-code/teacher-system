"use client";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { Dataset } from "@/lib/types";
import { categories, formatMoney, studentBalance } from "@/lib/types";

const COLORS = ["#3169e8", "#8a7ff0", "#31b6a0", "#ffb55b", "#ed7c94", "#7996c7"];
const monthLabel = (key: string) => new Intl.DateTimeFormat("ar-EG", { month: "short" }).format(new Date(`${key}-01T12:00:00`));
export function monthSeries(data: Dataset, count = 6, groupId = 0, year?: number) {
  const now = new Date();
  const months = year ? Array.from({ length: 12 }, (_, i) => `${year}-${String(i + 1).padStart(2, "0")}`) : Array.from({ length: count }, (_, i) => { const d = new Date(now.getFullYear(), now.getMonth() - count + i + 1, 1); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`; });
  return months.map(month => {
    const income = data.payments.filter(p => p.paymentDate.startsWith(month) && (!groupId || p.groupId === groupId)).reduce((n, p) => n + p.amount, 0);
    const expenses = data.expenses.filter(e => e.expenseDate.startsWith(month)).reduce((n, e) => n + e.amount, 0);
    return { month: monthLabel(month), income, expenses, profit: income - expenses };
  });
}
const chartTooltip = { border: "1px solid #e5eaf3", borderRadius: 12, boxShadow: "0 10px 30px #26385b12", fontFamily: "inherit", fontSize: 12, direction: "rtl" as const };

export function FinanceChart({ data, groupId = 0, year }: { data: Dataset; groupId?: number; year?: number }) {
  const series = monthSeries(data, 6, groupId, year);
  return <div className="finance-chart" dir="ltr"><ResponsiveContainer width="100%" height="100%"><AreaChart data={series} margin={{ top: 12, right: 12, left: -18, bottom: 0 }}>
    <defs><linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b73ee" stopOpacity={0.2}/><stop offset="95%" stopColor="#3b73ee" stopOpacity={0}/></linearGradient><linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#53cbb2" stopOpacity={0.12}/><stop offset="95%" stopColor="#53cbb2" stopOpacity={0}/></linearGradient></defs>
    <CartesianGrid stroke="#edf1f6" strokeDasharray="3 4" vertical={false}/><XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "#9aa7bb", fontSize: 11 }} dy={12}/><YAxis tickLine={false} axisLine={false} tick={{ fill: "#a4b0c1", fontSize: 10 }} tickFormatter={v => v >= 1000 ? `${Math.round(v / 1000)}k` : String(v)}/><Tooltip contentStyle={chartTooltip} formatter={(value) => [`${formatMoney(Number(value))} ج.م`, ""]}/>
    <Area type="monotone" name="الإيرادات" dataKey="income" stroke="#3471ed" strokeWidth={3} fill="url(#incomeGradient)" activeDot={{ r: 5, strokeWidth: 3, stroke: "#fff" }}/><Area type="monotone" name="المصروفات" dataKey="expenses" stroke="#53c7ad" strokeWidth={2.5} fill="url(#expenseGradient)" activeDot={{ r: 5, strokeWidth: 3, stroke: "#fff" }}/>
  </AreaChart></ResponsiveContainer></div>;
}

export function PaymentDonut({ data, month }: { data: Dataset; month: string }) {
  const statuses = data.students.map(s => studentBalance(data, s.id, month));
  const paid = statuses.filter(s => s.status === "paid").length;
  const partial = statuses.filter(s => s.status === "partial").length;
  const noSubscription = statuses.filter(s => s.due === 0).length;
  const unpaid = statuses.filter(s => s.due > 0 && s.status === "unpaid").length;
  const values = [{ name: "مدفوع", value: paid, color: "#3572ec" }, { name: "مدفوع جزئياً", value: partial, color: "#f8ba5a" }, { name: "غير مدفوع", value: unpaid, color: "#f09a8e" }, ...(noSubscription ? [{ name: "بدون اشتراك", value: noSubscription, color: "#e7edf6" }] : [])];
  return <div className="payment-donut-wrap"><div className="donut-chart"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={values.every(x => x.value === 0) ? [{ value: 1, color: "#edf1f7" }] : values} dataKey="value" innerRadius="72%" outerRadius="94%" paddingAngle={3} stroke="none" startAngle={90} endAngle={-270}>{values.every(x => x.value === 0) ? <Cell fill="#edf1f7"/> : values.map(v => <Cell key={v.name} fill={v.color}/>)}</Pie><Tooltip contentStyle={chartTooltip}/></PieChart></ResponsiveContainer><div className="donut-center"><strong>{statuses.length}</strong><span>إجمالي الطلاب</span></div></div><div className="donut-legend">{values.map(v => <div key={v.name}><span><i style={{ background: v.color }}/>{v.name}</span><b>{v.value} <small>طالب</small></b></div>)}</div></div>;
}

export function ProfitChart({ data, groupId = 0, year }: { data: Dataset; groupId?: number; year: number }) {
  return <div className="report-chart" dir="ltr"><ResponsiveContainer width="100%" height="100%"><BarChart data={monthSeries(data, 12, groupId, year)} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}><CartesianGrid stroke="#edf1f6" vertical={false} strokeDasharray="3 4"/><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#9aa7bb", fontSize: 10 }}/><YAxis axisLine={false} tickLine={false} tick={{ fill: "#9aa7bb", fontSize: 10 }}/><Tooltip contentStyle={chartTooltip} formatter={(value) => [`${formatMoney(Number(value))} ج.م`, "صافي الربح"]}/><Bar dataKey="profit" name="صافي الربح" fill="#567fec" radius={[5, 5, 0, 0]} maxBarSize={28}/></BarChart></ResponsiveContainer></div>;
}
export function GroupChart({ data, groupId = 0 }: { data: Dataset; groupId?: number }) {
  const list = data.groups.filter(g => !groupId || g.id === groupId).map(g => ({ name: g.name.replace("الصف ", ""), students: data.memberships.filter(m => m.groupId === g.id).length }));
  return <div className="report-chart" dir="ltr"><ResponsiveContainer width="100%" height="100%"><BarChart data={list} layout="vertical" margin={{ top: 5, right: 10, left: 30, bottom: 0 }}><CartesianGrid stroke="#edf1f6" horizontal={false}/><XAxis type="number" allowDecimals={false} axisLine={false} tickLine={false} tick={{ fill: "#9aa7bb", fontSize: 10 }}/><YAxis type="category" dataKey="name" width={100} axisLine={false} tickLine={false} tick={{ fill: "#65758e", fontSize: 10 }}/><Tooltip contentStyle={chartTooltip}/><Bar dataKey="students" name="عدد الطلاب" fill="#5f8bf2" radius={[0, 5, 5, 0]} maxBarSize={22}/></BarChart></ResponsiveContainer></div>;
}
export function ExpenseChart({ data, month }: { data: Dataset; month: string }) {
  const values = categories.map((name, i) => ({ name, value: data.expenses.filter(e => e.category === name && e.expenseDate.startsWith(month)).reduce((n, e) => n + e.amount, 0), color: COLORS[i] })).filter(x => x.value > 0);
  if (!values.length) return <div className="chart-empty">لا توجد مصروفات في هذا الشهر</div>;
  return <div className="expense-chart-wrap"><div className="small-pie"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={values} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="90%" paddingAngle={2} stroke="none">{values.map(v => <Cell key={v.name} fill={v.color}/>)}</Pie><Tooltip contentStyle={chartTooltip}/></PieChart></ResponsiveContainer></div><div className="expense-legend">{values.map(v => <div key={v.name}><span><i style={{ background: v.color }}/>{v.name}</span><b>{formatMoney(v.value)}</b></div>)}</div></div>;
}
export function AttendanceChart({ data, month, groupId = 0 }: { data: Dataset; month: string; groupId?: number }) {
  const records = data.attendance.filter(a => a.lessonDate.startsWith(month) && (!groupId || a.groupId === groupId));
  const present = records.filter(a => a.status === "present").length, absent = records.length - present;
  const values = [{ name: "حاضر", value: present, fill: "#47bda5" }, { name: "غائب", value: absent, fill: "#f29188" }];
  return <div className="mini-stat-bars">{values.map(v => <div key={v.name}><div><span><i style={{ background: v.fill }}/>{v.name}</span><b>{v.value} <small>سجل</small></b></div><div className="bar-track"><span style={{ width: `${records.length ? v.value / records.length * 100 : 0}%`, background: v.fill }}/></div></div>)}</div>;
}
