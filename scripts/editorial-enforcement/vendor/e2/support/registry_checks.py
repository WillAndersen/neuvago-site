"""CAL-01/02 pure checks. No lookups, aliases, review approval or file writes.
The accepted identity pairs are evidence, not an inference that arbitrary identifiers alias.
"""
from __future__ import annotations
import re
from collections import defaultdict
from urllib.parse import urlsplit, unquote

PENDING={
 'directness':{'PENDING_CLAIM_REVIEW','PENDING_REVIEW'},
 'evidence_directness':{'PENDING_1E4C'},
 'evidence_tier_basis':{'PUBLICATION_TYPE_METHOD_TIER_NOT_CERTAINTY_GRADE'},
 'pico_status':{'PENDING_STRUCTURED_REVIEW'},
 'safety_relevance':{'PENDING_REVIEW'},
 'review_status':{'PENDING_HUMAN_REVIEW_NO_AUTO_APPROVAL'},
 'candidate_relationship':{'POTENTIAL_SUPPORT_REQUIRES_REVIEW','BOUNDARY_CONTEXT_REQUIRES_REVIEW','SAFETY_CONTEXT_REQUIRES_REVIEW'},
 'evidence_tier':{'T1_SYNTHESIS','T2_RANDOMIZED_OR_CONTROLLED','T3_CLINICAL_OR_OBSERVATIONAL','T4_REVIEW_GUIDELINE_OR_MECHANISTIC','T5_OTHER','PENDING_METADATA','UNRESOLVED'},
}
ARRAYS={'evidence_ids','claim_ids','approved_evidence_ids'}
BOOLS={'release_ready','scientific_claim_support_approved','claim_support_review_complete','full_corpus_source_integrity_verified','product_support_approved','claim_support_approved'}
EXTRA_APPROVAL={'certainty','evidence_certainty','certainty_grade','product_support','claim_support','approval_status'}
NEW_EXTRA_PENDING={'PENDING','PENDING_REVIEW','NOT_ASSESSED','NOT_CLAIM_APPROVED','NOT_APPROVED','UNKNOWN',None,False}
ROW_STATUS={
 'evidence':{'PUBMED_METADATA_RESOLVED_NOT_CLAIM_APPROVED','PUBMED_METADATA_UNRESOLVED_NOT_CLAIM_APPROVED','CROSSREF_METADATA_RESOLVED_NOT_CLAIM_APPROVED','DOI_ONLY_PENDING_METADATA_NOT_CLAIM_APPROVED'},
 'canonical':{'POLICY_LOCKED_EVIDENCE_LINK_PENDING'},
 'candidate':{'PENDING_HUMAN_REVIEW_NO_AUTO_APPROVAL'},
}

def pmid(value):
 if value is None or value=='':return None
 if not isinstance(value,str) or not re.fullmatch(r'[1-9][0-9]{0,8}',value.strip()):raise ValueError('Malformed PMID')
 return value.strip()

def doi(value):
 if value is None or value=='':return None
 if not isinstance(value,str):raise ValueError('Malformed DOI type')
 val=value.strip()
 val=re.sub(r'^(?:https?://(?:dx\.)?doi\.org/|doi\s*:\s*)','',val,flags=re.I)
 val=unquote(val).lower()
 if not re.fullmatch(r'10\.\d{4,9}/[^\s<>]+',val):raise ValueError('Malformed DOI')
 return val

def identities(row):
 ids=set()
 p=pmid(row.get('pmid'));d=doi(row.get('doi'))
 if p:ids.add(('PMID',p))
 if d:ids.add(('DOI',d))
 u=row.get('source_url')
 if u:
  if not isinstance(u,str):raise ValueError('Malformed source URL type')
  parsed=urlsplit(u)
  if parsed.scheme not in {'https','http'} or not parsed.netloc:raise ValueError('Malformed source URL')
  host=(parsed.hostname or '').lower()
  if host=='pubmed.ncbi.nlm.nih.gov':
   v=pmid(parsed.path.strip('/'))
   if not v:raise ValueError('Missing PMID in source URL')
   ids.add(('PMID',v))
  elif host in {'doi.org','dx.doi.org'}:ids.add(('DOI',doi(parsed.path.lstrip('/'))))
  elif not p and not d:ids.add(('URL',u.rstrip('/')))
 return ids

def canonical_identity_checks(doc,old):
 rows=doc['evidence'];baseline=old['evidence'];issues=defaultdict(list);tokens={};seen=defaultdict(list)
 qtokens=set();qids=set()
 for q in old.get('quarantined_evidence',[]):
  qids.add(q.get('evidence_id'));qtokens.update(identities(q.get('original_record',{})))
 # Only prior authoritative pairings, no current-data union or fuzzy equivalence.
 pairs={}
 for row in baseline:
  p=pmid(row.get('pmid'));d=doi(row.get('doi'))
  if p and d:pairs[('PMID',p)]=('DOI',d);pairs[('DOI',d)]=('PMID',p)
 ids=defaultdict(list)
 for i,row in enumerate(rows):
  rid=row.get('evidence_id');ids[rid].append(i)
  if not isinstance(rid,str) or not rid:issues[i].append('Missing or malformed evidence_id')
  try:tok=identities(row)
  except ValueError as exc:issues[i].append(str(exc));tok=set()
  tokens[i]=tok
  if not tok:issues[i].append('No normalized identity supplied')
  if rid in qids or tok & qtokens:issues[i].append('Quarantined canonical identity reintroduced, irrespective of local ID')
  for kind in ('PMID','DOI'):
   if len({v for k,v in tok if k==kind})>1:issues[i].append('Conflicting '+kind+' identity within record fields/URL')
  for token in tok:
   if token in pairs:
    expected=pairs[token];actual={v for k,v in tok if k==expected[0]}
    if actual and expected[1] not in actual:issues[i].append('PMID/DOI pair conflicts with accepted identity relationship')
   seen[token].append(i)
 for idxs in ids.values():
  if len(idxs)>1:
   for i in idxs:issues[i].append('Duplicate local evidence_id')
 for token,idxs in seen.items():
  if len(idxs)>1:
   for i in idxs:issues[i].append('Duplicate canonical identity across records: '+token[0]+':'+token[1])
 return [{'record_id':r.get('evidence_id'),'record_index':i,'identities':[{'kind':k,'value':v} for k,v in sorted(tokens[i])],
          'violations':list(dict.fromkeys(issues[i]))} for i,r in enumerate(rows)]

def promotion_checks(doc,old,kind):
 """Stable-ID comparison for primary collections. Arbitrary nested arrays are
 traversed without positional correspondence; only explicit unsafe fields block.
 Reordering records is not a transition to another record's review state.
 """
 collection='evidence' if kind=='evidence' else 'claims'
 key='evidence_id' if kind=='evidence' else 'claim_id'
 if not isinstance(doc.get(collection),list) or not all(isinstance(r,dict) for r in doc[collection]):raise ValueError('Malformed registry collection')
 old_map={r[key]:r for r in old[collection]}
 records=doc[collection];seen=set();violations=[];new_pending=[]
 def flag(rid,field,why,value):violations.append({'record_id':rid,'field':field,'reason':why,'observed':value})
 def check_tree(obj,prior,rid,loc='$',row_level=False):
  if isinstance(obj,dict):
   for k,v in obj.items():
    prev=prior.get(k) if isinstance(prior,dict) else None;field=loc+'.'+k
    if k in ARRAYS:
     if not isinstance(v,list):flag(rid,field,'Approval links must be arrays',v)
     elif v and v!=prev:flag(rid,field,'No authorization loader exists for claim/evidence approval',v)
    elif k in BOOLS:
     if v is not False:flag(rid,field,'Broad approval flags must remain explicitly false in shadow pilot',v)
    elif k in PENDING:
     if not isinstance(v,str) or v not in PENDING[k]:flag(rid,field,'Disallowed or promoted review/status/method value',v)
     elif prev is not None and v!=prev:flag(rid,field,'Review-bound status changed without authorization',v)
    elif k in EXTRA_APPROVAL and v!=prev:
     if not isinstance(v,(str,bool,type(None))) or v not in NEW_EXTRA_PENDING:flag(rid,field,'New approval/certainty assertion requires review authorization',v)
    elif row_level and k=='status':
     if not isinstance(v,str) or v not in ROW_STATUS[kind]:flag(rid,field,'New and existing row status must remain not-approved',v)
    check_tree(v,prev,rid,field)
  elif isinstance(obj,list):
   for i,v in enumerate(obj):check_tree(v,None,rid,loc+'['+str(i)+']')
 # Primary rows excluded here: checked by stable ID below. Quarantine is history.
 top={k:v for k,v in doc.items() if k not in {collection,'quarantined_evidence'}}
 oldtop={k:v for k,v in old.items() if k not in {collection,'quarantined_evidence'}}
 check_tree(top,oldtop,None)
 for r in records:
  rid=r.get(key)
  if not isinstance(rid,str) or not rid:flag(None,collection,'Missing stable row identifier',rid);continue
  if rid in seen:flag(rid,key,'Duplicate stable row identifier',rid)
  seen.add(rid);prev=old_map.get(rid)
  check_tree(r,prev,rid,collection+'['+rid+']',True)
  # Require the protected control fields used by the record family.
  required={'evidence':{'directness','evidence_tier_basis','claim_ids','status','pico_status','safety_relevance'},
    'canonical':{'evidence_ids','evidence_directness','status'},
    'candidate':{'approved_evidence_ids','directness','review_status','candidate_relationship'}}[kind]
  for field in sorted(required-set(r)):flag(rid,field,'Missing protected control field',None)
  if prev is None:new_pending.append(rid)
 # Removal is review-only unless it concerns immutable history; not an implicit approval.
 return violations,new_pending
