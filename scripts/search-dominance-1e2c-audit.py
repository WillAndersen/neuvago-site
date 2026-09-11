#!/usr/bin/env python3
from pathlib import Path
import csv,json,re,sys
repo=Path(sys.argv[1]).resolve(); out=Path(sys.argv[2]).resolve(); out.mkdir(parents=True,exist_ok=True)
vns=(repo/"src/app/(en)/learn/vagus-nerve-stimulation/page.tsx").read_text(encoding="utf-8")
tvns=(repo/"src/app/(en)/learn/transcutaneous-vagus-nerve-stimulation/page.tsx").read_text(encoding="utf-8")
tavns=(repo/"src/app/(en)/learn/auricular-vagus-nerve-stimulation/page.tsx").read_text(encoding="utf-8")
source_lock=(repo/"docs/seo/search-dominance-1e2c-en-vns-method-authority-source-claims-lock.md").read_text(encoding="utf-8")
media=(repo/"docs/seo/search-dominance-1e2c-en-vns-method-authority-media-brief.md").read_text(encoding="utf-8")
checks=[]; failures=[]; warnings=[]
def check(name,ok,detail=""):
    row={"check":name,"status":"PASS" if ok else "FAIL","detail":detail}; checks.append(row)
    if not ok: failures.append(row)
def allphr(name,src,phrases):
    for phrase in phrases: check(name+": "+phrase[:50],phrase in src)
check("VNS canonical",'const path = "/learn/vagus-nerve-stimulation"' in vns and "canonical: path" in vns)
check("tVNS canonical",'const path = "/learn/transcutaneous-vagus-nerve-stimulation"' in tvns and "canonical: path" in tvns)
check("taVNS canonical",'const path = "/learn/auricular-vagus-nerve-stimulation"' in tavns and "canonical: path" in tavns)
allphr("VNS H1",vns,["Vagus nerve stimulation (VNS): types, methods, evidence, and limits"])
allphr("tVNS H1",tvns,["Transcutaneous vagus nerve stimulation (tVNS): methods, parameters, and evidence"])
allphr("taVNS H1",tavns,["Auricular vagus nerve stimulation (taVNS): ear anatomy, methods, and evidence"])
allphr("VNS authority",vns,["VNS evidence belongs to different lanes, not one shared bucket","Product-specific evidence","Five questions make a VNS study much easier to interpret","What can transfer to this product?","P970003S240","32410932","33854421","36543841"])
allphr("tVNS protocol",tvns,["Stimulation site","Electrode and contact design","Frequency, pulse width, and waveform","Intensity and threshold method","Dose and timing","Comparator, population, and outcome"])
allphr("tVNS interpretation",tvns,["The tVNS label is only the start of the evidence question","There is no single standard tVNS dose","Target engagement is not one universal biomarker","Sham design matters","Safety reporting has been inconsistent","32410932","33854421","25573069","36543841","38362860"])
allphr("taVNS anatomy",tavns,["Ear anatomy supports the method, but it does not make every ear site equivalent","The outer ear has mixed innervation","Anatomical plausibility is not the same as target engagement","Laterality and site should be reported","Sensation is a usability signal, not a mechanism test"])
allphr("taVNS protocol",tavns,["Exact ear location","Electrode geometry and contact","Stimulation parameters","Comparator and sham","Outcome and target engagement","Product claim fit","25573069","30663712","33854421","36543841","38362860"])
for name,src in [("VNS",vns),("tVNS",tvns),("taVNS",tavns)]:
    check(name+" no table","<table" not in src.lower())
    check(name+" no medical-review badge","medical review" not in src.lower())
    check(name+" no direct treatment claim","Neuvago treats" not in src and "Neuvago cures" not in src)
for phrase in ["full authority system","search intent","People searching for","Search results often","User search language","Neuvago’s authority"]:
    check("public residue absent: "+phrase,phrase not in vns and phrase not in tvns and phrase not in tavns)
for href in ["/research/topics/vagus-nerve-stimulation","/research/topics/transcutaneous-vagus-nerve-stimulation","/research/topics/safety-and-tolerability"]:
    check("VNS research link "+href,href in vns)
check("tVNS research link","/research/topics/transcutaneous-vagus-nerve-stimulation" in tvns)
check("taVNS research link","/research/topics/transcutaneous-vagus-nerve-stimulation" in tavns)
allphr("source lock",source_lock,["Implanted VNS evidence and labeling do not transfer automatically to non-invasive methods.","Anatomical plausibility does not by itself prove target engagement.","General VNS/tVNS/taVNS evidence is METHOD EVIDENCE or GENERAL PHYSIOLOGY unless it is specific to Neuvago.","No external device or protocol result may be presented as Neuvago product efficacy."])
allphr("media brief",media,["VNS method-family map","tVNS protocol stack","auricular anatomy and evidence boundary","anatomical plausibility ≠ proven target engagement"])
for name,src in [("VNS",vns),("tVNS",tvns),("taVNS",tavns)]:
    mt=re.search(r'const title =\s*\n?\s*"([^"]+)"',src); md=re.search(r'const description =\s*\n?\s*"([^"]+)"',src)
    check(name+" title found",bool(mt)); check(name+" title <=70",bool(mt) and len(mt.group(1))<=70,str(len(mt.group(1))) if mt else "")
    check(name+" description found",bool(md)); check(name+" description <=170",bool(md) and len(md.group(1))<=170,str(len(md.group(1))) if md else "")
warnings.append("1E.2C locks scientific media briefs but intentionally does not add final image/video assets.")
with (out/"search-dominance-1e2c-checks.csv").open("w",encoding="utf-8",newline="") as f:
    w=csv.DictWriter(f,fieldnames=["check","status","detail"]); w.writeheader(); w.writerows(checks)
result={"schema":"neuvago-search-dominance-1e2c-audit-v1","status":"PASS" if not failures else "FAIL","checks_total":len(checks),"checks_passed":sum(x["status"]=="PASS" for x in checks),"failures":failures,"warnings":warnings,"routes":["/learn/vagus-nerve-stimulation","/learn/transcutaneous-vagus-nerve-stimulation","/learn/auricular-vagus-nerve-stimulation"]}
(out/"SEARCH-DOMINANCE-1E2C-AUDIT.json").write_text(json.dumps(result,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
print(json.dumps(result,indent=2,ensure_ascii=False)); sys.exit(1 if failures else 0)
