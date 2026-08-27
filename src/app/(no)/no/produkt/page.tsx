import type { Metadata } from "next";
import {
  ProductV2Benefits,
  ProductV2BuyBox,
  ProductV2Details,
  ProductV2Faq,
  ProductV2FinalCta,
  ProductV2Hero,
  ProductV2HowItWorks,
  ProductV2Modes,
  ProductV2Research,
} from "@/components/product-v2";
import { productV2ContentNo } from "@/content/no/product-v2";
import {
  buildFAQStructuredData,
  buildPageWithBreadcrumbStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title:
    "Neuvago produkt | Ikke-invasiv vagusnervestimulator",
  description:
    "Utforsk Neuvago, en ikke-invasiv vagusnervestimulator med justerbar intensitet, fire stimuleringsmoduser, enkle kontroller og en ørebasert tilnærming utviklet for daglige velværerutiner.",
  alternates: {
    canonical: "/no/produkt",
    languages: {
      "en-US": "/product",
      "nb-NO": "/no/produkt",
      "x-default": "/product",
    },
  },
  openGraph: {
    title:
      "Neuvago produkt | Ikke-invasiv vagusnervestimulator",
    description:
      "Se Neuvago-enheten, de fire stimuleringsmodusene, forskningskonteksten, pakkeinnholdet og den aktuelle kjøpsinformasjonen.",
    url: "/no/produkt",
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Neuvago produkt | Ikke-invasiv vagusnervestimulator",
    description:
      "En ikke-invasiv vagusnervestimulator med justerbar intensitet, fire navngitte moduser og enkle fysiske kontroller.",
  },
};

export default function NorwayProductPage() {
  const content = productV2ContentNo;

  const structuredData: Array<Record<string, unknown>> =
    buildPageWithBreadcrumbStructuredData({
      title: content.hero.title,
      description:
        `${content.hero.description} ${content.hero.technologyDescription}`,
      path: "/no/produkt",
      breadcrumbs: [
        { name: "Forside", path: "/no" },
        { name: "Produkt", path: "/no/produkt" },
      ],
    });

  const faqStructuredData =
    buildFAQStructuredData(content.faq.items);

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`no-product-v2-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item),
          }}
        />
      ))}

      <ProductV2Hero content={content.hero} />
      <ProductV2Benefits content={content.benefits} />
      <ProductV2HowItWorks content={content.howItWorks} />
      <ProductV2Modes content={content.modes} />
      <ProductV2BuyBox content={content.buyBox} />
      <ProductV2Research content={content.research} />
      <ProductV2Details
        content={content.productDetails}
      />
      <ProductV2Faq content={content.faq} />
      <ProductV2FinalCta content={content.finalCta} />
    </main>
  );
}
