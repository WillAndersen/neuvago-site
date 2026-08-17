import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { getPublishedNorwegianKnowledgeArticles } from "@/content/knowledge/no/registry";
import { buildNorwegianKnowledgeHubStructuredData } from "@/lib/seo/knowledge-article";

const title = "Kunnskap om vagusnerven, regulering og VNS";
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
  const structuredData = buildNorwegianKnowledgeHubStructuredData();

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="no-kunnskap" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
              Kunnskap
            </p>
            <h1 className="mt-6 max-w-[12ch] text-[clamp(3.1rem,10vw,7.1rem)] font-medium leading-[0.88] tracking-[-0.08em]">
              {title}
            </h1>
          </div>

          <div className="max-w-2xl rounded-[2rem] border border-black/6 bg-[#fbf8f2]/75 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8">
            <p className="text-lg leading-8 text-[#514c45]">
              Her bygger vi en norsk kunnskapsbase som skiller tydelig mellom anatomi, forskningsfelt, produktkategori og Neuvagos faktiske tiltenkte bruk. Målet er å forklare presist uten unødvendig fagspråk eller overdrevne løfter.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[88rem]">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">
              Wave 1A · grunnbegrepene
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
              Start med artiklene som etablerer hele begrepshierarkiet
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              Første batch dekker vagusnerven og bygger deretter videre mot vagusnervestimulering, ikke-invasive metoder, tVNS og aurikulær stimulering. Sidene publiseres kontrollert etter kilde- og teknisk QA.
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
              Neste sider i Wave 1A: vagusnervestimulering, ikke-invasiv vagusnervestimulering, transkutan VNS, aurikulær VNS og sammenligning av implantert og ikke-invasiv VNS.
            </p>
          </div>
        </div>
      </section>

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

          <div className="mt-10 grid gap-5 md:grid-cols-3">
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
