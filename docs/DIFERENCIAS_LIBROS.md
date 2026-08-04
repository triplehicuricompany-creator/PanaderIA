# Diferencias entre versiones del libro

**Fecha de comparación:** 2026-08-04

**Unidad comparada:** 7 archivos, 6 contenidos únicos.

**Decisión:** conservar `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` como única base activa de Bolillo A.I. v1.0.

## Comparación ejecutiva

| Versión | Capítulos detectados como contenido | Relación con la candidata oficial | Decisión |
|---|---:|---|---|
| `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` | 14 | Referencia de comparación | **Conservar activa** |
| `LIBRO_MAESTRO_BOLILLO.md` | 14 | Mismo contenido capitular; cambia únicamente la declaración de estado y edición | Archivar lógicamente como maestro anterior |
| `LIBRO_MAESTRO_BOLILLO_PREMIUM.md` | 14 | Mismo temario principal, desarrollo considerablemente más corto y estructura interna diferente | Archivar lógicamente como variante anterior |
| `LIBRO_MAESTRO_BOLILLO_BIBLE.md` | 0 capítulos desarrollados | Especificación/biblia con capítulos sugeridos, no manuscrito | Conservar separada como referencia, fuera del conjunto editable |
| Descarga Platform V1 | 0 capítulos desarrollados | Demostración mínima | Archivar lógicamente como snapshot |
| Descarga Platform V2 | 14 resúmenes | Edición comercial RC1 condensada | Archivar lógicamente como salida histórica |
| Descarga Platform V3 | 14 resúmenes | Idéntica byte por byte a V2 | Archivar lógicamente como salida histórica duplicada |

## Capítulos repetidos

Los manuscritos **Publicación**, **Maestro** y **Premium** repiten el mismo temario de 14 capítulos:

1. Introducción al mundo del bolillo.
2. Herramientas esenciales y profesionales.
3. Ingredientes del bolillo.
4. Amasado profesional.
5. Fermentación profesional.
6. División, boleado y formado.
7. Horneado profesional.
8. Corte profesional del bolillo.
9. Enfriado y conservación.
10. Diagnóstico, errores y soluciones.
11. Variantes profesionales del bolillo.
12. Producción profesional completa.
13. Certificación profesional del panadero.
14. Futuro, negocio y expansión del panadero.

Las descargas V2 y V3 repiten esos 14 temas en forma resumida. En el capítulo 10 usan la etiqueta “Diagnóstico, errores y solución de problemas”, una variación nominal respecto de “Diagnóstico, errores y soluciones”. V2 y V3 repiten, además, el contenido completo entre sí: tienen el mismo tamaño y SHA-256.

## Capítulos únicos

- **No se detectaron capítulos principales únicos** en Maestro, Premium, V2 o V3 que falten del temario de la candidata oficial.
- La Bible incluye secciones de especificación (“Objetivo”, “Público objetivo”, “Estilo”, fotografías, diagramas, videos, recursos, filosofía y diseño editorial), pero no capítulos desarrollados del libro; por tanto, no deben incorporarse como capítulos únicos.
- La descarga V1 no aporta capítulos desarrollados.
- Sí existen diferencias de amplitud y subsecciones dentro de capítulos entre Premium y Publicación. No son capítulos adicionales y esta misión no mezcla ni reescribe esos textos.

## Diferencia exacta entre Maestro y Publicación

Los dos archivos de aproximadamente 483 KB conservan los mismos capítulos y el mismo cuerpo. La comparación textual detecta solo dos reemplazos:

| Campo | `LIBRO_MAESTRO_BOLILLO.md` | `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` |
|---|---|---|
| Estado | “Borrador editorial funcional — capítulos 1 al 14 desarrollados” | “Versión final de publicación — preparada para exportación PDF y EPUB” |
| Edición | “Borrador editorial preparado para publicación profesional.” | “Versión final de publicación profesional.” |

Esto explica la diferencia de 8 bytes y confirma que Publicación es la sucesora editorial, no un manuscrito capitular alternativo.

## Imágenes diferentes

- Ninguna de las siete versiones contiene sintaxis Markdown que incruste o enlace archivos de imagen; por ello **no hay imágenes embebidas que comparar entre versiones**.
- Los manuscritos describen necesidades visuales, pero esas menciones no identifican un binario incorporado al libro.
- Las 54 imágenes PNG de Boly™ y los SVG por capítulo viven fuera de los manuscritos. No pueden atribuirse automáticamente a una versión concreta y su aprobación sigue pendiente.
- La descarga V1, las descargas V2/V3, Premium, Maestro, Publicación y Bible no aportan conjuntos de imágenes diferenciados dentro de sus propios archivos.

## Recursos diferentes

| Grupo | Diferencia observada |
|---|---|
| Publicación / Maestro | Describen recursos visuales y multimedia, laboratorios, ejercicios, evaluaciones, checklists y participación de Boly™ con el mayor desarrollo. No enlazan archivos concretos. |
| Premium | Incluye bloques de recursos visuales sugeridos y QR recomendados en una estructura más compacta. No enlaza binarios concretos. |
| Bible | Define criterios y tipos deseados para fotografías, diagramas, videos, QR y descargables; funciona como especificación, no como paquete de recursos. |
| Platform V1 | Es solo una descarga de demostración mínima; no incorpora recursos. |
| Platform V2 / V3 | Resumen comercial RC1; ambos archivos son idénticos y no incorporan enlaces ni recursos binarios. |

Los recursos externos del repositorio (`RECURSOS_DESCARGABLES_ALUMNO/`, biblioteca visual, `public/boly/`, producción multimedia y contenido comercial) necesitan una matriz de trazabilidad contra el hash oficial antes de incluirse en el producto.

## Conservación y archivo

### Debe conservarse como fuente activa

- `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md`, exactamente con SHA-256 `b972325064d6f3a181cc23107b4872af4fd88b2592b42b38ec6be3f794160239`.

### Deben archivarse lógicamente como versiones históricas o salidas

- `LIBRO_MAESTRO_BOLILLO.md`.
- `LIBRO_MAESTRO_BOLILLO_PREMIUM.md`.
- `PANADERIA_PLATFORM_V1/downloads/books/libro-maestro-bolillo-premium.md`.
- `PANADERIA_PLATFORM_V2/downloads/books/libro-maestro-bolillo-premium.md`.
- `PANADERIA_PLATFORM_V3_RELEASE/downloads/books/libro-maestro-bolillo-premium.md`.

### Debe conservarse como referencia, no como versión publicable

- `LIBRO_MAESTRO_BOLILLO_BIBLE.md`.

Esta clasificación es documental. No se mueve ni borra ningún archivo; “archivar” significa excluirlo de la edición y distribución activa de la v1.0.

## Riesgos de consolidación

1. Las copias históricas permanecen en rutas descargables y podrían distribuirse por error.
2. El estado “final de publicación” del encabezado no prueba revisión técnica, legal, ortotipográfica ni preflight comercial.
3. Los recursos externos no están vinculados por hash al manuscrito oficial y pueden contradecirlo.
4. No existe PDF/EPUB final; una futura exportación podría introducir defectos aunque la fuente sea válida.
5. Faltan el maestro visual aprobado de Boly™, la foto oficial de Chef Juanote y evidencia completa de derechos.

## Cinco acciones inmediatas para iniciar la versión comercial

1. **Congelar la fuente:** registrar el hash oficial en el control de release y bloquear la edición accidental de variantes y descargas.
2. **Cerrar revisión editorial y técnica:** revisar los 14 capítulos contra biblias técnicas, estilo, inocuidad y terminología, documentando cada aprobación sin mezclar versiones.
3. **Crear trazabilidad de recursos:** relacionar por capítulo cada imagen, descargable, QR y multimedia aprobado con ruta, derechos, responsable, estado y hash.
4. **Cerrar identidad y derechos:** obtener/aprobar los maestros de Chef Juanote y Boly™, además de licencias, autorizaciones y claims comerciales.
5. **Preparar producción y QA comercial:** maquetar desde la fuente congelada, exportar en una fase posterior, ejecutar preflight y pruebas de lectura/entrega, y registrar el hash del artefacto aprobado.
