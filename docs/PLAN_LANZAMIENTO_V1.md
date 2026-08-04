# Plan maestro de lanzamiento — Bolillo A.I. v1.0

**Fecha de corte:** 2026-08-03
**Horizonte recomendado:** 16 semanas de ejecución + 2 semanas de contingencia
**Estado:** plan propuesto; sujeto a aprobación ejecutiva
**Fuente de diagnóstico:** árbol actual y `docs/AUDITORIA_INICIAL.md`

## 1. Resumen ejecutivo

Bolillo A.I. v1.0 debe lanzarse como un producto educativo digital coherente y vendible, no como la suma de todos los conceptos presentes en el repositorio. La versión mínima comercial recomendada incluye: libro digital final en PDF, curso de 14 módulos con recursos esenciales, experiencia web de venta y entrega, identidad de Chef Juanote y Boly aprobada, QR estables, controles legales, analítica mínima y soporte postcompra.

El repositorio dispone de una base editorial extensa, una aplicación Next.js funcional como demostración, sistemas de marca y calidad, 54 PNG de Boly y 328 SVG. Sin embargo, todavía no demuestra una entrega comercial completa: faltan los documentos e inventarios de entrada solicitados, foto oficial de Chef Juanote, imagen maestra aprobada de Boly en la ruta oficial, PDF/EPUB finales, videos binarios, pasarela real, autenticación real y evidencia de cierre legal. También coexisten siete variantes/copias del libro y cuatro implementaciones web o de plataforma.

La estrategia recomendada es **cerrar primero gobierno, producto y derechos; después producir; finalmente integrar, probar y lanzar**. Ninguna tarea de producción debe comenzar a escala antes de aprobar la fuente canónica, el alcance comercial y el inventario. Los bloqueos P0 deben resolverse en las primeras dos semanas.

## 2. Estado actual

### 2.1 Activos aprovechables

- `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` está declarado como fuente primaria y fue validado estructuralmente para conversión.
- Existe un mapa de autoridad documental, biblias técnicas por proceso, guía editorial, identidad de marca, mapa canónico de 14 capítulos y controles de calidad.
- La aplicación vigente usa Next.js y expone rutas comerciales, de alumno, biblioteca, videos, certificados y QR en estado demostrativo.
- Existen recursos textuales descargables, estructuras de curso, guiones y catálogos multimedia.
- Hay 54 PNG de Boly y 328 SVG estructuralmente válidos, aunque falta aprobar su autoridad y uso.

### 2.2 Brechas de lanzamiento

- No existen las rutas exactas `AGENTS.md`, `PROYECTO.md`, `ROADMAP.md`, `docs/PERSONAJES.md` ni los cuatro inventarios solicitados; este plan registra esa ausencia y no presume su contenido.
- No existe PDF, EPUB ni paquete de impresión terminado.
- No existen archivos de video finales; los HTML y guiones actuales no son entregables audiovisuales.
- No existe fotografía oficial de Chef Juanote y la versión maestra oficial de Boly no está en `public/assets/boly/version-oficial/`.
- V1, V2, V3 release, `WEB_PANADERIA_V1` y la aplicación Next.js actual conviven sin decisión comercial formal sobre el canal vigente.
- Pagos, autenticación, entrega protegida y Boly con IA están documentados o simulados, no operativos de extremo a extremo.
- No consta cierre de derechos, privacidad, términos, reembolsos, precio, impuestos, soporte ni claims.

### 2.3 Principios de ejecución

1. Una fuente canónica por dominio.
2. Ningún placeholder se presenta como producto final.
3. Fuente, exportable y snapshot histórico se distinguen por manifiesto y versión.
4. Ningún activo se publica sin derecho, aprobación, versión y responsable.
5. La compra, entrega y recuperación de acceso se prueban como cliente real.
6. El alcance se congela al entrar en release candidate.

## 3. Objetivos de Bolillo A.I. v1.0

1. Vender y entregar de forma confiable una edición digital del Libro Maestro del Bolillo bajo el nombre comercial **Bolillo A.I. v1.0**.
2. Ofrecer una ruta pedagógica consistente de 14 módulos con materiales esenciales y trazabilidad a las fuentes técnicas.
3. Publicar una web accesible, responsiva, rápida y medible con flujo completo de compra, acceso, descarga y soporte.
4. Presentar identidades oficiales y coherentes de Chef Juanote y Boly, con derechos documentados.
5. Garantizar que enlaces, QR, descargas y comunicaciones transaccionales sean estables.
6. Cumplir requisitos legales y comerciales del mercado objetivo antes de cobrar.
7. Establecer observabilidad, copias de seguridad, respuesta a incidentes y métricas básicas del negocio.

## 4. Alcance de v1.0

### 4.1 Producto editorial

- Manuscrito canónico aprobado, corregido y congelado.
- Portada y contraportada digitales definitivas.
- PDF accesible, optimizado y probado en escritorio y móvil.
- Índice navegable, enlaces, metadatos, aviso legal y número de versión.
- Recursos descargables esenciales asociados a los 14 módulos.

### 4.2 Curso y multimedia mínima

- Estructura de 14 módulos alineada al mapa canónico.
- Objetivo, lección, práctica, criterio de calidad y recurso por módulo.
- Videos solo para procesos que realmente los necesiten y puedan producirse con calidad; si no están listos al congelar alcance, el módulo se entrega sin prometerlos.
- Subtítulos/transcripción, miniatura y derechos para cada video incluido.
- QR dinámicos o URLs controladas únicamente hacia recursos existentes.

### 4.3 Web y comercio

- Inicio, página de producto, temario, autor, Boly, preguntas frecuentes, contacto y páginas legales.
- Checkout real con un proveedor aprobado, confirmación y manejo seguro de webhooks.
- Acceso autenticado o mecanismo seguro equivalente para descargar el producto.
- Correos de compra, acceso, recuperación, soporte y reembolso.
- Analítica de visitas, conversión, compra, descarga y errores sin recolectar datos innecesarios.

### 4.4 Marca y personajes

- Nombre comercial, descriptor editorial y convivencia de marcas aprobados.
- Foto oficial de Chef Juanote con autorización de uso.
- Imagen maestra de Boly y conjunto mínimo de poses aprobado.
- Reglas de voz, tamaños, fondos, créditos y usos prohibidos.
- Boly como personaje/asistente contextual con respuestas o contenido controlado; la IA generativa no es requisito de v1.0.

### 4.5 Operación, legal y calidad

- Precio, moneda, impuestos, política de reembolso y canal de soporte definidos.
- Términos, privacidad, cookies, licencias, propiedad intelectual y consentimiento aprobados para el mercado objetivo.
- Pruebas funcionales, editoriales, técnicas, de accesibilidad, seguridad y recuperación.
- Runbook de lanzamiento, rollback, monitoreo y atención postcompra.

## 5. Fuera de alcance de v1.0

- Entrenamiento o fine-tuning de un modelo propio.
- Chat generativo abierto de Boly con diagnóstico autónomo.
- Aplicaciones móviles nativas.
- Marketplace, comunidad social, afiliados o gamificación avanzada.
- Multidioma, múltiples monedas o expansión internacional no requerida por el mercado inicial.
- Suscripciones, membresías complejas o múltiples niveles dinámicos de acceso.
- Panel administrativo completo; se aceptan procedimientos operativos seguros y acotados.
- Certificación con acreditación externa o validez oficial no contratada.
- Automatizaciones avanzadas de marketing, CRM o analítica predictiva.
- Impresión bajo demanda y distribución física, salvo que se aprueben presupuesto, proveedor y prueba física antes del cierre de alcance.
- EPUB, audio libro y biblioteca completa de videos si comprometen el lanzamiento del PDF y curso esencial.
- Migración o reorganización integral del repositorio; deberá ser un proyecto posterior y reversible.

## 6. Prioridades

| Prioridad | Definición | Elementos |
|---|---|---|
| P0 | Bloquea venta o puede causar daño legal/técnico | Fuente canónica, inventario, derechos, contenido técnico, checkout, entrega, seguridad, privacidad, producto real |
| P1 | Necesario para experiencia comercial aceptable | Diseño final, accesibilidad, recursos esenciales, QR, emails, analítica, soporte, QA multidispositivo |
| P2 | Mejora conversión o eficiencia sin bloquear | Videos adicionales, EPUB, automatizaciones, experimentos de landing, recursos extra |
| P3 | Posterior a v1.0 | IA abierta, apps nativas, comunidad, marketplace, expansión internacional |

## 7. Dependencias maestras

| Dependencia | Habilita | Responsable sugerido | Condición de salida |
|---|---|---|---|
| Patrocinador decide oferta y mercado | Alcance, precio, legal y copy | Dirección | Acta de decisión aprobada |
| Autoridad e inventario canónicos | Toda producción | Product owner + documentación | Manifiesto versionado y responsables |
| Validación de Chef Juanote | Libro, curso y claims | Dirección técnica | Dictamen firmado sin P0 |
| Derechos de marca y activos | Publicación y campañas | Legal + marca | Registro de licencias/autorizaciones |
| Manuscrito congelado | Maquetación y exportación | Editorial | Hash y versión RC |
| Activos finales | Libro, web y videos | Dirección de arte | Paquete aprobado y trazable |
| Proveedor de pagos/hosting/email | Comercio | Tecnología + operaciones | Cuentas productivas y pruebas sandbox |
| URLs definitivas | QR e impresos | Tecnología | Dominio, redirecciones y monitoreo |
| Políticas comerciales | Checkout y soporte | Legal + negocio | Textos publicados y proceso operativo |

## 8. Fases, tiempos y criterios de aceptación

Los tiempos suponen un equipo mínimo de product owner, editor, especialista técnico panadero, diseñador, desarrollador web/QA y asesor legal parcial. Varias actividades pueden solaparse solo después de cumplir sus dependencias.

### Fase 0 — Decisiones ejecutivas y gobierno (semana 1; 5 días)

**Trabajo**

- Nombrar responsables y matriz RACI.
- Aprobar mercado inicial, audiencia, propuesta de valor, formato y nombre comercial.
- Declarar canal web vigente; marcar las demás implementaciones como referencias, sin moverlas.
- Recuperar o declarar inexistentes los documentos de entrada faltantes.
- Aprobar definición de terminado, control de cambios y cadencia de seguimiento.

**Criterios de aceptación**

- Hay un responsable único de producto y uno por aprobación técnica, editorial, legal, visual y tecnológica.
- Oferta, mercado, precio preliminar y fuera de alcance constan por escrito.
- Se identifica una sola aplicación candidata a producción.
- Todo faltante documental tiene dueño, fecha y decisión de recuperar o sustituir.

### Fase 1 — Inventario y autoridad (semana 1–2; 7 días)

**Trabajo**

- Crear inventario reproducible con ruta, tipo, tamaño, hash, estado, autoridad, derechos y uso.
- Registrar las siete variantes/copias del libro y decidir su relación.
- Clasificar plataformas, recursos, placeholders y snapshots sin borrar ni consolidar.
- Crear matrices por capítulo: fuente técnica → manuscrito → recurso → video/QR.

**Criterios de aceptación**

- El 100 % de entregables candidatos tiene ID, versión, estado y dueño.
- Hay una única fuente canónica declarada para libro, curso, marca, personajes y aplicación.
- Ningún duplicado P0 queda sin clasificación.
- Los faltantes se convierten en backlog priorizado, no en supuestos.

### Fase 2 — Definición comercial y legal (semana 2–3; 8 días)

**Trabajo**

- Definir SKU, contenidos exactos, precio, impuestos, licencias, soporte y reembolsos.
- Aprobar titularidad y uso de Bolillo A.I., PanaderIA, Chef Juanote y Boly.
- Auditar derechos de fotos, ilustraciones, tipografías, música, voz y textos.
- Redactar términos, privacidad, cookies, aviso legal y claims.

**Criterios de aceptación**

- Existe ficha comercial sin promesas no comprobables.
- Cada activo publicable tiene autorización o licencia verificable.
- Políticas y textos legales están aprobados para jurisdicción y mercado elegidos.
- No quedan bloqueos legales P0 antes de producción final.

### Fase 3 — Cierre técnico y editorial (semana 2–5; 15 días)

**Trabajo**

- Comparar el manuscrito canónico con biblias especializadas.
- Validar fórmulas, porcentajes, temperaturas, tiempos, seguridad alimentaria y diagnóstico.
- Corregir ortografía, estilo, estructura, terminología y consistencia de 14 capítulos.
- Eliminar del exportable final instrucciones internas y promesas de recursos inexistentes.
- Congelar `1.0.0-rc.1` con hash, historial y aprobación.

**Criterios de aceptación**

- Cero contradicciones técnicas P0 y cero marcadores editoriales visibles.
- Los 14 capítulos tienen objetivo, práctica y criterio de éxito.
- Índice, referencias, tablas y nomenclatura son consistentes.
- Técnico y editorial firman la misma versión identificada por hash.

### Fase 4 — Identidad visual y personajes (semana 3–5; 10 días)

**Trabajo**

- Producir/aprobar portada, contraportada y sistema visual digital.
- Incorporar foto autorizada de Chef Juanote.
- Elegir o producir imagen maestra oficial y paquete mínimo de Boly.
- Validar resolución, contraste, accesibilidad, licencias y consistencia.

**Criterios de aceptación**

- Portada funciona a tamaño completo y miniatura.
- Chef Juanote y Boly tienen archivos maestros, versión, derechos y responsable.
- No se usa placeholder en ninguna superficie de cliente.
- Los activos superan revisión visual y técnica en web y PDF.

### Fase 5 — Producción del libro y recursos (semana 5–7; 10 días)

**Trabajo**

- Maquetar PDF, integrar figuras y recursos aprobados.
- Generar índice, marcadores, metadatos, enlaces y texto alternativo.
- Preparar descargables esenciales con identidad y versión.
- Ejecutar preflight y prueba en dispositivos.

**Criterios de aceptación**

- PDF abre sin errores, es legible en móvil/escritorio y no contiene enlaces rotos.
- Cada descargable coincide con el capítulo y fórmula vigente.
- Todas las imágenes tienen calidad suficiente y uso autorizado.
- El paquete final tiene manifiesto, hashes y versión RC.

### Fase 6 — Curso, video y QR (semana 4–8; 15 días)

**Trabajo**

- Completar la unidad mínima de los 14 módulos.
- Producir solo los videos comprometidos; editar, subtitular y comprimir.
- Definir destinos estables, generar QR y registrar pruebas.
- Implementar página de contingencia para destinos no disponibles.

**Criterios de aceptación**

- Los 14 módulos están completos según la ficha pedagógica aprobada.
- Cada video incluido tiene guion técnico validado, subtítulos y derechos.
- El 100 % de QR resuelve por HTTPS al recurso correcto y tiene propietario.
- Ningún QR apunta a demo, localhost, archivo inexistente o URL sin control.

### Fase 7 — Web comercial y entrega (semana 5–10; 20 días)

**Trabajo**

- Convertir la aplicación elegida de demo a producto comercial.
- Conectar dominio, hosting, autenticación, proveedor de pagos y correo.
- Implementar checkout, confirmación, acceso, descarga, recuperación y reembolso.
- Publicar contenido, FAQ, soporte y páginas legales.
- Proteger secretos, webhooks, archivos de cliente y datos personales.

**Criterios de aceptación**

- Una compra sandbox completa crea/actualiza acceso una sola vez y envía comprobante.
- Pagos fallidos, duplicados, reembolsos y reintentos tienen comportamiento definido.
- Un usuario autorizado descarga; uno no autorizado no puede hacerlo.
- No existen credenciales, demos, TODO críticos ni enlaces de localhost visibles.
- Rendimiento, SEO básico, responsividad y accesibilidad cumplen el umbral acordado.

### Fase 8 — Analítica, soporte y operación (semana 8–10; 8 días)

**Trabajo**

- Definir embudo y eventos mínimos con consentimiento.
- Configurar monitoreo de disponibilidad, errores, pagos, emails, descargas y QR.
- Crear runbooks de soporte, incidentes, reembolsos, respaldo y restauración.
- Entrenar a soporte y asignar horarios/SLA.

**Criterios de aceptación**

- Se puede medir visita → checkout → compra → acceso → descarga sin exponer datos sensibles.
- Alertas críticas llegan a una persona responsable y se ensayan.
- Una restauración de respaldo y un reembolso se ejecutan en ambiente de prueba.
- FAQ, macros y escalamiento cubren los casos principales.

### Fase 9 — QA integral y seguridad (semana 10–12; 10 días)

**Trabajo**

- Revisar contenido, enlaces, QR, dispositivos, navegadores, accesibilidad y SEO.
- Probar autorización, sesiones, webhooks, rate limiting, headers y manejo de errores.
- Ejecutar compras, descargas, correos, reembolsos y restauración.
- Resolver todos los defectos P0/P1 y repetir regresión.

**Criterios de aceptación**

- Cero defectos P0/P1 abiertos; P2 aceptados tienen dueño y fecha.
- El 100 % de checks de compra, acceso, descarga y QR pasa en producción candidata.
- Existe evidencia de pruebas en móvil, escritorio y navegadores objetivo.
- Legal, editorial, técnica, producto y tecnología emiten go/no-go documentado.

### Fase 10 — Beta controlada (semana 13; 5 días)

**Trabajo**

- Invitar 10–25 usuarios representativos con consentimiento.
- Observar comprensión, compra, acceso, lectura, recursos y soporte.
- Medir incidencias y corregir únicamente bloqueos o claridad crítica.

**Criterios de aceptación**

- Al menos 90 % completa acceso y descarga sin ayuda manual.
- Ningún participante encuentra un error técnico o de seguridad alimentaria P0.
- Incidencias P0/P1 están cerradas y regresionadas.
- La propuesta de valor y expectativas coinciden con lo entregado.

### Fase 11 — Release candidate y lanzamiento (semana 14; 5 días)

**Trabajo**

- Congelar `1.0.0-rc`, generar manifiesto y respaldo.
- Ensayar lanzamiento, rollback, comunicación y soporte.
- Abrir ventas de forma gradual, monitorear y confirmar estabilidad.
- Etiquetar `1.0.0-final` solo tras aprobación conjunta.

**Criterios de aceptación**

- Manifiesto final enumera exactamente archivos, hashes, URLs y versiones.
- Backup, rollback y responsables de guardia están confirmados.
- Primeras compras reales completan pago, acceso y entrega sin intervención.
- Métricas y alertas se observan durante la ventana acordada.

### Fase 12 — Estabilización (semanas 15–16; 10 días)

**Trabajo**

- Atender incidencias, reembolsos y preguntas frecuentes.
- Corregir solo parches compatibles y documentados.
- Comparar métricas con objetivos y priorizar v1.0.1/v1.1.
- Celebrar retrospectiva y cerrar documentación operativa.

**Criterios de aceptación**

- Incidencias críticas cumplen el SLA y no hay pérdida de acceso o datos.
- Cada parche tiene versión, prueba, aprobación y registro.
- Se publica informe de lanzamiento con conversión, fallos, soporte y aprendizajes.
- Backlog posterior está priorizado sin reabrir el alcance de v1.0.

## 9. Orden recomendado de ejecución

1. Nombrar responsables y aprobar oferta/mercado.
2. Recuperar o sustituir formalmente documentos e inventarios faltantes.
3. Declarar fuentes canónicas y clasificar variantes/snapshots.
4. Cerrar derechos, claims, políticas y modelo comercial.
5. Validar y congelar manuscrito y curso.
6. Aprobar identidad de Chef Juanote, Boly y portada.
7. Producir PDF, descargables y multimedia comprometida.
8. Estabilizar URLs y QR.
9. Integrar checkout, autenticación, entrega y emails.
10. Configurar analítica, soporte, seguridad y recuperación.
11. Ejecutar QA integral y beta controlada.
12. Congelar release, lanzar gradualmente y estabilizar.

## 10. Cronograma y capacidad

| Tramo | Semanas | Resultado |
|---|---:|---|
| Gobierno y producto | 1–3 | Alcance, autoridad, inventario, oferta y legal encaminados |
| Cierre de contenido y marca | 2–5 | Manuscrito RC, personajes y sistema visual aprobados |
| Producción | 4–8 | PDF, recursos, módulos, videos seleccionados y QR |
| Integración comercial | 5–10 | Web, pagos, acceso, descarga, correo y legal publicados |
| Operación y QA | 8–12 | Monitoreo, soporte, seguridad y regresión |
| Beta y lanzamiento | 13–14 | Evidencia real, release candidate y salida gradual |
| Estabilización | 15–16 | Parches, métricas y retrospectiva |
| Reserva | 17–18 | Contingencia para derechos, proveedores o producción |

Reducir el equipo o incluir impresión, EPUB y video completo requiere ampliar el plazo. No se recomienda comprimir las fases de validación técnica, legal, checkout o seguridad.

## 11. Métricas de éxito y puerta de lanzamiento

### Producto

- 100 % de capítulos y recursos comprometidos aprobados.
- 100 % de enlaces y QR probados.
- 0 placeholders o marcas internas en superficies de cliente.

### Comercio y operación

- ≥99 % de transacciones de prueba procesadas según resultado esperado.
- ≥95 % de entregas de email de prueba aceptadas por el proveedor.
- ≥90 % de beta completa acceso y descarga sin asistencia.
- Monitoreo y respuesta de P0 ensayados.

### Puerta go/no-go

El lanzamiento es **no-go** si existe cualquier P0: contradicción técnica, derecho no probado, checkout/entrega insegura, pérdida de datos, QR crítico roto, producto inexistente, secreto expuesto o política legal pendiente. Un P1 solo puede aceptarse por decisión escrita de producto, legal y responsable del área, con mitigación y fecha.

## 12. Control de cambios

- Toda adición tras congelar alcance debe indicar valor, costo, riesgo y desplazamiento de fecha.
- El product owner puede rechazar cambios que no resuelvan P0/P1.
- Cada release conserva manifiesto, hash, historial y aprobaciones.
- Los materiales finales no se sobrescriben: los cambios generan una nueva versión.
