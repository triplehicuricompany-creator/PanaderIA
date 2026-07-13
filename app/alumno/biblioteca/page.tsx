import { StudentShell } from "@/components/student/StudentShell";
import { digitalLibrary } from "@/content/platform";

export default function LibraryPage() {
  return (
    <StudentShell title="Biblioteca digital">
      <div className="grid gap-5 md:grid-cols-2">
        {digitalLibrary.map((item) => (
          <article key={item.title} className="rounded-3xl border border-toast/10 bg-white/75 p-7 shadow-soft">
            <p className="text-sm uppercase tracking-[0.25em] text-coral">{item.type} · {item.access}</p>
            <h2 className="mt-3 font-display text-2xl text-toast">{item.title}</h2>
            <p className="mt-3 text-cocoa/65">Formato {item.format}. Recurso existente vinculado al módulo correspondiente; en producción podrá protegerse con URLs firmadas.</p>
            <a href={item.href} className="mt-6 inline-flex rounded-full border border-coral/35 bg-white/70 px-5 py-3 font-bold text-toast hover:bg-peach/35">Abrir recurso</a>
          </article>
        ))}
      </div>
    </StudentShell>
  );
}
