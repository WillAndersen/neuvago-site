import Link from "next/link";
import type { researchV2Content } from "@/content/research-v2";

type ResearchV2FeaturedProps = {
  content: typeof researchV2Content.featured;
};

export function ResearchV2Featured({
  content,
}: ResearchV2FeaturedProps) {
  return (
    <section className="bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#c4b6a4]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#d4cabd] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {content.studies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className="group flex min-h-[24rem] flex-col rounded-[1.8rem] border border-white/12 bg-[#292823] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2e2d27] sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/14 bg-white/[0.06] px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#f1dfc7]">
                  {study.researchArea}
                </span>
                <span className="rounded-full border border-white/12 bg-white/[0.035] px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white/62">
                  {study.evidenceType}
                </span>
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/42">
                  {study.year}
                </span>
              </div>

              <h3 className="mt-6 max-w-[18ch] text-3xl font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-4xl">
                {study.heading}
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                {study.summary}
              </p>

              <span className="mt-auto pt-7 text-sm font-medium text-white underline-offset-4 group-hover:underline">
                Read study summary
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 max-w-4xl rounded-[1.25rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-xs leading-6 text-white/62">
          {content.boundary}
        </p>
      </div>
    </section>
  );
}
