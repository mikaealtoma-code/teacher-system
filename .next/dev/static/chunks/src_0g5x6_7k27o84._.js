(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/charts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttendanceChart",
    ()=>AttendanceChart,
    "ExpenseChart",
    ()=>ExpenseChart,
    "FinanceChart",
    ()=>FinanceChart,
    "GroupChart",
    ()=>GroupChart,
    "PaymentDonut",
    ()=>PaymentDonut,
    "ProfitChart",
    ()=>ProfitChart,
    "monthSeries",
    ()=>monthSeries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
"use client";
;
;
;
const COLORS = [
    "#3169e8",
    "#8a7ff0",
    "#31b6a0",
    "#ffb55b",
    "#ed7c94",
    "#7996c7"
];
const monthLabel = (key)=>new Intl.DateTimeFormat("ar-EG", {
        month: "short"
    }).format(new Date(`${key}-01T12:00:00`));
function monthSeries(data, count = 6, groupId = 0, year) {
    const now = new Date();
    const months = year ? Array.from({
        length: 12
    }, (_, i)=>`${year}-${String(i + 1).padStart(2, "0")}`) : Array.from({
        length: count
    }, (_, i)=>{
        const d = new Date(now.getFullYear(), now.getMonth() - count + i + 1, 1);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    });
    return months.map((month)=>{
        const income = data.payments.filter((p)=>p.paymentDate.startsWith(month) && (!groupId || p.groupId === groupId)).reduce((n, p)=>n + p.amount, 0);
        const expenses = data.expenses.filter((e)=>e.expenseDate.startsWith(month)).reduce((n, e)=>n + e.amount, 0);
        return {
            month: monthLabel(month),
            income,
            expenses,
            profit: income - expenses
        };
    });
}
const chartTooltip = {
    border: "1px solid #e5eaf3",
    borderRadius: 12,
    boxShadow: "0 10px 30px #26385b12",
    fontFamily: "inherit",
    fontSize: 12,
    direction: "rtl"
};
function FinanceChart({ data, groupId = 0, year }) {
    const series = monthSeries(data, 6, groupId, year);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "finance-chart",
        dir: "ltr",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: series,
                margin: {
                    top: 12,
                    right: 12,
                    left: -18,
                    bottom: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "incomeGradient",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "5%",
                                        stopColor: "#3b73ee",
                                        stopOpacity: 0.2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 23,
                                        columnNumber: 75
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "95%",
                                        stopColor: "#3b73ee",
                                        stopOpacity: 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 23,
                                        columnNumber: 132
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "expenseGradient",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "5%",
                                        stopColor: "#53cbb2",
                                        stopOpacity: 0.12
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 23,
                                        columnNumber: 270
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "95%",
                                        stopColor: "#53cbb2",
                                        stopOpacity: 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 23,
                                        columnNumber: 328
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 23,
                                columnNumber: 205
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 23,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#edf1f6",
                        strokeDasharray: "3 4",
                        vertical: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "month",
                        tickLine: false,
                        axisLine: false,
                        tick: {
                            fill: "#9aa7bb",
                            fontSize: 11
                        },
                        dy: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 24,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        tickLine: false,
                        axisLine: false,
                        tick: {
                            fill: "#a4b0c1",
                            fontSize: 10
                        },
                        tickFormatter: (v)=>v >= 1000 ? `${Math.round(v / 1000)}k` : String(v)
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 24,
                        columnNumber: 184
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        contentStyle: chartTooltip,
                        formatter: (value)=>[
                                `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(Number(value))} ج.م`,
                                ""
                            ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 24,
                        columnNumber: 339
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                        type: "monotone",
                        name: "الإيرادات",
                        dataKey: "income",
                        stroke: "#3471ed",
                        strokeWidth: 3,
                        fill: "url(#incomeGradient)",
                        activeDot: {
                            r: 5,
                            strokeWidth: 3,
                            stroke: "#fff"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 25,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                        type: "monotone",
                        name: "المصروفات",
                        dataKey: "expenses",
                        stroke: "#53c7ad",
                        strokeWidth: 2.5,
                        fill: "url(#expenseGradient)",
                        activeDot: {
                            r: 5,
                            strokeWidth: 3,
                            stroke: "#fff"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 25,
                        columnNumber: 176
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts.tsx",
                lineNumber: 22,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/charts.tsx",
            lineNumber: 22,
            columnNumber: 51
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/charts.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c = FinanceChart;
function PaymentDonut({ data, month }) {
    const statuses = data.students.map((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentBalance"])(data, s.id, month));
    const paid = statuses.filter((s)=>s.status === "paid").length;
    const partial = statuses.filter((s)=>s.status === "partial").length;
    const noSubscription = statuses.filter((s)=>s.due === 0).length;
    const unpaid = statuses.filter((s)=>s.due > 0 && s.status === "unpaid").length;
    const values = [
        {
            name: "مدفوع",
            value: paid,
            color: "#3572ec"
        },
        {
            name: "مدفوع جزئياً",
            value: partial,
            color: "#f8ba5a"
        },
        {
            name: "غير مدفوع",
            value: unpaid,
            color: "#f09a8e"
        },
        ...noSubscription ? [
            {
                name: "بدون اشتراك",
                value: noSubscription,
                color: "#e7edf6"
            }
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "payment-donut-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "donut-chart",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: "100%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                    data: values.every((x)=>x.value === 0) ? [
                                        {
                                            value: 1,
                                            color: "#edf1f7"
                                        }
                                    ] : values,
                                    dataKey: "value",
                                    innerRadius: "72%",
                                    outerRadius: "94%",
                                    paddingAngle: 3,
                                    stroke: "none",
                                    startAngle: 90,
                                    endAngle: -270,
                                    children: values.every((x)=>x.value === 0) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: "#edf1f7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 36,
                                        columnNumber: 373
                                    }, this) : values.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                            fill: v.color
                                        }, v.name, false, {
                                            fileName: "[project]/src/components/charts.tsx",
                                            lineNumber: 36,
                                            columnNumber: 414
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/charts.tsx",
                                    lineNumber: 36,
                                    columnNumber: 133
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    contentStyle: chartTooltip
                                }, void 0, false, {
                                    fileName: "[project]/src/components/charts.tsx",
                                    lineNumber: 36,
                                    columnNumber: 457
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/charts.tsx",
                            lineNumber: 36,
                            columnNumber: 123
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 36,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "donut-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: statuses.length
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 36,
                                columnNumber: 558
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "إجمالي الطلاب"
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 36,
                                columnNumber: 592
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 36,
                        columnNumber: 528
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts.tsx",
                lineNumber: 36,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "donut-legend",
                children: values.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        style: {
                                            background: v.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 36,
                                        columnNumber: 701
                                    }, this),
                                    v.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 36,
                                columnNumber: 695
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    v.value,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "طالب"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 36,
                                        columnNumber: 765
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 36,
                                columnNumber: 752
                            }, this)
                        ]
                    }, v.name, true, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 36,
                        columnNumber: 677
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/charts.tsx",
                lineNumber: 36,
                columnNumber: 630
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/charts.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_c1 = PaymentDonut;
function ProfitChart({ data, groupId = 0, year }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "report-chart",
        dir: "ltr",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: monthSeries(data, 12, groupId, year),
                margin: {
                    top: 10,
                    right: 0,
                    left: -20,
                    bottom: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#edf1f6",
                        vertical: false,
                        strokeDasharray: "3 4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 40,
                        columnNumber: 205
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "month",
                        axisLine: false,
                        tickLine: false,
                        tick: {
                            fill: "#9aa7bb",
                            fontSize: 10
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 40,
                        columnNumber: 277
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        axisLine: false,
                        tickLine: false,
                        tick: {
                            fill: "#9aa7bb",
                            fontSize: 10
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 40,
                        columnNumber: 376
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        contentStyle: chartTooltip,
                        formatter: (value)=>[
                                `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(Number(value))} ج.م`,
                                "صافي الربح"
                            ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 40,
                        columnNumber: 459
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "profit",
                        name: "صافي الربح",
                        fill: "#567fec",
                        radius: [
                            5,
                            5,
                            0,
                            0
                        ],
                        maxBarSize: 28
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 40,
                        columnNumber: 572
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts.tsx",
                lineNumber: 40,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/charts.tsx",
            lineNumber: 40,
            columnNumber: 50
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/charts.tsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
_c2 = ProfitChart;
function GroupChart({ data, groupId = 0 }) {
    const list = data.groups.filter((g)=>!groupId || g.id === groupId).map((g)=>({
            name: g.name.replace("الصف ", ""),
            students: data.memberships.filter((m)=>m.groupId === g.id).length
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "report-chart",
        dir: "ltr",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: list,
                layout: "vertical",
                margin: {
                    top: 5,
                    right: 10,
                    left: 30,
                    bottom: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#edf1f6",
                        horizontal: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 44,
                        columnNumber: 190
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        type: "number",
                        allowDecimals: false,
                        axisLine: false,
                        tickLine: false,
                        tick: {
                            fill: "#9aa7bb",
                            fontSize: 10
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 44,
                        columnNumber: 242
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        type: "category",
                        dataKey: "name",
                        width: 100,
                        axisLine: false,
                        tickLine: false,
                        tick: {
                            fill: "#65758e",
                            fontSize: 10
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 44,
                        columnNumber: 361
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        contentStyle: chartTooltip
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 44,
                        columnNumber: 487
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "students",
                        name: "عدد الطلاب",
                        fill: "#5f8bf2",
                        radius: [
                            0,
                            5,
                            5,
                            0
                        ],
                        maxBarSize: 22
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 44,
                        columnNumber: 525
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts.tsx",
                lineNumber: 44,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/charts.tsx",
            lineNumber: 44,
            columnNumber: 50
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/charts.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
_c3 = GroupChart;
function ExpenseChart({ data, month }) {
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((name, i)=>({
            name,
            value: data.expenses.filter((e)=>e.category === name && e.expenseDate.startsWith(month)).reduce((n, e)=>n + e.amount, 0),
            color: COLORS[i]
        })).filter((x)=>x.value > 0);
    if (!values.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chart-empty",
        children: "لا توجد مصروفات في هذا الشهر"
    }, void 0, false, {
        fileName: "[project]/src/components/charts.tsx",
        lineNumber: 48,
        columnNumber: 30
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "expense-chart-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "small-pie",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                data: values,
                                dataKey: "value",
                                nameKey: "name",
                                innerRadius: "60%",
                                outerRadius: "90%",
                                paddingAngle: 2,
                                stroke: "none",
                                children: values.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: v.color
                                    }, v.name, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 49,
                                        columnNumber: 265
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 49,
                                columnNumber: 131
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: chartTooltip
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 49,
                                columnNumber: 308
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 49,
                        columnNumber: 121
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/charts.tsx",
                    lineNumber: 49,
                    columnNumber: 73
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/charts.tsx",
                lineNumber: 49,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "expense-legend",
                children: values.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        style: {
                                            background: v.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 49,
                                        columnNumber: 458
                                    }, this),
                                    v.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 49,
                                columnNumber: 452
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(v.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 49,
                                columnNumber: 509
                            }, this)
                        ]
                    }, v.name, true, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 49,
                        columnNumber: 434
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/charts.tsx",
                lineNumber: 49,
                columnNumber: 385
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/charts.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
_c4 = ExpenseChart;
function AttendanceChart({ data, month, groupId = 0 }) {
    const records = data.attendance.filter((a)=>a.lessonDate.startsWith(month) && (!groupId || a.groupId === groupId));
    const present = records.filter((a)=>a.status === "present").length, absent = records.length - present;
    const values = [
        {
            name: "حاضر",
            value: present,
            fill: "#47bda5"
        },
        {
            name: "غائب",
            value: absent,
            fill: "#f29188"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mini-stat-bars",
        children: values.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        style: {
                                            background: v.fill
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 55,
                                        columnNumber: 88
                                    }, this),
                                    v.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 55,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    v.value,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "سجل"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts.tsx",
                                        lineNumber: 55,
                                        columnNumber: 151
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 55,
                                columnNumber: 138
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 55,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bar-track",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: `${records.length ? v.value / records.length * 100 : 0}%`,
                                background: v.fill
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/charts.tsx",
                            lineNumber: 55,
                            columnNumber: 206
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 55,
                        columnNumber: 179
                    }, this)
                ]
            }, v.name, true, {
                fileName: "[project]/src/components/charts.tsx",
                lineNumber: 55,
                columnNumber: 59
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/charts.tsx",
        lineNumber: 55,
        columnNumber: 10
    }, this);
}
_c5 = AttendanceChart;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "FinanceChart");
__turbopack_context__.k.register(_c1, "PaymentDonut");
__turbopack_context__.k.register(_c2, "ProfitChart");
__turbopack_context__.k.register(_c3, "GroupChart");
__turbopack_context__.k.register(_c4, "ExpenseChart");
__turbopack_context__.k.register(_c5, "AttendanceChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeacherDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-exclamation-point.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.mjs [app-client] (ecmascript) <export default as CalendarCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.mjs [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-down.mjs [app-client] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.mjs [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.mjs [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.mjs [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt-text.mjs [app-client] (ecmascript) <export default as ReceiptText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.mjs [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.mjs [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.mjs [app-client] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useApp() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (!context) throw new Error("Missing dashboard context");
    return context;
}
_s(useApp, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const nav = [
    {
        view: "dashboard",
        label: "لوحة التحكم",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        view: "students",
        label: "الطلاب",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        view: "groups",
        label: "المجموعات",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"]
    },
    {
        view: "attendance",
        label: "الحضور والغياب",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"]
    },
    {
        view: "payments",
        label: "المدفوعات",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
    },
    {
        view: "expenses",
        label: "المصروفات",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__["ReceiptText"]
    },
    {
        view: "homework",
        label: "الواجب والحفظ",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        view: "analytics",
        label: "التقارير والتحليلات",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    }
];
const pageNames = {
    dashboard: "لوحة التحكم",
    students: "إدارة الطلاب",
    groups: "إدارة المجموعات",
    group: "تفاصيل المجموعة",
    attendance: "الحضور والغياب",
    payments: "المدفوعات والاشتراكات",
    expenses: "المصروفات",
    homework: "الواجب والحفظ",
    analytics: "التقارير والتحليلات",
    settings: "الإعدادات"
};
const money = (n)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(n)} ج.م`;
const timeLabel = (t)=>{
    const [hour, minute] = t.split(":").map(Number);
    return `${hour % 12 || 12}:${String(minute).padStart(2, "0")} ${hour >= 12 ? "م" : "ص"}`;
};
const monthLabel = (month)=>{
    const d = new Date(`${month}-01T12:00:00`);
    return Number.isNaN(d.getTime()) ? month : new Intl.DateTimeFormat("ar-EG", {
        month: "long",
        year: "numeric"
    }).format(d);
};
const shortName = (name)=>name.trim().charAt(0);
const groupColor = (color)=>`tone-${color || "blue"}`;
function statusInfo(status, due = 1) {
    if (!due) return {
        label: "بدون اشتراك",
        className: "status-neutral"
    };
    if (status === "paid") return {
        label: "مدفوع",
        className: "status-paid"
    };
    if (status === "partial") return {
        label: "مدفوع جزئياً",
        className: "status-partial"
    };
    return {
        label: "غير مدفوع",
        className: "status-unpaid"
    };
}
function Status({ status, due = 1 }) {
    const info = statusInfo(status, due);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `status ${info.className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 25,
                columnNumber: 163
            }, this),
            info.label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 25,
        columnNumber: 118
    }, this);
}
_c = Status;
function Avatar({ name, index = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `avatar avatar-${index % 5}`,
        children: shortName(name)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 26,
        columnNumber: 81
    }, this);
}
_c1 = Avatar;
function Empty({ title, text, icon: Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "empty-state",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 27,
                    columnNumber: 181
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 27,
                columnNumber: 175
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 27,
                columnNumber: 205
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 27,
                columnNumber: 229
            }, this),
            action
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 27,
        columnNumber: 146
    }, this);
}
_c2 = Empty;
function PageHeading({ eyebrow, title, description, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 28,
                        columnNumber: 201
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 28,
                        columnNumber: 242
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 28,
                        columnNumber: 258
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 28,
                columnNumber: 184
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heading-actions",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 28,
                columnNumber: 284
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 28,
        columnNumber: 154
    }, this);
}
_c3 = PageHeading;
function SectionHeading({ title, subtitle, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 29,
                        columnNumber: 163
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 29,
                        columnNumber: 192
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 29,
                columnNumber: 158
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-actions",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 29,
                columnNumber: 216
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 29,
        columnNumber: 125
    }, this);
}
_c4 = SectionHeading;
function MonthInput({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "month-control",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                size: 15
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 30,
                columnNumber: 134
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                "aria-label": "اختيار الشهر",
                type: "month",
                value: value,
                onChange: (e)=>e.target.value && onChange(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 30,
                columnNumber: 159
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 30,
        columnNumber: 101
    }, this);
}
_c5 = MonthInput;
function downloadFile(filename, content, type) {
    const url = URL.createObjectURL(new Blob([
        content
    ], {
        type
    }));
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, (c)=>({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[c] || c);
}
function TeacherDashboard({ initialData, initialAuthenticated, demoCredentials }) {
    _s1();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [authenticated, setAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialAuthenticated);
    const [showDemoCredentials, setShowDemoCredentials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(demoCredentials);
    const [view, setViewState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [groupId, setGroupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentMonth"])());
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebar, setSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bell, setBell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeacherDashboard.useEffect": ()=>{
            const shortcut = {
                "TeacherDashboard.useEffect.shortcut": (event)=>{
                    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
                        event.preventDefault();
                        if (window.innerWidth <= 650) {
                            setViewState("students");
                            window.setTimeout({
                                "TeacherDashboard.useEffect.shortcut": ()=>document.querySelector('.input-search input')?.focus()
                            }["TeacherDashboard.useEffect.shortcut"], 50);
                        } else searchRef.current?.focus();
                    }
                }
            }["TeacherDashboard.useEffect.shortcut"];
            window.addEventListener("keydown", shortcut);
            return ({
                "TeacherDashboard.useEffect": ()=>window.removeEventListener("keydown", shortcut)
            })["TeacherDashboard.useEffect"];
        }
    }["TeacherDashboard.useEffect"], []);
    const notify = (text, error = false)=>{
        setToast({
            text,
            error
        });
        window.setTimeout(()=>setToast(null), 4000);
    };
    const setView = (next)=>{
        setViewState(next);
        setSidebar(false);
        setBell(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const open = (next, protect = false)=>{
        if (protect && !authenticated) {
            setModal({
                type: "login"
            });
            notify("سجّل الدخول أولاً لحفظ التغييرات");
            return;
        }
        setModal(next);
    };
    const refresh = async ()=>{
        const response = await fetch("/api/data", {
            cache: "no-store"
        });
        if (!response.ok) throw new Error("تعذر تحديث البيانات");
        setData(await response.json());
    };
    const onAction = async (action, payload)=>{
        if (!authenticated) {
            setModal({
                type: "login"
            });
            return false;
        }
        setBusy(true);
        const previous = data;
        const collection = {
            deleteStudent: "students",
            deleteGroup: "groups",
            deleteExpense: "expenses",
            deletePayment: "payments",
            deleteAssignment: "assignments"
        };
        if (collection[action]) {
            const key = collection[action];
            setData((old)=>({
                    ...old,
                    [key]: old[key].filter((item)=>item.id !== Number(payload.id))
                }));
        }
        try {
            const response = await fetch("/api/actions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action,
                    ...payload
                })
            });
            const result = await response.json();
            if (response.status === 401) {
                setAuthenticated(false);
                setData((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeDemoData"])());
                setModal({
                    type: "login"
                });
                notify("انتهت الجلسة، سجّل الدخول مجدداً", true);
                return false;
            }
            if (!response.ok) throw new Error(result.error || "تعذر حفظ البيانات");
            await refresh();
            notify(action.startsWith("delete") ? "تم حذف السجل بنجاح" : "تم حفظ البيانات بنجاح");
            return true;
        } catch (error) {
            setData(previous);
            notify(error instanceof Error ? error.message : "حدث خطأ غير متوقع", true);
            return false;
        } finally{
            setBusy(false);
        }
    };
    const remove = (action, id, message)=>{
        if (!authenticated) {
            open({
                type: "login"
            });
            return;
        }
        if (window.confirm(message)) void onAction(action, {
            id
        });
    };
    const onLogin = async (username, password)=>{
        setBusy(true);
        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "login",
                    username,
                    password
                })
            });
            const result = await response.json();
            if (!response.ok) return result.error || "تعذر تسجيل الدخول";
            await refresh();
            setAuthenticated(true);
            setModal(null);
            notify("أهلاً بعودتك، مستر ميخائيل");
            return null;
        } catch  {
            return "تعذر الاتصال بالخادم";
        } finally{
            setBusy(false);
        }
    };
    const logout = async ()=>{
        try {
            await fetch("/api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "logout"
                })
            });
        } catch  {}
        setAuthenticated(false);
        setData((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeDemoData"])());
        setModal(null);
        setView("dashboard");
        notify("تم تسجيل الخروج");
    };
    const onPassword = async (oldPassword, newPassword)=>{
        setBusy(true);
        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "password",
                    oldPassword,
                    newPassword
                })
            });
            const result = await response.json();
            if (!response.ok) return result.error;
            setShowDemoCredentials(false);
            setAuthenticated(false);
            setData((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeDemoData"])());
            setModal(null);
            setView("dashboard");
            notify("تم تغيير كلمة المرور. سجّل الدخول مجدداً.");
            return null;
        } catch  {
            return "تعذر الاتصال بالخادم";
        } finally{
            setBusy(false);
        }
    };
    const downloadBackup = ()=>{
        downloadFile(`mikhail-backup-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["today"])()}.json`, JSON.stringify({
            version: 1,
            exportedAt: new Date().toISOString(),
            data
        }, null, 2), "application/json;charset=utf-8");
        notify("تم تنزيل النسخة الاحتياطية");
    };
    const restoreBackup = async (file)=>{
        if (!authenticated) {
            open({
                type: "login"
            });
            return;
        }
        if (file.size > 15 * 1024 * 1024) {
            notify("حجم النسخة الاحتياطية أكبر من 15 ميجابايت", true);
            return;
        }
        if (!window.confirm("ستستبدل الاستعادة جميع البيانات الحالية بالنسخة المختارة. يُنصح بتنزيل نسخة احتياطية أولاً. هل تريد المتابعة؟")) return;
        try {
            const backup = JSON.parse(await file.text());
            if (!backup || backup.version !== 1 || !backup.data) throw new Error("ملف النسخة الاحتياطية غير صالح");
            if (await onAction("restoreBackup", {
                backup
            })) notify("تمت استعادة النسخة الاحتياطية بنجاح");
        } catch  {
            notify("تعذر قراءة النسخة الاحتياطية. تأكد من اختيار ملف JSON صحيح.", true);
        }
    };
    const exportCSV = ()=>{
        const rows = [
            [
                "اسم الطالب",
                "الصف الدراسي",
                "الهاتف",
                "المجموعات",
                "الاشتراك المستحق",
                "المدفوع",
                "المتبقي",
                "الحالة",
                "ملاحظات"
            ]
        ];
        data.students.forEach((s)=>{
            const balance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentBalance"])(data, s.id, month);
            rows.push([
                s.name,
                s.grade,
                s.phone,
                data.memberships.filter((m)=>m.studentId === s.id).map((m)=>data.groups.find((g)=>g.id === m.groupId)?.name || "").join(" / "),
                balance.due,
                balance.paid,
                balance.remaining,
                statusInfo(balance.status, balance.due).label,
                s.notes
            ]);
        });
        const csv = rows.map((r)=>r.map((v)=>{
                const value = String(v);
                const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
                return `"${safe.replace(/"/g, '""')}"`;
            }).join(",")).join("\r\n");
        downloadFile(`students-${month}.csv`, `\ufeff${csv}`, "text/csv;charset=utf-8");
        notify("تم تنزيل ملف متوافق مع Excel");
    };
    const printReport = ()=>{
        const income = data.payments.filter((p)=>p.paymentDate.startsWith(month)).reduce((n, p)=>n + p.amount, 0);
        const expenses = data.expenses.filter((e)=>e.expenseDate.startsWith(month)).reduce((n, e)=>n + e.amount, 0);
        const popup = window.open("", "_blank");
        if (!popup) {
            notify("يرجى السماح بالنوافذ المنبثقة للطباعة", true);
            return;
        }
        const rows = data.students.map((s)=>{
            const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentBalance"])(data, s.id, month);
            return `<tr><td>${escapeHTML(s.name)}</td><td>${escapeHTML(s.grade)}</td><td>${escapeHTML(statusInfo(b.status, b.due).label)}</td><td>${b.remaining}</td></tr>`;
        }).join("");
        popup.document.write(`<!doctype html><html dir="rtl" lang="ar"><head><meta charset="utf-8"><title>تقرير مستر ميخائيل</title><style>body{font-family:Arial,sans-serif;padding:36px;color:#1b2c48}h1{color:#255dd9}table{border-collapse:collapse;width:100%;margin-top:25px}th,td{border:1px solid #ddd;padding:10px;text-align:right}th{background:#eef4ff}.stats{display:flex;gap:30px;margin:25px 0}small{color:#667}</style></head><body><h1>تقرير إدارة الدروس</h1><p>مستر ميخائيل توما — ${escapeHTML(monthLabel(month))}</p><div class="stats"><div>الإيرادات: <b>${income} ج.م</b></div><div>المصروفات: <b>${expenses} ج.م</b></div><div>صافي الربح: <b>${income - expenses} ج.م</b></div></div><h2>حالة اشتراكات الطلاب</h2><table><thead><tr><th>الطالب</th><th>الصف</th><th>الحالة</th><th>المتبقي</th></tr></thead><tbody>${rows}</tbody></table><p><small>تم إنشاء التقرير من لوحة إدارة الدروس.</small></p><script>window.onload=function(){window.print()}<\/script></body></html>`);
        popup.document.close();
    };
    const context = {
        data,
        month,
        setMonth,
        search,
        setSearch,
        setView,
        groupId,
        setGroupId,
        open,
        remove,
        downloadBackup,
        restoreBackup,
        exportCSV,
        printReport,
        authenticated,
        busy,
        logout: ()=>{
            void logout();
        }
    };
    const unpaid = data.students.filter((s)=>{
        const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentBalance"])(data, s.id, month);
        return b.due > 0 && b.remaining > 0;
    }).length;
    const todaysGroups = data.groups.filter((g)=>g.day === new Date().getDay()).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: context,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "app-shell",
            dir: "rtl",
            children: [
                sidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sidebar-backdrop",
                    onClick: ()=>setSidebar(false)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: `sidebar ${sidebar ? "sidebar-open" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "brand",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "brand-mark",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                        size: 25
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 71,
                                        columnNumber: 118
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 71,
                                    columnNumber: 90
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "مستر ميخائيل توما"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 71,
                                            columnNumber: 155
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "TEACHER DASHBOARD"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 71,
                                            columnNumber: 189
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 71,
                                    columnNumber: 150
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "sidebar-close icon-button",
                                    onClick: ()=>setSidebar(false),
                                    "aria-label": "إغلاق القائمة",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 71,
                                        columnNumber: 332
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 71,
                                    columnNumber: 225
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 71,
                            columnNumber: 67
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sidebar-scroll",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-label",
                                    children: "القائمة الرئيسية"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 72,
                                    columnNumber: 39
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "navigation",
                                    children: nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `nav-link ${view === item.view || view === "group" && item.view === "groups" ? "active" : ""}`,
                                            onClick: ()=>setView(item.view),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    size: 19,
                                                    strokeWidth: 1.8
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 301
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 341
                                                }, this),
                                                item.view === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "nav-active-dot"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 396
                                                }, this)
                                            ]
                                        }, item.view, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 72,
                                            columnNumber: 133
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 72,
                                    columnNumber: 88
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-label nav-label-second",
                                    children: "الحساب"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 72,
                                    columnNumber: 448
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "navigation",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `nav-link ${view === "settings" ? "active" : ""}`,
                                            onClick: ()=>setView("settings"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                    size: 19
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 638
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "الإعدادات"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 660
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 72,
                                            columnNumber: 532
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "nav-link",
                                            onClick: downloadBackup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    size: 19
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 745
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "نسخة احتياطية"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 766
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 72,
                                            columnNumber: 691
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 72,
                                    columnNumber: 504
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 72,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sidebar-bottom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sidebar-tip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tip-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 73,
                                                columnNumber: 94
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 73,
                                            columnNumber: 68
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "كل شيء في مكان واحد"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 73,
                                            columnNumber: 121
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "نظّم دروسك وركّز على ما يهمك."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 73,
                                            columnNumber: 157
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setView("analytics"),
                                            children: [
                                                "استكشف التقارير ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 254
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 73,
                                            columnNumber: 193
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 73,
                                    columnNumber: 39
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "sidebar-profile",
                                    onClick: ()=>authenticated ? setView("settings") : open({
                                            type: "login"
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "teacher-avatar",
                                            children: "MT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 73,
                                            columnNumber: 407
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "مستر ميخائيل توما"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 455
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: authenticated ? "حساب المعلم" : "الوضع التجريبي"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 489
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 73,
                                            columnNumber: 449
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 73,
                                            columnNumber: 561
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 73,
                                    columnNumber: 293
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 73,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 71,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "workspace",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "topbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "topbar-title",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "mobile-menu icon-button",
                                            onClick: ()=>setSidebar(true),
                                            "aria-label": "فتح القائمة",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 75,
                                                columnNumber: 191
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 75,
                                            columnNumber: 89
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "breadcrumb-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 75,
                                                columnNumber: 251
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 75,
                                            columnNumber: 217
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "breadcrumb-muted",
                                            children: "الرئيسية"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 75,
                                            columnNumber: 286
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 14,
                                            className: "breadcrumb-chevron"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 75,
                                            columnNumber: 336
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: pageNames[view]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 75,
                                            columnNumber: 391
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 75,
                                    columnNumber: 59
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "topbar-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "global-search",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 494
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: searchRef,
                                                    "aria-label": "البحث عن طالب",
                                                    placeholder: "ابحث عن طالب، مجموعة...",
                                                    value: search,
                                                    onChange: (e)=>{
                                                        setSearch(e.target.value);
                                                        if (e.target.value) setView("students");
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 513
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    children: "⌘ K"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 705
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 75,
                                            columnNumber: 463
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "notification-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "top-icon",
                                                    onClick: ()=>setBell(!bell),
                                                    "aria-label": "الإشعارات",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                            size: 19
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 843
                                                        }, this),
                                                        (unpaid > 0 || todaysGroups > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 897
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 760
                                                }, this),
                                                bell && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "notification-popover",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "نظرة سريعة"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 958
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setView("payments");
                                                                setBell(false);
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "notification-dot orange"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 1050
                                                                }, this),
                                                                " ",
                                                                unpaid,
                                                                " طلاب لديهم اشتراكات متبقية"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 985
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setView("groups");
                                                                setBell(false);
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "notification-dot blue"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 1201
                                                                }, this),
                                                                " ",
                                                                todaysGroups,
                                                                " مجموعات في جدول اليوم"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 1138
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 920
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 75,
                                            columnNumber: 725
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "topbar-divider"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 75,
                                            columnNumber: 1301
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "header-profile",
                                            onClick: ()=>authenticated ? setView("settings") : open({
                                                    type: "login"
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "teacher-avatar",
                                                    children: "MT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 1448
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "مستر ميخائيل"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 1496
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: authenticated ? "المعلم" : "معاينة تجريبية"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 1525
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 1490
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 1592
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 75,
                                            columnNumber: 1335
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 75,
                                    columnNumber: 431
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 75,
                            columnNumber: 32
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "main-content",
                            children: [
                                !authenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "demo-strip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "demo-dot"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 90
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "أنت تتصفح بيانات تجريبية"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 118
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "سجّل الدخول للوصول إلى بياناتك وحفظ التغييرات."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 159
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 76,
                                            columnNumber: 85
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>open({
                                                    type: "login"
                                                }),
                                            children: [
                                                "تسجيل الدخول ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 285
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 76,
                                            columnNumber: 224
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 76,
                                    columnNumber: 57
                                }, this),
                                view === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardView, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 34
                                }, this),
                                view === "students" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentsView, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 75
                                }, this),
                                view === "groups" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GroupsView, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 113
                                }, this),
                                view === "group" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GroupView, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 148
                                }, this),
                                view === "attendance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttendanceView, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 187
                                }, this),
                                view === "payments" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentsView, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 229
                                }, this),
                                view === "expenses" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpensesView, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 269
                                }, this),
                                view === "homework" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeworkView, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 309
                                }, this),
                                view === "analytics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnalyticsView, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 350
                                }, this),
                                view === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsView, {}, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 391
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 76,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            className: "footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " مستر ميخائيل توما. صُنع لتنظيم يومك بشكل أفضل."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 78,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "لوحة إدارة الدروس ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 78,
                                            columnNumber: 153
                                        }, this),
                                        " الإصدار ١.٠"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 78,
                                    columnNumber: 129
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 78,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 75,
                    columnNumber: 5
                }, this),
                modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalRenderer"], {
                    modal: modal,
                    data: data,
                    month: month,
                    busy: busy,
                    demoCredentials: showDemoCredentials,
                    onClose: ()=>setModal(null),
                    onOpen: open,
                    onAction: onAction,
                    onLogin: onLogin,
                    onPassword: onPassword
                }, `${modal.type}-${"item" in modal ? modal.item?.id || "new" : "studentId" in modal ? modal.studentId || "new" : "groupId" in modal ? modal.groupId || "new" : "assignmentId" in modal ? modal.assignmentId : ""}`, false, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 79,
                    columnNumber: 15
                }, this),
                toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `toast ${toast.error ? "toast-error" : ""}`,
                    children: [
                        toast.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 80,
                            columnNumber: 91
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 80,
                            columnNumber: 118
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: toast.text
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 80,
                            columnNumber: 144
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setToast(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 80,
                                columnNumber: 208
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 80,
                            columnNumber: 169
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 80,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard.tsx",
            lineNumber: 69,
            columnNumber: 47
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 69,
        columnNumber: 10
    }, this);
}
_s1(TeacherDashboard, "SE1qhVntgmc/FkREslGSeLCNLqw=");
_c6 = TeacherDashboard;
function DashboardView() {
    _s2();
    const { data, month, setMonth, setView, setGroupId, open } = useApp();
    const income = data.payments.filter((p)=>p.paymentDate.startsWith(month)).reduce((n, p)=>n + p.amount, 0);
    const expenses = data.expenses.filter((e)=>e.expenseDate.startsWith(month)).reduce((n, e)=>n + e.amount, 0);
    const records = data.attendance.filter((a)=>a.lessonDate.startsWith(month));
    const present = records.filter((a)=>a.status === "present").length;
    const attendanceRate = records.length ? Math.round(present / records.length * 100) : 0;
    const groupsToday = data.groups.filter((g)=>g.day === new Date().getDay()).sort((a, b)=>a.time.localeCompare(b.time));
    const stats = [
        {
            label: "إجمالي الطلاب",
            value: String(data.students.length),
            sub: "طالب مسجل",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"],
            color: "blue"
        },
        {
            label: "المجموعات",
            value: String(data.groups.length),
            sub: "مجموعة دراسية",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"],
            color: "purple"
        },
        {
            label: "إيرادات الشهر",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(income),
            unit: "ج.م",
            sub: "المدفوعات المحصّلة",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: "green"
        },
        {
            label: "مصروفات الشهر",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(expenses),
            unit: "ج.م",
            sub: "إجمالي المصروفات",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
            color: "orange"
        },
        {
            label: "صافي الربح",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(income - expenses),
            unit: "ج.م",
            sub: "بعد خصم المصروفات",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
            color: "indigo"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcome-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "eyebrow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 94,
                                        columnNumber: 71
                                    }, this),
                                    " نظرة عامة على نشاطك"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 94,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: [
                                    "أهلاً بك، مستر ميخائيل ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "👋"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 94,
                                        columnNumber: 155
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 94,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "كل ما تحتاجه لإدارة دروسك في مكان واحد. نتمنى لك يوماً موفقاً!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 94,
                                columnNumber: 175
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 94,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "welcome-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthInput, {
                                value: month,
                                onChange: setMonth
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 94,
                                columnNumber: 283
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button button-primary",
                                onClick: ()=>open({
                                        type: "student"
                                    }, true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 94,
                                        columnNumber: 420
                                    }, this),
                                    " إضافة طالب"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 94,
                                columnNumber: 330
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 94,
                        columnNumber: 250
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 94,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats-grid",
                children: stats.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 95,
                                        columnNumber: 122
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `stat-icon ${item.color}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            size: 20,
                                            strokeWidth: 1.9
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 95,
                                            columnNumber: 190
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 95,
                                        columnNumber: 147
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 95,
                                columnNumber: 96
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                children: [
                                    item.value,
                                    " ",
                                    item.unit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: item.unit
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 95,
                                        columnNumber: 297
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 95,
                                columnNumber: 242
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-sub",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `tiny-dot ${item.color}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 95,
                                        columnNumber: 356
                                    }, this),
                                    item.sub
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 95,
                                columnNumber: 330
                            }, this)
                        ]
                    }, item.label, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 95,
                        columnNumber: 52
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-grid top-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card finance-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "نظرة على الحسابات",
                                subtitle: "تابع الإيرادات والمصروفات خلال الأشهر الماضية",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "subtle-pill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 96,
                                            columnNumber: 214
                                        }, this),
                                        " آخر ٦ أشهر"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 96,
                                    columnNumber: 184
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 96,
                                columnNumber: 85
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chart-legend",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "blue-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 96,
                                                columnNumber: 310
                                            }, this),
                                            " الإيرادات"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 304
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "green-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 96,
                                                columnNumber: 358
                                            }, this),
                                            " المصروفات"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 352
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 96,
                                columnNumber: 274
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FinanceChart"], {
                                data: data
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 96,
                                columnNumber: 407
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 96,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card subscriptions-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "حالة الاشتراكات",
                                subtitle: `ملخص المدفوعات · ${monthLabel(month)}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "dots-button",
                                    onClick: ()=>setView("payments"),
                                    "aria-label": "عرض المدفوعات",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 675
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 96,
                                    columnNumber: 580
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 96,
                                columnNumber: 489
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentDonut"], {
                                data: data,
                                month: month
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 96,
                                columnNumber: 728
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "card-bottom-link",
                                onClick: ()=>setView("payments"),
                                children: [
                                    "عرض تفاصيل المدفوعات ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 863
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 96,
                                columnNumber: 769
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 96,
                        columnNumber: 444
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 96,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-grid bottom-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card schedule-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "حصص اليوم",
                                subtitle: "جدول المجموعات والمواعيد القادمة",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-link",
                                    onClick: ()=>setView("groups"),
                                    children: [
                                        "عرض المجموعات ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 97,
                                            columnNumber: 245
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 167
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 89
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "schedule-date",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 326
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["today"])(), {
                                            weekday: "long",
                                            day: "numeric",
                                            month: "long"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 351
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "schedule-count",
                                        children: [
                                            groupsToday.length,
                                            " حصص"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 437
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 295
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "schedule-list",
                                children: groupsToday.length ? groupsToday.map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "schedule-item",
                                        onClick: ()=>{
                                            setGroupId(g.id);
                                            setView("group");
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `group-icon ${groupColor(g.color)}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    size: 19
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 739
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 97,
                                                columnNumber: 686
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "schedule-name",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: g.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 797
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            g.subject,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 840
                                                            }, this),
                                                            " ",
                                                            data.memberships.filter((m)=>m.groupId === g.id).length,
                                                            " طلاب"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 822
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 97,
                                                columnNumber: 766
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "schedule-time",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: timeLabel(g.time)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 951
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            g.duration,
                                                            " دقيقة"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 987
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 97,
                                                columnNumber: 920
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                size: 17,
                                                className: "faint"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 97,
                                                columnNumber: 1024
                                            }, this)
                                        ]
                                    }, g.id, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 585
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "empty-inline",
                                    children: "لا توجد حصص مجدولة اليوم. يوم هادئ!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 1079
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 507
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 97,
                        columnNumber: 49
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card attendance-overview",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "نظرة على الحضور",
                                subtitle: `ملخص الحضور خلال ${monthLabel(month)}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "dots-button",
                                    onClick: ()=>setView("attendance"),
                                    "aria-label": "عرض الحضور",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 1398
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 1304
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 1213
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "attendance-summary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "attendance-ring",
                                        style: {
                                            background: `conic-gradient(#3f78ed ${attendanceRate * 3.6}deg, #eaf0fa 0deg)`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        attendanceRate,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 1616
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "معدل الحضور"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 1650
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 97,
                                            columnNumber: 1611
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 1487
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "attendance-numbers",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "blue-dot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 1733
                                                            }, this),
                                                            " الحضور"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 1727
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            present,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "سجل"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 1790
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 1772
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 97,
                                                columnNumber: 1722
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "orange-dot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 1834
                                                            }, this),
                                                            " الغياب"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 1828
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            records.length - present,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "سجل"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 1910
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 1875
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 97,
                                                columnNumber: 1823
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 1686
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 1451
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "attendance-action",
                                onClick: ()=>open({
                                        type: "attendance"
                                    }, true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 2044
                                    }, this),
                                    " تسجيل حضور اليوم ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 2088
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 1955
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 97,
                        columnNumber: 1167
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 97,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card recent-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                        title: "الطلاب المسجلون",
                        subtitle: "متابعة سريعة لأحدث بيانات الطلاب",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-link",
                            onClick: ()=>setView("students"),
                            children: [
                                "عرض كل الطلاب ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 207
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 98,
                            columnNumber: 127
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 98,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentTable, {
                        students: data.students.slice(0, 5),
                        compact: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 98,
                        columnNumber: 257
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 98,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 94,
        columnNumber: 10
    }, this);
}
_s2(DashboardView, "GCIOwib+hSpwiKV3cT5iNF64UwY=", false, function() {
    return [
        useApp
    ];
});
_c7 = DashboardView;
function StudentTable({ students, compact = false }) {
    _s3();
    const { data, month, open, remove } = useApp();
    if (!students.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
        title: "لا يوجد طلاب",
        text: "جرّب تغيير البحث أو أضف طالباً جديداً.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 104,
        columnNumber: 32
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "table-scroll",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "data-table",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "الطالب"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 105,
                                columnNumber: 81
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "الصف الدراسي"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 105,
                                columnNumber: 96
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "المجموعة"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 105,
                                columnNumber: 117
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "رقم الهاتف"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 105,
                                columnNumber: 134
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "حالة الاشتراك"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 105,
                                columnNumber: 153
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: compact ? "" : "الإجراءات"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 105,
                                columnNumber: 175
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 105,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 105,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: students.map((s, i)=>{
                        const balance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentBalance"])(data, s.id, month);
                        const groups = data.memberships.filter((m)=>m.studentId === s.id).map((m)=>data.groups.find((g)=>g.id === m.groupId)?.name).filter(Boolean);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "table-person",
                                        onClick: ()=>open({
                                                type: "profile",
                                                studentId: s.id
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                                name: s.name,
                                                index: i
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 105,
                                                columnNumber: 565
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: s.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 604
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            "#",
                                                            String(s.id).padStart(4, "0")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 629
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 105,
                                                columnNumber: 598
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 473
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 105,
                                    columnNumber: 469
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: s.grade
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 105,
                                    columnNumber: 696
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "group-table-label",
                                            children: groups[0] || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 105,
                                            columnNumber: 718
                                        }, this),
                                        groups.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "extra-groups",
                                            children: [
                                                " +",
                                                groups.length - 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 105,
                                            columnNumber: 801
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 105,
                                    columnNumber: 714
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "phone-cell",
                                    dir: "ltr",
                                    children: s.phone || "—"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 105,
                                    columnNumber: 866
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                                        status: balance.status,
                                        due: balance.due
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 928
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 105,
                                    columnNumber: 924
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>open({
                                                        type: "profile",
                                                        studentId: s.id
                                                    }),
                                                "aria-label": "عرض الطالب",
                                                title: "عرض الملف",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 1126
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 105,
                                                columnNumber: 1017
                                            }, this),
                                            !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>open({
                                                                type: "student",
                                                                item: s
                                                            }, true),
                                                        "aria-label": "تعديل الطالب",
                                                        title: "تعديل",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 1271
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 1166
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "danger-action",
                                                        onClick: ()=>remove("deleteStudent", s.id, "هل تريد حذف الطالب وجميع سجلاته نهائياً؟"),
                                                        "aria-label": "حذف الطالب",
                                                        title: "حذف",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 1459
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 1299
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 105,
                                                columnNumber: 1164
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 988
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 105,
                                    columnNumber: 984
                                }, this)
                            ]
                        }, s.id, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 105,
                            columnNumber: 454
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 105,
                    columnNumber: 225
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard.tsx",
            lineNumber: 105,
            columnNumber: 40
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
_s3(StudentTable, "pHQggjeAR6n3xoCCpo4rgvD3rvQ=", false, function() {
    return [
        useApp
    ];
});
_c8 = StudentTable;
function StudentsView() {
    _s4();
    const { data, month, search, setSearch, open, exportCSV } = useApp();
    const [group, setGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const filtered = data.students.filter((s)=>{
        const matchesText = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.grade.includes(search) || data.memberships.filter((m)=>m.studentId === s.id).some((m)=>data.groups.find((g)=>g.id === m.groupId)?.name.includes(search));
        const balance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentBalance"])(data, s.id, month);
        const absences = data.attendance.filter((a)=>a.studentId === s.id && a.status === "absent").length;
        const incomplete = data.assignments.some((a)=>{
            if (!data.memberships.some((m)=>m.studentId === s.id && m.groupId === a.groupId)) return false;
            const p = data.progress.find((p)=>p.studentId === s.id && p.assignmentId === a.id);
            return !!a.homework && p?.homeworkStatus !== "completed" || !!a.memorization && p?.memorizationStatus !== "completed";
        });
        return matchesText && (!group || data.memberships.some((m)=>m.studentId === s.id && m.groupId === group)) && (filter === "all" || filter === "paid" && balance.status === "paid" || filter === "unpaid" && balance.due > 0 && balance.remaining > 0 || filter === "absent" && absences >= 2 || filter === "homework" && incomplete);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeading, {
                eyebrow: "إدارة الطلاب",
                title: "الطلاب",
                description: "كل تفاصيل طلابك ومتابعتهم في مكان واحد.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button-light",
                        onClick: exportCSV,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 110,
                                columnNumber: 177
                            }, this),
                            " تصدير Excel"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 110,
                        columnNumber: 117
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button-primary",
                        onClick: ()=>open({
                                type: "student"
                            }, true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 110,
                                columnNumber: 309
                            }, this),
                            " إضافة طالب"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 110,
                        columnNumber: 219
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 110,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-summary-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon blue",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 110,
                                    columnNumber: 435
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 110,
                                columnNumber: 399
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "إجمالي الطلاب"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 471
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            data.students.length,
                                            " طالب"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 499
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 110,
                                columnNumber: 465
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 110,
                        columnNumber: 394
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon green",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 110,
                                    columnNumber: 598
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 110,
                                columnNumber: 561
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "المسددون هذا الشهر"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 636
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            data.students.filter((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentBalance"])(data, s.id, month).status === "paid").length,
                                            " طالب"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 669
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 110,
                                columnNumber: 630
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 110,
                        columnNumber: 556
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon orange",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 110,
                                    columnNumber: 832
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 110,
                                columnNumber: 794
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "لديهم مبالغ متبقية"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 869
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            data.students.filter((s)=>{
                                                const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentBalance"])(data, s.id, month);
                                                return b.due > 0 && b.remaining > 0;
                                            }).length,
                                            " طالب"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 902
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 110,
                                columnNumber: 863
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 110,
                        columnNumber: 789
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 110,
                columnNumber: 360
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card list-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                        title: "قائمة الطلاب",
                        subtitle: `${filtered.length} طالب في القائمة`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "filter-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "input-search",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 110,
                                            columnNumber: 1239
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "ابحث عن طالب...",
                                            value: search,
                                            onChange: (e)=>setSearch(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 110,
                                            columnNumber: 1258
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 110,
                                    columnNumber: 1209
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    "aria-label": "تصفية حسب المجموعة",
                                    value: group,
                                    onChange: (e)=>setGroup(Number(e.target.value)),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 0,
                                            children: "كل المجموعات"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 110,
                                            columnNumber: 1462
                                        }, this),
                                        data.groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: g.id,
                                                children: g.name
                                            }, g.id, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 110,
                                                columnNumber: 1523
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 110,
                                    columnNumber: 1359
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    "aria-label": "تصفية الطلاب",
                                    value: filter,
                                    onChange: (e)=>setFilter(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "كل الحالات"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 110,
                                            columnNumber: 1674
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "paid",
                                            children: "الاشتراك مدفوع"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 110,
                                            columnNumber: 1713
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "unpaid",
                                            children: "اشتراك غير مكتمل"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 110,
                                            columnNumber: 1757
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "absent",
                                            children: "غياب متكرر"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 110,
                                            columnNumber: 1805
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "homework",
                                            children: "واجب أو حفظ غير مكتمل"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 110,
                                            columnNumber: 1847
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 110,
                                    columnNumber: 1583
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 110,
                            columnNumber: 1181
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 110,
                        columnNumber: 1096
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentTable, {
                        students: filtered
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 110,
                        columnNumber: 1934
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 110,
                columnNumber: 1060
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 110,
        columnNumber: 10
    }, this);
}
_s4(StudentsView, "jyST6pWhv+lvTAwN+fiQf1yY0Zc=", false, function() {
    return [
        useApp
    ];
});
_c9 = StudentsView;
function GroupsView() {
    _s5();
    const { data, month, open, setGroupId, setView, remove } = useApp();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeading, {
                eyebrow: "تنظيم الدروس",
                title: "المجموعات الدراسية",
                description: "نظّم مجموعاتك، طلابك ومواعيد حصصك بسهولة.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button button-primary",
                    onClick: ()=>open({
                            type: "group"
                        }, true),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 114,
                            columnNumber: 219
                        }, this),
                        " إضافة مجموعة"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 114,
                    columnNumber: 131
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 114,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "list-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "جميع المجموعات ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: data.groups.length
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 114,
                                columnNumber: 321
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 114,
                        columnNumber: 300
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "اضغط على المجموعة لعرض تفاصيلها"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 114,
                        columnNumber: 355
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 114,
                columnNumber: 272
            }, this),
            data.groups.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "groups-grid",
                children: data.groups.map((g)=>{
                    const members = data.memberships.filter((m)=>m.groupId === g.id);
                    const paid = members.filter((m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paidFor"])(data, m.studentId, g.id, month) >= m.fee && m.fee > 0).length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "card group-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group-card-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `group-icon group-icon-lg ${groupColor(g.color)}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            size: 22
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 114,
                                            columnNumber: 802
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 734
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>open({
                                                        type: "group",
                                                        item: g
                                                    }, true),
                                                "aria-label": "تعديل المجموعة",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 949
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 859
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "danger-action",
                                                onClick: ()=>remove("deleteGroup", g.id, "حذف المجموعة سيحذف حضورها ودفعاتها وواجباتها. هل أنت متأكد؟"),
                                                "aria-label": "حذف المجموعة",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 1142
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 977
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 830
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 114,
                                columnNumber: 702
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "group-card-title",
                                onClick: ()=>{
                                    setGroupId(g.id);
                                    setView("group");
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: g.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1275
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            g.grade,
                                            " · ",
                                            g.subject
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1292
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 114,
                                columnNumber: 1182
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group-meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 1365
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["days"][g.day]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1359
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 1416
                                            }, this),
                                            timeLabel(g.time)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1410
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 1467
                                            }, this),
                                            members.length,
                                            " طلاب"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1461
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 114,
                                columnNumber: 1331
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group-card-footer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "الاشتراك الشهري"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 1564
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: money(g.monthlyFee)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 1592
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1559
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "المسددون"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 1641
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    paid,
                                                    " / ",
                                                    members.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 1662
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1636
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setGroupId(g.id);
                                            setView("group");
                                        },
                                        "aria-label": "تفاصيل المجموعة",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 114,
                                            columnNumber: 1803
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1710
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 114,
                                columnNumber: 1524
                            }, this)
                        ]
                    }, g.id, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 114,
                        columnNumber: 654
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 114,
                columnNumber: 427
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                    title: "لا توجد مجموعات بعد",
                    text: "أنشئ أول مجموعة لتنظيم طلابك وحصصك.",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"],
                    action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button-primary",
                        onClick: ()=>open({
                                type: "group"
                            }, true),
                        children: "إضافة مجموعة"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 114,
                        columnNumber: 1993
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 114,
                    columnNumber: 1892
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 114,
                columnNumber: 1866
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
_s5(GroupsView, "or9YjitrLy9ApdSqmLjEy+mRhXk=", false, function() {
    return [
        useApp
    ];
});
_c10 = GroupsView;
function GroupView() {
    _s6();
    const { data, month, groupId, setView, open } = useApp();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("students");
    const group = data.groups.find((g)=>g.id === groupId);
    if (!group) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
        title: "المجموعة غير موجودة",
        text: "اختر مجموعة من القائمة.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"],
        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "button button-light",
            onClick: ()=>setView("groups"),
            children: "العودة للمجموعات"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard.tsx",
            lineNumber: 118,
            columnNumber: 111
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 118,
        columnNumber: 22
    }, this);
    const members = data.memberships.filter((m)=>m.groupId === group.id);
    const paid = members.filter((m)=>m.fee > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paidFor"])(data, m.studentId, group.id, month) >= m.fee).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "back-link",
                onClick: ()=>setView("groups"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 120,
                        columnNumber: 76
                    }, this),
                    " العودة إلى المجموعات"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 120,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeading, {
                eyebrow: "تفاصيل المجموعة",
                title: group.name,
                description: `${group.subject} · ${group.grade} · ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["days"][group.day]} ${timeLabel(group.time)}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button-light",
                        onClick: ()=>open({
                                type: "group",
                                item: group
                            }, true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 120,
                                columnNumber: 378
                            }, this),
                            " تعديل المجموعة"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 120,
                        columnNumber: 282
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button-primary",
                        onClick: ()=>open({
                                type: "attendance",
                                groupId: group.id
                            }, true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 120,
                                columnNumber: 530
                            }, this),
                            " تسجيل الحضور"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 120,
                        columnNumber: 421
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 120,
                columnNumber: 128
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-summary-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon blue",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 667
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 120,
                                columnNumber: 631
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "طلاب المجموعة"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 120,
                                        columnNumber: 703
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            members.length,
                                            " طالب"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 120,
                                        columnNumber: 731
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 120,
                                columnNumber: 697
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 120,
                        columnNumber: 626
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon purple",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 825
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 120,
                                columnNumber: 787
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "موعد الحصة"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 120,
                                        columnNumber: 863
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["days"][group.day],
                                            " · ",
                                            timeLabel(group.time)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 120,
                                        columnNumber: 888
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 120,
                                columnNumber: 857
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 120,
                        columnNumber: 782
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon green",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 1003
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 120,
                                columnNumber: 966
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: [
                                            "المسددون في ",
                                            monthLabel(month)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 120,
                                        columnNumber: 1039
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            paid,
                                            " من ",
                                            members.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 120,
                                        columnNumber: 1085
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 120,
                                columnNumber: 1033
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 120,
                        columnNumber: 961
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 120,
                columnNumber: 592
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tabs",
                children: [
                    [
                        "students",
                        "الطلاب"
                    ],
                    [
                        "attendance",
                        "الحضور والغياب"
                    ],
                    [
                        "payments",
                        "المدفوعات"
                    ],
                    [
                        "homework",
                        "الواجب والحفظ"
                    ]
                ].map(([id, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: tab === id ? "active" : "",
                        onClick: ()=>setTab(id),
                        children: label
                    }, id, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 120,
                        columnNumber: 1300
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 120,
                columnNumber: 1147
            }, this),
            tab === "students" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card list-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                        title: "طلاب المجموعة",
                        subtitle: `${members.length} طالب مسجل`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "button button-light button-small",
                            onClick: ()=>open({
                                    type: "group",
                                    item: group
                                }, true),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 1654
                                }, this),
                                " إدارة الطلاب"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 120,
                            columnNumber: 1545
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 120,
                        columnNumber: 1466
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentTable, {
                        students: data.students.filter((s)=>members.some((m)=>m.studentId === s.id))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 120,
                        columnNumber: 1710
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 120,
                columnNumber: 1430
            }, this),
            tab === "attendance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttendanceView, {
                scope: group.id,
                embedded: true
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 120,
                columnNumber: 1839
            }, this),
            tab === "payments" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentsView, {
                scope: group.id,
                embedded: true
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 120,
                columnNumber: 1906
            }, this),
            tab === "homework" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeworkView, {
                scope: group.id,
                embedded: true
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 120,
                columnNumber: 1971
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 120,
        columnNumber: 10
    }, this);
}
_s6(GroupView, "XmfU0JF1o6yIp8ywhkuKXuopzNk=", false, function() {
    return [
        useApp
    ];
});
_c11 = GroupView;
function AttendanceView({ scope, embedded = false }) {
    _s7();
    const { data, month, setMonth, open } = useApp();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(scope || 0);
    const selectedGroup = scope || selected;
    const records = data.attendance.filter((a)=>a.lessonDate.startsWith(month) && (!selectedGroup || a.groupId === selectedGroup));
    const lessons = Array.from(new Set(records.map((a)=>`${a.groupId}|${a.lessonDate}`))).map((key)=>{
        const [g, d] = key.split("|");
        const groupId = Number(g);
        const list = records.filter((a)=>a.groupId === groupId && a.lessonDate === d);
        return {
            key,
            groupId,
            date: d,
            total: list.length,
            present: list.filter((a)=>a.status === "present").length
        };
    }).sort((a, b)=>b.date.localeCompare(a.date));
    const present = records.filter((a)=>a.status === "present").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !embedded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeading, {
                eyebrow: "متابعة الحصص",
                title: "الحضور والغياب",
                description: "سجّل الحضور وتابع غياب الطلاب في كل حصة.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button button-primary",
                    onClick: ()=>open({
                            type: "attendance",
                            groupId: selectedGroup || undefined
                        }, true),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 126,
                            columnNumber: 267
                        }, this),
                        " تسجيل الحضور"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 126,
                    columnNumber: 140
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 126,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-summary-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon blue",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 126,
                                    columnNumber: 396
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 126,
                                columnNumber: 360
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "الحصص المسجلة"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 435
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            lessons.length,
                                            " حصة"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 463
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 126,
                                columnNumber: 429
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 126,
                        columnNumber: 355
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon green",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 126,
                                    columnNumber: 555
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 126,
                                columnNumber: 518
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "سجلات الحضور"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 593
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            present,
                                            " سجل"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 620
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 126,
                                columnNumber: 587
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 126,
                        columnNumber: 513
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon orange",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 126,
                                    columnNumber: 706
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 126,
                                columnNumber: 668
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "سجلات الغياب"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 743
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            records.length - present,
                                            " سجل"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 770
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 126,
                                columnNumber: 737
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 126,
                        columnNumber: 663
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 126,
                columnNumber: 321
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card list-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                        title: "سجل الحصص",
                        subtitle: "اختر حصة لتعديل حضور الطلاب",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "filter-row",
                            children: [
                                !scope && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    "aria-label": "المجموعة",
                                    value: selected,
                                    onChange: (e)=>setSelected(Number(e.target.value)),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 0,
                                            children: "كل المجموعات"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 126,
                                            columnNumber: 1081
                                        }, this),
                                        data.groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: g.id,
                                                children: g.name
                                            }, g.id, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 126,
                                                columnNumber: 1142
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 126,
                                    columnNumber: 982
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthInput, {
                                    value: month,
                                    onChange: setMonth
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 126,
                                    columnNumber: 1203
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button button-light button-small",
                                    onClick: ()=>open({
                                            type: "attendance",
                                            groupId: selectedGroup || undefined
                                        }, true),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 126,
                                            columnNumber: 1388
                                        }, this),
                                        " تسجيل حصة"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 126,
                                    columnNumber: 1250
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 126,
                            columnNumber: 943
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 126,
                        columnNumber: 870
                    }, this),
                    lessons.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "data-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "تاريخ الحصة"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 126,
                                                columnNumber: 1536
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "المجموعة"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 126,
                                                columnNumber: 1556
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "عدد الطلاب"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 126,
                                                columnNumber: 1573
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "حاضر"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 126,
                                                columnNumber: 1592
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "غائب"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 126,
                                                columnNumber: 1605
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "الإجراءات"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 126,
                                                columnNumber: 1618
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 1532
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 126,
                                    columnNumber: 1525
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: lessons.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(l.date)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 1694
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 1690
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: data.groups.find((g)=>g.id === l.groupId)?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 1736
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: l.total
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 1794
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "status status-paid",
                                                        children: [
                                                            l.present,
                                                            " حاضر"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 1816
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 1812
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "status status-unpaid",
                                                        children: [
                                                            l.total - l.present,
                                                            " غائب"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 1885
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 1881
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-link",
                                                        onClick: ()=>open({
                                                                type: "attendance",
                                                                groupId: l.groupId,
                                                                lessonDate: l.date
                                                            }, true),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 2081
                                                            }, this),
                                                            " تعديل"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 1964
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 1960
                                                }, this)
                                            ]
                                        }, l.key, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 126,
                                            columnNumber: 1674
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 126,
                                    columnNumber: 1649
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 126,
                            columnNumber: 1495
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 126,
                        columnNumber: 1465
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                        title: "لا توجد حصص مسجلة",
                        text: "ابدأ بتسجيل حضور المجموعة في أول حصة.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 126,
                        columnNumber: 2152
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 126,
                columnNumber: 834
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 126,
        columnNumber: 10
    }, this);
}
_s7(AttendanceView, "8ewsBCyJQc5VPcWJljLvcMFYRBk=", false, function() {
    return [
        useApp
    ];
});
_c12 = AttendanceView;
function PaymentsView({ scope, embedded = false }) {
    _s8();
    const { data, month, setMonth, open, remove } = useApp();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(scope || 0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const group = scope || selected;
    const members = data.memberships.filter((m)=>!group || m.groupId === group).map((m)=>{
        const student = data.students.find((s)=>s.id === m.studentId);
        const g = data.groups.find((g)=>g.id === m.groupId);
        const paid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paidFor"])(data, m.studentId, m.groupId, month);
        return {
            ...m,
            student,
            group: g,
            paid,
            remaining: Math.max(0, m.fee - paid),
            status: m.fee > 0 && paid >= m.fee ? "paid" : paid > 0 ? "partial" : "unpaid"
        };
    }).filter((m)=>m.student && m.group && (status === "all" || (status === "unpaid" ? m.remaining > 0 : m.status === status)));
    const monthPayments = data.payments.filter((p)=>p.month === month && (!group || p.groupId === group)).sort((a, b)=>b.paymentDate.localeCompare(a.paymentDate));
    const outstanding = data.memberships.filter((m)=>!group || m.groupId === group).reduce((n, m)=>n + Math.max(0, m.fee - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paidFor"])(data, m.studentId, m.groupId, month)), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !embedded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeading, {
                eyebrow: "الحسابات والاشتراكات",
                title: "المدفوعات",
                description: "تابع الاشتراكات، الدفعات الجزئية والمبالغ المتبقية.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button button-primary",
                    onClick: ()=>open({
                            type: "payment",
                            groupId: group || undefined
                        }, true),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 132,
                            columnNumber: 270
                        }, this),
                        " تسجيل دفعة"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 132,
                    columnNumber: 154
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 132,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-summary-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon green",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 398
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 132,
                                columnNumber: 361
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "المحصّل لاشتراكات الشهر"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 430
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: money(monthPayments.reduce((n, p)=>n + p.amount, 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 468
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 132,
                                columnNumber: 424
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 132,
                        columnNumber: 356
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon orange",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 593
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 132,
                                columnNumber: 555
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "إجمالي المستحقات المتبقية"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 630
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: money(outstanding)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 670
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 132,
                                columnNumber: 624
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 132,
                        columnNumber: 550
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon blue",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 761
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 132,
                                columnNumber: 725
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "عدد الدفعات"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 797
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            monthPayments.length,
                                            " دفعة"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 823
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 132,
                                columnNumber: 791
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 132,
                        columnNumber: 720
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 132,
                columnNumber: 322
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card list-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                        title: "حالة الاشتراكات",
                        subtitle: "حالة كل طالب في كل مجموعة بشكل منفصل",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "filter-row",
                            children: [
                                !scope && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    "aria-label": "المجموعة",
                                    value: selected,
                                    onChange: (e)=>setSelected(Number(e.target.value)),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 0,
                                            children: "كل المجموعات"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 1148
                                        }, this),
                                        data.groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: g.id,
                                                children: g.name
                                            }, g.id, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 1209
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 1049
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    "aria-label": "حالة الدفع",
                                    value: status,
                                    onChange: (e)=>setStatus(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "كل الحالات"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 1359
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "paid",
                                            children: "مدفوع"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 1398
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "unpaid",
                                            children: "لم يكتمل الدفع"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 1433
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "partial",
                                            children: "مدفوع جزئياً"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 1479
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 1270
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthInput, {
                                    value: month,
                                    onChange: setMonth
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 1533
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button button-light button-small",
                                    onClick: ()=>open({
                                            type: "payment",
                                            groupId: group || undefined
                                        }, true),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 1707
                                        }, this),
                                        " دفعة"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 1580
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 132,
                            columnNumber: 1010
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 132,
                        columnNumber: 922
                    }, this),
                    members.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "data-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "الطالب"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 1850
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "المجموعة"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 1865
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "المستحق"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 1882
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "المدفوع"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 1898
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "المتبقي"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 1914
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "الحالة"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 1930
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "الإجراءات"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 1945
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 1846
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 1839
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: members.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "table-person",
                                                        onClick: ()=>open({
                                                                type: "profile",
                                                                studentId: m.studentId
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                                                name: m.student.name,
                                                                index: i
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 2121
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: m.student.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 2163
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 2024
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 2020
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: m.group.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 2211
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: money(m.fee)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 2235
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: money(m.paid)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 2258
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: money(m.remaining)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 2286
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 2282
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                                                        status: m.status,
                                                        due: m.fee
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 2332
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 2328
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: m.remaining > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-link",
                                                        onClick: ()=>open({
                                                                type: "payment",
                                                                studentId: m.studentId,
                                                                groupId: m.groupId
                                                            }, true),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 2518
                                                            }, this),
                                                            " دفعة"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 2400
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 2376
                                                }, this)
                                            ]
                                        }, m.id, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 2005
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 1976
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 132,
                            columnNumber: 1809
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 132,
                        columnNumber: 1779
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                        title: "لا توجد اشتراكات مطابقة",
                        text: "أضف طلاباً إلى مجموعة أو غيّر التصفية.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 132,
                        columnNumber: 2587
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 132,
                columnNumber: 886
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card list-card section-spaced",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                        title: "سجل الدفعات",
                        subtitle: `دفعات اشتراك ${monthLabel(month)}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 132,
                        columnNumber: 2749
                    }, this),
                    monthPayments.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "data-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "تاريخ الدفع"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 2928
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "الطالب"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 2948
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "المجموعة"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 2963
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "المبلغ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 2980
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "ملاحظات"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 2995
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "الإجراءات"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 3011
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 2924
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 2917
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: monthPayments.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(p.paymentDate)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 3088
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: data.students.find((s)=>s.id === p.studentId)?.name || "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 3128
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 3124
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: data.groups.find((g)=>g.id === p.groupId)?.name || "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 3210
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: money(p.amount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 3279
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 3275
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: p.notes || "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 3318
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "row-actions",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>open({
                                                                        type: "payment",
                                                                        item: p
                                                                    }, true),
                                                                "aria-label": "تعديل الدفعة",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 3464
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 3376
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "danger-action",
                                                                onClick: ()=>remove("deletePayment", p.id, "هل تريد حذف هذه الدفعة؟"),
                                                                "aria-label": "حذف الدفعة",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 3621
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 3492
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 3347
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 3343
                                                }, this)
                                            ]
                                        }, p.id, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 3073
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 3042
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 132,
                            columnNumber: 2887
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 132,
                        columnNumber: 2857
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                        title: "لا توجد دفعات في هذا الشهر",
                        text: "ستظهر الدفعات المسجلة هنا.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 132,
                        columnNumber: 3692
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 132,
                columnNumber: 2698
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 132,
        columnNumber: 10
    }, this);
}
_s8(PaymentsView, "pjHAph5Cdk9tRB2fk3bieftgugc=", false, function() {
    return [
        useApp
    ];
});
_c13 = PaymentsView;
function ExpensesView() {
    _s9();
    const { data, month, setMonth, open, remove } = useApp();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const expenses = data.expenses.filter((e)=>e.expenseDate.startsWith(month) && (category === "all" || e.category === category)).sort((a, b)=>b.expenseDate.localeCompare(a.expenseDate));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeading, {
                eyebrow: "إدارة المصروفات",
                title: "المصروفات",
                description: "سجّل مصروفاتك اليومية وتابع أين تذهب ميزانيتك.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button button-primary",
                    onClick: ()=>open({
                            type: "expense"
                        }, true),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 136,
                            columnNumber: 218
                        }, this),
                        " إضافة مصروف"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 136,
                    columnNumber: 130
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 136,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-summary-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon orange",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__["ReceiptText"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 136,
                                    columnNumber: 347
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 309
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: [
                                            "مصروفات ",
                                            monthLabel(month)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 384
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: money(data.expenses.filter((e)=>e.expenseDate.startsWith(month)).reduce((n, e)=>n + e.amount, 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 426
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 378
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 136,
                        columnNumber: 304
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon purple",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 136,
                                    columnNumber: 596
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 558
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "العمليات المسجلة"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 629
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            data.expenses.filter((e)=>e.expenseDate.startsWith(month)).length,
                                            " عملية"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 660
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 623
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 136,
                        columnNumber: 553
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon blue",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 136,
                                    columnNumber: 804
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 768
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "إيرادات الشهر"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 840
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: money(data.payments.filter((p)=>p.paymentDate.startsWith(month)).reduce((n, p)=>n + p.amount, 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 868
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 834
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 136,
                        columnNumber: 763
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 136,
                columnNumber: 270
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "expense-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card list-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "سجل المصروفات",
                                subtitle: "جميع المصروفات حسب التاريخ والتصنيف",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "filter-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: category,
                                            onChange: (e)=>setCategory(e.target.value),
                                            "aria-label": "تصنيف المصروف",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: "كل التصنيفات"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 1278
                                                }, this),
                                                [
                                                    "المواصلات",
                                                    "الطباعة",
                                                    "الأدوات التعليمية",
                                                    "الإيجار",
                                                    "أخرى"
                                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: c
                                                    }, c, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 1390
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 136,
                                            columnNumber: 1182
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthInput, {
                                            value: month,
                                            onChange: setMonth
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 136,
                                            columnNumber: 1429
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 136,
                                    columnNumber: 1154
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 1069
                            }, this),
                            expenses.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "table-scroll",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "data-table",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "الوصف"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 1589
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "التصنيف"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 1603
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "التاريخ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 1619
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "المبلغ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 1635
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "الإجراءات"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 1650
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 136,
                                                columnNumber: 1585
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 136,
                                            columnNumber: 1578
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: expenses.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: e.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 1726
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 1722
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "tag",
                                                                children: e.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 1767
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 1763
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(e.expenseDate)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 1813
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: money(e.amount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 1853
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 1849
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "row-actions",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>open({
                                                                                type: "expense",
                                                                                item: e
                                                                            }, true),
                                                                        "aria-label": "تعديل المصروف",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 15
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                                            lineNumber: 136,
                                                                            columnNumber: 2014
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 1925
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "danger-action",
                                                                        onClick: ()=>remove("deleteExpense", e.id, "هل تريد حذف هذا المصروف؟"),
                                                                        "aria-label": "حذف المصروف",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 15
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                                            lineNumber: 136,
                                                                            columnNumber: 2173
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 2042
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 1896
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 1892
                                                        }, this)
                                                    ]
                                                }, e.id, true, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 1707
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 136,
                                            columnNumber: 1681
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 136,
                                    columnNumber: 1548
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 1518
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                                title: "لا توجد مصروفات",
                                text: "لم تسجل مصروفات لهذا الاختيار.",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__["ReceiptText"]
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 2244
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 136,
                        columnNumber: 1033
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "توزيع المصروفات",
                                subtitle: "حسب التصنيف لهذا الشهر"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 2370
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpenseChart"], {
                                data: data,
                                month: month
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 2445
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 136,
                        columnNumber: 2344
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 136,
                columnNumber: 1001
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 136,
        columnNumber: 10
    }, this);
}
_s9(ExpensesView, "aEeqle+Qcl50EMC3y9UMjBsafQA=", false, function() {
    return [
        useApp
    ];
});
_c14 = ExpensesView;
function HomeworkView({ scope, embedded = false }) {
    _s10();
    const { data, open, remove } = useApp();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(scope || 0);
    const group = scope || selected;
    const assignments = data.assignments.filter((a)=>!group || a.groupId === group).sort((a, b)=>b.lessonDate.localeCompare(a.lessonDate));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !embedded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeading, {
                eyebrow: "متابعة التقدم",
                title: "الواجب والحفظ",
                description: "خطط لكل حصة وتابع إنجاز الطلاب بشكل منفصل لكل مجموعة.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button button-primary",
                    onClick: ()=>open({
                            type: "assignment",
                            groupId: group || undefined
                        }, true),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 140,
                            columnNumber: 272
                        }, this),
                        " إضافة واجب"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard.tsx",
                    lineNumber: 140,
                    columnNumber: 153
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 140,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card list-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                        title: "سجل الواجبات والحفظ",
                        subtitle: `${assignments.length} حصة مسجلة`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "filter-row",
                            children: [
                                !scope && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selected,
                                    onChange: (e)=>setSelected(Number(e.target.value)),
                                    "aria-label": "المجموعة",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 0,
                                            children: "كل المجموعات"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 140,
                                            columnNumber: 587
                                        }, this),
                                        data.groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: g.id,
                                                children: g.name
                                            }, g.id, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 140,
                                                columnNumber: 648
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 140,
                                    columnNumber: 488
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button button-light button-small",
                                    onClick: ()=>open({
                                            type: "assignment",
                                            groupId: group || undefined
                                        }, true),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 140,
                                            columnNumber: 839
                                        }, this),
                                        " إضافة واجب"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 140,
                                    columnNumber: 709
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard.tsx",
                            lineNumber: 140,
                            columnNumber: 449
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 140,
                        columnNumber: 360
                    }, this),
                    assignments.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "assignments-list",
                        children: assignments.map((a)=>{
                            const g = data.groups.find((g)=>g.id === a.groupId);
                            const students = data.memberships.filter((m)=>m.groupId === a.groupId).length;
                            const completed = data.progress.filter((p)=>p.assignmentId === a.id && data.memberships.some((m)=>m.studentId === p.studentId && m.groupId === a.groupId) && (!a.homework || p.homeworkStatus === "completed") && (!a.memorization || p.memorizationStatus === "completed")).length;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "assignment-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "assignment-top",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `group-icon ${groupColor(g?.color || "blue")}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    size: 19
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 1539
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 140,
                                                columnNumber: 1475
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: g?.name || "المجموعة"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 1571
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(a.lessonDate),
                                                            " · ",
                                                            g?.subject
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 1611
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 140,
                                                columnNumber: 1566
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row-actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>open({
                                                                type: "assignment",
                                                                item: a
                                                            }, true),
                                                        "aria-label": "تعديل الواجب",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 1791
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 1700
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "danger-action",
                                                        onClick: ()=>remove("deleteAssignment", a.id, "هل تريد حذف هذا الواجب ومتابعته؟"),
                                                        "aria-label": "حذف الواجب",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 1960
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 1819
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 140,
                                                columnNumber: 1671
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 140,
                                        columnNumber: 1443
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "assignment-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "الواجب المطلوب"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 2041
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: a.homework || "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 2068
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 140,
                                                columnNumber: 2036
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "الحفظ المطلوب"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 2105
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: a.memorization || "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 2131
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 140,
                                                columnNumber: 2100
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 140,
                                        columnNumber: 2000
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "assignment-footer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 2214
                                                    }, this),
                                                    " ",
                                                    completed,
                                                    " من ",
                                                    students,
                                                    " أكملوا الواجب والحفظ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 140,
                                                columnNumber: 2208
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-link",
                                                onClick: ()=>open({
                                                        type: "progress",
                                                        assignmentId: a.id
                                                    }, true),
                                                children: [
                                                    "متابعة إنجاز الطلاب ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 2409
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 140,
                                                columnNumber: 2293
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 140,
                                        columnNumber: 2173
                                    }, this)
                                ]
                            }, a.id, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 140,
                                columnNumber: 1395
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 140,
                        columnNumber: 921
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                        title: "لا توجد واجبات بعد",
                        text: "أضف واجباً أو حفظاً لتبدأ متابعة إنجاز الطلاب.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 140,
                        columnNumber: 2472
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 140,
                columnNumber: 324
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 140,
        columnNumber: 10
    }, this);
}
_s10(HomeworkView, "Y3FdA2SuugDja3nQZKIDEU8uPLM=", false, function() {
    return [
        useApp
    ];
});
_c15 = HomeworkView;
function AnalyticsView() {
    _s11();
    const { data, month, setMonth, exportCSV, printReport } = useApp();
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    const [group, setGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const income = data.payments.filter((p)=>p.paymentDate.startsWith(month) && (!group || p.groupId === group)).reduce((n, p)=>n + p.amount, 0);
    const expenses = data.expenses.filter((e)=>e.expenseDate.startsWith(month)).reduce((n, e)=>n + e.amount, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeading, {
                eyebrow: "الأرقام والتقارير",
                title: "التقارير والتحليلات",
                description: "نظرة أوضح على أداء دروسك وحساباتك.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button-light",
                        onClick: printReport,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 192
                            }, this),
                            " طباعة PDF"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 130
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button-primary",
                        onClick: exportCSV,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 293
                            }, this),
                            " تصدير Excel"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 231
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 144,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "report-filters",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 387
                            }, this),
                            " خيارات العرض"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 381
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: group,
                                onChange: (e)=>setGroup(Number(e.target.value)),
                                "aria-label": "تصفية المجموعة",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 0,
                                        children: "كل المجموعات"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 533
                                    }, this),
                                    data.groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: g.id,
                                            children: g.name
                                        }, g.id, false, {
                                            fileName: "[project]/src/components/dashboard.tsx",
                                            lineNumber: 144,
                                            columnNumber: 594
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 434
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: year,
                                onChange: (e)=>setYear(Number(e.target.value)),
                                "aria-label": "تصفية السنة",
                                children: Array.from({
                                    length: 6
                                }, (_, i)=>new Date().getFullYear() - i).map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: y,
                                        children: y
                                    }, y, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 817
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 654
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthInput, {
                                value: month,
                                onChange: setMonth
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 866
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 429
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 144,
                columnNumber: 349
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-summary-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon green",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 144,
                                    columnNumber: 1001
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 964
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: [
                                            "إيرادات ",
                                            monthLabel(month)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 1037
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: money(income)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 1079
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 1031
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 959
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon orange",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 144,
                                    columnNumber: 1167
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 1129
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "مصروفات الشهر العامة"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 1205
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: money(expenses)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 1240
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 1199
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 1124
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon blue",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 144,
                                    columnNumber: 1328
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 1292
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "صافي الربح"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 1360
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: money(income - expenses)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 1385
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 1354
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 1287
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 144,
                columnNumber: 925
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reports-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card report-wide",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "الإيرادات مقابل المصروفات",
                                subtitle: `التحصيل الفعلي والمصروفات العامة خلال ${year}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 1513
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chart-legend",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "blue-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 144,
                                                columnNumber: 1659
                                            }, this),
                                            " الإيرادات"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 1653
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "green-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 144,
                                                columnNumber: 1707
                                            }, this),
                                            " المصروفات"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 1701
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 1623
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FinanceChart"], {
                                data: data,
                                groupId: group,
                                year: year
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 1756
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 1475
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "صافي الربح الشهري",
                                subtitle: "الإيرادات مطروحاً منها المصروفات"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 1847
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfitChart"], {
                                data: data,
                                groupId: group,
                                year: year
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 1934
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 1821
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "الطلاب حسب المجموعة",
                                subtitle: "توزيع الطلاب على المجموعات"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 2024
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupChart"], {
                                data: data,
                                groupId: group
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 2107
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 1998
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "إحصاءات الحضور",
                                subtitle: monthLabel(month)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 2184
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttendanceChart"], {
                                data: data,
                                month: month,
                                groupId: group
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 2253
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 2158
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "المصروفات حسب التصنيف",
                                subtitle: monthLabel(month)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 2349
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpenseChart"], {
                                data: data,
                                month: month
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 2425
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 2323
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                title: "المدفوع وغير المدفوع",
                                subtitle: `إجمالي الطلاب · ${monthLabel(month)}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 2502
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentDonut"], {
                                data: group ? {
                                    ...data,
                                    students: data.students.filter((s)=>data.memberships.some((m)=>m.studentId === s.id && m.groupId === group)),
                                    memberships: data.memberships.filter((m)=>m.groupId === group)
                                } : data,
                                month: month
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 144,
                                columnNumber: 2598
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 2476
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 144,
                columnNumber: 1445
            }, this),
            group > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "report-note",
                children: "ملاحظة: المصروفات عامة وليست مرتبطة بمجموعة محددة، لذا يخصم إجماليها عند عرض صافي ربح المجموعة."
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 144,
                columnNumber: 2863
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 144,
        columnNumber: 10
    }, this);
}
_s11(AnalyticsView, "MZjEdJTK2sPRnv+bxU6O6bsUoLQ=", false, function() {
    return [
        useApp
    ];
});
_c16 = AnalyticsView;
function SettingsView() {
    _s12();
    const { authenticated, busy, open, logout, downloadBackup, restoreBackup, exportCSV, printReport } = useApp();
    const backupInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeading, {
                eyebrow: "إدارة الحساب",
                title: "الإعدادات والنسخ الاحتياطي",
                description: "تحكم بحسابك واحتفظ بنسخة من بياناتك بأمان."
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 149,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card settings-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon blue",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 149,
                                    columnNumber: 248
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 212
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "أمان الحساب"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 279
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "جلسة آمنة لحساب المعلم. يمكنك تحديث كلمة المرور في أي وقت."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 299
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings-detail",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "اسم المعلم"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 397
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "مستر ميخائيل توما"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 420
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 364
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings-detail",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "اسم المستخدم"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 493
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        dir: "ltr",
                                        children: "mikhail"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 518
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 460
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button button-light",
                                onClick: ()=>open(authenticated ? {
                                        type: "password"
                                    } : {
                                        type: "login"
                                    }, authenticated),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 690
                                    }, this),
                                    authenticated ? "تغيير كلمة المرور" : "تسجيل الدخول"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 558
                            }, this),
                            authenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button button-light",
                                onClick: logout,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 852
                                    }, this),
                                    " تسجيل الخروج"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 795
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 149,
                        columnNumber: 172
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card settings-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "summary-icon purple",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard.tsx",
                                    lineNumber: 149,
                                    columnNumber: 982
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 944
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "النسخ الاحتياطي والتصدير"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 1010
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "نزّل نسخة من البيانات أو صدّر ملخص الطلاب والتقارير للرجوع إليها."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 1043
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "export-options",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: downloadBackup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "نسخة احتياطية كاملة"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 1185
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "جميع البيانات بصيغة JSON"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 1221
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 149,
                                                columnNumber: 1180
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 149,
                                                columnNumber: 1264
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 1147
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: backupInput,
                                        type: "file",
                                        accept: "application/json,.json",
                                        hidden: true,
                                        onChange: (e)=>{
                                            const file = e.target.files?.[0];
                                            e.target.value = "";
                                            if (file) void restoreBackup(file);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 1294
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: busy,
                                        onClick: ()=>authenticated ? backupInput.current?.click() : open({
                                                type: "login"
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "استعادة نسخة احتياطية"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 1597
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "استبدال البيانات الحالية من ملف JSON"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 1635
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 149,
                                                columnNumber: 1592
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 149,
                                                columnNumber: 1690
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 1482
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: exportCSV,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "تصدير قائمة الطلاب"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 1753
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "ملف CSV متوافق مع Excel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 1788
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 149,
                                                columnNumber: 1748
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 149,
                                                columnNumber: 1830
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 1720
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: printReport,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "تقرير قابل للطباعة"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 1895
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "احفظه بصيغة PDF من نافذة الطباعة"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 1930
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 149,
                                                columnNumber: 1890
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard.tsx",
                                                lineNumber: 149,
                                                columnNumber: 1981
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 1860
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard.tsx",
                                lineNumber: 149,
                                columnNumber: 1115
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard.tsx",
                        lineNumber: 149,
                        columnNumber: 904
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard.tsx",
                lineNumber: 149,
                columnNumber: 141
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard.tsx",
        lineNumber: 149,
        columnNumber: 10
    }, this);
}
_s12(SettingsView, "WygStgR2m6tCe6ehWl6wpWXXOoU=", false, function() {
    return [
        useApp
    ];
});
_c17 = SettingsView;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
__turbopack_context__.k.register(_c, "Status");
__turbopack_context__.k.register(_c1, "Avatar");
__turbopack_context__.k.register(_c2, "Empty");
__turbopack_context__.k.register(_c3, "PageHeading");
__turbopack_context__.k.register(_c4, "SectionHeading");
__turbopack_context__.k.register(_c5, "MonthInput");
__turbopack_context__.k.register(_c6, "TeacherDashboard");
__turbopack_context__.k.register(_c7, "DashboardView");
__turbopack_context__.k.register(_c8, "StudentTable");
__turbopack_context__.k.register(_c9, "StudentsView");
__turbopack_context__.k.register(_c10, "GroupsView");
__turbopack_context__.k.register(_c11, "GroupView");
__turbopack_context__.k.register(_c12, "AttendanceView");
__turbopack_context__.k.register(_c13, "PaymentsView");
__turbopack_context__.k.register(_c14, "ExpensesView");
__turbopack_context__.k.register(_c15, "HomeworkView");
__turbopack_context__.k.register(_c16, "AnalyticsView");
__turbopack_context__.k.register(_c17, "SettingsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalRenderer",
    ()=>ModalRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.mjs [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
"use client";
;
;
;
function Dialog({ title, subtitle, children, onClose, wide = false }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dialog.useEffect": ()=>{
            const fn = {
                "Dialog.useEffect.fn": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["Dialog.useEffect.fn"];
            window.addEventListener("keydown", fn);
            return ({
                "Dialog.useEffect": ()=>window.removeEventListener("keydown", fn)
            })["Dialog.useEffect"];
        }
    }["Dialog.useEffect"], [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        onMouseDown: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: `modal ${wide ? "modal-wide" : ""}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": title,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 18,
                                    columnNumber: 253
                                }, this),
                                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 18,
                                    columnNumber: 282
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 18,
                            columnNumber: 248
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "icon-button",
                            onClick: onClose,
                            "aria-label": "إغلاق",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 19
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 18,
                                columnNumber: 389
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 18,
                            columnNumber: 306
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 18,
                    columnNumber: 218
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-body",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 18,
                    columnNumber: 418
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 18,
            columnNumber: 110
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_s(Dialog, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Dialog;
const Field = ({ label, children, hint })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 20,
                columnNumber: 126
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 20,
                columnNumber: 165
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 20,
        columnNumber: 101
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Field;
function Actions({ busy, onClose, label = "حفظ البيانات" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "form-actions",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "button button-light",
                onClick: onClose,
                children: "إلغاء"
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 21,
                columnNumber: 156
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button button-primary",
                type: "submit",
                disabled: busy,
                children: busy ? "جارٍ الحفظ..." : label
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 21,
                columnNumber: 242
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 21,
        columnNumber: 126
    }, this);
}
_c2 = Actions;
const val = (f, key)=>String(f.get(key) || "");
function LoginForm({ onLogin, busy, demoCredentials }) {
    _s1();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: async (e)=>{
            e.preventDefault();
            setError("");
            const f = new FormData(e.currentTarget);
            const result = await onLogin(val(f, "username"), val(f, "password"));
            if (result) setError(result);
        },
        className: "form-stack",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "login-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "login-icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 27,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 27,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "مرحباً بعودتك!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 27,
                                columnNumber: 97
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "سجّل الدخول للوصول إلى بياناتك وإدارتها بأمان."
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 27,
                                columnNumber: 128
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 27,
                        columnNumber: 92
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this),
            demoCredentials && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "demo-credentials",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "بيانات الدخول التجريبية"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 28,
                        columnNumber: 59
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        dir: "ltr",
                        children: "mikhail   /   Teacher@2026"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 28,
                        columnNumber: 99
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "غيّر كلمة المرور من الإعدادات بعد الدخول."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 28,
                        columnNumber: 158
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 28,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "اسم المستخدم",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "username",
                    autoComplete: "username",
                    required: true,
                    defaultValue: demoCredentials ? "mikhail" : "",
                    placeholder: "اسم المستخدم"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 29,
                    columnNumber: 33
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "كلمة المرور",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "password",
                    type: "password",
                    autoComplete: "current-password",
                    required: true,
                    placeholder: "أدخل كلمة المرور"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 30,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 31,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button button-primary button-block",
                disabled: busy,
                children: [
                    busy ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 31,
                        columnNumber: 176
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 31,
                columnNumber: 57
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_s1(LoginForm, "Wysf5k9/9rbzWl+spWgJpEWy35U=");
_c3 = LoginForm;
function StudentForm({ item, data, busy, onAction, onClose }) {
    _s2();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.memberships.filter({
        "StudentForm.useState": (m)=>m.studentId === item?.id
    }["StudentForm.useState"]).map({
        "StudentForm.useState": (m)=>m.groupId
    }["StudentForm.useState"]));
    const [fee, setFee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(item?.monthlyFee ?? 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "form-stack",
        onSubmit: async (e)=>{
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            if (await onAction("saveStudent", {
                id: item?.id,
                name: val(f, "name"),
                grade: val(f, "grade"),
                phone: val(f, "phone"),
                monthlyFee: fee,
                notes: val(f, "notes"),
                groupIds: selected
            })) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "اسم الطالب بالكامل *",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "name",
                            defaultValue: item?.name,
                            required: true,
                            minLength: 3,
                            maxLength: 120,
                            placeholder: "مثال: أحمد محمد علي"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 39,
                            columnNumber: 68
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 39,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "الصف الدراسي *",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "grade",
                            defaultValue: item?.grade,
                            required: true,
                            maxLength: 80,
                            placeholder: "مثال: الأول الثانوي"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 39,
                            columnNumber: 225
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 39,
                        columnNumber: 195
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "رقم الهاتف",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "phone",
                            dir: "ltr",
                            defaultValue: item?.phone,
                            maxLength: 30,
                            placeholder: "01xxxxxxxxx"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 39,
                            columnNumber: 365
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 39,
                        columnNumber: 339
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "الاشتراك الشهري (ج.م) *",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: "0",
                            max: "10000000",
                            required: true,
                            value: fee,
                            onChange: (e)=>setFee(Number(e.target.value))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 39,
                            columnNumber: 511
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 39,
                        columnNumber: 472
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "المجموعات ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "يمكن اختيار أكثر من مجموعة"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 40,
                                columnNumber: 44
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 40,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "check-grid",
                        children: data.groups.length ? data.groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `check-option ${selected.includes(g.id) ? "checked" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: selected.includes(g.id),
                                        onChange: ()=>{
                                            const next = selected.includes(g.id) ? selected.filter((x)=>x !== g.id) : [
                                                ...selected,
                                                g.id
                                            ];
                                            setSelected(next);
                                            if (!item && next.length === 1) setFee(g.monthlyFee);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 40,
                                        columnNumber: 252
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            g.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: g.subject
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals.tsx",
                                                lineNumber: 40,
                                                columnNumber: 513
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 40,
                                        columnNumber: 499
                                    }, this)
                                ]
                            }, g.id, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 40,
                                columnNumber: 163
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "أضف مجموعة أولاً من صفحة المجموعات."
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 40,
                            columnNumber: 558
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 40,
                        columnNumber: 92
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "عند اختيار مجموعة واحدة يطبق اشتراك الطالب، وللمجموعات المتعددة يطبق اشتراك كل مجموعة."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 40,
                        columnNumber: 625
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "ملاحظات المعلم",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "notes",
                    rows: 3,
                    defaultValue: item?.notes,
                    maxLength: 2000,
                    placeholder: "أضف أي ملاحظات مهمة عن الطالب..."
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 41,
                    columnNumber: 35
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                busy: busy,
                onClose: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 41,
                columnNumber: 167
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_s2(StudentForm, "4lLw5O5YkEzWFYvSyWyCxbnN5E4=");
_c4 = StudentForm;
function GroupForm({ item, data, busy, onAction, onClose }) {
    _s3();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.memberships.filter({
        "GroupForm.useState": (m)=>m.groupId === item?.id
    }["GroupForm.useState"]).map({
        "GroupForm.useState": (m)=>m.studentId
    }["GroupForm.useState"]));
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "form-stack",
        onSubmit: async (e)=>{
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            if (await onAction("saveGroup", {
                id: item?.id,
                name: val(f, "name"),
                grade: val(f, "grade"),
                subject: val(f, "subject"),
                day: Number(val(f, "day")),
                time: val(f, "time"),
                duration: Number(val(f, "duration")),
                monthlyFee: Number(val(f, "monthlyFee")),
                color: item?.color || "blue",
                studentIds: selected
            })) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "اسم المجموعة *",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "name",
                            defaultValue: item?.name,
                            required: true,
                            maxLength: 120,
                            placeholder: "مثال: مجموعة الأول الثانوي"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 48,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 48,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "الصف الدراسي *",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "grade",
                            defaultValue: item?.grade,
                            required: true,
                            placeholder: "مثال: الأول الثانوي"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 48,
                            columnNumber: 212
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 48,
                        columnNumber: 182
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "المادة *",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "subject",
                            defaultValue: item?.subject || "اللغة العربية",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 48,
                            columnNumber: 335
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 48,
                        columnNumber: 311
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "الاشتراك الشهري (ج.م) *",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            name: "monthlyFee",
                            min: "0",
                            required: true,
                            defaultValue: item?.monthlyFee ?? 350
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 48,
                            columnNumber: 462
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 48,
                        columnNumber: 423
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "يوم الحصة",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            name: "day",
                            defaultValue: item?.day ?? new Date().getDay(),
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["days"].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: i,
                                    children: d
                                }, d, false, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 48,
                                    columnNumber: 677
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 48,
                            columnNumber: 591
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 48,
                        columnNumber: 566
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "وقت الحصة",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "time",
                            type: "time",
                            required: true,
                            defaultValue: item?.time || "14:00"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 48,
                            columnNumber: 759
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 48,
                        columnNumber: 734
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "مدة الحصة بالدقائق",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "duration",
                            type: "number",
                            min: "15",
                            max: "480",
                            required: true,
                            defaultValue: item?.duration || 90
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 48,
                            columnNumber: 879
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 48,
                        columnNumber: 845
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 48,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "طلاب المجموعة ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: [
                                    "(",
                                    selected.length,
                                    " محدد)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 49,
                                columnNumber: 48
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 49,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        placeholder: "ابحث عن طالب..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 49,
                        columnNumber: 94
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "check-grid scroll-check",
                        children: [
                            data.students.filter((s)=>s.name.includes(search)).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `check-option ${selected.includes(s.id) ? "checked" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: selected.includes(s.id),
                                            onChange: ()=>setSelected(selected.includes(s.id) ? selected.filter((x)=>x !== s.id) : [
                                                    ...selected,
                                                    s.id
                                                ])
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals.tsx",
                                            lineNumber: 49,
                                            columnNumber: 380
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                s.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: s.grade
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 563
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals.tsx",
                                            lineNumber: 49,
                                            columnNumber: 549
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 49,
                                    columnNumber: 291
                                }, this)),
                            !data.students.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: "لا يوجد طلاب بعد."
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 49,
                                columnNumber: 630
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 49,
                        columnNumber: 189
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 49,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                busy: busy,
                onClose: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 49,
                columnNumber: 685
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
_s3(GroupForm, "aXmd3yyLNPuD7Y3w0ku7Rs/DdY8=");
_c5 = GroupForm;
function AttendanceForm({ groupId: initialGroup, lessonDate: initialDate, data, busy, onAction, onClose }) {
    _s4();
    const [groupId, setGroupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialGroup || data.groups[0]?.id || 0);
    const [lessonDate, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDate || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["today"])());
    const [states, setStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const members = data.memberships.filter((m)=>m.groupId === groupId).map((m)=>data.students.find((s)=>s.id === m.studentId)).filter((s)=>!!s);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendanceForm.useEffect": ()=>{
            const map = {};
            data.memberships.filter({
                "AttendanceForm.useEffect": (m)=>m.groupId === groupId
            }["AttendanceForm.useEffect"]).forEach({
                "AttendanceForm.useEffect": (m)=>{
                    map[m.studentId] = data.attendance.find({
                        "AttendanceForm.useEffect": (a)=>a.groupId === groupId && a.studentId === m.studentId && a.lessonDate === lessonDate
                    }["AttendanceForm.useEffect"])?.status || "present";
                }
            }["AttendanceForm.useEffect"]);
            setStates(map);
        }
    }["AttendanceForm.useEffect"], [
        data,
        groupId,
        lessonDate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "form-stack",
        onSubmit: async (e)=>{
            e.preventDefault();
            if (await onAction("saveAttendance", {
                groupId,
                lessonDate,
                records: members.map((s)=>({
                        studentId: s.id,
                        status: states[s.id] || "present"
                    }))
            })) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "المجموعة",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: groupId,
                            onChange: (e)=>setGroupId(Number(e.target.value)),
                            required: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: 0,
                                    disabled: true,
                                    children: "اختر المجموعة"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 58,
                                    columnNumber: 140
                                }, this),
                                data.groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: g.id,
                                        children: g.name
                                    }, g.id, false, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 58,
                                        columnNumber: 211
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 58,
                            columnNumber: 56
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 58,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "تاريخ الحصة",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            value: lessonDate,
                            onChange: (e)=>setDate(e.target.value),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 58,
                            columnNumber: 306
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 58,
                        columnNumber: 279
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 58,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "attendance-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "الطلاب (",
                            members.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 59,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "text-link",
                        onClick: ()=>setStates(Object.fromEntries(members.map((s)=>[
                                    s.id,
                                    "present"
                                ]))),
                        children: "تحديد الكل حاضر"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 59,
                        columnNumber: 76
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 59,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "attendance-list",
                children: [
                    members.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "attendance-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "person-cell",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "avatar avatar-sm",
                                            children: s.name.slice(0, 1)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals.tsx",
                                            lineNumber: 59,
                                            columnNumber: 357
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: s.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals.tsx",
                                            lineNumber: 59,
                                            columnNumber: 418
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 59,
                                    columnNumber: 328
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "segmented",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: states[s.id] === "present" ? "is-present" : "",
                                            onClick: ()=>setStates({
                                                    ...states,
                                                    [s.id]: "present"
                                                }),
                                            children: "حاضر"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals.tsx",
                                            lineNumber: 59,
                                            columnNumber: 476
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: states[s.id] === "absent" ? "is-absent" : "",
                                            onClick: ()=>setStates({
                                                    ...states,
                                                    [s.id]: "absent"
                                                }),
                                            children: "غائب"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals.tsx",
                                            lineNumber: 59,
                                            columnNumber: 630
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 59,
                                    columnNumber: 449
                                }, this)
                            ]
                        }, s.id, true, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 59,
                            columnNumber: 285
                        }, this)),
                    !members.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "empty-inline",
                        children: "لا يوجد طلاب في هذه المجموعة بعد."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 59,
                        columnNumber: 815
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 59,
                columnNumber: 234
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                busy: busy || !members.length,
                onClose: onClose,
                label: "حفظ الحضور"
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 59,
                columnNumber: 891
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
_s4(AttendanceForm, "vq1yoZqPqxgh0Ajn76uiK8BVZ5k=");
_c6 = AttendanceForm;
function PaymentForm({ item, studentId: initialStudent, groupId: initialGroup, initialMonth, data, busy, onAction, onClose }) {
    _s5();
    const [studentId, setStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(item?.studentId || initialStudent || (initialGroup ? data.memberships.find({
        "PaymentForm.useState": (m)=>m.groupId === initialGroup
    }["PaymentForm.useState"])?.studentId : undefined) || data.students[0]?.id || 0);
    const studentGroups = data.memberships.filter((m)=>m.studentId === studentId);
    const [groupId, setGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(item?.groupId || initialGroup || studentGroups[0]?.groupId || 0);
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(item?.month || initialMonth);
    const member = studentGroups.find((m)=>m.groupId === groupId);
    const already = member ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paidFor"])(data, studentId, groupId, month) : 0;
    const credit = item && item.studentId === studentId && item.groupId === groupId && item.month === month ? item.amount : 0;
    const remaining = Math.max(0, (member?.fee || 0) - already + credit);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "form-stack",
        onSubmit: async (e)=>{
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            if (await onAction("savePayment", {
                id: item?.id,
                studentId,
                groupId,
                amount: Number(val(f, "amount")),
                paymentDate: val(f, "paymentDate"),
                month,
                notes: val(f, "notes")
            })) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "الطالب",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: studentId,
                            required: true,
                            onChange: (e)=>{
                                const next = Number(e.target.value);
                                setStudent(next);
                                setGroup(data.memberships.find((m)=>m.studentId === next)?.groupId || 0);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: 0,
                                    disabled: true,
                                    children: "اختر الطالب"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 72,
                                    columnNumber: 238
                                }, this),
                                data.students.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: s.id,
                                        children: s.name
                                    }, s.id, false, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 72,
                                        columnNumber: 309
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 72,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 72,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "المجموعة",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: groupId,
                            required: true,
                            onChange: (e)=>setGroup(Number(e.target.value)),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: 0,
                                    disabled: true,
                                    children: "اختر المجموعة"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 72,
                                    columnNumber: 483
                                }, this),
                                studentGroups.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: m.groupId,
                                        children: data.groups.find((g)=>g.id === m.groupId)?.name
                                    }, m.id, false, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 72,
                                        columnNumber: 556
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 72,
                            columnNumber: 401
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 72,
                        columnNumber: 377
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "شهر الاشتراك",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "month",
                            required: true,
                            value: month,
                            onChange: (e)=>setMonth(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 72,
                            columnNumber: 698
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 72,
                        columnNumber: 670
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "تاريخ الدفع",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            name: "paymentDate",
                            required: true,
                            defaultValue: item?.paymentDate || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["today"])()
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 72,
                            columnNumber: 818
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 72,
                        columnNumber: 791
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "المبلغ المدفوع (ج.م)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            name: "amount",
                            min: "1",
                            max: remaining,
                            required: true,
                            defaultValue: item?.amount || remaining || "",
                            placeholder: "المبلغ"
                        }, `${studentId}-${groupId}-${month}`, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 72,
                            columnNumber: 954
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 72,
                        columnNumber: 918
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 72,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "قيمة الاشتراك: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(member?.fee || 0),
                                    " ج.م"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 73,
                                columnNumber: 52
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 73,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "المتبقي لهذا الشهر: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(remaining),
                                    " ج.م"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 73,
                                columnNumber: 127
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 73,
                        columnNumber: 101
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 73,
                columnNumber: 5
            }, this),
            !member && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-error",
                children: "أضف الطالب إلى مجموعة أولاً."
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 73,
                columnNumber: 187
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "ملاحظات",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "notes",
                    defaultValue: item?.notes,
                    maxLength: 500,
                    placeholder: "ملاحظات اختيارية"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 74,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 74,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                busy: busy || !member || remaining <= 0,
                onClose: onClose,
                label: "حفظ الدفعة"
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 74,
                columnNumber: 131
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 71,
        columnNumber: 10
    }, this);
}
_s5(PaymentForm, "CQyoMCcOerJ+jgnwJ2d83IEWFzc=");
_c7 = PaymentForm;
function ExpenseForm({ item, busy, onAction, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "form-stack",
        onSubmit: async (e)=>{
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            if (await onAction("saveExpense", {
                id: item?.id,
                description: val(f, "description"),
                category: val(f, "category"),
                amount: Number(val(f, "amount")),
                expenseDate: val(f, "expenseDate")
            })) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "وصف المصروف",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "description",
                    required: true,
                    defaultValue: item?.description,
                    placeholder: "مثال: طباعة مذكرات الطلاب"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 79,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 79,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "التصنيف",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            name: "category",
                            defaultValue: item?.category || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"][0],
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: c
                                }, c, false, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 79,
                                    columnNumber: 291
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 79,
                            columnNumber: 199
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 79,
                        columnNumber: 176
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "المبلغ (ج.م)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "amount",
                            type: "number",
                            min: "1",
                            required: true,
                            defaultValue: item?.amount,
                            placeholder: "0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 79,
                            columnNumber: 366
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 79,
                        columnNumber: 338
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "التاريخ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "expenseDate",
                            type: "date",
                            required: true,
                            defaultValue: item?.expenseDate || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["today"])()
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 79,
                            columnNumber: 494
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 79,
                        columnNumber: 471
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 79,
                columnNumber: 149
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                busy: busy,
                onClose: onClose,
                label: "حفظ المصروف"
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 79,
                columnNumber: 600
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 78,
        columnNumber: 10
    }, this);
}
_c8 = ExpenseForm;
function AssignmentForm({ item, groupId, data, busy, onAction, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "form-stack",
        onSubmit: async (e)=>{
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            if (await onAction("saveAssignment", {
                id: item?.id,
                groupId: Number(item?.groupId || val(f, "groupId")),
                lessonDate: val(f, "lessonDate"),
                homework: val(f, "homework"),
                memorization: val(f, "memorization")
            })) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "المجموعة",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            name: "groupId",
                            required: true,
                            defaultValue: item?.groupId || groupId || data.groups[0]?.id,
                            disabled: !!item,
                            children: data.groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: g.id,
                                    children: g.name
                                }, g.id, false, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 84,
                                    columnNumber: 190
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 84,
                            columnNumber: 56
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 84,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "تاريخ الحصة",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "lessonDate",
                            type: "date",
                            required: true,
                            defaultValue: item?.lessonDate || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["today"])()
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 84,
                            columnNumber: 285
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 84,
                        columnNumber: 258
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 84,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "الواجب المطلوب",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "homework",
                    rows: 4,
                    defaultValue: item?.homework,
                    placeholder: "اكتب الواجب المطلوب لهذه الحصة..."
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 84,
                    columnNumber: 419
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 84,
                columnNumber: 389
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "الحفظ المطلوب",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "memorization",
                    rows: 3,
                    defaultValue: item?.memorization,
                    placeholder: "اكتب المطلوب حفظه..."
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 84,
                    columnNumber: 570
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 84,
                columnNumber: 541
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                busy: busy || !data.groups.length,
                onClose: onClose,
                label: "حفظ الواجب"
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 84,
                columnNumber: 687
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 83,
        columnNumber: 10
    }, this);
}
_c9 = AssignmentForm;
function ProgressForm({ assignmentId, data, busy, onAction, onClose }) {
    _s6();
    const assignment = data.assignments.find((a)=>a.id === assignmentId);
    const members = data.memberships.filter((m)=>m.groupId === assignment?.groupId).map((m)=>data.students.find((s)=>s.id === m.studentId)).filter((s)=>!!s);
    const [states, setStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProgressForm.useState": ()=>Object.fromEntries(members.map({
                "ProgressForm.useState": (s)=>{
                    const p = data.progress.find({
                        "ProgressForm.useState.p": (p)=>p.assignmentId === assignmentId && p.studentId === s.id
                    }["ProgressForm.useState.p"]);
                    return [
                        s.id,
                        {
                            homeworkStatus: p?.homeworkStatus || "not_completed",
                            memorizationStatus: p?.memorizationStatus || "not_completed"
                        }
                    ];
                }
            }["ProgressForm.useState"]))
    }["ProgressForm.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "form-stack",
        onSubmit: async (e)=>{
            e.preventDefault();
            if (await onAction("saveProgress", {
                assignmentId,
                records: members.map((s)=>({
                        studentId: s.id,
                        ...states[s.id]
                    }))
            })) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 91,
                                columnNumber: 249
                            }, this),
                            " ",
                            assignment?.homework || "لا يوجد واجب"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 91,
                        columnNumber: 243
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(assignment?.lessonDate || "")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 91,
                        columnNumber: 318
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 91,
                columnNumber: 217
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-table",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "الطالب"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 91,
                                columnNumber: 444
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "الواجب"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 91,
                                columnNumber: 463
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "الحفظ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 91,
                                columnNumber: 482
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 91,
                        columnNumber: 411
                    }, this),
                    members.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "progress-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: s.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals.tsx",
                                    lineNumber: 91,
                                    columnNumber: 565
                                }, this),
                                [
                                    "homeworkStatus",
                                    "memorizationStatus"
                                ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        "aria-label": `${key === "homeworkStatus" ? "الواجب" : "الحفظ"} - ${s.name}`,
                                        value: states[s.id]?.[key],
                                        onChange: (e)=>setStates({
                                                ...states,
                                                [s.id]: {
                                                    ...states[s.id],
                                                    [key]: e.target.value
                                                }
                                            }),
                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["completionLabels"]).map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: value,
                                                children: label
                                            }, value, false, {
                                                fileName: "[project]/src/components/modals.tsx",
                                                lineNumber: 91,
                                                columnNumber: 941
                                            }, this))
                                    }, key, false, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 91,
                                        columnNumber: 654
                                    }, this))
                            ]
                        }, s.id, true, {
                            fileName: "[project]/src/components/modals.tsx",
                            lineNumber: 91,
                            columnNumber: 524
                        }, this)),
                    !members.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "empty-inline",
                        children: "لا يوجد طلاب في هذه المجموعة."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 91,
                        columnNumber: 1032
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 91,
                columnNumber: 379
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                busy: busy || !members.length,
                onClose: onClose,
                label: "حفظ المتابعة"
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 91,
                columnNumber: 1104
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 91,
        columnNumber: 10
    }, this);
}
_s6(ProgressForm, "iICZIYK/cgPJIT1zpduTGoplUnc=");
_c10 = ProgressForm;
function StudentProfile({ studentId, data, onOpen }) {
    const s = data.students.find((s)=>s.id === studentId);
    if (!s) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "empty-inline",
        children: "الطالب غير موجود."
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 94,
        columnNumber: 73
    }, this);
    const memberships = data.memberships.filter((m)=>m.studentId === s.id);
    const records = data.attendance.filter((a)=>a.studentId === s.id);
    const present = records.filter((a)=>a.status === "present").length;
    const absent = records.length - present;
    const percent = records.length ? Math.round(present / records.length * 100) : 0;
    const balance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentBalance"])(data, s.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentMonth"])());
    const payments = data.payments.filter((p)=>p.studentId === s.id).sort((a, b)=>b.paymentDate.localeCompare(a.paymentDate));
    const progress = data.progress.filter((p)=>p.studentId === s.id).sort((a, b)=>(data.assignments.find((x)=>x.id === b.assignmentId)?.lessonDate || "").localeCompare(data.assignments.find((x)=>x.id === a.assignmentId)?.lessonDate || ""));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "profile",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "avatar avatar-xl",
                        children: s.name.slice(0, 1)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 97,
                        columnNumber: 64
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: s.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 97,
                                columnNumber: 130
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    s.grade,
                                    " ",
                                    s.phone ? ` · ${s.phone}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 97,
                                columnNumber: 147
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tag-list",
                                children: [
                                    memberships.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tag",
                                            children: data.groups.find((g)=>g.id === m.groupId)?.name
                                        }, m.id, false, {
                                            fileName: "[project]/src/components/modals.tsx",
                                            lineNumber: 97,
                                            columnNumber: 244
                                        }, this)),
                                    !memberships.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tag",
                                        children: "بدون مجموعة"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 97,
                                        columnNumber: 359
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `status ${!balance.due ? "status-neutral" : balance.status === "paid" ? "status-paid" : balance.status === "partial" ? "status-partial" : "status-unpaid"}`,
                                        children: !balance.due ? "بدون اشتراك" : balance.status === "paid" ? "مدفوع هذا الشهر" : balance.status === "partial" ? "مدفوع جزئياً" : "غير مدفوع هذا الشهر"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 97,
                                        columnNumber: 400
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 97,
                                columnNumber: 196
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 97,
                        columnNumber: 125
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button-light button-small",
                        onClick: ()=>onOpen({
                                type: "student",
                                item: s
                            }, true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 97,
                                columnNumber: 855
                            }, this),
                            " تعديل"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 97,
                        columnNumber: 743
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 97,
                columnNumber: 35
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-stats",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "نسبة الحضور"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 98,
                                columnNumber: 41
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    percent,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 98,
                                columnNumber: 65
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 98,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "الحصص الحاضرة"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 98,
                                columnNumber: 103
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: present
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 98,
                                columnNumber: 129
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 98,
                        columnNumber: 98
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "الحصص الغائبة"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 98,
                                columnNumber: 166
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: absent
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 98,
                                columnNumber: 192
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 98,
                        columnNumber: 161
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "المتبقي هذا الشهر"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 98,
                                columnNumber: 228
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(balance.remaining),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "ج.م"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 98,
                                        columnNumber: 299
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 98,
                                columnNumber: 258
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 98,
                        columnNumber: 223
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 98,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-line",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "سجل المدفوعات"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 99,
                                columnNumber: 68
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-link",
                                onClick: ()=>onOpen({
                                        type: "payment",
                                        studentId: s.id
                                    }, true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 99,
                                        columnNumber: 187
                                    }, this),
                                    " تسجيل دفعة"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 99,
                                columnNumber: 90
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 99,
                        columnNumber: 38
                    }, this),
                    payments.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "compact-table",
                        children: payments.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            data.groups.find((g)=>g.id === p.groupId)?.name || "مجموعة",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(p.paymentDate),
                                                    " · ",
                                                    p.month
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modals.tsx",
                                                lineNumber: 99,
                                                columnNumber: 382
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 99,
                                        columnNumber: 315
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])(p.amount),
                                            " ج.م"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 99,
                                        columnNumber: 443
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 99,
                                columnNumber: 299
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 99,
                        columnNumber: 249
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "لا توجد دفعات مسجلة."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 99,
                        columnNumber: 494
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 99,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "متابعة الواجب والحفظ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 100,
                        columnNumber: 38
                    }, this),
                    progress.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "compact-table",
                        children: progress.map((p)=>{
                            const a = data.assignments.find((a)=>a.id === p.assignmentId);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            data.groups.find((g)=>g.id === a?.groupId)?.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(a?.lessonDate || "")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals.tsx",
                                                lineNumber: 100,
                                                columnNumber: 280
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 100,
                                        columnNumber: 224
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "الواجب: ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["completionLabels"][p.homeworkStatus],
                                            " · الحفظ: ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["completionLabels"][p.memorizationStatus]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 100,
                                        columnNumber: 335
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 100,
                                columnNumber: 208
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 100,
                        columnNumber: 86
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "لا توجد متابعة مسجلة بعد."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 100,
                        columnNumber: 462
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 100,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "سجل الحضور"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 101,
                        columnNumber: 38
                    }, this),
                    records.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "compact-table",
                        children: records.sort((a, b)=>b.lessonDate.localeCompare(a.lessonDate)).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            data.groups.find((g)=>g.id === a.groupId)?.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(a.lessonDate)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals.tsx",
                                                lineNumber: 101,
                                                columnNumber: 251
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 101,
                                        columnNumber: 196
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `status ${a.status === "present" ? "status-paid" : "status-unpaid"}`,
                                        children: a.status === "present" ? "حاضر" : "غائب"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals.tsx",
                                        lineNumber: 101,
                                        columnNumber: 299
                                    }, this)
                                ]
                            }, a.id, true, {
                                fileName: "[project]/src/components/modals.tsx",
                                lineNumber: 101,
                                columnNumber: 180
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 101,
                        columnNumber: 75
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "لا توجد سجلات حضور بعد."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 101,
                        columnNumber: 452
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 101,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "ملاحظات المعلم"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 101,
                        columnNumber: 540
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "note-box",
                        children: s.notes || "لا توجد ملاحظات مضافة لهذا الطالب."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals.tsx",
                        lineNumber: 101,
                        columnNumber: 563
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 101,
                columnNumber: 507
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 97,
        columnNumber: 10
    }, this);
}
_c11 = StudentProfile;
function PasswordForm({ busy, onPassword }) {
    _s7();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "form-stack",
        onSubmit: async (e)=>{
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            if (val(f, "newPassword") !== val(f, "confirm")) {
                setError("كلمتا المرور غير متطابقتين");
                return;
            }
            const result = await onPassword(val(f, "oldPassword"), val(f, "newPassword"));
            if (result) setError(result);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "كلمة المرور الحالية",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    name: "oldPassword",
                    required: true,
                    autoComplete: "current-password"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 105,
                    columnNumber: 407
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 105,
                columnNumber: 372
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "كلمة المرور الجديدة",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    name: "newPassword",
                    required: true,
                    minLength: 10,
                    autoComplete: "new-password"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 105,
                    columnNumber: 534
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 105,
                columnNumber: 499
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "تأكيد كلمة المرور الجديدة",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    name: "confirm",
                    required: true,
                    minLength: 10,
                    autoComplete: "new-password"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals.tsx",
                    lineNumber: 105,
                    columnNumber: 678
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 105,
                columnNumber: 637
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 105,
                columnNumber: 787
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button button-primary",
                disabled: busy,
                children: busy ? "جارٍ الحفظ..." : "تحديث كلمة المرور"
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 105,
                columnNumber: 829
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: "سيتم تسجيل خروج جميع الجلسات بعد تغيير كلمة المرور."
            }, void 0, false, {
                fileName: "[project]/src/components/modals.tsx",
                lineNumber: 105,
                columnNumber: 942
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 105,
        columnNumber: 50
    }, this);
}
_s7(PasswordForm, "Wysf5k9/9rbzWl+spWgJpEWy35U=");
_c12 = PasswordForm;
function ModalRenderer(props) {
    const { modal, data, month, onClose, onOpen, onAction, busy, onLogin, onPassword, demoCredentials } = props;
    if (modal.type === "login") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
        title: "تسجيل الدخول",
        subtitle: "لوحة مستر ميخائيل توما",
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginForm, {
            onLogin: onLogin,
            busy: busy,
            demoCredentials: demoCredentials
        }, void 0, false, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 110,
            columnNumber: 119
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 110,
        columnNumber: 38
    }, this);
    if (modal.type === "student") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
        title: modal.item ? "تعديل بيانات الطالب" : "إضافة طالب جديد",
        subtitle: "احتفظ بكل بيانات الطالب في مكان واحد",
        wide: true,
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentForm, {
            item: modal.item,
            data: data,
            busy: busy,
            onAction: onAction,
            onClose: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 111,
            columnNumber: 182
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 111,
        columnNumber: 40
    }, this);
    if (modal.type === "group") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
        title: modal.item ? "تعديل المجموعة" : "إضافة مجموعة جديدة",
        subtitle: "نظّم الطلاب والحصص والاشتراك الشهري",
        wide: true,
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GroupForm, {
            item: modal.item,
            data: data,
            busy: busy,
            onAction: onAction,
            onClose: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 112,
            columnNumber: 177
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 112,
        columnNumber: 38
    }, this);
    if (modal.type === "attendance") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
        title: "تسجيل الحضور والغياب",
        subtitle: "يمكن تعديل سجل أي حصة باختيار تاريخها",
        wide: true,
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttendanceForm, {
            groupId: modal.groupId,
            lessonDate: modal.lessonDate,
            data: data,
            busy: busy,
            onAction: onAction,
            onClose: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 113,
            columnNumber: 152
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 113,
        columnNumber: 43
    }, this);
    if (modal.type === "payment") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
        title: modal.item ? "تعديل الدفعة" : "تسجيل دفعة جديدة",
        subtitle: "يمكن تسجيل دفعات جزئية لكل مجموعة",
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentForm, {
            item: modal.item,
            studentId: modal.studentId,
            groupId: modal.groupId,
            initialMonth: month,
            data: data,
            busy: busy,
            onAction: onAction,
            onClose: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 114,
            columnNumber: 168
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 114,
        columnNumber: 40
    }, this);
    if (modal.type === "expense") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
        title: modal.item ? "تعديل المصروف" : "إضافة مصروف",
        subtitle: "سجّل مصروفاتك وتابع تفاصيلها",
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpenseForm, {
            item: modal.item,
            busy: busy,
            onAction: onAction,
            onClose: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 115,
            columnNumber: 159
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 115,
        columnNumber: 40
    }, this);
    if (modal.type === "assignment") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
        title: modal.item ? "تعديل الواجب والحفظ" : "إضافة واجب وحفظ",
        subtitle: "لكل مجموعة سجل مستقل من الواجبات",
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssignmentForm, {
            item: modal.item,
            groupId: modal.groupId,
            data: data,
            busy: busy,
            onAction: onAction,
            onClose: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 116,
            columnNumber: 176
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 116,
        columnNumber: 43
    }, this);
    if (modal.type === "progress") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
        title: "متابعة الواجب والحفظ",
        subtitle: "سجّل مستوى إنجاز كل طالب",
        wide: true,
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressForm, {
            assignmentId: modal.assignmentId,
            data: data,
            busy: busy,
            onAction: onAction,
            onClose: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 117,
            columnNumber: 137
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 117,
        columnNumber: 41
    }, this);
    if (modal.type === "profile") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
        title: "ملف الطالب",
        subtitle: "نظرة شاملة على بيانات الطالب وتقدمه",
        wide: true,
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentProfile, {
            studentId: modal.studentId,
            data: data,
            onOpen: onOpen
        }, void 0, false, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 118,
            columnNumber: 137
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 118,
        columnNumber: 40
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
        title: "تغيير كلمة المرور",
        subtitle: "احرص على استخدام كلمة مرور قوية وفريدة",
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PasswordForm, {
            busy: busy,
            onPassword: onPassword
        }, void 0, false, {
            fileName: "[project]/src/components/modals.tsx",
            lineNumber: 119,
            columnNumber: 112
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals.tsx",
        lineNumber: 119,
        columnNumber: 10
    }, this);
}
_c13 = ModalRenderer;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "Field");
__turbopack_context__.k.register(_c2, "Actions");
__turbopack_context__.k.register(_c3, "LoginForm");
__turbopack_context__.k.register(_c4, "StudentForm");
__turbopack_context__.k.register(_c5, "GroupForm");
__turbopack_context__.k.register(_c6, "AttendanceForm");
__turbopack_context__.k.register(_c7, "PaymentForm");
__turbopack_context__.k.register(_c8, "ExpenseForm");
__turbopack_context__.k.register(_c9, "AssignmentForm");
__turbopack_context__.k.register(_c10, "ProgressForm");
__turbopack_context__.k.register(_c11, "StudentProfile");
__turbopack_context__.k.register(_c12, "PasswordForm");
__turbopack_context__.k.register(_c13, "ModalRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/demo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeDemoData",
    ()=>makeDemoData
]);
const names = [
    "أحمد محمد علي",
    "مريم أحمد حسن",
    "يوسف محمود إبراهيم",
    "فاطمة خالد سعيد",
    "عمر أشرف عادل",
    "نورهان محمد سمير",
    "عبد الرحمن مصطفى",
    "ملك حسام أحمد",
    "زياد طارق محمود",
    "سارة عمرو حسن",
    "محمد شريف السيد",
    "جنى أيمن محمد",
    "علي أحمد عبد الله",
    "ياسمين عادل فتحي",
    "كريم محمود حسن",
    "منة الله أشرف",
    "آدم وليد محمد",
    "حبيبة محمد طارق",
    "مصطفى خالد إبراهيم",
    "ريم أحمد سامي",
    "عمر محمد صلاح",
    "فرح محمود علي",
    "خالد حسام سعيد",
    "لينا شريف أحمد",
    "يوسف عادل عمر",
    "روان محمد حسن",
    "عبد الله أحمد محمود",
    "آية خالد سمير"
];
function dateOffset(days) {
    const d = new Date();
    d.setDate(d.getDate() - days);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function monthOffset(months) {
    const d = new Date();
    d.setDate(1);
    d.setMonth(d.getMonth() - months);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function makeDemoData() {
    const weekday = new Date().getDay();
    const groups = [
        {
            id: 1,
            name: "الصف الأول الثانوي",
            grade: "الأول الثانوي",
            subject: "اللغة العربية",
            day: weekday,
            time: "14:00",
            duration: 90,
            monthlyFee: 400,
            color: "blue"
        },
        {
            id: 2,
            name: "الصف الثاني الإعدادي",
            grade: "الثاني الإعدادي",
            subject: "اللغة العربية",
            day: weekday,
            time: "16:00",
            duration: 90,
            monthlyFee: 350,
            color: "purple"
        },
        {
            id: 3,
            name: "الصف الثالث الإعدادي",
            grade: "الثالث الإعدادي",
            subject: "اللغة العربية",
            day: (weekday + 1) % 7,
            time: "15:00",
            duration: 90,
            monthlyFee: 400,
            color: "orange"
        },
        {
            id: 4,
            name: "الصف الأول الإعدادي",
            grade: "الأول الإعدادي",
            subject: "اللغة العربية",
            day: (weekday + 2) % 7,
            time: "12:00",
            duration: 90,
            monthlyFee: 300,
            color: "teal"
        },
        {
            id: 5,
            name: "الصف الثاني الثانوي",
            grade: "الثاني الثانوي",
            subject: "اللغة العربية",
            day: (weekday + 3) % 7,
            time: "17:00",
            duration: 90,
            monthlyFee: 450,
            color: "pink"
        },
        {
            id: 6,
            name: "مجموعة المراجعة",
            grade: "الثالث الثانوي",
            subject: "اللغة العربية",
            day: (weekday + 4) % 7,
            time: "13:00",
            duration: 90,
            monthlyFee: 450,
            color: "indigo"
        }
    ];
    const students = names.map((name, i)=>({
            id: i + 1,
            name,
            grade: groups[i % 6].grade,
            phone: `01${[
                0,
                1,
                2,
                5
            ][i % 4]}${String(78234100 + i * 147).padStart(8, "0")}`,
            monthlyFee: groups[i % 6].monthlyFee,
            notes: i % 5 === 0 ? "طالب مجتهد ويشارك بانتظام في الحصة." : ""
        }));
    const memberships = students.map((s, i)=>({
            id: i + 1,
            studentId: s.id,
            groupId: i % 6 + 1,
            fee: groups[i % 6].monthlyFee
        }));
    [
        1,
        4,
        8,
        13
    ].forEach((studentId, i)=>memberships.push({
            id: memberships.length + 1,
            studentId,
            groupId: 6,
            fee: groups[5].monthlyFee
        }));
    const attendance = [];
    memberships.forEach((m, i)=>[
            2,
            9,
            16,
            23
        ].forEach((offset, j)=>attendance.push({
                id: attendance.length + 1,
                studentId: m.studentId,
                groupId: m.groupId,
                lessonDate: dateOffset(offset),
                status: (i * 3 + j) % 11 === 0 ? "absent" : "present"
            })));
    const payments = [];
    for(let back = 5; back >= 0; back--){
        const month = monthOffset(back);
        memberships.forEach((m, i)=>{
            if ((i + back * 2) % 7 === 0 || back === 0 && i % 8 === 3) return;
            const partial = back === 0 && i % 9 === 2;
            const day = back === 0 ? Math.min(new Date().getDate(), 8 + i % 8) : 8 + i % 14;
            payments.push({
                id: payments.length + 1,
                studentId: m.studentId,
                groupId: m.groupId,
                amount: partial ? Math.round(m.fee / 2) : m.fee,
                paymentDate: `${month}-${String(day).padStart(2, "0")}`,
                month,
                notes: ""
            });
        });
    }
    const expenses = [];
    for(let back = 5; back >= 0; back--){
        const month = monthOffset(back);
        const day = back === 0 ? Math.max(1, Math.min(new Date().getDate(), 5)) : 5;
        [
            [
                "إيجار مكان الدروس",
                "الإيجار",
                1200
            ],
            [
                "طباعة مذكرات الطلاب",
                "الطباعة",
                450 + back * 35
            ],
            [
                "أدوات ومستلزمات تعليمية",
                "الأدوات التعليمية",
                260 + back * 20
            ],
            [
                "مواصلات",
                "المواصلات",
                180 + back * 15
            ]
        ].forEach(([description, category, amount], i)=>expenses.push({
                id: expenses.length + 1,
                description: String(description),
                category: String(category),
                amount: Number(amount),
                expenseDate: `${month}-${String(Math.min(back === 0 ? new Date().getDate() : 28, day + i * 3)).padStart(2, "0")}`
            }));
    }
    const assignments = [];
    groups.forEach((g, i)=>{
        assignments.push({
            id: assignments.length + 1,
            groupId: g.id,
            lessonDate: dateOffset(2),
            homework: i % 2 ? "حل تدريبات الوحدة الثانية من المذكرة" : "حل تدريبات الدرس ومراجعة القواعد",
            memorization: i % 2 ? "حفظ المفردات الجديدة ومعانيها" : "حفظ النص الأدبي من السطر الأول إلى الخامس"
        });
        assignments.push({
            id: assignments.length + 1,
            groupId: g.id,
            lessonDate: dateOffset(9),
            homework: "مراجعة الدرس السابق وحل التقييم",
            memorization: "مراجعة ما تم حفظه في الحصة"
        });
    });
    const progress = [];
    assignments.forEach((a)=>memberships.filter((m)=>m.groupId === a.groupId).forEach((m, i)=>progress.push({
                id: progress.length + 1,
                assignmentId: a.id,
                studentId: m.studentId,
                homeworkStatus: i % 5 === 0 ? "not_completed" : i % 4 === 0 ? "partial" : "completed",
                memorizationStatus: i % 6 === 0 ? "not_completed" : i % 4 === 0 ? "partial" : "completed"
            })));
    return {
        students,
        groups,
        memberships,
        attendance,
        payments,
        expenses,
        assignments,
        progress
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "completionLabels",
    ()=>completionLabels,
    "currentMonth",
    ()=>currentMonth,
    "days",
    ()=>days,
    "formatDate",
    ()=>formatDate,
    "formatMoney",
    ()=>formatMoney,
    "paidFor",
    ()=>paidFor,
    "studentBalance",
    ()=>studentBalance,
    "today",
    ()=>today
]);
const days = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت"
];
const categories = [
    "المواصلات",
    "الطباعة",
    "الأدوات التعليمية",
    "الإيجار",
    "أخرى"
];
const completionLabels = {
    completed: "مكتمل",
    partial: "مكتمل جزئياً",
    not_completed: "غير مكتمل"
};
const today = ()=>{
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
const currentMonth = ()=>today().slice(0, 7);
const formatMoney = (amount)=>new Intl.NumberFormat("en-US").format(Math.round(amount));
const formatDate = (date, options = {
    day: "numeric",
    month: "short",
    year: "numeric"
})=>{
    if (!date) return "—";
    const d = new Date(`${date.slice(0, 10)}T12:00:00`);
    return Number.isNaN(d.getTime()) ? "—" : new Intl.DateTimeFormat("ar-EG", options).format(d);
};
const paidFor = (data, studentId, groupId, month)=>data.payments.filter((p)=>p.studentId === studentId && p.groupId === groupId && p.month === month).reduce((sum, p)=>sum + p.amount, 0);
const studentBalance = (data, studentId, month)=>{
    const ms = data.memberships.filter((m)=>m.studentId === studentId);
    const due = ms.reduce((sum, m)=>sum + m.fee, 0);
    const paid = ms.reduce((sum, m)=>sum + Math.min(m.fee, paidFor(data, studentId, m.groupId, month)), 0);
    return {
        due,
        paid,
        remaining: Math.max(0, due - paid),
        status: due > 0 && paid >= due ? "paid" : paid > 0 ? "partial" : "unpaid"
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_0g5x6_7k27o84._.js.map