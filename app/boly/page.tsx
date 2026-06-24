import { PlaceholderPortrait } from "@/components/PlaceholderPortrait";
import { Section } from "@/components/Section";
import { bolyKnowledgeAreas } from "@/content/site";

export default function BolyPage() {
  return (
    <Section eyebrow="Próximamente" title="Boly™ — Asistente virtual de PanaderIA™">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <PlaceholderPortrait label="Boly™" subtitle="Compañero de panadería con IA" />
        <div className="space-y-6 text-lg leading-8">
          <p>Boly™ será el compañero educativo oficial de PanaderIA™: amigable, divertido, paciente y preparado para ayudar al alumno sin regaños ni humillaciones.</p>
          <blockquote className="border-l-4 border-gold pl-6 font-display text-2xl text-gold">“No hay mejor maestro que el error mismo.”</blockquote>
          <p>En esta Fase 2 dejamos una experiencia visual profesional y la estructura de conocimiento. La IA real se conectará cuando la base documental esté validada.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {bolyKnowledgeAreas.map((area) => <p key={area} className="rounded-2xl border border-gold/20 bg-charcoal p-4 text-sm">✦ {area}</p>)}
          </div>
        </div>
      </div>
    </Section>
  );
}
