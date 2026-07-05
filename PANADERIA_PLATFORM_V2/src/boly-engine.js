export function normalize(text) {
  return String(text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function keywordScore(text, keywords = []) {
  const value = normalize(text);
  return keywords.reduce((score, keyword) => value.includes(normalize(keyword)) ? score + 1 : score, 0);
}

export function searchLibrary(query, { modules = [], resources = [], diagnostics = [], products = [], videos = [], technicalLibrary = [], courseContent = [] }) {
  const q = normalize(query);
  const pack = [
    ...modules.map((item) => ({ kind: 'Módulo', title: item.name, text: [item.name, item.slug, item.contextHelp, item.recommendedResource, ...(item.topics || [])].join(' '), item })),
    ...resources.map((item) => ({ kind: item.type, title: item.title, text: [item.title, item.type, item.href, ...(item.tags || [])].join(' '), item })),
    ...diagnostics.map((item) => ({ kind: 'Diagnóstico', title: item.symptom, text: [item.symptom, item.module, ...(item.keywords || []), ...(item.probableCauses || []), ...(item.steps || [])].join(' '), item })),
    ...products.map((item) => ({ kind: 'Producto', title: item.name, text: [item.name, item.type, item.description, item.paymentStatus].join(' '), item })),
    ...videos.map((item) => ({ kind: 'Video', title: item.title, text: [item.title, item.status, ...(item.tags || [])].join(' '), item })),
    ...technicalLibrary.map((item) => ({ kind: 'Biblioteca técnica', title: item.title, text: [item.title, item.source, item.excerpt, ...(item.headings || [])].join(' '), item })),
    ...courseContent.flatMap((module) => [
      { kind: 'Contenido del curso', title: module.title, text: [module.title, module.summary, module.realCase, module.faq, ...(module.exercises || []), ...(module.checklist || [])].join(' '), item: module },
      ...(module.lessons || []).map((lesson) => ({ kind: 'Lección', title: lesson.title, text: [lesson.title, lesson.objective, lesson.content, lesson.chefTip, lesson.bolyPrompt].join(' '), item: { ...lesson, module: module.id } }))
    ])
  ];
  if (!q) return pack.slice(0, 24);
  return pack
    .map((entry) => ({ ...entry, score: keywordScore(entry.text, q.split(/\s+/).filter(Boolean)) + (normalize(entry.title).includes(q) ? 4 : 0) }))
    .filter((entry) => entry.score > 0 || normalize(entry.text).includes(q))
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 40);
}

export function detectModule(question, modules) {
  const ranked = modules
    .map((module) => ({ module, score: keywordScore(question, [...module.topics, module.name, module.slug]) }))
    .sort((a, b) => b.score - a.score);
  return ranked[0]?.score > 0 ? ranked[0].module : modules.find((module) => module.slug === 'diagnostico') || modules[0];
}

export function detectDiagnostic(question, diagnostics) {
  const ranked = diagnostics
    .map((diagnostic) => ({ diagnostic, score: keywordScore(question, [...diagnostic.keywords, diagnostic.symptom, ...(diagnostic.probableCauses || [])]) }))
    .sort((a, b) => b.score - a.score);
  return ranked[0]?.score > 0 ? ranked[0].diagnostic : null;
}

export function buildBolyAnswer(question, knowledge) {
  const { modules, diagnostics, resources, technicalLibrary, courseContent } = knowledge;
  const module = detectModule(question, modules);
  const diagnostic = detectDiagnostic(question, diagnostics);
  const related = searchLibrary(question, knowledge).slice(0, 5);
  const technical = related.find((entry) => entry.kind === 'Biblioteca técnica');
  const lesson = related.find((entry) => entry.kind === 'Lección');
  const downloadable = related.find((entry) => entry.item?.href);
  const followUp = contextualQuestions(module.slug);
  const intro = `¡Qué tal, camarada! Vamos paso a paso. Lo conecto principalmente con el módulo ${module.id}: ${module.name}.`;
  const answer = [intro, module.contextHelp];

  if (diagnostic) {
    answer.push(`Síntoma probable: ${diagnostic.symptom}.`);
    answer.push(`Causas posibles: ${diagnostic.probableCauses.join(', ')}.`);
    answer.push(`Pasos recomendados: ${diagnostic.steps.map((step, index) => `${index + 1}) ${step}`).join(' ')}`);
    answer.push(`Este diagnóstico cruza: ${diagnostic.module}.`);
  } else {
    answer.push('No voy a inventar datos: para diagnosticar mejor necesito receta, tiempos, temperatura, textura, volumen y foto del resultado si la tienes.');
  }

  if (lesson) answer.push(`Lección sugerida: ${lesson.title}. ${lesson.item.content}`);
  if (technical) answer.push(`Referencia técnica sugerida: ${technical.title} (${technical.item.source}).`);
  if (downloadable) answer.push(`Descarga útil: ${downloadable.title} (${downloadable.item.href}).`);
  answer.push(`Recurso recomendado: ${module.recommendedResource}.`);
  answer.push(`Para afinar: ${followUp.join(' ')}`);
  answer.push(motivationalMessage(question));

  return { module, diagnostic, related, text: answer.join('\n\n') };
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
