import type { supportPageContent } from "@/content/support";
import { SectionHeading, LightLinkCard } from "@/components/home";

type SupportStartHereProps = {
  content: typeof supportPageContent.startHere;
};

export function SupportStartHere({ content }: SupportStartHereProps) {
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
      </div>
    </section>
  );
}
