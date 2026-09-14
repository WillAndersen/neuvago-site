# E3 local installation and lifecycle scope

## New integration, unchanged rules

The entire E2 distribution is vendored byte-for-byte, including its tests, original
E1 comparator, fixtures, source references and the eleven files hashed into the E2
rule fingerprint `29403f0f09e7728e32d0213b6998414842ae6ede02090cfe7cdadbb36f031b48`.
Those calibration rules have not been expanded or rewritten during installation.

The new E3 adapter, entry, tests and documentation have a **different**, separately
computed installation fingerprint. E2 byte identity is not presented as approval
of the new lifecycle adapter. The local returned results still need review.

## No implicit rebaseline

A full named commit must descend from the explicit source baseline. The baseline
252 blobs are checked against the preserved acceptance data. Tool-only additions
are separately classified per phase and excluded only from content-rule deltas,
not from raw input inventories or report fingerprinting. E2 rules continue to read
actual staged blobs for the index phase, regardless of worktree differences.

A complete installed report may include technical `WOULD_BLOCK` or review outcomes.
No CI/hook/publishing workflow calls this tool automatically. Parser/read failures
are operational errors, not PASS. Unknown tool bytes stop integrity checking.

## Required local tests

Preserve the original E1 90 tests, E2 90 regression runs and 57 calibration tests.
Exercise the installed entry in isolated repositories before and after a tooling-only
commit, named baseline commit, independent staged and unstaged bytes, unknown
changed content, root aliases, operational failures and exact no-write reruns.
The installed acceptance command repeats 43 E2 object-bound cases, 45 retained
controls and the original eight comparison cases on the actual project compiler.

## Read/write boundary

The installer only creates the manifest's named new files using exclusive create.
It does not overwrite tracked or unknown files. Partial write failure removes only
its own still-identical new files; concurrent changes are left for review. If a later
check fails after complete installation, tooling is retained and the same package
can revalidate/resume without rewriting it. Reports and temporary test repositories
are outside the inspected repo. No automatic reset, cleanup, stage, commit or push.

The runtime reads Git state without optional index refresh or lazy-fetch requests.
It hashes hooks/config controls for preservation; it does not copy their contents.
Remote identity is checked by the installer with ls-remote. The manual runtime does
not need a remote connection. Missing baseline objects stop; there is no fetch.

## Source documentation for Git behavior

Primary documentation consulted for new lifecycle plumbing (not a new source of
medical claims or a change to E2's scientific scope):

- https://git-scm.com/docs/git-merge-base — `--is-ancestor` and its exit status.
- https://git-scm.com/docs/git-ls-files — staged entries and NUL-delimited paths.
- https://git-scm.com/docs/git — optional locks, replacement objects and lazy fetch.

All claims of execution must be separated between isolated Linux testing and the
actual returned Mac installation. A full Next.js build is not part of this isolated
Python/Node tooling installation and must not be reported as performed.
