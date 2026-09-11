#!/usr/bin/env python3
from pathlib import Path
import csv,json,sys

repo=Path(sys.argv[1]).resolve()
out=Path(sys.argv[2]).resolve(); out.mkdir(parents=True,exist_ok=True)
checks=[]; failures=[]; warnings=[]

def read(rel):
    p=repo/rel
    return p.read_text(encoding="utf-8") if p.is_file() else ""

def check(name,ok,detail=""):
    checks.append({"check":name,"status":"PASS" if ok else "FAIL","detail":detail})
    if not ok: failures.append(f"{name}: {detail}")

autonomic=read("src/app/(en)/learn/autonomic-nervous-system/page.tsx")
comparison=read("src/app/(en)/learn/sympathetic-vs-parasympathetic-nervous-system/page.tsx")
parasymp=read("src/app/(en)/learn/parasympathetic-nervous-system/page.tsx")
regulation=read("src/app/(en)/learn/nervous-system-regulation/page.tsx")
hub=read("src/app/(en)/learn/page.tsx")
types=read("src/content/knowledge/no/types.ts")
registry=read("src/content/knowledge/no/registry.ts")
noauto=read("src/content/knowledge/no/articles/det-autonome-nervesystemet.ts")
nosymp=read("src/content/knowledge/no/articles/det-sympatiske-nervesystemet.ts")
nopara=read("src/content/knowledge/no/articles/det-parasympatiske-nervesystemet.ts")
sitemap=read("src/app/sitemap.ts")
llms=read("public/llms.txt")
owners=read("docs/seo-vns-cluster-target-queries.md")
source_lock=read("docs/seo/search-dominance-1e1b-ans-cluster-source-claims-lock.md")
seo=read("scripts/seo-vns-cluster-audit.mjs")

required=[
 "src/app/(en)/learn/autonomic-nervous-system/page.tsx",
 "src/app/(en)/learn/sympathetic-vs-parasympathetic-nervous-system/page.tsx",
 "src/content/knowledge/no/articles/det-sympatiske-nervesystemet.ts",
 "docs/seo/search-dominance-1e1b-ans-cluster-source-claims-lock.md",
 "scripts/search-dominance-1e1b-audit.py",
]
for rel in required: check("exists:"+rel,(repo/rel).is_file(),rel)

for needle in [
 'const path = "/learn/autonomic-nervous-system"',
 '"nb-NO": "/no/kunnskap/det-autonome-nervesystemet"',
 "A practical map of the autonomic nervous system",
 "Sympathetic and parasympathetic activity are related—but not one balance axis",
 "No single consumer metric measures the whole ANS",
 "The vagus nerve is important—but it is not the whole autonomic nervous system",
 "This page is educational. It does not diagnose dysautonomia",
 "General ANS physiology is therefore context for vagus-nerve education. It is not product evidence for Neuvago",
 'datePublished: "2026-09-11"','dateModified: "2026-09-11"',
 "https://pubmed.ncbi.nlm.nih.gov/42495990/",
]: check("autonomic:"+needle[:54],needle in autonomic,needle)

for needle in [
 'const path = "/learn/sympathetic-vs-parasympathetic-nervous-system"',
 "They are different autonomic pathways—not a good side and a bad side",
 "Reciprocal change is only one of several possible coordination patterns",
 "Compare the branches organ by organ, not slogan by slogan",
 "HRV is not a direct sympathovagal balance meter",
 "General VNS, taVNS or autonomic research does not establish that Neuvago reduces sympathetic activity",
 'datePublished: "2026-09-11"','dateModified: "2026-09-11"',
 "https://pubmed.ncbi.nlm.nih.gov/42495990/",
]: check("comparison:"+needle[:54],needle in comparison,needle)

check("comparison no false nb-NO hreflang",'"nb-NO":' not in comparison)
check("no EN sympathetic P1 page",not (repo/"src/app/(en)/learn/sympathetic-nervous-system/page.tsx").exists())
check("no duplicate NO comparison route","/no/kunnskap/sympatisk-vs-parasympatisk" not in sitemap)

for needle in [
 'slug: "det-sympatiske-nervesystemet"','path: "/no/kunnskap/det-sympatiske-nervesystemet"','wave: "SEARCH-1E"',
 'primaryKeyword: "sympatiske nervesystem"',"Sympatisk og parasympatisk er ikke to ender av én vippebryter",
 "Sympatisk aktivitet er ikke det samme som å være «dysregulert»","Mål det som faktisk måles",
 "Vagusnerven tilhører ikke den sympatiske grenen","Denne artikkelen dokumenterer ikke at Neuvago endrer sympatisk nerveaktivitet",
 'pmid: "42495990"',
]: check("NO sympathetic:"+needle[:54],needle in nosymp,needle)

# Source IDs are limited to the source section by expected named identifiers.
for source_id in ["waxenbaum-2025-ans","wehrwein-2016-autonomic-overview","gibbons-2019-basics","benarroch-2020-autonomic","berntson-1991-autonomic-space","paton-2006-coactivation","ans-monitoring-2024","carter-2026-hrv-rigor"]:
    check("NO source:"+source_id,f'id: "{source_id}"' in nosymp,source_id)

check("NO wave union",'| "SEARCH-1E"' in types)
check("NO registry import once",registry.count('import { detSympatiskeNervesystemetArticle }')==1,str(registry.count('import { detSympatiskeNervesystemetArticle }')))
check("NO registry item once",registry.count('  detSympatiskeNervesystemetArticle,')==1,str(registry.count('  detSympatiskeNervesystemetArticle,')))
check("NO ANS EN equivalent",'englishEquivalent: "/learn/autonomic-nervous-system"' in noauto)
check("NO ANS reciprocal sympathetic",'"det-sympatiske-nervesystemet"' in noauto)
check("NO PNS reciprocal sympathetic",'"det-sympatiske-nervesystemet"' in nopara)
check("NO ANS modified",'modifiedAt: "2026-09-11"' in noauto)
check("NO PNS modified",'modifiedAt: "2026-09-11"' in nopara)
check("EN PNS comparison reciprocal",'/learn/sympathetic-vs-parasympathetic-nervous-system' in parasymp)
check("EN PNS ANS reciprocal",'/learn/autonomic-nervous-system' in parasymp)
check("EN regulation ANS reciprocal",'/learn/autonomic-nervous-system' in regulation)

for route in ["/learn/autonomic-nervous-system","/learn/sympathetic-vs-parasympathetic-nervous-system"]:
    check("hub exactly once "+route,hub.count(route)==1,f"count={hub.count(route)}")
    check("sitemap exactly once "+route,sitemap.count(route)==1,f"count={sitemap.count(route)}")
    check("llms exactly once "+route,llms.count(route)==1,f"count={llms.count(route)}")
check("llms NO sympathetic once",llms.count("/no/kunnskap/det-sympatiske-nervesystemet")==1,f"count={llms.count('/no/kunnskap/det-sympatiske-nervesystemet')}")

check("owner map 1E1B","SEARCH DOMINANCE 1E.1B — Autonomic nervous system owner lock" in owners)
check("owner map EN sympathetic deferred","future `/learn/sympathetic-nervous-system`" in owners)
check("source lock balance","No universal balance axis" in source_lock)
check("source lock NO duplicate","No NO comparison duplicate" in source_lock)
check("source lock HRV 2026","PMID 42495990" in source_lock)

for label,source in [("autonomic",autonomic),("comparison",comparison),("NO sympathetic",nosymp)]:
    forbidden=["clinically proven","cures dysautonomia","diagnoses dysautonomia","Neuvago balances the autonomic nervous system","Neuvago increases parasympathetic activity","sympathetic nervous system is bad"]
    hits=[x for x in forbidden if x.lower() in source.lower()]
    check(label+" forbidden claim scan",not hits,str(hits))
    check(label+" no noindex","noindex" not in source.lower())

for source,label in [(autonomic,"autonomic"),(comparison,"comparison")]:
    check(label+" authority schema","buildAuthorityPageStructuredData" in source)
    check(label+" JsonLd","<JsonLd" in source)
    check(label+" editorial policy",'/legal/editorial-policy' in source)

check("SEO audit ANS route",'"/learn/autonomic-nervous-system"' in seo)
check("SEO audit comparison route",'"/learn/sympathetic-vs-parasympathetic-nervous-system"' in seo)
check("SEO audit 1E1B contract","SEARCH DOMINANCE 1E.1B" in seo)
check("1E1A anatomy preserved",(repo/"src/app/(en)/learn/vagus-nerve-anatomy/page.tsx").is_file())
check("1D editorial policy preserved",(repo/"src/app/(en)/legal/editorial-policy/page.tsx").is_file())
check("1D claim governance preserved",(repo/"docs/trust/claim-governance-v1.md").is_file())
combined="\n".join([autonomic,comparison,nosymp,hub,sitemap])
check("no German child route","/de/learn" not in combined and "/de/lernen" not in combined)

# 1E.1B.R1 — Table-to-Editorial Layout Repair.
renderer=read("src/components/knowledge/NorwegianKnowledgeArticlePage.tsx")

for label,source,expected_calls in [
    ("autonomic R1",autonomic,3),
    ("comparison R1",comparison,2),
]:
    check(label+" no HTML table","<table" not in source)
    check(label+" no horizontal table scroller","overflow-x-auto" not in source)
    check(label+" no forced wide-table min width",all(token not in source for token in ["min-w-[64rem]","min-w-[66rem]","min-w-[70rem]","min-w-[72rem]"]))
    check(label+" editorial grid helper","data-editorial-card-grid" in source)
    check(label+" editorial grid call count",source.count("<EditorialCardGrid")==expected_calls,f"count={source.count('<EditorialCardGrid')}")

check("NO sympathetic no table blocks",'type: "table"' not in nosymp)
check("NO sympathetic three editorial-card blocks",nosymp.count('type: "editorial-cards"')==3,f"count={nosymp.count('type: chr(34)editorial-cardschr(34)')}")
check("NO types editorial-card block",'type: "editorial-cards"' in types and "NorwegianKnowledgeEditorialCardsBlock" in types)
check("NO renderer editorial-card case",'case "editorial-cards":' in renderer)
check("NO renderer responsive card grid","grid gap-4 md:grid-cols-2" in renderer)
if 'case "editorial-cards":' in renderer and 'case "timeline":' in renderer:
    card_renderer=renderer[renderer.index('case "editorial-cards":'):renderer.index('case "timeline":')]
    check("NO editorial-card renderer has no horizontal scroll","overflow-x-auto" not in card_renderer)
else:
    check("NO editorial-card renderer has no horizontal scroll",False,"renderer section missing")
check("R1 source-lock section","1E.1B.R1 — Table-to-Editorial Layout Repair" in source_lock)
check("R1 source-lock scroll boundary","horizontal scrolling" in source_lock)

# 1E.1B.R2 — Public Article Meta Box Removal.
renderer=read("src/components/knowledge/NorwegianKnowledgeArticlePage.tsx")
knowledgeTypes=read("src/content/knowledge/no/types.ts")
noSympatheticArticle=read("src/content/knowledge/no/articles/det-sympatiske-nervesystemet.ts")
knowledgeSeo=read("src/lib/seo/knowledge-article.ts")

for label in ["Om artikkelen","EditorialEntityLine","getEditorialEntity","Kildekontroll","Lesetid:"]:
    check("R2 renderer hides "+label,label not in renderer)
check("R2 renderer has no old two-column hero grid","lg:grid-cols-[1.08fr_0.92fr]" not in renderer)
check("R2 renderer uses single editorial hero width",'max-w-5xl' in renderer)
check("R2 structured-data builder remains",'buildNorwegianKnowledgeArticleStructuredData(article)' in renderer)
check("R2 JsonLd remains",'<JsonLd' in renderer)
check("R2 content model keeps authorId","authorId:" in knowledgeTypes)
check("R2 content model keeps sourceReviewerId","sourceReviewerId:" in knowledgeTypes)
check("R2 article keeps authorId",'authorId: "john-willander"' in noSympatheticArticle)
check("R2 article keeps sourceReviewerId",'sourceReviewerId: "neuvago-redaksjonen"' in noSympatheticArticle)
check("R2 article keeps published date",'publishedAt: "2026-09-11"' in noSympatheticArticle)
check("R2 article keeps modified date",'modifiedAt: "2026-09-11"' in noSympatheticArticle)
check("R2 article keeps reading time",'readingTimeMinutes: 17' in noSympatheticArticle)
check("R2 structured-data module remains available","buildNorwegianKnowledgeArticleStructuredData" in knowledgeSeo)
check("R2 source-lock section","1E.1B.R2 — Public Article Meta Box Removal" in source_lock)
check("R2 governance preservation","underlying governance metadata" in source_lock)

warnings.append("No new image/video assets are required for 1E.1B. Visual ANS diagrams remain later media/authority work.")
with (out/"search-dominance-1e1b-checks.csv").open("w",encoding="utf-8",newline="") as f:
    w=csv.DictWriter(f,fieldnames=["check","status","detail"]); w.writeheader(); w.writerows(checks)
result={"schema":"neuvago-search-dominance-1e1b-audit-v1","status":"PASS" if not failures else "FAIL","checks_total":len(checks),"checks_passed":sum(x["status"]=="PASS" for x in checks),"failures":failures,"warnings":warnings,"routes":["/learn/autonomic-nervous-system","/learn/sympathetic-vs-parasympathetic-nervous-system","/no/kunnskap/det-sympatiske-nervesystemet"]}
(out/"SEARCH-DOMINANCE-1E1B-AUDIT.json").write_text(json.dumps(result,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
print(json.dumps(result,indent=2,ensure_ascii=False)); sys.exit(1 if failures else 0)
