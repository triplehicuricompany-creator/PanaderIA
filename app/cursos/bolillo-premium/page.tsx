import { Curriculum } from "@/components/Curriculum";
import { Section } from "@/components/Section";
import { bolilloCourse } from "@/content/bolillo-course";

export default function PremiumBolilloPage() {
  return (
    <>
      <Section eyebrow="Curso Maestro de Bolillo" title="Versión Premium">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-lg leading-8">
            <p>La versión premium reúne los 14 módulos reales del Curso Maestro de Bolillo con videos QR preparados, recursos existentes por módulo, fotografías técnicas planificadas y acompañamiento contextual de Boly™.</p>
            <p>Autor: <strong className="text-gold">{bolilloCourse.author}</strong>.</p>
            <blockquote className="border-l-4 border-gold pl-5 font-display text-2xl text-gold">“{bolilloCourse.quotes[0]}”</blockquote>
          </div>
          <div className="rounded-3xl border border-gold/25 bg-charcoal p-8 shadow-gold">
            <h3 className="font-display text-2xl text-gold">Incluye</h3>
            <ul className="mt-6 space-y-3 text-cream/80">
              <li>✦ 14 módulos secuenciales de bolillo.</li>
              <li>✦ Bolillos especiales: arándano, nuez, romero, menta, ajo, cebolla e integral.</li>
              <li>✦ Videos QR preparados por módulo.</li>
              <li>✦ Fotografías técnicas preparadas.</li>
              <li>✦ Manual maestro y recursos descargables vinculados.</li>
              <li>✦ Boly™ como asistente educativo contextual.</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section eyebrow="Temario premium" title="Estructura completa del Curso Maestro de Bolillo">
        <Curriculum />
      </Section>
    </>
  );
}
