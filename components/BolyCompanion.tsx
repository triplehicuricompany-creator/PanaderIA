import type { ReactNode } from "react";

type BolyTone = "tip" | "encourage" | "error" | "next" | "welcome" | "celebrate" | "help";

const toneLabels: Record<BolyTone, string> = {
  tip: "Consejo de Boly™",
  encourage: "Ánimo con calma",
  error: "Si algo salió distinto",
  next: "Siguiente paso amable",
  welcome: "Bienvenida",
  celebrate: "Celebración de progreso",
  help: "Ayuda contextual"
};

const toneIcons: Record<BolyTone, string> = {
  tip: "🥖",
  encourage: "🤎",
  error: "🌾",
  next: "➡️",
  welcome: "👋",
  celebrate: "✨",
  help: "💬"
};

export function BolyAvatar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-coral/20 bg-gradient-to-br from-flour via-peach to-wheat shadow-soft ${className}`}>
      <img
        src="/assets/boly/boly-placeholder.svg"
        alt="Boly™, compañero educativo de PanaderIA"
        className="absolute inset-0 h-full w-full object-contain p-3"
      />
    </div>
  );
}

export function BolyMessage({ tone = "tip", title, children }: { tone?: BolyTone; title?: string; children: ReactNode }) {
  return (
    <aside className="rounded-[1.75rem] border border-coral/20 bg-white/70 p-5 shadow-soft backdrop-blur sm:p-6">
      <div className="flex gap-4">
        <BolyAvatar className="h-16 w-16 rounded-3xl" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-coral">{toneIcons[tone]} {toneLabels[tone]}</p>
          {title ? <h3 className="mt-2 font-display text-2xl font-bold text-toast">{title}</h3> : null}
          <div className="mt-2 text-sm leading-7 text-cocoa/80 sm:text-base">{children}</div>
        </div>
      </div>
    </aside>
  );
}
