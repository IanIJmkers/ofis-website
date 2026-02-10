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

const service = services.find((s) => s.id === "administration");

const featureIcons = [
  // Financial Processing
  <svg key="0" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  // Grant Administration
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>,
  // Compliance Reporting
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // Digital Access
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
];

export default function ServiceAdministration() {
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
              Administratie
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
            >
              Nooit meer wakker liggen van uw{" "}
              <span className="text-gold-400">administratie</span>
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
              Nauwgezette financiële administratie, volledig ontzorgd
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
              {service.fullDescription}
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Van dagelijkse boekhouding en betalingsverwerking tot
              jaarrekeningen en belastingaangiften — ons team verzorgt elk
              aspect van uw financiële administratie met institutionele
              precisie. Wij nemen de operationele last van uw schouders zodat u
              zich volledig kunt richten op uw maatschappelijke missie.
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Of u nu subsidieprogramma's, vermogensfondsen of operationele
              middelen beheert, ons administratieteam zorgt ervoor dat elke
              transactie nauwkeurig wordt vastgelegd, elk rapport op tijd wordt
              geleverd en aan elke wettelijke vereiste wordt voldaan.
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

      {/* My Orchestra platform callout */}
      <SectionWrapper bg="navy" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <span className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4 block">
              Digitaal Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading text-white leading-snug">
              Mijn Orchestra — uw gegevens, altijd binnen handbereik
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-400" />
            <p className="mt-6 text-navy-200 leading-relaxed text-lg">
              Ons eigen Mijn Orchestra platform geeft u 24/7 real-time toegang
              tot al uw financiële gegevens, documenten en rapportages. Niet
              meer wachten op kwartaalupdates of informatie opvragen per e-mail.
            </p>
            <p className="mt-4 text-navy-200 leading-relaxed">
              Met een intuïtief dashboard en uitgebreide rapportagetools biedt
              Mijn Orchestra volledige transparantie over de financiële positie
              van uw stichting op elk moment. Bestuursleden, penningmeesters en
              geautoriseerde belanghebbenden hebben toegang tot de informatie
              die ze nodig hebben, wanneer ze die nodig hebben.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Demo Aanvragen
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Real-time Dashboard",
                  description: "Bekijk uw volledige financiële positie in één oogopslag, real-time bijgewerkt.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  ),
                },
                {
                  title: "Documentkluis",
                  description: "Bewaar en raadpleeg al uw financiële documenten veilig op één plek.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  ),
                },
                {
                  title: "Rapportgeneratie",
                  description: "Genereer op maat gemaakte rapporten voor bestuursvergaderingen, audits en toezichthouders.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Rolgebaseerde Toegang",
                  description: "Gedetailleerde machtigingen zorgen ervoor dat de juiste personen de juiste informatie zien.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <motion.div key={item.title} variants={staggerItem}>
                  <div className="bg-navy-800/50 border border-navy-700/50 rounded-lg p-6 h-full">
                    <div className="text-gold-400 mb-3">{item.icon}</div>
                    <h3 className="text-base font-heading text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-navy-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Ons Proces"
          title="Hoe wij uw administratie verzorgen"
          subtitle="Een gestroomlijnd proces ontworpen om u gemoedsrust te geven met behoud van volledige transparantie."
        />

        <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Onboarding & Inrichting",
              description:
                "Wij controleren uw bestaande administratie, migreren uw gegevens en richten uw Mijn Orchestra account in met volledige toegang voor uw team.",
            },
            {
              step: "02",
              title: "Doorlopend Beheer",
              description:
                "Dagelijkse verwerking van transacties, boekhouding, betaalruns, subsidieadministratie en alle routinematige financiële werkzaamheden.",
            },
            {
              step: "03",
              title: "Rapportage & Compliance",
              description:
                "Periodieke managementrapportages, jaarrekeningen, belastingaangiften en wettelijke rapportages — allemaal op tijd opgesteld en opgeleverd.",
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

      {/* Cross-links */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow="Gerelateerde Diensten"
          title="Onderdeel van een geïntegreerde aanpak"
          subtitle="Administratie werkt het best in combinatie met professioneel vermogensbeheer en governance."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services
            .filter((s) => s.id !== "administration")
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
