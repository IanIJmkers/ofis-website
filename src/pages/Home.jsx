import PageTransition from "../components/animation/PageTransition";
import HeroSection from "../components/sections/HeroSection";
import CategorySection from "../components/sections/CategorySection";
import ServicesCards from "../components/sections/ServicesCards";
import FounderLetterSection from "../components/sections/FounderLetterSection";
import FeeLogicSection from "../components/sections/FeeLogicSection";
import FrictionAcknowledgementSection from "../components/sections/FrictionAcknowledgementSection";
import CollectiveMemorySection from "../components/sections/CollectiveMemorySection";
import ValueProps from "../components/sections/ValueProps";
import ProcessSteps from "../components/sections/ProcessSteps";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TrustBadges from "../components/sections/TrustBadges";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <CategorySection />
      <ServicesCards />
      <FounderLetterSection />
      <FeeLogicSection variant="home" bg="white" />
      <FrictionAcknowledgementSection />
      <CollectiveMemorySection />
      <ValueProps />
      <ProcessSteps />
      <TestimonialsSection />
      <TrustBadges />
      <CTASection />
    </PageTransition>
  );
}
