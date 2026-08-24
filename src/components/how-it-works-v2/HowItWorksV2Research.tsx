import Image from "next/image";
import Link from "next/link";
import type { HowItWorksV2Content } from "@/content/how-it-works-v2";

export type HowItWorksV2ResearchProps = {
  content: HowItWorksV2Content["research"];
};

export function HowItWorksV2Research({
  content,
}: HowItWorksV2ResearchProps) {
  return (
    <section
      data-how-it-works-section="research"
      className="bg-[#eee6db]"
    >
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div className="overflow-hidden rounded-[2.4rem] border border-black/5 bg-white/55 shadow-[0_30px_110px_rgba(31,31,28,0.1)]">
          <div className="relative aspect-[4/3]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 92vw, 54vw"
            />
          </div>
        </div>

        <div>
          <h2 className="max-w-[12ch] text-balance text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-7xl">
            {content.title}
          </h2>

          {content.description ? (
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          ) : null}

          {content.cta ? (
            <div className="mt-8">
              <Link
                href={content.cta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eee6db]"
              >
                {content.cta.label}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
