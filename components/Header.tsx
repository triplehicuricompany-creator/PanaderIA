import Link from "next/link";
import { brand, navigation } from "@/content/site";
import { LogoMark } from "@/components/LogoMark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-toast/10 bg-flour/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <LogoMark size="sm" />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold tracking-[0.12em] text-toast sm:text-xl">{brand.name}</span>
            <span className="hidden text-[0.65rem] uppercase tracking-[0.22em] text-cocoa/60 sm:block">{brand.slogan}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-cocoa/75 xl:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-coral">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="btn-secondary px-4 py-2 text-sm">Entrar</Link>
          <Link href="/cursos/bolillo-premium" className="btn-primary px-5 py-2 text-sm">Quiero aprender</Link>
        </div>
      </div>
      <nav className="flex gap-3 overflow-x-auto border-t border-toast/10 px-4 py-2 text-sm font-semibold text-cocoa/75 xl:hidden" aria-label="Navegación móvil">
        {navigation.map((item) => <Link key={item.href} href={item.href} className="shrink-0 rounded-full px-3 py-2 hover:bg-peach/35 hover:text-toast">{item.label}</Link>)}
        <Link href="/login" className="shrink-0 rounded-full px-3 py-2 text-coral">Entrar</Link>
      </nav>
    </header>
  );
}
