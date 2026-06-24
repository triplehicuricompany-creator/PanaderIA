import { CertificatePreview } from "@/components/certificate/CertificatePreview";
import { Section } from "@/components/Section";

export default function DemoCertificatePage() {
  return (
    <Section eyebrow="Certificado descargable" title="Vista previa de certificación PanaderIA™">
      <CertificatePreview />
      <p className="mt-6 text-center text-cream/70">En producción se generará como PDF con nombre del alumno, curso completado, firma de Chef Juanote, folio y QR de verificación.</p>
    </Section>
  );
}
