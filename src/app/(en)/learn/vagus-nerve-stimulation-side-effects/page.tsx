import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const path = "/learn/vagus-nerve-stimulation-side-effects";
const title =
  "Vagus Nerve Stimulation Side Effects: What Studies Report | Neuvago";
const description =
  "Understand side effects and tolerability reported in non-invasive VNS research, with clear boundaries between auricular, cervical and implanted methods.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO":
        "/no/kunnskap/bivirkninger-ved-ikke-invasiv-vagusnervestimulering",
      "x-default": path,
    },
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const methodBoundaries = [
  {
    title: "Auricular / taVNS",
    description:
      "Electrical stimulation is delivered through contact at the outer ear. Ear discomfort, tingling, local irritation and headache are among effects discussed in safety reviews of studied taVNS protocols.",
  },
  {
    title: "Cervical / neck-based nVNS",
    description:
      "Neck-based devices use a different stimulation site, device design and intended-use context. Their safety information belongs to the specific device and protocol studied.",
  },
  {
    title: "Implanted VNS",
    description:
      "Implanted VNS is a surgical clinical intervention with implanted hardware and a different risk profile. Its adverse-effect profile must not be transferred to an ear-based wellness device.",
  },
] as const;

const interpretationFactors = [
  {
    title: "Device and contact site",
    description:
      "Electrode shape, placement, pressure, contact preparation and the stimulated anatomical region can change both sensation and tolerability.",
  },
  {
    title: "Stimulation parameters",
    description:
      "Frequency, pulse width, intensity, duty cycle, session duration and total exposure are part of the safety context. A study result belongs to the protocol that produced it.",
  },
  {
    title: "Population",
    description:
      "Healthy volunteers and selected clinical groups do not represent every possible user. Inclusion and exclusion criteria matter when interpreting safety findings.",
  },
  {
    title: "How adverse events were collected",
    description:
      "A study that actively asks about a defined list of symptoms can detect more events than one that relies mainly on spontaneous reporting.",
  },
] as const;

const sources = [
  {
    label: "Kim et al. 2022",
    title: "Safety of transcutaneous auricular vagus nerve stimulation (taVNS)",
    detail:
      "A systematic review and meta-analysis covering 177 studies and 6,322 participants. Reporting quality varied, and common reported events included ear pain, headache and tingling.",
    href: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
  },
  {
    label: "Redgrave et al. 2018",
    title: "Safety and tolerability of transcutaneous VNS in humans",
    detail:
      "A systematic review of 51 studies and 1,322 participants. Local skin irritation and headache were among the more commonly reported effects, while study methods varied.",
    href: "https://pubmed.ncbi.nlm.nih.gov/30217648/",
  },
  {
    label: "Farmer et al. 2021",
    title: "Minimum reporting standards for tVNS research",
    detail:
      "Consensus recommendations emphasize reporting device, stimulation site, parameters, participant criteria, outcomes and side effects so studies can be interpreted and compared responsibly.",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
  },
] as const;

export default function VagusNerveStimulationSideEffectsPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    authorName: "Neuvago Editorial Team",
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    keywords: [
      "vagus nerve stimulation side effects",
      "non-invasive VNS side effects",
      "tVNS side effects",
      "taVNS side effects",
      "vagus nerve stimulation tolerability",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "VNS side effects", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-vns-side-effects" />

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Safety and tolerability
            </p>
            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Vagus nerve stimulation side effects: what non-invasive studies report
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Side effects cannot be interpreted from the letters “VNS” alone.
              Implanted VNS, neck-based non-invasive VNS and ear-based taVNS use
              different hardware, stimulation sites, protocols and populations.
              This guide focuses on how adverse effects and tolerability are
              reported in non-invasive research without turning category evidence
              into a product-specific safety claim.
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#6f6a61]">
              This is general educational information, not individual medical
              advice. Product-specific instructions and stop-use guidance take
              precedence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Short answer
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Most reported effects in non-invasive studies are mild or local, but the evidence is protocol-specific
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#5f5a52]">
              <p>
                Reviews of transcutaneous and auricular VNS research commonly
                describe local skin or ear sensations, discomfort, headache and
                tingling. Some studies report dizziness, nausea or other symptoms.
                The meaning of those observations depends on how the device was
                used and how adverse events were collected.
              </p>
              <p>
                “Well tolerated” does not mean “no side effects” or “safe for
                everyone.” It means the studied protocol was generally acceptable
                within the population and conditions that were actually tested.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            Method boundary
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Do not collapse implanted, cervical and auricular VNS into one side-effect profile
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {methodBoundaries.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/8 bg-white/65 p-7"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#1f1f1c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-white/55">
              Evidence snapshot
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The largest reviews are reassuring, but reporting quality is part of the result
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {sources.map((source) => (
              <article
                key={source.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7"
              >
                <p className="text-sm uppercase tracking-[0.14em] text-white/55">
                  {source.label}
                </p>
                <h3 className="mt-3 text-xl font-medium">{source.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {source.detail}
                </p>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-medium underline underline-offset-4"
                >
                  Open source
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            Why estimates differ
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Side-effect numbers only make sense when the study context stays attached
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {interpretationFactors.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/8 bg-white/65 p-7"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Sensation vs adverse effect
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Feeling the stimulation is not automatically a side effect
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52]">
              Mild tingling, prickling or pulsing at an electrode can be an
              expected stimulation sensation. Pain, persistent irritation or a
              symptom that makes a session unpleasant belongs in a different
              category. A local sensation also does not prove selective vagus
              target engagement or predict benefit.
            </p>
            <Link
              href="/learn/what-does-vagus-nerve-stimulation-feel-like"
              className="mt-6 inline-flex text-sm font-medium underline underline-offset-4"
            >
              Read the sensation guide
            </Link>
          </div>
          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8">
            <h3 className="text-2xl font-medium">A conservative practical boundary</h3>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">
              If stimulation becomes painful, unusually uncomfortable or makes
              you feel unwell, reduce, pause or stop and follow the instructions
              supplied with the device. Persistent or concerning symptoms should
              not be managed by simply pushing through.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e8ded0]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Continue with context
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Read side effects together with research safety and intended-use boundaries
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Safety and tolerability research",
                href: "/research/topics/safety-and-tolerability",
                text: "See the research-level evidence, reporting limitations and safety boundaries.",
              },
              {
                title: "Non-invasive VNS",
                href: "/learn/non-invasive-vagus-nerve-stimulation",
                text: "Understand how external VNS methods differ before comparing safety conclusions.",
              },
              {
                title: "Intended use",
                href: "/legal/intended-use",
                text: "Keep category research separate from Neuvago's own product positioning.",
              },
            ].map((item) => (
              <article
                key={item.href}
                className="rounded-[1.5rem] border border-black/8 bg-white/45 p-7"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-medium underline underline-offset-4"
                >
                  Continue
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
