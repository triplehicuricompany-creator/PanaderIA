export function PlaceholderPortrait({ label, subtitle }: { label: string; subtitle: string }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-charcoal via-black to-[#2a1f0c] p-6 shadow-gold">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative flex aspect-[4/5] flex-col items-center justify-center rounded-[1.5rem] border border-gold/20 bg-black/40 text-center">
        <div className="mb-6 h-24 w-24 rounded-full border border-gold/40 bg-gold/10" />
        <p className="font-display text-3xl font-bold text-gold">{label}</p>
        <p className="mt-2 max-w-52 text-sm uppercase tracking-[0.25em] text-cream/65">{subtitle}</p>
      </div>
    </div>
  );
}
