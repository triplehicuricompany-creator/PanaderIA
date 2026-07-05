import { CourseCard } from "@/components/CourseCard";
import { Curriculum } from "@/components/Curriculum";
import { Section } from "@/components/Section";
import { courses } from "@/content/site";

export default function CoursesPage() {
  return (
    <>
      <Section eyebrow="Cursos" title="Formación profesional PanaderIA™">
        <p className="max-w-3xl text-lg leading-8">Comenzamos con el Curso Maestro de Bolillo y una estructura lista para futuros cursos de panadería, pastelería y chocolatería.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {courses.map((course) => <CourseCard key={course.href} course={course} />)}
        </div>
      </Section>
      <Section eyebrow="Temario base" title="Módulos de ejemplo para la experiencia académica">
        <Curriculum />
      </Section>
    </>
  );
}
