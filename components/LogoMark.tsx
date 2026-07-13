import { brand } from "@/content/site";

export function LogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const classes = size === "lg" ? "h-28 w-28 text-4xl" : size === "sm" ? "h-11 w-11 text-base" : "h-18 w-18 text-2xl";
  return (
    <div className={`${classes} relative flex shrink-0 items-center justify-center rounded-full border border-coral/25 bg-gradient-to-br from-white via-cream to-peach shadow-soft`} aria-label={`Logo ${brand.name}`}>
      <div className="absolute inset-2 rounded-full border border-white/80" />
      <span className="font-display font-black tracking-widest text-toast">PIA</span>
    </div>
  );
}
