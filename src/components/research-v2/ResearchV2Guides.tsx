import Link from "next/link";

import type { ResearchGuideContent } from "@/content/research-guides/types";

type ResearchV2GuidesProps = {
  guides: readonly ResearchGuideContent[];
};

export function ResearchV2Guides({
  guides,
}: ResearchV2GuidesProps) {
  if (guides.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-black/6 bg-[#e9eeea]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#66736a]">
            Research literacy
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            Learn how to evaluate the study before repeating the conclusion.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#596159] sm:text-lg">
            These guides focus on study design, stimulation protocols,
            controls, outcomes, uncertainty, bias and the boundaries of
            evidence transfer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {guides.map((guide, index) => (
            <article
              key={guide.path}
              className={`min-w-0 rounded-[2rem] border p-7 shadow-[0_22px_78px_rgba(31,31,28,0.055)] sm:p-9 ${
                index === 0
                  ? "border-black/10 bg-[#1f1f1c] text-white"
                  : "border-black/6 bg-white/76 text-[#1f1f1c]"
              }`}
            >
              <p
                className={`text-xs font-medium uppercase tracking-[0.18em] ${
                  index === 0 ? "text-white/50" : "text-[#718076]"
                }`}
              >
                {guide.hubLabel}
              </p>
              <h3 className="mt-4 break-words text-3xl font-medium tracking-[-0.045em]">
                {guide.hubTitle}
              </h3>
              <p
                className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
                  index === 0 ? "text-white/70" : "text-[#596159]"
                }`}
              >
                {guide.hubSummary}
              </p>
              <Link
                href={guide.path}
                className={`mt-7 inline-flex rounded-full px-5 py-2.5 text-sm font-medium ${
                  index === 0
                    ? "bg-white text-[#1f1f1c]"
                    : "bg-[#1f1f1c] text-white"
                }`}
              >
                Open guide
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
