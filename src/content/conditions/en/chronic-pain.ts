import type { ConditionArticleContent } from "@/components/conditions-article";

export const chronicPainArticle = {
  hero: {
    eyebrow: "CHRONIC PAIN",
    title: "Chronic pain and the nervous system",
    introduction:
      "Chronic pain is pain that lasts or recurs for more than three months. It may be linked to an ongoing disease, injury or nerve problem, or it may become the main health condition in its own right.",
    supportingCopy:
      "Pain is real and personal. Biological, psychological and social factors can all influence how it is experienced and how it affects sleep, movement, mood and daily life. This article explains where nervous-system and vagal research fits, and why findings from one pain condition or stimulation protocol cannot be generalized to another.",
  },
  sections: [
    {
      id: "what-chronic-pain-means",
      eyebrow: "WHAT CHRONIC PAIN MEANS",
      title: "Pain that persists or recurs for more than three months.",
      paragraphs: [
        "Acute pain is usually associated with actual or threatened tissue injury and lasts for a limited period. Chronic pain lasts or returns for more than three months and may continue for several years.",
        "Duration alone does not reveal the cause or mechanism. Chronic pain may be linked to an identifiable disease, injury, operation or nerve problem. In other cases, pain becomes the primary health condition.",
        "A person's report of pain should be respected, whether or not one test or scan explains the complete experience.",
      ],
      tone: "light",
    },
    {
      id: "primary-and-secondary-pain",
      eyebrow: "PRIMARY AND SECONDARY PAIN",
      title: "Chronic pain is not one single condition.",
      introduction:
        "ICD-11 distinguishes between chronic primary pain and several forms of chronic secondary pain.",
      rows: [
        {
          title: "Chronic primary pain",
          description:
            "Chronic primary pain is the main health problem and is associated with significant emotional distress, functional disability or both. Biological and psychological contributors may be present, without another condition providing a better explanation.",
        },
        {
          title: "Chronic secondary pain",
          description:
            "Chronic secondary pain is attributed to another condition. This can include pain related to cancer, surgery or trauma, a lesion or disease of the somatosensory nervous system, an internal-organ condition or a musculoskeletal disease.",
        },
        {
          title: "More than one factor may be present",
          description:
            "Pain mechanisms and clinical categories can overlap. The classification does not mean that one treatment, explanation or research result will apply to every person.",
        },
      ],
      tone: "warm",
    },
    {
      id: "common-patterns",
      eyebrow: "COMMON PATTERNS",
      title: "Chronic pain can affect more than one part of daily life.",
      rows: [
        {
          title: "Persistent or changing pain",
          description:
            "Pain may be continuous or intermittent and can vary in intensity, location and character. A person's pattern may also change over time.",
        },
        {
          title: "Sleep and fatigue",
          description:
            "Pain can make it harder to fall asleep, stay asleep or feel rested. Poor sleep and fatigue may in turn make pain and daily demands harder to manage.",
        },
        {
          title: "Movement and function",
          description:
            "Pain may affect mobility, work, household tasks, exercise and participation in activities that matter to the person.",
        },
        {
          title: "Mood, attention and social life",
          description:
            "Persistent pain can affect concentration, confidence, mood, relationships and social participation. These effects vary and do not define the cause of the pain.",
        },
      ],
      closing:
        "These are common experiences, not diagnostic criteria. Chronic pain varies substantially between conditions and individuals.",
      tone: "light",
    },
    {
      id: "interacting-factors",
      eyebrow: "INTERACTING FACTORS",
      title: "Pain, sleep, stress and mood can reinforce one another.",
      paragraphs: [
        "Pain can disrupt sleep and reduce the capacity to manage daily demands. Poor sleep may increase pain sensitivity and is associated with the development or persistence of some chronic musculoskeletal pain conditions.",
        "Stress, low mood and fear of worsening pain can affect attention, activity and participation. Persistent pain can also increase distress and make sleep or recovery more difficult.",
        "These relationships do not mean that pain is imagined, and they do not prove that stress, mood or poor sleep caused the pain.",
      ],
      tone: "warm",
    },
    {
      id: "nervous-system-context",
      eyebrow: "NERVOUS-SYSTEM CONTEXT",
      title: "Pain and nociception are related, but not identical.",
      paragraphs: [
        "Nociception is the nervous system's processing of potentially harmful stimuli. Pain is the conscious sensory and emotional experience.",
        "Pain cannot be inferred solely from activity in sensory neurons. The same injury or condition can affect people differently, and a person's pain may change over time.",
        "Researchers study peripheral, spinal and brain processes in different chronic pain conditions. These processes vary by condition and person and should not be turned into one universal explanation.",
      ],
      tone: "light",
    },
    {
      id: "assessment-and-care",
      eyebrow: "ASSESSMENT AND CARE",
      title: "The cause, mechanism and impact of pain guide care.",
      paragraphs: [
        "Assessment may consider where the pain is felt, how long it has been present, what makes it better or worse, neurological or systemic symptoms, sleep, mood, medicines, activity, work and participation.",
        "Care is often individualized and may involve more than one approach. Depending on the condition and the person's needs, it may include treatment of an underlying cause, rehabilitation, movement, psychological support, sleep care, medicines or a specialist pain service.",
        "Do not start, stop or change prescribed treatment based on this article.",
      ],
      tone: "warm",
    },
    {
      id: "vagus-nerve-context",
      eyebrow: "THE VAGUS NERVE",
      title: "One research pathway within a much wider pain system.",
      paragraphs: [
        "The vagus nerve carries sensory information toward the brainstem and participates in wider autonomic and brain–body communication.",
        "Researchers are examining whether stimulation of vagal pathways can influence pain-related processing, autonomic measures, inflammatory signalling or symptoms that occur alongside pain.",
        "This does not establish that vagal or autonomic dysfunction is the cause of chronic pain. The vagus nerve is not the only pathway involved, and a plausible mechanism is not proof of clinical benefit.",
      ],
      tone: "light",
    },
    {
      id: "modality-distinctions",
      eyebrow: "VNS, nVNS AND taVNS",
      title: "Vagus nerve stimulation is not one intervention.",
      rows: [
        {
          title: "Implanted VNS",
          description:
            "A surgically implanted prescription therapy. Findings from implanted systems cannot automatically be applied to external stimulation.",
        },
        {
          title: "Cervical non-invasive VNS",
          description:
            "Electrical stimulation applied at the side of the neck. Evidence belongs to the exact device, protocol, population and pain condition studied.",
        },
        {
          title: "Auricular taVNS",
          description:
            "Transcutaneous stimulation applied at the outer ear. Research devices, electrode locations, intensity settings and treatment schedules vary.",
        },
        {
          title: "Neuvago",
          description:
            "Neuvago is a separate ear-based wellness device. External VNS and taVNS research provides scientific context, not device-specific clinical evidence for chronic pain.",
        },
      ],
      tone: "dark",
    },
    {
      id: "transcutaneous-vns-research",
      eyebrow: "TRANSCUTANEOUS VNS",
      title: "What broader chronic-pain research has examined.",
      paragraphs: [
        "A 2024 systematic review and meta-analysis pooled 15 studies of transcutaneous vagus nerve stimulation across chronic pain conditions. The review included both auricular and cervical approaches.",
        "The analysis reported an overall signal in favour of tVNS for pain intensity. The included studies differed in pain condition, control group, stimulation site and protocol, and the authors described the findings as preliminary.",
        "The migraine trials did not show a difference in the number of migraine days. This is one example of why a pooled pain-intensity result cannot be treated as proof for every condition or outcome.",
      ],
      tone: "warm",
    },
    {
      id: "auricular-tavns-research",
      eyebrow: "AURICULAR taVNS",
      title: "Different pain conditions have been studied with different protocols.",
      paragraphs: [
        "A 2025 scoping review included 26 publications examining auricular taVNS in pain research.",
        "Commonly studied areas included episodic migraine without aura, rheumatoid arthritis, fibromyalgia, irritable bowel syndrome and chronic low back pain.",
        "Device type, stimulation settings, dosage and electrode placement varied across the studies. The review identified continuing gaps in optimal dosage, intervention fidelity, long-term outcomes, co-occurring symptoms and subgroup analysis.",
        "This is a growing but heterogeneous research field. A result in one pain condition cannot automatically be applied to another.",
      ],
      closing:
        "Across the wider taVNS literature, reported adverse events have often been mild and transient. Safety reporting has also been incomplete in many studies, so absolute safety claims are not appropriate.",
      tone: "light",
    },
    {
      id: "evidence-boundaries",
      eyebrow: "EVIDENCE BOUNDARIES",
      title: "What the research does not establish.",
      points: [
        "Chronic pain is not one disease, mechanism or research population.",
        "Biological, psychological and social influences do not mean that pain is imagined.",
        "The evidence does not establish that autonomic or vagal dysfunction is the cause of chronic pain.",
        "Findings from migraine, fibromyalgia, irritable bowel syndrome, rheumatoid arthritis or low-back-pain studies cannot automatically be generalized to other pain conditions.",
        "Implanted VNS, cervical nVNS and auricular taVNS are not interchangeable interventions.",
        "Results from one device, stimulation site, dosage or protocol cannot automatically be transferred to another.",
        "External VNS and taVNS studies do not establish that Neuvago treats, reduces, relieves or manages chronic pain.",
      ],
      closing:
        "Neuvago should not be used as a replacement for professional assessment, established treatment or an individualized pain-care plan.",
      tone: "warm",
    },
  ],
  urgentHelp: {
    eyebrow: "MEDICAL ASSESSMENT",
    title: "When pain needs prompt or urgent medical assessment.",
    introduction:
      "A long-standing pain condition does not make every new symptom part of the same problem.",
    items: [
      "Contact local emergency services for sudden severe pain, chest pain or pressure, difficulty breathing, fainting, sudden confusion or new weakness.",
      "Seek emergency assessment for new loss of bladder or bowel control, numbness around the genitals or anus, or rapidly developing weakness or numbness in the limbs.",
      "Prompt assessment is important when pain begins after significant trauma or occurs with fever, chills, feeling seriously unwell, unexplained weight loss, cancer or immune suppression.",
      "Talk with a healthcare professional about new, rapidly worsening or significantly changed pain, or pain that increasingly limits movement, function or daily life.",
      "If pain contributes to thoughts of suicide or self-harm, or you are struggling to keep yourself safe, contact local emergency services or a crisis line now and tell someone you trust.",
    ],
    closing:
      "Urgent warning signs depend on where the pain is located and what other symptoms are present. This list is not exhaustive.",
  },
  relatedReading: {
    eyebrow: "RELATED READING",
    title: "Continue with relevant education and research.",
    introduction:
      "Explore foundational nervous-system articles, pain-research context and related condition articles without treating those resources as a diagnosis or substitute for individualized care.",
    groups: [
      {
        title: "Learn",
        links: [
          {
            title: "Nervous system regulation",
            description:
              "Understand activation, regulation, rest and recovery.",
            href: "/learn/nervous-system-regulation",
          },
          {
            title: "Vagus nerve",
            description:
              "Understand this major pathway in brain–body communication.",
            href: "/learn/vagus-nerve",
          },
          {
            title: "Non-invasive vagus nerve stimulation",
            description:
              "Explore external approaches, including cervical and auricular stimulation.",
            href: "/learn/non-invasive-vagus-nerve-stimulation",
          },
        ],
      },
      {
        title: "Research",
        links: [
          {
            title: "Autonomic regulation",
            description:
              "Explore research on autonomic networks and brain–body regulation.",
            href: "/research/topics/autonomic-regulation",
          },
          {
            title: "Inflammation",
            description:
              "Review foundational research on vagal and inflammatory pathways.",
            href: "/research/topics/inflammation",
          },
          {
            title: "Transcutaneous vagus nerve stimulation",
            description:
              "Explore research across non-invasive stimulation approaches.",
            href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
          },
          {
            title: "Safety and tolerability",
            description:
              "Review how human taVNS safety and adverse events are studied.",
            href: "/research/topics/safety-and-tolerability",
          },
        ],
      },
      {
        title: "Related conditions",
        links: [
          {
            title: "Stress",
            description:
              "Explore prolonged demand, autonomic regulation and recovery.",
            href: "/conditions/stress",
          },
          {
            title: "Sleep",
            description:
              "Explore activation, winding down and sleep quality.",
            href: "/conditions/sleep",
          },
          {
            title: "Depression & Mood",
            description:
              "Explore mood, sleep, stress systems and brain–body context.",
            href: "/conditions/depression-and-mood",
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
      "This article uses authoritative pain definitions, chronic-pain classification, systematic reviews and current taVNS pain research. Findings remain limited to the pain conditions, devices, protocols and outcomes studied.",
    items: [
      {
        title: "International Association for the Study of Pain — Terminology",
        reference:
          "International Association for the Study of Pain. IASP Terminology, including the revised definition of pain.",
        href: "https://www.iasp-pain.org/resources/terminology/",
        context:
          "Used for the definition of pain, the distinction between pain and nociception, and the principle that biological, psychological and social factors influence pain.",
      },
      {
        title: "International Association for the Study of Pain — Pain Management Center",
        reference:
          "International Association for the Study of Pain. Pain Management Center Toolkit, Chapter 1.",
        href: "https://www.iasp-pain.org/resources/toolkits/pain-management-center/chapter1/",
        context:
          "Used for the definition of chronic pain, primary and secondary chronic-pain classification, and multidisciplinary care context.",
      },
      {
        title: "Costa et al., 2024",
        reference:
          "Costa V, Gianlorenço AC, Andrade MF, et al. Transcutaneous vagus nerve stimulation effects on chronic pain: systematic review and meta-analysis. PAIN Reports. 2024;9(5):e1171.",
        href: "https://pubmed.ncbi.nlm.nih.gov/39131814/",
        context:
          "Used for the 15-study pooled tVNS evidence summary and its heterogeneity and preliminary-evidence limitations.",
      },
      {
        title: "Chen et al., 2025",
        reference:
          "Chen J, Kuang H, Chen A, et al. Transcutaneous Auricular Vagus Nerve Stimulation for Managing Pain: A Scoping Review. Pain Management Nursing. 2025;26(1):33–39.",
        href: "https://pubmed.ncbi.nlm.nih.gov/39690039/",
        context:
          "Used for the 26-publication taVNS pain landscape, commonly studied conditions, protocol variation and research gaps.",
      },
      {
        title: "Runge et al., 2024",
        reference:
          "Runge N, Caldeira C, Conran Z, et al. The bidirectional relationship between sleep problems and chronic musculoskeletal pain: a systematic review with meta-analysis. Pain. 2024;165(11):2455–2467.",
        href: "https://pubmed.ncbi.nlm.nih.gov/38809241/",
        context:
          "Used for prospective sleep–pain associations and the uncertainty around the full bidirectional relationship.",
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
        title: "MedlinePlus — Recognizing medical emergencies",
        reference:
          "U.S. National Library of Medicine. Recognizing medical emergencies. Reviewed 8 January 2025.",
        href: "https://medlineplus.gov/ency/article/001927.htm",
        context:
          "Used only for general emergency symptoms in the urgent-assessment framework.",
      },
      {
        title: "NHS — Cauda equina syndrome",
        reference:
          "Torbay and South Devon NHS Foundation Trust. Cauda Equina Syndrome patient information.",
        href: "https://www.torbayandsouthdevon.nhs.uk/services/specialist-spinal-orthopaedic-physiotherapy-service/common-spinal-conditions/cauda-equina-syndrome/",
        context:
          "Used only for bladder, bowel and saddle-sensory warning signs in the urgent-assessment framework.",
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
      ],
      link: {
        label: "Read our full medical disclaimer",
        href: "/legal/medical-disclaimer",
      },
    },
  },
} as const satisfies ConditionArticleContent;
