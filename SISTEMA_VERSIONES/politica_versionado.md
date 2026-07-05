# Política Oficial de Versionado

## Esquema de versión

PanaderIA™ utiliza un esquema SemVer adaptado:

`MAJOR.MINOR.PATCH-ESTADO.N`

Ejemplos:

- `1.0.0-beta.1`
- `1.0.0-rc.1`
- `1.0.0-final`
- `1.1.0-beta.1`

## Estados oficiales

### Beta

Versión de trabajo usada para ordenar, revisar o validar estructura. Puede contener pendientes, ajustes editoriales o recursos incompletos.

Criterios mínimos:

- Objetivo definido.
- Alcance documentado.
- Cambios registrados en historial.

### Release Candidate (RC)

Versión candidata a publicación final. No debe incorporar cambios de fondo salvo correcciones, validaciones o ajustes de consistencia.

Criterios mínimos:

- Estructura revisada.
- Pendientes críticos resueltos o documentados.
- Compatibilidad con versiones anteriores confirmada.

### Final

Versión oficial estable y preservada como referencia histórica. No se modifica directamente; cualquier evolución genera una nueva versión.

Criterios mínimos:

- Historial completo.
- Manifest actualizado.
- Aprobación editorial o técnica registrada.

## Tipos de incremento

- `MAJOR`: cambios estructurales profundos o nueva edición principal.
- `MINOR`: expansión compatible, nuevo módulo, nuevo paquete de recursos o mejora relevante.
- `PATCH`: corrección menor, ajuste documental o mantenimiento sin cambio de alcance.

## Reglas de preservación

1. No sobrescribir versiones finales.
2. No modificar capítulos existentes para registrar cambios.
3. Registrar todo cambio importante en `historial_cambios.md`.
4. Vincular cada versión con su área correspondiente.
5. Mantener pendientes separados de cambios aprobados.
