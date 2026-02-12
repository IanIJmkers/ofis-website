import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren, {
  staggerItem,
} from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import CTASection from "../components/sections/CTASection";
import {
  getClientTypes,
  clientOrganizations,
} from "../data/clients";
import { getTestimonials } from "../data/testimonials";
import { useLanguage } from "../context/LanguageContext";

export default function ClientsOverview() {
  const { language, t } = useLanguage();
  const clientTypes = getClientTypes(language);
  const testimonials = getTestimonials(language);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              {t("clientsOverview", "heroEyebrow")}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              {t("clientsOverview", "heroTitle")}
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              {t("clientsOverview", "heroDescription")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Types */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow={t("clientsOverview", "typesEyebrow")}
          title={t("clientsOverview", "typesTitle")}
          subtitle={t("clientsOverview", "typesSubtitle")}
          align="center"
        />
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {clientTypes.map((type, index) => (
            <AnimatedSection key={type.id} delay={index * 0.15}>
              <Card
                title={type.title}
                description={type.description}
                href={type.path}
                ctaText={t("clientsOverview", "discover")}
                accentTop
              />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Client Organizations Grid */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow={t("clientsOverview", "portfolioEyebrow")}
          title={t("clientsOverview", "portfolioTitle")}
          subtitle={t("clientsOverview", "portfolioSubtitle")}
          align="center"
        />
        <StaggerChildren className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clientOrganizations.map((org) => (
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

      {/* Testimonials */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow={t("clientsOverview", "storiesEyebrow")}
          title={t("clientsOverview", "storiesTitle")}
          subtitle={t("clientsOverview", "storiesSubtitle")}
          align="center"
        />
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-cream rounded-lg p-8 lg:p-10 border border-warm-gray-100 h-full flex flex-col">
                <div className="mb-6">
                  <svg
                    className="w-8 h-8 text-gold-700 opacity-40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-navy-900 text-lg leading-relaxed font-body grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-8 pt-6 border-t border-warm-gray-200">
                  <p className="font-heading text-navy-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-warm-gray-500 mt-1">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-12 text-center">
          <a
            href="/clients/interviews"
            className="inline-flex items-center text-sm font-semibold text-navy-900 tracking-wider uppercase hover:text-gold-700 transition-colors"
          >
            {t("clientsOverview", "readStories")} &rarr;
          </a>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
