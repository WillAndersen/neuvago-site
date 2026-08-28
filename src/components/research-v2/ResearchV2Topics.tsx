import Link from "next/link";
import type { researchV2Content } from "@/content/research-v2";

type ResearchV2TopicsProps = {
  content: typeof researchV2Content.topics;
};

export function ResearchV2Topics({
  content,
}: ResearchV2TopicsProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          </div>

          <div>
            <div className="grid border-b border-black/10 sm:grid-cols-2">
              {content.areas.map((area) => {
                const areaContent = (
                  <>
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="text-2xl font-medium tracking-[-0.045em] text-[#1f1f1c]">
                        {area.title}
                      </h3>
                      {area.href ? (
                        <span
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-lg text-[#8a7f72] transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#5f5a52] sm:text-base">
                      {area.description}
                    </p>
                  </>
                );

                const rowClassName =
                  "group border-t border-black/10 py-6 sm:min-h-[12rem] sm:py-7 sm:odd:border-r sm:odd:border-black/10 sm:odd:pr-8 sm:even:pl-8";

                return area.href ? (
                  <Link
                    key={area.title}
                    href={area.href}
                    className={`${rowClassName} transition hover:bg-black/[0.018] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]`}
                  >
                    {areaContent}
                  </Link>
                ) : (
                  <article key={area.title} className={rowClassName}>
                    {areaContent}
                  </article>
                );
              })}
            </div>

            <div className="mt-10 border-t border-black/10 pt-7">
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-[#81766a]">
                {content.technologyFoundations.title}
              </h3>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-4">
                {content.technologyFoundations.links.map((topic) => (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#1f1f1c] underline decoration-black/20 underline-offset-4 transition hover:decoration-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
                  >
                    {topic.title}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={content.allTopicsCta.href}
              className="mt-9 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
            >
              {content.allTopicsCta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
