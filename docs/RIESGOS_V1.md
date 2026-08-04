# Registro de riesgos — Bolillo A.I. v1.0

**Fecha de corte:** 2026-08-03
**Estado:** evaluación inicial para planificación; debe asignarse dueño y revisarse semanalmente.
**Escala:** impacto y probabilidad de 1 (bajo) a 5 (crítico/muy probable). Exposición = impacto × probabilidad.

## 1. Criterio de prioridad

| Prioridad | Exposición o condición | Tratamiento |
|---|---|---|
| P0 | 20–25, o bloqueo legal/seguridad/contenido/pago | No lanzar; actuar inmediatamente |
| P1 | 12–19 | Mitigar antes de release candidate |
| P2 | 6–11 | Mitigar o aceptar por escrito con contingencia |
| P3 | 1–5 | Vigilar y gestionar en backlog |

## 2. Riesgos críticos inmediatos

1. **Gobierno incompleto:** faltan siete de las nueve fuentes solicitadas para esta misión, incluidos cuatro inventarios.
2. **Producto final ausente:** no hay PDF/EPUB/video final aunque el ecosistema los describe.
3. **Identidad incompleta:** no hay foto oficial de Chef Juanote ni maestro oficial aprobado de Boly en la ruta declarada.
4. **Múltiples fuentes:** existen siete versiones/copias del libro y varias plataformas.
5. **Comercio simulado:** pagos, autenticación y entrega no constan como flujo real de extremo a extremo.
6. **Cierre legal no demostrado:** derechos, políticas y claims carecen de evidencia final.

## 3. Matriz detallada

| ID | Categoría y riesgo | Impacto | Prob. | Exposición | Prioridad | Recomendación |
|---|---|---:|---:|---:|---|---|
| R-01 | **Inventarios incompletos:** no existen `INVENTARIO_CODEX`, `ASSETS`, `APP` ni `PUBLIC` | 5 | 5 | 25 | P0 | Generar inventario reproducible con hash, tipo, estado, autoridad, derechos y dueño antes de producir |
| R-02 | **Documentos rectores solicitados ausentes:** `AGENTS.md`, `PROYECTO.md`, `ROADMAP.md`, `docs/PERSONAJES.md` | 4 | 5 | 20 | P0 | Recuperar fuente original o emitir decisión formal de sustitución; no asumir equivalencias por nombre |
| R-03 | **Versiones múltiples del libro:** cuatro manuscritos raíz y tres descargas | 5 | 4 | 20 | P0 | Declarar fuente canónica, mapa de derivación, hashes y estado; bloquear edición de copias de distribución |
| R-04 | **Duplicados confirmados:** 30 grupos/68 archivos, incluida copia V2/V3 | 3 | 5 | 15 | P1 | Clasificar cada grupo; no borrar automáticamente; declarar snapshot, generado o compartido |
| R-05 | **Coincidencias de nombre:** 164 nombres en 728 archivos pueden ocultar conflictos semánticos | 4 | 4 | 16 | P1 | Resolver por ruta, función, hash y autoridad, nunca solo por nombre |
| R-06 | **Plataformas superpuestas:** V1, V2, V3 release, WEB V1 y app actual | 5 | 4 | 20 | P0 | Elegir una aplicación de producción; congelar las demás como referencia mediante registro, sin sincronización manual |
| R-07 | **Rutas de activos divergentes:** regla oficial en `public/assets`, recursos reales en `public/boly` y biblioteca visual | 5 | 4 | 20 | P0 | Crear manifiesto ruta lógica → activo aprobado → consumidores; probar antes de cambiar cualquier referencia |
| R-08 | **Rutas/URLs frágiles:** errores y caracteres especiales en nombres | 4 | 3 | 12 | P1 | Mantener compatibilidad, añadir mapa de alias/redirección al implementar y validar URLs en sistemas objetivo |
| R-09 | **QR rotos o provisionales:** no existe paquete final probado | 5 | 4 | 20 | P0 | Usar URLs controladas, registro por ID, redirecciones y monitoreo; probar impreso en iOS/Android |
| R-10 | **PDF inexistente:** el manuscrito es convertible, pero no producto final | 5 | 5 | 25 | P0 | Cerrar contenido, maquetar, exportar, hacer preflight y registrar hash antes de vender |
| R-11 | **EPUB/impresión inexistentes:** podrían prometerse sin entregable | 4 | 4 | 16 | P1 | Sacarlos del SKU v1.0 o asignar producción y QA específicos con fecha realista |
| R-12 | **Videos inexistentes:** guiones/HTML no son multimedia final | 5 | 5 | 25 | P0 si se prometen | Reducir lista a videos esenciales, producir con subtítulos/derechos o eliminar la promesa |
| R-13 | **Foto oficial de Chef Juanote faltante** | 5 | 5 | 25 | P0 | Obtener archivo autorizado, model release, derivados y aprobación antes de portada/campaña |
| R-14 | **Boly sin maestro oficial:** renders fuera de ruta y placeholder en ruta oficial | 4 | 5 | 20 | P0 | Aprobar un maestro y paquete mínimo, documentar derechos y excluir placeholder de cliente |
| R-15 | **Imágenes no revisadas visualmente:** validación estructural no garantiza pertinencia/calidad | 4 | 4 | 16 | P1 | Hacer revisión humana al 100 %, resolución, transparencia, marca, exactitud y accesibilidad |
| R-16 | **Contradicciones técnicas entre biblias, módulos, libro y recursos** | 5 | 3 | 15 | P1 | Matriz por capítulo y dictamen del especialista; cero contradicciones P0 al congelar |
| R-17 | **Seguridad alimentaria/alérgenos incorrectos o incompletos** | 5 | 3 | 15 | P1 | Revisión profesional y legal de inocuidad, temperaturas, conservación, sustituciones y alérgenos |
| R-18 | **Pendientes editoriales visibles:** notas internas, placeholders o claims de recursos futuros | 4 | 4 | 16 | P1 | Búsqueda automatizada + lectura humana del exportable; congelar solo versión limpia |
| R-19 | **Ortografía/terminología inconsistente** | 3 | 4 | 12 | P1 | Corrección profesional y glosario; repetir después de maquetación |
| R-20 | **Maquetación deficiente en móvil o impresión** | 4 | 3 | 12 | P1 | Plantilla profesional, prueba multidispositivo y preflight; prueba física si se vende impreso |
| R-21 | **Recursos descargables contradicen el libro** | 5 | 3 | 15 | P1 | Versionar conjuntamente; revisar fórmula, tablas y proceso contra el mismo hash fuente |
| R-22 | **Pagos solo preparados/simulados** | 5 | 5 | 25 | P0 | Seleccionar proveedor, usar entorno sandbox, verificar firmas/idempotencia/reembolsos y luego producción gradual |
| R-23 | **Autenticación/acceso solo visual o incompleto** | 5 | 5 | 25 | P0 | Implementar control servidor, recuperación y pruebas de autorización; no confiar en ocultamiento de UI |
| R-24 | **Descargas privadas expuestas en `public/`** | 5 | 4 | 20 | P0 | Entrega autorizada con URLs caducables o servidor; probar acceso anónimo y filtración por caché |
| R-25 | **Webhooks duplican acceso/pedidos** | 5 | 3 | 15 | P1 | Validar firma, idempotencia, reintentos y conciliación; alertar inconsistencias |
| R-26 | **Secretos o datos sensibles expuestos** | 5 | 3 | 15 | P1 | Inventario de secretos, almacenamiento seguro, mínimo privilegio, escaneo y rotación |
| R-27 | **Dependencias vulnerables o build no reproducible** | 4 | 3 | 12 | P1 | Confirmar lockfile, CI limpio, auditoría de dependencias y proceso de parcheo; no versionar `node_modules` |
| R-28 | **Accesibilidad insuficiente** | 4 | 3 | 12 | P1 | Auditar teclado, foco, contraste, formularios, alternativas y subtítulos en flujos críticos |
| R-29 | **Rendimiento pobre por activos pesados** | 3 | 4 | 12 | P1 | Presupuestos de página, optimización de imágenes/video, CDN y pruebas móviles |
| R-30 | **Fallo de proveedor de hosting/pagos/email/video** | 5 | 3 | 15 | P1 | SLA, alertas, exportación de datos, contingencia manual y responsables/contactos |
| R-31 | **Ausencia de respaldos/restauración ensayada** | 5 | 3 | 15 | P1 | Backups automatizados cifrados y simulacro de restauración antes del lanzamiento |
| R-32 | **Derechos no demostrados:** marca, personajes, fotos, música, voz, fuentes | 5 | 4 | 20 | P0 | Registro de activos y licencias; bloquear todo elemento sin cadena de derechos |
| R-33 | **Privacidad/términos/reembolsos incompletos** | 5 | 4 | 20 | P0 | Asesoría para mercado objetivo; publicar y probar consentimiento/solicitudes antes de cobrar |
| R-34 | **Claims comerciales engañosos o certificación ambigua** | 5 | 3 | 15 | P1 | Sustentar claims, eliminar garantías absolutas y aclarar naturaleza de certificado |
| R-35 | **Precio, impuestos o SKU no definidos** | 5 | 4 | 20 | P0 | Ficha comercial única, revisión fiscal y conciliación con checkout/copy/email |
| R-36 | **Nombre comercial inconsistente:** Bolillo A.I. vs Libro Maestro del Bolillo | 4 | 4 | 16 | P1 | Arquitectura de marca y descriptor único en portada, URL, producto, comprobante y archivos |
| R-37 | **Oferta promete más que la entrega** | 5 | 4 | 20 | P0 | Matriz promesa → evidencia; retirar videos, IA, EPUB o certificación no terminados |
| R-38 | **Boly se anuncia como IA real sin serlo** | 4 | 4 | 16 | P1 | Definirlo como personaje/asistente contextual en v1.0 o implementar y probar alcance limitado explícito |
| R-39 | **Conversión baja por propuesta confusa** | 4 | 3 | 12 | P1 | Pruebas con usuarios, página enfocada, muestras honestas, FAQ y medición de embudo |
| R-40 | **Fraude, contracargos o abuso de descargas** | 4 | 3 | 12 | P1 | Herramientas antifraude proporcionales, logs, límites de descarga y procedimiento de disputa |
| R-41 | **Soporte insuficiente en lanzamiento** | 4 | 4 | 16 | P1 | SLA, FAQ, macros, guardia, escalamiento y capacidad para primeras 72 horas |
| R-42 | **No hay observabilidad de compra/entrega/QR** | 5 | 4 | 20 | P0 | Eventos mínimos, monitoreo, alertas y dashboard con dueño antes de ventas |
| R-43 | **Lanzamiento big-bang sin beta** | 5 | 3 | 15 | P1 | Beta de 10–25 usuarios, corrección P0/P1 y apertura gradual |
| R-44 | **Cambios tardíos rompen versión congelada** | 4 | 4 | 16 | P1 | Freeze, control de cambios, branch/tag de release y regresión obligatoria |
| R-45 | **No existe rollback operativo** | 5 | 3 | 15 | P1 | Runbook, backup, artefacto previo y ensayo de reversión |
| R-46 | **Archivo de auditoría >2 MiB dificulta revisión** | 2 | 4 | 8 | P2 | Tratarlo como reporte generado/referencia; evitar mezclarlo en revisiones operativas |
| R-47 | **`node_modules` local (~424 MiB) contamina copias/escaneos** | 2 | 4 | 8 | P2 | Mantenerlo ignorado y regenerable; excluirlo de inventarios y respaldos de contenido |
| R-48 | **Capacidad/plazo subestimados para PDF + curso + web + multimedia** | 5 | 4 | 20 | P0 | Congelar MVP, asegurar responsables, reservar 2 semanas y recortar EPUB/impresión/video antes de calidad |

## 4. Riesgos por dimensión

### 4.1 Duplicados y versiones

El mayor peligro no es el espacio ocupado, sino que una copia secundaria se edite o distribuya como oficial. La deduplicación física no es requisito de v1.0 y puede destruir snapshots útiles. La mitigación correcta es autoridad, manifiesto, hash, derivación y etiquetas de estado.

### 4.2 Inventarios y rutas

Sin inventario reproducible no se puede demostrar completitud ni detectar un cambio accidental. Las rutas actuales mezclan ubicación oficial declarada con recursos reales en ubicaciones distintas. Antes de modificar rutas se requiere mapa de consumidores, compatibilidad y prueba de QR/web/PDF.

### 4.3 Recursos faltantes

El PDF, videos, foto de Chef Juanote e imagen maestra de Boly son faltantes materiales, no defectos documentales. Un README, brief, guion, HTML o placeholder no satisface el entregable. Si no se produce a tiempo, debe retirarse explícitamente de la oferta.

### 4.4 Riesgos técnicos

Los puntos de mayor exposición son autorización, descarga privada, webhooks, secretos, observabilidad y recuperación. La aplicación demostrativa no debe abrir ventas hasta superar pruebas de extremo a extremo en un entorno productivo candidato.

### 4.5 Riesgos editoriales

La validación estructural para exportación no sustituye validación técnica, corrección, maquetación ni revisión postexportación. Toda fórmula y recurso debe corresponder a una versión congelada y aprobada por el responsable técnico.

### 4.6 Riesgos comerciales y legales

El nombre, precio, SKU, derechos, claims, privacidad, términos, impuestos y reembolsos forman parte del producto. Publicar sin ellos puede causar reclamaciones, contracargos, retiro de contenido o daño de marca.

### 4.7 Riesgos de lanzamiento

La salida debe ser gradual, con beta, guardia, alertas, rollback y capacidad de soporte. El éxito inicial se mide primero por compra, acceso y entrega confiables, no por volumen de funciones.

## 5. Plan de tratamiento inmediato (primeros 10 días)

| Orden | Acción | Riesgos cubiertos | Evidencia de cierre |
|---:|---|---|---|
| 1 | Nombrar product owner y responsables de aprobación | R-02, R-06, R-44, R-48 | RACI y acta de alcance |
| 2 | Generar inventario y declarar fuentes canónicas | R-01–R-07 | Manifiesto con hashes/estados |
| 3 | Aprobar SKU, promesa, formato, mercado y fuera de alcance | R-11, R-12, R-35–R-39 | Ficha comercial única |
| 4 | Iniciar cierre legal y cadena de derechos | R-13–R-15, R-32–R-34 | Registro legal y bloqueos visibles |
| 5 | Planificar cierre técnico/editorial y producción mínima | R-10, R-16–R-21, R-48 | Calendario por capítulo y entregable |
| 6 | Elegir aplicación/proveedores y diseñar flujo de entrega | R-22–R-31 | Arquitectura y pruebas de aceptación |

## 6. Reglas de seguimiento

- Revisar P0 dos veces por semana y todos los riesgos semanalmente.
- Asignar a cada riesgo dueño, fecha objetivo, indicador y contingencia.
- No reducir una prioridad sin evidencia nueva.
- Registrar riesgos emergentes con el mismo esquema.
- Convertir todo P0/P1 de release en prueba concreta del checklist.
- Realizar go/no-go 72 horas y 4 horas antes de abrir ventas.
