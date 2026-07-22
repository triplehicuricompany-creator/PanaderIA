import Image from "next/image";

import type { BolyDialogueTone as BolyDialogueToneValue } from "@/content/boly-dialogue-tone";
import { getBolyImageOrFallback } from "@/content/boly-library";

export type { BolyDialogueTone } from "@/content/boly-dialogue-tone";
type BolyDialogueTone = BolyDialogueToneValue;

export type BolyDialogueProps = {
  imageId: string;
  message: string;
  title?: string;
  tone?: BolyDialogueTone;
  position?: "left" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type TonePresentation = {
  label: string;
  icon: string;
  accent: string;
};

const tonePresentations: Record<BolyDialogueTone, TonePresentation> = {
  welcome: { label: "Bienvenida", icon: "👋", accent: "border-coral/35" },
  tip: { label: "Consejo de Boly", icon: "✦", accent: "border-wheat" },
  warning: { label: "Atención", icon: "!", accent: "border-toast/45" },
  encouragement: { label: "Tú puedes", icon: "↗", accent: "border-sage" },
  success: { label: "Excelente", icon: "✓", accent: "border-sage" },
  question: { label: "Pregunta", icon: "?", accent: "border-coral/35" },
  error: { label: "Revisemos esto", icon: "↺", accent: "border-toast/45" },
  neutral: { label: "Boly dice", icon: "●", accent: "border-toast/25" }
};

const sizeStyles = {
  sm: { image: "h-32 w-32 sm:h-36 sm:w-36", bubble: "p-4", title: "text-lg", message: "text-sm leading-6" },
  md: { image: "h-40 w-40 sm:h-48 sm:w-48", bubble: "p-5 sm:p-6", title: "text-xl", message: "text-base leading-7" },
  lg: { image: "h-48 w-48 sm:h-60 sm:w-60", bubble: "p-6 sm:p-8", title: "text-2xl", message: "text-base leading-7 sm:text-lg sm:leading-8" }
} as const;

/** Returns a catalogued image, or the library's safe fallback for an unknown id. */
export function getBolyDialogueImage(imageId: string) {
  return getBolyImageOrFallback(imageId);
}

/**
 * A responsive, reusable educational message from Boly.
 * The image wrapper deliberately uses `object-contain` and generous space so the
 * transparent PNG remains whole, including Boly's hat, arms, and shoes.
 */
export function BolyDialogue({
  imageId,
  message,
  title,
  tone = "neutral",
  position = "left",
  size = "md",
  className = ""
}: BolyDialogueProps) {
  const image = getBolyDialogueImage(imageId);
  const presentation = tonePresentations[tone];
  const styles = sizeStyles[size];
  const isRight = position === "right";

  return (
    <aside
      aria-label={`${presentation.label}: mensaje de Boly`}
      className={`flex flex-col items-center gap-3 sm:items-stretch sm:gap-5 ${isRight ? "sm:flex-row-reverse" : "sm:flex-row"} ${className}`.trim()}
      data-position={position}
      data-size={size}
      data-tone={tone}
    >
      <div className={`relative shrink-0 ${styles.image}`}>
        <Image
          alt={`Boly, ${image.title.toLowerCase()}`}
          className="h-full w-full object-contain"
          height={320}
          sizes="(max-width: 639px) 8rem, (max-width: 1023px) 12rem, 15rem"
          src={image.src}
          width={320}
        />
      </div>

      <div className={`relative w-full rounded-[1.5rem] border bg-[#fffaf1] shadow-soft ${presentation.accent} ${styles.bubble}`}>
        <span
          aria-hidden="true"
          className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-b border-r bg-[#fffaf1] sm:block ${presentation.accent} ${isRight ? "-right-2 rotate-[225deg]" : "-left-2 rotate-45"}`}
        />
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-toast">
          <span aria-hidden="true" className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-wheat/45 px-1 text-[0.7rem] leading-none text-toast">
            {presentation.icon}
          </span>
          {presentation.label}
        </p>
        {title ? <h3 className={`mt-2 font-display font-bold text-toast ${styles.title}`}>{title}</h3> : null}
        <p className={`mt-2 text-cocoa/85 ${styles.message}`}>{message}</p>
      </div>
    </aside>
  );
}
