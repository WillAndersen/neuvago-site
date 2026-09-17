import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const pageTitle = "Søvnstøtte og vagusnervestimulering | Neuvago";
const pageDescription =
  "Les hvordan aktivering i nervesystemet kan påvirke søvn, hvordan Neuvagos ikke-invasive vagusnervestimulator kan inngå i en 20-minutters kveldsrutine, og hva randomiserte taVNS-studier har rapportert.";
const pagePath = "/no/tilstander/sovn";

export const norwegianSleepConditionMetadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
    languages: {
      "nb-NO": pagePath,
      "en-US": "/conditions/sleep",
      "x-default": "/conditions/sleep",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pagePath,
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const sleepPatterns = [
  {
    title: "Vanskelig å roe ned",
    description:
      "Hodet eller kroppen kan fortsatt føles aktivert etter at dagen er over, slik at det blir vanskeligere å finne ro før søvn.",
  },
  {
    title: "Våkner i løpet av natten",
    description:
      "Du kan sovne, men oppleve at det er vanskelig å roe seg og sovne igjen etter en oppvåkning.",
  },
  {
    title: "Lett eller urolig søvn",
    description:
      "Søvnen kan oppleves lett avbrutt, overfladisk eller mindre restituerende enn forventet.",
  },
  {
    title: "Trøtt, men fortsatt aktivert",
    description:
      "Du kan være utslitt og samtidig kjenne deg mentalt aktiv, anspent eller ute av stand til å koble helt av.",
  },
] as const;

const sleepStudies = [
  {
    evidenceType: "RANDOMISERT, SHAM-KONTROLLERT KLINISK STUDIE",
    year: "2024",
    title: "taVNS og kronisk insomni",
    description:
      "Hos 72 voksne med kronisk insomni ga aktiv taVNS en 4,2 poeng større forbedring i PSQI-skår for søvnkvalitet enn sham ved uke 8. Andelen respondere var 69,4 % med aktiv taVNS og 27,8 % med sham.",
    protocol:
      "Studert protokoll: 30 minutter to ganger daglig, fem sammenhengende dager per uke, i åtte uker.",
    cta: "Les studiesammendraget av Zhang 2024 (engelsk)",
    href: "/research/studies/zhang-2024-tavns-chronic-insomnia-randomized-clinical-trial",
  },
  {
    evidenceType: "DOBBELTBLIND, RANDOMISERT OG SHAM-KONTROLLERT STUDIE",
    year: "2025",
    title: "taVNS og søvnkvalitet",
    description:
      "Hos 40 deltakere med kronisk insomni ga aktiv taVNS signifikant større forbedringer i søvnkvalitet og alvorlighetsgrad av insomni enn sham etter seks uker. Studien rapporterte også positive funn for total søvntid og livskvalitet.",
    protocol: "Studert protokoll: 30 minutter daglig i seks uker.",
    cta: "Les studiesammendraget av Yeom 2025 (engelsk)",
    href: "/research/studies/yeom-2025-tavns-chronic-insomnia-randomized-sham-controlled-trial",
  },
] as const;

const eveningRoutineSteps = [
  {
    number: "01",
    title: "Klargjør og plasser ørekomponenten",
    description:
      "Fukt den medfølgende ørekomponenten lett med kontaktgel eller vann. Plasser den deretter riktig i venstre øre, slik det er beskrevet i brukermanualen.",
  },
  {
    number: "02",
    title: "Velg søvnmodus",
    description:
      "Velg den dedikerte søvnmodusen og start økten på 20 minutter som en del av kveldens nedtrapping.",
  },
  {
    number: "03",
    title: "Juster intensiteten",
    description:
      "Øk intensiteten gradvis til stimuleringen føles tydelig og merkbar, men fortsatt komfortabel og ikke smertefull. Høyere intensitet betyr ikke bedre effekt.",
  },
] as const;

const relatedTopics = [
  {
    title: "Trøtt, men får ikke slappet av",
    description:
      "Forstå hvorfor utmattelse og aktivering i nervesystemet kan være til stede samtidig.",
    cta: "Utforsk trøtt-men-aktivert",
    href: "/no/kunnskap/trott-men-far-ikke-slappet-av",
  },
  {
    title: "Hvordan roe ned nervesystemet",
    description:
      "Utforsk praktiske og forskningsinformerte måter å støtte en overgang fra aktivering mot en roligere tilstand.",
    cta: "Utforsk nedregulering",
    href: "/no/kunnskap/hvordan-roe-ned-nervesystemet",
  },
  {
    title: "Restitusjon og regulering",
    description:
      "Les hvordan hvile, restitusjonskapasitet og regulering av nervesystemet henger sammen over tid.",
    cta: "Utforsk restitusjon",
    href: "/no/kunnskap/restitusjon-og-regulering",
  },
] as const;

const primaryButtonClass =
  "inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 sm:w-auto";

const secondaryButtonClass =
  "inline-flex min-h-12 w-full items-center justify-center rounded-full border border-black/15 px-7 py-3 text-sm font-medium text-[#1f1f1c] transition hover:border-black/25 hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 sm:w-auto";

const editorialLinkClass =
  "inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#1f1f1c] underline underline-offset-4 transition hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4";

export function NorwegianSleepConditionPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: pageTitle,
    description: pageDescription,
    path: pagePath,
    articleSection: "Tilstander",
    dateModified: "2026-09-16",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "Tilstander", path: "/no/tilstander" },
      { name: "Søvn", path: pagePath },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="no-tilstander-sovn" />

      <section
        data-sleep-no-section="hero"
        className="border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="mx-auto grid min-h-[78vh] max-w-[92rem] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,1.05fr)] lg:gap-20 lg:px-12 lg:py-24">
          <div className="max-w-[48rem]">
            <nav
              aria-label="Brødsmuler"
              className="flex flex-wrap items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#7a756c] sm:text-xs"
            >
              <Link
                href="/no/tilstander"
                className="rounded-sm transition hover:text-[#1f1f1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
              >
                Tilstander
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Søvn</span>
            </nav>

            <h1 className="mt-6 max-w-[16ch] text-balance text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.94] tracking-[-0.065em]">
              Vagusnervestimulering utviklet for å støtte bedre søvn.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#4f4a43] sm:text-lg">
              Neuvago er en ikke-invasiv vagusnervestimulator utviklet for å
              støtte roligere kvelder, lettere nedtrapping og bedre søvn. Den
              gir skånsom, justerbar stimulering gjennom en ørekomponent ved det
              ytre øret, med en egen søvnmodus og en økt på 20 minutter.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#686158]">
              Søvn formes av mer enn hvor trøtt du er. Stress, mental aktivitet
              og vedvarende aktivering i nervesystemet kan gjøre det vanskeligere
              å gå fra våkenhet til hvile, sove sammenhengende og føle seg
              restituert neste dag.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/no/produkt"
                className={`${primaryButtonClass} focus-visible:ring-offset-[#f7f4ef]`}
              >
                Utforsk Neuvago
              </Link>
              <Link
                href="#sovn-forskning"
                className={`${secondaryButtonClass} focus-visible:ring-offset-[#f7f4ef]`}
              >
                Se søvnforskningen
              </Link>
            </div>
          </div>

          <div className="relative min-h-[30rem] overflow-hidden rounded-[2.4rem] border border-black/6 bg-[#e9dfd2] shadow-[0_28px_95px_rgba(31,31,28,0.11)] sm:min-h-[38rem] lg:min-h-[44rem]">
            <Image
              src="/images/neuvago/launch/routine-evening-desktop.webp"
              alt="Neuvago-enheten i et varmt kveldsmiljø, klar for en rolig søvnrutine."
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/8" />
          </div>
        </div>
      </section>

      <section
        data-sleep-no-section="patterns"
        className="border-b border-black/5 bg-[#efe8de]"
      >
        <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
              NÅR SØVN FØLES VANSKELIG
            </p>
            <h2 className="mt-5 max-w-[17ch] text-balance text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
              Søvn kan være vanskelig selv når du er trøtt.
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              Å sovne og sove sammenhengende krever mer enn utmattelse. Stress,
              et aktivt tankeliv og vedvarende fysiologisk beredskap kan gjøre det
              vanskeligere for kroppen å skifte over i hvile.
            </p>
          </div>

          <div className="mt-12 grid border-t border-black/12 sm:grid-cols-2 lg:grid-cols-4">
            {sleepPatterns.map((pattern, index) => (
              <article
                key={pattern.title}
                className={`min-w-0 border-b border-black/12 py-8 sm:px-6 sm:py-10 lg:px-7 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                } ${index < 3 ? "lg:border-r" : ""}`}
              >
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                  {pattern.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {pattern.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sovn-forskning"
        data-sleep-no-section="research"
        className="scroll-mt-24 border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
              KLINISK SØVNFORSKNING
            </p>
            <h2 className="mt-5 max-w-[19ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
              Randomiserte studier har rapportert positive søvnutfall.
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              To randomiserte, sham-kontrollerte studier blant personer med
              kronisk insomni rapporterte større forbedringer i søvnutfall med
              aktiv taVNS enn med sham under de bestemte protokollene som ble
              undersøkt.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {sleepStudies.map((study) => (
              <article
                key={study.href}
                className="flex min-w-0 flex-col border-t border-black/14 pt-8 sm:pt-10"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#70685f]">
                  <span>{study.evidenceType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.year}</span>
                </div>
                <h3 className="mt-5 max-w-[16ch] text-3xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-4xl">
                  {study.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#4f4a43] sm:text-lg">
                  {study.description}
                </p>
                <p className="mt-5 border-l border-black/15 pl-5 text-sm leading-7 text-[#70685f] sm:text-base">
                  {study.protocol}
                </p>
                <Link
                  href={study.href}
                  hrefLang="en"
                  className={`${editorialLinkClass} mt-7 self-start focus-visible:ring-offset-[#f7f4ef]`}
                >
                  {study.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-[#70685f] sm:text-base">
            Studiene undersøkte bestemte eksterne taVNS-protokoller og evaluerte
            ikke Neuvago-enheten.
          </p>
        </div>
      </section>

      <section
        data-sleep-no-section="routine"
        className="border-b border-black/5 bg-[#e9dfd2]"
      >
        <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
            <div className="max-w-[42rem]">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
                NEUVAGO SØVNMODUS
              </p>
              <h2 className="mt-5 max-w-[13ch] text-balance text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
                En enkel 20-minutters rutine for roligere kvelder.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
                Neuvago gir skånsom, justerbar stimulering gjennom en
                ørekomponent ved det ytre øret. Den dedikerte søvnmodusen bruker
                et rolig, kontinuerlig stimuleringsmønster utviklet for kveldens
                nedtrapping og hvile.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#70685f] sm:text-base">
                Alle fire Neuvago-modusene varer i 20 minutter og avsluttes
                stille. Enheten har 30 justerbare intensitetsnivåer.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/no/slik-fungerer-det"
                  className={`${primaryButtonClass} focus-visible:ring-offset-[#e9dfd2]`}
                >
                  Se hvordan Neuvago fungerer
                </Link>
                <Link
                  href="/no/produkt"
                  className={`${secondaryButtonClass} focus-visible:ring-offset-[#e9dfd2]`}
                >
                  Utforsk enheten
                </Link>
              </div>
            </div>

            <div className="border-t border-black/12">
              {eveningRoutineSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 border-b border-black/12 py-8 sm:grid-cols-[4rem_1fr] sm:py-10"
                >
                  <span className="text-xs font-medium tracking-[0.18em] text-[#8a847b]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        data-sleep-no-section="app"
        className="border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
          <div className="max-w-[44rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
              FLERE VERKTØY
            </p>
            <h2 className="mt-5 max-w-[15ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
              Flere måter å støtte søvn og nedtrapping på.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              Neuvago-appen fungerer uavhengig av enheten og samler veiledede
              søvnøkter og pusteøvelser som kan brukes med eller uten
              stimulering.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#686158]">
              Veiledede økter kan støtte innsovning, det å finne ro igjen etter
              oppvåkning og det å dempe et aktivt tankeliv. Pusteøvelser gir en
              annen enkel inngang til en roligere kveldsrutine.
            </p>
            <Link
              href="/no/app"
              className={`${secondaryButtonClass} mt-9 focus-visible:ring-offset-[#f7f4ef]`}
            >
              Utforsk Neuvago-appen
            </Link>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden rounded-[2.2rem] border border-black/6 bg-[#e9dfd2] shadow-[0_24px_78px_rgba(31,31,28,0.09)] sm:min-h-[34rem]">
            <Image
              src="/images/neuvago/evening-wind-down-desktop.webp"
              alt="Neuvago-enheten og valgfrie appverktøy i et rolig kveldsmiljø."
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        data-sleep-no-section="health-context"
        className="border-b border-black/5 bg-[#e8ded0]"
      >
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20 lg:px-12 lg:py-28">
          <div className="max-w-[42rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
              NORSK HELSEKONTEKST
            </p>
            <h2 className="mt-5 max-w-[15ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
              Når søvnproblemene bør vurderes nærmere.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              En urolig natt eller en kort periode med søvnvansker er vanlig. Når
              problemene varer, påvirker dagsfunksjonen eller gir mistanke om en
              søvnsykdom, er riktig neste steg en faglig vurdering — ikke bare
              flere velværerutiner.
            </p>
          </div>

          <div className="border-t border-black/12">
            <article className="border-b border-black/12 py-8 sm:py-10">
              <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                Vedvarende insomni
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                Ved langvarige søvnvansker bør fastlegen eller annet kvalifisert
                helsepersonell vurdere årsaker og behandling. Flerkomponent
                kognitiv atferdsterapi for insomni, CBT-I, er en etablert
                førstelinjetilnærming ved kronisk insomni.
              </p>
              <a
                href="https://www.helsenorge.no/sovnproblemer/rad-for-bedre-sovn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Åpne Helsenorges råd for bedre søvn i en ny fane"
                className={`${editorialLinkClass} mt-6 focus-visible:ring-offset-[#e8ded0]`}
              >
                Les Helsenorges råd for bedre søvn
                <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="border-b border-black/12 py-8 sm:py-10">
              <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                Snorking, pustestopp eller uttalt søvnighet
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                Høylytt snorking, observerte pustestopp, morgenhodepine eller
                betydelig søvnighet på dagtid kan være tegn på søvnapné eller en
                annen søvnforstyrrelse og bør vurderes av helsepersonell.
              </p>
              <a
                href="https://www.helsenorge.no/sykdom/sovnsykdommer/sovnapne/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Åpne Helsenorges informasjon om søvnapné i en ny fane"
                className={`${editorialLinkClass} mt-6 focus-visible:ring-offset-[#e8ded0]`}
              >
                Les om søvnapné på Helsenorge
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        data-sleep-no-section="related"
        className="border-b border-black/5 bg-[#efe8de]"
      >
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20 lg:px-12 lg:py-28">
          <div className="max-w-[42rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
              FORTSETT Å UTFORSKE
            </p>
            <h2 className="mt-5 max-w-[13ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
              Utforsk søvn og regulering av nervesystemet.
            </h2>
          </div>

          <div className="border-t border-black/12">
            {relatedTopics.map((topic) => (
              <article
                key={topic.href}
                className="border-b border-black/12 py-8 sm:py-10"
              >
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                  {topic.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {topic.description}
                </p>
                <Link
                  href={topic.href}
                  className={`${editorialLinkClass} mt-6 focus-visible:ring-offset-[#efe8de]`}
                >
                  {topic.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        data-sleep-no-section="responsible"
        aria-label="Ansvarlig bruk"
        className="border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="mx-auto max-w-[92rem] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <p className="max-w-4xl text-sm leading-7 text-[#686158] sm:text-base">
            Neuvago er et generelt velværeprodukt og er ikke ment å diagnostisere
            eller behandle insomni. Vedvarende eller alvorlige søvnproblemer bør
            tas opp med kvalifisert helsepersonell.
          </p>
        </div>
      </section>

      <section
        data-sleep-no-section="final-cta"
        className="bg-[#1f1f1c] text-white"
      >
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
          <div className="max-w-[44rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white/55 sm:text-xs">
              NEUVAGO
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(3rem,5.8vw,6.2rem)] font-medium leading-[0.94] tracking-[-0.065em]">
              Gjør Neuvago til en del av kveldsrutinen din.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              Utforsk en ikke-invasiv vagusnervestimulator med egen søvnmodus,
              fire stimuleringsmoduser på 20 minutter og 30 justerbare
              intensitetsnivåer.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/shop"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7b27b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1f1f1c] sm:w-auto"
              >
                Få tilgang ved lansering
              </Link>
              <Link
                href="/no/produkt"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/24 px-7 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7b27b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1f1f1c] sm:w-auto"
              >
                Utforsk produktet
              </Link>
            </div>
          </div>

          <div className="relative min-h-[24rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#302d29] sm:min-h-[34rem]">
            <Image
              src="/images/neuvago/launch/final-cta-desktop.webp"
              alt="Neuvago-enheten presentert som hoveddelen av en rolig kveldsrutine."
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />
          </div>
        </div>
      </section>
    </main>
  );
}
