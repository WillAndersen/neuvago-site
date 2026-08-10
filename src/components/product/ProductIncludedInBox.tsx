import Image from "next/image";
import Link from "next/link";

type ProductIncludedInBoxProps = {
  locale?: "en" | "no";
};

const content = {
  en: {
    eyebrow: "Included with Neuvago",
    title: "What you get when sales open.",
    description:
      "Neuvago is being prepared as a complete launch package. Final package, labeling, shipping, and checkout details will be confirmed before purchase opens.",
    imageAlt: "Neuvago device and app shown as part of the complete launch package.",
    packageTitle: "Launch package",
    packageDescription:
      "Built around the device, guided app experience, practical setup, and clear safety information.",
    packageDetailsTitle: "Final package details",
    packageDetailsDescription:
      "The final box contents, labeling, shipping setup, and support materials are confirmed before checkout opens.",
    packageDetails: [
      {
        label: "Package status",
        value: "Being finalized",
      },
      {
        label: "Payment",
        value: "Shopify Checkout",
      },
      {
        label: "Availability",
        value: "Launch stock preparing",
      },
    ],
    items: [
      {
        title: "Neuvago device",
        description:
          "The physical non-invasive device that gives the routine a tactile, calm starting point.",
      },
      {
        title: "Guided app experience",
        description:
          "App-guided sessions and routine structure designed to make the experience easier to start and return to.",
      },
      {
        title: "Contact gel",
        description:
          "Gel for correct contact during use. Final labeling and instructions will be confirmed before checkout opens.",
      },
      {
        title: "Quick-start guidance",
        description:
          "A practical start guide with setup, use, care, safety, and intended-use information.",
      },
      {
        title: "Charging and care details",
        description:
          "Practical information for charging, storing, and caring for the device in everyday use.",
      },
      {
        title: "Clear boundaries",
        description:
          "Visible safety, intended-use, and wellness-positioning information before purchase.",
      },
    ],
    notes: [
      "Final packaging details are confirmed before checkout opens.",
      "Neuvago is positioned for wellness support, not diagnosis, treatment, or cure.",
      "Shopify Checkout will handle secure payment when sales open.",
    ],
    cta: {
      label: "View purchase options",
      href: "/product#buy",
    },
    secondaryCta: {
      label: "Review intended use",
      href: "/legal/intended-use",
    },
  },
  no: {
    eyebrow: "Dette følger med Neuvago",
    title: "Hva du får når salget åpner.",
    description:
      "Neuvago klargjøres som en komplett lanseringspakke. Endelig pakkeinnhold, merking, frakt og betalingsdetaljer bekreftes før kjøp åpner.",
    imageAlt: "Neuvago-enhet og app vist som del av den komplette lanseringspakken.",
    packageTitle: "Lanseringspakke",
    packageDescription:
      "Bygget rundt enheten, veiledet appopplevelse, praktisk oppsett og tydelig sikkerhetsinformasjon.",
    packageDetailsTitle: "Endelige pakkedetaljer",
    packageDetailsDescription:
      "Endelig pakkeinnhold, merking, fraktoppsett og supportmateriell bekreftes før kjøp åpner.",
    packageDetails: [
      {
        label: "Pakkestatus",
        value: "Ferdigstilles",
      },
      {
        label: "Betaling",
        value: "Via Shopify",
      },
      {
        label: "Tilgjengelighet",
        value: "Lanseringslager klargjøres",
      },
    ],
    items: [
      {
        title: "Neuvago-enhet",
        description:
          "Den fysiske ikke-invasive enheten som gir rutinen et taktilt og rolig startpunkt.",
      },
      {
        title: "Veiledet appopplevelse",
        description:
          "App-veiledede økter og rutinestruktur laget for å gjøre opplevelsen enklere å starte og vende tilbake til.",
      },
      {
        title: "Kontaktgel",
        description:
          "Gel for riktig kontakt under bruk. Endelig merking og instruksjoner bekreftes før kjøp åpner.",
      },
      {
        title: "Kom-i-gang-veiledning",
        description:
          "En praktisk startguide med oppsett, bruk, vedlikehold, sikkerhet og tiltenkt bruk.",
      },
      {
        title: "Lading og praktisk bruk",
        description:
          "Praktisk informasjon om lading, oppbevaring og daglig håndtering av enheten.",
      },
      {
        title: "Tydelige grenser",
        description:
          "Synlig informasjon om sikkerhet, tiltenkt bruk og velværeposisjonering før kjøp.",
      },
    ],
    notes: [
      "Endelige pakkedetaljer bekreftes før kjøp åpner.",
      "Neuvago er posisjonert for velværebruk, ikke diagnose, behandling eller kurering.",
      "Betalingssiden fra Shopify håndterer sikker betaling når salget åpner.",
    ],
    cta: {
      label: "Se kjøpsalternativer",
      href: "/no/produkt#buy",
    },
    secondaryCta: {
      label: "Les tiltenkt bruk",
      href: "/no/juridisk/tiltenkt-bruk",
    },
  },
} as const;

export function ProductIncludedInBox({
  locale = "en",
}: ProductIncludedInBoxProps) {
  const copy = content[locale];

  return (
    <section className="bg-[#f2eee8] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="order-2 grid gap-5 lg:sticky lg:top-24 lg:order-1">
          <div className="overflow-hidden rounded-[2.1rem] border border-black/6 bg-[#fbf8f2] shadow-[0_24px_90px_rgba(31,31,28,0.08)]">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative min-h-[20rem] border-b border-black/6 bg-[#ede5da] md:border-b-0 md:border-r lg:min-h-[24rem]">
                <Image
                  src="/images/neuvago/launch/product-gallery-front.webp"
                  alt={copy.imageAlt}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 26vw"
                />
              </div>

              <div className="relative min-h-[20rem] bg-[#f7f4ef] lg:min-h-[24rem]">
                <Image
                  src="/images/neuvago/launch/product-phone-app.webp"
                  alt={copy.imageAlt}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 26vw"
                />
              </div>
            </div>

            <div className="border-t border-black/6 p-6 sm:p-8">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
                {copy.packageTitle}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#5f5a52]">
                {copy.packageDescription}
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-black/6 bg-[#fbf8f2]/92 p-5 shadow-[0_18px_70px_rgba(31,31,28,0.07)] sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#8a7f72]">
                  {copy.packageDetailsTitle}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#5f5a52]">
                  {copy.packageDetailsDescription}
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 rounded-full bg-[#1f1f1c] text-white sm:grid sm:place-items-center">
                <span className="text-xs font-medium">01</span>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {copy.packageDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-[1.15rem] border border-black/6 bg-white/58 px-4 py-3"
                >
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#9a8f82]">
                    {detail.label}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#292824]">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3 border-t border-black/8 pt-5">
              {copy.notes.map((note) => (
                <p key={note} className="flex gap-3 text-sm leading-6 text-[#5f5a52]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f1f1c]" />
                  <span>{note}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 rounded-[2.1rem] border border-black/6 bg-[#fbf8f2]/90 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8 lg:order-2">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {copy.eyebrow}
          </p>

          <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.25rem,9.5vw,3.2rem)] font-medium leading-[0.98] tracking-[-0.035em] text-[#1f1f1c] sm:text-[clamp(2.6rem,7vw,5.3rem)] sm:leading-[0.9] sm:tracking-[-0.075em]">
            {copy.title}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {copy.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {copy.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.25rem] border border-black/6 bg-white/58 p-4"
              >
                <h3 className="text-base font-medium tracking-[-0.03em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={copy.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28]"
            >
              {copy.cta.label}
            </Link>

            <Link
              href={copy.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
            >
              {copy.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
