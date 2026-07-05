import Link from "next/link";
import { ProgressRing } from "@/components/student/ProgressRing";
import { StudentShell } from "@/components/student/StudentShell";
import { demoStudent, studentCourses } from "@/content/platform";

export default function StudentDashboardPage() {
  const course = studentCourses[0];
  return (
    <StudentShell title={`Bienvenido, ${demoStudent.name}`}>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-gold/20 bg-charcoal p-7"><ProgressRing value={course.progress} /><p className="mt-5 text-lg text-cream/80">Progreso del curso premium</p></div>
        <div className="rounded-3xl border border-gold/20 bg-charcoal p-7">
          <p className="font-display text-2xl text-gold">Siguiente lección</p>
          <p className="mt-4 text-xl text-cream">{course.nextLesson}</p>
          <p className="mt-3 text-cream/65">{demoStudent.completedLessons} de {demoStudent.totalLessons} lecciones completadas.</p>
          <Link href="/alumno/videos" className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 font-black text-black">Continuar aprendiendo</Link>
        </div>
      </div>
    </StudentShell>
  );
}
