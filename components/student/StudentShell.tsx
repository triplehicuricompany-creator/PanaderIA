import Link from "next/link";

const studentNav = [
  { label: "Dashboard", href: "/alumno/dashboard" },
  { label: "Mis cursos", href: "/alumno/mis-cursos" },
  { label: "Biblioteca", href: "/alumno/biblioteca" },
  { label: "Videos", href: "/alumno/videos" },
  { label: "Certificados", href: "/alumno/certificados" },
  { label: "Perfil", href: "/alumno/perfil" }
];

export function StudentShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-gold/20 bg-charcoal p-5 lg:sticky lg:top-28 lg:h-fit">
          <p className="font-display text-xl text-gold">Área privada</p>
          <nav className="mt-5 grid gap-2">
            {studentNav.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm text-cream/75 hover:bg-gold/10 hover:text-gold">{item.label}</Link>)}
          </nav>
        </aside>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-gold">PanaderIA™ Student</p>
          <h1 className="mt-3 font-display text-4xl font-black text-cream sm:text-5xl">{title}</h1>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
