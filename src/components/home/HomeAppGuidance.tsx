import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeAppGuidanceProps = {
  content: typeof homepageContent.appGuidance;
};

export function HomeAppGuidance({ content }: HomeAppGuidanceProps) {
  return (
    <section id="neuvago-app" className="overflow-x-clip bg-[#f7f4ef]">
      <div className="mx-auto grid min-w-0 max-w-[90rem] grid-cols-[minmax(0,1fr)] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:px-12 lg:py-28">
        <div className="relative min-h-[34rem] min-w-0 w-full max-w-full overflow-hidden rounded-[2.5rem] border border-black/5 bg-[#eadfd2] shadow-[0_34px_100px_rgba(35,28,20,0.1)] sm:min-h-[39rem]">
          <div className="absolute left-[5%] top-[5%] w-[56%] max-w-full rotate-[-4deg] overflow-hidden rounded-[1.8rem] border border-white/60 bg-[#f1e8de] shadow-[0_30px_90px_rgba(49,35,20,0.18)]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={1024}
              height={1536}
              className="block h-auto w-full max-w-full"
              sizes="(max-width: 1024px) 54vw, 390px"
            />
          </div>

          <div className="absolute bottom-[3%] right-[4%] w-[51%] max-w-full rotate-[4deg] overflow-hidden rounded-[1.8rem] border border-white/60 bg-[#f1e8de] shadow-[0_30px_90px_rgba(49,35,20,0.16)]">
            <Image
              src={content.mobileImage.src}
              alt={content.mobileImage.alt}
              width={1024}
              height={1536}
              className="block h-auto w-full max-w-full"
              sizes="(max-width: 1024px) 49vw, 360px"
            />
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 divide-y divide-black/8 border-y border-black/8">
            {content.items.map((item) => (
              <article key={item.title} className="py-5">
                <h3 className="text-xl font-medium tracking-[-0.025em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-9">
            <CtaButton
              href={content.cta.href}
              label={content.cta.label}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
