import type { homepageContent } from "@/content/homepage";
import { SectionHeading } from "@/components/home/SectionHeading";
import { LightLinkCard } from "@/components/home/LightLinkCard";
import { CtaButton } from "@/components/home/CtaButton";

type HomeConditionsOverviewProps = {
  content: typeof homepageContent.conditionsOverview;
};

export function HomeConditionsOverview({ content }: HomeConditionsOverviewProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <SectionHeading
          title={content.title}
          description={content.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item) => (
            <LightLinkCard
              key={item.href}
              href={item.href}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-8">
          <CtaButton
            href={content.cta.href}
            label={content.cta.label}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
