import type { BolyDialogueTone } from "./boly-dialogue-tone";

import { hasBolyImage } from "./boly-library";

export const bolyEventTypes = [
  "FIRST_LOGIN", "COURSE_WELCOME", "MODULE_STARTED", "MODULE_COMPLETED", "PRACTICE_STARTED", "PRACTICE_COMPLETED", "QUIZ_PASSED", "QUIZ_FAILED", "USER_NEEDS_HELP", "USER_INACTIVE", "DOUGH_TOO_DRY", "DOUGH_TOO_WET", "DOUGH_TOO_STICKY", "DOUGH_READY", "FERMENTATION_STARTED", "FERMENTATION_READY", "UNDERFERMENTED", "OVERFERMENTED", "SHAPING_STARTED", "CUTTING_WARNING", "STEAM_WARNING", "BAKING_STARTED", "BAKING_COMPLETED", "COOLING_REMINDER", "COMMON_ERROR", "RETRY_ENCOURAGEMENT", "CERTIFICATE_READY"
] as const;

export type BolyEventType = (typeof bolyEventTypes)[number];
export type BolyEventPriority = "low" | "normal" | "high" | "critical";

export type BolyEventDefinition = {
  event: BolyEventType;
  dialogueId: string;
  imageId: string;
  tone: BolyDialogueTone;
  title?: string;
  defaultMessage: string;
  priority: BolyEventPriority;
  cooldownSeconds?: number;
  oncePerSession?: boolean;
};

export type BolyEventOverrides = Partial<Pick<BolyEventDefinition, "title" | "imageId" | "tone">> & { message?: string };
export type ResolvedBolyEvent = Omit<BolyEventDefinition, "defaultMessage"> & { message: string };

/** Central catalogue used by course experiences when they need a Boly response. */
export const bolyEventCatalog: readonly BolyEventDefinition[] = [
  { event: "FIRST_LOGIN", dialogueId: "evento-primer-ingreso", imageId: "bienvenido", tone: "welcome", title: "¡Bienvenido a la panadería!", defaultMessage: "Soy Boly. Iremos paso a paso para que practiques con calma.", priority: "normal", oncePerSession: true },
  { event: "COURSE_WELCOME", dialogueId: "evento-bienvenida-curso", imageId: "hola", tone: "welcome", title: "Comencemos", defaultMessage: "Ten tus ingredientes y una libreta cerca. Estoy aquí para acompañarte.", priority: "normal", oncePerSession: true },
  { event: "MODULE_STARTED", dialogueId: "evento-modulo-iniciado", imageId: "manos-a-la-masa", tone: "encouragement", title: "Manos a la masa", defaultMessage: "Lee el objetivo y avanza a tu ritmo; cada paso cuenta.", priority: "normal" },
  { event: "MODULE_COMPLETED", dialogueId: "evento-modulo-completado", imageId: "trofeo", tone: "success", title: "Módulo completado", defaultMessage: "¡Excelente trabajo! Lo que practicaste hoy te prepara para el siguiente paso.", priority: "normal" },
  { event: "PRACTICE_STARTED", dialogueId: "evento-practica-iniciada", imageId: "amasando", tone: "tip", title: "Hora de practicar", defaultMessage: "Observa la masa con calma y toma nota de lo que cambia.", priority: "normal" },
  { event: "PRACTICE_COMPLETED", dialogueId: "evento-practica-completada", imageId: "aplaudiendo", tone: "success", title: "Práctica completada", defaultMessage: "¡Muy bien! Repetir con atención es la mejor forma de aprender.", priority: "normal" },
  { event: "QUIZ_PASSED", dialogueId: "evento-quiz-aprobado", imageId: "pulgar-arriba", tone: "success", title: "¡Lo resolviste!", defaultMessage: "Tus respuestas muestran que vas entendiendo el proceso.", priority: "normal" },
  { event: "QUIZ_FAILED", dialogueId: "evento-quiz-por-revisar", imageId: "pensando", tone: "encouragement", title: "Sigamos aprendiendo", defaultMessage: "No pasa nada. Revisa la lección y vuelve a intentarlo cuando te sientas listo.", priority: "normal", cooldownSeconds: 30 },
  { event: "USER_NEEDS_HELP", dialogueId: "evento-necesita-ayuda", imageId: "con-lupa", tone: "question", title: "Revisémoslo juntos", defaultMessage: "Vuelve al paso anterior y observa qué necesita la masa. Una pista a la vez ayuda mucho.", priority: "high" },
  { event: "USER_INACTIVE", dialogueId: "evento-usuario-inactivo", imageId: "taza-de-cafe", tone: "neutral", title: "Cuando quieras, seguimos", defaultMessage: "Tómate tu tiempo. La lección estará lista cuando regreses.", priority: "low", cooldownSeconds: 300 },
  { event: "DOUGH_TOO_DRY", dialogueId: "evento-masa-seca", imageId: "con-masa", tone: "tip", title: "La masa se siente seca", defaultMessage: "Añade agua poco a poco y mezcla antes de decidir si necesita más.", priority: "high" },
  { event: "DOUGH_TOO_WET", dialogueId: "evento-masa-humeda", imageId: "masa-aguada", tone: "warning", title: "La masa está muy húmeda", defaultMessage: "No agregues harina de golpe. Descansa la masa, revisa el pesaje y ajusta en cantidades pequeñas.", priority: "high" },
  { event: "DOUGH_TOO_STICKY", dialogueId: "evento-masa-pegajosa", imageId: "masa-aguada", tone: "tip", title: "La masa está pegajosa", defaultMessage: "Humedece ligeramente tus manos o usa un descanso corto antes de hacer ajustes.", priority: "high" },
  { event: "DOUGH_READY", dialogueId: "evento-masa-lista", imageId: "listo", tone: "success", title: "La masa está lista", defaultMessage: "Tiene buena elasticidad y se siente más uniforme. Puedes continuar.", priority: "normal" },
  { event: "FERMENTATION_STARTED", dialogueId: "evento-fermentacion-iniciada", imageId: "fermentando", tone: "tip", title: "Empieza la fermentación", defaultMessage: "Cubre la masa y observa su volumen, no solo el reloj.", priority: "normal" },
  { event: "FERMENTATION_READY", dialogueId: "evento-fermentacion-lista", imageId: "fermentando", tone: "success", title: "Fermentación lista", defaultMessage: "La masa ha ganado volumen y se ve aireada. Es buen momento para el siguiente paso.", priority: "normal" },
  { event: "UNDERFERMENTED", dialogueId: "evento-poca-fermentacion", imageId: "reloj", tone: "tip", title: "Aún necesita tiempo", defaultMessage: "Dale un poco más de fermentación y vuelve a revisar su volumen y suavidad.", priority: "high" },
  { event: "OVERFERMENTED", dialogueId: "evento-mucha-fermentacion", imageId: "pensando", tone: "warning", title: "La masa fermentó de más", defaultMessage: "Trátala con suavidad. Anota el tiempo y la temperatura para ajustar la próxima vez.", priority: "high" },
  { event: "SHAPING_STARTED", dialogueId: "evento-formado-iniciado", imageId: "con-masa", tone: "tip", title: "Vamos a formar", defaultMessage: "Trabaja con movimientos suaves para conservar el aire que ganó la masa.", priority: "normal" },
  { event: "CUTTING_WARNING", dialogueId: "evento-corte-seguro", imageId: "cortando-masa", tone: "warning", title: "Cuida el corte", defaultMessage: "Usa una cuchilla adecuada y mantén tus dedos alejados de la trayectoria.", priority: "high" },
  { event: "STEAM_WARNING", dialogueId: "evento-vapor-seguro", imageId: "exclamacion", tone: "warning", title: "Atención con el vapor", defaultMessage: "El vapor quema rápidamente. Abre el horno con distancia, protege tus manos y aparta el rostro.", priority: "critical" },
  { event: "BAKING_STARTED", dialogueId: "evento-horneado-iniciado", imageId: "honro", tone: "tip", title: "Al horno", defaultMessage: "Precalienta bien y evita abrir la puerta durante los primeros minutos.", priority: "normal" },
  { event: "BAKING_COMPLETED", dialogueId: "evento-horneado-completado", imageId: "charola-pan", tone: "success", title: "Horneado completado", defaultMessage: "¡Qué buen avance! Deja que el pan se enfríe para que termine de asentarse.", priority: "normal" },
  { event: "COOLING_REMINDER", dialogueId: "evento-recordatorio-enfriado", imageId: "taza-de-cafe", tone: "tip", title: "Dale tiempo para enfriar", defaultMessage: "Espera antes de cortar: así la miga conserva mejor su textura.", priority: "normal" },
  { event: "COMMON_ERROR", dialogueId: "evento-error-comun", imageId: "con-duda", tone: "error", title: "Es parte del aprendizaje", defaultMessage: "Los errores dan información. Revisa un ajuste a la vez y vuelve a practicar.", priority: "normal" },
  { event: "RETRY_ENCOURAGEMENT", dialogueId: "evento-intento-nuevo", imageId: "tu-puedes", tone: "encouragement", title: "Inténtalo otra vez", defaultMessage: "Ya tienes más información que antes. Haz un nuevo intento con calma.", priority: "normal", cooldownSeconds: 30 },
  { event: "CERTIFICATE_READY", dialogueId: "evento-certificado-listo", imageId: "trofeo", tone: "success", title: "¡Tu certificado está listo!", defaultMessage: "Celebramos tu constancia. Has completado este recorrido de aprendizaje.", priority: "high", oncePerSession: true }
];

export function getBolyEvent(event: BolyEventType | string): BolyEventDefinition | undefined {
  return bolyEventCatalog.find((definition) => definition.event === event);
}

export function resolveBolyEvent(event: BolyEventType | string, overrides: BolyEventOverrides = {}): ResolvedBolyEvent | undefined {
  const definition = getBolyEvent(event);
  if (!definition) return undefined;

  const { defaultMessage, ...eventDefinition } = definition;
  return {
    ...eventDefinition,
    ...(overrides.title === undefined ? {} : { title: overrides.title }),
    ...(overrides.imageId === undefined ? {} : { imageId: overrides.imageId }),
    ...(overrides.tone === undefined ? {} : { tone: overrides.tone }),
    message: overrides.message ?? defaultMessage
  };
}

export function hasBolyEvent(event: BolyEventType | string): event is BolyEventType {
  return getBolyEvent(event) !== undefined;
}

export function getBolyEventsByPriority(priority: BolyEventPriority): readonly BolyEventDefinition[] {
  return bolyEventCatalog.filter((definition) => definition.priority === priority);
}

export function getBolyEventsByTone(tone: BolyDialogueTone): readonly BolyEventDefinition[] {
  return bolyEventCatalog.filter((definition) => definition.tone === tone);
}

/** Returns catalogue errors so tests and future integrations can verify event integrity. */
export function validateBolyEventCatalog(catalog: readonly BolyEventDefinition[] = bolyEventCatalog): readonly string[] {
  const errors: string[] = [];
  const dialogueIds = new Set<string>();
  const events = new Set<string>();

  for (const definition of catalog) {
    if (dialogueIds.has(definition.dialogueId)) errors.push(`Duplicate dialogueId: ${definition.dialogueId}`);
    dialogueIds.add(definition.dialogueId);
    if (events.has(definition.event)) errors.push(`Duplicate event: ${definition.event}`);
    events.add(definition.event);
    if (!hasBolyImage(definition.imageId)) errors.push(`Unknown imageId: ${definition.imageId}`);
    if (!definition.defaultMessage.trim()) errors.push(`Empty message: ${definition.event}`);
  }

  for (const event of bolyEventTypes) if (!events.has(event)) errors.push(`Missing event: ${event}`);
  if (getBolyEvent("STEAM_WARNING")?.priority !== "critical") errors.push("STEAM_WARNING must be critical");
  if (getBolyEvent("FIRST_LOGIN")?.oncePerSession !== true) errors.push("FIRST_LOGIN must run once per session");
  return errors;
}

const catalogErrors = validateBolyEventCatalog();
if (catalogErrors.length) throw new Error(`Invalid Boly event catalog: ${catalogErrors.join("; ")}`);
