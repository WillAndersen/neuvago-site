#!/usr/bin/env python3
from __future__ import annotations
import hashlib, json, re, subprocess, sys
from pathlib import Path
from collections import Counter

EXPECTED_HEAD = "a049fda29ec2af4a453eb10305d47104fa3d79a7"
EXPECTED_CLAIMS = 117
EXPECTED_LOCKS = 27
EXPECTED_POLICIES = {
    "ALLOWED_WITH_QUALIFIERS": 47,
    "NOT_ALLOWED": 56,
    "PROHIBITED": 6,
    "SAFETY_BOUNDARY": 8,
}
BANNED_HEADINGS = {
    "Technical lock",
    "Required internal links",
    "Acceptance criteria",
    "Visual and asset policy",
    "Media boundary",
    "Non-regression",
    "1E.2D public-copy lift",
    "Schema / SEO boundary",
    "Scientific / structural preservation",
    "Source lanes already present on the public pages",
    "Locked conversion architecture",
    "Bilingual relationship",
    "Product boundary",
}
POLARITY_CORRECTION_FILE = "docs/seo/wave2c1a-vns-sensation-source-and-claims-lock.md"
POLARITY_CORRECTION_LINES = {26,27,28,29,30}

def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024*1024), b""):
            h.update(chunk)
    return h.hexdigest()

def norm(s: str) -> str:
    s = s.lower().replace("`","")
    s = s.replace("“","").replace("”","").replace("’","'").replace("–","-").replace("—","-")
    s = re.sub(r"[^a-z0-9æøåäöüß]+", " ", s, flags=re.I)
    return re.sub(r"\s+", " ", s).strip()

def git(repo: Path, *args: str) -> str:
    return subprocess.check_output(["git","-C",str(repo),*args], text=True).strip()

def fail(errors, msg):
    errors.append(msg)

def main():
    repo = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd().resolve()
    base = repo / "docs/seo/evidence-operations"
    registry_path = base / "claim-registry.v1.json"
    legacy_path = base / "legacy-source-lock-index.v1.json"
    schema_path = base / "claim-registry.schema.v1.json"

    errors = []
    warnings = []

    try:
        head = git(repo, "rev-parse", "HEAD")
    except Exception as exc:
        print(json.dumps({"status":"FAIL","errors":[f"git failed: {exc}"]}, indent=2))
        return 2

    if head != EXPECTED_HEAD:
        fail(errors, f"HEAD mismatch: {head} != {EXPECTED_HEAD}")

    for p in (registry_path, legacy_path, schema_path):
        if not p.is_file():
            fail(errors, f"missing {p.relative_to(repo)}")

    if errors:
        print(json.dumps({"status":"FAIL","errors":errors}, indent=2))
        return 2

    registry = json.loads(registry_path.read_text(encoding="utf-8"))
    legacy = json.loads(legacy_path.read_text(encoding="utf-8"))
    schema = json.loads(schema_path.read_text(encoding="utf-8"))

    claims = registry.get("claims", [])
    if registry.get("baseline_commit") != EXPECTED_HEAD:
        fail(errors, "registry baseline commit mismatch")
    if registry.get("status") != "POLICY_LAYER_LOCKED_EVIDENCE_LINK_PENDING":
        fail(errors, "registry status mismatch")
    if len(claims) != EXPECTED_CLAIMS:
        fail(errors, f"claim count {len(claims)} != {EXPECTED_CLAIMS}")

    ids = [c.get("claim_id") for c in claims]
    if len(ids) != len(set(ids)):
        fail(errors, "duplicate claim ids")

    canonical_norms = [norm(c.get("canonical_claim","")) for c in claims]
    if len(canonical_norms) != len(set(canonical_norms)):
        fail(errors, "exact-normalized duplicate canonical claims remain")

    policies = Counter(c.get("policy") for c in claims)
    if dict(policies) != EXPECTED_POLICIES:
        fail(errors, f"policy counts mismatch: {dict(policies)}")

    legacy_locks = legacy.get("locks", [])
    if len(legacy_locks) != EXPECTED_LOCKS or legacy.get("locks_total") != EXPECTED_LOCKS:
        fail(errors, f"legacy lock count mismatch: {len(legacy_locks)}")

    lock_by_path = {x["file"]: x for x in legacy_locks}
    current_lock_hash_failures = []
    for item in legacy_locks:
        p = repo / item["file"]
        if not p.is_file():
            current_lock_hash_failures.append(f"missing:{item['file']}")
            continue
        actual = sha256(p)
        if actual != item["sha256"]:
            current_lock_hash_failures.append(f"hash:{item['file']}:{actual}")
    if current_lock_hash_failures:
        fail(errors, "historical source-lock hash drift: " + "; ".join(current_lock_hash_failures))

    corrected = 0
    provenance_checks = 0
    all_owner_routes = set()
    for c in claims:
        cid = c.get("claim_id","")
        expected_id = "CLM-" + hashlib.sha256(norm(c.get("canonical_claim","")).encode()).hexdigest()[:10].upper()
        if cid != expected_id:
            fail(errors, f"unstable claim id {cid} expected {expected_id}")

        if c.get("evidence_ids") != [] or c.get("evidence_directness") != "PENDING_1E4C":
            fail(errors, f"{cid}: evidence linked prematurely in 1E.4B")

        if c.get("status") != "POLICY_LOCKED_EVIDENCE_LINK_PENDING":
            fail(errors, f"{cid}: status mismatch")

        policy = c.get("policy")
        if policy == "ALLOWED_WITH_QUALIFIERS" and not c.get("allowed_wording"):
            fail(errors, f"{cid}: allowed policy missing allowed wording")
        if policy in {"NOT_ALLOWED","PROHIBITED"} and not c.get("disallowed_wording"):
            fail(errors, f"{cid}: blocked policy missing disallowed wording")

        route = c.get("owner_route","")
        if not route.startswith("/"):
            fail(errors, f"{cid}: invalid owner route")
        all_owner_routes.add(route)

        for prov in c.get("provenance", []):
            provenance_checks += 1
            heading = prov.get("heading")
            if heading in BANNED_HEADINGS:
                fail(errors, f"{cid}: operational heading entered canonical registry: {heading}")
            f = prov.get("file")
            if f not in lock_by_path:
                fail(errors, f"{cid}: provenance file not in legacy index: {f}")
                continue
            if prov.get("file_sha256") != lock_by_path[f]["sha256"]:
                fail(errors, f"{cid}: provenance hash mismatch against legacy index")
            p = repo / f
            line_no = int(prov.get("line",0))
            lines = p.read_text(encoding="utf-8").splitlines()
            if line_no < 1 or line_no > len(lines):
                fail(errors, f"{cid}: invalid provenance line {f}:{line_no}")
                continue
            if norm(c.get("canonical_claim","")) not in norm(lines[line_no-1]):
                fail(errors, f"{cid}: canonical text not recoverable at provenance line {f}:{line_no}")

            if f == POLARITY_CORRECTION_FILE and line_no in POLARITY_CORRECTION_LINES:
                if c.get("policy") != "NOT_ALLOWED":
                    fail(errors, f"{cid}: polarity correction not applied at line {line_no}")
                if not c.get("normalization_notes"):
                    fail(errors, f"{cid}: polarity correction note missing")
                corrected += 1

    if corrected != 5:
        fail(errors, f"polarity corrections {corrected} != 5")

    # Ensure intentionally excluded false-positive operational rows are absent.
    excluded_prov = {
        (POLARITY_CORRECTION_FILE,19),
        (POLARITY_CORRECTION_FILE,31),
        ("docs/seo/search-dominance-1e2g-no-protected-win-buyer-guide-source-claims-lock.md",53),
        ("docs/seo/search-dominance-1e2g-no-protected-win-buyer-guide-source-claims-lock.md",60),
    }
    seen = {(p["file"], int(p["line"])) for c in claims for p in c["provenance"]}
    leaked = sorted(excluded_prov & seen)
    if leaked:
        fail(errors, f"operational false-positive rows leaked: {leaked}")

    # Schema file itself is locked to the expected registry schema identity.
    if schema.get("title") != "Neuvago Canonical Claim Registry v1":
        fail(errors, "schema title mismatch")

    result = {
        "schema":"neuvago-search-dominance-1e4b-claim-registry-audit-v1",
        "status":"PASS" if not errors else "FAIL",
        "baseline_commit":head,
        "canonical_claims":len(claims),
        "policy_counts":dict(policies),
        "risk_counts":dict(Counter(c["risk_class"] for c in claims)),
        "claim_class_counts":dict(Counter(c["claim_class"] for c in claims)),
        "legacy_source_claim_locks":len(legacy_locks),
        "historical_lock_hashes_preserved":not current_lock_hash_failures,
        "provenance_checks":provenance_checks,
        "parser_polarity_corrections":corrected,
        "evidence_links_populated":sum(len(c["evidence_ids"]) for c in claims),
        "owner_routes":sorted(all_owner_routes),
        "public_route_edits_expected":0,
        "errors":errors,
        "warnings":warnings,
        "next_gate":"RETURN_1E4B_FOR_REVIEW_AND_FINAL_LOCK" if not errors else "STOP",
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0 if not errors else 2

if __name__ == "__main__":
    raise SystemExit(main())
