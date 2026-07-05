export const bolilloCourse = {
  title: "Curso Maestro de Bolillo",
  author: "Chef Juanote",
  brand: "PanaderIA™",
  quotes: ["No hay mejor maestro que el error mismo", "Nunca has fracasado si ya has comenzado"],
  downloadablePdf: {
    title: "Manual Maestro de Bolillo PanaderIA™",
    href: "/downloads/manual-maestro-bolillo.pdf",
    status: "prepared"
  },
  complementaryMaterial: [
    "Checklist de herramientas",
    "Tabla de ingredientes y porcentajes panaderos",
    "Guía visual de formado",
    "Lista de problemas comunes y correcciones",
    "Formato de evaluación para certificación"
  ],
  modules: [
    {
      number: 1,
      title: "Introducción al Bolillo",
      objective: "Comprender la historia, características y estándar de calidad del bolillo tradicional.",
      lessons: ["Qué es un bolillo", "Características de corteza, miga y greñado", "Cómo estudiar el curso"],
      photoSlots: ["Bolillo terminado", "Comparativa de miga", "Bolillo con greña correcta"],
      videoQr: "BOL-M01-INTRO",
      bolyPrompt: "Boly™, explícame qué hace diferente a un buen bolillo."
    },
    {
      number: 2,
      title: "Herramientas necesarias",
      objective: "Identificar y usar correctamente las herramientas básicas para una producción ordenada.",
      lessons: ["Balanza", "Taza medidora", "Bowl", "Batidora"],
      photoSlots: ["Mesa de trabajo", "Balanza", "Bowl y batidora"],
      videoQr: "BOL-M02-HERRAMIENTAS",
      bolyPrompt: "Boly™, ayúdame a adaptar las herramientas si estoy empezando en casa."
    },
    {
      number: 3,
      title: "Ingredientes",
      objective: "Entender la función de harina, agua, levadura, sal y posibles enriquecimientos.",
      lessons: ["Harina", "Agua", "Levadura", "Sal", "Porcentajes panaderos"],
      photoSlots: ["Ingredientes pesados", "Textura de harina", "Mise en place"],
      videoQr: "BOL-M03-INGREDIENTES",
      bolyPrompt: "Boly™, explícame qué pasa si cambio la cantidad de agua o levadura."
    },
    {
      number: 4,
      title: "Amasado",
      objective: "Desarrollar gluten y reconocer el punto correcto de masa.",
      lessons: ["Amasado manual", "Amasado en batidora", "Prueba de membrana", "Errores de amasado"],
      photoSlots: ["Masa inicial", "Masa desarrollada", "Prueba de membrana"],
      videoQr: "BOL-M04-AMASADO",
      bolyPrompt: "Boly™, dime cómo saber si mi masa ya está lista."
    },
    {
      number: 5,
      title: "Fermentación",
      objective: "Controlar tiempo, temperatura y señales visuales de fermentación.",
      lessons: ["Fermentación inicial", "Temperatura ambiente", "Subfermentación", "Sobrefermentación"],
      photoSlots: ["Masa antes de fermentar", "Masa fermentada", "Comparativa de volumen"],
      videoQr: "BOL-M05-FERMENTACION",
      bolyPrompt: "Boly™, ayúdame a saber si mi masa está sobrefermentada."
    },
    {
      number: 6,
      title: "División y boleado",
      objective: "Dividir porciones uniformes y generar tensión inicial en cada pieza.",
      lessons: ["Pesado de porciones", "División ordenada", "Boleado", "Reposo intermedio"],
      photoSlots: ["Porciones pesadas", "Boleado correcto", "Reposo cubierto"],
      videoQr: "BOL-M06-DIVISION-BOLEADO",
      bolyPrompt: "Boly™, explícame por qué mis piezas quedan disparejas."
    },
    {
      number: 7,
      title: "Formado del bolillo",
      objective: "Formar bolillos con tensión, simetría y estructura para buen volumen.",
      lessons: ["Preformado", "Enrollado", "Sellado", "Puntas del bolillo"],
      photoSlots: ["Secuencia de formado", "Sellado inferior", "Bolillo formado"],
      videoQr: "BOL-M07-FORMADO",
      bolyPrompt: "Boly™, guíame paso a paso para formar el bolillo."
    },
    {
      number: 8,
      title: "Corte correcto",
      objective: "Realizar el corte con ángulo, profundidad y momento adecuados.",
      lessons: ["Herramienta de corte", "Ángulo correcto", "Profundidad", "Errores de greñado"],
      photoSlots: ["Cuchilla o lame", "Corte antes de hornear", "Greña abierta"],
      videoQr: "BOL-M08-CORTE",
      bolyPrompt: "Boly™, dime por qué mi bolillo no abre en el corte."
    },
    {
      number: 9,
      title: "Horneado y vapor",
      objective: "Aplicar temperatura, vapor y tiempo correctos para corteza crujiente.",
      lessons: ["Precalentado", "Vapor", "Tiempo de horneado", "Color y corteza"],
      photoSlots: ["Entrada al horno", "Vapor", "Color final"],
      videoQr: "BOL-M09-HORNEADO-VAPOR",
      bolyPrompt: "Boly™, explícame cómo crear vapor si no tengo horno profesional."
    },
    {
      number: 10,
      title: "Enfriado",
      objective: "Enfriar correctamente para estabilizar corteza, miga y conservación.",
      lessons: ["Rejilla de enfriado", "Tiempo mínimo", "Evitar humedad", "Conservación"],
      photoSlots: ["Bolillos en rejilla", "Miga estabilizada", "Almacenamiento"],
      videoQr: "BOL-M10-ENFRIADO",
      bolyPrompt: "Boly™, dime por qué mi bolillo se humedece después de hornear."
    },
    {
      number: 11,
      title: "Bolillos especiales",
      objective: "Crear variaciones de bolillo respetando técnica base y equilibrio de sabor.",
      lessons: ["Arándano", "Nuez", "Romero", "Menta", "Ajo", "Cebolla", "Integral"],
      photoSlots: ["Bolillos saborizados", "Ingredientes especiales", "Comparativa integral"],
      videoQr: "BOL-M11-ESPECIALES",
      bolyPrompt: "Boly™, ayúdame a incorporar ingredientes especiales sin dañar la masa."
    },
    {
      number: 12,
      title: "Problemas comunes",
      objective: "Diagnosticar fallas de volumen, corte, color, miga, textura y fermentación.",
      lessons: ["No abre", "Queda duro", "Miga densa", "Sabor a levadura", "Color pálido", "Pierde volumen"],
      photoSlots: ["Errores de greña", "Miga densa", "Corteza pálida"],
      videoQr: "BOL-M12-PROBLEMAS",
      bolyPrompt: "Boly™, ayúdame a diagnosticar qué salió mal en mi bolillo."
    },
    {
      number: 13,
      title: "Evaluación",
      objective: "Validar que el alumno comprende proceso, técnica y solución de problemas.",
      lessons: ["Evaluación teórica", "Evidencia fotográfica", "Autoevaluación", "Checklist final"],
      photoSlots: ["Entrega final del alumno", "Comparativa antes/después", "Checklist completado"],
      videoQr: "BOL-M13-EVALUACION",
      bolyPrompt: "Boly™, prepárame para mi evaluación final."
    },
    {
      number: 14,
      title: "Certificación",
      objective: "Preparar la emisión del certificado PanaderIA™ con evidencia de aprendizaje.",
      lessons: ["Requisitos", "Revisión", "Folio", "Certificado PanaderIA™"],
      photoSlots: ["Certificado", "Firma Chef Juanote", "QR de verificación"],
      videoQr: "BOL-M14-CERTIFICACION",
      bolyPrompt: "Boly™, explícame qué necesito para certificarme."
    }
  ]
};
