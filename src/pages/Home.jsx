import PageTransition from "../components/animation/PageTransition";
import HeroSection from "../components/sections/HeroSection";
import StatsBar from "../components/sections/StatsBar";
import CategorySection from "../components/sections/CategorySection";
import ValueProps from "../components/sections/ValueProps";
import ServicesCards from "../components/sections/ServicesCards";
import FounderLetterSection from "../components/sections/FounderLetterSection";
import FeeLogicSection from "../components/sections/FeeLogicSection";
import ProcessSteps from "../components/sections/ProcessSteps";
import CollectiveMemorySection from "../components/sections/CollectiveMemorySection";
import FrictionAcknowledgementSection from "../components/sections/FrictionAcknowledgementSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TrustBadges from "../components/sections/TrustBadges";
import MobileAppShowcase from "../components/sections/MobileAppShowcase";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsBar />
      <CategorySection />
      <ValueProps />
      <ServicesCards />
      <FounderLetterSection />
      <FeeLogicSection variant="home" bg="white" />
      <ProcessSteps />
      <CollectiveMemorySection />
      <FrictionAcknowledgementSection />
      <TestimonialsSection />
      <TrustBadges />
      <MobileAppShowcase />
      <CTASection />
    </PageTransition>
  );
}
