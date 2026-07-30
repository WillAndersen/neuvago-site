
import type { Metadata } from "next";
import { productPageContentNo } from "@/content/no/product";
import { productLaunchBuyBoxNo } from "@/content/no/product-buy-box";
import {
  ProductHero,
  ProductLaunchBuyBox,
  ProductIncludedInBox,
  ProductSalesAssurance,
  ProductWhatIsNeuvago,
  ProductWhyItFeelsDifferent,
  ProductDeviceAppTogether,
  ProductHowItFitsIntoLife,
  ProductHowToUse,
  ProductTrustBridge,
  ProductFaq,
  ProductFinalCta,
} from "@/components/product";
import {
  buildFAQStructuredData,
  buildPageWithBreadcrumbStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago Produkt | Ikke-invasiv VNS-enhet og app",
  description:
    "Møt Neuvago: en premium ikke-invasiv vagusnervestimulator og app for veiledede rutiner, tydelige sikkerhetsgrenser og roligere daglig reguleringsstøtte.",
  alternates: {
    canonical: "/no/produkt",
    languages: {
      "en-US": "/product",
      "no-NO": "/no/produkt",
    },
  },
  openGraph: {
    title: "Neuvago Produkt | Ikke-invasiv VNS-enhet og app",
    description:
      "Møt Neuvago: en premium ikke-invasiv vagusnervestimulator og app for veiledede rutiner, tydelige sikkerhetsgrenser og roligere daglig reguleringsstøtte.",
    url: "/no/produkt",
    siteName: "Neuvago",
    locale: "no_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago Produkt | Ikke-invasiv VNS-enhet og app",
    description:
      "Møt Neuvago: en premium ikke-invasiv vagusnervestimulator og app for veiledede rutiner, tydelige sikkerhetsgrenser og roligere daglig reguleringsstøtte.",
  },
};

export default function NorwayProductPage() {
  const content = productPageContentNo;

  const structuredData: Array<Record<string, unknown>> = buildPageWithBreadcrumbStructuredData({
    title: content.hero.title,
    description: content.hero.description,
    path: "/no/produkt",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "Produkt", path: "/no/produkt" },
    ],
  });

  const faqStructuredData = content.faq.visible
    ? buildFAQStructuredData(content.faq.items)
    : null;

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`no-product-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <ProductHero content={content.hero} /> : null}

      <ProductLaunchBuyBox copy={productLaunchBuyBoxNo} />

      <ProductIncludedInBox locale="no" />

      <ProductSalesAssurance locale="no" />

      {content.whatIsNeuvago.visible ? (
        <ProductWhatIsNeuvago content={content.whatIsNeuvago} />
      ) : null}

      {content.whyItFeelsDifferent.visible ? (
        <ProductWhyItFeelsDifferent content={content.whyItFeelsDifferent} />
      ) : null}

      {content.howItFitsIntoLife.visible ? (
        <ProductHowItFitsIntoLife content={content.howItFitsIntoLife} />
      ) : null}

      {content.deviceAppTogether.visible ? (
        <ProductDeviceAppTogether content={content.deviceAppTogether} />
      ) : null}

      {content.howToUse.visible ? (
        <ProductHowToUse content={content.howToUse} />
      ) : null}

      {content.trustBridge.visible ? (
        <ProductTrustBridge content={content.trustBridge} />
      ) : null}

      {content.faq.visible ? <ProductFaq content={content.faq} /> : null}

      {content.finalCta.visible ? (
        <ProductFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
