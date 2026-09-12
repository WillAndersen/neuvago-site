#!/usr/bin/env python3
from __future__ import annotations

import csv
import hashlib
import json
import re
import sys
from pathlib import Path


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: search-dominance-1e3c-audit.py <repo> <outdir>", file=sys.stderr)
        return 2

    repo = Path(sys.argv[1]).resolve()
    out = Path(sys.argv[2]).resolve()
    out.mkdir(parents=True, exist_ok=True)

    page_path = repo / "src/app/(en)/learn/vagus-nerve-evidence-vs-internet-claims/page.tsx"
    exercise_path = repo / "src/app/(en)/learn/vagus-nerve-exercises/page.tsx"
    parent_path = repo / "src/app/(en)/learn/how-to-stimulate-the-vagus-nerve/page.tsx"
    hub_path = repo / "src/app/(en)/learn/page.tsx"
    sitemap_path = repo / "src/app/sitemap.ts"
    llms_path = repo / "public/llms.txt"
    owner_doc_path = repo / "docs/seo-vns-cluster-target-queries.md"
    measurement_path = repo / "docs/seo-measurement-plan.md"
    claims_path = repo / "docs/seo/search-dominance-1e3c-evidence-internet-claims-source-claims-lock.md"
    media_path = repo / "docs/seo/search-dominance-1e3c-evidence-internet-claims-media-brief.md"

    files = [
        page_path,
        exercise_path,
        parent_path,
        hub_path,
        sitemap_path,
        llms_path,
        owner_doc_path,
        measurement_path,
        claims_path,
        media_path,
    ]
    texts: dict[Path, str] = {}
    checks: list[dict[str, str]] = []

    def check(name: str, ok: bool, detail: str = "") -> None:
        checks.append({"check": name, "status": "PASS" if ok else "FAIL", "detail": detail})

    for p in files:
        check(f"exists: {p.relative_to(repo)}", p.is_file())
        if p.is_file():
            texts[p] = p.read_text(encoding="utf-8")

    page = texts.get(page_path, "")
    exercise = texts.get(exercise_path, "")
    parent = texts.get(parent_path, "")
    hub = texts.get(hub_path, "")
    sitemap = texts.get(sitemap_path, "")
    llms = texts.get(llms_path, "")
    owner_doc = texts.get(owner_doc_path, "")
    measurement = texts.get(measurement_path, "")
    claims = texts.get(claims_path, "")
    media = texts.get(media_path, "")

    route = "/learn/vagus-nerve-evidence-vs-internet-claims"
    title = "Vagus Nerve Claims Online: Evidence, Limits and Safety | Neuvago"
    h1 = "Vagus nerve claims online: what the evidence supports, what remains uncertain and what can be unsafe"

    # New owner contract.
    check("page self canonical route", f'const path = "{route}";' in page)
    check("page exact SEO title", f'const title = "{title}";' in page)
    check("page exact H1", h1 in page)
    check("page owner marker", 'data-search-dominance-1e3c-owner="evidence-vs-internet-claims"' in page)
    check("page direct-answer marker", 'data-search-dominance-1e3c-direct-answer="true"' in page)
    check("page matrix marker", 'data-search-dominance-1e3c-matrix="true"' in page)
    check("page sources marker", 'data-search-dominance-1e3c-sources="true"' in page)
    check("page en-US hreflang", '"en-US": path' in page)
    check("page x-default hreflang", '"x-default": path' in page)
    check("page no Norwegian hreflang", '"nb-NO"' not in page)
    check("page publish date", 'datePublished: "2026-09-12"' in page and 'dateModified: "2026-09-12"' in page)
    check("page no FAQPage", "FAQPage" not in page)
    check("page no QAPage", "QAPage" not in page)
    check("page no product/shop route in main source", 'href="/product"' not in page and 'href="/shop"' not in page)
    check("page no electrical how-to settings", not re.search(r"\b(?:pulse width|milliamps?|electrode placement|stimulation frequency\s*[:=])\b", page, re.I))
    check("page no carotid coordinates", "neck coordinates" in page and "pressure grades" in page and "timing sequences" in page)
    check("page no cold dosing", "no cold-plunge dose, temperature target or face-immersion protocol" in page)
    check("page no deliberate gagging protocol", "does not prescribe gargling as a vagus protocol" in page)
    check("page mechanism boundary", "does not automatically establish direct vagus-nerve stimulation" in page)
    check("page sensation boundary", "A sensation or wearable change is not a home test of vagus target engagement" in page)
    check("page electrical category boundary", "Electrical VNS has its own evidence category" in page)

    # Claim matrix rows and status classes.
    matrix_claims = [
        'Slow breathing “activates the vagus nerve”',
        "Humming or singing directly stimulates the vagus nerve",
        "Gargling is a proven vagus exercise",
        "Cold exposure resets the vagus nerve",
        "Tapping works by stimulating the vagus nerve",
        "A neck pressure point can manually switch on the vagus nerve",
    ]
    for claim in matrix_claims:
        check(f"matrix claim: {claim}", claim in page)

    for status in [
        "Supported outcome; mechanism narrower",
        "Emerging / indirect",
        "Not established",
        "Real autonomic effect; not a reset",
        "Evidence for another intervention; vagus mechanism unproven",
        "Clinical / safety-sensitive",
    ]:
        check(f"matrix status: {status}", status in page)

    # Required claim-specific language.
    check("humming respiratory confound boundary", "respiratory rhythm and other pathways can contribute" in page)
    check("gargling anatomy is not validation", "does not validate ordinary gargling as a calming vagus-stimulation protocol" in page)
    check("gag/oropharyngeal sympathoexcitation boundary", "increase heart rate, blood pressure and sympathetic nerve activity" in page)
    check("cold effects are method-dependent", "Technique, temperature, immersion depth, duration, prior exercise and individual health can change the response." in page)
    check("tapping outcome is not mechanism", "does not identify the vagus nerve as the active mechanism" in page)
    check("carotid is clinical", "Clinical carotid-sinus massage is used in selected patients with unexplained syncope" in page)

    # Links.
    required_hrefs = [
        "/learn/how-to-stimulate-the-vagus-nerve",
        "/learn/vagus-nerve-exercises",
        "/learn/breathing-exercises-and-the-vagus-nerve",
        "/learn/vagus-nerve-massage",
        "/learn/vagus-nerve-reset",
        "/learn/vagus-nerve-stimulation",
        "/research/how-to-read-a-vns-study",
        "/legal/medical-disclaimer",
        "/legal/trust-safety",
    ]
    for href in required_hrefs:
        check(f"page required href {href}", f'href="{href}"' in page)

    # Reader-visible sources.
    source_urls = [
        "https://pubmed.ncbi.nlm.nih.gov/35623448/",
        "https://pubmed.ncbi.nlm.nih.gov/28265249/",
        "https://pubmed.ncbi.nlm.nih.gov/40482984/",
        "https://pubmed.ncbi.nlm.nih.gov/41686399/",
        "https://pubmed.ncbi.nlm.nih.gov/12119224/",
        "https://pubmed.ncbi.nlm.nih.gov/23599399/",
        "https://pubmed.ncbi.nlm.nih.gov/38663342/",
        "https://pubmed.ncbi.nlm.nih.gov/36219506/",
        "https://pubmed.ncbi.nlm.nih.gov/40941532/",
        "https://pubmed.ncbi.nlm.nih.gov/42204029/",
        "https://pubmed.ncbi.nlm.nih.gov/34823149/",
    ]
    for i, url in enumerate(source_urls, start=1):
        sid = f"C-{i:03d}"
        check(f"page source id {sid}", f'id: "{sid}"' in page)
        check(f"page source url {sid}", f'url: "{url}"' in page)
    check("page exactly eleven source objects", len(re.findall(r'\n\s*id: "C-\d{3}"', page)) == 11, str(len(re.findall(r'\n\s*id: "C-\d{3}"', page))))
    check("page source cards expose source IDs", "data-source-id={source.id}" in page)

    # Sibling and parent ownership.
    check("exercise links to claim hub exactly once", exercise.count(route) == 1, str(exercise.count(route)))
    check("exercise claim link label", "Open the claim-by-claim evidence matrix" in exercise)
    check("exercise keeps owner title", "Vagus Nerve Exercises: Evidence, Examples and Limits | Neuvago" in exercise)
    check("exercise keeps viral claim section", "Humming, gargling, tapping and cold exposure need a separate claim check" in exercise)

    check("parent links to claim hub exactly once", parent.count(route) == 1, str(parent.count(route)))
    check("parent claim link label", "Check common internet claims one by one" in parent)
    check("parent keeps exercise link exactly once", parent.count("/learn/vagus-nerve-exercises") == 1, str(parent.count("/learn/vagus-nerve-exercises")))
    check("parent keeps broad methods H1", "How to stimulate the vagus nerve: methods, evidence and important limits" in parent)

    check("learn hub links claim owner exactly once", hub.count(route) == 1, str(hub.count(route)))
    check("learn hub claim card title", 'title: "Vagus nerve claims online"' in hub)
    check("learn hub claim card summary", "humming, gargling, cold exposure, tapping and pressure-point claims" in hub)

    # Indexing and AI surface.
    check("sitemap claim route exactly once", sitemap.count(route) == 1, str(sitemap.count(route)))
    check("sitemap claim date", f'{{ path: "{route}", changeFrequency: "weekly", priority: 0.79, lastModified: "2026-09-12" }}' in sitemap)
    check("llms claim route exactly once", llms.count(route) == 1, str(llms.count(route)))
    check("llms mechanism boundary", "separates measured outcomes from direct vagus target engagement" in llms)
    check("llms carotid safety boundary", "safety-sensitive clinical territory rather than DIY guidance" in llms)

    # Governance.
    check("owner map 1E.3C section", "SEARCH DOMINANCE 1E.3C — EVIDENCE VS INTERNET CLAIMS OWNER LOCK" in owner_doc)
    check("owner map dedicated route", route in owner_doc)
    check("owner map explicit no evidence transfer", "Electrical VNS evidence stays with the electrical method owners" in owner_doc)
    check("measurement 1E.3C section", "SEARCH DOMINANCE 1E.3C — EVIDENCE VS INTERNET CLAIMS MEASUREMENT AND PRIVACY LOCK" in measurement)
    check("measurement no claim tracking", "Do not record which claim row" in measurement)
    check("measurement ranking is not mechanism evidence", "is a search-ownership outcome" in measurement)

    check("claims lock route", route in claims)
    check("claims lock exact six families", all(x in claims for x in ["humming vagus nerve", "gargling vagus nerve", "cold exposure", "tapping vagus nerve", "vagus nerve pressure point"]))
    check("claims lock no universal vagus activation", "guaranteed vagus activation, reset, healing" in claims)
    check("claims lock no cold dosing", "A prescriptive cold-plunge temperature, duration or face-immersion protocol." in claims)
    check("claims lock no gargling prescription", "Instructions that deliberately provoke gagging as a wellness technique." in claims)
    check("claims lock carotid clinical boundary", "Carotid-sinus massage is a defined clinical diagnostic manoeuvre" in claims)

    check("media brief brief-only", "brief only; no final media asset is added in 1E.3C." in media)
    check("media brief no direct arrow", "Do not:" in media and "direct selective vagus activation" in media)
    check("media brief no pressure point", "show one universal neck pressure point" in media)

    # Untouched high-risk support hashes from exact 1E.3C baseline.
    untouched = {
        "src/app/(en)/learn/breathing-exercises-and-the-vagus-nerve/page.tsx": "4af7567a5b06702da016d9d373335cbe9a98689b24f39c1e00c9857ff7e15dd7",
        "src/app/(en)/learn/vagus-nerve-massage/page.tsx": "a7fb748fb50cd6b41adec7b09b7dd065bec0b5250e1a766532541fe00dab4efd",
        "src/app/(en)/learn/vagus-nerve-reset/page.tsx": "4806b7a10c8917a5c62b2334db56282dc57f392ba862e0cfd7c7c74c697d490e",
        "src/app/(en)/legal/medical-disclaimer/page.tsx": "5e532338cac9fe6e13e3b75ba6bb0fd0b21e72b94e1c81f68333c6376355768e",
        "src/app/(en)/legal/trust-safety/page.tsx": "899054b1cf9a5f339d81cc8d254f26bd938b6a149ec709457e598846d5eace35",
        "scripts/seo-vns-cluster-audit.mjs": "d9bc3e4acae0c21a4c71943d6375a84346b04e52a2509897dae0932ee0e27d4d",
        "scripts/search-dominance-1e3b-audit.py": "b03c2922482b39bf5f35e04d5b62a4f76303c727b599372c5e8250b62856eaf0",
    }
    untouched_ok = True
    for rel, expected in untouched.items():
        p = repo / rel
        got = sha256(p) if p.is_file() else "MISSING"
        ok = got == expected
        untouched_ok = untouched_ok and ok
        check(f"untouched support hash: {rel}", ok, f"expected={expected} got={got}")

    # Existing 1E.3B source page must remain present and the new route must not cannibalize it.
    check("exercise route still in sitemap", sitemap.count("/learn/vagus-nerve-exercises") == 1)
    check("exercise route still in llms", llms.count("/learn/vagus-nerve-exercises") == 1)
    check("claim hub does not claim vagus nerve exercises primary title", 'title = "Vagus Nerve Exercises' not in page)

    failures = [c for c in checks if c["status"] == "FAIL"]
    result = {
        "schema": "neuvago-search-dominance-1e3c-audit-v1",
        "status": "PASS" if not failures else "FAIL",
        "checks_total": len(checks),
        "checks_passed": len(checks) - len(failures),
        "failures": failures,
        "warnings": [
            "1E.3C publishes a claim-check evidence hub but intentionally adds no final image/video asset.",
            "The hub evaluates claims and does not prescribe humming, gargling, cold exposure, tapping, carotid/neck manoeuvres or electrical settings.",
        ],
        "route": route,
        "parent_owner": "/learn/how-to-stimulate-the-vagus-nerve",
        "sibling_practical_owner": "/learn/vagus-nerve-exercises",
        "claim_matrix_rows": 6,
        "reader_visible_sources": 11,
        "untouched_support_hashes_preserved": untouched_ok,
    }

    (out / "search-dominance-1e3c-audit.json").write_text(json.dumps(result, indent=2) + "\n")
    with (out / "search-dominance-1e3c-checks.csv").open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["check", "status", "detail"])
        w.writeheader()
        w.writerows(checks)

    print(json.dumps(result, indent=2))
    return 0 if not failures else 1


if __name__ == "__main__":
    raise SystemExit(main())
