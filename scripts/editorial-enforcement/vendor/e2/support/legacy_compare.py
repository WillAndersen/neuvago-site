"""Replay immutable E1 package in a separate process, using the same compiler.
The original package is expanded ONLY in an owned temporary folder outside repo.
"""
from __future__ import annotations
import json,os,subprocess,sys,tempfile,zipfile
from pathlib import Path
import readonly_guard as g
E1_SHA='0ca09c4a9ac5768b7d073251a2fc1ae281e63f1a9a3563d82f6f7d021ecc666b'
NAME='neuvago-search-dominance-1e4e1-editorial-enforcement-shadow-pilot-v1'

def extract(package,tmp):
 zpath=package/'reference/e1-original-package.zip'
 g.require(g.sha(zpath.read_bytes())==E1_SHA,'Original E1 ZIP changed')
 with zipfile.ZipFile(zpath) as z:
  for n in z.namelist():
   p=Path(n);g.require(not p.is_absolute() and '..' not in p.parts and p.parts[0]==NAME,'Unsafe E1 archive path')
   # Every original member is a regular file/directory; reject symlinks.
   g.require((z.getinfo(n).external_attr>>16)&0o170000 != 0o120000,'Archive symlink refused')
  z.extractall(tmp)
 root=Path(tmp)/NAME;g.manifest_check(root);return root

def run_unchanged_tests(package,report,ts):
 log=report/'checks/original-e1-tests.txt';log.parent.mkdir(parents=True,exist_ok=True)
 with tempfile.TemporaryDirectory(prefix='original-e1-tests-',dir=report) as temp:
  root=extract(package,temp);isolated=Path(temp)/'test-tmp';isolated.mkdir()
  env=g.env();env.update(PYTHONDONTWRITEBYTECODE='1',TMPDIR=str(isolated),NEUVAGO_E1_TYPESCRIPT_MODULE=ts)
  with log.open('wb') as f:r=subprocess.run([sys.executable,'-B',str(root/'tests/test_shadow.py')],cwd=root,env=env,stdout=f,stderr=subprocess.STDOUT,timeout=900)
  g.require(r.returncode==0,'Original unmodified E1 regression suite failed with selected compiler')
  g.manifest_check(root)
 return {'original_package_sha256':E1_SHA,'tests_log':str(log.relative_to(report)),'status':'PASS','e1_bytes_unchanged':True}

def compare(package,report,ts,calibrated):
 (report/'checks').mkdir(parents=True,exist_ok=True)
 output=report/'comparison/unchanged-e1-eight-review-cases.json';output.parent.mkdir(parents=True,exist_ok=True)
 with tempfile.TemporaryDirectory(prefix='original-e1-compare-',dir=report) as tmp:
  root=extract(package,tmp)
  with (report/'checks/unchanged-e1-comparison.txt').open('wb') as log:
   r=subprocess.run([sys.executable,'-B',str(package/'reference/neuvago-1e4e1-calibration-reproductions.py'),
      '--package',str(root),'--typescript',str(ts),'--output',str(output)],cwd=root,env=g.env(),stdout=log,stderr=subprocess.STDOUT,timeout=180)
  g.require(r.returncode==0,'Unchanged E1 comparison failed; no source changes')
  g.manifest_check(root)
 # Run the EXACT original reproduction code again against E2. Only engine path changes.
 current_output=report/'comparison/calibrated-e2-same-eight-review-cases.json'
 with (report/'checks/calibrated-e2-comparison.txt').open('wb') as log:
  r=subprocess.run([sys.executable,'-B',str(package/'reference/neuvago-1e4e1-calibration-reproductions.py'),
      '--package',str(package),'--typescript',str(ts),'--output',str(current_output)],cwd=package,env=g.env(),stdout=log,stderr=subprocess.STDOUT,timeout=180)
 g.require(r.returncode==0,'Calibrated E2 exact-comparison replay failed')
 olddata=json.loads(output.read_text());newdata=json.loads(current_output.read_text())
 oldmap={r['case_id']:r for r in olddata['cases']};newmap={r['case_id']:r for r in newdata['cases']}
 import hashlib
 new_directness_id='EVD-DOI-'+hashlib.sha256(b'10.5555/neuvago-calibration-fixture').hexdigest()[:12].upper()
 expectations={
  'CONTROL_BASELINE':('G-ROUTES-TARGET','PASS_TECHNICAL_SCOPE',None,None,None),
  'CONTROL_WRONG_PMID':('G-ID-PMID','WOULD_BLOCK','source-17786266',None,None),
  'CAL_PARSE_EARLY_RETURN':('G-ROUTES-TARGET','NOT_EVALUATED',None,None,None),
  'CAL_METADATA_CONTRADICTORY_AUTHOR':('G-ID-METADATA','WOULD_BLOCK','source-17786266',None,'authors'),
  'CAL_NEW_DIRECTNESS_PROMOTION':('G-REVIEW-PROMOTION','WOULD_BLOCK',None,new_directness_id,'evidence['+new_directness_id+'].directness'),
  'CAL_RENAMED_QUARANTINED_ID':('G-ID-CANONICAL-IDENTITY','WOULD_BLOCK',None,'EVD-CALIBRATION-RENAMED-QUARANTINED',None),
  'CAL_DUPLICATE_PMID_NEW_LOCAL_ID':('G-ID-CANONICAL-IDENTITY','WOULD_BLOCK',None,'EVD-CALIBRATION-DUPLICATE-PMID',None),
  'CAL_SCOPE_PARAGRAPH_REFACTOR':('G-SCOPE-CARD','PASS_TECHNICAL_SCOPE','source-17786266',None,None),
 }
 rows=[]
 g.require(set(oldmap)==set(newmap)==set(expectations),'Comparison case inventory changed')
 for cid,expect in expectations.items():
  old=oldmap[cid];new=newmap[cid];rule,status,card,record,field=expect
  g.require(old['changed_file_hashes']==new['changed_file_hashes'],'Comparison input bytes differ: '+cid)
  g.require(olddata['typescript_module_sha256']==newdata['typescript_module_sha256'],'Comparison compiler changed')
  pool=new['target_observations']+new['not_evaluated_or_blocking_observations']
  matches=[]
  for o in pool:
   loc=o['source_locator']
   if o['rule_id']!=rule or o['technical_result']!=status or o['input_phase']!='analyst_calibration_fixture' or loc['file']!=new['target_path']:continue
   if card is not None and loc.get('card_id')!=card:continue
   if record is not None and loc.get('record_id')!=record:continue
   if field is not None and loc.get('field')!=field:continue
   if o not in matches:matches.append(o)
  g.require(matches,'Exact original comparison did not meet object-bound E2 expectation: '+cid)
  rows.append({'case_id':cid,'identical_mutation_input_bytes':True,'changed_file_hashes':new['changed_file_hashes'],
    'e1_counts':old['observed_counts'],'e2_counts':new['observed_counts'],'e1_target_observations':old['target_observations'],
    'e2_expected':{'rule':rule,'status':status,'card_id':card,'record_id':record,'field':field,'phase':'analyst_calibration_fixture'},
    'e2_target_observations':matches,'e2_expectation_met':True,'same_compiler_used':True})
 return {'schema':'neuvago-1e4e2-e1-comparison-v1','original_cases':len(rows),'e1_original_package_sha256':E1_SHA,'e1_rule_bytes_unchanged':True,
   'same_typescript_module':str(ts),'typescript_version':olddata['typescript_version'],'compiler_sha256':g.sha(Path(ts).read_bytes()),
   'all_eight_comparison_inputs_byte_identical':True,
   'e1_log_environment_note':'Original script contains historical environment labels; authoritative compiler/version for this replay is recorded here and in per-phase reports.',
   'pairs':rows,'baseline_is_not_scientific_approval':True,'user_repository_modified':False}
