import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeHeroProps = {
  content: typeof homepageContent.hero;
};

function HeroTitle({ title }: { title: string }) {
  if (title === "Designed for your nervous system.") {
    return (
      <>
        <span aria-hidden="true" className="md:hidden">
          {title}
        </span>
        <span aria-hidden="true" className="hidden md:block">
          <span className="block whitespace-nowrap">Designed for your</span>{" "}
          <span className="block">nervous system.</span>
        </span>
      </>
    );
  }

  return title;
}

export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]">
      <div className="absolute inset-0 -z-30">
        <Image
          src={content.desktopImage.src}
          alt=""
          fill
          className="hidden object-cover object-[84%_center] md:block"
          sizes="(min-width: 768px) 100vw, 0px"
          loading="eager"
          fetchPriority="high"
        />
        <Image
          src={content.mobileImage.src}
          alt=""
          fill
          className="object-cover object-[58%_center] md:hidden"
          sizes="(max-width: 767px) 100vw, 0px"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(247,244,239,0.99)_0%,rgba(247,244,239,0.96)_38%,rgba(247,244,239,0.78)_60%,rgba(247,244,239,0.38)_78%,rgba(247,244,239,0.88)_100%)] md:bg-[linear-gradient(90deg,rgba(247,244,239,0.99)_0%,rgba(247,244,239,0.96)_34%,rgba(247,244,239,0.68)_52%,rgba(247,244,239,0.08)_78%,rgba(247,244,239,0.14)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,251,244,0.96),transparent_34%),radial-gradient(circle_at_76%_82%,rgba(224,207,184,0.16),transparent_42%)]" />

      <div className="mx-auto flex min-h-[740px] max-w-[92rem] items-start px-5 pb-16 pt-24 sm:min-h-[790px] sm:px-8 sm:pt-28 lg:min-h-[860px] lg:items-center lg:px-12 lg:py-28">
        <div className="max-w-[48rem] md:max-w-[60rem]">
          <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs sm:tracking-[0.32em]">
            {content.eyebrow}
          </p>

          <h1
            aria-label={content.title}
            className="max-w-[15ch] text-balance text-[clamp(3.25rem,14.8vw,5.8rem)] font-medium leading-[0.91] tracking-[-0.072em] text-[#1f1f1c] drop-shadow-[0_1px_24px_rgba(247,244,239,0.72)] sm:text-[clamp(4.5rem,10.5vw,7.5rem)] sm:leading-[0.88] md:max-w-none md:text-[clamp(4.75rem,6vw,6.6rem)] md:leading-[0.9] md:tracking-[-0.075em]"
          >
            <HeroTitle title={content.title} />
          </h1>

          <p className="mt-7 max-w-[42rem] text-lg font-medium leading-7 tracking-[-0.018em] text-[#302d29] sm:mt-8 sm:text-xl sm:leading-8 lg:text-2xl">
            {content.productLine}
          </p>

          <p className="mt-4 max-w-[39rem] text-[1.01rem] leading-7 text-[#514c45] sm:text-lg sm:leading-8">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
            <CtaButton
              href={content.primaryCta.href}
              label={content.primaryCta.label}
              variant="primary"
            />
            <CtaButton
              href={content.secondaryCta.href}
              label={content.secondaryCta.label}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
