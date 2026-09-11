#!/usr/bin/env python3
import csv, hashlib, json, re, sys
from pathlib import Path

repo=Path(sys.argv[1]).resolve()
out=Path(sys.argv[2]).resolve()
out.mkdir(parents=True,exist_ok=True)

checks=[]
def add(name, ok, detail=""):
    checks.append({"check":name,"status":"PASS" if ok else "FAIL","detail":detail})
def text(rel):
    return (repo/rel).read_text(encoding="utf-8")
def sha(rel):
    return hashlib.sha256((repo/rel).read_bytes()).hexdigest()
def contains(rel, needle, name=None):
    t=text(rel); add(name or f"{rel} contains {needle}", needle in t, needle if needle not in t else "")
def absent(rel, needle, name=None):
    t=text(rel); add(name or f"{rel} excludes {needle}", needle not in t, needle if needle in t else "")
def count_eq(rel, needle, n, name=None):
    c=text(rel).count(needle); add(name or f"{rel} count {needle}", c==n, f"expected={n} got={c}")

reset="src/app/(en)/learn/vagus-nerve-reset/page.tsx"
massage="src/app/(en)/learn/vagus-nerve-massage/page.tsx"
lock="docs/seo/search-dominance-1e2d-reset-massage-owner-lift-source-claims-lock.md"
media="docs/seo/search-dominance-1e2d-reset-massage-media-brief.md"

expected_hashes={
 reset:"4806b7a10c8917a5c62b2334db56282dc57f392ba862e0cfd7c7c74c697d490e",
 massage:"a7fb748fb50cd6b41adec7b09b7dd065bec0b5250e1a766532541fe00dab4efd",
 lock:"7ed19918048703fd6afc359da8c00f62e52d49bd7c40e4fcf662f28520faab33",
 media:"7e69fd67e3b450cb65ff2ca5e9db75aa8d5920304b041506fbbe881638adb295",
}
for rel,h in expected_hashes.items():
    p=repo/rel
    add(f"file exists: {rel}",p.is_file())
    if p.is_file(): add(f"post hash: {rel}",sha(rel)==h,f"expected={h} got={sha(rel)}")

# Route/canonical ownership
for rel,path in [(reset,"/learn/vagus-nerve-reset"),(massage,"/learn/vagus-nerve-massage")]:
    contains(rel,f'const path = "{path}";',f"canonical owner path locked: {path}")
    contains(rel,'"en-US": path',f"en-US canonical language retained: {path}")
    contains(rel,'"x-default": path',f"x-default retained: {path}")
    absent(rel,'redirect(',f"no redirect introduced: {path}")

# Reset metadata, hero, direct-answer and intent
reset_need=[
 'const title = "Vagus Nerve Reset: Meaning, Evidence & 7-Minute Claims | Neuvago";',
 'What does a “vagus nerve reset” mean?',
 'Vagus nerve reset: what it means, what may help and what the evidence supports',
 'data-search-dominance-1e2d-owner="reset"',
 'data-search-dominance-1e2d-quick-answers="reset"',
 'How do you reset your vagus nerve?',
 'Does a 7-minute vagus nerve reset work?',
 'How do you know a reset worked?',
 'No—the vagus nerve does not have a literal reset button',
 'The sources reviewed for this page do not establish one universal seven-minute “vagus nerve reset.”',
 '"how to reset vagus nerve"',
 '"vagus nerve reset exercises"',
 'dateModified: "2026-09-11"',
 '/learn/how-to-calm-your-nervous-system',
 '/learn/vagus-nerve-stimulation',
 '/learn/nervous-system-regulation',
 '/research/topics/autonomic-regulation',
 '/research/topics/safety-and-tolerability',
 '/learn/vagal-tone',
 '/learn/how-to-stimulate-the-vagus-nerve',
]
for s in reset_need: contains(reset,s,f"reset contract: {s[:72]}")
for s in [
 'popular search phrase',
 'dated, targeted exact-phrase review used for this page',
 'literal reset button that can be activated on command. “Reset” is often used as a metaphor',
]:
    if s.startswith("literal"): # this boundary is intentionally present in direct answer
        continue
    absent(reset,s,f"reset public editorial residue absent: {s}")

# Reset owner boundaries
for phrase in [
 'Detailed breathing protocols and the 4-7-8 method belong to the dedicated breathing guide rather than this reset explainer.',
 'A general reset page must not become a treatment claim, product promise or substitute for the product’s intended use and applicable instructions.',
 'Product-specific duration, frequency, contraindications, precautions and stop-use rules remain governed by the applicable product information',
]:
    contains(reset,phrase,f"reset boundary: {phrase[:75]}")
count_eq(reset,'data-search-dominance-1e2d-quick-answers="reset"',1)
count_eq(reset,'question: "How do you reset your vagus nerve?"',1)
count_eq(reset,'question: "Does a 7-minute vagus nerve reset work?"',1)
count_eq(reset,'question: "How do you know a reset worked?"',1)

# Massage metadata, hero and direct answers
massage_need=[
 'const title = "Vagus Nerve Massage: Evidence, Pressure Points & Safety | Neuvago";',
 'Can you massage the vagus nerve? Learn what massage actually touches',
 'Vagus nerve massage: what people mean, what evidence supports, and what to avoid',
 'data-search-dominance-1e2d-owner="massage"',
 'data-search-dominance-1e2d-quick-answers="massage"',
 'Can you massage the vagus nerve?',
 'Is there a vagus nerve pressure point?',
 'What about neck massage?',
 'The cervical vagus nerve lies deeper within the neck near major vessels and other nerves.',
 'Strong pressure over the carotid sinus should not be taught as a self-treatment.',
 'Do not self-administer carotid sinus massage',
 'Manual ear touch is not a low-tech replica of taVNS',
 'dateModified: "2026-09-11"',
 '/learn/auricular-vagus-nerve-stimulation',
 '/learn/how-to-stimulate-the-vagus-nerve',
 '/learn/breathing-exercises-and-the-vagus-nerve',
 '/research/topics/autonomic-regulation',
 '/research/topics/safety-and-tolerability',
 '/legal/medical-disclaimer',
]
for s in massage_need: contains(massage,s,f"massage contract: {s[:72]}")
absent(massage,'“Vagus nerve massage” is a search phrase rather than', "massage public search-phrase residue absent")
count_eq(massage,'data-search-dominance-1e2d-quick-answers="massage"',1)
count_eq(massage,'question: "Can you massage the vagus nerve?"',1)
count_eq(massage,'Is there a vagus nerve pressure point?',2)  # quick answer + existing section answer
count_eq(massage,'question: "What about neck massage?"',1)

# Massage safety boundaries: require absence of DIY instruction-style text
for phrase in [
 'This page provides no finger placement, side choice, duration or pressure for carotid sinus massage.',
 'Do not try to locate an artery or nerve',
 'Do not use percussion, strong vibration or a massage gun there.',
 'It should not be converted into a home technique from an online article.',
 'This massage page also does not determine Neuvago electrode placement.',
]:
    contains(massage,phrase,f"massage safety boundary: {phrase[:75]}")
for forbidden in [
 'press the carotid sinus for',
 'place two fingers on the carotid',
 'massage the carotid sinus for',
 'hold pressure on the carotid',
 'locate the vagus nerve by pressing',
]:
    absent(massage,forbidden,f"no DIY carotid/vagus instruction: {forbidden}")

# Source / claims lock
for s in [
 'METH-002 — **Vagus nerve reset**',
 'METH-005 — **Vagus nerve massage**',
 '22,200 US monthly volume / KD 49',
 '2,900 / KD 31',
 'The reset owner must remain a trend/myth/evidence explainer.',
 'The massage owner must remain a touch/anatomy/evidence/safety explainer.',
 'It does not publish final image/video assets.',
]:
    contains(lock,s,f"1E.2D governance lock: {s[:72]}")
for s in [
 'RESET-VID-01',
 'RESET-IMG-01',
 'MASSAGE-VID-01',
 'MASSAGE-IMG-01',
 'Do not show',
 'No precise neck coordinates',
]:
    contains(media,s,f"1E.2D media brief: {s}")

# No final media files are added by this wave; this check is informational against known 1E.2D naming
media_assets=list((repo/"public").rglob("*1e2d*")) if (repo/"public").exists() else []
add("no final 1E.2D-named public media asset",len(media_assets)==0,",".join(str(p.relative_to(repo)) for p in media_assets))

# Search-owner cross-lane constraints
absent(reset,'href="/learn/vagus-nerve-massage"', "reset does not absorb massage route")
absent(massage,'href="/learn/vagus-nerve-reset"', "massage does not absorb reset route")
contains(reset,'href="/learn/how-to-calm-your-nervous-system"', "reset points broad calming intent to calm owner")
contains(reset,'href="/learn/how-to-stimulate-the-vagus-nerve"', "reset points broad method intent to methods owner")
contains(massage,'href="/learn/how-to-stimulate-the-vagus-nerve"', "massage points broad method intent to methods owner")
contains(massage,'href="/learn/auricular-vagus-nerve-stimulation"', "massage points electrical ear intent to auricular owner")

# Simple public-residue guard after 1E.2C cleanup
for rel in [reset,massage]:
    for phrase in [
      "commercial bridge","product bridge","search intent","category pillar",
      "this page owns","owner of the category","content owner","strategically important",
    ]:
        absent(rel,phrase,f"{rel} excludes editorial residue: {phrase}")

fail=[c for c in checks if c["status"]=="FAIL"]
with open(out/"search-dominance-1e2d-checks.csv","w",newline="",encoding="utf-8") as f:
    w=csv.DictWriter(f,fieldnames=["check","status","detail"]); w.writeheader(); w.writerows(checks)
res={
 "schema":"neuvago-search-dominance-1e2d-audit-v1",
 "status":"PASS" if not fail else "FAIL",
 "checks_total":len(checks),
 "checks_passed":len(checks)-len(fail),
 "failures":fail,
 "warnings":[
   "1E.2D locks reset/massage media briefs but intentionally does not add final image/video assets."
 ],
 "routes":["/learn/vagus-nerve-reset","/learn/vagus-nerve-massage"],
}
(out/"search-dominance-1e2d-audit.json").write_text(json.dumps(res,indent=2)+"\n")
print(json.dumps(res,indent=2))
sys.exit(0 if not fail else 1)
