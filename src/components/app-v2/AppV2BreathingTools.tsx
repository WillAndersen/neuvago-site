import { CtaButton } from "@/components/home/CtaButton";
import type { appV2Content } from "@/content/app-v2";

type AppV2BreathingToolsProps = {
  content: typeof appV2Content.breathingTools;
};

export function AppV2BreathingTools({
  content,
}: AppV2BreathingToolsProps) {
  return (
    <section className="bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-12 lg:py-28">
        <div>
          <div className="relative mx-auto aspect-square w-full max-w-[27rem]">
            <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle_at_36%_32%,rgba(255,240,216,0.96),rgba(213,146,76,0.82)_48%,rgba(130,75,35,0.35)_72%,transparent_74%)] shadow-[0_0_100px_rgba(225,150,76,0.3)]" />
            <div className="absolute inset-[26%] rounded-full border border-white/30 bg-white/[0.08] backdrop-blur-sm" />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/54">
                  Breathe
                </p>
                <p className="mt-2 text-3xl font-medium tracking-[-0.045em] text-white">
                  Slow and steady
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#c4b6a4]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#d4cabd] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 grid gap-3">
            {content.examples.map((example) => (
              <article
                key={example.title}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-5"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-medium tracking-[-0.035em] text-white">
                    {example.title}
                  </h3>
                  <span className="w-fit rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#f1dfc7]">
                    {example.outcome}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  {example.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-white/62">
            {content.closingLine}
          </p>

          <div className="mt-8">
            <CtaButton
              href={content.primaryCta.href}
              label={content.primaryCta.label}
              variant="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
