#!/usr/bin/env python3
"""R4: reviewed source identities and exact local/staged/committed lifecycle audit.
No network, no source writes, and no claim-evidence approval in this module.
"""
from __future__ import annotations
import argparse, collections, copy, hashlib, json, re, subprocess
from pathlib import Path

BASELINE='e9dcc1efbc0096d58e100d95756f1b6c9b5c95b3'
CLAIM_SHA='d389f9e9a320d05a27392575471875f306bccedf8ec6668ac7a1080ece084078'
TRACEY='src/app/(en)/research/studies/inflammatory-reflex-tracey-2002/page.tsx'
TARGET='src/content/knowledge/no/articles/det-parasympatiske-nervesystemet.ts'
ROOT='docs/seo/evidence-operations/'
INFRA={ROOT+x for x in ['evidence-registry.schema.v1.json','evidence-registry.v1.json','claim-evidence-link-candidates.v1.json','search-dominance-1e4c-evidence-registry-linkage-v1.md']}|{'scripts/search-dominance-1e4c-evidence-registry-build.py','scripts/search-dominance-1e4c-evidence-registry-audit.py'}
OLD_DOI='10.1007/s12471-015-0688-y'
OLD_AUTHORS='Karemaker JM'
NEW_AUTHORS='Bootsma M, Swenne CA, Janssen MJ, Manger Cats V, Schalij MJ'
TITLE='Heart rate variability and sympathovagal balance: pharmacological validation'
ORPHAN_ID='EVD-DOI-F1A3EC9A00D4'

def require(ok, message):
    if not ok: raise ValueError(message)

def sha(data): return hashlib.sha256(data).hexdigest()
def git(repo,*args): return subprocess.check_output(['git','-C',str(repo),*args])
def scalar(repo,*args): return git(repo,*args).decode().strip()
def encode(doc): return (json.dumps(doc,ensure_ascii=False,indent=2)+'\n').encode()

def status_records(repo):
    entries=git(repo,'status','--porcelain=v1','-z','--untracked-files=all').split(b'\0')
    rows=[]
    for entry in entries:
        if not entry: continue
        require(len(entry)>=4 and entry[2:3]==b' ', 'Malformed Git porcelain entry')
        xy=entry[:2].decode('ascii'); path=entry[3:].decode('utf-8','surrogateescape')
        require(not any(c in xy for c in 'RC'), 'Rename/copy is outside this recovery contract')
        rows.append((xy,path))
    require(len(rows)==len({p for _,p in rows}), 'Duplicate Git status paths')
    return rows

def object_ranges(text):
    """Brace spans ignoring quoted strings and comments; no TypeScript execution."""
    stack=[]; spans=[]; i=0; n=len(text)
    while i<n:
        c=text[i]
        if text.startswith('//',i):
            j=text.find('\n',i+2); i=n if j<0 else j+1; continue
        if text.startswith('/*',i):
            j=text.find('*/',i+2); require(j>=0,'Unclosed block comment'); i=j+2; continue
        if c in '\"\'`':
            q=c; i+=1
            while i<n:
                if text[i]=='\\': i+=2; continue
                if text[i]==q: i+=1; break
                i+=1
            else: raise ValueError('Unclosed string literal')
            continue
        if c=='{': stack.append(i)
        elif c=='}':
            require(bool(stack),'Unmatched closing brace'); spans.append((stack.pop(),i+1))
        i+=1
    require(not stack,'Unmatched opening brace')
    return spans

def quoted_field(block, name):
    pat=re.compile(r'(?m)^[ \t]*'+re.escape(name)+r'[ \t]*:[ \t\r\n]*(?P<q>[\"\'])(?P<v>[^\r\n]*?)(?P=q)[ \t]*,?[ \t]*\r?$')
    found=list(pat.finditer(block)); require(len(found)==1, f'Expected one {name} property inside source card, got {len(found)}')
    return found[0]

def target_span(text):
    # The identifier may legitimately occur in both URL and pmid fields.
    # Select the innermost object with the explicit pmid property, not line counts.
    pat=re.compile(r'(?m)^[ \t]*pmid[ \t]*:[ \t]*([\"\'])25696224\1[ \t]*,?[ \t]*\r?$')
    candidates=[(a,b) for a,b in object_ranges(text) if pat.search(text[a:b])]
    leaves=[(a,b) for a,b in candidates if not any(a<c and d<b for c,d in candidates)]
    require(len(leaves)==1, f'Expected exactly one source object with pmid 25696224, got {len(leaves)}')
    a,b=leaves[0]; block=text[a:b]
    require(quoted_field(block,'title').group('v')==TITLE,'Target source title does not match approved repair')
    require(quoted_field(block,'url').group('v')=='https://pubmed.ncbi.nlm.nih.gov/25696224/','Target URL and PMID do not identify the same record')
    require(quoted_field(block,'pmid').group('v')=='25696224','Target PMID mismatch')
    return a,b

def repair_source(original):
    a,b=target_span(original); block=original[a:b]
    am=quoted_field(block,'authors'); dm=quoted_field(block,'doi')
    ym=list(re.finditer(r'(?m)^[ \t]*year[ \t]*:[ \t]*(?P<v>\d{4})[ \t]*,?[ \t]*\r?$',block))
    require(len(ym)==1,'Expected one numeric year property in target card'); ym=ym[0]
    require(am.group('v')==OLD_AUTHORS,'Unexpected author value in baseline card')
    require(ym.group('v')=='2015','Unexpected year value in baseline card')
    require(dm.group('v')==OLD_DOI,'Unexpected DOI value in baseline card')
    # Remove the property, not a global string occurrence; no empty DOI is left.
    ds=dm.start(); de=dm.end()
    if de<len(block) and block[de]=='\n': de+=1
    edits=[(am.start('v'),am.end('v'),NEW_AUTHORS),(ym.start('v'),ym.end('v'),'2003'),(ds,de,'')]
    repaired=block
    for s,e,value in sorted(edits,reverse=True): repaired=repaired[:s]+value+repaired[e:]
    result=original[:a]+repaired+original[b:]
    require(OLD_DOI not in repaired,'DOI was not removed from the target card')
    require(original[:a]==result[:a] and original[b:]==result[a+len(repaired):],'Content outside source card changed')
    return result, {'source_card_start_line':original.count('\n',0,a)+1,'source_card_end_line':original.count('\n',0,b)+1,'fields_changed':['authors','year','doi (property removed)'],'id_and_note_preserved':True,'new_doi_value':None}

# Match the R1 builder's marker rules exactly for provenance updates.
PMID_RE=re.compile(r'\bPMID\s*[:#]?\s*(\d{5,9})\b',re.I)
URL_RE=re.compile(r'https?://(?:pubmed\.ncbi\.nlm\.nih\.gov|www\.ncbi\.nlm\.nih\.gov/pubmed)/(\d{5,9})/?',re.I)
DOI_RE=re.compile(r'\b10\.\d{4,9}/[-._;()/:A-Z0-9]+',re.I)
def marker_lines(text):
    d=collections.defaultdict(list)
    for line_no,line in enumerate(text.splitlines(),1):
        seen=set()
        for kind,pat in [('PMID',PMID_RE),('PUBMED_URL',URL_RE),('DOI',DOI_RE)]:
            for m in pat.finditer(line):
                value=m.group(1) if kind!='DOI' else re.sub(r'/(?:full|abstract|pdf)$','',m.group(0).rstrip('.,;'),flags=re.I).lower()
                key=(kind,value)
                if key not in seen: seen.add(key); d[key].append(line_no)
    return d


HRV='src/content/knowledge/no/articles/hrv.ts'
HRV_BEFORE_SHA='499c9c36258a3de5470940e58842caf0150fb69970045256d0e4c7df5965fcf6'
LEDGER_REL=ROOT+"source-identity-review.v1.json"
INFRA=INFRA|{LEDGER_REL}
LOCKED_1E4B={'docs/seo/evidence-operations/README.md': '8159a5f36f9a5e56fca5654ba5714e1d92f58fe031d6c7f79e4596419e31a632', 'docs/seo/evidence-operations/legacy-source-lock-index.v1.json': '688ee93d63d81ecbab7065b71b9f8a5fac7b293961b8dbea91e6139b7b1e3994', 'docs/seo/evidence-operations/claim-registry.v1.json': 'd389f9e9a320d05a27392575471875f306bccedf8ec6668ac7a1080ece084078', 'docs/seo/evidence-operations/search-dominance-1e4b-canonical-claim-registry-v1.md': '8e007e3271011f53fc706d54085e003a1046cbb20f21b6516cb49133b01ee540', 'docs/seo/evidence-operations/claim-registry.schema.v1.json': '11c44446af8f5baad0aa14e0069ca36ce333b8e3298aa537035dcd937c9e0522', 'scripts/search-dominance-1e4b-claim-registry-audit.py': 'de45f994fe5256d555a0881dece6ad0b9ee48c5da0e709a1e368385131695adf'}
EXPECTED_ARTIFACT_HASHES={'docs/seo/evidence-operations/evidence-registry.v1.json': '6a4286e67507173ed5e97462f5759a924119ab09a53f314d18372007006a7dba', 'docs/seo/evidence-operations/source-identity-review.v1.json': 'd054c44b26a52d65e20e571bb3121e884ad5822e53d0871ac479bb4c699ec323', 'docs/seo/evidence-operations/claim-evidence-link-candidates.v1.json': 'e263451b63fe9a0f051a6b09c88e83e3728b912161d7264e46988321ac01a348', 'docs/seo/evidence-operations/evidence-registry.schema.v1.json': '0f526b2885f2f1ce4aea74119f64784eccde4369ad1eb958d514994256ef81fa'}

def proximity_candidates(evidence):
    """Discovery only. Nearby lines do not prove membership of one source card."""
    pm=collections.defaultdict(list); dm=collections.defaultdict(list)
    for e in evidence:
        for p in e.get('provenance',[]):
            row=(int(p['line']),e['evidence_id'],p['value'])
            if p['kind'] in {'PMID','PUBMED_URL'}: pm[p['file']].append(row)
            elif p['kind']=='DOI': dm[p['file']].append(row)
    result=[]
    for f in sorted(set(pm)|set(dm)):
        for pl,pi,pv in pm[f]:
            for dl,di,dv in dm[f]:
                if abs(pl-dl)<=3 and pi!=di:
                    result.append({'file':f,'pmid_line':pl,'pmid_value':pv,'pmid_evidence_id':pi,'doi_line':dl,'doi_value':dv,'doi_evidence_id':di,'classification':'PROXIMITY_CANDIDATE_NOT_CONFIRMED_CONFLICT','review_status':'OPEN_REQUIRES_SOURCE_CARD_REVIEW'})
    return result



def hrv_source_span(text):
    """Match one innermost source card, never a substring count or a broad window."""
    selector=re.compile(r"(?m)^[ \t]*id\s*:\s*([\"'])petek-2023-wearables\1\s*,?\s*$")
    spans=[(a,b) for a,b in object_ranges(text) if selector.search(text[a:b])]
    leaves=[(a,b) for a,b in spans if not any(a<c and d<b for c,d in spans)]
    require(len(leaves)==1,'Expected one Petek source card; ambiguous or missing source identity')
    a,b=leaves[0];card=text[a:b]
    expected={
      'id':'petek-2023-wearables',
      'authors':'Petek BJ, Al-Alusi MA, Moulson N, et al.',
      'title':'Consumer Wearable Health and Fitness Technology in Cardiovascular Medicine: JACC State-of-the-Art Review',
      'publication':'Journal of the American College of Cardiology',
      'doi':'10.1016/j.jacc.2023.04.054',
      'pmid':'37438083',
      'url':'https://pubmed.ncbi.nlm.nih.gov/37438083/'
    }
    for k,v in expected.items():require(quoted_field(card,k).group('v')==v,'Unexpected Petek source field '+k)
    year=re.findall(r'(?m)^[ \t]*year\s*:\s*(\d{4})\s*,?\s*$',card)
    require(year==['2023'],'Petek year mismatch')
    return a,b

def repair_hrv(original):
    a,b=hrv_source_span(original);card=original[a:b];fixed=card
    replacements=[]
    for field,value in [('url','https://pubmed.ncbi.nlm.nih.gov/37438010/'),('pmid','37438010')]:
        m=quoted_field(card,field);replacements.append((m.start('v'),m.end('v'),value))
    for start,end,value in sorted(replacements,reverse=True):fixed=fixed[:start]+value+fixed[end:]
    require(len(fixed)==len(card) and fixed.count('\n')==card.count('\n'),'Unexpected source length/line shift')
    output=original[:a]+fixed+original[b:]
    require(output[:a]==original[:a] and output[b:]==original[b:],'Outside-card mutation')
    return output,{'source_card_start_line':original.count('\n',0,a)+1,
                   'source_card_end_line':original.count('\n',0,b)+1,
                   'fields_changed':['url','pmid'],'other_source_card_fields_preserved':True,
                   'old_pmid':'37438083','new_pmid':'37438010'}

def regular_file(repo,rel):
    require(not Path(rel).is_absolute() and '..' not in Path(rel).parts,'Unsafe repository path')
    current=repo
    for part in Path(rel).parts:
        current=current/part; require(not current.is_symlink(),'Internal symlink outside contract: '+rel)
    require(current.is_file(),'Missing regular file '+rel)
    return current

def validate_documents(ev,links,claim,ledger):
    evidence=ev['evidence'];rows=links['claims'];canonical=claim['claims']
    require(len(evidence)==172,'Expected 172 active evidence records')
    ids=[e['evidence_id'] for e in evidence]
    require(len(ids)==len(set(ids)),'Duplicate active evidence identity')
    counts=collections.Counter(e['source_type'] for e in evidence)
    pmids=[e['pmid'] for e in evidence if e.get('pmid')]
    require(len(pmids)==len(set(pmids))==170,'Active PubMed count/uniqueness failed')
    require(counts=={'PUBMED_ARTICLE':169,'PUBMED_BOOK_ARTICLE':1,'CROSSREF_DOI_WORK':2},'Active source-type counts changed')
    by={e['evidence_id']:e for e in evidence}
    require('EVD-PMID-37438083' not in by,'Unrelated PMID remains active')
    require(by['EVD-PMID-37438010']['doi']=='10.1016/j.jacc.2023.04.054','Petek canonical DOI mismatch')
    require(by['EVD-PMID-37438010']['authors'][0]=='Petek BJ','Petek author identity mismatch')
    require(by['EVD-PMID-12490958']['doi']=='10.1038/nature01321','Tracey identity drift')
    require(by['EVD-PMID-30725856']['source_type']=='PUBMED_BOOK_ARTICLE','StatPearls identity drift')
    require(by['EVD-PMID-42578005']['doi']=='10.3389/fneur.2026.1842386','Frontiers identity drift')
    require(by['EVD-PMID-25696224']['publication_year']==2003 and by['EVD-PMID-25696224']['doi'] is None,'Bootsma identity drift')
    for e in evidence:
        require(e['provenance'],'Active identity lacks provenance')
        require(not e.get('claim_ids') and e['directness']=='PENDING_CLAIM_REVIEW','Evidence claim approval/directness changed')
    q=ev.get('quarantined_evidence',[])
    require(len(q)==2 and q[0]['evidence_id']=='EVD-PMID-37438083','Missing exact historical quarantine')
    require(q[0]['original_record']['pmid']=='37438083' and not q[0]['active_claim_eligible'] and not q[0]['global_pmid_alias_created'],'Quarantine/identity semantics changed')
    require(len(q[0]['original_record']['provenance'])==2,'Quarantine lost original provenance')
    require('EVD-PMID-12490959' not in by,'Unrelated Tracey hyperlink record remains active')
    q2=q[1]
    require(q2['evidence_id']=='EVD-PMID-12490959' and not q2['active_claim_eligible'] and not q2['global_pmid_alias_created'],'R4 historical quarantine semantics changed')
    require(sha(encode(q2['original_record']))=='b464d5aca60bfd12f6a108031082e04832d7669cc5bc3372d99094db9264ecc1','R4 original quarantined metadata/provenance changed')
    extra=ledger.get('supplemental_source_link_reviews',[])
    require(len(extra)==1 and extra[0]['review_id']=='SID-1E4C-003','Missing scoped Tracey hyperlink review')
    require(extra[0]['from_pmid']=='12490959' and extra[0]['to_pmid']=='12490958' and extra[0]['source_lines']==[290,425],'Unexpected supplemental link identity')
    require(not extra[0]['human_approval'] and not extra[0]['scientific_claim_support_approved'],'Unapproved supplemental claim/human status')
    moved=[p for p in by['EVD-PMID-12490958']['provenance'] if p['file']==TRACEY and p['kind']=='PUBMED_URL']
    require({(p['line'],p['value']) for p in moved}=={(290,'12490958'),(425,'12490958')},'Tracey corrected provenance is incomplete')
    require(len(canonical)==len(rows)==117,'Canonical/candidate count mismatch')
    require(not any(c.get('evidence_ids') for c in canonical),'Canonical links promoted')
    require({c['claim_id'] for c in canonical}=={r['claim_id'] for r in rows},'Candidate claim set differs')
    meanings={'ALLOWED_WITH_QUALIFIERS':'POTENTIAL_SUPPORT_REQUIRES_REVIEW','NOT_ALLOWED':'BOUNDARY_CONTEXT_REQUIRES_REVIEW','PROHIBITED':'BOUNDARY_CONTEXT_REQUIRES_REVIEW','SAFETY_BOUNDARY':'SAFETY_CONTEXT_REQUIRES_REVIEW'}
    for row in rows:
        pool=set(row['source_pool_evidence_ids']);cand=set(row['candidate_evidence_ids'])
        require(cand<=pool<=set(ids),'Unknown/quarantined reference in claim candidate pool')
        require(not row['approved_evidence_ids'],'Candidate link auto-approved')
        require(row['candidate_relationship']==meanings[row['policy']],'Wrong support/boundary relationship')
        require({x['evidence_id'] for x in row['candidate_evidence']}==cand,'Candidate object/ID mismatch')
    totals=(sum(bool(r['source_pool_evidence_ids']) for r in rows),sum(bool(r['candidate_evidence_ids']) for r in rows),sum(len(r['candidate_evidence_ids']) for r in rows))
    require(totals==(68,9,19),'Candidate inventory changed')
    require(ledger['reviewed_candidate_count']==2 and ledger['unreviewed_returned_candidates']==0,'Review scope count mismatch')
    require(not ledger['human_approval'] and not ledger['scientific_claim_support_approved'],'Unsupported approval in ledger')
    require(not ledger['full_corpus_source_integrity_verified'],'Scope was promoted to a corpus-wide guarantee')
    d1,d2=ledger['decisions']
    require(d1['review_id']=='SID-1E4C-001' and d1['classification']=='DISTINCT_REFERENCES_FALSE_POSITIVE','False-positive decision missing')
    require(d2['review_id']=='SID-1E4C-002' and d2['correct_pmid']=='37438010','Source correction decision missing')
    candidates=proximity_candidates(evidence)
    # Only the specific cross-heading candidate may be dismissed; no broad suppression.
    expected={'file':d1['file'],'pmid_line':52,'pmid_value':'20429636','pmid_evidence_id':'EVD-PMID-20429636',
              'doi_line':55,'doi_value':'10.1152/ajpheart.00041.2026','doi_evidence_id':'EVD-PMID-42495990'}
    require(len(candidates)==1 and all(candidates[0].get(k)==v for k,v in expected.items()),'Unexpected source identity candidate; requires new review')
    return {'canonical_claims':117,'active_evidence_records':172,'active_pubmed_records':170,'pubmed_book_records':1,
            'crossref_records':2,'quarantined_historical_records':2,'doi_only_records':0,'pubmed_unresolved_records':0,
            'claims_with_source_pool':68,'claims_with_structural_candidates':9,'structural_candidate_references':19,
            'approved_links':0,'raw_proximity_candidates_count':1,'dismissed_distinct_reference_candidates':1,
            'reviewed_returned_candidates':2,'supplemental_tracey_href_values_checked':2,'total_targeted_findings_reviewed':3,'open_source_identity_candidates_count':0,
            'targeted_identity_review_complete':True,'full_corpus_source_integrity_verified':False,
            'claim_support_review_complete':False,'release_ready':False}

def audit_repo(repo,phase='auto'):
    repo=Path(repo).resolve(strict=True)
    require(scalar(repo,'branch','--show-current')=='main','Branch must be main')
    for rel,want in LOCKED_1E4B.items():require(sha(regular_file(repo,rel).read_bytes())==want,'1E.4B content drift: '+rel)
    for rel,want in EXPECTED_ARTIFACT_HASHES.items():require(sha(regular_file(repo,rel).read_bytes())==want,'R3 artifact differs from reviewed bytes: '+rel)
    ev=json.loads((repo/(ROOT+'evidence-registry.v1.json')).read_bytes())
    links=json.loads((repo/(ROOT+'claim-evidence-link-candidates.v1.json')).read_bytes())
    claim=json.loads((repo/(ROOT+'claim-registry.v1.json')).read_bytes())
    ledger=json.loads((repo/LEDGER_REL).read_bytes())
    result=validate_documents(ev,links,claim,ledger)
    idx=json.loads((repo/(ROOT+'legacy-source-lock-index.v1.json')).read_bytes())
    require(len(idx['locks'])==27,'Legacy source-lock count drift')
    for item in idx['locks']:require(sha(regular_file(repo,item['file']).read_bytes())==item['sha256'],'Immutable source lock changed: '+item['file'])
    # Source-level proof of the false positive, including the separating heading.
    d1,d2=ledger['decisions'];ans=regular_file(repo,d1['file']).read_bytes()
    require(sha(ans)==d1['source_sha256'],'Reviewed ANS lock drift')
    lines=ans.decode().splitlines()
    require(lines[51].startswith('- ') and 'PMID 20429636' in lines[51],'First reviewed reference changed')
    require(lines[53]=='### HRV interpretation boundary','Reference-separating heading changed')
    require(lines[54].startswith('- ') and 'PMID 42495990' in lines[54] and '10.1152/ajpheart.00041.2026' in lines[54],'Second reference changed')
    err=d2['historical_erratum'];raw=regular_file(repo,err['file']).read_bytes()
    require(sha(raw)==err['file_sha256'] and raw.decode().splitlines()[err['line']-1]==err['literal_line'],'Scoped historical erratum no longer matches immutable original')
    original=git(repo,'show',BASELINE+':'+TARGET).decode();fixed,_=repair_source(original)
    require(regular_file(repo,TARGET).read_bytes()==fixed.encode(),'Existing Bootsma source repair drift')
    original_tracey=git(repo,'show',BASELINE+':'+TRACEY)
    require(original_tracey.count(b'10.1038/415853a')==1,'Tracey base DOI count drift')
    require(regular_file(repo,TRACEY).read_bytes()==original_tracey.replace(b'10.1038/415853a',b'10.1038/nature01321').replace(b'https://pubmed.ncbi.nlm.nih.gov/12490959/',b'https://pubmed.ncbi.nlm.nih.gov/12490958/'),'Existing Tracey source repair drift')
    tracey_text=regular_file(repo,TRACEY).read_text(encoding='utf-8')
    require(original_tracey.count(b'https://pubmed.ncbi.nlm.nih.gov/12490959/')==2,'Unexpected baseline Tracey anchor count')
    require(tracey_text.count('https://pubmed.ncbi.nlm.nih.gov/12490958/')==2 and '12490959' not in tracey_text,'Both Tracey PubMed links must be corrected')
    for line in [290,425]:require('href="https://pubmed.ncbi.nlm.nih.gov/12490958/"' in tracey_text.splitlines()[line-1],'Corrected Tracey anchor line drift')
    hrv_base=git(repo,'show',BASELINE+':'+HRV)
    require(sha(hrv_base)==HRV_BEFORE_SHA,'Unknown HRV baseline bytes')
    expected_hrv,detail=repair_hrv(hrv_base.decode())
    require(regular_file(repo,HRV).read_bytes()==expected_hrv.encode(),'HRV differs by more than URL/PMID repair')
    markers=marker_lines(expected_hrv)
    for e in ev['evidence']:
        for p in e['provenance']:
            if p['file']==HRV:require(p['line'] in markers.get((p['kind'],p['value']),[]),'HRV provenance is not reproducible')
    head=scalar(repo,'rev-parse','HEAD');records=status_records(repo);actual={p:xy for xy,p in records}
    source_paths={TRACEY,TARGET,HRV};want=INFRA|source_paths
    if phase=='auto':phase='local' if head==BASELINE else 'committed'
    if phase=='local':
        require(head==BASELINE,'Local phase baseline moved')
        require(actual=={**{p:'??' for p in INFRA},**{p:' M' for p in source_paths}},'Unexpected local changes/staging')
    elif phase=='staged':
        require(head==BASELINE,'Staged phase baseline moved')
        require(actual=={**{p:'A ' for p in INFRA},**{p:'M ' for p in source_paths}},'Unexpected staged changes')
        for rel in want:require(git(repo,'show',':'+rel)==(repo/rel).read_bytes(),'Index/worktree mismatch: '+rel)
    elif phase=='committed':
        require(scalar(repo,'rev-parse','HEAD^')==BASELINE and not records,'Expected clean single-commit descendant')
        changed=set(git(repo,'diff-tree','--no-commit-id','--name-only','-r','-z','HEAD').decode().strip('\0').split('\0'))
        require(changed==want,'Unexpected committed path set')
        for rel in want:require(git(repo,'show','HEAD:'+rel)==(repo/rel).read_bytes(),'Committed/worktree bytes differ: '+rel)
    else:raise ValueError('Unknown audit phase')
    result.update({'schema':'neuvago-1e4c-r4-scoped-identity-audit-v1','status':'PASS_1E4C_R4_SCOPED_IDENTITY_REVIEW',
                   'phase':phase,'head':head,'exact_changeset':True,'changeset_paths':len(want),
                   'canonical_claim_registry_hash_preserved':True,'historical_locks_preserved':27,
                   'tracey_source_repair':'PASS','parasympathetic_source_repair':'PASS','hrv_source_repair':'PASS',
                   'hrv_source_card':detail,'errors':[],
                   'next_gate':'RETURN_1E4C_R4_FOR_FINAL_LOCK_REVIEW'})
    return result

def main():
    ap=argparse.ArgumentParser();ap.add_argument('repo',type=Path);ap.add_argument('--phase',choices=['auto','local','staged','committed'],default='auto');ap.add_argument('--release',action='store_true');args=ap.parse_args()
    try:
        result=audit_repo(args.repo,args.phase)
        if args.release:require(result['release_ready'],'Final release and claim approval remain outside this local package')
        print(json.dumps(result,ensure_ascii=False,indent=2));return 0
    except Exception as exc:
        print(json.dumps({'status':'FAIL','release_ready':False,'errors':[str(exc)]},ensure_ascii=False,indent=2));return 2
if __name__=='__main__':raise SystemExit(main())
