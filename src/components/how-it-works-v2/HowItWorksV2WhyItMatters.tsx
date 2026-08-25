import type { HowItWorksV2Content } from "@/content/how-it-works-v2";

export type HowItWorksV2WhyItMattersProps = {
  content: HowItWorksV2Content["whyItMatters"];
};

export function HowItWorksV2WhyItMatters({
  content,
}: HowItWorksV2WhyItMattersProps) {
  return (
    <section
      data-how-it-works-section="why-it-matters"
      className="bg-[#e8ded0]"
    >
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#81766a] sm:text-xs">
              {content.eyebrow}
            </p>

            <h2 className="mt-5 max-w-[13ch] text-balance text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-7xl">
              {content.title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>

            <p className="mt-8 max-w-xl border-l-2 border-[#9b866e]/45 pl-5 text-base font-medium leading-8 text-[#3f3a34] sm:text-lg">
              {content.productConnection}
            </p>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {content.areas.map((area) => (
              <article
                key={area.id}
                className="grid gap-3 py-7 sm:py-8 xl:grid-cols-[0.44fr_0.56fr] xl:gap-8"
              >
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c] sm:text-3xl">
                  {area.label}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
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
