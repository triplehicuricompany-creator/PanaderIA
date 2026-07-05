import { StudentShell } from "@/components/student/StudentShell";
import { digitalLibrary } from "@/content/platform";

export default function LibraryPage() {
  return (
    <StudentShell title="Biblioteca digital">
      <div className="grid gap-5 md:grid-cols-2">
        {digitalLibrary.map((item) => (
          <article key={item.title} className="rounded-3xl border border-gold/20 bg-charcoal p-7">
            <p className="text-sm uppercase tracking-[0.25em] text-gold">{item.type} · {item.access}</p>
            <h2 className="mt-3 font-display text-2xl text-cream">{item.title}</h2>
            <p className="mt-3 text-cream/65">Formato {item.format}. En producción usará URLs firmadas y control de permisos.</p>
            <a href={item.href} className="mt-6 inline-flex rounded-full border border-gold/50 px-5 py-3 font-bold text-gold">Descargar demo</a>
          </article>
        ))}
      </div>
    </StudentShell>
  );
}
