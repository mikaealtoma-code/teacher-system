import TeacherDashboard from "@/components/dashboard";
import { makeDemoData } from "@/lib/demo";
import { ensureSeeded, getCurrentTeacher, getDataset, hasDefaultDemoPassword } from "@/lib/server";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  await ensureSeeded();
  const teacher = await getCurrentTeacher();
  const data = teacher ? await getDataset() : makeDemoData();
  const demoCredentials = await hasDefaultDemoPassword();
  return <TeacherDashboard initialData={JSON.parse(JSON.stringify(data))} initialAuthenticated={!!teacher} demoCredentials={demoCredentials}/>;
}
