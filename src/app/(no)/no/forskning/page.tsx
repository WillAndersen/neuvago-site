import type { Metadata } from "next";

const page = {
  "file": "src/app/(no)/no/forskning/page.tsx",
  "path": "/no/forskning",
  "englishPath": "/research",
  "title": "Forskning og kunnskapsgrunnlag",
  "metaTitle": "Forskning | VNS, tVNS og sikkerhet | Neuvago Norge",
  "description": "En norsk startside for forskningskontekst, VNS, tVNS, sikkerhet, tolerabilitet og hvordan Neuvago tolker kunnskap med tydelige grenser.",
  "eyebrow": "Forskning",
  "intro": "Forskningsfeltet rundt vagusnerven og ikke-invasiv stimulering er bredt. Neuvago tolker dette med forsiktighet, og skiller mellom generell forskningskontekst, produktinformasjon og dokumenterte claims.",
  "cards": [
    {
      "title": "Forskningshub",
      "description": "Utforsk den engelske forskningshuben med temaer, studier og forklaringer knyttet til VNS, tVNS og sikkerhet.",
      "href": "/research",
      "note": "Engelsk hub"
    },
    {
      "title": "VNS-forskning",
      "description": "Se en oversikt over forskning knyttet til vagusnervestimulering og hvordan feltet forstås med tydelige begrensninger.",
      "href": "/research/topics/vagus-nerve-stimulation",
      "note": "Engelsk dypdykk"
    },
    {
      "title": "Sikkerhet og tolerabilitet",
      "description": "Les mer om sikkerhet, tolerabilitet og hvorfor claim-grenser er viktige når man omtaler VNS-relatert teknologi.",
      "href": "/research/topics/safety-and-tolerability",
      "note": "Engelsk dypdykk"
    },
    {
      "title": "Tillit og sikkerhet",
      "description": "Gå til den norske siden som forklarer hvordan Neuvago jobber med trygge rammer, tydelig språk og ansvarlig produktkommunikasjon.",
      "href": "/no/juridisk/tillit-og-sikkerhet",
      "note": "Norsk side"
    }
  ],
  "cta": {
    "label": "Les om tillit og sikkerhet",
    "href": "/no/juridisk/tillit-og-sikkerhet"
  }
} as const;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: {
    canonical: page.path,
    languages: {
      "en-US": page.englishPath,
      "no-NO": page.path,
      "x-default": page.englishPath,
    },
  },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: page.path,
    siteName: "Neuvago",
    locale: "no_NO",
    type: "website",
  },
};

export default function NorwegianHubPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
              {page.eyebrow}
            </p>
            <h1 className="mt-6 max-w-[11ch] text-[clamp(3.5rem,11vw,7.4rem)] font-medium leading-[0.86] tracking-[-0.08em]">
              {page.title}
            </h1>
          </div>

          <div className="max-w-2xl rounded-[2rem] border border-black/6 bg-[#fbf8f2]/75 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8">
            <p className="text-lg leading-8 text-[#514c45]">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-5 md:grid-cols-2">
            {page.cards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="group rounded-[1.75rem] border border-black/6 bg-[#fbf8f2] p-6 shadow-[0_18px_64px_rgba(31,31,28,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_90px_rgba(31,31,28,0.1)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#8a7f72]">
                      {card.note}
                    </p>
                    <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                      {card.title}
                    </h2>
                  </div>
                  <span className="rounded-full border border-black/10 px-3 py-1 text-sm text-[#6b6257] transition group-hover:bg-[#1f1f1c] group-hover:text-white">
                    Åpne
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-[#5f5a52]">
                  {card.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-black/6 bg-[#1f1f1c] p-7 text-white sm:p-9">
            <p className="max-w-3xl text-xl leading-8 text-white/82">
              {page.description}
            </p>
            <a
              href={page.cta.href}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#f2eee8]"
            >
              {page.cta.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
