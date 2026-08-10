import Image from "next/image";
import type { productPageContent } from "@/content/product";

type ProductHowItFitsIntoLifeProps = {
  content: typeof productPageContent.howItFitsIntoLife;
};

function isNorwegianContent(content: typeof productPageContent.howItFitsIntoLife) {
  return /[æøå]|morgen|daglig|hverdagen|kveldsro|restitusjon/i.test(
    [content.title, content.description].join(" "),
  );
}

function getPathwayImages(isNorwegian: boolean) {
  return isNorwegian
    ? [
        {
          src: "/images/neuvago/launch/product-lifestyle-card.webp",
          alt: "Neuvago-enhet og app i en rolig hverdagsnær rutine.",
        },
        {
          src: "/images/neuvago/launch/product-detail-left-desktop.webp",
          alt: "Neuvago-enheten vist som et rolig produktdetaljbilde.",
        },
        {
          src: "/images/neuvago/launch/routine-evening-desktop.webp",
          alt: "Neuvago-enhet og app i en varm kveldsrutine.",
        },
      ]
    : [
        {
          src: "/images/neuvago/launch/product-lifestyle-card.webp",
          alt: "Neuvago device and app in a calm everyday routine.",
        },
        {
          src: "/images/neuvago/launch/product-detail-left-desktop.webp",
          alt: "Neuvago device shown as a calm product detail image.",
        },
        {
          src: "/images/neuvago/launch/routine-evening-desktop.webp",
          alt: "Neuvago device and app in a warm evening routine.",
        },
      ];
}

export function ProductHowItFitsIntoLife({
  content,
}: ProductHowItFitsIntoLifeProps) {
  const sectionContent = content as typeof productPageContent.howItFitsIntoLife & {
    eyebrow?: string;
  };

  const isNorwegian = isNorwegianContent(content);
  const pathwayImages = getPathwayImages(isNorwegian);
  const imageLabel = isNorwegian ? "Rutine" : "Routine";

  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
            {sectionContent.eyebrow ?? "Everyday rhythm"}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.35rem,9.5vw,3.35rem)] font-medium leading-[0.98] tracking-[-0.035em] text-[#1f1f1c] sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.055em] lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {content.cards.map((card, index) => {
            const image = pathwayImages[index] ?? pathwayImages[0];

            return (
              <article
                key={card.title}
                className="overflow-hidden rounded-[2rem] border border-black/6 bg-[#fbf8f2] shadow-[0_24px_80px_rgba(31,31,28,0.07)]"
              >
                <div className="relative min-h-[18rem] bg-[#ede5da]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 92vw, 32vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f1f1c]/16 via-transparent to-white/10" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-[#fbf8f2]/88 px-3.5 py-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#4f493f] shadow-[0_10px_30px_rgba(31,31,28,0.16)] backdrop-blur">
                    {imageLabel} 0{index + 1}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
