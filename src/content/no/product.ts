
import { productPageContent } from "@/content/product";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const productPageContentNo = {
  ...productPageContent,
  hero: {
    ...productPageContent.hero,
    eyebrow: "Produkt",
    title: "En ikke-invasiv vagusnervestimulator, veiledet av appen.",
    description:
      "Neuvago kombinerer en premium håndholdt enhet med veiledede appøkter for korte, gjentakbare reguleringsrutiner — med tydelige bruksgrenser og et forskningsinformert sikkerhetslag.",
    primaryCta: {
      label: "Se produktvalg",
      href: "#buy",
    },
    secondaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    panelEyebrow: "Det fysiske ankeret",
    panelText:
      "En taktil, ikke-invasiv enhet laget for at den veiledede opplevelsen skal føles rolig, jordet og enkel å vende tilbake til.",
    proofLine: ["Ikke-invasiv VNS", "Veiledede appøkter", "Tydelige bruksgrenser"],
  },

  whatIsNeuvago: {
    ...productPageContent.whatIsNeuvago,
    eyebrow: "Systemet",
    title: "Et fysisk anker for et roligere reguleringssystem",
    description:
      "I sentrum av Neuvago står en ikke-invasiv vagusnervestimulator laget for å føles rolig, tydelig og enkel å leve med. Appen tilfører veiledning, øktstruktur og kontinuitet, mens produktopplevelsen holder seg forankret i skånsom daglig velværestøtte heller enn medisinske behandlingspåstander.",
    bullets: [
      "En ikke-invasiv vagusnervestimulator laget for roligere daglig støtte",
      "Utformet for å føles premium, skånsom og enkel å bruke",
      "Koblet til en app som gir plasseringsveiledning, øktrytme og kontinuitet",
    ],
  },

  whyItFeelsDifferent: {
    ...productPageContent.whyItFeelsDifferent,
    eyebrow: "Hvorfor den føles annerledes",
    title: "Utformet for å føles skånsommere, tydeligere og enklere å leve med.",
    description:
      "Fra formfaktor til flyt er Neuvago bygget for å føles støttende, ikke overveldende. Målet er ikke intensitet, selveksperimentering eller kompliserte protokoller, men en roligere enhet-og-app-opplevelse som passer naturlig inn i hverdagen.",
    cards: [
      {
        title: "Komfort før intensitet",
        description:
          "Bygget for å føles rolig og støttende heller enn intens, overstimulerende eller vanskelig å justere.",
      },
      {
        title: "Laget for ekte rutiner",
        description: "Utformet for å passe inn i hverdagen, ikke bare i perfekte øyeblikk.",
      },
      {
        title: "Enhet og app sammen",
        description:
          "En sammenkoblet opplevelse som kombinerer den fysiske vagusnervestimulatoren med veiledet øktstruktur.",
      },
      {
        title: "Premium og rolig opplevelse",
        description:
          "Mykt visuelt språk, enkle flyter og en mer jordet måte å bruke produktet på.",
      },
      {
        title: "Grensene er synlige",
        description:
          "Forskningskontekst, tiltenkt bruk og sikkerhetsveiledning holdes tett på, slik at produktet ikke fremstår mer klinisk enn det er.",
      },
    ],
  },

  deviceAppTogether: {
    ...productPageContent.deviceAppTogether,
    eyebrow: "Enhet + app",
    title: "Appen fullfører produktopplevelsen",
    description:
      "Enheten kan stå på egne ben som et fysisk startpunkt, men appen gjør hele systemet tydeligere og enklere å vende tilbake til gjennom økter, rutiner og kontinuitet over tid.",
    features: [
      {
        title: "Enheten gir opplevelsen et fysisk sentrum",
        description: "Et rolig og håndfast inngangspunkt som føles mer jordet enn innhold alene.",
      },
      {
        title: "Appen tilfører struktur og veiledning",
        description:
          "Økter og rutiner gjør det enklere å vite hva du skal gjøre videre og enklere å holde kontinuitet.",
      },
      {
        title: "Sammen føles systemet mer komplett",
        description:
          "Enheten og appen støtter hverandre og skaper en tydeligere, roligere og mer premium daglig opplevelse.",
      },
    ],
    cta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
  },

  howItFitsIntoLife: {
    ...productPageContent.howItFitsIntoLife,
    eyebrow: "Daglig rytme",
    title: "Bygget for øyeblikkene du faktisk vender tilbake til",
    description:
      "Verdien av produktet ligger ikke bare i hva det er, men i hvor naturlig det kan passe inn i roligere daglige rutiner — enten du ønsker en mykere start, en pause under stress eller en mer bevisst nedtrapping om kvelden.",
    cards: [
      {
        title: "Morgenrutine",
        description: "Start dagen med et roligere inngangspunkt og litt mer stødighet.",
      },
      {
        title: "Restitusjon i løpet av dagen",
        description:
          "Bruk Neuvago som en stille pause når stress eller aktivering begynner å bygge seg opp.",
      },
      {
        title: "Kveldsro",
        description: "Støtt en mykere overgang ut av dagen og inn i hvile.",
      },
    ],
  },

  howToUse: {
    ...productPageContent.howToUse,
    eyebrow: "Rutinen",
    stepLabel: "Steg",
    title: "En enkel rutine i tre steg",
    description:
      "Du trenger ingen komplisert protokoll for å forstå produktet. I praksis er Neuvago laget for å føles enkelt: plasser enheten komfortabelt, følg veiledningen i appen og vend tilbake til rutinen over tid.",
    steps: [
      {
        ...productPageContent.howToUse.steps[0],
        title: "Plasser enheten komfortabelt",
        description:
          "Start med enheten som det fysiske utgangspunktet, der komfort og tydelig plasseringsveiledning er en del av opplevelsen.",
      },
      {
        ...productPageContent.howToUse.steps[1],
        title: "Start en veiledet økt i appen",
        description:
          "Bruk appen til å velge veiledning som passer øyeblikket, samtidig som øktlengde, rytme og intensitet holdes lett å forstå.",
      },
      {
        ...productPageContent.howToUse.steps[2],
        title: "Vend tilbake til den over tid",
        description:
          "Gjenta på måter som passer hverdagen, slik at systemet blir enklere å vende tilbake til og mer nyttig over tid.",
      },
    ],
  },

  trustBridge: {
    ...productPageContent.trustBridge,
    eyebrow: "Tillit og grenser",
    title: "Forskningskontekst, sikkerhetsgrenser og daglig bruk",
    description:
      "Neuvago er bygget innenfor en bredere kunnskapsverden om regulering av nervesystemet, ikke-invasiv vagusnervestimulering, sikkerhet og tolerabilitet, restitusjon og stressfysiologi. Du kan utforske forskningslaget dersom du vil gå dypere, mens produktpåstandene holder seg forankret i velværestøtte.",
    links: [
      {
        title: "Ikke-invasiv VNS",
        description:
          "Forstå kategorien Neuvago hører hjemme i: ekstern stimulering, veiledning og tydelige bruksgrenser.",
        href: "/learn/non-invasive-vagus-nerve-stimulation",
      },
      {
        title: "Transkutan VNS",
        description:
          "Lær hva tVNS betyr, hvordan det relaterer til taVNS og ikke-invasiv VNS, og hvorfor metodedetaljer betyr noe.",
        href: "/learn/transcutaneous-vagus-nerve-stimulation",
      },
      {
        title: "VNS-forskning",
        description:
          "Utforsk det bredere forskningsfeltet rundt implantert, aurikulær og ikke-invasiv vagusnervestimulering.",
        href: "/research/topics/vagus-nerve-stimulation",
      },
      {
        title: "Sikkerhet og tolerabilitet",
        description:
          "Se bivirkninger, tolerabilitet, kontraindikasjoner og sikkerhetskontekst bak ansvarlig posisjonering av ikke-invasiv VNS.",
        href: "/research/topics/safety-and-tolerability",
      },
      {
        title: "Aurikulær VNS",
        description:
          "Lær hvordan ørebasert VNS, taVNS, komfort, plassering og ansvarlig velværespråk henger sammen.",
        href: "/learn/auricular-vagus-nerve-stimulation",
      },
      {
        title: "Tiltenkt bruk",
        description:
          "Se produktgrensene som forklarer hva Neuvago er laget for å støtte — og hva det ikke er ment å diagnostisere, behandle, kurere eller erstatte.",
        href: no("/legal/intended-use"),
      },
    ],
    primaryCta: {
      label: "Utforsk forskning",
      href: no("/research"),
    },
    secondaryCta: {
      label: "Gå til kunnskap",
      href: no("/learn"),
    },
  },

  faq: {
    ...productPageContent.faq,
    title: "Praktisk avklaring",
    description:
      "Noen enkle svar på spørsmål mange har når de først utforsker Neuvago.",
    items: [
      {
        question: "Er Neuvago en medisinsk behandling?",
        answer:
          "Nei. Neuvago posisjoneres som et velværeprodukt laget for å støtte roligere daglig regulering og veiledede rutiner. Det beskrives ikke som behandling, diagnostisk verktøy, kur eller erstatning for profesjonell medisinsk oppfølging.",
      },
      {
        question: "Trenger jeg appen?",
        answer:
          "Appen er en sentral del av opplevelsen fordi den tilfører veiledning, øktstruktur og kontinuitet over tid.",
      },
      {
        question: "Er Neuvago laget for daglig bruk?",
        answer:
          "Ja. Neuvago er laget for å føles enkel, gjentakbar og realistisk å vende tilbake til som en del av hverdagen.",
      },
      {
        question: "Er sterkere stimulering alltid bedre?",
        answer:
          "Nei. Opplevelsen er bevisst bygget rundt komfort, veiledning og konsistens heller enn å jage sterkest mulig følelse.",
      },
      {
        question: "Hvem bør snakke med helsepersonell før bruk?",
        answer:
          "Personer med implanterte elektroniske enheter, spørsmål knyttet til hjerterytme, graviditet, medisinske tilstander eller aktive behandlingsløp bør snakke med kvalifisert helsepersonell før de bruker et stimuleringsprodukt.",
      },
      {
        question: "Kan jeg utforske kunnskapssiden før jeg går videre?",
        answer:
          "Ja. Du kan bevege deg mellom produkt, app, kunnskap, tilstander, forskning, tiltenkt bruk og sikkerhetssider avhengig av hva du vil forstå først.",
      },
    ],
  },

  finalCta: {
    ...productPageContent.finalCta,
    eyebrow: "Gå videre",
    title: "Se hvordan hele Neuvago-systemet fungerer",
    description:
      "Utforsk hvordan enheten, appen og en roligere daglig rutine passer sammen — og gå videre til hele slik-fungerer-det-opplevelsen eller den veiledede appdelen.",
    primaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    secondaryCta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
  },
} as unknown as typeof productPageContent;
