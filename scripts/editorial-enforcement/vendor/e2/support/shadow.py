"""Reporting-only rule engine. Technical matches never approve scientific claim support.
Input is an explicit phase snapshot and an AST projection; unknown syntax stays unknown.
"""
from __future__ import annotations
import hashlib, html, json, os, re, subprocess, zipfile
from collections import Counter
from pathlib import Path
import readonly_guard as g
import registry_checks as rc
import card_fields as cf

RESULTS={'PASS_TECHNICAL_SCOPE','WOULD_BLOCK','REVIEW_REQUIRED','NOT_EVALUATED','OPERATIONAL_ERROR'}
GLOSSARY=['src/content/glossary/en/terms.ts','src/content/glossary/no/terms.ts']
VERSION='neuvago-1e4e2-calibrated-shadow-rules-v1'

def strict_json(data):
    def pairs(rows):
        result={}
        for k,v in rows:
            if k in result:raise ValueError('Duplicate JSON key: '+k)
            result[k]=v
        return result
    return json.loads(data,object_pairs_hook=pairs)
def load(p):return strict_json(p.read_text(encoding='utf-8'))
def norm(t):return ' '.join(html.unescape(str(t)).split())
def fixture(package):
    with zipfile.ZipFile(package/'fixtures/accepted-source.zip') as z:
        return {p:z.read(p) for p in z.namelist() if not p.endswith('/')}

def typescript_path(repo):
    # Resolve this one preinstalled dependency explicitly. No project scripts are imported.
    m=Path(repo)/'node_modules/typescript/lib/typescript.js'
    g.require(m.is_file(),'Existing TypeScript dependency missing; no installation performed')
    return str(m.resolve())

def project(files,package,typescript):
    requested=[];errors=[]
    for path,b in files.items():
        try:requested.append({'path':path,'text':b.decode('utf-8')})
        except UnicodeDecodeError:errors.append({'path':path,'status':'OPERATIONAL_ERROR','errors':[{'message':'Input is not UTF-8'}],'roots':[],'unresolved':[]})
    proc=subprocess.run(['node',str(package/'support/extract.cjs')],input=g.encode({'typescript_module':typescript,'files':requested}),
                        stdout=subprocess.PIPE,stderr=subprocess.PIPE,env=g.env(),timeout=90)
    g.require(proc.returncode==0,'TypeScript AST reader failed; no source execution performed')
    value=json.loads(proc.stdout)
    g.require(len(value['files'])==len(requested),'AST reader omitted input')
    value['files'].extend(errors);return value

def walk(n,anc=()):
    if not isinstance(n,dict) or 'tag' not in n:return
    yield n,anc
    for c in n.get('children',[]):yield from walk(c,anc+(n,))

def explicit_hidden(n):
    attrs=n.get('attrs',{});style=attrs.get('style',{})
    if isinstance(style,dict):style=';'.join(str(k)+':'+str(v) for k,v in style.items())
    style=re.sub(r'\s+','',str(style)).lower()
    classes=str(attrs.get('className',attrs.get('class','')) or '').split()
    return (n.get('tag') in {'script','style','template','noscript'} or attrs.get('hidden') not in (None,False)
       or attrs.get('aria-hidden') in (True,'true') or any(x in classes for x in ['hidden','sr-only','invisible','opacity-0','[display:none]','[visibility:hidden]'])
       or 'display:none' in style or 'visibility:hidden' in style or re.search(r'(?:^|;)opacity:0(?:;|$)',style) is not None)

def hidden(n,anc=()):return any(explicit_hidden(x) for x in (*anc,n))
def nodes(roots,tag=None,include_hidden=False):
    return [(n,a) for r in roots for n,a in walk(r) if (tag is None or n['tag']==tag) and (include_hidden or not hidden(n,a))]

def text(n):
    if explicit_hidden(n):return ''
    return ' '.join(text(v) if isinstance(v,dict) else str(v) for v in n.get('children',[]) if v is not None)

def uncertain(n,anc=()):return any(x.get('uncertain') for x in (*anc,n)) or any(x.get('uncertain') for x,_ in walk(n))
def hrefs(n):return [x['attrs']['href'] for x,a in walk(n) if x['tag']=='a' and not hidden(x,a) and isinstance(x.get('attrs',{}).get('href'),str)]
def scalar_fields(c):
    m=c['inherited_metadata']
    return [m.get('title'),m.get('authors'),m.get('journal'),m.get('date_label',m.get('year')),m.get('design',m.get('kind'))]

def rule_fingerprint(package):
    names=['reference/design-v1.json','reference/delivery-ledger.json','support/shadow.py','support/snapshot.py','support/extract.cjs','support/readonly_guard.py','support/expected-state.json','support/registry_checks.py','support/card_fields.py','reference/display-fields-v1.json','reference/neuvago-1e4e2-pilot-review-gate-calibration-v1.json']
    return g.sha(g.encode({p:g.sha((package/p).read_bytes()) for p in names}))

def analyze(snap,package,typescript,baseline_files=None,parsed=None,baseline_parsed=None):
    exp=load(package/'support/expected-state.json');ledger=load(package/'reference/delivery-ledger.json')
    base=baseline_files if baseline_files is not None else fixture(package)
    files=snap['files'];meta=snap['meta'];phase=meta['phase'];rows=[];coverage=[]
    display_contract={(r['path'],r['card_id']):r for r in load(package/'reference/display-fields-v1.json')['cards']}
    route_by_path={r['path']:r for r in ledger['routes']};rules_sha=rule_fingerprint(package);compiler_sha=g.sha(Path(typescript).read_bytes())
    requested={p:b for p,b in files.items() if p in route_by_path or p in GLOSSARY}
    ast=parsed if parsed is not None else project(requested,package,typescript)
    projected={r['path']:r for r in ast['files']}
    def emit(rule,result,reason,path=None,route=None,card=None,source_type='NOT_APPLICABLE',line=None,basis=None,detail=None,record=None,field=None):
        g.require(result in RESULTS,'Unknown rule result')
        row={'rule_id':rule,'input_phase':phase,'source_locator':{'file':path,'line':line,'card_id':card,'record_id':record,'field':field},
             'route_or_unresolved_route':route,'input_fingerprint':meta.get('file_sha256',{}).get(path,meta['snapshot_fingerprint']),
             'snapshot_fingerprint':meta['snapshot_fingerprint'],'selected_blob_oid':meta.get('blob_oids',{}).get(path),
             'rule_contract_version':VERSION,'rules_sha256':rules_sha,'typescript_module_sha256':compiler_sha,'source_type':source_type,'technical_result':result,
             'reason':reason,'review_basis':basis,'would_block_if_enforced':result=='WOULD_BLOCK',
             'scientific_claim_support_approved':False,'detail':detail}
        rows.append(row)
    def check(ok,rule,reason,**kw):emit(rule,'PASS_TECHNICAL_SCOPE' if ok else 'WOULD_BLOCK',reason,**kw)
    def assess_note(actual,expected,rule,path,route,anc=(),card=None):
        if not actual or hidden(actual,anc) or not norm(text(actual)):emit(rule,'WOULD_BLOCK','Required boundary missing or explicitly hidden',path,route,card=card);return
        if uncertain(actual,anc):emit(rule,'NOT_EVALUATED','Boundary projection is not statically determinate',path,route,card=card,line=actual.get('line'));return
        emit(rule,'PASS_TECHNICAL_SCOPE' if norm(expected)==norm(text(actual)) else 'REVIEW_REQUIRED',
             'Boundary retained' if norm(expected)==norm(text(actual)) else 'Boundary wording changed; old review is not inherited',
             path,route,card=card,line=actual.get('line'),basis='Per-use scope from accepted delivery, not scientific approval',detail={'expected':expected,'observed':norm(text(actual))})

    for target in ledger['routes']:
        path=target['path'];route=target['route'];p=projected.get(path)
        if not p:
            emit('G-ROUTES-TARGET','WOULD_BLOCK','Declared target was not supplied',path,route)
            coverage.append({'path':path,'route':route,'status':'NOT_EVALUATED','reason':'Missing declared input'});continue
        if p['status']=='OPERATIONAL_ERROR':
            emit('G-LIFECYCLE-PARSER','OPERATIONAL_ERROR','TSX parser failed; never treated as no sources',path,route,detail=p['errors'])
            coverage.append({'path':path,'route':route,'status':'OPERATIONAL_ERROR'});continue
        if p.get('control_flow_issues'):
            emit('G-ROUTES-TARGET','NOT_EVALUATED','Component control flow is outside the declared static subset',path,route,
                 line=p['control_flow_issues'][0].get('line'),detail=p['control_flow_issues'])
            coverage.append({'path':path,'route':route,'status':'NOT_EVALUATED','reason':'Unsupported control flow; no card-level PASS emitted','issues':p['control_flow_issues']})
            for ref in target['references']:
                emit('G-ID-CARD','NOT_EVALUATED','Source card reachability not evaluated',path,route,card='source-'+ref['local_key'],source_type=ref['source_kind'],detail=p['control_flow_issues'])
            continue
        roots=p['roots'];main=nodes(roots,'main')
        if len(main)!=1:
            emit('G-ROUTES-TARGET','NOT_EVALUATED' if p['unresolved'] else 'WOULD_BLOCK','Expected one statically known main',path,route,detail=p['unresolved'])
            coverage.append({'path':path,'route':route,'status':'NOT_EVALUATED'});continue
        main_node=main[0][0];roots=[main_node]
        coverage.append({'path':path,'route':route,'profile':'CONDITIONS' if route.startswith('/conditions') else 'LEARN',
                         'status':'EVALUATED_DECLARED_CARDS_AND_BOUNDARIES','not_evaluated':['CSS layout','runtime imports','scientific claim support','unbound explanations']})
        emit('G-ROUTES-TARGET','PASS_TECHNICAL_SCOPE','Declared input included; static projection only',path,route)
        if p['unresolved']:emit('G-ROUTES-DYNAMIC','NOT_EVALUATED','Some expressions are unresolved; no blanket page approval',path,route,detail=p['unresolved'])
        all_nodes=nodes(roots,include_hidden=True); order={id(n):i for i,(n,a) in enumerate(all_nodes)}; cards=nodes(roots,'article',include_hidden=True)
        expected_ids={'source-'+c['local_key'] for c in target['references']}
        sections=[(n,a) for n,a in all_nodes if n.get('attrs',{}).get('id')=='sources-and-limits']
        check(len(sections)==1 and not hidden(*sections[0]),'G-ROUTES-SOURCE-SECTION','Required source section present and not explicitly hidden',path=path,route=route)
        for ref in target['references']:
            cid='source-'+ref['local_key'];kind=ref['source_kind'];kw={'path':path,'route':route,'card':cid,'source_type':kind}
            matches=[(n,a) for n,a in all_nodes if n.get('attrs',{}).get('id')==cid]
            if len(matches)!=1 or matches[0][0]['tag']!='article':emit('G-ID-CARD','WOULD_BLOCK','Missing, duplicated or non-card fragment target',**kw);continue
            n,a=matches[0];kw['line']=n['line']
            if hidden(n,a):emit('G-ID-CARD','WOULD_BLOCK','Source card explicitly hidden',**kw);continue
            if uncertain(n,a):emit('G-ID-CARD','NOT_EVALUATED','Dynamic card or ancestor cannot be projected safely',**kw);continue
            check(bool(sections) and sections[0][0] in a,'G-ROUTES-CARD-SECTION','Card belongs to the named source section',**kw)
            t=norm(text(n));links=hrefs(n);headings=nodes([n],'h3')
            check(len(headings)==1 and norm(text(headings[0][0]))==norm(ref['inherited_metadata']['title']), 'G-ID-TITLE','Title belongs to this source card',**kw)
            # Explicit display blocks, not substring presence elsewhere in the card.
            mapped=cf.fields(n,ref,text,hidden,uncertain,display_contract[(path,cid)])
            if 'error' in mapped:
                emit('G-ID-METADATA','NOT_EVALUATED',mapped['error'],**kw,field='bibliographic_blocks')
            else:
                for label,ok,observed,expected in mapped['rows']:
                    check(ok,'G-ID-METADATA','Exact accepted bibliographic display block' if ok else 'Bibliographic display block contradicts accepted field contract',
                          **kw,field=label,detail={'expected':expected,'observed':observed,'field_locations':mapped['field_locations']})
            got_pmids=re.findall(r'\bPMID\s*:\s*(\d+)\b',t)
            href_pmids=[m.group(1) for h in links if (m:=re.match(r'https://pubmed\.ncbi\.nlm\.nih\.gov/(\d+)/?$',h))]
            attrpmid=n.get('attrs',{}).get('data-source-pmid')
            observed=set(got_pmids+href_pmids+([attrpmid] if attrpmid else []))
            check(observed==({ref['pmid']} if ref['pmid'] else set()),'G-ID-PMID','PMID attributes, labels and links agree within the card',**kw)
            doi_labels=re.findall(r'\bDOI\s*:\s*(10\.\d{4,9}/[^\s<>]+)',t,re.I)
            doi_links=[h.split('doi.org/',1)[1] for h in links if re.match(r'https://(?:dx\.)?doi\.org/',h)]
            dois={d.lower().rstrip('.,;') for d in doi_labels+doi_links}
            check(dois==({ref['doi'].lower()} if ref.get('doi') else set()),'G-ID-DOI','DOI label or link accepted; official sources need neither identifier',**kw)
            if kind=='OFFICIAL_GUIDANCE_OR_CLASSIFICATION':check(not observed and not dois,'G-ID-OFFICIAL','Official guidance has no invented scholarly identifiers',**kw)
            expected_links={ref['source_url']}
            if ref.get('doi'):expected_links|={'https://doi.org/'+ref['doi'],'https://doi.org/'+ref['doi'].lower()}
            check(ref['source_url'] in links and set(links)<=expected_links,'G-ID-URL','Correct source link and no unrelated source link in this card',**kw)
            anchors=[v for v,anc in nodes(roots,'a') if v.get('attrs',{}).get('href')=='#'+cid]
            check(len(anchors)==1 and order[id(anchors[0])]<order[id(n)],'G-ID-FRAGMENT','One initial reference points to this later card',**kw)
            if 'error' in mapped:
                emit('G-SCOPE-CARD','NOT_EVALUATED',mapped['error'],**kw)
            elif mapped['hidden_scope_segment']:
                emit('G-SCOPE-CARD','WOULD_BLOCK','Scope group contains explicitly hidden content',**kw)
            else:
                assess_note(mapped['scope_node'],ref['inherited_metadata']['scope'],'G-SCOPE-CARD',path,route,card=cid)
            emit('G-REVIEW-USE','REVIEW_REQUIRED','Registered identity with new use' if ref['inherited_metadata']['existing'] else 'Documented intake candidate, not a missing-source error',
                 **kw,basis=ref['reference_key'],detail={'registry_member':ref['inherited_metadata']['existing'],'claim_support_approved':False})
        extras=[n.get('attrs',{}).get('id') for n,a in cards if ('data-source-key' in n.get('attrs',{}) or 'data-source-pmid' in n.get('attrs',{})) and n.get('attrs',{}).get('id') not in expected_ids]
        if extras:emit('G-ID-NEW-CARD','REVIEW_REQUIRED','Additional source cards require identity and scope review',path,route,detail=extras)
        for key,expected in [('data-neuvago-interpretation-note',target.get('interpretation_note')),('data-neuvago-care-note',target.get('care_guidance',{}))]:
            if not expected:continue
            ns=[(n,a) for n,a in all_nodes if key in n.get('attrs',{})]
            family='G-SCOPE-CARE' if 'care' in key else 'G-SCOPE-INTERPRETATION'
            if len(ns)!=1:emit(family,'WOULD_BLOCK','Required note missing or duplicated',path,route);continue
            note,a=ns[0];val=expected['text'] if isinstance(expected,dict) else expected
            parts=nodes([note],'p',include_hidden=True)
            body=parts[0][0] if isinstance(expected,dict) and len(parts)==1 else note
            body_anc=(*a,note) if body is not note else a
            assess_note(body,val,family,path,route,body_anc)
            if isinstance(expected,dict):check(hrefs(note)==[expected['url']],family+'-LINK','Care guidance link remains separate and preserved',path=path,route=route)
        emit('G-ROUTES-APPLICABILITY','REVIEW_REQUIRED','No automatic policy-to-route inference; explicit applicability remains open',path,route,basis='D7 policy-route-handoff.json')

    # Two explicit glossary data controls, not all 74 terms and not rendered pages.
    for path in GLOSSARY:
        p=projected.get(path);bproj=baseline_parsed.get(path) if baseline_parsed else project({path:base[path]},package,typescript)['files'][0]
        if not p or p['status']=='OPERATIONAL_ERROR':emit('G-ROUTES-GLOSSARY','OPERATIONAL_ERROR','Glossary data cannot be parsed',path);continue
        observed=p.get('glossary',[]);known=bproj.get('glossary',[])
        if len(observed)!=1 or len(known)!=1:emit('G-ROUTES-GLOSSARY','NOT_EVALUATED','Expected one explicit glossary control',path);continue
        r=observed[0];ok=r.get('sourceLinks')==known[0].get('sourceLinks') and bool(r.get('sourceLinks'))
        check(ok,'G-ROUTES-GLOSSARY','Declared internal sourceLinks preserved; no PMID/DOI requirement',path=path,route=r.get('path'),source_type='INTERNAL_SOURCE_LINKS')
        coverage.append({'path':path,'route':r.get('path'),'status':'EVALUATED_SINGLE_GLOSSARY_DATA_CONTROL','not_evaluated':['other terms','runtime route association']})

    # No review decision loader or approval writer is supplied in E1. Promotions require later design.
    reg_paths=[exp['claim_registry_rel'],exp['evidence_registry_rel'],exp['candidate_registry_rel']]
    docs={}
    for path in reg_paths:
        try:
            doc=strict_json(files[path]);old=strict_json(base[path]);docs[path]=doc
            if not isinstance(doc,dict):raise ValueError('Registry must be an object')
            coll='evidence' if path==exp['evidence_registry_rel'] else 'claims'
            if not isinstance(doc.get(coll),list) or not all(isinstance(v,dict) for v in doc[coll]):raise ValueError('Registry collection is missing or malformed')
            kind='evidence' if path==exp['evidence_registry_rel'] else 'canonical' if path==exp['claim_registry_rel'] else 'candidate'
            flags,new_pending=rc.promotion_checks(doc,old,kind)
            for finding in flags:
                emit('G-REVIEW-PROMOTION','WOULD_BLOCK',finding['reason'],path,source_type='REGISTRY',
                     record=finding['record_id'],field=finding['field'],detail=finding)
            if not flags:
                emit('G-REVIEW-PROMOTION','PASS_TECHNICAL_SCOPE','Known approval/status fields on new and existing rows validated by stable ID; no authorized promotion performed',path,source_type='REGISTRY')
            for rid in new_pending:
                if not any(f['record_id']==rid for f in flags):
                    emit('G-REVIEW-NEW-ROW','REVIEW_REQUIRED','New pending record; identity/intake is not approval',path,source_type='REGISTRY',record=rid)
            if doc!=old and not flags:emit('G-REVIEW-REGISTRY-CHANGE','REVIEW_REQUIRED','Registry content changed; no intake or link approval inferred',path,source_type='REGISTRY')
            if path==exp['evidence_registry_rel']:
                check(doc.get('quarantined_evidence')==old.get('quarantined_evidence'),'G-SCOPE-QUARANTINE','Historical quarantined objects preserved',path=path,source_type='HISTORY')
                checks=rc.canonical_identity_checks(doc,old)
                for finding in checks:
                    check(not finding['violations'],'G-ID-CANONICAL-IDENTITY','Canonical identity agrees with accepted identity contract' if not finding['violations'] else '; '.join(finding['violations']),
                          path=path,record=finding['record_id'],source_type='REGISTRY',detail=finding)
                check(not any(f['violations'] for f in checks),'G-ID-QUARANTINE','No duplicate or quarantined active canonical identity',path=path,source_type='REGISTRY')
        except (ValueError,KeyError,TypeError) as exc:emit('G-REVIEW-PARSER','OPERATIONAL_ERROR','Registry parsing failed',path,detail=str(exc))
    legacy=json.loads(base[exp['legacy_index_rel']])
    history=[l['file'] for l in legacy['locks']]+['docs/seo/evidence-operations/source-identity-review.v1.json',exp['legacy_index_rel']]
    for path in history:check(files.get(path)==base[path],'G-SCOPE-HISTORY','Immutable reviewed history unchanged',path=path,source_type='HISTORICAL_REVIEW')
    # Only active card data/links trigger a quarantined-source block; quoted/commented history is not active use.
    eq=json.loads(base[exp['evidence_registry_rel']])
    qpmids={e['original_record']['pmid'] for e in eq.get('quarantined_evidence',[]) if e.get('original_record',{}).get('pmid')}
    for path in route_by_path:
        pp=projected.get(path,{})
        for n,anc in nodes(pp.get('roots',[]),'article'):
            for q in qpmids:
                label=bool(re.search(r'\bPMID\s*:\s*'+re.escape(q)+r'\b',norm(text(n))))
                url=any(re.search(r'pubmed\.ncbi\.nlm\.nih\.gov/'+re.escape(q)+r'/?$',h) for h in hrefs(n))
                if label or url:emit('G-ID-QUARANTINED-USE','WOULD_BLOCK','Quarantined identity in visible source card',path,route_by_path[path]['route'],card=n.get('attrs',{}).get('id'),line=n.get('line'),detail=q)

    # Every changed path is recorded, even if outside the static pilot representation.
    changed=meta.get('changed_paths',[])
    for path in changed:
        if path in route_by_path:
            emit('G-SCOPE-TEXT-CHANGE','REVIEW_REQUIRED','Changed public source: no match to a policy is not automatic permission',path,route_by_path[path]['route'])
        elif path not in reg_paths and path not in history and path not in GLOSSARY:
            emit('G-ROUTES-OUTSIDE','NOT_EVALUATED','Changed input outside supported pilot; route impact unresolved',path)
            emit('G-SCOPE-UNMAPPED-CHANGE','REVIEW_REQUIRED','Out-of-scope change needs mapping/review before later activation',path)
            coverage.append({'path':path,'route':None,'status':'NOT_EVALUATED','reason':'Changed file outside declared rules'})
    if meta.get('read_errors'):
        for er in meta['read_errors']:emit('G-LIFECYCLE-READ','OPERATIONAL_ERROR','Failed input read remains visible',er['path'],detail=er['error'])
    emit('G-LIFECYCLE-BINDING','PASS_TECHNICAL_SCOPE','Result bound to selected phase, blob inventory, contract and rule bytes',detail={'phase':phase,'selected_commit':meta.get('selected_commit')})
    if phase in {'index','worktree'} and meta.get('index_worktree_disagreements'):
        emit('G-LIFECYCLE-MIXED-STAGING','WOULD_BLOCK','Index/worktree disagree; index findings still read index bytes',detail=meta['index_worktree_disagreements'])
    elif phase in {'index','worktree'} and meta.get('staged_paths_vs_base') and any(r['xy'][1]!=' ' for r in meta.get('status_records',[])):
        emit('G-LIFECYCLE-PARTIAL-STAGING','WOULD_BLOCK','Staged and unstaged changes coexist')
    else:emit('G-LIFECYCLE-STAGING','PASS_TECHNICAL_SCOPE','No mixed-staging conflict in selected phase')
    for path in sorted(set(files)-set(route_by_path)-set(GLOSSARY)-set(reg_paths)-set(history)):
        coverage.append({'path':path,'route':None,'status':'NOT_EVALUATED','reason':'Byte-preservation preflight only; no new semantic rule applied'})
    for path in meta.get('outside_locked_inventory',[]):
        if path not in changed:coverage.append({'path':path,'route':None,'status':'NOT_EVALUATED','reason':'Outside allowlisted content; bytes not collected'})
    counts=Counter(r['technical_result'] for r in rows)
    return {'schema':VERSION,'execution_status':'ERROR' if counts['OPERATIONAL_ERROR'] else 'COMPLETE',
            'mode':'SHADOW_REPORT_ONLY','phase':phase,'snapshot':meta,'rules_sha256':rules_sha,
            'typescript_parser_version':ast['typescript_version'],'typescript_module_sha256':compiler_sha,'representation':'STATIC_AST_PROJECTION_NOT_RUNTIME_HTML',
            'rule_observations':rows,'coverage':coverage,'summary':{'observations':len(rows),'by_result':dict(counts),'declared_routes':len(ledger['routes']),
            'expected_source_cards':sum(r['expected_cards'] for r in ledger['routes']),'changed_paths':len(changed),'scientific_claim_support_approved':False},
            'approved_links':0,'release_ready':False,'enforcement_gates_installed':False,'claim_support_review_complete':False,
            'full_corpus_source_integrity_verified':False,'production_verified':False,'visual_layout_verified':False}


def binding_matches(report,snap,package,typescript):
    return (report.get('phase')==snap['meta']['phase']
        and report.get('snapshot',{}).get('snapshot_fingerprint')==snap['meta']['snapshot_fingerprint']
        and report.get('rules_sha256')==rule_fingerprint(package)
        and report.get('typescript_module_sha256')==g.sha(Path(typescript).read_bytes()))
