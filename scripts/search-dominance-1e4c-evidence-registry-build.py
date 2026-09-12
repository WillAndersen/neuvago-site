#!/usr/bin/env python3
from __future__ import annotations
import csv, hashlib, json, re, subprocess, sys, time, urllib.parse
import xml.etree.ElementTree as ET
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path

EXPECTED_HEAD="e9dcc1efbc0096d58e100d95756f1b6c9b5c95b3"
CLAIM_REL="docs/seo/evidence-operations/claim-registry.v1.json"
EV_REL="docs/seo/evidence-operations/evidence-registry.v1.json"
LINK_REL="docs/seo/evidence-operations/claim-evidence-link-candidates.v1.json"
TEXT_EXTS={".js",".jsx",".ts",".tsx",".md",".mdx",".json",".txt"}
SKIP_PARTS={"node_modules",".next","dist","build","coverage",".git"}
SKIP_PREFIXES=("docs/seo/evidence-operations/",)
PMID_RE=re.compile(r"\bPMID\s*[:#]?\s*(\d{5,9})\b",re.I)
PUBMED_RE=re.compile(r"https?://(?:pubmed\.ncbi\.nlm\.nih\.gov|www\.ncbi\.nlm\.nih\.gov/pubmed)/(\d{5,9})/?",re.I)
PUBMED_DYNAMIC_RE=re.compile(r"https?://(?:pubmed\.ncbi\.nlm\.nih\.gov|www\.ncbi\.nlm\.nih\.gov/pubmed)/[^\s)\]>\"]+",re.I)
DOI_RE=re.compile(r"\b10\.\d{4,9}/[-._;()/:A-Z0-9]+",re.I)
HEADING_STOP={"source","sources","evidence","claim","claims","boundary","boundaries","allowed","not","locked","lock","section","set","the","and","for","of"}

def git(repo,*args):
    return subprocess.check_output(["git","-C",str(repo),*args],text=True).strip()

def safe_text(p):
    try:return p.read_text(encoding="utf-8")
    except UnicodeDecodeError:return p.read_text(encoding="utf-8",errors="replace")

def iter_files(repo):
    for root_name in ("src","docs"):
        root=repo/root_name
        if not root.exists(): continue
        for p in root.rglob("*"):
            if not p.is_file() or p.suffix.lower() not in TEXT_EXTS: continue
            if any(x in SKIP_PARTS for x in p.parts): continue
            rel=p.relative_to(repo).as_posix()
            if any(rel.startswith(x) for x in SKIP_PREFIXES): continue
            if p.stat().st_size>3_000_000: continue
            yield p

def normalize_doi(raw):
    x=raw.strip().strip("`'\"<>")
    x=re.sub(r"^https?://(?:dx\.)?doi\.org/","",x,flags=re.I)
    x=re.sub(r"^doi\s*:\s*","",x,flags=re.I)
    x=x.split("?",1)[0].split("#",1)[0]
    while x and x[-1] in ".,;":
        x=x[:-1]
    # Publisher navigation suffixes are not DOI identity.
    x=re.sub(r"/(?:full|abstract|pdf)$","",x,flags=re.I)
    return x.lower()

def headings(lines):
    cur=None; out={}
    for i,line in enumerate(lines,1):
        m=re.match(r"^\s{0,3}#{1,6}\s+(.+?)\s*$",line)
        if m: cur=m.group(1).strip()
        out[i]=cur
    return out

def heading_key(s):
    if not s:return ()
    toks=re.findall(r"[a-z0-9æøåäöüß]+",s.lower())
    return tuple(t for t in toks if t not in HEADING_STOP)

def heading_match(a,b):
    aa=set(heading_key(a)); bb=set(heading_key(b))
    if not aa or not bb:return False
    if aa==bb:return True
    inter=len(aa&bb); union=len(aa|bb)
    return inter>=1 and inter/union>=0.8

def discover(repo):
    occ=[]; dynamic=[]
    for p in iter_files(repo):
        rel=p.relative_to(repo).as_posix()
        lines=safe_text(p).splitlines()
        hm=headings(lines) if p.suffix.lower() in {".md",".mdx"} else {}
        seen=set()
        for line_no,line in enumerate(lines,1):
            h=hm.get(line_no)
            for m in PMID_RE.finditer(line):
                key=("PMID",m.group(1),rel,line_no)
                if key not in seen:
                    seen.add(key); occ.append({"kind":"PMID","value":m.group(1),"file":rel,"line":line_no,"markdown_heading":h})
            for m in PUBMED_RE.finditer(line):
                key=("PUBMED_URL",m.group(1),rel,line_no)
                if key not in seen:
                    seen.add(key); occ.append({"kind":"PUBMED_URL","value":m.group(1),"file":rel,"line":line_no,"markdown_heading":h})
            for m in PUBMED_DYNAMIC_RE.finditer(line):
                if not re.search(r"/\d{5,9}/?$",m.group(0)):
                    dynamic.append({"kind":"PUBMED_DYNAMIC_URL","value":m.group(0),"file":rel,"line":line_no})
            for m in DOI_RE.finditer(line):
                doi=normalize_doi(m.group(0))
                key=("DOI",doi,rel,line_no)
                if doi and key not in seen:
                    seen.add(key); occ.append({"kind":"DOI","value":doi,"file":rel,"line":line_no,"markdown_heading":h})
    return occ,dynamic

def curl_bytes(url):
    return subprocess.check_output([
        "/usr/bin/curl","--fail","--silent","--show-error","--location",
        "--retry","4","--retry-delay","2","--connect-timeout","20","--max-time","120",url
    ])

def esearch_doi(doi,network,idx):
    url="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?"+urllib.parse.urlencode({
        "db":"pubmed","term":f"{doi}[AID]","retmode":"json","retmax":"5","tool":"neuvago-evidence-ops"
    })
    data=curl_bytes(url)
    (network/f"doi-esearch-{idx:03d}.json").write_bytes(data)
    x=json.loads(data)
    ids=x.get("esearchresult",{}).get("idlist",[])
    return [str(i) for i in ids if str(i).isdigit()]

def parse_pubmed(root):
    found={}
    for article in root.findall(".//PubmedArticle"):
        med=article.find("MedlineCitation")
        if med is None:continue
        pmid=(med.findtext("PMID") or "").strip()
        if not pmid:continue
        art=med.find("Article")
        title=journal=None; year=None; authors=[]; pubtypes=[]
        if art is not None:
            te=art.find("ArticleTitle")
            if te is not None:title="".join(te.itertext()).strip()
            je=art.find("Journal")
            if je is not None:
                jt=je.find("Title")
                if jt is not None:journal="".join(jt.itertext()).strip()
                pd=je.find("./JournalIssue/PubDate")
                if pd is not None:
                    y=(pd.findtext("Year") or "").strip()
                    if y.isdigit():year=int(y)
                    else:
                        md=pd.findtext("MedlineDate") or ""
                        mm=re.search(r"\b(18|19|20)\d{2}\b",md)
                        if mm:year=int(mm.group(0))
            for au in art.findall("./AuthorList/Author"):
                cn=(au.findtext("CollectiveName") or "").strip()
                if cn:authors.append(cn);continue
                ln=(au.findtext("LastName") or "").strip()
                ini=(au.findtext("Initials") or "").strip()
                n=" ".join(x for x in (ln,ini) if x)
                if n:authors.append(n)
            for pt in art.findall("./PublicationTypeList/PublicationType"):
                t="".join(pt.itertext()).strip()
                if t:pubtypes.append(t)
        doi=pmcid=None
        pd=article.find("PubmedData")
        if pd is not None:
            for aid in pd.findall("./ArticleIdList/ArticleId"):
                k=(aid.attrib.get("IdType") or "").lower(); v=(aid.text or "").strip()
                if k=="doi" and v:doi=normalize_doi(v)
                if k=="pmc" and v:pmcid=v
        found[pmid]={"record_type":"PUBMED_ARTICLE","title":title,"journal":journal,"publication_year":year,
                     "authors":authors[:20],"publication_types":sorted(set(pubtypes)),"doi":doi,"pmcid":pmcid}
    for book in root.findall(".//PubmedBookArticle"):
        doc=book.find("BookDocument")
        if doc is None:continue
        pmid=(doc.findtext("PMID") or "").strip()
        if not pmid:continue
        te=doc.find("ArticleTitle")
        title="".join(te.itertext()).strip() if te is not None else None
        journal=(doc.findtext("./Book/BookTitle") or "").strip() or None
        y=(doc.findtext("./Book/PubDate/Year") or "").strip()
        year=int(y) if y.isdigit() else None
        authors=[]
        for au in doc.findall("./AuthorList/Author"):
            ln=(au.findtext("LastName") or "").strip()
            fn=(au.findtext("ForeName") or "").strip()
            n=" ".join(x for x in (ln,fn) if x)
            if n:authors.append(n)
        pubtypes=[]
        for pt in doc.findall("./PublicationType"):
            t="".join(pt.itertext()).strip()
            if t:pubtypes.append(t)
        found[pmid]={"record_type":"PUBMED_BOOK_ARTICLE","title":title,"journal":journal,"publication_year":year,
                     "authors":authors[:20],"publication_types":sorted(set(pubtypes)),"doi":None,"pmcid":None}
    return found

def efetch(pmids,network,batch_size=100):
    out={}
    for batch_no,start in enumerate(range(0,len(pmids),batch_size),1):
        batch=pmids[start:start+batch_size]
        url="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?"+urllib.parse.urlencode({
            "db":"pubmed","id":",".join(batch),"retmode":"xml","tool":"neuvago-evidence-ops"
        })
        data=curl_bytes(url)
        (network/f"pubmed-efetch-r1-{batch_no:02d}.xml").write_bytes(data)
        out.update(parse_pubmed(ET.fromstring(data)))
        time.sleep(0.45)
    return out

def crossref(doi,network,idx):
    url="https://api.crossref.org/works/"+urllib.parse.quote(doi,safe="")
    try:data=curl_bytes(url)
    except subprocess.CalledProcessError:return None
    (network/f"crossref-{idx:03d}.json").write_bytes(data)
    try:m=json.loads(data).get("message",{})
    except Exception:return None
    titles=m.get("title") or []
    containers=m.get("container-title") or []
    authors=[]
    for a in m.get("author") or []:
        n=" ".join(x for x in ((a.get("given") or "").strip(),(a.get("family") or "").strip()) if x)
        if n:authors.append(n)
    year=None
    for k in ("published-print","published-online","issued","created"):
        parts=(m.get(k) or {}).get("date-parts") or []
        if parts and parts[0] and isinstance(parts[0][0],int):
            year=parts[0][0];break
    return {"title":titles[0] if titles else None,"journal":containers[0] if containers else None,
            "publication_year":year,"authors":authors[:20],"type":m.get("type")}

def classify(pubtypes,title):
    joined=" ".join(pubtypes).lower(); t=(title or "").lower()
    if "meta-analysis" in joined or "systematic review" in joined or "meta-analysis" in t or "systematic review" in t:
        return "SYSTEMATIC_REVIEW_OR_META_ANALYSIS","T1_SYNTHESIS"
    if "randomized controlled trial" in joined or "controlled clinical trial" in joined:
        return "RANDOMIZED_OR_CONTROLLED_TRIAL","T2_RANDOMIZED_OR_CONTROLLED"
    if any(x in joined for x in ("clinical trial","observational study","comparative study","evaluation study")):
        return "CLINICAL_OR_OBSERVATIONAL_STUDY","T3_CLINICAL_OR_OBSERVATIONAL"
    if any(x in joined for x in ("practice guideline","guideline","review")):
        return "REVIEW_OR_GUIDELINE","T4_REVIEW_GUIDELINE_OR_MECHANISTIC"
    return "OTHER_OR_UNCLASSIFIED","T5_OTHER"

def evid_doi(doi):return "EVD-DOI-"+hashlib.sha256(doi.encode()).hexdigest()[:12].upper()
def dedupe(rows):
    seen=set();out=[]
    for r in rows:
        k=(r["file"],int(r["line"]),r["kind"],r["value"])
        if k in seen:continue
        seen.add(k);out.append(r)
    return sorted(out,key=lambda x:(x["file"],int(x["line"]),x["kind"],x["value"]))

def relation(policy):
    if policy=="ALLOWED_WITH_QUALIFIERS":return "POTENTIAL_SUPPORT_REQUIRES_REVIEW"
    if policy=="SAFETY_BOUNDARY":return "SAFETY_CONTEXT_REQUIRES_REVIEW"
    return "BOUNDARY_CONTEXT_REQUIRES_REVIEW"

def main():
    repo=Path(sys.argv[1]).resolve(); report=Path(sys.argv[2]).resolve()
    # R3: reviewed identity dispositions must not be lost to a fresh discovery pass.
    reviewed_path = repo / "docs/seo/evidence-operations/evidence-registry.v1.json"
    if reviewed_path.is_file():
        reviewed = json.loads(reviewed_path.read_text(encoding="utf-8"))
        if reviewed.get("source_identity_review"):
            raise SystemExit("STOP_REVIEWED_IDENTITY_SNAPSHOT: this builder cannot overwrite the R3 reviewed snapshot. Use a separately reviewed reconciliation migration.")
    network=report/"network";network.mkdir(parents=True,exist_ok=True)
    if git(repo,"rev-parse","HEAD")!=EXPECTED_HEAD:raise SystemExit("HEAD mismatch")
    claims=json.loads((repo/CLAIM_REL).read_text())["claims"]
    if len(claims)!=117 or any(c.get("evidence_ids") for c in claims):raise SystemExit("claim registry contract mismatch")

    occ,dynamic=discover(repo)
    pmid_occ=defaultdict(list);doi_occ=defaultdict(list)
    for r in occ:
        if r["kind"] in {"PMID","PUBMED_URL"}:pmid_occ[r["value"]].append(r)
        elif r["kind"]=="DOI":doi_occ[r["value"]].append(r)
    direct_pmids=set(pmid_occ)
    dois=sorted(doi_occ)

    # Reconcile DOI-only identities against PubMed.
    doi_to_pmid={}
    ambiguous={}
    for idx,doi in enumerate(dois,1):
        ids=esearch_doi(doi,network,idx)
        if len(ids)==1:doi_to_pmid[doi]=ids[0]
        elif len(ids)>1:ambiguous[doi]=ids
        time.sleep(0.36)

    all_pmids=sorted(direct_pmids|set(doi_to_pmid.values()),key=int)
    meta=efetch(all_pmids,network)
    by_pmid_dois=defaultdict(set)
    for doi,pmid in doi_to_pmid.items():by_pmid_dois[pmid].add(doi)

    evidence=[]
    today=datetime.now(timezone.utc).date().isoformat()
    for pmid in all_pmids:
        m=meta.get(pmid)
        prov=list(pmid_occ.get(pmid,[]))
        for d in by_pmid_dois.get(pmid,set()):prov.extend(doi_occ[d])
        if m:
            doi=m.get("doi")
            # If EFetch omits DOI, use exact DOI that ESearch mapped to this PMID when unique.
            if not doi and len(by_pmid_dois.get(pmid,set()))==1:doi=next(iter(by_pmid_dois[pmid]))
            design,tier=classify(m.get("publication_types",[]),m.get("title"))
            source_type=m["record_type"]
            evidence.append({
              "evidence_id":f"EVD-PMID-{pmid}","source_type":source_type,"pmid":pmid,"doi":doi,"pmcid":m.get("pmcid"),
              "title":m.get("title"),"journal":m.get("journal"),"publication_year":m.get("publication_year"),
              "authors":m.get("authors",[]),"publication_types":m.get("publication_types",[]),
              "citation":None,"study_design":design,"evidence_tier":tier,
              "evidence_tier_basis":"PUBLICATION_TYPE_METHOD_TIER_NOT_CERTAINTY_GRADE",
              "population":None,"intervention":None,"comparator":None,"outcomes":None,
              "pico_status":"PENDING_STRUCTURED_REVIEW","directness":"PENDING_CLAIM_REVIEW","safety_relevance":"PENDING_REVIEW",
              "claim_ids":[],"source_url":f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/","last_verified":today,
              "status":"PUBMED_METADATA_RESOLVED_NOT_CLAIM_APPROVED",
              "provenance":dedupe(prov),"review_flags":[]
            })
        else:
            evidence.append({
              "evidence_id":f"EVD-PMID-{pmid}","source_type":"PMID_UNRESOLVED","pmid":pmid,"doi":None,"pmcid":None,
              "title":None,"journal":None,"publication_year":None,"authors":[],"publication_types":[],"citation":None,
              "study_design":"UNRESOLVED","evidence_tier":"UNRESOLVED",
              "evidence_tier_basis":"PUBLICATION_TYPE_METHOD_TIER_NOT_CERTAINTY_GRADE",
              "population":None,"intervention":None,"comparator":None,"outcomes":None,"pico_status":"PENDING_STRUCTURED_REVIEW",
              "directness":"PENDING_CLAIM_REVIEW","safety_relevance":"PENDING_REVIEW","claim_ids":[],
              "source_url":f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/","last_verified":today,
              "status":"PUBMED_METADATA_UNRESOLVED_NOT_CLAIM_APPROVED","provenance":dedupe(prov),
              "review_flags":[{"code":"PUBMED_EFETCH_UNRESOLVED","severity":"HIGH"}]
            })

    # Remaining DOI identities: Crossref metadata where possible.
    mapped=set(doi_to_pmid)
    remaining=[d for d in dois if d not in mapped]
    crossref_resolved=0
    for idx,doi in enumerate(remaining,1):
        cr=crossref(doi,network,idx)
        if cr:
            crossref_resolved+=1
            evidence.append({
              "evidence_id":evid_doi(doi),"source_type":"CROSSREF_DOI_WORK","pmid":None,"doi":doi,"pmcid":None,
              "title":cr.get("title"),"journal":cr.get("journal"),"publication_year":cr.get("publication_year"),
              "authors":cr.get("authors",[]),"publication_types":[cr.get("type")] if cr.get("type") else [],
              "citation":None,"study_design":"OTHER_OR_UNCLASSIFIED","evidence_tier":"T5_OTHER",
              "evidence_tier_basis":"PUBLICATION_TYPE_METHOD_TIER_NOT_CERTAINTY_GRADE",
              "population":None,"intervention":None,"comparator":None,"outcomes":None,
              "pico_status":"PENDING_STRUCTURED_REVIEW","directness":"PENDING_CLAIM_REVIEW","safety_relevance":"PENDING_REVIEW",
              "claim_ids":[],"source_url":"https://doi.org/"+doi,"last_verified":today,
              "status":"CROSSREF_METADATA_RESOLVED_NOT_CLAIM_APPROVED","provenance":dedupe(doi_occ[doi]),
              "review_flags":[{"code":"NOT_INDEXED_AS_UNIQUE_PUBMED_AID","severity":"INFO"}]
            })
        else:
            evidence.append({
              "evidence_id":evid_doi(doi),"source_type":"DOI_ONLY","pmid":None,"doi":doi,"pmcid":None,"title":None,"journal":None,
              "publication_year":None,"authors":[],"publication_types":[],"citation":None,"study_design":"PENDING_METADATA",
              "evidence_tier":"PENDING_METADATA","evidence_tier_basis":"PUBLICATION_TYPE_METHOD_TIER_NOT_CERTAINTY_GRADE",
              "population":None,"intervention":None,"comparator":None,"outcomes":None,"pico_status":"PENDING_STRUCTURED_REVIEW",
              "directness":"PENDING_CLAIM_REVIEW","safety_relevance":"PENDING_REVIEW","claim_ids":[],
              "source_url":"https://doi.org/"+doi,"last_verified":today,
              "status":"DOI_ONLY_PENDING_METADATA_NOT_CLAIM_APPROVED","provenance":dedupe(doi_occ[doi]),
              "review_flags":[{"code":"DOI_METADATA_UNRESOLVED","severity":"MEDIUM"}]
            })
        time.sleep(0.12)

    evidence.sort(key=lambda x:x["evidence_id"])
    evid={e["evidence_id"]:e for e in evidence}
    file_to=defaultdict(set);line_to=defaultdict(set)
    for e in evidence:
        for p in e["provenance"]:
            file_to[p["file"]].add(e["evidence_id"]);line_to[(p["file"],int(p["line"]))].add(e["evidence_id"])

    link_rows=[];with_pool=0;with_candidates=0;refs=0
    for c in claims:
        pool=set();exact=set();headset=set();bases=[]
        for cp in c["provenance"]:
            f=cp["file"];ln=int(cp["line"]);pool.update(file_to.get(f,set()));exact.update(line_to.get((f,ln),set()))
            for eid in file_to.get(f,set()):
                for ep in evid[eid]["provenance"]:
                    if ep["file"]==f and heading_match(cp.get("heading"),ep.get("markdown_heading")):headset.add(eid)
        cand=sorted(exact|headset)
        if pool:with_pool+=1
        if cand:with_candidates+=1;refs+=len(cand)
        if exact:bases.append("EXACT_SOURCE_MARKER_ON_CLAIM_LINE")
        if headset:bases.append("MATCHING_MARKDOWN_HEADING")
        rel=relation(c["policy"])
        link_rows.append({
          "claim_id":c["claim_id"],"canonical_claim":c["canonical_claim"],"policy":c["policy"],"risk_class":c["risk_class"],
          "owner_route":c["owner_route"],"provenance_files":sorted({p["file"] for p in c["provenance"]}),
          "source_pool_evidence_ids":sorted(pool),"candidate_evidence_ids":cand,"candidate_basis":bases,
          "candidate_relationship":rel,"candidate_evidence":[{"evidence_id":eid,"relationship":rel} for eid in cand],
          "approved_evidence_ids":[],"directness":"PENDING_REVIEW","review_status":"PENDING_HUMAN_REVIEW_NO_AUTO_APPROVAL"
        })

    registry={
      "schema":"neuvago-evidence-operations-evidence-registry-v1","registry_version":"1.0.0-r1","baseline_commit":EXPECTED_HEAD,
      "status":"IDENTITY_RECONCILED_METADATA_REGISTRY_LINK_APPROVAL_PENDING",
      "scope":{"source_roots":["src","docs"],"excluded_from_discovery":["scripts","docs/seo/evidence-operations"],
               "primary_identity":"PMID_THEN_DOI","pubmed_reconciliation":"DOI_AID_ESEARCH_THEN_EFETCH",
               "non_pubmed_metadata":"CROSSREF","claim_approval_performed":False,
               "evidence_tier_meaning":"METHOD_DESIGN_BUCKET_ONLY_NOT_CERTAINTY_OR_QUALITY_GRADE"},
      "source_repairs_pending_commit":[{
          "file":"src/app/(en)/research/studies/inflammatory-reflex-tracey-2002/page.tsx",
          "from":"10.1038/415853a","to":"10.1038/nature01321","verified_identity":{"pmid":"12490958","title":"The inflammatory reflex"}
      }],
      "discovery_summary":{"source_marker_occurrences":len(occ),"unique_pmids_direct":len(direct_pmids),"unique_dois":len(dois),
          "doi_unique_pubmed_matches":len(doi_to_pmid),"doi_ambiguous_pubmed_matches":len(ambiguous),
          "pubmed_identities_total":len(all_pmids),"pubmed_metadata_resolved":len(meta),"pubmed_metadata_unresolved":len(all_pmids)-len(meta),
          "crossref_metadata_resolved":crossref_resolved,"doi_only_records":sum(1 for e in evidence if e["source_type"]=="DOI_ONLY"),
          "dynamic_pubmed_markers_not_promoted":len(dynamic),"evidence_records":len(evidence)},
      "ambiguous_doi_pubmed_matches":ambiguous,"unresolved_discovery_markers":dynamic,"evidence":evidence
    }
    links={"schema":"neuvago-evidence-operations-claim-evidence-link-candidates-v1","registry_version":"1.0.0-r1",
           "baseline_commit":EXPECTED_HEAD,"status":"CANDIDATES_ONLY_NO_APPROVED_LINKS",
           "policy":{"same_file_is_source_pool_only":True,"auto_approval":False,"canonical_claim_registry_modified":False,
                     "candidate_relationship_is_not_approval":True},
           "summary":{"canonical_claims":len(claims),"claims_with_source_pool":with_pool,
                      "claims_with_structural_candidates":with_candidates,"structural_candidate_references":refs,"approved_links":0},
           "claims":link_rows}
    (repo/EV_REL).write_text(json.dumps(registry,ensure_ascii=False,indent=2)+"\n")
    (repo/LINK_REL).write_text(json.dumps(links,ensure_ascii=False,indent=2)+"\n")

    result={"schema":"neuvago-search-dominance-1e4c-r1-builder-result-v1","status":"PASS",
            **registry["discovery_summary"],**links["summary"],"canonical_claim_evidence_links_populated":0,
            "tracey_correct_identity_present":any(e.get("pmid")=="12490958" and e.get("doi")=="10.1038/nature01321" for e in evidence),
            "statpearls_book_record_resolved":any(e.get("pmid")=="30725856" and e.get("source_type")=="PUBMED_BOOK_ARTICLE" for e in evidence),
            "frontiers_doi_suffix_error_present":any((e.get("doi") or "").endswith("/full") for e in evidence),
            "next_gate":"AUDIT_1E4C_R1"}
    (report/"BUILDER-R1-RESULT.json").write_text(json.dumps(result,ensure_ascii=False,indent=2)+"\n")
    print(json.dumps(result,ensure_ascii=False,indent=2))

if __name__=="__main__":main()
