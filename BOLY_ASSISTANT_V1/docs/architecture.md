# Arquitectura de Boly™ Assistant V1

## 1. Objetivo

Boly™ Assistant V1 es la primera capa funcional del asistente oficial de PanaderIA™. Su objetivo es acompañar al alumno con respuestas claras, motivacionales y técnicamente alineadas con las biblias oficiales del proyecto.

## 2. Capas del sistema

| Capa | Archivo | Responsabilidad |
|---|---|---|
| Personalidad | `knowledge/personality.json` | Define misión, tono, reglas, límites y mensajes motivacionales. |
| Módulos | `knowledge/modules.json` | Mapea los 14 módulos, temas, ayuda contextual y recursos sugeridos. |
| Diagnóstico | `knowledge/diagnostics.json` | Relaciona síntomas frecuentes con causas probables y pasos de solución. |
| Documentos fuente | `knowledge/documents.json` | Lista el orden de prioridad de documentos oficiales para futuras indexaciones. |
| Núcleo | `src/boly-core.js` | Detecta módulo, detecta diagnóstico y construye respuestas. |
| CLI | `src/cli.js` | Permite hacer preguntas desde terminal. |
| Pruebas | `src/smoke-test.js` | Verifica que el asistente responda, detecte módulos y cargue conocimiento. |
| Integración | `integrations/web-widget.md` | Documenta contrato para web, apps y APIs futuras. |

## 3. Flujo de respuesta

1. El alumno escribe una pregunta.
2. Boly™ normaliza el texto.
3. El núcleo calcula coincidencias con temas de módulos.
4. El núcleo busca síntomas en la tabla de diagnóstico.
5. Boly™ construye una respuesta con:
   - saludo empático;
   - módulo relacionado;
   - síntoma o explicación probable;
   - pasos recomendados;
   - preguntas de contexto;
   - recurso sugerido;
   - mensaje motivacional.
6. La respuesta puede devolverse como texto o JSON para integraciones.

## 4. Principios técnicos

- V1 no depende de servicios externos.
- V1 debe poder ejecutarse sin red.
- V1 prioriza conocimiento oficial, no respuestas inventadas.
- V1 no da instrucciones peligrosas.
- V1 pide más contexto cuando la duda no tiene datos suficientes.
- V1 está listo para envolverse en una API HTTP, widget web o app móvil.

## 5. Evolución recomendada

### V1.1

- Añadir más diagnósticos.
- Añadir respuestas por intención: receta, compra, certificación, negocio, seguridad.
- Añadir recursos descargables por módulo.

### V2

- Indexar todos los Markdown oficiales por fragmentos.
- Agregar búsqueda semántica.
- Conectar historial de alumno.
- Integrar Boly™ en `WEB_PANADERIA_V1`.

### V3

- Evaluar fotografías de alumnos.
- Recomendar ejercicios personalizados.
- Generar planes de práctica.
- Preparar certificación asistida por IA.
