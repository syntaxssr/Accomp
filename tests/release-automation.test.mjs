import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  normalizeSmokeOrigin,
  waitForHealth,
} from "../scripts/site-smoke.mjs";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("accepts HTTPS and local HTTP smoke origins only", () => {
  assert.equal(
    normalizeSmokeOrigin("https://accomp.app"),
    "https://accomp.app",
  );
  assert.equal(
    normalizeSmokeOrigin("http://127.0.0.1:4174"),
    "http://127.0.0.1:4174",
  );

  for (const value of [
    "",
    "http://accomp.app",
    "https://accomp.app/path",
    "https://user:secret@accomp.app",
  ]) {
    assert.throws(() => normalizeSmokeOrigin(value));
  }
});

test("rejects a healthy-looking endpoint with the wrong service payload", async () => {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = async () =>
    Response.json({
      service: "not-accomp",
      status: "ok",
    });

  try {
    await assert.rejects(
      waitForHealth("http://127.0.0.1:4174", 1),
      /unexpected body/,
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("defines a complete route and security smoke contract", async () => {
  const smoke = await source("scripts/site-smoke.mjs");

  for (const route of [
    "/",
    "/health",
    "/privacy",
    "/terms",
    "/robots.txt",
    "/sitemap.xml",
    "/phase-10-missing-route",
  ]) {
    assert.match(smoke, new RegExp(route.replaceAll("/", "\\/")));
  }

  assert.match(smoke, /content-security-policy/);
  assert.match(smoke, /x-content-type-options/);
  assert.match(smoke, /x-frame-options/);
  assert.match(smoke, /Cache-Control: no-store/);
});

test("packages only a clean committed tree with a SHA-256 manifest", async () => {
  const packager = await source("scripts/package-release.mjs");

  assert.match(packager, /status[\s\S]*--porcelain=v1/);
  assert.match(packager, /git[\s\S]*archive/);
  assert.match(packager, /createHash\("sha256"\)/);
  assert.match(packager, /manifest\.json/);
  assert.match(packager, /commit/);
});

test("runs the release smoke in CI after the quality suite", async () => {
  const [workflow, packageJsonSource] = await Promise.all([
    source(".github/workflows/quality.yml"),
    source("package.json"),
  ]);
  const packageJson = JSON.parse(packageJsonSource);

  assert.match(workflow, /npm run check:release/);
  assert.equal(
    packageJson.scripts["check:release"],
    "npm run check && npm run smoke:local",
  );
  assert.equal(
    packageJson.scripts["package:release"],
    "node scripts/package-release.mjs",
  );
});
