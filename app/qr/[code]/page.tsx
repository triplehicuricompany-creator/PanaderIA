import { Section } from "@/components/Section";

export default async function QRPlaceholderPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;

  return (
    <Section eyebrow="QR dinámico" title="Recurso de aprendizaje vinculado">
      <div className="soft-card p-8">
        <p className="text-lg leading-8">Código recibido: <span className="font-semibold text-coral">{code}</span></p>
        <p className="mt-4 leading-8 text-cocoa/75">Esta ruta deja lista la estructura para validar QR dinámicos, controlar accesos premium y redirigir a recursos actualizables.</p>
      </div>
    </Section>
  );
}
