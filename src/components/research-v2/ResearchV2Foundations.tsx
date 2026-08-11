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
      <div className="mx-auto max-w-[92rem] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
          <p className="mt-4 max-w-3xl text-xs leading-6 text-[#756d64]">
            {content.labelNote}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {content.studies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className="group flex min-h-0 flex-col rounded-[1.55rem] border border-black/6 bg-[#fbf8f2] p-5 shadow-[0_18px_62px_rgba(31,31,28,0.05)] transition hover:-translate-y-0.5 sm:p-6 md:min-h-[20rem]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-black/8 bg-[#f2eee8] px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#756a5f]">
                  {study.label}
                </span>
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-[#9a8f82]">
                  {study.year}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-medium leading-[1.05] tracking-[-0.045em] text-[#1f1f1c] md:mt-5">
                {study.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#746d65]">
                {study.authors}
              </p>
              <p className="mt-1 text-sm leading-6 text-[#8a8279]">
                {study.journal}
              </p>

              <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:mt-5">
                {study.description}
              </p>

              <span className="mt-auto pt-5 text-sm font-medium text-[#1f1f1c] underline-offset-4 group-hover:underline md:pt-7">
                Read study summary
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
