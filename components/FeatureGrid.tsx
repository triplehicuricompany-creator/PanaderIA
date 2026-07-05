export function FeatureGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className="rounded-3xl border border-gold/20 bg-charcoal p-6 transition hover:-translate-y-1 hover:border-gold/50">
          <p className="font-display text-xl font-bold text-gold">{item.title}</p>
          <p className="mt-3 leading-7 text-cream/72">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
