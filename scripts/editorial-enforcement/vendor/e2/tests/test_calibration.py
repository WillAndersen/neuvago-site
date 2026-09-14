#!/usr/bin/env python3
"""E2 object-bound acceptance; private fixture repositories only."""
from __future__ import annotations
import copy,json,sys,tempfile,unittest
from pathlib import Path
sys.dont_write_bytecode=True
sys.path.insert(0,str(Path(__file__).resolve().parent))
import test_shadow as T
from test_shadow import P,F,TS,E,L,H,G,S,M,command,make_repo
import calibration as C
import registry_checks as RC
BASE_AST=None

def baseline_ast():
 global BASE_AST
 if BASE_AST is None:
  public={r['path'] for r in L}|set(H.GLOSSARY)
  BASE_AST=H.project({p:F[p] for p in public},P,TS)
 return BASE_AST

class ObjectBoundCases(unittest.TestCase):pass

def make_case(case):
 def test(self):
  proj=baseline_ast();r=C.evaluate_case(case,P,TS,F,proj,{v['path']:v for v in proj['files']})
  self.assertTrue(r['expectation_met'],json.dumps(r,ensure_ascii=False))
  self.assertTrue(r['matching_target_observations'])
  for obs in r['matching_target_observations']:
   self.assertEqual(obs['input_phase'],r['expected']['phase'])
   self.assertEqual(obs['source_locator']['file'],r['expected']['path'])
   for attr in ['card_id','record_id','field']:
    if r['expected'][attr] is not None:self.assertEqual(obs['source_locator'][attr],r['expected'][attr])
 return test
for case in C.specs(P):setattr(ObjectBoundCases,'test_'+case['name'].lower(),make_case(case))

class CalibrationStructureTests(unittest.TestCase):
 def test_contract_has_23_explicit_byline_fields(self):
  rows=H.load(P/'reference/display-fields-v1.json')['cards'];self.assertEqual(len(rows),23)
  self.assertEqual(len({(r['path'],r['card_id']) for r in rows}),23)
  for r in rows:self.assertEqual(r['source_sha256'],G.sha(F[r['path']]))
 def test_original_e1_archive_hash_locked(self):
  import legacy_compare as lc
  self.assertEqual(G.sha((P/'reference/e1-original-package.zip').read_bytes()),lc.E1_SHA)
 def test_mutation_cannot_match_unaffected_other_card(self):
  spec=copy.copy(next(s for s in C.specs(P) if s['name']=='E2_CONTRADICTORY_AUTHOR'));spec['card']='source-1660159'
  ast=baseline_ast();r=C.evaluate_case(spec,P,TS,F,ast,{v['path']:v for v in ast['files']});self.assertFalse(r['expectation_met'])
 def test_mutation_cannot_match_other_record(self):
  spec=copy.copy(next(s for s in C.specs(P) if s['name']=='E2_ID_RENAMED_QUARANTINE'));spec['record']='EVD-PMID-17786266'
  ast=baseline_ast();r=C.evaluate_case(spec,P,TS,F,ast,{v['path']:v for v in ast['files']});self.assertFalse(r['expectation_met'])
 def test_pending_does_not_imply_authorized_link(self):
  doc=json.loads(F[E['evidence_registry_rel']]);new=copy.deepcopy(doc['evidence'][0]);new.update(evidence_id='NEW-ID',claim_ids=['UNAUTHORIZED'])
  doc['evidence'].append(new);flags,_=RC.promotion_checks(doc,json.loads(F[E['evidence_registry_rel']]),'evidence')
  self.assertTrue(any(x['record_id']=='NEW-ID' and x['field'].endswith('.claim_ids') for x in flags))
 def test_missing_control_field_not_silently_pending(self):
  old=json.loads(F[E['evidence_registry_rel']]);doc=copy.deepcopy(old);del doc['evidence'][0]['directness']
  flags,_=RC.promotion_checks(doc,old,'evidence');self.assertTrue(any(x['field']=='directness' for x in flags))
 def test_duplicate_row_identifier_not_positional(self):
  old=json.loads(F[E['claim_registry_rel']]);doc=copy.deepcopy(old);doc['claims'].append(copy.deepcopy(doc['claims'][0]))
  flags,_=RC.promotion_checks(doc,old,'canonical');self.assertTrue(any(x['field']=='claim_id' for x in flags))
 def test_reorder_preserves_exact_existing_mapping(self):
  old=json.loads(F[E['evidence_registry_rel']]);doc=copy.deepcopy(old);doc['evidence'].reverse()
  flags,new=RC.promotion_checks(doc,old,'evidence');self.assertEqual(flags,[]);self.assertEqual(new,[])
 def test_canonical_identity_without_live_resolution(self):
  self.assertEqual(RC.doi('https://doi.org/10.5555/Test'), '10.5555/test')
  with self.assertRaises(ValueError):RC.pmid('123 bad')
 def test_baseline_jsons_never_mutated(self):
  old=json.loads(F[E['evidence_registry_rel']]);backup=copy.deepcopy(old)
  RC.promotion_checks(old,old,'evidence');RC.canonical_identity_checks(old,old);self.assertEqual(old,backup)
 def test_rules_fingerprint_includes_calibrated_modules_and_contract(self):
  text=(P/'support/shadow.py').read_text()
  for n in ['registry_checks.py','card_fields.py','extract.cjs','display-fields-v1.json']:self.assertIn(n,text)
 def test_13_acceptance_requirements_covered(self):
  self.assertEqual(len({s['acceptance'] for s in C.specs(P)}),12)

class RealPhaseCalibrationTests(unittest.TestCase):
 def test_e2_life1_index_bad_worktree_good_named_commit_good(self):
  with tempfile.TemporaryDirectory() as tmp:
   repo,exp,bare=make_repo(Path(tmp).resolve());ep=E['evidence_registry_rel']
   d=json.loads((repo/ep).read_bytes());q=copy.deepcopy(d['quarantined_evidence'][0]['original_record']);q['evidence_id']='EVD-CAL-INDEX-Q';d['evidence'].append(q)
   (repo/ep).write_bytes(G.encode(d));command(repo,'add','--',ep);(repo/ep).write_bytes(F[ep])
   controls=G.control_snapshot(repo)
   for phase in ['worktree','index','commit']:
    snap=S.capture(repo,exp,phase,exp['expected_commit'] if phase=='commit' else None)
    report=H.analyze(snap,P,TS,F)
    found=[r for r in report['rule_observations'] if r['rule_id']=='G-ID-CANONICAL-IDENTITY' and r['source_locator'].get('record_id')=='EVD-CAL-INDEX-Q']
    self.assertTrue(H.binding_matches(report,snap,P,TS))
    if phase=='index':self.assertEqual([r['technical_result'] for r in found],['WOULD_BLOCK']);self.assertEqual(found[0]['input_phase'],'index')
    else:self.assertEqual(found,[])
   self.assertEqual(G.control_snapshot(repo),controls)
 def test_flow_unsupported_no_identity_pass_in_index(self):
  with tempfile.TemporaryDirectory() as tmp:
   repo,exp,bare=make_repo(Path(tmp).resolve());path=L[0]['path'];spec=next(c for c in C.specs(P) if c['name']=='E2_CONTROLFLOW_EARLY_RETURN')
   f=dict(F);spec['mutate'](f);(repo/path).write_bytes(f[path]);command(repo,'add','--',path);(repo/path).write_bytes(F[path])
   before=G.control_snapshot(repo);r=H.analyze(S.capture(repo,exp,'index'),P,TS,F)
   self.assertTrue(any(o['rule_id']=='G-ROUTES-TARGET' and o['technical_result']=='NOT_EVALUATED' and o['source_locator']['file']==path for o in r['rule_observations']))
   self.assertFalse(any(o['rule_id'].startswith('G-ID') and o['technical_result']=='PASS_TECHNICAL_SCOPE' and o['source_locator']['file']==path for o in r['rule_observations']))
   self.assertEqual(before,G.control_snapshot(repo))

if __name__=='__main__':unittest.main(verbosity=2)
