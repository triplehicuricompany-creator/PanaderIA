import Link from "next/link";
import { BolyMessage } from "@/components/BolyCompanion";
import { Section } from "@/components/Section";

export default function LoginPage() {
  return <Section eyebrow="Acceso" title="Inicio de sesión del alumno"><div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]"><BolyMessage tone="welcome" title="Qué gusto verte de vuelta"><p>Entra con calma y continúa desde el punto donde te quedaste.</p></BolyMessage><div className="soft-card p-8"><p className="mb-6 text-cocoa/75">Acceso visual preparado para integrarse con un proveedor profesional de autenticación.</p><form className="grid gap-5"><input className="field-soft" placeholder="Email" /><input className="field-soft" placeholder="Contraseña" type="password" /><Link href="/alumno/dashboard" className="btn-primary">Entrar al dashboard demo</Link></form><p className="mt-6 text-sm text-cocoa/65">¿Nuevo alumno? <Link className="font-bold text-coral" href="/registro">Regístrate</Link></p></div></div></Section>;
}
