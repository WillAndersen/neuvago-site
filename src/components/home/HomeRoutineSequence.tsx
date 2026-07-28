import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeRoutineSequenceProps = {
  content: typeof homepageContent.ritualSequence;
};

export function HomeRoutineSequence({ content }: HomeRoutineSequenceProps) {
  return (
    <section className="bg-[#ebe3d8]">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
              {content.eyebrow}
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>

            <div className="mt-10 grid gap-4">
              {content.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[3rem_1fr] gap-4 rounded-[1.7rem] border border-black/5 bg-white/45 p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f1f1c] text-sm font-medium text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.025em] text-[#1f1f1c]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a52] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <CtaButton href={content.cta.href} label={content.cta.label} variant="secondary" />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/55 shadow-[0_34px_100px_rgba(35,28,20,0.12)]">
            <div className="relative hidden aspect-[16/10] lg:block">
              <Image
                src={content.desktopImage.src}
                alt={content.desktopImage.alt}
                fill
                className="object-cover"
                sizes="720px"
              />
            </div>
            <div className="relative aspect-[4/5] lg:hidden">
              <Image
                src={content.mobileImage.src}
                alt={content.mobileImage.alt}
                fill
                className="object-cover"
                sizes="92vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
