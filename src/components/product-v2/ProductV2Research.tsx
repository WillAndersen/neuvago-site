import { CtaButton } from "@/components/home/CtaButton";
import type { productV2Content } from "@/content/product-v2";

type ProductV2ResearchProps = {
  content: typeof productV2Content.research;
};

export function ProductV2Research({
  content,
}: ProductV2ResearchProps) {
  return (
    <section className="bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#b8aa99]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 max-w-[15ch] text-balance text-4xl font-medium tracking-[-0.055em] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
              {content.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-[#d4cabd] sm:text-lg">
              {content.description}
            </p>

            <div className="mt-9">
              <CtaButton
                href={content.cta.href}
                label={content.cta.label}
                variant="light"
              />
            </div>

            <p className="mt-5 max-w-lg text-xs leading-6 text-white/55">
              {content.contextNote}
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {content.areas.map((area) => (
              <article
                key={area.title}
                className="bg-[#262520] p-6 sm:p-7 lg:p-8"
              >
                <h3 className="text-xl font-medium tracking-[-0.035em] text-white">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#d4cabd] sm:text-base">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
