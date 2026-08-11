import Image from "next/image";
import Link from "next/link";
import type { productV2Content } from "@/content/product-v2";

type ProductV2IncludedProps = {
  content: typeof productV2Content.included;
};

export function ProductV2Included({ content }: ProductV2IncludedProps) {
  return (
    <section className="bg-[#f7f4ef] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="order-2 grid gap-5 lg:sticky lg:top-24 lg:order-1">
          <div className="overflow-hidden rounded-[2.1rem] border border-black/6 bg-[#fbf8f2] shadow-[0_24px_90px_rgba(31,31,28,0.08)]">
            <div className="grid md:grid-cols-2">
              {content.images.map((image, index) => (
                <div
                  key={image.src}
                  className={`relative min-h-[20rem] bg-[#ede5da] ${
                    index === 0
                      ? "border-b border-black/6 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 26vw"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.55rem] border border-black/6 bg-[#fbf8f2]/92 px-5 py-4 shadow-[0_18px_70px_rgba(31,31,28,0.06)] sm:px-6">
            <p className="text-sm leading-7 text-[#5f5a52]">
              {content.launchNote}
            </p>
          </div>
        </div>

        <div className="order-1 rounded-[2.1rem] border border-black/6 bg-[#fbf8f2]/90 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8 lg:order-2">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.4rem,9.5vw,3.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.25rem] border border-black/6 bg-white/58 p-4"
              >
                <h3 className="text-base font-medium tracking-[-0.03em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28]"
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
