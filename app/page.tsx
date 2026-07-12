import Link from "next/link";
import { Curriculum } from "@/components/Curriculum";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { ImageCard } from "@/components/ImageCard";
import { Section } from "@/components/Section";
import { bolilloCourse } from "@/content/bolillo-course";
import { faqs, included, investorHighlights, testimonials, whyPanaderia } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section eyebrow="Por qué aprender con PanaderIA™" title="Una academia comercial lista para vender educación profesional">
        <FeatureGrid items={whyPanaderia} />
      </Section>
      <Section eyebrow="Lo que recibirás" title="Todo lo necesario para estudiar, practicar y avanzar">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {included.map((item) => (
            <article key={item.title} className="rounded-3xl border border-gold/20 bg-gradient-to-b from-charcoal to-black p-6">
              <p className="font-display text-2xl font-bold text-gold">{item.title}</p>
              <p className="mt-4 text-sm leading-7 text-cream/72">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Imágenes temporales" title="Identidad visual para venta, academia y recursos premium">
        <div className="grid gap-6 md:grid-cols-3">
          <ImageCard src="/images/bolillo-placeholder.svg" alt="Bolillo artesanal" label="Bolillo" />
          <ImageCard src="/images/chef-placeholder.svg" alt="Chef panadero" label="Chef panadero" />
          <ImageCard src="/images/academia-placeholder.svg" alt="Academia digital" label="Academia digital" />
        </div>
      </Section>
      <Section eyebrow="Autor y filosofía" title={`Curso creado por ${bolilloCourse.author}`}>
        <div className="grid gap-5 md:grid-cols-2">
          {bolilloCourse.quotes.map((quote) => (
            <blockquote key={quote} className="rounded-3xl border border-gold/25 bg-charcoal p-7 font-display text-2xl text-gold">“{quote}”</blockquote>
          ))}
        </div>
      </Section>
      <Section eyebrow="Temario real" title="Curso Maestro de Bolillo organizado en 14 módulos">
        <Curriculum />
      </Section>
      <Section eyebrow="Testimonios" title="Confianza para alumnos e inversionistas">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-3xl border border-gold/20 bg-charcoal p-7 shadow-gold">
              <p className="text-lg leading-8 text-cream/80">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-gold/15 pt-5">
                <p className="font-display text-xl text-gold">{testimonial.name}</p>
                <p className="text-sm text-cream/60">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Preguntas frecuentes" title="Resuelve dudas antes de comprar">
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-gold/20 bg-black/35 p-6 open:bg-charcoal">
              <summary className="cursor-pointer list-none font-display text-xl text-gold">{faq.question}</summary>
              <p className="mt-4 leading-7 text-cream/72">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
      <Section eyebrow="Listo para comercializar" title="Producto digital premium con visión escalable">
        <div className="rounded-[2rem] border border-gold/25 bg-gradient-to-br from-charcoal to-black p-8 shadow-gold">
          <div className="grid gap-4 md:grid-cols-2">
            {investorHighlights.map((item) => <p key={item} className="rounded-2xl bg-gold/10 p-5 text-cream/82">✦ {item}</p>)}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/cursos/bolillo-premium" className="rounded-full bg-gold px-7 py-3 text-center font-black text-black">Ver Premium</Link>
            <Link href="/contacto" className="rounded-full border border-gold/50 px-7 py-3 text-center font-bold text-gold">Solicitar presentación</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
