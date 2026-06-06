import type { howItWorksPageContent } from "@/content/how-it-works";
import { CoreCinematicHero } from "@/components/core-page";

type HowItWorksHeroProps = {
  content: typeof howItWorksPageContent.hero;
};

export function HowItWorksHero({ content }: HowItWorksHeroProps) {
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
      panelEyebrow="Place. Start. Return."
      panelText="Neuvago is designed around a simple ritual: a physical product, guided app sessions, and repeatable moments that fit real life."
      imagePosition="68% center"
      mobileImagePosition="56% center"
    />
  );
}
