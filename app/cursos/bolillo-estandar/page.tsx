import { Curriculum } from "@/components/Curriculum";
import { Section } from "@/components/Section";
import { bolilloCourse } from "@/content/bolillo-course";

export default function StandardBolilloPage() {
  return (
    <>
      <Section eyebrow="Curso Maestro de Bolillo" title="Versión Estándar">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-lg leading-8">
            <p>La versión estándar introduce al alumno al método PanaderIA™ para aprender bolillo con técnica clara, herramientas correctas e ingredientes bien comprendidos.</p>
            <p>Autor: <strong className="text-gold">{bolilloCourse.author}</strong>.</p>
            <blockquote className="border-l-4 border-gold pl-5 font-display text-2xl text-gold">“{bolilloCourse.quotes[1]}”</blockquote>
          </div>
          <div className="rounded-3xl border border-gold/25 bg-charcoal p-8 shadow-gold">
            <h3 className="font-display text-2xl text-gold">Incluye</h3>
            <ul className="mt-6 space-y-3 text-cream/80">
              <li>✦ Introducción al bolillo.</li>
              <li>✦ Herramientas necesarias: balanza, taza medidora, bowl y batidora.</li>
              <li>✦ Ingredientes, amasado y fermentación.</li>
              <li>✦ Manual maestro y recursos de apoyo preparados.</li>
              <li>✦ Ruta clara hacia la práctica completa y recursos de apoyo existentes.</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section eyebrow="Temario estándar" title="Ruta base y continuidad premium del Curso Maestro de Bolillo">
        <Curriculum />
      </Section>
    </>
  );
}
