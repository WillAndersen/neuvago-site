# Neuvago Evidence Operations

This directory begins **NEUVAGO SEARCH DOMINANCE 1E.4 — Evidence Operations / Claim-Evidence Scaling**.

## 1E.4B canonical claim registry

The first registry is a **claim-governance layer**, not an evidence-approval list.

It is anchored to closed production baseline:

- commit `a049fda29ec2af4a453eb10305d47104fa3d79a7`
- 1E.4A share SHA-256 `085978822fa2bbb9bd56c27688359ba069e8e67f9a0a84c9728b5fb0d4cd6a5e`

### Why this layer exists

1E.4A found 12,473 claim-like regex hits, 880 source markers and 230 rows that an initial parser could classify from existing source/claim locks. Those numbers are discovery signals, not 12,473 approved claims.

The historical files mix several different concepts:

- public scientific/editorial claim boundaries,
- safety boundaries,
- product/commercial claim boundaries,
- source lists,
- media rules,
- route and SEO contracts,
- implementation/technical locks.

The canonical registry therefore **does not auto-promote historical lock bullets**.

### v1 inclusion rule

v1 contains only high-confidence public/editorial claim-governance sections from the locked 1E.4A baseline. Exact normalized duplicate statements are merged while provenance is preserved. Semantic near-duplicates are intentionally not merged yet.

Operational sections such as technical locks, route counts, internal-link contracts, visual policy, media boundaries, schema constraints and acceptance criteria are excluded.

### Evidence is intentionally empty

Every `evidence_ids` array remains empty and every entry is marked `PENDING_1E4C`.

**1E.4C** owns evidence normalization and claim → evidence linkage. A claim being present in this registry is not evidence that the statement is scientifically established.

### Legacy source-lock index

`legacy-source-lock-index.v1.json` fingerprints all 27 historical source/claim-lock files discovered in 1E.4A. They remain provenance sources only. No automatic promotion is allowed.

### Important parser correction

1E.4A's generic parser captured five entries in the VNS sensation lock as `ALLOWED` even though they are in a must-not block. 1E.4B records those five policies as `NOT_ALLOWED` while retaining the original source control and a normalization note. No historical file is edited.

### Next gates

- **1E.4C** Evidence Registry & Claim Linkage
- **1E.4D** Route Coverage, Duplication & Drift Control
- **1E.4E** Editorial Enforcement Gates
