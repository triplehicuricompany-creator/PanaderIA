import { BolyDialogue } from "@/components/BolyDialogue";
import { BolyEventDialogue } from "@/components/BolyEventDialogue";
import type { BolyDialogueTone } from "@/content/boly-dialogue-tone";
import { bolyDialogues } from "@/content/boly-dialogues";
import type { BolyEventType } from "@/content/boly-events";
import { notFound } from "next/navigation";
import { BolyEventProvider } from "@/components/boly/BolyEventProvider";
import { BolyEventSimulator } from "@/components/boly/BolyEventSimulator";

const tones: readonly BolyDialogueTone[] = ["welcome", "tip", "warning", "encouragement", "success", "question", "error", "neutral"];
const automaticEvents: readonly BolyEventType[] = ["FIRST_LOGIN", "MODULE_COMPLETED", "QUIZ_FAILED", "DOUGH_TOO_WET", "FERMENTATION_READY", "STEAM_WARNING", "CERTIFICATE_READY"];

export default function BolyDialoguesDemoPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">Entorno de desarrollo</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-toast sm:text-5xl">Diálogos de Boly</h1>
        <p className="mt-4 text-base leading-7 text-cocoa/80 sm:text-lg">Muestra de posiciones, tamaños, tonos y longitudes para validar el componente reutilizable antes de conectarlo al curso.</p>
      </header>

      <section aria-labelledby="tones-heading" className="mt-10">
        <h2 id="tones-heading" className="font-display text-2xl font-bold text-toast">Todos los tonos</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {tones.map((tone, index) => (
            <BolyDialogue imageId={bolyDialogues[index]?.imageId ?? "hola"} key={tone} message={`Este ejemplo comunica el tono “${tone}” sin depender solamente del color.`} position={index % 2 === 0 ? "left" : "right"} size="sm" tone={tone} />
          ))}
        </div>
      </section>

      <section aria-labelledby="automatic-events-heading" className="mt-12">
        <h2 id="automatic-events-heading" className="font-display text-2xl font-bold text-toast">Eventos automáticos de Boly</h2>
        <p className="mt-2 max-w-3xl text-cocoa/80">Ejemplos resueltos desde el catálogo central, listos para que el curso solicite un evento sin elegir imagen ni tono manualmente.</p>
        <div className="mt-5 space-y-6">
          {automaticEvents.map((event, index) => <BolyEventDialogue event={event} key={event} position={index % 2 === 0 ? "left" : "right"} size="sm" />)}
        </div>
      </section>

      <BolyEventProvider defaultDurationMs={7000} debug>
        <BolyEventSimulator />
      </BolyEventProvider>

      <section aria-labelledby="examples-heading" className="mt-12">
        <h2 id="examples-heading" className="font-display text-2xl font-bold text-toast">Tamaños y textos reales</h2>
        <div className="mt-5 space-y-8">
          {bolyDialogues.map((dialogue, index) => <BolyDialogue {...dialogue} key={dialogue.id} position={index % 2 === 0 ? "left" : "right"} size={index % 3 === 0 ? "sm" : index % 3 === 1 ? "md" : "lg"} />)}
        </div>
      </section>
    </section>
  );
}
