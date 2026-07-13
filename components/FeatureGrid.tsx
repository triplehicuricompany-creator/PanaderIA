export function FeatureGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className="rounded-3xl border border-coral/20 bg-white/70 p-6 transition hover:-translate-y-1 hover:border-coral/50">
          <p className="font-display text-xl font-bold text-coral">{item.title}</p>
          <p className="mt-3 leading-7 text-cocoa/72">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
