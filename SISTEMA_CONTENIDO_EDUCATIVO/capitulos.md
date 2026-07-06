# Capítulos — Gobernanza Educativa

## Propósito

Definir cómo los capítulos existentes se interpretan como unidades educativas de referencia sin modificarlos, reescribirlos ni ampliarlos.

## Regla principal

Los capítulos son fuentes canónicas ya existentes. Este sistema solo registra su uso pedagógico, secuencia académica, nivel de complejidad y relación con lecciones, objetivos, ejercicios y evaluaciones futuras.

## Ficha estructural por capítulo

Cada capítulo podrá registrarse con la siguiente ficha de control:

| Campo | Descripción |
|---|---|
| `id_capitulo` | Identificador estable de la unidad existente. |
| `titulo_referencia` | Nombre del capítulo según la fuente canónica. |
| `estado_educativo` | Estado de mapeo pedagógico. |
| `nivel` | Introductorio, intermedio, avanzado o profesional. |
| `competencias_asociadas` | Competencias futuras vinculadas sin desarrollarlas. |
| `lecciones_relacionadas` | Lecciones derivadas o conectadas. |
| `evaluaciones_relacionadas` | Evaluaciones futuras asociadas. |
| `restricciones` | Alertas para evitar modificación o duplicación. |

## Estados permitidos

- `pendiente_mapeo_educativo`
- `en_revision_academica`
- `validado_pedagogicamente`
- `listo_para_integracion_futura`
- `bloqueado_por_contenido_no_aprobado`

## Integraciones futuras

- Sistema Maestro de Contenido PanaderIA™ para trazabilidad editorial.
- Sistema Maestro del Curso Premium para secuencia didáctica.
- Sistema de Calidad para revisión académica.
- Boly y Chef Juanote para acompañamiento educativo autorizado.
