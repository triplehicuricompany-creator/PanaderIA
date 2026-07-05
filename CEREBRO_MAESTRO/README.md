# Cerebro Maestro de PanaderIA™ — Beta 1.0

El **Cerebro Maestro** es la capa de coordinación de PanaderIA™. Su función es saber qué existe, qué falta, qué está aprobado y qué puede publicarse, sin modificar ninguno de los módulos fuente.

## Principio maestro

> El Cerebro Maestro no produce ni reemplaza recursos existentes: los referencia, los ordena, los cruza y los valida.

## Estructura

| Carpeta | Función |
|---|---|
| `00_MANIFIESTO` | Reglas, alcance y visión operativa. |
| `01_MAPA_GENERAL` | Mapa de módulos, dependencias y flujo maestro. |
| `02_CAPITULOS` | Estado de cada capítulo y criterios de completitud. |
| `03_RECURSOS` | Inventario de recursos pedagógicos, técnicos y comerciales. |
| `04_IMAGENES` | Relación capítulo-imagen-diagrama-infografía. |
| `05_MULTIMEDIA` | Videos, guiones, audio, miniaturas y publicación multimedia. |
| `06_BOLY` | Consejos, tono pedagógico y participación de Boly™ por capítulo. |
| `07_QR` | Matriz de QR, destinos y pruebas de escaneo. |
| `08_DESCARGABLES` | Recursos descargables vinculados al alumno. |
| `09_CONTROL_CALIDAD` | Checklist de revisión integral antes de aprobar/publicar. |
| `10_PUBLICACION` | Preparación de versiones publicables, actualizaciones y trazabilidad. |

## Estados oficiales

1. **Pendiente**: existe necesidad detectada, pero no hay producción asignada.
2. **En producción**: el recurso o capítulo se está elaborando.
3. **En revisión**: está listo para revisión técnica, pedagógica o editorial.
4. **Aprobado**: cumple criterios de calidad y puede entrar a publicación.
5. **Publicado**: ya está integrado en libro, plataforma, video, QR o paquete descargable.
6. **Actualizado**: reemplaza o mejora una versión anterior conservando trazabilidad.

## Flujo de coordinación

`Libro Maestro → Capítulo → Recursos visuales → Multimedia → QR → Descargables → Boly™ → Control de calidad → Publicación`

## Archivos principales

- `manifest.json`: índice operativo legible por humanos y sistemas.
- `01_MAPA_GENERAL/GUIA_COORDINACION.md`: guía de coordinación entre módulos.
- `02_CAPITULOS/ESTADO_CAPITULOS.md`: tablero inicial de capítulos detectados.
- `09_CONTROL_CALIDAD/CHECKLIST_MAESTRO.md`: validación para aprobar/publicar.

## Infraestructura integrada

Este cerebro coordina el Libro Maestro Premium, Constructor del Libro Premium, Motor Maestro de Producción IA, Biblioteca Visual IA, Centro de Producción Multimedia, Recursos Descargables, materiales del Chef Juanote™ y el asistente Boly™.
