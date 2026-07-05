import Link from "next/link";
import { brand } from "@/content/site";
import { LogoMark } from "@/components/LogoMark";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(215,168,79,0.30),transparent_32%),radial-gradient(circle_at_90%_15%,rgba(255,250,240,0.12),transparent_26%),linear-gradient(135deg,#030303,#15100a_48%,#080807)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-8 flex items-center gap-5">
            <LogoMark size="lg" />
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gold">{brand.slogan}</p>
              <p className="mt-2 text-cream/70">Academia digital profesional por {brand.founder}</p>
            </div>
          </div>
          <p className="mb-4 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
            Curso Maestro de Bolillo · Estándar y Premium
          </p>
          <h1 className="font-display text-5xl font-black leading-tight text-cream sm:text-7xl">
            Vende, aprende y certifica tu técnica panadera con {brand.name}.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/78">
            Plataforma premium de educación profesional que combina el método de {brand.founder}, recursos digitales por QR y la visión del asistente virtual {brand.assistant}.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/cursos/bolillo-premium" className="rounded-full bg-gold px-9 py-4 text-center text-base font-black text-black transition hover:bg-champagne">
              Comprar Ahora
            </Link>
            <Link href="/cursos" className="rounded-full border border-gold/60 px-9 py-4 text-center font-bold text-gold transition hover:bg-gold/10">
              Ver Temario
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-center text-sm text-cream/70">
            <div className="rounded-2xl border border-gold/20 bg-black/35 p-4"><strong className="block text-2xl text-gold">30+</strong> años de experiencia</div>
            <div className="rounded-2xl border border-gold/20 bg-black/35 p-4"><strong className="block text-2xl text-gold">24/7</strong> visión Boly™ IA</div>
            <div className="rounded-2xl border border-gold/20 bg-black/35 p-4"><strong className="block text-2xl text-gold">QR</strong> recursos premium</div>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="overflow-hidden rounded-[2rem] border border-gold/30 bg-charcoal shadow-gold">
            <img src="/images/bolillo-placeholder.svg" alt="Bolillo artesanal del Curso Maestro de Bolillo" className="h-full w-full object-cover" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[1.5rem] border border-gold/20 bg-charcoal">
              <img src="/images/chef-placeholder.svg" alt="Chef panadero representando a Chef Juanote" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-gold/20 bg-charcoal">
              <img src="/images/academia-placeholder.svg" alt="Academia digital PanaderIA con Boly" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
