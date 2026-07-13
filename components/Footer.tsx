import Link from "next/link";
import { brand, navigation } from "@/content/site";
import { LogoMark } from "@/components/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-toast/10 bg-white/55 px-5 py-12 text-cocoa/70">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div><div className="flex items-center gap-4"><LogoMark size="sm" /><div><p className="font-display text-xl font-bold text-toast">{brand.name}</p><p className="text-xs uppercase tracking-[0.22em] text-cocoa/55">{brand.slogan}</p></div></div><p className="mt-5 max-w-xl leading-7">Aprende panadería desde casa, a tu ritmo y siempre acompañado. El curso enseña, {brand.founder} inspira y {brand.assistant} te acompaña.</p></div>
        <div><p className="font-display text-lg text-toast">Navegación</p><div className="mt-4 grid gap-2 text-sm">{navigation.map((item) => <Link key={item.href} href={item.href} className="hover:text-coral">{item.label}</Link>)}</div></div>
        <div><p className="font-display text-lg text-toast">Formación</p><div className="mt-4 space-y-2 text-sm"><p>Curso Maestro de Bolillo</p><p>Versión Estándar y Premium</p><p>Certificación preparada</p><p>Acompañamiento amable de Boly™</p></div></div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-toast/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between"><p>© 2026 {brand.name}. Todos los derechos reservados.</p><p>Calidez • Técnica • Paciencia</p></div>
    </footer>
  );
}
