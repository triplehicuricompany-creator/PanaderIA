"use client";

import Link from "next/link";
import { useState } from "react";
import { brand, navigation } from "@/content/site";
import { LogoMark } from "@/components/LogoMark";

const mobileLinks = navigation.filter((item) => ["/", "/cursos", "/boly"].includes(item.href));

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-toast/10 bg-flour/92 shadow-[0_10px_34px_rgba(139,94,60,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark size="sm" />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold tracking-[0.08em] text-toast sm:text-xl">{brand.name}</span>
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
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-toast/15 bg-white/80 px-4 py-2 text-sm font-black text-toast shadow-soft xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          Menú
        </button>
      </div>
      <div id="mobile-menu" className={`${open ? "grid" : "hidden"} border-t border-toast/10 bg-cream/95 px-4 pb-4 pt-2 xl:hidden`}>
        <nav className="grid gap-2 text-sm font-bold text-cocoa/78" aria-label="Navegación móvil compacta">
          {[...mobileLinks, { label: "Alumno", href: "/login" }].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-between rounded-2xl bg-white/75 px-4 py-2 shadow-[0_8px_24px_rgba(139,94,60,0.07)] hover:bg-peach/45 hover:text-toast">
              {item.label}<span aria-hidden="true">›</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
