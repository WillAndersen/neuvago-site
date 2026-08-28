import type { ConditionArticleContent } from "@/components/conditions-article";

export const depressionMoodArticle = {
  hero: {
    eyebrow: "DEPRESSION & MOOD",
    title: "Depression, mood and the nervous system",
    introduction:
      "Depression is more than a brief period of feeling low. It can involve persistent low mood or loss of interest, changes in sleep, appetite, energy and concentration, and a significant effect on daily life.",
    supportingCopy:
      "This article explains how depression differs from ordinary mood changes, why professional assessment and established care matter, and how implanted VNS research differs from emerging auricular taVNS research.",
  },
  sections: [
    {
      id: "depression-and-mood",
      eyebrow: "DEPRESSION AND MOOD",
      title: "Depression is different from ordinary changes in mood.",
      paragraphs: [
        "Everyone experiences sadness, disappointment, grief or temporary changes in mood. A depressive episode involves a more persistent pattern, usually including depressed mood or loss of interest or pleasure for most of the day, nearly every day, for at least two weeks.",
        "Other symptoms may include low energy, poor concentration, disrupted sleep, changes in appetite or weight, feelings of guilt or low self-worth, hopelessness, or thoughts about death or suicide.",
        "The overall pattern, duration, severity and impact on daily life matter. This page does not diagnose depression.",
      ],
      tone: "light",
    },
    {
      id: "common-patterns",
      eyebrow: "COMMON PATTERNS",
      title: "Depression can affect thoughts, feelings, the body and daily life.",
      rows: [
        {
          title: "Mood and interest",
          description:
            "A person may feel persistently sad, empty or irritable, or lose interest and pleasure in activities that would normally matter to them.",
        },
        {
          title: "Energy and concentration",
          description:
            "Low energy, slowed thinking and difficulty concentrating or making decisions can affect work, study and everyday tasks.",
        },
        {
          title: "Sleep and appetite",
          description:
            "Depression may involve disrupted sleep, sleeping more or less than usual, and changes in appetite or weight.",
        },
        {
          title: "Self-worth and hope",
          description:
            "Feelings of excessive guilt, low self-worth or hopelessness may become more persistent and difficult to move away from.",
        },
        {
          title: "Thoughts of death or suicide",
          description:
            "Thoughts about death, suicide or self-harm require prompt support and should not be managed alone.",
        },
      ],
      closing:
        "Symptoms vary between people. One symptom or a difficult period does not establish a diagnosis.",
      tone: "warm",
    },
    {
      id: "professional-assessment",
      eyebrow: "PROFESSIONAL ASSESSMENT",
      title: "Depressive symptoms can occur in different clinical contexts.",
      paragraphs: [
        "Depression may occur as a depressive disorder or as part of bipolar disorder. It can also overlap with anxiety, trauma, grief, substance use, sleep problems or physical health conditions.",
        "Periods of unusually elevated or irritable mood, markedly increased energy, reduced need for sleep, racing thoughts or impulsive behaviour require professional assessment because they may point to a different clinical pattern.",
        "A qualified professional can consider the complete symptom pattern, duration, functional impact, medical history, medicines, substance use and safety. Do not start, stop or change prescribed treatment based on this article.",
      ],
      tone: "light",
    },
    {
      id: "established-care",
      eyebrow: "ESTABLISHED CARE",
      title: "Effective treatment and support are available.",
      paragraphs: [
        "Effective psychological treatments are available for depression. Depending on the severity, clinical context and individual needs, medication may also be considered.",
        "Assessment and treatment should be planned with a qualified professional. VNS or taVNS research should not delay or replace established mental-health care.",
      ],
      closing:
        "Seek professional help if depressive symptoms persist, interfere with daily life or raise concerns about safety.",
      tone: "warm",
    },
    {
      id: "brain-body-context",
      eyebrow: "BRAIN–BODY CONTEXT",
      title: "Depression is not explained by one pathway.",
      paragraphs: [
        "Depression reflects a complex interaction of social, psychological and biological factors. Researchers also study sleep, stress physiology, autonomic function, inflammation and brain networks in relation to depressive symptoms.",
        "These research areas can provide scientific context, but they are not diagnostic tests and do not establish that one biological pathway causes depression.",
      ],
      tone: "light",
    },
    {
      id: "vagus-nerve-context",
      eyebrow: "THE VAGUS NERVE",
      title: "Where the vagus nerve fits — and where it does not.",
      paragraphs: [
        "The vagus nerve is part of wider brain–body and autonomic communication. Its central pathways and role in neuromodulation are among the reasons researchers have investigated VNS and taVNS in depression.",
        "This does not mean that vagal dysfunction is the cause of depression, that a vagal measure can diagnose it, or that stimulation works in the same way across devices and people.",
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
            "A surgically implanted prescription therapy. Its regulatory indication and clinical evidence belong to the implanted system and the defined patient population studied.",
        },
        {
          title: "Cervical non-invasive VNS",
          description:
            "Electrical stimulation applied at the neck. Devices, protocols and evidence differ from both implanted and auricular stimulation.",
        },
        {
          title: "Auricular taVNS",
          description:
            "Transcutaneous stimulation applied at the outer ear. Research devices, electrode locations, treatment schedules and study populations vary.",
        },
        {
          title: "Neuvago",
          description:
            "Neuvago is a separate ear-based wellness device. External VNS and taVNS research provides scientific context, not device-specific clinical evidence for depression.",
        },
      ],
      tone: "dark",
    },
    {
      id: "implanted-vns-research",
      eyebrow: "IMPLANTED VNS",
      title:
        "A narrow regulatory indication in treatment-resistant depression.",
      paragraphs: [
        "In 2005, the U.S. Food and Drug Administration approved the implanted VNS Therapy System as an adjunctive long-term treatment for patients 18 years of age or older with chronic or recurrent depression who were experiencing a major depressive episode and had not responded adequately to four or more adequate antidepressant treatments.",
        "This is surgically implanted prescription therapy for a narrowly defined clinical population. The approval does not apply to cervical non-invasive VNS, auricular taVNS or Neuvago.",
      ],
      tone: "light",
    },
    {
      id: "auricular-tavns-research",
      eyebrow: "AURICULAR taVNS",
      title: "What the depression research is examining.",
      paragraphs: [
        "A 2023 systematic review and meta-analysis included 12 studies with 838 participants. The pooled analysis reported improvements in depression-scale outcomes and some response measures.",
        "The authors also rated relevant evidence as low to very low and noted that subgroup numbers were small. Devices, stimulation protocols, treatment schedules, comparison conditions and study populations varied.",
        "The review's statement that response was comparable with antidepressants should not be treated as proof that taVNS and antidepressant treatment are equivalent.",
        "More recent randomized experimental studies have examined short-term emotional processing and stress reactivity during taVNS. These studies investigate possible mechanisms and response markers rather than establishing long-term antidepressant benefit.",
        "Results have been mixed and exploratory, reinforcing the need for larger studies with clearly defined devices, protocols, populations and clinical outcomes.",
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
        "Ordinary sadness or a temporary change in mood is not the same as a depressive disorder.",
        "The evidence does not establish that vagal or autonomic dysfunction is the cause of depression.",
        "An FDA approval for one implanted prescription system does not apply to non-invasive or auricular stimulation.",
        "Implanted VNS evidence does not establish the effectiveness of auricular taVNS.",
        "Low-to-very-low-certainty taVNS evidence does not establish equivalence with antidepressant treatment or other established care.",
        "External VNS and taVNS studies do not provide device-specific clinical evidence for Neuvago in depression or mood disorders.",
      ],
      closing:
        "Neuvago should not be used as a replacement for professional mental-health assessment, psychological treatment or prescribed care.",
      tone: "light",
    },
  ],
  urgentHelp: {
    eyebrow: "URGENT MENTAL-HEALTH SUPPORT",
    title: "When to seek urgent help.",
    introduction:
      "Thoughts of suicide or self-harm need immediate support.",
    items: [
      "If you think you may act on thoughts of suicide or self-harm, or you are in immediate danger, contact your local emergency services or a crisis line now.",
      "Tell someone you trust what is happening and contact a doctor, mental-health professional or crisis service as soon as possible.",
      "If it is safe to do so, stay with another person while help is being arranged.",
      "Seek prompt professional assessment when symptoms are rapidly worsening or you are struggling to keep yourself safe.",
    ],
    closing:
      "Help is available. This page is not a crisis service and does not replace professional assessment.",
  },
  relatedReading: {
    eyebrow: "RELATED READING",
    title: "Continue with relevant education and research.",
    introduction:
      "Explore foundational nervous-system articles, mental-health research context and related condition articles without treating those resources as a diagnosis or substitute for care.",
    groups: [
      {
        title: "Learn",
        links: [
          {
            title: "Emotional regulation and the nervous system",
            description:
              "Explore nervous-system context for overwhelm and reactivity.",
            href: "/learn/emotional-regulation-and-the-nervous-system",
          },
          {
            title: "Nervous system regulation",
            description:
              "Understand activation, regulation, rest and recovery.",
            href: "/learn/nervous-system-regulation",
          },
          {
            title: "Why you feel tired but can’t relax",
            description:
              "Explore how exhaustion and activation can overlap.",
            href: "/learn/why-you-feel-tired-but-cant-relax",
          },
          {
            title: "Vagus nerve stimulation",
            description:
              "Understand implanted and non-invasive approaches.",
            href: "/learn/vagus-nerve-stimulation",
          },
        ],
      },
      {
        title: "Research",
        links: [
          {
            title: "Vagus nerve stimulation",
            description:
              "Explore the broader implanted and non-invasive research field.",
            href: "/research/topics/vagus-nerve-stimulation",
          },
          {
            title: "Auricular vagus nerve stimulation",
            description:
              "Review research on ear-based stimulation approaches.",
            href: "/research/topics/auricular-vagus-nerve-stimulation",
          },
          {
            title: "Rush 2005: implanted VNS and depression",
            description:
              "Review the implanted VNS study and its clinical context.",
            href: "/research/studies/rush-2005-vagus-nerve-stimulation-depression",
          },
          {
            title: "Safety and tolerability",
            description:
              "Review how human taVNS safety is studied.",
            href: "/research/topics/safety-and-tolerability",
          },
        ],
      },
      {
        title: "Related conditions",
        links: [
          {
            title: "Sleep",
            description: "Explore sleep, activation and winding down.",
            href: "/conditions/sleep",
          },
          {
            title: "Anxiety",
            description:
              "Explore vigilance, physical sensations and autonomic arousal.",
            href: "/conditions/anxiety",
          },
          {
            title: "Burnout",
            description:
              "Explore prolonged demand, exhaustion and reduced recovery.",
            href: "/conditions/burnout",
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
          {
            title: "Medical disclaimer",
            description:
              "Review the site's educational and medical-information boundaries.",
            href: "/legal/medical-disclaimer",
          },
        ],
      },
    ],
  },
  sources: {
    eyebrow: "SOURCES AND REVIEW",
    title: "Evidence, context and review status.",
    introduction:
      "This article uses authoritative mental-health guidance, an official regulatory decision and systematic and experimental taVNS research. Evidence is presented with clear distinctions between implanted VNS, auricular taVNS and Neuvago.",
    items: [
      {
        title: "World Health Organization — Depression",
        reference:
          "World Health Organization. Depressive disorder (depression). Updated 29 August 2025.",
        href: "https://www.who.int/news-room/fact-sheets/detail/depression",
        context:
          "Used for the distinction between depression and ordinary mood changes, common symptoms, treatment availability and urgent-help context.",
      },
      {
        title: "World Health Organization — Bipolar disorder",
        reference:
          "World Health Organization. Bipolar disorder. Updated 8 September 2025.",
        href: "https://www.who.int/news-room/fact-sheets/detail/bipolar-disorder",
        context:
          "Used for the distinction between depressive episodes and manic or hypomanic clinical patterns.",
      },
      {
        title: "U.S. Food and Drug Administration — PMA P970003S050",
        reference:
          "U.S. Food and Drug Administration. VNS Therapy System, PMA P970003, Supplement S050.",
        href: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=p970003s050",
        context:
          "Used only for the exact implanted VNS Therapy System indication in adults with chronic or recurrent treatment-resistant depression.",
      },
      {
        title: "Tan et al., 2023",
        reference:
          "Tan C, Qiao M, Ma Y, et al. The efficacy and safety of transcutaneous auricular vagus nerve stimulation in the treatment of depressive disorder: a systematic review and meta-analysis of randomized controlled trials. Journal of Affective Disorders. 2023;337:37–49.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37230264/",
        context:
          "Used for the 12-study, 838-participant taVNS evidence summary and its low-to-very-low-certainty limitations.",
      },
      {
        title: "Zhao et al., 2025",
        reference:
          "Zhao T, Schiweck C, Jamalambadi H, et al. Transcutaneous vagus nerve stimulation improves emotional processing. Journal of Affective Disorders. 2025;372:96–105.",
        href: "https://pubmed.ncbi.nlm.nih.gov/39615758/",
        context:
          "Used only as a short-term experimental emotional-processing study, not as evidence of long-term antidepressant benefit.",
      },
      {
        title: "Schiweck et al., 2025",
        reference:
          "Schiweck C, Aichholzer M, Brandt E, et al. The heart knows best: baseline heart rate variability as guide to transcutaneous auricular vagus nerve stimulation in depression. Translational Psychiatry. 2025;15:521.",
        href: "https://pubmed.ncbi.nlm.nih.gov/41353184/",
        context:
          "Used for experimental stress-response, baseline-HRV and responder-variability context rather than long-term clinical efficacy.",
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
    disclaimer: {
      eyebrow: "IMPORTANT INFORMATION",
      paragraphs: [
        "This article is provided for general educational purposes only and is not medical advice.",
        "It is not intended to diagnose a condition or recommend treatment, and it does not replace assessment, diagnosis or care from a qualified healthcare professional.",
        "Contact a doctor or another qualified healthcare professional if you have questions about symptoms, a diagnosis or treatment.",
        "Seek urgent or emergency help for severe, sudden or rapidly worsening symptoms, or whenever you may be in immediate danger.",
        "If you are thinking about suicide or self-harm, or believe you may be in immediate danger, contact local emergency services or a crisis line now and tell someone you trust.",
      ],
      link: {
        label: "Read our full medical disclaimer",
        href: "/legal/medical-disclaimer",
      },
    },
  },
} as const satisfies ConditionArticleContent;
