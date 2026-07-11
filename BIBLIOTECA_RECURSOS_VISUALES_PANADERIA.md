# BIBLIOTECA_RECURSOS_VISUALES_PANADERIA.md

## Biblioteca Maestra de Recursos Visuales Oficiales de PanaderIA™

Este documento define la organización, nomenclatura, formatos, resolución, control de versiones, reglas de uso con IA, checklist de calidad y mantenimiento de la biblioteca visual oficial del proyecto PanaderIA™.

Su objetivo es que cualquier diseñador, ilustrador, editor, desarrollador, productor audiovisual o inteligencia artificial pueda encontrar, crear, validar y reutilizar cualquier recurso visual del proyecto en segundos, manteniendo una identidad visual consistente, profesional, premium, artesanal y educativa.

> **Regla maestra:** ningún recurso visual debe incorporarse a producción si no respeta esta biblioteca, la identidad visual oficial de PanaderIA™ y la nomenclatura documentada aquí.

---

## 1. Principios rectores de la biblioteca visual

### 1.1 Propósito operativo

La biblioteca visual debe permitir:

- Localizar activos por categoría, uso, capítulo, personaje, canal o idioma.
- Evitar duplicados y versiones ambiguas.
- Separar archivos maestros de derivados optimizados.
- Mantener trazabilidad entre recurso, versión, fuente, autor, prompt y aprobación.
- Facilitar producción con diseñadores humanos e IA generativa.
- Preparar el proyecto para web, redes sociales, video, impresión, cursos, app y futuras traducciones.

### 1.2 Identidad visual obligatoria

Todo recurso debe verse como parte de una academia digital premium de panadería profesional:

- Artesanal, pero no improvisada.
- Tecnológica, pero no fría.
- Educativa, pero no genérica.
- Cercana, pero no infantil.
- Elegante, pero no excesivamente corporativa.

### 1.3 Estado oficial de un recurso

Cada recurso debe pertenecer a uno de estos estados:

| Estado | Significado | Uso permitido |
|---|---|---|
| `draft` | Borrador interno | Revisión interna únicamente |
| `review` | En revisión visual, técnica o editorial | No publicar |
| `approved` | Aprobado por dirección creativa | Uso en producción |
| `deprecated` | Reemplazado por una versión superior | No usar en nuevos materiales |
| `archive` | Conservado por historial | Consulta documental |

---

## 2. Organización completa de carpetas

### 2.1 Raíz oficial recomendada

La biblioteca oficial debe vivir dentro de:

```text
public/assets/
```

Cuando existan paquetes didácticos, integraciones por capítulo o bibliotecas auxiliares, estas pueden convivir con rutas específicas como:

```text
public/biblioteca-visual-oficial-panaderia/
public/paquetes-oficiales/
```

La ruta `public/assets/` debe considerarse la fuente primaria para activos reutilizables de marca, personajes, curso, web, redes, impresión y video.

### 2.2 Estructura maestra propuesta

```text
public/assets/
├── brand/
│   ├── logo/
│   ├── escudo/
│   ├── sellos/
│   ├── iconos/
│   └── guias/
├── boly/
│   ├── version-oficial/
│   ├── poses/
│   ├── emociones/
│   ├── animaciones/
│   ├── app/
│   ├── libros/
│   ├── certificados/
│   └── videos/
├── chef-juanote/
│   ├── foto-oficial/
│   ├── fotos-secundarias/
│   ├── portadas/
│   ├── redes-sociales/
│   └── certificados/
├── fotografias/
│   ├── producto/
│   ├── proceso/
│   ├── ingredientes/
│   ├── herramientas/
│   ├── ambiente/
│   └── equipo-humano/
├── ilustraciones/
│   ├── educativas/
│   ├── editoriales/
│   ├── personajes/
│   ├── capitulos/
│   └── decorativas/
├── renders-3d/
│   ├── bolillo/
│   ├── herramientas/
│   ├── escenarios/
│   ├── personajes/
│   └── objetos-educativos/
├── curso-bolillo/
│   ├── ingredientes/
│   ├── herramientas/
│   ├── amasado/
│   ├── fermentacion/
│   ├── formado/
│   ├── corte/
│   ├── horneado/
│   ├── enfriado/
│   ├── errores/
│   └── soluciones/
├── diagramas/
│   ├── procesos/
│   ├── comparativas/
│   ├── anatomia-del-bolillo/
│   ├── tiempos-temperaturas/
│   └── solucion-de-errores/
├── fondos/
│   ├── web/
│   ├── presentaciones/
│   ├── certificados/
│   ├── redes-sociales/
│   └── video/
├── texturas/
│   ├── masa/
│   ├── harina/
│   ├── miga/
│   ├── corteza/
│   ├── madera/
│   └── papel/
├── videos/
│   ├── intro/
│   ├── curso-bolillo/
│   ├── premium/
│   ├── redes-sociales/
│   └── trailers/
├── miniaturas/
│   ├── youtube/
│   ├── curso/
│   ├── lecciones/
│   └── redes-sociales/
├── banners/
│   ├── web/
│   ├── email/
│   ├── ads/
│   └── plataforma/
├── redes-sociales/
│   ├── instagram/
│   ├── facebook/
│   ├── tiktok/
│   ├── youtube/
│   ├── linkedin/
│   └── plantillas/
├── web/
│   ├── home/
│   ├── cursos/
│   ├── landing-pages/
│   ├── blog/
│   ├── dashboard/
│   └── componentes/
├── impresion/
│   ├── certificados/
│   ├── ebooks/
│   ├── guias/
│   ├── posters/
│   └── empaques/
└── traducciones/
    ├── es-mx/
    ├── en-us/
    ├── pt-br/
    ├── fr-fr/
    └── plantillas-sin-texto/
```

---

## 3. Convención oficial para nombres de archivos

### 3.1 Fórmula universal

```text
panaderia-[categoria]-[subcategoria]-[descripcion]-[uso]-[idioma]-[estado]-v###.[ext]
```

### 3.2 Campos obligatorios

| Campo | Regla | Ejemplo |
|---|---|---|
| `panaderia` | Prefijo fijo de proyecto | `panaderia` |
| `categoria` | Tipo principal de activo | `foto`, `logo`, `boly`, `diagrama` |
| `subcategoria` | Clasificación específica | `amasado`, `oficial`, `instagram` |
| `descripcion` | Nombre corto en minúsculas y guiones | `masa-elastica` |
| `uso` | Canal o destino | `web`, `print`, `social`, `curso` |
| `idioma` | Código de idioma cuando aplique | `es-mx`, `en-us`, `neutral` |
| `estado` | Estado editorial | `approved`, `draft`, `review` |
| `v###` | Versión de tres dígitos | `v001` |

### 3.3 Ejemplos oficiales

```text
panaderia-foto-amasado-masa-elastica-curso-es-mx-approved-v001.webp
panaderia-boly-pose-saludo-app-neutral-approved-v003.png
panaderia-logo-horizontal-negro-dorado-web-neutral-approved-v002.svg
panaderia-diagrama-fermentacion-tiempo-temperatura-pdf-es-mx-approved-v001.pdf
panaderia-video-intro-bienvenida-curso-es-mx-approved-v004.mp4
```

### 3.4 Reglas de escritura

- Usar minúsculas siempre.
- Usar guiones medios `-`, nunca espacios, acentos, eñes ni caracteres especiales.
- No usar nombres genéricos como `final`, `nuevo`, `ultimo`, `bueno`, `real`, `copia` o `definitivo`.
- No sobrescribir archivos aprobados: crear una versión nueva.
- Mantener extensión en minúsculas.
- Usar `neutral` cuando el recurso no contenga texto ni dependa de idioma.

---

## 4. Control de versiones y metadatos

### 4.1 Versionado

- `v001`: primera versión registrada.
- `v002`, `v003`: iteraciones con cambios visibles o técnicos.
- Cambios menores de compresión sin impacto visual pueden documentarse como derivados, no como nueva versión maestra.
- Las versiones anteriores deben moverse a `archive/` solo cuando exista una versión superior aprobada.

### 4.2 Archivo de metadatos recomendado

Cada carpeta crítica debe incluir un archivo:

```text
_manifest.json
```

Campos mínimos:

```json
{
  "id": "panaderia-boly-pose-saludo-app-neutral-approved-v003",
  "categoria": "boly",
  "estado": "approved",
  "version": "v003",
  "autor": "equipo-panaderia",
  "fecha": "2026-07-11",
  "fuente": "ilustracion-original",
  "prompt_ia": null,
  "aprobado_por": "direccion-creativa",
  "uso_permitido": ["app", "web", "curso"],
  "restricciones": ["no deformar", "no cambiar colores oficiales"]
}
```

### 4.3 Trazabilidad obligatoria para IA

Todo activo creado o modificado con IA debe registrar:

- Herramienta o modelo usado.
- Prompt base.
- Prompt negativo.
- Imagen o recurso de referencia, si aplica.
- Fecha de generación.
- Responsable humano que aprobó.
- Restricciones de licencia, si existen.

---

## 5. Reglas generales para IA

### 5.1 Permitido

- Generar propuestas preliminares para ilustraciones, fondos, iconografía, thumbnails y renders conceptuales.
- Crear variaciones de composición cuando se respete la identidad visual.
- Optimizar prompts para consistencia de estilo.
- Producir recursos sin texto para facilitar traducciones.
- Generar placeholders claramente marcados como `draft` o `review`.

### 5.2 Prohibido

- Reemplazar logotipos oficiales sin aprobación.
- Alterar la apariencia oficial de Boly™ o Chef Juanote™ sin nueva validación.
- Crear texto horneado dentro de imágenes finales si existe versión editable.
- Mezclar estilos visuales incompatibles con la marca.
- Usar imágenes con marcas de agua, rostros no autorizados, logos ajenos o elementos con derechos dudosos.
- Publicar activos generados por IA sin revisión humana.

### 5.3 Prompt maestro recomendado

```text
Recurso visual oficial para PanaderIA™, academia digital premium de panadería artesanal profesional. Estilo elegante, cálido, educativo, artesanal y tecnológico. Paleta negro, dorado, blanco, crema y café panadería. Composición limpia, alta legibilidad, iluminación profesional, sensación premium, coherencia con marca educativa. Sin marcas de agua, sin texto incrustado salvo que se solicite, sin elementos genéricos de baja calidad.
```

### 5.4 Prompt negativo recomendado

```text
infantil, caricatura barata, saturado, desordenado, baja resolución, texto ilegible, marca de agua, logos externos, manos deformes, pan quemado no intencional, cocina sucia, colores neón, estilo genérico, apariencia amateur, exceso de dorado, exceso de brillo, distorsión de personaje
```

---

## 6. Categorías oficiales

Cada categoría siguiente define estructura de carpetas, formatos permitidos, resolución recomendada, nomenclatura, control de versiones, reglas para IA, checklist de calidad y mantenimiento.

---

## 6.1 Biblioteca de fotografías

### Estructura de carpetas

```text
public/assets/fotografias/
├── producto/
├── proceso/
├── ingredientes/
├── herramientas/
├── ambiente/
└── equipo-humano/
```

### Formatos permitidos

- Maestro: `RAW`, `DNG`, `TIFF`.
- Producción: `JPG`, `WEBP`.
- Transparencia excepcional: `PNG`.

### Resolución recomendada

- Web hero: mínimo `2400 px` de ancho.
- Curso y lecciones: mínimo `1920 x 1080 px`.
- Redes sociales: mínimo `1080 x 1080 px`.
- Impresión: `300 dpi` al tamaño final.

### Nomenclatura oficial

```text
panaderia-foto-[producto|proceso|ingrediente|herramienta]-[descripcion]-[uso]-[idioma]-[estado]-v###.webp
```

### Control de versiones

- Conservar maestro sin recorte.
- Crear derivados por canal: `web`, `curso`, `social`, `print`.
- No sobrescribir correcciones de color aprobadas.

### Reglas para IA

- La IA puede apoyar fondos o retoques menores.
- No debe inventar procesos técnicos incorrectos.
- No debe generar manos manipulando masa para material técnico sin revisión experta.

### Checklist de calidad

- [ ] Pan, masa, corteza o ingrediente se ve real y apetitoso.
- [ ] Iluminación cálida profesional.
- [ ] Sin ruido excesivo ni desenfoque accidental.
- [ ] Colores compatibles con marca.
- [ ] No aparecen marcas externas.
- [ ] Técnica panadera representada correctamente.

### Mantenimiento

- Auditar trimestralmente fotos duplicadas.
- Reemplazar imágenes `draft` usadas provisionalmente.
- Registrar derechos, autor y fecha de captura.

---

## 6.2 Biblioteca de ilustraciones

### Estructura de carpetas

```text
public/assets/ilustraciones/
├── educativas/
├── editoriales/
├── personajes/
├── capitulos/
└── decorativas/
```

### Formatos permitidos

- Maestro editable: `AI`, `FIG`, `PSD`, `SVG`.
- Producción: `SVG`, `PNG`, `WEBP`.
- Documentos: `PDF`.

### Resolución recomendada

- Vectorial siempre que sea posible.
- Raster mínimo `2048 px` lado largo.
- PNG transparente para personajes o elementos superpuestos.

### Nomenclatura oficial

```text
panaderia-ilustracion-[tipo]-[descripcion]-[uso]-[idioma]-[estado]-v###.svg
```

### Control de versiones

- Versionar cambios de estilo, color, composición o personaje.
- Mantener archivo editable junto al export final.

### Reglas para IA

- Usar IA para bocetos, no como fuente final sin vectorización o limpieza.
- Prohibido cambiar proporciones oficiales de personajes.
- Evitar estilos que parezcan infantiles si el material es profesional.

### Checklist de calidad

- [ ] Línea, color y sombras consistentes.
- [ ] Lectura clara en tamaños pequeños.
- [ ] Sin detalles innecesarios.
- [ ] Compatible con fondo claro y oscuro.
- [ ] Alineada a la Biblia Visual.

### Mantenimiento

- Consolidar estilos por campaña o curso.
- Archivar versiones no aprobadas después de cierre de producción.

---

## 6.3 Biblioteca de renders 3D

### Estructura de carpetas

```text
public/assets/renders-3d/
├── bolillo/
├── herramientas/
├── escenarios/
├── personajes/
└── objetos-educativos/
```

### Formatos permitidos

- Maestro: `BLEND`, `FBX`, `OBJ`, `USDZ`, `GLB`.
- Texturas: `PNG`, `JPG`, `EXR`.
- Producción: `PNG`, `WEBP`, `MP4`.

### Resolución recomendada

- Still premium: `3000 x 3000 px`.
- Web: `1920 x 1080 px` o `1600 x 900 px`.
- Transparencia: PNG con alpha mínimo `2048 px`.

### Nomenclatura oficial

```text
panaderia-render3d-[objeto]-[angulo]-[uso]-neutral-[estado]-v###.png
```

### Control de versiones

- Versionar modelo, textura, iluminación y cámara.
- Conservar escenas maestras y exports finales separados.

### Reglas para IA

- La IA puede generar conceptos, pero los modelos 3D oficiales deben validarse por proporción, textura y realismo.
- No exagerar brillo, vapor, dorado o cortezas irreales.

### Checklist de calidad

- [ ] Geometría limpia.
- [ ] Textura creíble y apetecible.
- [ ] Iluminación premium.
- [ ] Escala coherente.
- [ ] Export optimizado para destino.

### Mantenimiento

- Actualizar renders cuando cambien materiales, logotipos o estilo de iluminación.
- Mantener `source/`, `textures/`, `exports/` y `archive/` en proyectos complejos.

---

## 6.4 Biblioteca del personaje Boly™

### Estructura de carpetas

```text
public/assets/boly/
├── version-oficial/
├── poses/
├── emociones/
├── animaciones/
├── app/
├── libros/
├── certificados/
└── videos/
```

### Formatos permitidos

- Maestro: `AI`, `SVG`, `PSD`, `BLEND` si aplica 3D.
- Producción: `PNG`, `SVG`, `WEBP`, `GIF`, `MP4`, `Lottie JSON`.

### Resolución recomendada

- PNG transparente: mínimo `2048 px` lado largo.
- App: exportaciones `1x`, `2x`, `3x`.
- Video: mínimo `1920 x 1080 px`.

### Nomenclatura oficial

```text
panaderia-boly-[pose|emocion|accion]-[descripcion]-[uso]-neutral-[estado]-v###.png
```

### Control de versiones

- La versión oficial de Boly™ es el canon visual.
- Cualquier cambio de ojos, forma, proporción, color, textura o personalidad requiere versión nueva y aprobación.

### Reglas para IA

- No rediseñar a Boly™ desde cero.
- Usar imágenes oficiales como referencia.
- Mantener personalidad educativa, amable, útil y premium.
- Evitar expresiones grotescas, memes o infantilización excesiva.

### Checklist de calidad

- [ ] Reconocible como Boly™.
- [ ] Proporciones oficiales intactas.
- [ ] Expresión clara y útil para el contexto.
- [ ] Fondo transparente cuando corresponda.
- [ ] No contradice el tono profesional del curso.

### Mantenimiento

- Mantener una hoja maestra de poses y emociones.
- Eliminar duplicados semánticos: una emoción debe tener una versión canónica por uso principal.

---

## 6.5 Biblioteca del personaje Chef Juanote™

### Estructura de carpetas

```text
public/assets/chef-juanote/
├── foto-oficial/
├── fotos-secundarias/
├── portadas/
├── redes-sociales/
└── certificados/
```

### Formatos permitidos

- Maestro: `RAW`, `DNG`, `TIFF`, `PSD`.
- Producción: `JPG`, `PNG`, `WEBP`, `PDF`.

### Resolución recomendada

- Foto oficial: mínimo `3000 px` lado largo.
- Portadas: `2560 x 1440 px`.
- Redes: `1080 x 1350 px`, `1080 x 1080 px`, `1080 x 1920 px`.
- Impresión: `300 dpi`.

### Nomenclatura oficial

```text
panaderia-chef-juanote-[foto|portada|certificado]-[descripcion]-[uso]-[idioma]-[estado]-v###.jpg
```

### Control de versiones

- La foto oficial no se reemplaza sin conservar histórico.
- Retoques de color o recorte para distintos canales son derivados.

### Reglas para IA

- No crear versiones falsas o no autorizadas de Chef Juanote™ para materiales institucionales.
- No modificar rasgos, edad, complexión o identidad.
- La IA solo puede apoyar fondos, composición o limpieza visual con aprobación humana.

### Checklist de calidad

- [ ] Imagen comunica autoridad, humildad y experiencia real.
- [ ] Vestimenta y entorno son profesionales.
- [ ] Sin distorsiones faciales.
- [ ] Sin elementos externos distractores.
- [ ] Compatible con usos institucionales.

### Mantenimiento

- Revisar anualmente si la foto oficial sigue representando la etapa de marca.
- Mantener permisos y derechos documentados.

---

## 6.6 Biblioteca de logotipos

### Estructura de carpetas

```text
public/assets/brand/
├── logo/
├── escudo/
├── sellos/
└── guias/
```

### Formatos permitidos

- Maestro: `SVG`, `AI`, `PDF vectorial`.
- Producción: `SVG`, `PNG`, `WEBP`, `PDF`.

### Resolución recomendada

- Vectorial obligatorio para maestro.
- PNG mínimo `3000 px` lado largo.
- Favicons derivados: `16`, `32`, `48`, `180`, `512 px`.

### Nomenclatura oficial

```text
panaderia-logo-[horizontal|vertical|escudo|sello]-[color]-[uso]-neutral-[estado]-v###.svg
```

### Control de versiones

- No sobrescribir logotipos oficiales.
- Cada cambio de proporción, color, tagline o composición requiere versión nueva.

### Reglas para IA

- Prohibido generar logotipos finales con IA sin vectorización y aprobación de marca.
- No alterar la escritura `PanaderIA™`.

### Checklist de calidad

- [ ] Legible en tamaños pequeños.
- [ ] Versiones para fondo claro y oscuro.
- [ ] Márgenes de seguridad correctos.
- [ ] Colores oficiales exactos.
- [ ] Sin rasterización innecesaria.

### Mantenimiento

- Mantener kit de marca actualizado.
- Documentar versión vigente y versiones obsoletas.

---

## 6.7 Biblioteca de iconografía

### Estructura de carpetas

```text
public/assets/brand/iconos/
├── navegacion/
├── curso/
├── ingredientes/
├── herramientas/
├── estados/
└── redes-sociales/
```

### Formatos permitidos

- Maestro: `SVG`.
- Producción: `SVG`, `PNG`, `WEBP`.

### Resolución recomendada

- Vectorial preferente.
- PNG: `512 x 512 px`, `256 x 256 px`, `128 x 128 px`.

### Nomenclatura oficial

```text
panaderia-icono-[familia]-[concepto]-[uso]-neutral-[estado]-v###.svg
```

### Control de versiones

- Versionar cambios de grosor, radio, estilo o color.
- Mantener familias completas con el mismo trazo.

### Reglas para IA

- IA solo como referencia conceptual.
- Iconos finales deben limpiarse, vectorizarse y normalizarse.

### Checklist de calidad

- [ ] Misma retícula visual.
- [ ] Grosor consistente.
- [ ] Funciona en monocromo.
- [ ] Reconocible a `24 px`.
- [ ] Sin detalles excesivos.

### Mantenimiento

- Auditar iconos duplicados por concepto.
- Mantener tabla de equivalencias por interfaz.

---

## 6.8 Biblioteca de fondos

### Estructura de carpetas

```text
public/assets/fondos/
├── web/
├── presentaciones/
├── certificados/
├── redes-sociales/
└── video/
```

### Formatos permitidos

- `JPG`, `WEBP`, `PNG`, `SVG`, `MP4` para fondos animados.

### Resolución recomendada

- Web: `2400 x 1350 px`.
- Presentaciones: `1920 x 1080 px`.
- Redes verticales: `1080 x 1920 px`.
- Certificados: tamaño final a `300 dpi`.

### Nomenclatura oficial

```text
panaderia-fondo-[canal]-[descripcion]-[uso]-neutral-[estado]-v###.webp
```

### Control de versiones

- Versionar cambios de color, textura, patrón o composición.
- Mantener versiones sin texto.

### Reglas para IA

- Permitida para generar ambientes abstractos o texturas suaves.
- No crear fondos saturados que compitan con texto o personajes.

### Checklist de calidad

- [ ] Permite lectura clara de texto encima.
- [ ] Mantiene paleta oficial.
- [ ] Sin elementos de stock reconocibles.
- [ ] Optimizado para peso web.
- [ ] Existe versión limpia sin texto.

### Mantenimiento

- Clasificar por canal y campaña.
- Retirar fondos que ya no coincidan con la identidad visual vigente.

---

## 6.9 Biblioteca de texturas

### Estructura de carpetas

```text
public/assets/texturas/
├── masa/
├── harina/
├── miga/
├── corteza/
├── madera/
└── papel/
```

### Formatos permitidos

- Maestro: `TIFF`, `PNG`.
- Producción: `JPG`, `WEBP`, `PNG`.
- 3D: `PNG`, `JPG`, `EXR`.

### Resolución recomendada

- Texturas generales: mínimo `2048 x 2048 px`.
- Texturas premium o 3D: `4096 x 4096 px`.

### Nomenclatura oficial

```text
panaderia-textura-[material]-[descripcion]-[uso]-neutral-[estado]-v###.webp
```

### Control de versiones

- Versionar cambios de color, repetición, contraste o limpieza.
- Guardar mapas PBR si aplican: `albedo`, `roughness`, `normal`, `displacement`.

### Reglas para IA

- Permitida para crear patrones base.
- Validar que la textura sea panadera y no parezca plástico o material artificial.

### Checklist de calidad

- [ ] Repetición invisible si es tileable.
- [ ] Sin ruido excesivo.
- [ ] Color compatible con marca.
- [ ] Detalle suficiente para primer plano.
- [ ] Peso optimizado para web.

### Mantenimiento

- Mantener textura maestra sin compresión.
- Registrar si una textura es apta para impresión, web o 3D.

---

## 6.10 Biblioteca de ingredientes

### Estructura de carpetas

```text
public/assets/curso-bolillo/ingredientes/
├── harina/
├── agua/
├── levadura/
├── sal/
├── masa-madre/
└── comparativas/
```

### Formatos permitidos

- `JPG`, `WEBP`, `PNG`, `SVG`, `PDF`.

### Resolución recomendada

- Foto educativa: `1920 x 1080 px`.
- Recorte transparente: `2048 px` lado largo.
- Ficha PDF: `300 dpi`.

### Nomenclatura oficial

```text
panaderia-ingrediente-[nombre]-[presentacion]-[uso]-[idioma]-[estado]-v###.webp
```

### Control de versiones

- Versionar cuando cambie presentación, proveedor visual, fotografía o información técnica.

### Reglas para IA

- No inventar propiedades técnicas.
- Evitar imágenes que representen ingredientes equivocados o de baja calidad.

### Checklist de calidad

- [ ] Ingrediente identificable.
- [ ] Color natural.
- [ ] Escala clara si es educativo.
- [ ] Sin marcas comerciales.
- [ ] Información técnica validada.

### Mantenimiento

- Actualizar ingredientes si cambian recetas, fichas o estándares del curso.

---

## 6.11 Biblioteca de herramientas

### Estructura de carpetas

```text
public/assets/curso-bolillo/herramientas/
├── basicas/
├── profesionales/
├── medicion/
├── horneado/
└── seguridad/
```

### Formatos permitidos

- `JPG`, `WEBP`, `PNG`, `SVG`, `PDF`, `GLB` para modelos 3D.

### Resolución recomendada

- Foto: `1920 x 1080 px` mínimo.
- PNG transparente: `2048 px` lado largo.
- Icono o diagrama: vectorial.

### Nomenclatura oficial

```text
panaderia-herramienta-[nombre]-[tipo]-[uso]-[idioma]-[estado]-v###.png
```

### Control de versiones

- Versionar cuando cambie herramienta, encuadre, especificación o uso recomendado.

### Reglas para IA

- No inventar herramientas inexistentes para formación técnica.
- Validar ergonomía, escala y uso correcto.

### Checklist de calidad

- [ ] Herramienta limpia y profesional.
- [ ] Uso técnico correcto.
- [ ] Escala comprensible.
- [ ] Fondo limpio o transparente.
- [ ] Sin marcas comerciales visibles.

### Mantenimiento

- Revisar herramientas por cada actualización del curso.
- Marcar como obsoletas herramientas reemplazadas.

---

## 6.12 Biblioteca de diagramas

### Estructura de carpetas

```text
public/assets/diagramas/
├── procesos/
├── comparativas/
├── anatomia-del-bolillo/
├── tiempos-temperaturas/
└── solucion-de-errores/
```

### Formatos permitidos

- Maestro: `FIG`, `AI`, `SVG`.
- Producción: `SVG`, `PNG`, `PDF`, `WEBP`.

### Resolución recomendada

- Vectorial preferente.
- PNG: mínimo `2400 px` de ancho.
- PDF: listo para impresión si aplica.

### Nomenclatura oficial

```text
panaderia-diagrama-[tema]-[descripcion]-[uso]-[idioma]-[estado]-v###.svg
```

### Control de versiones

- Versionar ante cualquier cambio de datos, pasos, temperaturas, tiempos o copy.

### Reglas para IA

- IA no debe definir datos técnicos.
- Todo contenido técnico debe validarse contra fuente oficial del curso.

### Checklist de calidad

- [ ] Datos correctos.
- [ ] Jerarquía visual clara.
- [ ] Legible en móvil.
- [ ] Export sin texto cortado.
- [ ] Versión editable disponible.

### Mantenimiento

- Auditar diagramas después de modificar contenido educativo.
- Crear versión por idioma cuando tenga texto.

---

## 6.13 Biblioteca de videos

### Estructura de carpetas

```text
public/assets/videos/
├── intro/
├── curso-bolillo/
├── premium/
├── redes-sociales/
└── trailers/
```

### Formatos permitidos

- Maestro: `MOV`, `PRORES`, proyecto editable.
- Producción: `MP4`, `WEBM`.
- Subtítulos: `SRT`, `VTT`.
- Audio: `WAV`, `MP3`, `AAC`.

### Resolución recomendada

- Curso: `1920 x 1080 px` mínimo.
- Premium: `4K` cuando sea posible.
- Reels/Shorts/TikTok: `1080 x 1920 px`.
- Mini clips web: `1280 x 720 px` mínimo.

### Nomenclatura oficial

```text
panaderia-video-[serie]-[episodio-o-tema]-[uso]-[idioma]-[estado]-v###.mp4
```

### Control de versiones

- Versionar cambios de edición, audio, subtítulos, color, música o gráficos.
- Mantener proyecto editable y export final.

### Reglas para IA

- IA puede generar storyboards, subtítulos preliminares y fondos, pero no validar técnica panadera.
- No usar voces sintéticas finales sin aprobación de tono de marca.

### Checklist de calidad

- [ ] Audio claro.
- [ ] Color consistente.
- [ ] Gráficos legibles.
- [ ] Subtítulos revisados.
- [ ] Técnica correcta.
- [ ] Peso y códec adecuados.

### Mantenimiento

- Conservar masters y proyectos editables.
- Registrar música, licencias, voces, fecha y responsable.

---

## 6.14 Biblioteca de miniaturas

### Estructura de carpetas

```text
public/assets/miniaturas/
├── youtube/
├── curso/
├── lecciones/
└── redes-sociales/
```

### Formatos permitidos

- Maestro: `PSD`, `FIG`, `AI`.
- Producción: `JPG`, `PNG`, `WEBP`.

### Resolución recomendada

- YouTube: `1280 x 720 px`.
- Curso: `1920 x 1080 px`.
- Cuadrado: `1080 x 1080 px`.

### Nomenclatura oficial

```text
panaderia-miniatura-[canal]-[tema]-[uso]-[idioma]-[estado]-v###.jpg
```

### Control de versiones

- Versionar cambios de titular, imagen principal, CTA, color o personaje.

### Reglas para IA

- No crear texto final en imagen si no se puede editar.
- IA puede proponer composición, pero el titular debe revisarse editorialmente.

### Checklist de calidad

- [ ] Legible a tamaño pequeño.
- [ ] Contraste alto.
- [ ] Sin clickbait engañoso.
- [ ] Identidad PanaderIA™ visible.
- [ ] Personaje o producto no deformado.

### Mantenimiento

- Medir rendimiento por canal y archivar miniaturas de campañas cerradas.

---

## 6.15 Biblioteca de banners

### Estructura de carpetas

```text
public/assets/banners/
├── web/
├── email/
├── ads/
└── plataforma/
```

### Formatos permitidos

- `JPG`, `PNG`, `WEBP`, `SVG`, `HTML5`, `PDF` para impresión.

### Resolución recomendada

- Web hero: `2400 x 900 px`.
- Email: `1200 x 600 px`.
- Ads: según plataforma, mínimo `1080 px` lado corto.
- Plataforma: `1920 x 480 px` o variante responsive.

### Nomenclatura oficial

```text
panaderia-banner-[canal]-[campana]-[uso]-[idioma]-[estado]-v###.webp
```

### Control de versiones

- Versionar por campaña, oferta, idioma y canal.

### Reglas para IA

- IA puede crear fondos o mockups.
- No usar copy final sin validación comercial y ortográfica.

### Checklist de calidad

- [ ] CTA claro.
- [ ] Jerarquía visual correcta.
- [ ] Export en tamaños requeridos.
- [ ] Peso optimizado.
- [ ] No invade márgenes seguros.

### Mantenimiento

- Retirar banners de promociones vencidas.
- Mantener calendario de campañas asociado.

---

## 6.16 Biblioteca para redes sociales

### Estructura de carpetas

```text
public/assets/redes-sociales/
├── instagram/
├── facebook/
├── tiktok/
├── youtube/
├── linkedin/
└── plantillas/
```

### Formatos permitidos

- Imagen: `JPG`, `PNG`, `WEBP`.
- Video: `MP4`, `WEBM`.
- Plantilla: `PSD`, `FIG`, `AI`.

### Resolución recomendada

- Post cuadrado: `1080 x 1080 px`.
- Reel/Story/Short: `1080 x 1920 px`.
- Post vertical: `1080 x 1350 px`.
- Portada YouTube: `2560 x 1440 px`.

### Nomenclatura oficial

```text
panaderia-social-[plataforma]-[formato]-[tema]-[idioma]-[estado]-v###.png
```

### Control de versiones

- Versionar cambios de copy, fecha, CTA, personaje, formato o idioma.

### Reglas para IA

- IA puede adaptar formatos, pero debe respetar safe areas.
- No generar afirmaciones técnicas o comerciales no aprobadas.

### Checklist de calidad

- [ ] Tamaño correcto por plataforma.
- [ ] Safe areas respetadas.
- [ ] Marca visible sin saturar.
- [ ] Texto breve y legible.
- [ ] Export optimizado.

### Mantenimiento

- Organizar por plataforma, campaña y fecha.
- Archivar publicaciones ya usadas si no son evergreen.

---

## 6.17 Biblioteca para sitio web

### Estructura de carpetas

```text
public/assets/web/
├── home/
├── cursos/
├── landing-pages/
├── blog/
├── dashboard/
└── componentes/
```

### Formatos permitidos

- `SVG`, `WEBP`, `PNG`, `JPG`, `MP4`, `WEBM`, `JSON` para animaciones.

### Resolución recomendada

- Hero: `2400 x 1350 px`.
- Cards: `1200 x 800 px`.
- Blog: `1600 x 900 px`.
- Iconos: vectorial.

### Nomenclatura oficial

```text
panaderia-web-[seccion]-[componente]-[descripcion]-[idioma]-[estado]-v###.webp
```

### Control de versiones

- Versionar cuando cambie el diseño, copy integrado, composición, breakpoints o campaña.

### Reglas para IA

- IA puede generar recursos visuales web si no compromete legibilidad, rendimiento o identidad.
- Prohibido exportar imágenes con texto que debería ser HTML editable, salvo banners específicos.

### Checklist de calidad

- [ ] Peso optimizado.
- [ ] Buen recorte responsive.
- [ ] Texto no esencial incrustado.
- [ ] Accesibilidad visual considerada.
- [ ] Compatible con modo claro/oscuro si aplica.

### Mantenimiento

- Ejecutar auditoría de peso antes de producción.
- Eliminar recursos web no referenciados después de cada release.

---

## 6.18 Biblioteca para impresión

### Estructura de carpetas

```text
public/assets/impresion/
├── certificados/
├── ebooks/
├── guias/
├── posters/
└── empaques/
```

### Formatos permitidos

- Maestro: `INDD`, `AI`, `PSD`, `FIG`.
- Producción: `PDF/X`, `PDF`, `TIFF`, `PNG`.

### Resolución recomendada

- `300 dpi` al tamaño final.
- Sangrado mínimo: `3 mm` cuando aplique.
- Color: `CMYK` para impresión final, `RGB` para revisión digital.

### Nomenclatura oficial

```text
panaderia-print-[pieza]-[descripcion]-print-[idioma]-[estado]-v###.pdf
```

### Control de versiones

- Versionar por idioma, tamaño, imprenta, fecha y revisión legal.

### Reglas para IA

- IA puede crear fondos o ilustraciones, pero la maquetación final debe revisarse para imprenta.
- No usar imágenes IA de baja resolución para materiales premium.

### Checklist de calidad

- [ ] Sangrados y márgenes correctos.
- [ ] Imágenes a `300 dpi`.
- [ ] Colores convertidos correctamente.
- [ ] Fuentes incrustadas o trazadas.
- [ ] PDF final revisado.

### Mantenimiento

- Conservar archivo editable, PDF de revisión y PDF final de imprenta.
- Registrar proveedor e instrucciones de impresión.

---

## 6.19 Biblioteca para futuras traducciones

### Estructura de carpetas

```text
public/assets/traducciones/
├── es-mx/
├── en-us/
├── pt-br/
├── fr-fr/
└── plantillas-sin-texto/
```

### Formatos permitidos

- Plantillas: `FIG`, `AI`, `PSD`, `SVG`.
- Export: `PNG`, `JPG`, `WEBP`, `PDF`, `MP4`, `SRT`, `VTT`.

### Resolución recomendada

- Igual al activo fuente.
- Mantener plantillas sin texto incrustado siempre que sea posible.

### Nomenclatura oficial

```text
panaderia-i18n-[idioma]-[categoria]-[descripcion]-[uso]-[estado]-v###.[ext]
```

### Control de versiones

- Cada idioma tiene versión independiente.
- Si cambia el activo visual base, revisar todos los idiomas derivados.

### Reglas para IA

- IA puede proponer traducciones preliminares, pero deben pasar revisión humana.
- No incrustar traducciones en imágenes si existe alternativa editable.
- Validar expansión de texto para idiomas largos.

### Checklist de calidad

- [ ] Idioma correcto.
- [ ] Acentos y caracteres especiales correctos.
- [ ] No hay texto cortado.
- [ ] Layout conserva jerarquía.
- [ ] Terminología panadera validada.

### Mantenimiento

- Mantener glosario por idioma.
- Usar `plantillas-sin-texto/` como fuente para nuevas localizaciones.

---

## 7. Checklist global antes de aprobar un recurso

Antes de mover un recurso a `approved`, validar:

- [ ] Nombre de archivo cumple la convención oficial.
- [ ] Carpeta corresponde a categoría y uso.
- [ ] Formato correcto para su destino.
- [ ] Resolución suficiente.
- [ ] Peso optimizado si va a web.
- [ ] Identidad visual coherente con PanaderIA™.
- [ ] Sin marcas externas, marcas de agua ni derechos dudosos.
- [ ] Metadatos completos.
- [ ] Versión anterior conservada si fue reemplazo.
- [ ] Revisión humana realizada si intervino IA.
- [ ] Recurso probado en el canal real de uso.

---

## 8. Mantenimiento general de la biblioteca

### 8.1 Frecuencia recomendada

| Frecuencia | Acción |
|---|---|
| Semanal | Revisar ingresos nuevos y corregir nombres incorrectos |
| Mensual | Auditar duplicados, pesos web y estados `draft` |
| Trimestral | Revisar consistencia visual, recursos obsoletos y metadatos |
| Anual | Actualizar guía de marca, personajes, formatos y paquetes por idioma |

### 8.2 Roles responsables

- **Dirección creativa:** aprueba identidad visual, personajes y logotipos.
- **Diseño:** crea, exporta y organiza recursos.
- **Edición audiovisual:** mantiene videos, subtítulos y masters.
- **Equipo técnico:** valida rendimiento web y estructura de carpetas.
- **Revisión panadera:** valida precisión técnica de fotografías, diagramas y videos.
- **IA asistente:** propone, clasifica y documenta, pero no aprueba producción final.

### 8.3 Flujo oficial de incorporación

```text
1. Crear recurso en carpeta correcta con estado draft.
2. Registrar metadatos y fuente.
3. Revisar identidad visual y técnica.
4. Exportar derivados por canal.
5. Cambiar estado a review.
6. Recibir aprobación humana.
7. Publicar como approved.
8. Archivar versiones reemplazadas.
```

### 8.4 Reglas de limpieza

- No eliminar recursos aprobados sin respaldo.
- No borrar archivos históricos si aparecen en materiales publicados.
- Mover obsoletos a `archive/`, no a la papelera.
- Consolidar duplicados solo después de verificar referencias en web, PDFs, videos y redes.

---

## 9. Guía rápida de búsqueda

Para encontrar un recurso en segundos:

1. Identificar categoría: `foto`, `boly`, `logo`, `diagrama`, `video`, etc.
2. Identificar subcategoría: `amasado`, `web`, `instagram`, `certificado`, etc.
3. Buscar por descripción corta.
4. Confirmar estado `approved`.
5. Elegir versión más alta.
6. Confirmar idioma o `neutral`.
7. Verificar formato correcto para el canal.

Ejemplo:

```text
Necesito una imagen aprobada de Boly saludando para app.
Buscar: panaderia-boly-pose-saludo-app-neutral-approved-v###.png
Carpeta: public/assets/boly/poses/
Usar: versión aprobada más reciente.
```

---

## 10. Regla final de consistencia

La biblioteca visual de PanaderIA™ no es solo un almacén de archivos: es el sistema operativo visual del proyecto. Cada activo debe reforzar la misma promesa de marca: formar panaderos con técnica real, calidez humana, excelencia artesanal y apoyo inteligente.

Si un recurso no ayuda a que PanaderIA™ se vea más clara, profesional, confiable y memorable, debe corregirse antes de publicarse.
