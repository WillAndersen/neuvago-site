import type { appV2Content } from "@/content/app-v2";

type AppV2FaqProps = {
  content: typeof appV2Content.faq;
};

export function AppV2Faq({ content }: AppV2FaqProps) {
  return (
    <section id="faq" className="bg-[#f2eee8]">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-12 lg:py-24">
        <div className="max-w-xl lg:sticky lg:top-24">
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

        <div className="divide-y divide-black/9 border-y border-black/9">
          {content.items.map((item) => (
            <details key={item.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
                <span className="text-xl font-medium tracking-[-0.025em] text-[#1f1f1c] sm:text-2xl">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/60 text-xl text-[#5f5a52] transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-7 pr-12 text-sm leading-7 text-[#5f5a52] sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
