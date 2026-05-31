import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";

const title =
  "Non-Invasive Vagus Nerve Stimulation | nVNS Device Guide | Neuvago";
const description =
  "Understand non-invasive VNS, including nVNS, tVNS and taVNS, how external devices differ from implanted VNS, and how guided wellness use fits in.";
const path = "/learn/non-invasive-vagus-nerve-stimulation";

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

const quickAnswers = [
  {
    title: "Non-invasive means no implanted hardware",
    description:
      "In non-invasive vagus nerve stimulation, stimulation is delivered from outside the body through the skin. That makes it a different category from surgically implanted clinical VNS systems.",
  },
  {
    title: "The phrase covers several approaches",
    description:
      "nVNS can include neck-based stimulation, transcutaneous VNS, and ear-based auricular approaches. Each method has its own device design, target area, settings, evidence, and intended use.",
  },
  {
    title: "Wellness use needs conservative language",
    description:
      "A wellness-oriented non-invasive vagus nerve stimulator should be explained as support for a guided regulation routine, not as diagnosis, treatment, or a replacement for medical care.",
  },
];

const categoryCards = [
  {
    title: "nVNS",
    label: "Non-invasive VNS",
    description:
      "A broad shorthand for non-invasive vagus nerve stimulation. It usually means external stimulation, but the exact target area and intended use still need to be checked.",
  },
  {
    title: "tVNS",
    label: "Transcutaneous VNS",
    description:
      "A research and device category using stimulation through the skin rather than an implanted electrode. It can refer to different body sites, parameters, and protocols.",
  },
  {
    title: "taVNS",
    label: "Auricular VNS",
    description:
      "An ear-based form of transcutaneous stimulation that focuses on regions of the outer ear associated with auricular vagal pathways.",
  },
  {
    title: "Guided wellness VNS",
    label: "Neuvago context",
    description:
      "A practical category for calm, repeatable, non-invasive sessions supported by app guidance, clear intended use, and careful claims.",
  },
];

const comparisonCards = [
  {
    title: "Implanted VNS",
    description:
      "A medical system placed surgically and managed in clinical contexts. It has specific medical indications, supervision, and a very different risk-benefit frame.",
  },
  {
    title: "Non-invasive VNS",
    description:
      "An external device approach that does not require implanted hardware. It can still vary widely by placement, stimulation settings, intended use, and evidence base.",
  },
  {
    title: "Wellness-oriented support",
    description:
      "A consumer-facing routine should be framed around comfort, consistency, guidance, and daily regulation support rather than disease treatment claims.",
  },
];

const whatToEvaluate = [
  {
    title: "Where stimulation is applied",
    description:
      "Ear-based, neck-based, and other transcutaneous approaches should not be treated as automatically identical. Placement changes the mechanism discussion.",
  },
  {
    title: "How sessions are guided",
    description:
      "A useful device experience should make session length, comfort, intensity, and routine easy to understand without asking the user to interpret everything alone.",
  },
  {
    title: "What the product claims",
    description:
      "The strongest language is precise: support, routine, regulation, recovery habits, and user education. Avoid claims that sound like diagnosis or treatment unless they are properly cleared.",
  },
  {
    title: "What evidence is being referenced",
    description:
      "Evidence for implanted VNS, one non-invasive protocol, or one study population should not be casually generalized to every device or every user goal.",
  },
];

const whyPeopleSearch = [
  {
    title: "They want the benefits without surgery",
    description:
      "Many people discover VNS through clinical or research contexts, then search for a non-invasive alternative that feels more accessible and everyday.",
  },
  {
    title: "They are trying to understand the product category",
    description:
      "Searches for a vagus nerve stimulator often happen before users know the difference between implanted VNS, nVNS, tVNS, taVNS, and wellness devices.",
  },
  {
    title: "They want practical support, not hype",
    description:
      "The best page for this intent should explain the category clearly, set boundaries, and connect the reader to how a guided device-and-app system works in real life.",
  },
];

const neuvagoFit = [
  {
    title: "External stimulation",
    description:
      "Neuvago is positioned around non-invasive use. It is designed as an external wellness device, not as an implanted clinical system.",
  },
  {
    title: "App-guided sessions",
    description:
      "The app turns stimulation into a more structured routine with session framing, guidance, and continuity rather than leaving the user to guess.",
  },
  {
    title: "Routine-first design",
    description:
      "For everyday support, the more useful frame is repeatable calm practice: short sessions, comfort, consistency, and a clear place in the day.",
  },
  {
    title: "Clear boundaries",
    description:
      "Neuvago should be understood as wellness support. It is not presented as a treatment for disease or a substitute for clinical care.",
  },
];

const boundaries = [
  {
    title: "Non-invasive does not mean unregulated claims",
    description:
      "Even when a device is external, claims still need to match the product’s intended use, evidence, and regulatory position.",
  },
  {
    title: "Comfort matters more than intensity",
    description:
      "A stronger sensation is not automatically a better session. For wellness use, guidance, comfort, and consistency are more appropriate anchors.",
  },
  {
    title: "Medical situations need medical advice",
    description:
      "People with medical conditions, implanted electronic devices, pregnancy-related questions, heart rhythm concerns, or active treatment plans should speak with a qualified clinician before use.",
  },
];

const relatedLearning = [
  {
    title: "Vagus nerve stimulation",
    description:
      "The broader category pillar explaining implanted VNS, non-invasive VNS, auricular approaches, and responsible wellness positioning.",
    href: "/learn/vagus-nerve-stimulation",
    linkLabel: "Read the VNS overview",
  },
  {
    title: "Auricular vagus nerve stimulation",
    description:
      "A plain-language guide to ear-based VNS, taVNS, placement language, comfort, evidence context, and responsible wellness boundaries.",
    href: "/learn/auricular-vagus-nerve-stimulation",
    linkLabel: "Explore auricular VNS",
  },
  {
    title: "Vagus nerve",
    description:
      "A foundation page on the vagus nerve and why it matters in conversations about regulation, stress, sleep, and recovery.",
    href: "/learn/vagus-nerve",
    linkLabel: "Understand the vagus nerve",
  },
  {
    title: "Nervous system regulation",
    description:
      "A wider framework for understanding activation, settling, recovery, and why a guided routine can matter.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
];

const researchAndTrust = [
  {
    title: "Transcutaneous VNS research",
    description:
      "Go deeper into tVNS, taVNS, auricular stimulation, protocol variables, target engagement, and responsible interpretation of the method layer.",
    href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "View tVNS research",
  },
  {
    title: "Safety and tolerability",
    description:
      "Explore the research topic that explains adverse events, tolerability, protocol limits, and responsible product boundaries for non-invasive VNS.",
    href: "/research/topics/safety-and-tolerability",
    linkLabel: "View safety research",
  },
  {
    title: "Autonomic regulation",
    description:
      "Understand how non-invasive VNS fits into a wider research conversation around HRV, vagal regulation, state-shifting, stress, and recovery.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "View regulation research",
  },
  {
    title: "VNS research topic",
    description:
      "Move from plain-language education into the research library’s overview of implanted and non-invasive vagus nerve stimulation.",
    href: "/research/topics/vagus-nerve-stimulation",
    linkLabel: "View VNS research",
  },
  {
    title: "Auricular VNS fMRI study",
    description:
      "Read the Neuvago summary of a foundational fMRI paper on non-invasive ear-based access to vagal pathways.",
    href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    linkLabel: "Read study summary",
  },
  {
    title: "Intended use",
    description:
      "Review how Neuvago explains product boundaries, wellness positioning, and what the device is not intended to replace.",
    href: "/legal/intended-use",
    linkLabel: "Review intended use",
  },
];

const nextPaths = [
  {
    title: "See how Neuvago works",
    description:
      "Learn how device placement, app guidance, session structure, and daily routine design fit together.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
  {
    title: "Explore the product",
    description:
      "Go from category education to the non-invasive device and app system designed for calm, repeatable support.",
    href: "/product",
    linkLabel: "Explore Neuvago",
  },
  {
    title: "Build a guided routine",
    description:
      "Understand how the app supports session guidance, habit formation, and continuity around daily nervous system support.",
    href: "/app",
    linkLabel: "Explore the app",
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

export default function NonInvasiveVagusNerveStimulationPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: authorityEditorialDates.vnsClusterPublished,
    dateModified: authorityEditorialDates.vnsClusterModified,
    keywords: [
      "non-invasive vagus nerve stimulation",
      "non invasive vagus nerve stimulation",
      "non-invasive vagus nerve stimulator",
      "vagus nerve stimulation device",
      "nVNS",
      "tVNS",
      "taVNS",
      "auricular vagus nerve stimulation",
      "transcutaneous vagus nerve stimulation",
      "wellness device",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Non-Invasive Vagus Nerve Stimulation", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="learn-non-invasive-vagus-nerve-stimulation"
      />

      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Non-invasive VNS
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Non-invasive vagus nerve stimulation (nVNS), explained clearly
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Non-invasive vagus nerve stimulation means using an external
              device to deliver stimulation without implanted hardware. It is
              one of the most important category terms for understanding modern
              VNS, because it sits between research, device design, and the
              practical question of how a vagus nerve stimulator might fit into
              everyday life.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The details matter. nVNS, tVNS, taVNS, neck-based stimulation,
              ear-based stimulation, medical devices, and wellness-oriented
              systems should not be treated as the same thing. This guide gives
              the category a calm, precise foundation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                See how Neuvago works
              </Link>

              <Link
                href="/learn/vagus-nerve-stimulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Read the VNS overview
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
                        Category guide
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        External stimulation, guided sessions, and careful
                        wellness positioning
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          No implant
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          External, non-invasive device category
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Guidance
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            App-led session structure
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Boundaries
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Wellness, not treatment claims
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
              Simple definition
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Non-invasive VNS is a device category, not a single universal
              protocol
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The phrase non-invasive vagus nerve stimulation describes
              external stimulation approaches that are designed to influence
              pathways associated with the vagus nerve without surgery. That
              makes the category easier to access than implanted VNS, but it
              does not make every device, protocol, target area, or claim
              interchangeable.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A good explanation should separate four things: the body area
              being stimulated, the way stimulation is delivered, the intended
              use of the product, and the level of evidence behind the claims.
              This is especially important for a wellness brand because trust
              depends on being clear about what the product is designed to
              support and what it does not claim to do.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Neuvago’s category is non-invasive, app-guided wellness support:
              a device-and-app system for short, repeatable sessions that can
              fit into a daily nervous system regulation routine.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Quick answer
            </p>

            <div className="mt-8 space-y-5">
              {quickAnswers.map((item) => (
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
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Terms you will see
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              nVNS, tVNS, and taVNS are related terms, but they are not always
              used the same way
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These abbreviations often appear in research, product pages, and
              search results. Understanding them helps users compare claims more
              carefully and avoid treating the entire field as one uniform
              method.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categoryCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl font-medium leading-tight text-[#1f1f1c]">
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
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Category distinction
            </p>

            <div className="mt-8 space-y-5">
              {comparisonCards.map((item) => (
                <TextCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Implanted vs non-invasive
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The main difference is not just convenience. It is intended use,
              supervision, evidence, and risk context.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Implanted VNS belongs to a medical context. It involves hardware
              placed inside the body, clinician oversight, and specific medical
              indications. Non-invasive VNS avoids implanted hardware, but that
              does not automatically make every external device equivalent.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This distinction is central to Neuvago’s positioning. The product
              should be easy to understand as a non-invasive vagus nerve
              stimulator for guided wellness routines, while the site should
              remain careful about not borrowing claims from clinical devices or
              research protocols that do not directly apply.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/topics/vagus-nerve-stimulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View VNS research
              </Link>

              <Link
                href="/legal/intended-use"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Review intended use
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How to evaluate a device
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A responsible non-invasive VNS page should help users ask better
              questions
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Search intent around non-invasive vagus nerve stimulation is
              partly educational and partly commercial. People want to know what
              the category means, but they are also beginning to compare devices
              and decide what feels trustworthy.
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
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why people search for it
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Non-invasive VNS is often the bridge between curiosity and product
              evaluation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Someone searching for the vagus nerve may still be learning the
              concept. Someone searching for non-invasive vagus nerve
              stimulation is usually closer to the product category. They may
              already understand that stimulation exists and want to know what
              safer, more accessible, non-surgical options look like.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That makes this page strategically important for Neuvago. It can
              answer a high-intent educational query while also creating a
              respectful path into the device, app, research, and trust pages.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Search intent
            </p>

            <div className="mt-8 space-y-5">
              {whyPeopleSearch.map((item) => (
                <TextCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Neuvago fit
            </p>

            <div className="mt-8 space-y-5">
              {neuvagoFit.map((item) => (
                <TextCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How Neuvago fits
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Neuvago turns non-invasive stimulation into a calmer guided
              routine
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The value of Neuvago is not only that the device is non-invasive.
              It is that the device is part of a system: app guidance, session
              structure, clear instructions, and a repeatable routine designed
              around comfort rather than intensity.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This is the commercial bridge that should feel natural: if the
              user understands the category, the next question becomes how
              Neuvago delivers that experience in practice.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/product"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore the device and app
              </Link>

              <Link
                href="/app"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore app guidance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Trust boundaries
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The more accessible the category becomes, the more important the
              boundaries become
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Non-invasive stimulation can sound simple because it does not
              involve surgery. But responsible education should still be precise
              about intended use, contraindications, safety language, research
              interpretation, and when a person should speak with a clinician.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              For Neuvago, this is not a weakness. It is part of the brand’s
              trust layer. Calm language, clear claims, and well-placed legal
              pages make the product easier to believe.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/legal/medical-disclaimer"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read medical disclaimer
              </Link>

              <Link
                href="/legal/trust-safety"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Review trust and safety
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Important notes
            </p>

            <div className="mt-8 space-y-5">
              {boundaries.map((item) => (
                <TextCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Continue learning
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Place non-invasive VNS inside the wider vagus nerve and nervous
              system picture
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {relatedLearning.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research and trust
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Go deeper into the research layer and product boundaries
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {researchAndTrust.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Next step
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                From non-invasive VNS education to the Neuvago system
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Once the non-invasive category is clear, the practical next
                step is understanding how the device, app, and routine work
                together. These paths connect category intent with product
                understanding without turning education into pressure.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {nextPaths.map((item) => (
                <LinkCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
