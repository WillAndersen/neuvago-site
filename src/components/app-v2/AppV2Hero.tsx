import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type { appV2Content } from "@/content/app-v2";

type AppV2HeroProps = {
  content: typeof appV2Content.hero;
};

export function AppV2Hero({ content }: AppV2HeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_20%_18%,rgba(255,252,247,0.98),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(226,193,148,0.22),transparent_34%)]" />

      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:px-12 lg:py-24">
        <div className="min-w-0 max-w-[44rem]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7d7267]">
            {content.eyebrow}
          </p>

          <h1 className="mt-5 max-w-[12ch] text-balance text-[clamp(3rem,12vw,5.7rem)] font-medium leading-[0.93] tracking-[-0.066em] text-[#1f1f1c] sm:text-[clamp(4rem,8vw,6.8rem)] lg:text-[clamp(5rem,6.2vw,7.35rem)] lg:leading-[0.88] lg:tracking-[-0.08em]">
            {content.title}
          </h1>

          <div className="relative mt-7 min-h-[25rem] overflow-hidden rounded-[2rem] border border-black/6 bg-[#eadfd2] shadow-[0_26px_90px_rgba(31,31,28,0.1)] lg:hidden">
            <div className="absolute left-[7%] top-[6%] w-[58%] rotate-[-4deg] overflow-hidden rounded-[1.5rem] border border-white/60 bg-[#f1e8de] shadow-[0_24px_70px_rgba(49,35,20,0.18)]">
              <Image
                src={content.primaryImage.src}
                alt={content.primaryImage.alt}
                width={1024}
                height={1536}
                className="block h-auto w-full max-w-full"
                sizes="54vw"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="absolute bottom-[4%] right-[5%] w-[49%] rotate-[4deg] overflow-hidden rounded-[1.5rem] border border-white/60 bg-[#f1e8de] shadow-[0_24px_70px_rgba(49,35,20,0.16)]">
              <Image
                src={content.secondaryImage.src}
                alt={content.secondaryImage.alt}
                width={1024}
                height={1536}
                className="block h-auto w-full max-w-full"
                sizes="46vw"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          <p className="mt-7 max-w-[40rem] text-lg font-medium leading-8 tracking-[-0.018em] text-[#302d29] sm:text-xl lg:text-2xl lg:leading-9">
            {content.description}
          </p>

          <p className="mt-4 max-w-[40rem] text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.brandConnection}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
        </div>

        <div className="relative hidden min-w-0 lg:block">
          <div className="relative min-h-[44rem] overflow-hidden rounded-[2.5rem] border border-black/6 bg-[#eadfd2] shadow-[0_34px_110px_rgba(31,31,28,0.12)]">
            <div className="absolute left-[7%] top-[5%] w-[56%] rotate-[-4deg] overflow-hidden rounded-[1.8rem] border border-white/60 bg-[#f1e8de] shadow-[0_30px_90px_rgba(49,35,20,0.18)]">
              <Image
                src={content.primaryImage.src}
                alt={content.primaryImage.alt}
                width={1024}
                height={1536}
                className="block h-auto w-full max-w-full"
                sizes="390px"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="absolute bottom-[3%] right-[5%] w-[50%] rotate-[4deg] overflow-hidden rounded-[1.8rem] border border-white/60 bg-[#f1e8de] shadow-[0_30px_90px_rgba(49,35,20,0.16)]">
              <Image
                src={content.secondaryImage.src}
                alt={content.secondaryImage.alt}
                width={1024}
                height={1536}
                className="block h-auto w-full max-w-full"
                sizes="350px"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
