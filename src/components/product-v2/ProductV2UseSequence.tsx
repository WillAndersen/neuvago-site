import Image from "next/image";
import type { productV2Content } from "@/content/product-v2";

type ProductV2UseSequenceProps = {
  content: typeof productV2Content.useSequence;
};

function imageClassName(src: string) {
  return /gallery-front|gallery-detail/i.test(src)
    ? "object-contain p-6"
    : "object-cover";
}

export function ProductV2UseSequence({
  content,
}: ProductV2UseSequenceProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-12 lg:py-24">
        <div className="lg:sticky lg:top-24">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.4rem,9.5vw,3.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
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
              <div className="relative min-h-[18rem] bg-[#ede5da] md:min-h-full">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  className={imageClassName(step.image.src)}
                  sizes="(max-width: 768px) 92vw, 340px"
                />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a8f82]">
                  Step {String(index + 1).padStart(2, "0")}
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
