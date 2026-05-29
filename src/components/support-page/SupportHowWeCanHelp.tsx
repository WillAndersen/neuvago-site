import type { supportPageContent } from "@/content/support";
import { SectionHeading, ContentCard } from "@/components/home";

type SupportHowWeCanHelpProps = {
  content: typeof supportPageContent.howWeCanHelp;
};

export function SupportHowWeCanHelp({
  content,
}: SupportHowWeCanHelpProps) {
  return (
    <section className="bg-[#f7f4ef]">
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
