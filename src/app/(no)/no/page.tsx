
import type { Metadata } from "next";
import { homepageContentNo } from "@/content/no/homepage";
import {
  HomeHero,
  HomeProofStrip,
  HomeSystemReveal,
  HomeRoutineSequence,
  HomeAppGuidance,
  HomeResearchBoundary,
  HomeEverydayPathways,
  HomeFinalCta,
} from "@/components/home";
import {
  buildOrganizationStructuredData,
  buildWebPageStructuredData,
  buildWebSiteStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago Norge | Ikke-invasiv vagusnervestimulator og app",
  description:
    "Neuvago kombinerer en ikke-invasiv vagusnervestimulator med veiledede appøkter for korte, gjentakbare rutiner som støtter regulering av nervesystemet.",
  alternates: {
    canonical: "/no",
    languages: {
      "en-US": "/",
      "nb-NO": "/no",
    },
  },
  openGraph: {
    title: "Neuvago Norge | Ikke-invasiv vagusnervestimulator og app",
    description:
      "Et rolig, app-veiledet reguleringssystem bygget rundt en ikke-invasiv vagusnervestimulator og korte daglige rutiner.",
    url: "/no",
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago Norge | Ikke-invasiv vagusnervestimulator og app",
    description:
      "Et rolig, app-veiledet reguleringssystem bygget rundt en ikke-invasiv vagusnervestimulator og korte daglige rutiner.",
  },
};

export default function NorwayHomePage() {
  const content = homepageContentNo;

  const structuredData = [
    buildOrganizationStructuredData(),
    buildWebSiteStructuredData(),
    buildWebPageStructuredData({
      title: content.hero.title,
      description: content.hero.description,
      path: "/no",
    }),
  ];

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`no-home-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <HomeHero content={content.hero} /> : null}

      {content.proofStrip.visible ? (
        <HomeProofStrip content={content.proofStrip} />
      ) : null}

      {content.systemReveal.visible ? (
        <HomeSystemReveal content={content.systemReveal} />
      ) : null}

      {content.ritualSequence.visible ? (
        <HomeRoutineSequence content={content.ritualSequence} />
      ) : null}

      {content.appGuidance.visible ? (
        <HomeAppGuidance content={content.appGuidance} />
      ) : null}

      {content.researchBoundary.visible ? (
        <HomeResearchBoundary content={content.researchBoundary} />
      ) : null}

      {content.everydayPathways.visible ? (
        <HomeEverydayPathways content={content.everydayPathways} />
      ) : null}

      {content.finalCta.visible ? (
        <HomeFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
