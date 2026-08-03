# Auditoría inicial no destructiva de PanaderIA

**Fecha de corte:** 2026-08-03  
**Alcance:** árbol de trabajo del repositorio, sin `.git`, `node_modules` ni artefactos de compilación.  
**Método:** recorrido de rutas, tamaños y extensiones; SHA-256 de los archivos con contenido; comparación de nombres sin distinguir mayúsculas; parseo de JSON/XML/SVG/XHTML/OPF; comprobación de firma, chunks, CRC, bloque `IEND` y datos comprimidos de PNG.  
**Regla aplicada:** no se movió, eliminó, renombró ni sobrescribió ningún activo. Este informe es la única creación de la auditoría.

## 1. Resumen ejecutivo

- El árbol auditado contiene **1,624 archivos**, **610 carpetas con archivos** y **25,894,616 bytes (24.70 MiB)**. Predominan Markdown (957), SVG (328), JSON (117), HTML (57) y PNG (54).
- El repositorio mezcla, en una misma raíz, documentos rectores, cuatro manuscritos principales, tres generaciones de plataforma, una aplicación Next.js, sistemas conceptuales, producción beta y activos públicos. La fuente de autoridad existente declara `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` como libro primario.
- Se localizaron **7 copias o variantes de libro**: cuatro en la raíz y tres descargas dentro de plataformas. Las descargas de V2 y V3 son idénticas por SHA-256; las otras versiones difieren.
- Se localizaron **382 imágenes**: 328 SVG y 54 PNG. Hay **69 imágenes cuya ruta identifica a Boly** (54 PNG, 14 SVG por capítulo y 1 placeholder SVG). No hay ninguna imagen cuya ruta o nombre identifique a Chef Juanote.
- La ubicación declarada para activos oficiales (`public/assets`) solo contiene estructura, README y `public/assets/boly/boly-placeholder.svg`: no contiene la foto oficial de Chef Juanote ni una imagen maestra aprobada de Boly. Las 54 imágenes PNG de Boly están en `public/boly/`, fuera de la ruta oficial declarada.
- El análisis SHA-256 encontró **30 grupos de contenido repetido**, con 68 archivos implicados, 38 copias redundantes y 85,305 bytes potencialmente recuperables. Hay además **164 grupos por nombre repetido** (728 archivos), pero la mayoría necesita revisión semántica: compartir nombre no implica duplicación.
- No se detectaron archivos estructurados dañados: 117 JSON y 331 documentos XML/SVG/XHTML/OPF parsearon correctamente; los 54 PNG superaron validación estructural y de CRC. No hay enlaces simbólicos rotos. Los 12 archivos de cero bytes son `.gitkeep` intencionales.
- No existen videos binarios ni PDF/DOCX/EPUB terminados. Los elementos llamados “videos” son HTML, guiones o metadatos; la fuente EPUB presente es una estructura XHTML/OPF sin paquete `.epub`.
- Solo un archivo del alcance supera 1 MiB: `AUDITORIA_GLOBAL_REPOSITORIO_PANADERIA.md` (2,099,270 bytes). Como referencia secundaria, `node_modules` ocupa aproximadamente 424 MiB y contiene 19,184 archivos; es dependencia generada, no contenido editorial.
- Los documentos e inventarios solicitados para priorizar la auditoría **no existen en este checkout**. El resultado es una auditoría directa del árbol y debe considerarse provisional hasta recuperar o generar esos inventarios.

## 2. Fuentes solicitadas y limitaciones

### 2.1 Fuentes solicitadas que no están presentes

No se encontró ninguna de estas rutas exactas ni una variante del mismo nombre en otra ubicación:

- `AGENTS.md`
- `PROYECTO.md`
- `ROADMAP.md`
- `docs/PERSONAJES.md`
- `docs/INVENTARIO_ASSETS.txt`
- `docs/inventarios/INVENTARIO_CODEX.txt`
- `docs/inventarios/chef-juanote-oficial.txt`
- `docs/inventarios/boly-oficial.txt`
- `docs/inventarios/ASSETS.txt`
- `docs/inventarios/APP.txt`
- `docs/inventarios/PUBLIC.txt`
- `INVENTARIO_COMPLETO.txt`

Sí existen documentos de nombre o función parecida, pero **no se asumieron equivalentes**: `ROADMAP_PANADERIA.md`, `ROADMAP_PANADERIA_2026_2030.md`, `ROADMAP_PANADERIA_V1.md`, varios `SISTEMA_*/roadmap.md`, `SISTEMA_PERSONAJES/personajes.md`, `ACTIVOS_OFICIALES.md` y `ASSET_UPLOAD_MAP.md`.

### 2.2 Exclusiones conscientes

- `.git`: metadatos de control de versiones, fuera del inventario de contenido.
- `node_modules`: 424 MiB y 19,184 archivos de dependencias generadas; se registra como riesgo de volumen, pero no se mezcló con los hashes ni conteos principales.
- No se modificó ningún archivo preexistente y no se intentó “reparar” o completar placeholders.

## 3. Mapa de carpetas principales

| Zona | Carpetas principales | Función observada |
|---|---|---|
| Aplicación vigente | `app/`, `components/`, `content/`, `hooks/`, `knowledge/`, `lib/`, `public/`, `tests/` | Aplicación Next.js, contenido conectado, APIs, componentes, pruebas y estáticos públicos. |
| Plataformas históricas/release | `PANADERIA_PLATFORM_V1/`, `PANADERIA_PLATFORM_V2/`, `PANADERIA_PLATFORM_V3_RELEASE/`, `WEB_PANADERIA_V1/` | Implementaciones superpuestas con datos, descargas, referencias SVG y simulaciones HTML de video. |
| Libro y capítulos | `CONSTRUCTOR_LIBRO_PREMIUM/`, `CONSTRUCTOR_CAPITULOS_PREMIUM/`, `CONTENIDO_COMERCIAL/`, `MAPA_CANONICO_CURSO/`, `SISTEMA_LIBRO/`, `SISTEMA_MAESTRO_CONTENIDO/` | Plantillas, capítulos, mapa editorial y gestión conceptual del libro. |
| Visual y multimedia | `BIBLIOTECA_VISUAL_IA/`, `CENTRO_PRODUCCION_MULTIMEDIA/`, `PRODUCCION_BETA_1_0/` | Manifiestos, placeholders, SVG de producción, guiones y estructura para multimedia. |
| Gobierno/conocimiento | `CEREBRO_MAESTRO/`, `BANCO_MAESTRO_RECURSOS/`, `PLAN_MAESTRO_PRODUCCION/` | Coordinación, bancos de conocimiento y planes. |
| Alumno | `RECURSOS_DESCARGABLES_ALUMNO/` | Guías, checklists y recursos textuales descargables. |
| Boly | `BOLY_ASSISTANT_V1/`, `SISTEMA_BOLY/`, `public/boly/`, `knowledge/boly/` | Motor/CLI, conocimiento y renders PNG del personaje. |
| Chef Juanote | `SISTEMA_CHEF_JUANOTE/`, `public/assets/chef-juanote/` | Definiciones textuales y estructura vacía de activos oficiales. |
| Sistemas de dominio | 27 carpetas `SISTEMA_*` (analítica, calidad, curso, legal, ventas, versiones, etc.) | Especificaciones y roadmaps conceptuales, mayoritariamente Markdown/JSON. |
| Documentación | `docs/` y numerosos `.md` en raíz | En `docs/` solo existían dos guías operativas antes de esta auditoría; los documentos rectores están dispersos en raíz. |

### Carpetas con mayor número de archivos del alcance

| Ruta | Archivos | Tamaño aproximado |
|---|---:|---:|
| `public/` | 475 | 17.46 MiB |
| `CONTENIDO_COMERCIAL/` | 126 | 330.0 KiB |
| `PRODUCCION_BETA_1_0/` | 100 | 222.3 KiB |
| `PANADERIA_PLATFORM_V3_RELEASE/` | 99 | 288.0 KiB |
| `PANADERIA_PLATFORM_V2/` | 87 | 211.7 KiB |

## 4. Archivos importantes encontrados

### Autoridad y gobierno

- `MAPA_AUTORIDAD_DOCUMENTAL_PANADERIA.md`: mapa rector; designa fuentes primarias y orden para resolver contradicciones.
- `ACTIVOS_OFICIALES.md` y `ASSET_UPLOAD_MAP.md`: ubicación, nomenclatura y reglas para activos oficiales.
- `ARQUITECTURA_GENERAL_PANADERIA.md` y `ARQUITECTURA_PANADERIA.md`: arquitectura general y técnica.
- `GUIA_ESTILO_EDITORIAL_PANADERIA.md`, `MANUAL_IDENTIDAD_PANADERIA.md` y `CALIDAD_PANADERIA.md`: estilo, marca y control de calidad.
- `SISTEMA_VERSIONES/versiones_libro.md` y `SISTEMA_VERSIONES/politica_versionado.md`: trazabilidad y reglas de versión.

### Contenido editorial y técnico

- `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md`: fuente primaria declarada para publicación.
- `LIBRO_MAESTRO_BOLILLO.md` y `LIBRO_MAESTRO_BOLILLO_PREMIUM.md`: fuentes secundarias declaradas.
- `REPORTE_VALIDACION_PUBLICACION_BOLILLO.md`: dictamen previo que declara exportable el manuscrito de publicación.
- `BIBLIA_TECNICA_BOLILLO.md` y las biblias especializadas de ingredientes, amasado, fermentación, formado, corte, horneado, enfriado, diagnóstico y certificación.
- `MAPA_CANONICO_CURSO/mapa_14_capitulos.md` y `CURSO_MAESTRO_BOLILLO.md`: secuencia pedagógica.

### Personajes y multimedia

- `CHEF_JUANOTE.md`, `ENCICLOPEDIA_CHEF_JUANOTE.md`, `GUIA_OFICIAL_BOLY.md`, `BOLY_MANUAL_OFICIAL.md` y `BOLY_BIBLE.md`: identidad y voz de personajes.
- `CATALOGO_MAESTRO_FOTOGRAFIAS_PANADERIA.md`, `CATALOGO_MAESTRO_VIDEOS_PANADERIA.md`, `BIBLIOTECA_RECURSOS_VISUALES_PANADERIA.md` y `GUION_MULTIMEDIA_PANADERIA.md`: catálogos y planes; no equivalen a los binarios finales.

## 5. Versiones del libro encontradas

| Ruta | Bytes | SHA-256 | Lectura de auditoría |
|---|---:|---|---|
| `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` | 483,530 | `b972325064d6f3a181cc23107b4872af4fd88b2592b42b38ec6be3f794160239` | **Fuente primaria declarada** y validada previamente para exportación. |
| `LIBRO_MAESTRO_BOLILLO.md` | 483,538 | `3f80782ec6c6e8a920b8c596e92683d94b8804df2f953d16a174936b4f517d33` | Manuscrito maestro secundario; tamaño muy cercano, pero contenido no idéntico. |
| `LIBRO_MAESTRO_BOLILLO_PREMIUM.md` | 118,490 | `3f62dda9890fbc58653cd8bd6faa5e4bd7050c44689824698ac45001fe7d0671` | Variante premium secundaria. |
| `LIBRO_MAESTRO_BOLILLO_BIBLE.md` | 26,137 | `9e999b8043008ccde79a3a0f26fe0c5c67574951e0fd914b30a6a6a85cffc972` | Biblia/resumen de apoyo, no salida editorial primaria. |
| `PANADERIA_PLATFORM_V1/downloads/books/libro-maestro-bolillo-premium.md` | 404 | `04dbb0bb53faf22c50340fc6c7cadf64bf9b7af1de9ca643dbffd0c37463aa81` | Descarga mínima/placeholder de V1. |
| `PANADERIA_PLATFORM_V2/downloads/books/libro-maestro-bolillo-premium.md` | 16,445 | `48dbf94077b1f86556f8b85c6859db9b2c84a382d6dcf1910c2e59fc3c21e32a` | Descarga de plataforma; idéntica a V3. |
| `PANADERIA_PLATFORM_V3_RELEASE/downloads/books/libro-maestro-bolillo-premium.md` | 16,445 | `48dbf94077b1f86556f8b85c6859db9b2c84a382d6dcf1910c2e59fc3c21e32a` | Copia exacta de la descarga V2. |

No se encontraron archivos `.pdf`, `.doc`, `.docx`, `.odt` ni `.epub`. `CONTENIDO_COMERCIAL/CAPITULO_03_INGREDIENTES/epub/fuente_epub/` contiene fuente XHTML/OPF/XML, pero no un eBook empaquetado.

## 6. Inventario de imágenes

### 6.1 Totales

| Tipo | Cantidad | Validación |
|---|---:|---|
| SVG | 328 | Todos parsean como XML. |
| PNG | 54 | Firma, chunks, CRC, `IEND` y flujo IDAT válidos. |
| Otros formatos raster | 0 | No hay JPG/JPEG/WebP/GIF/AVIF/TIFF/BMP. |
| **Total** | **382** | Sin daño estructural detectado. |

### 6.2 Boly

- **54 PNG** en `public/boly/` (16,674,077 bytes): saludos 3, expresiones 9, motivación 9, acciones 6, panadería 8, herramientas 7, efectos 9 y descanso 3.
- **14 SVG** de apoyo, uno por capítulo, bajo `public/biblioteca-visual-oficial-panaderia/capitulos/*/boly/` (40,242 bytes en total).
- **1 SVG placeholder** en `public/assets/boly/boly-placeholder.svg` (1,036 bytes).
- Total identificado por ruta: **69 imágenes y 16,715,355 bytes**.
- `public/assets/boly/version-oficial/` solo tiene un README. Por tanto, hay renders utilizables, pero no se pudo confirmar un archivo maestro oficial según la convención `boly-oficial-v###.*`.

### 6.3 Chef Juanote

- **0 imágenes** con `juanote` en nombre o ruta.
- `public/assets/chef-juanote/foto-oficial/`, `fotos-secundarias/`, `portadas/`, `certificados/` y `redes-sociales/` contienen únicamente README.
- `BIBLIOTECA_VISUAL_IA/02_FOTOGRAFIAS_REALES_CHEF_JUANOTE/` contiene únicamente README.
- `PRODUCCION_BETA_1_0/11_MATERIAL_REAL_CHEF_JUANOTE/` contiene solo `.gitkeep`.

## 7. Posibles duplicados

### 7.1 Duplicados confirmados por SHA-256

El análisis detectó **30 grupos**, 68 archivos implicados y 38 copias adicionales. Ejemplos prioritarios:

- Libro descargable V2/V3: los dos archivos `downloads/books/libro-maestro-bolillo-premium.md` son idénticos (16,445 bytes cada uno).
- Datos de Boly: `diagnostics.json` aparece idéntico en V1, V2, V3 y `BOLY_ASSISTANT_V1`; `modules.json` aparece idéntico en V2, V3 y `BOLY_ASSISTANT_V1`.
- Descargables: fórmula, checklist, manual, guía y tabla se repiten en las tres plataformas; certificados, exámenes y guías de módulos se repiten principalmente entre V2 y V3.
- Referencias visuales: **14 pares SVG `mod-01.svg` a `mod-14.svg`** son idénticos entre `PANADERIA_PLATFORM_V2/assets/reference/` y `PANADERIA_PLATFORM_V3_RELEASE/assets/reference/`.
- No hay PNG de Boly duplicados por hash.

Los 85,305 bytes “recuperables” son una estimación técnica, no una recomendación de borrado: V1/V2/V3 pueden ser snapshots históricos deliberados.

### 7.2 Coincidencias por nombre

Hay **164 nombres repetidos** que abarcan 728 archivos. Deben separarse en tres clases:

1. **Esperados por convención:** 164 archivos llamados `README.md`, numerosos `manifest.json` y `roadmap.md`.
2. **Snapshots/versiones:** `mod-01` a `mod-14`, descargas y datos repetidos entre plataformas.
3. **Potencial conflicto semántico:** `versiones_libro.md`, `estructura.md`, `indice.md`, `referencias.md`, `boly.md`, `frases.md`, `tono.md`, `control_calidad.md`, `clientes.md`, `productos.md` y otros nombres repartidos entre sistemas.

También existen 28 pares de nombres `c01` a `c14` (`diagrama-tecnico.svg` e `infografia.svg`) en dos ramas de `public/biblioteca-visual-oficial-panaderia/`. La coincidencia por nombre requiere comparar propósito y ruta; no debe consolidarse automáticamente.

## 8. Archivos vacíos o dañados

### Vacíos

Se encontraron 12 archivos de cero bytes y todos son `.gitkeep` intencionales dentro de `PRODUCCION_BETA_1_0/01_...` a `12_...` (excepto la carpeta `capitulos`). No se clasifican como corrupción.

### Integridad

- JSON inválidos: **0** de 117.
- XML/SVG/XHTML/OPF inválidos: **0** de 331.
- PNG con daño estructural/CRC: **0** de 54.
- Enlaces simbólicos rotos: **0**.
- No fue posible hacer una decodificación visual mediante Pillow ni usar la utilidad `file`, porque no están instaladas en el entorno. La validación binaria propia cubrió estructura y compresión PNG, pero no sustituye una inspección visual ni una prueba con múltiples decodificadores.

## 9. Videos y documentos importantes

### Videos

- Videos binarios (`.mp4`, `.mov`, `.mkv`, `.avi`, `.webm`, `.m4v`, `.mpeg`, `.mpg`): **0**.
- Las rutas `PANADERIA_PLATFORM_V*/videos/` contienen páginas HTML de demostración, no video.
- `CONTENIDO_COMERCIAL/*/guion_video_*.md`, `video/*.md` y el único `.srt` son material de preproducción.
- `CATALOGO_MAESTRO_VIDEOS_PANADERIA.md`, `GUION_MULTIMEDIA_PANADERIA.md` y `CENTRO_PRODUCCION_MULTIMEDIA/` son documentos de planeación/producción.

### Documentos/binarios editoriales

- PDF, DOC/DOCX, ODT, EPUB, PPT/PPTX, XLS/XLSX: **0**.
- La distribución real está hoy en Markdown, HTML, JSON, SVG y PNG.
- Esto contradice las carpetas y rutas nominales `downloads/pdfs/` y `public/assets/pdf/`: sus archivos son Markdown/README, no PDF final.

## 10. Archivos demasiado grandes

### Contenido del repositorio (umbral de atención: 1 MiB)

| Archivo | Bytes | Observación |
|---|---:|---|
| `AUDITORIA_GLOBAL_REPOSITORIO_PANADERIA.md` | 2,099,270 | Único archivo >1 MiB; conviene revisar si es reporte generado, si debe resumirse o archivarse, sin eliminarlo en esta fase. |

Los manuscritos más grandes, `LIBRO_MAESTRO_BOLILLO.md` y `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md`, rondan 472 KiB y no superan el umbral.

### Dependencias generadas

`node_modules/` ocupa aproximadamente **424 MiB**. Está ignorado por Git y no forma parte de los 1,624 archivos auditados, pero aumenta drásticamente el costo de copias de seguridad y escaneos locales. Debe regenerarse desde el lockfile, no tratarse como activo maestro.

## 11. Riesgos

| Prioridad | Riesgo | Impacto |
|---|---|---|
| P0 | Faltan todos los inventarios prioritarios y documentos iniciales indicados para esta auditoría. | No se puede reconciliar árbol contra inventario oficial ni confirmar faltantes esperados. |
| P0 | No hay foto de Chef Juanote en el repositorio. | Bloquea identidad, portada, certificados y publicación que requiera imagen del autor. |
| P0 | No hay PDF/eBook final ni videos binarios. | Las promesas de descargas y multimedia no tienen entregables finales locales. |
| P1 | No hay `boly-oficial-v###.*` en la ubicación oficial; los renders están en otra ruta y existe un placeholder. | Ambigüedad sobre qué imagen está aprobada y riesgo de usar un provisional. |
| P1 | Cuatro manuscritos raíz y tres copias de plataforma sin metadatos uniformes en el nombre. | Riesgo de editar o distribuir una versión secundaria/recortada. |
| P1 | V1, V2, V3 release y aplicación Next.js coexisten sin una carpeta explícita de archivo histórico. | Duplicación, rutas divergentes y mantenimiento accidental de implementaciones obsoletas. |
| P1 | El contenido rector está disperso en raíz y `docs/` casi vacío. | Descubribilidad baja y difícil aplicación de autoridad documental. |
| P1 | Activos públicos supuestamente oficiales y biblioteca visual duplican conceptos/rutas. | Riesgo de referencias rotas o consolidación incorrecta. |
| P2 | Nombres con errores o caracteres especiales (`señalando`, `puñoarriba`, `ecxlamacion`, `esytrella`, `honro`). | URLs frágiles, búsquedas inconsistentes y problemas de interoperabilidad. |
| P2 | Un reporte Markdown supera 2 MiB. | Ruido en diffs, revisiones y herramientas editoriales. |
| P2 | La auditoría no incluyó revisión visual humana de los 382 activos. | Un archivo puede ser técnicamente válido y aun así ser incorrecto, transparente, provisional o de baja calidad. |

## 12. Archivos faltantes

### Faltantes explícitos de gobierno/inventario

Todos los enumerados en la sección 2.1, especialmente `docs/inventarios/INVENTARIO_CODEX.txt`, los inventarios oficiales de Chef Juanote/Boly y `PROYECTO.md`/`ROADMAP.md`.

### Faltantes inferidos de las reglas internas

- `public/assets/chef-juanote/foto-oficial/chef-juanote-oficial-v###.(jpg|png|webp)` aprobado.
- `public/assets/boly/version-oficial/boly-oficial-v###.(png|svg|webp)` aprobado.
- `public/assets/pdf/ebooks/ebook-curso-maestro-bolillo-v###.pdf` o equivalente versionado.
- Videos reales versionados del curso en almacenamiento definido (no necesariamente Git si son privados/pesados), con manifiesto y checksums.
- Registro maestro que relacione cada activo con estado, versión, derechos, responsable, hash y usos permitidos.
- Paquete `.epub` final si EPUB sigue siendo un formato objetivo.

Estos son “faltantes” respecto de las convenciones y promesas documentadas, no prueba de que no existan fuera de este checkout.

## 13. Estructura final propuesta

Propuesta conceptual para una fase posterior; **no se aplicó**:

```text
PanaderIA/
├── apps/
│   └── web/                         # aplicación Next.js vigente
├── content/
│   ├── book/
│   │   ├── source/                  # manuscrito canónico
│   │   ├── editions/                # premium, impresión, etc.
│   │   └── exports/                 # solo salidas aprobadas o manifiestos
│   ├── course/                      # 14 capítulos y recursos relacionados
│   └── knowledge/                   # biblias técnicas y Boly
├── assets/
│   ├── manifests/                   # inventario, SHA-256, licencias, estados
│   ├── brand/
│   ├── chef-juanote/
│   ├── boly/
│   ├── course/
│   └── multimedia/                  # referencias; binarios grandes en storage
├── docs/
│   ├── governance/                  # autoridad, proyecto, roadmap, calidad
│   ├── inventories/                 # inventarios generados y oficiales
│   ├── architecture/
│   ├── production/
│   └── audits/
├── packages/                        # módulos compartidos de Boly/plataforma
├── tests/
└── archive/
    ├── platforms/v1/
    ├── platforms/v2/
    └── production-beta/
```

### Principios de migración futura

1. Declarar primero una fuente canónica por dominio y congelar hashes.
2. Generar inventarios reproducibles antes de mover nada.
3. Separar fuente, salida generada y snapshot histórico.
4. Mantener binarios privados/pesados en almacenamiento de objetos; versionar manifiestos, checksums y permisos.
5. Conservar redirecciones o mapa de migración para toda ruta consumida por la app.
6. No consolidar coincidencias por nombre: exigir hash, función, estado y autoridad.

## 14. Siguiente tarea recomendada

**Tarea 2: crear y aprobar un inventario canónico reproducible, todavía sin mover activos.**

Entregables recomendados:

1. Recuperar de la fuente original los inventarios solicitados que faltan o documentar formalmente que nunca existieron.
2. Generar `docs/inventarios/INVENTARIO_CODEX.txt` desde Git con ruta, bytes, SHA-256, tipo real, estado (`fuente`, `generado`, `placeholder`, `histórico`) y autoridad.
3. Crear inventarios específicos de Chef Juanote y Boly; marcar expresamente “faltante” en vez de asumir que un README o placeholder es un activo.
4. Designar el manuscrito canónico y registrar cómo se derivan Premium, descargas, PDF y EPUB.
5. Clasificar cada duplicado SHA-256 como `histórico_intencional`, `salida_generada`, `compartido` o `candidato_a_consolidar`.
6. Validar derechos y aprobación visual de los 54 PNG de Boly e incorporar la foto oficial de Chef Juanote desde una fuente autorizada.
7. Solo después de aprobación humana, preparar un plan de migración reversible con tabla `ruta_actual → ruta_destino`, sin ejecutar movimientos en la misma tarea.

## 15. Dictamen

El repositorio está técnicamente legible y los activos presentes no muestran corrupción estructural. El problema principal no es integridad binaria sino **gobierno y completitud**: faltan los inventarios prioritarios, no existen los binarios finales de Chef Juanote, libro exportado o video, y coexisten múltiples generaciones y fuentes. La siguiente fase debe crear trazabilidad verificable antes de cualquier reorganización.
