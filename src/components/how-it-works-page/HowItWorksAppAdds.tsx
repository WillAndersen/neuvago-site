import Image from "next/image";
import type { howItWorksPageContent } from "@/content/how-it-works";

type HowItWorksAppAddsProps = {
  content: typeof howItWorksPageContent.appAdds;
};

export function HowItWorksAppAdds({ content }: HowItWorksAppAddsProps) {
  const sectionContent = content as typeof howItWorksPageContent.appAdds & {
    eyebrow?: string;
    featureLabel?: string;
  };

  return (
    <section className="bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#b8aa99]">
              {sectionContent.eyebrow ?? "App guidance"}
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#d4cabd] sm:text-lg">{content.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {content.features.map((feature, index) => {
              const image = content.supportingImages[index];
              return (
                <article key={feature.title} className="grid gap-5 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 sm:p-5 lg:grid-cols-[0.48fr_1fr] lg:items-center">
                  {image ? (
                    <div className="overflow-hidden rounded-[1.45rem] bg-white/8">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 28vw, 260px"
                        />
                      </div>
                    </div>
                  ) : null}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#b8aa99]">
                      {sectionContent.featureLabel ?? "Step"} 0{index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#d4cabd]">{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
