import type { supportPageContent } from "@/content/support";
import { CtaButton } from "@/components/home";

type SupportFinalCtaProps = {
  content: typeof supportPageContent.finalCta;
};

export function SupportFinalCta({ content }: SupportFinalCtaProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#ece4d9] shadow-[0_28px_90px_rgba(31,31,28,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.68),transparent_34%),linear-gradient(135deg,rgba(247,244,239,0.88),rgba(236,228,217,0.72))]" />
          <div className="absolute right-8 top-8 hidden h-24 w-24 rounded-full border border-black/5 bg-white/35 lg:block" />
          <div className="absolute bottom-8 right-24 hidden h-12 w-12 rounded-full border border-black/5 bg-white/25 lg:block" />

          <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-18 lg:max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7a756c]">
              Final step
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1c] sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f5a52] sm:text-lg">
              {content.description}
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
          </div>
        </div>
      </div>
    </section>
  );
}
