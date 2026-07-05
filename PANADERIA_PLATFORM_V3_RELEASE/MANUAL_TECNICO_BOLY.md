# Manual técnico de Boly™

## Archivos principales

- `src/boly-engine.js`: motor local de Boly™.
- `data/modules.json`: módulos y palabras clave.
- `data/diagnostics.json`: síntomas, causas y pasos recomendados.
- `data/course-content.json`: lecciones, ejercicios, casos, checklists y FAQs.
- `data/technical-library.json`: referencias técnicas indexadas.
- `data/resources.json`: recursos descargables que Boly™ puede sugerir.

## Flujo de respuesta

1. Normaliza pregunta.
2. Detecta módulo probable.
3. Detecta diagnóstico si hay síntoma compatible.
4. Busca lecciones, recursos y referencias técnicas relacionadas.
5. Construye respuesta pedagógica con preguntas de seguimiento.

## Límites

- Boly™ es local y rule-based.
- No reemplaza al instructor.
- No inventa parámetros si faltan datos.
- Para diagnóstico avanzado, pedir receta, tiempos, temperatura, textura, volumen y foto.

## Prueba técnica

```bash
npm run test:smoke
```
