import type { researchV2Content } from "@/content/research-v2";

type ResearchV2ApproachProps = {
  content: typeof researchV2Content.approach;
};

export function ResearchV2Approach({
  content,
}: ResearchV2ApproachProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <div className="max-w-[36rem]">
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

          <div className="border-t border-black/10">
            {content.items.map((item) => (
              <details
                key={item.title}
                className="group border-b border-black/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f2eee8] sm:py-7 [&::-webkit-details-marker]:hidden">
                  <span className="text-lg font-medium tracking-[-0.03em] text-[#1f1f1c] sm:text-xl">
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative grid h-8 w-8 shrink-0 place-items-center text-[#81766a]"
                  >
                    <span className="absolute h-px w-4 bg-current" />
                    <span className="absolute h-4 w-px bg-current transition-transform duration-200 group-open:scale-y-0" />
                  </span>
                </summary>

                <p className="max-w-3xl pb-7 pr-10 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {item.description}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
