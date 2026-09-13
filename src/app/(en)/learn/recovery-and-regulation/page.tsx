import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "Recovery and Regulation | Neuvago",
  description:
    "Learn how recovery and nervous system regulation connect to stress, sleep, capacity, resilience, and why rest is not always the same as real restoration.",
  alternates: {
    canonical: "/learn/recovery-and-regulation",
    languages: {
      "en-US": "/learn/recovery-and-regulation",
      "nb-NO": "/no/kunnskap/restitusjon-og-regulering",
      "x-default": "/learn/recovery-and-regulation",
    },
  },
  openGraph: {
    title: "Recovery and Regulation | Neuvago",
    description: "Learn how recovery and nervous system regulation connect to stress, sleep, capacity, resilience, and why rest is not always the same as real restoration.",
    url: "/learn/recovery-and-regulation",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recovery and Regulation | Neuvago",
    description: "Learn how recovery and nervous system regulation connect to stress, sleep, capacity, resilience, and why rest is not always the same as real restoration.",
  },
}

const keyPoints = [
  {
    title: "Recovery is more than stopping",
    description:
      "Here, recovery describes rest and the experience of feeling ready for ordinary activities again. It is not a clinical measurement of nervous-system function.",
  },
  {
    title: "Recovery shapes capacity",
    description:
      "Energy and ability to manage daily demands are useful experiences to notice. They do not, by themselves, show why someone is tired or how well their autonomic nervous system is working.",
  },
  {
    title: "Regulation and recovery belong together",
    description:
      "Recovery and stress are studied in different settings. Findings about time away from work should not be treated as a universal explanation for fatigue or as proof of a product effect.",
  },
]

const whatRecoveryChanges = [
  {
    title: "Energy returns more cleanly",
    description:
      "Recovery often becomes visible when tiredness no longer lingers in the same way and the system begins to feel less worn down from the start of the day.",
  },
  {
    title: "Stress becomes more workable",
    description:
      "The same pressures may still exist, but the body often feels less fragile and more able to absorb, respond, and come back afterward.",
  },
  {
    title: "Capacity expands again",
    description:
      "When recovery is stronger, there is often more room for work, emotion, sleep disruption, decisions, and ordinary demands without the same immediate strain.",
  },
  {
    title: "Return happens more easily",
    description:
      "One of the clearest signs of better recovery is often not perfection, but the body’s improved ability to come back after hard days, poor nights, or demanding periods.",
  },
]

const everydayPatterns = [
  {
    title: "Lingering tiredness",
    description:
      "You may still feel tired after resting. That experience deserves attention, but it does not identify its cause or prove that stress remains stored in the body.",
  },
  {
    title: "Harder mornings",
    description:
      "Low energy or motivation in the morning can be useful to describe when seeking advice. They are not specific signs of a regulation problem.",
  },
  {
    title: "Lower resilience",
    description:
      "You may find ordinary pressures harder to manage than before. This is a description of day-to-day functioning, not a measurement of resilience or vagal tone.",
  },
  {
    title: "Less room for ordinary life",
    description:
      "People may notice they simply have less space than before for work, stress, decisions, social input, or emotional load.",
  },
]

const whyPeopleSearch = [
  {
    title: "They want their energy back",
    description:
      "Many people search for recovery support because they no longer feel as steady, clear, or resilient as they want to feel in daily life.",
    href: "/conditions/burnout",
    linkLabel: "Explore burnout",
  },
  {
    title: "They want rest to actually work",
    description:
      "Often the real question is why sleep, pauses, or quieter periods no longer feel as restorative as they used to.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "They are trying to understand capacity",
    description:
      "The search is often really about why ordinary life now feels heavier, harder to recover from, or less manageable than before.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
  {
    title: "They want a bigger explanation",
    description:
      "Usually, people are looking for language that explains how sleep, stress, resilience, regulation, and restoration all fit together.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
]

const connectedTopics = [
  {
    title: "Nervous system regulation",
    description:
      "The broader framework page for understanding how the body moves between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Burnout",
    description:
      "A closely related condition page for understanding what it can look like when low recovery and prolonged load begin to reduce capacity more dramatically.",
    href: "/conditions/burnout",
    linkLabel: "Explore burnout",
  },
  {
    title: "Sleep",
    description:
      "One of the clearest places recovery either strengthens or weakens is in how deeply the body rests and how restored it feels the next day.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "How to calm your nervous system",
    description:
      "A practical support page for understanding what may help the system shift into states where restoration becomes more possible.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
]

export default function RecoveryAndRegulationPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "Recovery and Regulation | Neuvago",
    description: "Learn how recovery and nervous system regulation connect to stress, sleep, capacity, resilience, and why rest is not always the same as real restoration.",
    path: "/learn/recovery-and-regulation",
    articleSection: "Learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Recovery and Regulation", path: "/learn/recovery-and-regulation" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-recovery-and-regulation" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Recovery and regulation
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Why recovery and regulation matter so much in everyday life
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Rest is an activity; feeling restored is an experience. This page explores
              that distinction without treating lingering tiredness as proof of a
              nervous-system problem. Research on recovery from job stress and on stress
              physiology provides useful context, but not one explanation for every
              person.
            </p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-5">
              <p data-neuvago-interpretation-note="1e4d4" className="text-sm leading-7 text-[#5f5a52]">
                Recovery in this article refers to everyday rest and feeling able to resume activities. The cited research concerns job-stress recovery and broader stress physiology; it does not turn fatigue, mood or a wearable value into a measure of nervous-system recovery.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#514c45]">
                Research context and limits:{" "}
                <a href="#source-28358572" className="underline underline-offset-4">Sonnentag S (2017) [1]</a>{"; "}
                <a href="#source-17615391" className="underline underline-offset-4">McEwen BS (2007) [2]</a>.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore regulation
              </Link>

              <Link
                href="/conditions/burnout"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore burnout
              </Link>
              <Link
                href="/no/kunnskap/restitusjon-og-regulering"
                data-language-counterpart="nb-NO"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Les denne siden på norsk
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
                        Restoration page
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        Recovery is about more than rest. It is about what the
                        system actually gets back.
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Stress
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          What the system carries
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Restoration
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            What actually returns
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Capacity
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            What daily life feels like
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
              What recovery often means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Recovery is often less about taking a break, and more about whether
              the system actually feels restored afterward
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In everyday life, recovery is usually more than simply stopping.
              Many people are not only asking whether they paused. They are
              asking whether the pause helped the body and mind feel more
              restored, steadier, and more able to return.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Research on recovery from work distinguishes what people do during time
              away from work from how recovered they feel. Those findings help frame
              everyday recovery, but they do not explain every case of tiredness or poor
              sleep.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Use the language of recovery to describe your experience and needs, not to
              score or diagnose your nervous system. The source notes below explain the
              settings and limits of the research used here.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/conditions/sleep"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore sleep
              </Link>

              <Link
                href="/conditions/stress"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore stress
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
                Recovery matters because it changes what the next day feels like
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The real question is often not whether rest happened, but whether
                it restored energy, resilience, and capacity in a meaningful way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              What stronger recovery changes
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Recovery often becomes most visible in how much easier it feels to
              carry ordinary life again
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Better recovery is often less about one dramatic feeling and more
              about what begins to shift in daily life: more energy, more room,
              better return after pressure, and a body that no longer feels as
              immediately strained by everything it has to carry.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatRecoveryChanges.map((item) => (
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
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Experiences worth paying attention to
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Everyday changes can be worth discussing without being specific signs of
              one condition
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Lingering tiredness, difficult mornings and less room for ordinary demands
              are experiences people may notice. The list below is not a diagnostic
              checklist and does not establish that incomplete recovery is the cause.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {everydayPatterns.map((item) => (
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

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                When rest is not restoring enough
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Recovery matters most when rest is not fully restoring capacity, resilience,
                or the sense of feeling like yourself again.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The practical questions are why the system still feels tired, why
                resilience feels lower, why sleep is not enough, and how daily
                life can begin to feel more carryable again.
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
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
                Recovery is about restoration over time
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The next step after understanding recovery is often looking at
                regulation, sleep, burnout, or practical support for helping the
                system restore more fully.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Recovery support is not a substitute for understanding persistent or
              unexplained tiredness
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Rest and daily routines can be part of looking after yourself. Persistent
              symptoms may need individual assessment rather than a stronger effort to
              relax or a new explanation based only on nervous-system language.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The references below distinguish occupational recovery research from
              stress physiology. Neither kind of source establishes that Neuvago treats
              fatigue, burnout or a medical condition.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/conditions/burnout"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore burnout
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="sources-and-limits" data-neuvago-source-pilot="1e4d4" className="border-y border-black/6 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">Sources and interpretation limits</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">What this research can and cannot explain</h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">These references provide context for the explanations discussed here. They are not studies of Neuvago and do not establish a product benefit. They do not make every everyday description on this page a measured biological finding.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article id="source-28358572" data-source-pmid="28358572" className="min-w-0 scroll-mt-24 rounded-3xl border border-black/6 bg-white/70 p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[#84796e]">1. Occupational recovery review · 2017</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-tight tracking-[-0.025em]">Advances in recovery research: What have we learned? What should be done next?</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Sonnentag S, Venz L, Casper A. Journal of Occupational Health Psychology.</p>
              <p className="mt-3 text-sm leading-7 text-[#625b53]">Reviews recovery from job stress during nonwork time. This is background on employee well-being, not a clinical test for persistent fatigue or proof that one routine restores the nervous system.</p>
              <div className="mt-5 flex min-w-0 flex-wrap gap-x-4 gap-y-2 text-sm text-[#514c45]">
                <span className="break-all">PMID: 28358572</span>
                <span className="break-all">DOI: 10.1037/ocp0000079</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/28358572/" target="_blank" rel="noreferrer" className="mt-5 inline-flex break-all text-sm font-medium underline underline-offset-4">Read Sonnentag S on PubMed</a>
            </article>
            <article id="source-17615391" data-source-pmid="17615391" className="min-w-0 scroll-mt-24 rounded-3xl border border-black/6 bg-white/70 p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[#84796e]">2. Stress physiology review · 2007</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-tight tracking-[-0.025em]">Physiology and neurobiology of stress and adaptation: central role of the brain</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">McEwen BS. Physiological Reviews.</p>
              <p className="mt-3 text-sm leading-7 text-[#625b53]">Describes adaptive and maladaptive stress responses involving multiple body systems. It does not measure an individual’s stress load from symptoms or establish that a stress response must be completed by a particular technique.</p>
              <div className="mt-5 flex min-w-0 flex-wrap gap-x-4 gap-y-2 text-sm text-[#514c45]">
                <span className="break-all">PMID: 17615391</span>
                <span className="break-all">DOI: 10.1152/physrev.00041.2006</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/17615391/" target="_blank" rel="noreferrer" className="mt-5 inline-flex break-all text-sm font-medium underline underline-offset-4">Read McEwen BS on PubMed</a>
            </article>
          </div>
          <aside data-neuvago-care-note="1e4d4" className="mt-8 rounded-3xl border border-black/10 bg-white/70 p-6">
            <h3 className="text-lg font-medium">When to seek individual advice</h3>
            <p className="mt-3 text-sm leading-7 text-[#5f5a52]">If tiredness lasts for weeks without a clear explanation or affects daily life, seek advice from a healthcare professional rather than assuming it is only stress or a regulation problem.</p>
            <a href="https://www.nhs.uk/symptoms/tiredness-and-fatigue/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm underline underline-offset-4">NHS guidance: tiredness and fatigue</a>
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
                Use recovery as the bridge into regulation, burnout, and what actually helps the system rebuild
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Recovery is one of the strongest bridge topics in the Neuvago
                learning universe because it connects what people feel day to day
                with the bigger picture of sleep, stress, burnout, regulation,
                capacity, and what real restoration actually changes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore regulation
                </Link>

                <Link
                  href="/conditions/burnout"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore burnout
                </Link>

                <Link
                  href="/learn/how-to-calm-your-nervous-system"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore calming
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
