import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data";

const pageTitle =
  "Scientific Studies Library | VNS and taVNS Research | Neuvago";
const pageDescription =
  "Browse study summaries across VNS, taVNS, sleep, safety, autonomic regulation, HRV, brain pathways, inflammation and gut–brain research.";
const pagePath = "/research/studies";

type StudyEntry = {
  readonly evidenceType: string;
  readonly year: string;
  readonly title: string;
  readonly authors: string;
  readonly journal: string;
  readonly summary: string;
  readonly href: string;
};

type StudyGroup = {
  readonly id: string;
  readonly title: string;
  readonly studies: readonly StudyEntry[];
};

const studyGroups = [
  {
    id: "tavns-research",
    title: "taVNS research",
    studies: [
      {
        evidenceType: "SYSTEMATIC REVIEW & META-ANALYSIS",
        year: "2025",
        title:
          "Transcutaneous Auricular Vagus Nerve Stimulation in Insomnia: A Systematic Review and Meta-Analysis",
        authors:
          "Helen Michaela de Oliveira, Mariano Gallo Ruelas, Camilo André Viana Diaz, Guilherme Oliveira de Paula, Pablo Ramon Fruett da Costa, Julie G. Pilitsis",
        journal: "Neuromodulation: Technology at the Neural Interface",
        summary:
          "A systematic review and meta-analysis of six studies involving 336 participants reported improvements in sleep quality and insomnia severity, while rating the certainty of evidence as low to very low.",
        href:
          "/research/studies/de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis",
      },
      {
        evidenceType: "SYSTEMATIC REVIEW & META-ANALYSIS",
        year: "2022",
        title:
          "Safety of Transcutaneous Auricular Vagus Nerve Stimulation (taVNS): A Systematic Review and Meta-Analysis",
        authors:
          "Angela Yun Kim, Anna Marduy, Paulo S. de Melo, Anna Carolyna Gianlorenco, Chi Kyung Kim, Hyuk Choi, Jae-Jun Song, Felipe Fregni",
        journal: "Scientific Reports",
        summary:
          "A review of 177 studies involving 6,322 participants found no difference in overall adverse-event risk between active taVNS and control conditions, while noting incomplete adverse-event reporting across much of the literature.",
        href:
          "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis",
      },
      {
        evidenceType: "HUMAN NEUROIMAGING / fMRI",
        year: "2015",
        title:
          "Non-invasive Access to the Vagus Nerve Central Projections via Electrical Stimulation of the External Ear: fMRI Evidence in Humans",
        authors: "Eleni Frangos, Jens Ellrich, Barry R. Komisaruk",
        journal: "Brain Stimulation",
        summary:
          "A human fMRI study in 12 healthy adults found that electrical stimulation at the left cymba conchae engaged central pathways associated with the vagus nerve.",
        href:
          "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
      },
      {
        evidenceType: "SYSTEMATIC REVIEW",
        year: "2023",
        title:
          "A Systematic Review of the Effects of Transcutaneous Auricular Vagus Nerve Stimulation on Baroreflex Sensitivity and Heart Rate Variability in Healthy Subjects",
        authors:
          "Danesh Soltani, Bayan Azizi, Sepehr Sima, Kiarash Tavakoli, Negin Sadat Hosseini Mohammadi, Abdol-Hossein Vahabie, Kaveh Akbarzadeh-Sherbaf, Ali Vasheghani-Farahani",
        journal: "Clinical Autonomic Research",
        summary:
          "A systematic review found changes across several HRV measures in taVNS studies, while highlighting substantial variation between stimulation protocols and study designs.",
        href:
          "/research/studies/soltani-2023-tavns-heart-rate-variability-systematic-review",
      },
    ],
  },
  {
    id: "foundational-models-methods",
    title: "Foundational models and methods",
    studies: [
      {
        evidenceType: "THEORETICAL PAPER",
        year: "1995",
        title:
          "Orienting in a Defensive World: Mammalian Modifications of Our Evolutionary Heritage. A Polyvagal Theory",
        authors: "Stephen W. Porges",
        journal: "Psychophysiology",
        summary:
          "An influential and debated theoretical paper proposing a polyvagal framework for autonomic state, defensive responses and social engagement.",
        href: "/research/studies/porges-1995-polyvagal-theory",
      },
      {
        evidenceType: "CONCEPTUAL MODEL",
        year: "2000",
        title:
          "A Model of Neurovisceral Integration in Emotion Regulation and Dysregulation",
        authors: "Julian F. Thayer & Richard D. Lane",
        journal: "Journal of Affective Disorders",
        summary:
          "A model connecting brain networks, emotional regulation, autonomic flexibility, heart rate variability and vagal activity.",
        href:
          "/research/studies/thayer-lane-2000-neurovisceral-integration",
      },
      {
        evidenceType: "METHODOLOGICAL STANDARDS",
        year: "1996",
        title:
          "Heart Rate Variability: Standards of Measurement, Physiological Interpretation, and Clinical Use",
        authors:
          "Task Force of the European Society of Cardiology and NASPE",
        journal: "Circulation",
        summary:
          "A foundational methodological reference for heart rate variability measurement, terminology and interpretation.",
        href:
          "/research/studies/task-force-1996-heart-rate-variability-standards",
      },
    ],
  },
  {
    id: "inflammation-neuroimmune-signalling",
    title: "Inflammation and neuroimmune signalling",
    studies: [
      {
        evidenceType: "PRECLINICAL EXPERIMENTAL RESEARCH",
        year: "2000",
        title:
          "Vagus Nerve Stimulation Attenuates the Systemic Inflammatory Response to Endotoxin",
        authors: "L. V. Borovikova et al.",
        journal: "Nature",
        summary:
          "A preclinical experiment using cell and animal models to examine how vagus nerve stimulation influenced systemic inflammatory signalling.",
        href:
          "/research/studies/borovikova-2000-vagus-nerve-inflammation",
      },
      {
        evidenceType: "FOUNDATIONAL REVIEW",
        year: "2002",
        title: "The Inflammatory Reflex",
        authors: "Kevin J. Tracey",
        journal: "Nature",
        summary:
          "A foundational paper describing how neural pathways may detect and regulate inflammatory activity through reflex-like mechanisms.",
        href: "/research/studies/inflammatory-reflex-tracey-2002",
      },
      {
        evidenceType: "REVIEW",
        year: "2005",
        title: "The Cholinergic Anti-Inflammatory Pathway",
        authors: "Valentin A. Pavlov & Kevin J. Tracey",
        journal: "Brain, Behavior, and Immunity",
        summary:
          "A review of cholinergic signalling and its proposed role in cytokine regulation and immune activity.",
        href:
          "/research/studies/pavlov-tracey-2005-cholinergic-anti-inflammatory-pathway",
      },
    ],
  },
  {
    id: "implanted-vagus-nerve-stimulation",
    title: "Implanted vagus nerve stimulation",
    studies: [
      {
        evidenceType: "IMPLANTED VNS / RANDOMIZED CONTROLLED TRIAL",
        year: "2005",
        title:
          "Vagus Nerve Stimulation for Treatment-Resistant Depression: A Randomized, Controlled Acute Phase Trial",
        authors: "A. John Rush et al.",
        journal: "Biological Psychiatry",
        summary:
          "A randomized controlled acute-phase trial examining implanted vagus nerve stimulation in treatment-resistant depression.",
        href:
          "/research/studies/rush-2005-vagus-nerve-stimulation-depression",
      },
    ],
  },
  {
    id: "gut-brain-communication",
    title: "Gut–brain communication",
    studies: [
      {
        evidenceType: "REVIEW",
        year: "2011",
        title:
          "Gut Feelings: The Emerging Biology of Gut–Brain Communication",
        authors: "Emeran A. Mayer",
        journal: "Nature Reviews Neuroscience",
        summary:
          "A major review of neural, hormonal, microbial and immune communication between the gut and brain.",
        href: "/research/studies/mayer-2011-gut-brain-axis",
      },
    ],
  },
] as const satisfies readonly StudyGroup[];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pagePath,
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

function StudyRow({ study }: { study: StudyEntry }) {
  return (
    <article>
      <Link
        href={study.href}
        className="group grid min-w-0 gap-5 border-b border-black/10 py-7 transition hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef] sm:px-2 sm:py-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10"
      >
        <div className="min-w-0">
          <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#70685f]">
              {study.evidenceType}
            </span>
            <span className="shrink-0 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[#8a8177]">
              {study.year}
            </span>
          </div>

          <h4 className="mt-4 min-w-0 text-xl font-medium leading-[1.2] tracking-[-0.035em] text-[#1f1f1c] sm:text-2xl">
            {study.title}
          </h4>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#696158]">
            {study.authors}
          </p>
          <p className="mt-1 text-sm leading-7 text-[#81786f]">
            {study.journal}
          </p>
        </div>

        <div className="flex min-w-0 flex-col justify-between gap-5 lg:pt-8">
          <p className="max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
            {study.summary}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1f1f1c] underline decoration-black/35 underline-offset-4 transition group-hover:decoration-black">
            Read study summary
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function ResearchStudiesPage() {
  const structuredData = buildPageWithBreadcrumbStructuredData({
    title: pageTitle,
    description: pageDescription,
    path: pagePath,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Scientific Studies Library", path: pagePath },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="research-studies" />

      <section
        data-scientific-studies-section="hero"
        className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(255,252,247,0.98),transparent_34%),radial-gradient(circle_at_84%_20%,rgba(226,193,148,0.2),transparent_34%)]" />
        <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-[#756c63]">
            <ol className="flex flex-wrap items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.24em] sm:text-xs">
              <li>
                <Link
                  href="/research"
                  className="rounded-sm transition hover:text-[#1f1f1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
                >
                  RESEARCH
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">SCIENTIFIC STUDIES LIBRARY</li>
            </ol>
          </nav>

          <div className="mt-12 max-w-[76rem]">
            <h1 className="max-w-[16ch] text-balance text-[clamp(3.2rem,8.5vw,7.3rem)] font-medium leading-[0.91] tracking-[-0.072em] text-[#1f1f1c]">
              Scientific Studies Library
            </h1>
            <p className="mt-8 max-w-[54rem] text-base leading-8 text-[#514c45] sm:text-lg lg:text-xl lg:leading-9">
              Browse clear summaries of published research across VNS, taVNS,
              sleep, safety, autonomic regulation, heart rate variability, brain
              pathways, inflammation and gut–brain communication.
            </p>
            <p className="mt-5 max-w-[48rem] text-sm leading-7 text-[#6a635b] sm:text-base">
              Each summary explains the research question, study design, main
              findings, limitations and source details.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#study-library"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef] sm:w-auto"
              >
                Browse studies
              </Link>
              <Link
                href="/research/topics"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-black/15 bg-white/25 px-7 py-3 text-sm font-medium text-[#1f1f1c] transition hover:border-black/25 hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef] sm:w-auto"
              >
                Explore Research Topics
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        data-scientific-studies-section="about-summaries"
        className="border-b border-black/5 bg-[#f2eee8]"
      >
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20 lg:px-12 lg:py-24">
          <header className="max-w-[44rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs">
              ABOUT THE SUMMARIES
            </p>
            <h2 className="mt-5 max-w-[13ch] text-balance text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[0.95] tracking-[-0.06em]">
              Clear summaries, with context kept visible.
            </h2>
          </header>

          <div className="max-w-2xl lg:pt-2">
            <p className="text-base leading-8 text-[#5f5a52] sm:text-lg">
              Each study page separates what was studied, what was found and
              what the paper cannot establish. Full reference details and links
              to the original source are included.
            </p>
            <p className="mt-8 border-l-2 border-[#9b866e]/45 pl-5 text-base font-medium leading-8 text-[#3f3a34] sm:text-lg">
              The original paper remains the primary scientific source.
            </p>
          </div>
        </div>
      </section>

      <section
        id="study-library"
        data-scientific-studies-section="library"
        className="scroll-mt-24 border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="mx-auto grid max-w-[92rem] gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-28">
          <header className="max-w-[42rem] lg:sticky lg:top-28 lg:self-start">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs">
              STUDY SUMMARIES
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.94] tracking-[-0.065em]">
              Browse the research library.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              Explore all published study summaries, organised by research area.
            </p>
          </header>

          <div className="min-w-0">
            {studyGroups.map((group, groupIndex) => (
              <section
                key={group.id}
                aria-labelledby={`${group.id}-study-group-heading`}
                className={groupIndex === 0 ? "" : "mt-14 sm:mt-16"}
              >
                <h3
                  id={`${group.id}-study-group-heading`}
                  className="border-b border-black/15 pb-5 text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c] sm:text-3xl"
                >
                  {group.title}
                </h3>

                <div>
                  {group.studies.map((study) => (
                    <StudyRow key={study.href} study={study} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        data-scientific-studies-section="topics-bridge"
        className="bg-[#e8ded0]"
      >
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:gap-20 lg:px-12 lg:py-24">
          <div className="max-w-[48rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#756a60] sm:text-xs">
              RESEARCH TOPICS
            </p>
            <h2 className="mt-5 max-w-[13ch] text-balance text-[clamp(2.9rem,5.6vw,5.9rem)] font-medium leading-[0.95] tracking-[-0.06em]">
              Explore the wider research context.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[#5f5a52] sm:text-lg">
              Move from individual papers into broader Research topics across
              VNS, taVNS, autonomic regulation, safety, HRV, inflammation and
              gut–brain communication.
            </p>
            <Link
              href="/research/topics"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8ded0]"
            >
              Explore Research Topics
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
