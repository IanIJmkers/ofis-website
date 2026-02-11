import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";

export default function CTASection({ title, subtitle }) {
  const { t } = useLanguage();

  const resolvedTitle = title || t("home", "ctaTitle");
  const resolvedSubtitle = subtitle || t("home", "ctaSubtitle");

  return (
    <SectionWrapper bg="navy">
      <AnimatedSection className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6">
          {resolvedTitle}
        </h2>
        <p className="text-lg text-navy-200 mb-10">{resolvedSubtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg">
            {t("common", "contactUs")}
          </Button>
          <Button
            href="https://linkedin.com/company/orchestra-family-charity-office"
            external
            variant="outline-light"
            size="lg"
          >
            {t("common", "followLinkedIn")}
          </Button>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
