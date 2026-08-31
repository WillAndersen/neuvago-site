import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { PlainEnglishSummary } from "@/components/authority";
import {
  buildAuthorityPageStructuredData,
  buildFAQStructuredData,
} from "@/lib/seo/structured-data";

const title =
  "Implanted vs Non-Invasive VNS | Key Differences | Neuvago";
const description =
  "Compare implanted and non-invasive vagus nerve stimulation by surgery, hardware, stimulation site, intended use, safety context, protocol, and evidence boundaries.";
const path = "/learn/implanted-vs-non-invasive-vagus-nerve-stimulation";
const publishedAt = "2026-08-31";
const modifiedAt = "2026-08-31";

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
  {
    title: "Implanted VNS is a surgical clinical system",
    description:
      "An implanted system places hardware inside the body and uses a lead around a nerve. Programming, follow-up, indications, and risks belong to that specific clinical system and its official labeling.",
  },
  {
    title: "Non-invasive VNS is an external category",
    description:
      "Non-invasive approaches deliver stimulation through the skin without implanted hardware. The category can include neck-based, transcutaneous, and ear-based methods, each with different designs and protocols.",
  },
  {
    title: "The category name does not make the methods equivalent",
    description:
      "Two approaches can both be called VNS while differing in anatomy, electrodes, waveform, intensity, session exposure, population, intended use, regulation, and evidence.",
  },
  {
    title: "Product claims require a product-specific bridge",
    description:
      "Research on an implanted system, another non-invasive device, or another protocol does not automatically establish a claim for Neuvago or any other consumer product.",
  },
] as const;

const categoryCards = [
  {
    eyebrow: "SURGICAL / CLINICAL",
    title: "Implanted clinical VNS",
    description:
      "A pulse generator and lead are surgically implanted. Clinical indications, programming, follow-up, adverse events, and expected outcomes must be read from the specific approved system and medical context.",
    href: "/learn/vagus-nerve-stimulation",
    linkLabel: "Read the VNS overview",
  },
  {
    eyebrow: "EXTERNAL / NECK",
    title: "Cervical non-invasive VNS",
    description:
      "An external device applies stimulation through the skin at the neck. It avoids implanted hardware, but it remains a distinct device category with product-specific placement, output, instructions, and regulatory status.",
    href: "/learn/ear-vs-neck-vagus-nerve-stimulation",
    linkLabel: "Compare ear and neck methods",
  },
  {
    eyebrow: "TRANSCUTANEOUS",
    title: "Transcutaneous VNS",
    description:
      "tVNS is a broad research and device term for stimulation delivered through the skin. The label alone does not identify one anatomical site, protocol, product, or intended use.",
    href: "/learn/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "Explore tVNS",
  },
  {
    eyebrow: "EXTERNAL / EAR",
    title: "Auricular VNS / taVNS",
    description:
      "Auricular approaches apply stimulation at the outer ear. Electrode geometry, contact, exact site, side, parameters, session duration, and the tested population all affect how evidence should be interpreted.",
    href: "/learn/auricular-vagus-nerve-stimulation",
    linkLabel: "Explore auricular VNS",
  },
] as const;

const comparisonRows = [
  {
    aspect: "How stimulation reaches the body",
    implanted:
      "A surgically implanted pulse generator connects to an implanted lead placed around a nerve.",
    cervical:
      "An external applicator delivers stimulation through the skin at the neck.",
    auricular:
      "An external ear electrode delivers stimulation through the skin at a defined auricular site.",
  },
  {
    aspect: "Hardware",
    implanted:
      "Internal generator and implanted lead, with external programming equipment used by clinicians.",
    cervical:
      "External handheld or wearable device with a neck contact interface.",
    auricular:
      "External stimulator plus an ear electrode or earpiece and the required contact medium or fit system.",
  },
  {
    aspect: "Procedure",
    implanted:
      "Requires surgery, recovery, wound care, clinical programming, and ongoing follow-up.",
    cervical:
      "Does not require implantation; use depends on the product's external placement and instructions.",
    auricular:
      "Does not require implantation; use depends on the product's ear placement, contact, and instructions.",
  },
  {
    aspect: "Typical context",
    implanted:
      "A clinical care pathway tied to a specific system, indication, patient selection process, and medical team.",
    cervical:
      "Can include prescription, cleared, investigational, or other product contexts depending on the exact device and jurisdiction.",
    auricular:
      "Can include clinical research, regulated medical products, experimental protocols, or wellness products depending on the exact system.",
  },
  {
    aspect: "Programming and exposure",
    implanted:
      "Programming may be clinician-controlled and can involve scheduled or chronic stimulation over long periods.",
    cervical:
      "Usually delivered in discrete external sessions defined by product settings and instructions.",
    auricular:
      "Usually delivered in discrete sessions; frequency, pulse width, waveform, intensity, duty cycle, and duration vary substantially.",
  },
  {
    aspect: "Intended use",
    implanted:
      "Defined by the specific implanted system's official labeling and clinical indication.",
    cervical:
      "Defined by the exact product, market, labeling, and instructions—not by the broad nVNS category name.",
    auricular:
      "Defined by the exact product, market, labeling, and instructions—not by taVNS research as a whole.",
  },
  {
    aspect: "Safety context",
    implanted:
      "Includes surgical, device, lead, programming, interaction, and long-term follow-up considerations.",
    cervical:
      "Avoids implant surgery but still requires product-specific contraindications, precautions, placement, stop-use guidance, and adverse-event information.",
    auricular:
      "Avoids implant surgery but still requires product-specific skin, ear-contact, comfort, placement, precaution, and stop-use guidance.",
  },
  {
    aspect: "Evidence interpretation",
    implanted:
      "Evidence belongs to the tested implanted system, indication, protocol, population, comparator, and outcome.",
    cervical:
      "Evidence belongs to the tested cervical device and protocol; it should not be transferred automatically to other external systems.",
    auricular:
      "Evidence belongs to the tested ear site, electrode, device, protocol, population, and outcome; it is not automatically a consumer-product claim.",
  },
  {
    aspect: "What a reader should verify",
    implanted:
      "Official labeling, indication, surgical process, clinician follow-up, device interactions, and system-specific risks.",
    cervical:
      "Exact site, contact method, output, session protocol, intended use, regulatory status, instructions, and safety information.",
    auricular:
      "Exact ear site, side, electrode geometry, contact, parameters, intended use, instructions, and product-specific evidence.",
  },
] as const;

const evidenceTransferQuestions = [
  {
    number: "01",
    title: "Is it the same intervention?",
    description:
      "Check whether the device, implanted or external access route, anatomical site, electrode, waveform, pulse width, frequency, intensity, duty cycle, and session exposure match.",
  },
  {
    number: "02",
    title: "Is it the same population and setting?",
    description:
      "A clinical population receiving specialist care is not interchangeable with healthy consumers using a wellness routine. Eligibility rules, comorbidities, medications, and supervision matter.",
  },
  {
    number: "03",
    title: "Is it the same intended use?",
    description:
      "A disease indication, an investigational protocol, a physiological research question, and a general-wellness routine support different kinds of claims.",
  },
  {
    number: "04",
    title: "Is it the same outcome?",
    description:
      "A change in imaging, HRV, sensation, feasibility, tolerability, or a symptom score does not establish every other outcome. Use the outcome the study actually measured.",
  },
  {
    number: "05",
    title: "Is there a product-specific evidence bridge?",
    description:
      "A responsible product claim needs documented relevance between the tested intervention and the final product, its instructions, intended use, exposure, and target population.",
  },
] as const;

const safetyPrinciples = [
  {
    title: "Non-invasive does not mean risk-free",
    description:
      "Avoiding implantation removes the surgical procedure and implanted hardware from the comparison. It does not remove the need for product-specific contraindications, precautions, stop-use guidance, or professional advice where relevant.",
  },
  {
    title: "Implanted and external adverse-event profiles should not be blended",
    description:
      "Surgical and implanted-system events belong to implanted VNS. Local skin or ear-contact events, discomfort, headache, dizziness, and other reported events in external studies belong to their tested methods and exposures.",
  },
  {
    title: "Missing information remains uncertainty",
    description:
      "The absence of a warning on a marketing page is not proof that a product is suitable for everyone. Check the current official instructions and seek qualified guidance for medical questions.",
  },
  {
    title: "Current labeling is the authority for a specific product",
    description:
      "Regulatory status, indications, contraindications, age limits, interactions, and instructions can differ by product and jurisdiction. Verify the current official information rather than relying on a category summary.",
  },
] as const;

const sourceCards = [
  {
    type: "OFFICIAL DEVICE RECORD",
    title: "FDA PMA P970003 — VNS Therapy System",
    description:
      "The FDA record identifies an implanted VNS system and its product-specific approval history. It is useful for understanding what an implanted clinical system is, not for making claims about external consumer devices.",
    href: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P970003",
    linkLabel: "Open FDA record",
  },
  {
    type: "CATEGORY REVIEW",
    title: "Surgically implanted and non-invasive vagus nerve stimulation",
    description:
      "Ben-Menachem and colleagues review implanted and non-invasive approaches as related but distinct categories. Read the review with product, protocol, indication, and date-specific limits in mind.",
    href: "https://pubmed.ncbi.nlm.nih.gov/25614179/",
    linkLabel: "Open PubMed record",
  },
  {
    type: "REPORTING STANDARDS",
    title: "International consensus reporting standards for tVNS",
    description:
      "Farmer and colleagues show why stimulation site, device, electrode, parameters, participant characteristics, comparator, and outcomes need detailed reporting before evidence can be interpreted or transferred.",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
    linkLabel: "Open PubMed record",
  },
  {
    type: "ANATOMY REVIEW",
    title: "The anatomical basis for transcutaneous auricular VNS",
    description:
      "Butt and colleagues review auricular anatomy and the rationale for ear-based stimulation. Anatomical plausibility does not by itself establish clinical benefit or a product-specific effect.",
    href: "https://pubmed.ncbi.nlm.nih.gov/31742681/",
    linkLabel: "Open PubMed record",
  },
  {
    type: "SAFETY REVIEW",
    title: "Safety of transcutaneous auricular VNS",
    description:
      "Kim and colleagues synthesize adverse-event reporting across human taVNS studies. The evidence should be read alongside protocol variation, reporting quality, exclusions, and exposure duration.",
    href: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
    linkLabel: "Open PubMed record",
  },
  {
    type: "SYSTEMATIC REVIEW",
    title: "Safety and tolerability of transcutaneous VNS",
    description:
      "Redgrave and colleagues review safety and tolerability across transcutaneous VNS research. Findings remain method- and study-specific and do not replace the instructions for an individual product.",
    href: "https://pubmed.ncbi.nlm.nih.gov/30217648/",
    linkLabel: "Open PubMed record",
  },
] as const;

const faqs = [
  {
    question: "Is non-invasive VNS the same as implanted VNS?",
    answer:
      "No. They share a category name but differ in hardware, access route, stimulation site, protocol, intended use, safety context, regulation, follow-up, and evidence. A comparison should preserve those differences rather than treating VNS as one standardized intervention.",
  },
  {
    question: "Is non-invasive VNS automatically safer?",
    answer:
      "Non-invasive approaches avoid implant surgery and implanted hardware, which removes important surgical and implant-specific considerations. That does not establish universal safety. External devices still require product-specific precautions, contraindications, placement, stop-use guidance, and adverse-event information.",
  },
  {
    question: "Can implanted VNS evidence prove that a non-invasive device works?",
    answer:
      "No. Implanted evidence belongs to the tested system, indication, population, programming, comparator, and outcome. It may help explain the wider VNS field, but it does not automatically prove the effect of an external device or a wellness product.",
  },
  {
    question: "What is the difference between cervical nVNS and auricular taVNS?",
    answer:
      "Cervical nVNS applies stimulation externally at the neck. Auricular taVNS applies stimulation at the outer ear. The target region, electrode, contact, device design, waveform, intensity, session protocol, evidence, and intended use can all differ.",
  },
  {
    question: "Where does Neuvago fit in this comparison?",
    answer:
      "Neuvago is positioned as a non-invasive, ear-based device and guided app for general-wellness routines. It is not an implanted clinical VNS system. Wider VNS and taVNS research provides educational context, not automatic product-specific proof.",
  },
  {
    question: "Does a stronger sensation mean stronger vagus nerve engagement?",
    answer:
      "No. Sensation can reflect skin contact, electrode geometry, placement, current density, and individual sensitivity. Stronger feeling is not proof of selective target engagement, better outcomes, or a better session. Follow the product instructions and comfort guidance.",
  },
] as const;

const relatedGuides = [
  {
    title: "Vagus nerve stimulation",
    description:
      "Start with the broad VNS pillar for a plain-language overview of the category, pathways, method families, and evidence boundaries.",
    href: "/learn/vagus-nerve-stimulation",
    label: "Read the VNS guide",
  },
  {
    title: "Non-invasive vagus nerve stimulation",
    description:
      "Go deeper into external VNS, tVNS, taVNS, product evaluation, safety boundaries, and responsible wellness positioning.",
    href: "/learn/non-invasive-vagus-nerve-stimulation",
    label: "Read the nVNS guide",
  },
  {
    title: "Safety and tolerability",
    description:
      "Review adverse-event reporting, protocol variation, tolerability, and why safety evidence must be interpreted by method and population.",
    href: "/research/topics/safety-and-tolerability",
    label: "Review safety research",
  },
  {
    title: "How to choose a VNS device",
    description:
      "Move from category clarity to a product-level framework for method, intended use, evidence, instructions, support, ownership, and live purchase terms.",
    href: "/learn/how-to-choose-a-vagus-nerve-stimulation-device",
    label: "Open the buyer guide",
  },
] as const;

export default function ImplantedVsNonInvasiveVnsPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: publishedAt,
    dateModified: modifiedAt,
    keywords: [
      "implanted vs non-invasive VNS",
      "implanted vagus nerve stimulation",
      "non-invasive vagus nerve stimulation",
      "surgical VNS vs external VNS",
      "cervical nVNS",
      "transcutaneous VNS",
      "auricular VNS",
      "taVNS",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Implanted vs non-invasive VNS", path },
    ],
  });
  const faqStructuredData = buildFAQStructuredData(faqs);

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main
      data-wave2c2a-page
      className="bg-[#f7f4ef] text-[#1f1f1c]"
    >
      <JsonLd
        data={structuredData}
        idPrefix="learn-implanted-vs-non-invasive-vns"
      />

      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              LEARN / VNS COMPARISON
            </p>
            <h1 className="mt-5 text-4xl font-medium leading-[1.03] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Implanted vs non-invasive vagus nerve stimulation
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-[#5f5a52] md:text-xl">
              Implanted and non-invasive systems share the VNS label, but they
              are not the same intervention. The meaningful comparison is not
              simply surgical versus external. It is hardware, anatomical
              access, protocol, intended use, safety context, evidence, and the
              exact product being discussed.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#6a645d]">
              This guide explains category differences in plain language. It
              does not recommend a medical treatment or replace the current
              labeling, instructions, and professional guidance for a specific
              product.
            </p>
            <div
              data-conversion-placement="hero-actions"
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#comparison-table"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Compare the categories
              </a>
              <Link
                href="/learn/non-invasive-vagus-nerve-stimulation"
                className="rounded-full border border-[#cfc7bc] px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Read the non-invasive VNS guide
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-6 text-sm leading-6 text-[#706a62]">
              <span>By Neuvago Editorial Team</span>
              <span>Source review: Neuvago Source Review</span>
              <span>Published 31 August 2026</span>
              <span>About 12 minutes</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/55 p-7 shadow-[0_20px_80px_rgba(31,31,28,0.07)] md:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7a756c]">
              SHORT ANSWER
            </p>
            <div className="mt-6 space-y-6">
              {shortAnswers.map((item) => (
                <article key={item.title} className="border-t border-black/10 pt-5 first:border-t-0 first:pt-0">
                  <h2 className="text-lg font-medium leading-7 tracking-[-0.02em]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PlainEnglishSummary
        eyebrow="PLAIN-ENGLISH SUMMARY"
        title="One umbrella term, several different interventions."
        description="VNS is a category, not one standardized device or protocol. Implanted clinical systems, external neck stimulation, transcutaneous methods, and auricular stimulation can differ substantially. Evidence and safety information should stay attached to the exact method, device, protocol, population, intended use, and outcome that were studied."
      />

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              CATEGORY MAP
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The four labels readers most often need to separate.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These families can sit under the wider VNS umbrella while using
              different access routes and product architectures. The names are
              useful only when the method details remain visible.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {categoryCards.map((card) => (
              <article
                key={card.title}
                data-wave2c2a-category-card
                className="rounded-[1.75rem] border border-black/5 bg-white/60 p-7 shadow-[0_10px_35px_rgba(31,31,28,0.035)] md:p-8"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7a756c]">
                  {card.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.03em]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline"
                >
                  {card.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="comparison-table"
        className="scroll-mt-24 border-b border-black/5 bg-[#eee7dd]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              PRIMARY COMPARISON
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Implanted, cervical, and auricular VNS side by side.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The table is a category map, not a suitability decision or a
              ranking. Product-specific labeling and instructions remain the
              authority for an individual system.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/65 shadow-[0_12px_45px_rgba(31,31,28,0.04)]">
            <table
              data-wave2c2a-comparison-table
              className="min-w-[1040px] border-collapse text-left"
            >
              <thead>
                <tr className="border-b border-black/10 bg-[#e5ddd2]">
                  <th className="w-[18%] px-6 py-5 text-sm font-medium">Question</th>
                  <th className="w-[27%] px-6 py-5 text-sm font-medium">Implanted clinical VNS</th>
                  <th className="w-[27%] px-6 py-5 text-sm font-medium">Cervical non-invasive VNS</th>
                  <th className="w-[28%] px-6 py-5 text-sm font-medium">Auricular / transcutaneous VNS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.aspect} className="border-b border-black/8 last:border-b-0">
                    <th className="px-6 py-6 align-top text-sm font-medium leading-6">
                      {row.aspect}
                    </th>
                    <td className="px-6 py-6 align-top text-sm leading-7 text-[#5f5a52]">
                      {row.implanted}
                    </td>
                    <td className="px-6 py-6 align-top text-sm leading-7 text-[#5f5a52]">
                      {row.cervical}
                    </td>
                    <td className="px-6 py-6 align-top text-sm leading-7 text-[#5f5a52]">
                      {row.auricular}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-2xl lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              IMPLANTED VNS
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A clinical system, not simply a stronger version of external VNS.
            </h2>
          </div>
          <div className="space-y-7 text-base leading-8 text-[#5f5a52] md:text-lg">
            <p>
              Implanted VNS uses an internal pulse generator and an implanted
              lead. The system is placed surgically, programmed within a
              clinical pathway, and followed over time. Its indications,
              contraindications, warnings, settings, interactions, and outcomes
              belong to that exact system and its official documentation.
            </p>
            <p>
              The clinical pathway changes the comparison. Patient selection,
              surgical exposure, anesthesia, wound and lead considerations,
              programming, follow-up, device interactions, replacement, and
              long-term management are part of the implanted context. Those
              factors should not be imported into an external-device safety
              summary, and external-device convenience should not be used to
              simplify an implanted treatment decision.
            </p>
            <p>
              Implanted research can help readers understand the history and
              breadth of VNS. It cannot automatically establish that another
              access route reaches the same fibers, delivers a comparable dose,
              produces the same physiological response, or supports the same
              intended use or outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-2xl lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              NON-INVASIVE VNS
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              External delivery is a starting distinction—not a complete protocol.
            </h2>
          </div>
          <div className="space-y-7 text-base leading-8 text-[#5f5a52] md:text-lg">
            <p>
              Non-invasive VNS means that no stimulation lead is surgically
              implanted. That definition still leaves many open questions: neck
              or ear, left or right, handheld or wearable, dry or conductive
              contact, electrode size, waveform, frequency, pulse width,
              current or voltage control, duty cycle, intensity, session length,
              schedule, and intended use.
            </p>
            <p>
              Cervical nVNS and auricular taVNS should therefore not be blended
              into one generic evidence profile. Even within auricular research,
              studies can differ by cymba conchae, tragus, other ear locations,
              electrode geometry, side, sham design, titration, exposure, and
              participant population.
            </p>
            <p>
              A product page should answer the practical questions that a
              category label cannot: where the contact goes, how intensity is
              adjusted, what a session involves, who should seek advice, when
              use should stop, what is included, what evidence belongs to the
              final product, and what the product is intended to do.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#e8ded0]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              EVIDENCE TRANSFER
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Five questions before carrying a finding from one VNS method to another.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Shared terminology is not a substitute for applicability. Record
              the differences before deciding whether a study is background
              science, method-level evidence, or relevant product evidence.
            </p>
          </div>
          <div className="mt-14 border-y border-black/10">
            {evidenceTransferQuestions.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 border-b border-black/10 py-7 last:border-b-0 md:grid-cols-[5rem_0.7fr_1.3fr] md:items-start md:py-9"
              >
                <span className="text-sm font-medium text-[#8a847b]">{item.number}</span>
                <h3 className="text-xl font-medium leading-7 tracking-[-0.025em] md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                SAFETY CONTEXT
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Compare risk contexts without declaring a universal winner.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#5f5a52] md:text-lg">
                The useful question is not whether one broad category is simply
                safe or unsafe. It is which risks, precautions, supervision,
                exposure, and uncertainties belong to the exact product and use
                case.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/research/topics/safety-and-tolerability"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white"
                >
                  Review safety research
                </Link>
                <Link
                  href="/legal/intended-use"
                  className="rounded-full border border-[#cfc7bc] px-6 py-3 text-sm font-medium"
                >
                  Review intended use
                </Link>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {safetyPrinciples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-black/5 bg-white/60 p-6 md:p-7"
                >
                  <h3 className="text-xl font-medium leading-7 tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-12 max-w-4xl rounded-[1.25rem] border border-black/8 bg-[#efe7dc] p-6 text-sm leading-7 text-[#5f5a52]">
            General information only. This page is not medical advice,
            diagnosis, treatment guidance, or a suitability assessment. Review
            the current product instructions and the medical disclaimer, and
            consult a qualified healthcare professional where your health,
            implanted devices, pregnancy, neurological history, heart rhythm,
            medications, or treatment plan may be relevant. See the{" "}
            <Link href="/legal/medical-disclaimer" className="font-medium underline underline-offset-4">
              medical disclaimer
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="max-w-2xl lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              NEUVAGO CONTEXT
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              An ear-based wellness system needs its own evidence and boundaries.
            </h2>
          </div>
          <div className="space-y-7 text-base leading-8 text-[#5f5a52] md:text-lg">
            <p>
              Neuvago is positioned as a non-invasive, ear-based device and
              guided app for short, repeatable general-wellness routines. It is
              not an implanted clinical VNS system, and it should not borrow an
              implanted indication or clinical outcome simply because both use
              the VNS label.
            </p>
            <p>
              Wider taVNS and VNS research can provide anatomical, mechanistic,
              feasibility, tolerability, and methods context. A Neuvago-specific
              claim still needs to match the final hardware, ear contact,
              stimulation parameters, instructions, intended use, target
              population, and evidence that actually belongs to the product.
            </p>
            <p>
              Sensation is not proof of selective vagus-nerve engagement, and
              stronger stimulation is not automatically better. A responsible
              routine prioritizes correct placement, comfortable contact,
              gradual adjustment, clear stop-use guidance, and the current user
              instructions.
            </p>
          </div>
        </div>
      </section>

      <section
        data-conversion-placement="comparison-product-bridge"
        className="border-b border-black/5 bg-[#dfd4c5]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#746e66]">
              FROM CATEGORY TO PRODUCT
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              See how Neuvago defines its own method and routine.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Move from the broad VNS comparison to the actual device, app,
              intended-use boundary, session flow, and product-specific
              information.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              href="/how-it-works"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white"
            >
              See how Neuvago works
            </Link>
            <Link
              href="/product"
              className="rounded-full border border-[#aaa195] bg-white/35 px-6 py-3 text-sm font-medium"
            >
              Explore Neuvago
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              SOURCE BASIS
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Primary records and reviews used for category boundaries.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These sources support definitions, method distinctions, anatomy,
              reporting standards, and safety context. They are not presented as
              direct evidence that Neuvago produces a clinical outcome.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {sourceCards.map((source) => (
              <article
                key={source.title}
                data-wave2c2a-source-card
                className="rounded-[1.5rem] border border-black/5 bg-white/60 p-7"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7a756c]">
                  {source.type}
                </p>
                <h3 className="mt-4 text-xl font-medium leading-7 tracking-[-0.025em] md:text-2xl">
                  {source.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {source.description}
                </p>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline"
                >
                  {source.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd]">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The distinctions that prevent category confusion.
            </h2>
          </div>
          <div className="mt-12 border-t border-black/10">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                data-wave2c2a-faq
                className="group border-b border-black/10 py-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium leading-7 md:text-xl">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="text-[#7a756c] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-[#5f5a52] md:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        data-conversion-placement="related-guides"
        className="bg-[#e8ded0]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              CONTINUE EXPLORING
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Keep category, safety, and product questions on the right pages.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <article
                key={guide.href}
                className="rounded-[1.5rem] border border-black/5 bg-white/45 p-7"
              >
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em]">
                  {guide.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {guide.description}
                </p>
                <Link
                  href={guide.href}
                  className="mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline"
                >
                  {guide.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
