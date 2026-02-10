import PageTransition from "../components/animation/PageTransition";
import HeroSection from "../components/sections/HeroSection";
import StatsBar from "../components/sections/StatsBar";
import ValueProps from "../components/sections/ValueProps";
import ServicesCards from "../components/sections/ServicesCards";
import ProcessSteps from "../components/sections/ProcessSteps";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TrustBadges from "../components/sections/TrustBadges";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsBar />
      <ValueProps />
      <ServicesCards />
      <ProcessSteps />
      <TestimonialsSection />
      <TrustBadges />
      <CTASection />
    </PageTransition>
  );
}
