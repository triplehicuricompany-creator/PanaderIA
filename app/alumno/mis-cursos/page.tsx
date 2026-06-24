import { ProgressRing } from "@/components/student/ProgressRing";
import { StudentShell } from "@/components/student/StudentShell";
import { studentCourses } from "@/content/platform";

export default function MyCoursesPage() {
  return (
    <StudentShell title="Cursos inscritos">
      <div className="grid gap-6">
        {studentCourses.map((course) => (
          <article key={course.id} className="flex flex-col gap-6 rounded-3xl border border-gold/20 bg-charcoal p-7 md:flex-row md:items-center md:justify-between">
            <div><p className="font-display text-2xl text-gold">{course.title}</p><p className="mt-2 text-cream/70">{course.academy} · {course.status} · Certificado: {course.certificateStatus}</p></div>
            <ProgressRing value={course.progress} />
          </article>
        ))}
      </div>
    </StudentShell>
  );
}
