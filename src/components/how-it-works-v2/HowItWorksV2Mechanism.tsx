import { Fragment } from "react";
import type { HowItWorksV2Content } from "@/content/how-it-works-v2";

export type HowItWorksV2MechanismProps = {
  content: HowItWorksV2Content["mechanism"];
};

export function HowItWorksV2Mechanism({
  content,
}: HowItWorksV2MechanismProps) {
  return (
    <section
      data-how-it-works-section="mechanism"
      className="bg-[#f7f4ef]"
    >
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <h2 className="max-w-[14ch] text-balance text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-7xl">
          {content.title}
        </h2>

        {content.description ? (
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        ) : null}

        <div className="mt-14 hidden items-stretch lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {content.steps.map((step, index) => (
            <Fragment key={step.id}>
              <article className="border-y border-black/10 px-5 py-8 first:border-l first:pl-7 last:border-r last:pr-7">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9a8f82]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c] xl:text-3xl">
                  {step.label}
                </h3>
                {step.description ? (
                  <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                    {step.description}
                  </p>
                ) : null}
              </article>

              {index < content.steps.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="grid min-w-12 place-items-center border-y border-black/10 text-2xl text-[#9a8f82]"
                >
                  →
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>

        <div className="mt-12 border-y border-black/10 lg:hidden">
          {content.steps.map((step, index) => (
            <div key={step.id}>
              <article className="py-7">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9a8f82]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-3xl font-medium tracking-[-0.045em] text-[#1f1f1c]">
                  {step.label}
                </h3>
                {step.description ? (
                  <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                    {step.description}
                  </p>
                ) : null}
              </article>

              {index < content.steps.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="border-t border-black/10 py-4 text-center text-2xl text-[#9a8f82]"
                >
                  ↓
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
