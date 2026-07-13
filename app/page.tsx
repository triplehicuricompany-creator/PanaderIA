import Link from "next/link";
import { BolyMessage } from "@/components/BolyCompanion";
import { CourseCard } from "@/components/CourseCard";
import { Curriculum } from "@/components/Curriculum";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { ImageCard } from "@/components/ImageCard";
import { Section } from "@/components/Section";
import { bolilloCourse } from "@/content/bolillo-course";
import { courses, faqs, included, testimonials, whyPanaderia } from "@/content/site";

export default function HomePage() {
  return <><Hero />
    <Section eyebrow="PanaderIA™ en una frase" title="Una academia cálida para aprender técnica profesional sin sentir presión."><div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"><p className="text-lg leading-8">Ofrecemos una ruta clara para aprender bolillo desde casa: fundamentos, práctica, recursos digitales y acompañamiento amable para avanzar con seguridad.</p><BolyMessage tone="encourage"><p>Si una masa no sale perfecta, no fallaste: acabas de recibir información para mejorar la siguiente.</p></BolyMessage></div></Section>
    <Section eyebrow="Beneficios" title="Claridad, acompañamiento y técnica para emprender o capacitarte"><FeatureGrid items={whyPanaderia} /></Section>
    <Section eyebrow="Cursos" title="Elige la experiencia que mejor acompaña tu ritmo"><div className="grid gap-6 md:grid-cols-2">{courses.map((course)=><CourseCard key={course.href} course={course}/>)}</div></Section>
    <Section eyebrow="Lo que recibirás" title="Recursos organizados para estudiar, practicar y repasar"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">{included.map((item)=><article key={item.title} className="soft-card"><p className="font-display text-2xl font-bold text-toast">{item.title}</p><p className="mt-4 text-sm leading-7 text-cocoa/72">{item.text}</p></article>)}</div></Section>
    <Section eyebrow="Chef Juanote™" title={`La técnica viene de ${bolilloCourse.author}; la calma la refuerza Boly™.`}><div className="grid gap-5 md:grid-cols-2">{bolilloCourse.quotes.map((quote)=><blockquote key={quote} className="soft-card font-display text-2xl text-toast">“{quote}”</blockquote>)}</div></Section>
    <Section eyebrow="Temario" title="Curso Maestro de Bolillo organizado en 14 módulos"><Curriculum /></Section>
    <Section eyebrow="Testimonios demostrativos" title="Ejemplos del tipo de experiencia que buscamos construir"><div className="mb-5 rounded-2xl bg-peach/35 p-4 text-sm text-cocoa/75">Estos testimonios son demostrativos mientras se integran comentarios reales de alumnos.</div><div className="grid gap-6 md:grid-cols-3">{testimonials.map((t)=><article key={t.name} className="soft-card"><p className="text-lg leading-8">“{t.quote}”</p><div className="mt-6 border-t border-toast/10 pt-5"><p className="font-display text-xl text-toast">{t.name}</p><p className="text-sm text-cocoa/60">{t.role}</p></div></article>)}</div></Section>
    <Section eyebrow="Preguntas frecuentes" title="Dudas comunes antes de comenzar"><div className="grid gap-4 lg:grid-cols-2">{faqs.map((faq)=><details key={faq.question} className="soft-card open:bg-white"><summary className="cursor-pointer list-none font-display text-xl text-toast">{faq.question}</summary><p className="mt-4 leading-7">{faq.answer}</p></details>)}</div></Section>
    <Section eyebrow="Comienza con calma" title="Da el siguiente paso cuando estés lista o listo"><div className="soft-card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl text-lg">Explora el programa, compara Estándar y Premium y elige sin presión.</p><Link href="/cursos" className="btn-primary">Quiero aprender</Link></div></Section>
  </>;
}
