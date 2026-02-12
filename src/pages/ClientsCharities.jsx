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
import { clientOrganizations } from "../data/clients";
import { useLanguage } from "../context/LanguageContext";

const charityOrganizations = clientOrganizations.filter(
  (org) => org.type === "charity"
);

export default function ClientsCharities() {
  const { t } = useLanguage();

  const charityServices = [
    {
      title: t("clientsCharities", "service1Title"),
      description: t("clientsCharities", "service1Desc"),
    },
    {
      title: t("clientsCharities", "service2Title"),
      description: t("clientsCharities", "service2Desc"),
    },
    {
      title: t("clientsCharities", "service3Title"),
      description: t("clientsCharities", "service3Desc"),
    },
    {
      title: t("clientsCharities", "service4Title"),
      description: t("clientsCharities", "service4Desc"),
    },
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              {t("clientsCharities", "heroEyebrow")}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              {t("clientsCharities", "heroTitle")}
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              {t("clientsCharities", "heroDescription")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services for Charities */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow={t("clientsCharities", "servicesEyebrow")}
          title={t("clientsCharities", "servicesTitle")}
          subtitle={t("clientsCharities", "servicesSubtitle")}
          align="center"
        />
        <StaggerChildren className="mt-16 grid sm:grid-cols-2 gap-8">
          {charityServices.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="bg-white border border-warm-gray-100 rounded-lg p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-gold-700"
            >
              <h3 className="text-xl lg:text-2xl font-heading text-navy-900 mb-4">
                {service.title}
              </h3>
              <p className="text-warm-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Understanding Charities */}
      <SectionWrapper bg="cream" size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
              {t("clientsCharities", "expertiseEyebrow")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
              {t("clientsCharities", "expertiseTitle")}
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed">
              {t("clientsCharities", "expertiseText1")}
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              {t("clientsCharities", "expertiseText2")}
            </p>
            <ul className="mt-8 space-y-3">
              {[
                t("clientsCharities", "expertiseBullet1"),
                t("clientsCharities", "expertiseBullet2"),
                t("clientsCharities", "expertiseBullet3"),
                t("clientsCharities", "expertiseBullet4"),
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-gold-700 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-navy-900 font-body text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/contact" variant="primary" size="lg">
                {t("clientsCharities", "expertiseCta")}
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-white rounded-lg p-10 border border-warm-gray-100 shadow-card">
              <div className="text-center mb-8">
                <p className="text-5xl lg:text-6xl font-heading text-navy-900">
                  21+
                </p>
                <p className="mt-2 text-warm-gray-500 font-body">
                  {t("clientsCharities", "statOrgsServed")}
                </p>
              </div>
              <div className="h-px bg-warm-gray-100 my-8" />
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-2xl font-heading text-navy-900">100%</p>
                  <p className="mt-1 text-sm text-warm-gray-500">
                    {t("clientsCharities", "statComplianceRate")}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-heading text-navy-900">Vast</p>
                  <p className="mt-1 text-sm text-warm-gray-500">
                    {t("clientsCharities", "statAnnualFees")}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Client Organizations */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow={t("clientsCharities", "clientsEyebrow")}
          title={t("clientsCharities", "clientsTitle")}
          subtitle={t("clientsCharities", "clientsSubtitle")}
          align="center"
        />
        <StaggerChildren className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {charityOrganizations.map((org) => (
            <motion.a
              key={org.id}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className="group bg-white border border-warm-gray-100 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-36 h-36 flex items-center justify-center overflow-hidden">
                <img src={org.logo} alt={org.name} className="max-w-full max-h-full object-contain" />
              </div>
              <span className="mt-4 font-body text-navy-900 font-medium text-sm leading-snug group-hover:text-gold-700 transition-colors">
                {org.name}
              </span>
            </motion.a>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      <CTASection
        title={t("clientsCharities", "ctaTitle")}
        subtitle={t("clientsCharities", "ctaSubtitle")}
      />
    </PageTransition>
  );
}
