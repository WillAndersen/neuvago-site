import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LaunchSignupForm } from "@/components/commerce/LaunchSignupForm";
import { commerceContent } from "@/content/commerce";
import { productV2ContentNo } from "@/content/no/product-v2";

export const metadata: Metadata = {
  title: "Neuvago lansering | Få beskjed når salget åpner",
  description: "Meld deg på Neuvagos lanseringsliste og få beskjed når produktet blir tilgjengelig for kjøp. Det er gratis og ikke en forhåndsbestilling.",
  alternates: { canonical: "/no/lansering" },
  // Candidate gate: do not add to sitemap/hreflang before the full integration review.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Få beskjed når Neuvago blir tilgjengelig",
    description: "Gratis lanseringsoppdateringer på e-post. Ingen forhåndsbestilling eller betaling.",
    url: "/no/lansering",
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
};

export default function NorwayLaunchPage() {
  // Do not leave an outdated signup destination when the existing commerce mode goes live.
  if (commerceContent.isLive) redirect(commerceContent.shopHref);
  const image = productV2ContentNo.buyBox.gallery[0];

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#eee5da]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#81766a]">Neuvago lansering</p>
            <h1 className="mt-5 max-w-[16ch] text-balance text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Få beskjed når Neuvago blir tilgjengelig.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              Meld deg på lanseringslisten for oppdateringer om når Neuvago blir tilgjengelig for kjøp.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#5f5a52]">
              Påmeldingen er gratis og er ikke en forhåndsbestilling. Du betaler ingenting og forplikter deg ikke til å kjøpe.
            </p>
            <Link href="/no/produkt" className="mt-6 inline-block text-sm font-medium underline underline-offset-4">Se produktet</Link>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[2rem] border border-black/5 bg-[#fbf8f2]">
              <Image src={image.src} alt={image.alt} fill className="object-contain" sizes="(max-width: 1023px) 90vw, 42vw" />
            </div>
          </div>
          <div className="rounded-[2rem] border border-black/8 bg-[#fbf8f2] p-6 sm:p-8 lg:p-10" data-conversion-placement="launch-signup-form">
            <h2 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">Meld deg på lanseringslisten</h2>
            <p className="mb-7 mt-4 text-sm leading-7 text-[#5f5a52]">Legg igjen e-postadressen din, så holder vi deg oppdatert.</p>
            <LaunchSignupForm locale="no" />
            <p className="mt-6 text-xs leading-6 text-[#746e66]">Har du spørsmål? <Link href="/no/support" className="underline underline-offset-4">Kontakt oss</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
