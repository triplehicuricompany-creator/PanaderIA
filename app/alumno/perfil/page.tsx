import { StudentShell } from "@/components/student/StudentShell";
import { demoStudent } from "@/content/platform";

export default function ProfilePage() {
  return (
    <StudentShell title="Perfil del estudiante">
      <div className="rounded-3xl border border-toast/10 bg-white/75 p-8 shadow-soft">
        <dl className="grid gap-5 md:grid-cols-2">
          <div><dt className="text-coral">Nombre</dt><dd className="mt-1 text-xl text-cocoa">{demoStudent.name}</dd></div>
          <div><dt className="text-coral">Email</dt><dd className="mt-1 text-xl text-cocoa">{demoStudent.email}</dd></div>
          <div><dt className="text-coral">Nivel</dt><dd className="mt-1 text-xl text-cocoa">{demoStudent.level}</dd></div>
          <div><dt className="text-coral">Alumno desde</dt><dd className="mt-1 text-xl text-cocoa">{demoStudent.enrolledSince}</dd></div>
        </dl>
      </div>
    </StudentShell>
  );
}
