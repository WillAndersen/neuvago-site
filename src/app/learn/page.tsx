import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld"
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data"

export const metadata: Metadata = {
  title:
    "Learn | VNS, Non-Invasive VNS and Auricular VNS | Neuvago",
  description:
    "Explore practical explainers on vagus nerve stimulation, non-invasive VNS, auricular VNS, the vagus nerve, nervous system regulation, stress, sleep, and recovery.",
  alternates: {
    canonical: "/learn",
  },
  openGraph: {
    title:
      "Learn | VNS, Non-Invasive VNS and Auricular VNS | Neuvago",
    description:
      "Explore practical explainers on vagus nerve stimulation, non-invasive VNS, auricular VNS, the vagus nerve, nervous system regulation, stress, sleep, and recovery.",
    url: "/learn",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Learn | VNS, Non-Invasive VNS and Auricular VNS | Neuvago",
    description:
      "Explore practical explainers on vagus nerve stimulation, non-invasive VNS, auricular VNS, the vagus nerve, nervous system regulation, stress, sleep, and recovery.",
  },
};

const parentPages = [
  {
    title: "Nervous system regulation",
    description:
      "The clearest starting point for understanding how the body shifts between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Start with regulation",
  },
  {
    title: "Vagus nerve",
    description:
      "A broad introduction to one of the body’s key communication pathways and why it matters for stress, sleep, calm, and recovery.",
    href: "/learn/vagus-nerve",
    linkLabel: "Understand the vagus nerve",
  },
  {
    title: "Vagus nerve stimulation",
    description:
      "A category pillar explaining implanted VNS, non-invasive VNS, ear-based approaches, and how a guided wellness device fits responsibly.",
    href: "/learn/vagus-nerve-stimulation",
    linkLabel: "Explore VNS",
  },
  {
    title: "Non-invasive VNS",
    description:
      "A practical category guide to nVNS, external stimulation, device differences, and how a guided wellness system should be evaluated.",
    href: "/learn/non-invasive-vagus-nerve-stimulation",
    linkLabel: "Explore non-invasive VNS",
  },
  {
    title: "Auricular VNS",
    description:
      "A plain-language guide to ear-based vagus nerve stimulation, taVNS, placement language, research context, and responsible product boundaries.",
    href: "/learn/auricular-vagus-nerve-stimulation",
    linkLabel: "Explore auricular VNS",
  },
  {
    title: "Recovery and regulation",
    description:
      "A broader explainer on restoration, capacity, resilience, and why rest is not always the same as real recovery.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
];

const foundationPages = [
  {
    title: "Parasympathetic nervous system",
    description:
      "Understand the calmer side of the nervous system and why unwinding, digestion, sleep, and restoration matter.",
    href: "/learn/parasympathetic-nervous-system",
    linkLabel: "See calmer states",
  },
  {
    title: "Vagal tone",
    description:
      "A more specific lens into resilience, flexibility, recovery quality, and how well the body seems able to return after stress.",
    href: "/learn/vagal-tone",
    linkLabel: "Explore vagal tone",
  },
  {
    title: "Fight, flight, freeze",
    description:
      "A practical explanation of protective states, urgency, shutdown, and why the body reacts so differently under pressure.",
    href: "/learn/fight-flight-freeze",
    linkLabel: "Understand protective states",
  },
];

const practicalPages = [
  {
    title: "How to calm your nervous system",
    description:
      "A practical page focused on what actually helps the body come down in real life.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "See what helps",
  },
  {
    title: "Why your body feels stuck in stress",
    description:
      "An explanation page for lingering activation and why the body can still feel “on” after the stressful thing is over.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Understand stuck stress",
  },
  {
    title: "Why you feel tired but can’t relax",
    description:
      "A practical explainer that connects exhaustion, activation, evening tension, sleep, and recovery.",
    href: "/learn/why-you-feel-tired-but-cant-relax",
    linkLabel: "Explore wired-but-tired",
  },
];

const recognitionPages = [
  {
    title: "Signs of a dysregulated nervous system",
    description:
      "A recognition page for patterns like overstimulation, poor sleep, shutdown, low resilience, and trouble winding down.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Recognize the signs",
  },
  {
    title: "What nervous system regulation feels like",
    description:
      "A felt-experience page for recognizing steadiness, better return, and less inner urgency.",
    href: "/learn/what-nervous-system-regulation-feels-like",
    linkLabel: "See what regulation feels like",
  },
  {
    title: "Emotional regulation and the nervous system",
    description:
      "A bridge page for overwhelm, reactivity, emotional shutdown, and how the body carries emotion in everyday life.",
    href: "/learn/emotional-regulation-and-the-nervous-system",
    linkLabel: "Explore emotional load",
  },
];

const pathwayCards = [
  {
    title: "Start with the foundations",
    description:
      "Begin with the big concepts if you want the clearest understanding of how stress, calm, sleep, and recovery fit together.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Start with regulation",
  },
  {
    title: "Start with something you recognize",
    description:
      "If the body feels wired, tired, overwhelmed, reactive, or difficult to settle, begin with the pages that map lived experience more directly.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Start with recognition",
  },
  {
    title: "Start with practical support",
    description:
      "If the main question is what actually helps, begin with the practical pages around calming, recovery, and everyday nervous system support.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Start with support",
  },
];

export default function LearnPage() {
    const structuredData = buildPageWithBreadcrumbStructuredData({
    title: "Learn | VNS, Non-Invasive VNS and Auricular VNS | Neuvago",
    description: "Explore practical explainers on vagus nerve stimulation, non-invasive VNS, auricular VNS, the vagus nerve, nervous system regulation, stress, sleep, and recovery.",
    path: "/learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
    ],
  });


  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              A clearer place to learn how vagus nerve stimulation, the nervous system, stress, sleep, and recovery fit together
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago Learn hub is designed to make complex topics easier to
              understand in everyday language. It connects foundational ideas
              like vagus nerve stimulation, non-invasive VNS, auricular VNS,
              the vagus nerve, and nervous system regulation with practical explainers on
              calming, recovery, emotional load, poor sleep, and
              the patterns people often recognize in real life.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/vagus-nerve-stimulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Start with VNS
              </Link>

              <Link
                href="/learn/auricular-vagus-nerve-stimulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Auricular VNS
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
                        Learning system
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        VNS, foundations, lived patterns, and practical support in one calmer hub
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Foundations
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          VNS, nVNS, regulation
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recognition
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Signs and felt experience
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Support
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Practical calming and return
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Core foundations
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Start with the pages that explain the bigger picture
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These are the strongest starting points when you want to
              understand how stress, calm, recovery, sleep, nervous system
              support, non-invasive VNS, auricular VNS, and device-guided routines fit together.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {parentPages.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Foundational concepts
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Go deeper into the concepts behind calmer states, resilience, and protective patterns
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These pages help clarify the specific concepts people often
              encounter once they move beyond the broad introduction pages.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            {foundationPages.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {item.linkLabel}
                </Link>
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
                Practical support pages
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Start here if the main question is what helps in real life
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                These pages connect learning with practical support, calmer
                transitions, and what the body may need in order to come back
                down.
              </p>
            </div>

            <div>
              <Link
                href="/conditions"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Browse conditions
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {practicalPages.map((item) => (
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Recognition and lived experience
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              These pages help people recognize patterns and make sense of what daily life actually feels like
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Not everyone begins with theory. Some people begin with
              recognition. These pages are designed for that stage.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {recognitionPages.map((item) => (
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Choose where to start
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A clearer way to begin based on the kind of question you actually have
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pathwayCards.map((item) => (
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

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Keep learning, then go deeper
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Continue into conditions, research, or the broader Neuvago system
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The Learn hub is designed to help people move from confusion
                into clearer understanding. From here, you can continue into
                conditions, research, or the broader product and app system.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/conditions"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Browse conditions
                </Link>

                <Link
                  href="/research"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  View research hub
                </Link>

                <Link
                  href="/how-it-works"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
