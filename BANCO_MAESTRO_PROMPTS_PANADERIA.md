# BANCO MAESTRO DE PROMPTS DE PRODUCCIÓN PANADERIA™

Repositorio oficial de prompts reutilizables para producir contenido visual, audiovisual, editorial, educativo y promocional de PanaderIA™.

Este banco es una herramienta operativa de producción: no sustituye el Libro Maestro, no agrega capítulos nuevos y no modifica el contenido técnico existente. Todo resultado debe respetar el Método Chef Juanote™, la personalidad de Boly™ y los recursos oficiales del proyecto.

## Reglas de uso obligatorio

1. Usar siempre información existente del proyecto: Libro Maestro de Bolillo Premium, Curso Maestro, Biblias técnicas, Biblioteca Visual Oficial, Biblioteca de Diagramas e Infografías, catálogos de fotografía/video y recursos descargables.
2. No inventar técnicas, fórmulas, porcentajes, temperaturas ni tiempos que no estén respaldados por el contenido oficial.
3. Si el prompt genera una pieza visual provisional, marcarla como sustituible por fotografía, video o validación real del Chef Juanote™ cuando aplique.
4. Mantener tono cálido, claro, práctico y motivador; Boly™ debe apoyar sin regañar.
5. Todo material debe poder integrarse en Libro Maestro, Curso Maestro, Plataforma PanaderIA™, sitio web o redes sociales.
6. Cada salida debe indicar capítulo, objetivo pedagógico, formato, uso previsto y elementos pendientes de validación real.

## Variables globales reutilizables

- `{CAPITULO_NUMERO}`: número del capítulo, del 01 al 14.
- `{CAPITULO_TITULO}`: título oficial del capítulo.
- `{TEMA_TECNICO}`: tema técnico principal.
- `{NIVEL_ALUMNO}`: Principiante, Intermedio o Avanzado.
- `{OBJETIVO_PEDAGOGICO}`: habilidad o comprensión que debe lograr el alumno.
- `{RECURSO_DESTINO}`: Libro Maestro, Curso Maestro, Plataforma, sitio web, redes sociales, descargable o video.
- `{FORMATO_SALIDA}`: SVG, PNG, PDF, Markdown, guion, storyboard, post, banner, portada o thumbnail.
- `{ESTILO_VISUAL}`: panadería artesanal mexicana, limpio, cálido, didáctico, premium, técnico o promocional.
- `{REFERENCIA_VISUAL}`: asset existente de la Biblioteca Visual Oficial o recurso pendiente de reemplazo.
- `{QR_CODIGO}`: código QR correspondiente al capítulo o recurso.
- `{BOLY_INTERVENCION}`: mensaje breve de Boly™ como guía, alerta o motivación.
- `{LEY_CHEF_JUANOTE}`: Ley del Chef Juanote™ relacionada cuando exista.
- `{CASO_OBRADOR}`: Caso del Obrador relacionado cuando exista.
- `{VALIDACION_CHEF}`: pendiente, validado por Chef Juanote™ o sustituible por material real.

---

## 1. Fotografías

### Prompt FOT-01 · Fotografía pedagógica del proceso

**Objetivo:** generar una especificación clara para fotografía didáctica de un paso técnico.

**Cuándo utilizarlo:** cuando se necesite una imagen real o provisional para explicar una técnica del capítulo.

**Variables:** `{CAPITULO_NUMERO}`, `{CAPITULO_TITULO}`, `{TEMA_TECNICO}`, `{OBJETIVO_PEDAGOGICO}`, `{ANGULO}`, `{DISTANCIA}`, `{ILUMINACION}`, `{FONDO}`, `{VALIDACION_CHEF}`.

**Prompt reutilizable:**

> Produce una fotografía pedagógica para PanaderIA™ del capítulo `{CAPITULO_NUMERO}`: `{CAPITULO_TITULO}`. La imagen debe enseñar `{TEMA_TECNICO}` y cumplir el objetivo `{OBJETIVO_PEDAGOGICO}`. Mostrar manos de panadero, masa o bolillo en proceso, superficie de trabajo limpia, iluminación `{ILUMINACION}`, fondo `{FONDO}`, ángulo `{ANGULO}` y distancia `{DISTANCIA}`. Estilo cálido, artesanal, mexicano, premium y didáctico. No agregar elementos técnicos no documentados. Marcar estado: `{VALIDACION_CHEF}`.

**Checklist de salida:** capítulo visible, técnica reconocible, punto de control claro, espacio para anotación educativa y etiqueta de reemplazo si es provisional.

### Prompt FOT-02 · Correcto vs incorrecto

**Objetivo:** producir una comparación visual que ayude al alumno a diagnosticar errores.

**Cuándo utilizarlo:** para errores de amasado, fermentación, formado, corte, horneado, enfriado o conservación.

**Variables:** `{CAPITULO_TITULO}`, `{ERROR_COMUN}`, `{RESULTADO_CORRECTO}`, `{CAUSA_PROBABLE}`, `{CORRECCION}`, `{BOLY_INTERVENCION}`.

**Prompt reutilizable:**

> Crea una composición fotográfica comparativa para PanaderIA™ sobre `{ERROR_COMUN}` en `{CAPITULO_TITULO}`. Dividir en dos columnas: “Correcto” y “Incorrecto”. En la columna correcta mostrar `{RESULTADO_CORRECTO}`; en la incorrecta mostrar el defecto visible causado probablemente por `{CAUSA_PROBABLE}`. Incluir una nota corta de corrección: `{CORRECCION}` y una frase motivadora de Boly™: `{BOLY_INTERVENCION}`. Mantener estética limpia, didáctica y lista para recurso descargable.

**Checklist de salida:** diferencia visual evidente, causa no inventada, corrección breve, tono motivador y espacio para QR.

---

## 2. Diagramas

### Prompt DIA-01 · Diagrama técnico del capítulo

**Objetivo:** convertir un concepto técnico en un diagrama claro y didáctico.

**Cuándo utilizarlo:** para procesos, variables críticas, puntos de control o explicaciones de causa-efecto.

**Variables:** `{CAPITULO_NUMERO}`, `{CAPITULO_TITULO}`, `{TEMA_TECNICO}`, `{VARIABLES_CRITICAS}`, `{PUNTOS_CONTROL}`, `{QR_CODIGO}`, `{LEY_CHEF_JUANOTE}`.

**Prompt reutilizable:**

> Diseña un diagrama técnico oficial de PanaderIA™ para el capítulo `{CAPITULO_NUMERO}`: `{CAPITULO_TITULO}`. Tema: `{TEMA_TECNICO}`. Debe mostrar las variables críticas `{VARIABLES_CRITICAS}`, los puntos de control `{PUNTOS_CONTROL}` y una ruta visual de causa-efecto. Integrar un espacio para `{QR_CODIGO}` y mencionar la Ley del Chef Juanote™ relacionada: `{LEY_CHEF_JUANOTE}`. Estilo vectorial, limpio, premium, con colores cálidos de panadería y lectura fácil para principiantes.

**Checklist de salida:** flujo legible, etiquetas cortas, sin fórmulas inventadas, QR reservado y jerarquía visual clara.

### Prompt DIA-02 · Árbol de diagnóstico

**Objetivo:** estructurar decisiones de diagnóstico para errores comunes.

**Cuándo utilizarlo:** cuando el alumno observe un defecto y necesite identificar causa probable.

**Variables:** `{SINTOMA}`, `{OBSERVACION_MASA}`, `{ETAPA}`, `{PREGUNTAS_DIAGNOSTICO}`, `{CAUSAS_PROBABLES}`, `{ACCIONES_CORRECTIVAS}`, `{BOLY_INTERVENCION}`.

**Prompt reutilizable:**

> Crea un árbol de diagnóstico visual para PanaderIA™. Síntoma principal: `{SINTOMA}`. Etapa: `{ETAPA}`. Observación de masa o bolillo: `{OBSERVACION_MASA}`. Usar preguntas de diagnóstico: `{PREGUNTAS_DIAGNOSTICO}`. Mostrar ramas hacia causas probables: `{CAUSAS_PROBABLES}` y acciones correctivas: `{ACCIONES_CORRECTIVAS}`. Boly™ debe aparecer como apoyo visual preguntando antes de corregir: `{BOLY_INTERVENCION}`. El diseño debe ser claro, imprimible y apto para plataforma.

**Checklist de salida:** preguntas antes de respuesta, rutas sí/no, correcciones concretas y cierre preventivo.

---

## 3. Infografías

### Prompt INFO-01 · Infografía de aprendizaje rápido

**Objetivo:** resumir un capítulo en una lámina visual fácil de estudiar.

**Cuándo utilizarlo:** para guía de clase, resumen imprimible, redes educativas o plataforma.

**Variables:** `{CAPITULO_TITULO}`, `{OBJETIVO_PEDAGOGICO}`, `{PASOS_CLAVE}`, `{ERRORES_COMUNES}`, `{CONSEJO_CHEF}`, `{BOLY_INTERVENCION}`, `{QR_CODIGO}`.

**Prompt reutilizable:**

> Crea una infografía oficial de PanaderIA™ para `{CAPITULO_TITULO}`. Debe explicar el objetivo `{OBJETIVO_PEDAGOGICO}`, resumir pasos clave `{PASOS_CLAVE}`, advertir errores comunes `{ERRORES_COMUNES}`, incluir un consejo del Chef Juanote™ `{CONSEJO_CHEF}`, una intervención breve de Boly™ `{BOLY_INTERVENCION}` y espacio para `{QR_CODIGO}`. Estilo didáctico, limpio, cálido, listo para exportar a PDF o plataforma.

**Checklist de salida:** máximo 5 bloques, iconos claros, lectura vertical, QR visible y cierre práctico.

### Prompt INFO-02 · Infografía de Ley del Chef Juanote™

**Objetivo:** explicar una ley pedagógica como regla práctica.

**Cuándo utilizarlo:** cuando un capítulo incluya una Ley del Chef Juanote™ aplicable.

**Variables:** `{LEY_CHEF_JUANOTE}`, `{CAPITULO_TITULO}`, `{EJEMPLO_OBRADOR}`, `{APLICACION_PRACTICA}`, `{ERROR_A_EVITAR}`.

**Prompt reutilizable:**

> Diseña una infografía de la Ley del Chef Juanote™: `{LEY_CHEF_JUANOTE}` aplicada a `{CAPITULO_TITULO}`. Mostrar un ejemplo del obrador `{EJEMPLO_OBRADOR}`, la aplicación práctica `{APLICACION_PRACTICA}` y el error que evita `{ERROR_A_EVITAR}`. Tono de enseñanza directa, cálida y profesional. Incluir sello “Método Chef Juanote™”.

**Checklist de salida:** ley destacada, ejemplo concreto, acción práctica y advertencia visual.

---

## 4. Videos largos

### Prompt VID-01 · Guion de clase completa

**Objetivo:** producir un guion de video largo para clase principal.

**Cuándo utilizarlo:** para módulos del Curso Maestro, videos premium o lecciones completas.

**Variables:** `{CAPITULO_NUMERO}`, `{CAPITULO_TITULO}`, `{NIVEL_ALUMNO}`, `{OBJETIVO_PEDAGOGICO}`, `{PASOS_CLAVE}`, `{CASO_OBRADOR}`, `{LEY_CHEF_JUANOTE}`, `{BOLY_INTERVENCION}`, `{RECURSOS_DESCARGABLES}`.

**Prompt reutilizable:**

> Escribe un guion de video largo para PanaderIA™ del capítulo `{CAPITULO_NUMERO}`: `{CAPITULO_TITULO}`, nivel `{NIVEL_ALUMNO}`. El Chef Juanote™ debe explicar el objetivo `{OBJETIVO_PEDAGOGICO}`, demostrar pasos clave `{PASOS_CLAVE}`, contar o aplicar el Caso del Obrador `{CASO_OBRADOR}`, mencionar la Ley `{LEY_CHEF_JUANOTE}` y dar una corrección práctica. Boly™ interviene con `{BOLY_INTERVENCION}` para preguntar, resumir o motivar. Cerrar indicando recursos descargables relacionados: `{RECURSOS_DESCARGABLES}`.

**Checklist de salida:** apertura, demostración, error común, corrección, prevención, resumen y llamada al recurso.

### Prompt VID-02 · Storyboard de video premium

**Objetivo:** convertir una clase en escenas filmables.

**Cuándo utilizarlo:** antes de grabar material premium con Chef Juanote™.

**Variables:** `{CAPITULO_TITULO}`, `{ESCENAS}`, `{TOMAS_DETALLE}`, `{TOMAS_CHEF}`, `{TOMAS_BOLY}`, `{QR_CODIGO}`.

**Prompt reutilizable:**

> Crea un storyboard para video premium de `{CAPITULO_TITULO}`. Organiza escenas `{ESCENAS}` con tomas generales, tomas de detalle `{TOMAS_DETALLE}`, tomas del Chef Juanote™ trabajando `{TOMAS_CHEF}` y momentos visuales de Boly™ `{TOMAS_BOLY}`. Indicar dónde aparece `{QR_CODIGO}`. Mantener continuidad didáctica y producción realista de obrador.

**Checklist de salida:** escena, plano, acción, diálogo, apoyo visual, recurso relacionado y QR.

---

## 5. Shorts/Reels/TikTok

### Prompt SHORT-01 · Microlección de 30 segundos

**Objetivo:** transformar un concepto en contenido breve para redes.

**Cuándo utilizarlo:** para atraer alumnos y reforzar aprendizaje rápido.

**Variables:** `{GANCHO}`, `{TEMA_TECNICO}`, `{ERROR_COMUN}`, `{CORRECCION}`, `{BOLY_INTERVENCION}`, `{CTA}`.

**Prompt reutilizable:**

> Crea un guion vertical de 30 segundos para PanaderIA™. Gancho inicial: `{GANCHO}`. Tema técnico: `{TEMA_TECNICO}`. Mostrar el error común `{ERROR_COMUN}`, explicar la corrección `{CORRECCION}` y cerrar con Boly™ diciendo `{BOLY_INTERVENCION}`. Terminar con CTA: `{CTA}`. Tono claro, rápido, visual y motivador.

**Checklist de salida:** gancho en 3 segundos, una sola enseñanza, corrección práctica y CTA.

### Prompt SHORT-02 · Tip del Chef Juanote™

**Objetivo:** crear una cápsula breve con autoridad del Chef.

**Cuándo utilizarlo:** para consejos de proceso, prevención o criterio visual.

**Variables:** `{TIP_CHEF}`, `{CAPITULO_TITULO}`, `{DEMOSTRACION_VISUAL}`, `{CTA}`.

**Prompt reutilizable:**

> Escribe un Reel/TikTok titulado “Tip del Chef Juanote™” para `{CAPITULO_TITULO}`. El Chef da este tip: `{TIP_CHEF}` mientras se muestra `{DEMOSTRACION_VISUAL}`. Cerrar con una frase breve que invite a practicar y CTA `{CTA}`. Evitar teoría larga; mostrar acción concreta.

**Checklist de salida:** formato vertical, tip único, demostración visible y cierre memorable.

---

## 6. Portadas

### Prompt POR-01 · Portada de capítulo

**Objetivo:** generar una portada visual para capítulo, PDF o módulo.

**Cuándo utilizarlo:** para Libro Maestro, descargables, plataforma y presentaciones.

**Variables:** `{CAPITULO_NUMERO}`, `{CAPITULO_TITULO}`, `{TEMA_VISUAL}`, `{ESTILO_VISUAL}`, `{VALIDACION_CHEF}`.

**Prompt reutilizable:**

> Diseña una portada oficial de PanaderIA™ para el capítulo `{CAPITULO_NUMERO}`: `{CAPITULO_TITULO}`. Tema visual `{TEMA_VISUAL}`. Estilo `{ESTILO_VISUAL}`: pan artesanal mexicano, premium, cálido y educativo. Incluir espacio para logo PanaderIA™, sello Chef Juanote™ y posible apoyo visual de Boly™. Marcar estado `{VALIDACION_CHEF}` si es provisional.

**Checklist de salida:** título legible, jerarquía premium, espacio para marca y compatibilidad vertical/horizontal.

---

## 7. Miniaturas

### Prompt MINI-01 · Miniatura de video educativo

**Objetivo:** crear thumbnails claros para clases y videos.

**Cuándo utilizarlo:** videos largos, lecciones premium, videos de diagnóstico y YouTube.

**Variables:** `{TITULO_VIDEO}`, `{EXPRESION_CHEF}`, `{ELEMENTO_PRINCIPAL}`, `{PROMESA_APRENDIZAJE}`, `{CAPITULO_NUMERO}`.

**Prompt reutilizable:**

> Crea una miniatura de video para PanaderIA™ titulada `{TITULO_VIDEO}`. Mostrar al Chef Juanote™ con expresión `{EXPRESION_CHEF}` junto a `{ELEMENTO_PRINCIPAL}`. Añadir texto corto con promesa de aprendizaje `{PROMESA_APRENDIZAJE}` y etiqueta “Cap. `{CAPITULO_NUMERO}`”. Alto contraste, fondo cálido, panadería artesanal, legible en móvil.

**Checklist de salida:** máximo 5 palabras grandes, rostro/acción, contraste y capítulo visible.

---

## 8. Recursos descargables

### Prompt DESC-01 · Hoja de práctica imprimible

**Objetivo:** producir una hoja de práctica lista para PDF.

**Cuándo utilizarlo:** para tareas, práctica en casa, clase y evaluación del alumno.

**Variables:** `{CAPITULO_TITULO}`, `{OBJETIVO_PEDAGOGICO}`, `{PASOS_PRACTICA}`, `{CRITERIOS_EVALUACION}`, `{ESPACIO_NOTAS}`, `{QR_CODIGO}`.

**Prompt reutilizable:**

> Crea una hoja de práctica imprimible para `{CAPITULO_TITULO}`. Incluir objetivo `{OBJETIVO_PEDAGOGICO}`, pasos de práctica `{PASOS_PRACTICA}`, criterios de evaluación `{CRITERIOS_EVALUACION}`, espacio de notas `{ESPACIO_NOTAS}` y área para `{QR_CODIGO}`. Tono claro, práctico y motivador de PanaderIA™.

**Checklist de salida:** imprimible, sin saturación, con checkbox, autoevaluación y QR.

### Prompt DESC-02 · Checklist de ejecución

**Objetivo:** convertir un proceso en lista verificable.

**Cuándo utilizarlo:** para clase, obrador, preparación o repaso.

**Variables:** `{CAPITULO_TITULO}`, `{ANTES}`, `{DURANTE}`, `{DESPUES}`, `{ERRORES_A_EVITAR}`.

**Prompt reutilizable:**

> Crea un checklist de ejecución para `{CAPITULO_TITULO}` dividido en Antes `{ANTES}`, Durante `{DURANTE}` y Después `{DESPUES}`. Agregar sección “Errores a evitar” con `{ERRORES_A_EVITAR}`. Usar lenguaje directo, casillas de verificación y espacio para observaciones del alumno.

**Checklist de salida:** casillas claras, etapas separadas, prevención y observación final.

---

## 9. Publicaciones para redes sociales

### Prompt RED-01 · Carrusel educativo

**Objetivo:** crear carruseles que enseñen y atraigan alumnos.

**Cuándo utilizarlo:** Instagram, Facebook, LinkedIn o comunidad de alumnos.

**Variables:** `{TEMA_TECNICO}`, `{NUMERO_SLIDES}`, `{ERROR_COMUN}`, `{SOLUCION}`, `{CTA}`.

**Prompt reutilizable:**

> Crea un carrusel educativo de `{NUMERO_SLIDES}` slides para PanaderIA™ sobre `{TEMA_TECNICO}`. Incluir introducción, explicación simple, error común `{ERROR_COMUN}`, solución práctica `{SOLUCION}`, intervención corta de Boly™ y CTA `{CTA}`. Mantener lenguaje claro, visual y sin tecnicismos innecesarios.

**Checklist de salida:** hook, desarrollo, ejemplo, solución, CTA y coherencia visual.

### Prompt RED-02 · Post motivacional del alumno

**Objetivo:** motivar al alumno sin perder enfoque técnico.

**Cuándo utilizarlo:** comunidad, lanzamiento, seguimiento y retención.

**Variables:** `{MENSAJE_MOTIVADOR}`, `{APRENDIZAJE_TECNICO}`, `{BOLY_INTERVENCION}`, `{CTA}`.

**Prompt reutilizable:**

> Escribe una publicación motivacional de PanaderIA™ con el mensaje `{MENSAJE_MOTIVADOR}`. Conectar con aprendizaje técnico `{APRENDIZAJE_TECNICO}` y una frase de Boly™ `{BOLY_INTERVENCION}`. Cerrar con CTA `{CTA}`. Tono cálido, humano y de obrador real.

**Checklist de salida:** motivación real, aprendizaje concreto y llamado a practicar.

---

## 10. Banners

### Prompt BAN-01 · Banner para plataforma o sitio web

**Objetivo:** generar banners de navegación, promoción o módulo.

**Cuándo utilizarlo:** home, páginas de curso, dashboards, biblioteca o campañas.

**Variables:** `{TITULO_BANNER}`, `{SUBTITULO}`, `{RECURSO_DESTINO}`, `{IMAGEN_BASE}`, `{CTA}`.

**Prompt reutilizable:**

> Diseña un banner PanaderIA™ para `{RECURSO_DESTINO}` con título `{TITULO_BANNER}`, subtítulo `{SUBTITULO}`, imagen base `{IMAGEN_BASE}` y CTA `{CTA}`. Estilo premium, artesanal, cálido, con espacio para Chef Juanote™ o Boly™ según aplique. Debe funcionar en escritorio y móvil.

**Checklist de salida:** responsive, CTA visible, marca clara y contraste suficiente.

---

## 11. Ilustraciones técnicas

### Prompt ILU-01 · Ilustración técnica de proceso

**Objetivo:** producir una ilustración clara cuando aún no exista fotografía real.

**Cuándo utilizarlo:** para diagramas, infografías, páginas de curso y descargables.

**Variables:** `{PROCESO}`, `{ETAPA}`, `{PUNTO_CONTROL}`, `{ERROR_A_EVITAR}`, `{VALIDACION_CHEF}`.

**Prompt reutilizable:**

> Crea una ilustración técnica para PanaderIA™ del proceso `{PROCESO}` en la etapa `{ETAPA}`. Debe resaltar el punto de control `{PUNTO_CONTROL}` y el error a evitar `{ERROR_A_EVITAR}`. Estilo vectorial, limpio, cálido, fácil de entender por principiantes. Marcar estado `{VALIDACION_CHEF}` y dejar claro si puede reemplazarse por fotografía real.

**Checklist de salida:** foco técnico, etiquetas, estilo consistente y sustitución indicada.

---

## 12. Material promocional

### Prompt PROMO-01 · Anuncio del Curso Maestro

**Objetivo:** crear copy promocional sin perder credibilidad técnica.

**Cuándo utilizarlo:** campañas de lanzamiento, landing pages, email o redes.

**Variables:** `{PROMESA_CURSO}`, `{PUBLICO_OBJETIVO}`, `{BENEFICIO}`, `{PRUEBA_CONFIANZA}`, `{CTA}`.

**Prompt reutilizable:**

> Escribe un anuncio promocional para el Curso Maestro de Bolillo de PanaderIA™ dirigido a `{PUBLICO_OBJETIVO}`. Promesa principal `{PROMESA_CURSO}`. Beneficio concreto `{BENEFICIO}`. Incluir prueba de confianza `{PRUEBA_CONFIANZA}` y CTA `{CTA}`. Tono profesional, cálido, honesto y sin promesas exageradas.

**Checklist de salida:** promesa clara, beneficio real, confianza, CTA y tono ético.

### Prompt PROMO-02 · Email de lanzamiento

**Objetivo:** producir correos de campaña para alumnos o prospectos.

**Cuándo utilizarlo:** preventa, lanzamiento, recordatorios o seguimiento.

**Variables:** `{ASUNTO}`, `{PROBLEMA_ALUMNO}`, `{SOLUCION_CURSO}`, `{BONO}`, `{CTA}`.

**Prompt reutilizable:**

> Redacta un email de lanzamiento para PanaderIA™ con asunto `{ASUNTO}`. Abrir con el problema del alumno `{PROBLEMA_ALUMNO}`, presentar la solución `{SOLUCION_CURSO}`, mencionar bono o recurso `{BONO}` si existe y cerrar con CTA `{CTA}`. Tono cercano, experto y motivador.

**Checklist de salida:** asunto claro, problema, solución, prueba/bono y CTA.

---

## 13. Actualizaciones futuras

### Prompt FUT-01 · Actualizar un recurso existente sin duplicar

**Objetivo:** mejorar una pieza sin crear duplicados ni modificar contenido técnico base.

**Cuándo utilizarlo:** cuando haya una nueva fotografía, video, corrección visual o validación del Chef Juanote™.

**Variables:** `{RECURSO_EXISTENTE}`, `{MEJORA_SOLICITADA}`, `{MATERIAL_REAL_NUEVO}`, `{VALIDACION_CHEF}`, `{NOTAS_VERSION}`.

**Prompt reutilizable:**

> Actualiza el recurso existente `{RECURSO_EXISTENTE}` de PanaderIA™ con la mejora `{MEJORA_SOLICITADA}` usando el material real nuevo `{MATERIAL_REAL_NUEVO}`. No duplicar el recurso, no cambiar contenido técnico base y conservar trazabilidad de versión. Marcar validación `{VALIDACION_CHEF}` y notas `{NOTAS_VERSION}`.

**Checklist de salida:** recurso reemplazado o versionado correctamente, sin duplicados, sin cambios técnicos no autorizados.

### Prompt FUT-02 · Crear variante por formato

**Objetivo:** adaptar una pieza existente a otro formato manteniendo coherencia.

**Cuándo utilizarlo:** transformar un recurso en post, banner, PDF, thumbnail, story o slide.

**Variables:** `{RECURSO_BASE}`, `{FORMATO_NUEVO}`, `{DIMENSIONES}`, `{USO_DESTINO}`, `{ELEMENTOS_OBLIGATORIOS}`.

**Prompt reutilizable:**

> Crea una variante del recurso `{RECURSO_BASE}` en formato `{FORMATO_NUEVO}` con dimensiones `{DIMENSIONES}` para `{USO_DESTINO}`. Mantener identidad PanaderIA™, respetar contenido original e incluir `{ELEMENTOS_OBLIGATORIOS}`. No alterar el mensaje técnico; solo adaptar composición, jerarquía y proporción.

**Checklist de salida:** misma idea, formato correcto, identidad consistente y sin contenido nuevo no validado.

---

## Matriz rápida de selección de prompts

| Necesidad | Prompt recomendado |
|---|---|
| Foto de proceso | FOT-01 |
| Comparación de errores | FOT-02 |
| Diagrama técnico | DIA-01 |
| Diagnóstico de problemas | DIA-02 |
| Lámina educativa | INFO-01 |
| Ley del Chef Juanote™ | INFO-02 |
| Clase completa | VID-01 |
| Storyboard premium | VID-02 |
| Video vertical breve | SHORT-01 |
| Tip corto del Chef | SHORT-02 |
| Portada | POR-01 |
| Miniatura | MINI-01 |
| Hoja de práctica | DESC-01 |
| Checklist | DESC-02 |
| Carrusel | RED-01 |
| Post motivacional | RED-02 |
| Banner | BAN-01 |
| Ilustración técnica | ILU-01 |
| Anuncio | PROMO-01 |
| Email | PROMO-02 |
| Actualización de recurso | FUT-01 |
| Variante por formato | FUT-02 |

## Control de calidad de cualquier prompt generado

Antes de aprobar una salida, verificar:

- ¿Respeta el contenido técnico existente?
- ¿Indica capítulo y destino de uso?
- ¿Mantiene el tono Chef Juanote™ y Boly™?
- ¿Incluye objetivo pedagógico?
- ¿Evita teoría sin aplicación práctica?
- ¿Indica si requiere fotografía, video o validación real?
- ¿Puede integrarse a Libro Maestro, Curso Maestro, Plataforma PanaderIA™ o sitio web?
- ¿Evita duplicar recursos ya existentes?

