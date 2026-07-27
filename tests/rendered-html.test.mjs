import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete Phase 6 marketing page", async () => {
  const response = await render();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();

  assert.match(html, /<html[^>]*lang="en"/i);
  assert.match(html, /<title>Adventure Together · Accomp<\/title>/i);
  assert.match(html, /data-phase="6"/);
  assert.match(html, /Adventure together\./i);
  assert.match(html, /Make one plan\. Bring everyone in\./);
  assert.match(html, /Pack once\. Know who/);
  assert.match(html, /Ready when the signal isn/);
  assert.match(html, /Make room for the adventure\./);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders semantic landmarks, complete anchors and native FAQ items", async () => {
  const response = await render();
  const html = await response.text();
  const ids = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  const targets = [
    ...html.matchAll(/href="#([^"]+)"/g),
  ].map((match) => match[1]);

  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.equal((html.match(/<details\b/g) ?? []).length, 7);
  assert.match(html, /<header\b/);
  assert.match(html, /<main\b[^>]*id="main"/);
  assert.match(html, /<footer\b/);
  assert.equal(targets.every((target) => ids.has(target)), true);
});

test("keeps the waitlist honest and non-submitting", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /<form\b/i);
  assert.match(html, /Waitlist signup is not active yet/);
  assert.match(html, /No information is collected or submitted yet/);
  assert.match(html, /<input[^>]*disabled/i);
});
