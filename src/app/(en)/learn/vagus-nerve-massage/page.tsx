import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "Vagus nerve massage: evidence and safety limits | Neuvago";
const description =
  "An evidence-based guide to vagus nerve massage, pressure points, ear and neck touch, carotid-sinus safety and the boundary with electrical VNS.";
const path = "/learn/vagus-nerve-massage";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/vagusnerven-og-massasje",
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
    "eyebrow": "Direct answer and boundary",
    "title": "Can you massage the vagus nerve?",
    "paragraphs": [
      "People can massage skin and muscles around the neck, face or ear, but that is not the same as directly massaging the vagus nerve. The nerve is not a superficial cord that can safely be reached with the fingers. “Vagus nerve massage” is a popular umbrella phrase for several different practices, and each needs to be named before evidence or safety can be assessed.",
      "Strong pressure over the carotid sinus should not be taught as a self-treatment. Carotid sinus massage is a clinician-directed medical manoeuvre used in selected diagnostic settings with assessment, contraindications and monitoring. It should not be converted into a home technique from an online article.",
      "Gentle touch or muscle massage may feel relaxing, and some massage studies report changes in heart rate or HRV-related measures after defined protocols. Those outcomes are not proof of direct or selective vagus target engagement, and they do not establish one universal point, pressure or sequence."
    ],
    "answers": [
      {
        "question": "Can you massage the vagus nerve?",
        "answer": "You can gently touch skin and massage muscles, but that is not the same as literally massaging the vagus nerve. Do not use strong pressure over the carotid artery or carotid sinus, and do not self-administer carotid sinus massage."
      }
    ]
  },
  {
    "id": "what-people-mean",
    "eyebrow": "Define the practice first",
    "title": "What people mean by “vagus nerve massage”",
    "paragraphs": [
      "“Vagus nerve massage” is a search phrase rather than a precise anatomical or medical method. Some people mean ordinary neck massage; others mean facial or jaw touch, outer-ear pressure, acupressure, reflexology or a manoeuvre they saw described as vagal. Without identifying the action, the phrase conceals differences in tissue, intensity, purpose and risk.",
      "The first useful question is what is actually being done. Light skin contact is different from working muscle. Ear touch is different from electrical auricular stimulation. A monitored clinical test is different from a wellness routine. Similar language does not make these methods equivalent.",
      "The second question is what was measured. A participant may report calm or less tension; heart rate or an HRV metric may change. These outcomes can matter, but they do not identify one nerve as the cause, establish selective engagement or guarantee the same response in another population or protocol.",
      "Precise language helps rather than hinders practical guidance. It separates low-intensity touch from hazardous neck pressure and prevents a familiar label from being mistaken for established mechanism. This page therefore treats “vagus nerve massage” as a claim to clarify, not an anatomical fact."
    ]
  },
  {
    "id": "anatomy-and-what-is-touched",
    "eyebrow": "Anatomy and depth",
    "title": "What are you actually touching—and where is the vagus nerve in the neck?",
    "paragraphs": [
      "A hand placed on the neck or face first contacts skin, subcutaneous tissue, fascia and superficial structures. Massage mainly acts on soft tissue and muscle. The cervical vagus nerve lies deeper within the neck near major vessels and other nerves. It is not a superficial point that should be located by pressing until a sensation appears.",
      "Anatomical studies also report variation in the relationship between the cervical vagus and surrounding vessels. The textbook arrangement does not describe every person, and ultrasound studies identify side differences and atypical positions. That variability is a reason not to publish palpation coordinates or promise that one pressure point reaches the same structure in everyone.",
      "Touch may still have physiological and experiential effects through skin, muscle, sensory nerves, attention, expectation, breathing and circulation. A broad response to touch or relaxation is not the same as verified direct and selective activation of the cervical vagus nerve.",
      "For general relaxation, it is more accurate to describe gentle touch, muscle massage or a comfort routine than to say that the vagus nerve was found and massaged. The foundation page explains the nerve’s course; the methods overview separates manual practices from electrical vagus nerve stimulation."
    ],
    "answers": [
      {
        "question": "Where is the vagus nerve in the neck?",
        "answer": "The cervical vagus runs deep in the neurovascular structures of the neck and varies anatomically. A general website should not give coordinates for self-palpation or deep compression."
      }
    ]
  },
  {
    "id": "neck-and-carotid-sinus",
    "eyebrow": "The critical neck boundary",
    "title": "The neck, carotid artery and carotid sinus: what not to do at home",
    "paragraphs": [
      "The neck contains the airway, major blood vessels, nerves, thyroid tissue, lymphatic structures and many muscles in a small space. Deep compression at the front or side of the neck cannot be reduced to a harmless “vagus point”, especially when direction, force and individual anatomy are unknown.",
      "The carotid sinus is a pressure-sensitive area involved in cardiovascular reflexes. Carotid sinus massage is used by qualified clinicians in selected syncope assessments. Guidelines and consensus documents address patient selection, contraindications, monitoring and clinical method. Those safeguards are precisely why it is not a consumer wellness exercise.",
      "This page provides no finger placement, side choice, duration or pressure for carotid sinus massage. It also does not recommend deep-tissue work, forceful manipulation, percussion, vibration or a massage gun over the front or side of the neck. Omitting a technique is an intentional safety boundary.",
      "Rare case reports cannot estimate the risk of ordinary gentle touch. They can nevertheless support a conservative boundary against forceful neck manoeuvres and devices over vascular structures. Sudden facial droop, one-sided weakness or numbness, new speech difficulty, sudden severe unusual headache, collapse or suspected stroke or TIA requires urgent medical help."
    ],
    "answers": [
      {
        "question": "What is carotid sinus massage?",
        "answer": "It is a clinician-directed diagnostic manoeuvre used in selected medical settings with assessment and monitoring. It is not a routine wellness technique and should not be self-administered."
      },
      {
        "question": "Where should you not press hard?",
        "answer": "Avoid strong or deep pressure at the front and side of the neck, particularly over the carotid artery or carotid sinus. Do not use percussion, strong vibration or a massage gun there."
      }
    ]
  },
  {
    "id": "ear-touch-and-mixed-innervation",
    "eyebrow": "The ear is not one nerve point",
    "title": "Ear touch, mixed innervation and the boundary with taVNS",
    "paragraphs": [
      "The outer ear receives sensory input from several cranial and cervical nerves. Anatomical maps may identify regions where auricular vagal fibres can contribute, but the distribution is heterogeneous and differs across people and studies. A map does not guarantee that a manual pressure point reaches one nerve branch or produces a specific autonomic effect.",
      "Light outer-ear touch can be an optional, low-intensity part of a calm routine when it is comfortable and easy to stop. It should be described as ear touch—not as certain stimulation of a single anatomical vagus point. Painful squeezing or symptom provocation has no role in general wellness guidance.",
      "Transcutaneous auricular vagus nerve stimulation, or taVNS, is a different category. It uses electrodes, electrical parameters, specified placement and a protocol. Manual ear touch is not a low-tech replica of taVNS, and electrical-stimulation findings cannot automatically be transferred to massage or acupressure.",
      "This massage page also does not determine Neuvago electrode placement. Any final ear-anatomy or electrode-contact instruction must be created manually with the real device. AI-generated pressure-point maps or definitive placement diagrams should not be used as final instructional assets."
    ],
    "answers": [
      {
        "question": "Can ear massage stimulate the vagus nerve?",
        "answer": "Ear touch may feel pleasant, but the outer ear has mixed innervation and manual contact is not the same as electrical taVNS. The sources do not establish one universal manual vagus point."
      }
    ]
  },
  {
    "id": "pressure-points-and-acupressure",
    "eyebrow": "Named traditions and evidence",
    "title": "Pressure points, acupressure and reflexology are not anatomical proof",
    "paragraphs": [
      "Acupressure and reflexology use named points or zones from their own traditions. A study may test whether a protocol changes a symptom score, experience or physiological outcome. Even when an outcome changes, that does not automatically show that the point corresponds to vagus anatomy or that the nerve was selectively engaged.",
      "Meta-analyses of auricular acupressure can combine studies with different points, materials, pressure schedules, durations, controls and participants. Heterogeneity makes it essential to keep the conclusion at the level actually measured. A change in self-reported anxiety is not anatomical confirmation of a “vagus point”.",
      "A pressure point is not automatically safe because it is described as natural or traditional. Neck location, force, duration, underlying disease and medication can alter risk. This page therefore gives no coordinates, pressure grades or sequences for neck-based points.",
      "When social content mentions a vagus point, reset point, ear point or “vagus button”, ask what structure is claimed, which study supports it, what outcome was measured and whether the method was manual, electrical or clinical. Without those details, the claim remains uncertain."
    ],
    "answers": [
      {
        "question": "Is there a vagus nerve pressure point?",
        "answer": "Different traditions name pressure points, but the sources do not establish one universal, manually accessible and anatomically validated vagus point that guarantees an effect."
      }
    ]
  },
  {
    "id": "what-massage-studies-show",
    "eyebrow": "Outcome before mechanism",
    "title": "What massage studies can show—and what they cannot prove",
    "paragraphs": [
      "Massage studies test diverse interventions: myofascial treatment, rhythmic massage, relaxation massage or touch at specified sites. They may measure heart rate, blood pressure, HRV, pain, sleep, stress or perceived calm. Results must be interpreted according to the exact protocol, control condition, participants and measurement time.",
      "Small studies in healthy participants have reported changes in selected cardiac autonomic measures after massage. Such results can support a complex interaction among touch, muscle tension, expectation, breathing and circulation. They do not necessarily isolate the vagus nerve as the cause or establish treatment effects in clinical populations.",
      "HRV needs particular caution. It is influenced by breathing, posture, recording length, activity, time, analysis and other factors. Expert recommendations on RespHRV warn against reducing respiratory heart-rate variation to a score for the whole vagus nerve. A post-massage change is a context-dependent measurement, not proof of selective target engagement.",
      "Perceived calm is a valid experience but not a mechanism test. It may relate to a pause, safe context, expectation, reduced muscle tension or other sensory input. The experience can be described honestly without claiming that the vagus nerve was proven to be stimulated.",
      "Massage, acupressure and electrical-VNS research is not automatically evidence for Neuvago. Product claims must match the actual device, intended use and product-specific documentation. This page is general educational information only and does not provide diagnosis, treatment, medical clearance or a personalised recommendation."
    ],
    "answers": [
      {
        "question": "Can neck massage calm the nervous system?",
        "answer": "Neck or shoulder massage may feel relaxing, and some protocols are associated with changes in reported or cardiac measures. That does not prove that the cervical vagus nerve was directly massaged or selectively stimulated."
      }
    ]
  },
  {
    "id": "gentle-practical-boundaries",
    "eyebrow": "Low-risk touch, not target hunting",
    "title": "Gentle practical boundaries for touch and massage",
    "paragraphs": [
      "A general guide can describe low-intensity touch without becoming a treatment protocol. The principles are simple: contact should be light, superficial, brief, comfort-led, easy to stop and away from the carotid sinus and the front or side of the neck. The aim is not to provoke a particular bodily reaction.",
      "Optional examples include gentle facial or jaw touch, light outer-ear contact without a point claim, shoulder or upper-back muscle massage, or very light contact with muscles at the back of the neck without manipulation. These are examples of comfortable touch—not vagus-specific prescriptions.",
      "Avoid pain, deep-tissue compression over vascular structures, breath holding, straining and device-assisted percussion or vibration at the neck. Do not try to locate an artery or nerve, and do not use pulse change, tingling or dizziness as proof that a method is working. Stronger or more painful is not better.",
      "People with prior stroke or TIA, recurrent fainting or unexplained syncope, vascular disease, heart-rhythm concerns, anticoagulant use or a bleeding disorder, an implanted electronic device, recent neck injury or surgery, or unexplained severe head or neck pain should not use a general webpage as medical clearance."
    ]
  },
  {
    "id": "safety-stop-and-care-boundaries",
    "eyebrow": "Stop, advice and urgent care",
    "title": "When to stop—and when symptoms require medical help",
    "paragraphs": [
      "Stop touch or massage if it causes pain, marked dizziness, faintness, visual change, speech change, weakness, numbness, a severe unusual headache, chest pain, palpitations or breathlessness. These symptoms should not be reframed as desirable “vagus activation” or evidence that a point has been found.",
      "Seek urgent medical help for sudden facial droop, one-sided weakness or numbness, new speech difficulty, a sudden severe unusual headache, collapse or suspected stroke or TIA. Do not continue pressing, massaging or manipulating the area while waiting for help.",
      "Professional advice is also appropriate before experimenting with neck techniques if you have had stroke or TIA, recurrent syncope, vascular disease, rhythm concerns, take anticoagulants, have a bleeding disorder, use an implanted electronic device, recently injured or had surgery on the neck, or have unexplained severe head or neck pain.",
      "A general article cannot provide a complete individual safety assessment. Absence of a risk factor from this list does not automatically make a practice suitable. When uncertain, do not turn low-risk touch into deep or targeted neck manipulation; ask a qualified professional.",
      "This boundary applies to massage content. It does not create product-specific contraindications, placement, intensity or stop rules for Neuvago beyond the published product documentation. Electrical stimulation and manual touch remain separate categories."
    ],
    "answers": [
      {
        "question": "When should you stop and get medical help?",
        "answer": "Stop for pain, marked dizziness, faintness, neurological changes, chest pain, palpitations or breathlessness. Sudden stroke/TIA signs, collapse or a severe unusual headache require urgent medical help."
      }
    ]
  },
  {
    "id": "further-reading-and-sources",
    "eyebrow": "Use the right content owner",
    "title": "Further reading, source use and what this page does not do",
    "paragraphs": [
      "This page owns the question of what “vagus nerve massage” means, what tissue is actually touched, what massage studies can measure and which neck boundaries are essential. It is not a complete overview of every way to influence the vagus nerve and not an instruction page for electrical stimulation.",
      "Use the vagus-nerve foundation page for anatomy and function. Use the auricular VNS guide for the distinction between manual ear touch and electrical taVNS. The methods overview places massage alongside breathing and defined stimulation categories without treating them as equivalent.",
      "The breathing guide owns slow breathing, exhalation ratios, 4-7-8 and RespHRV. The safety research library provides broader context for electrical VNS. Keeping these page jobs separate reduces the risk of borrowing evidence from one method as proof for another.",
      "The reader-visible sources below cover cervical anatomy, clinical carotid sinus massage, vascular safety, outer-ear innervation, massage outcomes, HRV interpretation and auricular acupressure. They support a cautious bounded article—not a claim that one massage recipe treats disease or documents Neuvago."
    ]
  }
];
const comparisonRows = [
  [
    "Light superficial touch",
    "Contact with skin and superficial tissue.",
    "May feel calm or pleasant.",
    "Does not prove direct vagus stimulation."
  ],
  [
    "Muscle massage",
    "Work on muscle, for example shoulders or upper back.",
    "May influence tension and experience.",
    "Not the same as massaging a nerve."
  ],
  [
    "Ear touch or acupressure",
    "Manual contact with the outer ear.",
    "Studies may describe protocol-specific outcomes.",
    "Mixed innervation; no guaranteed vagus point."
  ],
  [
    "Clinical carotid sinus massage",
    "A diagnostic manoeuvre with assessment and monitoring.",
    "Belongs in a clinical setting.",
    "Must not be self-administered."
  ],
  [
    "Forceful or device-assisted neck techniques",
    "Deep compression, manipulation, percussion or vibration.",
    "Outside this wellness guide.",
    "Avoid the front and side of the neck."
  ],
  [
    "Electrical VNS/tVNS",
    "Electrical stimulation with a device, site and parameters.",
    "Interpret according to the actual technology and protocol.",
    "Not equivalent to manual massage."
  ]
] as const;
const sources = [
  {
    "id": "A-001",
    "title": "Indications, contraindications, and step-by-step methodology for performing carotid sinus massage in patients presenting with syncope",
    "publisher": "de Lange FJ et al.; Ad Hoc Syncope Consortium endorsed by EFAS, GIMSI and EuGMS",
    "publication": "PubMed",
    "year": 2026,
    "url": "https://pubmed.ncbi.nlm.nih.gov/42204029/"
  },
  {
    "id": "A-002",
    "title": "2018 ESC Guidelines for the diagnosis and management of syncope",
    "publisher": "European Society of Cardiology Task Force",
    "publication": "PubMed",
    "year": 2018,
    "url": "https://pubmed.ncbi.nlm.nih.gov/29562304/"
  },
  {
    "id": "A-003",
    "title": "Practical Instructions for the 2018 ESC Guidelines for the diagnosis and management of syncope",
    "publisher": "ESC Scientific Document Group",
    "publication": "PubMed",
    "year": 2018,
    "url": "https://pubmed.ncbi.nlm.nih.gov/29562291/"
  },
  {
    "id": "A-004",
    "title": "About Stroke",
    "publisher": "US Centers for Disease Control and Prevention",
    "publication": "CDC",
    "year": 2024,
    "url": "https://www.cdc.gov/stroke/about/index.html"
  },
  {
    "id": "A-005",
    "title": "Cervical arterial dissections and association with cervical manipulative therapy: a statement for healthcare professionals",
    "publisher": "American Heart Association / American Stroke Association",
    "publication": "PubMed",
    "year": 2014,
    "url": "https://pubmed.ncbi.nlm.nih.gov/25104849/"
  },
  {
    "id": "B-001",
    "title": "Positional Relations of the Cervical Vagus Nerve Revisited",
    "publisher": "Planitzer U et al.",
    "publication": "PubMed",
    "year": 2017,
    "url": "https://pubmed.ncbi.nlm.nih.gov/28145065/"
  },
  {
    "id": "B-002",
    "title": "Normal anatomy, variants and factors associated with the cervical vagus nerve topography: a high-resolution ultrasound study",
    "publisher": "Drakonaki E et al.",
    "publication": "PubMed",
    "year": 2021,
    "url": "https://pubmed.ncbi.nlm.nih.gov/34524485/"
  },
  {
    "id": "B-004",
    "title": "The nerve supply of the human auricle",
    "publisher": "Peuker ET, Filler TJ",
    "publication": "PubMed",
    "year": 2002,
    "url": "https://pubmed.ncbi.nlm.nih.gov/11835542/"
  },
  {
    "id": "B-005",
    "title": "Innervation of the Human Cavum Conchae and Auditory Canal: Anatomical Basis for Transcutaneous Auricular Nerve Stimulation",
    "publisher": "Bermejo P et al.",
    "publication": "PubMed",
    "year": 2017,
    "url": "https://pubmed.ncbi.nlm.nih.gov/28396871/"
  },
  {
    "id": "B-006",
    "title": "The anatomical basis for transcutaneous auricular vagus nerve stimulation",
    "publisher": "Butt MF et al.",
    "publication": "PubMed",
    "year": 2020,
    "url": "https://pubmed.ncbi.nlm.nih.gov/31742681/"
  },
  {
    "id": "B-007",
    "title": "The short-term effects of myofascial trigger point massage therapy on cardiac autonomic tone in healthy subjects",
    "publisher": "Delaney JPA et al.",
    "publication": "PubMed",
    "year": 2002,
    "url": "https://pubmed.ncbi.nlm.nih.gov/11872106/"
  },
  {
    "id": "B-008",
    "title": "Rhythmical massage improves autonomic nervous system function: a single-blind randomised controlled trial",
    "publisher": "Seifert G et al.",
    "publication": "PubMed",
    "year": 2018,
    "url": "https://pubmed.ncbi.nlm.nih.gov/29598986/"
  },
  {
    "id": "B-010",
    "title": "The safety of massage therapy",
    "publisher": "Ernst E",
    "publication": "PubMed",
    "year": 2003,
    "url": "https://pubmed.ncbi.nlm.nih.gov/12777645/"
  },
  {
    "id": "B-011",
    "title": "Redefining respiratory sinus arrhythmia as respiratory heart rate variability: an international Expert Recommendation for terminological clarity",
    "publisher": "Menuet C et al.",
    "publication": "PubMed",
    "year": 2025,
    "url": "https://pubmed.ncbi.nlm.nih.gov/40328963/"
  },
  {
    "id": "B-012",
    "title": "Ear-Marking Relief: A Meta-Analysis on the Efficacy of Auricular Acupressure in Alleviating Anxiety Disorders",
    "publisher": "Hu N et al.",
    "publication": "PubMed",
    "year": 2024,
    "url": "https://pubmed.ncbi.nlm.nih.gov/38417402/"
  },
  {
    "id": "B-013",
    "title": "Complications of carotid sinus massage--a prospective series of older patients",
    "publisher": "Richardson DA et al.",
    "publication": "PubMed",
    "year": 2000,
    "url": "https://pubmed.ncbi.nlm.nih.gov/11108413/"
  }
] as const;

export default function VagusNerveMassagePage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    keywords: [
      "vagus nerve massage",
      "can you massage the vagus nerve",
      "vagus nerve pressure point",
      "ear massage vagus nerve",
      "neck massage vagus nerve",
      "carotid sinus massage safety",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Vagus nerve massage", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]" data-wave2d2d2-massage-page="en">
      <JsonLd data={structuredData} idPrefix="learn-vagus-nerve-massage" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">Touch, anatomy and safety</p>
          <h1 className="mt-6 max-w-[20ch] text-[clamp(3rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            Vagus nerve massage: what people mean, what evidence supports and what not to do
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            “Vagus nerve massage” can refer to gentle touch, muscle massage, ear pressure or hazardous neck techniques. This guide separates what is actually touched, what studies measure and why carotid-sinus pressure is not a home exercise.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/no/kunnskap/vagusnerven-og-massasje" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">Les på norsk</Link>
            <Link href="#short-answer" className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90">Read the direct answer</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd] px-5 py-14 sm:px-8 lg:px-12 lg:py-16" data-wave2d2d2-direct-answer="en">
        <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Direct answer</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-[#3d3934] sm:text-2xl">
            People can massage skin and muscles around the neck, face or ear, but that is not the same as directly massaging the vagus nerve. Strong pressure over the carotid sinus should not be taught as a self-treatment.
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

              {section.answers?.map((answer) => (
                <div key={answer.question} className="mt-8 rounded-[1.5rem] border border-black/8 bg-white/70 p-6" data-direct-answer-question={answer.question}>
                  <h3 className="text-xl font-medium tracking-[-0.025em]">{answer.question}</h3>
                  <p className="mt-3 text-base leading-8 text-[#5f5a52]">{answer.answer}</p>
                </div>
              ))}

              {section.id === "gentle-practical-boundaries" ? (
                <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
                  <table className="w-full min-w-[64rem] border-collapse text-left">
                    <caption className="p-5 text-left text-sm text-[#625b52]">Touch and stimulation categories: what they involve and the boundary that applies</caption>
                    <thead className="border-y border-black/8 bg-white/70"><tr>{["Category", "What is actually happening", "Careful interpretation", "Important boundary"].map((heading) => <th key={heading} className="p-4 text-sm font-medium">{heading}</th>)}</tr></thead>
                    <tbody>{comparisonRows.map((row) => <tr key={row[0]} className="border-b border-black/7 last:border-b-0">{row.map((cell) => <td key={cell} className="p-4 align-top text-sm leading-7 text-[#5f5a52]">{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              ) : null}

              {section.id === "what-people-mean" ? <p className="mt-8"><Link href="/learn/how-to-stimulate-the-vagus-nerve" className="font-medium underline underline-offset-4">Explore the methods overview</Link></p> : null}
              {section.id === "anatomy-and-what-is-touched" ? <p className="mt-8"><Link href="/learn/vagus-nerve" className="font-medium underline underline-offset-4">Understand the vagus nerve foundation</Link></p> : null}
              {section.id === "ear-touch-and-mixed-innervation" ? <p className="mt-8"><Link href="/learn/auricular-vagus-nerve-stimulation" className="font-medium underline underline-offset-4">Separate ear touch from electrical auricular VNS</Link></p> : null}
              {section.id === "what-massage-studies-show" ? <p className="mt-8"><Link href="/learn/breathing-exercises-and-the-vagus-nerve" className="font-medium underline underline-offset-4">Read the breathing and RespHRV evidence guide</Link></p> : null}
              {section.id === "safety-stop-and-care-boundaries" ? <div className="mt-8 flex flex-wrap gap-5"><Link href="/research/topics/safety-and-tolerability" className="font-medium underline underline-offset-4">Review safety and tolerability evidence</Link><Link href="/legal/medical-disclaimer" className="font-medium underline underline-offset-4">Read the medical disclaimer</Link></div> : null}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-black/5 bg-[#1f1f1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20" data-wave2d2d2-sources="en">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">Reader-visible sources</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Read massage claims at the level of the actual tissue, protocol and outcome</h2>
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
            General educational information only. This page does not diagnose, prevent or treat a condition, teach carotid sinus massage, provide medical clearance or replace individual care. External massage, acupressure or electrical-VNS research is not automatically product evidence for Neuvago. Stop for pain, marked dizziness, faintness, neurological change, chest pain, palpitations or breathlessness; seek urgent help for sudden stroke/TIA signs, collapse or a severe unusual headache.
          </p>
        </div>
      </section>
    </main>
  );
}
