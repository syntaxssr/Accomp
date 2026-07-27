import { access, readFile, readdir, stat } from "node:fs/promises";
import { dirname, extname, join, resolve } from "node:path";

const root = process.cwd();
const errors = [];
const markdownFiles = ["README.md", "plan.md"];
const runtimeFiles = [];
const publicFiles = [];

async function collect(directory, destination, extensions = null) {
  const entries = await readdir(join(root, directory), {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await collect(path, destination, extensions);
    } else if (extensions === null || extensions.has(extname(entry.name))) {
      destination.push(path);
    }
  }
}

for (const directory of ["brand", "docs"]) {
  await collect(directory, markdownFiles, new Set([".md"]));
}

for (const directory of ["app", "components", "content", "lib", "worker"]) {
  await collect(
    directory,
    runtimeFiles,
    new Set([".css", ".mjs", ".ts", ".tsx"]),
  );
}

await collect("public", publicFiles);

for (const file of markdownFiles.sort()) {
  const source = await readFile(join(root, file), "utf8");
  const links = [...source.matchAll(/\[[^\]]*]\(([^)]+)\)/g)];

  for (const link of links) {
    const rawTarget = link[1].trim().replace(/^<|>$/g, "");

    if (
      rawTarget.startsWith("#") ||
      /^(?:https?:|mailto:|tel:)/i.test(rawTarget)
    ) {
      continue;
    }

    const target = decodeURIComponent(rawTarget.split("#")[0]);
    const absoluteTarget = resolve(root, dirname(file), target);

    try {
      await access(absoluteTarget);
    } catch {
      errors.push(`${file}: broken Markdown link "${rawTarget}"`);
    }
  }
}

const allowedRuntimeOrigins = [
  "http://localhost:3000",
  "http://www.sitemaps.org",
  "https://schema.org",
];

for (const file of runtimeFiles.sort()) {
  const source = await readFile(join(root, file), "utf8");
  const urls = source.match(/https?:\/\/[^\s"'`<>)]+/g) ?? [];

  for (const url of urls) {
    if (!allowedRuntimeOrigins.some((origin) => url.startsWith(origin))) {
      errors.push(`${file}: unapproved runtime URL "${url}"`);
    }
  }

  if (/<form\b|onSubmit=|navigator\.sendBeacon|XMLHttpRequest/i.test(source)) {
    errors.push(`${file}: unexpected submission or tracking surface`);
  }

  if (/https?:\/\/(?:www\.)?example\.com|your-domain|TODO|FIXME/i.test(source)) {
    errors.push(`${file}: unresolved production placeholder`);
  }
}

for (const file of publicFiles.sort()) {
  const details = await stat(join(root, file));

  if (details.size > 1_500_000) {
    errors.push(`${file}: exceeds the 1.5 MB production asset budget`);
  }
}

const [brandIcon, publicIcon, assetRegister, socialDecision] =
  await Promise.all([
    readFile(join(root, "brand/accomp-pine-icon.svg"), "utf8"),
    readFile(join(root, "public/brand/accomp-pine-icon.svg"), "utf8"),
    readFile(join(root, "docs/phase-3/asset-export-list.md"), "utf8"),
    readFile(join(root, "docs/phase-7/search-social-and-legal.md"), "utf8"),
  ]);

if (brandIcon !== publicIcon) {
  errors.push("public/brand/accomp-pine-icon.svg: differs from the source asset");
}

if (!/No Phantom assets[\s\S]*third-party illustrations/i.test(assetRegister)) {
  errors.push("docs/phase-3/asset-export-list.md: missing asset provenance");
}

if (!/public\/og\.png[\s\S]*original 1200 × 630 Accomp social card/i.test(
  socialDecision,
)) {
  errors.push(
    "docs/phase-7/search-social-and-legal.md: missing social asset provenance",
  );
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Release audit passed: ${markdownFiles.length} Markdown files, ${runtimeFiles.length} runtime files, and ${publicFiles.length} public assets checked.`,
  );
}
