import { HomeAppDeviceEcosystem } from "@/components/home/home-app-device-ecosystem"
import { HomeBenefits } from "@/components/home/home-benefits"
import { HomeConditionsOverview } from "@/components/home/home-conditions-overview"
import { HomeFeaturedLearning } from "@/components/home/home-featured-learning"
import { HomeFinalCta } from "@/components/home/home-final-cta"
import { HomeHero } from "@/components/home/home-hero"
import { HomeHowItWorks } from "@/components/home/home-how-it-works"
import { HomeTrustResearch } from "@/components/home/home-trust-research"
import { HomeWhatIsNeuvago } from "@/components/home/home-what-is-neuvago"
import { HomeWhyRegulationMatters } from "@/components/home/home-why-regulation-matters"

export const metadata = {
  title:
    "Neuvago | Vagus Nerve Stimulation, Nervous System Regulation, Stress, Sleep and Recovery",
  description:
    "Discover Neuvago, a calmer approach to vagus nerve stimulation and nervous system support. Explore stress, sleep, recovery, emotional regulation, and the body’s return to steadier states.",
}

export default function HomePage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <HomeHero />
      <HomeWhatIsNeuvago />
      <HomeWhyRegulationMatters />
      <HomeAppDeviceEcosystem />
      <HomeHowItWorks />
      <HomeBenefits />
      <HomeTrustResearch />
      <HomeFeaturedLearning />
      <HomeConditionsOverview />
      <HomeFinalCta />
    </main>
  )
}
