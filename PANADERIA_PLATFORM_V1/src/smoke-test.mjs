import assert from 'node:assert/strict';
import fs from 'node:fs';
import { buildBolyAnswer, detectModule, detectDiagnostic } from './boly-engine.js';

const modules = JSON.parse(fs.readFileSync(new URL('../data/modules.json', import.meta.url), 'utf8'));
const diagnostics = JSON.parse(fs.readFileSync(new URL('../data/diagnostics.json', import.meta.url), 'utf8'));
const resources = JSON.parse(fs.readFileSync(new URL('../data/resources.json', import.meta.url), 'utf8'));
const products = JSON.parse(fs.readFileSync(new URL('../data/products.json', import.meta.url), 'utf8'));

assert.equal(modules.length, 14);
assert.ok(resources.some((resource) => resource.href.includes('downloads/')));
assert.ok(products.some((product) => product.paymentStatus));
assert.equal(detectModule('mi bolillo no abre en el corte', modules).slug, 'corte');
assert.equal(detectDiagnostic('mi corteza queda blanda y se humedece', diagnostics).symptom, 'Corteza blanda después de hornear');
assert.match(buildBolyAnswer('mi masa quedó pegajosa', modules, diagnostics).text, /Boly|camarada|módulo|pegajosa/i);

console.log('PANADERIA_PLATFORM_V1 smoke test passed');
