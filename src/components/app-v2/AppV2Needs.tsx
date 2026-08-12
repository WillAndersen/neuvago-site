import type { appV2Content } from "@/content/app-v2";

type AppV2NeedsProps = {
  content: typeof appV2Content.needs;
};

export function AppV2Needs({ content }: AppV2NeedsProps) {
  return (
    <section className="bg-[#e8ded0]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.7rem,9.5vw,4.1rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[#1f1f1c] sm:text-6xl lg:text-7xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {content.items.map((item, index) => (
            <article
              key={item.label}
              className={`rounded-[1.7rem] border p-5 shadow-[0_18px_62px_rgba(31,31,28,0.05)] sm:p-6 ${
                index === 0
                  ? "border-black/10 bg-[#1f1f1c] text-white"
                  : "border-black/6 bg-[#fbf8f2] text-[#1f1f1c]"
              }`}
            >
              <p
                className={`text-[0.65rem] font-medium uppercase tracking-[0.2em] ${
                  index === 0 ? "text-white/48" : "text-[#927f68]"
                }`}
              >
                {item.label}
              </p>
              <h3 className="mt-4 text-xl font-medium leading-[1.08] tracking-[-0.04em]">
                {item.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-7 ${
                  index === 0 ? "text-white/66" : "text-[#5f5a52]"
                }`}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-7 max-w-3xl text-xs leading-6 text-[#756d64]">
          {content.boundary}
        </p>
      </div>
    </section>
  );
}
