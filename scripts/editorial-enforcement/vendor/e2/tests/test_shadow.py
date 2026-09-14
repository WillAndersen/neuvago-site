#!/usr/bin/env python3
"""Private fixture repos only; no user-project input to mutation tests."""
from __future__ import annotations
import contextlib,copy,io,json,os,re,subprocess,sys,tempfile,unittest,zipfile
from pathlib import Path
from unittest.mock import patch
sys.dont_write_bytecode=True
P=Path(__file__).resolve().parents[1];sys.path.insert(0,str(P/'support'))
import readonly_guard as G
import snapshot as S
import shadow as H
import mutations as M
import historical_html as HH
import run as R
E=H.load(P/'support/expected-state.json');F=H.fixture(P);L=H.load(P/'reference/delivery-ledger.json')['routes']
TS=os.environ.get('NEUVAGO_E1_TYPESCRIPT_MODULE')
if not TS:raise RuntimeError('Explicit preinstalled TypeScript compiler path required for tests')
with zipfile.ZipFile(P/'fixtures/pre-delivery-pages.zip') as z:OLD={n:z.read(n) for n in z.namelist()}
CACHE={}
def baseline():
    if not CACHE:
        req={r['path']:F[r['path']] for r in L};req.update({p:F[p] for p in H.GLOSSARY})
        CACHE['ast']=H.project(req,P,TS);CACHE['bp']={r['path']:r for r in CACHE['ast']['files']}
        CACHE['report']=H.analyze(M.memory_snapshot(F,F,'commit'),P,TS,F,CACHE['ast'],CACHE['bp'])
    return CACHE['report']
def evaluate(files,phase='isolated'):
    baseline();snap=M.memory_snapshot(files,F,phase);ast=copy.deepcopy(CACHE['ast']);changed={p for p in CACHE['bp'] if files.get(p)!=F.get(p)}
    ast['files']=[v for v in ast['files'] if v['path'] not in changed]
    if any(p in files for p in changed):ast['files'].extend(H.project({p:files[p] for p in changed if p in files},P,TS)['files'])
    return H.analyze(snap,P,TS,F,ast,CACHE['bp'])
def command(root,*args):
    env=G.env();env.update(GIT_CONFIG_NOSYSTEM='1',GIT_CONFIG_GLOBAL=os.devnull)
    return subprocess.check_output(['git','-c','core.fsmonitor=false','-C',str(root),*args],env=env,stderr=subprocess.DEVNULL)
def put(root,rows):
    for rel,b in rows.items():p=root/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(b)
def make_repo(base):
    root=(base/'repo').resolve();root.mkdir(parents=True);put(root,F);put(root,OLD)
    command(root,'init','-q','-b','main');command(root,'config','user.name','E1 Fixture');command(root,'config','user.email','fixture@example.invalid');command(root,'config','core.autocrlf','false')
    command(root,'add','--all');command(root,'commit','-qm','Synthetic baseline')
    exp=copy.deepcopy(E);head=G.scalar(root,'rev-parse','HEAD');exp['original_capture_commit']=head
    for row in exp['batches']:
        row['parent']=head
        for p in row['paths']:(root/p).write_bytes(F[p])
        command(root,'add','--',*row['paths']);command(root,'commit','-qm',row['commit_message']);head=G.scalar(root,'rev-parse','HEAD');row['commit']=head
    exp['expected_commit']=head
    bare=base/'origin.git';command(base,'init','-q','--bare',str(bare));command(root,'remote','add','origin',str(bare));command(root,'push','-q','-u','origin','main');exp['expected_remote_urls']=[str(bare)]
    (root/'.git/info/exclude').write_text('node_modules/\n')
    d=root/'node_modules/typescript/lib';d.mkdir(parents=True);(d/'typescript.js').symlink_to(Path(TS).resolve())
    return root,exp,bare
def has(r,rule,result):return any(v['rule_id']==rule and v['technical_result']==result for v in r['rule_observations'])
class FaultMatrixTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):cls.matrix=M.run_matrix(P,TS,F)
for case in M.specs(P):
    def make_test(name):
        def test(self):
            row=next(v for v in self.matrix['cases'] if v['case_id']==name)
            self.assertTrue(row['demonstrated'],json.dumps(row,ensure_ascii=False));self.assertFalse(row['user_source_mutated'])
        return test
    setattr(FaultMatrixTests,'test_'+case['name'],make_test(case['name']))

class ContractTests(unittest.TestCase):
    def test_fixture_hashes(self):self.assertEqual({p:G.sha(b) for p,b in F.items()},E['locked_hashes']);self.assertEqual(len(F),252)
    def test_no_environment_fixture(self):self.assertFalse(any(Path(p).name.startswith('.env') or p.startswith('.git/') for p in F))
    def test_all_five_rule_families(self):
        rows=baseline()['rule_observations']
        for k in ['G-LIFECYCLE','G-ID','G-REVIEW','G-SCOPE','G-ROUTES']:self.assertTrue(any(v['rule_id'].startswith(k) for v in rows))
    def test_baseline_no_blocks(self):self.assertEqual(baseline()['summary']['by_result'],{'PASS_TECHNICAL_SCOPE':536,'REVIEW_REQUIRED':34})
    def test_all_eleven_and_23(self):self.assertEqual((baseline()['summary']['declared_routes'],baseline()['summary']['expected_source_cards']),(11,23))
    def test_use_and_applicability_reviews(self):
        rows=baseline()['rule_observations'];self.assertEqual(sum(v['rule_id']=='G-REVIEW-USE' for v in rows),23);self.assertEqual(sum(v['rule_id']=='G-ROUTES-APPLICABILITY' for v in rows),11)
    def test_all_report_fields(self):
        fields=set(H.load(P/'reference/design-v1.json')['report_contract']['must_report_fields'])
        for v in baseline()['rule_observations']:self.assertTrue(fields<=set(v));self.assertFalse(v['scientific_claim_support_approved'])
    def test_other_inputs_not_silently_passed(self):self.assertTrue(any(v['status']=='NOT_EVALUATED' for v in baseline()['coverage']))
    def test_flags_stay_false(self):
        for k in ['release_ready','enforcement_gates_installed','claim_support_review_complete','full_corpus_source_integrity_verified','production_verified','visual_layout_verified']:self.assertFalse(baseline()[k])
    def test_stale_binding(self):
        sn=M.memory_snapshot(F,F,'commit');self.assertTrue(H.binding_matches(baseline(),sn,P,TS));sn['meta']['snapshot_fingerprint']='stale';self.assertFalse(H.binding_matches(baseline(),sn,P,TS))
    def test_input_not_mutated(self):
        old=dict(F);evaluate(F);self.assertEqual(old,F)
    def test_harmless_edit_review_not_global_ban(self):
        f=dict(F);f[L[0]['path']]+=b'\n';r=evaluate(f);self.assertTrue(has(r,'G-SCOPE-TEXT-CHANGE','REVIEW_REQUIRED'));self.assertFalse(r['summary']['by_result'].get('WOULD_BLOCK'))
    def test_duplicate_json_keys(self):
        f=dict(F);f[E['claim_registry_rel']]=b'{"claims": [], "claims": []}';self.assertTrue(has(evaluate(f),'G-REVIEW-PARSER','OPERATIONAL_ERROR'))
    def test_missing_registry_collection(self):
        f=dict(F);f[E['claim_registry_rel']]=b'{}';self.assertTrue(has(evaluate(f),'G-REVIEW-PARSER','OPERATIONAL_ERROR'))
    def test_immutable_historical_lock(self):
        f=dict(F);p=json.loads(f[E['legacy_index_rel']])['locks'][-1]['file'];f[p]+=b'changed';self.assertTrue(has(evaluate(f),'G-SCOPE-HISTORY','WOULD_BLOCK'))
    def test_source_never_executed(self):
        f=dict(F);p=L[0]['path'];f[p]=b'throw new Error("must never execute");\n'+f[p];self.assertFalse(evaluate(f)['summary']['by_result'].get('OPERATIONAL_ERROR'))
    def test_dynamic_component_explicit_not_evaluated(self):
        f=dict(F);p=L[0]['path'];f[p]=f[p].replace(b'<main',b'<UnknownMain',1).replace(b'</main>',b'</UnknownMain>',1);self.assertTrue(has(evaluate(f),'G-ROUTES-TARGET','NOT_EVALUATED'))
    def test_scope_hidden(self):
        f=dict(F);p=L[0]['path'];scope=L[0]['references'][0]['inherited_metadata']['scope'];t=f[p].decode();i=t.rfind('<p ',0,t.index(scope));t=t[:i]+t[i:].replace('<p ','<p hidden ',1);f[p]=t.encode();self.assertTrue(has(evaluate(f),'G-SCOPE-CARD','WOULD_BLOCK'))
    def test_historical_html_same_cards(self):
        r=HH.run(P,TS,F);self.assertEqual(r['summary']['by_result'],{'PASS_TECHNICAL_SCOPE':536,'REVIEW_REQUIRED':34});self.assertFalse(r['current_rendering_verified']);self.assertEqual(len(r['origins']),11)
    def test_glossary_selected_term_broken_link(self):
        baseline();p=H.GLOSSARY[0];f=dict(F);t=f[p].decode();start=t.index('"slug": "vagal-tone"');end=t.index('"sourceLinks":',start);tail=t[end:];tail,n=re.subn(r'"href": "[^"]+"','"href": "/broken"',tail,count=1);self.assertEqual(n,1);f[p]=(t[:end]+tail).encode();self.assertTrue(has(evaluate(f),'G-ROUTES-GLOSSARY','WOULD_BLOCK'))
    def test_121_findings_110_carried(self):
        q=H.load(P/'reference/d7/review-queue-reconciliation.json');self.assertEqual(q['carried_forward_findings'],110);self.assertEqual(len(q['rows']),121)
    def test_twelve_intake_candidates_not_changed(self):self.assertEqual(len(H.load(P/'reference/d7/reference-intake-candidates.json')['intake_candidates']),12)

class GitTests(unittest.TestCase):
    def setUp(self):self.tmp=tempfile.TemporaryDirectory();self.base=Path(self.tmp.name).resolve();self.repo,self.exp,self.bare=make_repo(self.base);self.path=L[0]['path']
    def tearDown(self):self.tmp.cleanup()
    def test_chain_and_baseline(self):self.assertEqual(len(G.verify_chain(self.repo,self.exp)),4);self.assertEqual(G.snapshot(self.repo,self.exp)['locked_file_count'],252)
    def test_three_phase_bytes_no_writes(self):
        before=G.control_snapshot(self.repo)
        for phase in S.PHASES:self.assertEqual(S.capture(self.repo,self.exp,phase)['files'],F)
        self.assertEqual(before,G.control_snapshot(self.repo))
    def test_index_bytes_differ_worktree(self):
        f=self.repo/self.path;bad=F[self.path].replace(b'https://pubmed.ncbi.nlm.nih.gov/17786266/',b'https://pubmed.ncbi.nlm.nih.gov/1660159/');f.write_bytes(bad);command(self.repo,'add','--',self.path);f.write_bytes(F[self.path])
        before=G.control_snapshot(self.repo);ix=S.capture(self.repo,self.exp,'index');wt=S.capture(self.repo,self.exp,'worktree');self.assertEqual(ix['files'][self.path],bad);self.assertEqual(wt['files'][self.path],F[self.path])
        r=H.analyze(ix,P,TS,F);self.assertTrue(has(r,'G-ID-PMID','WOULD_BLOCK'));self.assertTrue(has(r,'G-LIFECYCLE-MIXED-STAGING','WOULD_BLOCK'));self.assertEqual(before,G.control_snapshot(self.repo))
    def test_named_commit_and_postcommit_phase(self):
        f=self.repo/self.path;f.write_bytes(F[self.path]+b'\n');command(self.repo,'add','--',self.path);command(self.repo,'commit','-qm','Synthetic new commit');new=G.scalar(self.repo,'rev-parse','HEAD')
        old=S.capture(self.repo,self.exp,'commit',self.exp['expected_commit']);now=S.capture(self.repo,self.exp,'commit',new);self.assertEqual(old['files'][self.path],F[self.path]);self.assertNotEqual(now['files'][self.path],F[self.path]);self.assertEqual(now['meta']['selected_commit'],new);self.assertTrue(has(H.analyze(now,P,TS,F),'G-LIFECYCLE-STAGING','PASS_TECHNICAL_SCOPE'))
    def test_partial_staging(self):
        for p in [self.path,L[1]['path']]:(self.repo/p).write_bytes(F[p]+b'\n')
        command(self.repo,'add','--',self.path);r=H.analyze(S.capture(self.repo,self.exp,'index'),P,TS,F);self.assertTrue(has(r,'G-LIFECYCLE-PARTIAL-STAGING','WOULD_BLOCK'))
    def test_full_stage_supported(self):
        (self.repo/self.path).write_bytes(F[self.path]+b'\n');command(self.repo,'add','--',self.path);r=H.analyze(S.capture(self.repo,self.exp,'index'),P,TS,F);self.assertFalse(has(r,'G-LIFECYCLE-PARTIAL-STAGING','WOULD_BLOCK'));self.assertTrue(has(r,'G-SCOPE-TEXT-CHANGE','REVIEW_REQUIRED'))
    def test_root_alias(self):
        a=self.base/'alias';a.symlink_to(self.repo,target_is_directory=True);self.assertEqual(G.root_path(a),self.repo)
    def test_subdir_rejected(self):
        with self.assertRaises(ValueError):G.root_path(self.repo/'src')
    def test_internal_symlink_rejected(self):
        p=self.repo/self.path;data=p.read_bytes();p.unlink();other=self.base/'external';other.write_bytes(data);p.symlink_to(other)
        with self.assertRaises(ValueError):G.snapshot(self.repo,self.exp)
    def test_special_status_path(self):
        name='src/ø space\nquote".tsx';(self.repo/name).write_text('test');self.assertIn({'xy':'??','path':name},S.status_records(self.repo));self.assertIn(name,S.capture(self.repo,self.exp,'worktree')['meta']['changed_paths'])
    def test_delete_read_error(self):
        (self.repo/self.path).unlink();self.assertTrue(any(v['path']==self.path for v in S.capture(self.repo,self.exp,'worktree')['meta']['read_errors']))
    def test_write_commands_refused(self):
        for cmd in ['add','commit','fetch','push','reset','checkout','write-tree']:
            with self.assertRaises(ValueError):G.git(self.repo,cmd)
        with self.assertRaises(ValueError):G.git(self.repo,'branch','forbidden-branch')
    def test_snapshot_detects_change(self):
        a=S.capture(self.repo,self.exp,'worktree');(self.repo/self.path).write_bytes(F[self.path]+b'\n');b=S.capture(self.repo,self.exp,'worktree');self.assertFalse(S.phase_unchanged(a,b))
    def test_secret_bytes_not_read(self):
        (self.repo/'.env.local').write_text('SECRET_VALUE=abc');sn=S.capture(self.repo,self.exp,'worktree');self.assertNotIn('.env.local',sn['files']);self.assertNotIn('SECRET_VALUE',json.dumps(sn['meta']))
    def test_redirected_environment_refused(self):
        with patch.dict(os.environ,{'GIT_INDEX_FILE':'/unknown'}):
            with self.assertRaises(ValueError):G.env()
    def test_node_preload_sanitized(self):
        with patch.dict(os.environ,{'NODE_OPTIONS':'--require /unknown','NODE_PATH':'/unknown'}):self.assertNotIn('NODE_OPTIONS',G.env());self.assertNotIn('NODE_PATH',G.env())
    def test_remote_drift_refused(self):
        command(self.bare,'update-ref','refs/heads/main',self.exp['original_capture_commit'])
        with self.assertRaises(ValueError):G.remote(self.repo,self.exp)
    def test_full_driver_and_no_write_rerun(self):
        before=G.control_snapshot(self.repo)
        for i in range(2):
            with contextlib.redirect_stdout(io.StringIO()):r,report,z,sha=R.execute(self.repo,P,self.base/'reports',self.exp,False,False)
            self.assertEqual(r['status'],R.STATUS,r);self.assertEqual(before,G.control_snapshot(self.repo));self.assertEqual(r['fault_expectations_met'],45);self.assertEqual(sha.read_text().split()[0],G.sha(z.read_bytes()))
            with zipfile.ZipFile(z) as a:self.assertIsNone(a.testzip());self.assertFalse(any('/.env' in n for n in a.namelist()))
    def test_dirty_stop_packaged_no_reset(self):
        p=self.repo/self.path;p.write_bytes(F[self.path]+b'changed')
        with contextlib.redirect_stdout(io.StringIO()):r,report,z,sha=R.execute(self.repo,P,self.base/'reports',self.exp,False,False)
        self.assertEqual(r['execution_status'],'ERROR');self.assertTrue(z.is_file());self.assertTrue(p.read_bytes().endswith(b'changed'))
    def test_output_inside_repo_rejected(self):
        with self.assertRaises(ValueError):R.execute(self.repo,P,self.repo/'report',self.exp,False,False)

class PackagingTests(unittest.TestCase):
    def test_manifest_tamper(self):
        with tempfile.TemporaryDirectory() as t:
            p=Path(t);(p/'hello').write_bytes(b'hi');(p/'PACKAGE-MANIFEST.sha256').write_text(G.sha(b'hi')+'  hello\n');self.assertEqual(G.manifest_check(p),1);(p/'hello').write_bytes(b'changed')
            with self.assertRaises(ValueError):G.manifest_check(p)
    def test_manifest_extra(self):
        with tempfile.TemporaryDirectory() as t:
            p=Path(t);(p/'PACKAGE-MANIFEST.sha256').write_text('');(p/'extra').write_bytes(b'1')
            with self.assertRaises(ValueError):G.manifest_check(p)
    def test_report_archive_hash_and_paths(self):
        with tempfile.TemporaryDirectory() as t:
            p=Path(t)/'report';p.mkdir();G.save(p/'RESULT.json',{'test':True});z,sha=R.report_archive(p);self.assertEqual(sha.read_text().split()[0],G.sha(z.read_bytes()))
            with zipfile.ZipFile(z) as a:self.assertTrue(all(n.startswith('report/') for n in a.namelist()));self.assertIsNone(a.testzip())

if __name__=='__main__':unittest.main(verbosity=2)
