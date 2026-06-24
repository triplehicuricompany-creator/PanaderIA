import Link from "next/link";
import { brand, navigation } from "@/content/site";
import { LogoMark } from "@/components/LogoMark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-obsidian/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark size="sm" />
          <span>
            <span className="block font-display text-lg font-bold tracking-[0.16em] text-gold sm:text-xl">{brand.name}</span>
            <span className="hidden text-[0.65rem] uppercase tracking-[0.28em] text-champagne/70 sm:block">{brand.slogan}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-cream/80 xl:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="rounded-full border border-gold/40 px-4 py-2 text-sm font-bold text-gold transition hover:bg-gold/10">Entrar</Link>
          <Link href="/cursos/bolillo-premium" className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-black transition hover:bg-champagne">
            Comprar Curso
          </Link>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-gold/10 px-5 py-3 text-sm text-cream/75 xl:hidden">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 hover:text-gold">{item.label}</Link>
        ))}
        <Link href="/login" className="shrink-0 text-gold">Entrar</Link>
      </nav>
    </header>
  );
}
