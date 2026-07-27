import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const root = process.cwd();
const roots = [
  "app",
  "build",
  "components",
  "content",
  "docs/phase-4",
  "docs/phase-5",
  "scripts",
  "tests",
  "worker",
];
const rootFiles = [
  ".openai/hosting.json",
  "README.md",
  "eslint.config.mjs",
  "next.config.ts",
  "package.json",
  "tsconfig.json",
  "vite.config.ts",
];
const checkedExtensions = new Set([
  ".css",
  ".json",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
]);
const files = [...rootFiles];

async function collect(directory) {
  const entries = await readdir(join(root, directory), {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await collect(path);
    } else if (checkedExtensions.has(extname(entry.name))) {
      files.push(path);
    }
  }
}

for (const directory of roots) {
  await collect(directory);
}

const errors = [];

for (const file of files.sort()) {
  const source = await readFile(join(root, file), "utf8");
  const lines = source.split("\n");

  if (!source.endsWith("\n")) {
    errors.push(`${file}: missing final newline`);
  }

  lines.forEach((line, index) => {
    if (/[ \t]+$/.test(line)) {
      errors.push(`${file}:${index + 1}: trailing whitespace`);
    }
    if (line.includes("\t")) {
      errors.push(`${file}:${index + 1}: tab character`);
    }
  });
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Formatting baseline passed for ${files.length} files.`);
}
