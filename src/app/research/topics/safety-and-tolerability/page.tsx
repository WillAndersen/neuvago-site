import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { AuthorityVisualSection } from "@/components/authority";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";

const title =
  "VNS Safety, Side Effects and Tolerability | Neuvago";
const description =
  "Explore VNS safety, side effects, tolerability, contraindication awareness and responsible wellness boundaries for non-invasive VNS, tVNS and taVNS.";
const path = "/research/topics/safety-and-tolerability";

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
    title: "Safety is specific, not universal",
    description:
      "A safety finding from one device, placement, intensity, population, or protocol should not be treated as proof that every non-invasive VNS product is equivalent.",
  },
  {
    title: "Tolerability means real-world comfort matters",
    description:
      "Tolerability looks at whether people can complete sessions, what side effects are reported, and whether those effects are mild, temporary, serious, or unclear.",
  },
  {
    title: "Wellness positioning needs boundaries",
    description:
      "A consumer wellness product should connect safety language to intended use, side effects, contraindication awareness, gentle guidance, and a visible path to medical advice when appropriate.",
  },
];

const evidenceSignals = [
  {
    title: "tVNS safety and tolerability review",
    source: "Redgrave et al., 2018",
    description:
      "A systematic review of human transcutaneous VNS studies reported generally favorable safety and tolerability at tested doses, with skin irritation, headache, and nasopharyngitis among the most common reported effects, while also calling for better adverse-event reporting.",
    href: "https://pubmed.ncbi.nlm.nih.gov/30217648/",
    linkLabel: "View PubMed record",
  },
  {
    title: "taVNS safety review",
    source: "Kim et al., 2022",
    description:
      "A review focused on auricular VNS discussed a generally favorable impression of mild, transient adverse effects, but also emphasized that human safety data should be reported more consistently.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9772204/",
    linkLabel: "View article",
  },
  {
    title: "Minimum reporting standards",
    source: "Farmer et al., 2021",
    description:
      "An international consensus paper proposed minimum reporting standards for tVNS studies, including device and stimulation details that make safety interpretation more meaningful.",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
    linkLabel: "View PubMed record",
  },
  {
    title: "Regulated nVNS context",
    source: "FDA 510(k), gammaCore Sapphire",
    description:
      "The FDA 510(k) summary for one prescription nVNS device shows how indications, device-specific use, and medical boundaries are handled in a regulated context.",
    href: "https://www.accessdata.fda.gov/cdrh_docs/pdf18/K182369.pdf",
    linkLabel: "View FDA document",
  },
];

const safetyPrinciples = [
  {
    title: "Device type matters",
    description:
      "Implanted VNS, neck-based nVNS, auricular taVNS, and other transcutaneous approaches have different risk contexts and should not be collapsed into one claim.",
  },
  {
    title: "Parameters matter",
    description:
      "Frequency, pulse width, intensity, placement, session length, and total daily use can all change how a protocol should be interpreted.",
  },
  {
    title: "Population matters",
    description:
      "Healthy adults, clinical groups, people with cardiac histories, pregnant users, pediatric users, and people with implanted devices need different levels of caution.",
  },
  {
    title: "Intended use matters",
    description:
      "Research findings do not automatically become product claims. A wellness product still needs claim language that matches its own intended use and regulatory position.",
  },
];

const tolerabilityConsiderations = [
  {
    title: "Local skin sensation or irritation",
    description:
      "External stimulation involves contact with the skin. Placement, fit, gel, pressure, and session duration can affect comfort, and mild local effects should be described plainly rather than hidden.",
  },
  {
    title: "Headache, dizziness, nausea, or discomfort",
    description:
      "Reviews of tVNS research discuss non-serious adverse events such as headache, dizziness, nausea, and related symptoms. User-facing instructions should make adjustment and stop-use guidance clear.",
  },
  {
    title: "Cardiac and implanted-device questions",
    description:
      "People with heart rhythm concerns, implanted electronic devices, or complex medical histories should not use a website page as individual medical guidance.",
  },
  {
    title: "Long-term interpretation",
    description:
      "Short-term tolerability in studies does not automatically answer every question about long-term use, all populations, or every product design.",
  },
];

const beforeUseBoundaries = [
  {
    title: "Who should ask a clinician first",
    description:
      "People with implanted electronic devices, heart rhythm concerns, seizure history, pregnancy-related questions, active medical treatment plans, or significant medical conditions should get qualified clinical guidance before using any stimulation product.",
  },
  {
    title: "When to pause or stop",
    description:
      "If stimulation feels painful, unusually uncomfortable, dizzying, or concerning, the user experience should point toward pausing, lowering intensity, stopping use, and seeking appropriate guidance rather than pushing through.",
  },
  {
    title: "Do not borrow another device’s indication",
    description:
      "A regulated nVNS device cleared for a specific medical indication does not automatically grant the same indication, use case, or claim language to another wellness product.",
  },
  {
    title: "Non-invasive is not the same as risk-free",
    description:
      "External stimulation avoids implanted hardware, but safety still depends on device design, instructions, placement, intensity, session duration, population, and intended use.",
  },
];

const neuvagoPositioning = [
  {
    title: "Wellness support, not treatment claims",
    description:
      "Neuvago should be described as support for guided wellness routines, not as diagnosis, treatment, prevention, or cure of medical conditions.",
  },
  {
    title: "Guided use, not self-experimentation",
    description:
      "The app should help frame session structure, intensity, timing, comfort, and consistency so the user is not left to improvise a protocol alone.",
  },
  {
    title: "Comfort over intensity",
    description:
      "A stronger sensation is not automatically a better session. For everyday wellness use, comfort and consistency are stronger anchors than intensity.",
  },
  {
    title: "Visible safety boundaries",
    description:
      "The site should keep intended use, medical disclaimers, regulatory status, side effects, and product safety information easy to find from research and product pages.",
  },
];

const responsibleQuestions = [
  {
    title: "What was actually tested?",
    description:
      "Look for the device type, placement, frequency, pulse width, intensity, session duration, and total exposure used in a study.",
  },
  {
    title: "Who was included or excluded?",
    description:
      "Safety interpretation depends on who participated and who was excluded. This matters especially for cardiac history, implanted devices, pregnancy, neurological history, and pediatric use.",
  },
  {
    title: "What adverse events were reported?",
    description:
      "A useful safety page should mention adverse events clearly rather than only saying that a method was well tolerated.",
  },
  {
    title: "What does the study not prove?",
    description:
      "Evidence at tested doses does not establish universal safety, product equivalence, long-term outcomes, or suitability for every individual.",
  },
];

const internalPathways = [
  {
    title: "Non-invasive VNS guide",
    description:
      "A plain-language guide to nVNS, tVNS, taVNS, external stimulation, device differences, and wellness boundaries.",
    href: "/learn/non-invasive-vagus-nerve-stimulation",
    linkLabel: "Read the guide",
  },
  {
    title: "Transcutaneous VNS research",
    description:
      "A method-focused topic on tVNS, taVNS, stimulation sites, target engagement, and protocol variables that shape safety interpretation.",
    href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "Explore tVNS topic",
  },
  {
    title: "Autonomic regulation research",
    description:
      "A physiology-focused topic connecting non-invasive VNS interpretation to HRV, vagal regulation, stress responses, and flexible state-shifting.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "Explore regulation topic",
  },
  {
    title: "VNS research topic",
    description:
      "The broader research topic covering implanted VNS, auricular stimulation, and non-invasive vagus nerve stimulation pathways.",
    href: "/research/topics/vagus-nerve-stimulation",
    linkLabel: "Explore VNS research",
  },
  {
    title: "How Neuvago works",
    description:
      "Move from research boundaries into the practical device, app guidance, session structure, and daily use experience.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
  {
    title: "Explore the product",
    description:
      "See how Neuvago describes the non-invasive vagus nerve stimulator and app system without turning research context into medical claims.",
    href: "/product",
    linkLabel: "Explore Neuvago",
  },
  {
    title: "Medical disclaimer",
    description:
      "Review why Neuvago’s educational content is not a substitute for professional medical advice.",
    href: "/legal/medical-disclaimer",
    linkLabel: "Read disclaimer",
  },
];

const trustLinks = [
  {
    title: "Intended use",
    description:
      "Product-level boundaries for what Neuvago is designed to support and what it is not intended to do.",
    href: "/legal/intended-use",
    linkLabel: "Review intended use",
  },
  {
    title: "FDA status",
    description:
      "A clear regulatory-status page that helps prevent users from assuming medical clearance where it has not been claimed.",
    href: "/legal/fda-status",
    linkLabel: "Review FDA status",
  },
  {
    title: "Trust and safety",
    description:
      "A broader trust page connecting product boundaries, safe use, disclaimers, and responsible communication.",
    href: "/legal/trust-safety",
    linkLabel: "Visit trust page",
  },
];

const externalReferences = [
  {
    title:
      "Safety and tolerability of Transcutaneous Vagus Nerve stimulation in humans; a systematic review",
    source: "Redgrave et al., Brain Stimulation, 2018",
    href: "https://pubmed.ncbi.nlm.nih.gov/30217648/",
  },
  {
    title:
      "Safety of transcutaneous auricular vagus nerve stimulation: a systematic review and meta-analysis",
    source: "Kim et al., Journal of Clinical Medicine, 2022",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9772204/",
  },
  {
    title:
      "International consensus recommendations for reporting tVNS research",
    source: "Farmer et al., Frontiers in Human Neuroscience, 2021",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
  },
  {
    title: "gammaCore Sapphire 510(k) Summary",
    source: "U.S. Food and Drug Administration, 2018",
    href: "https://www.accessdata.fda.gov/cdrh_docs/pdf18/K182369.pdf",
  },
  {
    title:
      "Transcutaneous non-invasive vagus nerve stimulation for cluster headache",
    source: "Norwegian Institute of Public Health, 2023",
    href: "https://www.fhi.no/en/publ/2023/Transcutaneous-non-invasive-vagus-nerve-stimulation-gammaCore-for-the-treatment-of-cluster-headache/",
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
        className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
      >
        {linkLabel}
      </Link>
    </article>
  );
}

function EvidenceCard({
  title,
  source,
  description,
  href,
  linkLabel,
}: {
  title: string;
  source: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <article className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
        {source}
      </p>
      <h3 className="mt-3 text-2xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
        {description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
      >
        {linkLabel}
      </a>
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

export default function SafetyAndTolerabilityResearchPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Research topics",
    datePublished: authorityEditorialDates.vnsClusterPublished,
    dateModified: authorityEditorialDates.vnsClusterModified,
    keywords: [
      "vagus nerve stimulation safety",
      "vagus nerve stimulation tolerability",
      "non-invasive vagus nerve stimulation safety",
      "tVNS safety",
      "taVNS safety",
      "transcutaneous vagus nerve stimulation adverse events",
      "auricular vagus nerve stimulation tolerability",
      "vagus nerve stimulator safety",
      "vagus nerve stimulation side effects",
      "non-invasive vagus nerve stimulation contraindications",
      "who should not use vagus nerve stimulation",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Topic Research", path: "/research/topics" },
      { name: "Safety and Tolerability", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="research-topics-safety-and-tolerability"
      />

      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Topics / Safety, side effects and tolerability
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              VNS safety and tolerability research
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Safety and tolerability are central to how non-invasive vagus
              nerve stimulation should be explained. The topic is not only
              whether stimulation has been studied, but which device, placement,
              settings, population, and intended use were involved.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This page summarizes the safety layer of the research conversation
              while keeping Neuvago’s own positioning conservative: wellness
              support, clear boundaries, guided use, and no treatment claims
              borrowed from clinical devices.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/non-invasive-vagus-nerve-stimulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read non-invasive VNS guide
              </Link>

              <Link
                href="/legal/trust-safety"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Review trust and safety
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur">
            <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                      Research trust layer
                    </p>
                    <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                      Safety is strongest when the boundaries are clear
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="text-sm font-medium text-[#1f1f1c]">
                        Evidence-aware
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                        Research context without overclaiming
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Tolerability
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Comfort and adverse-event awareness
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Boundaries
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Intended use and clinician guidance
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
        eyebrow="Safety visual"
        title="Safety is clearest when the boundaries are visible"
        description="A responsible non-invasive VNS explanation should make comfort, adverse-event awareness, contraindication questions, and intended-use boundaries easy to find."
        image={{ src: "/images/neuvago/safety-tolerability-desktop.webp", alt: "Neuvago device beside an abstract safety and tolerability checklist card." }}
      />


      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Simple answer
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Safety in VNS research is not one universal statement
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Reviews often describe transcutaneous and auricular VNS as well
              tolerated under studied conditions. That is useful, but it still
              needs context: device type, placement, parameters, population,
              duration, reporting quality, and intended use.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              For Neuvago, the safest and most credible position is not “safe
              for everyone.” It is: here is what the research conversation
              suggests, here is what it does not prove, and here is how a
              wellness product should communicate its boundaries.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Quick answer
            </p>

            <div className="mt-8 space-y-5">
              {quickAnswers.map((item) => (
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
              Evidence signals
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The useful question is what was tested, how it was tolerated, and
              where the boundaries are
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These references help frame the category. They should be read as
              research context, not as automatic product claims for every
              non-invasive vagus nerve stimulator.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {evidenceSignals.map((item) => (
              <EvidenceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Safety interpretation
            </p>

            <div className="mt-8 space-y-5">
              {safetyPrinciples.map((item) => (
                <TextCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research interpretation
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              “Well tolerated” is a useful phrase only when the context stays
              attached
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Tolerability usually means that the studied sessions were
              acceptable to participants and that reported adverse events were
              manageable within the study context. It does not mean there are no
              side effects, no exclusions, or no need for product-specific
              instructions.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This is why Neuvago’s trust layer should keep linking education,
              research, intended use, medical disclaimers, and product guidance
              together rather than placing safety language on one isolated page.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/legal/intended-use"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Review intended use
              </Link>

              <Link
                href="/legal/medical-disclaimer"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Read medical disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Side effects and tolerability considerations
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Side effects and adverse events belong in the conversation, even when they are mild
              or temporary
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tolerabilityConsiderations.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Before-use boundaries
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A good safety page answers who should pause, ask, or avoid guessing
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Safety communication should not rely on a vague phrase like well
              tolerated. It should help people understand when the website is
              not enough and when individual medical guidance is the responsible
              next step.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {beforeUseBoundaries.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How Neuvago should use this topic
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The safety page should support trust, not make the product sound
              clinical
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People naturally ask whether a vagus nerve stimulator is safe
              before they evaluate the product. The premium answer is calm,
              specific, and responsible: what the system is designed for, how
              use is guided, where the evidence context lives, and when medical
              advice is appropriate.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/product"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore Neuvago
              </Link>

              <Link
                href="/how-it-works"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Neuvago positioning
            </p>

            <div className="mt-8 space-y-5">
              {neuvagoPositioning.map((item) => (
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
              Better research questions
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The best safety pages teach users how to read the evidence more
              carefully
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {responsibleQuestions.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Continue through the authority layer
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Safety and tolerability should connect research, education,
              product understanding, and legal boundaries
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {internalPathways.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Trust links
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Product safety communication needs visible boundaries
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {trustLinks.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              References
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Starting references for the safety and tolerability topic
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These references support transparent research context. They should
              not be read as product-specific claims for Neuvago or as
              individual medical advice.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                Next step
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                From safety context to the practical Neuvago experience
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Once the safety and tolerability frame is clear, the practical
                next step is understanding the system itself: device placement,
                app guidance, session structure, and product boundaries.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                See how Neuvago works
              </Link>

              <Link
                href="/product"
                className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
              >
                Explore the product
              </Link>

              <Link
                href="/research/topics/vagus-nerve-stimulation"
                className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
              >
                Return to VNS research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
