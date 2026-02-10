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

const endowmentOrganizations = clientOrganizations.filter((org) =>
  [
    "Insinger Foundation",
    "Stichting Boschuysen",
    "Stichting De Verre Bergen",
    "Stichting Zabawas",
    "Van Leer Foundation",
    "Stichting Elise Mathilde",
    "Stichting Adessium Foundation",
    "Stichting Haëlla",
    "Stichting Dioraphte",
    "Stichting Fonds 21",
  ].includes(org)
);

const services = [
  {
    title: "Vermogensbeheer",
    description:
      "Strategisch vermogensbeheer tegen vaste tarieven, zodat uw fondskapitaal werkt aan de langetermijndoelstellingen van uw stichting.",
  },
  {
    title: "Financiele Administratie",
    description:
      "Volledige financiele verwerking, jaarrekeningen en wettelijke rapportages op maat voor de specifieke eisen van vermogensfondsen.",
  },
  {
    title: "Governance Advies",
    description:
      "Deskundige begeleiding bij bestuursstructuren, risicobeheer en compliance om ervoor te zorgen dat uw fonds binnen alle wettelijke kaders opereert.",
  },
  {
    title: "ANBI Compliance",
    description:
      "Of uw stichting nu een ANBI-status heeft of niet, wij bieden hetzelfde uitgebreide serviceniveau en zorgen voor volledige naleving van regelgeving.",
  },
];

export default function ClientsEndowmentFunds() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              Vermogensfondsen
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              Toegewijde Dienstverlening voor Vermogensfondsen
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Wij bedienen vermogensfondsen, familiestichtingen en fondsen van
              alle omvangen. Of uw stichting nu een ANBI-status heeft of niet,
              wij bieden hetzelfde uitgebreide serviceniveau.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Offer */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Onze Diensten"
          title="Uitgebreid Vermogensfondsbeheer"
          subtitle="Een volledig geintegreerd pakket van financiele diensten specifiek ontworpen voor vermogensfondsen, van vermogensbeheer tot governance advies."
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
              Waarom Orchestra
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
              Gebouwd voor de Lange Termijn
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed">
              Vermogensfondsen hebben een partner nodig die in decennia denkt,
              niet in kwartalen. Het vaste-tarievenmodel van Orchestra betekent
              dat uw kosten niet stijgen naarmate uw fonds groeit, terwijl onze
              exclusieve sectorfocus ervoor zorgt dat elke beslissing is
              gebaseerd op diepgaande expertise in de goede doelen financiering.
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Van kapitaalbehoudstrategieen tot subsidieadministratie, wij
              bieden de infrastructuur die uw bestuur in staat stelt zich
              volledig op de missie te richten.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Bespreek Uw Fonds
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "20+", label: "Jaar Ervaring" },
                { value: "Vast", label: "Jaarlijkse Tarieven" },
                { value: "24/7", label: "Dashboard Toegang" },
                { value: "100%", label: "Wettelijke Compliance" },
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
          eyebrow="Vermogensfonds Klanten"
          title="Stichtingen die Wij met Trots Bedienen"
          subtitle="Een selectie van de vermogensfondsen en familiestichtingen die Orchestra vertrouwen met hun financiele activiteiten."
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
        title="Ontdek hoe Orchestra uw fonds kan bedienen"
        subtitle="Plan een vertrouwelijk gesprek met een van onze vermogensspecialisten."
      />
    </PageTransition>
  );
}
