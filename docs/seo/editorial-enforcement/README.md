# Neuvago editorial controls — installed shadow tool v1

This tool reports technical observations. It does **not** install publication blocking,
CI, Git-hooks or a scientific approval process. Only `tooling_installed` is true.

## Manual command

From the project root:

```bash
/bin/bash scripts/editorial-enforcement/run-shadow.sh "$PWD"
```

All three representations are read separately: working files, staged/index blobs and
current HEAD as a named commit. A complete report may contain `WOULD_BLOCK`,
`REVIEW_REQUIRED` or `NOT_EVALUATED`. Exit 0 means reporting completed, not release
approval. Operational errors return exit 2 with a failure share when possible.

Select one representation:

```bash
/bin/bash scripts/editorial-enforcement/run-shadow.sh "$PWD" --phase index
/bin/bash scripts/editorial-enforcement/run-shadow.sh "$PWD" --phase commit --commit FULL_COMMIT_OBJECT_ID
```

`--acceptance` also runs the preserved 45 fault/positive cases, 43 calibrated cases,
eight original E1/E2 comparisons and eleven historical HTML checks, outside the repo.
It never injects faults into this project. The historical HTML is not live production.

## Four independent identities

The accepted source baseline is fixed at
`4c4e65a87163000ee493f264849824f17fdcf8ca`. Current HEAD is not silently substituted.
The running tool/contract fingerprint and the phase-specific selected input are
recorded separately. After an exact tooling-only commit, the source baseline stays
fixed and content rule observations remain comparable; snapshot/commit fingerprints
correctly change.

The E2 engine lives under `scripts/editorial-enforcement/vendor/e2/`. Its complete
original file set and manifest are preserved. **Do not run its old E2 baseline CLI
as the installed entry**; that historic command deliberately assumes an external
package and clean baseline. Use the new entry above.

## Tooling inventory is not content approval

Only exact manifest paths with matching bytes and file modes are separated from
content changes. Both the raw snapshot and the derived E2 input are retained.
Every tooling path is shown with its actual phase status. A pre-install commit has
no tool files; that is not missing content coverage. Partial/mismatched staged tool
files remain visible. Unknown paths are not accepted by a prefix ignore rule.

Files outside the 252 known source/control inputs are represented by inventory and
review/unsupported observations, not collected as arbitrary file contents. Environment
files and private project data are not included in reports.

## Scope remains limited

Eleven declared pages, 23 source cards, two specific glossary-data examples and
selected registry/history invariants. No new rendering, build, network bibliography,
medical verification, live crawl or deployment attestation. Twelve intake candidates,
23 source-use reviews, eleven missing applicability links and the D7 backlog remain
open. `approved_links: 0` and all broad scientific/release flags remain false.

## Installation and later publication

Initial installer adds only the explicit new files in this tree and
`docs/seo/editorial-enforcement/`. It never changes src, evidence registries,
package.json, lockfiles, workflows or hooks. New files remain untracked until a
separately reviewed commit/push step. Rerun recognizes exact full or partial prior
new-file state without rewriting existing bytes. Unknown changes stop.

The installed command is read-only. Linked Git worktrees are not supported in v1;
symbolic aliases to the real repository root are supported. Existing project
TypeScript, Node, Git and Python 3.10+ are required; no dependency is installed.

Integrity manifests detect accidental drift; they are not independent cryptographic
review signatures or a security boundary against an actor editing the tool itself.
