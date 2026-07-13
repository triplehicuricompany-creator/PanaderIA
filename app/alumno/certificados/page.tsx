import Link from "next/link";
import { CertificatePreview } from "@/components/certificate/CertificatePreview";
import { StudentShell } from "@/components/student/StudentShell";

export default function CertificatesPage() {
  return (
    <StudentShell title="Certificados">
      <div className="grid gap-8">
        <CertificatePreview />
        <Link href="/certificados/demo" className="mx-auto rounded-full bg-coral px-7 py-3 font-black text-white shadow-soft hover:bg-toast">Ver certificado descargable demo</Link>
      </div>
    </StudentShell>
  );
}
