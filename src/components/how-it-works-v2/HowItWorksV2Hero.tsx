import Image from "next/image";
import Link from "next/link";
import type { HowItWorksV2Content } from "@/content/how-it-works-v2";

export type HowItWorksV2HeroProps = {
  content: HowItWorksV2Content["hero"];
};

export function HowItWorksV2Hero({
  content,
}: HowItWorksV2HeroProps) {
  return (
    <section
      data-how-it-works-section="hero"
      className="overflow-hidden border-b border-black/5 bg-[#f7f4ef]"
    >
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 xl:gap-24">
          <div className="min-w-0">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#81766a] sm:text-xs">
              {content.eyebrow}
            </p>

            <h1 className="mt-5 max-w-[18ch] text-balance text-[clamp(3.25rem,13vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.065em] text-[#1f1f1c] sm:text-[clamp(4.5rem,8.6vw,7rem)] sm:leading-[0.91] lg:text-[clamp(4.8rem,6.2vw,7.2rem)] lg:leading-[0.9] lg:tracking-[-0.072em]">
              {content.title}
            </h1>

            <p className="mt-7 max-w-[46rem] text-base leading-8 text-[#514c45] sm:text-lg sm:leading-8">
              {content.mainIntroduction}
            </p>

            <p className="mt-6 max-w-[43rem] border-l-2 border-[#a9947b] pl-5 text-base font-medium leading-7 tracking-[-0.01em] text-[#302d29] sm:text-lg sm:leading-8">
              {content.benefitStatement}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={content.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
              >
                {content.primaryCta.label}
              </Link>

              <Link
                href={content.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
              >
                {content.secondaryCta.label}
              </Link>
            </div>

            <ul className="mt-10 grid divide-y divide-black/10 border-y border-black/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {content.quickFacts.map((fact) => (
                <li
                  key={fact}
                  className="py-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#6f665d] lg:px-5 lg:py-5 lg:text-center"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-black/6 bg-[#e8ded0] shadow-[0_34px_100px_rgba(35,28,20,0.11)]">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={content.mobileImage.src}
                alt={content.mobileImage.alt}
                fill
                priority
                className="object-cover md:hidden"
                sizes="(max-width: 767px) 92vw, 0px"
              />
              <Image
                src={content.desktopImage.src}
                alt={content.desktopImage.alt}
                fill
                priority
                className="hidden object-cover md:block"
                sizes="(max-width: 1024px) 92vw, 44vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_55%,rgba(31,31,28,0.13)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
