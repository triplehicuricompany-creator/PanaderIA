import Link from "next/link";

export function CourseCard({ course }: { course: { title: string; href: string; badge: string; description: string; features: string[] } }) {
  return (
    <article className="rounded-3xl soft-card p-8">
      <span className="rounded-full border border-coral/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-coral">{course.badge}</span>
      <h3 className="mt-6 font-display text-2xl font-bold text-cocoa">{course.title}</h3>
      <p className="mt-4 leading-7 text-cocoa/70">{course.description}</p>
      <ul className="mt-6 space-y-3">
        {course.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-cocoa/80"><span className="text-coral">✦</span>{feature}</li>
        ))}
      </ul>
      <Link href={course.href} className="mt-8 inline-flex rounded-full bg-coral px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-toast">
        Conocer el curso
      </Link>
    </article>
  );
}
