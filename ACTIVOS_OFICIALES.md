# ACTIVOS_OFICIALES.md

## Propósito

Este documento enlaza la estructura oficial de archivos multimedia de PanaderIA™ y define dónde deben colocarse los activos reales de marca, cursos, videos, PDFs, Chef Juanote y Boly™.

No se deben agregar imágenes falsas, duplicadas o temporales dentro de `public/assets/`. Esta estructura está preparada para recibir materiales reales aprobados por la dirección de PanaderIA™.

## Regla general de organización

Todos los activos oficiales deben vivir dentro de `public/assets/` y cada subcarpeta incluye su propio `README.md` con instrucciones específicas de uso, nomenclatura, formatos recomendados, control de duplicados y criterio de versión oficial.


## Mapa operativo de carga

Para saber exactamente dónde colocar cada archivo real, consulta `ASSET_UPLOAD_MAP.md`. Ese documento funciona como guía operativa para subir el escudo, logo, foto oficial de Chef Juanote, Boly™, emociones, fotos del Curso Maestro de Bolillo, videos y PDFs sin crear duplicados ni romper la estructura oficial.

## Estructura oficial

### Marca PanaderIA™

- `public/assets/brand/logo/`: logotipos oficiales.
- `public/assets/brand/escudo/`: escudo oficial de PanaderIA™.
- `public/assets/brand/sellos/`: sellos, insignias y marcas de confianza.
- `public/assets/brand/iconos/`: iconos oficiales de interfaz y marca.

### Chef Juanote

- `public/assets/chef-juanote/foto-oficial/`: fotografía oficial principal de Chef Juanote.
- `public/assets/chef-juanote/fotos-secundarias/`: fotografías secundarias y retratos alternos.
- `public/assets/chef-juanote/portadas/`: portadas para cursos, ebooks y campañas.
- `public/assets/chef-juanote/certificados/`: firma, retrato y recursos para certificados.
- `public/assets/chef-juanote/redes-sociales/`: piezas visuales para redes sociales.

### Boly™

- `public/assets/boly/version-oficial/`: diseño oficial maestro de Boly™.
- `public/assets/boly/emociones/`: expresiones emocionales de Boly™.
- `public/assets/boly/poses/`: poses educativas y de acompañamiento.
- `public/assets/boly/animaciones/`: animaciones, secuencias y motion assets.
- `public/assets/boly/libros/`: Boly™ aplicado a libros y ebooks.
- `public/assets/boly/videos/`: Boly™ para videos, intros y overlays.
- `public/assets/boly/app/`: avatares y recursos de Boly™ para la plataforma.
- `public/assets/boly/certificados/`: Boly™ en certificados, logros e insignias.

### Curso Maestro de Bolillo

- `public/assets/curso-bolillo/ingredientes/`: ingredientes del bolillo.
- `public/assets/curso-bolillo/herramientas/`: herramientas y equipo.
- `public/assets/curso-bolillo/amasado/`: proceso de amasado.
- `public/assets/curso-bolillo/fermentacion/`: fermentación y reposos.
- `public/assets/curso-bolillo/formado/`: formado profesional.
- `public/assets/curso-bolillo/corte/`: corte correcto.
- `public/assets/curso-bolillo/horneado/`: horneado, vapor y coloración.
- `public/assets/curso-bolillo/enfriado/`: enfriado y reposo final.
- `public/assets/curso-bolillo/errores/`: errores comunes documentados visualmente.
- `public/assets/curso-bolillo/soluciones/`: soluciones, comparativos y correcciones.
- `public/assets/curso-bolillo/bolillo-terminado/`: bolillos terminados, miga, corteza y hero shots.

### Videos

- `public/assets/videos/curso-bolillo/`: videos principales del curso.
- `public/assets/videos/intro/`: videos introductorios.
- `public/assets/videos/premium/`: videos exclusivos Premium.
- `public/assets/videos/redes-sociales/`: clips para redes sociales.

### PDF y descargas

- `public/assets/pdf/ebooks/`: eBooks oficiales.
- `public/assets/pdf/guias/`: guías y checklists.
- `public/assets/pdf/certificados/`: plantillas y certificados exportables.
- `public/assets/pdf/material-complementario/`: recursos descargables adicionales.

## Ubicaciones obligatorias para activos principales

- Escudo oficial: `public/assets/brand/escudo/`.
- Logo oficial: `public/assets/brand/logo/`.
- Foto oficial de Chef Juanote: `public/assets/chef-juanote/foto-oficial/`.
- Diseño oficial de Boly™: `public/assets/boly/version-oficial/`.
- Videos privados o maestros del Curso Maestro de Bolillo: `public/assets/videos/curso-bolillo/` para referencias locales; en producción deberán migrarse a un sistema privado de almacenamiento/streaming.
- eBook oficial del Curso Maestro de Bolillo: `public/assets/pdf/ebooks/`.

## Convención de nombres

Usar siempre:

`categoria-descripcion-contexto-v###.extension`

Ejemplos:

- `escudo-panaderia-oficial-v001.svg`
- `chef-juanote-oficial-v001.jpg`
- `boly-oficial-v001.png`
- `curso-bolillo-mod01-leccion01-v001.mp4`
- `ebook-curso-maestro-bolillo-v001.pdf`

## Criterio de versión oficial

Un activo se considera oficial cuando cumple estas condiciones:

1. Está en la carpeta correcta.
2. Usa la convención de nombres.
3. Tiene número de versión.
4. Fue aprobado por la dirección de marca o contenido.
5. Está documentado en el control interno de activos cuando exista.

## Notas de producción

- `public/assets/` sirve para organizar activos estáticos públicos o de referencia.
- Los videos privados, PDFs protegidos y certificados personalizados deberán moverse en producción a almacenamiento con permisos, URLs firmadas y control de acceso.
- No almacenar archivos confidenciales, fuentes privadas sin licencia o material sin derechos de uso.
- No reemplazar activos oficiales sin conservar trazabilidad de versión.
