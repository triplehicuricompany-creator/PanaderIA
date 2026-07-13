import type { ReactNode } from "react";

export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:py-18">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-coral sm:text-sm">{eyebrow}</p> : null}
        <h2 className="max-w-4xl font-display text-2xl font-bold leading-tight text-toast sm:text-4xl lg:text-5xl">{title}</h2>
        <div className="mt-6 text-cocoa/78 sm:mt-8">{children}</div>
      </div>
    </section>
  );
}
