import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
}

const personality = readJson('knowledge/personality.json');
const modules = readJson('knowledge/modules.json');
const diagnostics = readJson('knowledge/diagnostics.json');
const documents = readJson('knowledge/documents.json');
const pedagogy = readJson('knowledge/pedagogy.json');

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function scoreByKeywords(text, keywords = []) {
  const haystack = normalize(text);
  return keywords.reduce((score, keyword) => haystack.includes(normalize(keyword)) ? score + 1 : score, 0);
}

function bestByScore(collection, question, keywordsForItem) {
  const ranked = collection
    .map((item) => ({ item, score: scoreByKeywords(question, keywordsForItem(item)) }))
    .sort((a, b) => b.score - a.score);
  return ranked[0]?.score > 0 ? ranked[0].item : null;
}

export function detectModule(question) {
  return bestByScore(modules, question, (module) => module.topics.concat([module.name, module.slug])) || modules[9];
}

export function detectDiagnostic(question) {
  return bestByScore(diagnostics, question, (item) => item.keywords.concat([item.symptom]));
}

export function detectStudentLevel(question) {
  return bestByScore(pedagogy.studentLevels, question, (level) => level.keywords) || pedagogy.studentLevels[0];
}

function detectWorkshopCase(question, module) {
  return bestByScore(
    pedagogy.workshopCases,
    question,
    (item) => item.keywords.concat(item.moduleSlugs.includes(module.slug) ? [module.slug, module.name] : [])
  );
}

function detectChefLaw(question, module, diagnostic, workshopCase) {
  const enrichedQuestion = [
    question,
    module?.slug,
    module?.name,
    diagnostic?.symptom,
    diagnostic?.module,
    workshopCase?.title,
    workshopCase?.lesson
  ].filter(Boolean).join(' ');

  return bestByScore(
    pedagogy.chefJuanoteLaws,
    enrichedQuestion,
    (law) => law.keywords.concat(law.moduleSlugs.includes(module.slug) ? [module.slug, module.name] : [])
  ) || pedagogy.chefJuanoteLaws.find((law) => law.id === 'verifica');
}

function detectFromMap(question, map) {
  const found = Object.entries(map).find(([, keywords]) => scoreByKeywords(question, keywords) > 0);
  return found ? found[0] : null;
}

export function inferLearningContext(question, module = detectModule(question), diagnostic = detectDiagnostic(question)) {
  const doing = detectFromMap(question, {
    'preparar fórmula o ingredientes': ['receta', 'formula', 'ingredientes', 'harina', 'agua', 'sal', 'levadura'],
    'amasar o desarrollar gluten': ['amasar', 'amasado', 'gluten', 'ventana', 'pegajosa', 'elasticidad'],
    'fermentar masa o piezas': ['fermentar', 'fermentacion', 'crecio', 'no crece', 'prueba de dedo'],
    'dividir, bolear o formar': ['dividir', 'bolear', 'formar', 'pieza', 'costura'],
    'cortar o abrir greña': ['corte', 'greña', 'navaja', 'abrir', 'rajar'],
    'hornear': ['hornear', 'horno', 'vapor', 'palido', 'quemado', 'cenizo'],
    'enfriar o conservar': ['enfriar', 'rejilla', 'empaque', 'conservar', 'corteza blanda'],
    'organizar producción': ['produccion', 'lote', 'negocio', 'certificacion', 'venta']
  }) || `trabajar el módulo ${module.name}`;

  const observation = diagnostic?.symptom || detectFromMap(question, {
    'masa pegajosa': ['pegajosa', 'se pega', 'humeda', 'húmeda'],
    'masa sin crecimiento': ['no crece', 'no fermenta', 'no arranco', 'no arrancó'],
    'greña cerrada': ['no abre', 'greña cerrada', 'corte cerrado'],
    'corteza pálida': ['palido', 'pálido', 'sin color'],
    'corteza blanda': ['corteza blanda', 'se ablanda'],
    'bolillo cenizo': ['cenizo', 'opaco', 'reseco'],
    'miga densa': ['denso', 'compacto', 'pesado']
  });

  const tool = detectFromMap(question, {
    'báscula': ['bascula', 'báscula', 'pesar', 'gramos'],
    'batidora KitchenAid': ['kitchenaid'],
    'amasadora o batidora': ['amasadora', 'batidora', 'gancho', 'paleta'],
    'navaja o lame': ['navaja', 'lame', 'cuchillo'],
    'horno': ['horno', 'charola', 'vapor'],
    'rejilla de enfriado': ['rejilla', 'enfriado']
  });

  const environment = detectFromMap(question, {
    'ambiente frío': ['frio', 'frío', 'invierno', 'baja temperatura'],
    'ambiente caliente': ['calor', 'caliente', 'verano'],
    'ambiente húmedo': ['humedo', 'húmedo', 'lluvia', 'humedad'],
    'corrientes de aire o pérdida de humedad': ['corriente', 'reseco', 'cenizo', 'perdida de humedad'],
    'horno nuevo o irregular': ['horno nuevo', 'horno viejo', 'temperatura irregular']
  });

  const missingFields = [];
  if (!observation) missingFields.push('qué observas en la masa o en el bolillo');
  if (!tool && ['herramientas', 'amasado', 'corte', 'horneado'].includes(module.slug)) missingFields.push('qué herramienta utilizas');
  if (!environment && ['fermentacion', 'horneado', 'enfriado', 'diagnostico'].includes(module.slug)) missingFields.push('condiciones ambientales o temperatura');
  if (!scoreByKeywords(question, ['tiempo', 'minuto', 'hora', 'temperatura', 'grados', 'crecio', 'creció'])) missingFields.push('tiempo, temperatura o crecimiento observado');

  return {
    doing,
    stage: module.name,
    possibleError: diagnostic?.symptom || observation || 'todavía no confirmado',
    observation: observation || 'sin observación específica todavía',
    tool: tool || 'herramienta no indicada',
    environment: environment || 'ambiente no indicado',
    missingFields
  };
}

function contextQuestions(moduleSlug, inferredContext = null) {
  const shared = ['¿Qué receta o porcentaje de hidratación usaste?', '¿Cuánto tiempo y a qué temperatura trabajaste?', '¿Tienes foto del antes y después?'];
  const byModule = {
    ingredientes: ['¿Qué tipo o marca de harina usaste?', '¿Pesaste ingredientes con báscula?'],
    amasado: ['¿La masa pasó prueba de ventana o se rompía rápido?', '¿Amasaste a mano o en máquina?'],
    fermentacion: ['¿Cuánto creció la masa?', '¿Hiciste prueba de dedo?'],
    formado: ['¿Pesaste piezas iguales?', '¿La costura quedó abajo?'],
    corte: ['¿Qué tan profundo cortaste?', '¿La navaja estaba afilada y en ángulo?'],
    horneado: ['¿Precalentaste el horno?', '¿Usaste vapor al inicio?'],
    enfriado: ['¿Lo enfriaste en rejilla?', '¿Lo empacaste todavía caliente?'],
    variantes: ['¿Qué inclusión agregaste y en qué porcentaje?', '¿Ajustaste hidratación?']
  };
  const questions = byModule[moduleSlug] || shared;
  const inferredQuestions = inferredContext?.missingFields?.map((field) => `Confírmame ${field}.`) || [];
  return Array.from(new Set(inferredQuestions.concat(questions))).slice(0, 5);
}

function recipeHelp(question) {
  if (!scoreByKeywords(question, ['receta', 'formula', 'porcentaje', 'ingredientes', 'harina', 'agua'])) return null;
  return [
    'Para hablar de receta, piensa en porcentaje panadero: la harina es el 100% y todo lo demás se calcula sobre esa base.',
    'Si cambias harina o clima, ajusta el agua poco a poco y registra el resultado; no corrijas a ciegas con harina extra.',
    'Como base de práctica, usa una fórmula simple y modifica solo una variable por intento para aprender qué cambió.'
  ];
}

export function searchFaq(question, limit = 3) {
  return pedagogy.faq
    .map((item) => ({ item, score: scoreByKeywords(question, item.keywords.concat([item.question, item.moduleSlug])) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.item);
}

function actionPlan(diagnostic, recipe, needsMoreContext) {
  if (diagnostic) {
    return diagnostic.steps.map((step, i) => `${i + 1}) ${step}`).join(' ');
  }
  if (recipe) return recipe.join(' ');
  if (needsMoreContext) return 'No cierres la corrección todavía: registra datos, toma foto, verifica herramienta, tiempo, temperatura y textura antes de cambiar la fórmula.';
  return 'Haz una prueba controlada: cambia una sola variable, registra el resultado y compara contra tu intento anterior.';
}

export function answerQuestion(question, options = {}) {
  const module = detectModule(question);
  const diagnostic = detectDiagnostic(question);
  const recipe = recipeHelp(question);
  const studentLevel = detectStudentLevel(question);
  const inferredContext = inferLearningContext(question, module, diagnostic);
  const workshopCase = detectWorkshopCase(question, module);
  const chefLaw = detectChefLaw(question, module, diagnostic, workshopCase);
  const faqMatches = searchFaq(question);
  const motivation = personality.motivationalMessages[Math.abs(normalize(question).length) % personality.motivationalMessages.length];
  const questions = contextQuestions(module.slug, inferredContext);
  const needsMoreContext = inferredContext.missingFields.length > 0 && !diagnostic;
  const plan = actionPlan(diagnostic, recipe, needsMoreContext);

  const parts = [];
  parts.push(`${personality.voice.greeting} Vamos paso a paso. ${motivation}`);
  parts.push(`Primero ubico tu caso como ayudante del Chef Juanote: estás intentando ${inferredContext.doing}; etapa probable: ${inferredContext.stage}; observación reportada: ${inferredContext.observation}; herramienta: ${inferredContext.tool}; ambiente: ${inferredContext.environment}.`);

  if (needsMoreContext) {
    parts.push(`Antes de darte una corrección cerrada necesito confirmar datos: ${questions.join(' ')}`);
  }

  parts.push(`Qué ocurrió: ${diagnostic ? diagnostic.symptom : `lo conecto principalmente con ${module.name}, pero el error exacto ${needsMoreContext ? 'aún debe verificarse' : 'parece controlable con observación y bitácora'}`}.`);
  parts.push(`Por qué ocurrió: ${diagnostic ? diagnostic.probableCauses.join(', ') : 'puede venir de una variable sin medir: fórmula, herramienta, tiempo, temperatura, textura, volumen o manejo del horno.'}`);
  parts.push(`Cómo corregirlo: ${plan}`);
  parts.push(`Cómo evitarlo: trabaja con bitácora, cambia solo una variable por intento, verifica antes de suponer y compara el producto final contra el criterio del módulo ${module.id}.`);

  if (workshopCase) {
    parts.push(`Caso del Obrador relacionado: ${workshopCase.title}. ${workshopCase.lesson} Corrección del caso: ${workshopCase.correction}`);
  }

  if (chefLaw) {
    parts.push(`Ley del Chef Juanote™: “${chefLaw.text}” ${chefLaw.teachingUse}`);
  }

  parts.push(`Nivel detectado: ${studentLevel.name}. Te responderé con ${studentLevel.tone}: ${studentLevel.guidance}`);
  parts.push(`Recurso sugerido: ${module.recommendedResource}`);

  if (faqMatches.length > 0) {
    parts.push(`Preguntas frecuentes relacionadas: ${faqMatches.map((item) => `${item.question} ${item.answer}`).join(' ')}`);
  }

  parts.push(`Preguntas rápidas para afinar la respuesta: ${questions.join(' ')}`);

  if (options.format === 'json') {
    return {
      assistant: personality.name,
      module,
      diagnostic,
      studentLevel,
      inferredContext,
      needsMoreContext,
      workshopCase,
      chefLaw,
      faqMatches,
      recommendedResource: module.recommendedResource,
      followUpQuestions: questions,
      responseProtocol: pedagogy.method.sequence,
      message: parts.join('\n\n'),
      sourcePriority: documents.priorityOrder.slice(0, 8)
    };
  }

  return parts.join('\n\n');
}

export function getKnowledgeBaseSummary() {
  return {
    assistant: personality.name,
    modules: modules.length,
    diagnostics: diagnostics.length,
    documentsIndexed: documents.priorityOrder.length,
    workshopCases: pedagogy.workshopCases.length,
    chefJuanoteLaws: pedagogy.chefJuanoteLaws.length,
    faqItems: pedagogy.faq.length,
    conversationExamples: pedagogy.conversationExamples.length,
    sourcePriority: documents.priorityOrder
  };
}
