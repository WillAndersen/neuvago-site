export type ResearchV2Cta = {
  label: string;
  href: string;
};

export type ResearchV2Image = {
  src: string;
  alt: string;
};

export type ResearchV2Card = {
  title: string;
  description: string;
};

export type ResearchV2LinkCard = ResearchV2Card & {
  href: string;
  linkLabel: string;
};

export type ResearchV2ExplorationCard = ResearchV2Card & {
  label: string;
  href?: string;
  linkLabel?: string;
};

export type ResearchV2StudyCard = {
  label: string;
  title: string;
  authors: string;
  year: string;
  journal: string;
  description: string;
  href: string;
};

export type ResearchV2StudyLink = {
  title: string;
  context: string;
  href: string;
};

export type ResearchV2DepthItem = {
  title: string;
  paragraphs: readonly string[];
};

export const researchV2Content = {
  hero: {
    eyebrow: "Research",
    title: "The science behind vagus nerve stimulation.",
    description:
      "Vagus nerve stimulation has been studied for decades. A growing body of research is now exploring non-invasive approaches, including transcutaneous auricular vagus nerve stimulation, or taVNS.",
    secondaryDescription:
      "Research is exploring taVNS across areas including autonomic regulation, sleep, stress, heart rate variability, brain pathways, safety, and tolerability.",
    primaryCta: {
      label: "Explore taVNS research",
      href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    } satisfies ResearchV2Cta,
    secondaryCta: {
      label: "Browse scientific studies",
      href: "/research/studies",
    } satisfies ResearchV2Cta,
    proofLine: [
      "Decades of VNS research",
      "Growing taVNS field",
      "Findings vary by protocol and population",
    ],
    hierarchy: [
      {
        abbreviation: "VNS",
        name: "Vagus Nerve Stimulation",
        description: "The broader field.",
      },
      {
        abbreviation: "tVNS",
        name: "Transcutaneous Vagus Nerve Stimulation",
        description: "Non-invasive stimulation through the skin.",
      },
      {
        abbreviation: "taVNS",
        name: "Transcutaneous Auricular Vagus Nerve Stimulation",
        description: "The auricular, ear-based research direction.",
      },
    ],
  },

  closest: {
    eyebrow: "The research closest to Neuvago",
    title: "taVNS is the most relevant research category for an auricular approach.",
    description:
      "Neuvago uses an auricular, ear-based approach to non-invasive vagus nerve stimulation. The research field most closely related to this technology is known as transcutaneous auricular vagus nerve stimulation, or taVNS.",
    boundary:
      "Research on taVNS provides scientific context for the technology category. It should not be interpreted as clinical evidence for the Neuvago device itself.",
    image: {
      src: "/images/neuvago/auricular-vns-education-desktop.webp",
      alt: "Neuvago device beside a clean illustration of the outer ear.",
    } satisfies ResearchV2Image,
    mobileImage: {
      src: "/images/neuvago/auricular-vns-education-mobile.webp",
      alt: "Neuvago device beside a clean illustration of the outer ear.",
    } satisfies ResearchV2Image,
    primaryCta: {
      label: "Explore taVNS research",
      href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    } satisfies ResearchV2Cta,
    secondaryCta: {
      label: "Read the Frangos 2015 summary",
      href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    } satisfies ResearchV2Cta,
  },

  topics: {
    eyebrow: "Core Research Topics",
    title: "Start with the technology, then explore the related research areas.",
    description:
      "Begin with VNS and transcutaneous VNS, then move into related research on safety, autonomic function, HRV, inflammation, and gut–brain communication.",
    primary: [
      {
        title: "Vagus Nerve Stimulation",
        description:
          "The broader research field covering implanted and non-invasive approaches, neuromodulation, mechanisms, and brain–body pathways.",
        href: "/research/topics/vagus-nerve-stimulation",
        linkLabel: "Explore VNS research",
      },
      {
        title: "Transcutaneous VNS and taVNS",
        description:
          "Research on stimulation through the skin, auricular approaches, stimulation sites, protocol variables, target engagement, safety, and interpretation.",
        href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
        linkLabel: "Explore tVNS and taVNS",
      },
    ] satisfies ResearchV2LinkCard[],
    related: [
      {
        title: "Safety and Tolerability",
        description:
          "Reported adverse events, tolerability, contraindication awareness, study populations, and responsible interpretation.",
        href: "/research/topics/safety-and-tolerability",
        linkLabel: "Explore safety research",
      },
      {
        title: "Autonomic Regulation",
        description:
          "Sympathetic and parasympathetic activity, vagal regulation, stress physiology, recovery, and state-shifting.",
        href: "/research/topics/autonomic-regulation",
        linkLabel: "Explore autonomic research",
      },
      {
        title: "Heart Rate Variability",
        description:
          "HRV methodology, autonomic flexibility, physiological interpretation, and the limits of using one marker in isolation.",
        href: "/research/topics/heart-rate-variability",
        linkLabel: "Explore HRV research",
      },
      {
        title: "Inflammation",
        description:
          "Neuroimmune communication, the inflammatory reflex, cytokine signalling, and cholinergic pathways.",
        href: "/research/topics/inflammation",
        linkLabel: "Explore inflammation research",
      },
      {
        title: "Gut–Brain Axis",
        description:
          "Neural, hormonal, microbial, and immune communication between the digestive system and the brain.",
        href: "/research/topics/gut-brain-axis",
        linkLabel: "Explore gut–brain research",
      },
    ] satisfies ResearchV2LinkCard[],
    allTopicsCta: {
      label: "Browse all research topics",
      href: "/research/topics",
    } satisfies ResearchV2Cta,
  },

  exploring: {
    eyebrow: "taVNS research areas",
    title: "What is taVNS research exploring?",
    description:
      "Research has reported encouraging findings across several areas, while results vary between studies, stimulation protocols, control conditions, outcomes, and populations.",
    cards: [
      {
        label: "Autonomic function",
        title: "Autonomic Regulation",
        description:
          "Research exploring the relationship between vagal stimulation and autonomic activity.",
        href: "/research/topics/autonomic-regulation",
        linkLabel: "Explore topic",
      },
      {
        label: "Physiological response",
        title: "Stress",
        description:
          "Research examining stress-related physiological and autonomic responses.",
        href: undefined,
        linkLabel: undefined,
      },
      {
        label: "Rest and recovery",
        title: "Sleep",
        description:
          "Research exploring taVNS in relation to sleep quality, insomnia, and sleep-related outcomes.",
        href: undefined,
        linkLabel: undefined,
      },
      {
        label: "Autonomic marker",
        title: "Heart Rate Variability",
        description:
          "Research examining HRV and other markers associated with autonomic function.",
        href: "/research/topics/heart-rate-variability",
        linkLabel: "Explore topic",
      },
      {
        label: "Neuroimaging",
        title: "Brain Pathways",
        description:
          "Research investigating how auricular vagus nerve stimulation engages neural pathways and brain regions.",
        href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
        linkLabel: "Read featured study",
      },
      {
        label: "Human studies",
        title: "Safety & Tolerability",
        description:
          "Research examining adverse events, tolerability, and safety across human taVNS studies.",
        href: "/research/topics/safety-and-tolerability",
        linkLabel: "Explore topic",
      },
    ] satisfies ResearchV2ExplorationCard[],
  },

  featured: {
    eyebrow: "Featured taVNS Research",
    title: "Auricular stimulation and brain pathways.",
    description:
      "Frangos et al. 2015 used fMRI to examine whether electrical stimulation at an auricular region could engage central brain pathways associated with the vagus nerve.",
    study: {
      label: "NEUROIMAGING",
      title:
        "Non-Invasive Access to the Vagus Nerve via the Ear: fMRI Evidence",
      authors: "E. Frangos, J. Ellrich, B. Komisaruk",
      year: "2015",
      journal: "Brain Stimulation",
      description:
        "An influential fMRI study examining whether electrical stimulation of an auricular region can engage central brain pathways associated with the vagus nerve.",
      href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    } satisfies ResearchV2StudyCard,
    contextCards: [
      {
        title: "Explore the full taVNS topic",
        description:
          "Read about auricular placement, protocol variables, target engagement, reporting standards, safety, and interpretation.",
        href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
        linkLabel: "Explore taVNS research",
      },
      {
        title: "Browse the complete studies library",
        description:
          "Move from the featured auricular study into the full library of foundational, methodological, experimental, and broader VNS papers.",
        href: "/research/studies",
        linkLabel: "Browse all studies",
      },
    ] satisfies ResearchV2LinkCard[],
    boundary:
      "This study provides important neuroimaging context for auricular stimulation. It does not establish that every ear-based protocol, device, or user will produce the same effects.",
  },

  foundations: {
    eyebrow: "Foundational Science",
    title: "The wider science behind autonomic, vagal, immune, and gut–brain research.",
    description:
      "These study summaries provide important theoretical, methodological, experimental, and review-level context for the broader science behind vagal and autonomic research.",
    labelNote:
      "The labels describe each paper’s role in the library. They are not a ranking of evidence strength.",
    studies: [
      {
        label: "FOUNDATIONAL THEORY",
        title: "Orienting in a Defensive World: The Polyvagal Theory",
        authors: "Stephen W. Porges",
        year: "1995",
        journal: "Psychophysiology",
        description:
          "A foundational theory linking vagal pathways with safety, defensive responses, and social engagement.",
        href: "/research/studies/porges-1995-polyvagal-theory",
      },
      {
        label: "CONCEPTUAL MODEL",
        title: "A Model of Neurovisceral Integration in Emotion Regulation",
        authors: "Julian F. Thayer & Richard D. Lane",
        year: "2000",
        journal: "Journal of Affective Disorders",
        description:
          "A model connecting brain systems, emotional regulation, autonomic flexibility, HRV, and vagal activity.",
        href: "/research/studies/thayer-lane-2000-neurovisceral-integration",
      },
      {
        label: "METHODOLOGY",
        title:
          "Heart Rate Variability: Standards of Measurement, Physiological Interpretation, and Clinical Use",
        authors:
          "Task Force of the European Society of Cardiology and NASPE",
        year: "1996",
        journal: "Circulation",
        description:
          "The foundational methodological reference for HRV measurement and interpretation.",
        href: "/research/studies/task-force-1996-heart-rate-variability-standards",
      },
      {
        label: "EXPERIMENTAL RESEARCH",
        title:
          "Vagus Nerve Stimulation Attenuates the Systemic Inflammatory Response",
        authors: "L. V. Borovikova et al.",
        year: "2000",
        journal: "Nature",
        description:
          "A landmark experimental study on vagal signalling and inflammatory cytokine responses.",
        href: "/research/studies/borovikova-2000-vagus-nerve-inflammation",
      },
      {
        label: "FOUNDATIONAL CONCEPT",
        title: "The Inflammatory Reflex",
        authors: "Kevin J. Tracey",
        year: "2002",
        journal: "Nature",
        description:
          "A foundational concept describing how neural pathways may detect and regulate inflammatory activity.",
        href: "/research/studies/inflammatory-reflex-tracey-2002",
      },
      {
        label: "REVIEW",
        title: "The Cholinergic Anti-Inflammatory Pathway",
        authors: "Valentin A. Pavlov & Kevin J. Tracey",
        year: "2005",
        journal: "Brain, Behavior, and Immunity",
        description:
          "A review of cholinergic signalling, cytokine release, and neural regulation of inflammation.",
        href: "/research/studies/pavlov-tracey-2005-cholinergic-anti-inflammatory-pathway",
      },
      {
        label: "REVIEW",
        title: "Gut Feelings: The Emerging Biology of Gut–Brain Communication",
        authors: "Emeran A. Mayer",
        year: "2011",
        journal: "Nature Reviews Neuroscience",
        description:
          "A major review of neural, hormonal, microbial, and immune communication between the gut and brain.",
        href: "/research/studies/mayer-2011-gut-brain-axis",
      },
    ] satisfies ResearchV2StudyCard[],
  },

  approach: {
    eyebrow: "How We Approach Research",
    title: "Clear evidence, careful context, no shortcuts.",
    description:
      "Research should make the field easier to understand without turning external studies into claims for a specific wellness product.",
    principles: [
      {
        title: "Evidence first",
        description:
          "We use peer-reviewed research to understand the science surrounding VNS, tVNS, taVNS, and nervous system regulation.",
      },
      {
        title: "Context matters",
        description:
          "Results from one device, stimulation protocol, study population, or clinical setting cannot automatically be applied to every device or user.",
      },
      {
        title: "No shortcuts",
        description:
          "Research informs Neuvago’s education and scientific context. It is not presented as clinical evidence for the Neuvago device itself.",
      },
    ] satisfies ResearchV2Card[],
  },

  library: {
    eyebrow: "Scientific Studies Library",
    title: "Browse the Scientific Studies Library.",
    description:
      "Explore research topics and study summaries organised around stimulation technology, autonomic science, safety, HRV, inflammation, and gut–brain communication.",
    stats: [
      {
        value: "7",
        label: "Research topics",
      },
      {
        value: "9",
        label: "Study summaries",
      },
      {
        value: "3",
        label: "Technology levels",
      },
    ],
    primaryCta: {
      label: "Browse scientific studies",
      href: "/research/studies",
    } satisfies ResearchV2Cta,
    secondaryCta: {
      label: "Explore all topics",
      href: "/research/topics",
    } satisfies ResearchV2Cta,
    studies: [
      {
        title: "Porges, 1995",
        context: "Polyvagal theory",
        href: "/research/studies/porges-1995-polyvagal-theory",
      },
      {
        title: "Task Force, 1996",
        context: "Heart rate variability standards",
        href: "/research/studies/task-force-1996-heart-rate-variability-standards",
      },
      {
        title: "Thayer & Lane, 2000",
        context: "Neurovisceral integration",
        href: "/research/studies/thayer-lane-2000-neurovisceral-integration",
      },
      {
        title: "Borovikova et al., 2000",
        context: "Vagus nerve and inflammation",
        href: "/research/studies/borovikova-2000-vagus-nerve-inflammation",
      },
      {
        title: "Tracey, 2002",
        context: "The inflammatory reflex",
        href: "/research/studies/inflammatory-reflex-tracey-2002",
      },
      {
        title: "Pavlov & Tracey, 2005",
        context: "Cholinergic anti-inflammatory pathway",
        href: "/research/studies/pavlov-tracey-2005-cholinergic-anti-inflammatory-pathway",
      },
      {
        title: "Rush et al., 2005",
        context: "Implanted VNS and treatment-resistant depression",
        href: "/research/studies/rush-2005-vagus-nerve-stimulation-depression",
      },
      {
        title: "Mayer, 2011",
        context: "Gut–brain communication",
        href: "/research/studies/mayer-2011-gut-brain-axis",
      },
      {
        title: "Frangos et al., 2015",
        context: "Auricular stimulation and fMRI",
        href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
      },
    ] satisfies ResearchV2StudyLink[],
    depthTitle: "Understand the evidence in more depth.",
    depthDescription:
      "Explore terminology, stimulation protocols, and the reasons findings can vary between studies.",
    depthItems: [
      {
        title: "Understanding VNS, tVNS, and taVNS",
        paragraphs: [
          "VNS is the broad field of vagus nerve stimulation. tVNS describes transcutaneous approaches delivered through the skin. taVNS is the auricular branch of that category and focuses on stimulation at the outer ear.",
          "These terms are related, but they are not interchangeable with every implanted, cervical, auricular, clinical, or wellness protocol.",
        ],
      },
      {
        title: "Why stimulation protocols matter",
        paragraphs: [
          "Placement, frequency, pulse width, intensity, waveform, duty cycle, session length, sham design, study population, and measured outcome can all change how a study should be interpreted.",
          "A finding from one protocol should not automatically be generalised to every other protocol or device.",
        ],
      },
      {
        title: "Why results vary between studies",
        paragraphs: [
          "Studies may examine different populations, devices, controls, physiological markers, symptoms, imaging outcomes, or clinical settings.",
          "The Research library keeps those differences visible so that encouraging findings are read with the context needed to understand their limits.",
        ],
      },
    ] satisfies ResearchV2DepthItem[],
  },

  continue: {
    eyebrow: "Continue exploring",
    title: "Move from research into technology or plain-language learning.",
    description:
      "Research provides the evidence context. How it Works explains the Neuvago approach, while Learn provides accessible education about the vagus nerve and nervous system.",
    cards: [
      {
        title: "How Neuvago works",
        description:
          "Understand the device, ear-based application, adjustable stimulation, intended use, and product boundaries.",
        href: "/how-it-works",
        linkLabel: "Go to How it Works",
      },
      {
        title: "Learn about the vagus nerve",
        description:
          "Explore plain-language guides to the vagus nerve, autonomic nervous system, tVNS, taVNS, stress, sleep, and recovery.",
        href: "/learn",
        linkLabel: "Go to Learn",
      },
    ] satisfies ResearchV2LinkCard[],
  },
} as const;
