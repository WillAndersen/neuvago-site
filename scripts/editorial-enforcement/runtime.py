"""E3 phase/lifecycle adapter. The vendored E2 rule engine is not modified.

Only explicit tooling paths can be separated from content deltas. Both inventories,
raw snapshots and derived engine input are retained and fingerprinted. No Git write
command, project script, dependency installer or live content request is provided.
"""
from __future__ import annotations
import copy, datetime, hashlib, importlib, json, os, platform, re, stat
import subprocess, sys, tempfile, zipfile
from collections import Counter
from pathlib import Path, PurePosixPath
sys.dont_write_bytecode = True
TOOL_ROOT = 'scripts/editorial-enforcement'
DOC_ROOT = 'docs/seo/editorial-enforcement'
ROOTS = (TOOL_ROOT, DOC_ROOT)
MANIFEST = DOC_ROOT + '/INSTALLATION-MANIFEST.json'
CONTRACT = DOC_ROOT + '/installation-contract.v1.json'
VERSION = 'neuvago-1e4e3-phase-adapter-v1'
SUCCESS = 'PASS_1E4E3_INSTALLED_SHADOW_REPORT_CAPTURED'


def require(ok: bool, message: str) -> None:
    if not ok:
        raise ValueError(message)


def sha(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def encode(value) -> bytes:
    return (json.dumps(value, ensure_ascii=False, indent=2) + '\n').encode('utf-8')


def save(path: Path, value) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(encode(value))


def strict_json(data):
    def pairs(items):
        out = {}
        for k, v in items:
            require(k not in out, 'Duplicate JSON key: ' + k)
            out[k] = v
        return out
    return json.loads(data, object_pairs_hook=pairs)


def safe_relative(rel: str) -> PurePosixPath:
    p = PurePosixPath(rel)
    require(bool(rel) and str(p) == rel and not p.is_absolute() and '..' not in p.parts
            and '\\' not in rel and '\x00' not in rel, 'Unsafe relative path')
    return p


def regular(root: Path, rel: str) -> Path:
    p = root
    for part in safe_relative(rel).parts:
        p = p / part
        require(not p.is_symlink(), 'Internal symlink refused: ' + rel)
    require(p.is_file() and stat.S_ISREG(p.stat().st_mode), 'Missing regular file: ' + rel)
    return p


def outside(path: Path, repo: Path) -> Path:
    p = Path(path).expanduser().resolve()
    r = Path(repo).expanduser().resolve()
    require(p != r and r not in p.parents, 'Reports and temporary files must be outside repository')
    return p


def file_mode(path: Path) -> str:
    return '100755' if path.stat().st_mode & 0o111 else '100644'


def contract(root: Path) -> dict:
    c = strict_json(regular(root, CONTRACT).read_bytes())
    require(c['schema'] == 'neuvago-1e4e3-installed-shadow-contract-v1', 'Unsupported E3 contract')
    require(c['mode'] == 'SHADOW_REPORT_ONLY', 'Only reporting-only operation is supported')
    for key in ('enforcement_gates_installed', 'ci_installed', 'deployment_blocking_enabled',
                'release_ready', 'scientific_claim_support_approved', 'claim_support_review_complete'):
        require(c.get(key) is False, 'Unauthorized control flag: ' + key)
    require(c.get('approved_links') == 0, 'No approval loader exists in this tool')
    require(c['tooling_roots'] == list(ROOTS), 'Tooling roots changed')
    return c


def manifest_entries(root: Path) -> dict:
    """Explicit rows; the manifest itself is fingerprinted separately, not self-hashed."""
    p = regular(root, MANIFEST)
    obj = strict_json(p.read_bytes())
    require(obj['schema'] == 'neuvago-1e4e3-installation-manifest-v1', 'Wrong manifest schema')
    rows = obj['files']
    require(isinstance(rows, dict) and MANIFEST not in rows and rows, 'Invalid install manifest')
    for rel, rec in rows.items():
        safe_relative(rel)
        require(any(rel.startswith(r + '/') for r in ROOTS), 'Manifest path outside tooling roots')
        require(re.fullmatch(r'[0-9a-f]{64}', rec['sha256']) is not None, 'Invalid file hash')
        require(rec['mode'] in ('100644', '100755'), 'Unsupported tooling mode')
    out = dict(rows)
    out[MANIFEST] = {'sha256': sha(p.read_bytes()), 'mode': '100644'}
    return out


def verify_installation(root: Path) -> dict:
    rows = manifest_entries(root)
    actual = set()
    for dirname in ROOTS:
        d = root / dirname
        regular(root, dirname + '/' + ('run-shadow.sh' if dirname == TOOL_ROOT else 'installation-contract.v1.json'))
        for f in d.rglob('*'):
            require(not f.is_symlink(), 'Tooling symlink refused: ' + f.relative_to(root).as_posix())
            if f.is_file(): actual.add(f.relative_to(root).as_posix())
    require(actual == set(rows), 'Incomplete or unexpected tooling files; no overwrite or cleanup performed')
    for rel, rec in rows.items():
        p = regular(root, rel)
        require(sha(p.read_bytes()) == rec['sha256'], 'Installed tooling hash mismatch: ' + rel)
        require(file_mode(p) == rec['mode'], 'Installed tooling mode mismatch: ' + rel)
    c = contract(root)
    fingerprint = sha(encode({p: rows[p] for p in sorted(rows)}))
    return {'files': rows, 'tooling_fingerprint': fingerprint, 'manifest_sha256': rows[MANIFEST]['sha256'],
            'contract_sha256': rows[CONTRACT]['sha256'], 'tooling_version': c['tooling_version']}


def load_engine(root: Path):
    v = root / TOOL_ROOT / 'vendor/e2'
    sys.path.insert(0, str(v / 'support'))
    g = importlib.import_module('readonly_guard')
    s = importlib.import_module('snapshot')
    h = importlib.import_module('shadow')
    g.manifest_check(v)
    require(h.rule_fingerprint(v) == contract(root)['accepted_e2_rules_sha256'], 'E2 rules changed during installation')
    return v, g, s, h


def exp_for(root: Path, h, vendor: Path) -> dict:
    exp = h.load(vendor / 'support/expected-state.json')
    c = contract(root)
    exp = copy.deepcopy(exp)
    # The versioned contract, not current HEAD, selects the accepted source baseline.
    exp['expected_commit'] = c['accepted_source_baseline']
    if c.get('synthetic_history_for_tests'):
        require('synthetic_git_history' in c, 'Synthetic test history must be explicit')
        exp.update(c['synthetic_git_history'])
    return exp


def no_unfinished_operation(repo: Path) -> None:
    for rel in ('MERGE_HEAD', 'CHERRY_PICK_HEAD', 'REVERT_HEAD', 'rebase-merge', 'rebase-apply',
                'sequencer', 'BISECT_START', 'index.lock', 'HEAD.lock'):
        require(not (repo / '.git' / rel).exists(), 'Unfinished or concurrent Git operation: ' + rel)


def controls(repo: Path, g) -> dict:
    out = g.control_snapshot(repo)
    for dirname in ('hooks', 'info'):
        d = repo / '.git' / dirname
        if d.exists():
            require(not d.is_symlink(), 'Symlinked Git control directory refused')
            for f in sorted(d.rglob('*')):
                require(not f.is_symlink(), 'Symlinked Git control file refused')
                if f.is_file(): out[f.relative_to(repo / '.git').as_posix()] = sha(f.read_bytes())
    return out


def preserve_snapshot(repo: Path, exp: dict, g, s) -> dict:
    """Hash allowlisted content and config controls, never copy environment/config bytes."""
    tree = g.tree_entries(repo)
    index = g.index_entries(repo)
    rows = s.status_records(repo)
    hashes = {}
    for rel in exp['locked_hashes']:
        try:
            p = regular(repo, rel)
            hashes[rel] = {'sha256': sha(p.read_bytes()), 'mode': file_mode(p)}
        except ValueError:
            hashes[rel] = {'unreadable_or_missing': True}
    # Explicit additional non-regression controls; values only, no copied contents.
    config_paths = {p for p in tree if p.startswith('.github/') or p in {
        'package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'yarn.lock', 'package-lock.json',
        'tsconfig.json', 'next-env.d.ts', '.gitignore', '.gitattributes', 'vercel.json'}}
    extra = {}
    for rel in sorted(config_paths):
        try:
            p = regular(repo, rel)
            extra[rel] = {'sha256': sha(p.read_bytes()), 'mode': file_mode(p)}
        except ValueError:
            extra[rel] = {'unreadable_or_missing': True}
    return {'head': g.scalar(repo, 'rev-parse', 'HEAD'), 'tree_fingerprint': sha(encode(tree)),
            'index_fingerprint': sha(encode(index)), 'status_records': rows,
            'source_file_fingerprints': hashes, 'additional_control_fingerprints': extra}


def ancestor(repo: Path, base: str, tip: str, g) -> None:
    require(bool(re.fullmatch(r'[0-9a-f]{40}|[0-9a-f]{64}', tip)), 'Select a full commit object ID')
    require(g.scalar(repo, 'rev-parse', tip + '^{commit}') == tip, 'Selected ID is not a commit')
    r = subprocess.run(['git', '--no-pager', '-c', 'core.fsmonitor=false', '-C', str(repo),
                        'merge-base', '--is-ancestor', base, tip], env=g.env(),
                       stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=45)
    require(r.returncode == 0, 'Selected commit does not descend from accepted source baseline; no automatic rebaseline')


def validate_baseline(repo: Path, exp: dict, vendor: Path, g, s, h) -> dict:
    base = exp['expected_commit']
    baseline = s.capture(repo, exp, 'commit', base)
    require(not baseline['meta']['read_errors'], 'Accepted source commit has missing blobs')
    observed = {p: sha(b) for p, b in baseline['files'].items()}
    require(observed == exp['locked_hashes'], 'Accepted source baseline bytes changed or missing')
    fixture = h.fixture(vendor)
    require({p: sha(b) for p, b in fixture.items()} == exp['locked_hashes'], 'E2 comparison fixture drift')
    return {'accepted_source_baseline': base, 'verified_locked_files': len(observed),
            'source_baseline_tree': baseline['meta']['selected_tree_oid'],
            'source_baseline_file_fingerprint': sha(encode(observed))}


def tooling_at_phase(repo: Path, raw: dict, install: dict, g, s) -> tuple[list, set]:
    phase = raw['meta']['phase']
    selected = g.tree_entries(repo, raw['meta']['selected_commit']) if phase == 'commit' else g.index_entries(repo)
    blobs = s.blobs(repo, [selected[p]['oid'] for p in install['files'] if p in selected
                          and selected[p]['mode'] in ('100644', '100755')
                          and selected[p].get('kind', 'blob') == 'blob']) if phase != 'worktree' else {}
    out, matching = [], set()
    for rel, wanted in sorted(install['files'].items()):
        data = None; mode = None; oid = None
        if phase == 'worktree':
            p = regular(repo, rel); data = p.read_bytes(); mode = file_mode(p)
        elif rel in selected:
            mode = selected[rel]['mode']; oid = selected[rel]['oid']; data = blobs.get(oid)
        present = data is not None
        same = present and sha(data) == wanted['sha256'] and mode == wanted['mode']
        if same: matching.add(rel)
        out.append({'path': rel, 'phase': phase, 'present': present,
                    'classification': 'KNOWN_E3_TOOLING_HASH_MATCH' if same else
                        'NOT_PRESENT_IN_SELECTED_INPUT' if rel not in selected and phase != 'worktree' else 'TOOLING_MISMATCH',
                    'sha256': sha(data) if present else None, 'blob_oid': oid, 'mode': mode,
                    'expected_sha256': wanted['sha256'], 'expected_mode': wanted['mode'],
                    'semantic_content_approval': False})
    return out, matching


def adapted_capture(repo: Path, exp: dict, phase: str, commit: str | None, install: dict, g, s) -> dict:
    raw = s.capture(repo, exp, phase, commit)
    inventory, recognized = tooling_at_phase(repo, raw, install, g, s)
    meta = copy.deepcopy(raw['meta'])
    # Every excluded path is explicitly matched and retained in raw + tooling inventory.
    for key in ('changed_paths', 'staged_paths_vs_base', 'index_worktree_disagreements', 'outside_locked_inventory'):
        meta[key] = [p for p in meta.get(key, []) if p not in recognized]
    meta['status_records'] = [r for r in meta.get('status_records', [])
                              if r['path'] not in recognized or r.get('old_path')]
    meta['e3_adapter'] = {'version': VERSION, 'accepted_source_baseline': exp['expected_commit'],
                          'raw_snapshot_fingerprint': raw['meta']['snapshot_fingerprint'],
                          'tooling_inventory_fingerprint': sha(encode(inventory)),
                          'executing_tooling_fingerprint': install['tooling_fingerprint'],
                          'explicitly_separated_tool_paths': sorted(recognized)}
    meta.pop('snapshot_fingerprint', None)
    meta['snapshot_fingerprint'] = sha(encode(meta))
    integration = []
    present = sum(x['present'] for x in inventory)
    mismatches = [x['path'] for x in inventory if x['classification'] == 'TOOLING_MISMATCH']
    partial = 0 < present < len(inventory)
    integration.append({'rule_id': 'G-LIFECYCLE-E3-TOOL-INVENTORY', 'input_phase': phase,
                        'technical_result': 'WOULD_BLOCK' if mismatches or partial else 'PASS_TECHNICAL_SCOPE',
                        'reason': 'Explicit tool inventory; absent historical tools are not absent source coverage',
                        'present_files': present, 'absent_files': len(inventory) - present,
                        'mismatches': mismatches, 'partial_tooling_input': partial,
                        'would_block_if_enforced': bool(mismatches or partial), 'scientific_claim_support_approved': False})
    # E2 compares content deltas to accepted source baseline. For Git lifecycle, a
    # tooling-only HEAD is separately resolved without silently changing that base.
    if phase in ('index', 'worktree'):
        index = g.index_entries(repo)
        stages = {r['path']: r['xy'] for r in raw['meta']['status_records'] if r['path'] in install['files']}
        tool_disagreement = []
        tool_blobs = s.blobs(repo, [index[p]['oid'] for p in install['files'] if p in index and index[p]['mode'] in ('100644', '100755')])
        for p in install['files']:
            if p in index and index[p]['mode'] in ('100644', '100755'):
                b = tool_blobs[index[p]['oid']]
                if sha(b) != install['files'][p]['sha256'] or index[p]['mode'] != install['files'][p]['mode']:
                    tool_disagreement.append(p)
        coexist = any(x[0] not in (' ', '?') for x in stages.values()) and any(x[1] != ' ' for x in stages.values())
        integration.append({'rule_id': 'G-LIFECYCLE-E3-TOOL-STAGING', 'input_phase': phase,
                            'technical_result': 'WOULD_BLOCK' if tool_disagreement or coexist else 'PASS_TECHNICAL_SCOPE',
                            'reason': 'Index/worktree differences in tooling are not ignored',
                            'disagreements': tool_disagreement, 'mixed_tool_staging': coexist,
                            'would_block_if_enforced': bool(tool_disagreement or coexist), 'scientific_claim_support_approved': False})
    for obs in integration:
        obs.update(raw_snapshot_fingerprint=raw['meta']['snapshot_fingerprint'],
                   engine_snapshot_fingerprint=meta['snapshot_fingerprint'],
                   executing_tooling_fingerprint=install['tooling_fingerprint'])
    return {'raw': raw, 'engine_input': {'meta': meta, 'files': raw['files']},
            'tooling_inventory': inventory, 'integration_observations': integration}


def report_archive(report: Path) -> tuple[Path, Path]:
    entries = {}
    for p in sorted(report.rglob('*')):
        require(not p.is_symlink(), 'Report symlink refused')
        if p.is_file() and p != report / 'REPORT-MANIFEST.sha256':
            entries[p.relative_to(report).as_posix()] = sha(p.read_bytes())
    (report / 'REPORT-MANIFEST.sha256').write_text(''.join(h + '  ' + p + '\n' for p, h in entries.items()), encoding='utf-8')
    archive = report.parent / (report.name + '-share.zip')
    with zipfile.ZipFile(archive, 'x', zipfile.ZIP_DEFLATED) as z:
        for p in sorted(report.rglob('*')):
            if p.is_file(): z.write(p, arcname=report.name + '/' + p.relative_to(report).as_posix())
    checksum = Path(str(archive) + '.sha256.txt')
    checksum.write_text(sha(archive.read_bytes()) + '  ' + archive.name + '\n', encoding='utf-8')
    return archive, checksum


def semantic_signature(report: dict) -> str:
    """Compare E2 meanings separately from new snapshot/tool/version bindings."""
    fields = ('rule_id', 'source_locator', 'route_or_unresolved_route', 'source_type',
              'technical_result', 'reason', 'review_basis', 'would_block_if_enforced')
    return sha(encode([{k: row.get(k) for k in fields} for row in report['rule_observations'] if row['rule_id'] != 'G-LIFECYCLE-BINDING']))


def execute(repo_arg: str | Path, phases=('worktree', 'index', 'commit'), commit=None,
            output_parent=None, acceptance=False, expected_runtime_root=None):
    repo = None; before = ctl_before = installation = compiler_hash = None
    runtime_root = Path(expected_runtime_root or Path(__file__).resolve().parents[2]).resolve()
    # Establish a usable external failure report before loading any project content.
    output = outside(output_parent or Path.home() / 'Downloads', repo_arg)
    output.mkdir(parents=True, exist_ok=True)
    report = Path(tempfile.mkdtemp(prefix='neuvago-1e4e3-shadow-' + datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ') + '-', dir=output))
    result = {'schema': 'neuvago-1e4e3-installed-shadow-result-v1', 'status': 'STOP_1E4E3_SHADOW_OPERATIONAL_REVIEW',
              'execution_status': 'ERROR', 'mode': 'SHADOW_REPORT_ONLY', 'tooling_installed': False,
              'source_edits_performed': False, 'staging_performed': False, 'commit_performed': False, 'push_performed': False,
              'git_fetch_performed': False, 'build_performed': False, 'registry_regenerated': False,
              'bibliographic_requests_performed': False, 'production_crawl_performed': False, 'deployment_action_performed': False,
              'enforcement_gates_installed': False, 'ci_installed': False, 'deployment_blocking_enabled': False,
              'approved_links': 0, 'scientific_claim_support_approved': False, 'claim_support_review_complete': False,
              'full_corpus_source_integrity_verified': False, 'release_ready': False, 'review_required': True,
              'rule_engine_ready_for_blocking_activation': False, 'environment_secrets_copied': False,
              'execution_platform': platform.system(), 'python_version': platform.python_version(),
              'next_gate': 'RETURN_FAILURE_SHARE_NO_MANUAL_RESET'}
    stage = 'TOOLING_INTEGRITY'; captures = {}; reports = {}
    try:
        require(sys.version_info >= (3, 10), 'Python 3.10+ required')
        installation = verify_installation(runtime_root)
        c = contract(runtime_root)
        vendor, g, s, h = load_engine(runtime_root)
        repo = g.root_path(repo_arg)
        require(repo == runtime_root, 'Use the installed command from this exact repository root')
        outside(report, repo); no_unfinished_operation(repo)
        ctl_before = controls(repo, g)
        exp = exp_for(runtime_root, h, vendor)
        before = preserve_snapshot(repo, exp, g, s)
        save(report / 'audit/repository-before.json', before); save(report / 'audit/git-control-before.json', ctl_before)
        stage = 'SOURCE_BASELINE'
        baseline = validate_baseline(repo, exp, vendor, g, s, h)
        head = before['head']; ancestor(repo, exp['expected_commit'], head, g)
        selected_commit = commit or head
        if 'commit' in phases: ancestor(repo, exp['expected_commit'], selected_commit, g)
        require(set(phases) <= s.PHASES and phases and len(set(phases)) == len(phases), 'Invalid selected phase set')
        result.update(tooling_installed=True, accepted_source_baseline=exp['expected_commit'],
                      observed_head=head, selected_commit=selected_commit if 'commit' in phases else None,
                      tooling_version=c['tooling_version'], executing_tooling_fingerprint=installation['tooling_fingerprint'],
                      tool_contract_sha256=installation['contract_sha256'], engine_rules_sha256=h.rule_fingerprint(vendor),
                      runtime_adapter_version=VERSION, synthetic_history_for_tests=c.get('synthetic_history_for_tests', False))
        save(report / 'audit/source-baseline.json', baseline)
        save(report / 'audit/installed-tooling.json', installation)
        compiler = h.typescript_path(repo); compiler_hash = sha(Path(compiler).read_bytes())
        base = h.fixture(vendor)
        stage = 'PHASE_REPORTS'
        for phase in phases:
            cap = adapted_capture(repo, exp, phase, selected_commit if phase == 'commit' else None, installation, g, s)
            captures[phase] = cap
            r = h.analyze(cap['engine_input'], vendor, compiler, base)
            require(h.binding_matches(r, cap['engine_input'], vendor, compiler), 'E2 rule binding mismatch')
            reports[phase] = r
            save(report / ('snapshots/' + phase + '-raw.json'), cap['raw']['meta'])
            save(report / ('snapshots/' + phase + '-engine-input.json'), cap['engine_input']['meta'])
            save(report / ('phases/' + phase + '.json'), r)
            save(report / ('coverage/' + phase + '.json'), r['coverage'])
            save(report / ('tooling/' + phase + '.json'), {
                'schema': 'neuvago-1e4e3-phase-tooling-classification-v1', 'phase': phase,
                'all_original_changed_paths': cap['raw']['meta']['changed_paths'],
                'semantic_changed_paths': cap['engine_input']['meta']['changed_paths'],
                'explicit_tooling_inventory': cap['tooling_inventory'], 'observations': cap['integration_observations']})
            print('Rapportert ' + phase + ': ' + json.dumps(r['summary']['by_result']), flush=True)
        stage = 'ACCEPTANCE_DEMONSTRATIONS'
        if acceptance:
            import mutations as mu
            import calibration as cal
            import historical_html as hh
            import legacy_compare as lc
            old = mu.run_matrix(vendor, compiler, base); save(report / 'fault-demonstrations.json', old)
            require(not old['failed'], 'Preserved E2 regression expectation failed')
            new = cal.run_matrix(vendor, compiler, base); save(report / 'calibration-demonstrations.json', new)
            require(not new['failed'], 'E2 object-bound calibration expectation failed')
            comparison = lc.compare(vendor, report, compiler, new); save(report / 'e1-e2-comparison.json', comparison)
            historical = hh.run(vendor, compiler, base); save(report / 'historical-html-controls.json', historical)
            hc = historical['summary']['by_result']
            require(not hc.get('WOULD_BLOCK') and not hc.get('OPERATIONAL_ERROR'), 'Historical HTML fixture failed')
            result.update(calibration_demonstrations=new['total'], calibration_expectations_met=new['passed'],
                          preserved_fault_demonstrations=old['total'], preserved_fault_expectations_met=old['passed'],
                          original_e1_comparison_cases=comparison['original_cases'], historical_html_controls=11,
                          new_rendering_performed=False)
        for p in (vendor / 'reference/d7').glob('*.json'):
            target = report / 'carry-forward' / p.name; target.parent.mkdir(parents=True, exist_ok=True); target.write_bytes(p.read_bytes())
        save(report / 'review-lanes.json', h.load(vendor / 'reference/design-v1.json')['human_review_lanes_from_return'])
        stage = 'UNCHANGED_POSTCHECK'
        for phase, cap in captures.items():
            fresh = adapted_capture(repo, exp, phase, selected_commit if phase == 'commit' else None, installation, g, s)
            require(fresh == cap, 'Selected phase changed during analysis: ' + phase)
        require(verify_installation(repo) == installation, 'Tooling changed during analysis')
        require(sha(Path(compiler).read_bytes()) == compiler_hash, 'Compiler changed during analysis')
        phasecounts = {p: r['summary']['by_result'] for p, r in reports.items()}
        integration_counts = dict(Counter(o['technical_result'] for cap in captures.values() for o in cap['integration_observations']))
        errors = any(r['execution_status'] != 'COMPLETE' for r in reports.values())
        result.update(status=SUCCESS if not errors else 'STOP_1E4E3_SHADOW_OPERATIONAL_REVIEW',
                      execution_status='ERROR' if errors else 'COMPLETE', source_phase_snapshots=len(reports),
                      phase_result_counts=phasecounts, tooling_observation_counts=integration_counts,
                      phase_semantic_signatures={p: semantic_signature(r) for p, r in reports.items()},
                      source_card_occurrences=23, declared_routes=11, glossary_data_examples=2,
                      carried_review_findings=110, candidate_identities_pending_intake=12,
                      typescript_parser_version=next(iter(reports.values()))['typescript_parser_version'],
                      typescript_module_sha256=compiler_hash,
                      has_would_block=bool(integration_counts.get('WOULD_BLOCK') or any(r['summary']['by_result'].get('WOULD_BLOCK') for r in reports.values())),
                      next_gate='RETURN_1E4E3_LOCAL_SHADOW_INSTALL_FOR_LIFECYCLE_REVIEW' if not errors else 'RETURN_FAILURE_SHARE_NO_MANUAL_RESET')
        if errors: result['error'] = 'One or more phase inputs could not be read/parsed; details retained'
    except Exception as exc:
        result.update(status='STOP_1E4E3_SHADOW_OPERATIONAL_REVIEW', execution_status='ERROR', failed_stage=stage,
                      error=str(exc), next_gate='RETURN_FAILURE_SHARE_NO_MANUAL_RESET')
        print('STOPP: ' + stage + ' — ' + str(exc), flush=True)
    finally:
        if repo is not None and before is not None:
            try:
                after = preserve_snapshot(repo, exp, g, s); ctl_after = controls(repo, g)
                save(report / 'audit/repository-after.json', after); save(report / 'audit/git-control-after.json', ctl_after)
                require(after == before and ctl_after == ctl_before, 'Repository or Git controls changed; no repair attempted')
                result.update(repository_unchanged=True, git_control_files_unchanged=True,
                              observed_head_at_exit=after['head'], worktree_clean=not after['status_records'])
            except Exception as exc:
                result.update(status='STOP_1E4E3_SHADOW_OPERATIONAL_REVIEW', execution_status='ERROR', exit_error=str(exc), next_gate='RETURN_FAILURE_SHARE_NO_MANUAL_RESET')
        save(report / 'RESULT.json', result)
        (report / 'SUMMARY.md').write_text('# E3 — installed shadow tool\n\n' +
            'Execution: ' + result['execution_status'] + '. No publication blocking or scientific approval.\n\n' +
            'Accepted source baseline, running tool and chosen input remain separately bound.\n\n' +
            'See phases/, snapshots/, tooling/ and coverage/. Tool files are classified explicitly, not silently ignored.\n\n' +
            'Reports may contain WOULD_BLOCK or REVIEW_REQUIRED even when reporting completes.\n', encoding='utf-8')
        archive, checksum = report_archive(report)
        print('\n=== RESULT ===\n' + json.dumps(result, ensure_ascii=False, indent=2), flush=True)
        print('\nSEND BEGGE FILENE:\n' + str(archive) + '\n' + str(checksum), flush=True)
    return result, report, archive, checksum
