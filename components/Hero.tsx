import Link from "next/link";
import { brand } from "@/content/site";
import { BolyAvatar, BolyMessage } from "@/components/BolyCompanion";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(255,217,189,0.72),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(143,169,139,0.22),transparent_26%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-coral/20 bg-white/65 px-4 py-2 text-sm font-bold text-toast shadow-soft">Curso Maestro de Bolillo · Estándar y Premium</p>
          <h1 className="font-display text-4xl font-black leading-tight text-toast sm:text-6xl">Abre tu libro de panadería y aprende una página ilustrada a la vez.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cocoa/78">PanaderIA™ convierte el método de {brand.founder} en una experiencia editorial móvil: imágenes que enseñan, páginas que respiran y la presencia amable de {brand.assistant} para practicar con confianza.</p>
          <p className="mt-4 font-display text-2xl font-bold text-coral">Cada scroll se siente como pasar la página de un libro moderno, cálido y orgullosamente panadero.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/cursos" className="btn-primary">Hojear el programa</Link><Link href="/cursos/bolillo-estandar" className="btn-secondary">Ver la primera página</Link></div>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm sm:grid-cols-3"><div className="soft-card p-4"><strong className="block text-2xl text-coral">30+</strong> años de experiencia</div><div className="soft-card p-4"><strong className="block text-2xl text-coral">14</strong> módulos guiados</div><div className="soft-card p-4"><strong className="block text-2xl text-coral">QR</strong> recursos preparados</div></div>
        </div>
        <div className="grid gap-5">
          <div className="rounded-[2.25rem] border border-white/70 bg-white/55 p-4 shadow-soft"><BolyAvatar className="mx-auto max-w-md" /></div>
          <BolyMessage tone="welcome" title="Hola, soy Boly™"><p>Voy contigo paso a paso: sin regaños, sin prisa y con señales claras para que cada práctica te deje aprendizaje.</p></BolyMessage>
        </div>
      </div>
    </section>
  );
}
