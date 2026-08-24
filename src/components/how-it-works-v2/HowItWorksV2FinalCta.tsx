import Image from "next/image";
import Link from "next/link";
import type { HowItWorksV2Content } from "@/content/how-it-works-v2";

export type HowItWorksV2FinalCtaProps = {
  content: HowItWorksV2Content["finalCta"];
};

export function HowItWorksV2FinalCta({
  content,
}: HowItWorksV2FinalCtaProps) {
  return (
    <section
      data-how-it-works-section="final-cta"
      className="relative isolate overflow-hidden bg-[#1f1f1c] text-[#f7f4ef]"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          className="object-cover object-[70%_center] opacity-55"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(31,31,28,0.98)_0%,rgba(31,31,28,0.91)_42%,rgba(31,31,28,0.44)_72%,rgba(31,31,28,0.68)_100%)]" />

      <div className="mx-auto flex min-h-[560px] max-w-[92rem] items-center px-5 py-20 sm:px-8 lg:min-h-[650px] lg:px-12 lg:py-28">
        <div className="max-w-[54rem]">
          <h2 className="max-w-[12ch] text-balance text-5xl font-medium leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
            {content.title}
          </h2>

          {content.description ? (
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#ddd2c6] sm:text-lg">
              {content.description}
            </p>
          ) : null}

          {content.primaryCta || content.secondaryCta ? (
            <div className="mt-9 flex flex-wrap gap-3">
              {content.primaryCta ? (
                <Link
                  href={content.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#f7f4ef] px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1c]"
                >
                  {content.primaryCta.label}
                </Link>
              ) : null}

              {content.secondaryCta ? (
                <Link
                  href={content.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1c]"
                >
                  {content.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
