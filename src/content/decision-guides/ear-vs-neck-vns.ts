import type { DecisionGuidePair } from "@/content/decision-guides/types";

export const earVsNeckVnsGuidePair = {
  id: "ear-vs-neck-vns",
  status: "published",
  order: 10,
  en: {
    id: "ear-vs-neck-vns",
    locale: "en",
    languageTag: "en-US",
    openGraphLocale: "en_US",
    path: "/learn/ear-vs-neck-vagus-nerve-stimulation",
    counterpartPath: "/no/kunnskap/orebasert-vs-halsbasert-vns",
    defaultPath: "/learn/ear-vs-neck-vagus-nerve-stimulation",
    status: "published",
    kind: "comparison",
    order: 10,

    title: "Ear-based or neck-based vagus nerve stimulation?",
    seoTitle: "Ear vs Neck Vagus Nerve Stimulation | Neuvago",
    description:
      "Compare ear-based taVNS and neck-based cervical nVNS by anatomy, device design, protocols, evidence, safety, comfort and intended use.",
    eyebrow: "VNS METHOD COMPARISON",
    lead:
      "Ear-based taVNS and neck-based cervical nVNS are two different non-invasive method families. The useful question is not which location is universally best, but how anatomy, hardware, protocol, evidence, safety and intended use differ.",
    shortAnswer: [
      "Ear-based and neck-based stimulation use different anatomical access points and should not be treated as interchangeable placements for the same protocol.",
      "The same current, frequency or session design cannot be copied from the ear to the neck without considering nerve depth, electrode geometry and target engagement.",
      "Evidence from one site, device, protocol or clinical indication does not automatically transfer to another site or to a general wellness product.",
      "There is no responsible universal winner. A useful decision depends on product-specific evidence, intended use, safety instructions, comfort and routine fit.",
    ],
    hubTitle: "Ear-based vs. neck-based VNS",
    hubSummary:
      "A neutral method comparison covering anatomy, devices, protocols, research limits, safety and the questions to ask before choosing a system.",
    hubLabel: "Decision guide",

    primaryKeyword: "ear vs neck vagus nerve stimulation",
    secondaryKeywords: [
      "auricular vs cervical VNS",
      "taVNS vs tcVNS",
      "ear vagus nerve stimulation",
      "neck vagus nerve stimulation",
      "non-invasive VNS comparison",
    ],
    publishedAt: "2026-08-26",
    modifiedAt: "2026-08-26",
    readingTimeMinutes: 15,
    authorName: "John Willander",
    reviewerName: "Neuvago Editorial Team",

    comparison: {
      eyebrow: "SIDE-BY-SIDE METHOD MAP",
      title: "Two access sites, two protocol problems",
      introduction:
        "Both methods are described as non-invasive VNS, but they do not reach the nervous system in the same way. The ear provides a superficial cutaneous access point. The cervical vagus lies deeper in the neck, so field strength, coupling, placement and device design become different engineering questions.",
      left: {
        label: "taVNS / auricular tVNS",
        title: "Ear-based or auricular VNS",
        summary:
          "Electrical stimulation is applied through the skin at selected regions of the outer ear. Research commonly discusses the auricular branch of the vagus nerve, while also recognizing mixed and variable ear innervation.",
        facts: [
          "Outer-ear access without surgery",
          "Clip, earpiece or small surface electrodes",
          "Placement and contact quality matter",
          "Protocols vary widely across studies and devices",
        ],
      },
      right: {
        label: "tcVNS / cervical nVNS",
        title: "Neck-based or cervical VNS",
        summary:
          "Electrical stimulation is applied at the anterolateral neck over the course of the cervical vagus nerve. The nerve is deeper than auricular targets, making device-specific field delivery and target engagement central questions.",
        facts: [
          "Anterior or anterolateral neck placement",
          "Usually a handheld or surface applicator",
          "Deeper target requires site-specific engineering",
          "Studied protocols and indications are device-specific",
        ],
      },
      rowLabels: {
        criterion: "Comparison point",
        left: "Ear-based / auricular",
        right: "Neck-based / cervical",
      },
      rows: [
        {
          criterion: "Application site",
          left:
            "Selected regions of the outer ear, such as the cymba conchae or tragus in some research protocols. Ear innervation is mixed, so exact placement must be reported.",
          right:
            "The anterolateral neck over the anatomical course of the cervical vagus nerve. Position, pressure and contact vary by device and instruction set.",
        },
        {
          criterion: "Common terminology",
          left:
            "taVNS, auricular tVNS, auricular VNS, ear-based VNS or transcutaneous auricular vagus nerve stimulation.",
          right:
            "tcVNS, cervical nVNS, n-cVNS, cervical non-invasive VNS or neck-based vagus nerve stimulation.",
        },
        {
          criterion: "Anatomical challenge",
          left:
            "The access point is superficial, but the outer ear has overlapping and variable sensory innervation. Sensation does not prove selective vagal engagement.",
          right:
            "The cervical vagus is deeper. An electrical field that is adequate for the ear may be inadequate at the neck, while non-vagal neck afferents can still produce strong sensations or physiological signals.",
        },
        {
          criterion: "Typical device form",
          left:
            "Ear clip, earpiece, earbud-like contact or small electrodes combined with a stimulator and sometimes an app.",
          right:
            "Handheld or surface applicator placed against the neck, often with pressure or conductive contact defined by the product instructions.",
        },
        {
          criterion: "Protocol pattern",
          left:
            "Research ranges from short sessions to longer daily exposure. Frequency, pulse width, duty cycle, intensity and ear site vary considerably.",
          right:
            "Some studied systems use brief repeated stimulations, but duration, waveform, output and dosing schedule remain product- and study-specific.",
        },
        {
          criterion: "Research context",
          left:
            "A broad and heterogeneous research field covering imaging, autonomic measures, safety and multiple clinical populations.",
          right:
            "A distinct evidence base that includes mechanistic studies and regulated clinical-device research, especially in headache disorders and other medical contexts.",
        },
        {
          criterion: "Sham and control challenge",
          left:
            "Ear-lobe or alternative-site controls may still create sensation and may not always be biologically inert. Blinding and site choice must be evaluated.",
          right:
            "Sham devices or alternative neck placements may stimulate somatic nerves or deliver partial active stimulation, complicating interpretation.",
        },
        {
          criterion: "Sensation and comfort",
          left:
            "Often described as tingling, prickling, pressure or warmth at the ear. Local irritation and contact quality are relevant practical issues.",
          right:
            "May involve neck muscle or skin sensation, pressure and local discomfort. Strong sensation does not establish cervical vagal engagement.",
        },
        {
          criterion: "Can evidence transfer?",
          left:
            "Not automatically. One ear site, device, protocol or population cannot stand in for every auricular product or use case.",
          right:
            "Not automatically. Results from one cervical device or medical indication cannot be generalized to every neck stimulator or wellness use case.",
        },
        {
          criterion: "Best decision question",
          left:
            "Does the product clearly explain the ear site, contact, settings, safety limits, intended use and product-specific evidence?",
          right:
            "Does the product clearly explain neck placement, coupling, dosing, safety limits, intended use and product-specific evidence?",
        },
      ],
      footnote:
        "The table compares method families, not individual brands. Product instructions, contraindications, regulatory status, price and evidence must be checked for the exact device being considered.",
    },

    sections: [
      {
        id: "different-method-families",
        eyebrow: "START WITH THE CATEGORY",
        title: "Ear and neck are not two interchangeable settings",
        blocks: [
          {
            type: "paragraph",
            text:
              "Both approaches aim to influence vagal pathways without surgery, but the route into the nervous system is different. Auricular stimulation uses a superficial region of the outer ear. Cervical stimulation is delivered at the neck over a deeper nerve trunk. That difference changes the hardware, the electrical field, the likely co-stimulated nerves, the control condition and the interpretation of any physiological response.",
          },
          {
            type: "cards",
            items: [
              {
                label: "ANATOMY",
                title: "The target is not at the same depth",
                description:
                  "A protocol that creates adequate current density at the ear may not reach the deeper cervical vagus. Neck stimulation therefore requires its own placement and field-delivery logic.",
              },
              {
                label: "HARDWARE",
                title: "Electrode geometry changes the exposure",
                description:
                  "An ear clip, earpiece and handheld neck applicator create different contact areas, pressure, current paths and opportunities for off-target stimulation.",
              },
              {
                label: "PROTOCOL",
                title: "Matching the numbers is not matching the dose",
                description:
                  "The same milliamps, hertz or pulse width do not create the same neural exposure when anatomy, electrode size and tissue depth differ.",
              },
              {
                label: "EVIDENCE",
                title: "Each method needs its own evidence trail",
                description:
                  "A result from one site or device can inform the field, but it cannot automatically validate another device, another placement or a different intended use.",
              },
            ],
          },
          {
            type: "callout",
            tone: "summary",
            title: "The responsible conclusion",
            paragraphs: [
              "Ear-based and neck-based VNS should be compared as different method families, not as interchangeable versions of one treatment.",
              "A useful comparison begins with anatomy and product-specific instructions before discussing outcomes or convenience.",
            ],
          },
        ],
      },
      {
        id: "site-specific-protocols",
        eyebrow: "METHOD LESSON",
        title: "Site-specific protocols matter more than matched settings",
        blocks: [
          {
            type: "paragraph",
            text:
              "A 2026 comparative study illustrates the problem. Researchers applied closely matched, taVNS-optimized parameters at the ear and neck. Computational modeling indicated that the cervical condition did not reach the activation threshold for the deep cervical vagus, so the authors concluded that a direct auricular-versus-cervical comparison was not valid under those settings.",
          },
          {
            type: "callout",
            tone: "evidence",
            title: "What that study does and does not show",
            paragraphs: [
              "It does show that copying an ear-oriented parameter set to the neck can fail to engage the intended cervical target, even when the neck stimulation feels active or changes a nonspecific biomarker.",
              "It does not show that cervical non-invasive VNS cannot engage vagal pathways. Earlier human fMRI work using a cervical protocol found activation in canonical vagal projection regions. The combined lesson is that target engagement must be verified for the site and device being studied.",
            ],
          },
          {
            type: "bullets",
            items: [
              "Do not compare methods only by current amplitude or sensation.",
              "Check electrode geometry, contact medium, pressure and placement.",
              "Check whether the protocol was designed for the anatomical site.",
              "Look for target-engagement evidence rather than assuming it from the label VNS.",
              "Treat physiological markers cautiously when somatic nerves or active sham stimulation may contribute.",
            ],
          },
        ],
      },
      {
        id: "evidence-transfer",
        eyebrow: "EVIDENCE BOUNDARIES",
        title: "Research context is useful, but evidence does not transfer automatically",
        blocks: [
          {
            type: "paragraph",
            text:
              "The VNS literature spans implanted clinical systems, cervical non-invasive devices, auricular stimulation, different waveforms, different control conditions and very different populations. A buyer or reader can use this literature to understand the method landscape, but a product claim should be tied to the exact device, protocol, intended use and population that support it.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Method evidence",
                description:
                  "Shows what a research approach may be capable of under specified conditions. It does not automatically validate every commercial product using the same acronym.",
              },
              {
                title: "Device-specific evidence",
                description:
                  "Tests a defined device, placement and protocol. It may be more relevant, but the population, outcome and regulatory indication still matter.",
              },
              {
                title: "Product facts",
                description:
                  "Include verified settings, session length, package contents, app requirements, intended use, safety instructions and current commercial terms.",
              },
              {
                title: "Marketing claims",
                description:
                  "Should remain narrower than the strongest-sounding paper and should never convert medical research into unsupported wellness promises.",
              },
            ],
          },
          {
            type: "callout",
            tone: "scope",
            title: "A comparison page should not declare a universal winner",
            paragraphs: [
              "Different sites may be better suited to different devices, research questions, indications and routines. The absence of a universal winner is not a weakness in the evidence; it is a reason to compare more carefully.",
            ],
          },
        ],
      },
      {
        id: "sham-sensation-and-target-engagement",
        eyebrow: "INTERPRETING STUDIES",
        title: "Sensation, sham and target engagement can easily be confused",
        blocks: [
          {
            type: "paragraph",
            text:
              "Both ear and neck stimulation can create noticeable skin, muscle or sensory effects. Those effects may help users confirm contact, but they do not by themselves prove selective vagal activation. They also make blinding difficult: a sham that feels too weak may reveal allocation, while a sham that feels convincing may stimulate biologically active tissue.",
          },
          {
            type: "numbered",
            items: [
              "Ask whether participants and investigators were successfully blinded.",
              "Check whether the sham delivered current, used another site or used an alternative waveform.",
              "Look for evidence that the intended neural target was engaged, not only that the skin or muscle responded.",
              "Separate mechanistic or biomarker findings from patient-relevant outcomes.",
              "Check whether adherence changed the result or whether the primary intention-to-treat analysis was negative.",
            ],
          },
          {
            type: "callout",
            tone: "evidence",
            title: "Why this matters in cervical research",
            paragraphs: [
              "In the PREMIUM migraine trial, the primary intention-to-treat comparison was not statistically significant. The authors also reported that the sham may have delivered active vagal stimulation and that adherence complicated interpretation.",
              "That does not make the study useless. It shows why device controls, adherence and prespecified outcomes must be read before a headline conclusion is accepted.",
            ],
          },
        ],
      },
      {
        id: "safety-and-practical-fit",
        eyebrow: "SAFETY AND USE",
        title: "Neither application site removes the need for product-specific safety guidance",
        blocks: [
          {
            type: "paragraph",
            text:
              "Non-invasive does not mean risk-free, suitable for everyone or appropriate to improvise. Ear-based studies commonly report local sensations such as tingling or ear discomfort, while neck-based systems can produce local pressure, muscle or skin sensations. The exact contraindications and stop-use rules depend on the device, its electrical output, its intended use and the person using it.",
          },
          {
            type: "callout",
            tone: "safety",
            title: "Follow the exact product instructions",
            paragraphs: [
              "Do not move an electrode from the ear to the neck, copy settings from a paper, combine devices or increase intensity to chase a stronger sensation.",
              "Do not infer personal suitability from a method comparison. If you use an implanted electronic device, have an active medical condition, are pregnant, or are uncertain about electrical stimulation, follow the product-specific instructions and seek qualified clinical guidance before use.",
            ],
          },
          {
            type: "paragraph",
            text:
              "A systematic review of taVNS safety found no difference in the risk of adverse events between active stimulation and controls in the studies that could be meta-analyzed, but it also found major gaps in adverse-event reporting. The useful takeaway is not that every ear-based product is proven safe; it is that safety reporting must be explicit and product-specific.",
          },
        ],
      },
      {
        id: "commercial-comparison-boundary",
        eyebrow: "COMMERCIAL BOUNDARY",
        title: "Method comparison should come before price ranking",
        blocks: [
          {
            type: "paragraph",
            text:
              "Price, warranty, returns, subscription requirements, included accessories and availability matter, but they change over time and must be checked for the exact product and market. This pilot therefore compares method families rather than ranking brands or presenting a best-in-test table.",
          },
          {
            type: "callout",
            tone: "product",
            title: "What should be dated and verified before purchase",
            paragraphs: [
              "Confirm the current price, what is included, whether an app or subscription is required, whether conductive materials are recurring costs, the warranty or statutory rights, return conditions, delivery region and support route.",
              "A future buyer guide can compare those fields only when the data are current, sourced and displayed with an update date.",
            ],
          },
        ],
      },
    ],

    checklist: {
      eyebrow: "DECISION CHECKLIST",
      title: "Ten questions to ask before choosing a VNS device",
      introduction:
        "The same checklist works for ear- and neck-based products. It moves the decision away from vague promises and toward verifiable product facts.",
      items: [
        {
          title: "1. What method and exact placement does the product use?",
          description:
            "Look for clear language such as auricular/ear-based or cervical/neck-based, plus a visual or instruction that identifies the contact site.",
        },
        {
          title: "2. What is the intended use and regulatory position?",
          description:
            "Distinguish a general wellness product from a regulated medical device and check the jurisdiction and indication being discussed.",
        },
        {
          title: "3. Is the evidence product-specific?",
          description:
            "Ask whether studies tested the exact device and protocol or whether the company is relying on broad field-level research.",
        },
        {
          title: "4. Are the stimulation settings and session rules clear?",
          description:
            "The product should explain duration, intensity adjustment, placement, contact medium, frequency of use and what not to change.",
        },
        {
          title: "5. Is comfort treated as a design requirement?",
          description:
            "Look for gradual intensity control, contact guidance, stop-use instructions and an honest description of expected sensation.",
        },
        {
          title: "6. Are contraindications and precautions easy to find?",
          description:
            "Safety information should be visible before purchase, not hidden behind a checkout or limited to a generic disclaimer.",
        },
        {
          title: "7. Does the company separate sensation from efficacy?",
          description:
            "A stronger feeling should not be marketed as stronger vagal engagement or better outcomes without evidence.",
        },
        {
          title: "8. What app, subscription or consumables are required?",
          description:
            "Check whether guidance, gel, electrodes, replacement parts or ongoing access are included and what happens after an introductory period.",
        },
        {
          title: "9. Are price, delivery, returns and warranty current?",
          description:
            "Commercial terms should be dated, market-specific and consistent across the product page, checkout and legal policies.",
        },
        {
          title: "10. Can the routine realistically be repeated?",
          description:
            "A technically impressive product has limited value if placement, session length, cleaning or setup makes consistent use impractical.",
        },
      ],
    },

    faq: [
      {
        question: "Is ear-based VNS the same as neck-based VNS?",
        answer:
          "No. Both are non-invasive approaches, but they use different anatomical access sites, hardware, electrical fields and evidence bases. They should be compared as distinct method families.",
      },
      {
        question: "Is one method stronger or more effective?",
        answer:
          "There is no responsible universal answer. Strength of sensation is not a valid cross-site measure, and effectiveness depends on the exact device, protocol, population, outcome and intended use.",
      },
      {
        question: "Can the same stimulation settings be used at the ear and neck?",
        answer:
          "They should not be copied without a site-specific device and protocol. Anatomical depth, electrode geometry and current path differ, so matched numbers do not mean matched neural exposure.",
      },
      {
        question: "Where does Neuvago fit?",
        answer:
          "Neuvago uses an ear-based outer-ear electrode and belongs on the auricular side of the method map. That does not make it equivalent to every taVNS study or prove superiority over cervical approaches.",
      },
    ],

    sources: [
      {
        id: "yang-2026-site-specific",
        authors: "Xuejuan Yang et al.",
        title:
          "Site-specific stimulation imperative: Lessons from a failed auricular-cervical transcutaneous vagus nerve stimulation comparison using closely matched parameters",
        publication: "Brain Stimulation",
        year: 2026,
        type: "comparative-study",
        url: "https://pubmed.ncbi.nlm.nih.gov/41482152/",
        doi: "10.1016/j.brs.2025.103022",
        pmid: "41482152",
        note:
          "Direct cross-site study showing why ear-optimized parameters cannot simply be copied to the deeper cervical target and why target engagement should be verified first.",
      },
      {
        id: "farmer-2021-reporting-standards",
        authors: "Adam D. Farmer et al.",
        title:
          "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)",
        publication: "Frontiers in Human Neuroscience",
        year: 2021,
        type: "consensus-review",
        url: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
        doi: "10.3389/fnhum.2020.568051",
        pmid: "33854421",
        note:
          "Consensus framework emphasizing precise reporting of device, site, parameters, control condition and participant characteristics.",
      },
      {
        id: "butt-2020-auricular-anatomy",
        authors: "Mohsin F. Butt, Ahmed Albusoda, Adam D. Farmer and Qasim Aziz",
        title:
          "The anatomical basis for transcutaneous auricular vagus nerve stimulation",
        publication: "Journal of Anatomy",
        year: 2020,
        type: "anatomy-review",
        url: "https://pubmed.ncbi.nlm.nih.gov/31742681/",
        doi: "10.1111/joa.13122",
        pmid: "31742681",
        note:
          "Anatomy review documenting limited cadaveric evidence, heterogeneous findings, and the absence of a definitive map of the most densely vagally innervated outer-ear sites.",
      },
      {
        id: "frangos-2015-ear-fmri",
        authors: "Eleni Frangos, Jens Ellrich and Barry R. Komisaruk",
        title:
          "Non-invasive access to the vagus nerve central projections via electrical stimulation of the external ear",
        publication: "Brain Stimulation",
        year: 2015,
        type: "research-article",
        url: "https://pubmed.ncbi.nlm.nih.gov/25573069/",
        doi: "10.1016/j.brs.2014.11.018",
        pmid: "25573069",
        note:
          "Human fMRI study frequently used to frame central responses to external-ear stimulation; it does not establish equivalence for every ear device or site.",
      },
      {
        id: "frangos-2017-neck-fmri",
        authors: "Eleni Frangos and Barry R. Komisaruk",
        title:
          "Access to Vagal Projections via Cutaneous Electrical Stimulation of the Neck: fMRI Evidence in Healthy Humans",
        publication: "Brain Stimulation",
        year: 2017,
        type: "research-article",
        url: "https://pubmed.ncbi.nlm.nih.gov/28104084/",
        doi: "10.1016/j.brs.2016.10.008",
        pmid: "28104084",
        note:
          "Human fMRI evidence that a specifically designed cervical protocol can influence canonical vagal projection regions.",
      },
      {
        id: "diener-2019-premium",
        authors: "Hans-Christoph Diener et al.",
        title:
          "Non-invasive vagus nerve stimulation (nVNS) for the preventive treatment of episodic migraine: the multicentre, double-blind, randomised, sham-controlled PREMIUM trial",
        publication: "Cephalalgia",
        year: 2019,
        type: "randomized-trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/31522546/",
        doi: "10.1177/0333102419876920",
        pmid: "31522546",
        note:
          "Cervical nVNS trial illustrating the importance of intention-to-treat results, adherence and the possibility of an active sham condition.",
      },
      {
        id: "kim-2022-tavns-safety",
        authors: "Angela Yun Kim et al.",
        title:
          "Safety of transcutaneous auricular vagus nerve stimulation (taVNS): a systematic review and meta-analysis",
        publication: "Scientific Reports",
        year: 2022,
        type: "systematic-review",
        url: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
        doi: "10.1038/s41598-022-25864-1",
        pmid: "36543841",
        note:
          "Large safety synthesis reporting generally mild events while also documenting substantial gaps in adverse-event reporting.",
      },
    ],

    relatedLinks: [
      {
        title: "Vagus nerve stimulation overview",
        description:
          "Start with the full VNS category, including implanted systems, non-invasive approaches and responsible evidence boundaries.",
        href: "/learn/vagus-nerve-stimulation",
        label: "Read VNS overview",
      },
      {
        title: "Non-invasive VNS guide",
        description:
          "Understand the wider external-stimulation category before comparing individual access sites and device designs.",
        href: "/learn/non-invasive-vagus-nerve-stimulation",
        label: "Read nVNS guide",
      },
      {
        title: "Transcutaneous VNS guide",
        description:
          "Review tVNS terminology, protocol variables and why stimulation through the skin is not one standardized method.",
        href: "/learn/transcutaneous-vagus-nerve-stimulation",
        label: "Read tVNS guide",
      },
      {
        title: "Auricular VNS guide",
        description:
          "Go deeper into outer-ear anatomy, taVNS placement, comfort, evidence context and product boundaries.",
        href: "/learn/auricular-vagus-nerve-stimulation",
        label: "Read auricular guide",
      },
      {
        title: "Transcutaneous VNS research",
        description:
          "Explore site, parameters, sham design, target engagement and reporting standards in the research layer.",
        href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
        label: "View tVNS research",
      },
      {
        title: "Auricular VNS research",
        description:
          "Review the dedicated research topic on ear anatomy, stimulation sites, electrodes, controls and interpretation limits.",
        href: "/research/topics/auricular-vagus-nerve-stimulation",
        label: "View auricular research",
      },
      {
        title: "Safety and tolerability",
        description:
          "Read the evidence context for adverse events, tolerability, contraindication awareness and product-specific instructions.",
        href: "/research/topics/safety-and-tolerability",
        label: "Review safety research",
      },
      {
        title: "Intended use",
        description:
          "See how Neuvago defines its general wellness purpose and the medical claims it does not make.",
        href: "/legal/intended-use",
        label: "Review intended use",
      },
    ],

    productBridge: {
      eyebrow: "NEUVAGO CONTEXT",
      title: "Where Neuvago sits on the method map",
      paragraphs: [
        "Neuvago uses a left ear electrode at the outer ear, four 20-minute modes and 30 adjustable intensity levels. That places the product on the ear-based, auricular side of this comparison.",
        "The category placement does not make Neuvago equivalent to every taVNS study and does not establish superiority over cervical methods. Product claims should remain tied to Neuvago’s own intended use, instructions and verified documentation.",
      ],
      actions: [
        {
          label: "See how Neuvago works",
          href: "/how-it-works",
          variant: "primary",
        },
        {
          label: "Explore the product",
          href: "/product",
          variant: "secondary",
        },
        {
          label: "Review intended use",
          href: "/legal/intended-use",
          variant: "tertiary",
        },
      ],
    },

    sitemapPriority: 0.84,
    changeFrequency: "monthly",
  },

  no: {
    id: "ear-vs-neck-vns",
    locale: "no",
    languageTag: "nb-NO",
    openGraphLocale: "nb_NO",
    path: "/no/kunnskap/orebasert-vs-halsbasert-vns",
    counterpartPath: "/learn/ear-vs-neck-vagus-nerve-stimulation",
    defaultPath: "/learn/ear-vs-neck-vagus-nerve-stimulation",
    status: "published",
    kind: "comparison",
    order: 10,

    title: "Ørebasert eller hals-/nakkebasert vagusnervestimulering?",
    seoTitle: "Ørebasert vs. halsbasert VNS | Neuvago",
    description:
      "Sammenlign ørebasert taVNS og cervikal nVNS etter anatomi, enhet, protokoll, forskning, sikkerhet, komfort og tiltenkt bruk.",
    eyebrow: "SAMMENLIGNING AV VNS-METODER",
    lead:
      "Ørebasert taVNS og hals-/nakkebasert cervikal nVNS er to ulike ikke-invasive metodefamilier. Det nyttige spørsmålet er ikke hvilken plassering som alltid er best, men hvordan anatomi, utstyr, protokoll, dokumentasjon, sikkerhet og tiltenkt bruk skiller seg.",
    shortAnswer: [
      "Ørebasert og hals-/nakkebasert stimulering bruker ulike anatomiske innganger og bør ikke behandles som to utskiftbare plasseringer for samme protokoll.",
      "Samme strøm, frekvens eller øktoppsett kan ikke kopieres fra øret til halsen uten å ta hensyn til nervedybde, elektrodegeometri og target engagement.",
      "Forskning fra ett stimuleringssted, én enhet, én protokoll eller én medisinsk indikasjon kan ikke automatisk overføres til et annet produkt eller en velværebruk.",
      "Det finnes ingen ansvarlig universell vinner. Valget må bygge på produktspesifikk dokumentasjon, tiltenkt bruk, sikkerhetsinformasjon, komfort og om rutinen faktisk passer.",
    ],
    hubTitle: "Ørebasert vs. hals-/nakkebasert VNS",
    hubSummary:
      "En nøytral metodesammenligning av anatomi, utstyr, protokoller, forskningsgrenser, sikkerhet og spørsmålene du bør stille før du velger system.",
    hubLabel: "Beslutningsguide",

    primaryKeyword: "øre vs hals vagusnervestimulering",
    secondaryKeywords: [
      "aurikulær vs cervikal VNS",
      "taVNS vs tcVNS",
      "ørebasert vagusnervestimulering",
      "halsbasert vagusnervestimulering",
      "nakkebasert vagusnervestimulering",
    ],
    publishedAt: "2026-08-26",
    modifiedAt: "2026-08-26",
    readingTimeMinutes: 15,
    authorName: "John Willander",
    reviewerName: "Neuvago-redaksjonen",

    comparison: {
      eyebrow: "METODEKART SIDE VED SIDE",
      title: "To stimuleringssteder, to ulike protokollproblemer",
      introduction:
        "Begge metodene omtales som ikke-invasiv VNS, men de når nervesystemet på ulike måter. Øret gir en overfladisk hudnær tilgang. Den cervikale vagusnerven ligger dypere i halsen, slik at feltstyrke, kontakt, plassering og enhetsdesign blir andre tekniske spørsmål.",
      left: {
        label: "taVNS / aurikulær tVNS",
        title: "Ørebasert eller aurikulær VNS",
        summary:
          "Elektrisk stimulering gis gjennom huden ved utvalgte områder i det ytre øret. Forskningen omtaler ofte den aurikulære grenen av vagusnerven, samtidig som ørets nerveforsyning er blandet og varierer.",
        facts: [
          "Tilgang ved det ytre øret uten kirurgi",
          "Øreklips, øreelektrode eller liten overflateelektrode",
          "Plassering og kontaktkvalitet har betydning",
          "Protokollene varierer mye mellom studier og enheter",
        ],
      },
      right: {
        label: "tcVNS / cervikal nVNS",
        title: "Hals-/nakkebasert eller cervikal VNS",
        summary:
          "Elektrisk stimulering gis ved den fremre eller fremre-sidige delen av halsen over forløpet til den cervikale vagusnerven. Nerven ligger dypere enn de aurikulære målene, og produkttilpasset feltlevering blir derfor avgjørende.",
        facts: [
          "Plassering på fremre eller fremre-sidige hals",
          "Vanligvis håndholdt eller hudliggende applikator",
          "Dypere mål krever stedstilpasset teknologi",
          "Studerte protokoller og indikasjoner er enhetsspesifikke",
        ],
      },
      rowLabels: {
        criterion: "Sammenligningspunkt",
        left: "Ørebasert / aurikulær",
        right: "Hals-/nakkebasert / cervikal",
      },
      rows: [
        {
          criterion: "Stimuleringssted",
          left:
            "Utvalgte områder i det ytre øret, som cymba conchae eller tragus i enkelte forskningsprotokoller. Nerveforsyningen er blandet, så nøyaktig plassering må beskrives.",
          right:
            "Den fremre eller fremre-sidige halsen over det anatomiske forløpet til den cervikale vagusnerven. Posisjon, trykk og kontakt varierer med produkt og bruksanvisning.",
        },
        {
          criterion: "Vanlige begreper",
          left:
            "taVNS, aurikulær tVNS, aurikulær VNS, ørebasert VNS eller transkutan aurikulær vagusnervestimulering.",
          right:
            "tcVNS, cervikal nVNS, n-cVNS, cervikal ikke-invasiv VNS eller hals-/nakkebasert vagusnervestimulering.",
        },
        {
          criterion: "Anatomisk utfordring",
          left:
            "Tilgangen er overfladisk, men det ytre øret har overlappende og variabel sensorisk nerveforsyning. Følelse dokumenterer ikke selektiv vagal aktivering.",
          right:
            "Den cervikale vagusnerven ligger dypere. Et elektrisk felt som er tilstrekkelig ved øret, kan være utilstrekkelig ved halsen, mens andre halsnerver fortsatt kan gi tydelig følelse eller fysiologiske signaler.",
        },
        {
          criterion: "Vanlig enhetsform",
          left:
            "Øreklips, øreelektrode, ørepropp-lignende kontakt eller små elektroder koblet til en stimulator og noen ganger en app.",
          right:
            "Håndholdt eller hudliggende applikator mot halsen, ofte med trykk eller ledende kontakt definert i produktets instruksjoner.",
        },
        {
          criterion: "Protokollmønster",
          left:
            "Forskningen spenner fra korte økter til lengre daglig eksponering. Frekvens, pulsbredde, stimuleringssyklus, intensitet og ørested varierer betydelig.",
          right:
            "Enkelte studerte systemer bruker korte, gjentatte stimuleringer, men varighet, bølgeform, utgang og doseringsplan er fortsatt produkt- og studiespesifikke.",
        },
        {
          criterion: "Forskningskontekst",
          left:
            "Et bredt og heterogent forskningsfelt med nevroavbildning, autonome mål, sikkerhet og mange ulike kliniske populasjoner.",
          right:
            "Et eget kunnskapsgrunnlag med mekanismestudier og regulert klinisk enhetsforskning, særlig innen hodepinelidelser og andre medisinske kontekster.",
        },
        {
          criterion: "Sham- og kontrollutfordring",
          left:
            "Øreflipp eller alternative øresteder kan fortsatt gi følelse og er ikke alltid biologisk inaktive. Blinding og valg av kontrollsted må vurderes.",
          right:
            "Sham-enheter eller alternative halsplasseringer kan stimulere somatiske nerver eller gi delvis aktiv stimulering, noe som kompliserer tolkningen.",
        },
        {
          criterion: "Følelse og komfort",
          left:
            "Beskrives ofte som prikking, stikking, trykk eller varme ved øret. Lokal irritasjon og kontaktkvalitet er praktisk relevante.",
          right:
            "Kan gi følelse i hud eller halsmuskulatur, trykk og lokalt ubehag. Sterk følelse dokumenterer ikke cervikal vagal target engagement.",
        },
        {
          criterion: "Kan dokumentasjon overføres?",
          left:
            "Ikke automatisk. Ett ørested, én enhet, én protokoll eller én populasjon kan ikke representere alle aurikulære produkter eller bruksområder.",
          right:
            "Ikke automatisk. Resultater fra én cervikal enhet eller medisinsk indikasjon kan ikke generaliseres til alle halsstimulatorer eller velværebruk.",
        },
        {
          criterion: "Beste beslutningsspørsmål",
          left:
            "Forklarer produktet ørested, kontakt, innstillinger, sikkerhetsgrenser, tiltenkt bruk og produktspesifikk dokumentasjon tydelig?",
          right:
            "Forklarer produktet halsplassering, kontakt, dosering, sikkerhetsgrenser, tiltenkt bruk og produktspesifikk dokumentasjon tydelig?",
        },
      ],
      footnote:
        "Tabellen sammenligner metodefamilier, ikke enkeltmerker. Bruksanvisning, kontraindikasjoner, regulatorisk status, pris og dokumentasjon må kontrolleres for den konkrete enheten.",
    },

    sections: [
      {
        id: "ulike-metodefamilier",
        eyebrow: "BEGYNN MED KATEGORIEN",
        title: "Øre og hals er ikke to utskiftbare innstillinger",
        blocks: [
          {
            type: "paragraph",
            text:
              "Begge tilnærmingene forsøker å påvirke vagale nervebaner uten kirurgi, men inngangen til nervesystemet er forskjellig. Aurikulær stimulering bruker et overfladisk område i det ytre øret. Cervikal stimulering gis ved halsen over en dypere nervestamme. Forskjellen endrer utstyr, elektrisk felt, hvilke andre nerver som kan stimuleres, kontrollbetingelsen og hvordan et fysiologisk svar bør tolkes.",
          },
          {
            type: "cards",
            items: [
              {
                label: "ANATOMI",
                title: "Målet ligger ikke på samme dybde",
                description:
                  "En protokoll som gir tilstrekkelig strømtetthet ved øret, trenger ikke nå den dypere cervikale vagusnerven. Halsstimulering krever derfor egen plasserings- og feltlogikk.",
              },
              {
                label: "UTSTYR",
                title: "Elektrodegeometrien endrer eksponeringen",
                description:
                  "Øreklips, øreelektrode og håndholdt halsapplikator gir ulik kontaktflate, trykk, strømvei og risiko for stimulering utenfor det planlagte målet.",
              },
              {
                label: "PROTOKOLL",
                title: "Like tall er ikke lik dose",
                description:
                  "Samme milliampere, hertz eller pulsbredde gir ikke samme nevrale eksponering når anatomi, elektrodestørrelse og vevsdybde er forskjellig.",
              },
              {
                label: "DOKUMENTASJON",
                title: "Hver metode trenger sitt eget evidensspor",
                description:
                  "Et funn fra ett stimuleringssted kan informere feltet, men kan ikke automatisk validere en annen enhet, en annen plassering eller en annen tiltenkt bruk.",
              },
            ],
          },
          {
            type: "callout",
            tone: "summary",
            title: "Den ansvarlige konklusjonen",
            paragraphs: [
              "Ørebasert og hals-/nakkebasert VNS bør sammenlignes som ulike metodefamilier, ikke som utskiftbare varianter av én behandling.",
              "En nyttig sammenligning begynner med anatomi og produktspesifikke instruksjoner før den diskuterer effekt eller bekvemmelighet.",
            ],
          },
        ],
      },
      {
        id: "stedsspesifikke-protokoller",
        eyebrow: "METODELÆRDOM",
        title: "Stedstilpassede protokoller betyr mer enn identiske innstillinger",
        blocks: [
          {
            type: "paragraph",
            text:
              "En komparativ studie publisert i 2026 viser problemet tydelig. Forskerne brukte nært samsvarende, taVNS-optimaliserte parametere ved øret og halsen. Beregningsmodellen tydet på at halsbetingelsen ikke nådde aktiveringsterskelen for den dype cervikale vagusnerven. Forskerne konkluderte derfor med at den direkte sammenligningen mellom aurikulær og cervikal stimulering ikke var gyldig under disse innstillingene.",
          },
          {
            type: "callout",
            tone: "evidence",
            title: "Hva studien viser – og ikke viser",
            paragraphs: [
              "Den viser at et parameteroppsett utviklet for øret kan mislykkes i å nå det planlagte cervikale målet, selv om halsstimuleringen kjennes aktiv eller påvirker en uspesifikk biomarkør.",
              "Den viser ikke at cervikal ikke-invasiv VNS aldri kan aktivere vagale nervebaner. Tidligere human fMRI-forskning med en cervikal protokoll fant aktivering i sentrale vagale projeksjonsområder. Den samlede lærdommen er at target engagement må verifiseres for stimuleringsstedet og enheten som undersøkes.",
            ],
          },
          {
            type: "bullets",
            items: [
              "Sammenlign ikke metodene bare etter strømstyrke eller følelse.",
              "Kontroller elektrodegeometri, kontaktmiddel, trykk og plassering.",
              "Kontroller at protokollen faktisk er utviklet for det anatomiske stedet.",
              "Se etter dokumentasjon av target engagement i stedet for å anta det fra merkelappen VNS.",
              "Tolk fysiologiske markører forsiktig når somatiske nerver eller aktiv sham kan bidra.",
            ],
          },
        ],
      },
      {
        id: "overforing-av-dokumentasjon",
        eyebrow: "DOKUMENTASJONSGRENSER",
        title: "Forskningskontekst er nyttig, men dokumentasjon overføres ikke automatisk",
        blocks: [
          {
            type: "paragraph",
            text:
              "VNS-litteraturen omfatter implanterte kliniske systemer, cervikale ikke-invasive enheter, aurikulær stimulering, ulike bølgeformer, kontrollbetingelser og svært forskjellige populasjoner. Litteraturen kan brukes til å forstå metodekartet, men en produktpåstand bør knyttes til den konkrete enheten, protokollen, tiltenkte bruken og populasjonen som faktisk støtter den.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Metodedokumentasjon",
                description:
                  "Viser hva en forskningsmetode kan være i stand til under bestemte forhold. Den validerer ikke automatisk alle kommersielle produkter som bruker samme forkortelse.",
              },
              {
                title: "Enhetsspesifikk dokumentasjon",
                description:
                  "Tester en definert enhet, plassering og protokoll. Den kan være mer relevant, men populasjon, utfall og regulatorisk indikasjon må fortsatt vurderes.",
              },
              {
                title: "Produktfakta",
                description:
                  "Omfatter bekreftede innstillinger, øktlengde, pakkeinnhold, appkrav, tiltenkt bruk, sikkerhetsinstruksjoner og gjeldende kjøpsvilkår.",
              },
              {
                title: "Markedsføringspåstander",
                description:
                  "Bør være smalere enn den mest oppsiktsvekkende studien og skal ikke gjøre medisinsk forskning om til udokumenterte velværeløfter.",
              },
            ],
          },
          {
            type: "callout",
            tone: "scope",
            title: "En sammenligningsside bør ikke kåre en universell vinner",
            paragraphs: [
              "Ulike stimuleringssteder kan passe til ulike enheter, forskningsspørsmål, indikasjoner og rutiner. At det ikke finnes én universell vinner, er ikke en svakhet – det er en grunn til å sammenligne mer presist.",
            ],
          },
        ],
      },
      {
        id: "sham-folelse-og-target-engagement",
        eyebrow: "SLIK LESER DU STUDIENE",
        title: "Følelse, sham og target engagement kan lett blandes sammen",
        blocks: [
          {
            type: "paragraph",
            text:
              "Både øre- og halsstimulering kan gi tydelige hud-, muskel- eller sanseopplevelser. Følelsen kan hjelpe brukeren med å bekrefte kontakt, men dokumenterer ikke i seg selv selektiv vagal aktivering. Den gjør også blinding vanskelig: en sham som kjennes for svak, kan avsløre gruppen, mens en overbevisende sham kan stimulere biologisk aktivt vev.",
          },
          {
            type: "numbered",
            items: [
              "Undersøk om deltakerne og forskerne faktisk var blindet.",
              "Se om sham-enheten leverte strøm, brukte et annet sted eller en annen bølgeform.",
              "Se etter dokumentasjon av det planlagte nevrale målet, ikke bare reaksjon i hud eller muskel.",
              "Skill mekanisme- og biomarkørfunn fra utfall som betyr noe for pasienten eller brukeren.",
              "Kontroller om etterlevelse endret resultatet, eller om den primære intention-to-treat-analysen var negativ.",
            ],
          },
          {
            type: "callout",
            tone: "evidence",
            title: "Hvorfor dette er viktig i cervikal forskning",
            paragraphs: [
              "I PREMIUM-studien på migrene var den primære intention-to-treat-sammenligningen ikke statistisk signifikant. Forskerne rapporterte også at sham-enheten kan ha gitt aktiv vagusstimulering, og at etterlevelse kompliserte tolkningen.",
              "Det gjør ikke studien verdiløs. Det viser hvorfor kontrollenheten, etterlevelsen og de forhåndsdefinerte utfallene må leses før man aksepterer en overskrift som fasit.",
            ],
          },
        ],
      },
      {
        id: "sikkerhet-og-praktisk-passform",
        eyebrow: "SIKKERHET OG BRUK",
        title: "Ingen av plasseringene fjerner behovet for produktspesifikk sikkerhetsveiledning",
        blocks: [
          {
            type: "paragraph",
            text:
              "Ikke-invasiv betyr ikke risikofri, egnet for alle eller trygg å improvisere med. Ørebaserte studier rapporterer ofte lokale opplevelser som prikking eller øresmerte, mens halsbaserte systemer kan gi trykk, muskel- eller hudfølelse. Kontraindikasjoner og stoppregler avhenger av enheten, den elektriske utgangen, tiltenkt bruk og personen som bruker den.",
          },
          {
            type: "callout",
            tone: "safety",
            title: "Følg instruksjonene til det konkrete produktet",
            paragraphs: [
              "Flytt ikke en elektrode fra øret til halsen, kopier ikke innstillinger fra en studie, kombiner ikke enheter og øk ikke intensiteten for å jage en sterkere følelse.",
              "Ikke vurder personlig egnethet ut fra en metodesammenligning. Bruker du implantert elektronikk, har en aktiv medisinsk tilstand, er gravid eller er usikker på elektrisk stimulering, skal du følge produktspesifikke instruksjoner og søke kvalifisert helsefaglig veiledning før bruk.",
            ],
          },
          {
            type: "paragraph",
            text:
              "En systematisk sikkerhetsoversikt for taVNS fant ingen forskjell i risikoen for uønskede hendelser mellom aktiv stimulering og kontroll i studiene som kunne metaanalyseres. Samtidig fant oversikten store mangler i rapporteringen av hendelser. Den nyttige konklusjonen er ikke at alle øreprodukter er dokumentert trygge, men at sikkerhetsinformasjonen må være synlig og produktspesifikk.",
          },
        ],
      },
      {
        id: "kommersiell-avgrensning",
        eyebrow: "KOMMERSIELL AVGRENSNING",
        title: "Metodesammenligning bør komme før prisrangering",
        blocks: [
          {
            type: "paragraph",
            text:
              "Pris, garanti, retur, abonnement, medfølgende tilbehør og tilgjengelighet er viktige, men endrer seg over tid og må kontrolleres for riktig produkt og marked. Denne piloten sammenligner derfor metodefamilier i stedet for å rangere merker eller lage en best-i-test-tabell.",
          },
          {
            type: "callout",
            tone: "product",
            title: "Dette må dateres og bekreftes før kjøp",
            paragraphs: [
              "Kontroller gjeldende pris, hva som følger med, om app eller abonnement kreves, om gel eller elektroder gir løpende kostnader, garanti eller lovbestemte rettigheter, returvilkår, leveringsområde og supportkanal.",
              "En senere kjøpsguide kan sammenligne disse feltene først når opplysningene er oppdaterte, kildebelagte og vist med oppdateringsdato.",
            ],
          },
        ],
      },
    ],

    checklist: {
      eyebrow: "BESLUTNINGSSJEKKLISTE",
      title: "Ti spørsmål før du velger en VNS-enhet",
      introduction:
        "Den samme sjekklisten kan brukes for øre- og halsbaserte produkter. Den flytter vurderingen fra vage løfter til etterprøvbare produktfakta.",
      items: [
        {
          title: "1. Hvilken metode og nøyaktig plassering bruker produktet?",
          description:
            "Se etter tydelig språk som aurikulær/ørebasert eller cervikal/halsbasert, og en illustrasjon eller instruksjon som viser kontaktstedet.",
        },
        {
          title: "2. Hva er tiltenkt bruk og regulatorisk posisjon?",
          description:
            "Skill et generelt velværeprodukt fra en regulert medisinsk enhet, og kontroller hvilket marked og hvilken indikasjon som omtales.",
        },
        {
          title: "3. Er dokumentasjonen produktspesifikk?",
          description:
            "Undersøk om studier testet den konkrete enheten og protokollen, eller om selskapet hovedsakelig viser til generell forskning på feltet.",
        },
        {
          title: "4. Er innstillinger og øktregler tydelige?",
          description:
            "Produktet bør forklare varighet, intensitetsjustering, plassering, kontaktmiddel, bruksfrekvens og hva brukeren ikke skal endre.",
        },
        {
          title: "5. Behandles komfort som et designkrav?",
          description:
            "Se etter gradvis intensitetskontroll, kontaktveiledning, stoppregler og en ærlig beskrivelse av forventet følelse.",
        },
        {
          title: "6. Er kontraindikasjoner og forsiktighetsregler enkle å finne?",
          description:
            "Sikkerhetsinformasjonen bør være synlig før kjøp, ikke skjult bak checkout eller begrenset til en generell ansvarsfraskrivelse.",
        },
        {
          title: "7. Skiller selskapet mellom følelse og effekt?",
          description:
            "En sterkere følelse bør ikke markedsføres som sterkere vagal aktivering eller bedre resultat uten dokumentasjon.",
        },
        {
          title: "8. Hvilken app, abonnement eller forbruksmateriell kreves?",
          description:
            "Kontroller om veiledning, gel, elektroder, reservedeler eller løpende tilgang er inkludert, og hva som skjer etter en introduksjonsperiode.",
        },
        {
          title: "9. Er pris, levering, retur og garanti oppdatert?",
          description:
            "Kjøpsvilkår bør være daterte, markedsspesifikke og samsvare mellom produktside, checkout og juridiske vilkår.",
        },
        {
          title: "10. Er rutinen realistisk å gjenta?",
          description:
            "Et teknisk imponerende produkt har begrenset verdi dersom plassering, øktlengde, rengjøring eller oppsett gjør jevn bruk upraktisk.",
        },
      ],
    },

    faq: [
      {
        question: "Er ørebasert VNS det samme som halsbasert VNS?",
        answer:
          "Nei. Begge er ikke-invasive tilnærminger, men bruker ulike anatomiske innganger, enheter, elektriske felt og kunnskapsgrunnlag. De bør sammenlignes som forskjellige metodefamilier.",
      },
      {
        question: "Er én metode sterkere eller mer effektiv?",
        answer:
          "Det finnes ikke ett ansvarlig universelt svar. Følelsesstyrke er ikke et gyldig mål på tvers av stimuleringssteder, og resultatet avhenger av konkret enhet, protokoll, populasjon, utfall og tiltenkt bruk.",
      },
      {
        question: "Kan de samme innstillingene brukes ved øret og halsen?",
        answer:
          "De bør ikke kopieres uten en stedstilpasset enhet og protokoll. Anatomi, nervedybde, elektrodegeometri og strømvei er forskjellig, slik at like tall ikke betyr lik nevrale eksponering.",
      },
      {
        question: "Hvor plasserer Neuvago seg?",
        answer:
          "Neuvago bruker en øreelektrode ved det ytre øret og hører derfor hjemme på den aurikulære siden av metodekartet. Det gjør ikke produktet likt alle taVNS-studier og dokumenterer ikke overlegenhet over cervikale metoder.",
      },
    ],

    sources: [
      {
        id: "yang-2026-site-specific",
        authors: "Xuejuan Yang mfl.",
        title:
          "Site-specific stimulation imperative: Lessons from a failed auricular-cervical transcutaneous vagus nerve stimulation comparison using closely matched parameters",
        publication: "Brain Stimulation",
        year: 2026,
        type: "comparative-study",
        url: "https://pubmed.ncbi.nlm.nih.gov/41482152/",
        doi: "10.1016/j.brs.2025.103022",
        pmid: "41482152",
        note:
          "Direkte sammenligning som viser hvorfor øreoptimaliserte parametere ikke uten videre kan kopieres til det dypere cervikale målet, og hvorfor target engagement bør verifiseres først.",
      },
      {
        id: "farmer-2021-reporting-standards",
        authors: "Adam D. Farmer mfl.",
        title:
          "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)",
        publication: "Frontiers in Human Neuroscience",
        year: 2021,
        type: "consensus-review",
        url: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
        doi: "10.3389/fnhum.2020.568051",
        pmid: "33854421",
        note:
          "Konsensusramme som fremhever nøyaktig rapportering av enhet, sted, parametere, kontrollbetingelse og deltakergruppe.",
      },
      {
        id: "butt-2020-auricular-anatomy",
        authors: "Mohsin F. Butt, Ahmed Albusoda, Adam D. Farmer og Qasim Aziz",
        title:
          "The anatomical basis for transcutaneous auricular vagus nerve stimulation",
        publication: "Journal of Anatomy",
        year: 2020,
        type: "anatomy-review",
        url: "https://pubmed.ncbi.nlm.nih.gov/31742681/",
        doi: "10.1111/joa.13122",
        pmid: "31742681",
        note:
          "Anatomioversikt som beskriver begrenset kadaverdokumentasjon, heterogene funn og manglende fasit for hvilke områder i det ytre øret som har tettest vagal nerveforsyning.",
      },
      {
        id: "frangos-2015-ear-fmri",
        authors: "Eleni Frangos, Jens Ellrich og Barry R. Komisaruk",
        title:
          "Non-invasive access to the vagus nerve central projections via electrical stimulation of the external ear",
        publication: "Brain Stimulation",
        year: 2015,
        type: "research-article",
        url: "https://pubmed.ncbi.nlm.nih.gov/25573069/",
        doi: "10.1016/j.brs.2014.11.018",
        pmid: "25573069",
        note:
          "Human fMRI-studie som ofte brukes til å ramme inn sentrale responser ved stimulering av det ytre øret; den dokumenterer ikke ekvivalens for alle øreenheter eller øresteder.",
      },
      {
        id: "frangos-2017-neck-fmri",
        authors: "Eleni Frangos og Barry R. Komisaruk",
        title:
          "Access to Vagal Projections via Cutaneous Electrical Stimulation of the Neck: fMRI Evidence in Healthy Humans",
        publication: "Brain Stimulation",
        year: 2017,
        type: "research-article",
        url: "https://pubmed.ncbi.nlm.nih.gov/28104084/",
        doi: "10.1016/j.brs.2016.10.008",
        pmid: "28104084",
        note:
          "Human fMRI-dokumentasjon på at en spesifikt utformet cervikal protokoll kan påvirke sentrale vagale projeksjonsområder.",
      },
      {
        id: "diener-2019-premium",
        authors: "Hans-Christoph Diener mfl.",
        title:
          "Non-invasive vagus nerve stimulation (nVNS) for the preventive treatment of episodic migraine: the multicentre, double-blind, randomised, sham-controlled PREMIUM trial",
        publication: "Cephalalgia",
        year: 2019,
        type: "randomized-trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/31522546/",
        doi: "10.1177/0333102419876920",
        pmid: "31522546",
        note:
          "Cervikal nVNS-studie som viser betydningen av intention-to-treat-resultater, etterlevelse og muligheten for en aktiv sham-betingelse.",
      },
      {
        id: "kim-2022-tavns-safety",
        authors: "Angela Yun Kim mfl.",
        title:
          "Safety of transcutaneous auricular vagus nerve stimulation (taVNS): a systematic review and meta-analysis",
        publication: "Scientific Reports",
        year: 2022,
        type: "systematic-review",
        url: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
        doi: "10.1038/s41598-022-25864-1",
        pmid: "36543841",
        note:
          "Stor sikkerhetssyntese som beskriver hovedsakelig milde hendelser, men også betydelige mangler i rapporteringen av uønskede hendelser.",
      },
    ],

    relatedLinks: [
      {
        title: "Vagusnervestimulering – oversikt",
        description:
          "Begynn med hele VNS-kategorien, inkludert implanterte systemer, ikke-invasive tilnærminger og ansvarlige dokumentasjonsgrenser.",
        href: "/no/kunnskap/vagusnervestimulering",
        label: "Les VNS-oversikten",
      },
      {
        title: "Ikke-invasiv VNS",
        description:
          "Forstå den bredere kategorien for ekstern stimulering før du sammenligner konkrete stimuleringssteder og enhetsdesign.",
        href: "/no/kunnskap/ikke-invasiv-vagusnervestimulering",
        label: "Les nVNS-guiden",
      },
      {
        title: "Transkutan VNS",
        description:
          "Se tVNS-begreper, protokollvariabler og hvorfor stimulering gjennom huden ikke er én standardisert metode.",
        href: "/no/kunnskap/transkutan-vagusnervestimulering",
        label: "Les tVNS-guiden",
      },
      {
        title: "Aurikulær VNS",
        description:
          "Gå dypere i øreanatomi, taVNS-plassering, komfort, forskningskontekst og produktgrenser.",
        href: "/no/kunnskap/aurikulaer-vagusnervestimulering",
        label: "Les aurikulær VNS-guide",
      },
      {
        title: "Transkutan VNS-forskning",
        description:
          "Utforsk stimuleringssted, parametere, sham, target engagement og rapporteringsstandarder i forskningslaget.",
        href: "/no/forskning/transkutan-vagusnervestimulering",
        label: "Utforsk tVNS-forskning",
      },
      {
        title: "Aurikulær VNS-forskning",
        description:
          "Se forskningstemaet om øreanatomi, stimuleringssteder, elektroder, kontrollbetingelser og tolkningsgrenser.",
        href: "/no/forskning/aurikulaer-vagusnervestimulering",
        label: "Utforsk aurikulær forskning",
      },
      {
        title: "Sikkerhet og tolerabilitet",
        description:
          "Les forskningskontekst for uønskede hendelser, tolerabilitet, kontraindikasjoner og produktspesifikke instruksjoner.",
        href: "/no/forskning/sikkerhet-og-tolerabilitet",
        label: "Les om sikkerhet",
      },
      {
        title: "Tiltenkt bruk",
        description:
          "Se hvordan Neuvago definerer sitt generelle velværeformål og hvilke medisinske påstander produktet ikke gjør.",
        href: "/no/juridisk/tiltenkt-bruk",
        label: "Les tiltenkt bruk",
      },
    ],

    productBridge: {
      eyebrow: "NEUVAGO-KONTEKST",
      title: "Hvor Neuvago plasserer seg i metodekartet",
      paragraphs: [
        "Neuvago bruker en venstre øreelektrode ved det ytre øret, fire moduser på 20 minutter og 30 justerbare intensitetsnivåer. Produktet hører derfor hjemme på den ørebaserte, aurikulære siden av sammenligningen.",
        "Metodeplasseringen gjør ikke Neuvago likt alle taVNS-studier og dokumenterer ikke overlegenhet over cervikale metoder. Produktkommunikasjonen skal fortsatt knyttes til Neuvagos egen tiltenkte bruk, bruksanvisning og verifiserte dokumentasjon.",
      ],
      actions: [
        {
          label: "Se hvordan Neuvago fungerer",
          href: "/no/slik-fungerer-det",
          variant: "primary",
        },
        {
          label: "Utforsk produktet",
          href: "/no/produkt",
          variant: "secondary",
        },
        {
          label: "Les tiltenkt bruk",
          href: "/no/juridisk/tiltenkt-bruk",
          variant: "tertiary",
        },
      ],
    },

    sitemapPriority: 0.84,
    changeFrequency: "monthly",
  },
} as const satisfies DecisionGuidePair;
