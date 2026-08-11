import { CtaButton } from "@/components/home/CtaButton";
import type { researchV2Content } from "@/content/research-v2";

type ResearchV2HeroProps = {
  content: typeof researchV2Content.hero;
};

export function ResearchV2Hero({ content }: ResearchV2HeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(255,252,247,0.98),transparent_34%),radial-gradient(circle_at_84%_20%,rgba(226,193,148,0.22),transparent_34%)]" />

      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
        <div className="max-w-[44rem]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7d7267]">
            {content.eyebrow}
          </p>

          <h1 className="mt-5 max-w-[12ch] text-balance text-[clamp(3rem,12vw,5.7rem)] font-medium leading-[0.93] tracking-[-0.066em] text-[#1f1f1c] sm:text-[clamp(4rem,8vw,6.8rem)] lg:text-[clamp(5rem,6.2vw,7.35rem)] lg:leading-[0.88] lg:tracking-[-0.08em]">
            {content.title}
          </h1>

          <p className="mt-7 max-w-[40rem] text-base leading-8 text-[#514c45] sm:text-lg lg:text-xl lg:leading-9">
            {content.description}
          </p>

          <p className="mt-4 max-w-[40rem] text-base leading-8 text-[#625c54] sm:text-lg">
            {content.secondaryDescription}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <CtaButton
              href={content.primaryCta.href}
              label={content.primaryCta.label}
              variant="primary"
            />
            <CtaButton
              href={content.secondaryCta.href}
              label={content.secondaryCta.label}
              variant="secondary"
            />
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {content.proofLine.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/8 bg-white/70 px-3.5 py-2 text-xs font-medium text-[#625a51] shadow-[0_12px_35px_rgba(31,31,28,0.04)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(225,173,102,0.2),transparent_68%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.25rem] border border-black/6 bg-[#eee7dd]/82 p-5 shadow-[0_30px_110px_rgba(31,31,28,0.11)] backdrop-blur sm:p-7">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.26em] text-[#8a7f72]">
              Research terminology
            </p>

            <div className="mt-6 space-y-3">
              {content.hierarchy.map((item, index) => (
                <div key={item.abbreviation}>
                  <article
                    className={`rounded-[1.45rem] border p-5 ${
                      index === content.hierarchy.length - 1
                        ? "border-[#b98c50]/30 bg-[#f6e8d3]"
                        : "border-black/6 bg-[#fbf8f2]/90"
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                      <span
                        className={`inline-flex w-fit shrink-0 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] ${
                          index === content.hierarchy.length - 1
                            ? "bg-[#1f1f1c] text-white"
                            : "border border-black/8 bg-white text-[#5f574f]"
                        }`}
                      >
                        {item.abbreviation}
                      </span>

                      <div>
                        <h3 className="text-xl font-medium tracking-[-0.035em] text-[#1f1f1c]">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#625c54]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>

                  {index < content.hierarchy.length - 1 ? (
                    <div
                      aria-hidden="true"
                      className="mx-auto h-5 w-px bg-black/15"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
