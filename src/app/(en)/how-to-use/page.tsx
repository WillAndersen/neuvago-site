import Link from "next/link";

import { buildWebPageStructuredData } from "@/lib/seo/structured-data";

const steps = [
  {
    number: "01",
    title: "Read the supplied guidance",
    description:
      "Begin with the official instructions supplied with your Neuvago device. They contain the product-specific information for preparation, placement, safety, cleaning and storage.",
  },
  {
    number: "02",
    title: "Prepare the device",
    description:
      "Make sure the device is ready for use and inspect the earpiece and cable before beginning. Do not use damaged components.",
  },
  {
    number: "03",
    title: "Follow the placement instructions",
    description:
      "Place the earpiece only as shown in the official Neuvago instructions. Correct placement helps support a consistent and comfortable experience.",
  },
  {
    number: "04",
    title: "Begin at a comfortable intensity",
    description:
      "Start gently and increase the intensity gradually. Stimulation should remain comfortable and should never feel sharply painful.",
  },
  {
    number: "05",
    title: "Choose a session or routine",
    description:
      "Use the Neuvago app as a separate guide if desired, or follow the routine recommended in the product instructions. Give yourself time to settle before starting.",
  },
  {
    number: "06",
    title: "Finish, clean and store",
    description:
      "End the session if discomfort develops. After use, clean and store the device only as described in the supplied instructions.",
  },
] as const;

const pageTitle = "How to use Neuvago";

const pageDescription =
  "A practical introduction to preparing Neuvago, following the placement guidance, choosing a comfortable intensity and completing a daily session.";

export default function HowToUsePage() {
  const structuredData = buildWebPageStructuredData({
    title: pageTitle,
    description: pageDescription,
    path: "/how-to-use",
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#777168]">
              Practical guidance
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              How to use Neuvago
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Neuvago is designed around short, repeatable wellness routines.
              This guide explains the overall sequence from preparation and
              placement to intensity, sessions and care.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-black/7 bg-white/65 p-6">
              <p className="text-sm leading-7 text-[#5f5a52]">
                The official instructions supplied with the product always take
                priority over this general website guide. Neuvago is intended
                for general wellness use and is not a substitute for medical
                advice, diagnosis or treatment.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Get started
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium transition hover:bg-white"
              >
                See how the system works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#777168]">
              Before the first session
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Start with preparation, not intensity
            </h2>

            <p className="mt-5 text-base leading-8 text-[#5f5a52]">
              A calm first session begins with understanding the device and the
              supplied instructions. Check the components, choose a quiet place
              and allow enough time to become familiar with the controls.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] border border-black/5 bg-white/70 p-7">
              <h3 className="text-xl font-semibold">Use the official manual</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                Product-specific placement, safety and care instructions should
                always come from the current Neuvago user documentation.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/5 bg-white/70 p-7">
              <h3 className="text-xl font-semibold">Choose a calm setting</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                Sit comfortably and avoid beginning while driving, operating
                equipment or doing anything that requires full attention.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/5 bg-white/70 p-7">
              <h3 className="text-xl font-semibold">Do not rush</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                The aim is not to tolerate the strongest setting. Begin gently
                and use only an intensity that remains comfortable.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#777168]">
              Step by step
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              A simple sequence for everyday use
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[2rem] border border-black/5 bg-white/65 p-7 sm:p-8"
              >
                <p className="text-sm font-medium tracking-[0.16em] text-[#8a847b]">
                  {step.number}
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-[#5f5a52]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-24">
          <article className="rounded-[2rem] border border-black/5 bg-white/70 p-8">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#777168]">
              Comfort
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              What should a session feel like?
            </h2>

            <p className="mt-5 text-base leading-8 text-[#5f5a52]">
              Sensation can vary between people and between intensity levels.
              The experience should remain comfortable. Do not treat pain,
              sharp discomfort or a strong unpleasant reaction as something
              that must be endured.
            </p>

            <p className="mt-4 text-base leading-8 text-[#5f5a52]">
              Reduce the intensity or stop the session if the sensation becomes
              uncomfortable. Consult the official safety information before
              resuming use.
            </p>
          </article>

          <article className="rounded-[2rem] border border-black/5 bg-white/70 p-8">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#777168]">
              Safety
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Know when not to continue
            </h2>

            <p className="mt-5 text-base leading-8 text-[#5f5a52]">
              Follow all contraindications, warnings and stop conditions in the
              current product documentation. Do not use damaged equipment or
              use Neuvago in a way that differs from its intended use.
            </p>

            <Link
              href="/legal/trust-safety"
              className="mt-6 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4 transition hover:decoration-black"
            >
              Read Neuvago trust and safety information
            </Link>
          </article>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-black/5 bg-white/65 p-8 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#777168]">
                Continue
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Find the next part of your Neuvago journey
              </h2>

              <p className="mt-5 text-base leading-8 text-[#5f5a52]">
                Explore the product, understand how the system works, or visit
                support for practical help and current documentation.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore the product
              </Link>

              <Link
                href="/support"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#f7f4ef]"
              >
                Visit support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
