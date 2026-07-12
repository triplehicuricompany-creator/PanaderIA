import assert from 'node:assert/strict';
import fs from 'node:fs';
import { buildBolyAnswer, detectModule, detectDiagnostic } from './boly-engine.js';

const modules = JSON.parse(fs.readFileSync(new URL('../data/modules.json', import.meta.url), 'utf8'));
const diagnostics = JSON.parse(fs.readFileSync(new URL('../data/diagnostics.json', import.meta.url), 'utf8'));
const resources = JSON.parse(fs.readFileSync(new URL('../data/resources.json', import.meta.url), 'utf8'));
const products = JSON.parse(fs.readFileSync(new URL('../data/products.json', import.meta.url), 'utf8'));

assert.equal(modules.length, 14);
assert.ok(resources.some((resource) => resource.href.includes('downloads/')));
for (const module of modules) {
  assert.ok(module.premiumPromise, `missing premiumPromise for module ${module.id}`);
  assert.ok(module.chefJuanoteNote, `missing Chef Juanote note for module ${module.id}`);
  assert.ok(module.bolyCompanionNote, `missing Boly note for module ${module.id}`);
  assert.ok(module.chapterReward, `missing reward for module ${module.id}`);
  assert.ok(module.nextAction, `missing next action for module ${module.id}`);
  assert.ok(module.selfAssessment, `missing self-assessment for module ${module.id}`);
  assert.ok(module.practicePrompt, `missing prompt for module ${module.id}`);
}
for (const resource of resources) {
  assert.ok(fs.existsSync(new URL(`../${resource.href}`, import.meta.url)), `missing resource href ${resource.href}`);
}
assert.ok(products.some((product) => product.paymentStatus));
assert.equal(detectModule('mi bolillo no abre en el corte', modules).slug, 'corte');
assert.equal(detectDiagnostic('mi corteza queda blanda y se humedece', diagnostics).symptom, 'Corteza blanda después de hornear');
assert.match(buildBolyAnswer('mi masa quedó pegajosa', modules, diagnostics).text, /Boly|Chef Juanote|camarada|módulo|pegajosa|Siguiente acción premium/i);

console.log('PANADERIA_PLATFORM_V1 smoke test passed');
