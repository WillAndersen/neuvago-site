#!/usr/bin/env python3
import csv, hashlib, json, re, sys
from pathlib import Path

repo=Path(sys.argv[1]).resolve()
out=Path(sys.argv[2]).resolve()
out.mkdir(parents=True,exist_ok=True)

checks=[]
def add(name, ok, detail=""):
    checks.append({"check":name,"status":"PASS" if ok else "FAIL","detail":detail})
def text(rel): return (repo/rel).read_text(encoding="utf-8")
def sha_bytes(data: bytes): return hashlib.sha256(data).hexdigest()
def sha(rel): return sha_bytes((repo/rel).read_bytes())
def contains(rel, needle, name=None):
    t=text(rel); add(name or f"{rel} contains {needle}", needle in t, "" if needle in t else needle)
def absent(rel, needle, name=None):
    t=text(rel); add(name or f"{rel} excludes {needle}", needle not in t, needle if needle in t else "")
def count_eq(rel, needle, n, name=None):
    c=text(rel).count(needle); add(name or f"{rel} count {needle}", c==n, f"expected={n} got={c}")
def segment_hash(rel, start, end):
    t=text(rel); a=t.find(start); b=t.find(end,a+len(start)) if a>=0 else -1
    if a<0 or b<0:
        return None
    return sha_bytes(t[a:b].encode("utf-8"))
def external_urls(rel):
    return sorted(set(re.findall(r'https://[^"\s]+', text(rel))))

vagus="src/content/knowledge/no/articles/vagusnerven.ts"
autonomic="src/content/knowledge/no/articles/det-autonome-nervesystemet.ts"
para="src/content/knowledge/no/articles/det-parasympatiske-nervesystemet.ts"
calm="src/content/knowledge/no/articles/hvordan-roe-ned-nervesystemet.ts"
claims="docs/seo/search-dominance-1e2e-no-foundation-regulation-owner-lift-source-claims-lock.md"
media="docs/seo/search-dominance-1e2e-no-foundation-regulation-media-brief.md"

expected_hashes={
 vagus:"05c7124531383afd64685df571a02c8d5a15b23904c10bda36b4d6b1b4984c0d",
 autonomic:"c12f41fabff6f0eb349c11ae22ae8ca51e00f206dd7f83c3fe7eaeb7dd3ded72",
 para:"d7c29f87f99d86ce6b9e238230ebb1ebc169a1e8eba62a3295ef80b578dd6d39",
 calm:"8985bb93031ffdfa55b3cfae1561162cac5fc749406f8ab1c3ee18f34048a8ee",
}
for rel,h in expected_hashes.items():
    p=repo/rel
    add(f"target exists: {rel}",p.is_file())
    if p.is_file(): add(f"target post hash: {rel}",sha(rel)==h,f"expected={h} got={sha(rel)}")

# Preserve scientific body and visible sources byte-for-byte.
expected_segments={
 vagus:{"sections":"5b86e2318baf5d06e942e0079fee0e0cc8e8475d419a6286158b397e09656099","sources":"97df4189cf669516e598083af9aadc4cdd0ae34dcf592ef0f87ba15b2c3361f7"},
 autonomic:{"sections":"c2a408b6005a735511816e4af156147b9be2c8198f9bfe3c6f496ede6a5f24b6","sources":"087a410f803e236796978487adce75843cd71dd39325588cda8aee1b1ad6490e"},
 para:{"sections":"5710edd37e1f618e28c5c2788382e2973f42d901b8e7d953597c3b01f8e3074a","sources":"b99e96bd52d0e00d25fba3563bdf9b96a76b1263018eb5c66558ee8377d12d93"},
 calm:{"sections":"6caab120d7358b0967366b9b42891a36a6334c323f049ec3ef921af04c1ef1fd","sources":"0900628b84c5aab805f0352774e26c5fd5bf5d9facbbd85282a58490a4f82ead"},
}
for rel,vals in expected_segments.items():
    s=segment_hash(rel,"  sections: [","  sources: [")
    r=segment_hash(rel,"  sources: [","  relatedSlugs: [")
    add(f"scientific sections byte-preserved: {rel}",s==vals["sections"],f"expected={vals['sections']} got={s}")
    add(f"visible source list byte-preserved: {rel}",r==vals["sources"],f"expected={vals['sources']} got={r}")

# External reference set remains unchanged from baseline.
expected_external={
 vagus:[
  "https://pubmed.ncbi.nlm.nih.gov/11189015/","https://pubmed.ncbi.nlm.nih.gov/12490958/","https://pubmed.ncbi.nlm.nih.gov/17081672/","https://pubmed.ncbi.nlm.nih.gov/23439117/","https://pubmed.ncbi.nlm.nih.gov/24411268/","https://pubmed.ncbi.nlm.nih.gov/27347892/","https://pubmed.ncbi.nlm.nih.gov/28265249/","https://pubmed.ncbi.nlm.nih.gov/30725856/","https://pubmed.ncbi.nlm.nih.gov/30867063/","https://pubmed.ncbi.nlm.nih.gov/31116992/","https://pubmed.ncbi.nlm.nih.gov/33441733/","https://pubmed.ncbi.nlm.nih.gov/33854421/","https://pubmed.ncbi.nlm.nih.gov/34634680/","https://pubmed.ncbi.nlm.nih.gov/35051375/","https://pubmed.ncbi.nlm.nih.gov/40328963/","https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/denovo.cfm?ID=DEN150048",
 ],
 autonomic:["https://pubmed.ncbi.nlm.nih.gov/17786266/","https://pubmed.ncbi.nlm.nih.gov/21684297/","https://pubmed.ncbi.nlm.nih.gov/22392290/","https://pubmed.ncbi.nlm.nih.gov/23785162/","https://pubmed.ncbi.nlm.nih.gov/27347892/","https://pubmed.ncbi.nlm.nih.gov/28304283/","https://pubmed.ncbi.nlm.nih.gov/8412366/"],
 para:["https://pubmed.ncbi.nlm.nih.gov/11189015/","https://pubmed.ncbi.nlm.nih.gov/1660159/","https://pubmed.ncbi.nlm.nih.gov/17786266/","https://pubmed.ncbi.nlm.nih.gov/25696224/","https://pubmed.ncbi.nlm.nih.gov/27347892/","https://pubmed.ncbi.nlm.nih.gov/31996619/","https://pubmed.ncbi.nlm.nih.gov/8598068/"],
 calm:["https://pubmed.ncbi.nlm.nih.gov/24395196/","https://pubmed.ncbi.nlm.nih.gov/26173226/","https://pubmed.ncbi.nlm.nih.gov/35623448/","https://pubmed.ncbi.nlm.nih.gov/36630953/","https://pubmed.ncbi.nlm.nih.gov/38468106/","https://www.who.int/publications/i/item/9789240003927"],
}
for rel,expected in expected_external.items():
    got=external_urls(rel)
    add(f"external references unchanged: {rel}",got==sorted(expected),f"expected={sorted(expected)} got={got}")

# Route / locale ownership remains fixed.
for rel,path,en in [
 (vagus,"/no/kunnskap/vagusnerven","/learn/vagus-nerve"),
 (autonomic,"/no/kunnskap/det-autonome-nervesystemet","/learn/autonomic-nervous-system"),
 (para,"/no/kunnskap/det-parasympatiske-nervesystemet","/learn/parasympathetic-nervous-system"),
 (calm,"/no/kunnskap/hvordan-roe-ned-nervesystemet","/learn/how-to-calm-your-nervous-system"),
]:
    contains(rel,f'  path: "{path}",',f"owner path retained: {path}")
    contains(rel,f'  englishEquivalent: "{en}",',f"English equivalent retained: {path}")
    contains(rel,'  searchIntent: "informational",',f"informational intent retained: {path}")

# Vagus foundation owner alignment.
for s in [
 'title: "Vagusnerven – hva den er, hvor den går og hva den gjør"',
 'seoTitle: "Vagusnerven: hva den er, hvor den går og hva den gjør | Neuvago"',
 'primaryKeyword: "vagusnerven"',
 '"hva er vagusnerven"',
 '"vagusnerven funksjon"',
 '"vagusnerven anatomi"',
 'Vagusnerven er hjernenerve X, den tiende hjernenerven',
 'Vagusnerven er en viktig del av parasympatisk regulering, men er ikke hele det parasympatiske eller autonome nervesystemet.',
 'modifiedAt: "2026-09-11"',
 'href: "/no/kunnskap/det-autonome-nervesystemet"',
 'label: "Les om det autonome nervesystemet"',
]: contains(vagus,s,f"vagus owner lift: {s[:76]}")
count_eq(vagus,'href: "/no/kunnskap/det-autonome-nervesystemet"',1,"vagus explicit autonomic owner link once")

# Broad ANS owner alignment + correction of Norwegian owner graph.
for s in [
 'seoTitle: "Det autonome nervesystemet: hva det er og hva det gjør | Neuvago"',
 '"hva er det autonome nervesystemet"',
 '"autonome nervesystemet funksjon"',
 'Det autonome nervesystemet er den delen av nervesystemet som kontinuerlig tilpasser indre funksjoner',
 'Sympatisk, parasympatisk og enterisk aktivitet samspiller',
 'Vagusnerven er en viktig parasympatisk forbindelse, men den er ikke hele det autonome eller parasympatiske nervesystemet.',
 'href: "/no/kunnskap/regulering-av-nervesystemet"',
 'href: "/no/kunnskap/det-parasympatiske-nervesystemet"',
]: contains(autonomic,s,f"ANS owner lift: {s[:76]}")
absent(autonomic,'title: "Regulering av nervesystemet",\n      description:\n        "Les den engelske introduksjonen',"ANS no mislabeled English regulation link")
absent(autonomic,'title: "Det parasympatiske nervesystemet",\n      description:\n        "Fordyp deg i den parasympatiske delen av ANS og hvorfor den ikke bør reduseres til uttrykket «rest and digest».",\n      href: "/learn/parasympathetic-nervous-system"',"ANS parasympathetic card points to NO owner")

# Parasympathetic owner and glossary boundary.
for s in [
 '"Det parasympatiske nervesystemet – hva det gjør og hvilken rolle vagusnerven har"',
 '"Det parasympatiske nervesystemet: hva det gjør | Neuvago"',
 'hubLabel: "Parasympatisk grunnartikkel"',
 '"hva er det parasympatiske nervesystemet"',
 '"parasympatiske nervesystemet funksjon"',
 'Det parasympatiske nervesystemet er en hoveddel av det autonome nervesystemet',
 'vagusnerven er en viktig forbindelse, men ikke hele systemet.',
 'href: "/no/kunnskap/det-autonome-nervesystemet"',
 'href: "/no/kunnskap/hvordan-roe-ned-nervesystemet"',
]: contains(para,s,f"parasympathetic owner lift: {s[:76]}")

# Practical calm owner alignment.
for s in [
 '"Hvordan roe ned nervesystemet – trygge grep for nedregulering"',
 '"Hvordan roe ned nervesystemet: trygge grep | Neuvago"',
 'primaryKeyword: "hvordan roe ned nervesystemet"',
 '"øvelser for å roe ned nervesystemet"',
 '"hvordan roe ned kroppen"',
 'Start med å vurdere om du faktisk trenger nedregulering',
 'Søk faglig hjelp når symptomer er nye, sterke, vedvarende eller medisinsk bekymringsfulle',
 'modifiedAt: "2026-09-11"',
 'href: "/no/kunnskap/regulering-av-nervesystemet"',
]: contains(calm,s,f"calm owner lift: {s[:76]}")

# Support / glossary files must remain exact baseline bytes.
locked_untouched={
 "src/content/glossary/no/terms.ts":"918bccfdf4d0ae1d8da3c0cfb9ac35dff75a7aa3741cf4a2fb4b64c57290b0d8",
 "src/content/knowledge/no/registry.ts":"660ae78b102f767290e4f3d2561cc126c64e080a04ca16514879198d80b404fd",
 "src/content/knowledge/no/types.ts":"9c7ab6b00d397f4eb0507ea56f2122c5db6797f0b6883249dd1ece4141b938d9",
 "src/components/knowledge/NorwegianKnowledgeArticlePage.tsx":"94be4b798944f27821786578dc7b5ee28ecd603354bc3f9fb5634b36ded77eaf",
 "src/app/(no)/no/kunnskap/page.tsx":"9abecb7fe889eb98a7371602452dc1b9ad3aebd00dbf1b69e3b20b48fac3b009",
 "src/app/(no)/no/ordliste/page.tsx":"f611b0cd9ca59b58280385f33b064449831ba55727e12f8c2a8a113b17d58a66",
 "src/app/sitemap.ts":"0fb8413b5b50ba79f4b36395fd6509e083405acde960259e9dd0bcf07c37ff55",
 "public/llms.txt":"8b3f10c59ea55decbf840bee1400a7e4551e70fb9e0f69b039c2fd1ccd9624c5",
 "docs/seo/wave2d2e-foundation-pages-source-and-claims-lock.md":"75e888732de4c238bbc35be256c5bac7f2aabe90dddb3ea117e39115789c3dda",
}
for rel,h in locked_untouched.items():
    p=repo/rel; add(f"support unchanged exists: {rel}",p.is_file())
    if p.is_file(): add(f"support unchanged hash: {rel}",sha(rel)==h,f"expected={h} got={sha(rel)}")

# Glossary already points upward to primary Knowledge owners; keep this behavior rather than canonical tricks.
gloss="src/content/glossary/no/terms.ts"
for slug,href in [
 ("vagusnerven","/no/kunnskap/vagusnerven"),
 ("det-autonome-nervesystemet","/no/kunnskap/det-autonome-nervesystemet"),
 ("det-parasympatiske-nervesystemet","/no/kunnskap/det-parasympatiske-nervesystemet"),
]:
    t=text(gloss)
    pos=t.find(f'"slug": "{slug}"')
    end=t.find('\n  },',pos)
    block=t[pos:end] if pos>=0 and end>=0 else ""
    add(f"glossary {slug} block found",bool(block))
    add(f"glossary {slug} primaryPillar points up",f'"href": "{href}"' in block,href)

# Governance docs and media planning.
for s in [
 'VN-001', 'ANS-001', 'ANS-002', 'ANS-008',
 'sections` block and complete `sources` block remain byte-identical',
 'glossary source byte-identical',
 'No `QAPage` schema is introduced',
 'Final image/video assets are not added in 1E.2E',
]: contains(claims,s,f"1E.2E claims lock: {s[:76]}")
for s in [
 'VN-NO-VID-01','VN-NO-IMG-01','ANS-NO-VID-01','ANS-NO-IMG-01',
 'PARA-NO-VID-01','PARA-NO-IMG-01','CALM-NO-VID-01','CALM-NO-IMG-01',
 'Do not show','Do not depict','Do not imply','Do not promise',
]: contains(media,s,f"1E.2E media brief: {s}")

# Public editorial-residue and unsafe-claim guard.
for rel in [vagus,autonomic,para,calm]:
    for phrase in [
      "search intent","category pillar","content owner","this page owns","commercial bridge",
      "strategically important","SERP opportunity","monthly volume","KD 10","KD 21",
    ]:
        absent(rel,phrase,f"{rel} excludes internal editorial residue: {phrase}")
for rel in [vagus,autonomic,para,calm]:
    for phrase in [
      "guaranteed reset","guaranteed calm","diagnose your vagus nerve","diagnose the autonomic nervous system",
      "press the carotid sinus","hold pressure on the neck","HRV proves",
    ]:
        absent(rel,phrase,f"{rel} excludes unsafe/overclaim phrase: {phrase}")

# No final 1E.2E-named media assets.
media_assets=list((repo/'public').rglob('*1e2e*')) if (repo/'public').exists() else []
add("no final 1E.2E-named public media asset",len(media_assets)==0,','.join(str(p.relative_to(repo)) for p in media_assets))

fail=[c for c in checks if c['status']=='FAIL']
with open(out/'search-dominance-1e2e-checks.csv','w',newline='',encoding='utf-8') as f:
    w=csv.DictWriter(f,fieldnames=['check','status','detail']); w.writeheader(); w.writerows(checks)
res={
 "schema":"neuvago-search-dominance-1e2e-audit-v1",
 "status":"PASS" if not fail else "FAIL",
 "checks_total":len(checks),
 "checks_passed":len(checks)-len(fail),
 "failures":fail,
 "warnings":["1E.2E locks media briefs but intentionally does not add final image/video assets."],
 "routes":[
  "/no/kunnskap/vagusnerven",
  "/no/kunnskap/det-autonome-nervesystemet",
  "/no/kunnskap/det-parasympatiske-nervesystemet",
  "/no/kunnskap/hvordan-roe-ned-nervesystemet",
 ],
 "scientific_sections_preserved":True if not any(c['status']=='FAIL' and c['check'].startswith('scientific sections') for c in checks) else False,
 "visible_source_lists_preserved":True if not any(c['status']=='FAIL' and c['check'].startswith('visible source list') for c in checks) else False,
}
(out/'search-dominance-1e2e-audit.json').write_text(json.dumps(res,indent=2,ensure_ascii=False)+'\n')
print(json.dumps(res,indent=2,ensure_ascii=False))
sys.exit(0 if not fail else 1)
