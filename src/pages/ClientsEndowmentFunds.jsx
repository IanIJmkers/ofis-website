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

const endowmentOrganizations = clientOrganizations.filter((org) =>
  [
    "Insinger Foundation",
    "Stichting Boschuysen",
    "Stichting De Verre Bergen",
    "Stichting Zabawas",
    "Van Leer Foundation",
    "Stichting Elise Mathilde",
    "Stichting Adessium Foundation",
    "Stichting Ha\u00eblla",
    "Stichting Dioraphte",
    "Stichting Fonds 21",
  ].includes(org)
);

export default function ClientsEndowmentFunds() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("clientsEndowment", "service1Title"),
      description: t("clientsEndowment", "service1Desc"),
    },
    {
      title: t("clientsEndowment", "service2Title"),
      description: t("clientsEndowment", "service2Desc"),
    },
    {
      title: t("clientsEndowment", "service3Title"),
      description: t("clientsEndowment", "service3Desc"),
    },
    {
      title: t("clientsEndowment", "service4Title"),
      description: t("clientsEndowment", "service4Desc"),
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
              {t("clientsEndowment", "heroEyebrow")}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              {t("clientsEndowment", "heroTitle")}
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              {t("clientsEndowment", "heroDescription")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Offer */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow={t("clientsEndowment", "servicesEyebrow")}
          title={t("clientsEndowment", "servicesTitle")}
          subtitle={t("clientsEndowment", "servicesSubtitle")}
          align="center"
        />
        <StaggerChildren className="mt-16 grid sm:grid-cols-2 gap-8">
          {services.map((service) => (
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

      {/* Key Differentiators */}
      <SectionWrapper bg="cream" size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
              {t("clientsEndowment", "whyEyebrow")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
              {t("clientsEndowment", "whyTitle")}
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed">
              {t("clientsEndowment", "whyText1")}
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              {t("clientsEndowment", "whyText2")}
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                {t("clientsEndowment", "whyCta")}
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "20+", label: t("clientsEndowment", "statYearsExp") },
                { value: "Vast", label: t("clientsEndowment", "statAnnualFees") },
                { value: "24/7", label: t("clientsEndowment", "statDashboard") },
                { value: "100%", label: t("clientsEndowment", "statCompliance") },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center border border-warm-gray-100 shadow-sm"
                >
                  <p className="text-3xl lg:text-4xl font-heading text-navy-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-warm-gray-500 font-body">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Client Organizations */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow={t("clientsEndowment", "clientsEyebrow")}
          title={t("clientsEndowment", "clientsTitle")}
          subtitle={t("clientsEndowment", "clientsSubtitle")}
          align="center"
        />
        <StaggerChildren className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {endowmentOrganizations.map((org) => (
            <motion.div
              key={org}
              variants={staggerItem}
              className="bg-cream border border-warm-gray-100 rounded-lg px-6 py-5 flex items-center gap-4 shadow-sm hover:shadow-card transition-shadow duration-300"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center">
                <span className="text-sm font-heading text-gold-400">
                  {org.charAt(0)}
                </span>
              </div>
              <span className="font-body text-navy-900 font-medium text-sm leading-snug">
                {org}
              </span>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      <CTASection
        title={t("clientsEndowment", "ctaTitle")}
        subtitle={t("clientsEndowment", "ctaSubtitle")}
      />
    </PageTransition>
  );
}
