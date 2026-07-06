# Sistema de Lecciones

## Propósito

Normalizar la administración de lecciones futuras del Curso Maestro Premium PanaderIA™ sin redactar lecciones.

## Ficha estructural de lección

| Campo | Uso |
|---|---|
| `id_leccion` | Identificador único. |
| `id_modulo` | Módulo al que pertenece. |
| `titulo_estructural` | Título administrativo provisional. |
| `objetivo_pedagogico` | Campo reservado para fase futura. |
| `duracion_estimada` | Campo reservado para planificación futura. |
| `recursos_requeridos` | Referencias pendientes, no archivos creados. |
| `estado` | Estado documental. |
| `pendientes` | Bloqueos o dependencias. |

## Estados sugeridos

- `pendiente_integracion_futura`
- `borrador_estructural`
- `en_revision_academica`
- `validado_estructuralmente`
- `listo_para_produccion_futura`

## Reglas

- No escribir contenido de lecciones.
- No crear guiones de video.
- No generar materiales de descarga.
- No duplicar contenido del libro.
