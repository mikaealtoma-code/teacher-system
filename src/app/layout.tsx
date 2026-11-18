import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "مستر ميخائيل توما | لوحة إدارة الدروس",
  description: "لوحة متكاملة لإدارة الطلاب والمجموعات والحضور والمدفوعات والواجبات.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
