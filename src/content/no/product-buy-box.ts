import type { ProductLaunchBuyBoxCopy } from "@/components/product/ProductLaunchBuyBox";

export const productLaunchBuyBoxNo = {
  locale: "no",
  galleryImages: [
    {
      src: "/images/neuvago/launch/product-gallery-front.webp",
      alt: "Neuvago-enheten vist forfra på en rolig, nøytral bakgrunn.",
      label: "Front",
    },
    {
      src: "/images/neuvago/launch/product-gallery-angle.webp",
      alt: "Neuvago-enheten vist fra vinkel for å vise form og finish.",
      label: "Vinkel",
    },
    {
      src: "/images/neuvago/launch/product-gallery-detail.webp",
      alt: "Nærbilde av materiale og finish på Neuvago-enheten.",
      label: "Detalj",
    },
  ],
  eyebrow: "Lanseringsprodukt",
  productName: "Neuvago",
  productDescription:
    "En premium ikke-invasiv VNS-enhet koblet til veiledede appøkter for korte, rolige og gjentakbare reguleringsrutiner.",
  productBadge: "Enhet + app",
  purchaseTitle: "Kjøpsalternativer",
  launchStatus: "Klargjør lansering",
  purchaseDescription:
    "Pris, tilgjengelighet og betalingsvalg vises her når salget åpner.",
  primaryCta: {
    label: "Få lanseringsoppdateringer",
    href: "/get-started",
  },
  secondaryCta: {
    label: "Les tiltenkt bruk",
    href: "/no/juridisk/tiltenkt-bruk",
  },
  checkoutLabel: "Kjøp Neuvago",
  checkoutDisabledLabel: "Kjøp åpner snart",
  checkoutLoadingLabel: "Åpner checkout…",
  includedItems: [
    "Neuvago-enhet",
    "Veiledet appopplevelse",
    "Kom-i-gang-veiledning",
    "Sikkerhets- og tiltenkt-bruk-informasjon",
  ],
  reassuranceItems: [
    "Ikke-invasiv støtte for velværebruk",
    "Laget for korte daglige rutiner",
    "Tydelige sikkerhets- og kommunikasjonsgrenser",
  ],
} satisfies ProductLaunchBuyBoxCopy;
