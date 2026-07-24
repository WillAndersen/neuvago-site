import Image from "next/image";
import type { appPageContent } from "@/content/app";

type AppWhatItDoesProps = {
  content: typeof appPageContent.whatItDoes;
};

export function AppWhatItDoes({ content }: AppWhatItDoesProps) {
  const sectionContent = content as typeof appPageContent.whatItDoes & {
    eyebrow?: string;
    itemLabel?: string;
  };

  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
            {sectionContent.eyebrow ?? "Guidance layer"}
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {content.bullets.map((bullet, index) => (
              <div key={bullet} className="border-t border-black/10 pt-5">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a8f82]">
                  {sectionContent.itemLabel ?? "Point"} 0{index + 1}
                </p>
                <p className="mt-3 text-lg font-medium leading-7 tracking-[-0.025em] text-[#292824]">
                  {bullet}
                </p>
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
              sizes="(max-width: 1024px) 92vw, 56vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
