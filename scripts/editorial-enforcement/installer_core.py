#!/usr/bin/env python3
"""Exclusive-create installer. Local tooling only; no stage/commit/push/reset code.

A failed installation rolls back only newly created files whose inode and bytes
still match this process. Completed installation is retained if later checks fail.
"""
from __future__ import annotations
import argparse, datetime, difflib, hashlib, importlib.util, json, os, stat
import subprocess, sys, tempfile, zipfile
from pathlib import Path, PurePosixPath
sys.dont_write_bytecode = True
NAME = 'neuvago-search-dominance-1e4e3-controlled-shadow-installation-v1'
SUCCESS = 'PASS_1E4E3_CONTROLLED_LOCAL_SHADOW_INSTALL'


def require(ok, message):
    if not ok: raise ValueError(message)


def sha(b): return hashlib.sha256(b).hexdigest()


def checked_package(package):
    manifest = package / 'PACKAGE-MANIFEST.sha256'
    require(manifest.is_file() and not manifest.is_symlink(), 'Missing package manifest')
    rows = {}
    for line in manifest.read_text(encoding='utf-8').splitlines():
        h, rel = line.split('  ', 1); p = PurePosixPath(rel)
        require(str(p) == rel and not p.is_absolute() and '..' not in p.parts and '\\' not in rel,
                'Unsafe package entry')
        require(len(h) == 64 and all(c in '0123456789abcdef' for c in h) and rel not in rows, 'Invalid manifest entry')
        rows[rel] = h
    files = set()
    for p in package.rglob('*'):
        require(not p.is_symlink(), 'Package symlink refused')
        if p.is_file() and p != manifest: files.add(p.relative_to(package).as_posix())
    require(files == set(rows), 'Extra or missing package file; extract a fresh copy')
    for rel, h in rows.items(): require(sha((package / rel).read_bytes()) == h, 'Package hash mismatch: ' + rel)
    return len(rows)


def module(path):
    spec = importlib.util.spec_from_file_location('e3_install_runtime', path)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m


def preflight(repo, payload, install, exp, R, g, s, h, vendor):
    R.no_unfinished_operation(repo)
    require(g.scalar(repo, 'branch', '--show-current') == exp['expected_branch'], 'Installation requires main')
    require(g.scalar(repo, 'rev-parse', 'HEAD') == exp['expected_commit'], 'Exact accepted installation parent required; no rebaseline')
    tree = g.tree_entries(repo); index = g.index_entries(repo)
    require(set(index) == set(tree), 'Index differs from baseline; do not stage manually')
    require(all(index[p] == {'mode': t['mode'], 'oid': t['oid']} for p, t in tree.items()), 'Staged change refused')
    require(not set(install['files']) & set(tree), 'An installation target is already tracked; no overwrite')
    require(not any(p.startswith(r + '/') for p in tree for r in R.ROOTS), 'Tooling root already tracked; review required')
    baseline = R.validate_baseline(repo, exp, vendor, g, s, h)
    for p, wanted in exp['locked_hashes'].items():
        f = R.regular(repo, p)
        require(sha(f.read_bytes()) == wanted and R.file_mode(f) == tree[p]['mode'], 'Protected source drift: ' + p)
    records = s.status_records(repo)
    require(all(r['xy'] == '??' and r['path'] in install['files'] and 'old_path' not in r for r in records),
            'Unknown, staged or tracked changes present; no overwrite/reset performed')
    existing = {}
    for rel, item in install['files'].items():
        p = repo
        for part in R.safe_relative(rel).parts:
            p = p / part
            require(not p.is_symlink(), 'Symlink in installation path: ' + rel)
            if p.exists() and p != repo / rel: require(p.is_dir(), 'Non-directory installation parent')
        if p.exists():
            require(p.is_file(), 'Installation target is not a file: ' + rel)
            require(sha(p.read_bytes()) == item['sha256'] and R.file_mode(p) == item['mode'], 'Unknown target file: ' + rel)
            existing[rel] = item
    actual = set()
    for dirname in R.ROOTS:
        root = repo / dirname
        if root.exists():
            require(root.is_dir() and not root.is_symlink(), 'Unsafe tooling root')
            for p in root.rglob('*'):
                require(not p.is_symlink(), 'Symlinked installation content')
                if p.is_file(): actual.add(p.relative_to(repo).as_posix())
    require(actual == set(existing), 'Unexpected file inside installation roots')
    # Ignored files are not silently accepted: every existing payload must be visible as untracked.
    require({r['path'] for r in records} == set(existing), 'Ignored or hidden tooling targets; review ignore rules first')
    return {'status': 'PASS', 'accepted_source_baseline': exp['expected_commit'],
            'planned_files': len(install['files']), 'new_files': sorted(set(install['files']) - set(existing)),
            'recognized_existing_files': sorted(existing), 'no_write_resume': len(existing) == len(install['files']),
            'source_baseline': baseline}


def write_new_files(repo, payload, install, new_paths, R, journal, failure_after=None):
    """Create no existing file. Failure injection is test-only, never a CLI parameter."""
    created = []; dirs = []; rollback = []
    R.save(journal, {'state': 'PREPARED', 'planned_paths': new_paths, 'existing_files_are_never_overwritten': True})
    try:
        for rel in new_paths:
            p = repo
            for part in R.safe_relative(rel).parts[:-1]:
                p = p / part
                require(not p.is_symlink(), 'Concurrent parent symlink: ' + rel)
                if not p.exists(): p.mkdir(); dirs.append(p)
                require(p.is_dir(), 'Invalid installation directory: ' + rel)
            target = repo / rel
            data = R.regular(payload, rel).read_bytes()
            require(sha(data) == install['files'][rel]['sha256'], 'Payload changed during install: ' + rel)
            flags = os.O_WRONLY | os.O_CREAT | os.O_EXCL | getattr(os, 'O_NOFOLLOW', 0)
            fd = os.open(target, flags, 0o600)
            item = {'path': target, 'inode': os.fstat(fd).st_ino, 'bytes': data, 'written': 0}
            created.append(item)
            try:
                while item['written'] < len(data):
                    n = os.write(fd, data[item['written']:]); require(n > 0, 'Short installation write')
                    item['written'] += n
                os.fchmod(fd, 0o755 if install['files'][rel]['mode'] == '100755' else 0o644)
                os.fsync(fd)
            finally: os.close(fd)
            require(sha(target.read_bytes()) == install['files'][rel]['sha256'], 'New file verification failed')
            if failure_after is not None and len(created) == failure_after:
                raise RuntimeError('Injected write failure in isolated test')
        R.save(journal, {'state': 'CREATED', 'new_files': [x['path'].relative_to(repo).as_posix() for x in created],
                         'overwritten_files': [], 'commit_performed': False})
        return [x['path'].relative_to(repo).as_posix() for x in created]
    except BaseException:
        for x in reversed(created):
            p = x['path']; rel = p.relative_to(repo).as_posix()
            try:
                if not p.is_symlink() and p.is_file() and p.stat().st_ino == x['inode'] and p.read_bytes() == x['bytes'][:x['written']]:
                    p.unlink(); rollback.append({'path': rel, 'result': 'REMOVED_OWN_UNCHANGED_NEW_FILE'})
                else: rollback.append({'path': rel, 'result': 'LEFT_FOR_REVIEW_CONCURRENT_CHANGE_OR_MISSING'})
            except OSError: rollback.append({'path': rel, 'result': 'LEFT_FOR_MANUAL_REVIEW'})
        for d in reversed(dirs):
            try: d.rmdir()
            except OSError: pass
        R.save(journal, {'state': 'FAILED_NEW_FILE_CREATION', 'rollback': rollback, 'no_existing_file_restored_or_overwritten': True})
        raise


def run_logged(argv, cwd, env, log, timeout=1200):
    log.parent.mkdir(parents=True, exist_ok=True)
    with log.open('wb') as out:
        p = subprocess.run(argv, cwd=cwd, env=env, stdout=out, stderr=subprocess.STDOUT, timeout=timeout)
    require(p.returncode == 0, 'Check failed; see ' + log.name)


def write_diff(repo, install, report, R):
    parts = []; inventory = []
    for rel, item in sorted(install['files'].items()):
        data = R.regular(repo, rel).read_bytes()
        inventory.append({'path': rel, 'mode': item['mode'], 'sha256': sha(data), 'bytes': len(data), 'change': 'ADD_ONLY'})
        header = 'diff --git a/' + rel + ' b/' + rel + '\nnew file mode ' + item['mode'] + '\n'
        try:
            if b'\x00' in data: raise UnicodeDecodeError('utf-8', data, 0, 1, 'binary')
            text = data.decode('utf-8')
            parts.append(header + ''.join(difflib.unified_diff([], text.splitlines(keepends=True), fromfile='/dev/null', tofile='b/' + rel)))
        except UnicodeDecodeError:
            parts.append(header + 'Binary fixture/reference archive; sha256=' + sha(data) + '\n')
    (report / 'INSTALL-DIFF-PREVIEW.patch').write_text(''.join(parts), encoding='utf-8')
    R.save(report / 'installation-file-list.json', {'files': inventory, 'note': 'Diff is a review preview; no git add executed. Binary fixtures are provided in generated/.'})


def execute(repo_arg, package, confirm=False, output_parent=None, run_tests=True, acceptance=True):
    # run_tests/acceptance are internal test controls; CLI never exposes bypass options.
    package = Path(package).resolve(); payload = package / 'payload'
    repo = None; before = control_before = None; R = None; written = []; pre = None; stage = 'PACKAGE_PREFLIGHT'
    output = Path(output_parent or Path.home() / 'Downloads').expanduser().resolve()
    rr = Path(repo_arg).expanduser().resolve()
    require(output != rr and rr not in output.parents and package != rr and rr not in package.parents,
            'Package and output must be outside inspected repository')
    output.mkdir(parents=True, exist_ok=True)
    report = Path(tempfile.mkdtemp(prefix='neuvago-1e4e3-local-install-' + datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ') + '-', dir=output))
    result = {'schema': 'neuvago-1e4e3-local-install-result-v1', 'status': 'STOP_1E4E3_LOCAL_INSTALL_REVIEW_REQUIRED',
              'mode': 'SHADOW_REPORT_ONLY', 'public_source_edits_performed': False, 'existing_files_modified': False,
              'staging_performed': False, 'commit_performed': False, 'push_performed': False, 'git_fetch_performed': False,
              'build_performed': False, 'registry_regenerated': False, 'bibliographic_requests_performed': False,
              'production_crawl_performed': False, 'deployment_action_performed': False, 'tooling_installed': False,
              'enforcement_gates_installed': False, 'ci_installed': False, 'deployment_blocking_enabled': False,
              'approved_links': 0, 'claim_support_review_complete': False, 'scientific_claim_support_approved': False,
              'full_corpus_source_integrity_verified': False, 'release_ready': False,
              'rule_engine_ready_for_blocking_activation': False, 'environment_secrets_copied': False,
              'next_gate': 'RETURN_FAILURE_SHARE_NO_MANUAL_RESET'}
    print('=== NEUVAGO 1E.4E.3 — CONTROLLED LOCAL SHADOW INSTALLATION ===', flush=True)
    print('Rapport: ' + str(report), flush=True)
    print('Kun nye verktøy-/kontraktfiler. Ingen artikler, registre, staging, commit, push, CI eller build.', flush=True)
    try:
        require(sys.version_info >= (3, 10), 'Python 3.10+ required')
        result['package_manifest_files_verified'] = checked_package(package)
        require(confirm, 'Run requires --confirm-local-tooling-install; no file written')
        R = module(payload / 'scripts/editorial-enforcement/runtime.py')
        install = R.verify_installation(payload)
        vendor, g, s, h = R.load_engine(payload)
        exp = R.exp_for(payload, h, vendor)
        repo = g.root_path(repo_arg); R.outside(report, repo)
        control_before = R.controls(repo, g); R.save(report / 'audit/git-control-before.json', control_before)
        stage = 'EXACT_INSTALL_PREFLIGHT'
        pre = preflight(repo, payload, install, exp, R, g, s, h, vendor)
        R.save(report / 'audit/install-plan.json', pre)
        before = R.preserve_snapshot(repo, exp, g, s); R.save(report / 'audit/repository-before.json', before)
        remote_before = g.remote(repo, exp); R.save(report / 'audit/remote-before.json', remote_before)
        chain = g.verify_chain(repo, exp); R.save(report / 'audit/source-commit-chain.json', chain)
        compiler = h.typescript_path(repo); compiler_sha = sha(Path(compiler).read_bytes())
        result.update(accepted_source_baseline=exp['expected_commit'], tooling_version=R.contract(payload)['tooling_version'],
                      accepted_e2_rules_sha256=h.rule_fingerprint(vendor), planned_tooling_files=len(install['files']))
        print('PASS: eksakt kildebaseline og eksplisitt installasjonsplan', flush=True)
        stage = 'ISOLATED_TESTS'
        if run_tests:
            e2_driver = importlib.import_module('run')
            e2_driver.selftests(vendor, report, compiler)
            env = g.env(); env.pop('PYTHONPATH', None)
            temp = report / 'isolated-e3-tests'; temp.mkdir()
            env.update(PYTHONDONTWRITEBYTECODE='1', NEUVAGO_E1_TYPESCRIPT_MODULE=compiler, TMPDIR=str(temp))
            run_logged([sys.executable, '-I', '-B', str(payload / 'scripts/editorial-enforcement/tests/test_installation.py')],
                       payload, env, report / 'checks/e3-installation-tests.txt')
            if not any(temp.iterdir()): temp.rmdir()
            print('PASS: bevarte E1/E2-tester og isolerte E3-installasjonstester', flush=True)
        stage = 'REVALIDATE_BEFORE_WRITE'
        require(preflight(repo, payload, install, exp, R, g, s, h, vendor) == pre, 'Plan changed during tests')
        require(R.preserve_snapshot(repo, exp, g, s) == before and R.controls(repo, g) == control_before, 'Source or Git changed during tests')
        require(g.remote(repo, exp) == remote_before and sha(Path(compiler).read_bytes()) == compiler_sha, 'Remote/compiler changed')
        stage = 'EXCLUSIVE_TOOLING_CREATE'
        written = write_new_files(repo, payload, install, pre['new_files'], R, report / 'install-journal.json')
        result.update(tooling_files_created_this_run=len(written), recognized_no_write_resume=pre['no_write_resume'])
        require(R.verify_installation(repo) == install, 'Installed content differs from package')
        result['tooling_installed'] = True
        print('PASS: ' + str(len(written)) + ' nye filer; ingen eksisterende filer omskrevet', flush=True)
        stage = 'INSTALLED_ENTRY_ACCEPTANCE'
        env = g.env(); env.pop('PYTHONPATH', None)
        argv = [sys.executable, '-I', '-B', str(repo / 'scripts/editorial-enforcement/shadow_cli.py'), str(repo),
                '--output-parent', str(report / 'installed-command')]
        if acceptance: argv.append('--acceptance')
        run_logged(argv, repo, env, report / 'checks/installed-command.txt', timeout=1500)
        found = list((report / 'installed-command').glob('neuvago-1e4e3-shadow-*/RESULT.json'))
        require(len(found) == 1, 'Exactly one installed command report expected')
        observed = R.strict_json(found[0].read_bytes())
        require(observed['status'] == R.SUCCESS and observed['execution_status'] == 'COMPLETE', 'Installed command did not complete')
        require(observed['phase_result_counts'] == {p: R.contract(payload)['expected_initial_engine_counts'] for p in ('worktree', 'index', 'commit')}, 'Installed E2 baseline behavior differs')
        require(not observed['has_would_block'], 'Unexpected baseline integration blockage')
        if acceptance:
            require(observed['calibration_expectations_met'] == 43 and observed['original_e1_comparison_cases'] == 8
                    and observed['preserved_fault_expectations_met'] == 45, 'E2 behavior acceptance incomplete')
        R.save(report / 'audit/installed-command-result.json', observed)
        stage = 'EXACT_CHANGESET_AND_PRESERVATION'
        post = preflight(repo, payload, install, exp, R, g, s, h, vendor)
        require(post['no_write_resume'] and not post['new_files'], 'Final tooling file set incomplete')
        after = R.preserve_snapshot(repo, exp, g, s)
        source_before = {k: v for k, v in before.items() if k != 'status_records'}
        source_after = {k: v for k, v in after.items() if k != 'status_records'}
        require(source_after == source_before and R.controls(repo, g) == control_before, 'Existing project or Git state changed')
        remote_after = g.remote(repo, exp); require(remote_after == remote_before, 'Remote changed during local installation')
        require(sha(Path(compiler).read_bytes()) == compiler_sha, 'Compiler changed during installation')
        R.save(report / 'audit/repository-after.json', after); R.save(report / 'audit/git-control-after.json', R.controls(repo, g))
        R.save(report / 'audit/remote-after.json', remote_after)
        write_diff(repo, install, report, R)
        for rel in install['files']:
            target = report / 'generated' / rel; target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(R.regular(repo, rel).read_bytes())
        result.update(status=SUCCESS, execution_status='COMPLETE', tooling_installed=True, exact_new_tooling_paths=len(install['files']),
                      accepted_source_files_preserved=252, source_delivery_commits_verified=len(chain),
                      historical_locks_preserved=27, prior_published_pages_preserved=11,
                      git_control_files_unchanged=True, existing_project_content_preserved=True,
                      working_status_is_exact_untracked_tooling=True, worktree_clean=False,
                      source_phase_snapshots=3, phase_result_counts=observed['phase_result_counts'],
                      calibration_expectations_met=observed.get('calibration_expectations_met'),
                      preserved_fault_expectations_met=observed.get('preserved_fault_expectations_met'),
                      original_e1_comparison_cases=observed.get('original_e1_comparison_cases'),
                      installed_entry_verified=True, tooling_fingerprint=install['tooling_fingerprint'],
                      typescript_parser_version=observed['typescript_parser_version'], typescript_module_sha256=compiler_sha,
                      next_gate='RETURN_1E4E3_LOCAL_SHADOW_INSTALL_FOR_LIFECYCLE_REVIEW')
        (report / 'SUMMARY.md').write_text('# E3 — lokal installasjon\n\nKun det navngitte nye verktøy-/kontraktsettet er installert.\n'
            'Arbeidsmappen har de forventede nye untracked-filene. Ingen staging, commit, push, CI eller publiseringssperre.\n\n'
            'Den gjennomgåtte E2-motoren er byte-identisk. Ny adapter skiller kildebaseline fra HEAD og verktøyversjon.\n'
            'Installasjonsdiff og filhashliste følger med; dette er review før separat commit/push.\n', encoding='utf-8')
    except Exception as exc:
        result.update(status='STOP_1E4E3_LOCAL_INSTALL_REVIEW_REQUIRED', execution_status='ERROR', failed_stage=stage,
                      error=str(exc), next_gate='RETURN_FAILURE_SHARE_NO_MANUAL_RESET')
        print('STOPP: ' + stage + ' — ' + str(exc), flush=True)
    finally:
        if R is not None:
            if repo is not None and before is not None:
                try:
                    final = R.preserve_snapshot(repo, exp, g, s); ctl = R.controls(repo, g)
                    R.save(report / 'audit/repository-exit.json', final); R.save(report / 'audit/git-control-exit.json', ctl)
                    require({k:v for k,v in final.items() if k!='status_records'} == {k:v for k,v in before.items() if k!='status_records'}, 'Existing project state changed at exit')
                    require(ctl == control_before, 'Git controls changed at exit')
                    result.update(git_control_files_unchanged_at_exit=True, observed_head_at_exit=final['head'])
                except Exception as exc:
                    result.update(status='STOP_1E4E3_LOCAL_INSTALL_REVIEW_REQUIRED', execution_status='ERROR', exit_error=str(exc), next_gate='RETURN_FAILURE_SHARE_NO_MANUAL_RESET')
            R.save(report / 'RESULT.json', result)
            archive, checksum = R.report_archive(report)
            print('\n=== RESULT ===\n' + json.dumps(result, ensure_ascii=False, indent=2), flush=True)
            print('\nSEND BEGGE FILENE:\n' + str(archive) + '\n' + str(checksum), flush=True)
        else:
            (report / 'RESULT.json').write_text(json.dumps(result, indent=2) + '\n', encoding='utf-8')
            data=(report / 'RESULT.json').read_bytes()
            (report / 'REPORT-MANIFEST.sha256').write_text(sha(data) + '  RESULT.json\n', encoding='utf-8')
            archive=Path(str(report)+'-share.zip')
            with zipfile.ZipFile(archive,'x',zipfile.ZIP_DEFLATED) as z:
                for p in report.iterdir():
                    if p.is_file(): z.write(p,arcname=report.name+'/'+p.name)
            checksum=Path(str(archive)+'.sha256.txt')
            checksum.write_text(sha(archive.read_bytes())+'  '+archive.name+'\n',encoding='utf-8')
            print('SEND BEGGE FILENE:\n'+str(archive)+'\n'+str(checksum),flush=True)
    return result, report, archive, checksum

