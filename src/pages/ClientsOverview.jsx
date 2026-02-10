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
  clientTypes,
  clientOrganizations,
} from "../data/clients";
import { testimonials } from "../data/testimonials";

export default function ClientsOverview() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              Onze Klanten
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              Vertrouwd door de Toonaangevende Stichtingen van Nederland
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Al meer dan twee decennia vertrouwen goede doelen en
              vermogensfondsen op Orchestra voor het beheer van hun financiele
              activiteiten. Wij zijn er trots op een divers portfolio van
              instellingen te bedienen die zich inzetten voor blijvende impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Types */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Wie Wij Bedienen"
          title="Twee Pijlers van de Goede Doelen Sector"
          subtitle="Wij bieden op maat gemaakte financiele diensten aan zowel vermogensfondsen als goede doelen, met begrip voor de unieke eisen en regelgeving van elk."
          align="center"
        />
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {clientTypes.map((type, index) => (
            <AnimatedSection key={type.id} delay={index * 0.15}>
              <Card
                title={type.title}
                description={type.description}
                href={type.path}
                ctaText="Ontdek"
                accentTop
              />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Client Organizations Grid */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow="Ons Portfolio"
          title="Stichtingen die Orchestra Vertrouwen"
          subtitle="Een selectie van de goede doelen en vermogensfondsen die wij met trots mogen bedienen."
          align="center"
        />
        <StaggerChildren className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientOrganizations.map((org) => (
            <motion.div
              key={org}
              variants={staggerItem}
              className="bg-white border border-warm-gray-100 rounded-lg px-6 py-5 flex items-center gap-4 shadow-sm hover:shadow-card transition-shadow duration-300"
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

      {/* Testimonials */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Klantervaringen"
          title="Wat Onze Klanten Zeggen"
          subtitle="Hoor rechtstreeks van de stichtingen en organisaties die Orchestra als hun vertrouwde partner hebben gekozen."
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
            Lees Volledige Klantverhalen &rarr;
          </a>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
