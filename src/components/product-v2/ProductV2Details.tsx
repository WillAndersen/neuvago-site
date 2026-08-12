import Link from "next/link";
import type { productV2Content } from "@/content/product-v2";

type ProductV2DetailsProps = {
  content: typeof productV2Content.productDetails;
};

export function ProductV2Details({ content }: ProductV2DetailsProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[88rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-12 lg:py-24">
        <div className="max-w-xl lg:sticky lg:top-24">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[13ch] text-balance text-[clamp(2.4rem,9.5vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="space-y-3">
          {content.accordions.map((accordion) => (
            <details
              key={accordion.title}
              className="group rounded-[1.55rem] border border-black/6 bg-[#fbf8f2] px-5 py-1 shadow-[0_14px_48px_rgba(31,31,28,0.04)] open:bg-white sm:px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.035em] text-[#1f1f1c]">
                    {accordion.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6f675e]">
                    {accordion.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/8 bg-white text-xl text-[#5f5a52] transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="border-t border-black/6 pb-6 pt-5">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {accordion.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-[#5f5a52]"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f1f1c]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {accordion.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {accordion.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-full border border-black/8 bg-[#f2eee8] px-4 py-2.5 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
