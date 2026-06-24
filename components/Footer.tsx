import Link from "next/link";
import { brand, navigation } from "@/content/site";
import { LogoMark } from "@/components/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-black px-6 py-12 text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-4">
            <LogoMark size="sm" />
            <div>
              <p className="font-display text-xl font-bold text-gold">{brand.name}</p>
              <p className="text-xs uppercase tracking-[0.28em] text-champagne/70">{brand.slogan}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl leading-7">Academia digital profesional de panadería fundada por {brand.founder}, preparada para cursos, certificados, videos QR y el futuro asistente educativo {brand.assistant}.</p>
        </div>
        <div>
          <p className="font-display text-lg text-gold">Navegación</p>
          <div className="mt-4 grid gap-2 text-sm">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="hover:text-gold">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-display text-lg text-gold">Comercial</p>
          <div className="mt-4 space-y-2 text-sm">
            <p>Curso Maestro de Bolillo</p>
            <p>Versión Estándar y Premium</p>
            <p>Certificación preparada</p>
            <p>QR dinámicos futuros</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-gold/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {brand.name}. Todos los derechos reservados.</p>
        <p>Conocimiento • Técnica • Pasión</p>
      </div>
    </footer>
  );
}
