#!/usr/bin/env python3
from pathlib import Path
import json, re, sys

repo=Path(sys.argv[1]).resolve()
out=Path(sys.argv[2]).resolve()
out.mkdir(parents=True,exist_ok=True)

checks=[]
failures=[]
warnings=[]

def read(rel):
    p=repo/rel
    return p.read_text(encoding="utf-8") if p.is_file() else ""

def check(name,ok,detail=""):
    checks.append({"check":name,"status":"PASS" if ok else "FAIL","detail":detail})
    if not ok: failures.append(f"{name}: {detail}")

anatomy=read("src/app/(en)/learn/vagus-nerve-anatomy/page.tsx")
ear=read("src/app/(en)/learn/vagus-nerve-in-the-ear/page.tsx")
foundation=read("src/app/(en)/learn/vagus-nerve/page.tsx")
hub=read("src/app/(en)/learn/page.tsx")
noear=read("src/content/knowledge/no/articles/orets-anatomi-og-vagusnerven.ts")
sitemap=read("src/app/sitemap.ts")
llms=read("public/llms.txt")
owners=read("docs/seo-vns-cluster-target-queries.md")
lock=read("docs/seo/search-dominance-1e1a-anatomy-ear-source-claims-lock.md")
seoaudit=read("scripts/seo-vns-cluster-audit.mjs")

for rel in [
    "src/app/(en)/learn/vagus-nerve-anatomy/page.tsx",
    "src/app/(en)/learn/vagus-nerve-in-the-ear/page.tsx",
    "docs/seo/search-dominance-1e1a-anatomy-ear-source-claims-lock.md",
    "scripts/search-dominance-1e1a-audit.py",
]:
    check("exists:"+rel,(repo/rel).is_file(),rel)

for label,source,needles in [
    ("anatomy",anatomy,[
        'const path = "/learn/vagus-nerve-anatomy"',
        "Vagus nerve anatomy: where it runs and how it branches",
        "A location map with the interpretation boundary built in",
        "cervical vagus is not a reliable home palpation target",
        "General vagus anatomy is also not product evidence for Neuvago",
        'href="/learn/vagus-nerve-in-the-ear"',
        'href="/legal/editorial-policy"',
        'datePublished: "2026-09-11"',
        'dateModified: "2026-09-11"',
    ]),
    ("ear",ear,[
        'const path = "/learn/vagus-nerve-in-the-ear"',
        '"nb-NO": "/no/kunnskap/orets-anatomi-og-vagusnerven"',
        "the ear is not a pure vagus map",
        "14 ears in seven cadavers",
        "Anatomical plausibility is not the same as target engagement",
        "This is not an electrode-placement or self-treatment guide",
        'href="/research/topics/auricular-vagus-nerve-stimulation"',
        'href="/legal/editorial-policy"',
        'datePublished: "2026-09-11"',
        'dateModified: "2026-09-11"',
    ]),
]:
    for needle in needles:
        check(f"{label}:{needle[:55]}",needle in source,needle)

# Ownership and cannibalization.
check("foundation broad title",'const title = "Vagus nerve: what it is, what it does and why it matters"' in foundation)
check("foundation old anatomy title removed",'const title = "Vagus nerve: anatomy, function and what it does"' not in foundation)
check("foundation links anatomy",'/learn/vagus-nerve-anatomy' in foundation)
check("foundation links ear",'/learn/vagus-nerve-in-the-ear' in foundation)

for route in ["/learn/vagus-nerve-anatomy","/learn/vagus-nerve-in-the-ear"]:
    check(f"hub exactly once {route}",hub.count(route)==1,f"count={hub.count(route)}")
    check(f"sitemap exactly once {route}",sitemap.count(route)==1,f"count={sitemap.count(route)}")
    check(f"llms exactly once {route}",llms.count(route)==1,f"count={llms.count(route)}")

check("NO ear reciprocal EN", 'englishEquivalent: "/learn/vagus-nerve-in-the-ear"' in noear)
check("NO ear visible EN link", 'href: "/learn/vagus-nerve-in-the-ear"' in noear)
check("NO ear modified date", 'modifiedAt: "2026-09-11"' in noear)

check("owner map 1E.1A", "SEARCH DOMINANCE 1E.1A — EN anatomy owner lock" in owners)
check("source lock evidence transfer", "Method evidence ≠ product evidence" in lock)
check("source lock reviewer boundary", "Neither page may be labelled medically reviewed" in lock)
check("SEO audit carries anatomy route", '"/learn/vagus-nerve-anatomy"' in seoaudit)
check("SEO audit carries ear route", '"/learn/vagus-nerve-in-the-ear"' in seoaudit)
check("SEO audit carries 1E contract", "SEARCH DOMINANCE 1E.1A" in seoaudit)

# Medical/regulatory overclaim scan in the new pages.
for label,source in [("anatomy",anatomy),("ear",ear)]:
    forbidden=[
        "clinically proven",
        "proven to treat",
        "proven to cure",
        "FDA approved Neuvago",
        "CE certified Neuvago",
        "guarantees vagus",
    ]
    hits=[x for x in forbidden if x.lower() in source.lower()]
    check(f"{label}:forbidden claim phrases",not hits,str(hits))
    check(f"{label}:no noindex","noindex" not in source.lower())

# Both pages must expose sources and structured data.
for label,source in [("anatomy",anatomy),("ear",ear)]:
    check(f"{label}:authority structured data","buildAuthorityPageStructuredData" in source)
    check(f"{label}:JsonLd","<JsonLd" in source)
    check(f"{label}:sources",source.count('id: "') >= 6,f"source-like ids={source.count('id: chr(34)')}")

# No German launch or new NO anatomy split.
combined="\n".join([anatomy,ear,foundation,hub,noear,sitemap])
check("no German child route exposure","/de/learn" not in combined and "/de/lernen" not in combined)
check("no NO vagus anatomy standalone route","/no/kunnskap/vagusnerven-anatomi" not in combined)

# Existing 1D governance must remain available.
check("1D claim governance exists",(repo/"docs/trust/claim-governance-v1.md").is_file())

# Warn, don't fail, if the reusable image atlas is not yet present: it is a later 1C-P0E authority asset.
image_candidates=list((repo/"public/images").rglob("*vagus*")) if (repo/"public/images").exists() else []
if not image_candidates:
    warnings.append("No vagus-named public image asset detected. This is not a 1E.1A blocker; the reusable anatomy atlas remains the separate 1C-P0E authority asset.")

with (out/"search-dominance-1e1a-checks.csv").open("w",encoding="utf-8",newline="") as f:
    import csv
    w=csv.DictWriter(f,fieldnames=["check","status","detail"])
    w.writeheader(); w.writerows(checks)

result={
    "schema":"neuvago-search-dominance-1e1a-audit-v1",
    "status":"PASS" if not failures else "FAIL",
    "checks_total":len(checks),
    "checks_passed":sum(1 for x in checks if x["status"]=="PASS"),
    "failures":failures,
    "warnings":warnings,
    "routes":[
        "/learn/vagus-nerve-anatomy",
        "/learn/vagus-nerve-in-the-ear",
    ],
}
(out/"SEARCH-DOMINANCE-1E1A-AUDIT.json").write_text(json.dumps(result,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
print(json.dumps(result,indent=2,ensure_ascii=False))
sys.exit(1 if failures else 0)
