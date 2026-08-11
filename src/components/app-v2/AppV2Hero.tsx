import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type { appV2Content } from "@/content/app-v2";

type AppV2HeroProps = {
  content: typeof appV2Content.hero;
};

export function AppV2Hero({ content }: AppV2HeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_18%_20%,rgba(255,252,247,0.98),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(238,195,145,0.25),transparent_36%)]" />

      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:px-12 lg:py-20 xl:py-24">
        <div className="max-w-[43rem]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7d7267]">
            {content.eyebrow}
          </p>

          <h1 className="mt-5 max-w-[12ch] text-balance text-[clamp(3.1rem,12vw,5.5rem)] font-medium leading-[0.93] tracking-[-0.065em] text-[#1f1f1c] sm:text-[clamp(4rem,8vw,6.5rem)] lg:text-[clamp(5rem,6.2vw,7.25rem)] lg:leading-[0.88] lg:tracking-[-0.078em]">
            {content.title}
          </h1>

          <div className="relative mx-auto mt-7 h-[20rem] w-full max-w-[23rem] sm:h-[24rem] lg:hidden">
            <div className="absolute left-[1%] top-0 w-[61%] rotate-[-4deg] overflow-hidden rounded-[1.55rem] border border-white/60 bg-[#f1e8de] shadow-[0_28px_85px_rgba(49,35,20,0.18)]">
              <Image
                src={content.images[0].src}
                alt={content.images[0].alt}
                width={1024}
                height={1536}
                className="h-auto w-full"
                sizes="58vw"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="absolute bottom-0 right-[1%] w-[56%] rotate-[4deg] overflow-hidden rounded-[1.55rem] border border-white/60 bg-[#f1e8de] shadow-[0_28px_85px_rgba(49,35,20,0.16)]">
              <Image
                src={content.images[1].src}
                alt={content.images[1].alt}
                width={1024}
                height={1536}
                className="h-auto w-full"
                sizes="54vw"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          <p className="mt-7 max-w-[39rem] text-base leading-8 text-[#514c45] sm:text-lg lg:text-xl lg:leading-9">
            {content.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
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

          <div className="mt-7 flex flex-wrap gap-2.5">
            {content.proofLine.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/8 bg-white/70 px-3.5 py-2 text-xs font-medium text-[#625a51] shadow-[0_12px_35px_rgba(31,31,28,0.04)]"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-xl text-xs leading-5 text-[#81786f]">
            {content.previewNote}
          </p>
        </div>

        <div className="relative hidden min-h-[41rem] lg:block">
          <div className="absolute left-[1%] top-[7%] w-[57%] rotate-[-4deg] overflow-hidden rounded-[2rem] border border-white/60 bg-[#f1e8de] shadow-[0_35px_110px_rgba(49,35,20,0.2)] sm:w-[52%]">
            <Image
              src={content.images[0].src}
              alt={content.images[0].alt}
              width={1024}
              height={1536}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 52vw, 390px"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="absolute bottom-[1%] right-[1%] w-[54%] rotate-[4deg] overflow-hidden rounded-[2rem] border border-white/60 bg-[#f1e8de] shadow-[0_35px_110px_rgba(49,35,20,0.18)] sm:w-[49%]">
            <Image
              src={content.images[1].src}
              alt={content.images[1].alt}
              width={1024}
              height={1536}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 50vw, 370px"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
