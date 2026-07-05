# BOLY_ASSISTANT_V1

Primera versión funcional de **Boly™**, el asistente inteligente oficial de PanaderIA™.

Boly™ V1 es una implementación local, documentada y extensible que usa reglas, módulos, diagnósticos y personalidad oficial para responder dudas frecuentes del Curso Maestro de Bolillo. No reemplaza una futura IA con recuperación semántica; la prepara.

## Qué incluye

- Arquitectura del asistente.
- Base de conocimientos estructurada a partir de los documentos oficiales de PanaderIA™.
- Sistema funcional de preguntas y respuestas por consola.
- Personalidad, estilo de conversación y mensajes motivacionales.
- Ayuda contextual para los 14 módulos del Curso Maestro de Bolillo.
- Diagnóstico inicial para dudas de recetas, amasado, fermentación, horneado, corte, enfriado, variantes y problemas comunes.
- Contrato de integración para web y futuras aplicaciones móviles.

## Uso rápido

```bash
cd BOLY_ASSISTANT_V1
npm run demo
npm run ask -- "Boly, mi masa quedó pegajosa durante el amasado"
node src/cli.js "Mi bolillo no abre en el corte"
node src/cli.js --summary
npm run test:smoke
```

## Estructura

```text
BOLY_ASSISTANT_V1/
├── docs/
│   ├── architecture.md
│   └── conversation-style.md
├── integrations/
│   └── web-widget.md
├── knowledge/
│   ├── diagnostics.json
│   ├── documents.json
│   ├── modules.json
│   └── personality.json
├── src/
│   ├── boly-core.js
│   ├── cli.js
│   └── smoke-test.js
├── examples/
│   └── sample-questions.md
└── package.json
```

## Alcance de V1

Boly™ V1 responde con reglas y conocimiento curado. Está diseñado para:

1. Demostrar funcionamiento real.
2. Unificar la personalidad oficial.
3. Guiar dudas recurrentes.
4. Preparar integración web/móvil.
5. Servir como base para una V2 con embeddings, búsqueda semántica, historial de alumno y análisis de fotos.
