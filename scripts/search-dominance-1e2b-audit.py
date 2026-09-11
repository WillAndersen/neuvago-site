#!/usr/bin/env python3
from pathlib import Path
import csv,json,re,sys

repo=Path(sys.argv[1]).resolve()
out=Path(sys.argv[2]).resolve()
out.mkdir(parents=True,exist_ok=True)

reg=(repo/"src/app/(en)/learn/nervous-system-regulation/page.tsx").read_text(encoding="utf-8")
calm=(repo/"src/app/(en)/learn/how-to-calm-your-nervous-system/page.tsx").read_text(encoding="utf-8")
learn=(repo/"src/app/(en)/learn/page.tsx").read_text(encoding="utf-8")
lock=(repo/"docs/seo/search-dominance-1e2b-en-regulation-calm-owner-lift-source-claims-lock.md").read_text(encoding="utf-8")
media=(repo/"docs/seo/search-dominance-1e2b-en-regulation-calm-media-brief.md").read_text(encoding="utf-8")

checks=[]; failures=[]; warnings=[]

def check(name,ok,detail=""):
    row={"check":name,"status":"PASS" if ok else "FAIL","detail":detail}
    checks.append(row)
    if not ok:
        failures.append(row)

def title(src):
    m=re.search(r'title:\s*\n?\s*"([^"]+)"',src)
    return m.group(1) if m else ""

# Existence / exact ownership.
for rel in [
    "src/app/(en)/learn/nervous-system-regulation/page.tsx",
    "src/app/(en)/learn/how-to-calm-your-nervous-system/page.tsx",
    "docs/seo/search-dominance-1e2b-en-regulation-calm-owner-lift-source-claims-lock.md",
    "docs/seo/search-dominance-1e2b-en-regulation-calm-media-brief.md",
]:
    check("exists "+rel,(repo/rel).is_file(),rel)

for src,route,label in [
    (reg,"/learn/nervous-system-regulation","regulation"),
    (calm,"/learn/how-to-calm-your-nervous-system","calm"),
]:
    check(label+" canonical retained",f'canonical: "{route}"' in src)
    check(label+" en-US retained",f'"en-US": "{route}"' in src)
    check(label+" x-default retained",f'"x-default": "{route}"' in src)
    check(label+" title <= 70",0 < len(title(src)) <= 70,f"{len(title(src))}: {title(src)}")
    check(label+" no table markup","<table" not in src.lower())
    check(label+" no horizontal table scroller","overflow-x-auto" not in src)
    check(label+" no internal SEO phrase","Neuvago learning universe" not in src and "high-intent guide" not in src)

# Regulation page.
for needle in [
    "Nervous system regulation: what it means, how it works, and what it does not mean",
    "Physiological anchor",
    "Regulation is not a single parasympathetic switch",
    "Measurement boundary",
    "There is no single test that tells you whether your whole nervous system is",
    "Regulation is distributed, not controlled by one nerve",
    "Different organs can respond differently at the same time",
    "Adaptation can be anticipatory",
    "Heart-rate variability (HRV)",
    "Wearable stress or readiness scores",
    "Evidence references",
    "They are background evidence, not",
]:
    check("regulation contains "+needle[:55],needle in reg,needle)

for route in [
    "/learn/autonomic-nervous-system",
    "/learn/sympathetic-vs-parasympathetic-nervous-system",
    "/research/topics/heart-rate-variability",
    "/research/topics/autonomic-regulation",
    "/learn/how-to-calm-your-nervous-system",
]:
    check("regulation links "+route,route in reg)

for source in [
    "https://pubmed.ncbi.nlm.nih.gov/34656967/",
    "https://pubmed.ncbi.nlm.nih.gov/31488322/",
    "https://pubmed.ncbi.nlm.nih.gov/21684297/",
    "https://pubmed.ncbi.nlm.nih.gov/38873876/",
]:
    check("regulation source "+source,source in reg)

check("regulation source count",reg.count('href: "https://')>=4,str(reg.count('href: "https://')))
check("regulation product boundary","without direct product evidence" in reg)

# Calm page.
for needle in [
    "How to calm your nervous system: practical, evidence-informed steps",
    "If you want to calm your nervous system right now",
    "Reduce the input first",
    "Slow your breathing without forcing it",
    "Release obvious muscle tension",
    "Choose gentle movement if stillness feels worse",
    "Use a predictable transition",
    "Repeat what is tolerable and useful",
    "Evidence, not hacks",
    "The best-supported calming tools are ordinary, repeatable",
    "Common questions",
    "How quickly should your nervous system calm down?",
    "Does slow breathing activate the vagus nerve?",
    "Is a low HRV score proof that your nervous system is dysregulated?",
    "When calming techniques are not enough",
]:
    check("calm contains "+needle[:55],needle in calm,needle)

for route in [
    "/learn/breathing-exercises-and-the-vagus-nerve",
    "/learn/nervous-system-regulation",
    "/conditions/stress",
    "/conditions/sleep",
]:
    check("calm links "+route,route in calm)

for source in [
    "https://pubmed.ncbi.nlm.nih.gov/35623448/",
    "https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know",
    "https://pubmed.ncbi.nlm.nih.gov/38468106/",
    "https://pubmed.ncbi.nlm.nih.gov/37822096/",
]:
    check("calm source "+source,source in calm)

check("calm six quick steps",calm.count('step: "')==6,str(calm.count('step: "')))
check("calm evidence cards",calm.count('href: "https://')>=4,str(calm.count('href: "https://')))
check("calm product boundary","General research on" in calm and "not Neuvago product evidence" in calm)
check("calm care boundary","not substitutes" in calm and "professional help" in calm)

# Learn hub already links both owners.
check("learn hub links regulation",learn.count("/learn/nervous-system-regulation")>=1)
check("learn hub links calm",learn.count("/learn/how-to-calm-your-nervous-system")>=1)

# Claim scans: these should not appear as positive claims.
for label,src in [("regulation",reg),("calm",calm)]:
    forbidden=[
        "Neuvago increases parasympathetic",
        "Neuvago reduces sympathetic",
        "Neuvago raises HRV",
        "Neuvago activates the vagus nerve",
        "Neuvago regulates your nervous system",
        "cures anxiety",
        "treats anxiety",
        "heals the nervous system",
    ]
    hits=[x for x in forbidden if x.lower() in src.lower()]
    check(label+" forbidden claim scan",not hits,str(hits))

# Source/claim lock and media brief.
for needle in [
    "No new URL, redirect or canonical change is allowed in 1E.2B",
    "General physiology, breathing, relaxation or stress research is not Neuvago product evidence",
    "Feeling calmer does not prove",
    "No medical-review badge",
]:
    check("lock "+needle[:50],needle in lock,needle)

for needle in [
    "Demand → response → recovery → return",
    "Lower demand before adding techniques",
    "What nervous system regulation actually means",
    "How to calm your nervous system without a viral hack",
]:
    check("media "+needle[:50],needle in media,needle)

# 1E.2B.R1 — public editorial language cleanup.
public_residue = [
    "Why this page matters in the cluster",
    "Why people search for it",
    "Why people search for this",
    "Searches around calming the nervous system",
    "Often the real search is for a concept",
    "Usually, people are not searching for more theory",
]
for phrase in public_residue:
    check("R1 public-copy residue absent: "+phrase[:44], phrase not in reg and phrase not in calm)

check("R1 regulation reader-facing label","Why this concept matters" in reg)
check("R1 calming reader-facing cluster replacement","Short-term calming and the bigger picture" in calm)
check("R1 calming reader-facing search replacement","Why this question comes up" in calm)
check("R1 source-lock section","1E.2B.R1 — public editorial language cleanup" in lock)

warnings.append("1E.2B locks media briefs but intentionally does not add final image/video assets. Those remain later authority/media production work.")

with (out/"search-dominance-1e2b-checks.csv").open("w",encoding="utf-8",newline="") as f:
    w=csv.DictWriter(f,fieldnames=["check","status","detail"]); w.writeheader(); w.writerows(checks)

result={
    "schema":"neuvago-search-dominance-1e2b-audit-v1",
    "status":"PASS" if not failures else "FAIL",
    "checks_total":len(checks),
    "checks_passed":sum(1 for x in checks if x["status"]=="PASS"),
    "failures":failures,
    "warnings":warnings,
    "routes":[
        "/learn/nervous-system-regulation",
        "/learn/how-to-calm-your-nervous-system",
    ],
}
(out/"SEARCH-DOMINANCE-1E2B-AUDIT.json").write_text(json.dumps(result,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
print(json.dumps(result,indent=2,ensure_ascii=False))
sys.exit(1 if failures else 0)
