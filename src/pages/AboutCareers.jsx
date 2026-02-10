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

const cultureValues = [
  {
    title: "Sectortoewijding",
    description:
      "Wij werken uitsluitend met goede doelen stichtingen. Deze exclusieve focus stelt ons in staat ongeevenaarde expertise te ontwikkelen en betekenisvolle relaties op te bouwen met elke klant.",
  },
  {
    title: "Integriteit Voorop",
    description:
      "Transparantie, eerlijkheid en ethisch handelen zijn niet-onderhandelbaar. Onze klanten vertrouwen ons met hun financiele activiteiten omdat zij weten dat wij onszelf aan de hoogste standaarden houden.",
  },
  {
    title: "Samenwerkingsgeest",
    description:
      "Wij opereren als een geintegreerd team. Vermogensbeheer, administratie en governance werken hand in hand om naadloze dienstverlening te bieden aan elke stichting.",
  },
  {
    title: "Continue Groei",
    description:
      "De goede doelen sector evolueert, en wij ook. Wij investeren in de professionele ontwikkeling van ons team om voorop te blijven lopen bij regelgevende veranderingen en best practices.",
  },
];

const benefits = [
  "Concurrerende beloning in lijn met de financiele dienstverleningssector",
  "Professionele ontwikkeling en doorlopende opleidingsmogelijkheden",
  "Werk met de meest impactvolle goede doelen stichtingen van Nederland",
  "Hecht en samenwerkend team van specialisten",
  "Modern kantoor in Den Haag",
  "Zinvol werk dat de goede doelen sector ondersteunt",
];

export default function AboutCareers() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              Werken bij Orchestra
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              Werken bij Orchestra
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Sluit u aan bij een team van toegewijde professionals die
              financiele expertise combineren met een oprechte passie om de
              goede doelen sector sterker te maken. Bij Orchestra heeft uw werk
              echte impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture Section */}
      <SectionWrapper bg="white" size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
              Onze Cultuur
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
              Doelgerichte Professionals
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
              Orchestra is geen typisch financieel dienstverlener. Wij zijn een
              compact team van specialisten die ervoor gekozen hebben hun
              carriere te wijden aan het bedienen van de goede doelen sector.
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Onze teamleden komen uit diverse achtergronden in financien,
              governance, compliance en klantdiensten, maar zij delen een ding:
              de overtuiging dat goede doelen stichtingen financiele expertise
              van wereldklasse verdienen, geleverd met oprechte zorg.
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Met een team van negen maakt elk individu een echt verschil. Wij
              waarderen autonomie, expertise en het vermogen om duurzame
              relaties op te bouwen met de stichtingen die wij bedienen.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-cream rounded-lg p-10 border border-warm-gray-100">
              <div className="grid grid-cols-2 gap-8 text-center">
                {[
                  { value: "9", label: "Teamleden" },
                  { value: "20+", label: "Jaar Dienstverlening" },
                  { value: "21+", label: "Stichtingen Bediend" },
                  { value: "3", label: "Kerndisciplines" },
                ].map((stat, index) => (
                  <div key={index}>
                    <p className="text-3xl lg:text-4xl font-heading text-navy-900">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-warm-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow="Waar Wij Voor Staan"
          title="Onze Waarden"
          subtitle="De principes die bepalen hoe wij werken, onze klanten bedienen en groeien als team."
          align="center"
        />
        <StaggerChildren className="mt-16 grid sm:grid-cols-2 gap-8">
          {cultureValues.map((value, index) => (
            <motion.div
              key={value.title}
              variants={staggerItem}
              className="bg-white border border-warm-gray-100 rounded-lg p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center mb-6">
                <span className="text-sm font-heading text-gold-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading text-navy-900 mb-4">
                {value.title}
              </h3>
              <p className="text-warm-gray-500 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper bg="white" size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
              Waarom bij Ons Werken
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
              Wat Wij Bieden
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
              Wij geloven dat goed werk goede ondersteuning verdient. Orchestra
              biedt een professionele omgeving waar getalenteerde individuen
              hun carriere kunnen laten groeien terwijl zij bijdragen aan de
              goede doelen sector.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.15}>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-gold-700 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-white"
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
                  <span className="text-navy-900 font-body leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Open Application CTA */}
      <SectionWrapper bg="navy" size="lg">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
            Neem Contact Op
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-white">
            Interesse om bij Orchestra te werken?
          </h2>
          <div className="mt-4 h-0.75 w-10 mx-auto bg-gold-700" />
          <p className="mt-6 text-lg text-navy-200 leading-relaxed">
            Hoewel wij niet altijd openstaande vacatures hebben, zijn wij
            altijd geinteresseerd in getalenteerde professionals die onze
            passie voor de goede doelen sector delen. Stuur ons uw CV en een
            korte introductie, en wij nemen contact met u op.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="mailto:info@orchestra-charityoffice.com?subject=Career%20Inquiry"
              external
              variant="primary"
              size="lg"
            >
              Verstuur Uw Sollicitatie
            </Button>
            <Button href="/about/team" variant="outline-light" size="lg">
              Ontmoet het Team
            </Button>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection
        title="Vragen over werken bij Orchestra?"
        subtitle="Neem contact met ons op voor een vertrouwelijk gesprek over carrieremogelijkheden."
      />
    </PageTransition>
  );
}
