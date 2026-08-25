import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import type {
  GlossaryCategoryId,
  GlossaryLocale,
  GlossaryTerm,
} from "@/content/glossary/types";
import { buildGlossaryHubStructuredData } from "@/lib/seo/glossary";

const copy = {
  en: {
    eyebrow: "Glossary",
    title: "Glossary of VNS and nervous system terms",
    lead:
      "Short, careful definitions that connect technical language to the deeper Learn and Research layers without turning an abbreviation into a claim.",
    pilot: "Curated bilingual collection",
    pilotText:
      "The glossary grows through reviewed bilingual term pairs across anatomy, stimulation methods, protocol parameters, nervous-system physiology, measurement, and safety. Aliases remain attached to canonical entries rather than creating duplicate indexable pages.",
    browse: "Browse by letter",
    categories: "Term categories",
    entries: "Definitions",
    aliases: "Also used as",
    open: "Open definition",
    noAlias: "No additional aliases",
    useTitle: "Use the glossary as a map—not as a substitute for the full guide",
    useText:
      "Each entry gives a compact definition, shows what the term does not establish, and points to a primary pillar plus research context. Follow those links when you need evidence, method detail, or product boundaries.",
    primaryCta: "Go to the Learn hub",
    primaryHref: "/learn",
    secondaryCta: "Explore research",
    secondaryHref: "/research",
  },
  no: {
    eyebrow: "Ordliste",
    title: "Ordliste for VNS og nervesystemet",
    lead:
      "Korte og forsiktige definisjoner som kobler fagspråk til kunnskaps- og forskningslagene uten å gjøre en forkortelse til en påstand.",
    pilot: "Kurert tospråklig samling",
    pilotText:
      "Ordlisten utvides med kvalitetssikrede tospråklige begrepspar innen anatomi, stimuleringsmetoder, protokollparametere, nervesystemfysiologi, måling og sikkerhet. Aliaser samles på kanoniske oppføringer i stedet for å skape dupliserte indekserbare sider.",
    browse: "Bla etter bokstav",
    categories: "Begrepskategorier",
    entries: "Definisjoner",
    aliases: "Også brukt som",
    open: "Åpne definisjon",
    noAlias: "Ingen ekstra aliaser",
    useTitle: "Bruk ordlisten som kart – ikke som erstatning for hovedartikkelen",
    useText:
      "Hver oppføring gir en kort definisjon, viser hva begrepet ikke dokumenterer og peker til en primær pilar og relevant forskningskontekst. Følg lenkene når du trenger evidens, metodedetaljer eller produktgrenser.",
    primaryCta: "Gå til kunnskapssenteret",
    primaryHref: "/no/kunnskap",
    secondaryCta: "Utforsk forskning",
    secondaryHref: "/no/forskning",
  },
} as const;

const categoryLabels: Record<
  GlossaryLocale,
  Record<GlossaryCategoryId, string>
> = {
  en: {
    anatomy: "Anatomy",
    "stimulation-methods": "Stimulation methods",
    "nervous-system": "Nervous system",
    "measurement-interpretation": "Measurement and interpretation",
    "safety-research": "Safety and research",
    "protocol-parameters": "Protocol and stimulation parameters",
  },
  no: {
    anatomy: "Anatomi",
    "stimulation-methods": "Stimuleringsmetoder",
    "nervous-system": "Nervesystemet",
    "measurement-interpretation": "Måling og tolkning",
    "safety-research": "Sikkerhet og forskning",
    "protocol-parameters": "Protokoll og stimuleringsparametere",
  },
};

function firstLetter(value: string, locale: GlossaryLocale) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .charAt(0)
    .toLocaleUpperCase(locale === "no" ? "nb-NO" : "en-US");
}

export function GlossaryHubPage({
  locale,
  terms,
}: {
  locale: GlossaryLocale;
  terms: readonly GlossaryTerm[];
}) {
  const labels = copy[locale];
  const collator = new Intl.Collator(locale === "no" ? "nb-NO" : "en-US");
  const sortedTerms = [...terms].sort((a, b) => collator.compare(a.term, b.term));
  const letters = [...new Set(sortedTerms.map((term) => firstLetter(term.term, locale)))];
  const categories = [...new Set(sortedTerms.map((term) => term.category))];
  const structuredData = buildGlossaryHubStructuredData(locale, sortedTerms);

  return (
    <main className="min-w-0 bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix={locale === "en" ? "glossary-hub" : "ordliste-hub"}
      />

      <section className="border-b border-black/6 bg-[#e9eeea]">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#66736a]">
              {labels.eyebrow}
            </p>
            <h1 className="mt-5 max-w-[13ch] break-words text-[clamp(3rem,8vw,6.4rem)] font-medium leading-[0.92] tracking-[-0.065em] [hyphens:auto]">
              {labels.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#485149] md:text-xl md:leading-9">
              {labels.lead}
            </p>
          </div>

          <aside className="rounded-[2rem] border border-black/6 bg-white/58 p-7 shadow-[0_20px_70px_rgba(31,31,28,0.07)] sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              {labels.pilot}
            </p>
            <p className="mt-4 text-base leading-8 text-[#4e554f]">
              {labels.pilotText}
            </p>
            <p className="mt-6 text-sm text-[#66736a]">
              {terms.length} {locale === "en" ? "published bilingual term pairs" : "publiserte tospråklige begrepspar"}
            </p>
          </aside>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#f2eee8]">
        <div className="mx-auto max-w-[88rem] px-5 py-12 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
                {labels.browse}
              </p>
              <nav className="mt-4 flex flex-wrap gap-2" aria-label={labels.browse}>
                {letters.map((letter) => (
                  <a
                    key={letter}
                    href={`#letter-${letter.toLocaleLowerCase()}`}
                    className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 px-3 text-sm font-medium transition hover:bg-white"
                  >
                    {letter}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
                {labels.categories}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => {
                  const count = sortedTerms.filter((term) => term.category === category).length;
                  return (
                    <span
                      key={category}
                      className="rounded-full border border-black/8 bg-[#fbf8f2] px-4 py-2 text-sm text-[#5f5a52]"
                    >
                      {categoryLabels[locale][category]} · {count}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
            {labels.entries}
          </p>

          <div className="mt-10 space-y-16">
            {letters.map((letter) => {
              const letterTerms = sortedTerms.filter(
                (term) => firstLetter(term.term, locale) === letter,
              );

              return (
                <section
                  key={letter}
                  id={`letter-${letter.toLocaleLowerCase()}`}
                  className="scroll-mt-32"
                >
                  <div className="flex items-end gap-5 border-b border-black/8 pb-4">
                    <h2 className="text-5xl font-medium tracking-[-0.06em]">
                      {letter}
                    </h2>
                    <p className="pb-1 text-sm text-[#7a756c]">
                      {letterTerms.length} {locale === "en" ? "terms" : "begreper"}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {letterTerms.map((term) => (
                      <Link
                        key={term.id}
                        href={term.path}
                        className="group flex min-w-0 flex-col rounded-[1.75rem] border border-black/6 bg-[#fbf8f2] p-6 shadow-[0_18px_64px_rgba(31,31,28,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_90px_rgba(31,31,28,0.09)] sm:p-7"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div className="min-w-0">
                            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#8a7f72]">
                              {categoryLabels[locale][term.category]}
                            </p>
                            <h3 className="mt-4 break-words text-2xl font-medium tracking-[-0.04em] [hyphens:auto]">
                              {term.term}
                            </h3>
                          </div>
                          {term.termCode ? (
                            <span className="shrink-0 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-[#625b52]">
                              {term.termCode}
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-5 flex-1 text-base leading-7 text-[#5f5a52]">
                          {term.hubSummary}
                        </p>

                        <div className="mt-6 border-t border-black/6 pt-5">
                          <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#8a7f72]">
                            {labels.aliases}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[#6b645b]">
                            {term.aliases.length > 0
                              ? term.aliases.join(" · ")
                              : labels.noAlias}
                          </p>
                          <span className="mt-5 inline-flex text-sm font-medium underline-offset-4 group-hover:underline">
                            {labels.open}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-black/6 bg-[#eee7dd] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-black/6 bg-[#1f1f1c] p-7 text-white sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
              {labels.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              {labels.useTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72 md:text-lg">
              {labels.useText}
            </p>
          </div>
          <div className="mt-8 flex shrink-0 flex-wrap gap-3 lg:mt-0 lg:justify-end">
            <Link
              href={labels.primaryHref}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#eee7dd]"
            >
              {labels.primaryCta}
            </Link>
            <Link
              href={labels.secondaryHref}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {labels.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
