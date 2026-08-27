import type { Metadata } from "next";
import { supportPageContentNo } from "@/content/no/support";
import {
  SupportHero,
  SupportHowWeCanHelp,
  SupportStartHere,
  SupportTopics,
  SupportPhilosophy,
  SupportFaq,
  SupportFinalCta,
} from "@/components/support-page";
import {
  buildFAQStructuredData,
  buildPageWithBreadcrumbStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago Support | Tydelig hjelp for produkt, app og daglig bruk",
  description:
    "Finn tydelig hjelp for å forstå Neuvago-produktet, appen, daglige rutiner, juridisk informasjon og hvor du bør starte videre.",
  alternates: {
    canonical: "/no/support",
    languages: {
      "en-US": "/support",
      "nb-NO": "/no/support",
      "x-default": "/support",
    },
  },
  openGraph: {
    title: "Neuvago Support | Tydelig hjelp for produkt, app og daglig bruk",
    description:
      "Finn tydelig hjelp for å forstå Neuvago-produktet, appen, daglige rutiner, juridisk informasjon og hvor du bør starte videre.",
    url: "/no/support",
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago Support | Tydelig hjelp for produkt, app og daglig bruk",
    description:
      "Finn tydelig hjelp for å forstå Neuvago-produktet, appen, daglige rutiner, juridisk informasjon og hvor du bør starte videre.",
  },
};

export default function NorwaySupportPage() {
  const content = supportPageContentNo;

  const structuredData: Array<Record<string, unknown>> = buildPageWithBreadcrumbStructuredData({
    title: content.hero.title,
    description: content.hero.description,
    path: "/no/support",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "Support", path: "/no/support" },
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
          key={`no-support-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <SupportHero content={content.hero} /> : null}

      {content.howWeCanHelp.visible ? (
        <SupportHowWeCanHelp content={content.howWeCanHelp} />
      ) : null}

      {content.startHere.visible ? (
        <SupportStartHere content={content.startHere} />
      ) : null}

      {content.supportTopics.visible ? (
        <SupportTopics content={content.supportTopics} />
      ) : null}

      {content.philosophy.visible ? (
        <SupportPhilosophy content={content.philosophy} />
      ) : null}

      {content.faq.visible ? <SupportFaq content={content.faq} /> : null}

      {content.finalCta.visible ? (
        <SupportFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
