import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeHeroProps = {
  content: typeof homepageContent.hero;
};

function HeroTitle({ title }: { title: string }) {
  if (title === "A calmer way to return.") {
    return (
      <>
        <span className="block">A calmer way</span>
        <span className="block">to return.</span>
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
          className="hidden object-cover object-[72%_center] md:block"
          sizes="(min-width: 768px) 100vw, 0px"
          priority
        />
        <Image
          src={content.mobileImage.src}
          alt=""
          fill
          className="object-cover object-[64%_center] md:hidden"
          sizes="(max-width: 767px) 100vw, 0px"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(247,244,239,0.99)_0%,rgba(247,244,239,0.94)_34%,rgba(247,244,239,0.72)_56%,rgba(247,244,239,0.42)_72%,rgba(247,244,239,0.9)_100%)] md:bg-[linear-gradient(90deg,rgba(247,244,239,0.99)_0%,rgba(247,244,239,0.94)_28%,rgba(247,244,239,0.58)_50%,rgba(247,244,239,0.08)_78%,rgba(247,244,239,0.18)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,251,244,0.95),transparent_34%),radial-gradient(circle_at_75%_82%,rgba(224,207,184,0.2),transparent_42%)]" />

      <div className="mx-auto flex min-h-[735px] max-w-[92rem] flex-col justify-between px-5 pb-7 pt-20 sm:min-h-[780px] sm:px-8 sm:pt-24 lg:min-h-[860px] lg:px-12 lg:pb-12 lg:pt-24 xl:min-h-[900px]">
        <div className="max-w-[44rem]">
          <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs sm:tracking-[0.32em]">
            {content.eyebrow}
          </p>

          <h1 className="max-w-[11.5ch] text-[clamp(3.55rem,16.4vw,5.9rem)] font-medium leading-[0.9] tracking-[-0.075em] text-[#1f1f1c] drop-shadow-[0_1px_24px_rgba(247,244,239,0.7)] sm:text-[clamp(4.7rem,12vw,8rem)] sm:leading-[0.86] md:max-w-[12ch] lg:text-[clamp(6.2rem,10.5vw,10.75rem)] lg:leading-[0.84] lg:tracking-[-0.09em]">
            <HeroTitle title={content.title} />
          </h1>

          <p className="mt-7 max-w-[36rem] text-[1.02rem] leading-7 text-[#514c45] sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
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

        <div className="hidden w-full max-w-[40rem] rounded-[1.75rem] border border-white/45 bg-[#fbf8f2]/58 p-5 shadow-[0_28px_80px_rgba(42,34,24,0.1)] backdrop-blur-md md:block lg:max-w-[42rem]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#8a7f72]">
            Device + app + routine
          </p>
          <p className="mt-3 text-sm leading-6 text-[#5f574f]">
            A quiet product experience for short moments of regulation: a
            physical anchor, guided sessions, and a rhythm you can return to.
          </p>
        </div>
      </div>
    </section>
  );
}
