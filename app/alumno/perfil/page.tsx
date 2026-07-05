import { StudentShell } from "@/components/student/StudentShell";
import { demoStudent } from "@/content/platform";

export default function ProfilePage() {
  return (
    <StudentShell title="Perfil del estudiante">
      <div className="rounded-3xl border border-gold/20 bg-charcoal p-8">
        <dl className="grid gap-5 md:grid-cols-2">
          <div><dt className="text-gold">Nombre</dt><dd className="mt-1 text-xl">{demoStudent.name}</dd></div>
          <div><dt className="text-gold">Email</dt><dd className="mt-1 text-xl">{demoStudent.email}</dd></div>
          <div><dt className="text-gold">Nivel</dt><dd className="mt-1 text-xl">{demoStudent.level}</dd></div>
          <div><dt className="text-gold">Alumno desde</dt><dd className="mt-1 text-xl">{demoStudent.enrolledSince}</dd></div>
        </dl>
      </div>
    </StudentShell>
  );
}
