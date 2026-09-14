"""1E.4E.1: read-only Git/byte guards; no target-repository commands can write.
Only listed project text is read; environment/config contents are never reported.
"""
from __future__ import annotations
import hashlib,json,os,re,subprocess
from pathlib import Path, PurePosixPath

BLOCKED_ENV=('GIT_DIR','GIT_WORK_TREE','GIT_INDEX_FILE','GIT_OBJECT_DIRECTORY','GIT_COMMON_DIR','GIT_ALTERNATE_OBJECT_DIRECTORIES','GIT_CONFIG_COUNT','GIT_CONFIG_PARAMETERS')
READ_COMMANDS={'rev-parse','branch','status','show','ls-tree','ls-files','ls-remote','remote','diff-tree'}
def require(ok,message):
    if not ok: raise ValueError(message)
def sha(data):return hashlib.sha256(data).hexdigest()
def encode(obj):return (json.dumps(obj,ensure_ascii=False,indent=2)+'\n').encode('utf-8')
def save(path,obj):path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(encode(obj))
def relative(rel):
    p=PurePosixPath(rel)
    require(rel and not p.is_absolute() and '..' not in p.parts and p.parts and '\\' not in rel and str(p)==rel,'Unsafe relative file name')
    return p

def regular(root,rel):
    p=root
    for part in relative(rel).parts:
        p=p/part;require(not p.is_symlink(),'Internal symlink refused: '+rel)
    require(p.is_file(),'Missing regular file: '+rel)
    return p

def env():
    require(not any(os.environ.get(k) for k in BLOCKED_ENV),'Redirected Git environment refused')
    e=os.environ.copy();e.pop('NODE_OPTIONS',None);e.pop('NODE_PATH',None);e.update(GIT_OPTIONAL_LOCKS='0',GIT_TERMINAL_PROMPT='0',GIT_PAGER='cat',LC_ALL='C',GIT_NO_REPLACE_OBJECTS='1',GIT_NO_LAZY_FETCH='1')
    return e

def git(repo,*args,timeout=45):
    require(args and args[0] in READ_COMMANDS,'Write or unrecognised Git command refused')
    if args[0]=='branch':require(args[1:]==('--show-current',),'Branch mutation refused')
    require(not any(a.startswith('--output') for a in args),'File-writing output option refused')
    if args[0]=='remote':require(args[1:] in [('get-url','--all','origin'),('get-url','--push','--all','origin')],'Remote write refused')
    # Disable fsmonitor invocation and optional index refresh for every read.
    p=subprocess.run(['git','--no-pager','-c','core.fsmonitor=false','-c','core.untrackedCache=false','-C',str(repo),*args],
                     stdout=subprocess.PIPE,stderr=subprocess.PIPE,env=env(),timeout=timeout)
    require(p.returncode==0,'Git read failed: '+args[0]+'; no recovery mutation performed')
    return p.stdout

def scalar(repo,*args):
    b=git(repo,*args)
    return os.fsdecode(b[:-1] if b.endswith(b'\n') else b)

def root_path(path):
    p=Path(path).expanduser().resolve(strict=True)
    require(p.is_dir(),'Repository directory missing')
    require(Path(scalar(p,'rev-parse','--show-toplevel')).resolve(strict=True)==p,'Specify the repository root, not a subdirectory')
    require((p/'.git').is_dir() and not (p/'.git').is_symlink(),'This collector requires a normal .git directory; linked worktrees are not supported')
    return p

def control_snapshot(repo):
    d=repo/'.git';out={}
    for rel in ['HEAD','index','config','packed-refs','FETCH_HEAD','ORIG_HEAD','shallow']:
        p=d/rel
        if p.exists():out[rel]=sha(regular(d,rel).read_bytes())
    for dirname in ['refs','logs']:
        p=d/dirname
        if p.exists():
            require(not p.is_symlink(),'Git control directory symlink refused')
            for f in sorted(p.rglob('*')):
                require(not f.is_symlink(),'Git control symlink refused')
                if f.is_file():out[f.relative_to(d).as_posix()]=sha(f.read_bytes())
    return out

def tree_entries(repo,rev='HEAD'):
    rows={}
    for raw in git(repo,'ls-tree','-r','-z','--full-tree',rev).split(b'\0'):
        if not raw:continue
        meta,p=raw.split(b'\t',1);mode,kind,oid=meta.decode().split(' ');path=os.fsdecode(p)
        require(path not in rows,'Duplicate tree path')
        rows[path]={'mode':mode,'kind':kind,'oid':oid}
    return rows

def index_entries(repo):
    rows={}
    for raw in git(repo,'ls-files','--stage','-z').split(b'\0'):
        if not raw:continue
        meta,p=raw.split(b'\t',1);mode,oid,stage=meta.decode().split(' ');path=os.fsdecode(p)
        require(stage=='0' and path not in rows,'Unmerged or duplicate index entry')
        rows[path]={'mode':mode,'oid':oid}
    return rows

def snapshot(repo,exp):
    require(scalar(repo,'branch','--show-current')==exp['expected_branch'],'Unexpected branch')
    require(scalar(repo,'rev-parse','HEAD')==exp['expected_commit'],'HEAD differs from approved 1E.4D.6 baseline')
    require(git(repo,'status','--porcelain=v1','-z','--untracked-files=all')==b'','Clean worktree and index required; no reset/stash performed')
    for rel in ['MERGE_HEAD','CHERRY_PICK_HEAD','REVERT_HEAD','rebase-merge','rebase-apply','sequencer','BISECT_START']:
        require(not (repo/'.git'/rel).exists(),'Unfinished Git operation: '+rel)
    tree=tree_entries(repo);index=index_entries(repo)
    require(set(tree)==set(index),'Index/tree path set differs')
    for rel,row in tree.items():require(index[rel]=={'mode':row['mode'],'oid':row['oid']},'Index/tree mismatch: '+rel)
    hashes={};modes={}
    for rel,h in exp['locked_hashes'].items():
        p=regular(repo,rel);data=p.read_bytes();got=sha(data)
        require(got==h,'Approved file hash mismatch: '+rel)
        require(rel in tree and tree[rel]['kind']=='blob','Locked file absent from HEAD tree: '+rel)
        oid=tree[rel]['oid'];algo=hashlib.sha1 if len(oid)==40 else hashlib.sha256
        require(algo(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()==oid,'Worktree bytes differ from committed blob: '+rel)
        mode='100755' if p.stat().st_mode&0o111 else '100644'
        require(mode==tree[rel]['mode'],'File mode differs from committed mode: '+rel)
        hashes[rel]=got;modes[rel]=mode
    return {'status':'PASS','head':exp['expected_commit'],'worktree_clean':True,'locked_file_count':len(hashes),
            'locked_sha256':hashes,'locked_modes':modes,'tree_sha256':sha(encode(tree)),'index_entries_sha256':sha(encode(index))}

def verify_chain(repo,exp):
    chain=[]
    previous=exp['original_capture_commit']
    for b in exp['batches']:
        require(b['parent']==previous,'Broken delivered commit chain')
        require(scalar(repo,'show','-s','--format=%P',b['commit']).split()==[previous],'Unexpected delivered commit parent')
        require(scalar(repo,'show','-s','--format=%s',b['commit'])==b['commit_message'],'Unexpected delivered commit subject')
        changed=[os.fsdecode(x) for x in git(repo,'diff-tree','--no-commit-id','--name-only','-r','-z',b['commit']).split(b'\0') if x]
        require(set(changed)==set(b['paths']) and len(changed)==len(b['paths']),'Delivered commit path set differs')
        tree=tree_entries(repo,b['commit'])
        for rel in b['paths']:
            data=regular(repo,rel).read_bytes();oid=tree[rel]['oid'];algo=hashlib.sha1 if len(oid)==40 else hashlib.sha256
            require(algo(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()==oid,'Previously delivered page changed: '+rel)
        chain.append({'stage':b['stage'],'commit':b['commit'],'parent':previous,'paths':changed,'status':'PASS'})
        previous=b['commit']
    require(previous==exp['expected_commit'],'Chain does not end at current approved baseline')
    return chain

def remote(repo,exp):
    for args in [('get-url','--all','origin'),('get-url','--push','--all','origin')]:
        urls=scalar(repo,'remote',*args).splitlines()
        require(len(urls)==1 and urls[0] in exp['expected_remote_urls'],'Unexpected origin URL configuration')
    rows=git(repo,'ls-remote','--heads','origin','refs/heads/main').decode().splitlines()
    require(len(rows)==1 and rows[0].split()==[exp['expected_commit'],'refs/heads/main'],'Remote main differs from approved baseline')
    require(scalar(repo,'rev-parse','refs/remotes/origin/main')==exp['expected_commit'],'origin/main differs; no automatic fetch performed')
    return {'status':'PASS','head':exp['expected_commit'],'remote_main':exp['expected_commit'],'origin_main':exp['expected_commit'],'fetch_performed':False}

def manifest_check(package):
    manifest=regular(package,'PACKAGE-MANIFEST.sha256');rows={}
    for line in manifest.read_text().splitlines():
        h,rel=line.split('  ',1);relative(rel)
        require(re.fullmatch('[0-9a-f]{64}',h) and rel not in rows,'Invalid/duplicate manifest row');rows[rel]=h
    for f in package.rglob('*'):require(not f.is_symlink(),'Package symlink refused')
    actual={f.relative_to(package).as_posix() for f in package.rglob('*') if f.is_file() and f!=manifest}
    require(actual==set(rows),'Package has missing/unlisted files; extract fresh')
    for rel,h in rows.items():require(sha(regular(package,rel).read_bytes())==h,'Package hash mismatch: '+rel)
    return len(rows)
