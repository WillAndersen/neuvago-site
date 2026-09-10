import type { LegalTemplateContent } from "@/components/legal/LocalizedLegalPage";

export const enEditorialPolicyContent = {
  metadata: {
    title: "Editorial Policy, Sources & Scientific Review | Neuvago",
    description:
      "How Neuvago handles editorial responsibility, sources, scientific and medical review, corrections, AI assistance, conflicts of interest, and claims boundaries.",
    alternates: {
      canonical: "/legal/editorial-policy",
      languages: {
        "en-US": "/legal/editorial-policy",
        "nb-NO": "/no/redaksjonell-policy",
        "x-default": "/legal/editorial-policy",
      },
    },
    openGraph: {
      title: "Editorial Policy, Sources & Scientific Review | Neuvago",
      description:
        "How Neuvago handles sources, review, corrections, AI assistance, conflicts, and claims boundaries.",
      url: "/legal/editorial-policy",
      siteName: "Neuvago",
      locale: "en_US",
      type: "website",
    },
  },
  structuredDataTitle: "Editorial Policy, Sources & Scientific Review | Neuvago",
  structuredDataDescription:
    "How Neuvago handles editorial responsibility, sources, scientific and medical review, corrections, AI assistance, conflicts of interest, and claims boundaries.",
  path: "/legal/editorial-policy",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Legal", path: "/legal" },
    { name: "Editorial Policy", path: "/legal/editorial-policy" },
  ],
  eyebrow: "Trust / Editorial policy",
  title: "How we research, review, correct, and communicate claims.",
  description:
    "Neuvago publishes educational, research, product, and commercial information in a health-adjacent field. This policy explains how we keep those kinds of information separate and reviewable.",
  secondaryDescription:
    "Neuvago publishes this website and is commercially connected to the Neuvago product. That interest is part of the context readers should have when evaluating product and research content.",
  labels: {
    contentEyebrow: "Policy sections",
    contentTitle: "Editorial standards, review, corrections, and claims boundaries",
    contentIntro:
      "This page explains the standards behind Neuvago editorial work. The policy is updated when our publication process, evidence standards, review model, product documentation, or regulatory context changes materially.",
    relatedEyebrow: "Related trust pages",
    relatedTitle: "Continue through the Neuvago trust layer",
  },
  primaryCta: { label: "Read Trust & Safety", href: "/legal/trust-safety" },
  secondaryCta: { label: "Read regulatory information", href: "/legal/regulatory" },
  trustCard: {
    eyebrow: "Editorial standard",
    title: "Traceable sources, explicit boundaries, accountable publication",
    items: [
      {
        title: "Sources before claims",
        description:
          "Health, scientific, safety, and regulatory statements should be traceable to an appropriate source or dated controlled fact record.",
      },
      {
        title: "Exact modality matters",
        description:
          "Implanted VNS, cervical nVNS, auricular taVNS, and the Neuvago product are not treated as interchangeable interventions.",
      },
      {
        title: "Review labels mean something",
        description:
          "We only describe content as medically or scientifically reviewed when a completed reviewer record and decision exist for that content.",
      },
    ],
  },
  notice: {
    title: "Commercial-interest disclosure",
    body:
      "Neuvago is the publisher of this website and the brand behind the Neuvago product. Research summaries, educational pages, and future product comparisons must separate general evidence from Neuvago-specific facts.",
  },
  keyPoints: [
    {
      title: "Evidence does not transfer automatically",
      description:
        "A result reported for one device, stimulation site, protocol, population, or VNS modality is not automatically evidence for another.",
    },
    {
      title: "Corrections are part of publication",
      description:
        "Material factual, safety, evidence, and claims corrections should be recorded with the affected page, exact change, reason, and supporting source or professional rationale.",
    },
    {
      title: "AI is an assistant, not an authority",
      description:
        "AI tools may assist with research organization, drafting, localization, comparison, or quality checks, but are not treated as sources, reviewers, or final decision-makers.",
    },
  ],
  sections: [
    {
      title: "Editorial responsibility",
      body: [
        "A published page remains Neuvago's editorial responsibility. Automation or AI assistance does not transfer responsibility away from the human editorial process.",
        "Priority pages should have a defined user question, search job, evidence boundary, source set, update expectation, and review level before publication.",
      ],
    },
    {
      title: "Source hierarchy",
      body: [
        "Level A sources include authoritative definitions, standards, official regulatory decisions, and primary official documentation.",
        "Level B sources include systematic reviews and meta-analyses, summarized with intervention, population, certainty, heterogeneity, and limitations.",
        "Level C sources include randomized or controlled studies and are described only for the studied population, intervention, protocol, comparator, and outcomes.",
        "Level D sources include mechanistic, imaging, observational, preclinical, or exploratory work and are not presented as proof of clinical benefit.",
      ],
    },
    {
      title: "Three evidence layers",
      body: [
        "Product evidence means evidence that directly evaluates Neuvago or a fact supported by controlled Neuvago product documentation.",
        "Method evidence concerns a defined intervention such as implanted VNS, cervical nVNS, tVNS, or auricular taVNS and must retain the exact modality, site, protocol, and population.",
        "General physiology describes anatomy, autonomic function, mechanisms, or associations. A plausible mechanism does not establish a product benefit or clinical outcome.",
      ],
    },
    {
      title: "Modality and claim-transfer lock",
      body: [
        "Material evidence statements should identify whether they concern implanted VNS, cervical non-invasive VNS, transcutaneous VNS, auricular taVNS, or Neuvago.",
        "General VNS or taVNS research is scientific context and is not automatically Neuvago-specific product evidence.",
        "We do not transfer regulatory status, indications, efficacy, safety conclusions, or protocol results between devices, modalities, populations, or markets.",
      ],
    },
    {
      title: "Medical and specialist review",
      body: [
        "Review requirements increase with risk. High-risk condition, safety, diagnostic, contraindication, or treatment-adjacent content may require a qualified medical or subject-matter specialist.",
        "Where specialist review is required, the record should identify the reviewer, professional role or specialty, relevant qualifications where applicable, jurisdiction, review date, conflict-of-interest declaration, and decision.",
        "Available decisions are approve as written, approve with minor edits, revise and resubmit, or do not release.",
      ],
    },
    {
      title: "Corrections and change requests",
      body: [
        "A substantive change request should identify the page and section, exact current text, exact replacement or deletion, reason, supporting source or professional rationale, and severity.",
        "Safety-critical, regulatory, evidence, and material factual corrections take priority over stylistic changes.",
      ],
    },
    {
      title: "AI assistance",
      body: [
        "AI tools may assist with research organization, terminology, source comparison, drafting, localization, metadata work, and consistency checks.",
        "AI output is not treated as an authoritative source and does not qualify as medical, scientific, legal, or regulatory review.",
        "Human editorial responsibility remains with Neuvago, and high-risk publication gates cannot be satisfied by AI review alone.",
      ],
    },
    {
      title: "Conflicts of interest and comparisons",
      body: [
        "Neuvago has a direct commercial interest in the Neuvago product and should not hide that interest in research interpretation, buyer guidance, or product comparisons.",
        "Future comparison content should use documented criteria, dated sources, transparent methodology, and a distinction between manufacturer-provided facts, independently verified facts, and editorial judgment.",
      ],
    },
    {
      title: "Regulatory and product facts",
      body: [
        "Regulatory classification, CE status, FDA status, intended use, product specifications, warnings, contraindications, pricing, availability, and warranty are fact-gated information.",
        "Scientific evidence cannot substitute for regulatory authorization, product documentation, or market-specific legal review.",
      ],
    },
  ],
  relatedPages: [
    { title: "Trust & Safety", description: "How Neuvago approaches safety and responsible communication.", href: "/legal/trust-safety", linkLabel: "Read Trust & Safety" },
    { title: "Regulatory Information", description: "Market and classification context kept separate from scientific evidence.", href: "/legal/regulatory", linkLabel: "Read regulatory information" },
    { title: "Medical Disclaimer", description: "How educational information should be understood in relation to personal medical care.", href: "/legal/medical-disclaimer", linkLabel: "Read medical disclaimer" },
    { title: "Research", description: "Explore research summaries and individual study records.", href: "/research", linkLabel: "Explore research" },
  ],
  finalCta: {
    eyebrow: "Corrections and questions",
    title: "See something that should be corrected or clarified?",
    description:
      "Send the page URL and the issue to Neuvago Support. Material corrections should be traceable through the editorial change process.",
    primaryCta: { label: "Contact support", href: "/support" },
    secondaryCta: { label: "Back to legal hub", href: "/legal" },
  },
} satisfies LegalTemplateContent;

export const noEditorialPolicyContent = {
  metadata: {
    title: "Redaksjonell policy, kilder og faglig gjennomgang | Neuvago Norge",
    description:
      "Slik arbeider Neuvago med redaksjonelt ansvar, kilder, medisinsk og faglig gjennomgang, rettelser, AI-bruk, interessekonflikter og påstandsgrenser.",
    alternates: {
      canonical: "/no/redaksjonell-policy",
      languages: {
        "en-US": "/legal/editorial-policy",
        "nb-NO": "/no/redaksjonell-policy",
        "x-default": "/legal/editorial-policy",
      },
    },
    openGraph: {
      title: "Redaksjonell policy, kilder og faglig gjennomgang | Neuvago Norge",
      description:
        "Slik arbeider Neuvago med kilder, faglig gjennomgang, rettelser, AI-bruk, interessekonflikter og påstandsgrenser.",
      url: "/no/redaksjonell-policy",
      siteName: "Neuvago",
      locale: "nb_NO",
      type: "website",
    },
  },
  structuredDataTitle: "Redaksjonell policy, kilder og faglig gjennomgang | Neuvago Norge",
  structuredDataDescription:
    "Slik arbeider Neuvago med redaksjonelt ansvar, kilder, medisinsk og faglig gjennomgang, rettelser, AI-bruk, interessekonflikter og påstandsgrenser.",
  path: "/no/redaksjonell-policy",
  breadcrumbs: [
    { name: "Forside", path: "/no" },
    { name: "Juridisk", path: "/no/juridisk" },
    { name: "Redaksjonell policy", path: "/no/redaksjonell-policy" },
  ],
  eyebrow: "Tillit / Redaksjonell policy",
  title: "Slik undersøker, gjennomgår, retter og kommuniserer vi påstander.",
  description:
    "Neuvago publiserer kunnskaps-, forsknings-, produkt- og kommersielt innhold i et helsenært fagområde. Denne policyen beskriver hvordan vi skiller innholdstypene og gjør vurderingene etterprøvbare.",
  secondaryDescription:
    "Neuvago publiserer nettstedet og har en kommersiell tilknytning til Neuvago-produktet. Lesere skal ha denne konteksten når de vurderer produkt- og forskningsinnholdet vårt.",
  labels: {
    contentEyebrow: "Policyseksjoner",
    contentTitle: "Redaksjonelle standarder, review, rettelser og påstandsgrenser",
    contentIntro:
      "Denne siden forklarer standardene bak Neuvagos redaksjonelle arbeid. Policyen oppdateres når publiseringsprosessen, evidenskravene, review-modellen, produktdokumentasjonen eller den regulatoriske konteksten endres vesentlig.",
    relatedEyebrow: "Relaterte tillitssider",
    relatedTitle: "Gå videre i Neuvagos tillitslag",
  },
  primaryCta: { label: "Les Tillit og sikkerhet", href: "/no/juridisk/tillit-og-sikkerhet" },
  secondaryCta: { label: "Les regulatorisk informasjon", href: "/no/juridisk/regulatorisk" },
  trustCard: {
    eyebrow: "Redaksjonell standard",
    title: "Sporbare kilder, tydelige grenser og ansvarlig publisering",
    items: [
      { title: "Kilder før påstander", description: "Helse-, forsknings-, sikkerhets- og regulatoriske utsagn skal kunne spores til en egnet kilde eller et datert kontrollert faktaregister." },
      { title: "Riktig VNS-modalitet", description: "Implantert VNS, cervikal nVNS, aurikulær taVNS og Neuvago behandles ikke som utskiftbare intervensjoner." },
      { title: "Review-merker skal være reelle", description: "Vi omtaler bare innhold som medisinsk eller faglig gjennomgått når det finnes en ferdigstilt reviewer-oppføring og beslutning." },
    ],
  },
  notice: {
    title: "Opplysning om kommersiell interesse",
    body:
      "Neuvago er utgiver av nettstedet og merkevaren bak Neuvago-produktet. Forskningsoppsummeringer, kunnskapssider og fremtidige produktsammenligninger skal skille generell evidens fra Neuvago-spesifikke fakta.",
  },
  keyPoints: [
    { title: "Evidens overføres ikke automatisk", description: "Et resultat for én enhet, plassering, protokoll, populasjon eller VNS-modalitet er ikke automatisk evidens for en annen." },
    { title: "Rettelser er del av publiseringen", description: "Vesentlige fakta-, sikkerhets-, evidens- og påstandsrettelser bør registreres med side, eksakt endring, begrunnelse og kilde eller faglig rasjonale." },
    { title: "AI er assistent, ikke autoritet", description: "AI-verktøy kan bistå med research, utkast, lokalisering og kvalitetssjekk, men er ikke kilde, reviewer eller endelig beslutningstaker." },
  ],
  sections: [
    { title: "Redaksjonelt ansvar", body: ["Publisert innhold er Neuvagos redaksjonelle ansvar. Bruk av automatisering eller AI flytter ikke ansvaret bort fra den menneskelige publiseringsprosessen.", "Prioriterte sider bør ha definert brukerspørsmål, søkeoppgave, evidensgrense, kildesett, oppdateringsbehov og review-nivå."] },
    { title: "Kildehierarki", body: ["Nivå A omfatter autoritative definisjoner, standarder, offisielle regulatoriske beslutninger og primær offisiell dokumentasjon.", "Nivå B omfatter systematiske oversikter og metaanalyser.", "Nivå C omfatter randomiserte eller kontrollerte studier.", "Nivå D omfatter mekanistiske, bildediagnostiske, observasjonelle, prekliniske eller eksplorative arbeider og presenteres ikke som bevis for klinisk effekt."] },
    { title: "Tre evidenslag", body: ["Produktevidens er evidens som direkte undersøker Neuvago eller fakta som støttes av kontrollert Neuvago-dokumentasjon.", "Metodeevidens gjelder en definert intervensjon som implantert VNS, cervikal nVNS, tVNS eller aurikulær taVNS.", "Generell fysiologi beskriver anatomi, autonom funksjon, mekanismer eller sammenhenger. En plausibel mekanisme dokumenterer ikke i seg selv en produkteffekt eller et klinisk utfall."] },
    { title: "Modalitets- og påstandsgrense", body: ["Vesentlige evidensutsagn skal gjøre det tydelig hvilken VNS-modalitet eller hvilket produkt de gjelder.", "Generell VNS- eller taVNS-forskning er vitenskapelig kontekst og er ikke automatisk Neuvago-spesifikk produktevidens.", "Vi overfører ikke regulatorisk status, indikasjoner, effekt, sikkerhetskonklusjoner eller protokollresultater mellom enheter, modaliteter, populasjoner eller markeder."] },
    { title: "Medisinsk og faglig gjennomgang", body: ["Kravene øker med risiko. Høyrisiko innhold om tilstander, sikkerhet, diagnostikk, kontraindikasjoner eller behandling kan kreve kvalifisert medisinsk eller faglig spesialist.", "Når spesialistgjennomgang er påkrevd, skal registeret identifisere reviewer, fagrolle, relevante kvalifikasjoner, jurisdiksjon, review-dato, interessekonflikt og beslutning.", "Mulige beslutninger er: godkjenn som skrevet, godkjenn med mindre endringer, revider og send inn på nytt, eller ikke publiser."] },
    { title: "Rettelser og endringsforslag", body: ["Et vesentlig endringsforslag bør identifisere side og seksjon, eksakt eksisterende tekst, eksakt erstatning eller sletting, begrunnelse, kilde eller faglig rasjonale og alvorlighetsgrad.", "Sikkerhetskritiske, regulatoriske, evidensmessige og vesentlige faktarettelser prioriteres foran stilendringer."] },
    { title: "Bruk av AI", body: ["AI-verktøy kan bistå med researchorganisering, terminologi, kildesammenligning, utkast, lokalisering, metadata og konsistenskontroll.", "AI-output regnes ikke som autoritativ kilde og kvalifiserer ikke som medisinsk, vitenskapelig, juridisk eller regulatorisk review.", "Det menneskelige redaksjonelle ansvaret ligger hos Neuvago, og høyrisiko publiseringsporter kan ikke lukkes med AI-review alene."] },
    { title: "Interessekonflikter og sammenligninger", body: ["Neuvago har en direkte kommersiell interesse i Neuvago-produktet. Denne interessen skal ikke skjules i forskningsfortolkning, kjøpsveiledning eller produktsammenligninger.", "Fremtidig sammenligningsinnhold skal bruke dokumenterte kriterier, daterte kilder, transparent metode og tydelig skille mellom produsentoppgitte fakta, uavhengig verifiserte fakta og redaksjonell vurdering."] },
    { title: "Regulatoriske fakta og produktfakta", body: ["Regulatorisk klassifisering, CE-status, FDA-status, tiltenkt bruk, produktspesifikasjoner, advarsler, kontraindikasjoner, pris, tilgjengelighet og garanti er faktastyrt informasjon.", "Forskning kan ikke erstatte regulatorisk autorisasjon, produktdokumentasjon eller markedsspesifikk juridisk vurdering."] },
  ],
  relatedPages: [
    { title: "Tillit og sikkerhet", description: "Hvordan Neuvago arbeider med sikkerhet og ansvarlig kommunikasjon.", href: "/no/juridisk/tillit-og-sikkerhet", linkLabel: "Les Tillit og sikkerhet" },
    { title: "Regulatorisk informasjon", description: "Marked og klassifisering holdt atskilt fra vitenskapelig evidens.", href: "/no/juridisk/regulatorisk", linkLabel: "Les regulatorisk informasjon" },
    { title: "Medisinsk ansvarsfraskrivelse", description: "Hvordan kunnskapsinnhold skal forstås i forhold til personlig medisinsk vurdering.", href: "/no/juridisk/medisinsk-ansvarsfraskrivelse", linkLabel: "Les medisinsk ansvarsfraskrivelse" },
    { title: "Forskning", description: "Utforsk forskningsoversikter og kilder hos Neuvago.", href: "/no/forskning", linkLabel: "Utforsk forskning" },
  ],
  finalCta: {
    eyebrow: "Rettelser og spørsmål",
    title: "Ser du noe som bør rettes eller presiseres?",
    description: "Send URL-en og hva du mener bør kontrolleres til Neuvago Support. Vesentlige rettelser skal kunne spores gjennom den redaksjonelle endringsprosessen.",
    primaryCta: { label: "Kontakt support", href: "/no/support" },
    secondaryCta: { label: "Juridisk oversikt", href: "/no/juridisk" },
  },
} satisfies LegalTemplateContent;
