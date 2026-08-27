import type { homepage03Content } from "@/content/homepage-v3";

type Home03StimulationModesProps = {
  content: typeof homepage03Content.stimulationModes;
};

export function Home03StimulationModes({
  content,
}: Home03StimulationModesProps) {
  return (
    <section className="bg-[#3a312a] text-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:px-12 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#cdbda9]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-[0.97] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#d9cfc4] sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[1.7rem] border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {content.modes.map((mode) => (
            <article
              key={mode.name}
              className="bg-[#40362e] px-5 py-7 text-center sm:px-6 lg:py-9"
            >
              <h3 className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                {mode.name}
              </h3>
              <p className="mx-auto mt-3 max-w-[18rem] text-sm leading-6 text-[#d9cfc4]">
                {mode.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
