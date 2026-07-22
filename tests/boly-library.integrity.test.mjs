import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import test from "node:test";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const repositoryRoot = resolve(import.meta.dirname, "..");
const librarySource = readFileSync(join(repositoryRoot, "content/boly-library.ts"), "utf8");
const compiledLibrary = ts.transpileModule(librarySource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
}).outputText;
const libraryModule = { exports: {} };
new Function("exports", "module", compiledLibrary)(libraryModule.exports, libraryModule);

const { bolyImages, bolyLibrary, getBolyImageById, getBolyImageOrFallback, hasBolyImage } = libraryModule.exports;
const expectedCategories = ["saludos", "expresiones", "motivacion", "acciones", "panaderia", "herramientas", "efectos", "descanso"];

function findPngFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? findPngFiles(path) : entry.name.toLowerCase().endsWith(".png") ? [path] : [];
  });
}

test("cada src de Boly existe en public", () => {
  for (const image of bolyImages) {
    assert.ok(existsSync(join(repositoryRoot, "public", image.src)), `${image.id}: ${image.src}`);
  }
});

test("los ids de Boly son únicos", () => {
  assert.equal(new Set(bolyImages.map((image) => image.id)).size, bolyImages.length);
});

test("la biblioteca contiene las ocho categorías públicas", () => {
  assert.deepEqual(Object.keys(bolyLibrary).sort(), [...expectedCategories].sort());
  assert.ok(expectedCategories.every((category) => bolyLibrary[category].length > 0));
});

test("el catálogo registra todos los PNG encontrados", () => {
  const pngFiles = findPngFiles(join(repositoryRoot, "public/boly"));
  assert.equal(bolyImages.length, pngFiles.length);
  assert.equal(new Set(bolyImages.map((image) => image.src)).size, pngFiles.length);
});

test("las consultas encuentran imágenes y usan un respaldo seguro", () => {
  assert.equal(getBolyImageById("amasando")?.src, "/boly/05_panaderia/boly_amasando.png");
  assert.equal(hasBolyImage("amasando"), true);
  assert.equal(hasBolyImage("inexistente"), false);
  assert.equal(getBolyImageOrFallback("inexistente"), bolyLibrary.saludos[0]);
});
