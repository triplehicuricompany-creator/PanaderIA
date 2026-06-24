import { PlaceholderPortrait } from "@/components/PlaceholderPortrait";
import { Section } from "@/components/Section";

export default function ChefJuanotePage() {
  return (
    <Section eyebrow="Fundador" title="Sobre Chef Juanote">
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <PlaceholderPortrait label="Chef Juanote" subtitle="Conocimiento, técnica y pasión" />
        <div className="space-y-6 text-lg leading-8">
          <p>Chef Juanote es el fundador de PanaderIA™, una academia creada para compartir conocimiento panadero con claridad, técnica y pasión.</p>
          <p>Su visión es formar alumnos desde cero, acompañarlos con recursos profesionales y convertir cada error en una oportunidad de aprendizaje.</p>
          <p>La plataforma prepara una experiencia educativa escalable: cursos, biblioteca digital, videos por QR, certificaciones y el futuro asistente virtual Boly™.</p>
        </div>
      </div>
    </Section>
  );
}
