import { bolilloCourse } from "@/content/bolillo-course";

export const brand = {
  name: "PanaderIA™",
  slogan: "Conocimiento • Técnica • Pasión",
  founder: "Chef Juanote",
  assistant: "Boly™",
  colors: ["Negro", "Dorado", "Blanco"]
};

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Cursos", href: "/cursos" },
  { label: "Estándar", href: "/cursos/bolillo-estandar" },
  { label: "Premium", href: "/cursos/bolillo-premium" },
  { label: "Chef Juanote", href: "/chef-juanote" },
  { label: "Boly™", href: "/boly" },
  { label: "Contacto", href: "/contacto" },
  { label: "Alumno", href: "/alumno/dashboard" }
];

export const courses = [
  {
    title: "Curso Maestro de Bolillo Estándar",
    href: "/cursos/bolillo-estandar",
    badge: "Base profesional",
    price: "Acceso inicial",
    description: "Ruta esencial para aprender bolillo desde cero con fundamentos, técnica y proceso paso a paso.",
    features: ["Introducción al bolillo", "Herramientas necesarias", "Ingredientes", "Amasado", "Fermentación", "Ruta hacia evaluación premium"]
  },
  {
    title: "Curso Maestro de Bolillo Premium",
    href: "/cursos/bolillo-premium",
    badge: "Experiencia completa",
    price: "Recomendado",
    description: "Experiencia premium con recursos visuales, biblioteca digital, QR dinámicos y guía contextual de Boly™.",
    features: ["14 módulos secuenciales", "Videos QR por módulo", "Fotografías técnicas", "Manual maestro", "Recursos descargables vinculados", "Boly™ por módulo"]
  }
];

export const whyPanaderia = [
  { title: "Más de 30 años de experiencia", text: "Aprende con la visión práctica de Chef Juanote y un método creado para producción real." },
  { title: "Formación paso a paso", text: "Avanza por módulos claros: ingredientes, amasado, fermentación, formado, corte y horneado." },
  { title: "Videos exclusivos", text: "Recursos visuales preparados para explicar técnicas difíciles de entender solo con texto." },
  { title: "Certificación", text: "Ruta comercial lista para emitir certificados verificables y reforzar el valor profesional." },
  { title: "Boly™ IA 24/7", text: "Asistente virtual preparado para resolver dudas, explicar errores y acompañar al alumno." }
];

export const included = [
  { title: "eBook", text: "Manual digital estructurado para estudiar y repasar cada etapa del bolillo." },
  { title: "Videos", text: "Demostraciones complementarias y recursos preparados para QR dinámicos." },
  { title: "Certificado", text: "Reconocimiento digital listo para la siguiente fase de validación pública." },
  { title: "Acceso a Boly™", text: "Arquitectura preparada para asistencia educativa con IA." },
  { title: "Actualizaciones futuras", text: "Contenido digital actualizable sin reimprimir materiales físicos." }
];

export const testimonials = [
  { name: "María G.", role: "Emprendedora panadera", quote: "La estructura me ayudó a entender el proceso completo, no solo a seguir una receta." },
  { name: "Luis R.", role: "Alumno principiante", quote: "Por primera vez entendí qué debía observar en la masa antes de hornear." },
  { name: "Dulce M.", role: "Negocio familiar", quote: "El enfoque premium se siente profesional, claro y listo para aprender desde el celular." }
];

export const faqs = [
  { question: "¿El curso es para principiantes?", answer: "Sí. El Curso Maestro de Bolillo está diseñado para comenzar desde cero y avanzar paso a paso." },
  { question: "¿La versión premium incluye videos?", answer: "La plataforma queda preparada para videos exclusivos y acceso mediante QR dinámicos." },
  { question: "¿Boly™ ya funciona con IA?", answer: "Todavía no. En esta fase se prepara la experiencia comercial y la arquitectura para integrarlo correctamente." },
  { question: "¿Habrá certificado?", answer: "Sí. La experiencia está preparada para certificación digital en la siguiente fase operativa." },
  { question: "¿Se agregarán más cursos?", answer: "Sí. La arquitectura contempla futuras academias de panadería, pastelería y chocolatería." }
];

export const learningOutcomes = [
  "Dominar ingredientes, porcentajes panaderos y función técnica de cada elemento.",
  "Entender amasado, gluten, reposo, fermentación y señales visuales de una masa lista.",
  "Formar, cortar y hornear bolillo con método repetible y enfoque profesional.",
  "Diagnosticar errores comunes: falta de volumen, corte cerrado, miga densa o corteza pálida.",
  "Organizar una producción inicial para venta, práctica o emprendimiento panadero."
];

export const benefits = [
  { title: "Academia premium", text: "Experiencia visual cuidada para aprender con claridad desde móvil, tablet o escritorio." },
  { title: "Método paso a paso", text: "Contenido organizado por módulos, capítulos y lecciones para avanzar sin perderse." },
  { title: "Biblioteca preparada", text: "Estructura lista para PDFs, imágenes técnicas, videos y recursos descargables." },
  { title: "Escalable", text: "Base lista para panadería, pastelería, chocolatería y certificaciones futuras." }
];

export const investorHighlights = [
  "Producto digital vendible desde el Curso Maestro de Bolillo.",
  "Modelo premium con QR dinámicos y recursos actualizables.",
  "Ruta clara hacia IA educativa con Boly™.",
  "Arquitectura preparada para múltiples academias y certificaciones."
];

export const modules = bolilloCourse.modules;

export const courseQuotes = bolilloCourse.quotes;
export const courseAuthor = bolilloCourse.author;

export const futureAcademies = ["Panadería", "Pastelería", "Chocolatería"];

export const bolyKnowledgeAreas = [
  "Fundamentos del bolillo",
  "Ingredientes y porcentajes panaderos",
  "Amasado y desarrollo de gluten",
  "Fermentación y temperatura",
  "Formado, corte y horneado",
  "Solución de problemas frecuentes"
];
