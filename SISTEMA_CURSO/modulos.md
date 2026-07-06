# Organización por Módulos

## Propósito

Establecer el sistema oficial para administrar módulos del Curso Maestro Premium PanaderIA™ sin escribir contenido de módulos.

## Registro maestro de módulo

Cada módulo futuro deberá administrarse con los siguientes campos:

| Campo | Uso |
|---|---|
| `id_modulo` | Identificador único y estable. |
| `titulo_estructural` | Nombre administrativo del módulo. |
| `fuente_canonica` | Referencia al mapa o documento autorizado. |
| `estado` | Estado documental vigente. |
| `lecciones_asociadas` | Lista de IDs de lecciones futuras. |
| `practicas_asociadas` | Lista de IDs de prácticas futuras. |
| `evaluaciones_asociadas` | Lista de IDs de evaluaciones futuras. |
| `dependencias` | Módulos o requisitos previos. |
| `notas_integracion` | Observaciones para fases posteriores. |

## Reglas

- No desarrollar temarios completos en este archivo.
- No copiar capítulos del libro.
- No crear lecciones, prácticas ni evaluaciones finales.
- Todo módulo no producido debe marcarse como `PENDIENTE_INTEGRACION_FUTURA`.
