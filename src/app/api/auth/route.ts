import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { eq, lt } from "drizzle-orm";
import { db } from "@/db";
import { sessions, teachers } from "@/db/schema";
import { COOKIE_NAME, ensureSeeded, getCurrentTeacher, hashPassword, tokenHash, verifyPassword } from "@/lib/server";

export const dynamic = "force-dynamic";
export async function POST(request: NextRequest) {
  try {
    if (!request.headers.get("content-type")?.includes("application/json")) return NextResponse.json({ error: "طلب غير صالح" }, { status: 400 });
    const body = await request.json();
    await ensureSeeded();
    if (body.action === "login") {
      const username = String(body.username || "").trim().toLowerCase();
      const password = String(body.password || "");
      if (username.length > 100 || password.length > 200) return NextResponse.json({ error: "بيانات الدخول غير صحيحة" }, { status: 400 });
      const [teacher] = await db.select().from(teachers).where(eq(teachers.username, username)).limit(1);
      if (!teacher) return NextResponse.json({ error: "اسم المستخدم أو كلمة المرور غير صحيحة" }, { status: 401 });
      if (teacher.lockedUntil && teacher.lockedUntil > new Date()) return NextResponse.json({ error: "تم إيقاف المحاولات مؤقتاً. حاول بعد 15 دقيقة." }, { status: 429 });
      if (!verifyPassword(password, teacher.passwordHash)) {
        const attempts = teacher.failedAttempts + 1;
        await db.update(teachers).set({ failedAttempts: attempts >= 5 ? 0 : attempts, lockedUntil: attempts >= 5 ? new Date(Date.now() + 15 * 60 * 1000) : null }).where(eq(teachers.id, teacher.id));
        return NextResponse.json({ error: attempts >= 5 ? "محاولات كثيرة. حاول بعد 15 دقيقة." : "اسم المستخدم أو كلمة المرور غير صحيحة" }, { status: 401 });
      }
      await db.update(teachers).set({ failedAttempts: 0, lockedUntil: null }).where(eq(teachers.id, teacher.id));
      await db.delete(sessions).where(lt(sessions.expiresAt, new Date()));
      const token = randomBytes(32).toString("hex");
      const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      await db.insert(sessions).values({ id: tokenHash(token), teacherId: teacher.id, expiresAt });
      const response = NextResponse.json({ ok: true });
      const secure = request.headers.get("x-forwarded-proto") === "https" || request.nextUrl.protocol === "https:";
      response.cookies.set(COOKIE_NAME, token, { httpOnly: true, secure, sameSite: "strict", path: "/", expires: expiresAt });
      return response;
    }
    if (body.action === "logout") {
      const token = request.cookies.get(COOKIE_NAME)?.value;
      if (token) await db.delete(sessions).where(eq(sessions.id, tokenHash(token)));
      const response = NextResponse.json({ ok: true });
      response.cookies.set(COOKIE_NAME, "", { httpOnly: true, sameSite: "strict", path: "/", maxAge: 0 });
      return response;
    }
    if (body.action === "password") {
      const current = await getCurrentTeacher();
      if (!current) return NextResponse.json({ error: "يرجى تسجيل الدخول أولاً" }, { status: 401 });
      const [teacher] = await db.select().from(teachers).where(eq(teachers.id, current.id));
      const oldPassword = String(body.oldPassword || "");
      const newPassword = String(body.newPassword || "");
      if (!verifyPassword(oldPassword, teacher.passwordHash)) return NextResponse.json({ error: "كلمة المرور الحالية غير صحيحة" }, { status: 400 });
      if (newPassword.length < 10 || newPassword.length > 200) return NextResponse.json({ error: "يجب أن تتكون كلمة المرور من 10 أحرف على الأقل" }, { status: 400 });
      await db.update(teachers).set({ passwordHash: hashPassword(newPassword) }).where(eq(teachers.id, current.id));
      await db.delete(sessions).where(eq(sessions.teacherId, current.id));
      const response = NextResponse.json({ ok: true });
      response.cookies.set(COOKIE_NAME, "", { httpOnly: true, sameSite: "strict", path: "/", maxAge: 0 });
      return response;
    }
    return NextResponse.json({ error: "طلب غير معروف" }, { status: 400 });
  } catch (error) {
    console.error("Authentication error", error);
    return NextResponse.json({ error: "تعذر إتمام الطلب، حاول مرة أخرى" }, { status: 500 });
  }
}
