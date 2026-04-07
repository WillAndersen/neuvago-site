import Link from "next/link"

export const metadata = {
  title:
    "Vagus Nerve Stimulation for Treatment-Resistant Depression (Rush et al., 2005) | Neuvago Research Library",
  description:
    "Read a structured summary of Rush et al. (2005), the influential clinical study on implanted vagus nerve stimulation for treatment-resistant depression.",
}

const studyDetails = [
  { label: "Authors", value: "A. John Rush et al." },
  { label: "Year", value: "2005" },
  { label: "Journal", value: "Biological Psychiatry" },
  { label: "Research field", value: "Psychiatry / Neuromodulation" },
  { label: "Main topic", value: "Vagus nerve stimulation for treatment-resistant depression" },
]

const keyIdeas = [
  {
    title: "A landmark clinical VNS study",
    description:
      "This paper became one of the most widely cited clinical investigations of implanted vagus nerve stimulation in psychiatry.",
  },
  {
    title: "Important for the history of vagus nerve stimulation research",
    description:
      "The study helped establish VNS as a serious neuromodulation approach investigated for severe treatment-resistant depression.",
  },
  {
    title: "A strong bridge into later non-invasive stimulation interest",
    description:
      "Later interest in auricular and non-invasive vagus nerve stimulation grew partly in the context of this earlier implanted VNS literature.",
  },
]

const sections = [
  {
    title: "Research objective",
    body: [
      "The objective of the study was to evaluate whether vagus nerve stimulation could provide clinical benefit for patients with severe depression who had not responded adequately to multiple previous treatments.",
      "The researchers aimed to compare outcomes between patients receiving active vagus nerve stimulation and those receiving treatment as usual.",
    ],
  },
  {
    title: "Study design",
    body: [
      "The study followed patients with treatment-resistant depression who received an implanted vagus nerve stimulation device.",
      "Key elements of the design included patients with severe treatment-resistant depression, device implantation, long-term follow-up of depressive symptoms, and comparison with treatment-as-usual control groups.",
      "Clinical outcomes were assessed using established psychiatric rating scales.",
    ],
  },
  {
    title: "Main findings",
    body: [
      "The study reported that patients receiving vagus nerve stimulation showed greater long-term improvement in depressive symptoms compared with those receiving treatment as usual.",
      "Some patients experienced meaningful reductions in depression severity over extended follow-up periods.",
      "An important point in the paper was that improvements often appeared gradually rather than immediately after treatment began.",
    ],
  },
  {
    title: "Possible mechanisms",
    body: [
      "Researchers proposed several possible mechanisms through which vagus nerve stimulation might influence mood regulation.",
      "These included changes in brainstem activity, modulation of limbic system networks, and effects on neurotransmitter systems involved in emotional processing.",
      "Brain imaging work has also suggested that vagus nerve stimulation may influence networks involving the prefrontal cortex and limbic regions.",
    ],
  },
  {
    title: "The role of the vagus nerve",
    body: [
      "The vagus nerve connects the brainstem with multiple organs throughout the body and plays a central role in autonomic regulation.",
      "Because it carries both sensory and regulatory signals, stimulation of this nerve can influence neural circuits involved in emotional and physiological regulation.",
      "This connection is one reason the vagus nerve became an important focus in neuromodulation research.",
    ],
  },
  {
    title: "Scientific impact of the study",
    body: [
      "The Rush et al. study became one of the most influential clinical investigations of vagus nerve stimulation in psychiatry.",
      "It contributed to growing scientific interest in neuromodulation approaches for treatment-resistant depression.",
      "The findings also helped support regulatory approval of implanted vagus nerve stimulation for certain cases of treatment-resistant depression in some jurisdictions.",
    ],
  },
  {
    title: "Subsequent research",
    body: [
      "Following this study, additional research examined both implanted and non-invasive forms of vagus nerve stimulation.",
      "Non-invasive approaches such as transcutaneous auricular vagus nerve stimulation later became an especially active area of investigation.",
      "Researchers have continued exploring how vagal stimulation may influence neural networks involved in mood regulation and emotional processing.",
    ],
  },
  {
    title: "Limitations and scientific discussion",
    body: [
      "Although the study reported promising results, several limitations were noted.",
      "The study population consisted of patients with severe treatment-resistant depression, meaning the findings may not generalize to all individuals with depression.",
      "Researchers also noted that improvements often occurred gradually and that more work was needed to understand mechanisms, timing, and broader clinical implications.",
    ],
  },
  {
    title: "Why this study matters",
    body: [
      "The Rush et al. paper helped demonstrate that neuromodulation approaches targeting the vagus nerve may influence mood regulation in some patients with treatment-resistant depression.",
      "This work contributed to expanding research on brain stimulation therapies and helped establish vagus nerve stimulation as a serious area of investigation in psychiatric neuroscience.",
      "Today, it remains one of the most important historical clinical references in the implanted VNS literature.",
    ],
  },
]

const relatedLinks = [
  {
    title: "Non-Invasive Access to the Vagus Nerve via the Ear: fMRI Evidence",
    description:
      "A key non-invasive auricular stimulation study showing how ear-based stimulation may influence brain regions associated with vagal pathways.",
    href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    linkLabel: "Read related study",
  },
  {
    title: "Vagus nerve",
    description:
      "A broader learning page on why the vagus nerve matters in conversations about regulation, stress, sleep, and recovery.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "Scientific Studies Library",
    description:
      "Return to the broader studies library to browse more individual research papers.",
      href: "/research/studies",
    linkLabel: "Back to studies library",
  },
  {
    title: "Research hub",
    description:
      "Go back to the broader evidence layer connecting foundational concepts, topic pathways, and individual studies.",
    href: "/research",
    linkLabel: "Back to research hub",
  },
]

export default function Rush2005VagusNerveStimulationDepressionPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Studies / Implanted VNS and Depression
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Vagus Nerve Stimulation for Treatment-Resistant Depression (Rush et al., 2005)
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The study by Rush and colleagues, published in 2005, is one of the
              most widely cited clinical investigations of vagus nerve stimulation
              in psychiatry. It examined whether implanted vagus nerve stimulation
              could improve symptoms in patients with treatment-resistant depression.
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
              One of the landmark clinical papers in implanted vagus nerve stimulation research
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This paper mattered because it helped establish vagus nerve
              stimulation as a serious neuromodulation approach investigated for
              severe treatment-resistant depression.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              It also remains important historically because later interest in
              non-invasive and auricular stimulation approaches emerged partly in
              the broader context created by the earlier implanted VNS literature.
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
                href="https://doi.org/10.1016/j.biopsych.2005.07.028"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm leading-7 text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                https://doi.org/10.1016/j.biopsych.2005.07.028
              </a>
              <div className="mt-4">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/16139580/"
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
                summarizes one influential clinical paper in implanted vagus nerve
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
                href="https://pubmed.ncbi.nlm.nih.gov/16139580/"
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
