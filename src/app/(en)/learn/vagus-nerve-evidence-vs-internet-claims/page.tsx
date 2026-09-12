import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "Vagus Nerve Claims Online: Evidence, Limits and Safety | Neuvago";
const description =
  "A claim-by-claim evidence guide to humming, gargling, cold exposure, tapping and pressure-point advice about the vagus nerve, with clear mechanism and safety limits.";
const path = "/learn/vagus-nerve-evidence-vs-internet-claims";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "x-default": path,
    },
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: { card: "summary_large_image", title, description },
};

type ClaimStatus =
  | "Supported outcome; mechanism narrower"
  | "Emerging / indirect"
  | "Not established"
  | "Real autonomic effect; not a reset"
  | "Evidence for another intervention; vagus mechanism unproven"
  | "Clinical / safety-sensitive";

type ClaimRow = readonly [
  claim: string,
  status: ClaimStatus,
  whatEvidenceCanSupport: string,
  whatItDoesNotEstablish: string,
];

const claimRows: readonly ClaimRow[] = [
  [
    "Slow breathing “activates the vagus nerve”",
    "Supported outcome; mechanism narrower",
    "Slow-paced breathing can change heart rate and vagally mediated HRV measures under studied conditions.",
    "A change in HRV does not prove direct, selective stimulation of the whole vagus nerve or a universal health effect.",
  ],
  [
    "Humming or singing directly stimulates the vagus nerve",
    "Emerging / indirect",
    "Small studies report changes in breathing pattern, HRV and autonomic measures during humming or vocal tasks.",
    "The current evidence does not isolate humming vibration as a selective vagus stimulus; respiratory rhythm and other pathways can contribute.",
  ],
  [
    "Gargling is a proven vagus exercise",
    "Not established",
    "The pharynx participates in cranial-nerve and airway-protective reflexes, and controlled oropharyngeal stimulation can change cardiovascular responses.",
    "Anatomical involvement of cranial nerves IX and X does not validate ordinary gargling as a calming vagus-stimulation protocol.",
  ],
  [
    "Cold exposure resets the vagus nerve",
    "Real autonomic effect; not a reset",
    "Cold-water and face-cooling paradigms can change heart rate, blood pressure and cardiac autonomic measures, with effects depending on the exposure.",
    "A measurable autonomic response is not a literal vagus reset, and it does not make every cold-plunge or cold-shower routine appropriate or equivalent.",
  ],
  [
    "Tapping works by stimulating the vagus nerve",
    "Evidence for another intervention; vagus mechanism unproven",
    "Emotional Freedom Techniques have been studied for anxiety and stress-related outcomes, with reviews noting promising findings and methodological limits.",
    "Outcome evidence for a psychological intervention does not establish the vagus nerve as the mechanism or prove vagus target engagement.",
  ],
  [
    "A neck pressure point can manually switch on the vagus nerve",
    "Clinical / safety-sensitive",
    "Carotid-sinus massage is a defined clinical test used in selected syncope evaluation with cardiovascular monitoring and exclusion criteria.",
    "That clinical procedure is not evidence for a universal DIY vagus pressure point, and strong neck or carotid pressure is not taught here.",
  ],
] as const;

const sections = [
  {
    id: "direct-answer",
    eyebrow: "Start with the claim",
    title: "The useful question is not “does this involve the vagus?” but “what exactly has been shown?”",
    paragraphs: [
      "Online vagus-nerve advice often compresses several different ideas into one sentence: a body part may be innervated by the vagus nerve, a practice may change breathing or heart rate, a person may feel calmer, and a study may report a physiological effect. None of those facts automatically proves that the practice directly and selectively stimulated the vagus nerve.",
      "A stronger claim check separates four layers: the method that was actually used, the outcome that was measured, how directly the study measured vagus-nerve engagement, and whether the safety context matches ordinary self-use. This page applies that framework to common claims about humming, gargling, cold exposure, tapping and pressure points.",
      "The result is not a list of approved or banned wellness practices. It is an evidence map. A practice can have a real effect without the popular mechanism story being established, and a plausible anatomical story can still be too weak to justify a direct-vagus claim.",
    ],
  },
  {
    id: "how-to-check-a-claim",
    eyebrow: "Evidence method",
    title: "Five questions that stop a plausible story becoming a stronger claim than the study",
    paragraphs: [
      "First, identify the exact intervention. Humming breathing, passive music, cold-water immersion, face cooling, clinical carotid-sinus massage and electrical VNS are different procedures. Evidence from one should not be silently transferred to another.",
      "Second, identify the measured outcome. Heart rate, blood pressure, HRV, relaxation ratings, anxiety scores, nasal nitric oxide and brain imaging answer different questions. A change in an indirect biomarker is not identical to direct target engagement.",
      "Third, inspect the comparison and sample. Small pilot studies can be useful for generating hypotheses, but they do not provide the same certainty as replicated randomized trials or systematic reviews. Fourth, ask whether the proposed mechanism was measured or merely discussed. Fifth, check whether a clinical procedure is being repackaged as a home technique without its original monitoring and exclusion criteria.",
    ],
  },
  {
    id: "humming-singing",
    eyebrow: "Claim check 01",
    title: "Humming and singing can change breathing and autonomic measures without proving selective vagus stimulation",
    paragraphs: [
      "Humming has measurable physiological effects. A classic study found that humming markedly increased nasal nitric oxide by changing sinus ventilation. More recent small studies of humming breathing report changes in HRV and relaxation-related measures. Those findings are real observations, but they do not show that vibration itself is a selective vagus-nerve stimulus.",
      "A 2025 pilot comparing slow-paced breathing with humming breathing found HRV changes in both conditions and no significant difference between the two for the measured HRV or affect outcomes. A 2026 preliminary study similarly reported that humming-based conditions converged toward a slow respiratory rhythm and did not show a clear difference between humming and a comparison humming condition designed to alter auditory feedback.",
      "The careful interpretation is therefore that humming or singing may influence respiration, vocal activity, attention and autonomic state. That is not the same as proving a unique vagus mechanism, a reset, or a treatment effect.",
    ],
  },
  {
    id: "gargling",
    eyebrow: "Claim check 02",
    title: "Gargling has an anatomical story, but the direct vagus-stimulation claim is not established",
    paragraphs: [
      "The pharynx is supplied by multiple cranial and autonomic pathways, including functions involving the glossopharyngeal and vagus nerves. That anatomy helps explain swallowing, airway protection and reflex responses. It does not make every pharyngeal action a validated vagus-stimulation exercise.",
      "Controlled tactile stimulation of the oropharynx that provokes the gag reflex has been shown to increase heart rate, blood pressure and sympathetic nerve activity in conscious humans. That does not model ordinary gargling, but it is a useful warning against assuming that any throat stimulus is automatically a calming parasympathetic manoeuvre.",
      "For this reason, this page does not prescribe gargling as a vagus protocol. The claim remains unestablished unless a study tests the actual gargling intervention, the relevant outcome and a defensible measure of vagus engagement.",
    ],
  },
  {
    id: "cold-exposure",
    eyebrow: "Claim check 03",
    title: "Cold exposure produces real autonomic responses, but “vagus reset” is too simple",
    paragraphs: [
      "Cold exposure can produce measurable cardiovascular and autonomic changes. A 2024 systematic review and meta-analysis of cold-water immersion and cryostimulation reported changes in HRV indices, heart rate and blood pressure, with effects depending on the person and cooling method. Reviews of the diving response also report increased cardiac vagal activity during some face-cooling and immersion conditions.",
      "Those findings do not establish a literal reset of the vagus nerve. Cold exposure can involve multiple reflexes and can alter both parasympathetic and sympathetic cardiovascular control. Technique, temperature, immersion depth, duration, prior exercise and individual health can change the response.",
      "This page therefore gives no cold-plunge dose, temperature target or face-immersion protocol. A physiological response to cold is not proof that a stronger or more uncomfortable exposure is better, and it should not be used to override cardiovascular or other medical safety considerations.",
    ],
  },
  {
    id: "tapping",
    eyebrow: "Claim check 04",
    title: "Tapping research should be read as tapping research—not as proof of a vagus mechanism",
    paragraphs: [
      "Emotional Freedom Techniques combine a structured psychological procedure with tapping on selected points. A 2025 systematic review of randomized trials for anxiety reported promising symptom findings but also noted methodological limitations, heterogeneity and the need for higher-quality trials.",
      "Even if a psychological outcome improves, that result does not identify the vagus nerve as the active mechanism. Studies would need to measure and isolate that mechanism rather than infer it from relaxation, symptom change or a theory about acupoints.",
      "The same rule applies to other touch-based claims: outcome evidence for one intervention does not automatically validate a specific nerve explanation. Readers looking for the anatomy and safety limits of massage and pressure points should use the dedicated massage guide.",
    ],
  },
  {
    id: "pressure-points-neck",
    eyebrow: "Claim check 05",
    title: "Carotid-sinus massage is a monitored clinical procedure, not a template for DIY neck pressure",
    paragraphs: [
      "The carotid sinus participates in cardiovascular reflex control. Clinical carotid-sinus massage is used in selected patients with unexplained syncope and is performed with heart-rate and blood-pressure monitoring, specific technique and exclusion criteria. Recent expert guidance continues to frame it as a diagnostic procedure performed in clinical settings.",
      "That is categorically different from an internet claim that a person should press a neck point to activate the vagus nerve. The cervical vagus is a deeper structure with variable anatomy, and the carotid sinus itself is not a generic wellness button.",
      "Neuvago therefore does not publish neck coordinates, pressure grades, timing sequences or self-massage instructions for carotid-sinus manoeuvres. The dedicated massage guide explains the anatomy and safety boundary in more detail.",
    ],
  },
  {
    id: "sensations-target-engagement",
    eyebrow: "Interpretation boundary",
    title: "A sensation or wearable change is not a home test of vagus target engagement",
    paragraphs: [
      "Warmth, tingling, yawning, sighing, changes in breathing, a slower pulse or a different HRV reading can all occur for many reasons. They may be meaningful experiences or measurements, but none is a standalone proof that a particular vagal target was engaged.",
      "HRV is especially easy to over-interpret because respiration, posture, recording length, recent activity and other factors influence it. It is useful in research when methods are controlled, but it should not be turned into a consumer score for vagus strength, damage, successful stimulation or treatment response.",
      "Electrical VNS has its own evidence category because it uses a defined device, stimulation site and electrical parameters. Even there, evidence belongs to the studied protocol and population; it cannot simply be transferred to a different device, behavioural practice or wellness claim.",
    ],
  },
  {
    id: "safer-search-path",
    eyebrow: "Use the right owner",
    title: "Use the evidence page that matches the method you actually mean",
    paragraphs: [
      "If the question is about ordinary breathing, movement or relaxation practices, use the evidence-graded vagus nerve exercises guide and the dedicated breathing guide. If the question is about massage, ear pressure or neck pressure points, use the massage and safety guide. If the question is about electrical stimulation, use the VNS method pages rather than borrowing evidence from behavioural practices.",
      "If the claim is still broad—“activate the vagus,” “stimulate the vagus naturally,” or “reset the vagus”—start with the methods centre and reset explainer. The purpose of this hub is narrower: to test common internet claims against the evidence without turning them into a new protocol.",
      "For readers who want to understand why one study cannot automatically support a much broader claim, the research reading guide explains study design, endpoints, comparators and evidence transfer in plain language.",
    ],
  },
] as const;

const sources = [
  {
    id: "C-001",
    title: "Effects of voluntary slow breathing on heart rate and heart rate variability: A systematic review and a meta-analysis",
    publisher: "Laborde S et al.",
    publication: "Neuroscience & Biobehavioral Reviews",
    year: 2022,
    url: "https://pubmed.ncbi.nlm.nih.gov/35623448/",
  },
  {
    id: "C-002",
    title: "Heart Rate Variability and Cardiac Vagal Tone in Psychophysiological Research",
    publisher: "Laborde S, Mosley E, Thayer JF",
    publication: "Frontiers in Psychology",
    year: 2017,
    url: "https://pubmed.ncbi.nlm.nih.gov/28265249/",
  },
  {
    id: "C-003",
    title: "Effects of slow-paced breathing and humming breathing on heart rate variability and affect: a pilot investigation",
    publisher: "Woo M, Kim T",
    publication: "Physiology & Behavior",
    year: 2025,
    url: "https://pubmed.ncbi.nlm.nih.gov/40482984/",
  },
  {
    id: "C-004",
    title: "Humming Breathing and Autonomic Regulation: A Preliminary Study of Resonance Frequency and Vibratory Mechanisms",
    publisher: "Kim T et al.",
    publication: "Applied Psychophysiology and Biofeedback",
    year: 2026,
    url: "https://pubmed.ncbi.nlm.nih.gov/41686399/",
  },
  {
    id: "C-005",
    title: "Humming greatly increases nasal nitric oxide",
    publisher: "Weitzberg E, Lundberg JON",
    publication: "American Journal of Respiratory and Critical Care Medicine",
    year: 2002,
    url: "https://pubmed.ncbi.nlm.nih.gov/12119224/",
  },
  {
    id: "C-006",
    title: "Tactile stimulation of the oropharynx elicits sympathoexcitation in conscious humans",
    publisher: "Muller MD et al.",
    publication: "Journal of Applied Physiology",
    year: 2013,
    url: "https://pubmed.ncbi.nlm.nih.gov/23599399/",
  },
  {
    id: "C-007",
    title: "The effects of cold exposure on cardiovascular and cardiac autonomic control responses in healthy individuals",
    publisher: "Jdidi H et al.",
    publication: "Journal of Thermal Biology",
    year: 2024,
    url: "https://pubmed.ncbi.nlm.nih.gov/38663342/",
  },
  {
    id: "C-008",
    title: "The diving response and cardiac vagal activity: A systematic review and meta-analysis",
    publisher: "Ackermann SP et al.",
    publication: "Psychophysiology",
    year: 2023,
    url: "https://pubmed.ncbi.nlm.nih.gov/36219506/",
  },
  {
    id: "C-009",
    title: "Emotional Freedom Techniques for Anxiety Disorders: A Systematic Review",
    publisher: "Choi SH et al.",
    publication: "Healthcare",
    year: 2025,
    url: "https://pubmed.ncbi.nlm.nih.gov/40941532/",
  },
  {
    id: "C-010",
    title: "Indications, contraindications, and step-by-step methodology for performing carotid sinus massage in patients presenting with syncope",
    publisher: "de Lange FJ et al.",
    publication: "Clinical Autonomic Research",
    year: 2026,
    url: "https://pubmed.ncbi.nlm.nih.gov/42204029/",
  },
  {
    id: "C-011",
    title: "Vagus nerve afferent stimulation: Projection into the brain, reflexive responses, and clinical relevance",
    publisher: "Komisaruk BR, Frangos E",
    publication: "Autonomic Neuroscience",
    year: 2022,
    url: "https://pubmed.ncbi.nlm.nih.gov/34823149/",
  },
] as const;

export default function VagusNerveEvidenceVsInternetClaimsPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-09-12",
    dateModified: "2026-09-12",
    keywords: [
      "vagus nerve claims",
      "vagus nerve hacks",
      "humming vagus nerve",
      "gargling vagus nerve",
      "cold exposure vagus nerve",
      "tapping vagus nerve",
      "vagus nerve pressure point",
      "vagus nerve evidence",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Vagus nerve claims online", path },
    ],
  });

  return (
    <main
      className="bg-[#f7f4ef] text-[#1f1f1c]"
      data-search-dominance-1e3c-owner="evidence-vs-internet-claims"
    >
      <JsonLd data={structuredData} idPrefix="learn-vagus-claims" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
            Evidence, mechanism and safety
          </p>
          <h1 className="mt-6 max-w-[21ch] text-[clamp(3rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            Vagus nerve claims online: what the evidence supports, what remains uncertain and what can be unsafe
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            Humming, gargling, cold exposure, tapping and pressure points are often described as ways to “activate” or “reset” the vagus nerve. This guide checks the exact claim, the measured outcome, the directness of the mechanism evidence and the safety context before deciding what the research actually supports.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#claim-matrix"
              className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Open the evidence matrix
            </Link>
            <Link
              href="/learn/how-to-stimulate-the-vagus-nerve"
              className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70"
            >
              Compare all method categories
            </Link>
          </div>
        </div>
      </section>

      <section
        className="border-b border-black/5 bg-[#eee7dd] px-5 py-14 sm:px-8 lg:px-12 lg:py-16"
        data-search-dominance-1e3c-direct-answer="true"
      >
        <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
            Direct answer
          </p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-[#3d3934] sm:text-2xl">
            Some popular “vagus” practices have measurable effects on breathing, heart rate, HRV, arousal or symptoms. That does not automatically establish direct vagus-nerve stimulation. The evidence is strongest when the studied method, outcome, target and safety context all match the claim being made.
          </p>
        </div>
      </section>

      <section
        id="claim-matrix"
        className="scroll-mt-28 border-b border-black/5 bg-[#f7f4ef] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
        data-search-dominance-1e3c-matrix="true"
      >
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
            Claim-by-claim matrix
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
            A measurable effect can be real while the popular mechanism claim is still too strong
          </h2>
          <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
            <table className="w-full min-w-[68rem] border-collapse text-left">
              <caption className="p-5 text-left text-sm text-[#625b52]">
                Evidence status for common internet vagus-nerve claims
              </caption>
              <thead className="border-y border-black/8 bg-white/70">
                <tr>
                  {["Online claim", "Evidence status", "What evidence can support", "What it does not establish"].map((heading) => (
                    <th key={heading} className="p-4 text-sm font-medium">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {claimRows.map((row) => (
                  <tr key={row[0]} className="border-b border-black/7 last:border-b-0">
                    {row.map((cell) => (
                      <td key={cell} className="p-4 align-top text-sm leading-7 text-[#5f5a52]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-[#6b645c]">
            “Not established” does not mean a practice can never affect how someone feels. It means the specific direct-vagus claim is not established by the evidence reviewed here. “Clinical / safety-sensitive” means the internet version should not be inferred from a monitored clinical procedure.
          </p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-28 border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20 ${
            index % 2 === 0 ? "bg-[#eee7dd]" : "bg-[#f7f4ef]"
          }`}
        >
          <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
                {section.eyebrow}
              </p>
              <p className="mt-3 text-sm text-[#8a8178]">
                {String(index + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
              </p>
            </div>
            <div className="min-w-0">
              <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                {section.title}
              </h2>
              <div className="mt-8 max-w-3xl space-y-6">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[#5f5a52] sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.id === "humming-singing" ? (
                <p className="mt-8">
                  <Link href="/learn/vagus-nerve-exercises" className="font-medium underline underline-offset-4">
                    Compare the evidence-graded exercise categories
                  </Link>
                </p>
              ) : null}

              {section.id === "tapping" ? (
                <p className="mt-8">
                  <Link href="/learn/vagus-nerve-massage" className="font-medium underline underline-offset-4">
                    Read the massage, touch and pressure-point evidence guide
                  </Link>
                </p>
              ) : null}

              {section.id === "pressure-points-neck" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/vagus-nerve-massage" className="font-medium underline underline-offset-4">
                    Review the neck and carotid safety boundary
                  </Link>
                  <Link href="/legal/medical-disclaimer" className="font-medium underline underline-offset-4">
                    Read the medical disclaimer
                  </Link>
                </div>
              ) : null}

              {section.id === "sensations-target-engagement" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/vagus-nerve-stimulation" className="font-medium underline underline-offset-4">
                    Understand electrical VNS
                  </Link>
                  <Link href="/research/how-to-read-a-vns-study" className="font-medium underline underline-offset-4">
                    Learn how to read a VNS study
                  </Link>
                </div>
              ) : null}

              {section.id === "safer-search-path" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/breathing-exercises-and-the-vagus-nerve" className="font-medium underline underline-offset-4">
                    Breathing evidence and limits
                  </Link>
                  <Link href="/learn/vagus-nerve-reset" className="font-medium underline underline-offset-4">
                    Understand “reset” language
                  </Link>
                  <Link href="/legal/trust-safety" className="font-medium underline underline-offset-4">
                    Trust and safety
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section
        className="border-b border-black/5 bg-[#1f1f1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20"
        data-search-dominance-1e3c-sources="true"
      >
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
            Reader-visible sources
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
            Read each result at the level of the method and outcome that were actually studied
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sources.map((source) => (
              <a
                key={source.id}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                data-source-id={source.id}
                className="rounded-[1.25rem] border border-white/15 p-5 hover:bg-white/5"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                  {source.id}
                </p>
                <p className="mt-3 text-sm font-medium">{source.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  {source.publisher} · {source.publication} · {source.year}
                </p>
              </a>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-white/65">
            General educational information only. This page does not diagnose vagus-nerve dysfunction, prescribe treatment, provide a cold-exposure protocol, teach carotid-sinus massage, or give electrical stimulation settings. Seek appropriate professional or urgent care for medical concerns or serious symptoms.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
            Keep the categories separate
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
            Choose the evidence owner that matches the question
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52]">
            Use the methods centre for the broad map, the exercises page for behavioural practice, the massage page for touch and neck claims, and the VNS pages for electrical stimulation. The claim-check hub exists to prevent evidence from one category being stretched into another.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/learn/how-to-stimulate-the-vagus-nerve"
              className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white"
            >
              Compare methods
            </Link>
            <Link
              href="/research/how-to-read-a-vns-study"
              className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium"
            >
              Read the research guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
