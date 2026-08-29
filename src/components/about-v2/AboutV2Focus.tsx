import type { AboutV2Content } from "@/content/about-v2";

type AboutV2FocusProps = {
  content: AboutV2Content["focus"];
};

export function AboutV2Focus({ content }: AboutV2FocusProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="border-b border-white/10 bg-[#24211e] text-white">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-28">
        <h2 className="max-w-[11ch] text-balance text-[clamp(2.9rem,6vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.06em]">
          {content.title}
        </h2>

        <div className="border-t border-white/15">
          {content.areas.map((area) => (
            <article
              key={area.id}
              data-priority={area.priority}
              className={[
                "border-b border-white/15",
                area.priority === "primary" ? "py-10 sm:py-14" : "py-7 sm:py-9",
              ].join(" ")}
            >
              <h3
                className={[
                  "font-medium leading-tight tracking-[-0.05em]",
                  area.priority === "primary"
                    ? "max-w-[14ch] text-4xl sm:text-5xl lg:text-6xl"
                    : "text-2xl text-white/88 sm:text-3xl",
                ].join(" ")}
              >
                {area.title}
              </h3>
              {area.description ? (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
                  {area.description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
