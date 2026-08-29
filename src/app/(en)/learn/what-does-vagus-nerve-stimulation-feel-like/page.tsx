import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { productV2Content } from "@/content/product-v2";
import {
  buildAuthorityPageStructuredData,
  buildFAQStructuredData,
} from "@/lib/seo/structured-data";

const title = "What Does Vagus Nerve Stimulation Feel Like? | Neuvago";
const description =
  "Learn what non-invasive auricular vagus nerve stimulation may feel like at the ear, how intensity and contact affect sensation, and when to reduce or stop.";
const path = "/learn/what-does-vagus-nerve-stimulation-feel-like";
const publishedAt = "2026-08-28";
const modifiedAt = "2026-08-28";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
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

const shortAnswers = [
  "Ear-based non-invasive VNS is usually noticed locally at the outer ear as light tingling, prickling, tapping or pulsing.",
  "The exact feel varies with the stimulation pattern, intensity, earpiece contact and individual sensitivity.",
  "The level should be raised gradually and kept noticeable but comfortable. Stronger intensity is not necessarily better.",
  "An unpleasant feeling, discomfort or feeling unwell is a reason to reduce, pause or stop and follow the supplied instructions.",
] as const;

const sensationScale = [
  {
    level: "0",
    title: "Little or no feedback",
    description:
      "Before increasing intensity, check the earpiece fit, contact surfaces and the supplied setup instructions. Poor contact can change what you feel.",
    action: "Check contact first",
  },
  {
    level: "1",
    title: "Light and comfortable",
    description:
      "A mild local sensation may feel like soft tingling, fine prickling or a gentle tapping at the contact area.",
    action: "Stay gradual",
  },
  {
    level: "2",
    title: "Clearly noticeable and comfortable",
    description:
      "A clearer pulse can still sit within a comfortable range. The correct level is personal and does not need to feel strong.",
    action: "Comfort is the limit",
  },
  {
    level: "3",
    title: "Unpleasant, distracting or unwell",
    description:
      "Reduce the level, pause or stop. If discomfort continues, stop using the device and follow the supplied support guidance.",
    action: "Do not push through",
  },
] as const;

const distinctions = [
  {
    term: "Sensation",
    definition:
      "What you notice at the ear or contact area during stimulation, such as tingling, prickling or pulsing.",
  },
  {
    term: "Comfort",
    definition:
      "Whether the sensation remains acceptable and easy to tolerate. Comfort is a practical boundary, not evidence of benefit.",
  },
  {
    term: "Intensity",
    definition:
      "The adjustable device setting. A number on one device cannot be assumed to equal the same output or experience on another.",
  },
  {
    term: "Effect",
    definition:
      "Any outcome noticed during or after use. An outcome cannot be inferred from how strong the stimulation feels.",
  },
  {
    term: "Target engagement",
    definition:
      "A separate research question about which neural structures or pathways are engaged. Local sensation does not answer it by itself.",
  },
] as const;

const sensationFactors = [
  {
    title: "Stimulation pattern",
    description:
      "Pulse timing, pauses and waveform characteristics can make one mode feel softer, denser, slower or more distinct than another.",
  },
  {
    title: "Intensity setting",
    description:
      "Increasing the setting generally makes the stimulation easier to notice, but the useful boundary remains noticeable and comfortable.",
  },
  {
    title: "Earpiece contact",
    description:
      "Fit, even contact, clean contact surfaces and the preparation described in the instructions can change how consistently the stimulation is felt.",
  },
  {
    title: "Individual sensitivity",
    description:
      "People differ in skin sensitivity, ear shape and preferred level. A comfortable setting is therefore individual rather than universal.",
  },
] as const;

const decisionSteps = [
  {
    label: "1",
    title: "Prepare contact",
    description:
      "Use the earpiece and contact preparation exactly as described in the supplied instructions.",
  },
  {
    label: "2",
    title: "Begin low",
    description:
      "Select the intended mode and increase intensity slowly rather than jumping to a high setting.",
  },
  {
    label: "3",
    title: "Check comfort",
    description:
      "A noticeable but comfortable sensation can be enough. There is no need to chase a stronger feeling.",
  },
  {
    label: "4",
    title: "Reduce, pause or stop",
    description:
      "If the feeling becomes unpleasant, the contact area becomes uncomfortable or you feel unwell, reduce or stop and follow the supplied guidance.",
  },
] as const;

const faqItems = [
  {
    question: "Should vagus nerve stimulation feel strong?",
    answer:
      "No. For Neuvago, intensity should be increased gradually until the stimulation is noticeable but comfortable. Preferred levels vary, and stronger intensity is not necessarily better.",
  },
  {
    question: "Is tingling proof that the vagus nerve is being stimulated?",
    answer:
      "No. Tingling confirms that electrical stimulation is perceptible at the contact area. Sensation alone does not establish selective vagus-nerve target engagement or a benefit.",
  },
  {
    question: "Why can one mode feel different from another?",
    answer:
      "Modes can use different pulse patterns and pauses. Those waveform differences can make the stimulation feel softer, denser, slower or more distinct even before the intensity setting is considered.",
  },
  {
    question: "What should I do if I feel little or nothing?",
    answer:
      "Check the earpiece fit and contact first, and follow the supplied preparation instructions. Increase intensity slowly rather than using a lack of feedback as a reason to jump to a high level.",
  },
  {
    question: "When should I stop a session?",
    answer:
      "Stop if the session does not feel comfortable, if the feeling becomes unpleasant, if the contact area becomes uncomfortable or if you feel unwell. Persistent discomfort should be handled according to the supplied instructions and support guidance.",
  },
] as const;

const primarySources = [
  {
    title: "Minimum reporting standards for transcutaneous VNS research",
    source: "Farmer et al. · Frontiers in Human Neuroscience · 2021",
    description:
      "Consensus recommendations emphasizing exact reporting of stimulation site, device and protocol parameters, participant criteria, outcomes and side effects.",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
  },
  {
    title: "Laboratory administration of auricular VNS",
    source: "Badran et al. · Journal of Visualized Experiments · 2019",
    description:
      "A technical paper covering auricular targeting, electrode attachment, electrical parameters, perception thresholds and administration considerations.",
    href: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
  },
  {
    title: "Safety of transcutaneous auricular VNS",
    source: "Kim et al. · Scientific Reports · 2022",
    description:
      "A systematic review and meta-analysis of adverse-event reporting and tolerability across studied taVNS protocols and populations.",
    href: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
  },
  {
    title: "Safety and tolerability of transcutaneous VNS",
    source: "Redgrave et al. · Brain Stimulation · 2018",
    description:
      "A systematic review of safety and tolerability reporting across the wider transcutaneous VNS literature.",
    href: "https://pubmed.ncbi.nlm.nih.gov/30217648/",
  },
] as const;

const relatedGuides = [
  {
    title: "Auricular vagus nerve stimulation",
    description:
      "Understand what ear-based taVNS means and how it differs from other VNS method families.",
    href: "/learn/auricular-vagus-nerve-stimulation",
    label: "Read the auricular VNS guide",
  },
  {
    title: "How to choose a VNS device",
    description:
      "Use a 12-point framework to compare method, intended use, evidence, safety, protocol and practical ownership.",
    href: "/learn/how-to-choose-a-vagus-nerve-stimulation-device",
    label: "Open the buyer guide",
  },
  {
    title: "Safety and tolerability research",
    description:
      "Review how adverse events, tolerability and study limitations are reported in the research literature.",
    href: "/research/topics/safety-and-tolerability",
    label: "Explore safety research",
  },
] as const;

export default function WhatDoesVagusNerveStimulationFeelLikePage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: publishedAt,
    dateModified: modifiedAt,
    keywords: [
      "what does vagus nerve stimulation feel like",
      "vagus nerve stimulation sensation",
      "taVNS sensation",
      "ear vagus nerve stimulation feeling",
      "vagus nerve stimulator intensity",
      "Neuvago sensation",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "What Vagus Nerve Stimulation Feels Like", path },
    ],
  });

  const faqStructuredData = buildFAQStructuredData(faqItems);

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="learn-vns-sensation"
      />

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / VNS sensation and comfort
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              What does vagus nerve stimulation feel like?
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Ear-based non-invasive vagus nerve stimulation is usually felt as
              a local electrical sensation at the outer ear. It may feel like
              light tingling, fine prickling, tapping or distinct pulses. The
              exact experience depends on the device, stimulation pattern,
              intensity, contact and the person using it.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6f6a61] md:text-base">
              This page is general educational information, not medical advice.
              The instructions supplied with the specific device take
              precedence.
            </p>

            <div
              data-conversion-placement="hero-actions"
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                See how Neuvago works
              </Link>
              <Link
                href="/product"
                className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/80"
              >
                Explore the product
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-black/8 bg-white/65 p-7 shadow-[0_18px_55px_rgba(31,31,28,0.05)] sm:p-9">
            <p className="text-xs uppercase tracking-[0.18em] text-[#7a756c]">
              Short answer
            </p>
            <div className="mt-6 space-y-4">
              {shortAnswers.map((answer) => (
                <div
                  key={answer}
                  className="grid grid-cols-[auto_1fr] gap-3 border-b border-black/8 pb-4 last:border-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f1f1c]"
                  />
                  <p className="text-sm leading-7 text-[#4f4b45] sm:text-base">
                    {answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-black/10 pt-6 text-sm leading-7 text-[#6f6a61]">
              <p>
                <span className="font-medium text-[#1f1f1c]">Author:</span>{" "}
                Neuvago Editorial Team
              </p>
              <p>
                <span className="font-medium text-[#1f1f1c]">
                  Source review:
                </span>{" "}
                Neuvago Source Review
              </p>
              <p>
                <span className="font-medium text-[#1f1f1c]">Published:</span>{" "}
                August 28, 2026
              </p>
              <p>
                <span className="font-medium text-[#1f1f1c]">Updated:</span>{" "}
                August 28, 2026
              </p>
              <p>
                <span className="font-medium text-[#1f1f1c]">
                  Reading time:
                </span>{" "}
                about 12 minutes
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Method first
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              Ear-based stimulation and implanted VNS do not feel the same for
              the same reason: they are different interventions.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] md:text-lg">
              Auricular VNS applies electrical stimulation through an earpiece
              or electrode at the outer ear, so the immediate sensation is
              usually local to the contact area. Implanted VNS uses surgically
              placed hardware at the cervical vagus and belongs to a different
              clinical pathway. An ear sensation described for auricular
              stimulation should not be transferred to implanted VNS.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-black/8 bg-white/65 p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#7a756c]">
                Auricular / non-invasive
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                Usually felt at the ear
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                The person may notice tingling, prickling, tapping or pulsing
                where the earpiece contacts the outer ear. Exact wording and
                comfort vary by device and protocol.
              </p>
            </article>
            <article className="rounded-[2rem] border border-black/8 bg-[#1f1f1c] p-8 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                Implanted / clinical
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                A separate method family
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
                Implanted VNS is not the internal equivalent of an ear-based
                wellness device. Its hardware, location, indications,
                instructions and expected experiences must be evaluated on
                their own terms.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="sensation-scale"
        className="scroll-mt-28 border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Sensation and comfort scale
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              The goal is not the strongest possible sensation. It is a clear,
              comfortable and controlled experience.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This scale is a decision aid, not a medical dosing scale. Always
              use the setup, intensity and stop-use instructions supplied with
              the device.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {sensationScale.map((item) => (
              <article
                key={item.level}
                className="flex min-h-full flex-col rounded-[1.75rem] border border-black/8 bg-white/65 p-6 shadow-[0_10px_32px_rgba(31,31,28,0.035)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f1f1c] text-sm font-medium text-white">
                    {item.level}
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-[#7a756c]">
                    {item.action}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-medium leading-tight tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Five different questions
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              Sensation, comfort, intensity, effect and target engagement should
              not be treated as synonyms.
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-black/8 bg-white/65">
            {distinctions.map((item, index) => (
              <article
                key={item.term}
                className="grid gap-3 border-b border-black/8 p-6 last:border-0 md:grid-cols-[0.34fr_1fr] md:gap-10 md:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-[#8a847b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-medium tracking-[-0.025em]">
                    {item.term}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-[#1f1f1c] p-7 text-white md:p-9">
            <p className="text-lg font-medium leading-8 md:text-xl">
              Sensation alone does not prove selective vagus-nerve target
              engagement or benefit.
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-white/70 md:text-base">
              A local feeling shows that stimulation is perceptible at the
              contact area. It does not identify which fibers are engaged, show
              that a particular pathway has been selectively activated, or
              establish a later wellness or clinical outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why the feeling varies
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              The sensation is shaped by the whole stimulation setup.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] md:text-lg">
              A sensation description is only useful when it is connected to
              the device, stimulation site, contact method and protocol. That is
              why research reporting standards ask for exact technical detail
              rather than treating “tingling” as a complete description.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {sensationFactors.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-black/8 bg-white/65 p-7"
              >
                <h3 className="text-xl font-medium tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Neuvago mode profiles
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              Different pulse patterns can create different local sensations.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The descriptions below are rendered from the same mode content
              used on the Neuvago Product page. They describe stimulation
              pattern and typical sensation, not proof of effect.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {productV2Content.modes.items.map((mode) => (
              <article
                key={mode.id}
                className="rounded-[2rem] border border-black/8 bg-white/70 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.035)]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#7a756c]">
                  Mode
                </p>
                <h3 className="mt-3 text-3xl font-medium tracking-[-0.035em]">
                  {mode.name}
                </h3>
                <div className="mt-7 border-t border-black/8 pt-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                    Stimulation pattern
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {mode.stimulationPattern}
                  </p>
                </div>
                <div className="mt-6 border-t border-black/8 pt-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                    Typical sensation
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {mode.sensation.replace("Typical sensation: ", "")}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-white/70 p-7 md:p-8">
            <p className="text-sm font-medium text-[#1f1f1c] md:text-base">
              {productV2Content.modes.intensityNote}
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
              Preferred level varies between people. The number is a control
              setting, not a score for quality, target engagement or expected
              benefit.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Comfort and stop-use decision
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              Use a simple sequence: contact, low level, comfort check, then
              continue or stop.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {decisionSteps.map((step, index) => (
              <article
                key={step.label}
                className="relative rounded-[1.75rem] border border-black/8 bg-white/65 p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/12 text-sm font-medium">
                    {step.label}
                  </span>
                  {index < decisionSteps.length - 1 ? (
                    <span aria-hidden="true" className="text-[#8a847b]">
                      →
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-7 text-xl font-medium tracking-[-0.025em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-black/8 bg-[#eee7dd] p-7 md:p-8">
              <h3 className="text-xl font-medium tracking-[-0.025em]">
                If feedback seems weak
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                Check contact and setup before assuming the intensity must be
                much higher. The current Neuvago instructions specifically
                direct users to check earpiece contact and preparation when
                feedback is limited.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-black/8 bg-[#1f1f1c] p-7 text-white md:p-8">
              <h3 className="text-xl font-medium tracking-[-0.025em]">
                If discomfort continues
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/72 md:text-base">
                Stop using the device and follow the supplied instructions and
                support guidance. Do not use an educational article as a
                substitute for the product-specific stop-use information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research boundary
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              A feeling at the ear is useful feedback, but it is not a biological
              readout.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] md:text-lg">
              Research on transcutaneous VNS treats stimulation site, electrode,
              waveform, intensity, dosing, participant selection, outcomes and
              adverse-event reporting as separate methodological details. That
              framework is more reliable than assuming that a stronger or more
              obvious sensation means that a protocol is more effective.
            </p>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">
              It also prevents a category-level research finding from becoming
              an unsupported claim about one commercial product. Neuvago-specific
              instructions and product information should be read separately
              from the wider taVNS literature.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {primarySources.map((source) => (
              <article
                key={source.href}
                className="rounded-[1.75rem] border border-black/8 bg-white/65 p-7"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[#7a756c]">
                  {source.source}
                </p>
                <h3 className="mt-3 text-xl font-medium leading-tight tracking-[-0.025em]">
                  {source.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {source.description}
                </p>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-medium underline underline-offset-4"
                >
                  Open primary source
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              Common questions about sensation and intensity
            </h2>
          </div>

          <div className="mt-12 divide-y divide-black/8 border-y border-black/8">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
                  <span className="text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/60 text-xl text-[#5f5a52] transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-4xl pb-7 pr-10 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Continue with context
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              Understand the method before treating the sensation as a product
              verdict.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <article
                key={guide.href}
                className="flex min-h-full flex-col rounded-[1.75rem] border border-black/8 bg-white/65 p-7"
              >
                <h3 className="text-xl font-medium tracking-[-0.025em]">
                  {guide.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {guide.description}
                </p>
                <div
                  data-conversion-placement="related-guides"
                  className="mt-auto pt-7"
                >
                  <Link
                    href={guide.href}
                    className="inline-flex text-sm font-medium underline underline-offset-4"
                  >
                    {guide.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 rounded-[2rem] border border-black/8 bg-[#1f1f1c] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                See how the Neuvago routine is structured.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                Explore the device, earpiece, adjustable intensity and session
                flow without turning a local sensation into a promise of
                outcome.
              </p>
            </div>
            <div
              data-conversion-placement="final-cta"
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/how-it-works"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c]"
              >
                See how Neuvago works
              </Link>
              <Link
                href="/product"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white"
              >
                Explore the product
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#5f5a52]">
            <Link
              href="/glossary/stimulation-intensity"
              className="underline underline-offset-4"
            >
              Stimulation intensity
            </Link>
            <Link
              href="/glossary/electrode"
              className="underline underline-offset-4"
            >
              Electrode
            </Link>
            <Link
              href="/glossary/target-engagement"
              className="underline underline-offset-4"
            >
              Target engagement
            </Link>
            <Link
              href="/legal/intended-use"
              className="underline underline-offset-4"
            >
              Intended use
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
