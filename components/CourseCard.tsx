import Link from "next/link";

export function CourseCard({ course }: { course: { title: string; href: string; badge: string; description: string; features: string[] } }) {
  return (
    <article className="rounded-3xl border border-gold/25 bg-charcoal p-8 shadow-gold">
      <span className="rounded-full border border-gold/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gold">{course.badge}</span>
      <h3 className="mt-6 font-display text-2xl font-bold text-cream">{course.title}</h3>
      <p className="mt-4 leading-7 text-cream/70">{course.description}</p>
      <ul className="mt-6 space-y-3">
        {course.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-cream/80"><span className="text-gold">✦</span>{feature}</li>
        ))}
      </ul>
      <Link href={course.href} className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 font-semibold text-black transition hover:bg-champagne">
        Explorar
      </Link>
    </article>
  );
}
