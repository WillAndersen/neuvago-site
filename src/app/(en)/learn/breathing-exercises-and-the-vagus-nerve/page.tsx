import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "Breathing exercises and the vagus nerve: evidence and limits | Neuvago";
const description =
  "An evidence-based guide to slow breathing, longer exhalation, 4-7-8, HRV and why breathing does not by itself prove direct vagus-nerve stimulation.";
const path = "/learn/breathing-exercises-and-the-vagus-nerve";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/pusteovelser-og-vagusnerven",
      "x-default": path,
    },
  },
  openGraph: { title, description, url: path, siteName: "Neuvago", locale: "en_US", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

type DirectAnswer = { question: string; answer: string };
type PageSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  answers?: readonly DirectAnswer[];
};

const sections: readonly PageSection[] = [
  {
    "id": "short-answer",
    "eyebrow": "Direct answer and boundaries",
    "title": "Can breathing exercises stimulate the vagus nerve?",
    "paragraphs": [
      "Calm, comfortable and controlled breathing can change respiratory rhythm and influence heart-rate variation, attention and perceived activation. Research associates slow-paced breathing with changes in cardiac HRV-related measures under studied conditions. That is not the same as demonstrating that an exercise directly or selectively stimulates the vagus nerve.",
      "The word “stimulate” can hide a category error. Electrical vagus nerve stimulation involves a device, a specified stimulation site, electrical parameters and a protocol. Breathing exercises are behavioural practices in which rate, depth, inhalation-to-exhalation ratio, any breath hold and duration may all differ. Both can appear in discussions of autonomic regulation, but they are not the same method.",
      "A precise answer therefore separates four observations: the breathing pattern changed; the person felt different; a cardiac measure changed; or a target was directly engaged. These observations can coexist, but one does not automatically prove the others. There is also no single breathing rhythm established as universally best for every person, context and outcome."
    ],
    "answers": [
      {
        "question": "Can breathing exercises stimulate the vagus nerve?",
        "answer": "Breathing exercises can influence respiration, experience and cardiac measures such as heart rate and HRV. The source base does not establish that every exercise directly and selectively stimulates the vagus nerve or guarantees a parasympathetic switch."
      }
    ]
  },
  {
    "id": "breathing-autonomic-and-vagus-language",
    "eyebrow": "Language before mechanism",
    "title": "Breathing, autonomic regulation and vagus language overlap—but are not interchangeable",
    "paragraphs": [
      "Breathing is unusual because it continues automatically while remaining partly available to voluntary control. Changing pace, depth or rhythm alters the interaction among respiration, chest pressure, gas exchange, heart rate and attention. This makes breathing relevant to autonomic research, but it does not mean that every observed change can be assigned to one nerve or one simple pathway.",
      "The vagus nerve participates in organ regulation and carries information in both directions between body and brain. It also operates within a wider network that includes the brainstem, other nerves, respiratory muscles, circulation and hormonal systems. A change during breathing may be real and meaningful without showing that the whole vagus nerve has been activated, strengthened or reset.",
      "Popular content often uses “vagus activation” as shorthand for feeling calmer. That wording skips steps. First, the breathing pattern may change. The person may then report more or less activation. Heart rate or an HRV metric may also change. None of these observations alone is a direct measurement of selective vagus-nerve engagement.",
      "Behavioural breathing must also remain distinct from electrical VNS. Evidence for implanted, cervical or auricular electrical stimulation depends on the device, site, waveform, intensity, protocol, population and measured outcome. Those findings cannot be transferred automatically to breathing or treated as product evidence for Neuvago."
    ]
  },
  {
    "id": "slow-paced-breathing",
    "eyebrow": "Rate and delivery",
    "title": "What does slow breathing do to the nervous system?",
    "paragraphs": [
      "Slow or paced breathing generally means deliberately reducing respiratory rate or following an external or internal rhythm. It is an umbrella term rather than a single standardized intervention. Studies use different rates, session lengths, postures, depths and instructions, so “slow breathing” should not be presented as one fixed dose or one medical treatment.",
      "Systematic reviews report associations between voluntary slow breathing and changes in heart rate and several measures of cardiac HRV during and after studied sessions. This supports careful language about cardiorespiratory dynamics. It does not guarantee the same response for every individual, prove that every metric will move in a desired direction or establish a durable clinical effect from one brief session.",
      "A practical starting point is to make breathing regular and comfortable rather than trying to reach the lowest possible rate. If the pace becomes too slow or each breath is larger than needed, some people may feel air hunger, light-headedness, tingling or anxiety. Those sensations are reasons to reduce the effort or return to normal breathing—not instructions to push through.",
      "Rate is only one variable. Two people can breathe at the same number of breaths per minute while using different depths, ratios and breath holds. Posture, prior activity, recording length, expectation and day-to-day state also matter. A protocol should therefore be described in full instead of turning one frequency into a universal rule."
    ],
    "answers": [
      {
        "question": "What does slow breathing do to the nervous system?",
        "answer": "Slow-paced breathing changes respiratory rhythm and is associated in research with changes in heart rate, cardiac HRV measures and perceived activation. The response is method- and context-dependent; it does not diagnose vagus function or prove direct selective stimulation."
      }
    ]
  },
  {
    "id": "inhale-exhale-ratio",
    "eyebrow": "The two phases",
    "title": "A longer exhale is one possible pattern, not a universal rule",
    "paragraphs": [
      "Advice to make exhalation longer than inhalation is common. One rationale is that instantaneous heart rate normally varies across the respiratory cycle and may be lower during parts of exhalation. This makes the ratio worth studying, but it is too simple to conclude that a longer exhale is always better.",
      "Some studies in healthy adults reported acute differences in selected HRV measures when exhalation was longer. Other work supports equal inhalation and exhalation in tested conditions, and a recent original-and-replication study found no HRV difference between 1:2 and 1:1 at six breaths per minute. The evidence is mixed rather than a settled ranking.",
      "Inhalation-to-exhalation ratio cannot be interpreted independently of breathing rate, depth, breath holding, participants and outcomes. A pattern that feels easy to one person may feel strained to another. An HRV result from one laboratory condition is not evidence of improved sleep, treatment of anxiety or a durable health benefit.",
      "A gentle way to explore a slightly longer exhale is to let it lengthen without forcefully emptying the lungs. If the pattern creates air hunger or tension, equal breathing or ordinary breathing may be a better choice. Comfort and control matter more than hitting a prescribed number."
    ],
    "answers": [
      {
        "question": "Why is a longer exhale used?",
        "answer": "A longer exhale is used because respiratory phases interact with moment-to-moment heart-rate variation, and some studies report differences in cardiac HRV measures. It is one optional pattern, not proof of a universal vagus mechanism."
      },
      {
        "question": "Is a longer exhale better than equal breathing?",
        "answer": "Not as a general rule. Findings differ across breathing rates, ratios, populations and outcomes. Equal breathing and a slightly longer exhale can both be described as optional, comfortable examples."
      }
    ]
  },
  {
    "id": "four-seven-eight",
    "eyebrow": "A named pattern",
    "title": "The 4-7-8 method: what it is and what the evidence does not establish",
    "paragraphs": [
      "4-7-8 describes a sequence in which inhalation is counted to four, the breath is held to seven and exhalation is counted to eight. The counts describe relative phases, not necessarily seconds. The pattern therefore combines three components: controlled inhalation, a breath hold and a longer exhalation. All three should be named when evidence or practical advice is discussed.",
      "The identified evidence is limited. One study examined acute measures after 4-7-8 breathing in 43 healthy young adults. A newer comparison tested square breathing, 4-7-8 and six breaths per minute in students. In those conditions, six breaths per minute increased some HRV measures more, while blood pressure and mood did not show meaningful changes; mild over-breathing was also reported in the six-breaths-per-minute condition.",
      "These findings make it inaccurate both to call 4-7-8 “scientifically proven best” and to claim that it can never be useful. Samples were limited and outcomes were specific. The studies do not establish universal superiority, treatment of a condition, long-term benefit or direct and selective stimulation of the vagus nerve.",
      "Breath holding can feel uncomfortable. In a general educational guide, the hold should therefore be optional. Count faster, shorten the phases or omit the hold if the pattern feels strained. There is no benefit in competing to complete a fixed count."
    ],
    "answers": [
      {
        "question": "What is the 4-7-8 breathing method?",
        "answer": "It is one named pattern with an inhalation count, a breath hold and a longer exhalation count in a 4-7-8 relationship. It can be described as an optional example, but the identified evidence is small, heterogeneous and outcome-specific and does not make it universally best."
      }
    ]
  },
  {
    "id": "hrv-resphrv",
    "eyebrow": "Measurement and interpretation",
    "title": "HRV, RSA and RespHRV during breathing are measurable—without becoming a whole-vagus score",
    "paragraphs": [
      "Heart rate naturally varies from beat to beat. HRV describes this variation with different time- and frequency-domain metrics. During paced breathing, the measurement is strongly influenced by respiratory rhythm. A value recorded during an exercise therefore should not be compared uncritically with a resting value taken in another posture, at another time or for another duration.",
      "Respiratory sinus arrhythmia has long described respiration-related variation in heart rate. A 2025 international expert recommendation proposes the term respiratory heart rate variability, RespHRV, for greater terminological clarity. It also warns that RespHRV amplitude should not be misconstrued as a direct measure of “vagal tone.”",
      "HRV interpretation requires context: respiration, posture, recent activity, recording duration, artefacts, analysis choices, time of day and individual factors. A wearable estimate may help someone observe trends, but it does not diagnose vagus-nerve dysfunction. One number also cannot confirm that an exercise “worked” or that a specific nerve pathway was selectively stimulated.",
      "Breathing is a measurement confounder as well as a potential intervention. If respiratory rate differs between recordings, the HRV pattern can change even when the intended comparison concerns stress or recovery. Honest interpretation names the breathing and recording conditions instead of hiding them behind one composite score.",
      "It is therefore possible to say that slow breathing is often associated with changes in cardiac HRV measures while rejecting larger conclusions. The metric describes heart-rate variation under specified conditions; it is not a whole-body measure of vagus-nerve quality, strength or function."
    ],
    "answers": [
      {
        "question": "What do HRV or RSA changes during breathing mean?",
        "answer": "They show that heart rhythm varies with respiration under the recorded conditions. Interpretation depends on breathing, posture, duration and analysis. The change is not a diagnosis, a whole-body vagal-tone score or proof of direct vagus target engagement."
      }
    ]
  },
  {
    "id": "choosing-a-pattern",
    "eyebrow": "A practical choice without a winner",
    "title": "Choose a pattern for comfort and purpose—not a universal “best” promise",
    "paragraphs": [
      "No breathing technique is established as best for every person and every goal. Choice depends on comfort, whether a simple pace is preferred, whether breath holding feels unpleasant and whether the purpose is a short attention pause or a measurement protocol. A pattern that can be performed gently is often more useful than a complex rhythm that creates strain.",
      "A simple starting point is a soft, regular pattern without maximal inhalation. Someone can try approximately equal inhalation and exhalation, or let exhalation become slightly longer if that feels natural. Counting is a guide rather than a performance target. If comfort is lost, shorten the count or return to ordinary breathing.",
      "4-7-8 can be presented as one named option, but the breath hold is not required to learn a calm rhythm. People who tense during breath holding can choose a pattern without it. In this general guide, the most appropriate option is voluntary, non-forceful and easy to stop."
    ],
    "answers": [
      {
        "question": "Which breathing technique is best?",
        "answer": "No single technique is established as universally best. Consider comfort, rate, ratio, any breath hold, the goal and recording conditions. A simple pattern that remains effortless is a better starting point than a rigid promise of one optimal rhythm."
      }
    ]
  },
  {
    "id": "safety-and-care-boundaries",
    "eyebrow": "Stop and care boundaries",
    "title": "Breathing should remain gentle—and symptoms should not be pushed through",
    "paragraphs": [
      "General breathing guidance should prioritize comfortable, gentle, regular and non-forced breathing. Deeper is not automatically better. Large or rapid breaths can lower carbon dioxide and contribute to light-headedness, tingling, anxiety or air hunger. These are reasons to reduce the effort, not intensify it.",
      "Stop, shorten the pattern or return to normal breathing if the technique feels strained, causes dizziness or breathlessness, produces pain, marked distress or a feeling of faintness. Sit or lie down safely if needed. This general stop language is not a product-specific instruction for use and does not replace individual advice.",
      "Persistent, severe, unexplained or worsening symptoms deserve appropriate professional assessment rather than repeated online exercises. Acute warning signs—including severe breathing difficulty, chest pain, fainting, new neurological symptoms or another medical emergency—require urgent or emergency services.",
      "People with known heart, lung or other medical conditions, pregnant people and anyone who reacts strongly to breath holding or altered ventilation may need individual guidance before trying structured exercises. This page cannot decide what is suitable for a specific reader.",
      "The breathing page does not teach hyperventilation, extreme breath holds, massage, pressure points or neck/carotid manipulation. Those subjects involve different mechanisms and safety boundaries."
    ]
  },
  {
    "id": "further-reading-and-sources",
    "eyebrow": "Further reading and source use",
    "title": "Read onward without collapsing breathing, measurement, electrical VNS and product claims",
    "paragraphs": [
      "This page owns the specific question of breathing exercises and the vagus nerve. The broader methods pillar explains multiple method categories. The reset page addresses reset language and seven-minute claims. The calming page offers broader practical regulation guidance, while the vagus-nerve foundation and VNS overview explain anatomy and electrical stimulation.",
      "The sources below should be read at the level they actually studied. A systematic review of slow breathing can support qualified language about heart rate and cardiac HRV measures, not a product claim. A small ratio study describes its tested condition, not a universal optimum. A tVNS consensus explains why electrical methods must be specified; it is not evidence that breathing is tVNS.",
      "This page provides general educational information only. It does not diagnose vagus-nerve dysfunction, prevent or treat disease, or replace individual medical or psychological care. External breathing research is not automatically evidence for Neuvago, and no product-specific frequency, duration, contraindication or stop-use rule is supplied."
    ]
  }
];

const comparisonRows = [
  [
    "Notice the breath",
    "Observe the current rhythm without forcing a change.",
    "A baseline for comfort and effort.",
    "Direct vagus stimulation or treatment."
  ],
  [
    "Equal inhale and exhale",
    "Use an easy, roughly equal count without maximal breaths.",
    "A pattern tested in some paced-breathing protocols.",
    "That equal ratio is best for everyone."
  ],
  [
    "Slightly longer exhale",
    "Let exhalation lengthen only while it remains effortless.",
    "Some studies report acute differences; others do not.",
    "That a longer exhale is always superior."
  ],
  [
    "4-7-8",
    "Shorten counts or omit the hold if it feels uncomfortable.",
    "Small studies examined selected acute outcomes.",
    "Universal efficacy, treatment or selective vagus activation."
  ],
  [
    "Slower paced breathing",
    "Follow a comfortable pace without over-breathing.",
    "Changes in heart rate and cardiac HRV measures in studied conditions.",
    "That one frequency is optimal for every person."
  ]
] as const;

const sources = [
  {
    "id": "A-001",
    "title": "Breathing exercises for stress",
    "publisher": "NHS",
    "publication": "NHS",
    "year": 2026,
    "url": "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/"
  },
  {
    "id": "A-002",
    "title": "Doing What Matters in Times of Stress: An Illustrated Guide",
    "publisher": "World Health Organization",
    "publication": "World Health Organization",
    "year": 2020,
    "url": "https://www.who.int/publications/i/item/9789240003927"
  },
  {
    "id": "B-001",
    "title": "Effects of voluntary slow breathing on heart rate and heart rate variability: A systematic review and a meta-analysis",
    "publisher": "Laborde S et al.",
    "publication": "PubMed",
    "year": 2022,
    "url": "https://pubmed.ncbi.nlm.nih.gov/35623448/"
  },
  {
    "id": "B-002",
    "title": "How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing",
    "publisher": "Zaccaro A et al.",
    "publication": "PubMed",
    "year": 2018,
    "url": "https://pubmed.ncbi.nlm.nih.gov/30245619/"
  },
  {
    "id": "B-003",
    "title": "The physiological effects of slow breathing in the healthy human",
    "publisher": "Russo MA, Santarelli DM, O’Rourke D",
    "publication": "PubMed",
    "year": 2017,
    "url": "https://pubmed.ncbi.nlm.nih.gov/29209423/"
  },
  {
    "id": "B-004",
    "title": "Heart Rate Variability and Cardiac Vagal Tone in Psychophysiological Research – Recommendations for Experiment Planning, Data Analysis, and Data Reporting",
    "publisher": "Laborde S, Mosley E, Thayer JF",
    "publication": "PubMed",
    "year": 2017,
    "url": "https://pubmed.ncbi.nlm.nih.gov/28265249/"
  },
  {
    "id": "B-005",
    "title": "Redefining respiratory sinus arrhythmia as respiratory heart rate variability: an international Expert Recommendation for terminological clarity",
    "publisher": "Menuet C et al.",
    "publication": "PubMed",
    "year": 2025,
    "url": "https://pubmed.ncbi.nlm.nih.gov/40328963/"
  },
  {
    "id": "B-006",
    "title": "Increased exhalation to inhalation ratio during breathing enhances high-frequency heart rate variability in healthy adults",
    "publisher": "Bae D et al.",
    "publication": "PubMed",
    "year": 2021,
    "url": "https://pubmed.ncbi.nlm.nih.gov/34289128/"
  },
  {
    "id": "B-007",
    "title": "Inhalation/Exhalation ratio modulates the effect of slow breathing on heart rate variability and relaxation",
    "publisher": "Van Diest I et al.",
    "publication": "PubMed",
    "year": 2014,
    "url": "https://pubmed.ncbi.nlm.nih.gov/25156003/"
  },
  {
    "id": "B-008",
    "title": "Breathing at a rate of 5.5 breaths per minute with equal inhalation-to-exhalation ratio increases heart rate variability",
    "publisher": "Lin IM et al.",
    "publication": "PubMed",
    "year": 2014,
    "url": "https://pubmed.ncbi.nlm.nih.gov/24380741/"
  },
  {
    "id": "B-009",
    "title": "Do Longer Exhalations Increase HRV During Slow-Paced Breathing?",
    "publisher": "Meehan ZM, Shaffer F",
    "publication": "PubMed",
    "year": 2024,
    "url": "https://pubmed.ncbi.nlm.nih.gov/38507210/"
  },
  {
    "id": "B-010",
    "title": "Effects of sleep deprivation and 4-7-8 breathing control on heart rate variability, blood pressure, blood glucose, and endothelial function in healthy young adults",
    "publisher": "Vierra J, Boonla O, Prasertsri P",
    "publication": "PubMed",
    "year": 2022,
    "url": "https://pubmed.ncbi.nlm.nih.gov/35822447/"
  },
  {
    "id": "B-011",
    "title": "Comparing the Effects of Square, 4-7-8, and 6 Breaths-per-Minute Breathing Conditions on Heart Rate Variability, CO2 Levels, and Mood",
    "publisher": "Marchant J et al.",
    "publication": "PubMed",
    "year": 2025,
    "url": "https://pubmed.ncbi.nlm.nih.gov/39864026/"
  },
  {
    "id": "B-012",
    "title": "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)",
    "publisher": "Farmer AD et al.",
    "publication": "PubMed",
    "year": 2021,
    "url": "https://pubmed.ncbi.nlm.nih.gov/33854421/"
  }
] as const;

export default function BreathingExercisesAndTheVagusNervePage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    keywords: [
      "breathing exercises vagus nerve",
      "slow breathing",
      "longer exhale",
      "4-7-8 breathing",
      "HRV and breathing",
      "RespHRV",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Breathing exercises and the vagus nerve", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]" data-wave2d2c2-breathing-page="en">
      <JsonLd data={structuredData} idPrefix="learn-breathing-exercises-vagus-nerve" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">Breathing, measurement and evidence</p>
          <h1 className="mt-6 max-w-[20ch] text-[clamp(3rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            Breathing exercises and the vagus nerve: what changes, what is measured and what remains uncertain
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            Breathing can be guided deliberately and can influence respiratory rhythm, heart-rate variation and perceived activation. But breathing is not one standardized method, and a change in HRV or calm does not prove direct and selective vagus-nerve stimulation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/no/kunnskap/pusteovelser-og-vagusnerven" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">Les på norsk</Link>
            <Link href="#short-answer" className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90">Read the direct answer</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd] px-5 py-14 sm:px-8 lg:px-12 lg:py-16" data-wave2d2c2-direct-answer="en">
        <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Direct answer</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-[#3d3934] sm:text-2xl">
            Calm, comfortable and controlled breathing can change respiratory rhythm and influence heart-rate variation and perceived activation. Research links slow-paced breathing with changes in cardiac HRV measures, but this does not prove that an exercise directly or selectively stimulates the vagus nerve. There is no single universally best breathing rhythm.
          </p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className={`scroll-mt-28 border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20 ${index % 2 === 0 ? "bg-[#f7f4ef]" : "bg-[#eee7dd]"}`}>
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

              {section.answers?.map((answer) => (
                <div key={answer.question} className="mt-8 rounded-[1.5rem] border border-black/8 bg-white/70 p-6" data-direct-answer-question={answer.question}>
                  <h3 className="text-xl font-medium tracking-[-0.025em]">{answer.question}</h3>
                  <p className="mt-3 text-base leading-8 text-[#5f5a52]">{answer.answer}</p>
                </div>
              ))}

              {section.id === "choosing-a-pattern" ? (
                <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
                  <table className="w-full min-w-[64rem] border-collapse text-left">
                    <caption className="p-5 text-left text-sm text-[#625b52]">Examples of breathing patterns and the limits of what they can show</caption>
                    <thead className="border-y border-black/8 bg-white/70"><tr>{["Pattern", "A gentle way to try it", "What may be described", "What it does not prove"].map((heading) => <th key={heading} className="p-4 text-sm font-medium">{heading}</th>)}</tr></thead>
                    <tbody>{comparisonRows.map((row) => <tr key={row[0]} className="border-b border-black/7 last:border-b-0">{row.map((cell) => <td key={cell} className="p-4 align-top text-sm leading-7 text-[#5f5a52]">{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              ) : null}

              {section.id === "breathing-autonomic-and-vagus-language" ? (
                <div className="mt-8 flex flex-wrap gap-5"><Link href="/learn/how-to-stimulate-the-vagus-nerve" className="font-medium underline underline-offset-4">Explore the methods overview</Link><Link href="/learn/vagus-nerve-stimulation" className="font-medium underline underline-offset-4">Read the electrical VNS overview</Link></div>
              ) : null}
              {section.id === "four-seven-eight" ? <p className="mt-8"><Link href="/learn/vagus-nerve-reset" className="font-medium underline underline-offset-4">Understand reset language and seven-minute claims</Link></p> : null}
              {section.id === "hrv-resphrv" ? <p className="mt-8"><Link href="/learn/vagal-tone" className="font-medium underline underline-offset-4">Read the vagal-tone and measurement guide</Link></p> : null}
              {section.id === "safety-and-care-boundaries" ? <p className="mt-8"><Link href="/learn/how-to-calm-your-nervous-system" className="font-medium underline underline-offset-4">Explore the broader calming guide</Link></p> : null}
              {section.id === "further-reading-and-sources" ? <p className="mt-8"><Link href="/learn/vagus-nerve" className="font-medium underline underline-offset-4">Understand the vagus nerve foundation</Link></p> : null}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-black/5 bg-[#1f1f1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20" data-wave2d2c2-sources="en">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">Reader-visible sources</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Read breathing claims at the level of the protocol and outcome that were actually studied</h2>
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
            General educational information only. This page does not diagnose, prevent or treat a condition, prescribe a breathing protocol or replace individual care. External breathing or electrical-VNS research is not automatically product evidence for Neuvago. Stop or return to normal breathing if a pattern feels strained, dizzying, breathless, painful or markedly uncomfortable; seek professional or urgent help when symptoms require it.
          </p>
        </div>
      </section>
    </main>
  );
}
