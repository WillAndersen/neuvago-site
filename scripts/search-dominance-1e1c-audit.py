#!/usr/bin/env python3
from pathlib import Path
import csv,json,re,sys

repo=Path(sys.argv[1]).resolve()
out=Path(sys.argv[2]).resolve()
out.mkdir(parents=True,exist_ok=True)

checks=[]; failures=[]; warnings=[]

def read(rel):
    p=repo/rel
    return p.read_text(encoding="utf-8") if p.is_file() else ""

def check(name,ok,detail=""):
    checks.append({"check":name,"status":"PASS" if ok else "FAIL","detail":detail})
    if not ok:
        failures.append(f"{name}: {detail}")

generic=read("src/content/knowledge/no/articles/hrv.ts")
vagus=read("src/content/knowledge/no/articles/hrv-og-vagusnerven.ts")
registry=read("src/content/knowledge/no/registry.ts")
glossary=read("src/content/glossary/no/terms.ts")
llms=read("public/llms.txt")
owners=read("docs/seo-vns-cluster-target-queries.md")
source_lock=read("docs/seo/search-dominance-1e1c-no-hrv-owner-split-source-claims-lock.md")
autonomic=read("src/content/knowledge/no/articles/det-autonome-nervesystemet.ts")
sympathetic=read("src/content/knowledge/no/articles/det-sympatiske-nervesystemet.ts")
parasympathetic=read("src/content/knowledge/no/articles/det-parasympatiske-nervesystemet.ts")
regulation=read("src/content/knowledge/no/articles/regulering-av-nervesystemet.ts")
vagusFoundation=read("src/content/knowledge/no/articles/vagusnerven.ts")
renderer=read("src/components/knowledge/NorwegianKnowledgeArticlePage.tsx")
sitemap=read("src/app/sitemap.ts")

for rel in [
    "src/content/knowledge/no/articles/hrv.ts",
    "docs/seo/search-dominance-1e1c-no-hrv-owner-split-source-claims-lock.md",
    "scripts/search-dominance-1e1c-audit.py",
]:
    check("exists:"+rel,(repo/rel).is_file(),rel)

for needle in [
    'slug: "hrv"',
    'path: "/no/kunnskap/hrv"',
    'wave: "SEARCH-1E"',
    'seoTitle: "HRV: hjertefrekvensvariabilitet, måling og tolkning | Neuvago"',
    'primaryKeyword: "HRV"',
    '"hjertefrekvensvariabilitet"',
    '"pulsvariasjon"',
    '"HRV måling"',
    '"HRV smartklokke"',
    '"HRV normalverdi"',
    "Hva er en god HRV – og er høy HRV alltid bedre?",
    "Kan smartklokke eller ring måle HRV pålitelig?",
    "HRV måler ikke hele nervesystemet",
    "Les om HRV og vagusnerven",
    'href: "/no/kunnskap/hrv-og-vagusnerven"',
]:
    check("generic HRV:"+needle[:62],needle in generic,needle)

check("generic HRV no table blocks",'type: "table"' not in generic)
check("generic HRV has editorial cards",generic.count('type: "editorial-cards"')>=3,f"count={generic.count('type: chr(34)editorial-cardschr(34)')}")
check("generic HRV source count",generic.count('      id: "')>=6,f"ids={generic.count('      id: chr(34)')}")
check("generic HRV no false English equivalent","englishEquivalent:" not in generic)

def section_ids(source):
    start=source.find("  sections: [")
    end=source.find("\n  sources: [",start)
    if start==-1 or end==-1:
        return []
    return re.findall(r'\bid:\s*"([^"]+)"',source[start:end])

section_id_re=re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
generic_section_ids=section_ids(generic)
vagus_section_ids=section_ids(vagus)

check(
    "generic HRV section IDs ASCII-slug safe",
    bool(generic_section_ids) and all(section_id_re.fullmatch(x) for x in generic_section_ids),
    str(generic_section_ids),
)
check(
    "HRV-vagus section IDs ASCII-slug safe",
    bool(vagus_section_ids) and all(section_id_re.fullmatch(x) for x in vagus_section_ids),
    str(vagus_section_ids),
)
check(
    "generic HRV follow-up anchor normalized",
    "nar-en-hrv-verdi-bor-folges-opp" in generic_section_ids,
    str(generic_section_ids),
)
check(
    "generic HRV Unicode section anchor removed",
    "når-en-hrv-verdi-bor-folges-opp" not in generic,
)


for needle in [
    'slug: "hrv-og-vagusnerven"',
    'seoTitle: "HRV og vagusnerven: vagal påvirkning og VNS | Neuvago"',
    'primaryKeyword: "HRV og vagusnerven"',
    "Hvorfor kan vagusnerven påvirke HRV?",
    "Er HRV det samme som vagal tone?",
    "Hva viser studier av taVNS og HRV?",
    "HRV er ikke en universell positiv kontroll for taVNS",
    "Neuvago måler ikke HRV eller vagusfunksjon",
    'href: "/no/kunnskap/hrv"',
]:
    check("HRV-vagus:"+needle[:62],needle in vagus,needle)

check("HRV-vagus no table blocks",'type: "table"' not in vagus)
check("HRV-vagus relationship keywords kept",all(k in vagus for k in ['"vagusnerven HRV"','"vagal HRV"','"taVNS HRV"']))
check("HRV-vagus generic normal keyword removed",'"HRV normalverdi"' not in vagus)
check("HRV-vagus generic wearable keyword removed",'"HRV smartklokke"' not in vagus)
check("HRV-vagus generic exact secondary HRV removed",'\n    "HRV",\n' not in vagus)

check("registry import hrv exactly once",registry.count('import { hrvArticle }')==1,str(registry.count('import { hrvArticle }')))
check("registry hrv item exactly once",registry.count('  hrvArticle,')==1,str(registry.count('  hrvArticle,')))
check("registry old HRV-vagus remains",registry.count('  hrvOgVagusnervenArticle,')==1)

for label,source in [
    ("autonomic",autonomic),
    ("sympathetic",sympathetic),
    ("parasympathetic",parasympathetic),
    ("regulation",regulation),
]:
    check(label+" generic related slug",'"hrv"' in source)
    check(label+" old related slug removed",'"hrv-og-vagusnerven"' not in source)

check("vagus foundation keeps relationship owner",'"hrv-og-vagusnerven"' in vagusFoundation)
check("vagus foundation visible relation link",'/no/kunnskap/hrv-og-vagusnerven' in vagusFoundation)

heart_start=glossary.find('"id": "heart-rate-variability"')
heart_end=glossary.find('\n  {\n    "id":',heart_start+10)
heart=glossary[heart_start:heart_end if heart_end!=-1 else len(glossary)]
check("glossary HRV block found",heart_start!=-1)
check("glossary generic pillar /hrv",'"href": "/no/kunnskap/hrv"' in heart)
check("glossary primary title generic",'"title": "HRV – hjertefrekvensvariabilitet"' in heart)
check("glossary HRV alias",'"HRV"' in heart)
check("glossary pulsvariasjon alias",'"pulsvariasjon"' in heart)
check("glossary modified 2026-09-11",'"modifiedAt": "2026-09-11"' in heart)

check("llms generic /hrv exactly once",llms.count("/no/kunnskap/hrv —")==1,f"count={llms.count('/no/kunnskap/hrv —')}")
check("llms relation owner exactly once",llms.count("/no/kunnskap/hrv-og-vagusnerven —")==1,f"count={llms.count('/no/kunnskap/hrv-og-vagusnerven —')}")
check("llms research owner exactly once",llms.count("/research/topics/heart-rate-variability —")==1,f"count={llms.count('/research/topics/heart-rate-variability —')}")

check("owner map 1E.1C","SEARCH DOMINANCE 1E.1C — Norwegian HRV owner split" in owners)
check("owner map generic family","HRV / hjertefrekvensvariabilitet / pulsvariasjon" in owners)
check("owner map vagus family","HRV og vagusnerven / vagusnerven HRV / vagal HRV" in owners)
check("owner map no EN HRV now","No EN `/learn/heart-rate-variability` page is created in 1E.1C" in owners)

for needle in [
    "HRV is not heart rate",
    "No universal normal value",
    "LF/HF is not a universal sympathovagal-balance score",
    "HRV is not synonymous with vagal tone",
    "General HRV or external VNS evidence is not Neuvago product evidence",
    "Both `/no/kunnskap/hrv` and `/no/kunnskap/hrv-og-vagusnerven` use editorial cards",
]:
    check("source lock:"+needle[:55],needle in source_lock,needle)

check("shared editorial cards remain",'case "editorial-cards":' in renderer)
check("public meta box remains removed","Om artikkelen" not in renderer)
check("public personal lookup remains removed","getEditorialEntity" not in renderer)

check("no direct static /no/kunnskap/hrv sitemap entry",'{ path: "/no/kunnskap/hrv"' not in sitemap)
check("no EN heart-rate-variability Learn page",not (repo/"src/app/(en)/learn/heart-rate-variability/page.tsx").exists())

for label,source in [("generic",generic),("vagus",vagus)]:
    forbidden=[
        "HRV diagnoses",
        "diagnostiserer dysautonomi",
        "Neuvago increases HRV",
        "Neuvago øker HRV",
        "LF is sympathetic",
        "LF er sympatisk aktivitet",
    ]
    hits=[x for x in forbidden if x.lower() in source.lower()]
    check(label+" forbidden claim scan",not hits,str(hits))

check("generic ANS boundary","HRV måler ikke hele nervesystemet" in generic)
check("vagus product evidence boundary","Generell forskning på HRV, vagal regulering og taVNS gir fysiologisk og metodisk kontekst. Den er ikke automatisk direkte produktevidens for Neuvago." in vagus)

combined="\n".join([generic,vagus,registry,llms])
check("no German child route exposure","/de/" not in combined)

warnings.append("No new HRV image or chart asset is required for 1E.1C. A reusable HRV measurement/interpretation visual can be added in the later media/authority phase.")

with (out/"search-dominance-1e1c-checks.csv").open("w",encoding="utf-8",newline="") as f:
    w=csv.DictWriter(f,fieldnames=["check","status","detail"])
    w.writeheader()
    w.writerows(checks)

result={
    "schema":"neuvago-search-dominance-1e1c-audit-v1",
    "status":"PASS" if not failures else "FAIL",
    "checks_total":len(checks),
    "checks_passed":sum(1 for x in checks if x["status"]=="PASS"),
    "failures":failures,
    "warnings":warnings,
    "routes":[
        "/no/kunnskap/hrv",
        "/no/kunnskap/hrv-og-vagusnerven",
        "/research/topics/heart-rate-variability",
    ],
}
(out/"SEARCH-DOMINANCE-1E1C-AUDIT.json").write_text(json.dumps(result,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
print(json.dumps(result,indent=2,ensure_ascii=False))
sys.exit(1 if failures else 0)
