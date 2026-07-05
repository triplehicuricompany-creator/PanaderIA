export function ImageCard({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="group overflow-hidden rounded-[2rem] border border-gold/25 bg-charcoal shadow-gold">
      <img src={src} alt={alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
      <figcaption className="border-t border-gold/15 px-5 py-4 font-display text-lg text-gold">{label}</figcaption>
    </figure>
  );
}
