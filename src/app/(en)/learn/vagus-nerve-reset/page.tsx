import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "Vagus nerve reset: meaning, evidence and limits | Neuvago";
const description =
  "Learn what a “vagus nerve reset” can mean, why there is no literal reset button or universal seven-minute guarantee, and how calming practices differ from electrical VNS.";
const path = "/learn/vagus-nerve-reset";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/resette-vagusnerven",
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

const sections = [
  {
    id: "short-answer",
    eyebrow: "Direct answer and key boundaries",
    title: "Can you reset the vagus nerve?",
    paragraphs: [
      "No—the vagus nerve does not have a literal reset button that can be activated on command. “Reset” is often used as a metaphor for moving from high activation toward a calmer state. Gentle breathing, pauses and other regulation practices may influence experience and physiological measures, but they do not reset a nerve and cannot be guaranteed to work in seven minutes.",
      "That does not make a felt shift toward calm imaginary or unimportant. A person may notice a slower pace, more comfortable breathing, less muscle tension or a different sense of activation. Those changes can matter without functioning as a home test of the vagus nerve or proving that one specific nerve pathway has been restarted.",
      "Does the vagus nerve have a reset button? No. The useful distinction is between what you experience, what can be measured and what mechanism you assume. One symptom, wearable value, heart-rate change or HRV number does not diagnose a weak, damaged or imbalanced vagus nerve. The term “reset” is best treated as popular language about regulation—not as a promise of one universal biological procedure.",
    ],
  },
  {
    id: "what-reset-means",
    eyebrow: "Language before mechanism",
    title: "What “reset” means—and why it is a metaphor",
    paragraphs: [
      "The phrase “vagus nerve reset” is common in videos, posts and searches about stress, sleep, breathing and the nervous system. It often expresses a wish to leave a highly activated, restless or stuck state. In that everyday use, “reset” points to a transition: from tense to less tense, from a fast internal pace to a slower one, or from a narrow stress focus toward greater contact with the surroundings.",
      "The word is attractive because it suggests a clean new start. The problem begins when the metaphor is presented as precise anatomy. The vagus nerve contains different groups of fibres and participates in a wider network involving the brainstem, organs, other nerves and the autonomic nervous system. It carries information in more than one direction and is involved in many functions. It is not one calm switch that can simply be turned off and back on.",
      "A clearer approach is to name the immediate goal. Perhaps you want to lower the pace for a few minutes, make breathing more comfortable, step away from stimulation, move gently or seek support from another person. Then the practice can be assessed for what it actually involves and for what the sources have studied, rather than placing every possible effect inside the word “reset.”",
      "This distinction also reduces unnecessary alarm. Feeling stressed, dizzy, tired or unsettled, or seeing an unusual wearable value, does not automatically mean that the vagus nerve is inflamed, trapped, damaged or out of balance. Such experiences can have many explanations. Persistent, severe or unexplained symptoms deserve professional assessment rather than an online vagus test.",
    ],
  },
  {
    id: "seven-minute-reset",
    eyebrow: "No universal timer",
    title: "What is the 7-minute vagus nerve reset?",
    paragraphs: [
      "“7-minute vagus nerve reset” is used for short routines that may combine breathing, attention, sound, movement or other elements. Seven minutes makes a routine concrete and memorable, but a duration is not evidence by itself. A practice can last seven minutes without resetting a nerve, activating a defined fibre group or producing the same result for everyone.",
      "In the dated, targeted exact-phrase review used for this page, we did not identify an eligible clinical guideline, controlled trial, systematic review or registered protocol validating one universal seven-minute “vagus nerve reset.” This is not evidence that no relevant study exists. The review was not systematic or exhaustive, exact-phrase searches may miss research using different terminology, and new sources may appear later.",
      "There is also no single correct timetable for feeling calmer. Some people notice a change quickly, others notice little, and the same person may respond differently from one day to another. Context, expectations, sleep, pain, workload and environment can all matter. A rapid shift is not proof of an anatomical reset, and no rapid shift does not mean that the vagus nerve is broken.",
    ],
  },
  {
    id: "what-may-support-calm",
    eyebrow: "Aim for regulation, not proof",
    title: "What may support calm and regulation",
    paragraphs: [
      "How do people try to calm or regulate their system? Common approaches include comfortable paced breathing, a brief pause, reduced sensory load, gentle movement, relaxation, grounding or social support. Public-health guidance presents practical stress-management skills without requiring a vagus-specific explanation. That is a useful standard: a low-risk practice can be valuable because it helps a person create space, orient or settle, even when it does not demonstrate a single-nerve mechanism.",
      "Can breathing reset the vagus nerve? Not in the literal sense. Slow breathing has been studied under defined conditions. Systematic reviews and a meta-analysis report changes in heart rate, HRV-related measures and psychophysiological outcomes across included studies. Those findings support qualified statements about breathing as a regulation practice. They do not establish that every technique directly and selectively stimulates the vagus nerve or guarantees the same subjective or physiological outcome.",
      "Keep any general self-help practice gentle and non-forced. A comfortable breath is more appropriate than straining for a target count, unusually deep inhalation or a long breath hold. Stop if a practice causes dizziness, breathlessness, pain, marked discomfort or worsening symptoms. Detailed breathing protocols and the 4-7-8 method belong to the dedicated breathing guide rather than this reset explainer.",
      "The broad question is not “Did I prove a reset?” but “Did this safe, manageable action help me move toward the state I needed?” Sometimes the most relevant response is a pause or a change of environment. At other times it is sleep, food, medical care, practical support or a conversation with someone you trust.",
    ],
  },
  {
    id: "heart-rate-hrv-and-interpretation",
    eyebrow: "Measures need context",
    title: "Heart rate, HRV and what the measures do not prove",
    paragraphs: [
      "Heart rate and heart-rate variability can change with breathing, posture, movement, sleep, time of day, recording length, device method and many other factors. HRV is used in psychophysiological research as a context-dependent cardiac measure, and methodological recommendations exist because collection and interpretation choices materially affect the result.",
      "A change in HRV during slow breathing can be compatible with a breathing-related cardiac effect. It does not provide a whole-body score for the vagus nerve, show that the nerve has been reset, or diagnose vagus dysfunction. The label “cardiac vagal tone” also needs methodological care; it should not be turned into a universal consumer health verdict from one watch reading.",
      "Wearables can be useful for personal trends when their limits are understood, but they do not replace clinical evaluation. One high or low value may reflect measurement conditions rather than a meaningful change. Symptoms and numbers should not be combined into a self-diagnosis of a weak, irritated or damaged vagus nerve.",
      "When a measure is used, name it precisely: the device, recording period, posture, breathing conditions and outcome. Then interpret only what that measure can support. A calmer feeling, lower heart rate and different HRV value are three observations; none alone proves direct, selective nerve stimulation.",
    ],
  },
  {
    id: "difference-from-electrical-vns",
    eyebrow: "Do not collapse method categories",
    title: "How “reset” differs from electrical VNS",
    paragraphs: [
      "How is a “reset” different from electrical VNS? Electrical vagus nerve stimulation uses a device to deliver controlled electrical pulses. Implanted medical VNS uses surgically placed components and clinical follow-up. Non-invasive methods use surface electrodes, including cervical and auricular approaches. Those are device and protocol categories—not informal names for breathing, relaxation or a short reset routine.",
      "Research on transcutaneous VNS varies by device, stimulation site, waveform, frequency, pulse width, intensity, session design, comparator, participant population and measured outcome. International reporting recommendations emphasise these details because they affect replication and interpretation. Evidence from one setup cannot automatically be transferred to every other device, site or purpose.",
      "The same boundary applies to Neuvago. Research on another implanted or non-invasive system is not automatically product evidence for Neuvago. A general reset page must not become a treatment claim, product promise or substitute for the product’s intended use and applicable instructions.",
      "Behavioural practices may influence breathing, attention, experience or autonomic measures. Electrical VNS intentionally delivers electrical stimulation. Both can be discussed in the same educational landscape while remaining distinct. Feeling calmer after a practice does not turn it into electrical VNS, and feeling a stimulus does not by itself establish a particular physiological outcome.",
    ],
  },
  {
    id: "practical-safety-boundaries",
    eyebrow: "Gentle boundaries and escalation",
    title: "Gentle practical boundaries and when to seek help",
    paragraphs: [
      "Use conservative boundaries for general self-help: choose comfortable breathing, ordinary movement, rest, orientation and supportive contact. Do not press hard on the side or front of the neck, attempt carotid massage, improvise electrical placement or follow instructions that promise a universal pressure point. Clinical manoeuvres are not converted into safe consumer exercises merely because they appear online.",
      "Stop a practice if it produces pain, dizziness, breathlessness, faintness, strong discomfort or worsening symptoms. A routine is not a test you need to pass, and more intensity is not evidence of a better effect. People with symptoms, implanted electronics, heart-rhythm concerns, active medical treatment or other relevant conditions should use qualified advice and the correct product-specific safety information rather than generic social-media instructions.",
      "Seek professional assessment for symptoms that are persistent, severe, unexplained or concerning. Use urgent or emergency services for acute warning signs or a situation that feels unsafe. This page cannot determine the cause of symptoms, diagnose vagus-nerve dysfunction or provide individual treatment.",
      "General educational information can help clarify language and choices, but it does not replace care. Product-specific duration, frequency, contraindications, precautions and stop-use rules remain governed by the applicable product information; they are deliberately not supplied by this reset explainer.",
    ],
  },
  {
    id: "further-reading-and-sources",
    eyebrow: "Continue by question",
    title: "Further reading and sources",
    paragraphs: [
      "Use the methods overview when you want to compare electrical VNS with breathing and other practices. Use the calming guide for broader, practical regulation ideas, and the nervous-system regulation page for foundational concepts. The electrical VNS overview explains devices, sites, protocols and evidence limits in more depth.",
      "The source cards below combine public-health guidance, clinical safety context, vagus anatomy, VNS methodology, slow-breathing evidence and HRV interpretation. They support the specific qualified statements on this page; they do not establish one universal reset protocol or a product claim.",
    ],
  },
] as const;

const comparisonRows = [
  [
    "“The vagus nerve can be reset in seven minutes”",
    "A short, calm routine can create time for a pause, attention or a changed breathing pattern.",
    "That one universal method resets the vagus nerve or works for everyone in seven minutes.",
  ],
  [
    "“I feel calmer afterwards”",
    "A subjective experience can change and be meaningful in its own right.",
    "Direct selective nerve stimulation, a diagnosis or a clinical treatment effect.",
  ],
  [
    "“My heart rate or HRV changed”",
    "Breathing, posture, activity and context can influence cardiac measures.",
    "A whole-vagus score, a reset or a diagnosis.",
  ],
  [
    "“Breathing activates the vagus nerve”",
    "Slow or paced breathing may influence heart rate, HRV-related measures and experience under studied conditions.",
    "That every breathing technique is direct electrical VNS or guarantees one outcome.",
  ],
] as const;

const sources = [
  {
    id: "A-001",
    title: "Doing What Matters in Times of Stress: An Illustrated Guide",
    publisher: "World Health Organization",
    publication: "Official public-health guide",
    year: 2020,
    url: "https://www.who.int/publications/i/item/9789240003927",
  },
  {
    id: "A-002",
    title: "Breathing exercises for stress",
    publisher: "NHS",
    publication: "Official health-service guidance",
    year: 2026,
    url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/",
  },
  {
    id: "A-003",
    title: "Practical Instructions for the 2018 ESC Guidelines for the diagnosis and management of syncope",
    publisher: "European Society of Cardiology task force",
    publication: "European Heart Journal",
    year: 2018,
    url: "https://academic.oup.com/eurheartj/article/39/21/e43/4939242",
  },
  {
    id: "B-001",
    title: "Vagus Nerve and Vagus Nerve Stimulation, a Comprehensive Review: Part I",
    publisher: "Yuan H, Silberstein SD",
    publication: "Headache",
    year: 2016,
    url: "https://pubmed.ncbi.nlm.nih.gov/26364692/",
  },
  {
    id: "B-002",
    title: "Functional and chemical anatomy of the afferent vagal system",
    publisher: "Berthoud HR, Neuhuber WL",
    publication: "Autonomic Neuroscience",
    year: 2000,
    url: "https://pubmed.ncbi.nlm.nih.gov/11189015/",
  },
  {
    id: "B-003",
    title: "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)",
    publisher: "Farmer AD et al.",
    publication: "Frontiers in Human Neuroscience",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
  },
  {
    id: "B-004",
    title: "Critical Review of Transcutaneous Vagus Nerve Stimulation: Challenges for Translation to Clinical Practice",
    publisher: "Yap JYY et al.",
    publication: "Frontiers in Neuroscience",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32410932/",
  },
  {
    id: "B-005",
    title: "Effects of voluntary slow breathing on heart rate and heart rate variability: A systematic review and a meta-analysis",
    publisher: "Laborde S et al.",
    publication: "Neuroscience & Biobehavioral Reviews",
    year: 2022,
    url: "https://pubmed.ncbi.nlm.nih.gov/35623448/",
  },
  {
    id: "B-006",
    title: "How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing",
    publisher: "Zaccaro A et al.",
    publication: "Frontiers in Human Neuroscience",
    year: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/30245619/",
  },
  {
    id: "B-007",
    title: "Heart Rate Variability and Cardiac Vagal Tone in Psychophysiological Research – Recommendations for Experiment Planning, Data Analysis, and Data Reporting",
    publisher: "Laborde S, Mosley E, Thayer JF",
    publication: "Frontiers in Psychology",
    year: 2017,
    url: "https://pubmed.ncbi.nlm.nih.gov/28265249/",
  },
] as const;

export default function VagusNerveResetPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    keywords: [
      "vagus nerve reset",
      "7 minute vagus nerve reset",
      "can you reset the vagus nerve",
      "calm the nervous system",
      "HRV and vagus nerve",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Vagus nerve reset", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]" data-wave2d2b2-reset-page="en">
      <JsonLd data={structuredData} idPrefix="learn-vagus-nerve-reset" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
            Reset, regulation and evidence
          </p>
          <h1 className="mt-6 max-w-[19ch] text-[clamp(3rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            Vagus nerve reset: what the term means and what it cannot promise
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            “Vagus nerve reset” is a popular search phrase, not the name of a precisely established anatomical mechanism. This guide separates the metaphor from measurable change, explains the seven-minute claim and keeps behavioural practices distinct from electrical VNS.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/no/kunnskap/resette-vagusnerven"
              className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70"
            >
              Les på norsk
            </Link>
            <Link
              href="#short-answer"
              className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Read the direct answer
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd] px-5 py-14 sm:px-8 lg:px-12 lg:py-16" data-wave2d2b2-direct-answer="en">
        <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Direct answer</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-[#3d3934] sm:text-2xl">
            No—the vagus nerve does not have a literal reset button that can be activated on command. “Reset” is often used as a metaphor for moving from high activation toward a calmer state. Gentle breathing, pauses and other regulation practices may influence experience and physiological measures, but they do not reset a nerve and cannot be guaranteed to work in seven minutes.
          </p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-28 border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20 ${
            index % 2 === 0 ? "bg-[#f7f4ef]" : "bg-[#eee7dd]"
          }`}
        >
          <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
                {section.eyebrow}
              </p>
              <p className="mt-3 text-sm text-[#8a8178]">
                {String(index + 1).padStart(2, "0")} / 08
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

              {section.id === "seven-minute-reset" ? (
                <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
                  <table className="w-full min-w-[58rem] border-collapse text-left">
                    <caption className="p-5 text-left text-sm text-[#625b52]">
                      Popular reset claims compared with what the sources can support and what they do not prove
                    </caption>
                    <thead className="border-y border-black/8 bg-white/70">
                      <tr>
                        {["Claim or phrase", "What the sources can support", "What it does not prove"].map(
                          (heading) => (
                            <th key={heading} className="p-4 text-sm font-medium">
                              {heading}
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
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
              ) : null}

              {section.id === "what-may-support-calm" ? (
                <p className="mt-8">
                  <Link href="/learn/how-to-calm-your-nervous-system" className="font-medium underline underline-offset-4">
                    Explore the broader calming guide
                  </Link>
                </p>
              ) : null}
              {section.id === "heart-rate-hrv-and-interpretation" ? (
                <p className="mt-8">
                  <Link href="/learn/vagal-tone" className="font-medium underline underline-offset-4">
                    Read the guide to vagal tone and measurement limits
                  </Link>
                </p>
              ) : null}
              {section.id === "difference-from-electrical-vns" ? (
                <p className="mt-8">
                  <Link href="/learn/vagus-nerve-stimulation" className="font-medium underline underline-offset-4">
                    Read the electrical VNS overview
                  </Link>
                </p>
              ) : null}
              {section.id === "further-reading-and-sources" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/how-to-stimulate-the-vagus-nerve" className="font-medium underline underline-offset-4">
                    Explore the methods overview
                  </Link>
                  <Link href="/learn/nervous-system-regulation" className="font-medium underline underline-offset-4">
                    Understand nervous-system regulation
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-black/5 bg-[#1f1f1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20" data-wave2d2b2-sources="en">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">Reader-visible sources</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
            Read each claim at the level of the method and outcome that were actually studied
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
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">{source.id}</p>
                <p className="mt-3 text-sm font-medium">{source.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  {source.publisher} · {source.publication} · {source.year}
                </p>
              </a>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-white/65">
            General educational information only. This page does not diagnose vagus-nerve dysfunction, prescribe a medical treatment or replace professional care. The targeted seven-minute review was not systematic or exhaustive and is not evidence that no relevant study exists.
          </p>
        </div>
      </section>
    </main>
  );
}
