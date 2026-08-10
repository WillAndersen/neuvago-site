import Image from "next/image";
import type { productPageContent } from "@/content/product";

type ProductHowToUseProps = {
  content: typeof productPageContent.howToUse;
};

function imageClassName(src: string) {
  if (/product-hero|product-gallery|product-phone-app/i.test(src)) {
    return "object-contain p-5 sm:p-6";
  }

  return "object-cover";
}

export function ProductHowToUse({ content }: ProductHowToUseProps) {
  const sectionContent = content as typeof productPageContent.howToUse & {
    eyebrow?: string;
    stepLabel?: string;
  };

  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-12 lg:py-24">
        <div className="lg:sticky lg:top-24">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
            {sectionContent.eyebrow ?? "The ritual"}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.35rem,9.5vw,3.35rem)] font-medium leading-[0.98] tracking-[-0.035em] text-[#1f1f1c] sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.055em] lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="space-y-5">
          {content.steps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-0 overflow-hidden rounded-[2rem] border border-black/6 bg-[#fbf8f2] shadow-[0_20px_70px_rgba(31,31,28,0.07)] md:grid-cols-[0.76fr_1fr] md:items-stretch"
            >
              {step.image ? (
                <div className="relative min-h-[18rem] bg-[#ede5da] md:min-h-full">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    className={imageClassName(step.image.src)}
                    sizes="(max-width: 768px) 92vw, 340px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f1f1c]/10 via-transparent to-white/10" />
                </div>
              ) : null}

              <div className="flex flex-col justify-center p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a8f82]">
                  {sectionContent.stepLabel ?? "Step"} 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
