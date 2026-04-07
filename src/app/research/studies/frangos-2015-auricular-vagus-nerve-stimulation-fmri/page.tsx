import Link from "next/link"

export const metadata = {
  title:
    "Non-Invasive Access to the Vagus Nerve via the Ear: fMRI Evidence (Frangos et al., 2015) | Neuvago Research Library",
  description:
    "Read a structured summary of Frangos et al. (2015), the influential fMRI study showing that auricular stimulation of the ear may influence brain regions associated with vagal pathways.",
}

const studyDetails = [
  { label: "Authors", value: "E. Frangos, J. Ellrich, B. Komisaruk" },
  { label: "Year", value: "2015" },
  { label: "Journal", value: "Brain Stimulation" },
  { label: "Research field", value: "Neuroscience / Neuromodulation" },
  { label: "Main topic", value: "Transcutaneous auricular vagus nerve stimulation" },
]

const keyIdeas = [
  {
    title: "A landmark non-invasive stimulation study",
    description:
      "This paper provided important neuroimaging evidence that stimulation of the ear may influence brain regions associated with vagal pathways.",
  },
  {
    title: "A key bridge between theory and device-relevant research",
    description:
      "The study helped strengthen scientific interest in auricular stimulation as a non-invasive access point for vagal signaling.",
  },
  {
    title: "Highly relevant to modern taVNS research",
    description:
      "Frangos et al. became one of the most widely cited studies in the literature on transcutaneous auricular vagus nerve stimulation.",
  },
]

const sections = [
  {
    title: "Research objective",
    body: [
      "The aim of the study was to determine whether electrical stimulation applied to the ear could activate brain regions associated with vagus nerve pathways.",
      "The researchers focused on the auricular branch of the vagus nerve, which provides a possible non-invasive access point for vagal stimulation through specific regions of the external ear.",
    ],
  },
  {
    title: "Study design",
    body: [
      "The researchers used functional magnetic resonance imaging (fMRI) to measure brain activity during auricular vagus nerve stimulation.",
      "Participants received electrical stimulation applied to specific ear regions believed to be innervated by the auricular branch of the vagus nerve.",
      "Brain activity during stimulation was compared with control conditions in order to identify changes associated with vagal pathway activation.",
    ],
  },
  {
    title: "Main findings",
    body: [
      "The study found that stimulation of the auricular branch of the vagus nerve produced measurable activation in several brain regions associated with vagal pathways.",
      "In particular, the researchers observed activation in the nucleus tractus solitarius and other brainstem regions involved in autonomic regulation.",
      "These findings supported the idea that non-invasive stimulation through the ear may influence neural circuits associated with the vagus nerve.",
    ],
  },
  {
    title: "The auricular branch of the vagus nerve",
    body: [
      "The auricular branch of the vagus nerve provides sensory innervation to parts of the outer ear.",
      "Because this branch is accessible through the skin, researchers have explored whether electrical stimulation applied to the ear may influence vagal signaling without requiring implanted devices.",
      "This concept forms an important basis for transcutaneous auricular vagus nerve stimulation, often abbreviated as taVNS.",
    ],
  },
  {
    title: "Scientific impact of the study",
    body: [
      "The Frangos et al. study provided important neuroimaging evidence supporting the idea that non-invasive vagus nerve stimulation may influence brain activity.",
      "This helped strengthen scientific interest in auricular stimulation approaches and contributed to a rapidly expanding research area.",
      "Since its publication, the study has been widely cited in research on taVNS, neuromodulation, autonomic regulation, and brainstem pathways associated with vagal signaling.",
    ],
  },
  {
    title: "Subsequent research",
    body: [
      "Following this study, researchers conducted many additional investigations into transcutaneous auricular vagus nerve stimulation.",
      "Later studies explored how non-invasive stimulation may influence stress responses, autonomic balance, emotional regulation, and related physiological processes.",
      "Although the field continues to evolve, this study remains one of the most important early pieces of evidence supporting auricular access to vagal pathways.",
    ],
  },
  {
    title: "Limitations and scientific discussion",
    body: [
      "As with many early neuroimaging studies, the research involved a relatively small group of participants.",
      "Further research has continued to explore stimulation parameters, target ear regions, mechanisms of action, and the relationship between neuroimaging findings and real-world physiological outcomes.",
      "This means the study is best understood as an important early contribution rather than a final answer to how auricular vagus nerve stimulation works in all contexts.",
    ],
  },
  {
    title: "Why this study matters",
    body: [
      "The Frangos et al. study helped demonstrate that non-invasive stimulation applied to the ear may activate brain regions associated with vagus nerve pathways.",
      "That finding made it much easier to take auricular stimulation research seriously as a legitimate area of investigation in neuroscience and neuromodulation.",
      "Today, the paper remains one of the key references behind modern research on transcutaneous auricular vagus nerve stimulation.",
    ],
  },
]

const relatedLinks = [
  {
    title: "Vagus Nerve Stimulation for Treatment-Resistant Depression",
    description:
      "A landmark implanted VNS study that helps place non-invasive auricular stimulation into the broader VNS research history.",
    href: "/research/studies/rush-2005-vagus-nerve-stimulation-depression",
    linkLabel: "Read related study",
  },
  {
    title: "Vagus nerve",
    description:
      "A broader learning page on why the vagus nerve matters in conversations about stress, sleep, recovery, and nervous system support.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "How Neuvago works",
    description:
      "A broader page showing how device, app, and calmer daily support fit together as one connected system.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
  {
    title: "Scientific Studies Library",
    description:
      "Return to the broader studies library to browse more individual research papers.",
    href: "/research/studies",
    linkLabel: "Back to studies library",
  },
]

export default function Frangos2015AuricularVagusNerveStimulationFmriPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Studies / Auricular Vagus Nerve Stimulation
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Non-Invasive Access to the Vagus Nerve via the Ear: fMRI Evidence (Frangos et al., 2015)
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The study by Frangos and colleagues, published in 2015, investigated
              whether stimulation of the auricular branch of the vagus nerve through
              the ear could influence brain activity. It became one of the most
              important early neuroimaging studies supporting non-invasive auricular
              vagus nerve stimulation research.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research/studies"
                className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Back to studies library
              </Link>

              <Link
                href="/research"
                className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Back to research hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Abstracted significance
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              One of the key early studies supporting non-invasive auricular access to vagal pathways
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This paper mattered because it gave the field an important kind of
              evidence: neuroimaging evidence suggesting that stimulation of the
              ear may influence brain regions associated with vagal pathways.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That made it an especially influential bridge between broader vagus
              nerve theory and device-relevant research on auricular stimulation.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Citation details
            </p>

            <div className="mt-7 space-y-4">
              {studyDetails.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/6 bg-[#f8f5f0] px-5 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-[#8a847b]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-7 text-[#3d3a35] md:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-black/6 bg-[#f8f5f0] p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#8a847b]">
                DOI
              </p>
              <a
                href="https://doi.org/10.1016/j.brs.2014.11.018"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm leading-7 text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                https://doi.org/10.1016/j.brs.2014.11.018
              </a>
              <div className="mt-4">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/25573069/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 hover:underline"
                >
                  View study on PubMed
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Key ideas
            </p>

            <div className="mt-8 space-y-5">
              {keyIdeas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-black/8 bg-white/70 p-7 shadow-[0_8px_24px_rgba(31,31,28,0.03)]"
                >
                  <h2 className="text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52] md:text-[0.96rem]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Library note
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
              <p className="text-base leading-8 text-[#5f5a52] md:text-lg">
                This page is part of the Neuvago Scientific Studies Library and
                summarizes one influential early study in auricular vagus nerve
                stimulation research. It is intended as a structured guide to the
                paper’s relevance and context, not a replacement for the original article.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl font-medium tracking-[-0.02em] text-[#1f1f1c] md:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-5">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Related studies and research paths
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Continue with related stimulation research and broader learning pages
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedLinks.map((item) => (
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
                <Link
                  href={item.href}
                  className="mt-7 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
                >
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-4xl border-t border-black/8 pt-8">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research disclaimer
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This page summarizes scientific research for educational
              purposes. It does not constitute medical advice, diagnosis, or
              treatment recommendations. Medical concerns should always be
              discussed with qualified healthcare professionals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research/studies"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Back to studies library
              </Link>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/25573069/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                View on PubMed
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
