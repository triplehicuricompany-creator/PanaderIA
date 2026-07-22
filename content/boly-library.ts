/**
 * Catálogo reutilizable de las imágenes de Boly disponibles en `public/boly`.
 *
 * Las rutas son públicas para que puedan utilizarse directamente con `next/image`
 * o con una etiqueta `img`.
 */
export type BolyCategory =
  | "saludos"
  | "expresiones"
  | "motivacion"
  | "acciones"
  | "panaderia"
  | "herramientas"
  | "efectos"
  | "descanso";

export type BolyImage = {
  id: string;
  title: string;
  category: BolyCategory;
  src: string;
};

export const bolyLibrary: Record<BolyCategory, readonly BolyImage[]> = {
  saludos: [
    { id: "adios", title: "Adiós", category: "saludos", src: "/boly/01_saludos/Boly_adios.png" },
    { id: "bienvenido", title: "Bienvenido", category: "saludos", src: "/boly/01_saludos/boly_bienvenido.png" },
    { id: "hola", title: "Hola", category: "saludos", src: "/boly/01_saludos/boly_hola.png" }
  ],
  expresiones: [
    { id: "deprimido", title: "Deprimido", category: "expresiones", src: "/boly/02_expresiones/boly_deprimido.png" },
    { id: "listo", title: "Listo", category: "expresiones", src: "/boly/02_expresiones/boly_listo.png" },
    { id: "meditando", title: "Meditando", category: "expresiones", src: "/boly/02_expresiones/boly_meditando.png" },
    { id: "muy-nervioso", title: "Muy nervioso", category: "expresiones", src: "/boly/02_expresiones/boly_muy_nervioso.png" },
    { id: "nervioso", title: "Nervioso", category: "expresiones", src: "/boly/02_expresiones/boly_nervioso.png" },
    { id: "pensando", title: "Pensando", category: "expresiones", src: "/boly/02_expresiones/boly_pensando.png" },
    { id: "risa", title: "Risa", category: "expresiones", src: "/boly/02_expresiones/boly_risa.png" },
    { id: "sueno", title: "Sueño", category: "expresiones", src: "/boly/02_expresiones/boly_sueño.png" },
    { id: "triste", title: "Triste", category: "expresiones", src: "/boly/02_expresiones/boly_triste.png" }
  ],
  motivacion: [
    { id: "dos-pulgares-arriba", title: "Dos pulgares arriba", category: "motivacion", src: "/boly/03_motivacion/boly_2_pulgares_arriba.png" },
    { id: "aplaudiendo", title: "Aplaudiendo", category: "motivacion", src: "/boly/03_motivacion/boly_aplaudiendo.png" },
    { id: "corazon", title: "Corazón", category: "motivacion", src: "/boly/03_motivacion/boly_corazon.png" },
    { id: "lo-lograste", title: "Lo lograste", category: "motivacion", src: "/boly/03_motivacion/boly_lolograste.png" },
    { id: "manos-a-la-masa", title: "Manos a la masa", category: "motivacion", src: "/boly/03_motivacion/boly_manos_a_la_masa.png" },
    { id: "pulgar-arriba", title: "Pulgar arriba", category: "motivacion", src: "/boly/03_motivacion/boly_pulgar_arriba.png" },
    { id: "puno-arriba", title: "Puño arriba", category: "motivacion", src: "/boly/03_motivacion/boly_puñoarriba.png" },
    { id: "trofeo", title: "Trofeo", category: "motivacion", src: "/boly/03_motivacion/boly_trofeo.png" },
    { id: "tu-puedes", title: "Tú puedes", category: "motivacion", src: "/boly/03_motivacion/boly_tu_puedes.png" }
  ],
  acciones: [
    { id: "bailando", title: "Bailando", category: "acciones", src: "/boly/04_acciones/boly_bailando.png" },
    { id: "corriendo", title: "Corriendo", category: "acciones", src: "/boly/04_acciones/boly_corriendo.png" },
    { id: "palmas-arriba", title: "Palmas arriba", category: "acciones", src: "/boly/04_acciones/boly_palmas_arriba.png" },
    { id: "palmas-juntas", title: "Palmas juntas", category: "acciones", src: "/boly/04_acciones/boly_palmas_juntas.png" },
    { id: "senalando", title: "Señalando", category: "acciones", src: "/boly/04_acciones/boly_señalando.png" },
    { id: "silbando", title: "Silbando", category: "acciones", src: "/boly/04_acciones/boly_silbando.png" }
  ],
  panaderia: [
    { id: "amasando", title: "Amasando", category: "panaderia", src: "/boly/05_panaderia/boly_amasando.png" },
    { id: "charola-pan", title: "Charola con pan", category: "panaderia", src: "/boly/05_panaderia/boly_charola_pan.png" },
    { id: "con-masa", title: "Con masa", category: "panaderia", src: "/boly/05_panaderia/boly_con_masa.png" },
    { id: "cortando-masa", title: "Cortando masa", category: "panaderia", src: "/boly/05_panaderia/boly_cortando_masa.png" },
    { id: "fermentando", title: "Fermentando", category: "panaderia", src: "/boly/05_panaderia/boly_fermentando.png" },
    { id: "honro", title: "Honro", category: "panaderia", src: "/boly/05_panaderia/boly_honro.png" },
    { id: "masa-aguada", title: "Masa aguada", category: "panaderia", src: "/boly/05_panaderia/boly_masa_aguada.png" },
    { id: "senalando-con-masa", title: "Señalando con masa", category: "panaderia", src: "/boly/05_panaderia/boly_señalando_con_masa.png" }
  ],
  herramientas: [
    { id: "bascula", title: "Báscula", category: "herramientas", src: "/boly/06_herramientas/boly_bascula.png" },
    { id: "con-lupa", title: "Con lupa", category: "herramientas", src: "/boly/06_herramientas/boly_con_lupa.png" },
    { id: "ingredientes", title: "Ingredientes", category: "herramientas", src: "/boly/06_herramientas/boly_ingredientes.png" },
    { id: "libro", title: "Libro", category: "herramientas", src: "/boly/06_herramientas/boly_libro.png" },
    { id: "pizarron", title: "Pizarrón", category: "herramientas", src: "/boly/06_herramientas/boly_pizarron.png" },
    { id: "reloj", title: "Reloj", category: "herramientas", src: "/boly/06_herramientas/boly_reloj.png" },
    { id: "sentado-reloj-a-un-lado", title: "Sentado con reloj a un lado", category: "herramientas", src: "/boly/06_herramientas/boly_sentado_reloj_aun_lado.png" }
  ],
  efectos: [
    { id: "con-idea-foco", title: "Con idea y foco", category: "efectos", src: "/boly/07_efectos/boly_con_idea_foco.png" },
    { id: "con-duda", title: "Con duda", category: "efectos", src: "/boly/07_efectos/boly_conduda.png" },
    { id: "confeti", title: "Confeti", category: "efectos", src: "/boly/07_efectos/boly_confeti.png" },
    { id: "exclamacion-2", title: "Exclamación 2", category: "efectos", src: "/boly/07_efectos/boly_ecxlamacion_2.png" },
    { id: "estrellitas", title: "Estrellitas", category: "efectos", src: "/boly/07_efectos/boly_estrellitas.png" },
    { id: "estrella", title: "Estrella", category: "efectos", src: "/boly/07_efectos/boly_esytrella.png" },
    { id: "exclamacion", title: "Exclamación", category: "efectos", src: "/boly/07_efectos/boly_exclamacion.png" },
    { id: "idea-foco-apagado", title: "Idea con foco apagado", category: "efectos", src: "/boly/07_efectos/boly_idea_foco_apagado.png" },
    { id: "idea-foco-prendido", title: "Idea con foco prendido", category: "efectos", src: "/boly/07_efectos/boly_idea_foco_prendido.png" }
  ],
  descanso: [
    { id: "descansando", title: "Descansando", category: "descanso", src: "/boly/08_descanso/boly_descansando.png" },
    { id: "taza-de-cafe", title: "Taza de café", category: "descanso", src: "/boly/08_descanso/boly_taza_de_cafe.png" },
    { id: "taza-de-cafe-melancolico", title: "Taza de café melancólico", category: "descanso", src: "/boly/08_descanso/boly_taza_de_cafe_melancolico.png" }
  ]
};

export const bolyImages: readonly BolyImage[] = Object.values(bolyLibrary).flat();

export function getBolyImageById(id: string): BolyImage | undefined {
  return bolyImages.find((image) => image.id === id);
}

export function getBolyImagesByCategory(category: BolyCategory): readonly BolyImage[] {
  return bolyLibrary[category];
}

export function hasBolyImage(id: string): boolean {
  return getBolyImageById(id) !== undefined;
}

/** A safe image to render when a requested Boly id is unavailable. */
export const fallbackBolyImage: BolyImage = bolyLibrary.saludos[0]!;

export function getBolyImageOrFallback(id: string): BolyImage {
  return getBolyImageById(id) ?? fallbackBolyImage;
}
