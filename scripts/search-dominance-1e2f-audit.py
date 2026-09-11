#!/usr/bin/env python3
import csv, hashlib, json, re, sys
from pathlib import Path

repo=Path(sys.argv[1]).resolve()
out=Path(sys.argv[2]).resolve(); out.mkdir(parents=True,exist_ok=True)
checks=[]
def add(name,ok,detail=""): checks.append({'check':name,'status':'PASS' if ok else 'FAIL','detail':detail})
def text(rel): return (repo/rel).read_text(encoding='utf-8')
def sha(rel): return hashlib.sha256((repo/rel).read_bytes()).hexdigest()
def contains(rel,needle,name=None):
    t=text(rel); add(name or f'{rel} contains {needle}',needle in t,'' if needle in t else needle)
def absent(rel,needle,name=None):
    t=text(rel); add(name or f'{rel} excludes {needle}',needle not in t,needle if needle in t else '')
def count_eq(rel,needle,n,name=None):
    c=text(rel).count(needle); add(name or f'{rel} count {needle}',c==n,f'expected={n} got={c}')
def seg_hash(rel,start,end):
    t=text(rel); a=t.find(start); b=t.find(end,a+len(start)) if a>=0 else -1
    if a<0 or b<0: return None
    return hashlib.sha256(t[a:b].encode()).hexdigest()

vns='src/content/knowledge/no/articles/vagusnervestimulering.ts'
tvns='src/content/knowledge/no/articles/transkutan-vagusnervestimulering.ts'
tavns='src/content/knowledge/no/articles/aurikulaer-vagusnervestimulering.ts'
methods='src/content/knowledge/no/articles/hvordan-stimulere-vagusnerven.ts'
claims='docs/seo/search-dominance-1e2f-no-vns-stimulation-owner-lift-source-claims-lock.md'
media='docs/seo/search-dominance-1e2f-no-vns-stimulation-media-brief.md'
self_rel='scripts/search-dominance-1e2f-audit.py'

expected_hashes={
 vns:'eb9735ad285878eb7555c72f07b7f74f7f789cb3c9f8897f78b7f9517f22f4dc',
 tvns:'c4b253bc2b65545c75dafb94d35c9772ec5ca778d14ddb4c0a8b002afd1bb8c3',
 tavns:'03eaf083f59141b95954ffff1cf77e6bb1c35b9bc7de1f154236263644c5be67',
 methods:'5e13f17b47240105d62896f5867bf740c2b2e9b71bc93fca9720837753a113df',
}
for rel,h in expected_hashes.items():
    p=repo/rel; add(f'target exists: {rel}',p.is_file())
    if p.is_file(): add(f'target exact post hash: {rel}',sha(rel)==h,f'expected={h} got={sha(rel)}')

# Scientific article bodies and visible source lists remain byte-identical to captured baseline.
segments={
 vns:('59ec5298ae1ad3f34bf104a3d581dbfe73718c13ccdaae397c880e0cece73eda','e746e318e07362a08f84c9e3e38c4d451524b6d601f4d48f1ee35dbdb8b21582'),
 tvns:('ac0f83021851d837b27439b77e3386cf896fbd26f5ec46294a4238129df58ab5','5c7f43ac6ff76c37bcaf0ba063d755eec0247377799793bd6df12663f7b9cfb9'),
 tavns:('c8a74386b9ee4be0e5eb77e31f06f58cf7e72a56462c399f1bb9b654ff12953c','71f408dea5f962c5bc6ee7ad6b20db4d5140b947e33d1970561f2f7e7181f473'),
 methods:('bcdcd6998ca30a85943a9a1e92b70b1cca47bdc7931d81635e65e66b7e61e60b','6c085958bae19af59946434c028f6e9ab37e048074d08554f0e2f5a5bebae39d'),
}
for rel,(sec,src) in segments.items():
    got=seg_hash(rel,'  sections: [','\n\n  sources: ['); add(f'scientific sections byte-preserved: {rel}',got==sec,f'expected={sec} got={got}')
    got2=seg_hash(rel,'  sources: [','\n\n  relatedSlugs: ['); add(f'visible source list byte-preserved: {rel}',got2==src,f'expected={src} got={got2}')

# Route / locale / schema ownership stays stable.
for rel,path,en in [
 (vns,'/no/kunnskap/vagusnervestimulering','/learn/vagus-nerve-stimulation'),
 (tvns,'/no/kunnskap/transkutan-vagusnervestimulering','/learn/transcutaneous-vagus-nerve-stimulation'),
 (tavns,'/no/kunnskap/aurikulaer-vagusnervestimulering','/learn/auricular-vagus-nerve-stimulation'),
 (methods,'/no/kunnskap/hvordan-stimulere-vagusnerven','/learn/how-to-stimulate-the-vagus-nerve'),
]:
    contains(rel,f'  path: "{path}",',f'owner path retained: {path}')
    contains(rel,f'  englishEquivalent: "{en}",',f'English equivalent retained: {path}')
    contains(rel,'  searchIntent: "informational",',f'informational intent retained: {path}')
    absent(rel,'QAPage',f'no QAPage in owner source: {path}')

# VNS core owner alignment.
for s in [
 'title: "Vagusnervestimulering (VNS) – hva det er og hvilke typer som finnes"',
 'seoTitle: "VNS: vagusnervestimulering, typer og forskjeller | Neuvago"',
 'primaryKeyword: "vagusnervestimulering"',
 '"VNS"', '"vagus nerve stimulation"', '"tVNS"', '"taVNS"',
 'VNS står for vagusnervestimulering',
 'VNS betyr vagusnervestimulering',
 'modifiedAt: "2026-09-12"',
 '"transkutan-vagusnervestimulering"',
 '"aurikulaer-vagusnervestimulering"',
]: contains(vns,s,f'VNS owner lift: {s[:78]}')
count_eq(vns,'"transkutan-vagusnervestimulering"',1,'VNS related tVNS slug once')
count_eq(vns,'"aurikulaer-vagusnervestimulering"',1,'VNS related taVNS slug once')

# tVNS local low-KD owner alignment.
for s in [
 'title:\n    "Transkutan vagusnervestimulering (tVNS) – metode, plassering og protokoller"',
 'seoTitle: "tVNS: transkutan vagusnervestimulering | Neuvago"',
 'eyebrow: "Kunnskap om tVNS"',
 'primaryKeyword: "tVNS"',
 'tVNS står for transkutan vagusnervestimulering',
 'tVNS betyr transkutan vagusnervestimulering',
 'modifiedAt: "2026-09-12"',
 '"hvordan-stimulere-vagusnerven"',
]: contains(tvns,s,f'tVNS owner lift: {s[:78]}')
count_eq(tvns,'"hvordan-stimulere-vagusnerven"',1,'tVNS methods relationship once')

# taVNS protect-win: keep H1/SEO title stable and sharpen answer copy without expanding claims.
for s in [
 'title:\n    "Aurikulær vagusnervestimulering (taVNS) – øreanatomi, plassering og metode"',
 'seoTitle: "Aurikulær vagusnervestimulering (taVNS) | Neuvago"',
 'primaryKeyword: "aurikulær vagusnervestimulering"',
 'taVNS står for transkutan aurikulær vagusnervestimulering',
 'taVNS betyr transkutan aurikulær vagusnervestimulering',
 'modifiedAt: "2026-09-12"',
 '"hvordan-stimulere-vagusnerven"',
]: contains(tavns,s,f'taVNS protect-win lift: {s[:78]}')
count_eq(tavns,'"hvordan-stimulere-vagusnerven"',1,'taVNS methods relationship once')

# Broad methods owner alignment.
for s in [
 'title: "Hvordan stimulere vagusnerven? Metoder, dokumentasjon og viktige grenser"',
 'seoTitle: "Hvordan stimulere vagusnerven? Metoder og evidens | Neuvago"',
 'primaryKeyword: "hvordan stimulere vagusnerven"',
 'Å stimulere vagusnerven kan bety forskjellige ting.',
 'Hvis du mener elektrisk vagusnervestimulering',
 'Implantert, cervikal, transkutan og aurikulær stimulering',
 'modifiedAt: "2026-09-12"',
 '"transkutan-vagusnervestimulering"',
]: contains(methods,s,f'methods owner lift: {s[:78]}')
count_eq(methods,'"transkutan-vagusnervestimulering"',1,'methods tVNS relationship once')

# Untouched support/evidence graph stays exact baseline bytes.
locked_untouched={
 'docs/seo-measurement-plan.md':'8532f9a8013744e6d6b108931b229bc1d29631ea5381de5a04eab49817880ea5',
 'docs/seo-vns-cluster-target-queries.md':'0f36b9514befdba570ece12baad43aacaaa0c550fef7706395ad93710becc28e',
 'docs/seo/search-dominance-1e2d-reset-massage-owner-lift-source-claims-lock.md':'7ed19918048703fd6afc359da8c00f62e52d49bd7c40e4fcf662f28520faab33',
 'docs/seo/search-dominance-1e2e-no-foundation-regulation-media-brief.md':'784f8474cd037444120c5f3db67e927827424025f2530bc0ea5206dde057128f',
 'docs/seo/search-dominance-1e2e-no-foundation-regulation-owner-lift-source-claims-lock.md':'43b2e0b3da4e644ac48bddf29d966029779f418329506511dca4caffaf66075d',
 'docs/seo/wave2d2a-stimulation-pillars-source-and-claims-lock.md':'c53d59d5e24809f6db00bf234a831ac1ec82be3ad51f87447b27e8c9786d6c69',
 'public/llms.txt':'8b3f10c59ea55decbf840bee1400a7e4551e70fb9e0f69b039c2fd1ccd9624c5',
 'scripts/search-dominance-1d-trust-audit.py':'40a0becc581147966c84510c76b23e37b865d1c6fd5db39109d28b79c8f5b896',
 'scripts/seo-vns-cluster-audit.mjs':'d9bc3e4acae0c21a4c71943d6375a84346b04e52a2509897dae0932ee0e27d4d',
 'src/app/(no)/no/kunnskap/page.tsx':'9abecb7fe889eb98a7371602452dc1b9ad3aebd00dbf1b69e3b20b48fac3b009',
 'src/app/(no)/no/ordliste/page.tsx':'f611b0cd9ca59b58280385f33b064449831ba55727e12f8c2a8a113b17d58a66',
 'src/app/sitemap.ts':'0fb8413b5b50ba79f4b36395fd6509e083405acde960259e9dd0bcf07c37ff55',
 'src/components/knowledge/NorwegianKnowledgeArticlePage.tsx':'a7b8a7cfc6a105302741c36c6ba8b4ae21109acd5b47c4fca38317a7a71f3ca0',
 'src/content/decision-guides/ear-vs-neck-vns.ts':'6970394aad46606ce44f97827b63f18aef43fcd3190a6190041b8af1b546d3a9',
 'src/content/glossary/no/terms.ts':'918bccfdf4d0ae1d8da3c0cfb9ac35dff75a7aa3741cf4a2fb4b64c57290b0d8',
 'src/content/knowledge/no/articles/bivirkninger-ved-ikke-invasiv-vagusnervestimulering.ts':'f775ca4ab59fbbea0bce5f7ad2a40a865d9c1410232a320ea7c7f88845995325',
 'src/content/knowledge/no/articles/er-vagusnervestimulering-trygt.ts':'2dd3e05224fafbc0b23dca3518487dd53ef85f93b42c2b88c2fe0773a8779899',
 'src/content/knowledge/no/articles/hvem-bor-vaere-forsiktig-med-vagusnervestimulering.ts':'f9a6851ace1e6d0e5c6a7100d1735cc9906e20d3da971ddfdf64f0fa7e7fb259',
 'src/content/knowledge/no/articles/ikke-invasiv-vagusnervestimulering.ts':'1a5fdf359ff4a579efd16ed2464f41bf39a901e4e915c88766d67913b9442284',
 'src/content/knowledge/no/articles/implantert-og-ikke-invasiv-vns.ts':'808a9e760dd25431b24026ef073f6701ec53b464cc154ef54c30803a6baa601c',
 'src/content/knowledge/no/articles/orets-anatomi-og-vagusnerven.ts':'460150dfeb492461dd4df6430e7dcf8b7a26b06569862f4a01af3a8e6f2bca68',
 'src/content/knowledge/no/articles/pusteovelser-og-vagusnerven.ts':'59bb3524bfd42408a57516707cd65e9ca0ebfc0af50188e7057b8f84c12fa2c2',
 'src/content/knowledge/no/articles/resette-vagusnerven.ts':'7c9a702f13859837424e1da4e10d0ea095a1a590c34a0ff3de79415ccafea70a',
 'src/content/knowledge/no/articles/tens-og-vagusnervestimulering.ts':'4e1277bcb180526fa185d13f513905c415640fb01ba8564eb90e11ac4c824d47',
 'src/content/knowledge/no/articles/vagusnerven-og-massasje.ts':'67c0497f8128b50a8bf5d6ab464437337525eb4b91cead3dffc297f3ec79a3db',
 'src/content/knowledge/no/articles/vagusnerven.ts':'05c7124531383afd64685df571a02c8d5a15b23904c10bda36b4d6b1b4984c0d',
 'src/content/knowledge/no/registry.ts':'660ae78b102f767290e4f3d2561cc126c64e080a04ca16514879198d80b404fd',
 'src/content/knowledge/no/types.ts':'9c7ab6b00d397f4eb0507ea56f2122c5db6797f0b6883249dd1ece4141b938d9',
 'src/content/research/no/topics/aurikulaer-vagusnervestimulering.ts':'32f7fa8bb4e62bcce3934a5f14d0b3e4b4f55b0bbf7452cd2cfe3d125c6c2ddd',
 'src/content/research/no/topics/sikkerhet-og-tolerabilitet.ts':'b53e83cc2e1827cb246e4bcdc25e4f93f12c7db65cf43101a5dcc5378ae46c58',
 'src/content/research/no/topics/transkutan-vagusnervestimulering.ts':'b26f98274c2199718f3a3964d9fad3333889c7856703cc4470fd417c212313b1',
 'src/content/research/no/topics/vagusnervestimulering.ts':'be1c244ec551667a11515dae7bc3a33d3fc369820aa58e84ede33832ed7879bd',
}
for rel,h in locked_untouched.items():
    p=repo/rel; add(f'untouched support exists: {rel}',p.is_file())
    if p.is_file(): add(f'untouched support hash: {rel}',sha(rel)==h,f'expected={h} got={sha(rel)}')

# Glossary remains a definition/support layer pointing upward to the owners.
gloss='src/content/glossary/no/terms.ts'
for slug,href in [
 ('vagusnervestimulering','/no/kunnskap/vagusnervestimulering'),
 ('transkutan-vagusnervestimulering','/no/kunnskap/transkutan-vagusnervestimulering'),
 ('aurikulaer-vagusnervestimulering','/no/kunnskap/aurikulaer-vagusnervestimulering'),
]:
    t=text(gloss); pos=t.find(f'"slug": "{slug}"'); end=t.find('\n  },',pos)
    block=t[pos:end] if pos>=0 and end>=0 else ''
    add(f'glossary block found: {slug}',bool(block))
    add(f'glossary points to primary Knowledge owner: {slug}',f'"href": "{href}"' in block,href)

# Governance docs.
for s in [
 'VNS-001','VNS-004','VNS-005','METH-001',
 'complete `sections` block and complete visible `sources` block remain byte-identical',
 'taVNS page H1 and SEO title are intentionally preserved',
 'No `QAPage` schema is introduced',
 'Final image/video assets are not added in 1E.2F',
]: contains(claims,s,f'1E.2F claims lock: {s[:76]}')
for s in [
 'VNS-NO-VID-01','VNS-NO-IMG-01','TVNS-NO-VID-01','TVNS-NO-IMG-01',
 'TAVNS-NO-VID-01','TAVNS-NO-IMG-01','METHODS-NO-VID-01','METHODS-NO-IMG-01',
 'Do not imply','Do not show','Do not present','Do not promise',
]: contains(media,s,f'1E.2F media brief: {s}')

# Public residue and unsafe-claim guard across changed pages.
for rel in [vns,tvns,tavns,methods]:
    for phrase in ['search intent','content owner','this page owns','SERP opportunity','monthly volume','KD 5','protect early win','commercial bridge']:
        absent(rel,phrase,f'{rel} excludes internal editorial residue: {phrase}')
    for phrase in ['guaranteed reset','guaranteed treatment','cures','diagnose your vagus nerve','press the carotid sinus','hold pressure on the neck','place TENS on your neck','HRV proves']:
        absent(rel,phrase,f'{rel} excludes unsafe/overclaim phrase: {phrase}')

# No final 1E.2F-named media asset.
media_assets=list((repo/'public').rglob('*1e2f*')) if (repo/'public').exists() else []
add('no final 1E.2F-named public media asset',len(media_assets)==0,','.join(str(p.relative_to(repo)) for p in media_assets))

fail=[c for c in checks if c['status']=='FAIL']
with open(out/'search-dominance-1e2f-checks.csv','w',newline='',encoding='utf-8') as f:
    w=csv.DictWriter(f,fieldnames=['check','status','detail']); w.writeheader(); w.writerows(checks)
res={
 'schema':'neuvago-search-dominance-1e2f-audit-v1',
 'status':'PASS' if not fail else 'FAIL',
 'checks_total':len(checks),
 'checks_passed':len(checks)-len(fail),
 'failures':fail,
 'warnings':['1E.2F locks media briefs but intentionally does not add final image/video assets.'],
 'routes':['/no/kunnskap/vagusnervestimulering','/no/kunnskap/transkutan-vagusnervestimulering','/no/kunnskap/aurikulaer-vagusnervestimulering','/no/kunnskap/hvordan-stimulere-vagusnerven'],
 'scientific_sections_preserved':not any(c['status']=='FAIL' and c['check'].startswith('scientific sections') for c in checks),
 'visible_source_lists_preserved':not any(c['status']=='FAIL' and c['check'].startswith('visible source list') for c in checks),
 'tavns_h1_seo_protected':not any(c['status']=='FAIL' and c['check'].startswith('taVNS protect-win') for c in checks),
}
(out/'search-dominance-1e2f-audit.json').write_text(json.dumps(res,indent=2,ensure_ascii=False)+'\n')
print(json.dumps(res,indent=2,ensure_ascii=False))
sys.exit(0 if not fail else 1)
