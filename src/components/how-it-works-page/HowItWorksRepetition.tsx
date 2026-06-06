import Image from "next/image";
import type { howItWorksPageContent } from "@/content/how-it-works";

type HowItWorksRepetitionProps = {
  content: typeof howItWorksPageContent.repetition;
};

export function HowItWorksRepetition({ content }: HowItWorksRepetitionProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">Return over time</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">{content.description}</p>

          <div className="mt-8 space-y-5">
            {content.cards.map((card) => (
              <div key={card.title} className="border-t border-black/10 pt-5">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-[#1f1f1c]">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.4rem] border border-black/5 bg-white/55 shadow-[0_30px_110px_rgba(31,31,28,0.1)]">
          <div className="relative aspect-[4/3]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 92vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
