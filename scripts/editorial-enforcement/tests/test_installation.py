#!/usr/bin/env python3
"""E3 tests: writes only in owned temp repos; never accepts a user's repo target."""
from __future__ import annotations
import copy,importlib.util,json,os,shutil,subprocess,sys,tempfile,unittest,zipfile
from pathlib import Path
from unittest.mock import patch
sys.dont_write_bytecode=True
T=Path(__file__).resolve().parents[1];ROOT=T.parents[1]
sys.path.insert(0,str(T))
import runtime as R
import installer_core as I
V=T/'vendor/e2';sys.path.insert(0,str(V/'support'))
import readonly_guard as G
import snapshot as S
import shadow as H
spec=importlib.util.spec_from_file_location('e3_fixture_helpers',V/'tests/test_shadow.py')
B=importlib.util.module_from_spec(spec);spec.loader.exec_module(B)
TS=os.environ.get('NEUVAGO_E1_TYPESCRIPT_MODULE')
if not TS:raise RuntimeError('Explicit preinstalled TypeScript module required')

def make_manifest(root):
    rows={}
    for dirname in R.ROOTS:
        for p in sorted((root/dirname).rglob('*')):
            if p.is_file() and p.relative_to(root).as_posix()!=R.MANIFEST:
                rows[p.relative_to(root).as_posix()]={'sha256':R.sha(p.read_bytes()),'mode':R.file_mode(p)}
    R.save(root/R.MANIFEST,{'schema':'neuvago-1e4e3-installation-manifest-v1','files':rows})

def package_manifest(package):
    f=package/'PACKAGE-MANIFEST.sha256'
    f.write_text(''.join(R.sha(p.read_bytes())+'  '+p.relative_to(package).as_posix()+'\n' for p in sorted(package.rglob('*')) if p.is_file() and p!=f),encoding='utf-8')

def synthetic_package(parent,exp):
    p=parent/'package';payload=p/'payload'
    for dirname in R.ROOTS:shutil.copytree(ROOT/dirname,payload/dirname)
    c=R.contract(payload);c['accepted_source_baseline']=exp['expected_commit'];c['synthetic_history_for_tests']=True
    c['synthetic_git_history']={k:exp[k] for k in ('expected_commit','original_capture_commit','batches','expected_remote_urls')}
    R.save(payload/R.CONTRACT,c);make_manifest(payload);package_manifest(p)
    return p,payload

def archive_ok(path):
    with zipfile.ZipFile(path) as z:
        assert z.testzip() is None
        root=z.namelist()[0].split('/')[0]+'/'
        rows={line.split('  ',1)[1]:line.split('  ',1)[0] for line in z.read(root+'REPORT-MANIFEST.sha256').decode().splitlines()}
        actual={n[len(root):] for n in z.namelist() if not n.endswith('/') and n!=root+'REPORT-MANIFEST.sha256'}
        assert actual==set(rows),(actual-set(rows),set(rows)-actual)
        for rel,h in rows.items():assert R.sha(z.read(root+rel))==h

def run_cli(repo,base,*args):
    output=base/'reports';output.mkdir(exist_ok=True)
    env=G.env();env.update(GIT_CONFIG_NOSYSTEM='1',GIT_CONFIG_GLOBAL=os.devnull)
    before=set(output.iterdir())
    proc=subprocess.run([sys.executable,'-I','-B',str(repo/R.TOOL_ROOT/'shadow_cli.py'),str(repo),'--output-parent',str(output),*args],env=env,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,timeout=150)
    dirs=[p for p in output.iterdir() if p not in before and p.is_dir()]
    if len(dirs)!=1:raise AssertionError(proc.stdout.decode(errors='replace'))
    result=R.strict_json((dirs[0]/'RESULT.json').read_bytes())
    return proc,result,dirs[0]

class StaticContractTests(unittest.TestCase):
    def test_payload_manifest_exact(self):self.assertGreater(len(R.verify_installation(ROOT)['files']),40)
    def test_engine_bytes_and_fingerprint_unchanged(self):
        G.manifest_check(V);self.assertEqual(H.rule_fingerprint(V),R.contract(ROOT)['accepted_e2_rules_sha256'])
    def test_contract_never_enables_gates(self):
        c=R.contract(ROOT)
        for k in ('ci_installed','enforcement_gates_installed','deployment_blocking_enabled','release_ready'):self.assertIs(c[k],False)
    def test_no_article_or_existing_registry_install_targets(self):
        for p in R.manifest_entries(ROOT):self.assertTrue(any(p.startswith(r+'/') for r in R.ROOTS));self.assertFalse(p.startswith('src/'))
    def test_explicit_manifest_not_prefix_ignore(self):self.assertNotIn('ignore_roots',R.contract(ROOT));self.assertNotIn('ignore_patterns',R.contract(ROOT))
    def test_source_baseline_not_automatically_head(self):self.assertEqual(R.exp_for(ROOT,H,V)['expected_commit'],R.contract(ROOT)['accepted_source_baseline'])
    def test_path_traversal_rejected(self):
        for p in ('../x','/tmp/x','a/../x','a//x','a\\x',''):
            with self.subTest(p=p),self.assertRaises(ValueError):R.safe_relative(p)
    def test_whitespace_filename_allowed(self):self.assertEqual(str(R.safe_relative('a/æ b\n.txt')),'a/æ b\n.txt')
    def test_duplicate_contract_keys_rejected(self):
        with self.assertRaises(ValueError):R.strict_json(b'{"mode":1,"mode":2}')
    def test_report_manifest_covers_nested_manifests(self):
        with tempfile.TemporaryDirectory() as d:
            r=Path(d)/'report';r.mkdir();(r/'child').mkdir();(r/'child/REPORT-MANIFEST.sha256').write_text('nested');(r/'x').write_text('ok')
            z,checksum=R.report_archive(r);archive_ok(z);self.assertEqual(checksum.read_text().split()[0],R.sha(z.read_bytes()))
    def test_repository_subdirectory_output_rejected(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(ValueError):R.outside(Path(d)/'reports',Path(d))
    def test_shell_launcher_syntax(self):self.assertEqual(subprocess.run(['/bin/bash','-n',str(T/'run-shadow.sh')]).returncode,0)
    def test_no_compiler_payload(self):self.assertFalse(any('node_modules' in p.parts for p in T.rglob('*')))

class RepoCase(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory(prefix='neuvago-e3-test-');self.base=Path(self.tmp.name).resolve()
        self.repo,self.exp,self.bare=B.make_repo(self.base);self.package,self.payload=synthetic_package(self.base,self.exp)
        self.install=R.verify_installation(self.payload);self.path=B.L[0]['path']
    def tearDown(self):self.tmp.cleanup()
    def pre(self):return I.preflight(self.repo,self.payload,self.install,self.exp,R,G,S,H,V)
    def add(self,subset=None):return I.write_new_files(self.repo,self.payload,self.install,sorted(subset if subset is not None else self.install['files']),R,self.base/'journal.json')
    def tool_commit(self):
        B.command(self.repo,'add','--',*R.ROOTS);B.command(self.repo,'commit','-qm','test: install E3 tooling only');return G.scalar(self.repo,'rev-parse','HEAD')
    def capture(self,phase='worktree',commit=None):return R.adapted_capture(self.repo,self.exp,phase,commit,self.install,G,S)
    def analyze(self,phase='worktree',commit=None):
        cap=self.capture(phase,commit);return cap,H.analyze(cap['engine_input'],self.repo/R.TOOL_ROOT/'vendor/e2',TS,H.fixture(V))

class InstallPlanTests(RepoCase):
    def test_initial_plan_is_readonly(self):
        c=R.controls(self.repo,G);p=self.pre();self.assertEqual(len(p['new_files']),len(self.install['files']));self.assertEqual(R.controls(self.repo,G),c)
    def test_full_add_and_exact_no_write_resume(self):
        c=R.controls(self.repo,G);self.add();p=self.pre();self.assertTrue(p['no_write_resume']);self.assertEqual(p['new_files'],[]);self.assertEqual(R.verify_installation(self.repo),self.install);self.assertEqual(R.controls(self.repo,G),c)
    def test_partial_exact_install_resumes_only_missing(self):
        paths=sorted(self.install['files']);self.add(paths[:3]);p=self.pre();self.assertEqual(p['recognized_existing_files'],paths[:3]);self.assertEqual(p['new_files'],paths[3:])
    def test_existing_unknown_target_not_overwritten(self):
        p=self.repo/R.CONTRACT;p.parent.mkdir(parents=True);p.write_text('unknown')
        with self.assertRaises(ValueError):self.pre()
        self.assertEqual(p.read_text(),'unknown')
    def test_public_source_edit_refused(self):
        (self.repo/self.path).write_bytes(B.F[self.path]+b'\n')
        with self.assertRaises(ValueError):self.pre()
        self.assertFalse((self.repo/R.DOC_ROOT).exists())
    def test_registry_edit_refused(self):
        (self.repo/self.exp['claim_registry_rel']).write_bytes(b'{}')
        with self.assertRaises(ValueError):self.pre()
    def test_staged_source_refused(self):
        (self.repo/self.path).write_bytes(B.F[self.path]+b'\n');B.command(self.repo,'add','--',self.path)
        with self.assertRaises(ValueError):self.pre()
    def test_staged_tool_subset_refused(self):
        self.add();B.command(self.repo,'add','--',R.CONTRACT)
        with self.assertRaises(ValueError):self.pre()
    def test_unrelated_untracked_file_refused(self):
        (self.repo/'æ unknown\n.txt').write_text('private')
        with self.assertRaises(ValueError):self.pre()
    def test_target_parent_symlink_refused(self):
        (self.repo/'scripts/editorial-enforcement').symlink_to(self.base,target_is_directory=True)
        with self.assertRaises(ValueError):self.pre()
    def test_existing_target_symlink_refused(self):
        p=self.repo/R.CONTRACT;p.parent.mkdir(parents=True);p.symlink_to(self.payload/R.CONTRACT)
        with self.assertRaises(ValueError):self.pre()
    def test_ignored_target_not_hidden(self):
        self.add();(self.repo/'.git/info/exclude').write_text('node_modules/\nscripts/editorial-enforcement/\n')
        with self.assertRaises(ValueError):self.pre()
    def test_unfinished_merge_refused(self):
        (self.repo/'.git/MERGE_HEAD').write_text(self.exp['expected_commit'])
        with self.assertRaises(ValueError):self.pre()
    def test_source_baseline_wrong_hash_refused(self):
        exp=copy.deepcopy(self.exp);exp['locked_hashes'][self.path]='0'*64
        with self.assertRaises(ValueError):R.validate_baseline(self.repo,exp,V,G,S,H)
    def test_unknown_descendant_refused_by_initial_installer(self):
        B.command(self.repo,'commit','--allow-empty','-qm','other commit')
        with self.assertRaises(ValueError):self.pre()
    def test_writing_failure_rolls_back_own_files(self):
        paths=sorted(self.install['files'])[:3]
        with self.assertRaises(RuntimeError):I.write_new_files(self.repo,self.payload,self.install,paths,R,self.base/'journal.json',failure_after=2)
        self.assertTrue(all(not (self.repo/p).exists() for p in paths));self.assertEqual(S.status_records(self.repo),[])
    def test_write_failure_preserves_existing_subset(self):
        paths=sorted(self.install['files']);self.add(paths[:1])
        with self.assertRaises(RuntimeError):I.write_new_files(self.repo,self.payload,self.install,paths[1:4],R,self.base/'journal.json',failure_after=2)
        self.assertEqual((self.repo/paths[0]).read_bytes(),(self.payload/paths[0]).read_bytes())
    def test_concurrent_unknown_creation_not_overwritten(self):
        paths=sorted(self.install['files'])[:2];p=self.repo/paths[1];p.parent.mkdir(parents=True);p.write_text('concurrent')
        with self.assertRaises(FileExistsError):I.write_new_files(self.repo,self.payload,self.install,paths,R,self.base/'journal.json')
        self.assertEqual(p.read_text(),'concurrent');self.assertFalse((self.repo/paths[0]).exists())
    def test_rollback_leaves_concurrent_rewrite(self):
        paths=sorted(self.install['files'])[:2];first=self.repo/paths[0];real=I.os.fsync;calls=[]
        def fail(fd):
            calls.append(fd)
            if len(calls)==2:first.write_text('concurrent change');raise OSError('simulated fsync failure')
            real(fd)
        with patch.object(I.os,'fsync',side_effect=fail),self.assertRaises(OSError):I.write_new_files(self.repo,self.payload,self.install,paths,R,self.base/'journal.json')
        self.assertEqual(first.read_text(),'concurrent change');self.assertFalse((self.repo/paths[1]).exists())
    def test_missing_confirmation_report_no_write(self):
        res,_,z,_=I.execute(self.repo,self.package,False,self.base/'output',False,False)
        self.assertEqual(res['failed_stage'],'PACKAGE_PREFLIGHT');self.assertFalse(res['tooling_installed']);self.assertEqual(S.status_records(self.repo),[]);archive_ok(z)
    def test_tampered_package_stops_before_runtime_import(self):
        (self.payload/R.TOOL_ROOT/'runtime.py').write_text('raise RuntimeError("must never import")')
        res,_,z,_=I.execute(self.repo,self.package,True,self.base/'output',False,False)
        self.assertIn('hash mismatch',res['error']);self.assertEqual(S.status_records(self.repo),[]);archive_ok(z)
    def test_foreign_remote_stops_before_write(self):
        B.command(self.repo,'remote','set-url','origin',str(self.base/'unrelated.git'))
        res,*_=I.execute(self.repo,self.package,True,self.base/'output',False,False)
        self.assertNotEqual(res['status'],I.SUCCESS);self.assertFalse((self.repo/R.TOOL_ROOT).exists())

class PhaseAndEntryTests(RepoCase):
    def setUp(self):super().setUp();self.add()
    def test_three_phases_same_e2_meanings_before_tool_commit(self):
        sig=[]
        for phase in ('worktree','index','commit'):
            cap,r=self.analyze(phase);self.assertEqual(r['summary']['by_result'],{'PASS_TECHNICAL_SCOPE':536,'REVIEW_REQUIRED':34});sig.append(R.semantic_signature(r))
            self.assertTrue(H.binding_matches(r,cap['engine_input'],V,TS));self.assertFalse(cap['engine_input']['meta']['changed_paths'])
        self.assertEqual(len(set(sig)),1)
    def test_raw_tool_paths_not_lost(self):
        cap=self.capture();self.assertEqual(set(cap['raw']['meta']['changed_paths']),set(self.install['files']));self.assertEqual(cap['engine_input']['meta']['changed_paths'],[]);self.assertEqual(len(cap['tooling_inventory']),len(self.install['files']))
    def test_full_tool_staging_recognized(self):
        B.command(self.repo,'add','--',*R.ROOTS);cap,r=self.analyze('index');self.assertEqual(r['summary']['by_result'],{'PASS_TECHNICAL_SCOPE':536,'REVIEW_REQUIRED':34});self.assertFalse(any(x['would_block_if_enforced'] for x in cap['integration_observations']))
    def test_partial_tool_staging_visible(self):
        B.command(self.repo,'add','--',R.CONTRACT);cap=self.capture('index');self.assertTrue(any(x['would_block_if_enforced'] for x in cap['integration_observations']))
    def test_unknown_staged_tooling_not_ignored(self):
        p=self.repo/R.TOOL_ROOT/'README-test.txt';p.write_text('extra');B.command(self.repo,'add','--',str(p.relative_to(self.repo)));cap=self.capture('index');self.assertIn(str(p.relative_to(self.repo)),cap['engine_input']['meta']['changed_paths'])
    def test_index_distinct_from_worktree_and_commit(self):
        correct=B.F[self.path];wrong=correct.replace(b'pubmed.ncbi.nlm.nih.gov/17786266/',b'pubmed.ncbi.nlm.nih.gov/12490959/',1)
        self.assertNotEqual(correct,wrong);(self.repo/self.path).write_bytes(wrong);B.command(self.repo,'add','--',self.path);(self.repo/self.path).write_bytes(correct)
        work=self.capture('worktree');index=self.capture('index');commit=self.capture('commit',self.exp['expected_commit'])
        self.assertEqual(work['engine_input']['files'][self.path],correct);self.assertEqual(index['engine_input']['files'][self.path],wrong);self.assertEqual(commit['engine_input']['files'][self.path],correct)
        _,ir=self.analyze('index');self.assertTrue(any(o['rule_id']=='G-ID-PMID' and o['technical_result']=='WOULD_BLOCK' and o['source_locator']['file']==self.path for o in ir['rule_observations']))
    def test_committed_tooling_does_not_replace_source_baseline(self):
        pre_cap,pre=self.analyze();head=self.tool_commit();post_cap,post=self.analyze('commit',head)
        self.assertEqual(R.exp_for(self.repo,H,self.repo/R.TOOL_ROOT/'vendor/e2')['expected_commit'],self.exp['expected_commit']);self.assertEqual(R.semantic_signature(pre),R.semantic_signature(post))
        self.assertNotEqual(pre_cap['engine_input']['meta']['snapshot_fingerprint'],post_cap['engine_input']['meta']['snapshot_fingerprint']);self.assertEqual(post_cap['engine_input']['meta']['selected_commit'],head)
    def test_committed_source_delta_after_tool_commit_reported(self):
        self.tool_commit();(self.repo/self.path).write_bytes(B.F[self.path]+b'\n');B.command(self.repo,'add','--',self.path);B.command(self.repo,'commit','-qm','changed article')
        cap,r=self.analyze('commit');self.assertIn(self.path,cap['engine_input']['meta']['changed_paths']);self.assertTrue(B.has(r,'G-SCOPE-TEXT-CHANGE','REVIEW_REQUIRED'))
    def test_unknown_source_change_not_silent(self):
        rel='src/app/unknown-new/page.tsx';p=self.repo/rel;p.parent.mkdir(parents=True);p.write_text('export default ()=>null;')
        cap,r=self.analyze();self.assertIn(rel,cap['engine_input']['meta']['changed_paths']);self.assertTrue(any(o['source_locator']['file']==rel and o['technical_result'] in ('NOT_EVALUATED','REVIEW_REQUIRED') for o in r['rule_observations']))
    def test_tool_commit_installed_cli_and_historical_commit(self):
        p,r,d=run_cli(self.repo,self.base);self.assertEqual(p.returncode,0,p.stdout.decode());head=self.tool_commit()
        p2,r2,d2=run_cli(self.repo,self.base);self.assertEqual(p2.returncode,0,p2.stdout.decode());self.assertEqual(r2['observed_head'],head)
        self.assertEqual(r2['accepted_source_baseline'],self.exp['expected_commit']);self.assertEqual(r['phase_semantic_signatures'],r2['phase_semantic_signatures'])
        p3,r3,_=run_cli(self.repo,self.base,'--phase','commit','--commit',self.exp['expected_commit']);self.assertEqual(p3.returncode,0,p3.stdout.decode());self.assertEqual(r3['selected_commit'],self.exp['expected_commit'])
        archive_ok(Path(str(d)+'-share.zip'));archive_ok(Path(str(d2)+'-share.zip'))
    def test_installed_cli_root_alias_and_repeat_unchanged(self):
        alias=self.base/'root alias';alias.symlink_to(self.repo,target_is_directory=True);before=R.controls(self.repo,G)
        p,r,_=run_cli(alias,self.base,'--phase','worktree');self.assertEqual(p.returncode,0,p.stdout.decode());p2,r2,_=run_cli(alias,self.base,'--phase','worktree');self.assertEqual(p2.returncode,0)
        self.assertTrue(r2['repository_unchanged']);self.assertEqual(R.controls(self.repo,G),before)
    def test_cli_reports_blocks_without_activation(self):
        (self.repo/self.path).write_bytes(B.F[self.path].replace(b'pubmed.ncbi.nlm.nih.gov/17786266/',b'pubmed.ncbi.nlm.nih.gov/12490959/',1))
        p,r,_=run_cli(self.repo,self.base,'--phase','worktree');self.assertEqual(p.returncode,0,p.stdout.decode());self.assertTrue(r['has_would_block']);self.assertFalse(r['deployment_blocking_enabled'])
    def test_cli_invalid_registry_error_not_pass(self):
        (self.repo/self.exp['evidence_registry_rel']).write_text('{bad json');p,r,_=run_cli(self.repo,self.base,'--phase','worktree');self.assertEqual(p.returncode,2);self.assertEqual(r['execution_status'],'ERROR');self.assertTrue(r['repository_unchanged'])
    def test_cli_missing_input_error(self):
        (self.repo/self.path).unlink();p,r,_=run_cli(self.repo,self.base,'--phase','worktree');self.assertEqual(p.returncode,2);self.assertEqual(r['execution_status'],'ERROR')
    def test_cli_unsupported_control_flow_not_pass(self):
        text=B.F[self.path].decode();idx=text.index('return (');text=text[:idx]+'if (true) return null;\n  '+text[idx:];(self.repo/self.path).write_text(text)
        p,r,d=run_cli(self.repo,self.base,'--phase','worktree');self.assertEqual(p.returncode,0,p.stdout.decode());rows=json.loads((d/'phases/worktree.json').read_text())['rule_observations']
        self.assertTrue(any(o['rule_id']=='G-ROUTES-TARGET' and o['source_locator']['file']==self.path and o['technical_result']=='NOT_EVALUATED' for o in rows))
    def test_cli_tampered_contract_refused(self):
        (self.repo/R.CONTRACT).write_text('{}');p,r,_=run_cli(self.repo,self.base);self.assertEqual(p.returncode,2);self.assertFalse(r['ci_installed'])
    def test_cli_unknown_toolfile_refused(self):
        (self.repo/R.TOOL_ROOT/'unknown.py').write_text('print(1)');p,r,_=run_cli(self.repo,self.base);self.assertEqual(p.returncode,2)
    def test_cli_full_oid_required(self):
        p,r,_=run_cli(self.repo,self.base,'--phase','commit','--commit','HEAD');self.assertEqual(p.returncode,2);self.assertIn('full commit',r['error'])
    def test_cli_old_prebaseline_commit_refused(self):
        p,r,_=run_cli(self.repo,self.base,'--phase','commit','--commit',self.exp['original_capture_commit']);self.assertEqual(p.returncode,2);self.assertIn('descend',r['error'])
    def test_known_tooling_index_mismatch_not_masked_by_correct_worktree(self):
        rel=R.TOOL_ROOT+'/runtime.py';p=self.repo/rel;right=p.read_bytes();p.write_bytes(right+b'\n# staged change\n')
        B.command(self.repo,'add','--',rel);p.write_bytes(right)
        cap=self.capture('index')
        self.assertIn(rel,cap['engine_input']['meta']['changed_paths'])
        self.assertTrue(any(row['path']==rel and row['classification']=='TOOLING_MISMATCH' for row in cap['tooling_inventory']))
        self.assertTrue(any(row['rule_id']=='G-LIFECYCLE-E3-TOOL-STAGING' and row['would_block_if_enforced'] for row in cap['integration_observations']))
    def test_source_changes_after_snapshot_invalidates_report(self):
        real=H.analyze
        def mutate(*args,**kwargs):
            value=real(*args,**kwargs);(self.repo/self.path).write_bytes(B.F[self.path]+b'\n# concurrent change\n');return value
        with patch.object(H,'analyze',side_effect=mutate):
            r,_,z,_=R.execute(self.repo,('worktree',),output_parent=self.base/'reports',expected_runtime_root=self.repo)
        self.assertEqual(r['execution_status'],'ERROR');self.assertIn('changed',r['error']);archive_ok(z)
    def test_installed_cli_physical_root_with_newline(self):
        new=self.base/'repo with space\nand newline';self.repo.rename(new);self.repo=new
        p,r,_=run_cli(self.repo,self.base,'--phase','commit');self.assertEqual(p.returncode,0,p.stdout.decode());self.assertTrue(r['git_control_files_unchanged'])
    def test_installed_cli_keeps_hook_configuration_unchanged(self):
        hook=self.repo/'.git/hooks/pre-commit';hook.write_text('#!/bin/sh\necho should-not-run >&2\nexit 19\n');hook.chmod(0o755)
        before=R.controls(self.repo,G);p,r,_=run_cli(self.repo,self.base,'--phase','commit')
        self.assertEqual(p.returncode,0,p.stdout.decode());self.assertEqual(R.controls(self.repo,G),before)
    def test_cli_no_pyc_or_project_reports(self):
        before={p.relative_to(self.repo).as_posix() for p in (self.repo/R.TOOL_ROOT).rglob('*') if p.is_file()}
        p,r,_=run_cli(self.repo,self.base,'--phase','commit');self.assertEqual(p.returncode,0,p.stdout.decode())
        self.assertEqual(before,{p.relative_to(self.repo).as_posix() for p in (self.repo/R.TOOL_ROOT).rglob('*') if p.is_file()});self.assertFalse(any((self.repo/R.TOOL_ROOT).rglob('__pycache__')))

class WholeInstallerTests(RepoCase):
    def test_complete_installer_and_no_write_resume(self):
        before=R.controls(self.repo,G);result,_,archive,_=I.execute(self.repo,self.package,True,self.base/'install-reports',False,False)
        self.assertEqual(result['status'],I.SUCCESS,result);archive_ok(archive)
        result2,_,archive2,_=I.execute(self.repo,self.package,True,self.base/'install-reports',False,False)
        self.assertEqual(result2['status'],I.SUCCESS,result2);self.assertEqual(result2['tooling_files_created_this_run'],0);self.assertTrue(result2['recognized_no_write_resume']);archive_ok(archive2);self.assertEqual(R.controls(self.repo,G),before)
    def test_command_failure_retains_exact_new_tooling(self):
        real=I.run_logged
        def fail(argv,*args,**kw):
            if any('shadow_cli.py' in str(s) for s in argv):raise RuntimeError('simulated installed command failure')
            return real(argv,*args,**kw)
        with patch.object(I,'run_logged',side_effect=fail):res,_,z,_=I.execute(self.repo,self.package,True,self.base/'install-reports',False,False)
        self.assertEqual(res['failed_stage'],'INSTALLED_ENTRY_ACCEPTANCE');self.assertTrue(res['tooling_installed']);self.assertEqual(R.verify_installation(self.repo),self.install);archive_ok(z)
    def test_payload_mutation_refused_before_install(self):
        p=self.payload/R.TOOL_ROOT/'runtime.py';p.write_text(p.read_text()+'\n');res,*_=I.execute(self.repo,self.package,True,self.base/'install-reports',False,False)
        self.assertEqual(res['failed_stage'],'PACKAGE_PREFLIGHT');self.assertEqual(S.status_records(self.repo),[])

if __name__=='__main__':unittest.main(verbosity=2)
