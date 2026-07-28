import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { AuthorityVisualSection, PlainEnglishSummary, ResearchLedger } from "@/components/authority";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";

export const metadata = {
  title:
    "HRV Research | Autonomic Regulation and Vagal Influence | Neuvago",
  description:
    "Explore HRV research as a window into autonomic regulation, vagal influence, measurement standards, stress physiology and interpretation limits.",
  alternates: {
    canonical: "/research/topics/heart-rate-variability",
  },
  openGraph: {
    title: "HRV Research | Autonomic Regulation and Vagal Influence | Neuvago",
    description: "Explore HRV research as a window into autonomic regulation, vagal influence, measurement standards, stress physiology and interpretation limits.",
    url: "/research/topics/heart-rate-variability",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HRV Research | Autonomic Regulation and Vagal Influence | Neuvago",
    description: "Explore HRV research as a window into autonomic regulation, vagal influence, measurement standards, stress physiology and interpretation limits.",
  },
}

const topicOverview = [
  {
    title: "HRV as a physiological marker",
    description:
      "Research often uses heart rate variability as a non-invasive way to examine autonomic regulation and physiological flexibility.",
  },
  {
    title: "HRV and vagal influence",
    description:
      "Because parasympathetic regulation of heart rate is strongly influenced by vagal pathways, HRV became closely tied to later research on vagal regulation.",
  },
  {
    title: "HRV across multiple fields",
    description:
      "The HRV literature spans cardiology, psychophysiology, sleep research, stress physiology, resilience research, and neuromodulation.",
  },
]

const researchThemes = [
  {
    title: "Measurement and methodology",
    description:
      "A major part of the HRV literature focuses on how HRV should be measured, defined, and interpreted across research settings.",
  },
  {
    title: "Autonomic flexibility",
    description:
      "Another major branch examines HRV as a marker of autonomic flexibility and adaptive physiological regulation.",
  },
  {
    title: "Emotional regulation and stress",
    description:
      "HRV has become an important measure in research on emotional regulation, stress responses, resilience, and psychophysiology.",
  },
  {
    title: "Interpretation and limits",
    description:
      "A recurring theme in the literature is that HRV must be interpreted carefully and within context rather than used as an isolated signal.",
  },
]

const foundationalStudies = [
  {
    title:
      "Heart Rate Variability: Standards of Measurement, Physiological Interpretation, and Clinical Use",
    authors:
      "Task Force of the European Society of Cardiology and NASPE",
    year: "1996",
    journal: "Circulation",
    category: "Methodology",
    href: "/research/studies/task-force-1996-heart-rate-variability-standards",
    summary:
      "The foundational methodological reference for HRV research and one of the central papers in autonomic physiology.",
  },
  {
    title: "A Model of Neurovisceral Integration in Emotion Regulation",
    authors: "Julian F. Thayer & Richard D. Lane",
    year: "2000",
    journal: "Journal of Affective Disorders",
    category: "Theory",
    href: "/research/studies/thayer-lane-2000-neurovisceral-integration",
    summary:
      "A key theoretical framework linking HRV, emotional regulation, autonomic flexibility, and vagal influence.",
  },
]

const connectedResearch = [
  {
    title: "Autonomic regulation research",
    description:
      "A research topic that places HRV inside the wider physiology of sympathetic and parasympathetic regulation, vagal pathways, stress, and recovery.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "Explore regulation topic",
  },
  {
    title: "Nervous system regulation",
    description:
      "A broader learning page for understanding how the body shifts between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Understand regulation",
  },
  {
    title: "Vagus nerve stimulation research",
    description:
      "A related research topic for understanding how VNS and non-invasive VNS connect to vagal regulation, autonomic flexibility, and HRV-adjacent questions.",
    href: "/research/topics/vagus-nerve-stimulation",
    linkLabel: "Explore VNS research",
  },
  {
    title: "How Neuvago works",
    description:
      "A practical bridge from HRV and autonomic research into the device, app guidance, session flow, and routine design.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
  {
    title: "Scientific Studies Library",
    description:
      "Return to the full studies library to browse individual papers across multiple research tracks.",
    href: "/research/studies",
    linkLabel: "Go to studies library",
  },
  {
    title: "Topic Research",
    description:
      "Return to the broader topic layer to explore other major subject areas in the research library.",
    href: "/research/topics",
    linkLabel: "Back to topic research",
  },
]

function StudyCard({
  title,
  authors,
  year,
  journal,
  category,
  href,
  summary,
}: {
  title: string
  authors: string
  year: string
  journal: string
  category: string
  href: string
  summary: string
}) {
  return (
    <article className="rounded-[1.5rem] border border-black/8 bg-white/70 p-7 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-black/10 bg-[#f6f1ea] px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-[#6f6a61]">
          {category}
        </span>
        <span className="text-[0.72rem] uppercase tracking-[0.14em] text-[#8a847b]">
          {year}
        </span>
      </div>

      <h3 className="mt-4 text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#6a645d]">
        {authors}
      </p>

      <p className="mt-1 text-sm leading-6 text-[#7b756d]">
        {journal}
      </p>

      <p className="mt-5 text-sm leading-7 text-[#5f5a52] md:text-[0.96rem]">
        {summary}
      </p>

      <Link
        href={href}
        className="mt-7 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
      >
        Read study summary
      </Link>
    </article>
  )
}

export default function HeartRateVariabilityResearchPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "HRV Research | Autonomic Regulation and Vagal Influence | Neuvago",
    description: "Explore HRV research as a window into autonomic regulation, vagal influence, measurement standards, stress physiology and interpretation limits.",
    path: "/research/topics/heart-rate-variability",
    articleSection: "Research topics",
    dateModified: authorityEditorialDates.vnsClusterModified,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Topic Research", path: "/research/topics" },
      { name: "Heart Rate Variability Research", path: "/research/topics/heart-rate-variability" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="research-topics-heart-rate-variability" />
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Topics / Heart Rate Variability
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              HRV research: heart rate variability and autonomic regulation
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This topic page organizes research related to heart rate variability
              (HRV), including measurement standards, autonomic flexibility, vagal
              regulation, emotional regulation, and stress physiology. It is designed
              to provide a structured overview before readers move into individual studies.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>Current topic: 2 study summaries</span>
              <span>Methodology + theory</span>
              <span>Built to grow over time</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/topics"
                className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Back to topic research
              </Link>

              <Link
                href="/research/studies"
                className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Go to studies library
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AuthorityVisualSection
        eyebrow="HRV visual"
        title="HRV is a window into rhythm and recovery"
        description="Heart rate variability can help explain autonomic patterns, but it should be interpreted as context rather than a simple score or product promise."
        image={{ src: "/images/neuvago/hrv-rhythm-desktop.webp", alt: "Neuvago device beside abstract rhythm cards for heart rate variability research." }}
      />

      <PlainEnglishSummary
        title="HRV is useful context, not a simple promise"
        description="Heart rate variability can help researchers study cardiac autonomic regulation and recovery patterns. It is helpful because it is measurable, but it still needs context: breathing, timing, posture, method, stress load, and individual baseline all matter."
        points={[
          { title: "A window, not the whole system", description: "HRV can reflect aspects of cardiac autonomic regulation but does not measure every part of the nervous system." },
          { title: "Context changes the signal", description: "Time of day, breathing, sleep, illness, exercise, and measurement method can influence HRV interpretation." },
          { title: "Use it carefully", description: "HRV belongs in the research layer as context, not as a guarantee that a session or product caused a specific outcome." },
        ]}
        primaryHref="/research/topics/autonomic-regulation"
        primaryLabel="Autonomic regulation"
        secondaryHref="/learn/nervous-system-regulation"
        secondaryLabel="Regulation guide"
      />

      <ResearchLedger
        title="Measurement should support interpretation, not overconfidence"
        items={[
          { title: "What research suggests", description: "HRV can be a useful non-invasive measure in autonomic regulation, stress, recovery, and vagal influence research." },
          { title: "What it does not prove", description: "HRV alone cannot diagnose a condition, fully describe nervous system state, or prove a product effect by itself." },
          { title: "Neuvago boundary", description: "Neuvago can discuss HRV as educational context while avoiding score-chasing or diagnostic language." },
        ]}
      />

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Topic overview
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A research area linking autonomic physiology, vagal influence, and adaptive regulation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Heart rate variability research sits at the intersection of autonomic
              physiology, cardiology, psychophysiology, stress research, and
              regulation science. It has become one of the most widely used ways
              to study how the nervous system supports flexible physiological adaptation.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This topic page groups the literature together so HRV can be understood
              not only as a measurement technique, but as a broader research track
              tied to vagal regulation, stress responses, and autonomic balance.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              What this topic includes
            </p>

            <div className="mt-7 space-y-5">
              {topicOverview.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/6 bg-[#f8f5f0] p-5"
                >
                  <h2 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Main research themes
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The HRV literature can be read through a few major research tracks
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {researchThemes.map((item) => (
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
              Foundational studies in this topic
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The first two anchor studies in the HRV track
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {foundationalStudies.map((item) => (
              <StudyCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How this topic fits the library
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Topic pages help a growing studies library stay usable as it expands
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              As more studies are added, topic pages make it easier to browse
              the literature by subject area rather than by title alone. This is
              especially useful in HRV research, where interpretation depends heavily
              on methodology, context, and how autonomic signals are understood.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Over time, this topic page can expand to include more studies,
              stronger internal grouping, and clearer links into adjacent research
              themes such as stress physiology, sleep, vagal signaling, and emotional regulation.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Connected research paths
            </p>

            <div className="mt-8 space-y-5">
              {connectedResearch.map((item) => (
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
              Topic note
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This topic page is intended as a growing research index rather than
              a final review article. It is designed to organize the literature as
              the studies library expands across HRV methodology, autonomic flexibility,
              vagal regulation, and stress-related physiology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research/studies"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Go to studies library
              </Link>
              <Link
                href="/research/topics"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Back to topic research
              </Link>
              <Link
                href="/research/topics/autonomic-regulation"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Explore autonomic regulation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
