import type { Metadata } from "next";
import Link from "next/link";

const page = {
  "file": "src/app/(no)/no/tilstander/page.tsx",
  "path": "/no/tilstander",
  "englishPath": "/conditions",
  "title": "Tilstander, mønstre og daglig regulering",
  "metaTitle": "Tilstander | Stress, søvn og regulering | Neuvago Norge",
  "description": "En norsk oversikt over hvordan Neuvago omtaler stress, søvn, restitusjon og reguleringsmønstre innenfor tydelige velværegrenser.",
  "eyebrow": "Tilstander",
  "intro": "Denne siden forklarer hvordan Neuvago omtaler vanlige mønstre som stress, aktivering, søvnforberedelse, restitusjon og daglig regulering. Språket er bevisst forsiktig: Neuvago er ikke ment å diagnostisere, behandle eller kurere sykdom.",
  "body": [
    {
      "title": "Vi snakker om mønstre, ikke diagnoser",
      "paragraphs": [
        "Mange kjenner igjen perioder der kroppen føles mer aktivert enn vanlig. Det kan handle om stress, uro, lite restitusjon, krevende dager eller en følelse av at det tar lang tid å lande. Slike opplevelser kan ha mange årsaker, og noen ganger bør de følges opp av helsepersonell. Neuvago skal ikke erstatte det.",
        "Når vi bruker ord som stress, søvn og regulering, bruker vi dem i en velvære- og rutinekontekst. Det betyr at vi beskriver hverdagsmønstre, overganger og vaner, ikke medisinske diagnoser. Denne forskjellen er viktig både for brukeren og for hvordan produktet skal kommuniseres."
      ]
    },
    {
      "title": "Stress, søvn og restitusjon henger ofte sammen",
      "paragraphs": [
        "Stress handler ikke bare om tanker. Det kan også merkes som tempo, kroppslig aktivering, kortere lunte, dårligere søvnforberedelse eller mindre følelse av kapasitet. For mange er det nyttig å jobbe med små, gjentakbare pauser som gjør det lettere å vende tilbake til en roligere rytme.",
        "Søvnforberedelse handler heller ikke bare om øyeblikket man legger seg. Dagen før, tempoet i kroppen, skjermbruk, lys, bekymringer og rytmer kan påvirke hvor lett det er å roe ned. Neuvago er bygget som en kort rutine som kan passe inn i slike overgangsøyeblikk, uten å love at den løser søvnproblemer."
      ]
    },
    {
      "title": "Hvor Neuvago passer inn",
      "paragraphs": [
        "Neuvago er designet som en ikke-invasiv wellness-opplevelse: en fysisk enhet, en veiledet app og korte økter som kan gjentas over tid. Det er ikke et akuttverktøy, en medisinsk behandling eller et produkt som skal brukes til å håndtere alvorlige symptomer alene.",
        "Den praktiske verdien ligger i struktur og tilbakevending. En rolig rutine kan gjøre det enklere å skape en pause, starte en økt og bygge en jevnere vane. For noen handler dette om morgenen, for andre om en pause på dagtid eller en roligere overgang mot kvelden."
      ]
    }
  ],
  "cards": [
    {
      "title": "Stress og nervesystemet",
      "description": "Forstå stress som et mønster i nervesystemet og hvordan rolige rutiner kan støtte en jevnere tilbakevending.",
      "href": "/no/tilstander/stress",
      "note": "Norsk hovedside"
    },
    {
      "title": "Søvnforberedelse",
      "description": "Utforsk hvordan kveld, nedtrapping og regulering kan forstås som del av en bredere velværerutine.",
      "href": "/conditions/sleep",
      "note": "Engelsk dypdykk"
    },
    {
      "title": "Produktet",
      "description": "Se hvordan enheten og appen er bygget som en roligere inngang til korte, gjentakbare rutiner.",
      "href": "/no/produkt",
      "note": "Norsk side"
    },
    {
      "title": "Tiltenkt bruk",
      "description": "Les den norske juridiske siden om tiltenkt bruk, claim-grenser og hvordan Neuvago er posisjonert.",
      "href": "/no/juridisk/tiltenkt-bruk",
      "note": "Norsk juridisk side"
    }
  ],
  "faq": [
    {
      "question": "Er Neuvago ment for behandling av stress eller søvnproblemer?",
      "answer": "Nei. Neuvago er posisjonert for wellness- og velværebruk. Ved vedvarende eller alvorlige plager bør man søke råd hos kvalifisert helsepersonell."
    },
    {
      "question": "Hvorfor bruker dere ord som stress og søvn?",
      "answer": "Fordi mange brukere tenker på slike hverdagsmønstre når de ønsker roligere rutiner. Vi omtaler dem innenfor tydelige ikke-medisinske grenser."
    },
    {
      "question": "Hva er et godt neste steg?",
      "answer": "Les produktsiden for å forstå systemet, og siden om tiltenkt bruk for å se rammene for hva Neuvago er og ikke er."
    }
  ],
  "cta": {
    "label": "Les tiltenkt bruk",
    "href": "/no/juridisk/tiltenkt-bruk"
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
