import Link from "next/link";
import type { researchV2Content } from "@/content/research-v2";

type ResearchV2FoundationsProps = {
  content: typeof researchV2Content.foundations;
};

export function ResearchV2Foundations({
  content,
}: ResearchV2FoundationsProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-x-16 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:grid-rows-[auto_1fr] lg:px-12 lg:py-24">
        <div className="max-w-[36rem] lg:col-start-1 lg:row-start-1">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-12 border-t border-black/10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
          {content.studies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className="group block border-b border-black/10 py-8 transition hover:border-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef] sm:py-9"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-[0.65rem] font-medium tracking-[0.18em] text-[#756a5f]">
                  {study.label}
                </span>
                <span className="text-[0.68rem] tracking-[0.16em] text-[#9a8f82]">
                  {study.year}
                </span>
              </div>

              <h3 className="mt-4 max-w-[32ch] text-2xl font-medium leading-[1.08] tracking-[-0.04em] text-[#1f1f1c] sm:text-3xl">
                {study.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#746d65]">
                <span>{study.authors}</span>
                <span aria-hidden="true" className="mx-2 text-[#aaa096]">
                  ·
                </span>
                <span>{study.journal}</span>
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                {study.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1f1f1c] underline-offset-4 group-hover:underline group-focus-visible:underline">
                Read study summary
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:self-end lg:mt-12">
          <Link
            href={content.allStudiesCta.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1f1f1c] underline underline-offset-4 transition hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
          >
            {content.allStudiesCta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
