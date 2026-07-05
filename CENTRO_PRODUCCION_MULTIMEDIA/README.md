# CENTRO_PRODUCCION_MULTIMEDIA — PanaderIA™ Beta 1.0

Centro oficial para administrar la producción multimedia de PanaderIA™ sin modificar el Libro Maestro, el Motor Maestro de Producción IA, la Biblioteca Visual IA ni los Recursos Descargables del Alumno.

## Propósito

Organizar de forma independiente videos por capítulo, guiones, narraciones, audio, música libre de derechos, miniaturas, códigos QR, archivos editables, exportados finales y recursos para YouTube, web y redes sociales.

## Identidad PanaderIA™

- **Boly** sigue siendo el asistente oficial del sistema y acompaña al alumno con claridad, calidez y orientación práctica.
- **Chef Juanote** sigue siendo la autoridad técnica para validar procesos, recetas, tiempos, temperaturas, masas, fermentación, horneado y criterios de calidad.
- Todo contenido debe sentirse educativo, premium, amigable, mexicano, profesional y pensado para principiantes.

## Estructura

| Carpeta | Uso principal |
| --- | --- |
| `00_MANIFIESTO_MULTIMEDIA` | Principios, reglas y criterios de aprobación. |
| `01_GUIAS_VIDEO` | Guías de producción, estilo, encuadre, edición y formatos. |
| `02_GUIONES` | Guiones, escaletas y storyboards textuales. |
| `03_NARRACIONES` | Voz en off, textos narrados y dirección de locución. |
| `04_AUDIO` | Grabaciones, limpieza, efectos y masters de audio. |
| `05_MUSICA` | Música libre de derechos, licencias y atribuciones. |
| `06_MINIATURAS` | Miniaturas y portadas de video. |
| `07_QR` | Códigos QR y matriz de destinos. |
| `08_EDITABLES` | Proyectos fuente de edición y diseño. |
| `09_EXPORTADOS` | Renders finales listos para publicar. |
| `10_YOUTUBE` | Paquetes de publicación para YouTube. |
| `11_WEB` | Recursos optimizados para la web. |
| `12_REDES_SOCIALES` | Adaptaciones para redes sociales. |
| `13_CAPITULOS` | Agrupación multimedia por capítulo. |

## Regla de integración

Este centro referencia recursos existentes, pero no los altera. Si un video necesita una imagen de la Biblioteca Visual IA o un material descargable del alumno, se debe registrar la ruta y el uso previsto en `manifest.json`, no duplicar ni editar el archivo original salvo que exista una tarea específica fuera de este centro.

## Flujo maestro

```text
Libro → Imagen → Video → QR → Material descargable → Página web → Alumno
```

1. **Libro:** identificar capítulo, lección, objetivo y contenido base.
2. **Imagen:** seleccionar o solicitar apoyo visual desde la Biblioteca Visual IA.
3. **Video:** producir guion, narración, edición, música, miniatura y exportado.
4. **QR:** generar QR que conecte el libro o recurso con el destino digital correcto.
5. **Material descargable:** enlazar fichas, checklists o recursos sin modificar sus originales.
6. **Página web:** publicar el contenido optimizado para navegación del alumno.
7. **Alumno:** validar que el acceso sea claro, útil y coherente con Boly y Chef Juanote.

## Archivos de control

- `manifest.json`: índice estructural y reglas operativas del centro.
- `GUIA_PRODUCCION_MULTIMEDIA.md`: guía completa de producción.
- `CHECKLIST_ANTES_DE_PUBLICAR.md`: verificación final antes de publicar.
- `FLUJO_TRABAJO_MULTIMEDIA.md`: flujo detallado de integración educativa.
