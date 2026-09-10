#!/usr/bin/env python3
from pathlib import Path
import csv
import json
import re
import sys

repo = Path(sys.argv[1]).resolve()
out = Path(sys.argv[2]).resolve()
out.mkdir(parents=True, exist_ok=True)

checks = []
hard_failures = []
warnings = []

def check(name, ok, detail=""):
    checks.append({"check": name, "status": "PASS" if ok else "FAIL", "detail": detail})
    if not ok:
        hard_failures.append(f"{name}: {detail}")

def read(rel):
    p = repo / rel
    return p.read_text(encoding="utf-8") if p.is_file() else ""

required = [
    "src/content/trust/editorial-policy.ts",
    "src/app/(en)/legal/editorial-policy/page.tsx",
    "src/app/(no)/no/redaksjonell-policy/page.tsx",
    "docs/trust/README.md",
    "docs/trust/LEGAL-REGULATORY-BOUNDARY.md",
    "docs/trust/claim-governance-v1.md",
    "docs/trust/claim-register-v1.csv",
    "docs/trust/regulatory-fact-register-v1.csv",
    "docs/trust/reviewer-register-v1.csv",
    "docs/trust/review-decision-log-v1.csv",
    "docs/trust/change-request-log-v1.csv",
    "docs/trust/release-gates-v1.csv",
    "docs/trust/publication-risk-matrix-v1.csv",
    "docs/trust/EDITORIAL-REVIEW-WORKFLOW-v1.md",
]
for rel in required:
    check(f"required:{rel}", (repo / rel).is_file(), "present" if (repo / rel).is_file() else "missing")

policy = read("src/content/trust/editorial-policy.ts")
for needle in [
    '/legal/editorial-policy',
    '/no/redaksjonell-policy',
    '"nb-NO": "/no/redaksjonell-policy"',
    "General VNS or taVNS research is scientific context",
    "Generell VNS- eller taVNS-forskning er vitenskapelig kontekst",
    "AI output is not treated as an authoritative source",
    "AI-output regnes ikke som autoritativ kilde",
    "Commercial-interest disclosure",
    "Opplysning om kommersiell interesse",
]:
    check(f"policy:{needle[:55]}", needle in policy, needle)

footer = read("src/components/layout/site-footer.tsx")
check("footer:EN editorial policy", '/legal/editorial-policy' in footer, "direct footer utility link")
check("footer:NO editorial policy", '/no/redaksjonell-policy' in footer, "direct footer utility link")

legal_hub = read("src/app/(en)/legal/page.tsx")
check("legal-hub:EN editorial policy", '/legal/editorial-policy' in legal_hub, "legal hub link")

trust_en = read("src/app/(en)/legal/trust-safety/page.tsx")
check("trust-safety:EN editorial policy", '/legal/editorial-policy' in trust_en, "related-page link")

no_legal = read("src/content/no/legal.ts")
check("legal-hub:NO editorial policy", no_legal.count('/no/redaksjonell-policy') >= 1, "Norwegian legal related link")
check("trust-safety:NO editorial policy", no_legal.count('/no/redaksjonell-policy') >= 2, "Norwegian trust related link")

sitemap = read("src/app/sitemap.ts")
check("sitemap:EN editorial policy", '/legal/editorial-policy' in sitemap, "route present")
check("sitemap:NO editorial policy", '/no/redaksjonell-policy' in sitemap, "route present")

localized = read("src/components/legal/LocalizedLegalPage.tsx")
check("localized-legal:locale labels", "contentIntro: string;" in localized and "{labels.contentIntro}" in localized, "English policy can render English section labels/copy")

# Hard-block obvious public internal-draft placeholders in the files controlled by 1D.
controlled_public = {
    "NO legal content": no_legal,
    "Localized legal template": localized,
    "EN terms": read("src/app/(en)/legal/terms-of-service/page.tsx"),
    "EN privacy": read("src/app/(en)/legal/privacy-policy/page.tsx"),
}
for marker in [
    "[Insert company address]",
    "[Insert date]",
    "lanseringsutkast",
    "launch-copy",
    "Må tilpasses før launch",
    "Må juridisk kvalitetssikres",
    "Hva som må fylles inn før launch",
    "før offentlig launch",
    "før offentlig lansering",
    "før siden publiseres",
    "må fylles inn",
    "Fyll inn behandlingsansvarlig",
]:
    offenders = [name for name, source in controlled_public.items() if marker.lower() in source.lower()]
    check(f"public-draft-leak:{marker}", not offenders, ",".join(offenders) if offenders else "absent")

# Confirm the company/address/effective-date placeholders were replaced from the existing NO public facts.
for rel in [
    "src/app/(en)/legal/terms-of-service/page.tsx",
    "src/app/(en)/legal/privacy-policy/page.tsx",
]:
    source = read(rel)
    check(
        f"EN public facts:{rel}",
        "Willander AS" in source and "928 489 574" in source and "Øvre Langgate 57" in source and "1 August 2026" in source,
        "company/org/address/effective date",
    )

# Governance registry integrity.
claim_path = repo / "docs/trust/claim-register-v1.csv"
required_claim_ids = {
    "CLM-EVID-001","CLM-EVID-002","CLM-PHYS-001","CLM-REG-001","CLM-REG-002",
    "CLM-REG-003","CLM-REG-004","CLM-INT-001","CLM-PROD-001","CLM-SAFE-001",
    "CLM-COMP-001","CLM-AI-001",
}
claim_ids = set()
if claim_path.is_file():
    with claim_path.open(encoding="utf-8", newline="") as f:
        claim_ids = {r.get("claim_id","") for r in csv.DictReader(f)}
check("claim-register:required IDs", required_claim_ids.issubset(claim_ids), f"missing={sorted(required_claim_ids-claim_ids)}")

reg_path = repo / "docs/trust/regulatory-fact-register-v1.csv"
reg_status = {}
if reg_path.is_file():
    with reg_path.open(encoding="utf-8", newline="") as f:
        reg_status = {r["fact_id"]: r["status"] for r in csv.DictReader(f)}
check("reg-facts:CE remains gated", reg_status.get("REG-EU-001") == "DO_NOT_ASSERT_ACHIEVED_UNTIL_VERIFIED", str(reg_status.get("REG-EU-001")))
check("reg-facts:classification remains owner-gated", reg_status.get("REG-CLASS-002") == "OWNER_CONFIRMATION_REQUIRED", str(reg_status.get("REG-CLASS-002")))
check("reg-facts:FDA remains owner-gated", reg_status.get("REG-US-001") == "OWNER_CONFIRMATION_REQUIRED", str(reg_status.get("REG-US-001")))

# Never manufacture a reviewer.
reviewer_path = repo / "docs/trust/reviewer-register-v1.csv"
reviewer_rows = []
if reviewer_path.is_file():
    with reviewer_path.open(encoding="utf-8", newline="") as f:
        reviewer_rows = list(csv.DictReader(f))
check("reviewer-register:no synthetic reviewer", len(reviewer_rows) == 0, f"rows={len(reviewer_rows)}")

# Inventory high-risk claims across public source. These are warnings, not automatic legal conclusions.
claim_patterns = [
    ("NOT_MEDICAL_DEVICE", re.compile(r"\bnot (?:a |positioned as a |classified as a )?medical device\b", re.I)),
    ("GENERAL_WELLNESS", re.compile(r"\bgeneral wellness\b", re.I)),
    ("FDA", re.compile(r"\bFDA\b", re.I)),
    ("CE", re.compile(r"\bCE(?: marking| conformity| compliance|-merking|-samsvar)?\b", re.I)),
    ("CLINICALLY_PROVEN", re.compile(r"\bclinically proven\b", re.I)),
    ("TREAT_CURE_PREVENT", re.compile(r"\b(?:treat|cure|prevent|diagnose)(?:s|d|ing)?\b", re.I)),
]
scan_rows = []
for root in [repo/"src/app/(en)", repo/"src/app/(no)", repo/"src/content"]:
    if not root.exists():
        continue
    for path in root.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in {".ts",".tsx",".md",".mdx"}:
            continue
        try:
            source = path.read_text(encoding="utf-8")
        except Exception:
            continue
        for line_no, line in enumerate(source.splitlines(), 1):
            for kind, pattern in claim_patterns:
                if pattern.search(line):
                    scan_rows.append({
                        "kind": kind,
                        "file": str(path.relative_to(repo)),
                        "line": line_no,
                        "text": line.strip()[:500],
                    })
with (out/"claim-scan.csv").open("w",encoding="utf-8",newline="") as f:
    w=csv.DictWriter(f,fieldnames=["kind","file","line","text"])
    w.writeheader()
    w.writerows(scan_rows)

# Scan the rest of legal code for editorial/draft markers not covered by exact replacements.
draft_rx = re.compile(r"(lanseringsutkast|launch-copy|må fylles inn|fyll inn|før offentlig launch|før offentlig lansering|before public launch)", re.I)
global_draft_rows = []
for root in [repo/"src/app/(en)/legal", repo/"src/app/(no)/no/juridisk"]:
    if not root.exists():
        continue
    for path in root.rglob("*.tsx"):
        source = path.read_text(encoding="utf-8")
        for line_no,line in enumerate(source.splitlines(),1):
            if draft_rx.search(line):
                global_draft_rows.append({
                    "file":str(path.relative_to(repo)),
                    "line":line_no,
                    "text":line.strip()[:500],
                })
with (out/"uncontrolled-legal-draft-scan.csv").open("w",encoding="utf-8",newline="") as f:
    w=csv.DictWriter(f,fieldnames=["file","line","text"])
    w.writeheader()
    w.writerows(global_draft_rows)
if global_draft_rows:
    warnings.append(f"{len(global_draft_rows)} draft-marker hits remain elsewhere in legal route files and require manual context review.")

reg_hits = sum(1 for row in scan_rows if row["kind"] in {"NOT_MEDICAL_DEVICE","FDA","CE"})
warnings.append(
    f"Claim inventory contains {len(scan_rows)} source-line hits, including {reg_hits} regulatory/classification hits. "
    "Presence is not approval; compare them with the controlled fact register."
)

with (out/"trust-audit-checks.csv").open("w",encoding="utf-8",newline="") as f:
    w=csv.DictWriter(f,fieldnames=["check","status","detail"])
    w.writeheader()
    w.writerows(checks)

result = {
    "schema":"neuvago-search-dominance-1d-trust-audit-v4",
    "status":"PASS" if not hard_failures else "FAIL",
    "checks_total":len(checks),
    "checks_passed":sum(1 for row in checks if row["status"]=="PASS"),
    "hard_failures":hard_failures,
    "warnings":warnings,
    "claim_scan_rows":len(scan_rows),
    "uncontrolled_legal_draft_rows":len(global_draft_rows),
    "open_regulatory_fact_gates":[
        fact_id for fact_id,status in reg_status.items()
        if status in {"OWNER_CONFIRMATION_REQUIRED","DO_NOT_ASSERT_ACHIEVED_UNTIL_VERIFIED"}
    ],
}
(out/"trust-audit.json").write_text(json.dumps(result,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
(out/"TRUST-AUDIT.md").write_text(
    "# NEUVAGO SEARCH DOMINANCE 1D — Trust Audit v4\n\n"
    f"Status: **{result['status']}**\n\n"
    f"Checks: **{result['checks_passed']} / {result['checks_total']} PASS**\n\n"
    "This audit verifies the editorial-governance implementation and obvious public draft leakage. "
    "It is not legal, medical, CE, FDA, or regulatory approval.\n",
    encoding="utf-8",
)

print(json.dumps(result,ensure_ascii=False,indent=2))
sys.exit(1 if hard_failures else 0)
