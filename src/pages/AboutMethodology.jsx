import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import CTASection from "../components/sections/CTASection";
import { getProcessSteps } from "../data/processSteps";
import { useLanguage } from "../context/LanguageContext";

export default function AboutMethodology() {
  const { language, t } = useLanguage();
  const steps = getProcessSteps(language);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              {t("aboutMethodology", "heroEyebrow")}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              {t("aboutMethodology", "heroTitle")}
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              {t("aboutMethodology", "heroDescription")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <SectionWrapper bg="white" size="md">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
            {t("aboutMethodology", "journeyEyebrow")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
            {t("aboutMethodology", "journeyTitle")}
          </h2>
          <div className="mt-4 h-0.75 w-10 mx-auto bg-gold-700" />
          <p className="mt-6 text-lg text-warm-gray-500 leading-relaxed">
            {t("aboutMethodology", "journeyText")}
          </p>
        </AnimatedSection>
      </SectionWrapper>

      {/* Process Steps - Alternating Layout */}
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        return (
          <SectionWrapper
            key={step.number}
            bg={isEven ? "cream" : "white"}
            size="lg"
          >
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                !isEven ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Step Number Visual */}
              <AnimatedSection
                direction={isEven ? "left" : "right"}
                className={!isEven ? "lg:[direction:ltr]" : ""}
              >
                <div className="relative flex items-center justify-center">
                  {/* Large background number */}
                  <span className="text-[10rem] lg:text-[14rem] font-heading text-navy-900/5 leading-none select-none">
                    {step.number}
                  </span>
                  {/* Foreground circle with step number */}
                  <div className="absolute w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-navy-900 flex items-center justify-center shadow-lg">
                    <span className="text-3xl lg:text-4xl font-heading text-gold-400">
                      {String(step.number).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection
                direction={isEven ? "right" : "left"}
                delay={0.15}
                className={!isEven ? "lg:[direction:ltr]" : ""}
              >
                <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
                  {t("aboutMethodology", "stepLabel")} {step.number} {t("aboutMethodology", "stepOf")} {steps.length}
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
                  {step.title}
                </h2>
                <div className="mt-4 h-0.75 w-10 bg-gold-700" />
                <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
                  {step.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-8 flex items-center gap-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i <= index
                          ? "bg-gold-700 w-8"
                          : "bg-warm-gray-200 w-4"
                      }`}
                    />
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </SectionWrapper>
        );
      })}

      {/* Summary / CTA Bridge */}
      <SectionWrapper bg="navy" size="md">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
            {t("aboutMethodology", "resultEyebrow")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-white">
            {t("aboutMethodology", "resultTitle")}
          </h2>
          <div className="mt-4 h-0.75 w-10 mx-auto bg-gold-700" />
          <p className="mt-6 text-lg text-navy-200 leading-relaxed">
            {t("aboutMethodology", "resultText")}
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg">
              {t("aboutMethodology", "resultCta")}
            </Button>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection
        title={t("aboutMethodology", "ctaTitle")}
        subtitle={t("aboutMethodology", "ctaSubtitle")}
      />
    </PageTransition>
  );
}
