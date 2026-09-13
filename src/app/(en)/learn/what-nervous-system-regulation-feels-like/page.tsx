import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "What Nervous System Regulation Feels Like in Everyday Life | Neuvago",
  description:
    "Learn what nervous system regulation can feel like in everyday life, including less urgency, more room, better recovery, easier transitions, and stronger steadiness over time.",
  alternates: {
    canonical: "/learn/what-nervous-system-regulation-feels-like",
  },
  openGraph: {
    title: "What Nervous System Regulation Feels Like in Everyday Life | Neuvago",
    description: "Learn what nervous system regulation can feel like in everyday life, including less urgency, more room, better recovery, easier transitions, and stronger steadiness over time.",
    url: "/learn/what-nervous-system-regulation-feels-like",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Nervous System Regulation Feels Like in Everyday Life | Neuvago",
    description: "Learn what nervous system regulation can feel like in everyday life, including less urgency, more room, better recovery, easier transitions, and stronger steadiness over time.",
  },
}

const keyPoints = [
  {
    title: "Experience and measurement are different",
    description:
      "Feeling less rushed or more able to manage a task is a subjective observation. It is not a direct reading of autonomic balance.",
  },
  {
    title: "There is no required state of perfect calm",
    description:
      "The examples here are ways to describe daily life, not a target everyone must reach or a promise that difficult feelings will disappear.",
  },
  {
    title: "Looking calm is not the same as feeling calm",
    description:
      "Research distinguishes emotional experience, outward expression and physiology. A change in one does not establish the same change in the others.",
  },
]

const feltSigns = [
  {
    title: "Less urgency",
    description:
      "You might notice feeling less rushed during a familiar activity or less pressure to finish everything immediately.",
  },
  {
    title: "More room in the day",
    description:
      "A task or decision may feel more manageable, with a little more room to choose how you respond.",
  },
  {
    title: "An easier return after a difficult moment",
    description:
      "After conflict or disappointment, you might find it easier to resume an activity that matters to you.",
  },
  {
    title: "Less felt tension",
    description:
      "You may describe a quieter or less tense moment, without needing to be completely still or free of emotion.",
  },
  {
    title: "Easier transitions",
    description:
      "Moving from work into an evening routine, or taking a pause after a demanding activity, may feel smoother on some days.",
  },
  {
    title: "Rest feels more refreshing",
    description:
      "You might report a more refreshing rest or an evening that feels less effortful.",
  },
]

const whyPeopleSearch = [
  {
    title: "They want to know if things are improving",
    description:
      "Many people search for this because they are trying to understand whether regulation, calming, or recovery is actually beginning to happen.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "They do not know what regulation should feel like",
    description:
      "Often the term sounds important, but the lived experience of it feels vague until someone can picture how it might show up in the body and in daily life.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They are trying to recognize progress",
    description:
      "The search is often really about noticing signs like less urgency, better return, easier evenings, or a greater sense of steadiness through the day.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "They want contrast",
    description:
      "Sometimes the search is really about understanding the difference between regulation, shutdown, numbness, forced calm, and simply being exhausted.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Explore signs of dysregulation",
  },
]

const connectedTopics = [
  {
    title: "Nervous system regulation",
    description:
      "The broader framework page that explains what regulation means and how the body moves between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "How to calm your nervous system",
    description:
      "The practical support page for understanding what may help the body move toward the kind of steadiness described here.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Recovery and regulation",
    description:
      "A related guide to everyday rest, recovery research and the limits of inferring physiology from a feeling.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Signs of a dysregulated nervous system",
    description:
      "A related guide to experiences people describe as dysregulation, without treating them as a diagnostic checklist.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Explore signs of dysregulation",
  },
]

export default function WhatNervousSystemRegulationFeelsLikePage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "What Nervous System Regulation Feels Like in Everyday Life | Neuvago",
    description: "Learn what nervous system regulation can feel like in everyday life, including less urgency, more room, better recovery, easier transitions, and stronger steadiness over time.",
    path: "/learn/what-nervous-system-regulation-feels-like",
    articleSection: "Learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "What Nervous System Regulation Feels Like in Everyday Life", path: "/learn/what-nervous-system-regulation-feels-like" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-what-nervous-system-regulation-feels-like" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / What nervous system regulation feels like
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              What does nervous system regulation actually feel like in everyday life?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              When people describe feeling more “regulated,” they may mean that everyday life feels easier to manage: less urgency, a little more room for emotion or an easier transition into rest. These are descriptions of experience, not proof that the nervous system has reached a particular measured state.
            </p>

            <p data-neuvago-interpretation-note="1e4d5" className="mt-5 max-w-2xl rounded-2xl border border-black/10 bg-white/60 p-4 text-sm leading-7 text-[#5f5a52]">The examples below describe subjective experience, not a validated test of regulation. Feeling calmer, looking calmer and a physiological measurement are not interchangeable. No particular feeling establishes that a routine or device has changed vagal tone.</p>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Research background: <a href="#source-19809584" className="underline decoration-black/25 underline-offset-4">Mauss IB (2009)</a> · <a href="#source-12212647" className="underline decoration-black/25 underline-offset-4">Gross JJ (2002)</a>.</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore recovery
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white/70 to-[#ebe4da] blur-2xl" />

            <div className="hidden rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur lg:block">
              <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
                <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                        Felt experience
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A way to describe steadier moments without turning them into a physiological test
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Less urgency
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          More ease in the body
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Better return
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Recovery after stress
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            More room
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Daily life feels more workable
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Describing a change
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Feeling more settled can matter even when it does not tell you what has changed physiologically
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              You might describe a difficult conversation as easier to return from, or an evening as less rushed. Such observations can be meaningful descriptions of daily life without becoming a score for vagal tone, resilience or autonomic balance.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Research measures emotion through experience, behaviour and physiology. These measures do not necessarily change together, so outward calm, a calmer feeling and a physiological reading should not be treated as equivalent.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Research on emotion regulation also distinguishes strategies and outcomes. Changing how a situation is interpreted is different from simply hiding an expression; looking composed does not establish how a person feels inside.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore regulation
              </Link>

              <Link
                href="/learn/signs-of-a-dysregulated-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore signs of dysregulation
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Key takeaways
            </p>

            <div className="mt-8 space-y-5">
              {keyPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Notice what a change means to you
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                A useful observation can be specific, such as finding one task more manageable, without proving a particular biological mechanism.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Examples of felt changes
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The examples below describe experiences, not a test of successful nervous-system regulation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              There is no required feeling that everyone should achieve. The following examples are prompts for describing your experience, not measured outcomes promised by a routine, device or treatment.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {feltSigns.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                When you want to recognize progress
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Progress can be hard to recognize when change is gradual rather than dramatic.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                You can notice whether daily life feels more manageable without labelling every quiet moment as recovery. Emotional numbness, exhaustion and a chosen pause are not interchangeable experiences, and this page cannot diagnose the difference for you.
              </p>
            </div>

            <div>
              <Link
                href="/learn"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore learning
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyPeopleSearch.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Connected topics
            </p>

            <div className="mt-8 space-y-5">
              {connectedTopics.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                  >
                    {item.linkLabel}
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Keep context alongside the observation
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Related reading can explain concepts and possible supports, but it cannot verify a physiological change from how one moment feels.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Feeling better does not require constant calm, and feeling calm does not prove a specific nervous-system change
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The goal of this guide is to give everyday observations clearer language. It does not define a normal state that you must reach, or a timeline by which stress and difficult emotions should disappear.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A subjective improvement is not automatically evidence of higher vagal tone, selective vagus stimulation or benefit from Neuvago. Those are separate questions requiring appropriate measurements and evidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore calming
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="sources-and-limits" data-neuvago-source-pilot="1e4d5" aria-labelledby="sources-and-limits-title" className="border-y border-black/5 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">Sources and interpretation limits</p>
            <h2 id="sources-and-limits-title" className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">What these references explain — and what they do not</h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">These references support the distinctions described above. They are not studies of Neuvago and do not establish a product benefit, a diagnosis or evidence for every existing statement on this page.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article id="source-19809584" data-source-pmid="19809584" className="min-w-0 scroll-mt-24 rounded-[1.5rem] border border-black/10 bg-white/70 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#756e65]">1. Emotion measurement review · 2009</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-snug text-[#1f1f1c]">Measures of emotion: A review</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Mauss IB, Robinson MD. Cognition and Emotion.</p>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Examines subjective, physiological and behavioural measures of emotion and why they are not interchangeable. It does not establish that feeling calm measures vagal tone or nervous-system health.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5f5a52]">
                <span className="break-all">PMID: 19809584</span>
                <span className="break-all">DOI: 10.1080/02699930802204677</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/19809584/" target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4">Read Mauss IB on PubMed</a>
            </article>
            <article id="source-12212647" data-source-pmid="12212647" className="min-w-0 scroll-mt-24 rounded-[1.5rem] border border-black/10 bg-white/70 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#756e65]">2. Emotion regulation review · 2002</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-snug text-[#1f1f1c]">Emotion regulation: affective, cognitive, and social consequences</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Gross JJ. Psychophysiology.</p>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Reviews reappraisal and suppression, with different consequences for emotional experience, expression and physiology. It is not a universal prescription to suppress feelings, a diagnostic tool or a study of Neuvago.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5f5a52]">
                <span className="break-all">PMID: 12212647</span>
                <span className="break-all">DOI: 10.1017/s0048577201393198</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/12212647/" target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4">Read Gross JJ on PubMed</a>
            </article>
          </div>
          <aside data-neuvago-care-note="1e4d5" aria-labelledby="individual-advice-title" className="mt-8 rounded-2xl border border-black/10 bg-white/60 p-6">
            <h3 id="individual-advice-title" className="text-lg font-medium">When to seek individual advice</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5f5a52]">If you are struggling to cope with stress or the things you are trying are not helping, seek advice from a healthcare professional. Use local urgent services if you need immediate help; this page is not an assessment or a substitute for care.</p>
            <a href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4">NHS guidance: getting help with stress</a>
          </aside>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Keep exploring the broader picture
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Use the feeling of regulation as the bridge into calming,
                recovery, steadiness, and stronger daily capacity
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Understanding what nervous system regulation feels like is one
                of the strongest bridge topics in the Neuvago learning universe
                because it connects internal experience with the bigger picture
                of stress, sleep, anxiety, recovery, and what getting better may
                begin to feel like in real life.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore regulation
                </Link>

                <Link
                  href="/learn/how-to-calm-your-nervous-system"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore calming
                </Link>

                <Link
                  href="/learn/signs-of-a-dysregulated-nervous-system"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore signs of dysregulation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
