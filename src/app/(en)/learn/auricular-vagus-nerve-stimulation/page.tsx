import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { AuthorityVisualSection, PlainEnglishSummary } from "@/components/authority";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";

const title =
  "Auricular Vagus Nerve Stimulation | taVNS and Ear VNS | Neuvago";
const description =
  "Learn what auricular vagus nerve stimulation is, how taVNS relates to ear-based non-invasive VNS, and how to interpret ear stimulation responsibly.";
const path = "/learn/auricular-vagus-nerve-stimulation";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/aurikulaer-vagusnervestimulering",
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

const quickAnswers = [
  {
    title: "Auricular VNS means ear-based stimulation",
    description:
      "Auricular vagus nerve stimulation focuses on regions of the outer ear associated with auricular vagal pathways. It is commonly discussed as taVNS: transcutaneous auricular vagus nerve stimulation.",
  },
  {
    title: "It is part of the non-invasive VNS family",
    description:
      "taVNS sits inside the wider category of non-invasive VNS and transcutaneous VNS. It is different from implanted clinical VNS and should not be treated as automatically interchangeable with other device types.",
  },
  {
    title: "Placement, comfort, and claims matter",
    description:
      "A useful ear-based VNS explanation should clarify where stimulation is applied, how sessions are guided, what the user may feel, and what the product is not claiming to diagnose or treat.",
  },
];

const termCards = [
  {
    title: "Auricular VNS",
    label: "Ear-based VNS",
    description:
      "A plain-language term for stimulation approaches that use parts of the outer ear as the access point for vagus nerve-related pathways.",
  },
  {
    title: "taVNS",
    label: "Transcutaneous auricular VNS",
    description:
      "The technical abbreviation often used in research. It means stimulation through the skin at auricular, or ear-based, locations.",
  },
  {
    title: "ABVN",
    label: "Auricular branch",
    description:
      "A commonly referenced anatomical pathway in ear-based VNS discussions. Consumer education should treat it carefully and avoid overstating certainty.",
  },
  {
    title: "Ear VNS device",
    label: "User search language",
    description:
      "Many people search in simpler terms, such as ear vagus nerve stimulation or vagus nerve stimulation through the ear, before they know the acronym taVNS.",
  },
];

const whyEar = [
  {
    title: "The ear is accessible without surgery",
    description:
      "Ear-based stimulation can be delivered externally, which makes it easier to understand as a non-invasive category than implanted clinical VNS.",
  },
  {
    title: "It gives the category a concrete location",
    description:
      "VNS can sound abstract. Auricular VNS makes the discussion more practical by connecting the method to an external placement people can understand.",
  },
  {
    title: "It has a growing research vocabulary",
    description:
      "Terms like taVNS, stimulation site, intensity, pulse width, session duration, sham placement, and target engagement appear frequently in auricular VNS research.",
  },
  {
    title: "It needs careful product language",
    description:
      "Ear-based does not mean every sensation, placement, or device has the same evidence. The method should be explained with the same boundaries as the broader VNS category.",
  },
];

const whatToEvaluate = [
  {
    title: "Where stimulation is applied",
    description:
      "Ear region matters. A responsible explanation should avoid treating every part of the ear as if it had the same relationship to vagal pathways.",
  },
  {
    title: "How contact and comfort are handled",
    description:
      "For everyday use, a device should make placement, skin contact, comfort, stop-use guidance, and session consistency easier rather than making the user guess.",
  },
  {
    title: "What settings are used",
    description:
      "Intensity, frequency, pulse width, session length, and total exposure can all change how a study or device experience should be interpreted.",
  },
  {
    title: "What claims are made",
    description:
      "The safest language for a wellness product is support, guidance, comfort, routine, and regulation context — not treatment promises.",
  },
];

const evidenceSignals = [
  {
    title: "Auricular access and fMRI evidence",
    source: "Frangos et al., 2015",
    description:
      "A foundational fMRI paper often cited in discussions of non-invasive stimulation of external-ear regions and central vagal projections.",
    href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    linkLabel: "Read Neuvago summary",
  },
  {
    title: "Transcutaneous VNS methods",
    source: "Research topic",
    description:
      "A method-focused page explaining tVNS, taVNS, stimulation sites, protocol variables, reporting standards, and interpretation limits.",
    href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "View tVNS topic",
  },
  {
    title: "Safety and tolerability",
    source: "Research topic",
    description:
      "A trust-focused page on adverse events, study populations, contraindication awareness, comfort, and responsible non-invasive VNS boundaries.",
    href: "/research/topics/safety-and-tolerability",
    linkLabel: "View safety topic",
  },
];

const boundaries = [
  {
    title: "Ear sensation is not proof of mechanism",
    description:
      "Tingling, pressure, warmth, or comfort can be part of a user experience, but sensation alone does not prove a specific vagal mechanism.",
  },
  {
    title: "taVNS findings are protocol-specific",
    description:
      "A study using one ear location, parameter set, sham design, or population should not be generalized to every device or every wellness goal.",
  },
  {
    title: "Medical contexts need clinical guidance",
    description:
      "People with implanted electronic devices, heart rhythm concerns, seizure history, pregnancy-related questions, medical conditions, or active treatment plans should speak with a qualified clinician before use.",
  },
];

const neuvagoFit = [
  {
    title: "A calmer category explanation",
    description:
      "Neuvago can explain ear-based non-invasive VNS in a way that is practical and premium without sounding clinical or overclaiming.",
  },
  {
    title: "Guided sessions instead of guesswork",
    description:
      "The product story should connect placement, session structure, app guidance, comfort, and consistency into one clear user experience.",
  },
  {
    title: "Wellness boundaries stay visible",
    description:
      "Auricular VNS can support Neuvago’s authority, but it should continue to be framed as wellness support rather than disease treatment.",
  },
];

const internalPathways = [
  {
    title: "Ear-based vs. neck-based VNS",
    description:
      "Compare auricular taVNS with cervical nVNS without treating the two access sites, protocols, or evidence bases as interchangeable.",
    href: "/learn/ear-vs-neck-vagus-nerve-stimulation",
    linkLabel: "Open the method comparison",
  },
  {
    title: "Non-invasive VNS guide",
    description:
      "Step back to the broader device-category guide covering nVNS, tVNS, taVNS, external stimulation, and wellness boundaries.",
    href: "/learn/non-invasive-vagus-nerve-stimulation",
    linkLabel: "Read non-invasive VNS guide",
  },
  {
    title: "Vagus nerve stimulation overview",
    description:
      "Understand the broader VNS category, including implanted systems, non-invasive approaches, and responsible product language.",
    href: "/learn/vagus-nerve-stimulation",
    linkLabel: "Read VNS overview",
  },
  {
    title: "Transcutaneous VNS guide",
    description:
      "Step back to the broader tVNS method layer, including stimulation through the skin, taVNS, nVNS, and why protocol details matter.",
    href: "/learn/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "Read tVNS guide",
  },
  {
    title: "Transcutaneous VNS research",
    description:
      "Go deeper into tVNS, taVNS, protocol variables, target engagement, and how method details shape research interpretation.",
    href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "View tVNS research",
  },
  {
    title: "Auricular VNS research",
    description:
      "Move from the plain-language guide into the focused research topic on taVNS anatomy, stimulation sites, parameters, controls, target engagement, safety, and evidence limits.",
    href: "/research/topics/auricular-vagus-nerve-stimulation",
    linkLabel: "View auricular research",
  },
  {
    title: "See how Neuvago works",
    description:
      "Move from education into the practical device-and-app explanation: placement, session guidance, comfort, and daily routine design.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
  {
    title: "Explore the product",
    description:
      "Understand Neuvago as a non-invasive vagus nerve stimulator and app system designed for calm, repeatable wellness support.",
    href: "/product",
    linkLabel: "Explore Neuvago",
  },
];

const externalReferences = [
  {
    title:
      "Non-invasive access to the vagus nerve central projections via electrical stimulation of the external ear",
    source: "Frangos et al., Brain Stimulation, 2015",
    href: "https://pubmed.ncbi.nlm.nih.gov/25573069/",
  },
  {
    title:
      "Laboratory administration of transcutaneous auricular vagus nerve stimulation: technique, targeting, and considerations",
    source: "Badran et al., Journal of Visualized Experiments, 2019",
    href: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
  },
  {
    title:
      "International consensus based review and recommendations for minimum reporting standards in tVNS research",
    source: "Farmer et al., Frontiers in Human Neuroscience, 2021",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
  },
  {
    title:
      "Safety of transcutaneous auricular vagus nerve stimulation: a systematic review and meta-analysis",
    source: "Kim et al., Scientific Reports, 2022",
    href: "https://www.nature.com/articles/s41598-022-25864-1",
  },
];

function TextCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-black/5 bg-white/60 p-6 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <h3 className="text-xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
        {description}
      </p>
    </article>
  );
}

function TermCard({
  title,
  label,
  description,
}: {
  title: string;
  label: string;
  description: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-black/5 bg-white/60 p-6 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
        {label}
      </p>
      <h3 className="mt-3 text-xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
        {description}
      </p>
    </article>
  );
}

function LinkCard({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <article className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
        {description}
      </p>
      <Link
        href={href}
        className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
      >
        {linkLabel}
      </Link>
    </article>
  );
}

function ExternalReferenceCard({
  title,
  source,
  href,
}: {
  title: string;
  source: string;
  href: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-black/5 bg-white/60 p-6 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
        {source}
      </p>
      <h3 className="mt-3 text-xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
      >
        Open source
      </a>
    </article>
  );
}

export default function AuricularVagusNerveStimulationPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: authorityEditorialDates.vnsClusterPublished,
    dateModified: authorityEditorialDates.vnsClusterModified,
    keywords: [
      "auricular vagus nerve stimulation",
      "transcutaneous auricular vagus nerve stimulation",
      "taVNS",
      "ear vagus nerve stimulation",
      "ear VNS",
      "auricular branch of the vagus nerve",
      "non-invasive vagus nerve stimulation",
      "vagus nerve stimulator",
      "tVNS",
      "Neuvago",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Auricular Vagus Nerve Stimulation", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="learn-auricular-vagus-nerve-stimulation"
      />

      <section className="border-b border-black/5">
        <div className="mx-auto grid lg:min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Auricular VNS
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Auricular vagus nerve stimulation, explained without the jargon
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Auricular vagus nerve stimulation is the ear-based part of the
              non-invasive VNS conversation. It is often called taVNS, short for
              transcutaneous auricular vagus nerve stimulation, and it is one of
              the key terms people encounter when they research ear-based vagus
              nerve stimulation.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This guide explains what the term means, how it relates to tVNS
              and non-invasive VNS, what to look for in ear-based stimulation,
              and why Neuvago keeps the language practical, calm, and
              responsible.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/topics/transcutaneous-vagus-nerve-stimulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View tVNS research
              </Link>

              <Link
                href="/learn/non-invasive-vagus-nerve-stimulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Non-invasive VNS guide
              </Link>
            </div>
          </div>

          <div className="hidden rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur lg:block">
            <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                      Ear-based VNS
                    </p>
                    <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                      A practical bridge between research vocabulary and the
                      everyday device experience
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="text-sm font-medium text-[#1f1f1c]">
                        taVNS
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                        Transcutaneous auricular vagus nerve stimulation
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Ear-based
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          External placement
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Guided
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Comfort and routine first
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthorityVisualSection
        eyebrow="Ear-based VNS visual"
        title="Auricular VNS explained without a clinical scene"
        description="Ear-based VNS can be explained visually without electrodes, wires, or body placement: an abstract education layer, a clear device, and careful language."
        image={{ src: "/images/neuvago/auricular-vns-education-desktop.webp", alt: "Neuvago device beside an abstract ear-based auricular VNS education card." }}
      />

      <PlainEnglishSummary
        title="Auricular VNS is the ear-based part of the VNS conversation"
        description="Ear-based VNS is often discussed as taVNS. It is a useful concept because it gives non-invasive VNS a concrete location, but it still needs careful explanation around placement, comfort, evidence, and claims."
        points={[
          { title: "Ear-based access", description: "Auricular VNS focuses on parts of the outer ear associated with auricular vagal pathway discussions." },
          { title: "Not every ear location is the same", description: "Placement language should stay careful and avoid implying that every ear-based method has the same evidence." },
          { title: "Comfort is part of trust", description: "For daily use, contact, sensation, stop-use guidance, and a clear routine matter as much as technical terminology." },
        ]}
        primaryHref="/research/topics/transcutaneous-vagus-nerve-stimulation"
        primaryLabel="View tVNS research"
        secondaryHref="/learn/non-invasive-vagus-nerve-stimulation"
        secondaryLabel="nVNS guide"
      />

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Simple answer
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Auricular VNS is the ear-based branch of non-invasive VNS
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The word auricular means related to the ear. In this context,
              auricular VNS usually refers to stimulation applied to specific
              outer-ear regions that are discussed in relation to auricular
              vagal pathways. In research, this is commonly described as taVNS.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That does not mean every ear device, placement, sensation, side-effect profile, or
              protocol is equivalent. A good explanation should make the method
              clear while keeping evidence, safety, intended use, and product
              claims in the right lane.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {quickAnswers.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Terms to know
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The same topic appears under several names
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Search language is not always the same as research language.
              Someone may search for ear VNS, auricular VNS, taVNS, or
              non-invasive vagus nerve stimulation and be trying to understand
              the same broad category.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {termCards.map((item) => (
              <TermCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why the ear matters
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Ear-based stimulation makes non-invasive VNS easier to understand
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The ear gives the category a concrete external access point. That
              makes auricular VNS especially important for user education,
              because it connects a technical research term to something people
              can visualize: placement, comfort, session guidance, and routine.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whyEar.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              What to evaluate
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A better question than “does ear VNS work?” is “what exactly is being done?”
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Ear-based VNS becomes clearer when you separate placement,
              stimulation settings, session guidance, study context, and the
              claims being made. Those details protect trust and make the
              product category easier to compare.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatToEvaluate.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research context
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Auricular VNS belongs inside the broader tVNS evidence system
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago’s role is not to turn every auricular VNS study into a
              product promise. The stronger trust position is to explain the
              research area, connect it to the right topic pages, and keep the
              difference between evidence context and product claims visible.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {evidenceSignals.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Responsible interpretation
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A calm page should make the boundaries easier to see
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Auricular VNS is valuable for Neuvago’s authority because it is
              specific. But specificity should not become overconfidence. The
              best education separates what the category means from what a
              particular product is allowed to promise.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            {boundaries.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Neuvago context
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              For Neuvago, auricular VNS is best explained as guided, non-invasive wellness support
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The commercial bridge should be calm and transparent: explain the
              method, show how guidance works, keep comfort central, and point
              users toward the product only after the category is clear.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {neuvagoFit.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Continue the pathway
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Move from ear-based VNS into research, safety, and the Neuvago system
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {internalPathways.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Selected external references
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Research to read with protocol details in mind
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These sources help frame auricular VNS as an evolving research
              area. They should be interpreted by method, population, control
              condition, and stimulation parameters.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {externalReferences.map((item) => (
              <ExternalReferenceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Practical next step
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Understand the method first, then see how the device-and-app experience works
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                If you are comparing ear-based vagus nerve stimulation devices,
                the next useful step is to understand placement, session
                guidance, comfort, and how the product explains its intended use.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/how-it-works"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  See how it works
                </Link>

                <Link
                  href="/product"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore Neuvago
                </Link>

                <Link
                  href="/legal/intended-use"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Review intended use
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
