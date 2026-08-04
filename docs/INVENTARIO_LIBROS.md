# Inventario de versiones del libro

**Fecha de inventario:** 2026-08-04

**Método:** búsqueda por nombre de archivo relacionada con “libro” y “bolillo”, contraste con la auditoría inicial, tamaño en bytes con `stat`, SHA-256 del contenido y última fecha registrada por Git para cada ruta.

## Criterio de fecha

La columna **Fecha Git** usa la fecha ISO 8601 del último commit que afectó la ruta. Se eligió en lugar del `mtime` local porque este puede cambiar al clonar o restaurar el repositorio. No representa necesariamente la fecha de autoría intelectual del texto.

## Resultado

Se encontraron **7 archivos** tratados por la auditoría como versiones, variantes o copias del libro. Representan **6 contenidos únicos**, porque las descargas V2 y V3 son copias exactas.

| # | Ruta | Tamaño | Fecha Git | SHA-256 | Estado | Observaciones |
|---:|---|---:|---|---|---|---|
| 1 | `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` | 483,530 bytes | 2026-07-08T19:27:48-06:00 | `b972325064d6f3a181cc23107b4872af4fd88b2592b42b38ec6be3f794160239` | **Candidata oficial v1.0; conservar activa** | Manuscrito completo de 14 capítulos; fuente primaria declarada y validada para conversión editorial. |
| 2 | `LIBRO_MAESTRO_BOLILLO.md` | 483,538 bytes | 2026-07-08T18:13:04-06:00 | `3f80782ec6c6e8a920b8c596e92683d94b8804df2f953d16a174936b4f517d33` | Maestro anterior; archivar lógicamente | Mismos 14 capítulos que Publicación; solo difieren dos líneas de estado/edición. No usar para nuevos cambios de v1.0. |
| 3 | `LIBRO_MAESTRO_BOLILLO_PREMIUM.md` | 118,490 bytes | 2026-07-05T20:45:19-06:00 | `3f62dda9890fbc58653cd8bd6faa5e4bd7050c44689824698ac45001fe7d0671` | Variante anterior; archivar lógicamente | Contiene 14 capítulos con desarrollo más breve y organización propia. |
| 4 | `LIBRO_MAESTRO_BOLILLO_BIBLE.md` | 26,137 bytes | 2026-07-05T20:45:19-06:00 | `9e999b8043008ccde79a3a0f26fe0c5c67574951e0fd914b30a6a6a85cffc972` | Documento de apoyo; conservar como referencia | Biblia/especificación editorial, no manuscrito publicable; enumera una estructura sugerida. |
| 5 | `PANADERIA_PLATFORM_V1/downloads/books/libro-maestro-bolillo-premium.md` | 404 bytes | 2026-07-05T20:45:19-06:00 | `04dbb0bb53faf22c50340fc6c7cadf64bf9b7af1de9ca643dbffd0c37463aa81` | Demostración; archivar lógicamente | Descarga mínima sin capítulos desarrollados; no es fuente. |
| 6 | `PANADERIA_PLATFORM_V2/downloads/books/libro-maestro-bolillo-premium.md` | 16,445 bytes | 2026-07-05T20:45:19-06:00 | `48dbf94077b1f86556f8b85c6859db9b2c84a382d6dcf1910c2e59fc3c21e32a` | Distribución RC1 resumida; archivar lógicamente | Contiene 14 resúmenes de capítulo; copia exacta de V3. No es fuente editorial. |
| 7 | `PANADERIA_PLATFORM_V3_RELEASE/downloads/books/libro-maestro-bolillo-premium.md` | 16,445 bytes | 2026-07-05T20:45:19-06:00 | `48dbf94077b1f86556f8b85c6859db9b2c84a382d6dcf1910c2e59fc3c21e32a` | Distribución RC1 resumida; archivar lógicamente | Copia exacta de V2; snapshot de plataforma, no fuente editorial. |

## Límites del inventario

- No se hallaron libros terminados en `.pdf`, `.doc`, `.docx`, `.odt` o `.epub`.
- La fuente XHTML/OPF bajo `CONTENIDO_COMERCIAL/CAPITULO_03_INGREDIENTES/epub/fuente_epub/` no es un libro EPUB empaquetado ni una versión integral del manuscrito.
- “Archivar lógicamente” significa retirar una ruta del flujo editorial activo y etiquetarla como histórica; **no implica moverla ni eliminarla** en esta misión.
