import type { appV2Content } from "@/content/app-v2";

type AppV2BreathingToolsProps = {
  content: typeof appV2Content.breathingTools;
};

export function AppV2BreathingTools({
  content,
}: AppV2BreathingToolsProps) {
  return (
    <section className="overflow-hidden bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-12 lg:py-28">
        <div className="relative mx-auto grid aspect-square w-full max-w-[29rem] place-items-center">
          <div className="absolute inset-[4%] rounded-full border border-white/8 bg-[radial-gradient(circle_at_35%_30%,rgba(255,237,208,0.9),rgba(236,151,52,0.86)_36%,rgba(196,93,32,0.64)_65%,rgba(31,31,28,0)_72%)] shadow-[0_0_110px_rgba(236,151,52,0.25)]" />
          <div className="absolute inset-[18%] rounded-full border border-white/16" />
          <div className="absolute inset-[30%] rounded-full border border-white/20 bg-white/[0.035]" />
          <div className="relative text-center">
            <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-white/55">
              Visual breathing cue
            </p>
            <p className="mt-4 text-4xl font-medium tracking-[-0.055em] text-white sm:text-5xl">
              Breathe
            </p>
            <p className="mt-3 text-sm text-white/60">
              Inhale · pause · exhale
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#c4b6a4]">
              {content.eyebrow}
            </p>
            <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-white/65">
              {content.statusLabel}
            </span>
          </div>

          <h2 className="mt-4 max-w-[13ch] text-balance text-[clamp(2.5rem,9vw,3.7rem)] font-medium leading-[0.97] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#d4cabd] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 grid gap-px overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {content.practices.map((practice) => (
              <article
                key={practice.title}
                className="bg-[#282721] p-5"
              >
                <h3 className="text-base font-medium tracking-[-0.025em] text-white">
                  {practice.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/66">
                  {practice.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-white/54">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
}
