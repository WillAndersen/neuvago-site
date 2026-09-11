#!/usr/bin/env python3
from pathlib import Path
import csv, json, re, sys

repo = Path(sys.argv[1]).resolve()
out = Path(sys.argv[2]).resolve()
out.mkdir(parents=True, exist_ok=True)

paths = {
    "VNS": repo / "src/app/(en)/learn/vagus-nerve-stimulation/page.tsx",
    "tVNS": repo / "src/app/(en)/learn/transcutaneous-vagus-nerve-stimulation/page.tsx",
    "taVNS": repo / "src/app/(en)/learn/auricular-vagus-nerve-stimulation/page.tsx",
}
texts = {name: path.read_text(encoding="utf-8") for name, path in paths.items()}
source_lock = (repo / "docs/seo/search-dominance-1e2c-en-vns-method-authority-source-claims-lock.md").read_text(encoding="utf-8")

checks = []
failures = []

def check(name, ok, detail=""):
    row = {"check": name, "status": "PASS" if ok else "FAIL", "detail": detail}
    checks.append(row)
    if not ok:
        failures.append(row)

# Required reader-facing replacements.
required = {
    "VNS": [
        "VNS overview",
        "Why this distinction matters",
        "People come to VNS from different starting points.",
        "Neuvago focuses on practical, responsible use rather than dramatic",
        "The device and app explain how sessions work.",
        "For Neuvago, that means calm, clear,",
        "From VNS understanding to the Neuvago system",
        "Electrical VNS should be kept distinct from breathing, movement, relaxation, sound, and touch.",
    ],
    "tVNS": [
        "From method to everyday use",
        "Clear tVNS guidance should make the limits visible",
        "tVNS describes the method; it does not create a medical claim",
        "Understanding the category comes before evaluating a non-invasive",
        "For Neuvago, tVNS is useful method context",
    ],
    "taVNS": [
        "Anatomical interpretation should remain careful and avoid overstating certainty.",
        "Product claims still need evidence",
        "Clearer ear-based VNS guidance",
        "Auricular VNS research should remain separate from product promises.",
        "Clear boundaries make auricular VNS easier to understand",
        "Once the method is clear, the practical questions are how guidance",
    ],
}
for name, phrases in required.items():
    for phrase in phrases:
        check(f"{name} required public copy: {phrase[:52]}", phrase in texts[name])

# Internal/editorial strategy residue that must be absent on these three public pages.
forbidden = [
    "Category pillar",
    "Why this page matters",
    "This page is designed to meet both kinds of intent",
    "Neuvago’s role is not",
    "Neuvago's role is not",
    "The strongest trust position",
    "the right tone is",
    "the brand away from",
    "From category education to the Neuvago system",
    "This page remains the owner",
    "The broader methods pillar",
    "The product bridge stays calm",
    "The right commercial bridge",
    "The right role for this page",
    "The product story should",
    "Good tVNS education should",
    "Neuvago uses tVNS language as category education",
    "Consumer education should",
    "It needs careful product language",
    "responsible product language",
    "The stronger trust position",
    "A calm page should make the boundaries easier to see",
    "The commercial bridge should",
    "A calmer category explanation",
]
combined = "\n".join(texts.values())
for phrase in forbidden:
    check(f"internal residue absent: {phrase[:58]}", phrase not in combined)

# Guard high-signal internal-planning vocabulary on these owner pages.
patterns = {
    "search intent": r"\bsearch intent\b",
    "SERP": r"\bSERP\b",
    "content strategy": r"\bcontent strategy\b",
    "category owner": r"\bcategory owner\b",
    "owner of the": r"\bowner of the\b",
    "commercial bridge": r"\bcommercial bridge\b",
    "product bridge": r"\bproduct bridge\b",
    "trust position": r"\btrust position\b",
}
for label, pattern in patterns.items():
    check(f"strategy vocabulary absent: {label}", re.search(pattern, combined, re.I) is None)

# Reader-facing guide language remains intentionally allowed.
check("reader-facing 'This guide explains' retained where useful", "This guide explains" in texts["tVNS"] and "This guide explains" in texts["taVNS"])

# Source lock must document the new public editorial surface boundary.
for phrase in [
    "## 1E.2C.R1 public editorial surface lock",
    "finished user-facing education",
    "commercial bridge",
    "search intent",
    "the right role for this page",
]:
    check(f"source lock R1 boundary: {phrase[:52]}", phrase in source_lock)

# Basic invariants: URLs / canonicals / metadata ownership stay untouched.
invariants = {
    "VNS": [
        'const path = "/learn/vagus-nerve-stimulation"',
        '"Vagus Nerve Stimulation (VNS) | How It Works and Types | Neuvago"',
        "canonical: path",
    ],
    "tVNS": [
        'const path = "/learn/transcutaneous-vagus-nerve-stimulation"',
        '"Transcutaneous Vagus Nerve Stimulation | tVNS Guide | Neuvago"',
        "canonical: path",
    ],
    "taVNS": [
        'const path = "/learn/auricular-vagus-nerve-stimulation"',
        '"Auricular Vagus Nerve Stimulation | taVNS and Ear VNS | Neuvago"',
        "canonical: path",
    ],
}
for name, phrases in invariants.items():
    for phrase in phrases:
        check(f"{name} invariant: {phrase[:52]}", phrase in texts[name])

with (out / "search-dominance-1e2c-r1-checks.csv").open("w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["check", "status", "detail"])
    w.writeheader()
    w.writerows(checks)

result = {
    "schema": "neuvago-search-dominance-1e2c-r1-public-editorial-visual-polish-audit-v1",
    "status": "PASS" if not failures else "FAIL",
    "checks_total": len(checks),
    "checks_passed": sum(x["status"] == "PASS" for x in checks),
    "failures": failures,
    "routes": [
        "/learn/vagus-nerve-stimulation",
        "/learn/transcutaneous-vagus-nerve-stimulation",
        "/learn/auricular-vagus-nerve-stimulation",
    ],
    "visual_note": "Header placement and low-contrast CTA observations from print PDFs are not changed speculatively; browser screenshots are the authority for those visual checks.",
}
(out / "SEARCH-DOMINANCE-1E2C-R1-AUDIT.json").write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(json.dumps(result, indent=2, ensure_ascii=False))
sys.exit(1 if failures else 0)
