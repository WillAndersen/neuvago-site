import Image from "next/image";
import type { howItWorksPageContent } from "@/content/how-it-works";

type HowItWorksStepsProps = {
  content: typeof howItWorksPageContent.steps;
};

export function HowItWorksSteps({ content }: HowItWorksStepsProps) {
  const sectionContent = content as typeof howItWorksPageContent.steps & {
    eyebrow?: string;
    stepLabel?: string;
  };

  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:px-12 lg:py-28">
        <div className="lg:sticky lg:top-24">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
            {sectionContent.eyebrow ?? "The ritual"}
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="space-y-5">
          {content.items.map((step, index) => (
            <article key={step.title} className="grid gap-6 overflow-hidden rounded-[2.15rem] border border-black/5 bg-white/64 p-4 shadow-[0_20px_70px_rgba(31,31,28,0.06)] sm:p-5 md:grid-cols-[0.72fr_1fr] md:items-center">
              {step.image ? (
                <div className="overflow-hidden rounded-[1.6rem] bg-[#f2eee8]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 84vw, 320px"
                    />
                  </div>
                </div>
              ) : null}
              <div className="px-1 py-2 sm:px-2">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a8f82]">
                  {sectionContent.stepLabel ?? "Step"} 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
