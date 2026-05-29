import type { aboutPageContent } from "@/content/about";
import { SectionHeading, BaseCard } from "@/components/home";

type AboutFaqProps = {
  content: typeof aboutPageContent.faq;
};

export function AboutFaq({ content }: AboutFaqProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <SectionHeading
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-10 space-y-4">
          {content.items.map((item) => (
            <BaseCard key={item.question} className="px-6 py-6">
              <h3 className="text-lg font-semibold text-[#1f1f1c]">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                {item.answer}
              </p>
            </BaseCard>
          ))}
        </div>
      </div>
    </section>
  );
}
