import { BolyDialogue } from "@/components/BolyDialogue";
import type { BolyDialogueTone } from "@/content/boly-dialogue-tone";
import { resolveBolyEvent, type BolyEventType } from "@/content/boly-events";
import { fallbackBolyImage, hasBolyImage } from "@/content/boly-library";

export type BolyEventDialogueProps = {
  event: BolyEventType;
  message?: string;
  title?: string;
  imageId?: string;
  tone?: BolyDialogueTone;
  position?: "left" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
};

/** Adapts a named course event to the existing Boly dialogue presentation. */
export function BolyEventDialogue({ event, message, title, imageId, tone, position, size, className }: BolyEventDialogueProps) {
  const resolved = resolveBolyEvent(event, { message, title, imageId, tone });
  const safeImageId = resolved && hasBolyImage(resolved.imageId) ? resolved.imageId : fallbackBolyImage.id;

  return <BolyDialogue className={className} imageId={safeImageId} message={resolved?.message?.trim() || "Estoy aquí para acompañarte paso a paso."} position={position} size={size} title={resolved?.title} tone={resolved?.tone ?? "neutral"} />;
}
