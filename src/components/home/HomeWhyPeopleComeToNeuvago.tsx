import type { homepageContent } from "@/content/homepage";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ContentCard } from "@/components/home/ContentCard";

type HomeWhyPeopleComeToNeuvagoProps = {
  content: typeof homepageContent.whyPeopleComeToNeuvago;
};

export function HomeWhyPeopleComeToNeuvago({
  content,
}: HomeWhyPeopleComeToNeuvagoProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeading
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.cards.map((card) => (
            <ContentCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
