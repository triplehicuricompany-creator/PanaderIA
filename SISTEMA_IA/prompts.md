# Biblioteca de prompts

## Propósito

La biblioteca de prompts organiza instrucciones reutilizables para tareas internas de IA. Su objetivo es mejorar consistencia, reducir improvisación y mantener control editorial.

Los prompts aquí definidos son plantillas de trabajo, no contenido final del libro.

## Categorías maestras

### 1. Prompts de revisión editorial

Uso previsto:

- Detectar errores de estilo.
- Revisar claridad y estructura.
- Verificar coherencia de tono.
- Preparar observaciones para edición humana.

Plantilla base:

```text
Revisa el siguiente material como apoyo editorial interno de PanaderIA™. No generes contenido final. Identifica problemas de claridad, estructura, tono, repetición o consistencia. Entrega observaciones accionables y separa hallazgos críticos de sugerencias opcionales.
```

### 2. Prompts de revisión técnica

Uso previsto:

- Revisar consistencia panadera.
- Detectar contradicciones con fuentes oficiales.
- Señalar puntos que requieren validación experta.

Plantilla base:

```text
Analiza el siguiente material desde una perspectiva técnica de panadería. No reemplaces la revisión humana. Señala posibles inconsistencias, riesgos de interpretación, omisiones o puntos que deban verificarse contra las biblias técnicas oficiales de PanaderIA™.
```

### 3. Prompts de organización documental

Uso previsto:

- Clasificar documentos.
- Generar índices internos.
- Identificar pendientes.
- Ordenar información por sistema o fase.

Plantilla base:

```text
Organiza la información proporcionada en una estructura clara para uso interno. No añadas contenido final. Clasifica temas, dependencias, pendientes y posibles rutas de seguimiento.
```

### 4. Prompts de diagnóstico de consistencia

Uso previsto:

- Comparar sistemas.
- Detectar duplicidades.
- Identificar brechas entre documentación y producción.

Plantilla base:

```text
Compara los elementos proporcionados y detecta inconsistencias, duplicidades, vacíos o dependencias no resueltas. Entrega un diagnóstico interno con prioridades de atención.
```

### 5. Prompts de preparación de automatizaciones

Uso previsto:

- Diseñar pasos de procesos repetibles.
- Identificar entradas, salidas y controles.
- Definir puntos de revisión humana.

Plantilla base:

```text
Diseña un flujo de automatización interno para la tarea indicada. Define entradas, proceso, salidas, validaciones, riesgos y puntos obligatorios de revisión humana.
```

## Reglas de uso

- Todo prompt debe indicar si la salida es borrador, diagnóstico, checklist o reporte.
- Los prompts no deben pedir publicación automática.
- Los prompts deben preservar la identidad de PanaderIA™.
- Los prompts deben solicitar verificación cuando haya incertidumbre.
- Las salidas críticas deben revisarse antes de integrarse a cualquier sistema.
