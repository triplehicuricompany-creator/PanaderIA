"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { bolilloCourse } from "@/content/bolillo-course";
import { demoStudent } from "@/content/platform";

const STORAGE_KEY = "panaderia-bolillo-progress-v1";

type Progress = { completed: number[]; current: number };
type ModuleState = "bloqueado" | "disponible" | "en progreso" | "completado";

const defaultProgress: Progress = { completed: [1, 2, 3], current: 4 };

function loadProgress(): Progress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

function moduleState(moduleNumber: number, progress: Progress): ModuleState {
  if (progress.completed.includes(moduleNumber)) return "completado";
  if (moduleNumber === progress.current) return "en progreso";
  if (moduleNumber === Math.min(progress.current + 1, bolilloCourse.modules.length)) return "disponible";
  return moduleNumber < progress.current ? "disponible" : "bloqueado";
}

const stateStyles: Record<ModuleState, string> = {
  completado: "border-sage/40 bg-sage/10 text-cocoa",
  "en progreso": "border-coral/40 bg-peach/45 text-cocoa",
  disponible: "border-wheat/70 bg-white/75 text-cocoa",
  bloqueado: "border-toast/10 bg-white/45 text-cocoa/55"
};

export function BolilloDashboardClient() {
  const [progress, setProgress] = useState(defaultProgress);
  const total = bolilloCourse.modules.length;

  useEffect(() => setProgress(loadProgress()), []);

  const completedCount = progress.completed.length;
  const percent = Math.round((completedCount / total) * 100);
  const currentModule = bolilloCourse.modules.find((module) => module.number === progress.current) ?? bolilloCourse.modules[0];
  const nextHref = `/alumno/curso/bolillo/${currentModule.number}`;

  const moduleCounts = useMemo(() => {
    return bolilloCourse.modules.reduce<Record<ModuleState, number>>((counts, module) => {
      counts[moduleState(module.number, progress)] += 1;
      return counts;
    }, { bloqueado: 0, disponible: 0, "en progreso": 0, completado: 0 });
  }, [progress]);

  return (
    <div className="space-y-5 pb-20 sm:pb-8">
      <section className="soft-card p-5 sm:p-6">
        <p className="text-sm font-bold text-coral">Hola, {demoStudent.name.split(" ")[0]} 👋</p>
        <h2 className="mt-2 font-display text-2xl font-black leading-tight text-cocoa sm:text-3xl">Tu bolillo maestro te espera</h2>
        <p className="mt-2 text-sm leading-6 text-cocoa/70">Continúa con calma desde el módulo guardado en este celular.</p>
        <Link href={nextHref} className="btn-primary mt-5 min-h-12 w-full sm:w-auto">Continuar donde me quedé</Link>
      </section>

      <section className="soft-card p-5 sm:p-6" aria-label="Progreso general del curso">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-toast">Progreso general</p>
            <p className="mt-1 text-sm text-cocoa/65">{completedCount} de {total} módulos completados</p>
          </div>
          <strong className="text-2xl text-coral">{percent}%</strong>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-toast/10" aria-hidden="true">
          <div className="h-full rounded-full bg-coral transition-all" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
          {Object.entries(moduleCounts).map(([label, count]) => <span key={label} className="rounded-2xl bg-white/65 px-3 py-2 capitalize text-cocoa/70">{count} {label}</span>)}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="font-display text-2xl font-black text-cocoa">14 módulos</h2>
          <span className="rounded-full bg-peach/60 px-3 py-1 text-xs font-bold text-toast">Mobile-first</span>
        </div>
        <div className="grid gap-3">
          {bolilloCourse.modules.map((module) => {
            const state = moduleState(module.number, progress);
            const locked = state === "bloqueado";
            return (
              <article key={module.number} className={`rounded-3xl border p-4 shadow-soft ${stateStyles[state]}`}>
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/75 text-sm font-black text-toast">{module.number}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold leading-snug text-cocoa">{module.title}</h3>
                      <span className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-toast">{state}</span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-cocoa/68">{module.objective}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-cocoa/65">
                      <span>{module.lessons.length} lecciones</span><span>•</span><span>Recurso descargable</span><span>•</span><span>Video relacionado</span>
                    </div>
                  </div>
                </div>
                <Link aria-disabled={locked} tabIndex={locked ? -1 : 0} href={locked ? "#" : `/alumno/curso/bolillo/${module.number}`} className={`mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 text-sm font-black ${locked ? "pointer-events-none bg-toast/10 text-cocoa/35" : "bg-white text-toast shadow-soft"}`}>
                  {locked ? "Completa módulos previos" : "Estudiar módulo"}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
