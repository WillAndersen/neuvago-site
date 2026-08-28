import type { ConditionArticleContent } from "@/components/conditions-article";

export const migraineHeadacheArticle = {
  hero: {
    eyebrow: "MIGRAINE & HEADACHE",
    title: "Migraine, headache and the nervous system",
    introduction:
      "Migraine is a neurological disorder that can involve recurring headache attacks, nausea, sensitivity to light or sound and, for some people, temporary aura symptoms. Headache is a broader symptom with many possible causes, so a new, unusual or changing headache should not automatically be assumed to be migraine.",
    supportingCopy:
      "This article explains how migraine differs from other headache disorders, where nervous-system and vagal pathways fit into current research, and why findings from one stimulation device or protocol cannot automatically be applied to another.",
  },
  sections: [
    {
      id: "migraine-and-headache",
      eyebrow: "MIGRAINE AND HEADACHE",
      title: "Migraine is more than a generic headache.",
      paragraphs: [
        "Headache is both a symptom and the name of a broad group of disorders. Migraine is a primary headache disorder with defined clinical patterns. The International Classification of Headache Disorders distinguishes migraine without aura, migraine with aura, chronic migraine and other subtypes.",
        "A diagnosis depends on the overall pattern of attacks, associated symptoms and clinical assessment — not on one symptom in isolation.",
        "Secondary headaches occur because of another disorder. That distinction matters when a headache is new, suddenly severe, changing or accompanied by other warning signs.",
      ],
      tone: "light",
    },
    {
      id: "common-patterns",
      eyebrow: "COMMON PATTERNS",
      title: "Migraine can involve more than head pain.",
      introduction:
        "Migraine varies between people and between attacks. Common patterns may include:",
      rows: [
        {
          title: "Head pain",
          description:
            "Head pain may be moderate or severe, may feel pulsating and may be worse during ordinary physical activity. It is often felt on one side, but this is not true for every person or every attack.",
        },
        {
          title: "Sensory sensitivity",
          description:
            "Many people experience increased sensitivity to light and sound. Busy environments and ordinary sensory input may become harder to tolerate during an attack.",
        },
        {
          title: "Nausea and other symptoms",
          description:
            "Migraine attacks may include nausea, vomiting, fatigue and difficulty concentrating, in addition to the headache itself.",
        },
        {
          title: "Aura and attack phases",
          description:
            "Some people experience temporary, reversible visual, sensory or speech-related aura symptoms. Changes such as fatigue, neck discomfort or altered mood may also occur before or after the headache phase.",
        },
      ],
      closing:
        "These patterns can overlap with other headache disorders and medical conditions. This page does not diagnose migraine.",
      tone: "warm",
    },
    {
      id: "nervous-system-context",
      eyebrow: "NERVOUS-SYSTEM CONTEXT",
      title: "A disorder involving several interacting pathways.",
      paragraphs: [
        "Migraine is not explained by one nerve or one blood vessel. Current models involve altered sensory processing and trigeminovascular pathways, together with contributions from brainstem, hypothalamic and cortical networks.",
        "In migraine with aura, temporary neurological symptoms are associated with changes in cortical activity. This does not explain every migraine attack, and the biology of migraine remains complex.",
      ],
      tone: "light",
    },
    {
      id: "vagus-nerve-context",
      eyebrow: "THE VAGUS NERVE",
      title: "Where the vagus nerve fits — and where it does not.",
      paragraphs: [
        "The vagus nerve carries sensory information toward the brainstem and participates in wider brain–body and autonomic communication. Because brainstem and pain-modulating networks interact, researchers have investigated whether stimulating vagal pathways can influence migraine-related outcomes.",
        "The vagus nerve is not considered the sole cause of migraine. A plausible biological pathway is not the same as proof of clinical benefit, and it does not make different stimulation sites, devices or protocols interchangeable.",
      ],
      tone: "warm",
    },
    {
      id: "modality-distinctions",
      eyebrow: "VNS, nVNS AND taVNS",
      title: "Vagus nerve stimulation is not one intervention.",
      rows: [
        {
          title: "Implanted VNS",
          description:
            "A surgically implanted prescription therapy. Evidence from implanted systems cannot automatically be applied to non-invasive stimulation.",
        },
        {
          title: "Cervical non-invasive VNS",
          description:
            "Stimulation applied at the side of the neck. Evidence and regulatory status belong to the exact device, protocol and indication studied.",
        },
        {
          title: "Auricular taVNS",
          description:
            "Transcutaneous stimulation applied at the outer ear. Research devices, electrode locations and stimulation protocols vary.",
        },
        {
          title: "Neuvago",
          description:
            "Neuvago is a separate ear-based wellness device. External VNS and taVNS research provides scientific context, not device-specific clinical evidence.",
        },
      ],
      tone: "dark",
    },
    {
      id: "cervical-nvns-research",
      eyebrow: "CERVICAL nVNS",
      title: "What neck-based non-invasive VNS research has examined.",
      paragraphs: [
        "Cervical non-invasive vagus nerve stimulation has been studied for acute and preventive migraine outcomes.",
        "In the United States, gammaCore-S — a prescription device applied to the side of the neck — was cleared by the U.S. Food and Drug Administration for the acute treatment of pain associated with migraine headache in adult patients.",
        "That clearance is specific to gammaCore-S, cervical stimulation and its labelled indication. It does not apply to auricular taVNS generally, and it does not apply to Neuvago.",
      ],
      tone: "light",
    },
    {
      id: "auricular-tavns-research",
      eyebrow: "AURICULAR taVNS",
      title: "What ear-based stimulation research has examined.",
      paragraphs: [
        "Auricular taVNS applies electrical stimulation at the outer ear.",
        "A 2023 systematic review of auricular neuromodulation and electro-ear approaches identified some positive signals in chronic migraine research, but concluded that the available data were not sufficient for strong conclusions. Study quality, risk of bias and stimulation protocols varied.",
        "A separate 2023 meta-analysis reported different findings across cervical and auricular subgroups, reinforcing why the stimulation site and protocol need to be named whenever results are discussed.",
        "A 2026 meta-analysis included seven randomized trials with 917 participants and pooled evidence across cervical and auricular approaches. It reported improvements in several migraine outcomes, while also describing variation in stimulation site, parameters, treatment duration and outcome measures.",
        "These findings describe an active but heterogeneous research field. They cannot be treated as evidence for Neuvago or for every ear-based stimulation device.",
      ],
      closing:
        "Across the wider taVNS literature, reported adverse events have often been mild and transient. Safety reporting has also been incomplete in many studies, so absolute safety claims are not appropriate.",
      tone: "warm",
    },
    {
      id: "evidence-boundaries",
      eyebrow: "EVIDENCE BOUNDARIES",
      title: "What the research does not establish.",
      points: [
        "The evidence does not establish that vagal dysfunction is the cause of migraine.",
        "It does not establish that every headache is migraine.",
        "It does not make cervical nVNS and auricular taVNS equivalent.",
        "An FDA decision for one cervical prescription device does not apply to another device or stimulation site.",
        "External VNS and taVNS studies do not establish a clinical effect for Neuvago in migraine or headache.",
        "Results from one device, protocol or population cannot automatically be transferred to another.",
      ],
      tone: "light",
    },
  ],
  urgentHelp: {
    eyebrow: "URGENT MEDICAL ASSESSMENT",
    title: "When a headache needs urgent medical assessment.",
    introduction:
      "Some headache patterns need prompt or emergency medical evaluation.",
    items: [
      "Seek emergency medical care for a sudden, severe headache that reaches maximum intensity within seconds or minutes.",
      "Seek urgent help for a headache with new weakness, numbness, difficulty speaking, confusion, seizure, loss of consciousness or new vision loss.",
      "Seek urgent help for headache with high fever or neck stiffness, or after a recent significant head injury.",
      "Prompt medical assessment is also important for a new or markedly changed headache pattern, progressive worsening, or symptoms that are different from a person's usual migraine.",
      "New headache during pregnancy or the postpartum period, or in a person with cancer or immune suppression, also requires medical assessment.",
    ],
    closing:
      "New neurological symptoms may sometimes resemble aura, but first-time, clearly different or unusually prolonged symptoms should be assessed promptly. This list is not exhaustive.",
  },
  relatedReading: {
    eyebrow: "RELATED READING",
    title: "Continue with the relevant context.",
    introduction:
      "Use the links below to explore the nervous-system foundations, research context and related condition articles without treating them as substitutes for clinical assessment.",
    groups: [
      {
        title: "Learn",
        links: [
          {
            title: "Vagus nerve",
            description: "Understand the main brain–body pathway.",
            href: "/learn/vagus-nerve",
          },
          {
            title: "Vagus nerve stimulation",
            description: "Compare implanted and non-invasive approaches.",
            href: "/learn/vagus-nerve-stimulation",
          },
          {
            title: "Non-invasive VNS",
            description: "Understand external stimulation categories.",
            href: "/learn/non-invasive-vagus-nerve-stimulation",
          },
          {
            title: "Auricular VNS",
            description: "Learn about ear-based stimulation terminology.",
            href: "/learn/auricular-vagus-nerve-stimulation",
          },
        ],
      },
      {
        title: "Research",
        links: [
          {
            title: "Auricular VNS research",
            description: "Explore the broader taVNS research field.",
            href: "/research/topics/auricular-vagus-nerve-stimulation",
          },
          {
            title: "Safety and tolerability",
            description: "Review how human taVNS safety is studied.",
            href: "/research/topics/safety-and-tolerability",
          },
          {
            title: "taVNS safety meta-analysis",
            description: "Read the detailed Kim et al. study summary.",
            href: "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis",
          },
        ],
      },
      {
        title: "Related conditions",
        links: [
          {
            title: "Stress",
            description: "Explore prolonged activation and recovery.",
            href: "/conditions/stress",
          },
          {
            title: "Sleep",
            description: "Explore winding down and sleep disruption.",
            href: "/conditions/sleep",
          },
          {
            title: "Anxiety",
            description: "Explore vigilance and autonomic arousal.",
            href: "/conditions/anxiety",
          },
        ],
      },
      {
        title: "Editorial context",
        links: [
          {
            title: "Intended use",
            description: "Review Neuvago's product and claims boundaries.",
            href: "/legal/intended-use",
          },
        ],
      },
    ],
  },
  sources: {
    eyebrow: "SOURCES AND REVIEW",
    title: "Evidence, context and review status.",
    introduction:
      "This article uses authoritative classification, regulatory material and peer-reviewed reviews. Evidence is presented by modality, with device-, protocol- and population-specific limits stated throughout.",
    items: [
      {
        title: "International Headache Society — ICHD-3",
        reference:
          "Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition: Migraine.",
        href: "https://ichd-3.org/1-migraine/",
        context:
          "Used for migraine and headache classification, terminology and the distinction between migraine subtypes and other headache disorders.",
      },
      {
        title: "World Health Organization",
        reference:
          "World Health Organization. Migraine and other headache disorders. Updated 24 October 2025.",
        href: "https://www.who.int/news-room/fact-sheets/detail/headache-disorders",
        context:
          "Used for broad, public-health-oriented migraine and headache symptom context.",
      },
      {
        title: "U.S. FDA — gammaCore-S K173442",
        reference:
          "U.S. Food and Drug Administration. gammaCore-S, 510(k) K173442. 2018.",
        href: "https://www.accessdata.fda.gov/cdrh_docs/pdf17/K173442.pdf",
        context:
          "Used only for the named prescription cervical device, neck stimulation site and defined adult migraine indication.",
      },
      {
        title: "Song et al., 2023",
        reference:
          "Song D, Li P, Wang Y, Cao J. Noninvasive vagus nerve stimulation for migraine: a systematic review and meta-analysis of randomized controlled trials. Frontiers in Neurology. 2023;14:1190062.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37251233/",
        context:
          "Used to show that outcomes and evidence need to be interpreted by cervical versus auricular modality and protocol.",
      },
      {
        title: "Fernández-Hernando et al., 2023",
        reference:
          "Fernández-Hernando D, Fernández-de-Las-Peñas C, Pareja-Grande JA, et al. Management of auricular transcutaneous neuromodulation and electro-acupuncture of the vagus nerve for chronic migraine: a systematic review. Frontiers in Neuroscience. 2023;17:1151892.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37397439/",
        context:
          "Used for the cautious summary of auricular and electro-ear migraine research, including methodological and risk-of-bias limitations.",
      },
      {
        title: "Qian et al., 2026",
        reference:
          "Qian C, Shi Y, Liu C, et al. The effectiveness of non-invasive vagus nerve stimulation in migraine management: a meta-analysis of randomized controlled trials. Frontiers in Neurology. 2026;17:1842386.",
        href: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2026.1842386/full",
        context:
          "Used for the current pooled overview of seven randomized trials while preserving the distinction between cervical and auricular approaches.",
      },
      {
        title: "Kim et al., 2022",
        reference:
          "Kim AY, Marduy A, de Melo PS, et al. Safety of transcutaneous auricular vagus nerve stimulation (taVNS): a systematic review and meta-analysis. Scientific Reports. 2022;12:22055.",
        href: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
        context:
          "Used for broad taVNS safety context and the limitation that adverse-event reporting was incomplete in many studies.",
      },
      {
        title: "Do et al., 2019 — SNNOOP10",
        reference:
          "Do TP, Remmers A, Schytz HW, et al. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology. 2019;92(3):134–144.",
        href: "https://pubmed.ncbi.nlm.nih.gov/30587518/",
        context:
          "Used as the evidence base for the conservative urgent-headache assessment block.",
      },
    ],
    evidenceReviewed: "26 August 2026",
    editorialReview: "Neuvago Editorial Team",
    disclaimer: {
      eyebrow: "IMPORTANT INFORMATION",
      paragraphs: [
        "This article is provided for general educational purposes only and is not medical advice.",
        "It is not intended to diagnose a condition or recommend treatment, and it does not replace assessment, diagnosis or care from a qualified healthcare professional.",
        "Contact a doctor or another qualified healthcare professional if you have questions about symptoms, a diagnosis or treatment.",
        "Seek urgent or emergency help for severe, sudden or rapidly worsening symptoms, or whenever you may be in immediate danger.",
      ],
      link: {
        label: "Read our full medical disclaimer",
        href: "/legal/medical-disclaimer",
      },
    },
  },
} as const satisfies ConditionArticleContent;
