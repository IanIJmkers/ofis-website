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

const charityOrganizations = clientOrganizations.filter((org) =>
  [
    "Stichting van het Kind",
    "FIN",
    "Stichting Prins Bernhard Cultuurfonds",
    "Ars Donandi",
    "Stichting VSBfonds",
    "Stichting het Rijksmuseum",
    "Stichting Volkskracht",
    "Stichting Kansfonds",
    "Stichting SNS Reaal Fonds",
    "Stichting Lotto",
    "Stichting BankGiro Loterij",
  ].includes(org)
);

const charityServices = [
  {
    title: "Subsidieadministratie",
    description:
      "Volledig beheer van uw subsidieproces, van aanvraagintake en beoordeling tot uitbetaling en impactrapportage.",
  },
  {
    title: "Fondsenwervings Compliance",
    description:
      "Zorg dat uw fondsenwervingsactiviteiten voldoen aan alle wettelijke en regelgevende eisen, inclusief CBF-erkenningsnormen en ANBI-verplichtingen.",
  },
  {
    title: "Financiele Rapportage",
    description:
      "Transparante en nauwkeurige jaarrekeningen die voldoen aan de specifieke rapportagestandaarden voor goede doelen instellingen.",
  },
  {
    title: "Digitaal Toezicht",
    description:
      "Realtime inzicht in uw financiele positie via het Mijn Orchestra dashboard, waarmee uw bestuur te allen tijde volledig transparantie heeft.",
  },
];

export default function ClientsCharities() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              Goede Doelen
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              Ondersteuning voor Goede Doelen Organisaties
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Fondsenwervende organisaties, goede doelen instellingen met of
              zonder CBF-erkenning -- wij begrijpen de unieke eisen van elk en
              stemmen onze diensten daarop af.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services for Charities */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Oplossingen op Maat"
          title="Diensten voor Goede Doelen Instellingen"
          subtitle="Van subsidieadministratie tot compliance rapportage, wij bieden de financiele ruggengraat waardoor uw goede doel zich kan richten op haar missie."
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
              Sector Expertise
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
              Wij Begrijpen Uw Missie
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed">
              Goede doelen opereren in een uniek landschap waar financieel
              beheer direct invloed heeft op het vermogen om goed te doen. Elke
              euro bespaard op administratie is een euro beschikbaar voor uw
              missie.
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              De exclusieve focus van Orchestra op de goede doelen sector
              betekent dat wij het regelgevende landschap, de verwachtingen van
              donateurs en de governance-eisen begrijpen die uw activiteiten
              vormgeven. Wij beheren niet alleen uw financien -- wij helpen uw
              vermogen om impact te creeren te beschermen.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "CBF- en ANBI-compliance expertise",
                "Transparante vaste tarieven",
                "Toegewijde goede doelen sectorspecialisten",
                "Geintegreerd financieel toezicht",
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
                Spreek met een Specialist
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
                  Goede doelen organisaties bediend
                </p>
              </div>
              <div className="h-px bg-warm-gray-100 my-8" />
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-2xl font-heading text-navy-900">100%</p>
                  <p className="mt-1 text-sm text-warm-gray-500">
                    Compliance percentage
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-heading text-navy-900">Vast</p>
                  <p className="mt-1 text-sm text-warm-gray-500">
                    Jaarlijkse tarieven
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
          eyebrow="Goede Doelen Klanten"
          title="Organisaties die Wij Bedienen"
          subtitle="Een selectie van de goede doelen instellingen die Orchestra hebben toevertrouwd met hun financiele administratie en governance."
          align="center"
        />
        <StaggerChildren className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {charityOrganizations.map((org) => (
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
        title="Laat ons uw goede doelen missie ondersteunen"
        subtitle="Ontdek hoe Orchestra uw financiele activiteiten en governance kan versterken."
      />
    </PageTransition>
  );
}
