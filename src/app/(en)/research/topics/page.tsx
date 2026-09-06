import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data";

const pageTitle = "Vagus Nerve Stimulation Research Topics | Neuvago";
const pageDescription =
  "Explore research topics across VNS, tVNS, taVNS, autonomic regulation, HRV, safety, inflammation and gut–brain communication.";
const pagePath = "/research/topics";

type ResearchTopic = {
  readonly title: string;
  readonly description: string;
  readonly href: string;
};

type ResearchTopicGroup = {
  readonly id: string;
  readonly title: string;
  readonly topics: readonly ResearchTopic[];
};

const topicGroups = [
  {
    id: "technology",
    title: "Technology",
    topics: [
      {
        title: "Vagus Nerve Stimulation (VNS)",
        description:
          "Research across implanted and non-invasive approaches, mechanisms, neuromodulation and brain–body pathways.",
        href: "/research/topics/vagus-nerve-stimulation",
      },
      {
        title: "Transcutaneous Vagus Nerve Stimulation (tVNS)",
        description:
          "Research on non-invasive vagus nerve stimulation delivered through the skin, including stimulation sites and protocol variables.",
        href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
      },
      {
        title:
          "Transcutaneous Auricular Vagus Nerve Stimulation (taVNS)",
        description:
          "Research on ear-based stimulation targeting the auricular branch of the vagus nerve.",
        href: "/research/topics/auricular-vagus-nerve-stimulation",
      },
    ],
  },
  {
    id: "research-areas",
    title: "Research areas",
    topics: [
      {
        title: "Safety & Tolerability",
        description:
          "Human research examining adverse events, tolerability and safety reporting across taVNS studies.",
        href: "/research/topics/safety-and-tolerability",
      },
      {
        title: "Autonomic Regulation",
        description:
          "Research on sympathetic and parasympathetic activity, recovery and the body's shift between physiological states.",
        href: "/research/topics/autonomic-regulation",
      },
      {
        title: "Heart Rate Variability (HRV)",
        description:
          "Research examining HRV as a marker of autonomic activity, including its uses and limitations.",
        href: "/research/topics/heart-rate-variability",
      },
      {
        title: "Inflammation & Neuroimmune Signalling",
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
    ],
  },
] as const satisfies readonly ResearchTopicGroup[];

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

function ResearchTopicRow({ topic }: { topic: ResearchTopic }) {
  return (
    <Link
      href={topic.href}
      data-research-topic-route={topic.href}
      className="group grid min-w-0 grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-3 border-b border-black/10 py-7 transition hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f2eee8] sm:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)_auto] sm:items-start sm:gap-7 sm:px-2 sm:py-8"
    >
      <h4 className="col-start-1 row-start-1 min-w-0 text-xl font-medium leading-tight tracking-[-0.035em] text-[#1f1f1c] sm:text-2xl">
        {topic.title}
      </h4>
      <p className="col-span-2 col-start-1 row-start-2 min-w-0 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:text-base">
        {topic.description}
      </p>
      <span
        aria-hidden="true"
        className="col-start-2 row-start-1 self-center text-xl text-[#7d7267] transition-transform group-hover:translate-x-1 sm:col-start-3"
      >
        →
      </span>
    </Link>
  );
}

export default function ResearchTopicsPage() {
  const structuredData = buildPageWithBreadcrumbStructuredData({
    title: pageTitle,
    description: pageDescription,
    path: pagePath,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Research Topics", path: pagePath },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="research-topics" />

      <section
        data-research-topics-section="hero"
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
              <li aria-current="page">RESEARCH TOPICS</li>
            </ol>
          </nav>

          <div className="mt-12 max-w-[72rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7d7267] sm:text-xs">
              RESEARCH TOPICS
            </p>
            <h1 className="mt-5 max-w-[14ch] text-balance text-[clamp(3.25rem,9vw,7.6rem)] font-medium leading-[0.9] tracking-[-0.075em] text-[#1f1f1c]">
              Explore research by topic.
            </h1>
            <p className="mt-8 max-w-[52rem] text-base leading-8 text-[#514c45] sm:text-lg lg:text-xl lg:leading-9">
              Browse research across vagus nerve stimulation, transcutaneous and
              auricular approaches, safety, autonomic regulation, heart rate
              variability, inflammation and gut–brain communication.
            </p>
            <p className="mt-5 max-w-[46rem] text-sm leading-7 text-[#6a635b] sm:text-base">
              Each topic brings related concepts, evidence and study summaries
              together in one place.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#research-topics"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef] sm:w-auto"
              >
                Browse topics
              </Link>
              <Link
                href="/research/studies"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-black/15 bg-white/25 px-7 py-3 text-sm font-medium text-[#1f1f1c] transition hover:border-black/25 hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef] sm:w-auto"
              >
                Browse Scientific Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="research-topics"
        data-research-topics-section="index"
        className="scroll-mt-24 border-b border-black/5 bg-[#f2eee8]"
      >
        <div className="mx-auto grid max-w-[92rem] gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-12 lg:py-28">
          <header className="max-w-[42rem] lg:sticky lg:top-28 lg:self-start">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs">
              RESEARCH TOPICS
            </p>
            <h2 className="mt-5 max-w-[11ch] text-balance text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.94] tracking-[-0.065em]">
              Choose a field to explore.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              Start with the technology itself or explore one of the wider
              scientific areas connected with vagal and autonomic research.
            </p>
          </header>

          <div className="min-w-0">
            {topicGroups.map((group, groupIndex) => (
              <section
                key={group.id}
                aria-labelledby={`${group.id}-research-topics-heading`}
                className={groupIndex === 0 ? "" : "mt-14 sm:mt-16"}
              >
                <h3
                  id={`${group.id}-research-topics-heading`}
                  className="border-b border-black/15 pb-5 text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c] sm:text-3xl"
                >
                  {group.title}
                </h3>
                <div>
                  {group.topics.map((topic) => (
                    <ResearchTopicRow key={topic.href} topic={topic} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        data-research-topics-section="studies-bridge"
        className="bg-[#e8ded0]"
      >
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20 lg:px-12 lg:py-24">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs">
              SCIENTIFIC STUDIES
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.8rem,5.5vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.06em]">
              Looking for individual papers?
            </h2>
          </div>
          <div className="max-w-[42rem]">
            <p className="text-base leading-8 text-[#5f5a52] sm:text-lg">
              Browse clear summaries of published studies, systematic reviews,
              meta-analyses, human neuroimaging and foundational research.
            </p>
            <Link
              href="/research/studies"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8ded0]"
            >
              Browse Scientific Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
