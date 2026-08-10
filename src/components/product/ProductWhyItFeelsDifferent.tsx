import Image from "next/image";
import Link from "next/link";

type ProductWhyCard = {
  title: string;
  description: string;
};

type ProductWhyImage = {
  src: string;
  alt: string;
};

type ProductWhyItFeelsDifferentContent = {
  eyebrow: string;
  title: string;
  description: string;
  cards: readonly ProductWhyCard[];
  detailImage?: ProductWhyImage;
};

type ProductWhyItFeelsDifferentProps = {
  content: ProductWhyItFeelsDifferentContent;
};

const fallbackImage = {
  src: "/images/neuvago/launch/product-lifestyle-card.webp",
  alt: "Neuvago device and app in a calm everyday setting.",
};

const fallbackCards = [
  {
    title: "Comfort before intensity",
    description:
      "Built to feel calm and supportive, not intense or hard to adjust.",
  },
  {
    title: "Device and app together",
    description:
      "A connected routine with a tactile device and guided app sessions.",
  },
  {
    title: "Made for real routines",
    description:
      "Designed for daily life, not only ideal moments.",
  },
  {
    title: "Clear wellness boundaries",
    description:
      "Intended use and safety guidance stay close to the product.",
  },
  {
    title: "Premium, calm experience",
    description:
      "Soft visual language, simple flows, and a more grounded way to engage.",
  },
] as const;

function isNorwegianContent(content: ProductWhyItFeelsDifferentContent) {
  const text = [content.eyebrow, content.title, content.description]
    .join(" ")
    .toLowerCase();

  return /[æøå]|kjøp|enhet|rolig|hverdagen|velvære|tydelig/.test(text);
}

export function ProductWhyItFeelsDifferent({
  content,
}: ProductWhyItFeelsDifferentProps) {
  const isNorwegian = isNorwegianContent(content);
  const cards = content.cards.length ? content.cards : fallbackCards;
  const firstFourCards = cards.slice(0, 4);
  const fifthCard = cards[4];
  const image = content.detailImage ?? fallbackImage;

  const links = isNorwegian
    ? [
        {
          label: "Slik fungerer det",
          href: "/no/slik-fungerer-det",
        },
        {
          label: "Tiltenkt bruk",
          href: "/no/juridisk/tiltenkt-bruk",
        },
      ]
    : [
        {
          label: "How it works",
          href: "/how-it-works",
        },
        {
          label: "Intended use",
          href: "/legal/intended-use",
        },
      ];

  const boundaryTitle = isNorwegian
    ? "Velværegrenser er synlige."
    : "Wellness boundaries stay visible.";

  const boundaryText = isNorwegian
    ? "Neuvago er laget for korte velværerutiner, ikke diagnose, behandling eller kurering."
    : "Neuvago is designed for short wellness routines, not diagnosis, treatment, or cure.";

  const imageLabel = isNorwegian ? "Produktopplevelse" : "Product experience";

  return (
    <section className="bg-[#f2eee8] px-5 py-14 text-[#1f1f1c] sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="rounded-[2.1rem] border border-black/6 bg-[#fbf8f2]/90 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8 lg:sticky lg:top-24">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>

          <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.35rem,10vw,3.35rem)] font-medium leading-[0.96] tracking-[-0.035em] sm:text-[clamp(2.7rem,7vw,5.6rem)] sm:leading-[0.88] sm:tracking-[-0.078em]">
            {content.title}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-black/8 bg-white/70 px-4 py-2.5 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-[1.45rem] bg-[#1f1f1c] p-5 text-white shadow-[0_18px_60px_rgba(31,31,28,0.12)]">
            <p className="text-sm font-medium tracking-[-0.02em]">
              {boundaryTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/72">
              {boundaryText}
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            {firstFourCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.55rem] border border-black/6 bg-[#fbf8f2] p-5 shadow-[0_16px_60px_rgba(31,31,28,0.06)] sm:p-6"
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

          <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
            {fifthCard ? (
              <article className="rounded-[1.55rem] border border-black/6 bg-[#fbf8f2] p-5 shadow-[0_16px_60px_rgba(31,31,28,0.06)] sm:p-6">
                <h3 className="text-xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                  {fifthCard.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {fifthCard.description}
                </p>
              </article>
            ) : null}

            <article className="overflow-hidden rounded-[1.55rem] border border-black/6 bg-[#fbf8f2] shadow-[0_18px_70px_rgba(31,31,28,0.08)]">
              <div className="relative min-h-[18rem] bg-[#ede5da] sm:min-h-[22rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>

              <div className="border-t border-black/6 px-5 py-4">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#8a7f72]">
                  {imageLabel}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
