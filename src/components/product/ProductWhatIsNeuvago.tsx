import Image from "next/image";
import type { productPageContent } from "@/content/product";

type ProductWhatIsNeuvagoProps = {
  content: typeof productPageContent.whatIsNeuvago;
};

export function ProductWhatIsNeuvago({ content }: ProductWhatIsNeuvagoProps) {
  const sectionContent = content as typeof productPageContent.whatIsNeuvago & {
    eyebrow?: string;
  };

  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
              {sectionContent.eyebrow ?? "The system"}
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.4rem] border border-black/5 bg-white/55 shadow-[0_30px_110px_rgba(31,31,28,0.1)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 48vw, 720px"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {content.bullets.map((bullet, index) => (
            <div
              key={bullet}
              className="rounded-[2rem] border border-black/5 bg-white/62 p-6 shadow-[0_18px_60px_rgba(31,31,28,0.06)]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a8f82]">
                0{index + 1}
              </p>
              <p className="mt-5 text-lg font-medium leading-7 tracking-[-0.02em] text-[#292824]">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
