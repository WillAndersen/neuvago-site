import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";

export const metadata: Metadata = {
  title: "Sleep Support, Evening Unwinding and Regulation | Neuvago",
  description:
    "Understand sleep through evening activation, autonomic regulation, HRV, recovery, safety boundaries, and app-guided wind-down routines.",
  alternates: {
    canonical: "/conditions/sleep",
  },
  openGraph: {
    title: "Sleep Support, Evening Unwinding and Regulation | Neuvago",
    description:
      "Understand sleep through evening activation, autonomic regulation, HRV, recovery, safety boundaries, and app-guided wind-down routines.",
    url: "/conditions/sleep",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleep Support, Evening Unwinding and Regulation | Neuvago",
    description:
      "Understand sleep through evening activation, autonomic regulation, HRV, recovery, safety boundaries, and app-guided wind-down routines.",
  },
}

const sleepPillars = [
  {
    title: "Sleep is deeply connected to nervous system state",
    description:
      "Sleep is rarely only about bedtime. It is often shaped by whether the body can move out of activation and into a softer, more restorative state.",
  },
  {
    title: "Tiredness does not always mean downshifting",
    description:
      "Many people feel exhausted at night but still do not feel settled enough to rest deeply. That contradiction is an important part of the sleep picture.",
  },
  {
    title: "Recovery and sleep belong together",
    description:
      "Sleep becomes easier to understand when viewed together with stress load, evening activation, restoration, and how supported the system feels over time.",
  },
]

const commonSleepPatterns = [
  {
    title: "Difficulty winding down",
    description:
      "The body may stay mentally busy, physically activated, or subtly alert even when the day is over and rest is wanted.",
  },
  {
    title: "Light or fragile sleep",
    description:
      "Sleep can happen, but still feel thin, easily interrupted, or less restorative than it should.",
  },
  {
    title: "Wired but tired evenings",
    description:
      "A person may feel depleted and sleepy while still feeling too alert, tense, or mentally active to fully soften into rest.",
  },
  {
    title: "Harder mornings",
    description:
      "When sleep is less restorative, the day may begin with low capacity, lingering stress, and the sense that the system never fully reset.",
  },
]

const connectedTopics = [
  {
    title: "Why you feel tired but can’t relax",
    description:
      "A closely related page for understanding why fatigue and activation can exist in the body at the same time.",
    href: "/learn/why-you-feel-tired-but-cant-relax",
    linkLabel: "Explore wired-but-tired",
  },
  {
    title: "How to calm your nervous system",
    description:
      "A practical support page for understanding what may help when evening activation makes sleep feel harder to reach.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Parasympathetic nervous system",
    description:
      "A calmer-states page for understanding unwinding, restoration, digestion, and the body’s softer side.",
    href: "/learn/parasympathetic-nervous-system",
    linkLabel: "Explore parasympathetic states",
  },
  {
    title: "Recovery and regulation",
    description:
      "A useful next step for understanding why sleep and deeper restoration are tied to resilience, capacity, and return over time.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Autonomic regulation research",
    description:
      "A research path for understanding sleep through autonomic flexibility, downshifting, HRV, stress load, and recovery physiology.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "View regulation research",
  },
  {
    title: "Heart rate variability research",
    description:
      "A research topic that explains HRV as a measurement window into autonomic patterns, recovery, and physiological flexibility.",
    href: "/research/topics/heart-rate-variability",
    linkLabel: "View HRV research",
  },
  {
    title: "How Neuvago works",
    description:
      "A practical bridge from sleep education into device placement, guided sessions, app support, and evening routine design.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
]

const sleepRoutineSteps = [
  {
    title: "Name the evening state",
    description:
      "Sleep support becomes clearer when it starts with the state of the system: evening activation, wired-but-tired fatigue, light sleep, or thin recovery.",
  },
  {
    title: "Connect sleep to autonomic regulation",
    description:
      "The research bridge is not a promise that one tool improves sleep. It is a calmer way to understand downshifting, HRV context, recovery, and physiological flexibility.",
  },
  {
    title: "Make the routine repeatable",
    description:
      "For Neuvago, the practical bridge is an app-guided wind-down rhythm that can be repeated consistently rather than a complicated evening protocol.",
  },
  {
    title: "Keep the promise modest",
    description:
      "Sleep pages should stay careful: Neuvago can support a wellness routine, but it is not positioned as a treatment for insomnia or a replacement for medical care.",
  },
]

const sleepBridgeCards = [
  {
    title: "Research downshifting and recovery",
    description:
      "Move from sleep symptoms into autonomic regulation, parasympathetic return, stress load, and physiological flexibility.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "View regulation research",
  },
  {
    title: "Interpret HRV with care",
    description:
      "Use HRV as context for recovery and autonomic patterns without turning it into a simple sleep score or product guarantee.",
    href: "/research/topics/heart-rate-variability",
    linkLabel: "View HRV research",
  },
  {
    title: "Build a guided wind-down routine",
    description:
      "Explore how the Neuvago app can support short, calm sessions that fit into an evening routine without pressure or over-tracking.",
    href: "/app",
    linkLabel: "Explore the app",
  },
  {
    title: "See how sessions work",
    description:
      "Understand placement, comfort, app guidance, and how a non-invasive vagus nerve stimulator fits into daily use.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
]


export default function SleepPage() {
    const structuredData = buildAuthorityPageStructuredData({
    title: "Sleep Support, Evening Unwinding and Regulation | Neuvago",
    description: "Understand sleep through evening activation, autonomic regulation, HRV, recovery, safety boundaries, and app-guided wind-down routines.",
    path: "/conditions/sleep",
    articleSection: "Conditions",
    dateModified: authorityEditorialDates.vnsClusterModified,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Conditions", path: "/conditions" },
      { name: "Sleep", path: "/conditions/sleep" },
    ],
  });


  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="conditions-sleep" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Conditions / Sleep
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Sleep support starts with helping the nervous system unwind
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Sleep is not only about tiredness. It is also about whether
              the body can unwind, soften, and move into a more restorative
              state. That is why sleep often becomes easier to understand
              through stress, evening activation, calming, recovery, HRV
              context, and repeatable wind-down routines.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/why-you-feel-tired-but-cant-relax"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore wired-but-tired
              </Link>

              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore calming
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white/70 to-[#ebe4da] blur-2xl" />
            <div className="rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur">
              <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
                <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                        Condition pathway
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A clearer way to understand unwinding, evening activation, and fragile rest
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Evenings
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Harder downshifting
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Rest
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Fragile sleep quality
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recovery
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Less restoration overnight
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
              What sleep often means in this context
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Sleep often makes the most sense when it is understood as an unwinding and recovery issue, not only a tiredness issue
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In everyday life, sleep is often shaped by whether the system can
              move away from activation and into a more supported state. That is
              why a person can be tired, yet still not fully downshifted enough
              for deeper rest to happen easily.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This is also why sleep becomes stronger to understand when linked
              to stress, evening activation, recovery, nervous system settling,
              and what the body is still carrying at the end of the day.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to think about sleep is not only as rest itself, but
              as a reflection of whether the body can actually leave effort mode
              and receive restoration more fully.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/why-you-feel-tired-but-cant-relax"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore wired-but-tired
              </Link>

              <Link
                href="/learn/parasympathetic-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore parasympathetic states
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Key pillars
            </p>

            <div className="mt-8 space-y-5">
              {sleepPillars.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Sleep often becomes clearest when the whole pattern is visible
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Evening activation, fragility of rest, and recovery quality often belong to the same larger picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Common sleep patterns
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Sleep often becomes most visible through the repeated ways rest feels harder to reach or less restorative than it should
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People do not always describe sleep as “nervous system related.”
              More often, they describe the lived experience around it: difficulty
              winding down, fragile sleep, wired-but-tired evenings, and harder mornings.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commonSleepPatterns.map((item) => (
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
                  <h3 className="text-lg font-medium text-[#1f1f1c]">{item.title}</h3>
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
                Sleep works best as an entry point into the broader learning system
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The next step is often calming, recovery, or a better explanation of why the body still does not fully downshift.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why people search for sleep support
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Most people are not searching only for sleep tips. They are trying to understand why the body will not fully settle into rest.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Sleep searches are often really searches for explanation: why the
              body feels too activated at night, why rest feels fragile, and why
              mornings still feel under-restored even after time in bed.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why sleep pages become much stronger when they connect not
              only to sleep itself, but to regulation, calming, evening state,
              and the larger question of whether the system can truly unwind.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore recovery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#efe8de]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Evening-to-routine pathway
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A stronger sleep pathway should move from tiredness into state, recovery, and a realistic wind-down routine
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Sleep pages are most useful when they do not stop at generic sleep
              hygiene. A better pathway helps someone understand the evening
              state of the nervous system, review HRV and autonomic research
              carefully, and then decide whether a guided routine fits their
              life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sleepRoutineSteps.map((item) => (
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

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sleepBridgeCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-[#f8f5f0] p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
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

          <div className="mt-12 rounded-[2rem] border border-black/5 bg-white/60 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Responsible boundary
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago is positioned as a wellness support system for guided
              routines, not as an insomnia treatment or a replacement for
              clinical sleep care. It can support a calmer evening rhythm, but
              it should not be treated as a sleep diagnosis tool, treatment
              promise, or substitute for medical guidance. Persistent or severe
              sleep problems should be discussed with a qualified clinician.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                See how sessions work
              </Link>
              <Link
                href="/product"
                className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore Neuvago
              </Link>
              <Link
                href="/legal/intended-use"
                className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Read intended use
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Explore sleep, then go deeper
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Use sleep as the entry point into evening activation, calming, recovery, and nervous system understanding
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b564e] md:text-lg">
                Sleep is one of the most important entry conditions in the
                Neuvago universe because it connects directly to unwinding,
                nervous system state, recovery quality, and whether the body can
                truly leave effort mode at the end of the day.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/why-you-feel-tired-but-cant-relax"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore wired-but-tired
                </Link>

                <Link
                  href="/learn/parasympathetic-nervous-system"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore parasympathetic states
                </Link>

                <Link
                  href="/learn/how-to-calm-your-nervous-system"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore calming
                </Link>

                <Link
                  href="/how-it-works"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  See how Neuvago works
                </Link>

                <Link
                  href="/product"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore Neuvago
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
