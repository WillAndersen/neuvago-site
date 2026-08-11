import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeFaqProps = {
  content: typeof homepageContent.faq;
};

export function HomeFaq({ content }: HomeFaqProps) {
  return (
    <section id="faq" className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
          <div className="mt-8">
            <CtaButton
              href={content.cta.href}
              label={content.cta.label}
              variant="secondary"
            />
          </div>
        </div>

        <div className="divide-y divide-black/8 border-y border-black/8">
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
