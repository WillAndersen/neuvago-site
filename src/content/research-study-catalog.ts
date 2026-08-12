export type ResearchStudyCardData = {
  title: string;
  authors: string;
  year: string;
  journal: string;
  category: string;
  href: string;
  summary: string;
  libraryTitle: string;
  libraryContext: string;
};

export type FeaturedTavnsStudy = ResearchStudyCardData & {
  slug: string;
  researchArea: string;
  evidenceType: string;
  cardHeading: string;
  cardSummary: string;
  fullTitle: string;
  citation: string;
  doi: string;
  pubmedId: string;
  metaTitle: string;
  metaDescription: string;
  heroSummary: string;
  plainEnglish: {
    title: string;
    description: string;
    points: readonly {
      title: string;
      description: string;
    }[];
  };
  studyDesign: readonly {
    label: string;
    value: string;
  }[];
  keyFindings: readonly {
    title: string;
    description: string;
  }[];
  importantContext: readonly string[];
  doesNotShow: readonly string[];
  relatedLinks: readonly {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
  }[];
};

export const featuredTavnsStudies: readonly FeaturedTavnsStudy[] = [
  {
    slug: "de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis",
    researchArea: "SLEEP",
    evidenceType: "SYSTEMATIC REVIEW & META-ANALYSIS",
    cardHeading: "taVNS and sleep",
    cardSummary:
      "A 2025 systematic review and meta-analysis reported improvements in sleep quality and insomnia severity across six included studies.",
    title:
      "Transcutaneous Auricular Vagus Nerve Stimulation in Insomnia: A Systematic Review and Meta-Analysis",
    fullTitle:
      "Transcutaneous Auricular Vagus Nerve Stimulation in Insomnia: A Systematic Review and Meta-Analysis",
    authors:
      "Helen Michaela de Oliveira, Mariano Gallo Ruelas, Camilo André Viana Diaz, Guilherme Oliveira de Paula, Pablo Ramon Fruett da Costa, Julie G. Pilitsis",
    year: "2025",
    journal: "Neuromodulation: Technology at the Neural Interface",
    category: "Systematic review & meta-analysis",
    href:
      "/research/studies/de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis",
    summary:
      "A systematic review and meta-analysis of clinical research examining taVNS in people with insomnia.",
    libraryTitle: "de Oliveira et al., 2025",
    libraryContext: "taVNS, insomnia, and sleep outcomes",
    citation:
      "de Oliveira HM, Gallo Ruelas M, Viana Diaz CA, Oliveira de Paula G, Fruett da Costa PR, Pilitsis JG. Transcutaneous Auricular Vagus Nerve Stimulation in Insomnia: A Systematic Review and Meta-Analysis. Neuromodulation. 2025;28(8):1332–1340.",
    doi: "10.1016/j.neurom.2025.04.001",
    pubmedId: "40323248",
    metaTitle:
      "taVNS and Insomnia | 2025 Systematic Review and Meta-Analysis | Neuvago",
    metaDescription:
      "Read a structured summary of the 2025 systematic review and meta-analysis of transcutaneous auricular vagus nerve stimulation in insomnia.",
    heroSummary:
      "This systematic review and meta-analysis evaluated clinical research on transcutaneous auricular vagus nerve stimulation in people with insomnia.",
    plainEnglish: {
      title: "What this review adds to the taVNS field",
      description:
        "The review brings together a small clinical evidence base on taVNS and insomnia. It reported encouraging pooled findings, while rating the certainty of the evidence as limited.",
      points: [
        {
          title: "What it included",
          description:
            "Six studies involving 336 participants were included in the pooled analysis.",
        },
        {
          title: "What it reported",
          description:
            "The analysis reported statistically significant improvements in measures of sleep quality and insomnia severity.",
        },
        {
          title: "How to read it",
          description:
            "The findings are promising research context, not proof that every taVNS protocol or device will produce the same outcome.",
        },
      ],
    },
    studyDesign: [
      { label: "Study type", value: "Systematic review and meta-analysis" },
      { label: "Included studies", value: "6 studies" },
      { label: "Participants", value: "336 participants" },
      { label: "Population", value: "People with insomnia" },
      {
        label: "Outcomes",
        value: "Sleep quality and insomnia severity measures",
      },
    ],
    keyFindings: [
      {
        title: "Sleep quality",
        description:
          "The pooled analysis reported statistically significant improvement in measures of sleep quality.",
      },
      {
        title: "Insomnia severity",
        description:
          "The analysis also reported statistically significant improvement in measures of insomnia severity.",
      },
      {
        title: "A promising but developing evidence base",
        description:
          "The authors described taVNS as promising for insomnia while emphasizing the need to optimize stimulation protocols and confirm findings in broader populations.",
      },
    ],
    importantContext: [
      "The certainty of evidence was rated low for sleep quality.",
      "The certainty of evidence was rated very low for insomnia severity.",
      "Only six studies were included, and stimulation protocols and study methods require further standardization.",
    ],
    doesNotShow: [
      "The review does not establish that every taVNS protocol produces the same sleep outcome.",
      "The review is not clinical evidence for the Neuvago device itself.",
      "The findings should not be interpreted as a guaranteed treatment effect for insomnia.",
    ],
    relatedLinks: [
      {
        title: "taVNS research",
        description:
          "Explore stimulation sites, protocol variables, target engagement, safety, and interpretation across the taVNS field.",
        href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
        linkLabel: "Explore taVNS topic",
      },
      {
        title: "Autonomic regulation",
        description:
          "Place sleep research within the broader study of autonomic activity, state changes, and recovery.",
        href: "/research/topics/autonomic-regulation",
        linkLabel: "Explore autonomic research",
      },
      {
        title: "Scientific Studies Library",
        description:
          "Browse the complete collection of taVNS, VNS, autonomic, methodological, and foundational study summaries.",
        href: "/research/studies",
        linkLabel: "Browse all studies",
      },
    ],
  },
  {
    slug: "kim-2022-tavns-safety-systematic-review-meta-analysis",
    researchArea: "SAFETY & TOLERABILITY",
    evidenceType: "SYSTEMATIC REVIEW & META-ANALYSIS",
    cardHeading: "Safety and tolerability of taVNS",
    cardSummary:
      "A large systematic review and meta-analysis evaluated taVNS safety across 177 studies involving more than 6,000 participants.",
    title:
      "Safety of Transcutaneous Auricular Vagus Nerve Stimulation (taVNS): A Systematic Review and Meta-Analysis",
    fullTitle:
      "Safety of Transcutaneous Auricular Vagus Nerve Stimulation (taVNS): A Systematic Review and Meta-Analysis",
    authors:
      "Angela Yun Kim, Anna Marduy, Paulo S. de Melo, Anna Carolyna Gianlorenco, Chi Kyung Kim, Hyuk Choi, Jae-Jun Song, Felipe Fregni",
    year: "2022",
    journal: "Scientific Reports",
    category: "Systematic review & meta-analysis",
    href:
      "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis",
    summary:
      "A large systematic review and meta-analysis examining adverse-event and safety reporting across the taVNS literature.",
    libraryTitle: "Kim et al., 2022",
    libraryContext: "taVNS safety and tolerability",
    citation:
      "Kim AY, Marduy A, de Melo PS, Gianlorenco AC, Kim CK, Choi H, Song JJ, Fregni F. Safety of transcutaneous auricular vagus nerve stimulation (taVNS): a systematic review and meta-analysis. Scientific Reports. 2022;12:22055.",
    doi: "10.1038/s41598-022-25864-1",
    pubmedId: "36543841",
    metaTitle:
      "taVNS Safety and Tolerability | 2022 Systematic Review | Neuvago",
    metaDescription:
      "Read a structured summary of the 2022 systematic review and meta-analysis of taVNS safety across 177 studies and 6,322 participants.",
    heroSummary:
      "This systematic review and meta-analysis examined safety reporting across 177 taVNS studies involving 6,322 participants.",
    plainEnglish: {
      title: "A broad view of reported taVNS safety",
      description:
        "The review assembled safety information across a large and diverse body of taVNS research. Its findings are useful, but incomplete adverse-event reporting limits certainty.",
      points: [
        {
          title: "Research scale",
          description:
            "The review included 177 studies involving 6,322 participants.",
        },
        {
          title: "Overall adverse-event risk",
          description:
            "The meta-analysis found no difference in overall adverse-event risk between active taVNS and control conditions.",
        },
        {
          title: "Reporting matters",
          description:
            "Adverse-event reporting was incomplete across a substantial proportion of the included literature.",
        },
      ],
    },
    studyDesign: [
      { label: "Study type", value: "Systematic review and meta-analysis" },
      { label: "Included studies", value: "177 studies" },
      { label: "Participants", value: "6,322 participants" },
      {
        label: "Main focus",
        value: "Adverse events, safety reporting, and tolerability",
      },
    ],
    keyFindings: [
      {
        title: "Overall risk comparison",
        description:
          "The meta-analysis found no difference in the overall risk of developing an adverse event between active taVNS and control conditions.",
      },
      {
        title: "Frequently reported events",
        description:
          "The most frequently reported adverse events included ear pain, headache, and tingling.",
      },
      {
        title: "Serious adverse events",
        description:
          "The authors found no causal relationship between taVNS and serious adverse events in the reviewed research.",
      },
    ],
    importantContext: [
      "Adverse-event reporting was incomplete across a substantial proportion of the included studies.",
      "Absence of an identified causal relationship is not the same as proof that every taVNS protocol is risk-free.",
      "Safety findings from a broad literature cannot automatically be transferred to every device, stimulation site, protocol, or user.",
    ],
    doesNotShow: [
      "The review does not establish that taVNS has no risks.",
      "It does not replace product-specific contraindications, warnings, instructions, or professional advice.",
      "It is not clinical safety evidence for the Neuvago device itself.",
    ],
    relatedLinks: [
      {
        title: "Safety and Tolerability",
        description:
          "Explore adverse-event reporting, study populations, protocol differences, and responsible interpretation.",
        href: "/research/topics/safety-and-tolerability",
        linkLabel: "Explore safety topic",
      },
      {
        title: "taVNS research",
        description:
          "Review the broader auricular stimulation field and the variables that affect interpretation.",
        href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
        linkLabel: "Explore taVNS topic",
      },
      {
        title: "Scientific Studies Library",
        description:
          "Browse the complete collection of study summaries and foundational research.",
        href: "/research/studies",
        linkLabel: "Browse all studies",
      },
    ],
  },
  {
    slug: "frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    researchArea: "BRAIN PATHWAYS",
    evidenceType: "NEUROIMAGING / fMRI",
    cardHeading: "How auricular stimulation reaches vagal pathways",
    cardSummary:
      "Human fMRI research found that electrical stimulation of the outer ear can engage central pathways associated with the vagus nerve.",
    title:
      "Non-Invasive Access to the Vagus Nerve Central Projections via Electrical Stimulation of the External Ear: fMRI Evidence in Humans",
    fullTitle:
      "Non-Invasive Access to the Vagus Nerve Central Projections via Electrical Stimulation of the External Ear: fMRI Evidence in Humans",
    authors: "Eleni Frangos, Jens Ellrich, Barry R. Komisaruk",
    year: "2015",
    journal: "Brain Stimulation",
    category: "Neuroimaging / fMRI",
    href:
      "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    summary:
      "A human fMRI study examining whether stimulation at the outer ear can engage central pathways associated with the vagus nerve.",
    libraryTitle: "Frangos et al., 2015",
    libraryContext: "Auricular stimulation and central vagal pathways",
    citation:
      "Frangos E, Ellrich J, Komisaruk BR. Non-invasive Access to the Vagus Nerve Central Projections via Electrical Stimulation of the External Ear: fMRI Evidence in Humans. Brain Stimulation. 2015;8(3):624–636.",
    doi: "10.1016/j.brs.2014.11.018",
    pubmedId: "25573069",
    metaTitle:
      "Frangos 2015 | Auricular Vagus Nerve Stimulation fMRI | Neuvago",
    metaDescription:
      "Read a structured summary of the Frangos 2015 human fMRI study of auricular stimulation and central vagal pathways.",
    heroSummary:
      "This human neuroimaging study investigated whether non-invasive electrical stimulation of the auricular branch of the vagus nerve could engage central vagal pathways.",
    plainEnglish: {
      title: "What the Frangos study shows",
      description:
        "The study provides human neuroimaging evidence that stimulation at an auricular region can engage brainstem and central pathways associated with vagal signalling.",
      points: [
        {
          title: "Who took part",
          description: "Twelve healthy adults participated in the study.",
        },
        {
          title: "What researchers did",
          description:
            "Participants received mild electrical stimulation at the left cymba conchae while undergoing functional MRI.",
        },
        {
          title: "Why it matters",
          description:
            "The work provided mechanistic target-engagement context for the developing taVNS field.",
        },
      ],
    },
    studyDesign: [
      { label: "Study type", value: "Human neuroimaging / fMRI" },
      { label: "Participants", value: "12 healthy adults" },
      { label: "Stimulation site", value: "Left cymba conchae" },
      {
        label: "Main method",
        value: "Functional magnetic resonance imaging during stimulation",
      },
    ],
    keyFindings: [
      {
        title: "Nucleus tractus solitarius",
        description:
          "The researchers observed activation of the nucleus tractus solitarius, the primary brainstem sensory nucleus associated with vagal afferent signalling.",
      },
      {
        title: "Central vagal projections",
        description:
          "Activity was also observed across other central projections associated with vagal pathways.",
      },
      {
        title: "Human target-engagement context",
        description:
          "The study provided human neuroimaging evidence that electrical stimulation at the outer ear can engage pathways associated with the vagus nerve.",
      },
    ],
    importantContext: [
      "This was a small mechanistic study involving twelve healthy adults.",
      "Neuroimaging activation does not by itself establish a clinical treatment effect.",
      "The findings should be interpreted in relation to the specific stimulation site, protocol, population, and imaging method used.",
    ],
    doesNotShow: [
      "The study does not demonstrate that every auricular stimulation protocol engages identical pathways.",
      "It does not establish a clinical benefit in a patient population.",
      "It is not clinical evidence for the Neuvago device itself.",
    ],
    relatedLinks: [
      {
        title: "taVNS research",
        description:
          "Explore auricular placement, protocol variables, target engagement, and interpretation across the wider field.",
        href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
        linkLabel: "Explore taVNS topic",
      },
      {
        title: "Vagus Nerve Stimulation",
        description:
          "Place auricular stimulation within the broader history of implanted and non-invasive VNS research.",
        href: "/research/topics/vagus-nerve-stimulation",
        linkLabel: "Explore VNS topic",
      },
      {
        title: "Scientific Studies Library",
        description:
          "Browse the complete collection of study summaries and foundational research.",
        href: "/research/studies",
        linkLabel: "Browse all studies",
      },
    ],
  },
  {
    slug: "soltani-2023-tavns-heart-rate-variability-systematic-review",
    researchArea: "AUTONOMIC FUNCTION & HRV",
    evidenceType: "SYSTEMATIC REVIEW",
    cardHeading: "taVNS and heart rate variability",
    cardSummary:
      "A systematic review found changes across several HRV measures in taVNS studies, while highlighting substantial variation between stimulation protocols and study designs.",
    title:
      "A Systematic Review of the Effects of Transcutaneous Auricular Vagus Nerve Stimulation on Baroreflex Sensitivity and Heart Rate Variability in Healthy Subjects",
    fullTitle:
      "A Systematic Review of the Effects of Transcutaneous Auricular Vagus Nerve Stimulation on Baroreflex Sensitivity and Heart Rate Variability in Healthy Subjects",
    authors:
      "Danesh Soltani, Bayan Azizi, Sepehr Sima, Kiarash Tavakoli, Negin Sadat Hosseini Mohammadi, Abdol-Hossein Vahabie, Kaveh Akbarzadeh-Sherbaf, Ali Vasheghani-Farahani",
    year: "2023",
    journal: "Clinical Autonomic Research",
    category: "Systematic review",
    href:
      "/research/studies/soltani-2023-tavns-heart-rate-variability-systematic-review",
    summary:
      "A systematic review of controlled taVNS studies examining heart rate variability and baroreflex sensitivity in healthy participants.",
    libraryTitle: "Soltani et al., 2023",
    libraryContext: "taVNS, autonomic function, and HRV",
    citation:
      "Soltani D, Azizi B, Sima S, Tavakoli K, Hosseini Mohammadi NS, Vahabie AH, Akbarzadeh-Sherbaf K, Vasheghani-Farahani A. A systematic review of the effects of transcutaneous auricular vagus nerve stimulation on baroreflex sensitivity and heart rate variability in healthy subjects. Clinical Autonomic Research. 2023;33(2):165–189.",
    doi: "10.1007/s10286-023-00938-w",
    pubmedId: "37119426",
    metaTitle:
      "taVNS and Heart Rate Variability | 2023 Systematic Review | Neuvago",
    metaDescription:
      "Read a structured summary of the 2023 systematic review of taVNS, heart rate variability, and baroreflex sensitivity in healthy participants.",
    heroSummary:
      "This systematic review examined controlled studies investigating the effects of taVNS on heart rate variability and baroreflex sensitivity in healthy participants.",
    plainEnglish: {
      title: "How taVNS is being studied in autonomic research",
      description:
        "The review shows that HRV and baroreflex measures are active areas of taVNS research. Findings varied substantially across measures, protocols, and study designs.",
      points: [
        {
          title: "What it included",
          description:
            "Twenty-one controlled studies in healthy participants were included.",
        },
        {
          title: "What researchers measured",
          description:
            "The review examined HRV measures and baroreflex sensitivity.",
        },
        {
          title: "Why interpretation is careful",
          description:
            "Results were mixed, and protocol and design differences likely contributed to variability.",
        },
      ],
    },
    studyDesign: [
      { label: "Study type", value: "Systematic review" },
      { label: "Included studies", value: "21 controlled studies" },
      { label: "Population", value: "Healthy participants" },
      {
        label: "Outcomes",
        value: "Heart rate variability and baroreflex sensitivity",
      },
    ],
    keyFindings: [
      {
        title: "Several HRV measures showed responsiveness",
        description:
          "Significant changes were reported in several HRV measures across a substantial proportion of included studies, including SDNN, RMSSD, and pNN50.",
      },
      {
        title: "Findings varied",
        description:
          "Results differed across HRV measures and studies rather than showing one uniform response.",
      },
      {
        title: "Protocol differences matter",
        description:
          "The authors concluded that differences in study design and stimulation parameters likely contributed to mixed findings.",
      },
    ],
    importantContext: [
      "The review included healthy participants, which limits generalization to clinical populations.",
      "HRV metrics are influenced by measurement methods, recording conditions, analysis choices, and study design.",
      "The evidence should not be simplified to the statement that taVNS increases HRV.",
    ],
    doesNotShow: [
      "The review does not establish a uniform increase in HRV across protocols or measures.",
      "It does not identify one universally optimal stimulation protocol.",
      "It is not clinical evidence for the Neuvago device itself.",
    ],
    relatedLinks: [
      {
        title: "Heart Rate Variability",
        description:
          "Explore HRV measurement, interpretation, autonomic context, and the limits of using one marker in isolation.",
        href: "/research/topics/heart-rate-variability",
        linkLabel: "Explore HRV topic",
      },
      {
        title: "Autonomic Regulation",
        description:
          "Place HRV findings within broader sympathetic and parasympathetic research.",
        href: "/research/topics/autonomic-regulation",
        linkLabel: "Explore autonomic topic",
      },
      {
        title: "taVNS research",
        description:
          "Review the wider auricular stimulation field and the protocol variables that affect interpretation.",
        href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
        linkLabel: "Explore taVNS topic",
      },
      {
        title: "Scientific Studies Library",
        description:
          "Browse the complete collection of study summaries and foundational research.",
        href: "/research/studies",
        linkLabel: "Browse all studies",
      },
    ],
  },
] as const;

const foundationalStudyCatalog: readonly ResearchStudyCardData[] = [
  {
    title: "Orienting in a Defensive World: The Polyvagal Theory",
    authors: "Stephen W. Porges",
    year: "1995",
    journal: "Psychophysiology",
    category: "Foundation",
    href: "/research/studies/porges-1995-polyvagal-theory",
    summary:
      "A foundational theory linking vagal pathways with safety, defensive responses, and the social engagement system.",
    libraryTitle: "Porges, 1995",
    libraryContext: "Polyvagal theory",
  },
  {
    title:
      "A Model of Neurovisceral Integration in Emotion Regulation",
    authors: "Julian F. Thayer & Richard D. Lane",
    year: "2000",
    journal: "Journal of Affective Disorders",
    category: "Autonomic regulation",
    href: "/research/studies/thayer-lane-2000-neurovisceral-integration",
    summary:
      "A key theoretical model linking the brain, emotional regulation, vagal activity, and autonomic flexibility.",
    libraryTitle: "Thayer & Lane, 2000",
    libraryContext: "Neurovisceral integration",
  },
  {
    title:
      "Heart Rate Variability: Standards of Measurement, Physiological Interpretation, and Clinical Use",
    authors:
      "Task Force of the European Society of Cardiology and NASPE",
    year: "1996",
    journal: "Circulation",
    category: "HRV methodology",
    href:
      "/research/studies/task-force-1996-heart-rate-variability-standards",
    summary:
      "The foundational methodological paper behind HRV research across autonomic physiology, stress, sleep, and regulation studies.",
    libraryTitle: "Task Force, 1996",
    libraryContext: "Heart rate variability standards",
  },
  {
    title:
      "Vagus Nerve Stimulation Attenuates the Systemic Inflammatory Response",
    authors: "L. V. Borovikova et al.",
    year: "2000",
    journal: "Nature",
    category: "Experimental research",
    href:
      "/research/studies/borovikova-2000-vagus-nerve-inflammation",
    summary:
      "A landmark experimental study suggesting that vagus nerve signalling may influence inflammatory cytokine release.",
    libraryTitle: "Borovikova et al., 2000",
    libraryContext: "Vagus nerve and inflammation",
  },
  {
    title: "The Inflammatory Reflex",
    authors: "Kevin J. Tracey",
    year: "2002",
    journal: "Nature",
    category: "Foundational concept",
    href: "/research/studies/inflammatory-reflex-tracey-2002",
    summary:
      "A foundational concept describing how neural pathways may detect and regulate inflammatory activity through reflex-like mechanisms.",
    libraryTitle: "Tracey, 2002",
    libraryContext: "The inflammatory reflex",
  },
  {
    title: "The Cholinergic Anti-Inflammatory Pathway",
    authors: "Valentin A. Pavlov & Kevin J. Tracey",
    year: "2005",
    journal: "Brain, Behavior, and Immunity",
    category: "Review",
    href:
      "/research/studies/pavlov-tracey-2005-cholinergic-anti-inflammatory-pathway",
    summary:
      "A major review describing how vagal cholinergic signalling may influence cytokine release and immune regulation.",
    libraryTitle: "Pavlov & Tracey, 2005",
    libraryContext: "Cholinergic anti-inflammatory pathway",
  },
  {
    title:
      "Vagus Nerve Stimulation for Treatment-Resistant Depression",
    authors: "A. John Rush et al.",
    year: "2005",
    journal: "Biological Psychiatry",
    category: "Implanted VNS",
    href:
      "/research/studies/rush-2005-vagus-nerve-stimulation-depression",
    summary:
      "A widely cited clinical study examining implanted vagus nerve stimulation in treatment-resistant depression.",
    libraryTitle: "Rush et al., 2005",
    libraryContext: "Implanted VNS and treatment-resistant depression",
  },
  {
    title:
      "Gut Feelings: The Emerging Biology of Gut–Brain Communication",
    authors: "Emeran A. Mayer",
    year: "2011",
    journal: "Nature Reviews Neuroscience",
    category: "Gut–brain",
    href: "/research/studies/mayer-2011-gut-brain-axis",
    summary:
      "A major review explaining how neural, hormonal, microbial, and immune pathways connect the digestive system with the brain.",
    libraryTitle: "Mayer, 2011",
    libraryContext: "Gut–brain communication",
  },
] as const;

export const researchStudyCatalog: readonly ResearchStudyCardData[] = [
  ...featuredTavnsStudies,
  ...foundationalStudyCatalog,
];

export const researchStudyGroups = [
  {
    title: "Foundational frameworks",
    studies: foundationalStudyCatalog.filter((study) =>
      [
        "/research/studies/porges-1995-polyvagal-theory",
        "/research/studies/thayer-lane-2000-neurovisceral-integration",
      ].includes(study.href),
    ),
  },
  {
    title: "Autonomic regulation and HRV",
    studies: foundationalStudyCatalog.filter(
      (study) =>
        study.href ===
        "/research/studies/task-force-1996-heart-rate-variability-standards",
    ),
  },
  {
    title: "Inflammation and neuroimmune signalling",
    studies: foundationalStudyCatalog.filter((study) =>
      [
        "/research/studies/borovikova-2000-vagus-nerve-inflammation",
        "/research/studies/inflammatory-reflex-tracey-2002",
        "/research/studies/pavlov-tracey-2005-cholinergic-anti-inflammatory-pathway",
      ].includes(study.href),
    ),
  },
  {
    title: "Vagus nerve stimulation",
    studies: foundationalStudyCatalog.filter(
      (study) =>
        study.href ===
        "/research/studies/rush-2005-vagus-nerve-stimulation-depression",
    ),
  },
  {
    title: "Gut–brain axis",
    studies: foundationalStudyCatalog.filter(
      (study) =>
        study.href === "/research/studies/mayer-2011-gut-brain-axis",
    ),
  },
] as const;

export function getFeaturedTavnsStudy(
  slug: string,
): FeaturedTavnsStudy {
  const study = featuredTavnsStudies.find(
    (candidate) => candidate.slug === slug,
  );

  if (!study) {
    throw new Error(`Unknown Featured taVNS study: ${slug}`);
  }

  return study;
}
