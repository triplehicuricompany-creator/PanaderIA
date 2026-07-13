export function ImageCard({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="group overflow-hidden rounded-[2rem] border border-coral/25 bg-white/70 shadow-soft">
      <img src={src} alt={alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
      <figcaption className="border-t border-coral/15 px-5 py-4 font-display text-lg text-coral">{label}</figcaption>
    </figure>
  );
}
