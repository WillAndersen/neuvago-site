"""Object-bound E2 regression expectations. Mutations use isolated in-memory copies.
Expected rule/status/path/card/record/field are specified before invoking the engine.
"""
from __future__ import annotations
import copy,json,re
import readonly_guard as g
import shadow as s
import mutations as m

def specs(package):
 e=s.load(package/'support/expected-state.json');base=s.fixture(package);ledger=s.load(package/'reference/delivery-ledger.json')['routes']
 p=ledger[0]['path'];cid='source-17786266';ep=e['evidence_registry_rel'];cp=e['claim_registry_rel'];lp=e['candidate_registry_rel']
 ev=json.loads(base[ep]);cl=json.loads(base[cp]);ca=json.loads(base[lp]);scope=ledger[0]['references'][0]['inherited_metadata']['scope']
 out=[]
 def add(name,acceptance,rule,status,fn,path=p,card=None,record=None,field=None,description='',forbid=None):
  out.append(dict(name=name,acceptance=acceptance,rule=rule,expected=status,mutate=fn,path=path,card=card,record=record,field=field,description=description,forbid=forbid or []))
 def rep(old,new,path=p,count=1):
  def f(files):
   a=old.encode();g.require(a in files[path],'Missing calibration anchor: '+old[:80]);files[path]=files[path].replace(a,new.encode(),count)
  return f
 def reg(fn,path=ep):
  def f(files):
   d=json.loads(files[path]);fn(d);files[path]=g.encode(d)
  return f
 def fresh(promotion=None):
  r=copy.deepcopy(ev['evidence'][0]);r.update(evidence_id='EVD-CAL-NEW-PENDING',pmid=None,doi='10.5555/neuvago-calibration-only',source_url='https://doi.org/10.5555/neuvago-calibration-only')
  if promotion:r.update(promotion)
  return r
 q=copy.deepcopy(ev['quarantined_evidence'][0]['original_record']);q['evidence_id']='EVD-CAL-RENAMED-QUARANTINE'
 dup=copy.deepcopy(next(x for x in ev['evidence'] if x.get('pmid')));dup['evidence_id']='EVD-CAL-DUPLICATE-PMID'
 valid_id='EVD-PMID-17786266'
 add('E2_ID_RENAMED_QUARANTINE','E2-ID-1','G-ID-CANONICAL-IDENTITY','WOULD_BLOCK',reg(lambda d:d['evidence'].append(q)),ep,record=q['evidence_id'])
 add('E2_ID_DUPLICATE_PMID','E2-ID-2','G-ID-CANONICAL-IDENTITY','WOULD_BLOCK',reg(lambda d:d['evidence'].append(dup)),ep,record=dup['evidence_id'])
 qdoi=copy.deepcopy(q);qdoi.update(evidence_id='EVD-CAL-QUARANTINE-DOI-ONLY',pmid=None,doi='https://doi.org/'+q['doi'].upper(),source_url='https://doi.org/'+q['doi'].upper())
 add('E2_ID_QUARANTINE_DOI_ALIAS','E2-ID-1','G-ID-CANONICAL-IDENTITY','WOULD_BLOCK',reg(lambda d:d['evidence'].append(qdoi)),ep,record=qdoi['evidence_id'])
 du=copy.deepcopy(next(x for x in ev['evidence'] if x.get('doi')));du.update(evidence_id='EVD-CAL-DUPLICATE-DOI',pmid=None,source_url='https://doi.org/'+du['doi'].upper(),doi='DOI: '+du['doi'].upper())
 add('E2_ID_DUPLICATE_DOI','E2-ID-2','G-ID-CANONICAL-IDENTITY','WOULD_BLOCK',reg(lambda d:d['evidence'].append(du)),ep,record=du['evidence_id'])
 add('E2_ID_VALID_PAIR','E2-ID-3','G-ID-CANONICAL-IDENTITY','PASS_TECHNICAL_SCOPE',lambda f:None,ep,record=valid_id)
 def alter_valid(d):
  r=next(x for x in d['evidence'] if x['evidence_id']==valid_id);r['doi']='https://doi.org/'+r['doi'].upper()
 add('E2_ID_VALID_DOI_NORMALIZATION','E2-ID-3','G-ID-CANONICAL-IDENTITY','PASS_TECHNICAL_SCOPE',reg(alter_valid),ep,record=valid_id)
 def mismatched(d):next(x for x in d['evidence'] if x['evidence_id']==valid_id).update(source_url='https://pubmed.ncbi.nlm.nih.gov/1660159/')
 add('E2_ID_CONFLICTING_SOURCE_URL','E2-ID-2','G-ID-CANONICAL-IDENTITY','WOULD_BLOCK',reg(mismatched),ep,record=valid_id)
 for key,value in [('directness','PROVEN_PRODUCT_EFFECT'),('evidence_tier_basis','HIGH_CERTAINTY'),('status','APPROVED'),('evidence_tier','HIGH_GRADE_CERTAINTY'),('certainty','HIGH')]:
  row=fresh({key:value})
  add('E2_NEW_'+key.upper(),'E2-REVIEW-1','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(lambda d,r=row:d['evidence'].append(r)),ep,record=row['evidence_id'],field='evidence['+row['evidence_id']+'].'+key)
 add('E2_NEW_PENDING','E2-REVIEW-2','G-REVIEW-NEW-ROW','REVIEW_REQUIRED',reg(lambda d:d['evidence'].append(fresh())),ep,record='EVD-CAL-NEW-PENDING',forbid=['WOULD_BLOCK','OPERATIONAL_ERROR'])
 for coll,path in [('evidence',ep),('claims',cp),('claims',lp)]:
  add('E2_REORDER_'+('EVIDENCE' if path==ep else 'CANONICAL' if path==cp else 'CANDIDATES'),'E2-REVIEW-3','G-REVIEW-PROMOTION','PASS_TECHNICAL_SCOPE',reg(lambda d,c=coll:d[c].reverse(),path),path,forbid=['WOULD_BLOCK','OPERATIONAL_ERROR'])
 oldid=ev['evidence'][0]['evidence_id']
 add('E2_OLD_DIRECTNESS','E2-REVIEW-1','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(lambda d:d['evidence'][0].update(directness='PROVEN_PRODUCT_EFFECT')),ep,record=oldid,field='evidence['+oldid+'].directness')
 newclaim=copy.deepcopy(cl['claims'][0]);newclaim.update(claim_id='CLM-CAL-NEW',evidence_ids=['EVD-PMID-17786266'])
 add('E2_NEW_CANONICAL_APPROVAL','E2-REVIEW-1','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(lambda d:d['claims'].append(newclaim),cp),cp,record='CLM-CAL-NEW',field='claims[CLM-CAL-NEW].evidence_ids')
 newcand=copy.deepcopy(ca['claims'][0]);newcand.update(claim_id='CLM-CAL-NEW-CANDIDATE',approved_evidence_ids=['EVD-PMID-17786266'])
 add('E2_NEW_CANDIDATE_APPROVAL','E2-REVIEW-1','G-REVIEW-PROMOTION','WOULD_BLOCK',reg(lambda d:d['claims'].append(newcand),lp),lp,record=newcand['claim_id'],field='claims['+newcand['claim_id']+'].approved_evidence_ids')
 needle='export default function ParasympatheticNervousSystemPage() {'
 for suffix,statement in [('EARLY_RETURN','if (true) return null;'),('NESTED_RETURN','if (unknownFlag) { return null; }'),('TRY_FINALLY','try { return null; } finally {}'),('LOOP','while (unknownFlag) { return null; }'),('THROW','throw new Error("not executed");'),('MUTABLE','let condition = true;'),('EXPRESSION','unknownSideEffect();'),('CONST_CALL','const opaque = unknownSideEffect();')]:
  add('E2_CONTROLFLOW_'+suffix,'E2-PARSE-1','G-ROUTES-TARGET','NOT_EVALUATED',rep(needle,needle+'\n  '+statement),description='Unsupported control flow must not yield card PASS')
 add('E2_SUPPORTED_BASELINE','E2-PARSE-2','G-ROUTES-TARGET','PASS_TECHNICAL_SCOPE',lambda f:None)
 old='McCorry LK. American Journal of Pharmaceutical Education.'
 add('E2_CONTRADICTORY_AUTHOR','E2-META-1','G-ID-METADATA','WOULD_BLOCK',rep(old,'Wrong Author. American Journal of Pharmaceutical Education. Previous attribution: McCorry LK.'),card=cid,field='authors')
 add('E2_CONTRADICTORY_JOURNAL','E2-META-1','G-ID-METADATA','WOULD_BLOCK',rep(old,'McCorry LK. Wrong Journal. Previously American Journal of Pharmaceutical Education.'),card=cid,field='publication')
 add('E2_METADATA_IN_SCOPE_NOT_BYLINE','E2-META-1','G-ID-METADATA','WOULD_BLOCK',rep(old,'Wrong Author. Wrong Journal.'),card=cid,field='authors')
 add('E2_SHORT_AUTHOR_DISPLAY','E2-META-2','G-ID-METADATA','PASS_TECHNICAL_SCOPE',lambda f:None,path=ledger[1]['path'],card='source-25696224',field='authors')
 # Use ledger lookup instead of order assumptions for accepted Bootsma source.
 short=next(r for r in ledger if any(c['local_key']=='25696224' for c in r['references']));out[-1]['path']=short['path']
 add('E2_INSTITUTION_DISPLAY','E2-META-2','G-ID-METADATA','PASS_TECHNICAL_SCOPE',lambda f:None,path=ledger[9]['path'],card='source-who-anxiety',field='authors')
 add('E2_UNKNOWN_BYLINE_STRUCTURE','E2-META-1','G-ID-METADATA','NOT_EVALUATED',rep('<p className="mt-3 text-sm leading-7 text-[#5f5a52]">'+old+'</p>','<div><p>'+old+'</p></div>'),card=cid,field='bibliographic_blocks')
 first,rest=scope.split('. ',1)
 add('E2_SCOPE_SPLIT','E2-SCOPE-1','G-SCOPE-CARD','PASS_TECHNICAL_SCOPE',rep(scope,first+'.</p><p>'+rest),card=cid,forbid=['WOULD_BLOCK','OPERATIONAL_ERROR'])
 add('E2_SCOPE_REMOVED','E2-SCOPE-2','G-SCOPE-CARD','WOULD_BLOCK',rep(scope,''),card=cid)
 add('E2_SCOPE_BROADENED','E2-SCOPE-2','G-SCOPE-CARD','REVIEW_REQUIRED',rep(scope,scope+' Every Neuvago result is now proven.'),card=cid)
 add('E2_SCOPE_SPLIT_HIDDEN','E2-SCOPE-2','G-SCOPE-CARD','WOULD_BLOCK',rep(scope,first+'.</p><p hidden>'+rest),card=cid)
 add('E2_SCOPE_COMMENTED','E2-SCOPE-2','G-SCOPE-CARD','WOULD_BLOCK',rep(scope,'{/* '+scope+' */}'),card=cid)
 add('E2_SCOPE_OTHER_CARD','E2-SCOPE-2','G-SCOPE-CARD','REVIEW_REQUIRED',rep(scope,ledger[0]['references'][1]['inherited_metadata']['scope']),card=cid)
 add('E2_DOI_LABEL','E2-ID-3','G-ID-DOI','PASS_TECHNICAL_SCOPE',lambda f:None,card=cid)
 add('E2_DOI_LINK','E2-ID-3','G-ID-DOI','PASS_TECHNICAL_SCOPE',rep('<span className="break-all">DOI: 10.5688/aj710478</span>','<a href="https://doi.org/10.5688/aj710478">DOI link</a>'),card=cid)
 add('E2_WRONG_PMID_CARD','E2-ID-2','G-ID-PMID','WOULD_BLOCK',rep('https://pubmed.ncbi.nlm.nih.gov/17786266/','https://pubmed.ncbi.nlm.nih.gov/1660159/'),card=cid)
 return out

def evaluate_case(case,package,ts,base,proj,bp,phase='isolated_e2_calibration'):
 f=dict(base);case['mutate'](f);snap=m.memory_snapshot(f,base,phase)
 public={v['path'] for v in proj['files']};changed={p for p in public if f.get(p)!=base.get(p)}
 parsed=copy.deepcopy(proj);parsed['files']=[v for v in parsed['files'] if v['path'] not in changed]
 if changed:parsed['files'].extend(s.project({p:f[p] for p in changed if p in f},package,ts)['files'])
 result=s.analyze(snap,package,ts,base,parsed,bp)
 matches=[]
 for r in result['rule_observations']:
  loc=r['source_locator']
  if r['rule_id']!=case['rule'] or r['technical_result']!=case['expected'] or r['input_phase']!=phase or loc['file']!=case['path']:continue
  if case['card'] is not None and loc.get('card_id')!=case['card']:continue
  if case['record'] is not None and loc.get('record_id')!=case['record']:continue
  if case['field'] is not None and loc.get('field')!=case['field']:continue
  matches.append(r)
 unexpected=[r for r in result['rule_observations'] if r['technical_result'] in case['forbid']]
 if case['name'].startswith('E2_CONTROLFLOW_'):
  unexpected += [r for r in result['rule_observations'] if r['source_locator']['file']==case['path'] and r['rule_id'].startswith('G-ID') and r['technical_result']=='PASS_TECHNICAL_SCOPE']
 return {'case_id':case['name'],'acceptance_requirement':case['acceptance'],'expected':{'rule_id':case['rule'],'status':case['expected'],'path':case['path'],'card_id':case['card'],'record_id':case['record'],'field':case['field'],'phase':phase},
   'expectation_met':bool(matches) and not unexpected,'matching_target_observations':matches,'unexpected_observations':unexpected,
   'observed_counts':result['summary']['by_result'],'input_fingerprint':snap['meta']['snapshot_fingerprint'],
   'changed_file_hashes':{p:g.sha(f[p]) for p in snap['meta']['changed_paths'] if p in f},
   'user_repository_touched':False,'rules_sha256':s.rule_fingerprint(package),'typescript_version':proj['typescript_version']}

def run_matrix(package,ts,base=None):
 base=base if base is not None else s.fixture(package)
 paths={r['path'] for r in s.load(package/'reference/delivery-ledger.json')['routes']}|set(s.GLOSSARY)
 proj=s.project({p:base[p] for p in paths},package,ts);bp={v['path']:v for v in proj['files']}
 results=[evaluate_case(c,package,ts,base,proj,bp) for c in specs(package)]
 return {'schema':'neuvago-1e4e2-object-bound-calibration-v1','cases':results,'total':len(results),'passed':sum(r['expectation_met'] for r in results),
   'failed':[r['case_id'] for r in results if not r['expectation_met']], 'record_and_card_bound_expectations':True,'source_mutations':'ISOLATED_MEMORY_ONLY',
   'typescript_version':proj['typescript_version'],'rules_sha256':s.rule_fingerprint(package),'release_ready':False}
