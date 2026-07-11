# PLAN_EJECUCION_FINAL_BOLILLO_AI.md

# Plan de ejecución final para Bolillo A.I.

**Proyecto:** PanaderIA™ / Bolillo A.I.  
**Fecha de auditoría:** 2026-07-11  
**Base de revisión:** únicamente archivos existentes en el repositorio PanaderIA.  
**Regla de interpretación:** un recurso se considera **producido** solo si existe como archivo verificable en el repositorio. Si está nombrado, descrito o solicitado en un documento, pero no existe como archivo final exportado o integrable, se clasifica como **documentado pero no producido** o **pendiente**.

---

## 1. Estado real actual del proyecto

Bolillo A.I. tiene un cuerpo editorial amplio y una arquitectura documental sólida, pero todavía no está terminado como producto comercial publicable. El repositorio contiene manuscritos, biblias técnicas, lineamientos de marca, lineamientos visuales, guías de publicación, plataforma web y biblioteca visual en SVG; sin embargo, no existen archivos finales PDF, EPUB, videos binarios, fotografías raster o paquete impreso final verificable.

### Clasificación general

| Área | Estado real | Evidencia observada |
|---|---|---|
| Manuscrito base | Documentado y desarrollado | `LIBRO_MAESTRO_BOLILLO.md` declara borrador editorial funcional con capítulos 1 al 14. |
| Manuscrito de publicación | Documentado como final, pero no exportado | `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` existe y `REPORTE_VALIDACION_PUBLICACION_BOLILLO.md` lo considera listo para conversión profesional. |
| Recursos visuales SVG | Producidos parcialmente | Existen activos SVG en `public/biblioteca-visual-oficial-panaderia/` y plataformas V2/V3. |
| Fotografías | Pendientes | No se encontraron archivos `.jpg`, `.jpeg`, `.png` ni `.webp` en el repositorio. |
| Videos finales | Pendientes | No se encontraron archivos `.mp4`, `.mov` ni `.webm`; existen demos o páginas HTML de video. |
| QR finales | Pendientes | Se documentan claves y destinos, pero no se verificaron archivos QR finales ni matriz final de destinos activos. |
| PDF final | Pendiente | No se encontraron archivos `.pdf`. |
| EPUB final | Pendiente | No se encontraron archivos `.epub`. |
| Portada / lomo / contraportada | Documentado pero no producido como arte final | `PORTADA_OFICIAL_BOLILLO_AI.md` contiene especificación y checklist, no el archivo final PDF/X o imagen final. |
| Sitio web / entrega digital | Producido como estructura, pendiente de validación comercial final | Existen `WEB_PANADERIA_V1`, `PANADERIA_PLATFORM_V1`, `PANADERIA_PLATFORM_V2` y `PANADERIA_PLATFORM_V3_RELEASE`, pero debe confirmarse cuál será canal oficial de venta/entrega. |
| Validación técnica profesional | Pendiente | Los controles existentes piden validación de Chef Juanote™ o pendiente explícito. |
| Validación legal/comercial | Pendiente | Existen lineamientos y checklists, pero no consta cierre legal, ISBN, precio, términos finales ni derechos de recursos finales. |

---

## 2. Archivos completados

Se consideran **completados como documentos fuente o guías**, no como prueba de producto final exportado:

- `MANUAL_IDENTIDAD_PANADERIA.md`: define identidad de marca.
- `KIT_MARCA_PANADERIA.md`: consolida sistema de marca.
- `GUIA_OFICIAL_BOLY.md`: define función, tono y uso de Boly™.
- `BOLY_MANUAL_OFICIAL.md`: manual complementario del personaje/asistente.
- `PROMPTS_OFICIALES_PANADERIA.md`: biblioteca oficial de prompts.
- `UNIVERSO_PANADERIA_OFICIAL.md`: marco del ecosistema PanaderIA™.
- `GUIA_ESTILO_EDITORIAL_PANADERIA.md`: guía de voz, tono y estilo.
- `PIPELINE_PRODUCCION_PANADERIA.md`: proceso maestro de producción.
- `BIBLIOTECA_RECURSOS_VISUALES_PANADERIA.md`: arquitectura y reglas de biblioteca visual.
- `PORTADA_OFICIAL_BOLILLO_AI.md`: especificación de portada, lomo y contraportada.
- `REPORTE_VALIDACION_PUBLICACION_BOLILLO.md`: reporte de validación documental para conversión.
- `SISTEMA_PUBLICACION/*.md`: guías de publicación, canales, impresión, ebooks, checklist y lanzamiento.
- `CEREBRO_MAESTRO/02_CAPITULOS/ESTADO_CAPITULOS.md`: tablero de capítulos en producción.
- `CEREBRO_MAESTRO/09_CONTROL_CALIDAD/CHECKLIST_MAESTRO.md`: checklist mínimo de calidad.

---

## 3. Archivos incompletos o pendientes de cierre

| Archivo / área | Estado | Motivo |
|---|---|---|
| `LIBRO_MAESTRO_BOLILLO.md` | Documentado pero no final | Se declara como borrador funcional y contiene múltiples recursos pendientes. |
| `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` | Documentado como final textual, pendiente de producción | Falta exportación, maquetación, portada gráfica final, recursos integrados y prueba de lectura. |
| `PORTADA_OFICIAL_BOLILLO_AI.md` | Especificación completa, arte final pendiente | No existe archivo final de portada, lomo y contraportada. |
| `BIBLIOTECA_RECURSOS_VISUALES_PANADERIA.md` | Guía completa, activos finales incompletos | Describe rutas, formatos y estándares que no están completamente materializados. |
| `CEREBRO_MAESTRO/02_CAPITULOS/ESTADO_CAPITULOS.md` | En proceso | Todos los capítulos aparecen “En producción” con pendientes clave. |
| `SISTEMA_PUBLICACION/checklist_publicacion.md` | Checklist pendiente de ejecutar | Contiene casillas sin completar para QR, portada, impresión, revisión final y publicación. |
| `WEB_PANADERIA_V1` y plataformas | Producido como estructura, pendiente de decisión final | Falta seleccionar canal oficial, conectar producto final, precios, enlaces, legal y descarga final. |

---

## 4. Duplicidades o documentos que se contradicen

1. **Estado del manuscrito:** `LIBRO_MAESTRO_BOLILLO.md` se declara borrador editorial funcional, mientras `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` se declara versión final de publicación. Esta diferencia debe resolverse definiendo un único manuscrito fuente de verdad.
2. **“Listo para PDF/EPUB” vs ausencia de exportables:** `REPORTE_VALIDACION_PUBLICACION_BOLILLO.md` indica que el libro está listo para conversión profesional, pero no existen archivos `.pdf` ni `.epub` en el repositorio.
3. **Recursos multimedia documentados vs recursos finales inexistentes:** el manuscrito y los pipelines describen fotografías, videos, diagramas y QR, pero las fotografías raster, videos binarios y QR finales no están presentes.
4. **Múltiples plataformas:** existen versiones V1, V2 y V3 release de plataforma, además de `WEB_PANADERIA_V1`; debe definirse cuál será la entrega comercial oficial para evitar publicar enlaces o paquetes inconsistentes.
5. **Bolillo A.I. vs Libro Maestro del Bolillo:** la portada se titula Bolillo A.I., mientras los manuscritos principales se titulan Libro Maestro del Bolillo. Debe definirse el nombre comercial final y su correspondencia editorial sin reescribir contenido técnico nuevo.
6. **Biblioteca visual normativa vs activos reales:** `BIBLIOTECA_RECURSOS_VISUALES_PANADERIA.md` define una estructura ideal como `public/assets/`, pero los activos reales auditados se concentran en `public/biblioteca-visual-oficial-panaderia/` y plataformas.

---

## 5. Recursos visuales pendientes

### Terminado

- Activos SVG por capítulo en `public/biblioteca-visual-oficial-panaderia/`.
- Activos SVG de referencia en `PANADERIA_PLATFORM_V2/assets/reference/` y `PANADERIA_PLATFORM_V3_RELEASE/assets/reference/`.

### Documentado pero no producido

- Biblioteca ideal descrita en `BIBLIOTECA_RECURSOS_VISUALES_PANADERIA.md` para fotografías, videos, portadas, redes, impresión, QR, documentos y recursos multiformato.
- Especificación visual de portada, lomo, contraportada, ISBN, QR y código de barras en `PORTADA_OFICIAL_BOLILLO_AI.md`.

### Pendiente

- Selección de recursos SVG definitivos por capítulo.
- Conversión o exportación de SVG a formatos de producción si se requieren para PDF, EPUB, web, redes o impresión.
- Revisión de consistencia visual con `MANUAL_IDENTIDAD_PANADERIA.md` y `KIT_MARCA_PANADERIA.md`.
- Integración de recursos visuales finales en el manuscrito maquetado.

---

## 6. Fotografías pendientes

No hay fotografías finales verificables en formatos `.jpg`, `.jpeg`, `.png` o `.webp`. Por tanto, toda fotografía mencionada en manuscritos, catálogo, biblioteca o pipeline debe clasificarse como **documentada pero no producida** o **pendiente**.

Pendientes mínimos:

- Fotografías de bolillo terminado.
- Fotografías de ingredientes.
- Fotografías de herramientas y mise en place.
- Fotografías de amasado, fermentación, formado, corte, horneado, enfriado y diagnóstico.
- Fotografías de errores comunes y comparativas.
- Fotografías de portada/mockups comerciales si se decide usarlas.

---

## 7. Videos pendientes

No hay videos finales en `.mp4`, `.mov` o `.webm`. Existen páginas HTML de demo o referencia en carpetas de plataforma, pero no sustituyen archivos audiovisuales finales.

Pendientes mínimos:

- Videos por capítulo o por proceso clave.
- Videos de apoyo para QR.
- Subtítulos, transcripciones y miniaturas finales.
- Validación técnica de cada video contra el manuscrito.
- Revisión de derechos de música, voz, imagen y recursos usados.

---

## 8. Códigos QR pendientes

Los QR están ampliamente documentados como necesidad, pero no consta paquete final de QR generado, probado y registrado.

Pendientes mínimos:

- Matriz final de códigos QR con ID, destino, URL, estado, fecha de prueba y responsable.
- Generación de QR en SVG/PNG/PDF según uso.
- Prueba en dispositivos reales.
- Política de redirección para no romper impresos.
- Integración en PDF, EPUB, impresión y web.

---

## 9. Portada, lomo y contraportada pendientes

`PORTADA_OFICIAL_BOLILLO_AI.md` define el brief y criterios, pero faltan los artes finales.

Pendientes mínimos:

- Portada frontal final.
- Lomo calculado según número de páginas, papel y proveedor.
- Contraportada final con texto comercial aprobado.
- ISBN y código de barras si aplica.
- QR promocional final si aplica.
- Exportación PDF/X o formato requerido por imprenta/plataforma.
- Mockups comerciales para venta directa.

---

## 10. Revisión técnica pendiente

Debe ejecutarse una validación profesional del contenido panadero antes de vender. El repositorio contiene material técnico amplio, pero el control de capítulos indica validación de Chef Juanote™ como pendiente clave por capítulo.

Criterio mínimo: ningún capítulo debe pasar a final si conserva dudas técnicas, contradicciones con biblias técnicas o recursos visuales que enseñen una práctica incorrecta.

---

## 11. Revisión ortográfica pendiente

Aunque existe guía editorial y reporte de validación, falta una pasada final documentada de ortografía, puntuación, consistencia terminológica, nombres de marca y limpieza de marcas internas.

Criterio mínimo: versión limpia sin `[PENDIENTE]`, comentarios internos, duplicados de QR o instrucciones de producción visibles para comprador final.

---

## 12. Maquetación pendiente

No existe archivo maquetado final. La maquetación debe resolver jerarquías, estilos, tablas, notas de Chef Juanote™, tips de Boly™, figuras, numeración, enlaces, índices, márgenes y adaptación por formato.

---

## 13. Exportación PDF pendiente

No existe PDF final en el repositorio. El PDF digital debe exportarse después de consolidar manuscrito, portada, recursos, QR y revisión final.

---

## 14. Exportación EPUB pendiente

No existe EPUB final en el repositorio. El EPUB debe validarse en lectores reales, con navegación, metadatos, enlaces, imágenes optimizadas y tabla de contenido funcional.

---

## 15. Versión para impresión pendiente

No existe paquete final de impresión. Falta definir tamaño, márgenes, sangrado, papel, lomo, portada completa, PDF/X, prueba física o preflight y ajustes por proveedor.

---

## 16. Sitio web y entrega digital pendientes

Existen estructuras web y plataformas, pero el producto comercial requiere decisión final:

- Canal oficial de venta.
- Página final de producto.
- Precio, moneda, impuestos y método de pago.
- Entrega segura de PDF/EPUB/recursos.
- Políticas de privacidad, términos, reembolsos y soporte.
- Conexión entre QR y recursos reales.
- Prueba de compra y descarga.

---

## 17. Pruebas antes de venta

Pruebas obligatorias:

1. Abrir PDF en escritorio y móvil.
2. Validar EPUB en lector compatible.
3. Probar todos los enlaces internos y externos.
4. Escanear todos los QR.
5. Revisar impresión o preflight.
6. Ejecutar prueba de compra.
7. Descargar archivos desde el flujo real de cliente.
8. Verificar que no existan archivos o textos de demo en producto final.
9. Revisar página de venta y emails transaccionales.
10. Validar soporte postcompra.

---

## 18. Aspectos legales y comerciales pendientes

- Definir titularidad de PanaderIA™, Chef Juanote™, Boly™ y Bolillo A.I.
- Confirmar permisos de uso de marcas, personajes y recursos visuales.
- ISBN si se publicará como libro formal en canales que lo requieran.
- Código de barras para impresión si aplica.
- Derechos de fotografías, videos, música, voz, ilustraciones, tipografías y plantillas.
- Términos de venta, privacidad, reembolsos y soporte.
- Claims comerciales: evitar promesas absolutas o resultados garantizados.
- Definir edición, versión, fecha, precio y canales.

---

# Tabla maestra de ejecución

| # | Fase | Tarea | Prioridad | Dependencia | Archivo afectado | Resultado esperado | Criterio de aceptación | Estado |
|---:|---|---|---|---|---|---|---|---|
| 1 | FASE 1 — Auditoría y consolidación | Definir manuscrito fuente de verdad | Crítica | Ninguna | `LIBRO_MAESTRO_BOLILLO.md`, `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` | Un único archivo base aprobado para producción | Documento de decisión indica cuál versión se usa y por qué | Pendiente |
| 2 | FASE 1 — Auditoría y consolidación | Resolver nombre comercial final | Crítica | Tarea 1 | Manuscrito, portada, web | Coherencia entre Bolillo A.I. y Libro Maestro del Bolillo | Título, subtítulo y metadatos coinciden en todos los puntos finales | Pendiente |
| 3 | FASE 1 — Auditoría y consolidación | Inventariar todos los pendientes visibles del manuscrito | Alta | Tarea 1 | Manuscrito fuente | Lista de placeholders, QR, fotos, videos y notas internas | No queda pendiente sin clasificación | Pendiente |
| 4 | FASE 1 — Auditoría y consolidación | Consolidar duplicidades documentales | Alta | Tareas 1-3 | Documentos maestros | Mapa de documentos vigentes, obsoletos y de soporte | No hay dos documentos contradictorios usados como fuente final | Pendiente |
| 5 | FASE 1 — Auditoría y consolidación | Seleccionar canal web/plataforma oficial | Crítica | Tarea 2 | `WEB_PANADERIA_V1`, plataformas V1/V2/V3 | Canal único para venta y entrega | Página/canal elegido queda documentado como oficial | Pendiente |
| 6 | FASE 2 — Producción de imágenes y multimedia | Seleccionar SVG finales por capítulo | Alta | Tarea 3 | `public/biblioteca-visual-oficial-panaderia/` | Set visual aprobado para maquetación | Cada capítulo tiene recursos seleccionados o ausencia justificada | Pendiente |
| 7 | FASE 2 — Producción de imágenes y multimedia | Producir fotografías faltantes | Crítica | Tarea 3 | Nuevos activos fotográficos | Biblioteca de fotos final | Cada foto existe, tiene nombre, uso, licencia y aprobación técnica | Pendiente |
| 8 | FASE 2 — Producción de imágenes y multimedia | Producir videos faltantes | Crítica | Tarea 3 | Nuevos activos de video | Videos finales por recurso definido | Cada video existe en formato final con subtítulos/transcripción si aplica | Pendiente |
| 9 | FASE 2 — Producción de imágenes y multimedia | Crear matriz final de QR | Crítica | Tareas 5, 7, 8 | Documento/matriz QR | QR vinculados a destinos definitivos | Cada QR escanea, resuelve al recurso correcto y queda registrado | Pendiente |
| 10 | FASE 2 — Producción de imágenes y multimedia | Generar QR finales | Crítica | Tarea 9 | Nuevos activos QR | QR en formatos de producción | Archivos QR existen y pasan prueba multi-dispositivo | Pendiente |
| 11 | FASE 2 — Producción de imágenes y multimedia | Producir portada, lomo y contraportada | Crítica | Tareas 2, 5, 9 | Arte final de portada | Cubierta completa lista | Cumple tamaño, sangrado, lomo, ISBN/código/QR si aplica | Pendiente |
| 12 | FASE 3 — Integración editorial | Integrar recursos visuales finales | Alta | Tareas 6, 7, 10, 11 | Manuscrito maquetable | Manuscrito enriquecido sin placeholders indebidos | Cada recurso integrado tiene archivo real asociado | Pendiente |
| 13 | FASE 3 — Integración editorial | Limpiar placeholders y notas internas | Crítica | Tarea 12 | Manuscrito maquetable | Texto limpio para compradores | No quedan marcas `[PENDIENTE]` salvo en documentos internos | Pendiente |
| 14 | FASE 3 — Integración editorial | Revisión técnica panadera | Crítica | Tarea 13 | Manuscrito y recursos | Contenido técnicamente aprobado | Aprobación capítulo por capítulo documentada | Pendiente |
| 15 | FASE 3 — Integración editorial | Revisión ortográfica y de estilo | Alta | Tarea 14 | Manuscrito | Texto final corregido | Sin errores evidentes y con voz PanaderIA™ consistente | Pendiente |
| 16 | FASE 3 — Integración editorial | Revisión legal preliminar | Alta | Tareas 11, 15 | Manuscrito, portada, web | Riesgos legales identificados | Claims, créditos, derechos y avisos revisados | Pendiente |
| 17 | FASE 4 — Maquetación y exportación | Maquetar versión PDF digital | Crítica | Tareas 15, 16 | Archivo maquetado | PDF digital de revisión | PDF abre correctamente, es legible y mantiene jerarquías | Pendiente |
| 18 | FASE 4 — Maquetación y exportación | Exportar PDF final digital | Crítica | Tarea 17 | PDF final | PDF comercial descargable | Archivo `.pdf` existe y pasa QA | Pendiente |
| 19 | FASE 4 — Maquetación y exportación | Exportar EPUB final | Alta | Tareas 15, 16 | EPUB final | EPUB comercial | Archivo `.epub` existe y pasa validación | Pendiente |
| 20 | FASE 4 — Maquetación y exportación | Preparar versión de impresión | Alta | Tareas 11, 17 | PDF/X o paquete impresión | Archivo listo para imprenta/KDP | Preflight sin errores críticos | Pendiente |
| 21 | FASE 5 — Validación profesional | Validar enlaces y QR | Crítica | Tareas 18-20 | PDF, EPUB, web, QR | Todos los destinos funcionan | 100% de enlaces y QR probados | Pendiente |
| 22 | FASE 5 — Validación profesional | Validar lectura en dispositivos | Alta | Tareas 18, 19 | PDF/EPUB | Lectura correcta en móvil, tablet y escritorio | No hay cortes, enlaces rotos ni navegación fallida | Pendiente |
| 23 | FASE 5 — Validación profesional | Prueba de impresión o preflight | Alta | Tarea 20 | Versión impresión | Impresión viable | Márgenes, sangrado, lomo y resolución aprobados | Pendiente |
| 24 | FASE 5 — Validación profesional | Prueba de compra y entrega | Crítica | Tareas 5, 18, 19 | Sitio/canal de venta | Flujo comercial validado | Usuario puede pagar, recibir y abrir archivos | Pendiente |
| 25 | FASE 5 — Validación profesional | Validación legal/comercial final | Crítica | Tareas 16, 24 | Venta, términos, producto | Producto vendible con riesgos controlados | Términos, derechos, precio y soporte aprobados | Pendiente |
| 26 | FASE 6 — Publicación y venta | Publicar página final de venta | Crítica | Tarea 25 | Sitio/canal oficial | Página pública lista | Página muestra oferta, precio, archivos y políticas correctas | Pendiente |
| 27 | FASE 6 — Publicación y venta | Publicar archivos finales | Crítica | Tareas 18, 19, 20, 26 | Canal de entrega | Producto disponible | Archivos finales son los correctos y descargables | Pendiente |
| 28 | FASE 6 — Publicación y venta | Activar campaña de lanzamiento | Alta | Tareas 26, 27 | Marketing/web | Lanzamiento operativo | Materiales comerciales aprobados y enlaces correctos | Pendiente |
| 29 | FASE 6 — Publicación y venta | Monitoreo postlanzamiento | Media | Tarea 28 | Soporte/analítica | Incidencias capturadas | Registro de ventas, errores, soporte y mejoras | Pendiente |
| 30 | FASE 6 — Publicación y venta | Congelar versión 1.0 comercial | Alta | Tareas 21-29 | Repositorio/producto | Baseline de lanzamiento | Versión, changelog y paquete final quedan identificados | Pendiente |

---

# Próximas 10 misiones exactas para Codex

## Orden obligatorio

1. **Misión 1:** Crear inventario automatizado de archivos reales del producto Bolillo A.I. y clasificar documentos, activos SVG, fotografías, videos, PDF, EPUB, QR y plataformas.
2. **Misión 2:** Auditar `LIBRO_MAESTRO_BOLILLO.md` y `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` para detectar diferencias, placeholders, QR pendientes, recursos pendientes y contradicciones de estado.
3. **Misión 3:** Crear matriz de decisión editorial para elegir manuscrito fuente de verdad y nombre comercial final, sin modificar contenido técnico.
4. **Misión 4:** Crear matriz de recursos visuales reales por capítulo usando solo archivos existentes y marcando faltantes.
5. **Misión 5:** Crear matriz de QR requeridos con ID, destino esperado, recurso asociado y estado real.
6. **Misión 6:** Crear checklist de producción de fotografías y videos faltantes por capítulo.
7. **Misión 7:** Preparar especificación de maquetación para PDF, EPUB e impresión usando identidad, portada y estilo ya documentados.
8. **Misión 8:** Auditar plataformas web existentes y recomendar cuál usar como canal comercial oficial, con faltantes de venta y entrega.
9. **Misión 9:** Crear checklist legal/comercial final: derechos, ISBN, código de barras, términos, privacidad, precio, reembolsos y soporte.
10. **Misión 10:** Ejecutar validación final pre-publicación una vez producidos e integrados PDF, EPUB, QR, portada y recursos.

## Misiones que pueden hacerse en paralelo

- Misión 4 puede ejecutarse en paralelo con Misión 5 después de completar Misión 1.
- Misión 6 puede ejecutarse en paralelo con Misión 8 después de completar Misión 2.
- Misión 9 puede ejecutarse en paralelo con Misión 7 después de completar Misión 3.

## Misiones que no deben comenzar hasta terminar otra

- Misión 2 no debe comenzar sin Misión 1.
- Misión 3 no debe comenzar sin Misión 2.
- Misión 7 no debe comenzar sin Misión 3.
- Misión 10 no debe comenzar hasta que existan los archivos finales PDF, EPUB, QR, portada y recursos integrados.

---

# Definición clara de “proyecto terminado”

Bolillo A.I. estará terminado únicamente cuando se cumplan todas estas condiciones:

1. Existe un manuscrito fuente final aprobado y sin contradicciones de nombre o estado.
2. No quedan placeholders, notas internas ni recursos marcados como pendientes dentro del producto vendido.
3. Existen archivos finales PDF y EPUB en el repositorio o paquete de entrega.
4. Existe versión de impresión validada si se venderá impresa.
5. Portada, lomo y contraportada existen como arte final exportable.
6. Fotografías, ilustraciones, diagramas, videos y QR usados en el producto existen como archivos reales o enlaces finales activos.
7. Todos los QR y enlaces funcionan y están registrados.
8. El contenido panadero fue revisado técnicamente.
9. Ortografía, estilo, maquetación y navegación fueron revisados.
10. Derechos, créditos, términos, privacidad, precio, soporte y canales de venta fueron aprobados.
11. La página de venta y el flujo de compra/descarga fueron probados de extremo a extremo.
12. La versión comercial queda congelada con número de versión y checklist final firmado.

---

# Checklist final de lanzamiento comercial

- [ ] Manuscrito fuente de verdad definido.
- [ ] Nombre comercial final definido.
- [ ] Contenido técnico validado.
- [ ] Ortografía y estilo revisados.
- [ ] Recursos visuales finales seleccionados.
- [ ] Fotografías finales producidas o ausencia justificada.
- [ ] Videos finales producidos o ausencia justificada.
- [ ] QR generados, probados y registrados.
- [ ] Portada frontal final exportada.
- [ ] Lomo final calculado y exportado.
- [ ] Contraportada final exportada.
- [ ] ISBN/código de barras resuelto si aplica.
- [ ] PDF digital final exportado y probado.
- [ ] EPUB final exportado y validado.
- [ ] Versión de impresión final validada si aplica.
- [ ] Página de venta final publicada o lista para publicar.
- [ ] Flujo de compra probado.
- [ ] Flujo de descarga probado.
- [ ] Términos, privacidad, reembolsos y soporte publicados.
- [ ] Derechos de marca y recursos revisados.
- [ ] Precio, moneda e impuestos definidos.
- [ ] Emails o mensajes de entrega revisados.
- [ ] Materiales de lanzamiento revisados.
- [ ] Versión 1.0 comercial congelada.
- [ ] Responsable de soporte postventa definido.
- [ ] Registro de incidencias postlanzamiento preparado.

---

## Nota final de auditoría

Este plan no considera como terminado ningún recurso que solo esté mencionado en documentos. La prioridad inmediata no es agregar contenido técnico nuevo, sino consolidar fuentes, producir o validar recursos reales, integrar lo existente, exportar formatos finales y ejecutar pruebas comerciales antes de vender.
