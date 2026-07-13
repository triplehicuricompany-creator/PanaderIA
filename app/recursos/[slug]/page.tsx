import Link from "next/link";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { Section } from "@/components/Section";
import { bolilloCourse } from "@/content/bolillo-course";

const resources = [
  { slug: "manual-maestro-bolillo", title: bolilloCourse.downloadablePdf.title, file: "LIBRO_MAESTRO_BOLILLO_PUBLICACION.md" },
  ...bolilloCourse.modules.map((module) => ({
    slug: `modulo-${String(module.number).padStart(2, "0")}`,
    title: `Módulo ${String(module.number).padStart(2, "0")} · ${module.title}`,
    file: module.resourceFile
  }))
];

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  const filePath = path.join(process.cwd(), resource.file);
  const content = await readFile(filePath, "utf8");

  return (
    <Section eyebrow="Recurso descargable" title={resource.title}>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/alumno/biblioteca" className="rounded-full border border-coral/35 bg-white/75 px-5 py-3 text-center font-bold text-toast hover:bg-peach/35">
          Volver a biblioteca
        </Link>
        <Link href="/cursos/bolillo-premium" className="rounded-full bg-coral px-5 py-3 text-center font-black text-white hover:bg-toast">
          Ver ruta completa
        </Link>
      </div>
      <pre className="max-h-[70vh] overflow-auto whitespace-pre-wrap rounded-3xl border border-toast/10 bg-white/80 p-6 text-sm leading-7 text-cocoa/80 shadow-soft">
        {content}
      </pre>
    </Section>
  );
}
