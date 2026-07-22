"use client";

import { useEffect, useRef } from "react";
import { BolyEventDialogue } from "@/components/BolyEventDialogue";
import { useBolyEvents } from "@/hooks/useBolyEvents";

export function BolyEventPresenter({ className = "" }: { className?: string }) {
  const { activeBolyEvent, dismissBolyEvent } = useBolyEvents();
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (activeBolyEvent?.priority === "critical") closeButton.current?.focus(); }, [activeBolyEvent?.id, activeBolyEvent?.priority]);
  if (!activeBolyEvent) return null;
  const { event, position, size, dismissible, priority } = activeBolyEvent;
  return (
    <aside aria-atomic="true" aria-live={priority === "critical" ? "assertive" : "polite"} className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] ${position === "left" ? "left-[max(1rem,env(safe-area-inset-left))]" : "right-[max(1rem,env(safe-area-inset-right))]"} z-40 w-[min(24rem,calc(100vw-2rem))] motion-safe:animate-[pulse_250ms_ease-out] ${className}`} role={priority === "critical" ? "alert" : "status"}>
      <div className="relative rounded-2xl bg-cream/95 shadow-xl ring-1 ring-cocoa/10 backdrop-blur">
        {dismissible && <button aria-label="Cerrar mensaje de Boly" className="absolute right-2 top-2 z-10 rounded-full bg-white px-2 py-1 text-lg font-bold text-cocoa outline-none ring-coral focus-visible:ring-2" onClick={dismissBolyEvent} ref={closeButton} type="button">×</button>}
        <BolyEventDialogue event={event} imageId={activeBolyEvent.imageId} message={activeBolyEvent.message} position={position} size={size} title={activeBolyEvent.title} tone={activeBolyEvent.tone} />
      </div>
    </aside>
  );
}
