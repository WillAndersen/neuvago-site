import type { howItWorksPageContent } from "@/content/how-it-works";
import { CoreCinematicHero } from "@/components/core-page";

type HowItWorksHeroProps = {
  content: typeof howItWorksPageContent.hero;
};

export function HowItWorksHero({ content }: HowItWorksHeroProps) {
  const heroContent = content as typeof howItWorksPageContent.hero & {
    panelEyebrow?: string;
    panelText?: string;
  };

  return (
    <CoreCinematicHero
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      primaryCta={content.primaryCta}
      secondaryCta={content.secondaryCta}
      desktopImage={content.desktopImage}
      mobileImage={content.mobileImage}
      proofLine={content.proofLine}
      panelEyebrow={heroContent.panelEyebrow ?? "Place. Start. Return."}
      panelText={
        heroContent.panelText ??
        "Neuvago is designed around a simple ritual: a physical product, guided app sessions, and repeatable moments that fit real life."
      }
      imagePosition="68% center"
      mobileImagePosition="56% center"
    />
  );
}
