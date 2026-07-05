# Sistema Maestro de Contenido de PanaderIA™

El **Sistema Maestro de Contenido de PanaderIA™** centraliza la organización pedagógica del curso para administrar, revisar y evolucionar el conocimiento sin perder trazabilidad. Funciona como una capa de gobierno editorial que ordena capítulos, lecciones, objetivos, conceptos, ejercicios, errores comunes, consejos, recursos multimedia y estados de revisión.

## Objetivo

Mantener un sistema único para planear, registrar, auditar y preparar futuras actualizaciones del contenido de PanaderIA™ sin modificar recursos existentes. Cada elemento del curso debe poder ubicarse por capítulo, lección, propósito didáctico, recursos asociados y estado de revisión.

## Alcance

Este sistema administra:

- Capítulos del curso.
- Lecciones y secuencias de aprendizaje.
- Objetivos de aprendizaje.
- Conceptos clave.
- Ejercicios y prácticas.
- Errores comunes y soluciones.
- Consejos del Chef Juanote™.
- Consejos de Boly™.
- Recursos multimedia asociados.
- Estado de revisión del contenido.

## Estructura

| Carpeta | Función |
|---|---|
| `00_MANIFIESTO` | Principios, reglas y alcance editorial del sistema. |
| `01_CAPITULOS` | Registro maestro de capítulos, estado general y dependencias. |
| `02_LECCIONES` | Catálogo de lecciones por capítulo y secuencia sugerida. |
| `03_OBJETIVOS` | Objetivos de aprendizaje medibles por capítulo y lección. |
| `04_CONCEPTOS` | Conceptos clave, definiciones y relaciones temáticas. |
| `05_EJERCICIOS` | Prácticas, tareas, evidencias y actividades del alumno. |
| `06_ERRORES_COMUNES` | Fallas frecuentes, causas probables y acciones correctivas. |
| `07_CONSEJOS_CHEF` | Consejos técnicos y notas de autoridad del Chef Juanote™. |
| `08_CONSEJOS_BOLY` | Recordatorios didácticos, motivacionales y preventivos de Boly™. |
| `09_MULTIMEDIA` | Vinculación de videos, imágenes, infografías, QR y descargables. |
| `10_REVISIONES` | Control de versiones, aprobaciones, pendientes y cambios futuros. |

## Flujo de administración

1. Registrar o actualizar el capítulo en `01_CAPITULOS`.
2. Desglosar sus lecciones en `02_LECCIONES`.
3. Declarar objetivos medibles en `03_OBJETIVOS`.
4. Asociar conceptos clave en `04_CONCEPTOS`.
5. Vincular ejercicios y evidencias en `05_EJERCICIOS`.
6. Documentar errores comunes en `06_ERRORES_COMUNES`.
7. Integrar consejos técnicos del Chef Juanote™ en `07_CONSEJOS_CHEF`.
8. Integrar apoyos pedagógicos de Boly™ en `08_CONSEJOS_BOLY`.
9. Asociar recursos multimedia en `09_MULTIMEDIA`.
10. Registrar revisión, aprobación y próximos cambios en `10_REVISIONES`.

## Estados editoriales oficiales

- `Pendiente`: contenido identificado pero no desarrollado.
- `En desarrollo`: contenido en construcción o pendiente de completar.
- `En revisión`: contenido listo para revisión técnica, didáctica o editorial.
- `Aprobado`: contenido validado para integrarse al curso.
- `Publicado`: contenido disponible para alumno, libro, plataforma o paquete final.
- `Actualizar`: contenido vigente pero marcado para mejora futura.

## Regla principal

Este sistema **no modifica recursos existentes**. Solo organiza, referencia, clasifica, registra y prepara actualizaciones futuras para que PanaderIA™ conserve una estructura centralizada y escalable.
