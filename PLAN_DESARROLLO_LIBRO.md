# PLAN_DESARROLLO_LIBRO.md

## Plan maestro de desarrollo del Libro Maestro del Bolillo con Boly™

**Proyecto:** Ecosistema funcional PanaderIA™  
**Producto eje:** Libro Maestro del Bolillo  
**Asistente educativo:** Boly™  
**Alcance de este documento:** definir la estrategia completa de desarrollo sin escribir el libro completo y sin modificar documentos existentes.

---

## 1. Diagnóstico documental inicial

El repositorio ya contiene una base amplia para construir el ecosistema. No se parte de cero: existen biblias editoriales, módulos, sistemas de IA, estructura web, recursos descargables, versiones de plataforma, catálogo de videos, sistema comercial y activos visuales.

### 1.1 Documentos rectores del libro

| Documento | Uso dentro del plan |
|---|---|
| `LIBRO_MAESTRO_BOLILLO_BIBLE.md` | Define la promesa editorial, tono, enfoque pedagógico y criterio de escritura del Libro Maestro del Bolillo. |
| `LIBRO_MAESTRO_BOLILLO_PREMIUM.md` | Base editorial avanzada para convertir en versión funcional, revisada y descargable. |
| `SISTEMA_LIBRO/README.md` | Marco documental para administrar arquitectura, índice, navegación, referencias, ediciones y traducciones. |
| `SISTEMA_LIBRO/estructura.md` | Define capas documentales y arquitectura general del libro. |
| `SISTEMA_LIBRO/capitulos.md` | Define cómo registrar y organizar capítulos sin alterar contenido existente. |
| `SISTEMA_LIBRO/multilenguaje.md` | Base para futuras traducciones y localizaciones. |
| `CONSTRUCTOR_LIBRO_PREMIUM/README.md` | Define el flujo de ensamblado del libro premium con recursos, imágenes, videos, QR, Boly™ y exportación. |
| `CONSTRUCTOR_CAPITULOS_PREMIUM/` | Contiene plantillas para capítulos, recursos multimedia, consejos de Boly™, QR, checklist, descargables y autoevaluación. |
| `CEREBRO_MAESTRO/README.md` | Coordina libro, capítulos, recursos visuales, multimedia, QR, descargables, Boly™, calidad y publicación. |

### 1.2 Documentos relacionados con Boly™

| Documento | Uso dentro del plan |
|---|---|
| `BOLY_BIBLE.md` | Identidad oficial, misión, personalidad y límites de Boly™. |
| `SISTEMA_BOLY/README.md` | Sistema maestro de personalidad, voz, tono, reglas e interacciones. |
| `SISTEMA_BOLY/personalidad.md` | Perfil expresivo y conductual. |
| `SISTEMA_BOLY/tono.md` | Forma de hablar de Boly™ en libro, plataforma y soporte. |
| `SISTEMA_BOLY/reglas.md` | Límites de actuación y comportamiento permitido. |
| `SISTEMA_BOLY/errores_frecuentes.md` | Base para diagnóstico pedagógico y acompañamiento. |
| `SISTEMA_IA/boly.md` | Define el rol de Boly™ dentro del sistema IA sin redefinir su personalidad. |
| `BOLY_ASSISTANT_V1/` | Prototipo funcional de asistente con núcleo, CLI, conocimiento y pruebas de humo. |
| `PANADERIA_PLATFORM_V1/src/boly-engine.js`, `PANADERIA_PLATFORM_V2/src/boly-engine.js`, `PANADERIA_PLATFORM_V3_RELEASE/src/boly-engine.js` | Motores existentes para integración progresiva en plataforma. |

### 1.3 Documentos de imágenes, identidad visual y activos

| Documento o carpeta | Uso dentro del plan |
|---|---|
| `PANADERIA_VISUAL_BIBLE.md` | Biblia visual oficial para estilo, colores, sensación emocional y coherencia gráfica. |
| `ACTIVOS_OFICIALES.md` | Mapa de ubicación obligatoria para marca, Chef Juanote, Boly™, curso, videos, PDF y descargas. |
| `PLAN_PRODUCCION_ACTIVOS.md` | Lista ejecutable de producción de fotos, videos, diagramas, miniaturas, recursos de IA y materiales comerciales. |
| `public/assets/boly/` | Estructura oficial para poses, emociones, animaciones, videos, libros, app y certificados de Boly™. |
| `public/assets/curso-bolillo/` | Estructura por temas técnicos: ingredientes, amasado, fermentación, formado, horneado, corte, enfriado, errores y soluciones. |
| `public/biblioteca-visual-oficial-panaderia/` | Biblioteca visual por capítulos con portadas, iconografía, diagramas, infografías, imágenes IA, fondos y Boly™. |
| `CONSTRUCTOR_LIBRO_PREMIUM/03_IMAGENES/` | Carpeta de coordinación para imágenes del libro. |
| `CONSTRUCTOR_LIBRO_PREMIUM/04_INFOGRAFIAS/` | Carpeta de coordinación para infografías educativas. |

### 1.4 Documentos y recursos de videos

| Documento o carpeta | Uso dentro del plan |
|---|---|
| `CATALOGO_MAESTRO_VIDEOS_PANADERIA.md` | Catálogo de producción audiovisual por capítulo, con formatos para YouTube, Premium, errores, consejos y redes. |
| `GUION_MULTIMEDIA_PANADERIA.md` | Base narrativa para videos, guiones y piezas multimedia. |
| `CONSTRUCTOR_LIBRO_PREMIUM/05_VIDEOS/` | Coordinación de videos asociados al libro. |
| `PANADERIA_PLATFORM_V1/videos/`, `PANADERIA_PLATFORM_V2/videos/`, `PANADERIA_PLATFORM_V3_RELEASE/videos/` | Prototipos y versiones de páginas de video por módulo. |
| `public/assets/videos/` | Estructura para videos introductorios, premium, redes y curso del bolillo. |

### 1.5 Documentos de plataforma web, descargas e integración

| Documento o carpeta | Uso dentro del plan |
|---|---|
| `README.md` | Describe rutas principales, arquitectura futura y API preparada para contexto de Boly™. |
| `PANADERIA_PLATFORM_V1/`, `PANADERIA_PLATFORM_V2/`, `PANADERIA_PLATFORM_V3_RELEASE/` | Versiones progresivas de plataforma estática/funcional con cursos, recursos, videos, descargas y Boly™. |
| `app/` | Aplicación web principal con páginas comerciales, alumno, cursos, Boly™, certificados, QR y APIs. |
| `app/api/ai/boly/context/route.ts` | Punto de integración futuro para contexto de Boly™. |
| `SISTEMA_DESCARGABLES/` | Sistema maestro para hojas de trabajo, checklists, formatos, plantillas, evaluaciones y certificados. |
| `RECURSOS_DESCARGABLES_ALUMNO/` | Recursos descargables organizados por capítulo. |
| `public/paquetes-oficiales/` | Paquetes por capítulo con guías, evaluaciones, checklists, Boly™ y QR. |
| `SISTEMA_INTEGRACIONES/` | APIs, autenticación, webhooks, conectores, seguridad y control de cambios. |
| `SISTEMA_AUTOMATIZACIONES/` | Automatización editorial, educativa, multimedia, IA, comercial y de clientes. |

### 1.6 Documentos de comercialización, publicación y versiones

| Documento o carpeta | Uso dentro del plan |
|---|---|
| `SISTEMA_PUBLICACION/` | Preparación editorial para ebooks, impresión, Amazon KDP, Gumroad, Shopify, lanzamiento y checklist de publicación. |
| `SISTEMA_VENTAS/` | Modelo de ventas, productos, versiones del libro, cursos, paquetes, licencias, membresías y postventa. |
| `SISTEMA_COMERCIAL/` | Embudos, ofertas, afiliados, suscripciones, productos y roadmap comercial. |
| `SISTEMA_FINANZAS/` | Costos, precios, márgenes, presupuestos, ingresos, reportes y riesgos financieros. |
| `SISTEMA_ANALITICA/` | KPIs, métricas de libro, multimedia, educación, clientes, marketing e IA. |
| `SISTEMA_VERSIONES/` | Política de versionado, versiones del libro, curso, multimedia e historial de cambios. |
| `ROADMAP_PANADERIA_V1.md` | Diagnóstico de estado general y ruta de evolución del ecosistema. |

---

## 2. Visión del ecosistema completo

El ecosistema debe construirse alrededor de una secuencia central:

**Libro Maestro del Bolillo → Recursos visuales → Videos → Boly™ → Plataforma web → Descargas → IA contextual → Traducciones → Comercialización → Versiones futuras**

La prioridad es convertir la documentación existente en una experiencia funcional, verificable y vendible, sin perder control editorial. El libro debe ser el núcleo de conocimiento; Boly™ debe actuar como acompañante; la plataforma debe entregar la experiencia; y los sistemas de publicación, ventas, analítica y versiones deben sostener el crecimiento.

---

## 3. Orden óptimo de construcción

### Etapa 0 — Consolidación y gobierno documental

**Objetivo:** fijar una fuente de verdad antes de producir contenido nuevo.

**Acciones:**
1. Nombrar `LIBRO_MAESTRO_BOLILLO_PREMIUM.md` como borrador editorial base.
2. Usar `LIBRO_MAESTRO_BOLILLO_BIBLE.md` como criterio de revisión.
3. Usar `SISTEMA_LIBRO/` como registro de índice, capítulos, navegación, referencias y ediciones.
4. Usar `CEREBRO_MAESTRO/` como tablero de coordinación.
5. Definir estados por capítulo: pendiente, borrador, revisado, visualizado, integrado, descargable, publicado.

**Entregables:**
- Mapa maestro de capítulos.
- Matriz de documentos fuente.
- Lista de brechas editoriales, visuales, técnicas y comerciales.

---

### Etapa 1 — Libro Maestro del Bolillo

**Objetivo:** producir una versión editorial funcional, no necesariamente final, del libro.

**Acciones:**
1. Auditar capítulos existentes y módulos relacionados.
2. Confirmar índice definitivo de primera versión.
3. Normalizar estructura por capítulo:
   - objetivo de aprendizaje;
   - teoría clara;
   - procedimiento;
   - criterios de evaluación;
   - errores frecuentes;
   - consejos de Boly™;
   - recursos descargables;
   - QR o enlaces;
   - autoevaluación.
4. Separar contenido técnico, contenido pedagógico, contenido visual y contenido comercial.
5. Mantener la voz técnica de Chef Juanote y usar Boly™ solo como apoyo.

**Entregables:**
- Libro funcional en Markdown.
- Índice validado.
- Checklist editorial por capítulo.
- Registro de dependencias visuales y multimedia.

---

### Etapa 2 — Personaje Boly™

**Objetivo:** convertir a Boly™ en un acompañante transversal del libro, la web y la IA.

**Acciones:**
1. Consolidar identidad desde `BOLY_BIBLE.md` y `SISTEMA_BOLY/`.
2. Crear matriz de intervención de Boly™ por capítulo:
   - bienvenida;
   - recordatorio técnico;
   - alerta de error común;
   - motivación;
   - pregunta de repaso;
   - cierre.
3. Definir cuándo Boly™ aparece como texto, ilustración, cápsula, video, tooltip o asistente conversacional.
4. Mantener límites: Boly™ no certifica, no reemplaza al Chef, no inventa procedimientos, no promete resultados.
5. Preparar banco de frases y microinteracciones reutilizables.

**Entregables:**
- Guía de participación de Boly™.
- Matriz capítulo/intervención.
- Banco de frases autorizado.
- Requisitos visuales de poses y emociones.

---

### Etapa 3 — Imágenes e infografías

**Objetivo:** definir y producir el sistema visual educativo del libro y plataforma.

**Acciones:**
1. Priorizar imágenes imprescindibles para comprensión técnica: ingredientes, masa, amasado, fermentación, formado, corte, horneado, enfriado y errores.
2. Clasificar activos en fotografía real, diagrama técnico, infografía, ilustración, imagen IA, iconografía y apoyo de Boly™.
3. Usar `PANADERIA_VISUAL_BIBLE.md` para consistencia visual.
4. Usar `ACTIVOS_OFICIALES.md` para ubicación y orden de archivos.
5. Usar la biblioteca visual por capítulos como base de inventario.
6. Vincular cada imagen a capítulo, objetivo pedagógico y formato de salida.

**Entregables:**
- Inventario visual por capítulo.
- Lista de imágenes críticas para la primera versión.
- Prompts o briefs de producción visual.
- Mapa de reemplazo de placeholders por activos definitivos.

---

### Etapa 4 — Videos

**Objetivo:** producir videos que complementen, no sustituyan, al libro.

**Acciones:**
1. Usar el catálogo maestro de videos como base de producción.
2. Priorizar videos obligatorios: introducción, fórmula base, amasado, fermentación, formado, corte, horneado, diagnóstico de errores.
3. Definir formatos:
   - video largo de YouTube;
   - video premium paso a paso;
   - video de errores comunes;
   - consejo de Chef Juanote con Boly™;
   - short/reel/tiktok.
4. Asociar videos a QR por capítulo.
5. Crear guiones técnicos y listas de tomas.
6. Definir miniaturas y overlays con Boly™.

**Entregables:**
- Parrilla de producción audiovisual.
- Guiones por video prioritario.
- Lista de tomas y materiales.
- Mapa de QR y enlaces.

---

### Etapa 5 — Plataforma web

**Objetivo:** entregar el libro, curso, recursos y Boly™ en una experiencia navegable.

**Acciones:**
1. Consolidar la app principal como plataforma actual.
2. Revisar aprendizajes de `PANADERIA_PLATFORM_V1`, `V2` y `V3_RELEASE` antes de integrar.
3. Definir rutas mínimas:
   - inicio comercial;
   - página del libro;
   - página de Boly™;
   - biblioteca del alumno;
   - videos;
   - descargas;
   - certificados;
   - QR por capítulo;
   - perfil/progreso.
4. Conectar recursos reales por capítulo.
5. Preparar panel de alumno para acceso ordenado al libro y materiales.

**Entregables:**
- Mapa funcional de navegación.
- Requisitos de interfaz por rol.
- Backlog técnico de integración.
- Criterios de aceptación por ruta.

---

### Etapa 6 — Integración con IA

**Objetivo:** habilitar a Boly™ como asistente contextual seguro y útil.

**Acciones:**
1. Construir base de conocimiento a partir del libro, recursos, FAQs y documentos autorizados.
2. Separar conocimiento público, premium, interno y restringido.
3. Implementar recuperación contextual por capítulo, tema y nivel del alumno.
4. Conectar `app/api/ai/boly/context/route.ts` con una fuente de conocimiento validada.
5. Usar guardrails de `PANADERIA_AI_BIBLE.md`, `SISTEMA_IA/` y `SISTEMA_BOLY/`.
6. Crear pruebas con preguntas frecuentes, errores de panificación y dudas de navegación.
7. Registrar límites: no asesoría médica/legal, no seguridad alimentaria avanzada sin escalamiento, no certificaciones automáticas.

**Entregables:**
- Base de conocimiento versionada.
- Prompt maestro de Boly™.
- Matriz de permisos por contenido.
- Pruebas de humo conversacionales.

---

### Etapa 7 — Descarga del libro y recursos

**Objetivo:** permitir acceso controlado al libro y materiales complementarios.

**Acciones:**
1. Definir formatos iniciales: Markdown interno, PDF comercial, EPUB futuro, paquete ZIP de recursos.
2. Mapear recursos descargables por capítulo.
3. Incluir checklists, hojas de trabajo, fórmulas, tablas, evaluaciones y certificados.
4. Definir nomenclatura y versiones.
5. Validar que los recursos descargables coincidan con el contenido del libro y plataforma.
6. Preparar descarga gratuita limitada y descarga premium completa.

**Entregables:**
- Paquete descargable V1.
- PDF del libro V1 cuando el contenido esté aprobado.
- Tabla de correspondencia capítulo/recurso.
- Política de acceso por producto.

---

### Etapa 8 — Traducciones

**Objetivo:** preparar el ecosistema para crecer fuera del idioma base.

**Acciones:**
1. Mantener español como idioma base.
2. Definir códigos de idioma y edición regional.
3. Separar texto editorial, UI, subtítulos, metadatos, prompts, descargables y términos técnicos.
4. Crear glosario maestro panadero antes de traducir.
5. Priorizar traducción al inglés como primera expansión.
6. Adaptar unidades, ingredientes, nombres comerciales y referencias culturales por región.

**Entregables:**
- Matriz multilenguaje.
- Glosario técnico bilingüe inicial.
- Política de localización.
- Roadmap de traducciones.

---

### Etapa 9 — Comercialización

**Objetivo:** convertir el libro y la plataforma en productos vendibles.

**Acciones:**
1. Definir productos iniciales:
   - ebook básico;
   - libro premium descargable;
   - curso con videos;
   - paquete libro + curso;
   - membresía con Boly™;
   - licencia para escuelas o panaderías.
2. Preparar landing pages, oferta, precios, garantías, FAQs y testimonios.
3. Usar `SISTEMA_PUBLICACION/` para KDP, Gumroad, Shopify e impresión.
4. Usar `SISTEMA_VENTAS/` y `SISTEMA_COMERCIAL/` para embudos, paquetes, licencias y postventa.
5. Medir conversión, descarga, progreso, uso de Boly™ y satisfacción.
6. Crear contenido de redes a partir de videos cortos, infografías y consejos de Boly™.

**Entregables:**
- Catálogo comercial V1.
- Funnel de lanzamiento.
- Página de venta del libro.
- Paquetes y licencias iniciales.
- Métricas comerciales base.

---

### Etapa 10 — Versiones futuras

**Objetivo:** establecer evolución controlada sin romper la coherencia del ecosistema.

**Acciones:**
1. Aplicar política de versionado al libro, plataforma, recursos, IA y videos.
2. Crear changelog por versión.
3. Planear ediciones futuras:
   - V1 funcional;
   - V1.1 correcciones y recursos visuales;
   - V1.5 videos premium completos;
   - V2 libro interactivo con Boly™ IA;
   - V3 ecosistema multilenguaje y licencias B2B.
4. Integrar analítica educativa para decidir mejoras.
5. Crear comité editorial/técnico de aprobación antes de publicar nuevas versiones.

**Entregables:**
- Roadmap de versiones.
- Changelog maestro.
- Política de compatibilidad.
- Registro de mejoras por retroalimentación real.

---

## 4. Ruta crítica recomendada

La ruta crítica para lograr una primera versión funcional es:

1. Confirmar índice y capítulos base del libro.
2. Normalizar estructura editorial por capítulo.
3. Definir intervenciones mínimas de Boly™.
4. Mapear imágenes esenciales y recursos descargables.
5. Conectar cada capítulo con sus videos o placeholders planificados.
6. Publicar una versión web navegable con descargas controladas.
7. Integrar Boly™ en modo asistente contextual básico.
8. Preparar PDF/ebook descargable.
9. Lanzar oferta comercial inicial.
10. Medir, corregir y versionar.

---

## 5. Priorización por fases de entrega

### Fase A — MVP editorial

**Meta:** tener el libro funcional y coherente.

Incluye:
- índice final;
- capítulos ordenados;
- voz editorial consistente;
- consejos mínimos de Boly™;
- recursos pendientes identificados;
- checklist de calidad.

### Fase B — MVP visual y descargable

**Meta:** hacer el libro usable como producto educativo.

Incluye:
- imágenes críticas;
- infografías esenciales;
- checklists;
- fórmulas;
- evaluaciones;
- PDF provisional;
- descargas por capítulo.

### Fase C — MVP web

**Meta:** que el alumno pueda acceder, navegar y descargar.

Incluye:
- página del libro;
- biblioteca del alumno;
- videos;
- descargas;
- QR;
- perfil/progreso básico;
- página de Boly™.

### Fase D — Boly™ IA funcional

**Meta:** que Boly™ responda con base en conocimiento validado.

Incluye:
- base de conocimiento;
- prompt maestro;
- contexto por capítulo;
- límites de seguridad;
- pruebas de humo;
- registro de respuestas frecuentes.

### Fase E — Lanzamiento comercial

**Meta:** vender y distribuir la primera versión.

Incluye:
- landing;
- productos;
- precios;
- checkout;
- email/postventa;
- analítica;
- soporte.

### Fase F — Escalamiento

**Meta:** ampliar el ecosistema.

Incluye:
- traducciones;
- videos completos;
- membresías;
- certificaciones;
- licencias;
- apps;
- comunidad;
- versiones futuras.

---

## 6. Dependencias principales

| Dependencia | Impacto | Resolución sugerida |
|---|---|---|
| Capítulos sin estructura homogénea | Dificulta PDF, web, IA y traducción. | Normalizar plantilla antes de producción masiva. |
| Imágenes reales faltantes | Reduce calidad premium. | Usar placeholders solo en MVP y planificar reemplazos. |
| Boly™ visual no finalizado | Limita integración emocional. | Definir versión oficial mínima con poses base. |
| Videos no producidos | Limita QR y experiencia premium. | Usar guiones/placeholders y producir videos críticos primero. |
| IA sin conocimiento validado | Riesgo de respuestas incorrectas. | Conectar solo documentos aprobados y probar por capítulo. |
| Descargas sin versionado | Confusión comercial y soporte. | Aplicar nomenclatura y manifest por paquete. |
| Comercialización antes de QA | Riesgo reputacional. | Lanzar beta cerrada antes de venta pública. |

---

## 7. Criterios de calidad antes del lanzamiento V1

1. Cada capítulo tiene objetivo, desarrollo, práctica, errores, evaluación y recursos.
2. Boly™ aparece de forma útil, breve y coherente.
3. Cada imagen tiene propósito pedagógico.
4. Cada video o QR apunta a un recurso existente o placeholder explícito.
5. El libro descargable coincide con lo publicado en plataforma.
6. La IA responde solo con conocimiento autorizado.
7. La plataforma permite encontrar libro, videos y descargas sin fricción.
8. Las traducciones no se inician hasta cerrar glosario base.
9. La oferta comercial refleja exactamente lo entregado.
10. Toda versión publicada queda registrada.

---

## 8. Backlog inicial sugerido

### Editorial
- Auditar `LIBRO_MAESTRO_BOLILLO_PREMIUM.md`.
- Comparar contra `LIBRO_MAESTRO_BOLILLO_BIBLE.md`.
- Crear matriz capítulo/estado/recurso.
- Definir índice V1 cerrado.

### Boly™
- Crear matriz de intervenciones por capítulo.
- Definir 6 poses base: saludo, explicación, alerta, motivación, pregunta, celebración.
- Crear banco de 100 microfrases autorizadas.

### Visual
- Inventariar activos existentes por capítulo.
- Marcar placeholders críticos.
- Crear briefs para fotos y diagramas prioritarios.

### Video
- Priorizar 8 videos base.
- Crear guiones técnicos.
- Definir miniaturas y QR.

### Web
- Consolidar rutas y componentes existentes.
- Crear página dedicada del libro.
- Conectar recursos por capítulo.
- Preparar descarga controlada.

### IA
- Definir documentos autorizados para RAG/contexto.
- Crear prompt maestro de Boly™.
- Crear set de pruebas por capítulo.

### Comercial
- Definir SKU del libro V1.
- Crear oferta beta.
- Preparar landing y FAQs.
- Definir analítica de conversión y uso.

---

## 9. Entregables finales del ecosistema completo

1. Libro Maestro del Bolillo en versión editorial aprobada.
2. PDF/ebook descargable y versionado.
3. Recursos descargables por capítulo.
4. Biblioteca visual organizada.
5. Catálogo de videos conectados por QR.
6. Boly™ como personaje editorial y asistente IA.
7. Plataforma web con acceso de alumno.
8. Sistema de traducción/localización.
9. Embudo comercial y productos definidos.
10. Roadmap de evolución con control de versiones.

---

## 10. Recomendación ejecutiva

El desarrollo debe iniciar por el **gobierno editorial del libro** y no por la IA ni por la venta. La IA, los videos, las descargas y la plataforma dependen de que el libro tenga estructura estable. Una vez validado el índice y el formato por capítulo, Boly™ puede incorporarse de forma consistente, los recursos visuales pueden producirse con precisión, la plataforma puede organizar el acceso y la comercialización puede prometer solo lo que realmente existe.

La primera versión funcional debe ser sencilla pero completa: libro navegable, recursos básicos, Boly™ presente, imágenes esenciales, videos prioritarios o planificados, descarga controlada y una ruta clara hacia IA, traducciones y venta premium.
