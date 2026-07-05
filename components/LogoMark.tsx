import { brand } from "@/content/site";

export function LogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const classes = size === "lg" ? "h-32 w-32 text-5xl" : size === "sm" ? "h-12 w-12 text-lg" : "h-20 w-20 text-3xl";

  return (
    <div className={`${classes} relative flex shrink-0 items-center justify-center rounded-full border border-gold/60 bg-[radial-gradient(circle,#2b210e,#050505_70%)] shadow-gold`} aria-label={`Logo ${brand.name}`}>
      <div className="absolute inset-2 rounded-full border border-gold/30" />
      <span className="font-display font-black tracking-widest text-gold">PIA</span>
    </div>
  );
}
