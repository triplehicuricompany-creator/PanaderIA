# Biblioteca Visual IA de PanaderIA™ — Beta 1.0

La **Biblioteca Visual IA de PanaderIA™** es el espacio oficial para planear, catalogar y producir imágenes, diagramas, infografías, miniaturas, banners y materiales visuales del ecosistema PanaderIA™ sin modificar el Libro Maestro, el Curso, Boly Assistant ni otros recursos existentes.

## Objetivo

Mantener una producción visual ordenada, profesional y escalable para:

- Imágenes por capítulo del Libro Maestro.
- Fotografías reales del Chef Juanote.
- Imágenes IA provisionales.
- Diagramas técnicos.
- Infografías educativas.
- Ilustraciones paso a paso.
- Portadas y banners.
- Miniaturas para videos.
- Imágenes oficiales de Boly.
- Imágenes para redes sociales.
- Imágenes para página web de venta.
- Materiales descargables del alumno.

## Reglas de uso

1. **No modificar el Libro Maestro desde esta biblioteca.** Esta carpeta solo organiza y referencia recursos visuales.
2. **No borrar archivos existentes.** Los reemplazos deben registrarse y conservar historial.
3. **No duplicar recursos ya creados.** Antes de crear una imagen, revisar si ya existe un recurso equivalente.
4. **Nombrar archivos de forma profesional.** Usar nombres claros, consistentes y fáciles de rastrear.
5. **Separar imágenes reales de imágenes IA.** Las imágenes generadas por IA deben marcarse como provisionales hasta que exista material real.
6. **Boly se mantiene como asistente visual principal.** Sus imágenes deben ser coherentes con su rol educativo y amigable.

## Convención de nombres recomendada

Usar minúsculas, guiones medios y metadatos mínimos:

```text
panaderia-[categoria]-[tema]-[uso]-v[version].[extension]
```

Ejemplos:

```text
panaderia-capitulo-03-fermentacion-libro-v01.png
panaderia-chef-juanote-amasado-foto-real-v01.jpg
panaderia-boly-consejo-fermentacion-redes-v01.png
panaderia-miniatura-video-corte-navaja-v01.jpg
```

## Qué imágenes son provisionales

Son provisionales todas las imágenes ubicadas en:

- `03_IMAGENES_IA_PROVISIONALES/`
- Cualquier archivo cuyo nombre incluya `ia-provisional`.
- Cualquier recurso marcado en `manifest.json` con `status: "provisional_ia"`.

Estas imágenes pueden usarse para maquetas, planeación, prototipos, pruebas de diseño, storyboards y materiales beta. No deben presentarse como fotografías reales del Chef Juanote.

## Qué imágenes deben reemplazarse por material real

Deben reemplazarse por fotografías o video real del Chef Juanote cuando estén disponibles:

- Preparaciones con manos, mesa de trabajo, masa o herramientas reales.
- Amasado, fermentación, corte con navaja, horneado y enfriado.
- Fotografías hero para ventas, portada premium y autoridad del curso.
- Evidencia visual de procesos reales del bolillo.

Al reemplazar una imagen IA por una foto real:

1. Guardar la foto real en `02_FOTOGRAFIAS_REALES_CHEF_JUANOTE/`.
2. Actualizar el registro correspondiente en `manifest.json`.
3. Marcar la imagen IA como `reemplazada_por_foto_real` si se conserva como referencia.
4. No borrar la imagen IA hasta validar que el nuevo recurso está enlazado en capítulos, videos, QR o descargables.

## Consistencia visual PanaderIA™

Mantener siempre un estilo:

- Educativo y claro para principiantes.
- Premium, limpio y profesional.
- Amigable, cálido y mexicano.
- Enfocado en panadería artesanal y aprendizaje práctico.
- Con iluminación natural o de estudio cálida.
- Con paleta visual de pan dorado, crema, harina, madera, acero y acentos cálidos.
- Con Boly como guía visual cuando se necesite explicación, consejo o acompañamiento.

Evitar:

- Imágenes confusas, oscuras o saturadas.
- Estética genérica sin identidad mexicana.
- Representaciones poco realistas del pan o del proceso.
- Personajes que compitan con Boly como asistente principal.

## Conexión con capítulos, videos, QR y descargables

Cada recurso visual importante debe tener una relación clara con al menos uno de estos usos:

- `capitulo_libro`: capítulo o sección del Libro Maestro.
- `video`: clase, cápsula o miniatura educativa.
- `qr`: material que se abrirá desde un código QR.
- `descargable`: guía, checklist, infografía o plantilla del alumno.
- `web_ventas`: landing page, banner o material promocional.
- `redes_sociales`: publicación, carrusel, historia o anuncio.

Registrar estas conexiones en `manifest.json` usando campos como:

```json
{
  "id": "panaderia-cap-03-fermentacion-v01",
  "categoria": "01_CAPITULOS_LIBRO",
  "relaciones": {
    "capitulo_libro": "Capítulo 03 — Fermentación",
    "video": "video-fermentacion-basica",
    "qr": "qr-capitulo-03-fermentacion",
    "descargable": "checklist-fermentacion"
  }
}
```

## Flujo recomendado de producción

1. Definir necesidad visual y uso final.
2. Revisar `manifest.json` para evitar duplicados.
3. Crear prompt o brief visual.
4. Guardar IA provisional o foto real en la carpeta correcta.
5. Registrar metadatos en `manifest.json`.
6. Validar consistencia visual con el manifiesto.
7. Conectar con capítulo, video, QR o descargable.
8. Reemplazar IA con foto real cuando exista material del Chef Juanote.

## Estado

**Beta 1.0** — estructura inicial lista para organizar la producción visual oficial de PanaderIA™.
