import Link from "next/link";
import { CtaButton } from "@/components/home/CtaButton";
import type { researchV2Content } from "@/content/research-v2";

type ResearchV2LibraryProps = {
  content: typeof researchV2Content.library;
};

export function ResearchV2Library({
  content,
}: ResearchV2LibraryProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-10">
          <div className="lg:sticky lg:top-24">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>

            <div className="mt-7 grid grid-cols-3 gap-2.5 sm:mt-8 sm:gap-3">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.15rem] border border-black/6 bg-[#f2eee8] px-3 py-3.5 sm:rounded-[1.25rem] sm:px-4 sm:py-4"
                >
                  <p className="text-2xl font-medium tracking-[-0.05em] text-[#1f1f1c] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[0.68rem] leading-5 text-[#6f675e] sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
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
          </div>

          <details className="group overflow-hidden rounded-[1.75rem] border border-black/6 bg-[#fbf8f2] shadow-[0_18px_62px_rgba(31,31,28,0.05)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-6 sm:py-6">
              <div>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#8a7f72]">
                  Complete study list
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] text-[#1f1f1c] sm:text-2xl">
                  View all nine study summaries
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6f675e]">
                  Explore all nine study summaries in one place.
                </p>
              </div>

              <span
                aria-hidden="true"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/8 bg-white text-xl text-[#5f5a52] transition group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <div className="grid gap-3 border-t border-black/6 p-4 sm:grid-cols-2 sm:p-5">
              {content.studies.map((study) => (
                <Link
                  key={study.href}
                  href={study.href}
                  className="group/link rounded-[1.2rem] border border-black/6 bg-white/65 p-4 transition hover:bg-white"
                >
                  <h4 className="text-base font-medium tracking-[-0.03em] text-[#1f1f1c]">
                    {study.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-[#6f675e]">
                    {study.context}
                  </p>
                  <span className="mt-3 inline-flex text-xs font-medium text-[#1f1f1c] underline-offset-4 group-hover/link:underline">
                    Read summary
                  </span>
                </Link>
              ))}
            </div>
          </details>
        </div>

        <div className="mt-12 border-t border-black/8 pt-10 sm:mt-16 sm:pt-12">
          <div className="max-w-3xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
              Research context
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl">
              {content.depthTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.depthDescription}
            </p>
          </div>

          <div className="mt-7 space-y-3 sm:mt-8">
            {content.depthItems.map((item) => (
              <details
                key={item.title}
                className="group rounded-[1.35rem] border border-black/6 bg-[#fbf8f2] px-5 py-1 shadow-[0_12px_42px_rgba(31,31,28,0.035)] open:bg-white sm:rounded-[1.45rem] sm:px-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5">
                  <span className="text-lg font-medium tracking-[-0.03em] text-[#1f1f1c]">
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/8 bg-white text-lg text-[#5f5a52] transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="max-w-4xl space-y-4 pb-6 pr-8">
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-[#5f5a52] sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
