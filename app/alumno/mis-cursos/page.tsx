import { ProgressRing } from "@/components/student/ProgressRing";
import { StudentShell } from "@/components/student/StudentShell";
import { studentCourses } from "@/content/platform";

export default function MyCoursesPage() {
  return (
    <StudentShell title="Cursos inscritos">
      <div className="grid gap-6">
        {studentCourses.map((course) => (
          <article key={course.id} className="flex flex-col gap-6 rounded-3xl border border-toast/10 bg-white/75 p-7 shadow-soft md:flex-row md:items-center md:justify-between">
            <div><p className="font-display text-2xl text-toast">{course.title}</p><p className="mt-2 text-cocoa/70">{course.academy} · {course.status} · Certificado: {course.certificateStatus}</p></div>
            <ProgressRing value={course.progress} />
          </article>
        ))}
      </div>
    </StudentShell>
  );
}
