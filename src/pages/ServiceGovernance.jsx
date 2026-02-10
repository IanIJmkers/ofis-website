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

const service = services.find((s) => s.id === "governance");

const featureIcons = [
  // Advisory Services
  <svg key="0" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  // Annual Reporting
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // Risk Management
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>,
  // Document Management
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>,
];

export default function ServiceGovernance() {
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
              Governance
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
            >
              Uw governance, veilig{" "}
              <span className="text-gold-400">georkestreerd</span>
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
              Het fundament van elke goed geleide goede doelen organisatie
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
              {service.fullDescription}
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Effectieve governance gaat verder dan compliance. Het betekent dat
              de juiste structuren, processen en toezichtmechanismen aanwezig
              zijn om ervoor te zorgen dat uw organisatie opereert met
              integriteit, verantwoording en een duidelijke focus op haar
              missie.
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Wij bieden de deskundige begeleiding en operationele ondersteuning
              die uw bestuur nodig heeft om met vertrouwen aan zijn fiduciaire
              verantwoordelijkheden te voldoen, met behoud van de hoogste
              normen voor transparantie en verantwoording.
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

      {/* More-eyes principle callout */}
      <SectionWrapper bg="cream" size="lg">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-gold-700 rounded-lg p-8 lg:p-12 bg-white">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-heading text-navy-900 mb-4">
                    Het meer-ogen-principe
                  </h3>
                  <p className="text-warm-gray-500 leading-relaxed text-lg mb-4">
                    De kern van onze governance-aanpak is het "meer-ogen-principe"
                    — de praktijk om ervoor te zorgen dat elke belangrijke
                    beslissing, transactie en elk proces door meerdere
                    gekwalificeerde professionals wordt beoordeeld voor
                    uitvoering.
                  </p>
                  <p className="text-warm-gray-500 leading-relaxed mb-4">
                    Dit principe van institutioneel toezicht vermindert het
                    risico op fouten, fraude en slechte besluitvorming. Het
                    creëert een cultuur van verantwoording waarin transparantie
                    niet slechts een beleid is, maar een praktijk die in alles
                    wat wij doen is ingebed.
                  </p>
                  <p className="text-warm-gray-500 leading-relaxed">
                    Van betalingsautorisaties tot beleggingsbeslissingen, van
                    subsidietoewijzingen tot wettelijke rapportages — het
                    meer-ogen-principe zorgt ervoor dat uw organisatie profiteert
                    van collectieve expertise en grondige controles bij elke
                    stap.
                  </p>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { value: "Meerdere controleurs", sublabel: "Bij elke kritieke beslissing" },
                      { value: "Functiescheiding", sublabel: "Ingebouwde checks & balances" },
                      { value: "Volledige audit trail", sublabel: "Volledige verantwoording" },
                    ].map((item) => (
                      <div key={item.value} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gold-700 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-navy-900">{item.value}</p>
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

      {/* Governance areas */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Governance Raamwerk"
          title="Uitgebreide governance ondersteuning"
          subtitle="Wij bestrijken elke dimensie van governance die goede doelen organisaties nodig hebben om met vertrouwen te opereren."
        />

        <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Bestuursadvies",
              description:
                "Strategisch advies over governancestructuren, bestuurssamenstelling, beleidskaders en organisatorische best practices.",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
            {
              title: "Beleid & Compliance",
              description:
                "Ontwikkeling en onderhoud van governancebeleid, compliance-kaders en interne regelgeving in lijn met ANBI- en sectornormen.",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
            },
            {
              title: "Risicotoezicht",
              description:
                "Systematische identificatie, beoordeling en mitigatie van organisatorische, financiële en reputatierisico's waarmee uw stichting te maken heeft.",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              ),
            },
            {
              title: "Jaarrekeningen",
              description:
                "Professionele opstelling en beoordeling van jaarverslagen, financiële overzichten en de managementletter voor uw accountant.",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              title: "Stakeholderrapportage",
              description:
                "Heldere, transparante communicatie naar donoren, toezichthouders, begunstigden en andere belanghebbenden over de activiteiten van uw stichting.",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              ),
            },
            {
              title: "Digitale Governance",
              description:
                "Veilige, georganiseerde toegang tot alle governancedocumenten, notulen en besluitregisters via het Mijn Orchestra platform.",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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

      {/* Cross-links */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow="Gerelateerde Diensten"
          title="Onderdeel van een geïntegreerde aanpak"
          subtitle="Governance werkt het best in combinatie met professioneel vermogensbeheer en administratie."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services
            .filter((s) => s.id !== "governance")
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
