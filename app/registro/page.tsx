import Link from "next/link";
import { Section } from "@/components/Section";

export default function RegisterPage() {
  return (
    <Section eyebrow="Crear cuenta" title="Registro de alumno PanaderIA™">
      <div className="mx-auto max-w-2xl rounded-3xl border border-gold/25 bg-charcoal p-8 shadow-gold">
        <p className="mb-6 text-cream/75">Formulario preparado para conectarse a un proveedor profesional de autenticación en producción.</p>
        <form className="grid gap-5">
          <input className="rounded-xl border border-gold/20 bg-black px-4 py-3 text-cream" placeholder="Nombre completo" />
          <input className="rounded-xl border border-gold/20 bg-black px-4 py-3 text-cream" placeholder="Email" />
          <input className="rounded-xl border border-gold/20 bg-black px-4 py-3 text-cream" placeholder="Contraseña" type="password" />
          <button type="button" className="rounded-full bg-gold px-6 py-3 font-black text-black">Crear cuenta demo</button>
        </form>
        <p className="mt-6 text-sm text-cream/65">¿Ya tienes cuenta? <Link className="text-gold" href="/login">Inicia sesión</Link></p>
      </div>
    </Section>
  );
}
