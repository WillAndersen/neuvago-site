import type { Metadata } from "next";
import Link from "next/link";

const page = {
  "file": "src/app/(no)/no/forskning/page.tsx",
  "path": "/no/forskning",
  "englishPath": "/research",
  "title": "Forskning og kunnskapsgrunnlag",
  "metaTitle": "Forskning | VNS, tVNS og sikkerhet | Neuvago Norge",
  "description": "En norsk startside for forskningskontekst, VNS, tVNS, sikkerhet, tolerabilitet og hvordan Neuvago tolker kunnskap med tydelige grenser.",
  "eyebrow": "Forskning",
  "intro": "Denne siden forklarer hvordan Neuvago bruker forskning som kontekst, ikke som overdrivelse. Feltet rundt vagusnerven, VNS, tVNS, sikkerhet og autonom regulering er bredt, og vi tolker det med forsiktighet.",
  "body": [
    {
      "title": "Forskning er kontekst, ikke et løfte",
      "paragraphs": [
        "Neuvago står i en kunnskapsverden som omfatter vagusnerven, autonom regulering, ikke-invasiv stimulering, sikkerhet, tolerabilitet og hverdagsrutiner. Samtidig er det viktig å skille mellom generell forskning på et område og dokumenterte claims for et konkret produkt.",
        "En forskningsartikkel kan gi nyttig innsikt uten at den automatisk dokumenterer en bestemt effekt for Neuvago. Derfor bruker vi forskning til å forklare bakgrunn, begreper og retning, ikke til å love medisinske resultater. Det er også derfor de juridiske sidene, tiltenkt bruk og regulatorisk informasjon er sentrale deler av nettstedet."
      ]
    },
    {
      "title": "Hvorfor sikkerhet og tolerabilitet er viktig",
      "paragraphs": [
        "Når et produkt omtaler vagusnerven eller VNS-relatert teknologi, må språk og brukeropplevelse være tydelig. Brukere skal forstå hva produktet er ment for, hva det ikke er ment for, og når de bør søke profesjonell vurdering. Dette er særlig viktig i grenseområdet mellom velværeteknologi, forskning og medisinske begreper.",
        "Neuvago er laget for en ikke-invasiv, veiledet og rolig rutine. Det betyr ikke at alle skal bruke produktet, eller at produktet passer i alle situasjoner. Sikkerhetsinformasjon, kontraindikasjoner, bruksgrenser og endelig regulatorisk dokumentasjon må være tydelige før bred kommersiell lansering."
      ]
    },
    {
      "title": "Slik bør du lese forskningssidene",
      "paragraphs": [
        "De engelske forskningssidene gir en bredere oversikt over temaer og studier. De er skrevet for å gjøre feltet mer forståelig, men skal ikke leses som medisinsk rådgivning. Når vi lenker til studier, gjør vi det for å vise hvilken kunnskapsverden begrepene kommer fra.",
        "Denne norske siden er derfor en inngang. Den hjelper deg å forstå hvordan Neuvago tenker: forskningsinformert, men ikke overclaimende; tydelig på velværebruk, men forsiktig med medisinske grenser; åpen om hva som er klart, og hva som fortsatt må dokumenteres eller ferdigstilles."
      ]
    }
  ],
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
      "description": "Se hvordan Neuvago jobber med trygge rammer, tydelig språk og ansvarlig produktkommunikasjon.",
      "href": "/no/juridisk/tillit-og-sikkerhet",
      "note": "Norsk juridisk side"
    }
  ],
  "faq": [
    {
      "question": "Dokumenterer forskning på VNS automatisk effekt for Neuvago?",
      "answer": "Nei. Forskning på et felt gir kontekst, men produktspesifikke claims må vurderes separat og dokumenteres tydelig."
    },
    {
      "question": "Hvorfor har dere engelske forskningssider?",
      "answer": "Forskningsbiblioteket ble først bygget som en internasjonal kunnskapsbase. Den norske siden gir en trygg lokal inngang til materialet."
    },
    {
      "question": "Hva bør jeg lese først?",
      "answer": "Start med tiltenkt bruk og tillit og sikkerhet hvis du vil forstå rammene. Gå deretter til forskningshuben for mer dybde."
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
            <h1 className="mt-6 max-w-[12ch] text-[clamp(3.1rem,10vw,7.1rem)] font-medium leading-[0.88] tracking-[-0.08em]">
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
        <div className="mx-auto grid max-w-[88rem] gap-6 lg:grid-cols-3">
          {page.body.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.75rem] border border-black/6 bg-[#fbf8f2] p-6 shadow-[0_18px_64px_rgba(31,31,28,0.06)] sm:p-7"
            >
              <h2 className="text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-[#5f5a52]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-5 md:grid-cols-2">
            {page.cards.map((card) => (
              <Link
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20">
        <div className="mx-auto grid max-w-[88rem] gap-5 lg:grid-cols-3">
          {page.faq.map((item) => (
            <article key={item.question} className="rounded-[1.5rem] border border-black/6 bg-white/55 p-6">
              <h2 className="text-lg font-medium tracking-[-0.03em] text-[#1f1f1c]">
                {item.question}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-black/6 bg-[#1f1f1c] p-7 text-white sm:p-9">
          <p className="max-w-3xl text-xl leading-8 text-white/82">
            {page.description}
          </p>
          <Link
            href={page.cta.href}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#f2eee8]"
          >
            {page.cta.label}
          </Link>
        </div>
      </section>
    </main>
  );
}
