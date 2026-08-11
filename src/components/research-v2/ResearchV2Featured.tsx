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
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#c4b6a4]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#d4cabd] sm:text-lg">
              {content.description}
            </p>

            <p className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/[0.05] px-4 py-3 text-xs leading-6 text-white/62">
              {content.boundary}
            </p>
          </div>

          <div className="grid gap-5">
            <Link
              href={content.study.href}
              className="group rounded-[2rem] border border-white/12 bg-[#292823] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.2)] transition hover:bg-[#2e2d27] sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/14 bg-white/[0.06] px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#f1dfc7]">
                  {content.study.label}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                  {content.study.year} · {content.study.journal}
                </span>
              </div>

              <h3 className="mt-6 max-w-[20ch] text-3xl font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-4xl">
                {content.study.title}
              </h3>

              <p className="mt-4 text-sm text-white/58">
                {content.study.authors}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                {content.study.description}
              </p>

              <span className="mt-7 inline-flex text-sm font-medium text-white underline-offset-4 group-hover:underline">
                Read study summary
              </span>
            </Link>

            <div className="grid gap-4 md:grid-cols-2">
              {content.contextCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-[1.45rem] border border-white/10 bg-white/[0.045] p-5 transition hover:bg-white/[0.075]"
                >
                  <h3 className="text-lg font-medium tracking-[-0.03em] text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex text-xs font-medium text-white underline-offset-4 group-hover:underline">
                    {card.linkLabel}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
