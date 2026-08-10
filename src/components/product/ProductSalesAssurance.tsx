import Link from "next/link";

type ProductSalesAssuranceProps = {
  locale?: "en" | "no";
};

const content = {
  en: {
    eyebrow: "Before checkout opens",
    title: "Built to feel clear before you buy.",
    description:
      "Neuvago is being prepared as a complete product experience: a non-invasive device, guided app sessions, clear safety boundaries, and a checkout flow handled through Shopify when sales open.",
    cards: [
      {
        title: "Device + app",
        description:
          "The product is designed as one connected routine: the physical device gives the experience a tactile anchor, while the app provides guidance and structure.",
      },
      {
        title: "Short daily routines",
        description:
          "Neuvago is built for short, repeatable moments across the day — not as an intense protocol or a replacement for care.",
      },
      {
        title: "Clear boundaries",
        description:
          "The product is positioned for wellness support. Intended use, safety information, and regulatory status stay visible before purchase.",
      },
    ],
    rows: [
      {
        label: "Checkout",
        value: "Shopify checkout will handle secure payment when sales open.",
      },
      {
        label: "Launch status",
        value: "Initial product availability is being prepared.",
      },
      {
        label: "Support",
        value: "Product, app, and practical-use questions are routed through support.",
      },
    ],
    links: [
      {
        label: "How it works",
        href: "/how-it-works",
      },
      {
        label: "Intended use",
        href: "/legal/intended-use",
      },
      {
        label: "Support",
        href: "/support",
      },
    ],
  },
  no: {
    eyebrow: "Før kjøp åpner",
    title: "Bygget for å føles tydelig før du kjøper.",
    description:
      "Neuvago klargjøres som en komplett produktopplevelse: en ikke-invasiv enhet, veiledede appøkter, tydelige sikkerhetsgrenser og en kjøpsflyt som håndteres gjennom Shopify når salget åpner.",
    cards: [
      {
        title: "Enhet + app",
        description:
          "Produktet er designet som én sammenhengende rutine: enheten gir opplevelsen et fysisk anker, mens appen gir veiledning og struktur.",
      },
      {
        title: "Korte daglige rutiner",
        description:
          "Neuvago er laget for korte, gjentakbare øyeblikk gjennom dagen — ikke som en intens protokoll eller erstatning for helsehjelp.",
      },
      {
        title: "Tydelige grenser",
        description:
          "Produktet er posisjonert for velværebruk. Tiltenkt bruk, sikkerhetsinformasjon og regulatorisk status skal være synlig før kjøp.",
      },
    ],
    rows: [
      {
        label: "Checkout",
        value: "Betalingssiden fra Shopify håndterer sikker betaling når salget åpner.",
      },
      {
        label: "Lanseringsstatus",
        value: "Første produkttilgjengelighet er under klargjøring.",
      },
      {
        label: "Support",
        value: "Spørsmål om produkt, app og praktisk bruk rutes via support.",
      },
    ],
    links: [
      {
        label: "Slik fungerer det",
        href: "/no/slik-fungerer-det",
      },
      {
        label: "Tiltenkt bruk",
        href: "/no/juridisk/tiltenkt-bruk",
      },
      {
        label: "Support",
        href: "/no/support",
      },
    ],
  },
} as const;

export function ProductSalesAssurance({
  locale = "en",
}: ProductSalesAssuranceProps) {
  const copy = content[locale];

  return (
    <section className="bg-[#f7f4ef] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border border-black/6 bg-[#fbf8f2]/85 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {copy.eyebrow}
          </p>

          <h2 className="mt-5 max-w-[11ch] text-[clamp(2.6rem,7vw,5.4rem)] font-medium leading-[0.9] tracking-[-0.075em] text-[#1f1f1c]">
            {copy.title}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {copy.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {copy.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-black/8 bg-white/70 px-4 py-2.5 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            {copy.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.55rem] border border-black/6 bg-[#fbf8f2] p-5 shadow-[0_16px_60px_rgba(31,31,28,0.06)]"
              >
                <h3 className="text-xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-black/6 bg-[#1f1f1c] p-5 text-white shadow-[0_20px_80px_rgba(31,31,28,0.1)] sm:p-6">
            <div className="grid gap-3">
              {copy.rows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-4 py-3"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                      {row.label}
                    </p>
                    <p className="max-w-xl text-sm leading-6 text-white/78 sm:text-right">
                      {row.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
