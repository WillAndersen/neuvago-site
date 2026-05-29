import Image from "next/image";
import type { productPageContent } from "@/content/product";
import { SectionHeading, BaseCard } from "@/components/home";

type ProductHowToUseProps = {
  content: typeof productPageContent.howToUse;
};

export function ProductHowToUse({ content }: ProductHowToUseProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeading
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.steps.map((step, index) => (
            <BaseCard
              key={step.title}
              className="overflow-hidden rounded-[1.75rem]"
            >
              {step.image ? (
                <div className="border-b border-black/5 bg-[#f7f4ef] p-6">
                  <div className="mx-auto max-w-[260px] overflow-hidden rounded-[1.25rem] border border-black/5 bg-white">
                    <div className={`relative ${index === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 260px"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="p-6">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8a847b]">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#1f1f1c]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                  {step.description}
                </p>
              </div>
            </BaseCard>
          ))}
        </div>
      </div>
    </section>
  );
}
