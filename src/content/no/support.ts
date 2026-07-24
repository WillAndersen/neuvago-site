import { supportPageContent } from "@/content/support";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const supportPageContentNo = {
  ...supportPageContent,
  hero: {
    ...supportPageContent.hero,
    eyebrow: "Support",
    title: "Tydelig hjelp, rolig organisert.",
    description:
      "Finn riktig sted å starte, forstå Neuvago-systemet tydeligere og kom videre uten mer støy.",
    primaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    secondaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    desktopImage: {
      src: "/images/neuvago/launch/product-phone-app.webp",
      alt: "Neuvago-enheten og appen vist sammen som en rolig support- og veiledningsopplevelse.",
    },
    mobileImage: {
      src: "/images/neuvago/launch/product-phone-app.webp",
      alt: "Neuvago-appen og enheten vist sammen for mobil support.",
    },
    proofLine: ["Tydelig veiledning", "Praktisk hjelp", "Mindre friksjon"],
    panelEyebrow: "Rolig orientering",
    panelText:
      "Support skal føles som resten av Neuvago-opplevelsen: tydelig, varm, praktisk og enkel å navigere når du trenger retning.",
  },

  howWeCanHelp: {
    ...supportPageContent.howWeCanHelp,
    eyebrow: "Supportveier",
    title: "Hvordan vi kan hjelpe",
    description:
      "Support kan bety ulike ting avhengig av hvor du er. Kanskje vil du forstå produktet, appen, praktisk bruk eller den bredere kunnskapsdelen.",
    cards: [
      {
        title: "Produktstøtte",
        description:
          "Forstå hva Neuvago er, hvordan produktet er posisjonert, og hvordan enheten passer inn i den samlede opplevelsen.",
      },
      {
        title: "Appstøtte",
        description:
          "Se hvordan appen veileder økter, støtter rutiner og skaper kontinuitet over tid.",
      },
      {
        title: "Praktisk veiledning",
        description:
          "Få enklere svar om hvordan Neuvago er ment å passe inn i hverdagen.",
      },
      {
        title: "Kunnskap og forskning",
        description:
          "Utforsk den bredere kunnskapsdelen hvis du vil ha mer kontekst og bakgrunn.",
      },
    ],
  },

  startHere: {
    ...supportPageContent.startHere,
    eyebrow: "Start her",
    title: "Start på riktig sted",
    description:
      "Den enkleste støtten er ofte å bli sendt til riktig side først. Her er de beste stedene å starte, avhengig av hva du vil forstå.",
    links: [
      {
        title: "Se produktet",
        description:
          "Start her hvis du vil forstå hva Neuvago er og hvorfor opplevelsen føles annerledes.",
        href: no("/product"),
      },
      {
        title: "Utforsk appen",
        description:
          "Start her hvis du vil forstå den veiledede appopplevelsen tydeligere.",
        href: no("/app"),
      },
      {
        title: "Slik fungerer det",
        description:
          "Start her hvis du vil ha en praktisk oversikt over hvordan hele systemet henger sammen.",
        href: no("/how-it-works"),
      },
      {
        title: "Kunnskap og forskning",
        description:
          "Start her hvis du vil utforske mer bakgrunn rundt regulering, stress og restitusjon.",
        href: no("/learn"),
      },
    ],
  },

  supportTopics: {
    ...supportPageContent.supportTopics,
    eyebrow: "Temaer",
    title: "Praktiske supporttemaer",
    description:
      "Dette er noen av de mest nyttige områdene å utforske når du vil ha tydeligere veiledning eller bakgrunnsinformasjon.",
    links: [
      {
        title: "Forstå produktet",
        description:
          "Få et tydeligere bilde av enheten, systemet og den samlede Neuvago-opplevelsen.",
        href: no("/product"),
      },
      {
        title: "Forstå appen",
        description:
          "Se hvordan appen støtter økter, veiledning og kontinuitet over tid.",
        href: no("/app"),
      },
      {
        title: "Daglig bruk og rutiner",
        description:
          "Lær mer om hvordan Neuvago kan passe inn i roligere hverdagsrytmer.",
        href: no("/how-it-works"),
      },
      {
        title: "Design og filosofi",
        description:
          "Utforsk tankegangen bak Neuvagos visuelle språk og opplevelse.",
        href: no("/about"),
      },
      {
        title: "Juridisk og tiltenkt bruk",
        description:
          "Les juridisk informasjon, tiltenkt bruk og samsvarsinformasjon når du trenger praktisk klarhet.",
        href: no("/legal"),
      },
      {
        title: "Tillit og sikkerhet",
        description:
          "Utforsk sikkerhets- og tillitsrammen rundt Neuvago.",
        href: no("/legal/trust-safety"),
      },
    ],
  },

  philosophy: {
    ...supportPageContent.philosophy,
    eyebrow: "Supportfilosofi",
    title: "Support skal redusere friksjon",
    description:
      "Support skal føles som resten av Neuvago-opplevelsen: tydeligere, roligere og enklere å navigere uten å legge til mer støy.",
    cards: [
      {
        title: "Klarhet først",
        description:
          "Det skal være enkelt å forstå hvor du bør starte og hvor du kan gå videre.",
      },
      {
        title: "Rolig veiledning",
        description:
          "Support skal redusere friksjon, ikke overvelde deg med unødvendig kompleksitet.",
      },
      {
        title: "Praktisk hjelp",
        description:
          "Målet er ikke bare mer informasjon, men mer nyttig retning i øyeblikket.",
      },
    ],
    image: {
      src: "/images/neuvago/launch/product-app-pairing-desktop.webp",
      alt: "Neuvago-enheten og appen vist sammen i en rolig supportkontekst.",
    },
  },

  faq: {
    ...supportPageContent.faq,
    title: "Vanlige spørsmål",
    description:
      "Noen enkle svar på spørsmål folk ofte har når de vil forstå hvor de bør begynne.",
    items: [
      {
        question: "Hvor bør jeg starte hvis jeg er ny hos Neuvago?",
        answer:
          "Et godt første steg er vanligvis produktsiden hvis du vil forstå hva Neuvago er, eller siden Slik fungerer det hvis du vil ha en praktisk oversikt over hele systemet.",
      },
      {
        question: "Bør jeg begynne med produktet eller appen?",
        answer:
          "Det avhenger av hva du vil forstå først. Start med produktet hvis du vil ha helheten. Start med appen hvis du vil forstå den veiledede opplevelsen mer direkte.",
      },
      {
        question: "Hvor kan jeg lære mer om hvordan Neuvago fungerer?",
        answer:
          "Siden Slik fungerer det er det beste stedet for en trinnvis forklaring av hvordan systemet er laget for å henge sammen.",
      },
      {
        question: "Hvor finner jeg forskning og bakgrunnsinformasjon?",
        answer:
          "Kunnskaps- og forskningsdelene er de beste stedene å utforske bredere bakgrunn rundt regulering, stress, restitusjon og relaterte temaer.",
      },
      {
        question: "Hvor kan jeg lese juridisk og sikkerhetsrelatert informasjon?",
        answer:
          "Den juridiske delen inneholder sider om tiltenkt bruk, regulatorisk informasjon, tillit og sikkerhet, personvern og vilkår.",
      },
    ],
  },

  finalCta: {
    ...supportPageContent.finalCta,
    eyebrow: "Neste steg",
    title: "Velg neste steg som passer best for deg",
    description:
      "Du kan gå videre ved å utforske produktet, forstå hvordan systemet fungerer, eller gå dypere inn i app- og kunnskapsdelene.",
    primaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    secondaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    backgroundImage: {
      src: "/images/neuvago/launch/final-cta-desktop.webp",
      alt: "Neuvago-enheten og appen vist rolig med åpent rom for tekst.",
    },
  },
};
