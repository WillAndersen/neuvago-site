import Link from "next/link"

export const metadata = {
  title:
    "Research on the Vagus Nerve, Stress, Sleep and Nervous System Regulation | Neuvago",
  description:
    "Explore the Neuvago research hub with evidence-informed pathways around the vagus nerve, stress, sleep, recovery, emotional regulation, and nervous system regulation.",
}

const researchFoundations = [
  {
    title: "Vagus nerve",
    description:
      "Foundational research pathways around the vagus nerve, why it matters, and how it connects to broader conversations about stress, regulation, and recovery.",
    href: "/learn/vagus-nerve",
    linkLabel: "Start with vagus nerve",
  },
  {
    title: "Nervous system regulation",
    description:
      "A central research pathway for understanding how the body shifts between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Understand regulation",
  },
  {
    title: "Recovery and restoration",
    description:
      "A broader evidence pathway around recovery, capacity, resilience, and why rest is not always the same as deeper restoration.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const researchThemes = [
  {
    title: "Stress and overload",
    description:
      "Research pathways that help explain prolonged activation, overwhelm, physiological stress responses, and why the body may stay “on” longer than expected.",
  },
  {
    title: "Sleep and unwinding",
    description:
      "A calmer evidence layer around evenings, downshifting, restoration, and what shapes whether sleep feels reachable and restorative.",
  },
  {
    title: "Emotional regulation",
    description:
      "A research-informed view of overwhelm, reactivity, shutdown, emotional carrying capacity, and return after emotional load.",
  },
  {
    title: "Resilience and flexibility",
    description:
      "Themes connected to vagal tone, recovery quality, adaptability, and how supported the system feels across time and context.",
  },
]

const libraryStructure = [
  {
    title: "Core research",
    description:
      "Foundational concepts and key themes that support the larger Neuvago worldview and anchor the site’s most important learning clusters.",
  },
  {
    title: "Topic research",
    description:
      "Focused evidence pathways around major themes like stress, sleep, vagus nerve, regulation, recovery, emotional load, and calmer states.",
  },
  {
    title: "Scientific studies library",
    description:
      "A growing library of individual study summaries designed to make published research easier to browse, understand, and place in context.",
  },
  {
    title: "References and evidence layers",
    description:
      "A growing structure for studies, source groupings, and evidence-informed reading that strengthens authority over time.",
  },
]

const featuredStudies = [
  {
    title: "Porges, 1995",
    subtitle: "Polyvagal theory",
    description:
      "A landmark framework linking vagal pathways with safety, stress responses, social engagement, and autonomic state shifts.",
    href: "/research/studies/porges-1995-polyvagal-theory",
  },
  {
    title: "Thayer & Lane, 2000",
    subtitle: "Neurovisceral integration",
    description:
      "An influential model connecting emotional regulation, autonomic flexibility, HRV, and vagal regulation.",
    href: "/research/studies/thayer-lane-2000-neurovisceral-integration",
  },
  {
    title: "Task Force, 1996",
    subtitle: "Heart rate variability standards",
    description:
      "The foundational methodological reference for HRV research and one of the core papers behind autonomic regulation research.",
    href: "/research/studies/task-force-1996-heart-rate-variability-standards",
  },
  {
    title: "Tracey, 2002",
    subtitle: "Inflammatory reflex",
    description:
      "A landmark concept describing how neural pathways, including the vagus nerve, may participate in immune regulation.",
    href: "/research/studies/inflammatory-reflex-tracey-2002",
  },
  {
    title: "Frangos et al., 2015",
    subtitle: "Auricular vagus nerve stimulation and fMRI",
    description:
      "Important neuroimaging evidence supporting non-invasive access to vagal pathways through stimulation of the ear.",
    href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
  },
  {
    title: "Mayer, 2011",
    subtitle: "Gut–brain axis communication",
    description:
      "A major review explaining how neural, hormonal, and immune pathways connect the gut and brain, including vagal signaling.",
    href: "/research/studies/mayer-2011-gut-brain-axis",
  },
]

const researchPathways = [
  {
    title: "From research into Learn",
    description:
      "The research layer should help explain why the ideas in Learn exist, giving more depth and authority to the site’s educational pages.",
    href: "/learn",
    linkLabel: "Go to learning hub",
  },
  {
    title: "From research into Conditions",
    description:
      "The research layer should also support the site’s condition pages, helping users move from symptom-level understanding into broader context.",
    href: "/conditions",
    linkLabel: "Browse conditions",
  },
  {
    title: "From research into the broader system",
    description:
      "Over time, Research should help position Neuvago as a serious authority brand by connecting product, app, learning, and evidence without overclaiming.",
    href: "/how-it-works",
    linkLabel: "See how it connects",
  },
]

const principles = [
  {
    title: "Evidence-informed, not overclaimed",
    description:
      "The research layer should build trust through careful interpretation, not through dramatic claims or overstated promises.",
  },
  {
    title: "Clarity over jargon",
    description:
      "The purpose is to make important topics easier to understand without flattening them into hype or making them inaccessible.",
  },
  {
    title: "Useful in everyday life",
    description:
      "Research is most valuable here when it helps people better understand what they feel and how stress, calm, sleep, recovery, and support fit together.",
  },
]

export default function ResearchPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              An evidence-informed research hub for the vagus nerve, stress, sleep, recovery, and nervous system regulation
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago research hub is designed to support deeper
              understanding of the ideas behind the site. It connects the vagus
              nerve, nervous system regulation, stress, sleep, recovery,
              emotional regulation, and calmer daily support through a more
              structured evidence layer.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Go to learning hub
              </Link>

              <Link
                href="/conditions"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Browse conditions
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
                        Evidence layer
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A structured research foundation behind the broader Neuvago knowledge universe
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Foundations
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Vagus nerve, regulation, recovery
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Studies
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Individual published papers
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Pathways
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Learn, conditions, authority
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
              Core research foundations
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The strongest research pathways support the site’s most important learning clusters
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These are the major foundations the research layer should support
              most clearly. Together, they anchor the broader Neuvago authority structure.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {researchFoundations.map((item) => (
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
              Main research themes
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Organize the research layer around the themes people actually care about
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The research hub should not feel abstract. It should mirror the
              real questions people bring into the site around stress, sleep,
              recovery, emotional load, and nervous system flexibility.
            </p>
          </div>

          <div className="grid gap-6">
            {researchThemes.map((item) => (
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
                Research library structure
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Build the research hub as a growing authority layer, not just a generic library
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Over time, the research layer should grow into a clearly
                organized system with strong foundations, topic pathways,
                individual studies, and deeper evidence groupings.
              </p>
            </div>

            <div>
              <Link
                href="/learn"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Go to learning hub
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {libraryStructure.map((item) => (
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
                Scientific Studies Library
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                A growing library of published studies on the vagus nerve, autonomic regulation, and related research themes
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                In addition to broader research overviews, Neuvago is building a
                structured studies library that summarizes individual published
                papers. This helps readers move from big-picture concepts into
                specific studies, methods, findings, limitations, and references. 
              </p>
            </div>

            <div>
              <Link
                href="/research/studies"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Browse studies library
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredStudies.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <p className="text-sm uppercase tracking-[0.14em] text-[#8a847b]">
                  {item.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  Read study summary
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/research/studies"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Browse studies library
            </Link>

            <Link
              href="/learn/vagus-nerve"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Start with vagus nerve
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Research principles
            </p>

            <div className="mt-8 space-y-5">
              {principles.map((item) => (
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
                Research should build trust, not confusion
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The purpose is to support clarity, seriousness, and better understanding over time.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How research supports the broader site
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Research is one of the key layers that turns Neuvago from a product site into an authority site
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The role of the research layer is not only to collect references.
              It is to give deeper structure and trust to the ideas expressed
              throughout Learn, Conditions, Product, App, and the broader
              knowledge universe.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That means the research hub should increasingly feel like a
              serious evidence-informed layer beneath the rest of the site, not
              a detached section with no real relationship to the user journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Go to learning hub
              </Link>

              <Link
                href="/conditions"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Browse conditions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research pathways
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Use research as a supporting layer for learning, conditions, and the broader Neuvago system
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {researchPathways.map((item) => (
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
                Explore the evidence layer, then go deeper
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                A research hub designed to strengthen learning, conditions, and the larger Neuvago authority system
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The Neuvago research hub is built to support stronger authority
                over time — not by overclaiming, but by organizing the deeper
                themes behind stress, sleep, recovery, vagus nerve topics,
                emotional load, nervous system regulation, and individual published studies more clearly.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/research/studies"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Browse studies library
                </Link>

                <Link
                  href="/learn"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Go to learning hub
                </Link>

                <Link
                  href="/conditions"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Browse conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
