import { getCurrentTeacher, getDataset } from "@/lib/server";

export const dynamic = "force-dynamic";
export async function GET() {
  if (!await getCurrentTeacher()) return Response.json({ error: "يرجى تسجيل الدخول أولاً" }, { status: 401 });
  return Response.json(await getDataset(), { headers: { "Cache-Control": "private, no-store" } });
}
