import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ContentCard } from "@/components/home/ContentCard";

type HomeWhyNeuvagoProps = {
  content: typeof homepageContent.whyNeuvago;
};

export function HomeWhyNeuvago({ content }: HomeWhyNeuvagoProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-18 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16 lg:px-12 lg:py-20">
        <div>
          <SectionHeading
            eyebrow="Why Neuvago"
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

        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/60 shadow-[0_28px_90px_rgba(31,31,28,0.09)]">
          <div className="relative aspect-[4/3]">
            <Image
              src={content.detailImage.src}
              alt={content.detailImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 560px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
