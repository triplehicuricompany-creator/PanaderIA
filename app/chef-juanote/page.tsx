import { BolyMessage } from "@/components/BolyCompanion";
import { PlaceholderPortrait } from "@/components/PlaceholderPortrait";
import { Section } from "@/components/Section";

export default function ChefJuanotePage() {
  return <Section eyebrow="Fundador" title="Chef Juanote™: técnica, oficio y motivación cercana"><div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]"><PlaceholderPortrait label="Chef Juanote" subtitle="Conocimiento, técnica y pasión" /><div className="space-y-6 text-lg leading-8"><p>Chef Juanote es el fundador de PanaderIA™, una academia creada para compartir conocimiento panadero con claridad, técnica y pasión.</p><p>Su visión es formar alumnos desde cero, acompañarlos con recursos profesionales y convertir cada error en una oportunidad de aprendizaje.</p><p>La plataforma prepara una experiencia educativa escalable: cursos, biblioteca digital, videos por QR, certificaciones y el acompañamiento educativo de Boly™.</p><BolyMessage tone="help"><p>Chef Juanote inspira con oficio; yo ayudo a traducir cada paso en señales sencillas para practicar con tranquilidad.</p></BolyMessage></div></div></Section>;
}
