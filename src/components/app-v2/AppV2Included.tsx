import { CtaButton } from "@/components/home/CtaButton";
import type { appV2Content } from "@/content/app-v2";

type AppV2IncludedProps = {
  content: typeof appV2Content.included;
};

export function AppV2Included({ content }: AppV2IncludedProps) {
  return (
    <section className="bg-[#3a312a] text-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end lg:px-12 lg:py-20">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#cdbda9]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-[0.97] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
        </div>

        <div>
          <p className="max-w-3xl text-base leading-8 text-[#d9cfc4] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton
              href={content.primaryCta.href}
              label={content.primaryCta.label}
              variant="light"
            />
            <CtaButton
              href={content.secondaryCta.href}
              label={content.secondaryCta.label}
              variant="outlineLight"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
