import Image from "next/image";
import type { howItWorksPageContent } from "@/content/how-it-works";

type HowItWorksSystemAtAGlanceProps = {
  content: typeof howItWorksPageContent.systemAtAGlance;
};

export function HowItWorksSystemAtAGlance({ content }: HowItWorksSystemAtAGlanceProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">System at a glance</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">{content.description}</p>
        </div>

        <div className="overflow-hidden rounded-[2.4rem] border border-black/5 bg-white/55 shadow-[0_30px_110px_rgba(31,31,28,0.1)]">
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
