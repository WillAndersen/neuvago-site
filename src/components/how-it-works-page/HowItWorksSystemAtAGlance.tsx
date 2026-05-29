import Image from "next/image";
import type { howItWorksPageContent } from "@/content/how-it-works";
import { SectionHeading, ContentCard } from "@/components/home";

type HowItWorksSystemAtAGlanceProps = {
  content: typeof howItWorksPageContent.systemAtAGlance;
};

export function HowItWorksSystemAtAGlance({
  content,
}: HowItWorksSystemAtAGlanceProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-12">
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

        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/60 shadow-[0_24px_80px_rgba(31,31,28,0.08)]">
          <div className="relative aspect-[4/3]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
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
