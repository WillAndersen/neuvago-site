#!/usr/bin/env python3
"""E2 reporting-only driver. No write command can target the inspected Git repository."""
from __future__ import annotations
import argparse,datetime,json,os,subprocess,sys,tempfile,zipfile,platform
from collections import Counter
from pathlib import Path
sys.dont_write_bytecode=True
import readonly_guard as g
import snapshot as ss
import shadow as sh
import mutations as mu
import historical_html as hh
import calibration as cal
import legacy_compare as legacy

STATUS='PASS_1E4E2_SHADOW_GATE_CALIBRATION_CAPTURED'
GATE='RETURN_1E4E2_SHADOW_CALIBRATION_FOR_RULE_REVIEW'

def outside(path,repo):
    p=Path(path).expanduser().resolve();r=Path(repo).expanduser().resolve()
    g.require(p!=r and r not in p.parents,'Package and output must be outside inspected repository')
    return p

def report_archive(report):
    entries={}
    for p in sorted(report.rglob('*')):
        g.require(not p.is_symlink(),'Report symlink refused')
        if p.is_file() and p.name!='REPORT-MANIFEST.sha256':entries[p.relative_to(report).as_posix()]=g.sha(p.read_bytes())
    (report/'REPORT-MANIFEST.sha256').write_text(''.join(f'{h}  {p}\n' for p,h in entries.items()),encoding='utf-8')
    archive=report.parent/(report.name+'-share.zip')
    with zipfile.ZipFile(archive,'x',zipfile.ZIP_DEFLATED) as z:
        for p in sorted(report.rglob('*')):
            if p.is_file():z.write(p,arcname=report.name+'/'+p.relative_to(report).as_posix())
    checksum=Path(str(archive)+'.sha256.txt');checksum.write_text(g.sha(archive.read_bytes())+'  '+archive.name+'\n',encoding='utf-8')
    return archive,checksum

def selftests(package,report,typescript):
    test_result=legacy.run_unchanged_tests(package,report,typescript)
    temp=report/'isolated-calibrated-test-temp';temp.mkdir()
    env=g.env();env.update(PYTHONDONTWRITEBYTECODE='1',TMPDIR=str(temp),NEUVAGO_E1_TYPESCRIPT_MODULE=typescript)
    for script,name in [('test_shadow.py','calibrated-regressions'),('test_calibration.py','calibration-regressions')]:
        log=report/('checks/'+name+'.txt');log.parent.mkdir(parents=True,exist_ok=True)
        with log.open('wb') as out:
            r=subprocess.run([sys.executable,'-B',str(package/'tests'/script)],cwd=str(package),env=env,stdout=out,stderr=subprocess.STDOUT,timeout=900)
        g.require(r.returncode==0,'Package tests failed: '+name+'; project untouched')
    if not any(temp.iterdir()):temp.rmdir()
    return test_result

def summary_markdown(result,reports,matrix,historical):
    rows=[]
    for phase,r in reports.items():
        c=Counter(x['technical_result'] for x in r['rule_observations'])
        rows.append(f"| {phase} | {c['PASS_TECHNICAL_SCOPE']} | {c['WOULD_BLOCK']} | {c['REVIEW_REQUIRED']} | {c['NOT_EVALUATED']} | {c['OPERATIONAL_ERROR']} |")
    return '\n'.join([
        '# NEUVAGO 1E.4E.2 — Editorial Enforcement Shadow Pilot','',
        'Rapportering uten installasjon eller publiseringsblokkering. Ingen claim-støtte er godkjent.','',
        '| Fase | Teknisk PASS | WOULD_BLOCK | Review | Ikke vurdert (regelfunn) | Operasjonsfeil |',
        '|---|---:|---:|---:|---:|---:|',*rows,'',
        f"Isolerte feil-/positivkontroller: {matrix['passed']}/{matrix['total']} oppfylte den eksplisitte forventningen.",
        'Forventede WOULD_BLOCK/OPERATIONAL_ERROR i feiltestene er ikke feil funnet i brukerens repo.','',
        '## E2-kalibrering',
        f"Objektbundne E2-demonstrasjoner: {result['calibration_expectations_met']}/{result['calibration_demonstrations']}.",
        'Uendret E1-motor er kjørt separat på åtte opprinnelige revieweksempler med samme TypeScript-modul.',
        'Se calibration-demonstrations.json, e1-e2-comparison.json og checks/ for faktiske utfall. Ingen sperre aktiveres.', '',
        '## Omfang',
        'Elleve erklærte sidemoduler, 23 kildekort og to særskilte ordlistedata-eksempler. 252 låste filer bevares; øvrige filer og uavklarte scope vises i dekningsfilen.',
        'Arbeidstre, Git-index og navngitt commit er lest separat. TypeScript brukes kun til syntaktisk AST-lesing; nettsidens JS/importer blir ikke kjørt.',
        'Ingen ny HTML-rendering, produksjonshenting, CSS-vurdering, bibliografisk oppslag eller faglig kildevurdering er utført.',
        'Historiske HTML-fiksturer er kontrollert separat og angitt med deres opprinnelige tidsstempel; de beviser ikke dagens produksjon.','',
        '## Videreført review',
        '23 kildebruk og elleve policy-/rutekoblinger står til review. Det betyr ikke 34 påviste feil.',
        'Tolv kildekandidater, seks nye brukssteder for registrerte identiteter, 19 claim-kandidatreferanser og alle 110 videreførte finding-objekter beholdes i egne sidefiler.',
        'G-ID matcher den aksepterte kildekortkontrakten; det er ikke ekstern identitets- eller effektverifikasjon.',
        'Hele filhashen låser kun denne første pilotens startpunkt. Endret forklaring eller formulering blir review, ikke et permanent redigeringsforbud.','',
        '## Neste gate',GATE,'',
        '`approved_links: 0`, `release_ready: false`, `enforcement_gates_installed: false`.',
    ])+'\n'

def execute(repo_arg,package,output_base,exp=None,run_tests=True,check_manifest=True):
    # Test injection is internal only. CLI has no switches to bypass baseline or tests.
    package=Path(package).resolve();repo=None;before=None;controls=None;compiler=None
    output=outside(output_base,repo_arg);outside(package,repo_arg);output.mkdir(parents=True,exist_ok=True)
    stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ')
    report=Path(tempfile.mkdtemp(prefix='neuvago-1e4e2-shadow-'+stamp+'-',dir=output))
    result={'schema':'neuvago-1e4e2-readonly-shadow-result-v1','status':'STOP_1E4E2_OPERATIONAL_REVIEW_REQUIRED',
       'execution_status':'ERROR','mode':'SHADOW_REPORT_ONLY','execution_platform':platform.system(),'python_version':platform.python_version(),'source_edits_performed':False,'staging_performed':False,
       'commit_performed':False,'push_performed':False,'git_fetch_performed':False,'build_performed':False,
       'registry_regenerated':False,'bibliographic_requests_performed':False,'production_crawl_performed':False,
       'deployment_action_performed':False,'enforcement_gates_installed':False,'ci_installed':False,'deployment_blocking_enabled':False,
       'approved_links':0,'scientific_claim_support_approved':False,'claim_support_review_complete':False,
       'full_corpus_source_integrity_verified':False,'visual_layout_verified':False,'deployment_commit_attested':False,
       'release_ready':False,'whole_1e4d_closed':False,'environment_secrets_copied':False,'review_required':True,
       'next_gate':'RETURN_FAILURE_SHARE_NO_MANUAL_RESET'}
    stage='PACKAGE_PREFLIGHT';reports={}
    print('=== NEUVAGO 1E.4E.2 — EDITORIAL ENFORCEMENT / SHADOW PILOT ===',flush=True)
    print('Rapport: '+str(report),flush=True)
    print('Ingen kildeendring / build / fetch / commit / push / CI / registerregenerering / nettcrawl',flush=True)
    try:
        g.require(sys.version_info>=(3,10),'Python 3.10 or newer required')
        if check_manifest:result['package_manifest_files_verified']=g.manifest_check(package)
        exp=exp or sh.load(package/'support/expected-state.json');result['baseline_commit']=exp['expected_commit']
        repo=g.root_path(repo_arg);outside(report,repo)
        controls=g.control_snapshot(repo);g.save(report/'audit/git-control-before.json',controls)
        stage='EXACT_BASELINE'
        before=g.snapshot(repo,exp);g.save(report/'audit/repository-before.json',before)
        chain=g.verify_chain(repo,exp);g.save(report/'audit/commit-chain.json',chain)
        remote_before=g.remote(repo,exp);g.save(report/'audit/remote-before.json',remote_before)
        compiler=sh.typescript_path(repo);compiler_sha=g.sha(Path(compiler).read_bytes())
        stage='PACKAGE_REGRESSION_TESTS'
        if run_tests:selftests(package,report,compiler)
        print('PASS: eksakt baseline og pakkens isolerte tester',flush=True)
        base=sh.fixture(package)
        g.require({p:g.sha(b) for p,b in base.items()}==exp['locked_hashes'],'Source fixture must match accepted contract')
        stage='THREE_PHASE_SHADOW'
        snapshots={}
        for phase in ['worktree','index','commit']:
            snap=ss.capture(repo,exp,phase,exp['expected_commit'] if phase=='commit' else None);snapshots[phase]=snap
            r=sh.analyze(snap,package,compiler,base);reports[phase]=r
            g.save(report/('phases/'+phase+'.json'),r)
            g.save(report/('coverage/'+phase+'.json'),r['coverage'])
            g.require(r['execution_status']=='COMPLETE','Rule operation failed for '+phase+'; details preserved in phase report')
            g.require(sh.binding_matches(r,snap,package,compiler),'Control binding mismatch')
            print('Rapportert '+phase+': '+json.dumps(r['summary']['by_result']),flush=True)
        stage='ISOLATED_FAULT_DEMONSTRATIONS'
        matrix=mu.run_matrix(package,compiler,base);g.save(report/'fault-demonstrations.json',matrix)
        g.require(not matrix['failed'],'Fault demonstrations did not meet expected outcomes: '+', '.join(matrix['failed']))
        stage='OBJECT_BOUND_CALIBRATION_DEMONSTRATIONS'
        calibrated=cal.run_matrix(package,compiler,base);g.save(report/'calibration-demonstrations.json',calibrated)
        g.require(not calibrated['failed'],'E2 object-bound expectations failed: '+', '.join(calibrated['failed']))
        stage='UNCHANGED_E1_COMPARISON'
        comparison=legacy.compare(package,report,compiler,calibrated)
        g.save(report/'e1-e2-comparison.json',comparison)
        contract=sh.load(package/'reference/neuvago-1e4e2-pilot-review-gate-calibration-v1.json')
        g.save(report/'calibration-acceptance-map.json',{
          'schema':'neuvago-1e4e2-requirement-evidence-map-v1',
          'requirements':[{'id':req['id'],'required_input':req['input'],'expected_contract':req['expected'],
            'demonstration_case_ids':[c['case_id'] for c in calibrated['cases'] if c['acceptance_requirement']==req['id']],
            'isolated_test_evidence':'checks/calibration-regressions.txt / RealPhaseCalibrationTests' if req['id']=='E2-LIFE-1' else 'calibration-demonstrations.json',
            'user_repository_mutated_for_test':False} for req in contract['required_acceptance_tests']],
          'ci_installed':False,'activation_approved':False,
          'next_review':'Assess actual compiler results and object-specific failures before E3 installation decision'})

        print('PASS: '+str(calibrated['passed'])+'/'+str(calibrated['total'])+' objektbundne E2-kontroller',flush=True)
        stage='HISTORICAL_HTML_CONTROLS'
        historical=hh.run(package,compiler,base);g.save(report/'historical-html-controls.json',historical)
        hc=historical['summary']['by_result'];g.require(not hc.get('WOULD_BLOCK') and not hc.get('OPERATIONAL_ERROR'),'Historical fixture controls failed')
        stage='CARRY_REVIEW_CONTEXT'
        for f in (package/'reference/d7').glob('*.json'):
            dest=report/('carry-forward/'+f.name);dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(f.read_bytes())
        g.save(report/'review-lanes.json',sh.load(package/'reference/design-v1.json')['human_review_lanes_from_return'])
        stage='READONLY_POSTCHECK'
        after=g.snapshot(repo,exp);g.save(report/'audit/repository-after.json',after)
        remote_after=g.remote(repo,exp);g.save(report/'audit/remote-after.json',remote_after)
        ctl_after=g.control_snapshot(repo);g.save(report/'audit/git-control-after.json',ctl_after)
        g.require(after==before and ctl_after==controls,'Repository/Git changed during pilot; no automatic correction')
        g.require(remote_after==remote_before,'Remote changed; no automatic fetch')
        g.require(g.sha(Path(compiler).read_bytes())==compiler_sha,'Compiler dependency changed during reading')
        for phase,old in snapshots.items():
            fresh=ss.capture(repo,exp,phase,exp['expected_commit'] if phase=='commit' else None)
            g.require(ss.phase_unchanged(old,fresh) and sh.binding_matches(reports[phase],fresh,package,compiler),'Phase snapshot changed: '+phase)
        phasecounts={p:r['summary']['by_result'] for p,r in reports.items()}
        result.update(status=STATUS,execution_status='COMPLETE',next_gate=GATE,
           worktree_clean=True,repository_unchanged=True,git_control_files_unchanged=True,
           protected_source_files_verified=len(before['locked_sha256']),delivery_commits_verified=len(chain),
           source_phase_snapshots=3,declared_routes=11,source_card_occurrences=23,glossary_data_examples=2,
           phase_result_counts=phasecounts,fault_demonstrations=matrix['total'],fault_expectations_met=matrix['passed'],
           historical_html_controls=11,new_rendering_performed=False,carried_review_findings=110,
           candidate_identities_pending_intake=12,technical_pilot_complete=True,typescript_parser_version=reports['commit']['typescript_parser_version'],
           typescript_module_sha256=compiler_sha,rules_sha256=sh.rule_fingerprint(package),
           calibration_demonstrations=calibrated['total'],calibration_expectations_met=calibrated['passed'],
           original_e1_comparison_cases=comparison['original_cases'],calibration_points_implemented=5,
           rule_engine_ready_for_blocking_activation=False,original_e1_package_preserved=True)
        (report/'SUMMARY.md').write_text(summary_markdown(result,reports,matrix,historical),encoding='utf-8')
        print('PASS: rapportering og isolerte feilkontroller; ingen sperrer installert',flush=True)
    except Exception as exc:
        result.update(status='STOP_1E4E2_OPERATIONAL_REVIEW_REQUIRED',execution_status='ERROR',failed_stage=stage,error=str(exc),next_gate='RETURN_FAILURE_SHARE_NO_MANUAL_RESET')
        print('STOPP: '+stage+' — '+str(exc),flush=True)
    finally:
        if repo is not None and before is not None:
            try:
                final=g.snapshot(repo,exp);ctl=g.control_snapshot(repo);g.save(report/'audit/repository-exit.json',final);g.save(report/'audit/git-control-exit.json',ctl)
                g.require(final==before and ctl==controls,'Exit state differs from baseline')
                result.update(locked_source_files_unchanged_at_exit=True,git_control_files_unchanged_at_exit=True,observed_head_at_exit=final['head'])
            except Exception as exc:result.update(status='STOP_1E4E2_OPERATIONAL_REVIEW_REQUIRED',execution_status='ERROR',exit_error=str(exc),next_gate='RETURN_FAILURE_SHARE_NO_MANUAL_RESET')
        g.save(report/'RESULT.json',result);archive,checksum=report_archive(report)
        print('\n=== RESULT ===\n'+json.dumps(result,ensure_ascii=False,indent=2),flush=True)
        print('\nSEND BEGGE FILENE:\n'+str(archive)+'\n'+str(checksum),flush=True)
    return result,report,archive,checksum

def main():
    ap=argparse.ArgumentParser(description='Read-only Neuvago E2 calibrated shadow prototype, no installation')
    ap.add_argument('repo',nargs='?',default=str(Path.home()/'neuvago-site'));args=ap.parse_args()
    try:r,*_=execute(args.repo,Path(__file__).resolve().parents[1],Path.home()/'Downloads')
    except Exception as exc:print('STOPP: '+str(exc)+'; ingen prosjektendringer utført',file=sys.stderr);return 2
    return 0 if r['status']==STATUS else 2
if __name__=='__main__':raise SystemExit(main())
