import type { BolyDialogueTone } from "@/components/BolyDialogue";

export type BolyDialogueEntry = {
  id: string;
  imageId: string;
  title?: string;
  message: string;
  tone: BolyDialogueTone;
};

/** Initial reusable messages. These are intentionally not connected to course modules yet. */
export const bolyDialogues: readonly BolyDialogueEntry[] = [
  { id: "bienvenida-general", imageId: "bienvenido", title: "Qué gusto practicar contigo", message: "Avanzaremos paso a paso. No necesitas experiencia previa: observa, prueba y toma notas.", tone: "welcome" },
  { id: "consejo-pesaje", imageId: "bascula", title: "Pesa antes de mezclar", message: "Una báscula ayuda a repetir tu receta con precisión y a entender mejor cada ajuste.", tone: "tip" },
  { id: "consejo-amasado", imageId: "amasando", title: "Amasa con intención", message: "Haz pausas cortas si la masa se resiste; el descanso también desarrolla estructura.", tone: "tip" },
  { id: "consejo-fermentacion", imageId: "fermentando", title: "Observa la masa", message: "La fermentación se reconoce por volumen, textura y tiempo; no solo por el reloj.", tone: "tip" },
  { id: "advertencia-vapor", imageId: "exclamacion", title: "Cuida el vapor", message: "Abre el horno con distancia y protege tus manos: el vapor sale rápido y muy caliente.", tone: "warning" },
  { id: "mensaje-error", imageId: "masa-aguada", title: "Podemos revisarlo", message: "Si la masa está muy húmeda, no te preocupes. Revisa el pesaje y ajusta poco a poco.", tone: "error" },
  { id: "modulo-completado", imageId: "trofeo", title: "Módulo completado", message: "Excelente trabajo. Tu práctica suma experiencia para el siguiente paso.", tone: "success" },
  { id: "mensaje-motivacional", imageId: "tu-puedes", message: "Cada masa te enseña algo nuevo. Sigue practicando con calma: tú puedes.", tone: "encouragement" }
];

