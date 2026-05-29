import Image from "next/image";
import type { appPageContent } from "@/content/app";
import { SectionHeading, ContentCard, BaseCard } from "@/components/home";

type AppCalmByDesignProps = {
  content: typeof appPageContent.calmByDesign;
};

export function AppCalmByDesign({ content }: AppCalmByDesignProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
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
            {content.detailImages.map((image) => (
              <BaseCard
                key={image.src}
                className="overflow-hidden rounded-[2rem] bg-white/60"
              >
                <div className="relative aspect-[4/3] bg-[#f7f4ef]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 560px"
                  />
                </div>
              </BaseCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
