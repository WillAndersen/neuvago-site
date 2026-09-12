#!/usr/bin/env python3
import csv, hashlib, json, sys
from pathlib import Path

repo=Path(sys.argv[1]).resolve()
out=Path(sys.argv[2]).resolve(); out.mkdir(parents=True,exist_ok=True)
checks=[]

def add(name,ok,detail=''):
    checks.append({'check':name,'status':'PASS' if ok else 'FAIL','detail':str(detail)})

def p(rel): return repo/rel

def text(rel):
    path=p(rel)
    return path.read_text(encoding='utf-8') if path.is_file() else ''

def sha_file(rel):
    path=p(rel)
    return hashlib.sha256(path.read_bytes()).hexdigest() if path.is_file() else ''

def sha_text(s): return hashlib.sha256(s.encode('utf-8')).hexdigest()

def contains(rel,needle,name): add(name,needle in text(rel),needle)

def absent(rel,needle,name): add(name,needle not in text(rel),needle)

def count_eq(rel,needle,n,name):
    c=text(rel).count(needle); add(name,c==n,f'expected={n} got={c}')

def segment(s,start,end,offset=0):
    try:
        i=s.index(start,offset); j=s.index(end,i); return s[i:j]
    except ValueError:
        return ''

massage='src/content/knowledge/no/articles/vagusnerven-og-massasje.ts'
buyer='src/content/decision-guides/how-to-choose-vns-device.ts'
claims='docs/seo/search-dominance-1e2g-no-protected-win-buyer-guide-source-claims-lock.md'
media='docs/seo/search-dominance-1e2g-no-protected-win-buyer-guide-media-brief.md'
pdf='public/downloads/neuvago-kjopersjekkliste-vns-enhet-no.pdf'

for rel in [massage,buyer,claims,media,pdf]: add(f'exists: {rel}',p(rel).is_file())

# Exact post hashes for the two public source targets.
post_hashes={
 massage:'fe1023f4c5e573a5b395a733b60a7d54199c024a079e7124f77084e581500947',
 buyer:'8cdc0af689f056125b32d07705d9d2c1a074a8176daeb2e4885ec13e74d5b983',
}
for rel,h in post_hashes.items():
    got=sha_file(rel); add(f'target post hash: {rel}',got==h,f'expected={h} got={got}')

m=text(massage); b=text(buyer)

# Massage protect-win contract: keep ranking-sensitive identity stable, strengthen only top copy.
for s in [
 '"path": "/no/kunnskap/vagusnerven-og-massasje"',
 '"title": "Kan man massere vagusnerven? Berøring, nakke, øre og viktige sikkerhetsgrenser"',
 '"seoTitle": "Vagusnerven og massasje: evidens og sikkerhet | Neuvago"',
 '"description": "En kildebasert guide til vagusnervemassasje, trykkpunkter, øre- og nakkemassasje – med tydelig grense mot carotissinus og kraftig halstrykk."',
 '"primaryKeyword": "vagusnerven massasje"',
 'Kan man massere vagusnerven? Du kan massere hud og muskler skånsomt, men det er ikke det samme som å massere selve vagusnerven.',
 'Kildebasert guide til vagusnervemassasje:',
 '"modifiedAt": "2026-09-12"',
 '"englishEquivalent": "/learn/vagus-nerve-massage"',
]: add(f'massage protect-win marker: {s[:88]}',s in m,s)

# Massage scientific/source/related blocks are byte-identical to the locked post-1E.2F baseline.
for label,start,end,expected in [
 ('massage scientific sections','  "sections": [','  "sources": [','89159e0166d3480f2b9c4862ebab6938dba8ae368fab057ab8c71b537c327938'),
 ('massage visible source list','  "sources": [','  "relatedSlugs": [','2b0ec5bb91a85c2647d663c483f6e28377082bdcc1252a97d477baeff092a01b'),
 ('massage related graph','  "relatedSlugs": [','\n} as const satisfies NorwegianKnowledgeArticle;','8de4654068f60053ed13748c905c02ceae40b3dbe660eb2d3821c87996064946'),
]:
    seg=segment(m,start,end); got=sha_text(seg) if seg else ''
    add(label+' preserved',got==expected,f'expected={expected} got={got}')

# Existing massage safety boundaries remain explicit.
for s in [
 'man direkte masserer selve vagusnerven',
 'Kraftig trykk over halspulsåren eller carotissinus',
 'bruk aldri carotissinusmassasje som egenøvelse',
 'manuell øreberøring er ikke det samme som elektrisk taVNS',
]: add(f'massage safety boundary: {s[:78]}',s in m,s)
for s in ['href: "/no/produkt"','href: "/product"','href: "/shop"','QAPage']:
    add(f'massage no commercial/schema expansion: {s}',s not in m,s)

# Buyer guide identity and head-term owner lift.
for s in [
 '"path": "/no/kunnskap/hvordan-velge-vagusnervestimulator"',
 '"title": "Hvordan velge en vagusnervestimulator"',
 '"seoTitle": "Hvordan velge vagusnervestimulator | Neuvago"',
 '"description": "En nøytral sjekkliste for å vurdere type stimulator, tiltenkt bruk, evidens, sikkerhet, kontroller, kostnader og personvern."',
 'Når du vurderer en vagusnervestimulator, start med hva slags VNS-enhet det faktisk er',
 'En vagusnervestimulator er ikke én standardisert produktkategori',
 'En nøytral kjøpsguide for vagusnervestimulatorer med 12 kontroller',
 '"primaryKeyword": "vagusnervestimulator"',
 '"hvordan velge vagusnervestimulator"',
 '"vagusstimulator"',
 '"vns stimulator"',
 '"enhet for vagusnervestimulering"',
 '"ikke-invasiv VNS-enhet"',
 '"modifiedAt": "2026-09-12"',
]: add(f'buyer owner-lift marker: {s[:88]}',s in b,s)

no_start=b.find('  "no": {')
no_header=''
if no_start>=0:
    no_download=b.find('    "download": {',no_start)
    no_header=b[no_start:no_download] if no_download>=0 else ''
add('buyer Norwegian object found',no_start>=0)
add('buyer no active best-keyword targeting','"beste vagusnervestimulator"' not in no_header,'header-only active keyword scope')

# English buyer counterpart and substantive Norwegian body stay byte-identical.
if b:
    en_seg=segment(b,'  "en": {','  "no": {')
    no0=b.find('  "no": {')
else:
    en_seg=''; no0=-1
preserve_specs=[
 ('buyer English counterpart','aa789f2c4524290a78f50e002ef9a09b2c19095dbf57721e83d2688144087e92',en_seg),
]
if no0>=0:
    preserve_specs += [
      ('buyer Norwegian sections','bc0322bf4ac321233b48bd58b66f5d79296cf380add1b35610bca8b0c723807b',segment(b,'    "sections": [','    "sources": [',no0)),
      ('buyer Norwegian visible sources','cc48eea4c1db315836fbcdf91414e586949152c0e7c7589f1921d9d56f3453a9',segment(b,'    "sources": [','    "relatedLinks": [',no0)),
      ('buyer Norwegian related links','9eab800786fe164c787648d214250b954f640972a58005221a13b02dbe898c97',segment(b,'    "relatedLinks": [','    "productBridge": {',no0)),
      ('buyer Norwegian product bridge','f0526cbc572734e97497d427c841dddbee1f86c0bea11fb6fab08f466b21230d',segment(b,'    "productBridge": {','    "sitemapPriority": 0.84,',no0)),
    ]
for label,expected,seg in preserve_specs:
    got=sha_text(seg) if seg else ''
    add(label+' preserved',got==expected,f'expected={expected} got={got}')

# Existing buyer-guide structural and claim boundaries remain present.
for section_id in [
 'short-answer','identify-device-category','read-intended-use-and-label','separate-method-from-product-evidence',
 'placement-contact-and-protocol','safety-contraindications-and-stop-rules','controls-app-support-and-privacy',
 'price-subscription-warranty-and-returns','twelve-point-evaluation-checklist','sources-and-review-date']:
    c=b.count(f'"id": "{section_id}"'); add(f'buyer bilingual section count: {section_id}',c==2,f'expected=2 got={c}')
for s in [
 'ikke en rangering',
 'dokumenterer ikke automatisk alle',
 'dokumenterer ikke selektivt target engagement',
 'Forskning på aurikulær eller transkutan VNS blir ikke automatisk Neuvago-spesifikt bevis.',
]: add(f'buyer evidence boundary: {s[:82]}',s in b,s)
for forbidden in ['"href": "/shop"','"href": "/no/butikk"','"@type": "Product"','"@type": "Review"','"@type": "AggregateRating"','"@type": "ItemList"']:
    add(f'buyer forbidden commercial marker absent: {forbidden}',forbidden not in b,forbidden)
count_eq(buyer,'"href": "/no/produkt"',1,'buyer one late Norwegian product-information link')
count_eq(buyer,'"href": "/product"',1,'buyer one late English product-information link')

# Existing downloadable Norwegian checklist is retained byte-for-byte.
pdf_expected='0564e8653ae71f3d4e008da8c49cbd9d6429deaf62823914881f65e3f3945fa6'
add('buyer checklist PDF hash preserved',sha_file(pdf)==pdf_expected,f'expected={pdf_expected} got={sha_file(pdf)}')

# Untouched context/support graph stays exactly on the captured post-1E.2F baseline.
locked_untouched={
 'docs/international/de/DE-WAVE0-FINAL-REVIEW.md':'ef6af4be8e13208415d4b7414c6f248b88df8451797309a5f46b4919539e9644',
 'docs/international/de/de-launch-baseline-v1.csv':'7546d53a7f4f74ef32a1fe093d2e42783a3d868f8c1bed3307e26b52b073369a',
 'docs/international/de/de-launch-baseline-v1.json':'dcbb11d5160f6a8f94b3a32000683592bcd4b8cb959164c769ba4cc24aa21224',
 'docs/international/de/de-wave0-route-disposition-v1.csv':'17185e8da97baadcdc215b63eafa9ed74a12fbc11d58903c4e73a2b6c73e7893',
 'docs/seo-measurement-plan.md':'8532f9a8013744e6d6b108931b229bc1d29631ea5381de5a04eab49817880ea5',
 'docs/seo-vns-cluster-target-queries.md':'0f36b9514befdba570ece12baad43aacaaa0c550fef7706395ad93710becc28e',
 'docs/seo/search-dominance-1e2d-reset-massage-owner-lift-source-claims-lock.md':'7ed19918048703fd6afc359da8c00f62e52d49bd7c40e4fcf662f28520faab33',
 'docs/seo/search-dominance-1e2f-no-vns-stimulation-media-brief.md':'338ccfec14a5fe782f15962edf7da780e4af4588d5a23af2dd3ece1a21c1271d',
 'docs/seo/search-dominance-1e2f-no-vns-stimulation-owner-lift-source-claims-lock.md':'3c897fb042461c7701bee90f3541ba67f9db48bd8f193e96437083be25b82ab0',
 'docs/seo/wave2c2d-hverdagsuro-source-and-claims-lock.md':'1b2f77d5562870ae740d74bc3531364214f723629cd78c771392ff35020dc9dc',
 'docs/seo/wave2d2d-massage-pages-source-and-claims-lock.md':'399b99510adce372e2e4aaad2819c24cc058ef8e4f452313cd82cbb78e4ca321',
 'docs/seo/wave2d3-second-batch-source-and-claims-lock.md':'5edbf055d7eef188dc6986f17c830ff96e7f17ca9f4555b79f51300670e75ea7',
 'public/llms.txt':'8b3f10c59ea55decbf840bee1400a7e4551e70fb9e0f69b039c2fd1ccd9624c5',
 'scripts/search-dominance-1d-trust-audit.py':'40a0becc581147966c84510c76b23e37b865d1c6fd5db39109d28b79c8f5b896',
 'scripts/seo-vns-cluster-audit.mjs':'d9bc3e4acae0c21a4c71943d6375a84346b04e52a2509897dae0932ee0e27d4d',
 'src/app/(en)/learn/vagus-nerve-massage/page.tsx':'a7fb748fb50cd6b41adec7b09b7dd065bec0b5250e1a766532541fe00dab4efd',
 'src/app/(no)/no/kunnskap/[slug]/page.tsx':'ac5e091b3e2286c81e45e33552027986dda9bf663a3d9d63569f1e2575b95978',
 'src/app/(no)/no/kunnskap/hvordan-velge-vagusnervestimulator/page.tsx':'a32a6d7c6ed156aad9b47c015a7c16748ea3212694398a7c048c93027892889f',
 'src/app/(no)/no/kunnskap/orebasert-vs-halsbasert-vns/page.tsx':'9bb6cce2c84613a1589455f2e2485a60c3593618c0e3c94a27b01c14134c8923',
 'src/app/(no)/no/kunnskap/page.tsx':'9abecb7fe889eb98a7371602452dc1b9ad3aebd00dbf1b69e3b20b48fac3b009',
 'src/app/(no)/no/produkt/page.tsx':'758cce94dfdba02567673eef35ea2be18e35b383006cef728b80e61aa9f6cb72',
 'src/app/sitemap.ts':'0fb8413b5b50ba79f4b36395fd6509e083405acde960259e9dd0bcf07c37ff55',
 'src/components/analytics/OrganicConversionTracker.tsx':'58291d1d806519944ef1d77412bb7559541589b961aee0d2db0b7258c992cdfa',
 'src/components/decision-guides/DecisionGuidePage.tsx':'23d91c3c0d539401cfba70a67cf2afe0279e1a3f0ca18a3701c33cf447066962',
 'src/components/knowledge/NorwegianKnowledgeArticlePage.tsx':'a7b8a7cfc6a105302741c36c6ba8b4ae21109acd5b47c4fca38317a7a71f3ca0',
 'src/content/conditions/no/pages/hverdagsuro.ts':'36f63dfb2d5aa456b680c78ec2d0e04ce2ecdd2ec2cfd76617fd931969b7da61',
 'src/content/decision-guides/ear-vs-neck-vns.ts':'6970394aad46606ce44f97827b63f18aef43fcd3190a6190041b8af1b546d3a9',
 'src/content/decision-guides/registry.ts':'ea9d283c3a4174187e817d3f06e237fa9e17517cd6bf797ed056b0d15f081f32',
 'src/content/decision-guides/types.ts':'809fb92fb8619f625bd183bcf9a9b525dd2024f3eeeecd866777256dfa4c23fe',
 'src/content/knowledge/no/articles/aurikulaer-vagusnervestimulering.ts':'03eaf083f59141b95954ffff1cf77e6bb1c35b9bc7de1f154236263644c5be67',
 'src/content/knowledge/no/articles/er-vagusnervestimulering-trygt.ts':'2dd3e05224fafbc0b23dca3518487dd53ef85f93b42c2b88c2fe0773a8779899',
 'src/content/knowledge/no/articles/hvem-bor-vaere-forsiktig-med-vagusnervestimulering.ts':'f9a6851ace1e6d0e5c6a7100d1735cc9906e20d3da971ddfdf64f0fa7e7fb259',
 'src/content/knowledge/no/articles/hvordan-stimulere-vagusnerven.ts':'5e13f17b47240105d62896f5867bf740c2b2e9b71bc93fca9720837753a113df',
 'src/content/knowledge/no/articles/ikke-invasiv-vagusnervestimulering.ts':'1a5fdf359ff4a579efd16ed2464f41bf39a901e4e915c88766d67913b9442284',
 'src/content/knowledge/no/articles/implantert-og-ikke-invasiv-vns.ts':'808a9e760dd25431b24026ef073f6701ec53b464cc154ef54c30803a6baa601c',
 'src/content/knowledge/no/articles/orets-anatomi-og-vagusnerven.ts':'460150dfeb492461dd4df6430e7dcf8b7a26b06569862f4a01af3a8e6f2bca68',
 'src/content/knowledge/no/articles/pusteovelser-og-vagusnerven.ts':'59bb3524bfd42408a57516707cd65e9ca0ebfc0af50188e7057b8f84c12fa2c2',
 'src/content/knowledge/no/articles/resette-vagusnerven.ts':'7c9a702f13859837424e1da4e10d0ea095a1a590c34a0ff3de79415ccafea70a',
 'src/content/knowledge/no/articles/tens-og-vagusnervestimulering.ts':'4e1277bcb180526fa185d13f513905c415640fb01ba8564eb90e11ac4c824d47',
 'src/content/knowledge/no/articles/transkutan-vagusnervestimulering.ts':'c4b253bc2b65545c75dafb94d35c9772ec5ca778d14ddb4c0a8b002afd1bb8c3',
 'src/content/knowledge/no/articles/vagusnerven.ts':'05c7124531383afd64685df571a02c8d5a15b23904c10bda36b4d6b1b4984c0d',
 'src/content/knowledge/no/articles/vagusnervestimulering.ts':'eb9735ad285878eb7555c72f07b7f74f7f789cb3c9f8897f78b7f9517f22f4dc',
 'src/content/research/no/topics/vagusnervestimulering.ts':'be1c244ec551667a11515dae7bc3a33d3fc369820aa58e84ede33832ed7879bd',
 'src/i18n/page-registry.generated.ts':'f37b59161f27e46d33140a3990833817fd4642a545d5672132a0bac1494d151e',
}
for rel,h in locked_untouched.items():
    exists=p(rel).is_file(); add(f'untouched support exists: {rel}',exists)
    if exists:
        got=sha_file(rel); add(f'untouched support hash: {rel}',got==h,f'expected={h} got={got}')

# Governance docs lock the owner, claims and media boundaries.
for s in [
 'METH-005','BUY-001','protected early win','beste vagusnervestimulator','post-launch',
 'Efficacy questions','complete massage `sections` block','complete English buyer-guide object',
 'Product, Review, AggregateRating or ItemList','adds no final public image/video asset',
]: add(f'1E.2G claims lock marker: {s}',s in text(claims),s)
for s in ['MASSAGE-NO-VID-01','MASSAGE-NO-IMG-01','BUYER-NO-VID-01','BUYER-NO-IMG-01','BUYER-NO-PDF-01','Do not rank products','No replacement PDF']:
    add(f'1E.2G media brief marker: {s}',s in text(media),s)

# No final 1E.2G-named public media asset is introduced.
media_assets=list((repo/'public').rglob('*1e2g*')) if (repo/'public').exists() else []
add('no final 1E.2G-named public media asset',len(media_assets)==0,','.join(str(x.relative_to(repo)) for x in media_assets))

fail=[c for c in checks if c['status']=='FAIL']
with open(out/'search-dominance-1e2g-checks.csv','w',newline='',encoding='utf-8') as f:
    w=csv.DictWriter(f,fieldnames=['check','status','detail']); w.writeheader(); w.writerows(checks)

def okcheck(prefix): return not any(c['status']=='FAIL' and c['check'].startswith(prefix) for c in checks)
res={
 'schema':'neuvago-search-dominance-1e2g-audit-v1',
 'status':'PASS' if not fail else 'FAIL',
 'checks_total':len(checks),
 'checks_passed':len(checks)-len(fail),
 'failures':fail,
 'warnings':['1E.2G adds no final image/video asset; the existing buyer checklist PDF is retained unchanged.'],
 'routes':['/no/kunnskap/vagusnerven-og-massasje','/no/kunnskap/hvordan-velge-vagusnervestimulator'],
 'massage_scientific_sections_preserved':okcheck('massage scientific sections'),
 'massage_visible_source_list_preserved':okcheck('massage visible source list'),
 'massage_h1_seo_protected':okcheck('massage protect-win marker'),
 'buyer_english_counterpart_preserved':okcheck('buyer English counterpart'),
 'buyer_sections_sources_preserved':okcheck('buyer Norwegian sections') and okcheck('buyer Norwegian visible sources'),
 'buyer_commercial_boundaries_preserved':okcheck('buyer forbidden commercial marker') and okcheck('buyer one late'),
 'buyer_checklist_pdf_preserved':okcheck('buyer checklist PDF'),
}
(out/'search-dominance-1e2g-audit.json').write_text(json.dumps(res,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
print(json.dumps(res,indent=2,ensure_ascii=False))
sys.exit(0 if not fail else 1)
