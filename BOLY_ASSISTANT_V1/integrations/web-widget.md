# Integración web futura de Boly™

Boly™ V1 está preparado para integrarse en la página web oficial mediante tres capas:

1. **Widget de pregunta rápida**
   - Campo de texto: “Cuéntame qué pasó con tu bolillo”.
   - Botón: “Preguntar a Boly™”.
   - Respuesta inicial usando `answerQuestion(question, { format: 'json' })`.

2. **Ayuda contextual por página**
   - Curso: sugerir módulos y recursos.
   - Blog: responder dudas relacionadas con el artículo.
   - Área de alumnos: revisar progreso, recomendar práctica y preparar evaluación.
   - Certificación: explicar rúbricas y evidencias.

3. **Escalamiento a IA real**
   - Conectar esta capa de reglas a una API con recuperación semántica.
   - Indexar documentos oficiales por fragmentos.
   - Mantener la personalidad y límites definidos en `knowledge/personality.json`.

## Contrato sugerido

```ts
type BolyRequest = {
  question: string;
  moduleId?: number;
  studentLevel?: 'principiante' | 'intermedio' | 'profesional';
  evidenceUrls?: string[];
};

type BolyResponse = {
  message: string;
  module: { id: number; name: string; slug: string };
  diagnostic?: { symptom: string; probableCauses: string[]; steps: string[] };
  followUpQuestions: string[];
  recommendedResource: string;
};
```
