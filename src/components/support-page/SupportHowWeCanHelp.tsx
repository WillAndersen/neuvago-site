import type { supportPageContent } from "@/content/support";

type SupportHowWeCanHelpProps = {
  content: typeof supportPageContent.howWeCanHelp;
};

export function SupportHowWeCanHelp({ content }: SupportHowWeCanHelpProps) {
  const sectionContent = content as typeof supportPageContent.howWeCanHelp & {
    eyebrow?: string;
  };

  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">{sectionContent.eyebrow ?? "Support paths"}</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">{content.description}</p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-black/5 bg-black/5 md:grid-cols-2 xl:grid-cols-4">
          {content.cards.map((card, index) => (
            <article key={card.title} className="bg-white/68 p-6 sm:p-7">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a8f82]">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.03em] text-[#1f1f1c]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
