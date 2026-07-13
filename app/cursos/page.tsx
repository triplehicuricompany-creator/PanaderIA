import { BolyMessage } from "@/components/BolyCompanion";
import { CourseCard } from "@/components/CourseCard";
import { Curriculum } from "@/components/Curriculum";
import { Section } from "@/components/Section";
import { courses } from "@/content/site";

export default function CoursesPage() {
  return <><Section eyebrow="Cursos" title="Formación profesional PanaderIA™ con una ruta clara y amable"><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><p className="text-lg leading-8">Comenzamos con el Curso Maestro de Bolillo en dos caminos: Estándar para dominar fundamentos y Premium para vivir la experiencia completa con recursos por módulo.</p><BolyMessage tone="next"><p>Compara con calma. No necesitas saberlo todo hoy: solo elegir el primer paso que se ajuste a tu momento.</p></BolyMessage></div><div className="mt-10 grid gap-8 md:grid-cols-2">{courses.map((course)=><CourseCard key={course.href} course={course}/>)}</div></Section><Section eyebrow="Temario base" title="Ruta completa del Curso Maestro de Bolillo"><Curriculum /></Section></>;
}
