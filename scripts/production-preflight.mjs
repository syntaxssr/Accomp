import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const root = new URL("../", import.meta.url);

export function validateProductionOrigin(value) {
  if (!value?.trim()) {
    return {
      error: "NEXT_PUBLIC_SITE_URL is required.",
      origin: null,
    };
  }

  let url;

  try {
    url = new URL(value.trim());
  } catch {
    return {
      error: "NEXT_PUBLIC_SITE_URL must be a valid absolute URL.",
      origin: null,
    };
  }

  const blockedHostname =
    url.hostname === "localhost" ||
    url.hostname === "127.0.0.1" ||
    url.hostname.endsWith(".localhost") ||
    url.hostname.endsWith(".invalid") ||
    url.hostname.endsWith(".example") ||
    url.hostname.endsWith(".test");

  if (url.protocol !== "https:") {
    return {
      error: "NEXT_PUBLIC_SITE_URL must use HTTPS.",
      origin: null,
    };
  }

  if (blockedHostname) {
    return {
      error: "NEXT_PUBLIC_SITE_URL must use the approved production hostname.",
      origin: null,
    };
  }

  if (
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    return {
      error: "NEXT_PUBLIC_SITE_URL must contain only the production origin.",
      origin: null,
    };
  }

  return {
    error: null,
    origin: url.origin,
  };
}

export function findUncheckedReleaseGates(markdown) {
  const section = markdown
    .split("## Required Before Public Deployment")[1]
    ?.split("\n## ")[0];

  if (!section) {
    return ["Release checklist section is missing."];
  }

  return [...section.matchAll(/^- \[ \] (.+)$/gm)].map((match) =>
    match[1].trim(),
  );
}

export async function collectProductionBlockers({
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL,
} = {}) {
  const checklist = await readFile(
    new URL("docs/phase-8/release-checklist.md", root),
    "utf8",
  );
  const originResult = validateProductionOrigin(siteUrl);
  const blockers = findUncheckedReleaseGates(checklist);

  if (originResult.error) {
    blockers.unshift(originResult.error);
  }

  return {
    blockers,
    origin: originResult.origin,
  };
}

async function main() {
  const strict = process.argv.includes("--strict");
  const { blockers, origin } = await collectProductionBlockers();

  if (blockers.length === 0) {
    console.log(`Production preflight passed for ${origin}.`);
    return;
  }

  console.log(`Production preflight: ${blockers.length} blocker(s) remain.`);

  for (const blocker of blockers) {
    console.log(`- ${blocker}`);
  }

  if (strict) {
    process.exitCode = 1;
  }
}

const entryUrl = process.argv[1] ? pathToFileURL(process.argv[1]).href : null;

if (entryUrl === import.meta.url) {
  await main();
}
