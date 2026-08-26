import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { getPublishedNorwegianKnowledgeArticles } from "@/content/knowledge/no/registry";
import { getPublishedDecisionGuidesForLocale } from "@/content/decision-guides/registry";
import { buildNorwegianKnowledgeHubStructuredData } from "@/lib/seo/knowledge-article";

const title = "Forstå nervesystemet ditt.";
const metaTitle = "Kunnskap | Vagusnerven, VNS og regulering | Neuvago Norge";
const description =
  "Norske, kildebaserte forklaringer om vagusnerven, vagusnervestimulering, VNS, tVNS, taVNS og nervesystemets regulering.";
const path = "/no/kunnskap";

export const metadata: Metadata = {
  title: metaTitle,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": "/learn",
      "nb-NO": path,
      "x-default": "/learn",
    },
  },
  openGraph: {
    title: metaTitle,
    description,
    url: path,
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description,
  },
};

const foundationCards = [
  {
    title: "Ordliste for VNS og nervesystemet",
    description:
      "Slå opp forkortelser, metodebegreper, anatomi, HRV, vagal tone og sikkerhet uten å åpne en full pilarartikkel.",
    href: "/no/ordliste",
    label: "Definisjoner og aliaser",
  },
  {
    title: "Forskning og kunnskapsgrunnlag",
    description:
      "Gå videre til forskningshuben når du vil se studier, metode, sikkerhet, tolerabilitet og tydelige tolkningsgrenser.",
    href: "/no/forskning",
    label: "Norsk forskningshub",
  },
  {
    title: "Slik fungerer Neuvago",
    description:
      "Se den praktiske forklaringen av enheten, appen, øktene og hvordan systemet er bygget opp.",
    href: "/no/slik-fungerer-det",
    label: "Praktisk side",
  },
  {
    title: "Tiltenkt bruk",
    description:
      "Les hvilke rammer som gjelder for Neuvago som velværeprodukt, og hva produktet ikke er ment å erstatte.",
    href: "/no/juridisk/tiltenkt-bruk",
    label: "Juridisk og regulatorisk",
  },
] as const;

const faq = [
  {
    question: "Er kunnskapssidene medisinsk rådgivning?",
    answer:
      "Nei. Sidene gir generell anatomi-, produkt- og forskningskontekst. De erstatter ikke medisinsk rådgivning, diagnose eller behandling.",
  },
  {
    question: "Hvordan velges kildene?",
    answer:
      "Vi prioriterer identifiserbare fagfellevurderte publikasjoner, systematiske oversikter og offisielle kilder. Kildenes relevans og begrensninger skal beskrives, og generell forskning skal ikke presenteres som direkte dokumentasjon for Neuvago.",
  },
  {
    question: "Hvorfor publiseres artiklene i kontrollerte batcher?",
    answer:
      "Hver batch gjennomgår kildekontroll, språk, metadata, internlenking, structured data og teknisk indekseringskontroll før neste del av kunnskapsbasen åpnes.",
  },
] as const;

export default function NorwegianKnowledgeHubPage() {
  const articles = getPublishedNorwegianKnowledgeArticles();
  const decisionGuides = getPublishedDecisionGuidesForLocale("no");
  const structuredData = buildNorwegianKnowledgeHubStructuredData();

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="no-kunnskap" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
              KUNNSKAP
            </p>
            <h1 className="mt-6 max-w-[16ch] text-[clamp(3.1rem,8vw,6.6rem)] font-medium leading-[0.95] tracking-[-0.07em]">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              Utforsk tydelige, forskningsinformerte artikler om vagusnerven,
              regulering av nervesystemet, stress, søvn, restitusjon og
              ikke-invasiv vagusnervestimulering.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Begynn med det grunnleggende, eller utforsk spørsmålene og
              mønstrene som er viktige for deg.
            </p>
            <div className="mt-10">
              <Link
                href="#artikler"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Utforsk artiklene
              </Link>
            </div>
          </div>

          <div aria-hidden="true" className="hidden min-h-[22rem] lg:block" />
        </div>
      </section>

      <section
        id="artikler"
        className="scroll-mt-28 border-b border-black/5 bg-[#eee7dd] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-[88rem]">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
              Kunnskapsbibliotek
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
              Start med grunnbegrepene og gå videre etter behov
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              Biblioteket dekker vagusnerven, VNS, ikke-invasive metoder, autonom fysiologi, regulering, vagal tone, HRV og øreanatomi. Artiklene publiseres kontrollert etter kilde-, språk- og teknisk QA.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={article.path}
                className="group rounded-[1.75rem] border border-black/6 bg-[#fbf8f2] p-6 shadow-[0_18px_64px_rgba(31,31,28,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_90px_rgba(31,31,28,0.1)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#8a7f72]">
                      {article.hubLabel}
                    </p>
                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                      {article.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-black/10 px-3 py-1 text-sm text-[#6b6257] transition group-hover:bg-[#1f1f1c] group-hover:text-white">
                    Åpne
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-[#5f5a52]">
                  {article.hubSummary}
                </p>
                <p className="mt-5 text-sm text-[#756e65]">
                  Omtrent {article.readingTimeMinutes} min · Oppdatert {article.modifiedAt}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-dashed border-black/12 bg-white/35 p-6">
            <p className="text-sm leading-7 text-[#5f5a52]">
              Anbefalt start: vagusnerven → vagusnervestimulering → ikke-invasiv VNS. Gå deretter videre til autonom regulering, vagal tone, HRV eller øreanatomi etter hva du vil forstå.
            </p>
          </div>
        </div>
      </section>

      {decisionGuides.length > 0 ? (
        <section className="border-b border-black/5 bg-[#f2eee8] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[88rem]">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
                Beslutningsguider
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                Sammenlign metode og dokumentasjon før du sammenligner løfter
              </h2>
              <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
                Guidene gjør anatomi, enhetsdesign, tiltenkt bruk, dokumentasjon, sikkerhet og praktisk bruk om til tydelige vurderingskriterier. De rangerer ikke merker og kårer ikke en universell vinner.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {decisionGuides.map((guide) => (
                <Link
                  key={guide.path}
                  href={guide.path}
                  className="group rounded-[1.75rem] border border-black/6 bg-[#fbf8f2] p-6 shadow-[0_18px_64px_rgba(31,31,28,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_90px_rgba(31,31,28,0.1)] sm:p-7"
                >
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#8a7f72]">
                    {guide.hubLabel}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em]">
                    {guide.hubTitle}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-[#5f5a52]">
                    {guide.hubSummary}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-medium underline-offset-4 group-hover:underline">
                    Åpne beslutningsguiden
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[88rem]">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
              Videre veier
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
              Gå fra grunnkunnskap til forskning, produkt og sikkerhet
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {foundationCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-[1.75rem] border border-black/6 bg-[#fbf8f2] p-6 shadow-[0_18px_64px_rgba(31,31,28,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_90px_rgba(31,31,28,0.1)] sm:p-7"
              >
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#8a7f72]">
                  {card.label}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em]">
                  {card.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[#5f5a52]">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#f2eee8] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-5 lg:grid-cols-3">
          {faq.map((item) => (
            <article
              key={item.question}
              className="rounded-[1.5rem] border border-black/6 bg-white/55 p-6"
            >
              <h2 className="text-lg font-medium tracking-[-0.03em]">
                {item.question}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-black/6 bg-[#1f1f1c] p-7 text-white sm:p-9">
          <p className="max-w-3xl text-xl leading-8 text-white/82">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/no/forskning"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#f2eee8]"
            >
              Utforsk forskning
            </Link>
            <Link
              href="/no/slik-fungerer-det"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Se hvordan Neuvago fungerer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
