import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <Section eyebrow="Contacto" title="Hablemos de pan, técnica y crecimiento">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5 text-lg leading-8">
          <p>Para informes sobre PanaderIA™, el Curso Maestro de Bolillo, futuras certificaciones o una presentación para inversionistas, deja preparados tus datos de contacto.</p>
          <div className="rounded-3xl border border-gold/20 bg-charcoal p-6">
            <p className="font-display text-2xl text-gold">Fase 2</p>
            <p className="mt-3 text-cream/75">Formulario visual listo para conectar en la siguiente fase con email, CRM, base de datos o automatizaciones.</p>
          </div>
        </div>
        <form className="rounded-3xl border border-gold/25 bg-charcoal p-8 shadow-gold">
          <label className="block text-sm text-cream/70">Nombre</label>
          <input className="mt-2 w-full rounded-xl border border-gold/20 bg-black px-4 py-3 text-cream outline-none focus:border-gold" placeholder="Tu nombre" />
          <label className="mt-5 block text-sm text-cream/70">Email</label>
          <input className="mt-2 w-full rounded-xl border border-gold/20 bg-black px-4 py-3 text-cream outline-none focus:border-gold" placeholder="tu@email.com" />
          <label className="mt-5 block text-sm text-cream/70">Interés</label>
          <select className="mt-2 w-full rounded-xl border border-gold/20 bg-black px-4 py-3 text-cream outline-none focus:border-gold" defaultValue="curso">
            <option value="curso">Comprar curso</option>
            <option value="inversion">Presentación para inversionistas</option>
            <option value="certificacion">Certificación</option>
          </select>
          <label className="mt-5 block text-sm text-cream/70">Mensaje</label>
          <textarea className="mt-2 min-h-32 w-full rounded-xl border border-gold/20 bg-black px-4 py-3 text-cream outline-none focus:border-gold" placeholder="Cuéntanos qué quieres aprender" />
          <button type="button" className="mt-6 w-full rounded-full bg-gold px-7 py-3 font-bold text-black transition hover:bg-champagne">Enviar próximamente</button>
        </form>
      </div>
    </Section>
  );
}
