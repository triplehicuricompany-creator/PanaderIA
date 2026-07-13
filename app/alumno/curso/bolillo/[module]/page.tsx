import { notFound } from "next/navigation";
import { BolilloLessonClient } from "@/components/student/BolilloLessonClient";
import { bolilloCourse } from "@/content/bolillo-course";

export function generateStaticParams() {
  return bolilloCourse.modules.map((module) => ({ module: String(module.number) }));
}

export default async function BolilloModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: moduleParam } = await params;
  const moduleNumber = Number(moduleParam);
  const module = bolilloCourse.modules.find((item) => item.number === moduleNumber);

  if (!module) notFound();

  return <BolilloLessonClient module={module} />;
}
