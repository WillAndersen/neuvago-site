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
      className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef]"
    >
      <div className="absolute inset-0 -z-30">
        <Image
          src={content.desktopImage.src}
          alt={content.desktopImage.alt}
          fill
          priority
          className="hidden object-cover object-[82%_center] md:block"
          sizes="(min-width: 768px) 100vw, 0px"
        />
        <Image
          src={content.mobileImage.src}
          alt={content.mobileImage.alt}
          fill
          priority
          className="object-cover object-[58%_center] md:hidden"
          sizes="(max-width: 767px) 100vw, 0px"
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(247,244,239,0.99)_0%,rgba(247,244,239,0.96)_36%,rgba(247,244,239,0.76)_58%,rgba(247,244,239,0.28)_78%,rgba(247,244,239,0.88)_100%)] md:bg-[linear-gradient(90deg,rgba(247,244,239,0.99)_0%,rgba(247,244,239,0.96)_34%,rgba(247,244,239,0.66)_52%,rgba(247,244,239,0.07)_78%,rgba(247,244,239,0.12)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,251,244,0.94),transparent_34%),radial-gradient(circle_at_78%_82%,rgba(224,207,184,0.15),transparent_42%)]" />

      <div className="mx-auto flex min-h-[700px] max-w-[92rem] items-start px-5 pb-16 pt-24 sm:min-h-[760px] sm:px-8 sm:pt-28 lg:min-h-[820px] lg:items-center lg:px-12 lg:py-28">
        <div className="max-w-[52rem]">
          <h1 className="max-w-[13ch] text-balance text-[clamp(3.35rem,14vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.072em] text-[#1f1f1c] drop-shadow-[0_1px_24px_rgba(247,244,239,0.72)] sm:text-[clamp(4.6rem,9vw,7.4rem)] sm:leading-[0.89] lg:text-[clamp(5.7rem,7.2vw,8.3rem)] lg:leading-[0.87] lg:tracking-[-0.08em]">
            {content.title}
          </h1>

          {content.description ? (
            <p className="mt-7 max-w-[40rem] text-lg leading-8 text-[#514c45] sm:text-xl">
              {content.description}
            </p>
          ) : null}

          {content.primaryCta || content.secondaryCta ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {content.primaryCta ? (
                <Link
                  href={content.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
                >
                  {content.primaryCta.label}
                </Link>
              ) : null}

              {content.secondaryCta ? (
                <Link
                  href={content.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
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
