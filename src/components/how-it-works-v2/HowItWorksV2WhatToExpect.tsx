import type { HowItWorksV2Content } from "@/content/how-it-works-v2";

export type HowItWorksV2WhatToExpectProps = {
  content: HowItWorksV2Content["whatToExpect"];
};

export function HowItWorksV2WhatToExpect({
  content,
}: HowItWorksV2WhatToExpectProps) {
  return (
    <section
      data-how-it-works-section="what-to-expect"
      className="bg-[#f7f4ef]"
    >
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <h2 className="max-w-[14ch] text-balance text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-7xl">
            {content.title}
          </h2>

          {content.description ? (
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          ) : null}
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {content.facts.map((fact) => (
            <p
              key={fact.id}
              className="py-7 text-3xl font-medium tracking-[-0.045em] text-[#1f1f1c] sm:py-8 sm:text-4xl"
            >
              {fact.label}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
