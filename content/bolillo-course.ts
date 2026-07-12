export const bolilloCourse = {
  title: "Curso Maestro de Bolillo",
  author: "Chef Juanote",
  brand: "PanaderIA™",
  quotes: ["No hay mejor maestro que el error mismo", "Nunca has fracasado si ya has comenzado"],
  downloadablePdf: {
    title: "Manual Maestro de Bolillo PanaderIA™",
    href: "/recursos/manual-maestro-bolillo",
    status: "available"
  },
  complementaryMaterial: [
    "Checklist de herramientas",
    "Tabla de ingredientes y porcentajes panaderos",
    "Guía visual de formado",
    "Lista de problemas comunes y correcciones",
    "Formato de evaluación para certificación",
    "Ruta de crecimiento para panaderos"
  ],
  modules: [
    {
      number: 1,
      title: "Introducción al mundo del bolillo",
      resourceHref: "/recursos/modulo-01",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-01-introduccion-al-mundo-del-bolillo.md",
      objective: "Comprender la historia, las características sensoriales y el estándar de calidad del bolillo tradicional antes de entrar a técnica.",
      lessons: ["Qué es un bolillo", "Estándar de corteza, miga y greñado", "Cómo estudiar y practicar el curso"],
      photoSlots: ["Bolillo terminado", "Comparativa de miga", "Bolillo con greña correcta"],
      videoQr: "BOL-M01-INTRO",
      bolyPrompt: "Boly™, explícame qué hace diferente a un buen bolillo."
    },
    {
      number: 2,
      title: "Herramientas esenciales y profesionales",
      resourceHref: "/recursos/modulo-02",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-02-herramientas-esenciales-y-profesionales.md",
      objective: "Identificar herramientas caseras y profesionales, y usarlas con orden para producir con precisión desde la primera práctica.",
      lessons: ["Balanza y medición precisa", "Bowl, raspa y mesa de trabajo", "Batidora y amasado manual", "Organización antes de iniciar"],
      photoSlots: ["Mesa de trabajo", "Balanza", "Bowl y batidora"],
      videoQr: "BOL-M02-HERRAMIENTAS",
      bolyPrompt: "Boly™, ayúdame a adaptar las herramientas si estoy empezando en casa."
    },
    {
      number: 3,
      title: "Ingredientes del bolillo",
      resourceHref: "/recursos/modulo-03",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-03-ingredientes-del-bolillo.md",
      objective: "Entender la función técnica de harina, agua, levadura y sal para tomar decisiones con porcentajes panaderos.",
      lessons: ["Harina y fuerza", "Agua e hidratación", "Levadura y fermentación", "Sal y equilibrio", "Porcentajes panaderos"],
      photoSlots: ["Ingredientes pesados", "Textura de harina", "Mise en place"],
      videoQr: "BOL-M03-INGREDIENTES",
      bolyPrompt: "Boly™, explícame qué pasa si cambio la cantidad de agua o levadura."
    },
    {
      number: 4,
      title: "Amasado profesional",
      resourceHref: "/recursos/modulo-04",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-04-amasado-profesional.md",
      objective: "Desarrollar gluten y reconocer el punto correcto de masa.",
      lessons: ["Amasado manual", "Amasado en batidora", "Prueba de membrana", "Errores de amasado"],
      photoSlots: ["Masa inicial", "Masa desarrollada", "Prueba de membrana"],
      videoQr: "BOL-M04-AMASADO",
      bolyPrompt: "Boly™, dime cómo saber si mi masa ya está lista."
    },
    {
      number: 5,
      title: "Fermentación profesional",
      resourceHref: "/recursos/modulo-05",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-05-fermentacion-profesional.md",
      objective: "Controlar tiempo, temperatura y señales visuales de fermentación.",
      lessons: ["Fermentación inicial", "Temperatura ambiente", "Subfermentación", "Sobrefermentación"],
      photoSlots: ["Masa antes de fermentar", "Masa fermentada", "Comparativa de volumen"],
      videoQr: "BOL-M05-FERMENTACION",
      bolyPrompt: "Boly™, ayúdame a saber si mi masa está sobrefermentada."
    },
    {
      number: 6,
      title: "División, boleado y formado",
      resourceHref: "/recursos/modulo-06",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-06-division-boleado-y-formado.md",
      objective: "Dividir porciones uniformes, generar tensión y formar piezas simétricas listas para greñar.",
      lessons: ["Pesado de porciones", "Boleado con tensión", "Reposo intermedio", "Formado y sellado"],
      photoSlots: ["Porciones pesadas", "Boleado correcto", "Bolillo formado"],
      videoQr: "BOL-M06-DIVISION-FORMADO",
      bolyPrompt: "Boly™, explícame por qué mis piezas quedan disparejas o sin tensión."
    },
    {
      number: 7,
      title: "Horneado profesional",
      resourceHref: "/recursos/modulo-07",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-07-horneado-profesional.md",
      objective: "Aplicar temperatura, vapor y tiempo correctos para lograr volumen, greña abierta y corteza crujiente.",
      lessons: ["Precalentado real", "Vapor en horno casero o profesional", "Tiempo de horneado", "Color, sonido y corteza"],
      photoSlots: ["Entrada al horno", "Vapor", "Color final"],
      videoQr: "BOL-M07-HORNEADO",
      bolyPrompt: "Boly™, explícame cómo crear vapor si no tengo horno profesional."
    },
    {
      number: 8,
      title: "Corte profesional del bolillo",
      resourceHref: "/recursos/modulo-08",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-08-corte-profesional-del-bolillo.md",
      objective: "Realizar el corte con herramienta, ángulo, profundidad y momento adecuados para que el bolillo abra de forma controlada.",
      lessons: ["Herramienta de corte", "Ángulo correcto", "Profundidad", "Errores de greñado"],
      photoSlots: ["Cuchilla o lame", "Corte antes de hornear", "Greña abierta"],
      videoQr: "BOL-M08-CORTE",
      bolyPrompt: "Boly™, dime por qué mi bolillo no abre en el corte."
    },
    {
      number: 9,
      title: "Enfriado y conservación",
      resourceHref: "/recursos/modulo-09",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-09-enfriado-y-conservacion.md",
      objective: "Enfriar correctamente para estabilizar corteza, miga y conservación.",
      lessons: ["Rejilla de enfriado", "Tiempo mínimo", "Evitar humedad", "Conservación"],
      photoSlots: ["Bolillos en rejilla", "Miga estabilizada", "Almacenamiento"],
      videoQr: "BOL-M09-ENFRIADO",
      bolyPrompt: "Boly™, dime por qué mi bolillo se humedece después de hornear."
    },
    {
      number: 10,
      title: "Diagnóstico de errores y soluciones",
      resourceHref: "/recursos/modulo-10",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-10-diagnostico-errores-y-soluciones.md",
      objective: "Diagnosticar fallas de volumen, corte, color, miga, textura y fermentación sin repetir pasos innecesarios.",
      lessons: ["No abre", "Queda duro", "Miga densa", "Sabor a levadura", "Color pálido", "Pierde volumen"],
      photoSlots: ["Errores de greña", "Miga densa", "Corteza pálida"],
      videoQr: "BOL-M10-DIAGNOSTICO",
      bolyPrompt: "Boly™, ayúdame a diagnosticar qué salió mal en mi bolillo."
    },
    {
      number: 11,
      title: "Variantes profesionales del bolillo",
      resourceHref: "/recursos/modulo-11",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-11-variantes-profesionales-del-bolillo.md",
      objective: "Crear variaciones de bolillo respetando técnica base y equilibrio de sabor.",
      lessons: ["Arándano", "Nuez", "Romero", "Menta", "Ajo", "Cebolla", "Integral"],
      photoSlots: ["Bolillos saborizados", "Ingredientes especiales", "Comparativa integral"],
      videoQr: "BOL-M11-VARIANTES",
      bolyPrompt: "Boly™, ayúdame a incorporar ingredientes especiales sin dañar la masa."
    },
    {
      number: 12,
      title: "Producción profesional completa",
      resourceHref: "/recursos/modulo-12",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-12-produccion-profesional-completa.md",
      objective: "Integrar tiempos, estaciones, lotes y control de calidad para repetir el proceso completo con orden profesional.",
      lessons: ["Plan de producción", "Secuencia completa", "Control de calidad", "Registro de resultados"],
      photoSlots: ["Mesa organizada", "Lote completo", "Checklist completado"],
      videoQr: "BOL-M12-PRODUCCION",
      bolyPrompt: "Boly™, ayúdame a ordenar mi primera producción completa."
    },
    {
      number: 13,
      title: "Certificación profesional del panadero",
      resourceHref: "/recursos/modulo-13",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-13-certificacion-profesional-del-panadero.md",
      objective: "Preparar evidencias, autoevaluación y criterios de revisión para obtener el certificado PanaderIA™ con claridad.",
      lessons: ["Requisitos", "Evidencia fotográfica", "Revisión", "Folio y certificado PanaderIA™"],
      photoSlots: ["Entrega final del alumno", "Comparativa antes/después", "Certificado"],
      videoQr: "BOL-M13-CERTIFICACION",
      bolyPrompt: "Boly™, prepárame para mi evaluación y certificación final."
    },
    {
      number: 14,
      title: "Futuro, negocio y expansión del panadero",
      resourceHref: "/recursos/modulo-14",
      resourceFile: "RECURSOS_DESCARGABLES_ALUMNO/capitulo-14-futuro-negocio-y-expansion-del-panadero.md",
      objective: "Convertir lo aprendido en práctica sostenible, oferta comercial inicial y ruta de mejora continua.",
      lessons: ["Siguiente nivel de práctica", "Venta inicial", "Control de costos", "Plan de crecimiento"],
      photoSlots: ["Lote para venta", "Empaque", "Registro de producción"],
      videoQr: "BOL-M14-EXPANSION",
      bolyPrompt: "Boly™, ayúdame a planear mis siguientes pasos como panadero."
    }
  ]
};
