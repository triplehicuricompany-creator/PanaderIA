import Link from "next/link";
import { BolyMessage } from "@/components/BolyCompanion";
import { Curriculum } from "@/components/Curriculum";
import { Section } from "@/components/Section";
import { bolilloCourse } from "@/content/bolillo-course";

export default function StandardBolilloPage() {
  return <><Section eyebrow="Curso Maestro de Bolillo" title="Versión Estándar: fundamentos profesionales a tu ritmo"><div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"><div className="space-y-6 text-lg leading-8"><p>La versión estándar introduce al alumno al método PanaderIA™ con técnica clara, herramientas correctas e ingredientes bien comprendidos.</p><p>Autor: <strong className="text-coral">{bolilloCourse.author}</strong>.</p><blockquote className="border-l-4 border-coral pl-5 font-display text-2xl text-toast">“{bolilloCourse.quotes[1]}”</blockquote><Link href="/contacto" className="btn-primary">Quiero aprender</Link></div><div className="soft-card p-8"><h3 className="font-display text-2xl text-toast">Incluye</h3><ul className="mt-6 space-y-3 text-cocoa/80"><li>✦ Introducción al bolillo.</li><li>✦ Herramientas necesarias: balanza, taza medidora, bowl y batidora.</li><li>✦ Ingredientes, amasado y fermentación.</li><li>✦ Manual maestro y recursos de apoyo preparados.</li><li>✦ Ruta clara hacia práctica completa.</li></ul></div></div><div className="mt-8"><BolyMessage tone="tip"><p>Empieza por observar: textura, aroma y tiempo. La técnica se aprende mejor cuando la masa deja de sentirse misteriosa.</p></BolyMessage></div></Section><Section eyebrow="Temario estándar" title="Ruta base y continuidad premium del Curso Maestro de Bolillo"><Curriculum /></Section></>;
}
