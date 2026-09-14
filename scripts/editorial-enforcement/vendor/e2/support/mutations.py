"""In-memory fault demonstrations. No file writes to the inspected repository.
Expected outcomes are explicit per case, not inferred from the rule engine result.
"""
from __future__ import annotations
import copy,hashlib,json,re
import readonly_guard as g
import shadow as s

def memory_snapshot(files,base,phase='isolated_mutation',changed_extra=()):
    hashes={p:g.sha(b) for p,b in sorted(files.items())}
    changed=sorted(set(p for p in set(base)|set(files) if base.get(p)!=files.get(p))|set(changed_extra))
    meta={'phase':phase,'selected_commit':None,'observed_head':None,'file_sha256':hashes,
        'blob_oids':{p:hashlib.sha1(b'blob '+str(len(b)).encode()+b'\0'+b).hexdigest() for p,b in files.items()},
        'changed_paths':changed,'read_errors':[],'input_origin':'ISOLATED_MEMORY_NOT_USER_WORKTREE'}
    meta['snapshot_fingerprint']=g.sha(g.encode(meta));return {'files':files,'meta':meta}

def specs(package):
    ledger=s.load(package/'reference/delivery-ledger.json')['routes'];exp=s.load(package/'support/expected-state.json')
    p=ledger[0]['path'];r=ledger[3]['path'];o=ledger[9]['path'];ref=ledger[0]['references'][0];bref=ledger[3]
    cases=[]
    def add(name,rule,status,fn,description):cases.append({'name':name,'rule':rule,'expected':status,'mutate':fn,'description':description})
    def replace(path,old,new,count=1):
        def fn(f):
            oldb=old.encode();g.require(oldb in f[path],'Fault fixture anchor absent: '+path);f[path]=f[path].replace(oldb,new.encode(),count)
        return fn
    def reg(path,fn):
        def change(f):
            d=json.loads(f[path]);fn(d);f[path]=g.encode(d)
        return change
    def card_attr(path,attrs):
        return replace(path,'<article\n','<article '+attrs+'\n')
    def remove_marked(path,mark):
        def fn(f):
            t=f[path].decode();pat=r'<(div|aside|p)\b[^>]*'+re.escape(mark)+r'[^>]*>.*?</\1>'
            t,n=re.subn(pat,'',t,count=1,flags=re.S);g.require(n==1,'Missing marked note fixture');f[path]=t.encode()
        return fn
    add('baseline','G-ID-PMID','PASS_TECHNICAL_SCOPE',lambda f:None,'Accepted cards with no automatic claim approval')
    add('official_without_identifiers','G-ID-OFFICIAL','PASS_TECHNICAL_SCOPE',lambda f:None,'Official cards do not require scholarly identifiers')
    add('internal_glossary_sources','G-ROUTES-GLOSSARY','PASS_TECHNICAL_SCOPE',lambda f:None,'Two explicitly scoped glossary data examples')
    add('doi_link_alternative','G-ID-DOI','PASS_TECHNICAL_SCOPE',replace(p,'<span className="break-all">DOI: 10.5688/aj710478</span>','<a href="https://doi.org/10.5688/aj710478">DOI link</a>'),'Same DOI as explicit hyperlink instead of labelled text')
    add('wrong_pmid_link','G-ID-PMID','WOULD_BLOCK',replace(p,'https://pubmed.ncbi.nlm.nih.gov/17786266/','https://pubmed.ncbi.nlm.nih.gov/1660159/'),'PMID from another card cannot borrow its identity')
    add('wrong_doi','G-ID-DOI','WOULD_BLOCK',replace(p,'DOI: 10.5688/aj710478','DOI: 10.1037/0033-295x.98.4.459'),'DOI from another card')
    add('wrong_card_title','G-ID-TITLE','WOULD_BLOCK',replace(p,ref['inherited_metadata']['title'],'A different study'),'Title belongs to same card')
    add('wrong_source_url','G-ID-URL','WOULD_BLOCK',replace(p,ref['source_url'],'https://example.invalid/unrelated'),'Unexpected link rejected')
    add('missing_target_card','G-ID-CARD','WOULD_BLOCK',replace(p,'id="source-17786266"','id="unrelated-card"'),'Initial reference loses its target')
    add('broken_initial_fragment','G-ID-FRAGMENT','WOULD_BLOCK',replace(p,'href="#source-17786266"','href="#source-missing"'),'Broken initial fragment')
    add('duplicate_card_id','G-ID-CARD','WOULD_BLOCK',replace(p,'id="source-1660159"','id="source-17786266"'),'Duplicate fragment IDs cannot pass')
    add('hidden_source_card','G-ID-CARD','WOULD_BLOCK',replace(p,'id="source-17786266"','hidden id="source-17786266"'),'Explicit hidden card')
    add('script_does_not_supply_card','G-ID-CARD','WOULD_BLOCK',replace(p,'id="source-17786266"','style={{display: "none"}} id="source-17786266"'),'Inline hidden source rejected')
    add('unknown_card_attributes','G-ID-CARD','NOT_EVALUATED',replace(p,'id="source-17786266"','{...unknownAttributes} id="source-17786266"'),'Unknown dynamic attributes not passed')
    add('official_fake_pmid','G-ID-OFFICIAL','WOULD_BLOCK',replace(o,'"pmid": null','"pmid": "17786266"'),'Do not invent research identifiers for guidance')
    add('official_fake_doi','G-ID-OFFICIAL','WOULD_BLOCK',replace(o,'"doi": null','"doi": "10.5688/aj710478"'),'Official card with fabricated DOI')
    add('scope_wording_changed','G-SCOPE-CARD','REVIEW_REQUIRED',replace(p,ref['inherited_metadata']['scope'],'Updated explanatory scope awaiting review.'),'Legitimate new wording requires a new scoped review, not permanent edit ban')
    add('scope_appended_contradiction','G-SCOPE-CARD','REVIEW_REQUIRED',replace(p,ref['inherited_metadata']['scope'],ref['inherited_metadata']['scope']+' This proves every product outcome.'),'Keeping old words plus new claim cannot silently inherit approval')
    add('scope_removed','G-SCOPE-CARD','WOULD_BLOCK',replace(p,ref['inherited_metadata']['scope'],''),'Blank scope must be detected')
    add('interpretation_removed','G-SCOPE-INTERPRETATION','WOULD_BLOCK',remove_marked(r,'data-neuvago-interpretation-note'),'Missing required interpretation note')
    add('care_removed','G-SCOPE-CARE','WOULD_BLOCK',remove_marked(r,'data-neuvago-care-note'),'Missing required care guidance')
    add('care_hidden','G-SCOPE-CARE','WOULD_BLOCK',replace(r,'data-neuvago-care-note','hidden data-neuvago-care-note'),'Guidance hidden in source')
    add('care_aria_hidden','G-SCOPE-CARE','WOULD_BLOCK',replace(r,'data-neuvago-care-note','aria-hidden="true" data-neuvago-care-note'),'Aria-hidden guidance cannot satisfy baseline')
    add('care_link_changed','G-SCOPE-CARE-LINK','WOULD_BLOCK',replace(r,bref['care_guidance']['url'],'https://example.invalid/sales'),'Guidance link must not become sales link')
    add('care_wording_changed','G-SCOPE-CARE','REVIEW_REQUIRED',replace(r,bref['care_guidance']['text'],'New guidance wording pending review.'),'New wording cannot inherit old review')
    add('quarantined_source_reuse','G-ID-QUARANTINED-USE','WOULD_BLOCK',replace(p,ref['source_url'],'https://pubmed.ncbi.nlm.nih.gov/12490959/'),'Quarantined identity used as active source')
    add('quoted_quarantine_comment','G-ID-PMID','PASS_TECHNICAL_SCOPE',replace(p,'export default function','// Historical ID 12490959 is not an active source.\nexport default function'),'Comment is not active evidence use')
    cp,ep,lp=[exp[k] for k in ['claim_registry_rel','evidence_registry_rel','candidate_registry_rel']]
    add('claim_approval_array','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(cp,lambda d:d['claims'][0].update(evidence_ids=['EVD-PMID-17786266'])),'No unauthorized canonical evidence link')
    add('evidence_approval_array','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(ep,lambda d:d['evidence'][0].update(claim_ids=['CLM-UNREVIEWED'])),'No unsupported claim link on evidence')
    add('candidate_approval_array','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(lp,lambda d:d['claims'][0].update(approved_evidence_ids=['EVD-PMID-17786266'])),'No candidate promotion')
    add('directness_promotion','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(ep,lambda d:d['evidence'][0].update(directness='PROVEN_PRODUCT_EFFECT')),'Study directness is not automatically product evidence')
    add('tier_as_certainty','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(ep,lambda d:d['evidence'][0].update(evidence_tier_basis='HIGH_CERTAINTY_PROVEN_EFFECT')),'Method bucket not certainty grade')
    add('release_flag_promotion','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(ep,lambda d:d.update(release_ready=True)),'Technical PASS does not release content')
    add('claim_complete_promotion','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(cp,lambda d:d.update(claim_support_review_complete=True)),'No full scientific approval')
    add('history_quarantine_deleted','G-SCOPE-QUARANTINE','WOULD_BLOCK',reg(ep,lambda d:d.update(quarantined_evidence=[])),'Quarantine history cannot disappear')
    add('active_duplicate_id','G-ID-QUARANTINE','WOULD_BLOCK',reg(ep,lambda d:d['evidence'].append(copy.deepcopy(d['evidence'][0]))),'Duplicate active record')
    add('active_quarantine_record','G-ID-QUARANTINE','WOULD_BLOCK',reg(ep,lambda d:d['evidence'].append(copy.deepcopy(d['quarantined_evidence'][0]['original_record']))),'Historical excluded record cannot silently become active')
    hist='docs/seo/evidence-operations/source-identity-review.v1.json'
    add('review_history_changed','G-SCOPE-HISTORY','WOULD_BLOCK',lambda f:f.update({hist:f[hist]+b'\n'}),'Historical review file immutable in pilot')
    add('new_explanation_no_lexical_policy','G-SCOPE-TEXT-CHANGE','REVIEW_REQUIRED',replace(p,'<main','<main data-new-explanation="new proposition"'),'Changed content recorded even without lexical match')
    add('unknown_changed_route','G-ROUTES-OUTSIDE','NOT_EVALUATED',lambda f:f.update({'src/app/(en)/new-topic/page.tsx':b'new text'}),'Unknown route cannot disappear from coverage')
    add('missing_declared_input','G-ROUTES-TARGET','WOULD_BLOCK',lambda f:f.pop(p),'Missing route cannot report success')
    add('invalid_tsx','G-LIFECYCLE-PARSER','OPERATIONAL_ERROR',lambda f:f.update({p:b'export default function page( { <invalid'}),'Malformed TSX has an operational outcome')
    add('invalid_utf8','G-LIFECYCLE-PARSER','OPERATIONAL_ERROR',lambda f:f.update({p:b'\xff\xfe'}),'Unreadable text not treated as no sources')
    add('invalid_registry','G-REVIEW-PARSER','OPERATIONAL_ERROR',lambda f:f.update({cp:b'{invalid'}),'Malformed registry cannot be approved')
    add('registry_metadata_edit','G-REVIEW-REGISTRY-CHANGE','REVIEW_REQUIRED',reg(ep,lambda d:d['evidence'][0].update(title='Revised bibliographic title pending review')),'Metadata change requires identity review')
    return cases

def run_matrix(package,typescript,base=None):
    base=base or s.fixture(package);ledger=s.load(package/'reference/delivery-ledger.json')['routes']
    public={r['path'] for r in ledger}|set(s.GLOSSARY)
    proj=s.project({p:base[p] for p in public},package,typescript);bp={v['path']:v for v in proj['files']}
    rows=[]
    for spec in specs(package):
        f=dict(base);spec['mutate'](f);snap=memory_snapshot(f,base)
        changed={p for p in public if f.get(p)!=base.get(p)}
        parsed=copy.deepcopy(proj)
        parsed['files']=[v for v in parsed['files'] if v['path'] not in changed]
        if any(p in f for p in changed):parsed['files'].extend(s.project({p:f[p] for p in changed if p in f},package,typescript)['files'])
        report=s.analyze(snap,package,typescript,base,parsed,bp)
        target_paths=set(snap['meta']['changed_paths'])
        target_card=None
        if spec['name']=='official_without_identifiers':target_paths={ledger[9]['path']};target_card='source-who-anxiety'
        elif spec['name']=='internal_glossary_sources':target_paths={s.GLOSSARY[0]}
        elif spec['name'] in {'baseline','doi_link_alternative','quoted_quarantine_comment'}:target_paths={ledger[0]['path']};target_card='source-17786266'
        elif spec['rule'].startswith('G-ID') and ledger[0]['path'] in target_paths and spec['rule'] not in {'G-ID-QUARANTINE'}:target_card='source-17786266'
        elif spec['rule']=='G-SCOPE-CARD':target_card='source-17786266'
        matching=[v for v in report['rule_observations'] if v['rule_id']==spec['rule'] and v['technical_result']==spec['expected']
            and v['input_phase']==snap['meta']['phase'] and v['source_locator']['file'] in target_paths
            and (target_card is None or v['source_locator'].get('card_id')==target_card)]
        unexpected=[v for v in report['rule_observations'] if v['technical_result'] in {'WOULD_BLOCK','OPERATIONAL_ERROR'}] if spec['expected']=='PASS_TECHNICAL_SCOPE' else []
        ok=bool(matching) and not unexpected
        rows.append({'case_id':spec['name'],'description':spec['description'],'expected_rule':spec['rule'],'expected_result':spec['expected'],'expected_paths':sorted(target_paths),'expected_card_id':target_card,
          'demonstrated':ok,'matching_observations':matching,'observed_result_counts':report['summary']['by_result'],
          'unexpected_for_positive_control':unexpected,'mutation_input_sha256':snap['meta']['snapshot_fingerprint'],
          'execution_context':'ISOLATED_IN_MEMORY_NOT_USER_REPOSITORY','user_source_mutated':False})
    return {'schema':'neuvago-1e4e1-fault-demonstrations-v1','cases':rows,'total':len(rows),
        'passed':sum(r['demonstrated'] for r in rows),'failed':[r['case_id'] for r in rows if not r['demonstrated']],
        'rules_sha256':s.rule_fingerprint(package),'typescript_version':proj['typescript_version'],
        'real_user_repository_faults_injected':False,'release_ready':False}
