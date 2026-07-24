import Image from "next/image";
import type { supportPageContent } from "@/content/support";

type SupportPhilosophyProps = {
  content: typeof supportPageContent.philosophy;
};

export function SupportPhilosophy({ content }: SupportPhilosophyProps) {
  const sectionContent = content as typeof supportPageContent.philosophy & {
    eyebrow?: string;
  };

  return (
    <section className="bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div className="max-w-xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#b8aa99]">{sectionContent.eyebrow ?? "Support philosophy"}</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#d4cabd] sm:text-lg">{content.description}</p>
          <div className="mt-8 space-y-5">
            {content.cards.map((card) => (
              <div key={card.title} className="border-t border-white/12 pt-5">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#d4cabd]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.055] shadow-[0_30px_110px_rgba(0,0,0,0.22)]">
          <div className="relative aspect-[4/3]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 92vw, 56vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
