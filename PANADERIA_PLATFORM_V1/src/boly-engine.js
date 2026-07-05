export function normalize(text) {
  return String(text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function keywordScore(text, keywords = []) {
  const value = normalize(text);
  return keywords.reduce((score, keyword) => value.includes(normalize(keyword)) ? score + 1 : score, 0);
}

export function detectModule(question, modules) {
  const ranked = modules
    .map((module) => ({ module, score: keywordScore(question, [...module.topics, module.name, module.slug]) }))
    .sort((a, b) => b.score - a.score);
  return ranked[0]?.score > 0 ? ranked[0].module : modules.find((module) => module.slug === 'diagnostico') || modules[0];
}

export function detectDiagnostic(question, diagnostics) {
  const ranked = diagnostics
    .map((diagnostic) => ({ diagnostic, score: keywordScore(question, [...diagnostic.keywords, diagnostic.symptom]) }))
    .sort((a, b) => b.score - a.score);
  return ranked[0]?.score > 0 ? ranked[0].diagnostic : null;
}

export function buildBolyAnswer(question, modules, diagnostics) {
  const module = detectModule(question, modules);
  const diagnostic = detectDiagnostic(question, diagnostics);
  const intro = `¡Qué tal, camarada! Vamos paso a paso. Esto lo conecto con el módulo ${module.id}: ${module.name}.`;
  const guidance = module.contextHelp;
  const followUp = contextualQuestions(module.slug);
  const motivation = motivationalMessage(question);

  if (diagnostic) {
    return {
      module,
      diagnostic,
      text: [
        intro,
        guidance,
        `Síntoma probable: ${diagnostic.symptom}.`,
        `Causas posibles: ${diagnostic.probableCauses.join(', ')}.`,
        `Pasos recomendados: ${diagnostic.steps.map((step, index) => `${index + 1}) ${step}`).join(' ')}`,
        `Para afinar: ${followUp.join(' ')}`,
        `Recurso sugerido: ${module.recommendedResource}.`,
        motivation
      ].join('\n\n')
    };
  }

  return {
    module,
    diagnostic: null,
    text: [
      intro,
      guidance,
      'Necesito algunos datos para diagnosticar mejor: receta, tiempos, temperatura, textura, volumen y una foto si la tienes.',
      `Para afinar: ${followUp.join(' ')}`,
      `Recurso sugerido: ${module.recommendedResource}.`,
      motivation
    ].join('\n\n')
  };
}

function contextualQuestions(slug) {
  const map = {
    ingredientes: ['¿Qué harina usaste?', '¿Pesaste el agua con báscula?'],
    amasado: ['¿Pasó prueba de ventana?', '¿Amasaste a mano o en máquina?'],
    fermentacion: ['¿Cuánto creció la masa?', '¿Cuál fue la temperatura ambiente?'],
    formado: ['¿Pesaste piezas iguales?', '¿La costura quedó abajo?'],
    corte: ['¿Qué profundidad tuvo el corte?', '¿Usaste vapor al inicio?'],
    horneado: ['¿Precalentaste el horno?', '¿Qué color tomó la corteza?'],
    enfriado: ['¿Lo enfriaste en rejilla?', '¿Lo empacaste caliente?'],
    variantes: ['¿Qué ingrediente agregaste?', '¿Ajustaste hidratación?'],
    certificacion: ['¿Ya tienes fotos de evidencia?', '¿Completaste los módulos técnicos?']
  };
  return map[slug] || ['¿En qué etapa ocurrió?', '¿Qué observaste visualmente?'];
}

function motivationalMessage(question) {
  const messages = [
    'No hay mejor maestro que el error mismo: hoy ya tienes una pista para mejorar.',
    'La masa habla; tú estás aprendiendo a escucharla.',
    'Observa, ajusta y repite. Así se forma criterio panadero.',
    'Buen intento, camarada. Ahora trabajemos con datos, no con adivinanzas.'
  ];
  return messages[normalize(question).length % messages.length];
}
