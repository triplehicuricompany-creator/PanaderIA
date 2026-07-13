import { BolyAvatar, BolyMessage } from "@/components/BolyCompanion";
import { Section } from "@/components/Section";
import { bolyKnowledgeAreas } from "@/content/site";

export default function BolyPage() {
  return <Section eyebrow="Compañero educativo" title="Boly™ — paciencia, calma y acompañamiento en cada práctica"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><BolyAvatar /><div className="space-y-6 text-lg leading-8"><p>Boly™ es el compañero educativo oficial de PanaderIA™: tierno, amable, protector y preparado para ayudar al alumno sin regaños ni humillaciones.</p><blockquote className="border-l-4 border-coral pl-6 font-display text-2xl text-toast">“No hay mejor maestro que el error mismo.”</blockquote><p>La interfaz queda lista para recibir la imagen final del personaje desde <code className="rounded bg-white/70 px-2 py-1 text-sm">public/assets/boly</code> y usarla en consejos, ánimo, errores, próximos pasos, bienvenida, celebraciones y ayuda contextual.</p><BolyMessage tone="error"><p>Cuando algo salga distinto, lo explicaremos con calma: qué pudo pasar, cómo observarlo y qué intentar después.</p></BolyMessage><div className="grid gap-3 sm:grid-cols-2">{bolyKnowledgeAreas.map((area)=><p key={area} className="soft-card p-4 text-sm">✦ {area}</p>)}</div></div></div></Section>;
}
