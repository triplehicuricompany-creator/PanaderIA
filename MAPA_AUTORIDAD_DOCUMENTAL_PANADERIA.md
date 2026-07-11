# Mapa Maestro de Autoridad Documental y Fuente Única de Verdad PanaderIA™

**Fecha de creación:** 2026-07-11  
**Estado:** Documento rector inicial  
**Prioridad auditada:** P0  
**Propósito:** establecer qué documentos tienen autoridad editorial, técnica, visual, pedagógica, legal y operativa para evitar duplicidades, contradicciones y decisiones basadas en versiones no vigentes.

## 1. Decisión ejecutiva

A partir de la auditoría global del repositorio, el vacío más crítico es la ausencia de un mapa de autoridad documental. Este documento se crea como fuente rectora para decidir:

- Qué archivo manda cuando dos documentos dicen cosas distintas.
- Qué materiales pueden usarse para producción final del libro y curso.
- Qué documentos son referencia técnica, editorial o de apoyo.
- Qué archivos deben quedar fuera del flujo editorial actual por estar en estado beta, futuro, placeholder o pendiente.
- Qué aprobaciones mínimas se requieren antes de publicar, exportar, imprimir o vincular recursos mediante QR.

## 2. Principio de fuente única de verdad

PanaderIA™ debe operar con una jerarquía documental simple:

1. **Documento rector aprobado.** Define reglas, estructura, autoridad o estándar.
2. **Biblia técnica vigente.** Define conocimiento técnico verificable.
3. **Capítulo final aprobado.** Traduce la fuente técnica al texto del alumno.
4. **Recurso del alumno aprobado.** Convierte el contenido en checklist, guía, tabla, descargable o evaluación.
5. **Activo multimedia aprobado.** Complementa la enseñanza con imagen, video, audio, infografía o QR.
6. **Plataforma/publicación.** Distribuye únicamente material aprobado o explícitamente marcado como provisional.

Si existe contradicción, se aplica la autoridad superior. Si la contradicción ocurre entre documentos del mismo nivel, el documento con mayor estado editorial manda en este orden:

`final/aprobado` → `release candidate` → `vigente` → `en revisión` → `beta` → `borrador` → `pendiente` → `futuro`.

## 3. Jerarquía oficial de autoridad

| Nivel | Área | Fuente con autoridad primaria | Autoridad secundaria | Uso permitido |
|---:|---|---|---|---|
| 0 | Gobierno documental | `MAPA_AUTORIDAD_DOCUMENTAL_PANADERIA.md` | `SISTEMA_VERSIONES/politica_versionado.md`, `SISTEMA_CALIDAD/versionado_documental.md` | Resolver autoridad, vigencia y conflictos. |
| 1 | Libro maestro | `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md` | `LIBRO_MAESTRO_BOLILLO_PREMIUM.md`, `LIBRO_MAESTRO_BOLILLO.md` | Base editorial para publicación. |
| 2 | Técnica del bolillo | `BIBLIA_TECNICA_BOLILLO.md` | Biblias técnicas especializadas por proceso | Validar fórmulas, procesos, tiempos, temperaturas y criterios técnicos. |
| 3 | Ingredientes | `BIBLIA_INGREDIENTES_BOLILLO.md` | `BIBLIA_TECNICA_BOLILLO.md` | Definir insumos, funciones, sustituciones y riesgos. |
| 4 | Amasado | `BIBLIA_AMASADO_BOLILLO.md` | `BIBLIA_TECNICA_BOLILLO.md` | Definir desarrollo de gluten, textura, señales y errores. |
| 5 | Fermentación | `BIBLIA_FERMENTACION_BOLILLO.md` | `BIBLIA_TECNICA_BOLILLO.md` | Definir fermentación, pruebas, control de ambiente y diagnóstico. |
| 6 | Formado | `BIBLIA_FORMADO_BOLILLO.md` | `BIBLIA_TECNICA_BOLILLO.md` | Definir división, boleado, formado y tensión. |
| 7 | Corte | `BIBLIA_CORTE_BOLILLO.md` | `BIBLIA_TECNICA_BOLILLO.md` | Definir greñado, profundidad, ángulo y criterios visuales. |
| 8 | Horneado | `BIBLIA_HORNEADO_BOLILLO.md` | `BIBLIA_TECNICA_BOLILLO.md` | Definir temperatura, vapor, expansión, corteza y cocción. |
| 9 | Enfriado y conservación | `BIBLIA_ENFRIADO_CONSERVACION_BOLILLO.md` | `BIBLIA_TECNICA_BOLILLO.md` | Definir reposo, empaque, vida útil y conservación. |
| 10 | Diagnóstico | `BIBLIA_DIAGNOSTICO_BOLILLO.md` | `CALIDAD_PANADERIA.md` | Usar como backlog técnico hasta aprobación final. |
| 11 | Certificación | `BIBLIA_CERTIFICACION_PANADERO.md` | Sistemas de calidad y evaluación | Definir evidencias, criterios y evaluación profesional. |
| 12 | Curso/capítulos | `MAPA_CANONICO_CURSO/mapa_14_capitulos.md` | `MAPA_CANONICO_CURSO/matriz_capitulos_recursos.md` | Ordenar capítulos y recursos oficiales. |
| 13 | Estilo editorial | `GUIA_ESTILO_EDITORIAL_PANADERIA.md` | `MANUAL_MAESTRO_PANADERIA.md` | Resolver tono, estructura, formato y consistencia del texto. |
| 14 | Marca/personajes | `MANUAL_IDENTIDAD_PANADERIA.md` | `KIT_MARCA_PANADERIA.md`, `CHEF_JUANOTE.md`, `GUIA_OFICIAL_BOLY.md` | Definir identidad, voz, personaje y criterios de marca. |
| 15 | Recursos visuales | `BIBLIOTECA_RECURSOS_VISUALES_PANADERIA.md` | `CATALOGO_MAESTRO_FOTOGRAFIAS_PANADERIA.md` | Aprobar o solicitar imágenes, diagramas e infografías. |
| 16 | Multimedia | `GUION_MULTIMEDIA_PANADERIA.md` | `CATALOGO_MAESTRO_VIDEOS_PANADERIA.md`, `CENTRO_PRODUCCION_MULTIMEDIA/GUIA_PRODUCCION_MULTIMEDIA.md` | Producir videos, guiones, audio y QR multimedia. |
| 17 | Descargables del alumno | `RECURSOS_DESCARGABLES_ALUMNO/README.md` | `SISTEMA_DESCARGABLES/*` cuando esté completo | Publicar checklists, tablas, plantillas y ejercicios. |
| 18 | Plataforma | `ARQUITECTURA_GENERAL_PANADERIA.md` | `ARQUITECTURA_PANADERIA.md`, manifiestos de plataforma | Implementar o distribuir experiencia web. |
| 19 | Calidad | `CALIDAD_PANADERIA.md` | `SISTEMA_CALIDAD/*` | Validar calidad técnica, editorial, visual y operativa. |
| 20 | Legal | `SISTEMA_LEGAL/*` | Contratos, licencias y autorizaciones aprobadas | No publicar activos sin evidencia legal suficiente. |

## 4. Clasificación de documentos por función

### 4.1 Documentos rectores

Son documentos que definen reglas y no deben duplicarse en otros archivos:

- `MAPA_AUTORIDAD_DOCUMENTAL_PANADERIA.md`: autoridad documental y fuente única de verdad.
- `ARQUITECTURA_GENERAL_PANADERIA.md`: arquitectura global.
- `GUIA_ESTILO_EDITORIAL_PANADERIA.md`: estilo editorial.
- `MANUAL_IDENTIDAD_PANADERIA.md`: identidad de marca.
- `CALIDAD_PANADERIA.md`: calidad general.
- `SISTEMA_VERSIONES/politica_versionado.md`: reglas de versionado.

### 4.2 Documentos técnicos fuente

Son la base para validar contenido del libro, curso, recursos y evaluaciones:

- `BIBLIA_TECNICA_BOLILLO.md`.
- `BIBLIA_INGREDIENTES_BOLILLO.md`.
- `BIBLIA_AMASADO_BOLILLO.md`.
- `BIBLIA_FERMENTACION_BOLILLO.md`.
- `BIBLIA_FORMADO_BOLILLO.md`.
- `BIBLIA_CORTE_BOLILLO.md`.
- `BIBLIA_HORNEADO_BOLILLO.md`.
- `BIBLIA_ENFRIADO_CONSERVACION_BOLILLO.md`.
- `BIBLIA_CERTIFICACION_PANADERO.md`.

### 4.3 Documentos editoriales de salida

Son documentos que pueden convertirse en libro, capítulo, lección o recurso del alumno después de pasar control de calidad:

- `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md`.
- `LIBRO_MAESTRO_BOLILLO_PREMIUM.md`.
- `LIBRO_MAESTRO_BOLILLO.md`.
- `CURSO_MAESTRO_BOLILLO.md`.
- `CONTENIDO_COMERCIAL/*` cuando su estado sea aprobado.
- `PRODUCCION_BETA_1_0/capitulos/*` solo cuando pase de beta a release candidate o final.

### 4.4 Documentos de apoyo

Pueden orientar producción, pero no sustituyen a la fuente primaria:

- Catálogos visuales.
- Bancos de prompts.
- Plantillas de constructores.
- Roadmaps.
- Manifiestos de plataforma.
- README de carpetas.
- Documentos de sistemas futuros.

## 5. Reglas para resolver contradicciones

1. **Contradicción técnica:** manda la biblia técnica especializada. Si no existe una biblia especializada aprobada, manda `BIBLIA_TECNICA_BOLILLO.md`.
2. **Contradicción editorial:** manda `GUIA_ESTILO_EDITORIAL_PANADERIA.md`; para estructura de libro manda `LIBRO_MAESTRO_BOLILLO_PUBLICACION.md`.
3. **Contradicción visual:** manda `MANUAL_IDENTIDAD_PANADERIA.md`; para inventario de recursos visuales manda `BIBLIOTECA_RECURSOS_VISUALES_PANADERIA.md`.
4. **Contradicción pedagógica:** manda `CURSO_MAESTRO_BOLILLO.md` y, para secuencia, `MAPA_CANONICO_CURSO/mapa_14_capitulos.md`.
5. **Contradicción de evaluación:** manda `BIBLIA_CERTIFICACION_PANADERO.md` hasta que exista una rúbrica editorial/pedagógica final aprobada.
6. **Contradicción multimedia o QR:** manda `GUION_MULTIMEDIA_PANADERIA.md` y después el catálogo maestro correspondiente.
7. **Contradicción de plataforma:** manda `ARQUITECTURA_GENERAL_PANADERIA.md`.
8. **Contradicción legal:** no se publica hasta que el documento legal correspondiente esté completo y aprobado.
9. **Contradicción por estado:** un archivo `pendiente`, `placeholder`, `futuro` o `beta` no puede invalidar a un archivo `aprobado`, `vigente`, `release candidate` o `final`.
10. **Contradicción sin fuente clara:** se registra como bloqueo editorial y no avanza a publicación.

## 6. Estados documentales oficiales

| Estado | Definición | Puede publicarse | Puede usarse como fuente |
|---|---|---:|---:|
| Pendiente | Archivo creado como marcador o estructura mínima. | No | No |
| Borrador | Contenido inicial no validado. | No | No, salvo referencia interna |
| Beta | Contenido operativo en prueba. | No como final | Sí, con advertencia |
| En revisión | Requiere validación editorial, técnica o legal. | No | Parcialmente |
| Observado | Tiene hallazgos abiertos. | No | No para producción final |
| Aprobado | Validado por el responsable del área. | Sí, si no hay bloqueos cruzados | Sí |
| Vigente | Aprobado y activo como referencia actual. | Sí | Sí |
| Final | Cerrado para publicación o archivo histórico. | Sí | Sí |
| Obsoleto | Sustituido por versión posterior. | No | Solo histórico |
| Futuro | Backlog o visión no necesaria para el cierre actual. | No | No para producción actual |

## 7. Responsables conceptuales por tipo de aprobación

| Tipo de aprobación | Responsable conceptual | Evidencia mínima |
|---|---|---|
| Técnica panadera | Dirección técnica / Chef Juanote | Fórmula, proceso, señales, errores y criterios de calidad validados. |
| Editorial | Dirección editorial | Estructura, tono, claridad, coherencia y estilo aprobados. |
| Pedagógica | Dirección académica | Objetivo, práctica, evaluación y progresión del alumno aprobados. |
| Visual | Dirección de arte | Estilo, encuadre, consistencia de marca y utilidad didáctica aprobados. |
| Multimedia | Producción multimedia | Guion, duración, recursos, QR y formato de salida aprobados. |
| Legal | Responsable legal | Derechos, licencias, autorizaciones y restricciones documentadas. |
| Plataforma | Responsable técnico web | Ruta, manifiesto, archivo, accesibilidad y funcionamiento verificados. |
| Calidad final | Control de calidad editorial | Checklist completo sin bloqueos P0/P1. |

## 8. Flujo obligatorio antes de publicación

Ningún capítulo, recurso, video, QR, descargable o activo de plataforma debe publicarse como final sin pasar por este flujo:

1. **Identificar fuente primaria.** Confirmar qué documento rector o biblia técnica manda.
2. **Verificar estado.** Confirmar que la fuente no esté pendiente, futura u observada.
3. **Comparar contra capítulo.** Revisar que el contenido del alumno no contradiga la fuente técnica.
4. **Comparar contra recursos.** Revisar que checklist, descargable y evaluación coincidan con el capítulo.
5. **Comparar contra multimedia/QR.** Revisar que el video, imagen, audio o enlace enseñe lo mismo.
6. **Validar marca y estilo.** Revisar identidad, tono, personajes y formato.
7. **Validar legal.** Confirmar derechos de imagen, música, voz, marca y recursos externos.
8. **Registrar versión.** Indicar versión, fecha, responsable conceptual y decisión.
9. **Aprobar o bloquear.** Publicar solo si no existen bloqueos P0/P1.

## 9. Matriz mínima de trazabilidad por capítulo

Cada capítulo debe poder llenar esta tabla antes de pasar a producción final:

| Campo | Requisito |
|---|---|
| Capítulo | Número, título oficial y carpeta/documento fuente. |
| Fuente técnica | Biblia técnica primaria y secciones usadas. |
| Fuente editorial | Documento de libro o curso usado como salida. |
| Recursos del alumno | Checklist, descargable, tabla, ejercicio o guía vinculada. |
| Evaluación | Autoevaluación, rúbrica o evidencia práctica. |
| Activos visuales | Fotografías, diagramas, infografías o prompts aprobados. |
| Multimedia | Video, guion, audio o recurso interactivo vinculado. |
| QR | Destino, estado, responsable y prueba de funcionamiento. |
| Estado legal | Derechos confirmados o bloqueo pendiente. |
| Estado de calidad | Aprobado, observado o bloqueado. |

## 10. Bloqueos editoriales P0/P1

### 10.1 Bloqueos P0

Un elemento queda bloqueado de inmediato si ocurre cualquiera de estos casos:

- No existe fuente primaria identificada.
- Hay contradicción técnica con una biblia aprobada.
- La fórmula, temperatura, tiempo, hidratación o proceso no puede verificarse.
- El capítulo final no coincide con el recurso descargable o evaluación.
- El QR apunta a un recurso inexistente, provisional no marcado o externo sin control.
- Falta autorización legal para imagen, música, voz, marca o material de terceros.
- Se detecta duplicidad de fuente maestra sin decisión de autoridad.

### 10.2 Bloqueos P1

Un elemento requiere corrección antes de publicación si ocurre cualquiera de estos casos:

- Falta responsable conceptual.
- Falta versión o fecha de aprobación.
- Falta criterio de aceptación verificable.
- Hay diferencias de tono, formato o nomenclatura.
- Falta consistencia entre título, carpeta, manifiesto y destino web.
- El recurso es útil, pero no está conectado a capítulo, evaluación o QR.

## 11. Criterios para declarar un documento como fuente maestra

Un documento solo puede declararse fuente maestra si cumple todos estos criterios:

- Tiene propósito explícito.
- Tiene alcance delimitado.
- Tiene estado documental reconocible.
- Tiene versión o fecha de vigencia.
- Tiene relación clara con documentos dependientes.
- Tiene criterios de aceptación o uso.
- No contradice una fuente superior.
- Puede auditarse por nombre, ruta y función.

## 12. Documentos que no deben mandar por sí solos

Los siguientes tipos de documentos no deben usarse como autoridad final sin validación contra fuente superior:

- `README.md` de carpetas incompletas o pendientes.
- Manifiestos generados automáticamente o no validados.
- Plantillas de constructores.
- Roadmaps futuros.
- Archivos beta.
- Archivos de plataforma que duplican contenido editorial.
- Prompts de IA sin validación humana.
- Listados de ideas o bancos de recursos.
- Catálogos que describen activos, pero no prueban derechos o aprobación final.

## 13. Convención recomendada para nuevas decisiones de autoridad

Cuando se detecte una nueva contradicción, se debe registrar la decisión con este formato:

```markdown
## Decisión de autoridad documental

- **Fecha:** AAAA-MM-DD
- **Documento evaluado:** `ruta/del/documento.md`
- **Documento en conflicto:** `ruta/del/conflicto.md`
- **Tema:** fórmula / proceso / estilo / visual / legal / plataforma / evaluación
- **Fuente que manda:** `ruta/fuente_maestra.md`
- **Motivo:** explicación breve basada en jerarquía documental
- **Acción:** aprobar / corregir / retirar / mover a futuro / marcar como obsoleto
- **Responsable conceptual:** nombre o rol
- **Bloqueo:** ninguno / P0 / P1 / P2
```

## 14. Uso inmediato recomendado

Este documento debe usarse de inmediato para:

1. Congelar fuentes maestras antes de cerrar el libro.
2. Construir la matriz de trazabilidad capítulo por capítulo.
3. Revisar biblias técnicas contra capítulos finales.
4. Normalizar paquetes oficiales, QR, descargables y manifiestos.
5. Separar material futuro o beta del flujo editorial actual.
6. Evitar crear nuevos documentos duplicados cuando la solución sea aprobar, consolidar o versionar documentos existentes.

## 15. Criterio de cierre

El mapa de autoridad se considera operativo cuando cada capítulo del libro tenga:

- Una fuente técnica primaria identificada.
- Una salida editorial oficial identificada.
- Recursos del alumno vinculados.
- Evaluación o rúbrica vinculada.
- Activos visuales y multimedia vinculados.
- QR verificado o marcado como pendiente bloqueante.
- Estado legal claro.
- Estado de calidad final claro.

Hasta que esa trazabilidad exista, la producción debe priorizar gobierno documental por encima de creación de nuevo contenido.
