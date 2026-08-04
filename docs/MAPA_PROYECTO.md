# Mapa del proyecto — Bolillo A.I. v1.0

**Fecha de corte:** 2026-08-03
**Propósito:** orientar la planificación y prevenir ediciones en la zona equivocada. Este documento describe el árbol actual; no propone ni ejecuta movimientos.

## 1. Cómo interpretar el repositorio

El árbol combina cinco capas: (1) fuentes rectoras y editoriales en la raíz; (2) aplicación Next.js vigente; (3) plataformas y webs anteriores; (4) sistemas conceptuales y planes; y (5) recursos públicos/editoriales. La ubicación por sí sola no prueba que un archivo sea oficial: deben prevalecer autoridad, estado, versión, derechos y manifiesto.

### Clasificaciones

- **Crítica:** participa directamente en producto, aplicación, seguridad, calidad o publicación.
- **Trabajo:** contiene borradores, producción, constructores o planificación; no debe publicarse automáticamente.
- **Oficial:** ruta declarada para recursos aprobados; hoy puede contener solo estructura o placeholders.
- **Histórica/candidata:** generación anterior o implementación que requiere decisión explícita antes de usarse.
- **Generada/no manual:** dependencias, salidas de build o artefactos que deben regenerarse con herramientas.
- **Puede crecer:** zona prevista para contenido nuevo, siempre con inventario, versión y aprobación.

## 2. Documentos importantes en la raíz

| Ruta o grupo | Contenido y función | Clasificación | Regla para v1.0 |
|---|---|---|---|
| `MAPA_AUTORIDAD_DOCUMENTAL_PANADERIA.md` | Jerarquía para resolver contradicciones | Crítica/rectora | Consultar antes de elegir fuente |
| `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` | Manuscrito primario declarado | Crítica/editorial | Candidato canónico; congelar por versión/hash |
| `LIBRO_MAESTRO_BOLILLO*.md` | Maestro, Premium, Bible y publicación | Crítica/variantes | No editar indistintamente; registrar derivación |
| `BIBLIA_*.md` | Fuentes técnicas generales y por proceso | Crítica/técnica | Validan todo contenido para cliente |
| `MODULO_*.md`, `CURSO_MAESTRO_BOLILLO.md` | Contenido pedagógico modular | Crítica/trabajo | Reconciliar con mapa canónico y libro |
| `GUIA_ESTILO_EDITORIAL_PANADERIA.md` | Norma editorial | Crítica/rectora | Aplicar en cierre editorial |
| `MANUAL_IDENTIDAD_PANADERIA.md`, `KIT_MARCA_PANADERIA.md` | Identidad visual y de marca | Crítica/rectora | Aplicar a todas las salidas |
| `CHEF_JUANOTE.md`, `ENCICLOPEDIA_CHEF_JUANOTE.md` | Definición textual del autor/personaje | Crítica/personaje | Verificar claims y derechos |
| `GUIA_OFICIAL_BOLY.md`, `BOLY_MANUAL_OFICIAL.md`, `BOLY_BIBLE.md` | Definición de Boly | Crítica/personaje | Designar una autoridad explícita |
| `ACTIVOS_OFICIALES.md`, `ASSET_UPLOAD_MAP.md` | Reglas y destinos de activos | Crítica/operativa | No confundir estructura vacía con activo aprobado |
| `CALIDAD_PANADERIA.md`, `SISTEMA_CONTROL_CALIDAD_PANADERIA.md` | Estándares de calidad | Crítica/QA | Convertir en evidencia de release |
| `ARQUITECTURA_GENERAL_PANADERIA.md`, `ARQUITECTURA_PANADERIA.md` | Arquitectura global/técnica | Crítica/técnica | Resolver contra implementación real |
| `ROADMAP_PANADERIA*.md`, `MASTER_PLAN_PANADERIA.md`, `PLAN_*.md` | Visión y planes superpuestos | Trabajo | No tomarlos como estado ejecutado |
| `PORTADA_OFICIAL_BOLILLO_AI.md` | Brief/especificación editorial | Trabajo crítico | No equivale a arte final |
| `REPORTE_VALIDACION_PUBLICACION_BOLILLO.md` | Validación estructural del manuscrito | Evidencia | No sustituye revisión técnica/legal/visual |
| `AUDITORIA_GLOBAL_REPOSITORIO_PANADERIA.md` | Reporte extenso previo | Referencia | Tratar como reporte, no fuente de producto |

## 3. Aplicación web vigente

| Carpeta | Qué contiene | Criticidad | Crecimiento y cuidado |
|---|---|---|---|
| `app/` | Rutas Next.js, páginas, layouts, APIs y SEO | **Crítica** | Puede crecer con rutas aprobadas; cambios requieren pruebas de build, seguridad y navegación |
| `components/` | Componentes reutilizables comerciales, alumno y certificados | **Crítica** | Puede crecer con sistema de diseño; evitar duplicar lógica/estilos sin inventario |
| `content/` | Contenido tipado/conectado del curso, sitio y plataforma | **Crítica** | Puede crecer; debe reconciliarse con fuente editorial y no volverse una autoridad paralela |
| `hooks/` | Hooks compartidos de interfaz/comportamiento | Crítica técnica | Crecer con pruebas y contrato claro |
| `lib/` | Autenticación, pagos, IA, academias y utilidades | **Crítica y sensible** | No asumir que los stubs son servicios reales; proteger secretos y validar servidor |
| `knowledge/` | Conocimiento futuro/contextual de Boly | Trabajo/crítica si se usa | Puede crecer con trazabilidad; no alimentar IA sin control editorial |
| `tests/` | Pruebas automatizadas | **Crítica QA** | Debe crecer con flujos de compra, acceso, contenido y seguridad |
| `public/` | Archivos servidos directamente por web | **Crítica de publicación** | Todo lo colocado puede ser públicamente accesible; exigir derechos, versión y manifiesto |

## 4. Recursos públicos

| Ruta | Contenido observado | Estado y regla |
|---|---|---|
| `public/assets/` | Estructura declarada para marca, Chef Juanote, Boly, curso, videos y PDF | **Ruta oficial declarada**, pero mayormente estructural. No cargar temporales ni asumir que README/placeholder es producto |
| `public/assets/chef-juanote/` | Carpetas con README para foto y usos | Recurso oficial faltante; requiere fotografía y autorización |
| `public/assets/boly/` | Estructura oficial y placeholder | Falta imagen maestra aprobada; el placeholder no es publicable |
| `public/assets/pdf/` | Estructura esperada para ebooks/guías | No contiene PDF final según auditoría |
| `public/boly/` | 54 PNG de expresiones, acciones y escenas | Recurso utilizable no confirmado como maestro oficial; revisar derechos, calidad y autoridad |
| `public/biblioteca-visual-oficial-panaderia/` | SVG por capítulos y biblioteca visual | Recurso de producción/publicación; revisar duplicidad conceptual y aprobar selección |
| Otros archivos bajo `public/` | Estáticos consumibles por URL | Críticos: una ruta equivocada puede romper QR, caché o enlaces |

**Regla de seguridad:** `public/` nunca debe contener secretos, datos personales, fuentes privadas, contratos ni descargas que requieran autorización si el servidor las entrega de forma directa.

## 5. Plataformas e implementaciones superpuestas

| Carpeta | Qué contiene | Clasificación recomendada |
|---|---|---|
| `PANADERIA_PLATFORM_V1/` | Primera plataforma, descargas mínimas, datos y demos | Histórica/candidata; no publicar sin decisión |
| `PANADERIA_PLATFORM_V2/` | Segunda plataforma, descargas, referencias y módulos | Histórica/candidata; comparte archivos con V3 |
| `PANADERIA_PLATFORM_V3_RELEASE/` | Snapshot llamado release con plataforma y descargas | Candidata/histórica; “RELEASE” no basta para autoridad actual |
| `WEB_PANADERIA_V1/` | Implementación web adicional | Candidata; comparar con app Next.js antes de elegir |

Estas carpetas contienen duplicados deliberados o snapshots. No deben sincronizarse manualmente entre sí ni tratarse simultáneamente como producción. La dirección debe elegir un canal vigente y registrar las demás como referencia histórica, sin reorganizarlas en esta fase.

## 6. Producción editorial, visual y multimedia

| Carpeta | Función | Tipo | Regla |
|---|---|---|---|
| `CONSTRUCTOR_LIBRO_PREMIUM/` | Plantillas/proceso para construir libro | Trabajo | No es el libro final |
| `CONSTRUCTOR_CAPITULOS_PREMIUM/` | Plantillas y piezas por capítulo | Trabajo | Validar contra fuente canónica |
| `CONTENIDO_COMERCIAL/` | Paquetes comerciales por capítulo y formatos | Trabajo crítico | Puede crecer; no publicar en masa sin estado/derechos |
| `MAPA_CANONICO_CURSO/` | Secuencia de 14 capítulos y matriz de recursos | Crítica pedagógica | Fuente para orden y trazabilidad |
| `PRODUCCION_BETA_1_0/` | Estructura beta, capítulos y carpetas de producción | Trabajo/beta | Puede crecer; nunca confundir beta con final |
| `CENTRO_PRODUCCION_MULTIMEDIA/` | Guías, guiones y coordinación multimedia | Trabajo | Puede crecer con IDs y manifiesto |
| `BIBLIOTECA_VISUAL_IA/` | Estructura de recursos visuales/IA y README | Trabajo | Prompts o placeholders requieren validación humana y legal |
| `RECURSOS_DESCARGABLES_ALUMNO/` | Guías, tablas, checklists y ejercicios | Crítica de producto | Versionar junto al capítulo y PDF |
| `BANCO_MAESTRO_RECURSOS/` | Banco de conocimiento/recursos | Trabajo | Fuente de insumos, no salida final automática |
| `PLAN_MAESTRO_PRODUCCION/` | Planes y coordinación de producción | Trabajo | Puede crecer como gestión, no como producto |
| `CEREBRO_MAESTRO/` | Coordinación, estados y control de calidad | Trabajo/gobierno | Reconciliar estados con evidencia real |

## 7. Sistemas de dominio

Las carpetas `SISTEMA_*` son principalmente especificaciones, políticas, datos y roadmaps por dominio. Pueden crecer de forma controlada, pero no prueban que la capacidad esté implementada.

| Grupo | Carpetas | Función para v1.0 |
|---|---|---|
| Producto/contenido | `SISTEMA_LIBRO/`, `SISTEMA_CURSO/`, `SISTEMA_CONTENIDO_EDUCATIVO/`, `SISTEMA_MAESTRO_CONTENIDO/`, `SISTEMA_DESCARGABLES/`, `SISTEMA_CONOCIMIENTO/` | Definir fuentes, recursos, curso y publicación |
| Personajes/IA | `SISTEMA_BOLY/`, `SISTEMA_CHEF_JUANOTE/`, `SISTEMA_PERSONAJES/`, `SISTEMA_IA/` | Voz, límites, conocimiento e integraciones futuras |
| Multimedia/publicación | `SISTEMA_MULTIMEDIA/`, `SISTEMA_PUBLICACION/` | Producción y canales de salida |
| Negocio | `SISTEMA_COMERCIAL/`, `SISTEMA_VENTAS/`, `SISTEMA_MARKETING/`, `SISTEMA_CLIENTES/`, `SISTEMA_FINANZAS/` | Oferta, embudo, cliente, precio y operación |
| Plataforma | `SISTEMA_INTEGRACIONES/`, `SISTEMA_AUTOMATIZACIONES/`, `SISTEMA_ANALITICA/`, `SISTEMA_SEGURIDAD/` | Integraciones, eventos, protección y monitoreo |
| Operación | `SISTEMA_OPERACIONES/`, `SISTEMA_SOPORTE/`, `SISTEMA_COMUNIDAD/` | Entrega y postventa; comunidad puede quedar fuera de v1.0 |
| Gobierno | `SISTEMA_GOBERNANZA/`, `SISTEMA_CALIDAD/`, `SISTEMA_VERSIONES/`, `SISTEMA_LEGAL/` | Aprobaciones, calidad, versión y cumplimiento |

## 8. Boly como subsistema

| Ruta | Contenido | Regla |
|---|---|---|
| `BOLY_ASSISTANT_V1/` | Motor/CLI, configuración o datos del asistente | Candidato técnico; no equivale a IA de producción |
| `SISTEMA_BOLY/` | Especificaciones del personaje/asistente | Fuente de trabajo; conciliar con guías oficiales |
| `knowledge/boly/` | Conocimiento por módulo | Puede crecer con aprobación técnica y editorial |
| `public/boly/` | Renders PNG | Revisar y designar cuáles son oficiales |
| `public/assets/boly/` | Destino oficial declarado | No modificar con temporales; falta maestro aprobado |

## 9. Documentación

| Ruta | Función | Regla |
|---|---|---|
| `docs/AUDITORIA_INICIAL.md` | Foto no destructiva del estado al 2026-08-03 | Referencia principal para brechas; actualizar mediante nueva auditoría, no falsificar el corte |
| `docs/demo-local-popos.md` | Guía de demo local | Operativa de desarrollo, no manual de producción |
| `docs/qr-dinamicos.md` | Diseño/guía de QR dinámicos | Crítica si se implementan QR; validar URLs reales |
| `docs/PLAN_LANZAMIENTO_V1.md` | Plan maestro de ejecución | Documento de planificación |
| `docs/CHECKLIST_V1.md` | Puertas verificables de salida | Evidencia pendiente hasta marcar con pruebas |
| `docs/MAPA_PROYECTO.md` | Mapa del árbol actual | Orientación, no autorización para mover |
| `docs/RIESGOS_V1.md` | Registro inicial de riesgos | Debe convertirse en registro vivo con dueños |

`docs/` puede crecer con decisiones, inventarios, evidencias y runbooks, evitando duplicar las fuentes rectoras sin declarar cuál manda.

## 10. Configuración y dependencias

| Ruta | Contenido | Regla |
|---|---|---|
| `package.json` | Scripts y dependencias de la aplicación | Crítica; cambios requieren revisión y pruebas |
| `next.config.ts` | Configuración de Next.js | Crítica; puede afectar build, assets, headers y despliegue |
| `tsconfig.json` | Compilación TypeScript | Crítica; no relajar controles para ocultar errores |
| `eslint.config.mjs` | Calidad estática | Crítica QA |
| `tailwind.config.ts`, `postcss.config.js` | Sistema CSS/build | Crítica visual/técnica |
| `next-env.d.ts` | Declaración generada por Next.js | No editar manualmente salvo instrucción oficial de la herramienta |
| `node_modules/` | Dependencias instaladas (~424 MiB en la auditoría) | **Generada; no modificar ni versionar manualmente**. Regenerar desde manifiesto/lockfile |
| `.next/` si aparece | Salida de build/cache | **Generada; no modificar manualmente** |
| `.git/` | Historial y metadatos de Git | **No modificar manualmente** |

## 11. Carpetas críticas para el lanzamiento

1. `app/`, `components/`, `lib/`, `content/`, `tests/`: experiencia y lógica de producto.
2. `public/`: todo estático expuesto y destinos consumidos por web/QR.
3. `MAPA_CANONICO_CURSO/`, `RECURSOS_DESCARGABLES_ALUMNO/`: coherencia pedagógica.
4. `SISTEMA_LEGAL/`, `SISTEMA_CALIDAD/`, `SISTEMA_VERSIONES/`, `SISTEMA_PUBLICACION/`: puertas de cumplimiento.
5. Manuscritos, biblias técnicas e identidad en raíz: fuente del contenido entregado.

## 12. Zonas que pueden crecer

- `tests/`: primero para flujos P0/P1.
- `docs/`: decisiones, evidencia, inventarios y operación.
- `knowledge/boly/`: solo con trazabilidad y aprobación.
- `RECURSOS_DESCARGABLES_ALUMNO/`: con versión enlazada al libro.
- `CENTRO_PRODUCCION_MULTIMEDIA/` y `CONTENIDO_COMERCIAL/`: con IDs, derechos y estado.
- `public/assets/`: únicamente con activos reales aprobados y manifiesto.
- Aplicación vigente: solo después de elegirla formalmente como producción.

## 13. Zonas que no deben modificarse manualmente

- `.git/`, `node_modules/` y cualquier `.next/`, cache o salida de build.
- Archivos finales congelados o snapshots históricos; crear una nueva versión en vez de sobrescribir.
- Descargas exportadas; deben derivarse de fuente canónica mediante un proceso reproducible.
- Manifiestos generados por herramientas, salvo que su procedimiento indique edición manual.
- `public/assets/` con archivos provisionales: la ruta oficial exige aprobación, derechos y nomenclatura.
- Copias V1/V2/V3 para “mantenerlas sincronizadas”; se debe elegir autoridad, no editar cuatro productos en paralelo.

## 14. Reglas de decisión antes de tocar una ruta

1. Confirmar si es fuente, salida, placeholder, snapshot o dependencia generada.
2. Consultar el mapa de autoridad y la versión.
3. Confirmar propietario, derecho y estado.
4. Revisar consumidores: aplicación, PDF, QR, email o plataforma.
5. Definir prueba y rollback antes del cambio.
6. Actualizar inventario/manifiesto después de la aprobación.
