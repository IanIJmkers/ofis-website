import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";

export default function FounderLetterSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper bg="cream" size="lg">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
            {t("home", "essenceEyebrow")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 leading-tight">
            {t("home", "essenceTitle")}
          </h2>
          <div className="mt-4 h-0.75 w-10 bg-gold-700" />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-8 text-lg text-warm-gray-600 leading-relaxed">
            {t("home", "essenceIntro")}
          </p>
          <p className="mt-6 text-lg text-warm-gray-600 leading-relaxed">
            {t("home", "essenceBody1")}
          </p>
          <p className="mt-6 text-lg text-warm-gray-600 leading-relaxed">
            {t("home", "essenceBody2")}
          </p>
          <p className="mt-6 text-lg text-warm-gray-600 leading-relaxed">
            {t("home", "essenceBody3")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-12">
          <div className="border-l-4 border-gold-700 pl-6 py-2">
            <p className="text-warm-gray-500 italic mb-2">
              {t("home", "essenceSignature")}
            </p>
            <p className="text-lg font-heading text-navy-900">
              {t("home", "essenceSignatureName")}
            </p>
            <p className="text-sm text-gold-700 font-semibold tracking-wide">
              {t("home", "essenceSignatureRole")}
            </p>
          </div>
          <p className="mt-8 text-sm text-warm-gray-400 italic leading-relaxed">
            {t("home", "essencePs")}
          </p>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
