import Link from "next/link";
import { modules } from "@/content/site";

export function Curriculum() {
  return (
    <div className="space-y-5">
      {modules.map((module, index) => {
        const previousModule = modules[index - 1];
        const nextModule = modules[index + 1];

        return (
          <article key={module.number} className="rounded-3xl border border-coral/20 bg-white/35 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-coral/70">Módulo {String(module.number).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-2xl text-coral">{module.title}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-cocoa/72">{module.objective}</p>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl border border-coral/20 bg-coral/10 px-4 py-3 text-sm font-bold text-coral">
                <span>QR: {module.videoQr}</span>
                <Link href={module.resourceHref} className="text-cocoa underline decoration-coral/45 underline-offset-4 hover:text-coral">
                  Abrir recurso del módulo
                </Link>
              </div>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-coral/10 bg-white/70 p-5">
                <p className="font-semibold text-cocoa">Lecciones</p>
                <ul className="mt-3 space-y-2 text-sm text-cocoa/70">
                  {module.lessons.map((lesson) => <li key={lesson}>✦ {lesson}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border border-coral/10 bg-white/70 p-5">
                <p className="font-semibold text-cocoa">Fotografías preparadas</p>
                <ul className="mt-3 space-y-2 text-sm text-cocoa/70">
                  {module.photoSlots.map((photo) => <li key={photo}>✦ {photo}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border border-coral/10 bg-white/70 p-5">
                <p className="font-semibold text-cocoa">Boly™ en este módulo</p>
                <p className="mt-3 text-sm leading-6 text-cocoa/70">{module.bolyPrompt}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-coral/10 bg-wheat/35 p-4 text-sm text-cocoa/70 md:flex-row md:items-center md:justify-between">
              <span>{previousModule ? `Vienes de: Módulo ${previousModule.number} · ${previousModule.title}` : "Inicio guiado: revisa el estándar del bolillo antes de practicar."}</span>
              <span className="font-semibold text-coral">{nextModule ? `Siguiente: Módulo ${nextModule.number} · ${nextModule.title}` : "Cierre: evidencia, certificado y plan de crecimiento."}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
