import Image from "next/image";
import type { productPageContent } from "@/content/product";
import { SectionHeading, ContentCard, BaseCard } from "@/components/home";

type ProductHowItFitsIntoLifeProps = {
  content: typeof productPageContent.howItFitsIntoLife;
};

export function ProductHowItFitsIntoLife({
  content,
}: ProductHowItFitsIntoLifeProps) {
  const secondaryImage = {
    src: "/images/home/device-close-detail-material.png",
    alt: "Close-up details of the Neuvago device material and finish.",
  } as const;

  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              title={content.title}
              description={content.description}
            />

            <div className="mt-8 space-y-4">
              {content.cards.map((card) => (
                <ContentCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <BaseCard className="overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/3] bg-[#f7f4ef]">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 560px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1f1f1c]">
                  A calmer real-life rhythm
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
                  Neuvago is designed to feel realistic to return to as part of daily life.
                </p>
              </div>
            </BaseCard>

            <BaseCard className="overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/3] bg-[#f7f4ef]">
                <Image
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 560px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1f1f1c]">
                  Device and app in context
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
                  A system designed to support calm, recovery, and evening wind-down.
                </p>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>
  );
}
