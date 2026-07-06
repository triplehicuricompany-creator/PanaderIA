# Compatibilidad de integraciones PanaderIA™

## Objetivo

Definir la matriz documental para asegurar que las integraciones futuras sean compatibles con la estructura actual y evolutiva de PanaderIA™.

## Dimensiones de compatibilidad

- **Documental:** no debe romper nomenclaturas, manifiestos ni organización existente.
- **Editorial:** no debe modificar capítulos, módulos ni contenido final sin autorización explícita.
- **Técnica:** debe poder convivir con plataformas, asistentes y sistemas internos.
- **Seguridad:** debe alinearse con autenticación, permisos y clasificación de datos.
- **Operativa:** debe ser mantenible por responsables del ecosistema.
- **Evolutiva:** debe permitir cambios de versión y reemplazo futuro.

## Matriz base

| Dimensión | Pregunta de control | Estado esperado |
| --- | --- | --- |
| Documental | ¿La integración tiene ficha y manifestación clara? | Obligatorio |
| Editorial | ¿Respeta contenidos existentes? | Obligatorio |
| Técnica | ¿Tiene dependencias identificadas? | Obligatorio |
| Seguridad | ¿Define datos y permisos? | Obligatorio |
| Operativa | ¿Puede auditarse y desactivarse? | Obligatorio |
| Evolutiva | ¿Puede versionarse o reemplazarse? | Recomendado |

## Estados de compatibilidad

- `compatible`: cumple criterios mínimos.
- `compatible_con_observaciones`: requiere ajustes menores.
- `pendiente_de_revision`: no hay información suficiente.
- `incompatible`: presenta conflictos relevantes.

## Restricción

Esta matriz es documental y no ejecuta pruebas automatizadas ni validaciones técnicas reales.
