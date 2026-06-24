export function ProgressRing({ value }: { value: number }) {
  return (
    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-gold/30 bg-[conic-gradient(#d7a84f_var(--progress),rgba(255,255,255,0.08)_0)]" style={{ "--progress": `${value}%` } as React.CSSProperties}>
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-obsidian font-display text-3xl text-gold">{value}%</div>
    </div>
  );
}
