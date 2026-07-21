/**
 * Catálogo reutilizable de las imágenes de Boly disponibles en `public/boly`.
 *
 * Las rutas son públicas para que puedan utilizarse directamente con `next/image`
 * o con una etiqueta `img`. Las categorías se mantienen aunque todavía no tengan
 * recursos, para que los consumidores dispongan de una API estable al añadirlos.
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
  saludos: [],
  expresiones: [],
  motivacion: [],
  acciones: [],
  panaderia: [],
  herramientas: [],
  efectos: [],
  descanso: []
};
