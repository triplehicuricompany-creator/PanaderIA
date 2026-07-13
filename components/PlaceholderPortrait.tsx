export function PlaceholderPortrait({ label, subtitle }: { label: string; subtitle: string }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-coral/25 bg-gradient-to-br from-flour via-peach to-wheat p-6 shadow-soft">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-coral/20 blur-3xl" />
      <div className="relative flex aspect-[4/5] flex-col items-center justify-center rounded-[1.5rem] border border-coral/20 bg-white/65 text-center">
        <div className="mb-6 h-24 w-24 rounded-full border border-coral/40 bg-coral/10" />
        <p className="font-display text-3xl font-bold text-coral">{label}</p>
        <p className="mt-2 max-w-52 text-sm uppercase tracking-[0.25em] text-cocoa/65">{subtitle}</p>
      </div>
    </div>
  );
}
