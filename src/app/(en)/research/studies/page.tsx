import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { PlainEnglishSummary } from "@/components/authority"
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data"
import {
  featuredTavnsStudies,
  researchStudyCatalog,
  researchStudyGroups,
} from "@/content/research-study-catalog";

export const metadata = {
  title:
    "Scientific Studies Library | Neuvago",
  description:
    "Browse the Neuvago Scientific Studies Library with individual research summaries on the vagus nerve, nervous system regulation, HRV, inflammation, stress, and non-invasive vagus nerve stimulation.",
  alternates: {
    canonical: "/research/studies",
  },
  openGraph: {
    title: "Scientific Studies Library | Neuvago",
    description: "Browse the Neuvago Scientific Studies Library with individual research summaries on the vagus nerve, nervous system regulation, HRV, inflammation, stress, and non-invasive vagus nerve stimulation.",
    url: "/research/studies",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Studies Library | Neuvago",
    description: "Browse the Neuvago Scientific Studies Library with individual research summaries on the vagus nerve, nervous system regulation, HRV, inflammation, stress, and non-invasive vagus nerve stimulation.",
  },
}

const categories = [
  {
    title: "Foundational frameworks",
    description:
      "Landmark papers that shaped how researchers think about vagal pathways, autonomic regulation, emotional regulation, and brain–body communication.",
  },
  {
    title: "Autonomic regulation and HRV",
    description:
      "Core studies on heart rate variability, autonomic flexibility, and physiological regulation.",
  },
  {
    title: "Inflammation and neuroimmune signaling",
    description:
      "Research on the inflammatory reflex, cytokine signaling, acetylcholine, and vagus-related immune regulation.",
  },
  {
    title: "Vagus nerve stimulation",
    description:
      "Studies on implanted and non-invasive vagus nerve stimulation, including auricular stimulation and neuromodulation.",
  },
  {
    title: "Gut–brain axis",
    description:
      "Research on communication between the digestive system, brain, microbiome, immune signaling, and vagal pathways.",
  },
]

const featuredStudies = featuredTavnsStudies.map((study) => ({
  title: study.cardHeading,
  authors: study.authors,
  year: study.year,
  journal: study.journal,
  category: study.category,
  researchArea: study.researchArea,
  evidenceType: study.evidenceType,
  href: study.href,
  summary: study.cardSummary,
}));

const groupedStudies = researchStudyGroups;
const studyCount = researchStudyCatalog.length;

const libraryLayers = [
  {
    title: "Research hub",
    description:
      "The main research page explains the broader evidence layer and connects individual studies with topic-based research.",
    href: "/research",
    linkLabel: "Go to research hub",
  },
  {
    title: "Learn",
    description:
      "The learning hub translates foundational ideas such as regulation, vagal signalling, stress, sleep, and recovery into everyday language.",
    href: "/learn",
    linkLabel: "Go to learning hub",
  },
  {
    title: "Conditions",
    description:
      "Condition pages connect broader science and nervous system concepts to recognizable lived experiences such as stress, sleep difficulties, anxiety, and burnout.",
    href: "/conditions",
    linkLabel: "Browse conditions",
  },
]

function StudyCard({
  title,
  authors,
  year,
  journal,
  category,
  researchArea,
  evidenceType,
  href,
  summary,
  showPublicationDetails = true,
}: {
  title: string;
  authors: string;
  year: string;
  journal: string;
  category: string;
  researchArea?: string;
  evidenceType?: string;
  href: string;
  summary: string;
  showPublicationDetails?: boolean;
}) {
  return (
    <article className="rounded-[1.5rem] border border-black/8 bg-white/70 p-7 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
      <div className="flex flex-wrap items-center gap-2">
        {researchArea ? (
          <span className="rounded-full border border-black/10 bg-[#f2eee8] px-3 py-1 text-[0.66rem] font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
            {researchArea}
          </span>
        ) : null}
        <span className="rounded-full border border-black/10 bg-[#f6f1ea] px-3 py-1 text-[0.66rem] uppercase tracking-[0.14em] text-[#6f6a61]">
          {evidenceType ?? category}
        </span>
        <span className="text-[0.72rem] uppercase tracking-[0.14em] text-[#8a847b]">
          {year}
        </span>
      </div>

      <h3 className="mt-4 text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
        {title}
      </h3>

      {showPublicationDetails ? (
        <>
          <p className="mt-3 text-sm leading-6 text-[#6a645d]">
            {authors}
          </p>

          <p className="mt-1 text-sm leading-6 text-[#7b756d]">
            {journal}
          </p>
        </>
      ) : null}

      <p className="mt-5 text-sm leading-7 text-[#5f5a52] md:text-[0.96rem]">
        {summary}
      </p>

      <Link
        href={href}
        className="mt-7 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
      >
        Read summary
      </Link>
    </article>
  );
}

export default function ResearchStudiesPage() {
  const structuredData = buildPageWithBreadcrumbStructuredData({
    title: "Scientific Studies Library | Neuvago",
    description: "Browse the Neuvago Scientific Studies Library with individual research summaries on the vagus nerve, nervous system regulation, HRV, inflammation, stress, and non-invasive vagus nerve stimulation.",
    path: "/research/studies",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Scientific Studies", path: "/research/studies" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="research-studies" />
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Scientific Studies Library
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Scientific Studies Library
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This library collects individual published papers related to the
              vagus nerve, autonomic regulation, vagus nerve stimulation, HRV,
              inflammation, gut–brain communication, and related areas of
              nervous system research. Each study page is designed to make the
              literature easier to browse, understand, and place in context.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>{`Current library: ${studyCount} studies`}</span>
              <span>Grouped by research track</span>
              <span>Built to expand over time</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Back to research hub
              </Link>

              <Link
                href="/learn"
                className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Go to learning hub
              </Link>
            </div>
          </div>
        </div>
      </section>


      <PlainEnglishSummary
        title="How to read this library"
        description="Each study page separates the paper, the research context and the boundary. That makes the library useful for learning without turning individual findings into product claims."
        points={[
          {
            title: "Start with context",
            description:
              "Look first at why the paper matters and which research track it belongs to.",
          },
          {
            title: "Read the boundary",
            description:
              "Study summaries explain what a paper can support and what it cannot prove.",
          },
          {
            title: "Follow the pathway",
            description:
              "Use related links to move from one paper into broader research topics and plain-language guides.",
          },
        ]}
        primaryHref="/research/topics"
        primaryLabel="Browse research topics"
        secondaryHref="/learn"
        secondaryLabel="Go to Learn"
      />

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              About this library
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A calmer, more structured way to explore the published literature
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Review articles and overview pages explain larger ideas. Individual
              studies show how those ideas are actually investigated: what
              researchers measured, how studies were designed, what findings
              mattered, and where uncertainty remains.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The aim of this library is to make the literature easier to access
              without flattening it into oversimplified claims. It is intended as
              a structured educational resource rather than a substitute for
              original source reading.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Study page structure
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Research objective",
                "Study design or structure",
                "Main findings",
                "Scientific impact",
                "Limitations and context",
                "Reference details and source links",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/6 bg-[#f8f5f0] px-5 py-4"
                >
                  <p className="text-sm leading-7 text-[#3d3a35] md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research tracks
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The current library is organized around clear research paths
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/8 bg-white/70 p-7 shadow-[0_8px_24px_rgba(31,31,28,0.03)]"
              >
                <h3 className="text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-[0.96rem]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Featured taVNS Research
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Four verified studies across sleep, safety, brain pathways, and autonomic function
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredStudies.map((item) => (
              <StudyCard
                key={item.title}
                {...item}
                showPublicationDetails={false}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Current library
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Current studies grouped into research tracks
            </h2>
          </div>

          <div className="mt-12 space-y-12">
            {groupedStudies.map((group) => (
              <section key={group.title}>
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-[#1f1f1c]">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {group.studies.map((item) => (
                    <StudyCard key={item.title} {...item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How this library fits the wider research structure
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The studies library connects individual papers with broader research and learning pathways
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Individual studies matter most when they can be placed in context.
              That is why this library connects with a broader structure that includes
              research overviews, learning pages, and condition-level content.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Over time, this structure should make it easier to move from broad
              understanding into topic-specific evidence and then into individual
              papers without losing the larger picture.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Related layers
            </p>

            <div className="mt-8 space-y-5">
              {libraryLayers.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/6 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
                  >
                    {item.linkLabel}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-4xl border-t border-black/8 pt-8">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Library note
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This library is intended for educational use and is designed to
              expand over time across major research areas related to vagus nerve
              signaling, autonomic regulation, inflammation, stimulation, and
              brain–body communication.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Back to research hub
              </Link>
              <Link
                href="/learn"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Go to learning hub
              </Link>
              <Link
                href="/conditions"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Browse conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
