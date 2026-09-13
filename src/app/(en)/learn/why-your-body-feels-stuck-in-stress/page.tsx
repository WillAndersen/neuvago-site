import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "Stuck in Stress | Nervous System Activation | Neuvago",
  description:
    "Learn why the body can feel stuck in stress even after the stressful thing is over, and how lingering activation connects to sleep, recovery, anxiety, and nervous system regulation.",
  alternates: {
    canonical: "/learn/why-your-body-feels-stuck-in-stress",
    languages: {
      "en-US": "/learn/why-your-body-feels-stuck-in-stress",
      "nb-NO": "/no/kunnskap/fastlast-i-stress",
      "x-default": "/learn/why-your-body-feels-stuck-in-stress",
    },
  },
  openGraph: {
    title: "Stuck in Stress | Nervous System Activation | Neuvago",
    description: "Learn why the body can feel stuck in stress even after the stressful thing is over, and how lingering activation connects to sleep, recovery, anxiety, and nervous system regulation.",
    url: "/learn/why-your-body-feels-stuck-in-stress",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stuck in Stress | Nervous System Activation | Neuvago",
    description: "Learn why the body can feel stuck in stress even after the stressful thing is over, and how lingering activation connects to sleep, recovery, anxiety, and nervous system regulation.",
  },
}

const keyPoints = [
  {
    title: "The body does not always switch off immediately",
    description:
      "Feeling tense after a difficult event is possible. The feeling alone does not show that a stress response is trapped, unfinished or permanently switched on.",
  },
  {
    title: "What feels confusing often makes sense in context",
    description:
      "Ongoing demands, worry, sleep and health are possible parts of the picture. They should be explored rather than assumed to be the explanation for every symptom.",
  },
  {
    title: "The explanation often helps by removing blame",
    description:
      "Difficulty relaxing is not a failure of willpower. Being kind to yourself can coexist with seeking assessment when symptoms persist or cause concern.",
  },
]

const whyItHappens = [
  {
    title: "Worry may outlast the event",
    description:
      "One research hypothesis is that worry and rumination can prolong stress-related activation before or after an event. This is a possible mechanism, not proof of trapped stress.",
  },
  {
    title: "Present-day demands may continue",
    description:
      "One event can end while other demands remain. It can help to distinguish what has actually changed from what still needs practical support.",
  },
  {
    title: "Sleep and health also matter",
    description:
      "Sleep difficulties and physical or mental health concerns may overlap with feeling tense. Symptoms should not automatically be assigned to a learned nervous-system state.",
  },
  {
    title: "Stress involves more than one pathway",
    description:
      "Stress physiology concerns interactions across several body systems. It is not a single switch, and this page cannot measure those processes in an individual.",
  },
]

const everydayPatterns = [
  {
    title: "Lingering tension",
    description:
      "The body continues to feel braced, tight, or physically on guard even when the situation itself is over.",
  },
  {
    title: "Urgency that stays high",
    description:
      "There can be a persistent internal rush, as if the system still believes there is something it needs to fix, escape, or stay ready for.",
  },
  {
    title: "Difficulty switching off",
    description:
      "The day may be over on paper, but not in the body. Settling, unwinding, and mentally releasing the day can feel much harder than expected.",
  },
  {
    title: "Thin sleep and thin recovery",
    description:
      "Sleep may feel lighter, evenings more restless, and the next day may begin with the same stress already present in the system.",
  },
]

const searchReasons = [
  {
    title: "The stressful thing is over, but the body disagrees",
    description:
      "Many people search for this because the pressure has passed on the outside, yet the body still feels tense, wired, restless, or watchful.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They want to understand why calm does not return",
    description:
      "Often the search is really about why the body does not come back to baseline even when life looks quieter on the surface.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "They are trying to make sense of anxiety and sleep trouble",
    description:
      "The search often overlaps with anxiety, restless evenings, lighter sleep, and the sense that the system is still carrying something unresolved.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "They want a practical explanation",
    description:
      "Usually, people are not asking for theory first. They are asking why stress can linger in the body long after the obvious trigger has passed.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const connectedTopics = [
  {
    title: "How to calm your nervous system",
    description:
      "The practical support page for understanding what may actually help once the body is stuck in lingering activation.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Nervous system regulation",
    description:
      "The larger framework page that explains how the body shifts between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Recovery and regulation",
    description:
      "A deeper next step for understanding why restoration, sleep, and daily rhythm matter so much when the system has not yet come back down.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Why you feel tired but can’t relax",
    description:
      "A closely related bridge page for understanding why depletion and activation can exist at the same time.",
    href: "/learn/why-you-feel-tired-but-cant-relax",
    linkLabel: "Explore wired-but-tired",
  },
]

export default function WhyYourBodyFeelsStuckInStressPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "Stuck in Stress | Nervous System Activation | Neuvago",
    description: "Learn why the body can feel stuck in stress even after the stressful thing is over, and how lingering activation connects to sleep, recovery, anxiety, and nervous system regulation.",
    path: "/learn/why-your-body-feels-stuck-in-stress",
    articleSection: "Learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Why Your Body Feels Stuck in Stress", path: "/learn/why-your-body-feels-stuck-in-stress" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-why-your-body-feels-stuck-in-stress" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Why your body feels stuck in stress
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Why does the body sometimes feel stuck in stress even when the stressful thing is over?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Feeling tense, restless or watchful after a difficult event can be
              confusing. Describing that experience as feeling stuck does not mean
              stress is literally trapped in the body. Worry, ongoing demands, sleep and
              health may be relevant, but the cause cannot be established from the
              feeling alone.
            </p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-5">
              <p data-neuvago-interpretation-note="1e4d4" className="text-sm leading-7 text-[#5f5a52]">
                Feeling stuck is a description, not evidence of a trapped or unfinished stress response. Stress physiology and worry-related models offer possible explanations, not a diagnosis from symptoms or proof that the body must complete a particular cycle.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#514c45]">
                Research context and limits:{" "}
                <a href="#source-17615391" className="underline underline-offset-4">McEwen BS (2007) [1]</a>{"; "}
                <a href="#source-16439263" className="underline underline-offset-4">Brosschot JF (2006) [2]</a>.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore regulation
              </Link>
              <Link
                href="/no/kunnskap/fastlast-i-stress"
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
                        Explanation page
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A practical lens on why the body can stay “on” longer than it wants to
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Stress load
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          What the system is still carrying
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recovery
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            What has not fully happened yet
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Return
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Coming back toward balance
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
              What this often means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Feeling stuck is a description of an experience, not a diagnosis of an
              unfinished stress response
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              It helps to separate what you notice from the explanation you give it.
              Tension, racing thoughts and difficulty unwinding describe your
              experience; they do not by themselves measure autonomic activity, hormone
              levels or stress load.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Stress physiology involves multiple interacting systems. Research on worry
              and rumination proposes one reason responses may continue around a
              stressful event, but it does not establish that everyone needs to complete
              or release a stored stress cycle.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              You do not need to blame yourself for finding it hard to relax. Nor do you
              need to accept a single physiological explanation before asking for
              support or appropriate assessment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/learn/why-you-feel-tired-but-cant-relax"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore wired-but-tired
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
                This explanation works best when it removes blame
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The experience can be taken seriously without treating it as a failure
                of willpower or assuming that one mechanism explains it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Possible contributors, not a personal diagnosis
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A changed situation does not tell us everything about ongoing symptoms
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The possibilities below are prompts for understanding the context, not
              tests for stored stress, nervous-system damage or a required reset.
              Several factors may need attention, and individual advice may be helpful.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyItHappens.map((item) => (
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
              How it often shows up in daily life
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Being stuck in stress often becomes most visible in the background
              of ordinary life rather than in one dramatic moment
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People do not always experience the pattern as one obvious stress
              response. More often, they notice it in smaller repeated ways: a
              body that stays tense, a mind that keeps rushing, evenings that do
              not settle, and sleep that does not fully restore.
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
                When the pressure is over but the body still feels on
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Stress can linger as a body state even when the obvious pressure has passed.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The practical question is why the body can stay tense, wired, watchful,
                restless, or hard to settle even after the obvious pressure has passed.
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
            {searchReasons.map((item) => (
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
                Understanding the pattern creates room for the next step
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The next step after understanding why the body is stuck is often
                support, recovery, and a clearer framework for how return actually happens.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Feeling stuck does not establish either permanent damage or one harmless
              explanation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This page cannot tell whether ongoing symptoms come from stress, sleep, a
              health condition or several influences. It should not be used to rule out
              other causes or delay appropriate care.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The references explain the models being discussed and their limits. They
              do not show that a particular technique completes a stress response or
              that Neuvago treats anxiety or another condition.
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

      <section id="sources-and-limits" data-neuvago-source-pilot="1e4d4" className="border-y border-black/6 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">Sources and interpretation limits</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">What this research can and cannot explain</h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">These references provide context for the explanations discussed here. They are not studies of Neuvago and do not establish a product benefit. They do not make every everyday description on this page a measured biological finding.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article id="source-17615391" data-source-pmid="17615391" className="min-w-0 scroll-mt-24 rounded-3xl border border-black/6 bg-white/70 p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[#84796e]">1. Stress physiology review · 2007</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-tight tracking-[-0.025em]">Physiology and neurobiology of stress and adaptation: central role of the brain</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">McEwen BS. Physiological Reviews.</p>
              <p className="mt-3 text-sm leading-7 text-[#625b53]">Describes adaptive and maladaptive stress responses involving multiple body systems. It does not measure an individual’s stress load from symptoms or establish that a stress response must be completed by a particular technique.</p>
              <div className="mt-5 flex min-w-0 flex-wrap gap-x-4 gap-y-2 text-sm text-[#514c45]">
                <span className="break-all">PMID: 17615391</span>
                <span className="break-all">DOI: 10.1152/physrev.00041.2006</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/17615391/" target="_blank" rel="noreferrer" className="mt-5 inline-flex break-all text-sm font-medium underline underline-offset-4">Read McEwen BS on PubMed</a>
            </article>
            <article id="source-16439263" data-source-pmid="16439263" className="min-w-0 scroll-mt-24 rounded-3xl border border-black/6 bg-white/70 p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[#84796e]">2. Hypothesis and evidence review · 2006</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-tight tracking-[-0.025em]">The perseverative cognition hypothesis: a review of worry, prolonged stress-related physiological activation, and health</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Brosschot JF, Gerin W, Thayer JF. Journal of Psychosomatic Research.</p>
              <p className="mt-3 text-sm leading-7 text-[#625b53]">Reviews preliminary support for worry and rumination prolonging stress-related activation. It is a proposed explanation, not a universal cause of symptoms or evidence that stress is trapped in the body.</p>
              <div className="mt-5 flex min-w-0 flex-wrap gap-x-4 gap-y-2 text-sm text-[#514c45]">
                <span className="break-all">PMID: 16439263</span>
                <span className="break-all">DOI: 10.1016/j.jpsychores.2005.06.074</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/16439263/" target="_blank" rel="noreferrer" className="mt-5 inline-flex break-all text-sm font-medium underline underline-offset-4">Read Brosschot JF on PubMed</a>
            </article>
          </div>
          <aside data-neuvago-care-note="1e4d4" className="mt-8 rounded-3xl border border-black/10 bg-white/70 p-6">
            <h3 className="text-lg font-medium">When to seek individual advice</h3>
            <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Seek professional support if stress is difficult to cope with or self-help is not helping. New or concerning physical symptoms should not be assumed to be caused by stress.</p>
            <a href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm underline underline-offset-4">NHS guidance: stress</a>
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
                Use this explanation as the bridge into calming, regulation, and the wired-but-tired experience
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Understanding why the body feels stuck in stress is one of the
                most useful bridge topics in the Neuvago learning universe
                because it connects lived experience with the bigger picture of
                anxiety, sleep, recovery, regulation, and what the body may still need in order to return.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/how-to-calm-your-nervous-system"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore calming
                </Link>

                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore regulation
                </Link>

                <Link
                  href="/learn/why-you-feel-tired-but-cant-relax"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore wired-but-tired
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
