"use client";
import { BolyEventPresenter } from "@/components/boly/BolyEventPresenter";
import { useBolyEvents } from "@/hooks/useBolyEvents";
import type { BolyEventType } from "@/content/boly-events";
const events: readonly BolyEventType[] = ["FIRST_LOGIN", "MODULE_STARTED", "MODULE_COMPLETED", "QUIZ_FAILED", "USER_INACTIVE", "DOUGH_TOO_WET", "FERMENTATION_READY", "STEAM_WARNING", "CERTIFICATE_READY"];
export function BolyEventSimulator() {
 const { triggerBolyEvent, dismissBolyEvent, clearBolyEventQueue, resetBolyEventSession, activeBolyEvent, queuedBolyEvents } = useBolyEvents();
 return <section aria-labelledby="event-manager-heading" className="mt-12 rounded-3xl border border-cocoa/15 bg-white p-6 shadow-sm">
  <h2 className="font-display text-2xl font-bold text-toast" id="event-manager-heading">Simulador del administrador de eventos</h2>
  <p className="mt-2 text-cocoa/80">Prueba prioridades, cooldown y la cola sin conectar aún el curso público.</p>
  <div className="mt-5 flex flex-wrap gap-2">{events.map(event => <button className="rounded-full bg-toast px-3 py-2 text-sm font-bold text-white outline-none focus-visible:ring-2 focus-visible:ring-coral" key={event} onClick={() => triggerBolyEvent(event)} type="button">{event}</button>)}</div>
  <div className="mt-6 grid gap-4 rounded-2xl bg-cream p-4 text-sm text-cocoa sm:grid-cols-2">
   <p><strong>Activo:</strong> {activeBolyEvent?.event ?? "Ninguno"}{activeBolyEvent ? ` (${activeBolyEvent.priority})` : ""}</p><p><strong>En cola:</strong> {queuedBolyEvents.length}</p>
   <p className="sm:col-span-2"><strong>Cola actual:</strong> {queuedBolyEvents.map(item => `${item.event} (${item.priority})`).join(", ") || "vacía"}</p>
  </div>
  <div className="mt-4 flex flex-wrap gap-2"><button className="rounded-lg border border-cocoa/30 px-3 py-2 font-bold" onClick={dismissBolyEvent} type="button">Cerrar</button><button className="rounded-lg border border-cocoa/30 px-3 py-2 font-bold" onClick={clearBolyEventQueue} type="button">Limpiar cola</button><button className="rounded-lg border border-cocoa/30 px-3 py-2 font-bold" onClick={resetBolyEventSession} type="button">Reiniciar sesión de demostración</button></div>
  <BolyEventPresenter />
 </section>;
}
