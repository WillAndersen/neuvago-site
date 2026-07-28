import Link from "next/link";
import Image from "next/image";

type RoutineCard = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

type ConditionRoutinePathwayProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  cards: RoutineCard[];
};

export function ConditionRoutinePathway({
  eyebrow = "Routine pathway",
  title,
  description,
  image,
  cards,
}: ConditionRoutinePathwayProps) {
  return (
    <section className="border-b border-black/5 bg-[#f2eee8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-black/5 bg-white/50 shadow-[0_28px_90px_rgba(31,31,28,0.11)]">
          <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 560px"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7a756c]">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] text-[#1f1f1c] md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
            {description}
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.5rem] border border-black/6 bg-white/65 p-6 shadow-[0_14px_44px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-lg font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {card.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
