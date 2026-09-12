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
    with path.open('rb') as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()


def main() -> int:
    if len(sys.argv) != 3:
        print('usage: search-dominance-1e3b-audit.py <repo> <outdir>', file=sys.stderr)
        return 2
    repo = Path(sys.argv[1]).resolve()
    out = Path(sys.argv[2]).resolve()
    out.mkdir(parents=True, exist_ok=True)

    page_path = repo / 'src/app/(en)/learn/vagus-nerve-exercises/page.tsx'
    parent_path = repo / 'src/app/(en)/learn/how-to-stimulate-the-vagus-nerve/page.tsx'
    hub_path = repo / 'src/app/(en)/learn/page.tsx'
    sitemap_path = repo / 'src/app/sitemap.ts'
    llms_path = repo / 'public/llms.txt'
    owner_doc_path = repo / 'docs/seo-vns-cluster-target-queries.md'
    measurement_path = repo / 'docs/seo-measurement-plan.md'
    claims_path = repo / 'docs/seo/search-dominance-1e3b-vagus-nerve-exercises-source-claims-lock.md'
    media_path = repo / 'docs/seo/search-dominance-1e3b-vagus-nerve-exercises-media-brief.md'

    files = [page_path, parent_path, hub_path, sitemap_path, llms_path, owner_doc_path, measurement_path, claims_path, media_path]
    texts = {}
    checks = []

    def check(name: str, ok: bool, detail: str = '') -> None:
        checks.append({'check': name, 'status': 'PASS' if ok else 'FAIL', 'detail': detail})

    for p in files:
        check(f'exists: {p.relative_to(repo)}', p.is_file())
        if p.is_file():
            texts[p] = p.read_text(encoding='utf-8')

    if page_path not in texts:
        page = ''
    else:
        page = texts[page_path]
    parent = texts.get(parent_path, '')
    hub = texts.get(hub_path, '')
    sitemap = texts.get(sitemap_path, '')
    llms = texts.get(llms_path, '')
    owner_doc = texts.get(owner_doc_path, '')
    measurement = texts.get(measurement_path, '')
    claims = texts.get(claims_path, '')
    media = texts.get(media_path, '')

    route = '/learn/vagus-nerve-exercises'
    title = 'Vagus Nerve Exercises: Evidence, Examples and Limits | Neuvago'
    h1 = 'Vagus nerve exercises: what may help, what the evidence shows and what not to claim'

    # Page contract
    check('page self canonical route', f'const path = "{route}";' in page)
    check('page exact SEO title', f'const title = "{title}";' in page)
    check('page exact H1', h1 in page)
    check('page owner marker', 'data-search-dominance-1e3b-owner="vagus-nerve-exercises"' in page)
    check('page direct-answer marker', 'data-search-dominance-1e3b-direct-answer="true"' in page)
    check('page source marker', 'data-search-dominance-1e3b-sources="true"' in page)
    check('page en-US hreflang', '"en-US": path' in page)
    check('page x-default hreflang', '"x-default": path' in page)
    check('page no Norwegian counterpart hreflang', '"nb-NO"' not in page)
    check('page publish date', 'datePublished: "2026-09-12"' in page and 'dateModified: "2026-09-12"' in page)
    check('page primary keyword', '"vagus nerve exercises"' in page)
    check('page no QAPage', 'QAPage' not in page)
    check('page no FAQPage literal', 'FAQPage' not in page)
    check('page no product/shop CTA', '/product' not in page and '/shop' not in page and 'checkout' not in page.lower())
    check('page no electrical settings how-to', not re.search(r'\b(?:hz|pulse width|ma\b|milliamps?|electrode placement)\b', page, re.I))
    check('page keeps direct-vagus uncertainty', 'No behavioural exercise is established as a universal switch that directly and selectively stimulates' in page)
    check('page keeps electrical VNS boundary', 'Exercises are not the same as electrical vagus nerve stimulation' in page)
    check('page keeps viral-claim boundary', 'Humming, gargling, tapping and cold exposure need a separate claim check' in page)
    check('page keeps pressure/neck boundary', 'Strong carotid or neck pressure is not a generic home vagus exercise.' in page)
    check('page keeps urgent safety language', 'chest pain' in page and 'fainting' in page and 'severe breathlessness' in page and 'new neurological symptoms' in page)

    for href in [
        '/learn/how-to-stimulate-the-vagus-nerve',
        '/learn/breathing-exercises-and-the-vagus-nerve',
        '/learn/vagus-nerve-massage',
        '/learn/vagus-nerve-stimulation',
        '/learn/how-to-calm-your-nervous-system',
        '/learn/vagus-nerve-reset',
        '/legal/medical-disclaimer',
        '/legal/trust-safety',
    ]:
        check(f'page required href {href}', f'href="{href}"' in page)

    for sid in [f'E-00{i}' for i in range(1, 9)]:
        check(f'page source {sid}', f'id: "{sid}"' in page and f'data-source-id={{source.id}}' in page)
    check('page exactly eight source objects', len(re.findall(r'\n\s*id: "E-00[1-8]"', page)) == 8, str(len(re.findall(r'\n\s*id: "E-00[1-8]"', page))))

    # Parent owner split
    check('parent links to exercise owner exactly once', parent.count(route) == 1, str(parent.count(route)))
    check('parent structured keyword relinquished', '      "vagus nerve exercises",' not in parent)
    check('parent keeps broad H1', 'How to stimulate the vagus nerve: methods, evidence and important limits' in parent)
    check('parent explicit exercise link label', 'Read the evidence-graded vagus nerve exercises guide' in parent)

    # Learn hub
    check('learn hub links exercise owner exactly once', hub.count(route) == 1, str(hub.count(route)))
    check('learn hub card title', 'title: "Vagus nerve exercises"' in hub)
    check('learn hub evidence summary', 'evidence grading and clear limits around direct vagus-nerve stimulation' in hub)

    # Indexing surfaces
    check('sitemap exercise route exactly once', sitemap.count(route) == 1, str(sitemap.count(route)))
    check('sitemap exercise date', f'{{ path: "{route}", changeFrequency: "weekly", priority: 0.8, lastModified: "2026-09-12" }}' in sitemap)
    check('llms exercise route exactly once', llms.count(route) == 1, str(llms.count(route)))
    check('llms exercise boundary', 'no direct-vagus guarantee' in llms and 'no transfer of electrical-VNS evidence' in llms)

    # Governance docs
    check('owner map 1E.3B section', 'SEARCH DOMINANCE 1E.3B — VAGUS NERVE EXERCISES SERP OWNER LOCK' in owner_doc)
    check('owner map dedicated route', route in owner_doc)
    check('owner map parent relinquishes dedicated exercise detail', 'dedicated exercise detail' in owner_doc)
    check('measurement 1E.3B section', 'SEARCH DOMINANCE 1E.3B — VAGUS NERVE EXERCISES MEASUREMENT AND PRIVACY LOCK' in measurement)
    check('measurement no health interaction', 'adds no new analytics event' in measurement and 'Do not record which exercise category' in measurement)
    check('claims lock primary route', route in claims)
    check('claims lock viral claims deferred', '/learn/vagus-nerve-evidence-vs-internet-claims' in claims)
    check('claims lock no reset certainty', 'Any “reset,” “heal,” “activate on command,”' in claims)
    check('media brief exists and is brief only', 'brief only; no final media asset is added' in media)
    check('media brief no direct activation arrow', 'Do not draw arrows that imply direct selective vagus activation.' in media)

    # Target 1E.3C remains unpublished/unlinked in public payload.
    public_text = '\n'.join([page, parent, hub, sitemap, llms])
    claims_route = '/learn/vagus-nerve-evidence-vs-internet-claims'
    check('1E.3C future route remains absent from public payload', claims_route not in public_text)

    # Untouched high-risk/support hashes from locked 1E.3A baseline.
    untouched = {
        'src/app/(en)/learn/breathing-exercises-and-the-vagus-nerve/page.tsx': '4af7567a5b06702da016d9d373335cbe9a98689b24f39c1e00c9857ff7e15dd7',
        'src/app/(en)/learn/vagus-nerve-massage/page.tsx': 'a7fb748fb50cd6b41adec7b09b7dd065bec0b5250e1a766532541fe00dab4efd',
        'src/app/(en)/learn/vagus-nerve-reset/page.tsx': '4806b7a10c8917a5c62b2334db56282dc57f392ba862e0cfd7c7c74c697d490e',
        'src/app/(en)/legal/medical-disclaimer/page.tsx': '5e532338cac9fe6e13e3b75ba6bb0fd0b21e72b94e1c81f68333c6376355768e',
        'src/app/(en)/legal/trust-safety/page.tsx': '899054b1cf9a5f339d81cc8d254f26bd938b6a149ec709457e598846d5eace35',
        'scripts/seo-vns-cluster-audit.mjs': 'd9bc3e4acae0c21a4c71943d6375a84346b04e52a2509897dae0932ee0e27d4d',
    }
    untouched_ok = True
    for rel, expected in untouched.items():
        p = repo / rel
        got = sha256(p) if p.is_file() else 'MISSING'
        ok = got == expected
        untouched_ok = untouched_ok and ok
        check(f'untouched support hash: {rel}', ok, f'expected={expected} got={got}')

    failures = [c for c in checks if c['status'] == 'FAIL']
    result = {
        'schema': 'neuvago-search-dominance-1e3b-audit-v1',
        'status': 'PASS' if not failures else 'FAIL',
        'checks_total': len(checks),
        'checks_passed': len(checks) - len(failures),
        'failures': failures,
        'warnings': [
            '1E.3B publishes an evidence-graded practical exercise owner but intentionally adds no final image/video/PDF asset.',
            'The separate evidence-vs-internet-claims hub remains unpublished for 1E.3C.',
        ],
        'route': route,
        'parent_owner': '/learn/how-to-stimulate-the-vagus-nerve',
        'future_1e3c_route_absent_from_public_payload': claims_route not in public_text,
        'untouched_support_hashes_preserved': untouched_ok,
    }
    (out / 'search-dominance-1e3b-audit.json').write_text(json.dumps(result, indent=2) + '\n')
    with (out / 'search-dominance-1e3b-checks.csv').open('w', newline='') as f:
        w = csv.DictWriter(f, fieldnames=['check', 'status', 'detail'])
        w.writeheader(); w.writerows(checks)
    print(json.dumps(result, indent=2))
    return 0 if not failures else 1


if __name__ == '__main__':
    raise SystemExit(main())
