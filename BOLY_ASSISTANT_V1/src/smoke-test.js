import assert from 'node:assert/strict';
import {
  answerQuestion,
  detectDiagnostic,
  detectModule,
  detectStudentLevel,
  getKnowledgeBaseSummary,
  inferLearningContext,
  searchFaq
} from './boly-core.js';

const cut = answerQuestion('Mi bolillo no abre en el corte y queda pálido');
assert.match(cut, /Boly™|camarada|módulo/i);
assert.match(cut, /Qué ocurrió|Por qué ocurrió|Cómo corregirlo|Cómo evitarlo/i);
assert.match(cut, /corte|horneado|vapor|greña/i);

const module = detectModule('Tengo masa pegajosa durante el amasado');
assert.equal(module.slug, 'amasado');

const diagnostic = detectDiagnostic('Mi corteza se humedece y queda blanda');
assert.equal(diagnostic.symptom, 'Corteza blanda después de hornear');

const level = detectStudentLevel('Soy principiante y es mi primera vez haciendo bolillo');
assert.equal(level.id, 'principiante');

const context = inferLearningContext('Uso KitchenAid con paleta y la masa está pegajosa en amasado');
assert.equal(context.tool, 'batidora KitchenAid');
assert.equal(context.observation, 'Masa pegajosa o difícil de manejar');

const needsContext = answerQuestion('Mi masa salió rara', { format: 'json' });
assert.equal(needsContext.needsMoreContext, true);
assert.ok(needsContext.followUpQuestions.length >= 3);

const guided = answerQuestion('Mi horno nuevo deja el bolillo pálido', { format: 'json' });
assert.equal(guided.chefLaw.id, 'horno-personalidad');
assert.equal(guided.workshopCase.id, 'horno-nuevo-viejo');
assert.match(guided.message, /Caso del Obrador|Ley del Chef Juanote/i);

const faq = searchFaq('¿Por qué no abre la greña del bolillo?');
assert.equal(faq[0].id, 'corte-no-abre');

const summary = getKnowledgeBaseSummary();
assert.equal(summary.modules, 14);
assert.equal(summary.workshopCases, 7);
assert.equal(summary.chefJuanoteLaws, 6);
assert.ok(summary.faqItems >= 10);
assert.ok(summary.documentsIndexed >= 10);

console.log('Boly™ smoke test passed');
