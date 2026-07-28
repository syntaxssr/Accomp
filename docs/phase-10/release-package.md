# Phase 10 Release Package Contract

## Guardrails

`npm run package:release` stops unless the Git working tree is clean. This
prevents an archive from containing source that differs from its recorded
commit.

The packager:

1. Resolves the full and seven-character commit SHA.
2. Reads the commit timestamp.
3. Creates a prefixed `git archive` tarball from that exact commit.
4. Calculates the archive SHA-256.
5. Writes a JSON manifest beside the archive.

## Output

```text
release-artifacts/
├── accomp-<short-sha>.tar.gz
└── accomp-<short-sha>.manifest.json
```

The manifest records:

- schema version
- product name
- archive filename and byte size
- full and short commit SHA
- commit timestamp
- SHA-256 checksum
- Node.js requirement
- production route inventory

The directory is ignored by Git. A release operator can compare the manifest
commit with the pushed source state and verify the archive checksum before
using it in a hosted-version workflow.

## Verification

```bash
npm run package:release
shasum -a 256 release-artifacts/accomp-<short-sha>.tar.gz
```

The printed and independently calculated checksums must match. Do not upload or
deploy a package whose checksum, commit SHA or source state differs.
