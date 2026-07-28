import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  findUncheckedReleaseGates,
  validateProductionOrigin,
} from "../scripts/production-preflight.mjs";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("accepts only a clean HTTPS production origin", () => {
  assert.deepEqual(validateProductionOrigin("https://accomp.app"), {
    error: null,
    origin: "https://accomp.app",
  });

  for (const value of [
    "",
    "http://accomp.app",
    "https://localhost:3000",
    "https://accomp.test",
    "https://accomp.app/path",
    "https://accomp.app?preview=1",
  ]) {
    assert.notEqual(validateProductionOrigin(value).error, null);
  }
});

test("reports every unchecked public-deployment gate", async () => {
  const checklist = await source("docs/phase-8/release-checklist.md");
  const blockers = findUncheckedReleaseGates(checklist);

  assert.ok(blockers.length >= 10);
  assert.ok(
    blockers.some((blocker) => blocker.includes("production domain")),
  );
  assert.ok(
    blockers.some((blocker) => blocker.includes("owner release approval")),
  );
});

test("defines a least-privilege CI quality gate", async () => {
  const workflow = await source(".github/workflows/quality.yml");

  assert.match(workflow, /permissions:\s*\n\s+contents: read/);
  assert.match(workflow, /actions\/checkout@v6/);
  assert.match(workflow, /actions\/setup-node@v6/);
  assert.match(workflow, /node-version: 22/);
  assert.match(workflow, /npm ci/);
  assert.match(workflow, /npm run check/);
});

test("adds production response hardening at the worker boundary", async () => {
  const [worker, headers] = await Promise.all([
    source("worker/index.ts"),
    source("worker/security-headers.ts"),
  ]);

  assert.match(worker, /withSecurityHeaders/);

  for (const header of [
    "Content-Security-Policy",
    "Cross-Origin-Opener-Policy",
    "Permissions-Policy",
    "Referrer-Policy",
    "Strict-Transport-Security",
    "X-Content-Type-Options",
    "X-Frame-Options",
  ]) {
    assert.match(headers, new RegExp(header));
  }
});
