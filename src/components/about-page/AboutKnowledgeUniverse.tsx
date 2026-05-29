import type { aboutPageContent } from "@/content/about";
import { SectionHeading, LightLinkCard, CtaButton } from "@/components/home";

type AboutKnowledgeUniverseProps = {
  content: typeof aboutPageContent.knowledgeUniverse;
};

export function AboutKnowledgeUniverse({
  content,
}: AboutKnowledgeUniverseProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <SectionHeading
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.links.map((link) => (
            <LightLinkCard
              key={link.href}
              href={link.href}
              title={link.title}
              description={link.description}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaButton
            href={content.primaryCta.href}
            label={content.primaryCta.label}
            variant="primary"
          />
          <CtaButton
            href={content.secondaryCta.href}
            label={content.secondaryCta.label}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
