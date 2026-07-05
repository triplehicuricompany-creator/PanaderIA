import type { ReactNode } from "react";

export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gold">{eyebrow}</p> : null}
        <h2 className="font-display text-3xl font-bold text-cream sm:text-5xl">{title}</h2>
        <div className="mt-8 text-cream/75">{children}</div>
      </div>
    </section>
  );
}
