import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LaunchSignupForm } from "@/components/commerce/LaunchSignupForm";
import { ShopifyCheckoutButton } from "@/components/commerce/ShopifyCheckoutButton";
import { commerceContent } from "@/content/commerce";
import { productV2Content } from "@/content/product-v2";

export const metadata: Metadata = {
  title: commerceContent.isLive
    ? "Shop Neuvago | Non-Invasive Vagus Nerve Stimulation"
    : "Neuvago Launch Access | Join the Launch List",
  description: commerceContent.isLive
    ? "Purchase the Neuvago non-invasive vagus nerve stimulation device."
    : "Join the Neuvago launch list and be among the first to know when the device becomes available for purchase.",
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: commerceContent.isLive
      ? "Shop Neuvago"
      : "Neuvago is almost ready.",
    description: commerceContent.isLive
      ? "Purchase the Neuvago non-invasive vagus nerve stimulation device."
      : "Join the launch list to receive Neuvago availability updates.",
    url: "/shop",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
};

export default function ShopPage() {
  const includedItems =
    productV2Content.buyBox.includedItems;

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#eee5da]">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#81766a]">
              {commerceContent.isLive
                ? "Shop Neuvago"
                : commerceContent.launch.eyebrow}
            </p>

            <h1 className="mt-5 max-w-[13ch] text-balance text-[clamp(3.4rem,12vw,6.8rem)] font-medium leading-[0.91] tracking-[-0.07em]">
              {commerceContent.isLive
                ? "Shop Neuvago."
                : commerceContent.launch.title}
            </h1>

            <p className="mt-7 max-w-3xl text-xl font-medium leading-8 tracking-[-0.02em] text-[#302d29] sm:text-2xl">
              Non-invasive vagus nerve stimulation
              designed to help you sleep better, feel
              calmer, manage everyday stress and support
              recovery.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              Neuvago gently stimulates the vagus nerve
              through the ear, supporting the body&apos;s
              natural shift toward calm, rest and recovery.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Non-invasive",
                "Drug-free",
                "Four stimulation modes",
                "Adjustable intensity",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/8 bg-white/55 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#5f5a52]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium transition hover:bg-white"
              >
                Explore the device
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition hover:bg-white/55"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-black/6 bg-[#e8ded0] shadow-[0_34px_100px_rgba(35,28,20,0.12)]">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/neuvago/product-hero-desktop.webp"
                alt="Neuvago non-invasive vagus nerve stimulation device."
                fill
                priority
                className="object-cover object-[72%_center]"
                sizes="(max-width: 1024px) 92vw, 46vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
              What&apos;s included
            </p>
            <h2 className="mt-5 max-w-[14ch] text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              The complete Neuvago package.
            </h2>

            <div className="mt-8 divide-y divide-black/8 border-y border-black/8">
              {includedItems.map((item) => (
                <p
                  key={item}
                  className="py-4 text-base text-[#4f4a44]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-[#eee5da] p-6 shadow-[0_20px_70px_rgba(35,28,20,0.08)] sm:p-8 lg:p-10">
            {commerceContent.isLive ? (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#81766a]">
                  Available now
                </p>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">
                  Continue to secure checkout.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  Review the included package and continue
                  to Shopify checkout.
                </p>

                <div className="mt-7">
                  <ShopifyCheckoutButton
                    locale="en"
                    className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Shop Neuvago
                  </ShopifyCheckoutButton>
                </div>
              </>
            ) : (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#81766a]">
                  Launch access
                </p>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">
                  Be among the first to know.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {commerceContent.launch.description}
                </p>

                <div className="mt-7">
                  <LaunchSignupForm />
                </div>

                <p className="mt-5 text-xs leading-6 text-[#746e66]">
                  Joining the launch list is free and is
                  not a preorder. No payment is taken.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#1f1f1c] text-[#f7f4ef]">
        <div className="mx-auto max-w-[92rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
          <p className="max-w-4xl text-sm leading-7 text-white/70 sm:text-base">
            Neuvago is presented as a general wellness
            product. It is not intended to diagnose,
            treat, cure or prevent disease. Review the
            supplied safety information and the{" "}
            <Link
              href="/legal/intended-use"
              className="font-medium text-white underline underline-offset-4"
            >
              Intended Use
            </Link>{" "}
            before use.
          </p>
        </div>
      </section>
    </main>
  );
}
