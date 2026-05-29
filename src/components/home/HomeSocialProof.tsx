import type { homepageContent } from "@/content/homepage";
import { SectionHeading } from "@/components/home/SectionHeading";
import { QuoteCard } from "@/components/home/QuoteCard";

type HomeSocialProofProps = {
  content: typeof homepageContent.socialProof;
};

export function HomeSocialProof({ content }: HomeSocialProofProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <SectionHeading
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {content.quotes.map((quote) => (
            <QuoteCard
              key={`${quote.name}-${quote.quote}`}
              quote={quote.quote}
              name={quote.name}
              role={quote.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
