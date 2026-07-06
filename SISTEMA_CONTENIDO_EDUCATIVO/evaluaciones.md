# Evaluaciones

## Propósito

Definir el sistema documental para controlar evaluaciones educativas futuras sin redactar exámenes, cuestionarios finales, rúbricas completas ni certificaciones.

## Tipos de evaluación

- Diagnóstica.
- Formativa.
- Práctica.
- Sumativa.
- Autoevaluación.
- Evaluación asistida por Boly.
- Evaluación demostrativa por Chef Juanote.

## Ficha estructural

| Campo | Descripción |
|---|---|
| `id_evaluacion` | Identificador de evaluación futura. |
| `unidad_referencia` | Capítulo, lección u objetivo asociado. |
| `tipo` | Tipo de evaluación. |
| `competencia_medida` | Competencia observada. |
| `evidencia` | Evidencia general requerida. |
| `criterio_aprobacion` | Criterio pendiente de validación. |
| `estado` | Estado documental. |

## Reglas

1. Toda evaluación debe vincularse con objetivos de aprendizaje aprobados.
2. Ninguna evaluación debe redactarse como producto final en esta carpeta.
3. Las rúbricas detalladas deben desarrollarse en una fase posterior autorizada.
4. Las evaluaciones con impacto de certificación requieren validación académica y de calidad.

## Estados

- `pendiente_diseno`
- `pendiente_objetivos`
- `pendiente_rubrica`
- `en_revision_academica`
- `aprobada_para_integracion_futura`
