
import type { ProductLaunchBuyBoxCopy } from "@/components/product/ProductLaunchBuyBox";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const productLaunchBuyBoxNo = {
  galleryImages: [
    {
      src: "/images/neuvago/launch/product-gallery-front.webp",
      alt: "Neuvago-enheten vist forfra mot en rolig, nøytral bakgrunn.",
      label: "Forfra",
    },
    {
      src: "/images/neuvago/launch/product-gallery-angle.webp",
      alt: "Neuvago-enheten vist fra vinkel for å vise form og finish.",
      label: "Vinkel",
    },
    {
      src: "/images/neuvago/launch/product-gallery-detail.webp",
      alt: "Nærbilde av materialet og finishen på Neuvago-enheten.",
      label: "Materialdetalj",
    },
  ],
  eyebrow: "Lanseringsprodukt",
  title: "Neuvago",
  description:
    "En premium ikke-invasiv vagusnervestimulator kombinert med veiledede appøkter for korte, gjentakbare reguleringsrutiner.",
  badge: "Enhet + app",
  purchaseTitle: "Kjøpsvalg",
  launchStatus: "Lansering forberedes",
  purchaseDescription:
    "Pris, tilgjengelighet og betalingsvalg vises her så snart kjøp åpner.",
  primaryCta: {
    label: "Få lanseringsoppdateringer",
    href: "/get-started",
  },
  secondaryCta: {
    label: "Se tiltenkt bruk",
    href: no("/legal/intended-use"),
  },
  includedItems: [
    "Neuvago-enhet",
    "Veiledet appopplevelse",
    "Hurtigstart-veiledning",
    "Sikkerhet og tiltenkt bruk",
  ],
  reassuranceItems: [
    "Ikke-invasiv velværestøtte",
    "Laget for korte daglige rutiner",
    "Tydelige sikkerhets- og påstandsgrenser",
  ],
} satisfies ProductLaunchBuyBoxCopy;
