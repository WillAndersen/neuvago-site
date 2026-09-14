#!/usr/bin/env python3
"""Analyst-added checks of the unchanged E1 engine, on in-memory fixtures only."""
from pathlib import Path
import argparse,copy,json,sys,hashlib,re
sys.dont_write_bytecode=True
ap=argparse.ArgumentParser();ap.add_argument('--package',required=True);ap.add_argument('--typescript',required=True);ap.add_argument('--output',required=True);args=ap.parse_args()
P=Path(args.package).resolve();TS=str(Path(args.typescript).resolve());sys.path.insert(0,str(P/'support'))
import shadow as H, mutations as M, readonly_guard as G
E=H.load(P/'support/expected-state.json');F=H.fixture(P);L=H.load(P/'reference/delivery-ledger.json')['routes'];path=L[0]['path'];ep=E['evidence_registry_rel']
public={x['path'] for x in L}|set(H.GLOSSARY)
ast=H.project({p:F[p] for p in public},P,TS);bp={x['path']:x for x in ast['files']}
rows=[]
def evaluate(name,f,description,target_rule,target_path,expectation,new_line=None):
 a=copy.deepcopy(ast);changed={p for p in public if f.get(p)!=F.get(p)}
 a['files']=[v for v in a['files'] if v['path'] not in changed]
 if changed:a['files'].extend(H.project({p:f[p] for p in changed if p in f},P,TS)['files'])
 snap=M.memory_snapshot(f,F,'analyst_calibration_fixture');r=H.analyze(snap,P,TS,F,a,bp)
 matched=[x for x in r['rule_observations'] if x['rule_id']==target_rule and x['source_locator']['file']==target_path]
 blockers=[x for x in r['rule_observations'] if x['technical_result'] in ('WOULD_BLOCK','OPERATIONAL_ERROR','NOT_EVALUATED')]
 review=[x for x in r['rule_observations'] if x['technical_result']=='REVIEW_REQUIRED' and x['source_locator']['file']==target_path]
 out={'case_id':name,'description':description,'analyst_expected_policy':expectation,'target_rule':target_rule,'target_path':target_path,'mutation_excerpt':new_line,'observed_counts':r['summary']['by_result'],'target_observations':matched,'not_evaluated_or_blocking_observations':blockers,'target_review_observations':review,'changed_file_hashes':{p:G.sha(f[p]) for p in f if f[p]!=F.get(p)},'user_repository_touched':False}
 rows.append(out)
 print(name, r['summary']['by_result'], [(x['reason'],x['technical_result']) for x in matched])

evaluate('CONTROL_BASELINE',dict(F),'Exact accepted source fixtures','G-ROUTES-TARGET',path,'PASS within declared technical scope')
f=dict(F);f[path]=f[path].replace(b'https://pubmed.ncbi.nlm.nih.gov/17786266/',b'https://pubmed.ncbi.nlm.nih.gov/1660159/',1)
evaluate('CONTROL_WRONG_PMID',f,'Swap one PubMed URL as in original negative test','G-ID-PMID',path,'WOULD_BLOCK wrong source identity')

f=dict(F);t=f[path].decode();needle='export default function ParasympatheticNervousSystemPage() {';assert t.count(needle)==1;changed=needle+'\n  if (true) return null;';f[path]=t.replace(needle,changed,1).encode()
evaluate('CAL_PARSE_EARLY_RETURN',f,'Insert an unconditional early return wrapped in an if before the direct JSX return','G-ROUTES-TARGET',path,'NOT_EVALUATED for unsupported control flow, or detected missing reachable main; not technical approval of unreachable cards',changed)

f=dict(F);t=f[path].decode();old='McCorry LK. American Journal of Pharmaceutical Education.';assert old in t;new='Wrong Author. American Journal of Pharmaceutical Education. Previous attribution: McCorry LK.';f[path]=t.replace(old,new,1).encode()
evaluate('CAL_METADATA_CONTRADICTORY_AUTHOR',f,'Replace bibliographic author while retaining accepted author elsewhere in the same bibliographic paragraph','G-ID-METADATA',path,'Do not report author field matches from substring presence alone; require determinate field match or review-bound identity status',new)

f=dict(F);d=json.loads(f[ep]);added=copy.deepcopy(d['evidence'][0]);doi='10.5555/neuvago-calibration-fixture';added.update(evidence_id='EVD-DOI-'+hashlib.sha256(doi.encode()).hexdigest()[:12].upper(),doi=doi,source_url='https://doi.org/'+doi,directness='PROVEN_PRODUCT_EFFECT');d['evidence'].append(added);f[ep]=G.encode(d)
evaluate('CAL_NEW_DIRECTNESS_PROMOTION',f,'Append synthetic uniquely keyed evidence with pre-promoted directness and no review decision','G-REVIEW-PROMOTION',ep,'WOULD_BLOCK unsupported promotion whether record already existed or is new','new record directness=PROVEN_PRODUCT_EFFECT; claim_ids=[]')

f=dict(F);d=json.loads(f[ep]);added=copy.deepcopy(d['quarantined_evidence'][0]['original_record']);added['evidence_id']='EVD-CALIBRATION-RENAMED-QUARANTINED';d['evidence'].append(added);f[ep]=G.encode(d)
evaluate('CAL_RENAMED_QUARANTINED_ID',f,'Append quarantined source with different internal evidence_id but identical original PMID and DOI','G-ID-QUARANTINE',ep,'WOULD_BLOCK based on canonical source identifiers; alternate local ID must not reactivate quarantine','Changed evidence_id only; original PMID/DOI retained')

f=dict(F);d=json.loads(f[ep]);added=copy.deepcopy(next(x for x in d['evidence'] if x.get('pmid')));added['evidence_id']='EVD-CALIBRATION-DUPLICATE-PMID';d['evidence'].append(added);f[ep]=G.encode(d)
evaluate('CAL_DUPLICATE_PMID_NEW_LOCAL_ID',f,'Append active identity using a new evidence_id but an already active PMID','G-ID-QUARANTINE',ep,'Detect duplicate canonical source identity; local ID uniqueness alone is insufficient','new evidence_id; duplicate pmid='+str(added['pmid']))

# Legitimate markup refactor: split one scope paragraph into two adjacent paragraphs.
f=dict(F);t=f[path].decode();scope=L[0]['references'][0]['inherited_metadata']['scope'];assert scope in t;first,rest=scope.split('. ',1);revised=first+'.</p><p className="mt-3 text-sm leading-7">'+rest;f[path]=t.replace(scope,revised,1).encode()
evaluate('CAL_SCOPE_PARAGRAPH_REFACTOR',f,'Split same accepted scope text across two adjacent paragraphs without deleting any words','G-SCOPE-CARD',path,'REVIEW_REQUIRED is conservative but clarify format-driven alert; future semantic note locator should preserve scope association',revised)

payload={'schema':'neuvago-1e4e1-independent-calibration-reproductions-v1','origin':'NEW_ANALYST_CHECKS_NOT_PART_OF_RETURNED_90_TESTS_OR_45_CASES','package_rule_bytes_unchanged':True,'rules_sha256':H.rule_fingerprint(P),'typescript_version':ast['typescript_version'],'typescript_module_sha256':G.sha(Path(TS).read_bytes()),'returned_user_typescript_version':'5.9.3','execution_platform':'Linux','same_user_compiler_used':False,'scope':'READ_ONLY_ORIGINAL_PACKAGE; IN_MEMORY_MODIFICATIONS_OF_EMBEDDED_ACCEPTED_FIXTURES; NO_USER_REPO; NO_INSTALL','cases':rows,'case_count':len(rows),'all_wider_review_flags_remain_false':True}
Path(args.output).write_text(json.dumps(payload,ensure_ascii=False,indent=2)+'\n')
