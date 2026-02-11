import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren, {
  staggerItem,
} from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import CTASection from "../components/sections/CTASection";
import { useLanguage } from "../context/LanguageContext";

export default function AboutCareers() {
  const { language, t } = useLanguage();

  const cultureValues = [
    {
      title: t("aboutCareers", "value1Title"),
      description: t("aboutCareers", "value1Desc"),
    },
    {
      title: t("aboutCareers", "value2Title"),
      description: t("aboutCareers", "value2Desc"),
    },
    {
      title: t("aboutCareers", "value3Title"),
      description: t("aboutCareers", "value3Desc"),
    },
    {
      title: t("aboutCareers", "value4Title"),
      description: t("aboutCareers", "value4Desc"),
    },
  ];

  const benefits = [
    t("aboutCareers", "benefit1"),
    t("aboutCareers", "benefit2"),
    t("aboutCareers", "benefit3"),
    t("aboutCareers", "benefit4"),
    t("aboutCareers", "benefit5"),
    t("aboutCareers", "benefit6"),
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              {t("aboutCareers", "heroEyebrow")}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              {t("aboutCareers", "heroTitle")}
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              {t("aboutCareers", "heroDescription")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture Section */}
      <SectionWrapper bg="white" size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
              {t("aboutCareers", "cultureEyebrow")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
              {t("aboutCareers", "cultureTitle")}
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
              {t("aboutCareers", "cultureText1")}
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              {t("aboutCareers", "cultureText2")}
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              {t("aboutCareers", "cultureText3")}
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-cream rounded-lg p-10 border border-warm-gray-100">
              <div className="grid grid-cols-2 gap-8 text-center">
                {[
                  { value: "9", label: t("aboutCareers", "statTeamMembers") },
                  { value: "20+", label: t("aboutCareers", "statYearsService") },
                  { value: "21+", label: t("aboutCareers", "statFoundationsServed") },
                  { value: "3", label: t("aboutCareers", "statCoreDisciplines") },
                ].map((stat, index) => (
                  <div key={index}>
                    <p className="text-3xl lg:text-4xl font-heading text-navy-900">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-warm-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow={t("aboutCareers", "valuesEyebrow")}
          title={t("aboutCareers", "valuesTitle")}
          subtitle={t("aboutCareers", "valuesSubtitle")}
          align="center"
        />
        <StaggerChildren className="mt-16 grid sm:grid-cols-2 gap-8">
          {cultureValues.map((value, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white border border-warm-gray-100 rounded-lg p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center mb-6">
                <span className="text-sm font-heading text-gold-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading text-navy-900 mb-4">
                {value.title}
              </h3>
              <p className="text-warm-gray-500 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper bg="white" size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
              {t("aboutCareers", "benefitsEyebrow")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
              {t("aboutCareers", "benefitsTitle")}
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
              {t("aboutCareers", "benefitsText")}
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.15}>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-gold-700 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-navy-900 font-body leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Open Application CTA */}
      <SectionWrapper bg="navy" size="lg">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
            {t("aboutCareers", "openAppEyebrow")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-white">
            {t("aboutCareers", "openAppTitle")}
          </h2>
          <div className="mt-4 h-0.75 w-10 mx-auto bg-gold-700" />
          <p className="mt-6 text-lg text-navy-200 leading-relaxed">
            {t("aboutCareers", "openAppText")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="mailto:info@orchestra-charityoffice.com?subject=Career%20Inquiry"
              external
              variant="primary"
              size="lg"
            >
              {t("aboutCareers", "openAppCta")}
            </Button>
            <Button href="/about/team" variant="outline-light" size="lg">
              {t("aboutCareers", "openAppMeetTeam")}
            </Button>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection
        title={t("aboutCareers", "ctaTitle")}
        subtitle={t("aboutCareers", "ctaSubtitle")}
      />
    </PageTransition>
  );
}
