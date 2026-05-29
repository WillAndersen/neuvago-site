import type { supportPageContent } from "@/content/support";
import { SectionHeading, LightLinkCard } from "@/components/home";

type SupportTopicsProps = {
  content: typeof supportPageContent.supportTopics;
};

export function SupportTopics({ content }: SupportTopicsProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <SectionHeading
          title={content.title}
          description={content.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.links.map((link) => (
            <LightLinkCard
              key={link.href}
              href={link.href}
              title={link.title}
              description={link.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
