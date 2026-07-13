export function ProgressRing({ value }: { value: number }) {
  return (
    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-wheat/70 bg-[conic-gradient(#C95F6D_var(--progress),rgba(242,215,161,0.45)_0)]" style={{ "--progress": `${value}%` } as React.CSSProperties}>
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-flour font-display text-3xl text-toast">{value}%</div>
    </div>
  );
}
