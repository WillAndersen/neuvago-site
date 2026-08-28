import { featuredTavnsStudies } from "@/content/research-study-catalog";

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

export type ResearchV2FeaturedStudyCard = {
  researchArea: string;
  evidenceType: string;
  heading: string;
  summary: string;
  year: string;
  href: string;
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
    eyebrow: "RESEARCH",
    title: "The science behind vagus nerve stimulation.",
    description:
      "Vagus nerve stimulation has been studied for decades. A growing body of research is examining non-invasive approaches, including transcutaneous auricular vagus nerve stimulation (taVNS).",
    secondaryDescription:
      "Explore research across sleep, stress, autonomic function, heart rate variability (HRV), brain pathways, safety and tolerability.",
    primaryCta: {
      label: "Explore taVNS Research",
      href: "/research/topics/auricular-vagus-nerve-stimulation",
    } satisfies ResearchV2Cta,
    secondaryCta: {
      label: "Browse Scientific Studies",
      href: "/research/studies",
    } satisfies ResearchV2Cta,
    hierarchy: [
      {
        abbreviation: "VNS",
        name: "Vagus Nerve Stimulation",
        description:
          "The broader research field, including implanted and non-invasive approaches.",
      },
      {
        abbreviation: "tVNS",
        name: "Transcutaneous Vagus Nerve Stimulation",
        description:
          "Non-invasive vagus nerve stimulation delivered through the skin.",
      },
      {
        abbreviation: "taVNS",
        name: "Transcutaneous Auricular Vagus Nerve Stimulation",
        description:
          "Ear-based stimulation targeting the auricular branch of the vagus nerve.",
      },
    ],
  },

  closest: {
    eyebrow: "taVNS RESEARCH",
    title: "Research on ear-based vagus nerve stimulation.",
    description:
      "Transcutaneous auricular vagus nerve stimulation (taVNS) applies non-invasive electrical stimulation at the outer ear. Research is examining how auricular stimulation engages vagal pathways, how stimulation protocols influence outcomes, and how taVNS relates to autonomic function, sleep, stress, brain pathways, safety and other areas.",
    context:
      "Findings vary between devices, stimulation protocols, study populations and measured outcomes.",
    image: {
      src: "/images/neuvago/auricular-vns-education-desktop.webp",
      alt: "Neuvago device beside a clean illustration of the outer ear.",
    } satisfies ResearchV2Image,
    mobileImage: {
      src: "/images/neuvago/auricular-vns-education-mobile.webp",
      alt: "Neuvago device beside a clean illustration of the outer ear.",
    } satisfies ResearchV2Image,
    primaryCta: {
      label: "Explore taVNS Research",
      href: "/research/topics/auricular-vagus-nerve-stimulation",
    } satisfies ResearchV2Cta,
  },

  topics: {
    eyebrow: "RESEARCH AREAS",
    title: "Explore the questions researchers are asking.",
    description:
      "Browse research on how VNS and taVNS are being studied across sleep, stress, autonomic regulation, heart rate variability, brain pathways, safety, inflammation and gut–brain communication.",
    areas: [
      {
        title: "Sleep",
        description:
          "Research examining sleep quality, insomnia and sleep-related outcomes.",
        href: undefined,
      },
      {
        title: "Stress",
        description:
          "Research examining stress-related physiological, autonomic and emotional responses.",
        href: undefined,
      },
      {
        title: "Autonomic Regulation",
        description:
          "Research on sympathetic and parasympathetic activity, recovery and the body's shift between physiological states.",
        href: "/research/topics/autonomic-regulation",
      },
      {
        title: "Heart Rate Variability",
        description:
          "Research examining HRV as a marker of autonomic activity, including its uses and limitations.",
        href: "/research/topics/heart-rate-variability",
      },
      {
        title: "Brain Pathways",
        description:
          "Human neuroimaging and mechanistic research examining how auricular stimulation engages central vagal pathways.",
        href: undefined,
      },
      {
        title: "Safety & Tolerability",
        description:
          "Systematic research examining reported adverse events, tolerability and safety across human taVNS studies.",
        href: "/research/topics/safety-and-tolerability",
      },
      {
        title: "Inflammation",
        description:
          "Research on neural–immune communication, inflammatory signalling and the cholinergic anti-inflammatory pathway.",
        href: "/research/topics/inflammation",
      },
      {
        title: "Gut–Brain Communication",
        description:
          "Research on neural, hormonal, microbial and immune communication between the digestive system and the brain.",
        href: "/research/topics/gut-brain-axis",
      },
    ] satisfies Array<ResearchV2Card & { href?: string }>,
    technologyFoundations: {
      title: "Technology foundations",
      links: [
        {
          title: "Vagus Nerve Stimulation",
          href: "/research/topics/vagus-nerve-stimulation",
        },
        {
          title: "Transcutaneous VNS and taVNS",
          href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
        },
      ],
    },
    allTopicsCta: {
      label: "Browse all Research topics",
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
    eyebrow: "FEATURED taVNS RESEARCH",
    title: "Selected research across the taVNS field.",
    description:
      "These studies span systematic reviews, meta-analyses and human neuroimaging across sleep, safety and tolerability, central vagal pathways and autonomic function.",
    studies: featuredTavnsStudies.map((study) => {
      let summary = study.cardSummary;

      if (
        study.slug ===
        "de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis"
      ) {
        summary =
          "A 2025 systematic review and meta-analysis of six studies involving 336 participants reported improvements in sleep quality and insomnia severity.";
      } else if (
        study.slug === "kim-2022-tavns-safety-systematic-review-meta-analysis"
      ) {
        summary =
          "A large systematic review and meta-analysis evaluated taVNS safety across 177 studies involving 6,322 participants.";
      }

      return {
        researchArea: study.researchArea,
        evidenceType: study.evidenceType,
        heading: study.cardHeading,
        summary,
        year: study.year,
        href: study.href,
      };
    }) satisfies ResearchV2FeaturedStudyCard[],
  },

  foundations: {
    eyebrow: "FOUNDATIONAL SCIENCE",
    title:
      "The wider science behind autonomic, neural–immune and gut–brain pathways.",
    description:
      "Selected papers provide theoretical, methodological and experimental context for the broader science surrounding vagal and autonomic regulation.",
    studies: [
      {
        label: "CONCEPTUAL MODEL",
        title: "A Model of Neurovisceral Integration in Emotion Regulation",
        authors: "Julian F. Thayer & Richard D. Lane",
        year: "2000",
        journal: "Journal of Affective Disorders",
        description:
          "A model connecting brain networks, emotional regulation, autonomic flexibility, heart rate variability and vagal activity.",
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
          "A foundational methodological reference for heart rate variability measurement, terminology and interpretation.",
        href: "/research/studies/task-force-1996-heart-rate-variability-standards",
      },
      {
        label: "PRECLINICAL EXPERIMENTAL RESEARCH",
        title:
          "Vagus Nerve Stimulation Attenuates the Systemic Inflammatory Response",
        authors: "L. V. Borovikova et al.",
        year: "2000",
        journal: "Nature",
        description:
          "A landmark preclinical experiment examining how vagus nerve stimulation influenced systemic inflammatory signalling.",
        href: "/research/studies/borovikova-2000-vagus-nerve-inflammation",
      },
      {
        label: "REVIEW",
        title: "Gut Feelings: The Emerging Biology of Gut–Brain Communication",
        authors: "Emeran A. Mayer",
        year: "2011",
        journal: "Nature Reviews Neuroscience",
        description:
          "A major review of neural, hormonal, microbial and immune communication between the gut and brain.",
        href: "/research/studies/mayer-2011-gut-brain-axis",
      },
    ] satisfies ResearchV2StudyCard[],
    allStudiesCta: {
      label: "Browse all foundational studies",
      href: "/research/studies",
    } satisfies ResearchV2Cta,
  },

  approach: {
    eyebrow: "RESEARCH CONTEXT",
    title: "Evidence needs context.",
    description:
      "Study design, stimulation protocol, participant group and measured outcome all shape what a research finding can tell us.",
    items: [
      {
        title: "Different studies answer different questions",
        description:
          "Systematic reviews and meta-analyses combine findings across multiple studies. Randomized trials examine outcomes under controlled conditions, while neuroimaging and mechanistic studies explore how stimulation may engage biological pathways.",
      },
      {
        title: "Stimulation protocols matter",
        description:
          "Stimulation site, frequency, pulse width, intensity, session duration and control condition can differ substantially between taVNS studies and influence the results.",
      },
      {
        title: "Results belong to the context studied",
        description:
          "Findings from one device, protocol, participant group or clinical setting cannot automatically be assumed to apply to every device, user or outcome.",
      },
    ] satisfies ResearchV2Card[],
  },

  library: {
    eyebrow: "SCIENTIFIC STUDIES LIBRARY",
    title: "Browse the full research library.",
    description:
      "Explore study summaries across VNS, taVNS, sleep, safety, autonomic function, heart rate variability, brain pathways, inflammation and gut–brain communication.",
    primaryCta: {
      label: "Browse Scientific Studies",
      href: "/research/studies",
    } satisfies ResearchV2Cta,
  },

  continue: {
    eyebrow: "CONTINUE EXPLORING",
    title: "Continue from evidence to understanding.",
    description:
      "Explore clear educational articles, or see how Neuvago stimulates the vagus nerve through the outer ear.",
    cards: [
      {
        title: "Learn",
        description:
          "Explore clear, science-informed articles on the vagus nerve, nervous system regulation, stress, sleep, recovery and non-invasive vagus nerve stimulation.",
        href: "/learn",
        linkLabel: "Explore Learn",
      },
      {
        title: "How It Works",
        description:
          "See how Neuvago delivers ear-based stimulation, how sensory signals travel toward the brainstem and why the pathway matters.",
        href: "/how-it-works",
        linkLabel: "See how Neuvago works",
      },
    ] satisfies ResearchV2LinkCard[],
  },
} as const;
