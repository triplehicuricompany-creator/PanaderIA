import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import test from "node:test";

const outputDirectory = ".test-build";
rmSync(outputDirectory, { force: true, recursive: true });
execFileSync("./node_modules/.bin/tsc", ["--module", "commonjs", "--moduleResolution", "node", "--target", "es2020", "--jsx", "preserve", "--esModuleInterop", "true", "--outDir", outputDirectory, "content/boly-library.ts", "content/boly-events.ts"], { stdio: "inherit" });
const events = await import(`../${outputDirectory}/boly-events.js`);

test.after(() => rmSync(outputDirectory, { force: true, recursive: true }));

test("resolves a valid event and rejects an unknown one", () => {
  assert.equal(events.resolveBolyEvent("MODULE_COMPLETED")?.tone, "success");
  assert.equal(events.getBolyEvent("NOT_A_BOLY_EVENT"), undefined);
  assert.equal(events.hasBolyEvent("NOT_A_BOLY_EVENT"), false);
});

test("overrides do not mutate the catalogue", () => {
  const original = events.getBolyEvent("DOUGH_TOO_WET");
  const resolved = events.resolveBolyEvent("DOUGH_TOO_WET", { message: "Espera un momento.", imageId: "hola", tone: "welcome", title: "Pausa" });
  assert.deepEqual({ message: resolved.message, imageId: resolved.imageId, tone: resolved.tone, title: resolved.title }, { message: "Espera un momento.", imageId: "hola", tone: "welcome", title: "Pausa" });
  assert.equal(original.defaultMessage.includes("No agregues harina"), true);
});

test("catalogue ids, images, and required invariants are valid", () => {
  assert.deepEqual(events.validateBolyEventCatalog(), []);
  assert.equal(new Set(events.bolyEventCatalog.map((entry) => entry.event)).size, events.bolyEventCatalog.length);
  assert.equal(events.getBolyEvent("STEAM_WARNING").priority, "critical");
  assert.equal(events.getBolyEvent("FIRST_LOGIN").oncePerSession, true);
  assert.equal(events.getBolyEvent("CERTIFICATE_READY").tone, "success");
});

test("event adapter delegates rendering to BolyDialogue", () => {
  assert.equal(existsSync("components/BolyEventDialogue.tsx"), true);
  const source = execFileSync("cat", ["components/BolyEventDialogue.tsx"], { encoding: "utf8" });
  assert.match(source, /resolveBolyEvent/);
  assert.match(source, /<BolyDialogue/);
});
