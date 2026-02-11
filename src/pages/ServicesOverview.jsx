import { motion } from "motion/react";
import { Link } from "react-router";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import CTASection from "../components/sections/CTASection";
import { useLanguage } from "../context/LanguageContext";
import { getServices } from "../data/services";

const serviceIcons = {
  "wealth-management": (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  ),
  administration: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
  governance: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    </svg>
  ),
};

export default function ServicesOverview() {
  const { language, t } = useLanguage();
  const services = getServices(language);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/20" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border border-white/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-400 mb-6"
            >
              {t("servicesOverview", "heroEyebrow")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
            >
              {t("servicesOverview", "heroTitle")}
              <span className="text-gold-400">{t("servicesOverview", "heroHighlight")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl"
            >
              {t("servicesOverview", "heroDescription")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow={t("servicesOverview", "gridEyebrow")}
          title={t("servicesOverview", "gridTitle")}
          subtitle={t("servicesOverview", "gridSubtitle")}
        />

        <StaggerChildren className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div key={service.id} variants={staggerItem}>
              <Link to={service.path} className="group block h-full">
                <div className="bg-white border border-warm-gray-100 border-t-4 border-t-gold-700 rounded-lg p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="text-gold-700 mb-6">
                    {serviceIcons[service.icon]}
                  </div>
                  <h3 className="text-2xl font-heading text-navy-900 mb-4 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-warm-gray-500 leading-relaxed mb-8 grow">
                    {service.shortDescription}
                  </p>

                  {/* Features preview */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="flex items-start gap-3 text-sm text-warm-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-gold-700 mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature.title}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5 border-t border-warm-gray-100">
                    <span className="text-sm font-semibold text-navy-900 tracking-wider uppercase group-hover:text-gold-700 transition-colors">
                      {t("common", "moreInfo")} &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Integrated approach / methodology cross-link */}
      <SectionWrapper bg="cream" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
              {t("servicesOverview", "approachEyebrow")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900 leading-snug">
              {t("servicesOverview", "approachTitle")}
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
              {t("servicesOverview", "approachText1")}
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              {t("servicesOverview", "approachText2")}
            </p>
            <div className="mt-8">
              <Button href="/about/methodology" variant="primary" size="lg">
                {t("common", "discoverMethodology")}
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: t("servicesOverview", "stat1Value"), label: t("servicesOverview", "stat1Label") },
                { value: t("servicesOverview", "stat2Value"), label: t("servicesOverview", "stat2Label") },
                { value: t("servicesOverview", "stat3Value"), label: t("servicesOverview", "stat3Label") },
                { value: t("servicesOverview", "stat4Value"), label: t("servicesOverview", "stat4Label") },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-warm-gray-100 rounded-lg p-6 text-center shadow-card"
                >
                  <p className="text-2xl lg:text-3xl font-heading text-navy-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-warm-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Why Orchestra */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow={t("servicesOverview", "whyEyebrow")}
          title={t("servicesOverview", "whyTitle")}
          subtitle={t("servicesOverview", "whySubtitle")}
        />

        <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: t("servicesOverview", "whyItem1Title"),
              description: t("servicesOverview", "whyItem1Desc"),
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: t("servicesOverview", "whyItem2Title"),
              description: t("servicesOverview", "whyItem2Desc"),
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              title: t("servicesOverview", "whyItem3Title"),
              description: t("servicesOverview", "whyItem3Desc"),
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              title: t("servicesOverview", "whyItem4Title"),
              description: t("servicesOverview", "whyItem4Desc"),
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
            },
          ].map((item) => (
            <motion.div key={item.title} variants={staggerItem}>
              <div className="bg-white border border-warm-gray-100 rounded-lg p-8 shadow-card h-full">
                <div className="text-gold-700 mb-5">{item.icon}</div>
                <h3 className="text-lg font-heading text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-gray-500 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
