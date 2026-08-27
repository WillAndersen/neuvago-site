import type { ConditionArticleContent } from "@/components/conditions-article";

export const gutBrainDigestionArticle = {
  hero: {
    eyebrow: "GUT–BRAIN & DIGESTION",
    title: "Gut–brain function, digestion and the nervous system",
    introduction:
      "The gut and brain communicate in both directions through neural, immune, hormonal and microbial pathways. These systems help coordinate digestion, sensation and responses to signals from inside and outside the body.",
    supportingCopy:
      "Digestive symptoms can have many different causes. This article explains what gut–brain interaction means, where the vagus nerve fits into the wider network, and what early condition-specific taVNS research can and cannot establish.",
  },
  sections: [
    {
      id: "gut-brain-connection",
      eyebrow: "THE GUT–BRAIN CONNECTION",
      title: "A two-way communication system, not a single pathway.",
      paragraphs: [
        "The digestive tract has its own enteric nervous system and exchanges information with the brain through vagal and spinal pathways, hormones, immune signalling and metabolites associated with the gut microbiome.",
        "These signals contribute to digestive movement, secretion, sensitivity and the way internal sensations are interpreted.",
        "The gut–brain axis is therefore a network. It should not be reduced to the vagus nerve alone, and it should not be used as a universal explanation for digestive symptoms.",
      ],
      tone: "light",
    },
    {
      id: "digestive-symptoms",
      eyebrow: "DIGESTIVE SYMPTOMS",
      title: "Similar symptoms can arise for different reasons.",
      paragraphs: [
        "Abdominal pain, bloating, constipation, diarrhea, nausea, early fullness and upper-abdominal discomfort can occur across many different digestive conditions.",
        "Some recurring symptom patterns are classified as disorders of gut–brain interaction. Others may relate to inflammation, infection, structural disease, medicine effects, food intolerance, metabolic conditions or other causes.",
        "The presence of stress, anxiety or symptom fluctuation does not mean that digestive symptoms are imagined, and it does not identify the cause on its own.",
      ],
      tone: "warm",
    },
    {
      id: "gut-brain-interaction",
      eyebrow: "GUT–BRAIN INTERACTION",
      title: "IBS and functional dyspepsia are two important examples.",
      rows: [
        {
          title: "Irritable bowel syndrome",
          description:
            "Irritable bowel syndrome involves recurring abdominal pain together with changes in bowel movements, which may include constipation, diarrhea or both. It is identified from a pattern of symptoms and clinical assessment rather than from one symptom in isolation.",
        },
        {
          title: "Functional dyspepsia",
          description:
            "Functional dyspepsia is a chronic indigestion pattern that may involve upper-abdominal pain or burning, early fullness, uncomfortable fullness after eating, bloating or nausea.",
        },
      ],
      closing:
        "These conditions are not interchangeable, and neither category includes every digestive symptom. A clinician may need to assess whether another condition better explains a person's symptoms.",
      tone: "light",
    },
    {
      id: "common-patterns",
      eyebrow: "COMMON PATTERNS",
      title: "Digestive experiences vary across the gastrointestinal tract.",
      rows: [
        {
          title: "Abdominal pain and bloating",
          description:
            "Pain, cramping, pressure and bloating may relate to sensitivity, movement through the digestive tract, distension or several other processes.",
        },
        {
          title: "Constipation and diarrhea",
          description:
            "Changes in how quickly or slowly contents move through the bowel can contribute to constipation, diarrhea or a pattern that alternates between them.",
        },
        {
          title: "Early fullness and upper-abdominal discomfort",
          description:
            "Some people experience discomfort, burning, nausea, bloating or a feeling of becoming full unusually early during a meal.",
        },
        {
          title: "Symptoms that fluctuate",
          description:
            "Digestive symptoms may change over time and may be influenced by meals, illness, medicines, sleep and stress. Variation alone does not determine the underlying condition.",
        },
      ],
      closing:
        "These patterns overlap with many digestive disorders. This page does not diagnose IBS, functional dyspepsia or another gastrointestinal condition.",
      tone: "warm",
    },
    {
      id: "nervous-system-context",
      eyebrow: "NERVOUS-SYSTEM CONTEXT",
      title: "Sensation, motility and regulation can interact.",
      paragraphs: [
        "The enteric nervous system helps coordinate activity within the digestive tract. Central and autonomic networks can also influence digestive movement, sensitivity and responses to internal signals.",
        "In some disorders of gut–brain interaction, ordinary amounts of gas, stool or digestive activity may be experienced as painful or uncomfortable. Changes in bowel contractions can also affect how quickly contents move.",
        "These mechanisms may overlap, but they do not establish one cause for every symptom or every person.",
      ],
      tone: "light",
    },
    {
      id: "vagus-nerve-context",
      eyebrow: "THE VAGUS NERVE",
      title: "One important route within a wider network.",
      paragraphs: [
        "The vagus nerve carries sensory information toward the brainstem and participates in communication between the brain and parts of the digestive system.",
        "It is one component of a wider system that also includes the enteric nervous system, spinal pathways, hormones, immune signals and microbial metabolites.",
        "The involvement of vagal pathways does not mean that vagal dysfunction is the cause of IBS, dyspepsia or digestive disease. A plausible mechanism is not the same as evidence of clinical benefit.",
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
            "A surgically implanted prescription therapy. Findings from implanted systems cannot automatically be applied to non-invasive stimulation.",
        },
        {
          title: "Cervical non-invasive VNS",
          description:
            "Electrical stimulation applied at the neck. Devices, protocols and studied populations differ from auricular stimulation.",
        },
        {
          title: "Auricular taVNS",
          description:
            "Transcutaneous stimulation applied at the outer ear. Electrode locations, devices, intensity settings and study protocols vary.",
        },
        {
          title: "Neuvago",
          description:
            "Neuvago is a separate ear-based wellness device. External VNS and taVNS studies provide scientific context, not device-specific clinical evidence.",
        },
      ],
      tone: "dark",
    },
    {
      id: "ibs-c-research",
      eyebrow: "IBS WITH CONSTIPATION",
      title: "What one condition-specific taVNS study examined.",
      paragraphs: [
        "A 2021 randomized, sham-controlled study examined a four-week auricular taVNS protocol in 42 people with constipation-predominant irritable bowel syndrome.",
        "The study reported increases in complete spontaneous bowel movements and reductions in abdominal-pain scores, together with changes in several exploratory physiological measures.",
        "This was one small study in a specific IBS subtype. It does not establish benefit for diarrhea-predominant or mixed IBS, constipation from other causes, inflammatory bowel disease or digestive symptoms generally.",
      ],
      closing:
        "The study used its own research device, electrode placement and protocol. Its findings do not provide device-specific evidence for Neuvago.",
      tone: "light",
    },
    {
      id: "functional-dyspepsia-research",
      eyebrow: "FUNCTIONAL DYSPEPSIA",
      title: "What a recent systematic review examined.",
      paragraphs: [
        "A 2025 systematic review and meta-analysis included six randomized trials with 716 participants who had functional dyspepsia.",
        "The analysis reported improvements in dyspepsia symptoms and some secondary outcomes compared with sham stimulation. Evidence certainty was assessed using GRADE, and the authors emphasized the need for additional high-quality studies to establish optimal protocols.",
        "These findings apply to the functional dyspepsia studies included in the review. They do not establish benefit for indigestion from other causes, reflux, IBS, inflammatory bowel disease or digestion generally.",
      ],
      closing:
        "The included studies used defined auricular protocols that varied in stimulation site and treatment schedule. They do not provide device-specific evidence for Neuvago. Across the wider taVNS literature, reported adverse events have often been mild and transient, while safety reporting has also been incomplete in many studies. Absolute safety claims are therefore not appropriate.",
      tone: "warm",
    },
    {
      id: "evidence-boundaries",
      eyebrow: "EVIDENCE BOUNDARIES",
      title: "What the research does not establish.",
      points: [
        "Gut–brain interaction does not mean that digestive symptoms are imagined.",
        "It does not mean that every digestive symptom is a disorder of gut–brain interaction.",
        "The evidence does not establish that vagal dysfunction is the cause of IBS, functional dyspepsia or digestive disease.",
        "Findings from IBS-C cannot automatically be applied to other IBS subtypes, general constipation or unrelated digestive conditions.",
        "Findings from functional dyspepsia cannot automatically be applied to indigestion from other causes or to digestion generally.",
        "External VNS and taVNS studies do not provide device-specific clinical evidence for Neuvago in digestive symptoms or digestion.",
      ],
      tone: "light",
    },
  ],
  urgentHelp: {
    eyebrow: "MEDICAL ASSESSMENT",
    title: "When digestive symptoms need medical assessment.",
    introduction:
      "Some digestive symptoms need prompt or emergency medical evaluation.",
    items: [
      "Seek emergency medical care for vomiting blood, black or tarry stools, significant bleeding, fainting or severe and constant abdominal pain.",
      "Prompt assessment is important for difficulty or pain when swallowing, frequent vomiting, persistent abdominal swelling, fever or yellowing of the skin or eyes.",
      "Unexplained weight loss, loss of appetite, anemia or blood in the stool also require medical assessment.",
      "Talk with a healthcare professional about new, persistent, progressively worsening or clearly changed digestive symptoms, especially when they do not improve.",
    ],
    closing:
      "Digestive symptoms have many possible causes, and this list is not exhaustive. Seek appropriate medical advice when you are uncertain about a symptom or a change in your usual pattern.",
  },
  relatedReading: {
    eyebrow: "RELATED READING",
    title: "Continue with relevant education and research.",
    introduction:
      "Explore foundational nervous-system articles, related research topics and condition-focused context without treating those resources as a diagnosis or product claim.",
    groups: [
      {
        title: "Learn",
        links: [
          {
            title: "Vagus nerve",
            description: "Understand this major brain–body pathway.",
            href: "/learn/vagus-nerve",
          },
          {
            title: "Parasympathetic nervous system",
            description: "Explore rest, recovery and autonomic context.",
            href: "/learn/parasympathetic-nervous-system",
          },
        ],
      },
      {
        title: "Research",
        links: [
          {
            title: "Gut–brain axis",
            description: "Explore the broader gut–brain research field.",
            href: "/research/topics/gut-brain-axis",
          },
          {
            title: "Autonomic regulation",
            description: "Review research on wider autonomic networks.",
            href: "/research/topics/autonomic-regulation",
          },
          {
            title: "Inflammation",
            description: "Explore immune and inflammatory research context.",
            href: "/research/topics/inflammation",
          },
          {
            title: "Mayer 2011: Gut–brain communication",
            description: "Read the foundational study summary.",
            href: "/research/studies/mayer-2011-gut-brain-axis",
          },
          {
            title: "Safety and tolerability",
            description: "Review how human taVNS safety is studied.",
            href: "/research/topics/safety-and-tolerability",
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
      "This draft uses authoritative digestive-health information, foundational gut–brain research and condition-specific taVNS studies. Findings remain limited to the populations, interventions and outcomes studied. A gastroenterology-informed review is required before indexing or hub release.",
    items: [
      {
        title: "NIDDK — Irritable Bowel Syndrome",
        reference:
          "National Institute of Diabetes and Digestive and Kidney Diseases. Definition & Facts for Irritable Bowel Syndrome.",
        href: "https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome/definition-facts",
        context:
          "Used for IBS definitions, bowel-pattern context and disorders of gut–brain interaction.",
      },
      {
        title: "NIDDK — Indigestion and Functional Dyspepsia",
        reference:
          "National Institute of Diabetes and Digestive and Kidney Diseases. Definition, symptoms and causes of indigestion and functional dyspepsia.",
        href: "https://www.niddk.nih.gov/health-information/digestive-diseases/indigestion-dyspepsia/symptoms-causes",
        context:
          "Used for dyspepsia symptom definitions, alternative causes and medical-assessment guidance.",
      },
      {
        title: "Mayer, 2011",
        reference:
          "Mayer EA. Gut feelings: the emerging biology of gut-brain communication. Nature Reviews Neuroscience. 2011;12(8):453–466.",
        href: "https://pubmed.ncbi.nlm.nih.gov/21750565/",
        context:
          "Used for the complex, bidirectional neural, immune and endocrine framework of gut–brain communication.",
      },
      {
        title: "Shi et al., 2021",
        reference:
          "Shi X, Hu Y, Zhang B, et al. Ameliorating effects and mechanisms of transcutaneous auricular vagal nerve stimulation on abdominal pain and constipation. JCI Insight. 2021;6(14):e150052.",
        href: "https://pubmed.ncbi.nlm.nih.gov/34138761/",
        context:
          "Used only for the defined four-week randomized sham-controlled study in 42 participants with IBS-C.",
      },
      {
        title: "Lee et al., 2025",
        reference:
          "Lee B, Kwon CY, Jeong YK, et al. Transcutaneous auricular vagus nerve stimulation for functional dyspepsia: a systematic review and meta-analysis. Complementary Therapies in Medicine. 2025;94:103243.",
        href: "https://pubmed.ncbi.nlm.nih.gov/40967422/",
        context:
          "Used only for the six-trial, 716-participant functional-dyspepsia evidence summary and its protocol limitations.",
      },
      {
        title: "Kim et al., 2022",
        reference:
          "Kim AY, Marduy A, de Melo PS, et al. Safety of transcutaneous auricular vagus nerve stimulation (taVNS): a systematic review and meta-analysis. Scientific Reports. 2022;12:22055.",
        href: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
        context:
          "Used for broad taVNS safety context and the limitation that adverse-event reporting was incomplete in many studies.",
      },
    ],
    evidenceReviewed: "27 August 2026",
    editorialReview: "Neuvago Editorial Team",
    medicalReview: "Pending",
    disclaimer:
      "This page is educational and does not diagnose digestive conditions or replace professional medical assessment.",
  },
} as const satisfies ConditionArticleContent;
