import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const outputDirectory = join(root, "release-artifacts");

function git(...args) {
  return execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
  }).trim();
}

const status = git("status", "--porcelain=v1", "--untracked-files=all");

if (status) {
  throw new Error("Release packaging requires a clean working tree.");
}

const commit = git("rev-parse", "HEAD");
const shortCommit = git("rev-parse", "--short=7", "HEAD");
const committedAt = git("show", "-s", "--format=%cI", "HEAD");
const archiveName = `accomp-${shortCommit}.tar.gz`;
const archivePath = join(outputDirectory, archiveName);
const manifestPath = join(
  outputDirectory,
  `accomp-${shortCommit}.manifest.json`,
);

await mkdir(outputDirectory, { recursive: true });
execFileSync(
  "git",
  [
    "archive",
    "--format=tar.gz",
    "--prefix=accomp/",
    "--output",
    archivePath,
    commit,
  ],
  { cwd: root, stdio: "inherit" },
);

const archive = await readFile(archivePath);
const details = await stat(archivePath);
const sha256 = createHash("sha256").update(archive).digest("hex");
const manifest = {
  archive: archiveName,
  bytes: details.size,
  commit,
  committedAt,
  node: ">=22.13.0",
  product: "Accomp marketing website",
  routes: [
    "/",
    "/en",
    "/th",
    "/en/privacy",
    "/th/privacy",
    "/en/terms",
    "/th/terms",
    "/health",
    "/robots.txt",
    "/sitemap.xml",
  ],
  schemaVersion: 1,
  sha256,
  shortCommit,
};

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Release archive: ${archivePath}`);
console.log(`Release manifest: ${manifestPath}`);
console.log(`SHA-256: ${sha256}`);
