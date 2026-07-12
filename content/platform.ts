import { bolilloCourse } from "@/content/bolillo-course";

export const academies = [
  { name: "PanaderIA™", slug: "panaderia", focus: "Panadería profesional", status: "Activa" },
  { name: "PastelerIA™", slug: "pasteleria", focus: "Pastelería y postres", status: "Preparada" },
  { name: "ChocolaterIA™", slug: "chocolateria", focus: "Chocolatería fina", status: "Preparada" }
];

export const demoStudent = {
  id: "student-demo-001",
  name: "Alumno PanaderIA",
  email: "alumno@panaderia.demo",
  level: "Principiante comprometido",
  enrolledSince: "2026-06-24",
  completedLessons: 9,
  totalLessons: bolilloCourse.modules.reduce((total, module) => total + module.lessons.length, 0)
};

export const studentCourses = [
  {
    id: "curso-maestro-bolillo-premium",
    title: "Curso Maestro de Bolillo Premium",
    academy: "PanaderIA™",
    author: bolilloCourse.author,
    progress: 38,
    status: "Inscrito",
    certificateStatus: "En progreso",
    nextLesson: "Módulo 04 · Amasado profesional: prueba de membrana"
  }
];

export const digitalLibrary = [
  { title: bolilloCourse.downloadablePdf.title, type: "eBook", format: "Markdown", access: "Premium", href: bolilloCourse.downloadablePdf.href },
  { title: "Checklist de herramientas para bolillo", type: "Material complementario", format: "Markdown", access: "Estándar", href: bolilloCourse.modules[1].resourceHref },
  { title: "Tabla de ingredientes y porcentajes panaderos", type: "Recurso técnico", format: "Markdown", access: "Premium", href: bolilloCourse.modules[2].resourceHref },
  { title: "Guía visual de formado del bolillo", type: "Fotografías técnicas", format: "Markdown", access: "Premium", href: bolilloCourse.modules[5].resourceHref },
  { title: "Problemas comunes y correcciones", type: "Material complementario", format: "Markdown", access: "Premium", href: bolilloCourse.modules[9].resourceHref },
  { title: "Formato de evaluación y certificación", type: "Evaluación", format: "Markdown", access: "Premium", href: bolilloCourse.modules[12].resourceHref },
  { title: "Ruta de crecimiento para panaderos", type: "Plan de acción", format: "Markdown", access: "Premium", href: bolilloCourse.modules[13].resourceHref }
];

export const videoCenter = bolilloCourse.modules.map((module) => ({
  module: `Módulo ${module.number} · ${module.title}`,
  chapters: [
    {
      title: "Video QR del módulo",
      videos: [
        {
          title: module.title,
          privateUrl: `private-video://bolillo/modulo-${String(module.number).padStart(2, "0")}`,
          qrCode: module.videoQr,
          bolyPrompt: module.bolyPrompt
        }
      ]
    }
  ]
}));

export const demoCertificate = {
  id: "CERT-PAN-BOL-0001",
  studentName: demoStudent.name,
  courseName: bolilloCourse.title,
  issuedBy: bolilloCourse.author,
  brand: bolilloCourse.brand,
  status: "Vista previa",
  issueDate: "Disponible al completar evaluación y certificación"
};

export const paymentArchitecture = [
  { provider: "Stripe", status: "Preparado", useCase: "Tarjetas, Apple Pay, Google Pay y webhooks de inscripción" },
  { provider: "PayPal", status: "Preparado", useCase: "Pagos alternativos y alumnos internacionales" }
];

export const bolyArchitecture = [
  "Base de conocimiento por módulo del Curso Maestro de Bolillo.",
  "Preguntas frecuentes verificadas por Chef Juanote.",
  "Ayuda contextual dentro de cada módulo.",
  "Asistente educativo 24/7 con reglas de seguridad y tono paciente."
];
