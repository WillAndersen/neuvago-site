import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { getPublishedNorwegianResearchTopics } from "@/content/research/no/registry";
import { buildNorwegianResearchHubStructuredData } from "@/lib/seo/norwegian-research-topic";

const title =
  "Forskning | VNS, tVNS og sikkerhet | Neuvago Norge";
const description =
  "Norske forskningsoversikter om VNS, tVNS, taVNS, sikkerhet, HRV og ansvarlig tolkning av studier.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/no/forskning",
    languages: {
      "nb-NO": "/no/forskning",
      "en-US": "/research",
      "x-default": "/research",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/no/forskning",
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const principles = [
  {
    label: "Metode",
    title: "Skille VNS, nVNS, tVNS og taVNS",
    description:
      "Implantert, halsbasert og ørebasert stimulering har forskjellige enheter, doser, målgrupper og risikoprofiler.",
  },
  {
    label: "Evidens",
    title: "Se studiedesignet før konklusjonen",
    description:
      "Randomisering, sham, utvalg, parametere og oppfølging bestemmer hvor sterkt et resultat kan tolkes.",
  },
  {
    label: "Grense",
    title: "En studie dokumenterer ikke alle produkter",
    description:
      "Funn fra én protokoll eller klinisk sammenheng kan ikke automatisk brukes som Neuvago-spesifikk dokumentasjon.",
  },
] as const;

const pathways = [
  {
    title: "Start med et forskningstema",
    description:
      "Temaoversiktene samler metode, sentrale studier, begrensninger og relaterte kunnskapsartikler.",
    href: "/no/forskning/vagusnervestimulering",
    label: "Utforsk VNS-forskningen",
  },
  {
    title: "Les de norske kunnskapsartiklene",
    description:
      "Kunnskapssenteret forklarer begrepene i enklere språk før du går inn i studiedesign og evidensnivå.",
    href: "/no/kunnskap",
    label: "Gå til kunnskapssenteret",
  },
  {
    title: "Bruk det engelske studiebiblioteket",
    description:
      "Neuvagos engelske bibliotek inneholder studiesammendrag om blant annet fMRI, sikkerhet, HRV, søvn og implantert VNS.",
    href: "/research/studies",
    label: "Bla i studiesammendrag",
  },
] as const;

export default function NorwegianResearchHubPage() {
  const topics = getPublishedNorwegianResearchTopics();
  const structuredData =
    buildNorwegianResearchHubStructuredData();

  return (
    <main className="min-w-0 bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="no-forskning-hub"
      />

      <section className="border-b border-black/6 bg-[#e9eeea]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#66736a]">
            Forskning
          </p>
          <h1 className="mt-5 max-w-[18ch] break-words text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.96] tracking-[-0.06em] [hyphens:auto]">
            Forskning, metoder og evidens – tolket med
            forsiktighet
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#485149] md:text-xl md:leading-9">
            Neuvagos norske forskningslag organiserer
            vagusnervestimulering, tVNS, taVNS, sikkerhet,
            fysiologiske markører og kliniske utfall uten å gjøre
            hver studie til et produktløfte.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/no/forskning/vagusnervestimulering"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Start med VNS-forskning
            </Link>
            <Link
              href="/research"
              className="rounded-full border border-black/12 bg-white/40 px-6 py-3 text-sm font-medium transition hover:bg-white/70"
            >
              Åpne engelsk forskningshub
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/6">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              Slik leser vi forskning
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Tre prinsipper holder forskningslaget tydelig
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/6 bg-white/68 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.05)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#718076]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#596159]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#eef2ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              Norske forskningstemaer
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Start med temaet før enkeltstudien
            </h2>
            <p className="mt-5 text-base leading-8 text-[#596159] md:text-lg">
              Temaoversiktene viser hva feltet omfatter, hvilke
              studier som er sentrale, og hvor konklusjonene må
              begrenses.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {topics.map((topic) => (
              <article
                key={topic.slug}
                className="min-w-0 rounded-[1.75rem] border border-black/6 bg-white/74 p-7 shadow-[0_16px_52px_rgba(31,31,28,0.05)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#718076]">
                  {topic.hubLabel}
                </p>
                <h3 className="mt-3 break-words text-3xl font-medium tracking-[-0.035em]">
                  {topic.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#596159]">
                  {topic.hubSummary}
                </p>
                <Link
                  href={topic.path}
                  className="mt-7 inline-flex rounded-full bg-[#1f1f1c] px-5 py-2.5 text-sm font-medium text-white"
                >
                  Åpne forskningstemaet
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              Veier videre
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Velg detaljnivået du trenger
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pathways.map((item) => (
              <article
                key={item.href}
                className="rounded-[1.5rem] border border-black/6 bg-white/68 p-6"
              >
                <h3 className="text-2xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-medium underline decoration-black/20 underline-offset-4"
                >
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#eee7dd]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#786e64]">
              Ansvarlig grense
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Forskningskontekst er ikke det samme som
              Neuvago-dokumentasjon
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Studier kan forklare metode, mekanismehypoteser,
              sikkerhet og mulige utfall. Produktspesifikke
              påstander må likevel bygge på Neuvagos ferdige
              maskinvare, tiltenkte bruk, testing, risikostyring og
              bruksanvisning.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-black/6 bg-white/70 p-7">
            <h3 className="text-2xl font-medium">
              Tillit bygges når grensene er synlige
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
              Les forskningen sammen med Neuvagos tiltenkte bruk,
              medisinske ansvarsfraskrivelse og norske
              sikkerhetsartikler.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/no/juridisk/tiltenkt-bruk"
                className="rounded-full bg-[#1f1f1c] px-5 py-2.5 text-sm font-medium text-white"
              >
                Tiltenkt bruk
              </Link>
              <Link
                href="/no/kunnskap/er-vagusnervestimulering-trygt"
                className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium"
              >
                Sikkerhetsguide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
