"""Parse already-saved historical HTML fixtures; never fetch production.
Uses a separate representation reader, then the SAME rule checks as AST inputs.
"""
from __future__ import annotations
from html.parser import HTMLParser
from pathlib import Path
import copy,zipfile
import shadow as s
import readonly_guard as g
import mutations as m

VOID={'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
class Parser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True);self.root={'tag':'document','attrs':{},'children':[],'line':1,'uncertain':False};self.stack=[self.root]
    def handle_starttag(self,tag,attrs):
        n={'tag':tag,'attrs':dict(attrs),'children':[],'line':self.getpos()[0],'uncertain':len(dict(attrs))!=len(attrs)}
        if 'hidden' in n['attrs']:n['attrs']['hidden']=True
        self.stack[-1]['children'].append(n)
        if tag not in VOID:self.stack.append(n)
    def handle_startendtag(self,tag,attrs):
        self.handle_starttag(tag,attrs)
        if tag not in VOID:self.handle_endtag(tag)
    def handle_endtag(self,tag):
        for i in range(len(self.stack)-1,0,-1):
            if self.stack[i]['tag']==tag:self.stack=self.stack[:i];return
    def handle_data(self,data):self.stack[-1]['children'].append(data)

def fixture_projection(package,typescript,base):
    ledger=s.load(package/'reference/delivery-ledger.json')['routes'];origins=s.load(package/'reference/html-fixture-origins.json')
    projected=s.project({p:base[p] for p in s.GLOSSARY},package,typescript)
    with zipfile.ZipFile(package/'fixtures/historical-html.zip') as z:
        names=z.namelist()
        for r in ledger:
            # Filenames are source-path keyed, established by origin log at packaging.
            origin=next(v for v in origins if v['path']==r['path']);name=origin['fixture'];body=z.read(name);g.require(g.sha(body)==origin['sha256'],'Historical HTML fixture hash mismatch');par=Parser();par.feed(body.decode('utf-8'));par.close()
            projected['files'].append({'path':r['path'],'status':'PARSED_HISTORICAL_HTML','roots':[par.root],'unresolved':[],'errors':[]})
    return projected

def run(package,typescript,base):
    projection=fixture_projection(package,typescript,base)
    snap=m.memory_snapshot(base,base,phase='historical_saved_html')
    origins=s.load(package/'reference/html-fixture-origins.json')
    for row in origins:snap['meta']['file_sha256'][row['path']]=row['sha256']
    snap['meta']['blob_oids']={}
    snap['meta']['snapshot_fingerprint']=g.sha(g.encode(snap['meta']))
    report=s.analyze(snap,package,typescript,base,projection)
    report['representation']='HISTORICAL_SAVED_HTML_NOT_NEW_PRODUCTION_FETCH'
    report['origins']=s.load(package/'reference/html-fixture-origins.json')
    report['current_rendering_verified']=False
    return report
