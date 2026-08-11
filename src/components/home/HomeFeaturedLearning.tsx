import type { homepageContent } from "@/content/homepage";
import { SectionHeading } from "@/components/home/SectionHeading";
import { LightLinkCard } from "@/components/home/LightLinkCard";
import { CtaButton } from "@/components/home/CtaButton";

type HomeFeaturedLearningProps = {
  content: typeof homepageContent.featuredLearning;
};

export function HomeFeaturedLearning({ content }: HomeFeaturedLearningProps) {
  return (
    <section className="bg-[#ebe3d8]">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
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
