import { modules } from "@/content/site";

export function Curriculum() {
  return (
    <div className="space-y-5">
      {modules.map((module) => (
        <article key={module.number} className="rounded-3xl border border-gold/20 bg-black/35 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gold/70">Módulo {module.number}</p>
              <h3 className="mt-2 font-display text-2xl text-gold">{module.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-cream/72">{module.objective}</p>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3 text-sm font-bold text-gold">QR: {module.videoQr}</div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-gold/10 bg-charcoal p-5">
              <p className="font-semibold text-cream">Lecciones</p>
              <ul className="mt-3 space-y-2 text-sm text-cream/70">
                {module.lessons.map((lesson) => <li key={lesson}>✦ {lesson}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-gold/10 bg-charcoal p-5">
              <p className="font-semibold text-cream">Fotografías preparadas</p>
              <ul className="mt-3 space-y-2 text-sm text-cream/70">
                {module.photoSlots.map((photo) => <li key={photo}>✦ {photo}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-gold/10 bg-charcoal p-5">
              <p className="font-semibold text-cream">Boly™ en este módulo</p>
              <p className="mt-3 text-sm leading-6 text-cream/70">{module.bolyPrompt}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
