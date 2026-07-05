import Link from "next/link";
import { Section } from "@/components/Section";

export default function LoginPage() {
  return (
    <Section eyebrow="Acceso" title="Inicio de sesión del alumno">
      <div className="mx-auto max-w-2xl rounded-3xl border border-gold/25 bg-charcoal p-8 shadow-gold">
        <p className="mb-6 text-cream/75">Acceso visual listo para integrarse con Auth.js, Clerk o Supabase Auth.</p>
        <form className="grid gap-5">
          <input className="rounded-xl border border-gold/20 bg-black px-4 py-3 text-cream" placeholder="Email" />
          <input className="rounded-xl border border-gold/20 bg-black px-4 py-3 text-cream" placeholder="Contraseña" type="password" />
          <Link href="/alumno/dashboard" className="rounded-full bg-gold px-6 py-3 text-center font-black text-black">Entrar al dashboard demo</Link>
        </form>
        <p className="mt-6 text-sm text-cream/65">¿Nuevo alumno? <Link className="text-gold" href="/registro">Regístrate</Link></p>
      </div>
    </Section>
  );
}
