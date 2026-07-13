import Link from "next/link";
import { BolyMessage } from "@/components/BolyCompanion";
import { Section } from "@/components/Section";

export default function RegisterPage() {
  return <Section eyebrow="Crear cuenta" title="Registro de alumno PanaderIA™"><div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]"><BolyMessage tone="encourage"><p>Crear tu cuenta es solo el inicio. Aprenderemos paso a paso, sin prisa y con mucha práctica.</p></BolyMessage><div className="soft-card p-8"><p className="mb-6 text-cocoa/75">Formulario preparado para conectarse a un proveedor profesional de autenticación en producción.</p><form className="grid gap-5"><input className="field-soft" placeholder="Nombre completo" /><input className="field-soft" placeholder="Email" /><input className="field-soft" placeholder="Contraseña" type="password" /><button type="button" className="btn-primary">Crear cuenta demo</button></form><p className="mt-6 text-sm text-cocoa/65">¿Ya tienes cuenta? <Link className="font-bold text-coral" href="/login">Inicia sesión</Link></p></div></div></Section>;
}
