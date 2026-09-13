import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "What Is Vagal Tone? | Neuvago",
  description:
    "Learn what vagal tone means, how it relates to resilience, recovery, return after stress, and why the term matters in everyday nervous system conversations.",
  alternates: {
    canonical: "/learn/vagal-tone",
    languages: {
      "en-US": "/learn/vagal-tone",
      "nb-NO": "/no/kunnskap/vagal-tone",
      "x-default": "/learn/vagal-tone",
    },
  },
  openGraph: {
    title: "What Is Vagal Tone? | Neuvago",
    description: "Learn what vagal tone means, how it relates to resilience, recovery, return after stress, and why the term matters in everyday nervous system conversations.",
    url: "/learn/vagal-tone",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Vagal Tone? | Neuvago",
    description: "Learn what vagal tone means, how it relates to resilience, recovery, return after stress, and why the term matters in everyday nervous system conversations.",
  },
}

const keyPoints = [
  {
    title: "A more specific resilience lens",
    description:
      "Cardiac vagal tone concerns vagal influence on the heart; feeling steady, flexible or recovered is not itself a measurement of it.",
  },
  {
    title: "Often connected to recovery and return",
    description:
      "The term matters because it is often used to describe how well the body settles after stress and how supported restoration feels afterward.",
  },
  {
    title: "Most useful when it stays practical",
    description:
      "Vagal tone becomes much more valuable when it helps explain daily patterns of steadiness, stress response, and recovery rather than sounding like a purely technical metric.",
  },
]

const whatItOftenPointsTo = [
  {
    title: "Better adaptability",
    description:
      "The term is often used when people are trying to understand why the body sometimes feels more flexible, less reactive, and easier to bring back to steadier ground.",
  },
  {
    title: "Stronger recovery capacity",
    description:
      "Vagal tone often appears in conversations about whether recovery feels more supported, more complete, and less fragile over time.",
  },
  {
    title: "Greater return after stress",
    description:
      "One of the most useful ways to think about the term is how well the body seems able to come back after activation rather than how calm it is in one isolated moment.",
  },
  {
    title: "More supported resilience",
    description:
      "In practical language, the topic often overlaps with the question of why some days the system feels steadier and more resilient, while on other days it feels easier to throw off balance.",
  },
]

const dailyPatterns = [
  {
    title: "When the system feels more supported",
    description:
      "People often use the term in a more positive sense when the body feels steadier, more recoverable, and less immediately overwhelmed by stress.",
  },
  {
    title: "When recovery feels thinner",
    description:
      "The same term can also be used when someone is trying to understand why the body feels more fragile, slower to restore, or harder to settle after pressure.",
  },
  {
    title: "When resilience feels uneven",
    description:
      "Many people become interested in vagal tone because they notice that their ability to handle stress and return afterward changes across time, context, sleep, and recovery.",
  },
  {
    title: "When the body feels less flexible",
    description:
      "The topic often becomes relevant when a person feels more reactive, more depleted, or less able to move fluidly between activation and settling.",
  },
]

const whyPeopleSearch = [
  {
    title: "They want to understand resilience",
    description:
      "Many people encounter the term while looking for a clearer way to understand why some days feel steadier, calmer, or easier to recover from than others.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They are trying to make sense of recovery",
    description:
      "The term often appears when someone is exploring why recovery feels stronger at times and thinner or more fragile at others.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "They want a more specific lens",
    description:
      "Often the search begins after someone has already encountered the broader vagus nerve conversation and wants a more specific concept tied to flexibility and return.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "They are trying to understand stress response quality",
    description:
      "Usually, the deeper question is not just whether stress happens, but how well the body seems able to adapt and return after it.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
]

const connectedTopics = [
  {
    title: "Vagus nerve",
    description:
      "The broader entry page for understanding why the vagus nerve matters across stress, sleep, recovery, and nervous system support.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "Nervous system regulation",
    description:
      "The larger framework page for understanding how the body moves between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Recovery and regulation",
    description:
      "A useful next step for understanding why restoration, resilience, and return often depend on the wider conditions shaping the nervous system over time.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Parasympathetic nervous system",
    description:
      "A related calmer-state page that helps explain why vagal tone is so often discussed alongside settling, restoration, and unwinding.",
    href: "/learn/parasympathetic-nervous-system",
    linkLabel: "Explore parasympathetic states",
  },
]

export default function VagalTonePage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "What Is Vagal Tone? | Neuvago",
    description: "Learn what vagal tone means, how it relates to resilience, recovery, return after stress, and why the term matters in everyday nervous system conversations.",
    path: "/learn/vagal-tone",
    articleSection: "Learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "What Is Vagal Tone? Resilience, Recovery and Nervous System Flexibility", path: "/learn/vagal-tone" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-vagal-tone" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Vagal tone
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              What is vagal tone, and why is it often linked to resilience, recovery, and steadier response to stress?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In heart-rate research, cardiac vagal tone concerns the influence of parasympathetic vagal pathways on the heart. Heart rate variability can provide information about that influence, but breathing, activity and measurement conditions affect its interpretation. It is not a direct measure of the entire vagus nerve.{" "}
              <a href="#source-17081672" className="underline underline-offset-4" aria-label="Read background source 1">[1]</a> <a href="#source-25696224" className="underline underline-offset-4" aria-label="Read background source 2">[2]</a>
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52]" data-neuvago-interpretation-note="1e4d3">
              Descriptions of resilience, calm or recovery below are everyday experiences, not a test of vagal tone. Neither how you feel nor one wearable reading establishes a diagnosis of a weak or damaged vagus nerve.{" "}
              <a href="#sources-and-limits" className="font-medium underline underline-offset-4">Read the sources and their limits.</a>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/vagus-nerve"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore vagus nerve
              </Link>

              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore regulation
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
                        Specific resilience lens
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A more focused way to think about steadiness, recovery,
                        and return after stress
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Flexibility
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Adapting without getting stuck
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recovery
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Restoration after strain
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Return
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Coming back toward steadiness
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
              What vagal tone often means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Vagal tone is often used as a more specific way to describe how
              supported, flexible, and recoverable the body feels over time
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In practical language, vagal tone is often discussed as a way to
              describe how well the body seems able to shift toward steadier,
              more restorative states. That is why it appears so often in
              conversations about resilience, recovery, flexibility, and return
              after stress.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The term can sound technical, but the underlying idea is usually
              quite simple. People want to understand whether the body feels
              more supported, more adaptable, and more able to come back after
              pressure rather than staying reactive, depleted, or slow to recover.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That makes vagal tone useful not because it explains everything,
              but because it offers one more specific lens into how the system
              seems to be coping, restoring, and responding over time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
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
                Most useful as a sharper lens
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The term becomes strongest when it helps explain daily patterns
                of resilience, recovery, and return in a more specific way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              What the term often points to
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Vagal tone is often useful because it gives more specific language
              for how the body adapts and recovers
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The term usually becomes meaningful when people are trying to
              understand why the body sometimes feels steadier, more resilient,
              and easier to bring back after stress — and at other times more
              fragile, reactive, or slower to restore.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatItOftenPointsTo.map((item) => (
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
              How it often shows up in real life
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The term often becomes relevant when people notice that stress
              response, recovery, and resilience do not feel equally supported across time
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Most people do not become interested in vagal tone because they
              want a metric first. They become interested because they notice
              variation in how steady, recoverable, and adaptable the body feels
              in ordinary life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {dailyPatterns.map((item) => (
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
                When resilience feels different from day to day
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Vagal tone is often discussed when people notice that resilience and
                recovery can feel different from one day or situation to another.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The practical question is how resilience, recovery quality, and return
                after stress relate to the term — without reducing the whole
                picture to one technical measure.
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
                Vagal tone is one part of the resilience picture
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                It is most useful when it sharpens the bigger conversation about the
                vagus nerve, regulation, and recovery rather than replacing it.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Vagal tone can be useful, but it makes the most sense as one part
              of a larger stress-recovery-regulation picture
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Because vagal tone is often presented as a more specific concept,
              it can sometimes sound more definitive than it really is. That
              usually makes the topic less helpful, not more.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A calmer perspective is that vagal tone can be a useful lens into
              resilience, return, and recovery quality — but it still makes the
              most sense when placed within a wider understanding of stress,
              sleep, recovery, nervous system flexibility, and daily rhythm.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/parasympathetic-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore parasympathetic states
              </Link>

              <Link
                href="/learn/vagus-nerve"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore vagus nerve
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="sources-and-limits" aria-labelledby="sources-and-limits-heading" data-neuvago-source-pilot="1e4d3" className="border-y border-black/10 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.16em] text-[#625b53]">Sources and interpretation</p>
            <h2 id="sources-and-limits-heading" className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">Background sources and what they do not establish</h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">These sources address cardiac autonomic measurement and its limitations. They do not turn a feeling of resilience, a recovery score or one HRV reading into a measurement of the whole vagus nerve.</p>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">These references are not studies of Neuvago and do not establish a product benefit, a diagnosis or personal suitability for stimulation.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article id="source-17081672" data-source-pmid="17081672" className="min-w-0 rounded-[1.5rem] border border-black/10 bg-white/70 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#625b53]">1. Physiology review · 2007</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-7 text-[#1f1f1c]">Toward understanding respiratory sinus arrhythmia: relations to cardiac vagal tone, evolution and biobehavioral functions</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Grossman P, Taylor EW. Biological Psychology.</p>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Discusses how breathing, physical activity and other factors affect the interpretation of respiratory sinus arrhythmia as an index of cardiac vagal tone. It is not a whole-vagus health test.</p>
              <div className="mt-4 flex min-w-0 flex-col gap-2 text-sm text-[#5f5a52]">
                <span>PMID: 17081672</span>
                <span className="break-all">DOI: 10.1016/j.biopsycho.2005.11.014</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/17081672/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex font-medium underline decoration-black/30 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Read Grossman P on PubMed</a>
            </article>
            <article id="source-25696224" data-source-pmid="25696224" className="min-w-0 rounded-[1.5rem] border border-black/10 bg-white/70 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#625b53]">2. Pharmacological validation study · 2003</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-7 text-[#1f1f1c]">Heart rate variability and sympathovagal balance: pharmacological validation</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Bootsma et al.. Netherlands Heart Journal.</p>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Examines HRV measures against pharmacological autonomic blockade. This laboratory study does not validate a consumer score for resilience, recovery or general vagus-nerve health.</p>
              <div className="mt-4 flex min-w-0 flex-col gap-2 text-sm text-[#5f5a52]">
                <span>PMID: 25696224</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/25696224/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex font-medium underline decoration-black/30 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Read Bootsma et al. on PubMed</a>
            </article>
          </div>
          <Link href="/research/how-to-read-a-vns-study" className="mt-8 inline-flex text-sm font-medium underline decoration-black/30 underline-offset-4">How to read a VNS study without transferring its conclusions to a different method or product</Link>
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
                Use vagal tone as the more specific lens into resilience,
                recovery quality, and steadier return after stress
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Vagal tone is one of the more specific foundation topics in the
                Neuvago learning universe because it helps sharpen the
                conversation around resilience, flexibility, recovery quality,
                and how well the system seems able to come back after strain.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/vagus-nerve"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore vagus nerve
                </Link>

                <Link
                  href="/learn/recovery-and-regulation"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore recovery
                </Link>

                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore regulation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
