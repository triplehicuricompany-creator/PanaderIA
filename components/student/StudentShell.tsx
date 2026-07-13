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
    <section className="overflow-x-hidden px-4 py-6 sm:px-5 sm:py-10">
      <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-[240px_1fr] lg:gap-8">
        <aside className="rounded-[1.75rem] border border-toast/10 bg-white/70 p-3 shadow-soft backdrop-blur lg:sticky lg:top-28 lg:h-fit lg:p-5">
          <p className="px-2 font-display text-lg font-black text-toast">Área privada</p>
          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:grid lg:overflow-visible" aria-label="Navegación del alumno">
            {studentNav.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 shrink-0 items-center rounded-2xl px-4 py-2 text-sm font-bold text-cocoa/70 transition hover:bg-peach/45 hover:text-toast focus:outline-none focus:ring-4 focus:ring-coral/15">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-coral sm:tracking-[0.3em]">PanaderIA™ Student</p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-black leading-tight text-cocoa sm:text-4xl lg:text-5xl">{title}</h1>
          <div className="mt-5 sm:mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
