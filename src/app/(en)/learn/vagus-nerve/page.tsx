import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "Vagus nerve: what it is, what it does and why it matters";
const description =
  "Learn what the vagus nerve is, what it does, how it fits into the autonomic nervous system, and where to go deeper into anatomy, HRV and stimulation.";
const path = "/learn/vagus-nerve";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/vagusnerven",
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

type DirectAnswer = { question: string; answer: string };
type PageSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  answers?: readonly DirectAnswer[];
  bullets?: readonly string[];
};

const sections: readonly PageSection[] = [
  {
    id: "short-answer",
    eyebrow: "Direct answer and scope",
    title: "Short answer",
    paragraphs: [
      "The vagus nerve is the tenth cranial nerve and runs from the brainstem to structures in the neck, chest and abdomen. It participates in sensory, motor and autonomic functions and should not be reduced to a simple “calm switch.”",
      "Humans have a left and a right vagus nerve. The singular term is convenient, but the paired nerves branch repeatedly and contain different fibre types. They are better understood as part of a distributed, two-way communication system than as one uninterrupted cable controlling the whole body.",
      "This foundation page owns the broad question: what the vagus nerve is and what it does. A dedicated anatomy guide owns detailed location, course and branch intent, while separate guides cover ear anatomy, HRV, practical methods and electrical vagus nerve stimulation.",
    ],
    answers: [
      {
        question: "What is the vagus nerve?",
        answer:
          "The vagus nerve is cranial nerve X: a paired, mixed nerve system linking the brainstem with structures in the neck, chest and upper abdomen. It carries sensory, motor and parasympathetic fibres and participates in several reflex and regulatory networks.",
      },
    ],
  },
  {
    id: "definition-and-cranial-nerve-x",
    eyebrow: "Cranial nerve X",
    title: "What the vagus nerve is",
    paragraphs: [
      "The vagus nerve is the tenth of twelve paired cranial nerves. Anatomical sources use vagus nerve, nervus vagus and cranial nerve X for the same nerve system. The Roman numeral describes its place in the traditional cranial-nerve sequence; it does not identify one single function.",
      "There are two vagus nerves, one on each side. Left and right share a broad organisation but do not follow perfectly identical courses or produce identical branches. The recurrent laryngeal branches are a familiar example: the right and left sides loop around different structures before returning towards the larynx.",
      "Each vagus is a mixed nerve. It contains sensory fibres carrying information towards the central nervous system, motor fibres serving selected muscles of the pharynx and larynx, and preganglionic parasympathetic efferents whose signals are relayed through peripheral ganglia and local circuits. These fibre groups travel together for part of the route and then separate into branches with different destinations.",
      "The name vagus comes from Latin for wandering, reflecting the nerve’s extensive course. That historical label is not a functional theory. Likewise, calling it the body’s longest nerve without qualification is less useful than describing its unusually broad cranial-to-thoracoabdominal distribution and its many branches.",
      "The vagus does not form a single line between the brain and one organ. It is embedded in plexuses, communicates with other nerves and reaches tissues through region-specific branches. Descriptions that erase this organisation can make later claims about stimulation, symptoms or measurement appear more certain than the anatomy supports.",
    ],
    answers: [
      {
        question: "Do we have one vagus nerve or two?",
        answer:
          "We have a left and a right vagus nerve. “The vagus nerve” is commonly used as a collective term, but it should not be taken to mean one continuous cable. The two sides have related yet partly different courses and branches.",
      },
    ],
  },
  {
    id: "brainstem-to-body-course",
    eyebrow: "Anatomical course",
    title: "From the brainstem through the body",
    paragraphs: [
      "Vagal fibres connect with several nuclei in the medulla. The nucleus tractus solitarius receives much visceral sensory input. The dorsal motor nucleus contributes parasympathetic efferent fibres, while the nucleus ambiguus is associated with branchial motor and selected cardiac functions. A public foundation page does not need to turn these nuclei into a memorisation exercise; the important point is that different fibre types connect with different central circuits.",
      "The paired nerves leave the skull through the jugular foramina and descend on either side of the neck. Their cervical course is deep, close to major blood vessels and other nerves. It is therefore inaccurate to present the cervical vagus as a superficial point that a person can reliably find by pressing the skin. Relationships between the nerve and nearby structures also vary between individuals.",
      "In the head and neck, branches serve parts of the ear, pharynx and larynx and participate in sensory, motor and reflex functions. The auricular branch is only one contributor to the outer ear’s mixed innervation. Pharyngeal and laryngeal branches interact with other cranial and cervical pathways rather than acting as isolated lines.",
      "Within the chest, branches contribute to cardiac, pulmonary and oesophageal plexuses. The recurrent laryngeal nerves take asymmetric routes before ascending to the larynx. Around the oesophagus, vagal fibres reorganise into trunks that pass through the diaphragm and distribute connections to the stomach, bowel and associated upper-abdominal plexuses.",
      "The phrase “brain to gut” captures only part of this map. Vagal signalling is routed through branches, ganglia, plexuses and local organ networks. Not every thoracic or abdominal organ has the same innervation, and the anatomical reach of a branch does not imply complete control of the tissue it enters.",
    ],
    bullets: [
      "Brainstem: distinct nuclei receive and send different vagal signals.",
      "Skull base and neck: the nerves exit the skull and descend deeply on both sides.",
      "Chest: branches join cardiac, pulmonary and oesophageal networks.",
      "Upper abdomen: vagal connections enter distributed gastrointestinal and visceral circuits.",
    ],
    answers: [
      {
        question: "Where is the vagus nerve?",
        answer:
          "The left and right vagus nerves begin in the brainstem region, leave the skull and descend deep in the neck before continuing into the chest and upper abdomen. They divide into many branches; they are not one superficial pressure point that can be located or tested with the fingers.",
      },
    ],
  },
  {
    id: "afferent-efferent-and-mixed-fibres",
    eyebrow: "Two-way signalling",
    title: "Signals in both directions",
    paragraphs: [
      "The vagus nerves carry information towards and away from the central nervous system. Afferent means travelling towards the brain and spinal cord. Efferent means travelling from the central nervous system towards peripheral targets. These words describe direction, not whether a signal is beneficial, calming, uncomfortable or clinically important.",
      "Vagal afferents include sensory pathways from defined internal tissues and mucosal surfaces. Efferent groups include motor fibres to selected muscles of the pharynx and larynx and parasympathetic fibres that act through peripheral relays. Calling all vagal traffic “parasympathetic” therefore leaves out major sensory and motor components.",
      "Popular explanations often state that about four fifths of vagal fibres are afferent. That can be a useful teaching estimate, but it is not a universal measurement for every person, side, level or branch. Proportions depend on what is counted, where the sample is taken, the species and the method. The defensible foundation claim is that a large share of vagal communication is sensory while efferent pathways remain functionally important.",
      "Vagal sensory neurons are not one homogeneous population. Experimental atlases identify specialised cellular groups related to different organs and signal types. Such work helps explain functional diversity, but animal cell proportions and molecular maps should not be copied directly into universal claims about human branches.",
      "Because direction and fibre identity matter, an observation in one organ does not establish a whole-nerve state. A change in heart rate, digestion, voice or subjective calm cannot by itself reveal which vagal fibres were active or whether the vagus caused the change.",
    ],
  },
  {
    id: "organs-branches-and-territories",
    eyebrow: "Function families",
    title: "Branches and organ territories",
    paragraphs: [
      "The paired vagus nerves participate in several function families because they contain many branches and fibre types. Participate is the careful term: organ function emerges from vagal and non-vagal nerves, brainstem and spinal circuits, local plexuses, hormones, muscles and the organs’ own mechanisms. Innervation is not complete or exclusive control.",
      "Pharyngeal and laryngeal branches contribute to swallowing, voice and airway protection. Cardiac branches participate in selected aspects of heart-rate and reflex regulation. Pulmonary and airway pathways carry sensory and autonomic signals. Oesophageal and gastrointestinal branches take part in motility, secretion, stretch, nutrient and satiety signalling through interaction with enteric and local networks.",
      "The territories are not interchangeable. Motor control of the larynx, sensory signalling from the gut and parasympathetic influence on the heart involve different fibres and circuits. A result measured in one domain should not be used as proof that all vagal functions changed in the same direction.",
      "This distinction also matters for symptoms. Hoarseness, swallowing difficulty, palpitations, nausea, bowel changes, dizziness or fainting can arise from many causes. A symptom list on a website cannot identify vagal injury or dysfunction, and the absence of one symptom cannot confirm that every vagal branch is functioning normally.",
      "Clinical examination of cranial nerve X is therefore task-specific. Voice, palate movement, swallowing, cough and cardiovascular responses may each provide different information. Assessment depends on history, examination and sometimes targeted investigations rather than one home test or wearable score.",
    ],
    answers: [
      {
        question: "What does the vagus nerve do?",
        answer:
          "The vagus nerves carry visceral sensory information, contribute motor fibres to the pharynx and larynx, and provide parasympathetic pathways to selected thoracic and abdominal targets. They participate in swallowing, voice, protective reflexes, cardiac regulation, airway signalling and digestion, but they do not control those systems alone.",
      },
    ],
  },
  {
    id: "autonomic-and-parasympathetic-role",
    eyebrow: "Part of a larger system",
    title: "The vagus nerve in the autonomic nervous system",
    paragraphs: [
      "The autonomic nervous system helps regulate functions that largely operate without conscious command. Sympathetic and parasympathetic pathways work alongside the enteric nervous system, central networks, hormones and local organ mechanisms. Vagal efferents are an important parasympathetic route to several organs, but they are not the whole autonomic system.",
      "Parasympathetic activity is often associated with digestion, energy conservation and selected restorative processes. It is not a synonym for a felt state of calm, safety or sleep. Different organs can receive different patterns of autonomic input, and sympathetic and parasympathetic activity are not always simple opposites moving on one shared dial.",
      "Other cranial nerves carry parasympathetic fibres to structures in the head, and sacral pathways serve pelvic organs. Peripheral ganglia and enteric circuits also shape the final response. This is why “vagus nerve equals parasympathetic nervous system” is anatomically incomplete.",
      "Stress, sleep, pain, mood and recovery involve distributed brain and body systems. Vagal pathways may contribute to parts of that picture, but one nerve cannot explain why a person feels activated, sleeps poorly or recovers slowly. A useful foundation account keeps the vagus important without making it the sole cause of broad human experiences.",
      "Autonomic language should also avoid moral ranking. Higher or lower activity is not automatically better in every organ or situation. Adaptive regulation depends on context, timing, demand and the ability of multiple systems to change appropriately.",
    ],
    answers: [
      {
        question: "Is the vagus nerve the same as the parasympathetic nervous system?",
        answer:
          "No. Vagal efferents are a major parasympathetic pathway to several organs, but parasympathetic regulation also includes other cranial nerves, sacral pathways, peripheral ganglia and local circuits. The broader autonomic system includes sympathetic and enteric components as well.",
      },
      {
        question: "Is the vagus nerve a “calm switch” or “reset button”?",
        answer:
          "No. Those phrases are metaphors, not a single biological switch that resets the body or always makes someone calm. Effects depend on the fibres, branch, target organ, reflex circuit and the person’s wider physiological context.",
      },
    ],
  },
  {
    id: "reflexes-interoception-and-homeostasis",
    eyebrow: "Body–brain integration",
    title: "Reflexes, interoception and homeostasis",
    paragraphs: [
      "Many vagal afferents report conditions within the body. Specialised endings can respond to mechanical or chemical features in particular tissues and carry that information to the brainstem. The incoming signals are integrated with other sensory pathways and may contribute to reflexes, autonomic responses and wider brain processing.",
      "Interoception refers to sensing and interpreting the internal state of the body. Vagal pathways contribute to parts of this information stream, but interoception also uses spinal pathways, other cranial nerves, circulating signals, hormones and local receptors. Hunger, fullness, nausea, breathing effort and awareness of the heartbeat should not be assigned to one nerve alone.",
      "Homeostasis describes distributed processes that keep important variables within workable ranges. Neural, endocrine, immune, behavioural and local mechanisms all participate. Vagal reflex arcs can form part of this regulation, but homeostasis is not one vagus mechanism or a control panel that can be manually switched on.",
      "The inflammatory reflex is an influential mechanistic framework for neural contributions to immune regulation. The precise anatomy and relay pathways, including how splenic effects are mediated, have also been debated. Mechanistic and animal evidence is not the same as proof that a common wellness practice or a particular device treats systemic inflammation in people.",
      "Reflex language can create false certainty when the stimulus and outcome are not specified. Cough, gagging, heart-rate responses and digestive signalling use different receptors and circuits. Demonstrating one response does not establish that the entire vagus was activated or that a desired clinical outcome will follow.",
    ],
    answers: [
      {
        question: "What happens when the vagus nerve is activated?",
        answer:
          "There is no single universal result. Activation can refer to activity in different sensory, motor or parasympathetic fibres, on either side, within different branches and target organs. It may be part of a sensation, movement or autonomic reflex; it does not automatically mean calm or one particular feeling.",
      },
    ],
  },
  {
    id: "vagal-tone-hrv-and-measurement-limits",
    eyebrow: "Measurement and interpretation",
    title: "Vagal tone, HRV and measurement limits",
    paragraphs: [
      "Vagal tone is used differently across disciplines. In cardiac physiology it may refer to vagal influence on the sinus node under defined conditions. In consumer language it is sometimes treated as though the entire vagus nerve has one measurable strength. That broader meaning is too imprecise to serve as a diagnosis or an overall health score.",
      "Heart-rate variability, or HRV, describes variation in the time intervals between heartbeats. Under controlled conditions, selected HRV measures can be used as operational indicators of aspects of cardiac vagal modulation. They do not directly measure the whole vagus nerve, reveal how every branch functions or diagnose vagal damage or autonomic disease on their own.",
      "Respiration changes the timing of heartbeats. The term respiratory heart-rate variability, RespHRV, can make that component explicit and has been recommended as a clearer term than respiratory sinus arrhythmia in some contexts. RespHRV and RSA still are not direct whole-nerve measurements of “vagal tone”. Breathing rate, tidal volume, posture and analysis choices affect the result.",
      "Recording duration, signal quality, artefact handling and the selected time- or frequency-domain metric also matter. Age, fitness, sleep, illness, medication, time of day, recent activity and emotional or cognitive demand can alter a reading. A number without a standardised context can easily be overinterpreted.",
      "A wearable can support personal trend observation, but it cannot label a vagus nerve as weak, damaged, overactive or successfully reset. Comparisons within the same person under similar conditions are generally more interpretable than ranking different people by a single score, and even repeated trends remain indirect.",
      "A study that directly recorded tonic vagus activity in rats did not find the assumed relationship with common HRV measures. The animal result is not a universal clinical rule for humans, but it reinforces a central measurement boundary: cardiac timing metrics and electrical activity across the entire nerve are not the same variable.",
    ],
    bullets: [
      "Specify the HRV metric, recording length and artefact method.",
      "Record breathing conditions when respiratory effects matter.",
      "Avoid turning population associations into a personal diagnosis.",
      "Treat consumer-device trends as context-dependent and indirect.",
    ],
    answers: [
      {
        question: "Can HRV measure whether the vagus nerve is working?",
        answer:
          "No single HRV value tests the whole vagus nerve. Some HRV measures can reflect aspects of cardiac vagal modulation under defined conditions, but breathing, posture, activity, age, health, medication and analysis method influence the result. HRV cannot by itself diagnose vagal injury or function across all branches.",
      },
    ],
  },
  {
    id: "stimulation-wellness-and-medical-boundaries",
    eyebrow: "Separate anatomy from intervention",
    title: "Stimulation, wellness and medical boundaries",
    paragraphs: [
      "Anatomy explains why the vagus is scientifically interesting; it does not prove that every practice described as “vagal” reaches the nerve or produces a health benefit. Slow breathing, relaxation, movement, sound, cold exposure, gargling, touch and massage have different mechanisms and evidence bases. They should not be presented as interchangeable methods for selectively stimulating the entire vagus nerve.",
      "Electrical vagus nerve stimulation is a distinct category. Implanted cervical systems, non-invasive cervical devices and transcutaneous auricular approaches differ in location, hardware, waveform, intensity, timing, control condition, population and intended use. Evidence from one modality, protocol or indication cannot automatically be transferred to another.",
      "Research recommendations for transcutaneous VNS emphasise transparent reporting of stimulation site, electrode, parameters, sham or control, participant characteristics and outcomes. That level of specificity is necessary because the phrase vagus nerve stimulation alone does not identify what was delivered or what can reasonably be inferred.",
      "Regulatory decisions are equally device- and indication-specific. An authorisation for one named product is not authorisation for every vagus-related product, and general anatomy or external VNS literature is not automatically product evidence for Neuvago. Product claims require the product’s own specifications, intended use, safety documentation and directly relevant evidence.",
      "This page therefore teaches no breathing protocol, pressure point, massage sequence, electrical settings or self-test. Those topics have separate, bounded pages where the actual method and safety limits can be stated. A sensation such as warmth, tingling, yawning, sighing, belching or calm is not proof that a specific vagal target was engaged.",
      "New or persistent swallowing difficulty, voice change, fainting, marked dizziness, unexplained neurological symptoms or concerns about nerve injury require qualified medical assessment rather than online self-labelling. Sudden neurological symptoms, collapse or other acute warning signs should follow local emergency guidance.",
    ],
  },
  {
    id: "further-reading-and-sources",
    eyebrow: "Evidence map",
    title: "Further reading and sources",
    paragraphs: [
      "The sources below cover eleven evidence areas used for this foundation page. They include gross and functional anatomy, mixed fibres, central pathways, organ territories, autonomic context, interoception and major function families. They also cover HRV and RespHRV limits, neuroimmune claims, clinical boundaries and the distinction between anatomy, VNS and product evidence.",
      "The same sixteen reader-visible sources appear on both language versions. They include authoritative references, reviews, recommendations, primary research, a critical review and an official regulatory example. A source supports only the claim families for which it was reviewed; inclusion does not imply endorsement of Neuvago or every conclusion in the publication.",
      "This is a dated editorial evidence review rather than a systematic review, clinical guideline or individual medical assessment. Reviewed and modified 5 September 2026. General educational information does not replace diagnosis, treatment or personalised advice from a qualified professional.",
    ],
  },
];

const organRows = [
  ["Pharynx and larynx", "Motor and sensory contributions to swallowing, voice and protective reflexes", "Several branches, muscles and central circuits participate"],
  ["Heart and circulation", "Parasympathetic influence on selected heart-rate and reflex processes", "The vagus is not the sole controller of heart rate or blood pressure"],
  ["Lungs and airways", "Sensory and autonomic signalling related to airways and protective responses", "Breathing rhythm arises from a broader respiratory network"],
  ["Oesophagus and stomach", "Signals related to stretch, movement, chemistry and satiety", "Enteric, hormonal and local regulation remain essential"],
  ["Bowel and upper abdomen", "Visceral sensory and parasympathetic connections to selected territories", "Not every organ or bowel segment has the same vagal supply"],
] as const;

const sources = [
  { id: "A-001", title: "Neuroanatomy, Cranial Nerve 10 (Vagus Nerve)", publisher: "Kenny BJ, Bordoni B", publication: "StatPearls / PubMed", year: 2026, url: "https://pubmed.ncbi.nlm.nih.gov/30725856/" },
  { id: "A-003", title: "Redefining respiratory sinus arrhythmia as respiratory heart rate variability: an international Expert Recommendation for terminological clarity", publisher: "Menuet C et al.", publication: "Nature Reviews Cardiology / PubMed", year: 2025, url: "https://pubmed.ncbi.nlm.nih.gov/40328963/" },
  { id: "A-004", title: "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)", publisher: "Farmer AD et al.", publication: "Frontiers in Human Neuroscience / PubMed", year: 2021, url: "https://pubmed.ncbi.nlm.nih.gov/33854421/" },
  { id: "A-005", title: "gammaCore Non-invasive Vagus Nerve Stimulator — De Novo DEN150048", publisher: "US Food and Drug Administration", publication: "FDA De Novo database", year: 2017, url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/denovo.cfm?ID=DEN150048" },
  { id: "B-001", title: "Functional and chemical anatomy of the afferent vagal system", publisher: "Berthoud HR, Neuhuber WL", publication: "Autonomic Neuroscience / PubMed", year: 2000, url: "https://pubmed.ncbi.nlm.nih.gov/11189015/" },
  { id: "B-002", title: "Functional anatomy of the vagus system — Emphasis on the somato-visceral interface", publisher: "Neuhuber WL, Berthoud HR", publication: "Autonomic Neuroscience / PubMed", year: 2021, url: "https://pubmed.ncbi.nlm.nih.gov/34634680/" },
  { id: "B-003", title: "Internal senses of the vagus nerve", publisher: "Prescott SL, Liberles SD", publication: "Neuron / PubMed", year: 2022, url: "https://pubmed.ncbi.nlm.nih.gov/35051375/" },
  { id: "B-004", title: "An Atlas of Vagal Sensory Neurons and Their Molecular Specialization", publisher: "Kupari J et al.", publication: "Cell Reports / PubMed", year: 2019, url: "https://pubmed.ncbi.nlm.nih.gov/31116992/" },
  { id: "B-005", title: "Overview of the Anatomy, Physiology, and Pharmacology of the Autonomic Nervous System", publisher: "Wehrwein EA, Orer HS, Barman SM", publication: "Comprehensive Physiology / PubMed", year: 2016, url: "https://pubmed.ncbi.nlm.nih.gov/27347892/" },
  { id: "B-006", title: "Visceral influences on brain and behavior", publisher: "Critchley HD, Harrison NA", publication: "Neuron / PubMed", year: 2013, url: "https://pubmed.ncbi.nlm.nih.gov/23439117/" },
  { id: "B-010", title: "Heart Rate Variability and Cardiac Vagal Tone in Psychophysiological Research", publisher: "Laborde S, Mosley E, Thayer JF", publication: "Frontiers in Psychology / PubMed", year: 2017, url: "https://pubmed.ncbi.nlm.nih.gov/28265249/" },
  { id: "B-011", title: "Pitfalls of assessment of autonomic function by heart rate variability", publisher: "Hayano J, Yuda E", publication: "Journal of Physiological Anthropology / PubMed", year: 2019, url: "https://pubmed.ncbi.nlm.nih.gov/30867063/" },
  { id: "B-012", title: "Direct measurement of vagal tone in rats does not show correlation to HRV", publisher: "Marmerstein JT, McCallum GA, Durand DM", publication: "Scientific Reports / PubMed", year: 2021, url: "https://pubmed.ncbi.nlm.nih.gov/33441733/" },
  { id: "B-013", title: "Toward understanding respiratory sinus arrhythmia", publisher: "Grossman P, Taylor EW", publication: "Biological Psychology / PubMed", year: 2007, url: "https://pubmed.ncbi.nlm.nih.gov/17081672/" },
  { id: "B-014", title: "The inflammatory reflex", publisher: "Tracey KJ", publication: "Nature / PubMed", year: 2002, url: "https://pubmed.ncbi.nlm.nih.gov/12490958/" },
  { id: "B-015", title: "The cholinergic anti-inflammatory pathway: a critical review", publisher: "Martelli D, McKinley MJ, McAllen RM", publication: "Autonomic Neuroscience / PubMed", year: 2014, url: "https://pubmed.ncbi.nlm.nih.gov/24411268/" },
] as const;

export default function VagusNervePage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-08-17",
    dateModified: "2026-09-11",
    keywords: [
      "vagus nerve",
      "what is the vagus nerve",
      "cranial nerve X",
      "left and right vagus nerve",
      "what does the vagus nerve do",
      "vagal tone",
      "HRV and vagus nerve",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Vagus nerve", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]" data-wave2d2e2-foundation-page="en">
      <JsonLd data={structuredData} idPrefix="learn-vagus-nerve" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">Foundation guide · cranial nerve X</p>
          <h1 className="mt-6 max-w-[18ch] text-[clamp(3rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            The vagus nerve: what it is, what it does and why it matters
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            The paired vagus nerves are cranial nerve X: a mixed sensory, motor and parasympathetic system. This foundation answers the broad definition-and-function question and routes detailed anatomy, measurement and stimulation intent to dedicated guides.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/no/kunnskap/vagusnerven" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">Les på norsk</Link>
            <Link href="#short-answer" className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90">Read the direct answer</Link>
            <Link href="/learn/vagus-nerve-anatomy" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">Detailed anatomy</Link>
            <Link href="/learn/vagus-nerve-in-the-ear" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">Vagus nerve in the ear</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd] px-5 py-14 sm:px-8 lg:px-12 lg:py-16" data-wave2d2e2-direct-answer="en">
        <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Direct answer</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-[#3d3934] sm:text-2xl">
            The vagus nerve is the tenth cranial nerve and runs from the brainstem to structures in the neck, chest and abdomen. It participates in sensory, motor and autonomic functions and should not be reduced to a simple “calm switch.”
          </p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className={`scroll-mt-28 border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20 ${index % 2 === 0 ? "bg-[#f7f4ef]" : "bg-[#eee7dd]"}`}>
          <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">{section.eyebrow}</p>
              <p className="mt-3 text-sm text-[#8a8178]">{String(index + 1).padStart(2, "0")} / 10</p>
            </div>
            <div className="min-w-0">
              <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">{section.title}</h2>
              <div className="mt-8 max-w-3xl space-y-6">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[#5f5a52] sm:text-lg">{paragraph}</p>
                ))}
              </div>

              {section.bullets ? (
                <ul className="mt-8 max-w-3xl space-y-3 rounded-[1.5rem] border border-black/8 bg-white/70 p-6">
                  {section.bullets.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-[#5f5a52]"><span aria-hidden="true">—</span><span>{item}</span></li>)}
                </ul>
              ) : null}

              {section.answers?.map((answer) => (
                <div key={answer.question} className="mt-8 rounded-[1.5rem] border border-black/8 bg-white/70 p-6" data-direct-answer-question={answer.question}>
                  <h3 className="text-xl font-medium tracking-[-0.025em]">{answer.question}</h3>
                  <p className="mt-3 text-base leading-8 text-[#5f5a52]">{answer.answer}</p>
                </div>
              ))}

              {section.id === "organs-branches-and-territories" ? (
                <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
                  <table className="w-full min-w-[56rem] border-collapse text-left">
                    <caption className="p-5 text-left text-sm text-[#625b52]">Examples of vagal territories and the interpretation boundary</caption>
                    <thead className="border-y border-black/8 bg-white/70"><tr>{["Territory", "Examples of vagal contribution", "Important limit"].map((heading) => <th key={heading} className="p-4 text-sm font-medium">{heading}</th>)}</tr></thead>
                    <tbody>{organRows.map((row) => <tr key={row[0]} className="border-b border-black/7 last:border-b-0">{row.map((cell) => <td key={cell} className="p-4 align-top text-sm leading-7 text-[#5f5a52]">{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              ) : null}

              {section.id === "short-answer" ? <div className="mt-8 flex flex-wrap gap-5"><Link href="/learn/how-to-stimulate-the-vagus-nerve" className="font-medium underline underline-offset-4">Explore the methods overview</Link><Link href="/learn/vagus-nerve-stimulation" className="font-medium underline underline-offset-4">Read the electrical VNS overview</Link></div> : null}
              {section.id === "brainstem-to-body-course" ? <div className="mt-8 flex flex-wrap gap-5"><Link href="/learn/vagus-nerve-anatomy" className="font-medium underline underline-offset-4">Go deeper into vagus nerve anatomy and branches</Link><Link href="/learn/vagus-nerve-in-the-ear" className="font-medium underline underline-offset-4">Explore the auricular branch and ear anatomy</Link></div> : null}
              {section.id === "autonomic-and-parasympathetic-role" ? <p className="mt-8"><Link href="/learn/nervous-system-regulation" className="font-medium underline underline-offset-4">Explore the broader nervous-system regulation framework</Link></p> : null}
              {section.id === "vagal-tone-hrv-and-measurement-limits" ? <p className="mt-8"><Link href="/learn/vagal-tone" className="font-medium underline underline-offset-4">Read the dedicated vagal-tone and measurement guide</Link></p> : null}
              {section.id === "stimulation-wellness-and-medical-boundaries" ? <div className="mt-8 flex flex-wrap gap-5"><Link href="/learn/vagus-nerve-reset" className="font-medium underline underline-offset-4">Understand reset language</Link><Link href="/learn/breathing-exercises-and-the-vagus-nerve" className="font-medium underline underline-offset-4">Read the breathing evidence guide</Link><Link href="/learn/vagus-nerve-massage" className="font-medium underline underline-offset-4">Read the massage evidence and safety guide</Link></div> : null}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-black/5 bg-[#1f1f1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20" data-wave2d2e2-sources="en">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">Reader-visible sources</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Read claims at the level of the fibre, branch, measure and intervention</h2>
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
            Reviewed and modified 5 September 2026. General educational information only. This page does not diagnose vagal injury or dysfunction, teach a stimulation protocol, provide medical clearance or replace individual care. General anatomy, HRV, inflammation or VNS research is not automatically product evidence for Neuvago.
          </p>
        </div>
      </section>
    </main>
  );
}
