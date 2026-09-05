import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "How to Stimulate the Vagus Nerve: Methods and Limits | Neuvago";
const description =
  "Learn what “stimulating the vagus nerve” can mean, how electrical VNS differs from breathing and other practices, and the evidence and safety limits that matter.";
const path = "/learn/how-to-stimulate-the-vagus-nerve";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/hvordan-stimulere-vagusnerven",
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
    id: "what-does-stimulate-the-vagus-nerve-mean",
    eyebrow: "Start with the definition",
    title: "What does it actually mean to stimulate the vagus nerve?",
    paragraphs: [
      "Online, “stimulate the vagus nerve” can mean several different things. In medical and technical language, vagus nerve stimulation usually refers to defined electrical stimulation delivered by a device at a specified site and with a specified protocol. In everyday wellness content, the same phrase is often applied to breathing, movement, relaxation, sound, cold exposure or touch. These categories should not be treated as interchangeable because they use different methods, outcomes and safety frameworks.",
      "A useful answer therefore starts by defining the user’s question. Are they trying to understand an implanted medical system, a non-invasive electrical method, or an ordinary practice that may influence breathing, attention or autonomic state? Once the category is clear, evidence can be interpreted at the right level: what was done, where it was done, who was studied, what was measured and how certain the result is.",
      "The vagus nerve is not a single “calm switch.” It contains diverse fibres and belongs to a wider autonomic network. Signals travel from the body toward the brain as well as from the brain toward organs. A sensation, one heart-rate change or a single HRV value cannot by itself prove that the whole nerve has been activated, weakened or reset.",
    ],
  },
  {
    id: "four-method-categories",
    eyebrow: "A clearer map",
    title: "Four different ways the phrase is used",
    paragraphs: [
      "The broad search phrase becomes easier to understand when it is divided into four lanes: implanted medical VNS, non-invasive electrical VNS, behavioural or regulation practices, and trend-led or risky DIY claims. This is not a ranking. It is a way to identify which questions, sources and safety boundaries apply before methods are compared.",
      "Implanted VNS is a regulated medical-device category with surgically placed components and clinical follow-up. Non-invasive electrical VNS uses surface electrodes, but it still varies by device, waveform, stimulation site, intensity, session design and population. Breathing and other behavioural practices may change experience or autonomic measures without becoming electrical VNS. “Reset” routines, pressure points and unmonitored neck procedures require especially careful premise and safety checks.",
      "Keeping the lanes separate prevents category errors. Approval or evidence for an implanted system does not give every external device the same indication. A result from one taVNS protocol does not automatically apply to every ear device. A breathing-related change in HRV does not make breathing an implanted or transcutaneous electrical treatment.",
    ],
  },
  {
    id: "electrical-vagus-nerve-stimulation",
    eyebrow: "A distinct method family",
    title: "Electrical VNS is its own method category",
    paragraphs: [
      "Electrical vagus nerve stimulation means that a device delivers controlled electrical pulses. Implanted VNS uses surgically placed hardware. Non-invasive approaches place electrodes on the skin. Within the non-invasive field, cervical stimulation at the neck and auricular stimulation at the outer ear are different sites and should be named accurately.",
      "Terms such as tVNS and taVNS do not describe one standard dose. Studies differ in electrode design, active site, control site, frequency, pulse width, intensity, titration, session length, schedule, participant population and outcome. International reporting recommendations exist because those technical details are essential for replication and interpretation.",
      "There is no universally established best site, waveform, intensity or protocol for every purpose. A stronger sensation is not proof of stronger vagal engagement or a better outcome. Evidence must stay attached to the device, site, protocol, population and measurement that were actually studied.",
    ],
  },
  {
    id: "breathing-and-autonomic-regulation",
    eyebrow: "Behavioural practice",
    title: "Breathing can influence autonomic state—but it is not the same as electrical VNS",
    paragraphs: [
      "Voluntary slow breathing is one of the practices most often described as vagus stimulation. Systematic reviews indicate that slow breathing under defined conditions can influence heart rate and HRV-related measures, and broader reviews discuss psychophysiological correlates of breath control. That supports careful language about breathing as a regulation practice.",
      "It does not establish that every breathing exercise directly and selectively stimulates the whole vagus nerve. HRV is an indirect, context-sensitive cardiac measure. It is affected by breathing pattern, posture, activity, time of day, recording method and individual variation. One HRV value is not a diagnostic test for overall vagus function.",
      "A practical exercise can be described without making a nerve guarantee: use a comfortable pace, avoid forcing the breath, and stop if you become dizzy or unwell. The useful goal may be a slower rhythm and a more manageable state—not proving a mechanism at home.",
    ],
  },
  {
    id: "movement-relaxation-sound-and-touch",
    eyebrow: "Broader regulation tools",
    title: "Movement, relaxation, sound and gentle touch",
    paragraphs: [
      "Movement affects breathing, heart rate, sleep pressure, mood and recovery, and some exercise interventions have been studied with cardiac autonomic outcomes. Findings vary by intervention, dose and population. It is therefore more accurate to say that activity can influence systems involved in regulation than to claim that every exercise selectively stimulates the vagus nerve.",
      "Relaxation, meditation, grounding and attention practices can help some people work with stress. WHO guidance presents practical stress-management skills without requiring a vagus-specific explanation. That is a useful standard: a practice can be worthwhile because it is accessible and supportive even when a single-nerve mechanism has not been established.",
      "Humming, singing, sound and gentle touch may alter breathing, vocal activity, attention, social context or bodily experience. Those pathways are complex. One tone, pressure point or touch pattern should not be promoted as a universal vagus protocol.",
    ],
  },
  {
    id: "ear-and-neck-stimulation",
    eyebrow: "Anatomy and site",
    title: "The ear and neck are not the same stimulation site",
    paragraphs: [
      "Auricular stimulation is delivered at the outer ear, cervical stimulation at the neck, and implanted VNS through surgically placed components. These approaches have different anatomical assumptions, device designs and protocol requirements. They are not interchangeable versions of one exercise.",
      "The outer ear has heterogeneous innervation from several nerves. Anatomical studies and reviews do not support treating the whole ear as one uniform vagal target. Feeling tingling at the ear does not prove that a particular branch has been engaged or that a desired outcome will follow.",
      "For electrical ear stimulation, the relevant questions include the exact site, electrode design, waveform and intensity control. Those details belong to the specific device or research protocol. General anatomy should not be converted into random TENS placement advice.",
    ],
  },
  {
    id: "can-i-stimulate-my-own-vagus-nerve",
    eyebrow: "Direct answer",
    title: "Can I stimulate my own vagus nerve?",
    paragraphs: [
      "People can use ordinary low-risk practices such as comfortable paced breathing, moderate movement, relaxation and grounding. These may influence experience and autonomic state, but they should be described honestly rather than relabelled as proven electrical VNS.",
      "Electrical stimulation is different. An external device should be assessed by intended use, stimulation site, waveform, intensity control, product quality, instructions and evidence. A generic TENS unit is not automatically a vagus nerve stimulator, and improvised electrodes at the ear or neck are not a responsible substitute for device-specific guidance.",
      "Medical procedures and disease questions are also outside a generic self-help answer. Symptoms, implanted electronics, rhythm concerns, active treatment or other medical factors call for qualified advice and the exact product safety information.",
    ],
  },
  {
    id: "how-long-does-it-take",
    eyebrow: "No universal timer",
    title: "How long does it take to stimulate the vagus nerve?",
    paragraphs: [
      "There is no universal duration because “stimulate” may refer to an electrical pulse, a measured physiological response, a subjective change or a clinical outcome. A device delivers pulses while it is active, but that does not prove selective target engagement or guarantee an effect within a fixed number of minutes.",
      "Research can examine signals during one session, short-term changes afterward or outcomes after repeated sessions. Tolerability may be assessed immediately, while other questions require days or weeks. Device, site, protocol, population and measurement all shape the timeline.",
      "The same caution applies to breathing and relaxation. Some people notice an immediate shift; others do not. A feeling of calm is not a laboratory measure of total vagus function. Claims of a universal seven-minute reset are therefore not an evidence-based clock.",
    ],
  },
  {
    id: "safety-and-methods-not-to-improvise",
    eyebrow: "Safety boundary",
    title: "Safety: methods you should not improvise",
    paragraphs: [
      "Strong pressure at the neck or carotid area should not be presented as a general vagus exercise. European clinical guidance describes carotid sinus massage as a monitored diagnostic manoeuvre. That is fundamentally different from an online pressure-point routine.",
      "Improvised electrical stimulation at the neck or ear is not a neutral home test. Waveform, placement, contact, device construction and the user’s circumstances matter. Non-invasive does not mean risk-free or appropriate for everyone. Follow the exact instructions and safety information for a specific product.",
      "Serious or acute symptoms should not be dismissed as a “vagus reaction.” Seek urgent help for severe symptoms and professional assessment for persistent or concerning problems rather than relying on online vagus tests.",
    ],
  },
  {
    id: "how-to-evaluate-methods-and-neuvago",
    eyebrow: "From search to decision",
    title: "How to evaluate a method—and where Neuvago may fit",
    paragraphs: [
      "Start with the goal. Are you looking for an everyday practice, an explanation of electrical VNS or information about medical treatment? Then identify the method, evidence level, safety framework and whether the findings relate to the same device, site, protocol and population.",
      "A sound evaluation names the outcome, reads limitations and adverse-event reporting, and checks intended use. It does not rank methods by how dramatic they sound. Free practices such as breathing and movement, electrical devices and medical systems can all be covered in one knowledge centre while remaining separate evidence categories.",
      "Neuvago may be introduced only as one non-invasive, ear-based electrical wellness option within its current intended use. Research on implanted VNS, other devices or laboratory protocols does not transfer automatically. Product-specific frequency, duration, contraindications and stop-use rules remain outside this wave until their dedicated product and IFU gates are complete.",
    ],
  },
] as const;

const sources = [
  {
    title: "Vagus Nerve Stimulator (VNS) System — implanted for epilepsy",
    publisher: "U.S. Food and Drug Administration",
    publication: "FDA Establishment Registration & Device Listing",
    year: 2026,
    url: "https://www.accessdata.fda.gov/SCRIPTS/cdrh/cfdocs/cfRL/rl.cfm?lid=859346&lpcd=LYJ",
  },
  {
    title: "Practical Instructions for the 2018 ESC Guidelines for the diagnosis and management of syncope",
    publisher: "European Society of Cardiology task force",
    publication: "European Heart Journal",
    year: 2018,
    url: "https://academic.oup.com/eurheartj/article/39/21/e43/4939242",
  },
  {
    title: "Doing What Matters in Times of Stress: An Illustrated Guide",
    publisher: "World Health Organization",
    publication: "World Health Organization",
    year: 2020,
    url: "https://www.who.int/publications-detail-redirect/9789240003927",
  },
  {
    title: "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)",
    publisher: "Farmer AD et al.",
    publication: "Frontiers in Human Neuroscience",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
  },
  {
    title: "Critical Review of Transcutaneous Vagus Nerve Stimulation: Challenges for Translation to Clinical Practice",
    publisher: "Yap JYY et al.",
    publication: "Frontiers in Neuroscience",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32410932/",
  },
  {
    title: "Laboratory Administration of Transcutaneous Auricular Vagus Nerve Stimulation (taVNS): Technique, Targeting, and Considerations",
    publisher: "Badran BW et al.",
    publication: "Journal of Visualized Experiments",
    year: 2019,
    url: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
  },
  {
    title: "The anatomical basis for transcutaneous auricular vagus nerve stimulation",
    publisher: "Butt MF et al.",
    publication: "Journal of Anatomy",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/31742681/",
  },
  {
    title: "The nerve supply of the human auricle",
    publisher: "Peuker ET, Filler TJ",
    publication: "Clinical Anatomy",
    year: 2002,
    url: "https://pubmed.ncbi.nlm.nih.gov/11835542/",
  },
  {
    title: "Functional and chemical anatomy of the afferent vagal system",
    publisher: "Berthoud HR, Neuhuber WL",
    publication: "Autonomic Neuroscience",
    year: 2000,
    url: "https://pubmed.ncbi.nlm.nih.gov/11189015/",
  },
  {
    title: "Surgically implanted and non-invasive vagus nerve stimulation: a review of efficacy, safety and tolerability",
    publisher: "Ben-Menachem E et al.",
    publication: "European Journal of Neurology",
    year: 2015,
    url: "https://pubmed.ncbi.nlm.nih.gov/25614179/",
  },
  {
    title: "Effects of voluntary slow breathing on heart rate and heart rate variability: A systematic review and a meta-analysis",
    publisher: "Laborde S et al.",
    publication: "Neuroscience & Biobehavioral Reviews",
    year: 2022,
    url: "https://pubmed.ncbi.nlm.nih.gov/35623448/",
  },
  {
    title: "How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing",
    publisher: "Zaccaro A et al.",
    publication: "Frontiers in Human Neuroscience",
    year: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/30245619/",
  },
  {
    title: "Effects of Different Exercise Interventions on Cardiac Autonomic Control and Secondary Health Factors in Middle-Aged Adults",
    publisher: "Grässler B et al.",
    publication: "Journal of Cardiovascular Development and Disease",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/34436236/",
  },
] as const;

const methodRows = [
  ["Implanted medical VNS", "Surgically implanted pulse generator and electrode", "Product- and indication-specific clinical outcomes", "Not equivalent to external wellness devices or exercises"],
  ["Non-invasive electrical VNS", "Electrical stimulation through skin at an ear or neck site", "Results for a specific device, protocol and population", "No universal protocol and no automatic transfer between devices"],
  ["Breathing and regulation practices", "Breathing, movement, relaxation, sound or gentle touch", "Changes in experience or defined autonomic measures", "Not automatically direct or selective electrical VNS"],
  ["Trend and DIY claims", "Reset routines, pressure points or improvised procedures", "Claims and experiences can be evaluated", "The premise may be unsupported and some procedures require clinical monitoring"],
] as const;

export default function HowToStimulateTheVagusNervePage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-09-02",
    dateModified: "2026-09-05",
    keywords: [
      "how to stimulate the vagus nerve",
      "vagus nerve exercises",
      "vagus nerve stimulation",
      "breathing and the vagus nerve",
      "non-invasive VNS",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "How to stimulate the vagus nerve", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]" data-wave2d2a2-stimulation-pillar="en">
      <JsonLd data={structuredData} idPrefix="learn-how-to-stimulate-vagus-nerve" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
            Vagus nerve methods centre
          </p>
          <h1 className="mt-6 max-w-[18ch] text-[clamp(3rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            How to stimulate the vagus nerve: methods, evidence and important limits
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            The phrase can refer to different categories. Electrical VNS is distinct from breathing, movement, relaxation, sound and gentle touch, which may influence autonomic state without automatically constituting direct, selective vagus-nerve stimulation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/no/kunnskap/hvordan-stimulere-vagusnerven" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">
              Les på norsk
            </Link>
            <Link href="#method-map" className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90">
              Compare the method categories
            </Link>
          </div>
        </div>
      </section>

      <section id="method-map" className="scroll-mt-28 border-b border-black/5 bg-[#eee7dd] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Method map</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Four categories that should not be collapsed into one claim</h2>
          <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
            <table className="w-full min-w-[58rem] border-collapse text-left">
              <caption className="p-5 text-left text-sm text-[#625b52]">Four method categories often described as vagus stimulation</caption>
              <thead className="border-y border-black/8 bg-white/70">
                <tr>{["Method category", "What it is", "What evidence can show", "Important limits"].map((heading) => <th key={heading} className="p-4 text-sm font-medium">{heading}</th>)}</tr>
              </thead>
              <tbody>{methodRows.map((row) => <tr key={row[0]} className="border-b border-black/7 last:border-b-0">{row.map((cell) => <td key={cell} className="p-4 align-top text-sm leading-7 text-[#5f5a52]">{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className={`scroll-mt-28 border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20 ${index % 2 === 0 ? "bg-[#f7f4ef]" : "bg-[#eee7dd]"}`}>
          <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
            <div><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">{section.eyebrow}</p><p className="mt-3 text-sm text-[#8a8178]">{String(index + 1).padStart(2, "0")} / 10</p></div>
            <div>
              <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">{section.title}</h2>
              <div className="mt-8 max-w-3xl space-y-6">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-[#5f5a52] sm:text-lg">{paragraph}</p>)}</div>
              {section.id === "how-long-does-it-take" ? <p className="mt-8"><Link href="/learn/vagus-nerve-reset" className="font-medium underline underline-offset-4">Read what “vagus nerve reset” means—and why there is no universal seven-minute guarantee</Link></p> : null}
              {section.id === "electrical-vagus-nerve-stimulation" ? <p className="mt-8"><Link href="/learn/vagus-nerve-stimulation" className="font-medium underline underline-offset-4">Read the electrical VNS overview</Link></p> : null}
              {section.id === "breathing-and-autonomic-regulation" ? <div className="mt-8 flex flex-wrap gap-5"><Link href="/learn/breathing-exercises-and-the-vagus-nerve" className="font-medium underline underline-offset-4">Read the breathing evidence and limits guide</Link><Link href="/learn/how-to-calm-your-nervous-system" className="font-medium underline underline-offset-4">Explore nervous-system calming practices</Link></div> : null}
              {section.id === "ear-and-neck-stimulation" ? <div className="mt-8 flex flex-wrap gap-5"><Link href="/learn/auricular-vagus-nerve-stimulation" className="font-medium underline underline-offset-4">Auricular VNS</Link><Link href="/learn/vagus-nerve-massage" className="font-medium underline underline-offset-4">Read the massage evidence and safety guide</Link><Link href="/learn/implanted-vs-non-invasive-vagus-nerve-stimulation" className="font-medium underline underline-offset-4">Implanted vs non-invasive VNS</Link></div> : null}
              {section.id === "safety-and-methods-not-to-improvise" ? <p className="mt-8"><Link href="/research/topics/safety-and-tolerability" className="font-medium underline underline-offset-4">Review safety and tolerability evidence</Link></p> : null}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-black/5 bg-[#1f1f1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">Sources and limits</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Read the evidence at the level of the method that was actually studied</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">{sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="rounded-[1.25rem] border border-white/15 p-5 hover:bg-white/5"><p className="text-sm font-medium">{source.title}</p><p className="mt-2 text-sm leading-6 text-white/65">{source.publisher} · {source.publication} · {source.year}</p></a>)}</div>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-white/65">General educational information only. This page does not diagnose vagus-nerve dysfunction, prescribe a medical treatment or replace professional care. Product-specific frequency, duration, contraindications, precautions and stop-use rules remain governed by the applicable product information.</p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">One optional device pathway</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Where Neuvago may fit in the wider methods landscape</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52]">Neuvago can be considered as one non-invasive, ear-based electrical wellness option within its current intended use. It does not replace breathing, movement or professional care, and evidence from other systems does not automatically become evidence for Neuvago.</p>
          <div className="mt-8 flex flex-wrap gap-4"><Link href="/how-it-works" className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white">See how the system works</Link><Link href="/legal/intended-use" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium">Read intended use</Link></div>
        </div>
      </section>
    </main>
  );
}
