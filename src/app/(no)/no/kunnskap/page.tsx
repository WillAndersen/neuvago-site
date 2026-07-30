import type { Metadata } from "next";
import Link from "next/link";

const page = {
  "file": "src/app/(no)/no/kunnskap/page.tsx",
  "path": "/no/kunnskap",
  "englishPath": "/learn",
  "title": "Kunnskap om vagusnerven, regulering og VNS",
  "metaTitle": "Kunnskap | Vagusnerven, VNS og regulering | Neuvago Norge",
  "description": "En norsk startside for å forstå vagusnerven, ikke-invasiv VNS, daglig regulering og hvordan Neuvago passer inn i en roligere velværerutine.",
  "eyebrow": "Kunnskap",
  "intro": "Denne siden er en norsk inngang til kunnskapslaget rundt Neuvago. Målet er å gjøre det lettere å forstå ordene, sammenhengene og grensene vi bruker når vi snakker om vagusnerven, ikke-invasiv VNS og daglig regulering.",
  "body": [
    {
      "title": "Et roligere sted å begynne",
      "paragraphs": [
        "Mange møter begreper som vagusnerven, VNS, tVNS, parasympatisk nervesystem og vagal tone uten at det er helt tydelig hva ordene betyr i praksis. Noen forklaringer blir for tekniske, mens andre blir for bastante. Neuvago forsøker å legge seg i et tydeligere mellomrom: nok faglig kontekst til at du forstår retningen, men uten å gjøre kunnskapslaget mer dramatisk enn det trenger å være.",
        "Vagusnerven omtales ofte i forbindelse med ro, restitusjon, stressrespons og kroppens evne til å vende tilbake etter aktivering. Det betyr ikke at ett produkt kan forklare eller løse alt. Det betyr heller at vagusnerven er en del av et større reguleringssystem som mange ønsker å forstå bedre når de bygger roligere hverdagsrutiner."
      ]
    },
    {
      "title": "Hva vi mener med ikke-invasiv VNS",
      "paragraphs": [
        "VNS står for vagus nerve stimulation. Tradisjonelt kan begrepet brukes i medisinske sammenhenger, blant annet for implanterte systemer. Neuvago plasseres i en annen ramme: en ikke-invasiv, app-veiledet velværeopplevelse som er bygget rundt korte, gjentakbare rutiner. Derfor er det viktig at språket vårt skiller mellom generell forskning, historisk bruk av VNS-begrepet og Neuvagos faktiske tiltenkte bruk.",
        "Når vi skriver om ikke-invasiv VNS, handler det om å forklare feltet med tydelige grenser. Vi omtaler ikke Neuvago som en behandling, diagnoseverktøy eller erstatning for helsehjelp. Vi bruker kunnskapslaget til å gi kontekst for en roligere produkt- og appopplevelse, ikke til å love medisinske resultater."
      ]
    },
    {
      "title": "Hvordan du bør bruke kunnskapssiden",
      "paragraphs": [
        "Bruk denne siden som et kart. Start her hvis du vil forstå de norske hovedbegrepene, og gå videre til engelske dypdykk når du vil lese mer detaljert. De engelske artiklene gir bredere forklaringer på vagusnerven, nVNS, tVNS, regulering, restitusjon og ulike mønstre i nervesystemet.",
        "For norske brukere er de praktiske sidene ofte det beste neste steget. Produktsiden forklarer selve Neuvago-systemet, mens siden Slik fungerer det viser hvordan enheten, appen og rutinen henger sammen. Juridiske sider forklarer tiltenkt bruk, regulatoriske rammer og claim-grenser."
      ]
    }
  ],
  "cards": [
    {
      "title": "Vagusnerven",
      "description": "En engelsk dypdykksside om hva vagusnerven er, og hvorfor den ofte nevnes i forbindelse med stress, søvn og restitusjon.",
      "href": "/learn/vagus-nerve",
      "note": "Engelsk dypdykk"
    },
    {
      "title": "Ikke-invasiv VNS",
      "description": "Les mer om ikke-invasiv vagusnervestimulering og hvordan feltet skiller seg fra implanterte medisinske systemer.",
      "href": "/learn/non-invasive-vagus-nerve-stimulation",
      "note": "Engelsk dypdykk"
    },
    {
      "title": "Slik fungerer Neuvago",
      "description": "Gå til den norske praktiske forklaringen av enhet, app, rutine og hvordan opplevelsen er bygget opp.",
      "href": "/no/slik-fungerer-det",
      "note": "Norsk side"
    },
    {
      "title": "Tiltenkt bruk",
      "description": "Les de norske grensene for hva Neuvago er ment for, og hva produktet ikke skal brukes til.",
      "href": "/no/juridisk/tiltenkt-bruk",
      "note": "Norsk juridisk side"
    }
  ],
  "faq": [
    {
      "question": "Er denne siden medisinsk rådgivning?",
      "answer": "Nei. Kunnskapssidene gir generell produkt- og forskningskontekst. De erstatter ikke medisinsk rådgivning, diagnose eller behandling."
    },
    {
      "question": "Hvorfor peker noen lenker til engelske sider?",
      "answer": "De mest detaljerte kunnskapsartiklene finnes foreløpig på engelsk. De norske hub-sidene gir en trygg inngang og peker videre til relevante dypdykk."
    },
    {
      "question": "Hvor bør jeg gå videre?",
      "answer": "Start med produktsiden hvis du vil forstå Neuvago som system. Gå til Slik fungerer det hvis du vil se den praktiske rutinen."
    }
  ],
  "cta": {
    "label": "Se hvordan Neuvago fungerer",
    "href": "/no/slik-fungerer-det"
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
