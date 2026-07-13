import Link from "next/link";
import { BolyMessage } from "@/components/BolyCompanion";
import { CourseCard } from "@/components/CourseCard";
import { Curriculum } from "@/components/Curriculum";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { bolilloCourse } from "@/content/bolillo-course";
import { courses, faqs, included, testimonials, whyPanaderia } from "@/content/site";

const storyPages = [
  {
    eyebrow: "Página 01 · El aroma que invita",
    title: "Primero miras el bolillo. Luego entiendes el proceso.",
    text: "Cada módulo abre con una escena visual: una mesa, una masa, una decisión técnica y una emoción concreta. La fotografía no adorna; prepara la mirada para aprender.",
    image: "/biblioteca-visual-oficial-panaderia/capitulos/capitulo-03-ingredientes-del-bolillo/portadas/c03-portada.svg",
    label: "Ingredientes con intención",
    note: "Boly™ aparece cuando la lectura necesita aire, ánimo o una pista práctica antes de continuar."
  },
  {
    eyebrow: "Página 02 · Manos en la masa",
    title: "La técnica se estudia como una historia paso a paso.",
    text: "Amasado, fermentación, formado y corte viven en páginas con identidad propia para que el alumno recuerde qué observa, qué siente y qué corrige.",
    image: "/biblioteca-visual-oficial-panaderia/capitulos/capitulo-04-amasado-profesional/ilustraciones/c04-ilustracion.svg",
    label: "Ilustración técnica cálida",
    note: "Chef Juanote™ guía con oficio; Boly™ traduce la técnica en señales sencillas."
  },
  {
    eyebrow: "Página 03 · Orgullo de avance",
    title: "Cada scroll debe sentirse como pasar una página lograda.",
    text: "Las llamadas a la acción celebran progreso, no presionan. El estudiante avanza con claridad, alegría y confianza desde su teléfono.",
    image: "/biblioteca-visual-oficial-panaderia/capitulos/capitulo-13-certificacion-profesional-del-panadero/boly/c13-boly-apoyo-visual.svg",
    label: "Boly celebra el camino",
    note: "La experiencia premium convierte estudio, práctica y repaso en un ritual visual."
  }
];

const visualPrinciples = [
  "Fotografía e ilustración explican antes de que el texto detalle.",
  "Cada consejo de Boly™ rompe la lectura como una nota en el margen del libro.",
  "Las tarjetas tienen ritmo editorial: portada, aprendizaje, práctica y orgullo.",
  "El espacio en blanco deja respirar la masa, las ideas y la emoción."
];

export default function HomePage() {
  return <><Hero />
    <section className="book-strip px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-toast/10 bg-white/60 p-5 shadow-soft backdrop-blur sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">Manifiesto de experiencia</p>
        <h2 className="mt-3 max-w-4xl font-display text-3xl font-black leading-tight text-toast sm:text-5xl">PanaderIA™ no se navega: se hojea como un libro interactivo premium.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {visualPrinciples.map((principle, index) => <article key={principle} className="soft-card bg-flour/80">
            <p className="font-display text-3xl font-black text-coral">0{index + 1}</p>
            <p className="mt-3 text-sm leading-7 text-cocoa/78">{principle}</p>
          </article>)}
        </div>
      </div>
    </section>
    <Section eyebrow="PanaderIA™ en una frase" title="Una academia cálida para aprender técnica profesional sin sentir presión."><div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"><p className="text-lg leading-8">Ofrecemos una ruta clara para aprender bolillo desde casa: fundamentos, práctica, recursos digitales y acompañamiento amable para avanzar con seguridad.</p><BolyMessage tone="encourage"><p>Si una masa no sale perfecta, no fallaste: acabas de recibir información para mejorar la siguiente.</p></BolyMessage></div></Section>
    <section className="px-4 py-12 sm:px-6 lg:py-18">
      <div className="mx-auto grid max-w-6xl gap-8">
        {storyPages.map((page, index) => <article key={page.title} className={`book-page grid gap-7 overflow-hidden rounded-[2.75rem] border border-toast/10 bg-white/72 p-5 shadow-soft backdrop-blur md:grid-cols-2 md:p-8 ${index % 2 ? "md:[&>figure]:order-2" : ""}`}>
          <figure className="relative min-h-72 overflow-hidden rounded-[2rem] bg-gradient-to-br from-peach/55 via-flour to-sage/20 p-4">
            <img src={page.image} alt={page.label} className="h-full w-full object-contain drop-shadow-[0_22px_32px_rgba(122,69,40,0.16)]" />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/82 px-4 py-2 font-display text-sm font-bold text-toast shadow-soft">{page.label}</figcaption>
          </figure>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">{page.eyebrow}</p>
            <h3 className="mt-3 font-display text-3xl font-black leading-tight text-toast sm:text-5xl">{page.title}</h3>
            <p className="mt-5 text-lg leading-8 text-cocoa/78">{page.text}</p>
            <div className="mt-7"><BolyMessage tone={index === 2 ? "celebrate" : "tip"}><p>{page.note}</p></BolyMessage></div>
          </div>
        </article>)}
      </div>
    </section>
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
