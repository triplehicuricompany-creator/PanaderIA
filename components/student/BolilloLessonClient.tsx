"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { StudentShell } from "@/components/student/StudentShell";
import { bolilloCourse } from "@/content/bolillo-course";

type Module = (typeof bolilloCourse.modules)[number];
type Progress = { completed: number[]; current: number };
const STORAGE_KEY = "panaderia-bolillo-progress-v1";
const defaultProgress: Progress = { completed: [1, 2, 3], current: 4 };

function readProgress(): Progress {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

function saveProgress(progress: Progress) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function BolilloLessonClient({ module }: { module: Module }) {
  const [progress, setProgress] = useState(defaultProgress);
  const [celebrating, setCelebrating] = useState(false);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const isCompleted = progress.completed.includes(module.number);
  const previous = module.number > 1 ? module.number - 1 : null;
  const next = module.number < bolilloCourse.modules.length ? module.number + 1 : null;

  useEffect(() => setProgress(readProgress()), []);

  const completionPercent = useMemo(() => Math.round((progress.completed.length / bolilloCourse.modules.length) * 100), [progress.completed.length]);

  function markCompleted() {
    const completed = Array.from(new Set([...progress.completed, module.number])).sort((a, b) => a - b);
    const updated = { completed, current: next ?? module.number };
    setProgress(updated);
    saveProgress(updated);
    setCelebrating(true);
    window.setTimeout(() => setCelebrating(false), 2600);
  }

  return (
    <StudentShell title={`Módulo ${module.number}: ${module.title}`}>
      <div className="mx-auto max-w-3xl space-y-4 pb-24 sm:pb-8">
        {celebrating && (
          <div className="fixed inset-x-4 bottom-4 z-50 rounded-3xl border border-coral/25 bg-white p-4 text-center shadow-soft sm:left-auto sm:w-96">
            <p className="text-3xl">🎉</p>
            <p className="font-display text-xl font-black text-cocoa">¡Lección completada!</p>
            <p className="text-sm text-cocoa/65">Tu avance quedó guardado en este celular.</p>
          </div>
        )}

        <nav className="flex items-center justify-between gap-2 text-sm" aria-label="Navegación de lecciones">
          {previous ? <Link className="btn-secondary min-h-11 px-4" href={`/alumno/curso/bolillo/${previous}`}>← Anterior</Link> : <span />}
          {next ? <Link className="btn-secondary min-h-11 px-4" href={`/alumno/curso/bolillo/${next}`}>Siguiente →</Link> : <Link className="btn-secondary min-h-11 px-4" href="/alumno/dashboard">Dashboard</Link>}
        </nav>

        <article className="soft-card p-5 sm:p-7">
          <p className="text-sm font-bold text-coral">Curso Maestro de Bolillo</p>
          <h2 className="mt-2 font-display text-2xl font-black leading-tight text-cocoa sm:text-3xl">{module.title}</h2>
          <p className="mt-3 text-base leading-7 text-cocoa/72">{module.objective}</p>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-toast/10"><div className="h-full rounded-full bg-coral" style={{ width: `${completionPercent}%` }} /></div>
          <p className="mt-2 text-xs font-bold text-toast">Progreso del curso: {completionPercent}%</p>
        </article>

        <section className="soft-card p-5 sm:p-7">
          <h3 className="font-display text-xl font-black text-cocoa">Lecciones del módulo</h3>
          <div className="mt-4 grid gap-3">
            {module.lessons.map((lesson, index) => (
              <div key={lesson} className="flex items-start gap-3 rounded-2xl bg-white/70 p-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-peach/70 text-sm font-black text-toast">{index + 1}</span>
                <p className="pt-1 text-sm font-semibold leading-5 text-cocoa">{lesson}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="rounded-3xl border border-coral/20 bg-peach/45 p-5 shadow-soft">
          <p className="text-sm font-black text-coral">Boly™ te acompaña</p>
          <p className="mt-2 text-sm leading-6 text-cocoa/75">{module.bolyPrompt}</p>
          <p className="mt-3 text-xs text-cocoa/60">Consejo: observa una señal visual, practica con calma y registra qué cambió.</p>
        </aside>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="soft-card p-5">
            <h3 className="font-display text-xl font-black text-cocoa">Recursos descargables</h3>
            <Link className="btn-secondary mt-4 min-h-12 w-full" href={module.resourceHref}>Abrir recurso del módulo</Link>
            <Link className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-black text-toast" href={bolilloCourse.downloadablePdf.href}>Manual maestro</Link>
          </div>
          <div className="soft-card p-5">
            <h3 className="font-display text-xl font-black text-cocoa">Videos relacionados</h3>
            <div className="mt-4 rounded-2xl bg-white/70 p-4 text-sm leading-6 text-cocoa/70">
              <p className="font-bold text-toast">{module.title}</p>
              <p>QR: /qr/{module.videoQr}</p>
              <p>Video privado preparado para alumnos.</p>
            </div>
          </div>
        </section>

        <section className="soft-card p-5 sm:p-7">
          <h3 className="font-display text-xl font-black text-cocoa">Mini autoevaluación visual</h3>
          <div className="mt-4 grid gap-3">
            {module.photoSlots.map((slot) => (
              <button key={slot} type="button" onClick={() => setAnswers((value) => ({ ...value, [slot]: !value[slot] }))} className={`min-h-12 rounded-2xl border px-4 text-left text-sm font-bold transition ${answers[slot] ? "border-sage/50 bg-sage/15 text-cocoa" : "border-toast/10 bg-white/70 text-cocoa/70"}`}>
                {answers[slot] ? "✓" : "○"} Puedo reconocer: {slot}
              </button>
            ))}
          </div>
        </section>

        <button type="button" onClick={markCompleted} className="btn-primary min-h-14 w-full text-base">{isCompleted ? "Completado · guardar de nuevo" : "Marcar como completado"}</button>
      </div>
    </StudentShell>
  );
}
