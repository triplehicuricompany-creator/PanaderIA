import { demoCertificate } from "@/content/platform";
import { LogoMark } from "@/components/LogoMark";

export function CertificatePreview() {
  return (
    <article className="rounded-[2rem] border-4 border-double border-wheat bg-cream p-8 text-center text-cocoa shadow-soft">
      <div className="mx-auto flex justify-center"><LogoMark /></div>
      <p className="mt-6 text-sm uppercase tracking-[0.35em] text-toast">Certificado de finalización</p>
      <h2 className="mt-4 font-display text-4xl font-black">{demoCertificate.brand}</h2>
      <p className="mt-8 text-lg">Otorga el presente certificado a</p>
      <p className="mt-3 font-display text-3xl font-bold text-toast">{demoCertificate.studentName}</p>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">Por completar satisfactoriamente el <strong>{demoCertificate.courseName}</strong>.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <p><strong>Folio</strong><br />{demoCertificate.id}</p>
        <p><strong>Firma</strong><br />{demoCertificate.issuedBy}</p>
        <p><strong>Fecha</strong><br />{demoCertificate.issueDate}</p>
      </div>
    </article>
  );
}
