import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import test from "node:test";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const repositoryRoot = resolve(import.meta.dirname, "..");
const componentPath = join(repositoryRoot, "components/BolyDialogue.tsx");
const componentSource = readFileSync(componentPath, "utf8");
const dialoguesSource = readFileSync(join(repositoryRoot, "content/boly-dialogues.ts"), "utf8");

test("BolyDialogue compila sin diagnósticos de sintaxis", () => {
  const result = ts.transpileModule(componentSource, {
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
    reportDiagnostics: true
  });

  assert.deepEqual(result.diagnostics?.filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error), []);
});

test("usa la imagen solicitada y un respaldo seguro desde la biblioteca", () => {
  assert.match(componentSource, /getBolyImageOrFallback/);
  assert.match(componentSource, /export function getBolyDialogueImage/);
  assert.match(componentSource, /object-contain/);
  assert.match(componentSource, /alt=\{`Boly, \$\{image\.title\.toLowerCase\(\)\}`\}/);
});

test("renderiza mensaje, estructura semántica y los ocho tonos", () => {
  assert.match(componentSource, /<aside/);
  assert.match(componentSource, /\{message\}/);
  for (const tone of ["welcome", "tip", "warning", "encouragement", "success", "question", "error", "neutral"]) {
    assert.match(componentSource, new RegExp(`${tone}:`));
  }
});

test("incluye posiciones, tamaños y clases responsive", () => {
  assert.match(componentSource, /sm:flex-row-reverse/);
  assert.match(componentSource, /sm:flex-row/);
  for (const size of ["sm", "md", "lg"]) assert.match(componentSource, new RegExp(`${size}: \\{`));
  assert.match(componentSource, /sm:h-48/);
  assert.match(componentSource, /data-position=\{position\}/);
  assert.match(componentSource, /data-size=\{size\}/);
});

test("la biblioteca de diálogos contiene los ocho ejemplos con imageId reales", () => {
  for (const id of ["bienvenida-general", "consejo-pesaje", "consejo-amasado", "consejo-fermentacion", "advertencia-vapor", "mensaje-error", "modulo-completado", "mensaje-motivacional"]) {
    assert.match(dialoguesSource, new RegExp(`id: "${id}"`));
  }

  const imageIds = [...dialoguesSource.matchAll(/imageId: "([^"]+)"/g)].map((match) => match[1]);
  const librarySource = readFileSync(join(repositoryRoot, "content/boly-library.ts"), "utf8");
  for (const imageId of imageIds) assert.match(librarySource, new RegExp(`id: "${imageId}"`));
});
