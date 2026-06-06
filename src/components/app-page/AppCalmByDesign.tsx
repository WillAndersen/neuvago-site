import Image from "next/image";
import type { appPageContent } from "@/content/app";

type AppCalmByDesignProps = {
  content: typeof appPageContent.calmByDesign;
};

export function AppCalmByDesign({ content }: AppCalmByDesignProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.cards.map((card) => (
              <div key={card.title} className="rounded-[2rem] border border-black/5 bg-white/62 p-6 shadow-[0_18px_60px_rgba(31,31,28,0.06)]">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-[#1f1f1c]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {content.detailImages.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-[2.2rem] border border-black/5 bg-white/55 shadow-[0_24px_80px_rgba(31,31,28,0.07)]">
              <div className="relative aspect-[16/10]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 92vw, 44vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
