#!/usr/bin/env python3
"""Typed, additive metadata admission reader. No source or Git mutations.
The legacy register, E3 engine and source baseline are immutable inputs.
The composite view is an explicit report, never an automatic write-back.
"""
from __future__ import annotations
import argparse,copy,datetime,hashlib,importlib,json,os,re,stat,subprocess,sys,tempfile,zipfile
from pathlib import Path,PurePosixPath
from urllib.parse import urlsplit,unquote
sys.dont_write_bytecode=True
sys.path.insert(0,str(Path(__file__).resolve().parent))
import schema_subset
DOC='docs/seo/evidence-operations/typed-admission'
SCRIPTS='scripts/evidence-intake'
CONTRACT=DOC+'/admission-contract.v1.json'
MANIFEST=DOC+'/ADMISSION-MANIFEST.json'
DATA=DOC+'/source-admissions.v1.json'
USAGE=DOC+'/source-usage.v1.json'
SCHEMA=DOC+'/source-admissions.schema.v1.json'
USCHEMA=DOC+'/source-usage.schema.v1.json'
IDENTITY=DOC+'/inputs/identity-review.v1.json'
OLD_USAGE=DOC+'/inputs/source-usage-ledger.v1.json'
PRIMARY=DOC+'/inputs/primary-source-observations.v1.json'
D7=DOC+'/inputs/original-d7-reference-intake-candidates.json'
VERSION='neuvago-r-intake2-reader-v1'
ROOTS=(DOC,SCRIPTS)

def require(ok,message):
    if not ok:raise ValueError(message)
def sha(b):return hashlib.sha256(b).hexdigest()
def enc(x):return (json.dumps(x,ensure_ascii=False,indent=2)+'\n').encode('utf-8')
def load(b):
    def pairs(rows):
        out={}
        for k,v in rows:
            require(k not in out,'Duplicate JSON key: '+k);out[k]=v
        return out
    return json.loads(b,object_pairs_hook=pairs,parse_constant=lambda x:(_ for _ in ()).throw(ValueError('Non-finite JSON')))
def save(p,x):p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(enc(x))
def relpath(rel):
    p=PurePosixPath(rel)
    require(rel and not p.is_absolute() and '..' not in p.parts and str(p)==rel and '\\' not in rel and '\x00' not in rel,'Unsafe relative path')
    return p

def regular(root,rel):
    p=root
    for part in relpath(rel).parts:
        p=p/part;require(not p.is_symlink(),'Internal symlink: '+rel)
    require(p.is_file() and stat.S_ISREG(p.stat().st_mode),'Missing regular file: '+rel)
    return p

def mode(p):return '100755' if p.stat().st_mode&0o111 else '100644'
def outside(p,root):
    p=Path(p).expanduser().resolve();r=Path(root).expanduser().resolve()
    require(p!=r and r not in p.parents,'Report/test output must be outside repo');return p

def verify_payload(root):
    c=load(regular(root,CONTRACT).read_bytes());m=load(regular(root,MANIFEST).read_bytes())
    require(c.get('schema')=='neuvago-r-intake2-admission-contract-v1' and c.get('mode')=='LOCAL_REVIEW_ONLY','Unsupported contract')
    require(m.get('schema')=='neuvago-r-intake2-file-manifest-v1','Wrong admission manifest')
    rows=m['files'];require(isinstance(rows,dict) and MANIFEST not in rows,'Manifest cannot self-hash')
    actual=set()
    for d in ROOTS:
        for p in (root/d).rglob('*'):
            require(not p.is_symlink(),'Admission symlink refused')
            if p.is_file():actual.add(p.relative_to(root).as_posix())
    require(actual==set(rows)|{MANIFEST},'Missing or unexpected admission files')
    for p,v in rows.items():
        require(any(p.startswith(r+'/') for r in ROOTS),'Manifest path outside admission roots')
        f=regular(root,p);require(sha(f.read_bytes())==v['sha256'] and mode(f)==v['mode'],'Admission file mismatch: '+p)
    allrows={**rows,MANIFEST:{'sha256':sha((root/MANIFEST).read_bytes()),'mode':'100644'}}
    return c,allrows,sha(enc({p:allrows[p] for p in sorted(allrows)}))

def source_id(r):
    return 'EVD-PMID-'+r['identity']['pmid'] if r['identity']['pmid'] else r['intake_id'].replace('INTAKE-URL-','SRC-URL-')

def identity_tokens(pmid,doi,url):
    tokens=set()
    if pmid is not None:
        require(isinstance(pmid,str) and re.fullmatch(r'[1-9][0-9]{0,8}',pmid),'Invalid PMID')
        tokens.add(('PMID',pmid))
    def dtoken(d):
        require(isinstance(d,str),'Invalid DOI type')
        d=re.sub(r'^(?:https?://(?:dx\.)?doi\.org/|doi\s*:\s*)','',d.strip(),flags=re.I);d=unquote(d).lower()
        require(re.fullmatch(r'10\.\d{4,9}/[^\s<>]+',d),'Invalid DOI')
        return ('DOI',d)
    if doi is not None:tokens.add(dtoken(doi))
    if url:
        u=urlsplit(url);require(u.scheme in ('https','http') and bool(u.hostname) and not u.username and not u.password,'Invalid source URL')
        if u.hostname.lower()=='pubmed.ncbi.nlm.nih.gov':
            v=u.path.strip('/');require(re.fullmatch(r'[1-9][0-9]{0,8}',v),'Invalid PMID URL');tokens.add(('PMID',v))
        elif u.hostname.lower() in ('doi.org','dx.doi.org'):tokens.add(dtoken(u.path.lstrip('/')))
        elif pmid is None and doi is None:tokens.add(('URL',url.rstrip('/')))
    require(tokens,'Missing source identity')
    for kind in ('PMID','DOI'):require(len([x for x in tokens if x[0]==kind])<=1,'Contradictory identity fields/URL')
    return tokens

def validate_documents(files,c):
    """Pure checks. Every reviewed object is bound to prior input; no semantic approval."""
    errors=[];usage_checks=[];typed=None;catalog=None
    def check(ok,code,detail=None):
        if not ok:errors.append({'code':code,'detail':detail})
    try:
        for p,v in c['protected_files'].items():check(p in files and sha(files[p])==v['sha256'],'PROTECTED_CONTENT_DRIFT',p)
        for p,h in c['input_documents'].items():check(p in files and sha(files[p])==h,'INPUT_REVIEW_DRIFT',p)
        if errors:return {'status':'FAIL','errors':errors},None
        legacy=load(files[c['legacy_registry']['path']]);typed=load(files[DATA]);ledger=load(files[USAGE])
        ids=load(files[IDENTITY]);old_usage=load(files[OLD_USAGE]);observations=load(files[PRIMARY])
        for obj,s in [(typed,load(files[SCHEMA])),(ledger,load(files[USCHEMA]))]:
            for e in schema_subset.validate(obj,s):check(False,'SCHEMA',e)
        if errors:return {'status':'FAIL','errors':errors},None
        check(typed['legacy_registry']==c['legacy_registry'],'BASE_REGISTRY_BINDING')
        check(typed['input_identity_review_sha256']==sha(files[IDENTITY]),'IDENTITY_INPUT_BINDING')
        check(ledger['input_usage_ledger_sha256']==sha(files[OLD_USAGE]),'USAGE_INPUT_BINDING')
        check(len(legacy['evidence'])==172 and len(legacy['quarantined_evidence'])==2,'LEGACY_COUNTS')
        canonical=load(files[c['canonical_claim_registry_rel']]);candidates=load(files[c['candidate_registry_rel']])
        check(len(canonical['claims'])==117,'CANONICAL_CLAIM_COUNT')
        check(not any(x.get('evidence_ids') for x in canonical['claims']),'CANONICAL_APPROVAL')
        check(not any(x.get('claim_ids') for x in legacy['evidence']),'LEGACY_APPROVAL')
        check(not any(x.get('approved_evidence_ids') for x in candidates['claims']),'CANDIDATE_APPROVAL')
        locks=load(files[c['historical_lock_index_rel']])['locks'];check(len(locks)==27,'HISTORY_COUNT')
        for x in locks:check(x['file'] in files and sha(files[x['file']])==x['sha256'],'HISTORICAL_LOCK_DRIFT',x['file'])
        prior={r['intake_id']:r for r in ids['records']};prioruse={r['usage_id']:r for r in old_usage['usages']}
        check(len(prior)==12 and len(prioruse)==16,'INPUT_COUNTS')
        byid={};used_intake=set();token_owner={};legacyrows=legacy['evidence'];qtokens=set();qids=set()
        for q in legacy['quarantined_evidence']:
            r=q['original_record'];qids.add(q['evidence_id']);qtokens|=identity_tokens(r.get('pmid'),r.get('doi'),r.get('source_url'))
        for r in legacyrows:
            rid=r['evidence_id'];check(rid not in byid,'DUPLICATE_LEGACY_ID',rid);byid[rid]=r
            for token in identity_tokens(r.get('pmid'),r.get('doi'),r.get('source_url')):
                check(token not in token_owner,'DUPLICATE_LEGACY_IDENTITY',list(token));token_owner[token]=rid
        primary={r['observation_id']:r for r in observations['observations']}
        for r in typed['sources']:
            sid=r['source_id'];iid=r['intake_id'];ident=r['identity'];old=prior.get(iid)
            check(sid not in byid,'DUPLICATE_LOCAL_ID',sid);check(iid not in used_intake,'DUPLICATE_INTAKE_ID',iid)
            used_intake.add(iid);byid[sid]=r
            check(sid not in qids,'QUARANTINE_LOCAL_ID',sid)
            for token in identity_tokens(ident['pmid'],ident['doi_normalized'],ident['source_url']):
                check(token not in qtokens,'QUARANTINE_CANONICAL_IDENTITY',sid)
                check(token not in token_owner,'DUPLICATE_CANONICAL_IDENTITY',{'source':sid,'prior':token_owner.get(token),'identity':list(token)})
                token_owner[token]=sid
            if old is None:check(False,'UNKNOWN_INTAKE',iid);continue
            check(sid==source_id(old),'SOURCE_ID_BINDING',sid)
            check(ident==old['identity'] and r['source_kind']==old['identity']['source_record_kind'],'TYPED_IDENTITY_MATCH',sid)
            check(r['reference_key']==old['reference_key'],'REFERENCE_KEY_MATCH',sid)
            check(r['observed_primary_metadata']==old['observed_primary_metadata'],'PRIMARY_METADATA_DRIFT',sid)
            check(r['identity_review']=={'disposition':old['identity_disposition'],'comparison_note':old['comparison_note'],'source_observation':old['source_observation']},'REVIEW_OBSERVATION_DRIFT',sid)
            check(r['identity_review']['source_observation']==primary.get(old['source_observation']['observation_id']),'PRIMARY_OBSERVATION_BINDING',sid)
            check(r['input_record_sha256']==sha(enc(old)),'INPUT_RECORD_HASH',sid)
            check(r['usage_ids']==old['usage_ids'],'PER_SOURCE_USAGE_LINKS',sid)
        check(used_intake==set(prior),'INTAKE_SET_COMPLETENESS')
        seen=set();kind_counts={}
        for r in typed['sources']:kind_counts[r['source_kind']]=kind_counts.get(r['source_kind'],0)+1
        check(kind_counts=={'SCHOLARLY_PUBLICATION':8,'PUBLIC_HEALTH_GUIDANCE':2,'CLINICAL_GUIDELINE':1,'CLASSIFICATION_CLARIFICATION':1},'SOURCE_KIND_COUNTS')
        usages_by_source={r['source_id']:[] for r in typed['sources']}
        for u in ledger['usages']:
            uid=u['usage_id'];old=prioruse.get(uid);check(uid not in seen,'DUPLICATE_USAGE_ID',uid);seen.add(uid)
            check(old is not None and u['original_usage']==old,'USAGE_CONTENT_DRIFT',uid)
            if old is None:continue
            expected_sid=source_id(prior[old['intake_id']]);check(u['source_id']==expected_sid,'CROSS_SOURCE_USAGE',uid)
            usages_by_source.setdefault(u['source_id'],[]).append(uid)
            data=files.get(old['path']);check(data is not None and sha(data)==old['source_file_sha256'],'USAGE_SOURCE_HASH',uid)
            excerpt=old['source_excerpt'];check(sha(excerpt.encode())==old['source_card_locator']['excerpt_sha256'],'USAGE_EXCERPT_HASH',uid)
            if data is None:continue
            text=data.decode('utf-8');pos=text.find(excerpt);occ=text.count(excerpt)
            # A data object can be followed by a comma. Bind exact substring + its line span,
            # not a stripped whole line or a fuzzy window.
            lo=text[:pos].count('\n')+1 if pos>=0 else None
            hi=text[:pos+len(excerpt)].count('\n')+1 if pos>=0 else None
            check(occ==1 and lo==old['source_card_locator']['start_line'] and hi==old['source_card_locator']['end_line'],'USAGE_EXCERPT_LOCATOR',uid)
            scope=old['scope_preserved_verbatim'];check(scope==old['prior_accepted_display_metadata']['scope'],'USAGE_SCOPE_LINK',uid)
            check(scope in excerpt,'USAGE_SCOPE_IN_EXCERPT',uid)
            usage_checks.append({'usage_id':uid,'source_id':u['source_id'],'path':old['path'],'route':old['route'],'card_id':old['card_id'],
              'source_file_sha256':sha(data),'excerpt_sha256':sha(excerpt.encode()),'start_line':lo,'end_line':hi,'matched_once':occ==1,'claim_support_approved':False})
        check(seen==set(prioruse),'USAGE_SET_COMPLETENESS')
        for r in typed['sources']:check(sorted(r['usage_ids'])==sorted(usages_by_source[r['source_id']]),'USAGE_BIJECTION',r['source_id'])
        if not errors:
            catalog={'schema':'neuvago-r-intake2-composite-metadata-view-v1','view_origin':'EXPLICIT_LEGACY_PLUS_TYPED_ADMISSIONS_NOT_CANONICAL_WRITEBACK',
             'legacy_registry_sha256':sha(files[c['legacy_registry']['path']]),'admission_registry_sha256':sha(files[DATA]),
             'legacy_registry_records':172,'typed_admission_records':12,'composite_metadata_identities':184,
             'entries':[{'source_id':r['evidence_id'],'origin':'LEGACY_172','record':copy.deepcopy(r)} for r in legacyrows]+
                        [{'source_id':r['source_id'],'origin':'R_INTAKE2_LOCAL_METADATA_ADMISSION','record':copy.deepcopy(r)} for r in typed['sources']],
             'quarantined_historical_records':copy.deepcopy(legacy['quarantined_evidence']),
             'approved_links':0,'claim_support_review_complete':False,'canonical_registry_replaced':False,'release_ready':False}
        return {'status':'PASS_TYPED_METADATA_CONTRACT' if not errors else 'FAIL','errors':errors,
                'legacy_active_evidence_records':172,'typed_admission_records':len(typed['sources']),
                'composite_metadata_identities':len(byid),'version_bound_usages':len(ledger['usages']),
                'source_kind_counts':kind_counts,'quarantined_historical_records':2,'canonical_claims':117,
                'usage_checks':usage_checks,'approved_links':0,'nice_direct_access_attested':False,
                'legacy_registry_rewritten':False,'claim_support_review_complete':False,'release_ready':False},catalog
    except (ValueError,KeyError,TypeError,UnicodeError) as exc:
        return {'status':'OPERATIONAL_ERROR','errors':errors+[{'code':'INPUT_OR_SCHEMA_ERROR','detail':str(exc)}]},None

def load_e3(root,c):
    for rel,v in c['protected_files'].items():
        if rel.startswith(('scripts/editorial-enforcement/','docs/seo/editorial-enforcement/')):
            p=regular(root,rel);require(sha(p.read_bytes())==v['sha256'] and mode(p)==v['mode'],'E3 byte/mode drift: '+rel)
    sys.path.insert(0,str(root/'scripts/editorial-enforcement'))
    rt=importlib.import_module('runtime');install=rt.verify_installation(root)
    require(install['tooling_fingerprint']==c['accepted_e3_tooling_fingerprint'],'E3 fingerprint mismatch')
    vendor,g,s,h=rt.load_engine(root)
    require(h.rule_fingerprint(vendor)==c['accepted_e2_rules_sha256'],'E2 rule mismatch')
    return rt,g,s,h,vendor

def capture_phase(repo,c,newfiles,phase,commit,g,s):
    head=g.scalar(repo,'rev-parse','HEAD');rev=commit or head
    require(re.fullmatch(r'[0-9a-f]{40}',rev),'Commit must be a full SHA-1 object ID')
    selected=g.tree_entries(repo,rev) if phase=='commit' else g.index_entries(repo)
    paths=set(c['protected_files'])|set(newfiles);data={};oids={};modes={}
    if phase=='worktree':
        for p in sorted(paths):
            f=regular(repo,p);b=f.read_bytes();data[p]=b;modes[p]=mode(f);oids[p]=hashlib.sha1(b'blob '+str(len(b)).encode()+b'\0'+b).hexdigest()
    else:
        valid={p:v for p,v in selected.items() if p in paths and v['mode'] in ('100644','100755') and v.get('kind','blob')=='blob'}
        bs=s.blobs(repo,[v['oid'] for v in valid.values()])
        for p,v in valid.items():data[p]=bs[v['oid']];oids[p]=v['oid'];modes[p]=v['mode']
    meta={'phase':phase,'observed_head':head,'selected_commit':rev if phase=='commit' else None,
      'selected_tree_oid':g.scalar(repo,'rev-parse',rev+'^{tree}') if phase=='commit' else None,
      'selected_inventory_sha256':sha(enc(selected)),'accepted_source_baseline':c['accepted_source_baseline'],
      'admission_parent_commit':c['accepted_repo_head'],'file_sha256':{p:sha(b) for p,b in sorted(data.items())},
      'blob_oids':oids,'modes':modes,'missing_paths':sorted(paths-set(data)),'status_records':s.status_records(repo)}
    meta['fingerprint']=sha(enc(meta));return data,meta

def archive(report):
    items={p.relative_to(report).as_posix():sha(p.read_bytes()) for p in sorted(report.rglob('*')) if p.is_file() and p!=report/'REPORT-MANIFEST.sha256'}
    (report/'REPORT-MANIFEST.sha256').write_text(''.join(h+'  '+p+'\n' for p,h in items.items()))
    zpath=Path(str(report)+'-share.zip')
    with zipfile.ZipFile(zpath,'x',zipfile.ZIP_DEFLATED) as z:
        for p in sorted(report.rglob('*')):
            require(not p.is_symlink(),'Report symlink')
            if p.is_file():z.write(p,report.name+'/'+p.relative_to(report).as_posix())
    spath=Path(str(zpath)+'.sha256.txt');spath.write_text(sha(zpath.read_bytes())+'  '+zpath.name+'\n');return zpath,spath

def main():
    ap=argparse.ArgumentParser(description='Typed source metadata reader; no write-back or claim approval')
    ap.add_argument('repo',nargs='?',default=str(Path(__file__).resolve().parents[2]));ap.add_argument('--phase',choices=['all','worktree','index','commit'],default='all')
    ap.add_argument('--commit');ap.add_argument('--output-parent');args=ap.parse_args()
    root=Path(args.repo).expanduser().resolve();out=outside(args.output_parent or Path.home()/'Downloads',root);out.mkdir(parents=True,exist_ok=True)
    report=Path(tempfile.mkdtemp(prefix='neuvago-typed-admission-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ')+'-',dir=out))
    result={'schema':VERSION,'status':'STOP_TYPED_ADMISSION_REVIEW','execution_status':'ERROR','mode':'LOCAL_REVIEW_ONLY',
      'source_edits_performed':False,'staging_performed':False,'commit_performed':False,'push_performed':False,'approved_links':0,'release_ready':False,
      'claim_support_review_complete':False,'scientific_claim_support_approved':False,'canonical_registry_replaced':False}
    before=controls=None;rt=g=s=None;captured={};newfiles={};fp=None
    try:
        c,newfiles,fp=verify_payload(root);rt,g,s,h,v=load_e3(root,c);require(g.root_path(root)==root,'Wrong repo root')
        rt.no_unfinished_operation(root);exp=rt.exp_for(root,h,v);rt.validate_baseline(root,exp,v,g,s,h)
        before=rt.preserve_snapshot(root,exp,g,s);controls=rt.controls(root,g)
        rt.ancestor(root,c['accepted_repo_head'],before['head'],g)
        if args.commit:
            require(args.phase in ('all','commit'),'--commit requires commit or all phase');rt.ancestor(root,c['accepted_source_baseline'],args.commit,g)
        phases=('worktree','index','commit') if args.phase=='all' else (args.phase,)
        outcome={};failed=False
        for phase in phases:
            f,m=capture_phase(root,c,newfiles,phase,args.commit,g,s);captured[phase]=m;save(report/('snapshots/'+phase+'.json'),m)
            for p,vv in c['protected_files'].items():require(p in f and sha(f[p])==vv['sha256'] and m['modes'].get(p)==vv['mode'],'Protected selected input drift: '+p)
            present=set(newfiles)&set(f)
            if not present:
                r={'status':'ADMISSION_NOT_PRESENT_IN_SELECTED_PHASE','composite_metadata_identities':172,'typed_admission_records':0,'approved_links':0,'claim_support_review_complete':False}
            elif present!=set(newfiles):
                r={'status':'NOT_EVALUATED_PARTIAL_ADMISSION_INPUT','missing':sorted(set(newfiles)-present),'approved_links':0};failed=True
            else:
                for p,vv in newfiles.items():require(sha(f[p])==vv['sha256'] and m['modes'].get(p)==vv['mode'],'Selected admission byte/mode differs from executing version: '+p)
                require(f[CONTRACT]==(root/CONTRACT).read_bytes(),'Selected contract differs from executing version')
                r,catalog=validate_documents(f,c)
                failed=failed or r['status']!='PASS_TYPED_METADATA_CONTRACT'
                if catalog:save(report/('catalog/'+phase+'.json'),catalog)
            r.update(input_phase=phase,input_fingerprint=m['fingerprint'],executing_contract_sha256=sha((root/CONTRACT).read_bytes()),executing_tooling_fingerprint=fp)
            save(report/('audit/'+phase+'.json'),r);outcome[phase]={'status':r['status'],'composite_metadata_identities':r.get('composite_metadata_identities')}
        require(before==rt.preserve_snapshot(root,exp,g,s) and controls==rt.controls(root,g),'Repo changed during typed observation')
        require(verify_payload(root)[2]==fp,'Admission changed during observation')
        for ph,m in captured.items():require(capture_phase(root,c,newfiles,ph,args.commit,g,s)[1]==m,'Selected snapshot changed during observation: '+ph)
        result.update(status='PASS_R_INTAKE2_TYPED_PHASE_REVIEW' if not failed else 'STOP_R_INTAKE2_TYPED_PHASE_REVIEW',execution_status='COMPLETE' if not failed else 'ERROR',phase_results=outcome,repository_unchanged=True,accepted_source_baseline=c['accepted_source_baseline'],observed_head=before['head'])
    except Exception as exc:result['error']=str(exc)
    finally:
        if before and rt:
            try:
                unchanged=before==rt.preserve_snapshot(root,exp,g,s) and controls==rt.controls(root,g)
                if fp is not None:unchanged=unchanged and verify_payload(root)[2]==fp
                for ph,m in captured.items():unchanged=unchanged and capture_phase(root,c,newfiles,ph,args.commit,g,s)[1]==m
                result['repository_unchanged_at_exit']=unchanged
                if not unchanged:result.update(status='STOP_R_INTAKE2_CONCURRENT_CHANGE',execution_status='ERROR')
            except Exception as exc:result.update(execution_status='ERROR',exit_check_error=str(exc))
        save(report/'RESULT.json',result);z,cs=archive(report);print(json.dumps(result,ensure_ascii=False,indent=2));print('SEND BEGGE FILENE:\n'+str(z)+'\n'+str(cs))
    return 0 if result['execution_status']=='COMPLETE' else 2
if __name__=='__main__':raise SystemExit(main())
