"""Read-only phase-bound snapshots. No Git writes, index updates or target code execution."""
from __future__ import annotations
import hashlib, json, os, re, subprocess
from pathlib import Path
import readonly_guard as g

PHASES={'worktree','index','commit'}

def status_records(repo):
    parts=g.git(repo,'status','--porcelain=v1','-z','--untracked-files=all').split(b'\0')
    rows=[];i=0
    while i<len(parts):
        v=parts[i];i+=1
        if not v:continue
        g.require(len(v)>=4 and v[2:3]==b' ','Invalid NUL Git status')
        xy=v[:2].decode('ascii');path=os.fsdecode(v[3:]);row={'xy':xy,'path':path}
        if 'R' in xy or 'C' in xy:
            g.require(i<len(parts) and parts[i], 'Incomplete renamed path')
            row['old_path']=os.fsdecode(parts[i]);i+=1
        rows.append(row)
    return rows

def blobs(repo,oids):
    oids=sorted(set(oids))
    if not oids:return {}
    g.require(all(re.fullmatch(r'[0-9a-f]{40}|[0-9a-f]{64}',x) for x in oids),'Non-object request')
    p=subprocess.run(['git','--no-pager','-c','core.fsmonitor=false','-C',str(repo),'cat-file','--batch'],
       input=('\n'.join(oids)+'\n').encode('ascii'),stdout=subprocess.PIPE,stderr=subprocess.PIPE,env=g.env(),timeout=90)
    g.require(p.returncode==0,'Git blob read failed; no fetch or recovery writes')
    raw=p.stdout;pos=0;out={}
    for oid in oids:
        end=raw.find(b'\n',pos);g.require(end!=-1,'Truncated batch header')
        header=raw[pos:end].decode('ascii').split();g.require(len(header)==3 and header[0]==oid and header[1]=='blob','Missing/non-blob Git object')
        size=int(header[2]);pos=end+1;data=raw[pos:pos+size];pos+=size
        g.require(len(data)==size and raw[pos:pos+1]==b'\n','Truncated batch blob');pos+=1
        out[oid]=data
    g.require(pos==len(raw),'Unexpected trailing batch response');return out

def capture(repo,exp,phase,commit=None):
    g.require(phase in PHASES,'Unknown input phase')
    head=g.scalar(repo,'rev-parse','HEAD')
    rev=commit if phase=='commit' and commit else head
    g.require(re.fullmatch(r'[0-9a-f]{40}|[0-9a-f]{64}',rev),'Commit must be a full object ID')
    selected=g.tree_entries(repo,rev) if phase=='commit' else g.index_entries(repo)
    base=g.tree_entries(repo,exp['expected_commit'])
    rows=status_records(repo);errors=[];files={};ids={};modes={}
    allowed=sorted(exp['locked_hashes'])
    if phase in {'index','commit'}:
        valid={p: v for p,v in selected.items() if p in allowed and v['mode'] in {'100644','100755'} and v.get('kind','blob')=='blob'}
        data=blobs(repo,[v['oid'] for v in valid.values()])
        for path in allowed:
            if path not in valid:errors.append({'path':path,'error':'Absent or unsupported selected blob'});continue
            item=valid[path];files[path]=data[item['oid']];ids[path]=item['oid'];modes[path]=item['mode']
    else:
        for path in allowed:
            try:
                f=g.regular(repo,path);data=f.read_bytes();files[path]=data
                algo=hashlib.sha1 if len(head)==40 else hashlib.sha256
                ids[path]=algo(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()
                modes[path]='100755' if f.stat().st_mode&0o111 else '100644'
            except Exception as exc:errors.append({'path':path,'error':str(exc)})
    changed=set()
    if phase=='worktree':
        for row in rows:
            changed.add(row['path'])
            if 'old_path' in row:changed.add(row['old_path'])
        for path,v in selected.items():
            if path not in base or v['oid']!=base[path]['oid'] or v['mode']!=base[path]['mode']:changed.add(path)
        changed.update(set(base)-set(selected))
    else:
        for path in set(base)|set(selected):
            a=base.get(path);b=selected.get(path)
            if a is None or b is None or (a['mode'],a['oid'])!=(b['mode'],b['oid']):changed.add(path)
    for path,data in files.items():
        if g.sha(data)!=exp['locked_hashes'][path]:changed.add(path)
    fingerprints={p:g.sha(b) for p,b in sorted(files.items())}
    index=g.index_entries(repo)
    staged=[p for p in set(base)|set(index) if p not in base or p not in index or (base[p]['mode'],base[p]['oid'])!=(index[p]['mode'],index[p]['oid'])]
    disagreements=[]
    for p in staged:
        if p not in exp['locked_hashes']:continue
        if p not in index:continue
        try:
            wt=g.regular(repo,p).read_bytes(); oid=index[p]['oid'];algo=hashlib.sha1 if len(oid)==40 else hashlib.sha256
            if algo(b'blob '+str(len(wt)).encode()+b'\0'+wt).hexdigest()!=oid:disagreements.append(p)
        except Exception:disagreements.append(p)
    meta={'phase':phase,'selected_commit':rev if phase=='commit' else None,'observed_head':head,
          'selected_tree_oid':g.scalar(repo,'rev-parse',rev+'^{tree}') if phase=='commit' else None,
          'selected_inventory_fingerprint':g.sha(g.encode(selected)),
          'file_sha256':fingerprints,'blob_oids':ids,'modes':modes,'status_records':rows,
          'changed_paths':sorted(changed),'staged_paths_vs_base':sorted(staged),'index_worktree_disagreements':sorted(disagreements),
          'read_errors':errors,'all_path_inventory_count':len(set(base)|set(selected)),
          'outside_locked_inventory':sorted((set(base)|set(selected))-set(allowed))}
    meta['snapshot_fingerprint']=g.sha(g.encode(meta))
    return {'meta':meta,'files':files}

def serializable(s):return s['meta']

def phase_unchanged(a,b):return a['meta']==b['meta'] and a['files']==b['files']
