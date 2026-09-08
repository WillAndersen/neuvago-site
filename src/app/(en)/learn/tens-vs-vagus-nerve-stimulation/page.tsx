import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

type Block =
  | { type: "paragraph"; text: string }
  | { type: "callout"; tone: string; title: string; paragraphs: readonly string[] }
  | { type: "table"; caption: string; columns: readonly string[]; rows: readonly (readonly string[])[] };
type Section = { id: string; title: string; blocks: readonly Block[] };

// WAVE 2D.3.2B: category comparison; no FAQPage, HowTo or product-conversion schema.
const path = "/learn/tens-vs-vagus-nerve-stimulation";
const title = "TENS vs Vagus Nerve Stimulation | Key Differences | Neuvago";
const description = "Learn why TENS and VNS are not interchangeable labels and how intended use, placement, stimulation delivery, protocol and evidence differ.";
const heading = "TENS vs vagus nerve stimulation: what is the difference?";
const lead = "Two devices can deliver electrical pulses without sharing an intended use, target or evidence base. This source-based comparison explains TENS and VNS and gives you questions for reading method and product descriptions. It provides no electrode-placement instructions, stimulation settings or personal treatment recommendation.";
const shortAnswer = [
  "TENS commonly describes electrical nerve stimulation through the skin for pain relief.",
  "VNS is a method family that includes implanted and non-invasive approaches.",
  "Shared hardware, current intensity or tingling does not prove the same targeting or benefit.",
  "Assess the evidence for the actual device and use. Do not improvise an ear or neck protocol."
];
const sections: readonly Section[] = [
  {
    "id": "short-answer",
    "title": "The short answer: related technology, different questions",
    "blocks": [
      {
        "type": "paragraph",
        "text": "TENS and VNS can both involve electrical stimulation of nerves, but the labels are not interchangeable. TENS usually describes stimulation delivered through the skin in a pain-relief context. VNS describes methods intended to stimulate the vagus nerve. Shared electrical technology is a reason to ask more questions, not proof of equivalent treatments. [S009, S012]"
      },
      {
        "type": "paragraph",
        "text": "This comparison helps you read a device description or research paper more accurately. It does not decide what you should use for pain, stress or another concern. Start with the equipment's intended purpose, the structure it is meant to affect and the evidence supporting that particular use. Only then can comparisons become meaningful."
      },
      {
        "type": "paragraph",
        "text": "Keep three things separate: the label, the method and the evidence. The label is the name you encounter. The method is what was actually done. The evidence supports a specific proposition. Mixing them can make a general discussion of nerve stimulation look like proof for a product that was never included in the research."
      },
      {
        "type": "callout",
        "tone": "summary",
        "title": "Is TENS the same as vagus nerve stimulation?",
        "paragraphs": [
          "No. TENS and VNS are not interchangeable labels. TENS is commonly associated with pain relief through the skin; VNS describes methods directed at the vagus nerve. Intended use, target, equipment and evidence must be assessed separately. Electrical pulses alone do not make the categories equivalent. [S009, S012]"
        ]
      }
    ]
  },
  {
    "id": "what-tens-means",
    "title": "What TENS means",
    "blocks": [
      {
        "type": "paragraph",
        "text": "TENS stands for transcutaneous electrical nerve stimulation. Transcutaneous means through the skin. US regulation describes a TENS device for pain relief as equipment applying current to skin electrodes to treat pain. That definition identifies a purpose and delivery route. It does not establish that the vagus nerve is the intended target. [S009, S010]"
      },
      {
        "type": "paragraph",
        "text": "Mechanism reviews discuss TENS in relation to pain modulation and interacting peripheral and central processes. That is more careful than portraying it as a single switch that simply turns pain signals off. We use those reviews as background, not to recommend a treatment, a device setting or a session schedule. [S015, S017]"
      },
      {
        "type": "paragraph",
        "text": "A product label cannot tell you which pain condition, participant group or comparison a study investigated. When you see “clinically studied,” look for the publication and the equipment actually used. A technique having a research literature is different from a particular commercial product having evidence for a particular claim. The distinction matters even when both descriptions use the same abbreviation."
      },
      {
        "type": "paragraph",
        "text": "The older Cochrane review listed below concerns acute pain in adults. It reports tentative findings alongside important methodological limitations. It dates from 2015 and is not presented as the latest summary of all TENS research. A pain outcome in such studies does not, by itself, identify a vagal mechanism. [S016]"
      }
    ]
  },
  {
    "id": "what-vns-means",
    "title": "What VNS means",
    "blocks": [
      {
        "type": "paragraph",
        "text": "VNS stands for vagus nerve stimulation. It includes implanted systems and non-invasive, transcutaneous approaches. Within transcutaneous research, authors commonly distinguish auricular, or ear-based, stimulation from cervical, or neck-based, methods. These are method families, not a universal protocol shared by everything carrying a VNS label. [S012, S014]"
      },
      {
        "type": "paragraph",
        "text": "An implanted system uses surgically placed equipment. That is a different arrangement from stimulation delivered through the skin. The FDA record for the VNS Therapy System illustrates a specific regulated implanted system. Its approval documents apply to the identified system and associated labeling, not every product described as a vagus nerve stimulator. [S008]"
      },
      {
        "type": "paragraph",
        "text": "The vagus nerve participates in connections between the brain and body. Anatomical reviews describe networks and interacting pathways rather than one isolated wire whose activation can be inferred from a skin sensation. Observing a broad nervous-system response is therefore not the same as demonstrating which pathway a particular setup engages. [S013, S025]"
      },
      {
        "type": "paragraph",
        "text": "Terms such as tVNS and taVNS help describe an approach, but they do not replace the full method description. Ask who participated, what was measured and what comparison was used. A research protocol, a clinical intervention and a wellness device may share vocabulary without sharing intended use, evidence or the conditions under which they are assessed."
      }
    ]
  },
  {
    "id": "why-the-labels-are-not-interchangeable",
    "title": "Why the labels cannot be swapped",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Two devices can have leads, electrodes and an intensity control without belonging to the same evidence category. TENS commonly names a skin-delivered approach to pain relief. VNS points to an intended neural target. Similar appearance does not answer whether the equipment reaches that target, or whether it produces the same outcome. [S009, S012]"
      },
      {
        "type": "paragraph",
        "text": "Avoid both extremes: assuming every TENS unit is therefore a vagus nerve stimulator, or claiming that stimulation described as TENS can never influence vagal or related networks. Neither conclusion follows from the label alone. The relevant questions concern the actual setup and the measurements used to investigate it, rather than the name printed on the box."
      },
      {
        "type": "paragraph",
        "text": "Consider a hypothetical example. A trial studies pain after a particular procedure, but a sales page cites it under a claim about “vagus regulation.” Several links are missing: was the same device used, was vagal engagement investigated, and were the participants and outcome comparable? A positive pain result cannot automatically supply those missing links."
      },
      {
        "type": "callout",
        "tone": "summary",
        "title": "What separates TENS from VNS?",
        "paragraphs": [
          "Compare intended use, anatomical target, contact site, pulse delivery, the complete protocol and the evidence. Those details clarify the differences. A shared battery, an electrode or the word “transcutaneous” is not sufficient to establish that two setups have equivalent mechanisms or results. [S009, S012, S024]"
        ]
      }
    ]
  },
  {
    "id": "comparison-by-purpose-site-waveform-and-protocol",
    "title": "Compare purpose, target and the complete protocol",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Start with the documentation rather than a number on an intensity display. Look for a description that makes similarities and differences between setups visible. The table below is a guide to reading those descriptions. It is not a procedure for configuring equipment or placing electrodes."
      },
      {
        "type": "paragraph",
        "text": "The tVNS reporting recommendations call for technical details alongside participant characteristics, outcomes and adverse-event reporting. Without those details, studies are difficult to compare. “The same intensity” or “the same location” is not a complete method description when other elements of the setup differ. [S012]"
      },
      {
        "type": "table",
        "caption": "Questions that separate a device description from demonstrated comparability",
        "columns": [
          "What to examine",
          "TENS in a pain-relief context",
          "VNS — specify the method"
        ],
        "rows": [
          [
            "Purpose",
            "Which pain context and use does the manufacturer or study describe?",
            "Which clinical, research or wellness use is actually described?"
          ],
          [
            "Anatomical target",
            "Do not infer vagal targeting from the phrase nerve stimulation.",
            "Which vagal pathway is intended, and how is targeting investigated?"
          ],
          [
            "Contact and delivery route",
            "Skin electrodes need to be understood within the complete setup.",
            "Distinguish implanted, transcutaneous auricular and transcutaneous cervical approaches."
          ],
          [
            "Electrical delivery",
            "Read pulse characteristics together with the contact interface.",
            "A display value does not replace waveform and tissue-contact information."
          ],
          [
            "Protocol",
            "Who used the equipment, in what setting and with what supervision?",
            "Which setup, control condition and follow-up were investigated?"
          ],
          [
            "Evidence",
            "A pain outcome belongs to the question the study investigated.",
            "Target engagement, physiological response and clinical benefit are different questions."
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The table does not identify a winner. It shows what must be documented before a comparison can support a conclusion. Separate what is demonstrated, what is asserted and what is missing. “Not reported” is a more accurate finding than assuming equivalence because two products look alike."
      },
      {
        "type": "paragraph",
        "text": "For example, a paper can report its participants clearly but omit an important equipment detail. That omission does not prove the method failed. It does limit what another reader can reproduce or compare. Record the gap instead of filling it with a setting from a different device or an explanation from a marketing page."
      }
    ]
  },
  {
    "id": "hardware-similarity-does-not-prove-target",
    "title": "Similar hardware does not prove the same target",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The connection between electrode, skin and tissue is part of the intervention. Engineering literature on auricular stimulation discusses contact interfaces, stimulus delivery and field distribution. It also considers recruitment of more than one neural pathway. A visible surface electrode is therefore not independent proof of selective vagus nerve stimulation. [S023, S024]"
      },
      {
        "type": "paragraph",
        "text": "Distinguish three observations: the device delivers a signal, a physiological response is measured, and a relevant health benefit is demonstrated. One can be interesting without establishing the next. A change in a body measurement also needs interpretation alongside the measurement method, the comparison condition and other possible explanations."
      },
      {
        "type": "paragraph",
        "text": "Tingling is an experience, not an identification of the one nerve that was activated. A setting feeling stronger does not demonstrate greater benefit either. This article provides no advice to increase intensity to “reach” the vagus nerve. Sensation or a marketed strength scale should not replace evidence tied to the device and protocol. [S012, S024]"
      },
      {
        "type": "callout",
        "tone": "summary",
        "title": "Can a standard TENS unit stimulate the vagus nerve?",
        "paragraphs": [
          "You cannot establish that from the TENS label or the device appearance. A specific setup may be investigated in research, but that does not make a standard TENS unit documented, suitable or safe for VNS use. Do not modify equipment or relocate electrodes to imitate a study. [S012, S024]"
        ]
      },
      {
        "type": "callout",
        "tone": "summary",
        "title": "Do current intensity or tingling prove vagus nerve stimulation?",
        "paragraphs": [
          "No. Current intensity and tingling alone do not establish vagal target engagement or clinical benefit. The claim needs appropriate measurements and comparisons. Stronger stimulation is not automatically better, and this page does not provide settings advice. [S012, S024]"
        ]
      }
    ]
  },
  {
    "id": "evidence-and-regulatory-specificity",
    "title": "Keep evidence and regulatory status specific",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Read a study as an answer to a bounded question. It concerns particular equipment or a setup, a protocol, participants, a comparison and an outcome. When one of those changes, transferability needs an explanation. This is why research on a method does not automatically become evidence for any commercial device bearing the same label."
      },
      {
        "type": "paragraph",
        "text": "A review of pain trials does not automatically answer a question about vagal engagement. A review of VNS mechanisms is not a head-to-head comparison of two products either. Separate a hypothesis, a physiological observation and a clinical result. This makes the support offered by a source easier to understand without dismissing research that addressed a different question. [S014, S016, S017]"
      },
      {
        "type": "paragraph",
        "text": "Regulatory status must be read for the right product, use and jurisdiction. The US TENS classification and the PMA record for a specific implanted VNS system are different kinds of information. Neither is a universal quality badge for electrical stimulators or evidence of Neuvago effectiveness. Current supplements and labeling still need checking. [S008, S009, S010, S011]"
      },
      {
        "type": "paragraph",
        "text": "A citation to an official database is a starting point for verification. Check that the manufacturer, model and intended use match what is being discussed. The existence of a record does not answer every mechanism question or expand the uses described in its documentation. Do not replace the actual record with an informal phrase such as “FDA status.”"
      },
      {
        "type": "callout",
        "tone": "summary",
        "title": "Can evidence from one VNS device be transferred to every electrical stimulator?",
        "paragraphs": [
          "No. Findings must remain tied to the equipment, site, protocol, participants and outcome studied. Results from implanted VNS, TENS or another transcutaneous device do not automatically become Neuvago-specific evidence. Similar terminology is not a demonstrated comparison. [S008, S012, S016]"
        ]
      }
    ]
  },
  {
    "id": "safety-and-no-diy-placement",
    "title": "Safety: no do-it-yourself ear or neck protocol",
    "blocks": [
      {
        "type": "paragraph",
        "text": "This page shows no electrode-placement procedure for the ear, neck or chest. It supplies no current, frequency, pulse-width or session-duration settings. That omission is deliberate: a category comparison is not an instruction manual. A diagram or method description in a research paper is not permission to reproduce the setup at home."
      },
      {
        "type": "paragraph",
        "text": "Use of a particular product must be considered against that product's current intended use and instructions. Medical questions or uncertainty about your circumstances belong with qualified healthcare professionals. We do not provide a universal list claiming to decide who can safely use every form of TENS or VNS."
      },
      {
        "type": "paragraph",
        "text": "Research protocols may involve selection criteria, monitoring and stopping rules that are absent from a short description. Do not infer safety from publication of a study, the word non-invasive or a report that stimulation felt comfortable. Safety information needs to follow the actual equipment and use, rather than only the category name. [S012]"
      },
      {
        "type": "callout",
        "tone": "summary",
        "title": "Should people place TENS electrodes on the ear or neck themselves?",
        "paragraphs": [
          "Do not use this comparison or a research description as a basis for improvised electrode placement on the ear or neck. Do not modify a TENS device for VNS. Follow current product instructions and take medical uncertainty to a qualified healthcare professional. This page does not establish personal suitability."
        ]
      }
    ]
  },
  {
    "id": "related-owner-pages",
    "title": "Choose the next page for your actual question",
    "blocks": [
      {
        "type": "paragraph",
        "text": "For an overview of the whole field, continue to the VNS foundation guide. For stimulation delivered through the skin, the tVNS explainer is the more specific next step. Auricular stimulation has its own guide, while the ear-versus-neck comparison explains why those approaches should not be treated as one method."
      },
      {
        "type": "paragraph",
        "text": "When evaluating an actual product, intended use is a separate question from the category explanation. The buyer guide helps organise evidence, support and other documentation without making a personal treatment recommendation. The safety resource provides method context, not a substitute for the current instructions for the actual device."
      },
      {
        "type": "paragraph",
        "text": "This page therefore addresses one bounded question: the difference between TENS and VNS. It does not also try to be a treatment guide, a product verdict or a complete anatomy resource. Follow the link that answers the question you have, rather than interpreting every related topic as one combined effectiveness claim."
      }
    ]
  },
  {
    "id": "sources-and-review-date",
    "title": "Sources, review date and limitations",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The source basis was checked on 8 September 2026. It combines official US records and regulation with selected reviews, a reporting consensus and a methodological comment. The references were chosen to explain terminology and interpretation boundaries. This is not a complete or systematic search of all research on pain or vagus nerve stimulation."
      },
      {
        "type": "paragraph",
        "text": "Older publications are used as historical and methodological background. A recent checking date does not turn them into new studies, and an original approval record does not replace later labeling. Each source has a note explaining its role. For some background references, only bibliographic identity or the abstract was checked, rather than the full text."
      },
      {
        "type": "paragraph",
        "text": "The Burger and Verkuil comment is listed to make the methodological debate about targeting visible. Its full text was not reviewed here, and it does not carry any substantive claim alone. The need for clear method reporting and careful interpretation is supported by the accessible consensus and engineering literature. [S012, S024, S026]"
      },
      {
        "type": "paragraph",
        "text": "The document-reading examples are editorial explanations, not findings from new experiments. We claim neither an independent clinical specialist review nor a new Neuvago study. The conclusion is limited: compare documented use and method; do not turn shared electrical technology into automatic proof of the same effect."
      }
    ]
  }
];
const sources = [
  {
    "id": "S008",
    "authors": "U.S. Food and Drug Administration",
    "title": "PMA P970003 — VNS Therapy System",
    "publication": "FDA Premarket Approval database",
    "year": 2026,
    "type": "official-guidance",
    "url": "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P970003",
    "note": "[S008] Example of a specific implanted system; check supplements and current labeling."
  },
  {
    "id": "S009",
    "authors": "Electronic Code of Federal Regulations",
    "title": "21 CFR 882.5890 — Transcutaneous electrical nerve stimulator for pain relief",
    "publication": "21 CFR 882.5890",
    "year": 2026,
    "type": "official-guidance",
    "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-882/subpart-F/section-882.5890",
    "note": "[S009] US definition and classification of TENS for pain relief, not approval for every jurisdiction."
  },
  {
    "id": "S010",
    "authors": "U.S. Food and Drug Administration",
    "title": "FDA product classification: transcutaneous electrical nerve stimulator for pain relief",
    "publication": "FDA Product Classification — GZJ",
    "year": 2026,
    "type": "official-guidance",
    "url": "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPCD/classification.cfm?ID=GZJ",
    "note": "[S010] A TENS classification record, not evidence of vagal target engagement."
  },
  {
    "id": "S011",
    "authors": "U.S. Food and Drug Administration",
    "title": "Premarket Approval (PMA) database",
    "publication": "FDA Premarket Approval database",
    "year": 2026,
    "type": "official-guidance",
    "url": "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm",
    "note": "[S011] Search portal for device-specific approvals; current labeling must still be checked."
  },
  {
    "id": "S012",
    "authors": "Farmer AD et al",
    "title": "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)",
    "publication": "Frontiers in Human Neuroscience",
    "year": 2021,
    "type": "review",
    "url": "https://pubmed.ncbi.nlm.nih.gov/33854421/",
    "doi": "10.3389/fnhum.2020.568051",
    "pmid": "33854421",
    "note": "[S012] Reporting recommendations explaining which method details a study should disclose, not user instructions."
  },
  {
    "id": "S013",
    "authors": "Yuan H, Silberstein SD",
    "title": "Vagus Nerve and Vagus Nerve Stimulation, a Comprehensive Review: Part I",
    "publication": "Headache",
    "year": 2016,
    "type": "review",
    "url": "https://pubmed.ncbi.nlm.nih.gov/26364692/",
    "doi": "10.1111/head.12647",
    "pmid": "26364692",
    "note": "[S013] Background review on the vagus nerve; bibliographic identity checked, not a fresh full-text appraisal."
  },
  {
    "id": "S014",
    "authors": "Howland RH",
    "title": "Vagus Nerve Stimulation",
    "publication": "Current Behavioral Neuroscience Reports",
    "year": 2014,
    "type": "review",
    "url": "https://pubmed.ncbi.nlm.nih.gov/24834378/",
    "doi": "10.1007/s40473-014-0010-5",
    "pmid": "24834378",
    "note": "[S014] Historical overview of VNS methods and clinical context, not current product labeling."
  },
  {
    "id": "S015",
    "authors": "Sluka KA, Walsh D",
    "title": "Transcutaneous electrical nerve stimulation: basic science mechanisms and clinical effectiveness",
    "publication": "The Journal of Pain",
    "year": 2003,
    "type": "review",
    "url": "https://pubmed.ncbi.nlm.nih.gov/14622708/",
    "doi": "10.1054/jpai.2003.434",
    "pmid": "14622708",
    "note": "[S015] Background on TENS mechanisms; publication identity checked. No dosing advice is drawn from it."
  },
  {
    "id": "S016",
    "authors": "Johnson MI, Paley CA, Howe TE, Sluka KA",
    "title": "Transcutaneous electrical nerve stimulation for acute pain",
    "publication": "Cochrane Database of Systematic Reviews",
    "year": 2015,
    "type": "systematic-review",
    "url": "https://pubmed.ncbi.nlm.nih.gov/26075732/",
    "doi": "10.1002/14651858.CD006142.pub3",
    "pmid": "26075732",
    "note": "[S016] A 2015 review of acute pain in adults with methodological limitations, not proof of vagus stimulation."
  },
  {
    "id": "S017",
    "authors": "Vance CGT, Dailey DL, Rakel BA, Sluka KA",
    "title": "Using TENS for pain control: the state of the evidence",
    "publication": "Pain Management",
    "year": 2014,
    "type": "review",
    "url": "https://pubmed.ncbi.nlm.nih.gov/24953072/",
    "doi": "10.2217/pmt.14.13",
    "pmid": "24953072",
    "note": "[S017] Historical TENS review from 2014; not presented as the latest clinical treatment guidance."
  },
  {
    "id": "S023",
    "authors": "Kaniusas E et al",
    "title": "Current Directions in the Auricular Vagus Nerve Stimulation I – A Physiological Perspective",
    "publication": "Frontiers in Neuroscience",
    "year": 2019,
    "type": "review",
    "url": "https://pubmed.ncbi.nlm.nih.gov/31447643/",
    "doi": "10.3389/fnins.2019.00854",
    "pmid": "31447643",
    "note": "[S023] Physiological overview of auricular stimulation; method context, not product-specific effectiveness proof."
  },
  {
    "id": "S024",
    "authors": "Kaniusas E et al",
    "title": "Current Directions in the Auricular Vagus Nerve Stimulation II – An Engineering Perspective",
    "publication": "Frontiers in Neuroscience",
    "year": 2019,
    "type": "review",
    "url": "https://pubmed.ncbi.nlm.nih.gov/31396044/",
    "doi": "10.3389/fnins.2019.00772",
    "pmid": "31396044",
    "note": "[S024] Engineering overview of contact, fields and stimulation; no settings or placement recipe is reproduced."
  },
  {
    "id": "S025",
    "authors": "Neuhuber WL, Berthoud HR",
    "title": "Functional anatomy of the vagus system – Emphasis on the somato-visceral interface",
    "publication": "Autonomic Neuroscience",
    "year": 2021,
    "type": "review",
    "url": "https://pubmed.ncbi.nlm.nih.gov/34634680/",
    "doi": "10.1016/j.autneu.2021.102887",
    "pmid": "34634680",
    "note": "[S025] Anatomical network context from the abstract, not an electrode-placement map."
  },
  {
    "id": "S026",
    "authors": "Burger AM, Verkuil B",
    "title": "Transcutaneous nerve stimulation via the tragus: are we really stimulating the vagus nerve?",
    "publication": "Brain Stimulation",
    "year": 2018,
    "type": "review",
    "url": "https://doi.org/10.1016/j.brs.2018.03.018",
    "doi": "10.1016/j.brs.2018.03.018",
    "note": "[S026] Methodological comment. Identity checked; full text not reviewed. Not the sole support for a claim."
  }
];
const relatedLinks = [
  {
    "title": "Vagus nerve stimulation",
    "description": "Overview of the VNS family.",
    "href": "/learn/vagus-nerve-stimulation"
  },
  {
    "title": "Transcutaneous VNS",
    "description": "Terminology and method reporting.",
    "href": "/learn/transcutaneous-vagus-nerve-stimulation"
  },
  {
    "title": "Auricular VNS",
    "description": "A dedicated ear-based method explainer.",
    "href": "/learn/auricular-vagus-nerve-stimulation"
  },
  {
    "title": "Ear-based versus neck-based VNS",
    "description": "Comparison without placement instructions.",
    "href": "/learn/ear-vs-neck-vagus-nerve-stimulation"
  },
  {
    "title": "Intended use",
    "description": "Neuvago intended-use and claims boundary.",
    "href": "/legal/intended-use"
  },
  {
    "title": "How to evaluate a VNS device",
    "description": "A buyer guide without a product ranking.",
    "href": "/learn/how-to-choose-a-vagus-nerve-stimulation-device"
  },
  {
    "title": "Safety and tolerability",
    "description": "Research context and limitations.",
    "href": "/research/topics/safety-and-tolerability"
  }
];
const reviewedAt = "2026-09-08";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/tens-og-vagusnervestimulering",
      "x-default": path,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title, description, url: path, siteName: "Neuvago", locale: "en_US", type: "article",
    publishedTime: `${reviewedAt}T12:00:00.000Z`,
    modifiedTime: `${reviewedAt}T12:00:00.000Z`,
  },
  twitter: { card: "summary_large_image", title, description },
};

function ContentBlock({ block }: { block: Block }) {
  if (block.type === "paragraph") {
    return <p className="text-base leading-8 text-[#4f4a43] md:text-lg md:leading-9">{block.text}</p>;
  }
  if (block.type === "callout") {
    return (
      <aside data-direct-answer className="rounded-3xl border border-[#d8cbbc] bg-[#efe7dc] p-6 sm:p-7">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#746b62]">Direct answer</p>
        <h3 className="mt-3 text-xl font-medium tracking-[-0.025em]">{block.title}</h3>
        <div className="mt-4 space-y-3">{block.paragraphs.map((text) => <p key={text} className="text-base leading-7 text-[#514c45]">{text}</p>)}</div>
      </aside>
    );
  }
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/70">
      <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Comparison table, scroll horizontally on small screens">
        <table className="w-full min-w-[44rem] border-collapse text-left">
          <caption className="bg-[#eee7dd] px-5 py-4 text-left text-sm font-medium">{block.caption}</caption>
          <thead><tr className="border-b border-black/10 bg-[#f5f1eb]">{block.columns.map((text) => <th key={text} scope="col" className="px-5 py-4 text-sm font-medium">{text}</th>)}</tr></thead>
          <tbody>{block.rows.map((row) => <tr key={row[0]} className="border-b border-black/5 last:border-b-0">{row.map((text, index) => index === 0 ? <th key={index} scope="row" className="px-5 py-4 align-top text-sm font-medium leading-7">{text}</th> : <td key={index} className="px-5 py-4 align-top text-sm leading-7 text-[#5f5a52]">{text}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default function TensVsVagusNerveStimulationPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: heading, description, path, articleSection: "Learn",
    authorName: "Neuvago Editorial Team", datePublished: reviewedAt, dateModified: reviewedAt,
    keywords: ["TENS vs VNS", "TENS and vagus nerve stimulation", "electrical nerve stimulation"],
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Learn", path: "/learn" }, { name: heading, path }],
  }).map((node) => node["@type"] === "Article" ? { ...node, citation: sources.map((source) => source.url) } : node);

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]" data-wave="2D.3.2B">
      <JsonLd data={structuredData} idPrefix="learn-tens-vs-vns" />
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <nav aria-label="Breadcrumbs"><ol className="flex flex-wrap items-center gap-2 text-sm text-[#746d64]">
          <li><Link href="/">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/learn">Learn</Link></li><li aria-hidden="true">/</li><li aria-current="page">TENS vs VNS</li>
        </ol></nav>
      </div>
      <header className="border-y border-black/5 bg-[#efe8de]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:px-12 lg:py-24">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#786e64]">TENS and VNS explained</p>
            <h1 className="mt-5 max-w-[17ch] break-words text-[clamp(2.8rem,7vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.06em]">{heading}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#514c45] md:text-xl md:leading-9">{lead}</p>
          </div>
          <aside className="rounded-[2rem] border border-black/5 bg-white/60 p-7 sm:p-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">About this article</h2>
            <p className="mt-5 text-sm leading-7">Editorial: Neuvago Editorial Team</p>
            <p className="text-sm leading-7">Source check: Neuvago editorial review</p>
            <p className="text-sm leading-7">Published and updated: <time dateTime={reviewedAt}>8 September 2026</time></p>
            <p className="text-sm leading-7">Reading time: about 12 minutes</p>
            <p className="mt-5 border-t border-black/10 pt-5 text-sm leading-7 text-[#625b53]">General information, not medical advice, diagnosis or treatment. No independent clinical specialist review is claimed.</p>
          </aside>
        </div>
      </header>
      <section aria-label="At a glance" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-black/5 bg-white/70 p-6 sm:p-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">At a glance</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">{shortAnswer.map((text) => <li key={text} className="rounded-2xl bg-[#f5f1eb] p-5 text-base leading-7 text-[#514c45]">{text}</li>)}</ul>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:px-12 lg:py-20">
        <aside className="self-start lg:sticky lg:top-24"><nav aria-label="Table of contents" className="rounded-3xl border border-black/5 bg-white/60 p-5">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">On this page</h2>
          <ol className="mt-5 space-y-3">{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="grid grid-cols-[1.5rem_1fr] gap-2 text-sm leading-6 text-[#5f5a52]"><span>{index + 1}.</span><span>{section.title}</span></a></li>)}</ol>
        </nav></aside>
        <article className="min-w-0 space-y-20">{sections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-black/5 pb-16 last:border-b-0">
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">{section.title}</h2>
          <div className="mt-8 space-y-7">{section.blocks.map((block, index) => <ContentBlock key={index} block={block} />)}</div>
          {section.id === "related-owner-pages" ? <p className="mt-8"><Link href="/no/kunnskap/tens-og-vagusnervestimulering" hrefLang="nb-NO" className="text-sm underline underline-offset-4">Les sammenligningen på norsk</Link></p> : null}
        </section>)}</article>
      </div>
      <section aria-labelledby="source-heading" className="border-y border-black/5 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <h2 id="source-heading" className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">Sources and their limits</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f5a52]">These sources explain categories, methods and interpretation limits. They do not automatically demonstrate a particular effect of Neuvago.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{sources.map((source) => <article key={source.id} className="rounded-3xl border border-black/5 bg-white/70 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[#84796e]">{source.id} · {source.year}</p>
            <h3 className="mt-3 text-xl font-medium leading-tight">{source.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{source.authors}. {source.publication}.</p>
            <p className="mt-3 text-sm leading-7 text-[#625b53]">{source.note}</p>
            <a href={source.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-medium underline underline-offset-4">Open the source</a>
          </article>)}</div>
        </div>
      </section>
      <section aria-labelledby="related-heading" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <h2 id="related-heading" className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">Continue with the right question</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{relatedLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-3xl border border-black/5 bg-white/70 p-6 transition hover:bg-white"><h3 className="text-xl font-medium">{link.title}</h3><p className="mt-3 text-sm leading-7 text-[#5f5a52]">{link.description}</p><span className="mt-5 inline-flex text-sm underline underline-offset-4">Read more</span></Link>)}</div>
        <p className="mt-12"><Link href="/learn" className="text-sm underline underline-offset-4">Back to Learn</Link></p>
      </section>
    </main>
  );
}
