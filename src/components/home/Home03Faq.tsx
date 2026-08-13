import Link from "next/link";
import type { homepage03Content } from "@/content/homepage-v3";

type Home03FaqProps = {
  content: typeof homepage03Content.faq;
};

export function Home03Faq({
  content,
}: Home03FaqProps) {
  return (
    <section id="faq" className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <h2 className="max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
          {content.title}
        </h2>

        <div className="mt-10 divide-y divide-black/8 border-y border-black/8">
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
              <p className="max-w-4xl pb-7 pr-12 text-sm leading-7 text-[#5f5a52] sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-7 text-sm text-[#5f5a52]">
          Need more help?{" "}
          <Link
            href={content.supportCta.href}
            className="font-medium text-[#1f1f1c] underline underline-offset-4"
          >
            {content.supportCta.label}
          </Link>
        </p>
      </div>
    </section>
  );
}
