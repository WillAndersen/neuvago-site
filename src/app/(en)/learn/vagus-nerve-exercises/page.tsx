import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "Vagus Nerve Exercises: Evidence, Examples and Limits | Neuvago";
const description =
  "An evidence-graded guide to vagus nerve exercises, including breathing, movement and relaxation, with clear limits around direct vagus stimulation and electrical VNS.";
const path = "/learn/vagus-nerve-exercises";

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

type EvidenceLevel = "Better supported" | "Supported with context" | "Indirect / uncertain";
type ExerciseRow = readonly [
  practice: string,
  evidence: EvidenceLevel,
  whatItMaySupport: string,
  importantLimit: string,
];

const exerciseRows: readonly ExerciseRow[] = [
  [
    "Slow, comfortable breathing",
    "Better supported",
    "Changes in respiratory rhythm, heart rate and some cardiac HRV measures under studied conditions.",
    "Does not prove direct or selective stimulation of the vagus nerve; breathing rate, depth, posture and protocol matter.",
  ],
  [
    "Moderate movement or exercise",
    "Supported with context",
    "Exercise can influence stress reactivity, recovery and cardiac autonomic measures, depending on intervention and population.",
    "There is no single exercise shown to act as a universal vagus-nerve switch or reset.",
  ],
  [
    "Relaxation, meditation or gentle yoga",
    "Supported with context",
    "Some studies report changes in perceived stress or selected physiological outcomes after structured practices.",
    "Effects vary by method and outcome; these practices should not be relabelled as proven electrical VNS.",
  ],
  [
    "Humming, gargling, tapping, cold exposure or pressure-point routines",
    "Indirect / uncertain",
    "These practices may change breathing, attention, sensation or arousal for some people.",
    "A plausible story or immediate sensation is not enough to establish direct vagus-nerve engagement, a reset, or a health benefit.",
  ],
] as const;

const sections = [
  {
    id: "direct-answer",
    eyebrow: "Start with the claim",
    title: "What are vagus nerve exercises—and do they actually stimulate the vagus nerve?",
    paragraphs: [
      "“Vagus nerve exercises” is a popular phrase for behavioural practices such as slow breathing, movement, relaxation, meditation and other routines that are said to help the body shift toward a calmer state. The label is useful for navigation, but it can overstate what the evidence shows if every practice is described as direct vagus-nerve stimulation.",
      "The strongest practical evidence in this group is usually about outcomes such as breathing pattern, perceived stress, heart rate, blood pressure or heart-rate variability. Those outcomes can be meaningful without proving that a practice directly and selectively stimulated the vagus nerve. Electrical vagus nerve stimulation is a different method category because it uses a device, a defined stimulation site and electrical parameters.",
      "A careful guide therefore grades the evidence practice by practice. It also separates what someone can reasonably try as a general wellness activity from what would require product-specific instructions, medical assessment or a different evidence base.",
    ],
  },
  {
    id: "evidence-map",
    eyebrow: "Evidence grading",
    title: "A useful evidence map is better than a list of “vagus hacks”",
    paragraphs: [
      "Vagus-related content often mixes together methods that have very different evidence. Slow breathing has a sizeable psychophysiology literature. Exercise and movement have their own stress and autonomic research. Relaxation, yoga and meditation are broader self-management categories. Viral practices such as humming, gargling, tapping or cold exposure may have plausible physiological pathways or personal anecdotes, but the specific claim that they directly stimulate the vagus nerve often outruns the evidence.",
      "The table below does not rank practices by popularity. It grades how directly the available evidence supports the claim being made. “Better supported” still does not mean proven for every person or every outcome; it means there is a clearer body of research for the practice and measured outcomes than for a viral single-mechanism claim.",
    ],
  },
  {
    id: "breathing",
    eyebrow: "Practice 01",
    title: "Slow breathing: useful evidence, but not a direct nerve test",
    paragraphs: [
      "Slow-paced breathing is one of the best studied behavioural practices in vagus-related search results. Systematic reviews report changes in heart rate and HRV-related measures under defined breathing conditions. That supports careful language about cardiorespiratory regulation and perceived activation.",
      "It does not establish that every breathing exercise directly stimulates the vagus nerve. HRV is an indirect and context-sensitive measure. Breathing rate, depth, posture, recording length, recent activity and individual factors can all influence the result. A rise or fall in one wearable number is therefore not a home test of vagus-nerve strength or successful stimulation.",
      "For practical use, comfort matters more than chasing a target count. A calm, regular pattern may be reasonable for many people; forceful breathing, aggressive breath holds or deliberately pushing through dizziness are not required to obtain the ordinary regulation benefits people usually seek.",
    ],
  },
  {
    id: "movement",
    eyebrow: "Practice 02",
    title: "Movement and exercise can influence regulation without becoming a vagus-specific protocol",
    paragraphs: [
      "Exercise changes heart rate, breathing, circulation, temperature, mood and recovery. Reviews of exercise interventions report effects on cardiac autonomic measures, while a 2024 systematic review found that acute exercise reduced some later physiological stress-reactivity measures, with results varying across outcomes.",
      "That is enough to support movement as a legitimate regulation tool. It is not enough to say that one walk, one yoga pose or one workout directly “activates the vagus nerve.” The intervention, intensity, fitness level, population and measured outcome all matter, and different forms of movement can produce very different acute responses.",
      "A practical interpretation is simple: choose movement that is appropriate to your health, capacity and context, and judge it by the experience and outcome you are actually trying to support. Do not use an online vagus claim to override pain, fainting, chest symptoms, marked breathlessness or other reasons to seek professional assessment.",
    ],
  },
  {
    id: "relaxation",
    eyebrow: "Practice 03",
    title: "Relaxation, meditation and gentle yoga belong in the regulation category",
    paragraphs: [
      "Relaxation methods, meditation and yoga are often placed under the vagus-nerve umbrella. They may help some people work with stress, attention, muscle tension and perceived activation. Systematic reviews report promising findings across some single-session practices, while also showing substantial variation in methods and outcomes.",
      "The most defensible explanation is not that these practices flip a parasympathetic switch. It is that they are structured behavioural practices that can influence breathing, attention, posture, muscle activity and stress responses. The vagus nerve may be part of the wider physiology, but the practice is not a direct measurement of one nerve.",
      "This distinction matters because useful practices do not need an exaggerated mechanism. A routine can be worth doing because it is accessible, calming or helps someone build a repeatable transition out of a busy state—even when the exact pathway is complex.",
    ],
  },
  {
    id: "viral-claims",
    eyebrow: "What not to collapse together",
    title: "Humming, gargling, tapping and cold exposure need a separate claim check",
    paragraphs: [
      "Humming, singing, gargling, tapping and cold exposure are frequently presented online as vagus exercises. These activities can change breathing, vocalisation, sensation, attention, skin temperature or arousal. Those immediate effects do not by themselves demonstrate selective vagus-nerve engagement or a durable health benefit.",
      "For this reason, this page does not turn viral claims into a prescriptive routine. The appropriate next step is to inspect the exact claim, the directness of the evidence, the outcome that was measured and any safety trade-offs. Those claims deserve their own evidence review rather than being promoted as proven exercises here, so this guide stays focused on practical behavioural categories with clearer support.",
      "The same boundary applies to pressure-point and neck claims. Strong carotid or neck pressure is not a generic home vagus exercise. Clinical manoeuvres and electrical stimulation belong under their own safety and product-specific frameworks.",
    ],
  },
  {
    id: "electrical-vns-boundary",
    eyebrow: "Category boundary",
    title: "Exercises are not the same as electrical vagus nerve stimulation",
    paragraphs: [
      "Electrical VNS delivers controlled electrical pulses through an implanted or external system. The evidence for an electrical method belongs to the device, stimulation site, waveform, intensity, session design, population and outcome that were actually studied.",
      "Breathing, movement and relaxation are behavioural practices. They can influence autonomic state or measured outcomes without becoming tVNS, taVNS, cervical nVNS or implanted VNS. This is why evidence from an electrical protocol should not be used as proof that a behavioural exercise works through the same mechanism—and why exercise evidence should not be treated as evidence for Neuvago.",
      "If the question is specifically about electrical VNS, use the methods overview and the VNS guides rather than an exercise list. If the question is how to build a practical regulation routine, behavioural practices may be the more relevant starting point.",
    ],
  },
  {
    id: "safety",
    eyebrow: "Safety and limits",
    title: "Keep low-risk practices low-risk—and stop when the context changes",
    paragraphs: [
      "A general educational page cannot decide which exercise is appropriate for a particular person. Medical conditions, pregnancy, implanted electronics, active treatment, recurrent fainting, significant heart or lung disease and other individual factors can change what is sensible. Product-specific electrical stimulation also has its own instructions, precautions and contraindications.",
      "For ordinary breathing, movement and relaxation, avoid turning mild self-regulation into a test of endurance. Stop or reduce the effort if a practice causes marked dizziness, chest pain, fainting, severe breathlessness, new neurological symptoms or another worrying reaction. Acute or potentially serious symptoms require appropriate urgent or emergency care rather than repeated online exercises.",
      "Persistent or worsening symptoms also deserve proper assessment. The purpose of these exercises is not to diagnose a “weak vagus nerve,” prove target engagement or replace medical care. The practical goal is to use suitable, ordinary regulation tools while keeping claims and safety boundaries honest.",
    ],
  },
  {
    id: "choose-a-practice",
    eyebrow: "A practical decision rule",
    title: "Choose the practice by the goal—not by the strongest mechanism claim",
    paragraphs: [
      "If the goal is to slow down breathing, use a comfortable breathing practice. If the goal is to discharge some restlessness or support recovery, gentle movement may fit better. If the goal is to reduce mental and muscular tension, a relaxation or meditation practice may be more relevant. None of those choices requires a claim that a single nerve was directly stimulated.",
      "Keep the first version simple enough to repeat. A short routine that feels manageable is often more useful than a complicated sequence built around internet claims. If a practice repeatedly feels wrong, stop and choose another approach rather than treating discomfort as evidence that the vagus nerve is being “activated.”",
      "For readers who want the broader map—including electrical VNS, breathing, touch and other method categories—the methods centre remains the parent owner. This guide stays focused on the narrower practical question of vagus nerve exercises and evidence grading.",
    ],
  },
] as const;

const sources = [
  {
    id: "E-001",
    title: "Effects of voluntary slow breathing on heart rate and heart rate variability: A systematic review and a meta-analysis",
    publisher: "Laborde S et al.",
    publication: "Neuroscience & Biobehavioral Reviews",
    year: 2022,
    url: "https://pubmed.ncbi.nlm.nih.gov/35623448/",
  },
  {
    id: "E-002",
    title: "How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing",
    publisher: "Zaccaro A et al.",
    publication: "Frontiers in Human Neuroscience",
    year: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/30245619/",
  },
  {
    id: "E-003",
    title: "Heart Rate Variability and Cardiac Vagal Tone in Psychophysiological Research – Recommendations for Experiment Planning, Data Analysis, and Data Reporting",
    publisher: "Laborde S, Mosley E, Thayer JF",
    publication: "Frontiers in Psychology",
    year: 2017,
    url: "https://pubmed.ncbi.nlm.nih.gov/28265249/",
  },
  {
    id: "E-004",
    title: "Effects of Different Exercise Interventions on Cardiac Autonomic Control and Secondary Health Factors in Middle-Aged Adults",
    publisher: "Grässler B et al.",
    publication: "Journal of Cardiovascular Development and Disease",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/34436236/",
  },
  {
    id: "E-005",
    title: "The effects of acute exercise on stress reactivity assessed via a multidimensional approach: a systematic review",
    publisher: "Morava A et al.",
    publication: "Journal of Behavioral Medicine",
    year: 2024,
    url: "https://pubmed.ncbi.nlm.nih.gov/38468106/",
  },
  {
    id: "E-006",
    title: "Effect of a single session of yoga and meditation on stress reactivity: A systematic review",
    publisher: "Systematic review",
    publication: "Stress and Health",
    year: 2023,
    url: "https://pubmed.ncbi.nlm.nih.gov/37822096/",
  },
  {
    id: "E-007",
    title: "Doing What Matters in Times of Stress: An Illustrated Guide",
    publisher: "World Health Organization",
    publication: "World Health Organization",
    year: 2020,
    url: "https://www.who.int/publications-detail-redirect/9789240003927",
  },
  {
    id: "E-008",
    title: "Relaxation Techniques: What You Need To Know",
    publisher: "National Center for Complementary and Integrative Health",
    publication: "NCCIH",
    year: "n.d.",
    url: "https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know",
  },
] as const;

export default function VagusNerveExercisesPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-09-12",
    dateModified: "2026-09-12",
    keywords: [
      "vagus nerve exercises",
      "exercises for the vagus nerve",
      "vagal exercises",
      "vagus nerve breathing exercises",
      "movement and vagus nerve",
      "vagus nerve relaxation exercises",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Vagus nerve exercises", path },
    ],
  });

  return (
    <main
      className="bg-[#f7f4ef] text-[#1f1f1c]"
      data-search-dominance-1e3b-owner="vagus-nerve-exercises"
    >
      <JsonLd data={structuredData} idPrefix="learn-vagus-nerve-exercises" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
            Practical guide / evidence graded
          </p>
          <h1 className="mt-6 max-w-[19ch] text-[clamp(3rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            Vagus nerve exercises: what may help, what the evidence shows and what not to claim
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            Breathing, movement and relaxation can influence how the body feels and some measurable autonomic outcomes. That does not make every exercise direct vagus nerve stimulation. This guide grades the evidence and keeps behavioural practices separate from electrical VNS.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#evidence-map" className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90">
              Compare the evidence
            </Link>
            <Link href="/learn/how-to-stimulate-the-vagus-nerve" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">
              Open the methods centre
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd] px-5 py-14 sm:px-8 lg:px-12 lg:py-16" data-search-dominance-1e3b-direct-answer="true">
        <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Direct answer</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-[#3d3934] sm:text-2xl">
            No behavioural exercise is established as a universal switch that directly and selectively stimulates or “resets” the vagus nerve. Slow breathing, movement and relaxation can influence experience and measurable autonomic outcomes, but the evidence belongs to the specific practice and outcome—not to a blanket vagus claim.
          </p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-28 border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20 ${index % 2 === 0 ? "bg-[#f7f4ef]" : "bg-[#eee7dd]"}`}
        >
          <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">{section.eyebrow}</p>
              <p className="mt-3 text-sm text-[#8a8178]">{String(index + 1).padStart(2, "0")} / 09</p>
            </div>
            <div className="min-w-0">
              <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">{section.title}</h2>
              <div className="mt-8 max-w-3xl space-y-6">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[#5f5a52] sm:text-lg">{paragraph}</p>
                ))}
              </div>

              {section.id === "evidence-map" ? (
                <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
                  <table className="w-full min-w-[64rem] border-collapse text-left">
                    <caption className="p-5 text-left text-sm text-[#625b52]">
                      Evidence-graded categories commonly described online as vagus nerve exercises
                    </caption>
                    <thead className="border-y border-black/8 bg-white/70">
                      <tr>
                        {["Practice", "Evidence level", "What may be supported", "Important limit"].map((heading) => (
                          <th key={heading} className="p-4 text-sm font-medium">{heading}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {exerciseRows.map((row) => (
                        <tr key={row[0]} className="border-b border-black/7 last:border-b-0">
                          {row.map((cell) => (
                            <td key={cell} className="p-4 align-top text-sm leading-7 text-[#5f5a52]">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {section.id === "breathing" ? (
                <p className="mt-8"><Link href="/learn/breathing-exercises-and-the-vagus-nerve" className="font-medium underline underline-offset-4">Read the dedicated breathing evidence guide</Link></p>
              ) : null}
              {section.id === "viral-claims" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/vagus-nerve-evidence-vs-internet-claims" className="font-medium underline underline-offset-4">Open the claim-by-claim evidence matrix</Link>
                  <Link href="/learn/vagus-nerve-massage" className="font-medium underline underline-offset-4">Read the massage and pressure-point safety guide</Link>
                </div>
              ) : null}
              {section.id === "electrical-vns-boundary" ? (
                <div className="mt-8 flex flex-wrap gap-5"><Link href="/learn/how-to-stimulate-the-vagus-nerve" className="font-medium underline underline-offset-4">Compare all method categories</Link><Link href="/learn/vagus-nerve-stimulation" className="font-medium underline underline-offset-4">Understand electrical VNS</Link></div>
              ) : null}
              {section.id === "safety" ? (
                <div className="mt-8 flex flex-wrap gap-5"><Link href="/legal/medical-disclaimer" className="font-medium underline underline-offset-4">Read the medical disclaimer</Link><Link href="/legal/trust-safety" className="font-medium underline underline-offset-4">Read trust and safety</Link></div>
              ) : null}
              {section.id === "choose-a-practice" ? (
                <div className="mt-8 flex flex-wrap gap-5"><Link href="/learn/how-to-calm-your-nervous-system" className="font-medium underline underline-offset-4">Explore the broader calming guide</Link><Link href="/learn/vagus-nerve-reset" className="font-medium underline underline-offset-4">Understand reset language</Link></div>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-black/5 bg-[#1f1f1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20" data-search-dominance-1e3b-sources="true">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">Reader-visible sources</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Read each exercise claim at the level of the practice and outcome that were actually studied</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sources.map((source) => (
              <a key={source.id} href={source.url} target="_blank" rel="noreferrer" data-source-id={source.id} className="rounded-[1.25rem] border border-white/15 p-5 hover:bg-white/5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">{source.id}</p>
                <p className="mt-3 text-sm font-medium">{source.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/65">{source.publisher} · {source.publication} · {source.year}</p>
              </a>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-white/65">
            General educational information only. This page does not diagnose vagus-nerve dysfunction, prescribe treatment, verify target engagement or replace individual care. External exercise, breathing, relaxation or VNS research is not automatically product evidence for Neuvago.
          </p>
        </div>
      </section>
    </main>
  );
}
