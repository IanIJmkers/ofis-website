import { motion } from "motion/react";
import { Link } from "react-router";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import CTASection from "../components/sections/CTASection";
import { services } from "../data/services";

const service = services.find((s) => s.id === "wealth-management");

const featureIcons = [
  // Institutional Process
  <svg key="0" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  // Risk Management
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Cost Efficiency
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Regulatory Compliance
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
];

export default function ServiceWealthManagement() {
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm text-navy-300 hover:text-white transition-colors mb-6"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                Alle Diensten
              </Link>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-400 mb-6"
            >
              Vermogensbeheer
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
            >
              Onafhankelijk, institutioneel{" "}
              <span className="text-gold-400">vermogensbeheer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl"
            >
              {service.shortDescription}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main content: two-column */}
      <SectionWrapper bg="white" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: text content */}
          <AnimatedSection direction="left">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
              Overzicht
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900 leading-snug">
              Een brede span of control over uw beleggingen
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
              {service.fullDescription}
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Wij bieden uitgebreid toezicht op uw beleggingsportefeuille,
              treasury-activiteiten en liquiditeitsbeheer. Onze institutionele
              aanpak zorgt ervoor dat elke beslissing gebaseerd is op grondige
              analyse, professionele standaarden en een diepgaand begrip van de
              missie en doelstellingen van uw organisatie.
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Door volledige onafhankelijkheid te bewaren ten opzichte van
              banken, brokers en vermogensbeheerders, zorgen wij ervoor dat
              elke aanbeveling die wij doen in het belang van uw stichting is.
            </p>
          </AnimatedSection>

          {/* Right: feature cards 2x2 */}
          <AnimatedSection direction="right" delay={0.2}>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.div key={feature.title} variants={staggerItem}>
                  <div className="bg-cream border border-warm-gray-100 rounded-lg p-6 h-full">
                    <div className="text-gold-700 mb-4">{featureIcons[index]}</div>
                    <h3 className="text-lg font-heading text-navy-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-warm-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Fee transparency callout */}
      <SectionWrapper bg="cream" size="lg">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-gold-700 rounded-lg p-8 lg:p-12 bg-white">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-heading text-navy-900 mb-4">
                    Volledige transparantie over tarieven
                  </h3>
                  <p className="text-warm-gray-500 leading-relaxed text-lg mb-4">
                    Wij hanteren vaste jaarlijkse tarieven die nooit gebaseerd
                    zijn op de omvang van uw beheerd vermogen. Dit betekent dat
                    ons advies altijd objectief en onbevooroordeeld is — wij
                    hebben geen financiële prikkel om het ene product boven het
                    andere aan te bevelen.
                  </p>
                  <p className="text-warm-gray-500 leading-relaxed">
                    Dit is een fundamenteel onderdeel van onze onafhankelijkheid.
                    Wanneer het inkomen van uw adviseur gekoppeld is aan
                    vermogensvolumes, zijn belangenconflicten onvermijdelijk.
                    Ons vaste-tarief-model elimineert dit volledig, zodat elke
                    aanbeveling uitsluitend in uw belang wordt gedaan.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-6">
                    {[
                      { label: "Vast jaarlijks tarief", sublabel: "Nooit vermogensafhankelijk" },
                      { label: "Geen verborgen kosten", sublabel: "Volledige transparantie" },
                      { label: "Geen provisies", sublabel: "Objectief advies" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gold-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-navy-900">{item.label}</p>
                          <p className="text-xs text-warm-gray-400">{item.sublabel}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Process section */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Ons Proces"
          title="Hoe wij uw vermogen beheren"
          subtitle="Een gedisciplineerde, institutionele aanpak die strategisch denken combineert met zorgvuldige uitvoering."
        />

        <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Strategische Beoordeling",
              description:
                "Wij beginnen met het begrijpen van de missie, risicotolerantie, tijdshorizon en rendementsvereisten van uw stichting om een op maat gemaakt beleggingskader op te stellen.",
            },
            {
              step: "02",
              title: "Portefeuille Constructie",
              description:
                "Met behulp van institutionele analyse stellen wij een gediversifieerde portefeuille samen die aansluit bij uw strategie, met de meest kostenefficiënte instrumenten.",
            },
            {
              step: "03",
              title: "Doorlopend Toezicht",
              description:
                "Continue monitoring, periodieke herbalancering en uitgebreide rapportage zorgen ervoor dat uw portefeuille in lijn blijft met uw doelstellingen.",
            },
          ].map((item) => (
            <motion.div key={item.step} variants={staggerItem}>
              <div className="relative pl-8 border-l-2 border-gold-700 h-full">
                <span className="text-4xl font-heading text-gold-200">
                  {item.step}
                </span>
                <h3 className="mt-2 text-xl font-heading text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-warm-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Cross-links to other services */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow="Gerelateerde Diensten"
          title="Onderdeel van een geïntegreerde aanpak"
          subtitle="Vermogensbeheer werkt het best in combinatie met professionele administratie en governance."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services
            .filter((s) => s.id !== "wealth-management")
            .map((s) => (
              <AnimatedSection key={s.id} delay={0.1}>
                <Link to={s.path} className="group block h-full">
                  <div className="bg-white border border-warm-gray-100 rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <h3 className="text-xl font-heading text-navy-900 mb-3 group-hover:text-gold-700 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-warm-gray-500 leading-relaxed text-sm grow">
                      {s.shortDescription}
                    </p>
                    <div className="mt-6 pt-4 border-t border-warm-gray-100">
                      <span className="text-sm font-semibold text-navy-900 tracking-wider uppercase group-hover:text-gold-700 transition-colors">
                        Meer informatie &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
