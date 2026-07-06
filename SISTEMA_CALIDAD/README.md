# Sistema Maestro de Calidad PanaderIA™

Sistema oficial de control de calidad para futuras integraciones del Libro Maestro Premium PanaderIA™.

> Estado: sistema de planeación, revisión y aprobación. No contiene contenido final del libro ni modifica capítulos existentes.

## Objetivo

Establecer un marco único para revisar, aprobar y registrar la calidad técnica, editorial, multimedia, QR y descargable antes de publicar cualquier integración futura del ecosistema PanaderIA™.

## Alcance

Este sistema aplica a:

- Capítulos futuros o actualizaciones autorizadas.
- Recursos multimedia vinculados al libro.
- Códigos QR y destinos digitales.
- Recursos descargables complementarios.
- Checklist final previo a publicación.
- Registro de cambios aprobados.

## Estructura del sistema

| Archivo | Función |
|---|---|
| `manifest.json` | Registro maestro del sistema, alcance, estados y restricciones. |
| `criterios.md` | Criterios oficiales de calidad y niveles de aprobación. |
| `revision_editorial.md` | Protocolo de revisión de estilo, claridad, coherencia y marca. |
| `revision_tecnica.md` | Protocolo de revisión técnica panadera y pedagógica. |
| `revision_multimedia.md` | Protocolo para validar imágenes, videos, audio y recursos visuales. |
| `revision_qr.md` | Protocolo para validar códigos QR, enlaces y trazabilidad. |
| `revision_descargables.md` | Protocolo para validar recursos complementarios descargables. |
| `checklist_final.md` | Lista maestra antes de liberar una versión publicable. |
| `control_cambios.md` | Registro oficial de cambios aprobados y criterios de aceptación. |

## Flujo maestro de calidad

1. Registrar la pieza, recurso o integración en estado `propuesto` o `borrador`.
2. Confirmar que existe autorización para revisar el material.
3. Aplicar los criterios generales de `criterios.md`.
4. Ejecutar las revisiones especializadas que correspondan.
5. Documentar hallazgos, pendientes y responsables.
6. Corregir fuera de este sistema cuando aplique.
7. Repetir revisión hasta alcanzar estado `aprobado`.
8. Ejecutar `checklist_final.md` antes de publicar.
9. Registrar la aprobación en `control_cambios.md`.

## Estados oficiales

- `propuesto`: elemento identificado para revisión futura.
- `borrador`: elemento en desarrollo, no listo para validación final.
- `en_revision`: elemento listo para revisión especializada.
- `observado`: elemento con ajustes requeridos.
- `aprobado`: elemento validado para integración.
- `publicado`: elemento liberado oficialmente.
- `retirado`: elemento reemplazado, cancelado u obsoleto.

## Restricciones

- Este sistema no modifica capítulos existentes.
- Este sistema no genera contenido final del libro.
- Este sistema no sustituye la aprobación editorial humana.
- Ningún elemento debe publicarse sin trazabilidad de revisión y cambio aprobado.
