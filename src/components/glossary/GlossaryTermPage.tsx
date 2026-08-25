import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import {
  getGlossaryTermById,
  getGlossaryTermPair,
} from "@/content/glossary/registry";
import type { GlossaryLocale, GlossaryTerm } from "@/content/glossary/types";
import { buildGlossaryTermStructuredData } from "@/lib/seo/glossary";

const copy = {
  en: {
    glossary: "Glossary",
    glossaryHref: "/glossary",
    definition: "Definition",
    aliases: "Aliases and abbreviations",
    full: "Expanded definition",
    boundaries: "What the term does not establish",
    matters: "Why the distinction matters",
    pillar: "Primary pillar",
    sources: "Sources and further reading",
    related: "Related terms",
    open: "Open resource",
    relatedOpen: "Open definition",
    dates: "Editorial record",
    published: "Published",
    updated: "Reviewed",
    scopeTitle: "A definition is an entry point, not a product claim",
    scopeText:
      "This glossary entry supports general education. It does not diagnose, recommend treatment, or transfer findings from one VNS method, protocol, or device to another.",
    back: "Back to glossary",
  },
  no: {
    glossary: "Ordliste",
    glossaryHref: "/no/ordliste",
    definition: "Definisjon",
    aliases: "Aliaser og forkortelser",
    full: "Utvidet definisjon",
    boundaries: "Hva begrepet ikke dokumenterer",
    matters: "Hvorfor skillet er viktig",
    pillar: "Primær pilar",
    sources: "Kilder og videre lesning",
    related: "Relaterte begreper",
    open: "Åpne ressurs",
    relatedOpen: "Åpne definisjon",
    dates: "Redaksjonell historikk",
    published: "Publisert",
    updated: "Kontrollert",
    scopeTitle: "En definisjon er et startpunkt – ikke en produktpåstand",
    scopeText:
      "Denne ordlisteoppføringen gir generell kunnskap. Den diagnostiserer ikke, anbefaler ikke behandling og overfører ikke funn fra én VNS-metode, protokoll eller enhet til en annen.",
    back: "Tilbake til ordlisten",
  },
} as const;

const categoryLabels = {
  en: {
    anatomy: "Anatomy",
    "stimulation-methods": "Stimulation methods",
    "nervous-system": "Nervous system",
    "measurement-interpretation": "Measurement and interpretation",
    "safety-research": "Safety and research",
  },
  no: {
    anatomy: "Anatomi",
    "stimulation-methods": "Stimuleringsmetoder",
    "nervous-system": "Nervesystemet",
    "measurement-interpretation": "Måling og tolkning",
    "safety-research": "Sikkerhet og forskning",
  },
} as const;

function formatDate(value: string, locale: GlossaryLocale) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
}

export function GlossaryTermPage({ term }: { term: GlossaryTerm }) {
  const labels = copy[term.locale];
  const pair = getGlossaryTermPair(term.id);
  const relatedTerms = term.relatedTermIds
    .map((id) => getGlossaryTermById(term.locale, id))
    .filter((value): value is GlossaryTerm => Boolean(value));
  const structuredData = buildGlossaryTermStructuredData(term);
  const pairHref = term.locale === "en" ? pair?.norwegian.path : pair?.english.path;
  const pairLabel = term.locale === "en" ? "Norsk bokmål" : "English";

  return (
    <main className="min-w-0 bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix={term.locale === "en" ? "glossary-term" : "ordliste-begrep"}
      />

      <section className="border-b border-black/6 bg-[#e9eeea]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[#66736a]">
            <Link href={labels.glossaryHref} className="underline-offset-4 hover:underline">
              {labels.glossary}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{term.term}</span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#66736a]">
                {categoryLabels[term.locale][term.category]}
              </p>
              <h1 className="mt-5 max-w-[16ch] break-words text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.065em] [hyphens:auto]">
                {term.term}
              </h1>
              {term.termCode ? (
                <p className="mt-5 text-xl font-medium text-[#536057]">
                  {term.termCode}
                </p>
              ) : null}
            </div>

            <div className="rounded-[2rem] border border-black/6 bg-white/58 p-7 shadow-[0_20px_70px_rgba(31,31,28,0.07)] sm:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
                {labels.definition}
              </p>
              <p className="mt-4 text-lg leading-8 text-[#424a44] md:text-xl md:leading-9">
                {term.shortDefinition}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {pairHref ? (
                  <Link
                    href={pairHref}
                    className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium transition hover:bg-white"
                  >
                    {pairLabel}
                  </Link>
                ) : null}
                <Link
                  href={labels.glossaryHref}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition hover:bg-white/70"
                >
                  {labels.back}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-[88rem] gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
              {labels.aliases}
            </p>
            <p className="mt-4 text-base leading-8 text-[#5f5a52]">
              {[...(term.termCode ? [term.termCode] : []), ...term.aliases].join(" · ") || "—"}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
              {labels.dates}
            </p>
            <p className="mt-4 text-base leading-8 text-[#5f5a52]">
              {labels.published}: {formatDate(term.publishedAt, term.locale)} · {labels.updated}: {formatDate(term.modifiedAt, term.locale)}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
              {labels.full}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              {term.term}
            </h2>
          </div>
          <div className="space-y-6">
            {term.expandedDefinition.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-[#514c45] md:text-lg md:leading-9">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/6 bg-[#eee7dd] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-black/6 bg-[#fbf8f2] p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a7f72]">
              {labels.boundaries}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em]">
              {term.locale === "en" ? "Keep the category boundary visible" : "Hold kategorigrensen synlig"}
            </h2>
            <ul className="mt-7 space-y-4">
              {term.whatItIsNot.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-[#5f5a52]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#758078]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-black/6 bg-[#dfe8e1] p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              {labels.matters}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em]">
              {term.locale === "en" ? "Precision changes interpretation" : "Presisjon endrer tolkningen"}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#485149] md:text-lg">
              {term.whyItMatters}
            </p>
          </article>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
                {labels.pillar}
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                {term.primaryPillar.title}
              </h2>
            </div>
            <Link
              href={term.primaryPillar.href}
              className="group rounded-[2rem] border border-black/6 bg-[#fbf8f2] p-7 shadow-[0_18px_64px_rgba(31,31,28,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_90px_rgba(31,31,28,0.09)] sm:p-9"
            >
              <p className="text-base leading-8 text-[#5f5a52] md:text-lg">
                {term.primaryPillar.description}
              </p>
              <span className="mt-6 inline-flex text-sm font-medium underline-offset-4 group-hover:underline">
                {term.primaryPillar.label}
              </span>
            </Link>
          </div>

          <div className="mt-16">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
              {labels.sources}
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {term.sourceLinks.map((source) => (
                <Link
                  key={source.href}
                  href={source.href}
                  className="group rounded-[1.75rem] border border-black/6 bg-white/60 p-6 transition hover:bg-white sm:p-7"
                >
                  <h3 className="text-2xl font-medium tracking-[-0.035em]">
                    {source.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#5f5a52]">
                    {source.description}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-medium underline-offset-4 group-hover:underline">
                    {source.label || labels.open}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/6 bg-[#f2eee8] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
            {labels.related}
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {relatedTerms.map((related) => (
              <Link
                key={related.id}
                href={related.path}
                className="group rounded-[1.5rem] border border-black/6 bg-[#fbf8f2] p-6 transition hover:-translate-y-0.5"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8a7f72]">
                  {categoryLabels[term.locale][related.category]}
                </p>
                <h3 className="mt-3 break-words text-xl font-medium tracking-[-0.035em] [hyphens:auto]">
                  {related.term}
                </h3>
                <span className="mt-5 inline-flex text-sm font-medium underline-offset-4 group-hover:underline">
                  {labels.relatedOpen}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#1f1f1c] p-7 text-white sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                {term.locale === "en" ? "Editorial scope" : "Redaksjonell avgrensning"}
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                {labels.scopeTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                {labels.scopeText}
              </p>
            </div>
            <Link
              href={labels.glossaryHref}
              className="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#eee7dd] lg:mt-0"
            >
              {labels.back}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
