import type { howItWorksPageContent } from "@/content/how-it-works";
import {
  SectionHeading,
  ContentCard,
  CtaButton,
  AppScreenCard,
} from "@/components/home";

type HowItWorksAppAddsProps = {
  content: typeof howItWorksPageContent.appAdds;
};

export function HowItWorksAppAdds({ content }: HowItWorksAppAddsProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <SectionHeading
              title={content.title}
              description={content.description}
            />

            <div className="mt-8 space-y-4">
              {content.features.map((feature) => (
                <ContentCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <div className="mt-10">
              <CtaButton
                href={content.cta.href}
                label={content.cta.label}
                variant="secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {content.supportingImages.map((image, index) => (
              <div
                key={image.src}
                className={index === 2 ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <AppScreenCard src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
