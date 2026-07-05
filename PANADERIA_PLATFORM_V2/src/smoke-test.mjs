import assert from 'node:assert/strict';
import fs from 'node:fs';
import { buildBolyAnswer, detectModule, detectDiagnostic, searchLibrary } from './boly-engine.js';

const read = (file) => JSON.parse(fs.readFileSync(new URL(`../data/${file}`, import.meta.url), 'utf8'));
const knowledge = {
  modules: read('modules.json'),
  diagnostics: read('diagnostics.json'),
  resources: read('resources.json'),
  products: read('products.json'),
  videos: read('videos.json'),
  technicalLibrary: read('technical-library.json'),
  courseContent: read('course-content.json'),
  certificates: read('certificate-templates.json')
};
const config = read('platform-config.json');

assert.equal(knowledge.modules.length, 14);
assert.ok(knowledge.technicalLibrary.length >= 10);
assert.equal(knowledge.courseContent.length, 14);
assert.ok(knowledge.courseContent.every((module) => module.lessons.length >= 3 && module.exercises.length >= 3 && module.exam.questions.length >= 3 && module.checklist.length >= 5));
assert.ok(knowledge.courseContent.every((module) => module.lessons.every((lesson) => !lesson.content.includes('con criterio práctico: observa la masa'))));
assert.deepEqual(knowledge.certificates.map((cert) => cert.requiredModules), [7, 14]);
assert.ok(knowledge.resources.some((resource) => resource.id === 'pack-recursos-panaderia' && resource.href.includes('pack-recursos')));
assert.ok(knowledge.resources.every((resource) => resource.href.includes('downloads/') || resource.href.includes('videos/')));
assert.ok(knowledge.videos.some((video) => video.module === 8));
assert.ok(knowledge.products.every((product) => product.price > 0 && product.paymentStatus));
assert.ok(knowledge.products.find((product) => product.id === 'certificacion-pro').download.includes('certificado-panadero-profesional'));
assert.ok(fs.readFileSync(new URL('../downloads/books/libro-maestro-bolillo-premium.md', import.meta.url), 'utf8').includes('Edición comercial RC1'));
assert.deepEqual(config.payments.providers, ['stripe', 'paypal']);
assert.equal(detectModule('mi bolillo no abre en el corte', knowledge.modules).slug, 'corte');
assert.equal(detectDiagnostic('mi corteza queda blanda y se humedece', knowledge.diagnostics).symptom, 'Corteza blanda después de hornear');
assert.ok(searchLibrary('fermentación temperatura', knowledge).length > 0);
assert.ok(searchLibrary('prueba de ventana', knowledge).some((entry) => ['Lección','Contenido del curso','Biblioteca técnica'].includes(entry.kind)));
assert.match(buildBolyAnswer('mi masa quedó pegajosa', knowledge).text, /Boly|camarada|módulo|Lección sugerida|Recurso recomendado/i);

console.log('PANADERIA_PLATFORM_V2 smoke test passed');
