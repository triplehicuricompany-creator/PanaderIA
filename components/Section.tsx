import type { ReactNode } from "react";

export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-coral sm:text-sm">{eyebrow}</p> : null}
        <h2 className="max-w-4xl font-display text-3xl font-bold leading-tight text-toast sm:text-5xl">{title}</h2>
        <div className="mt-8 text-cocoa/78">{children}</div>
      </div>
    </section>
  );
}
