import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren, {
  staggerItem,
} from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import CTASection from "../components/sections/CTASection";
import { valueProps } from "../data/valueProps";
import { motion } from "motion/react";

const iconMap = {
  specialist: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  transparency: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  compliance: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  onestop: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  oversight: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
};

const subPages = [
  {
    title: "Ons Team",
    description:
      "Maak kennis met de ervaren professionals die diepgaande sectorkennis en persoonlijke toewijding brengen in elke klantrelatie.",
    href: "/about/team",
    ctaText: "Ontmoet het team",
  },
  {
    title: "Onze Methodiek",
    description:
      "Ontdek de gestructureerde vijf-stappen aanpak die wij gebruiken om nieuwe stichtingen aan boord te nemen en naadloze financiele activiteiten te garanderen.",
    href: "/about/methodology",
    ctaText: "Leer onze aanpak",
  },
  {
    title: "Veelgestelde Vragen",
    description:
      "Vind antwoorden op veelgestelde vragen over onze diensten, tarieven, onboardingproces en regelgeving.",
    href: "/about/faqs",
    ctaText: "Lees de FAQ",
  },
  {
    title: "Werken bij Orchestra",
    description:
      "Sluit u aan bij een team van specialisten toegewijd aan de goede doelen sector. Ontdek mogelijkheden om een betekenisvolle impact te maken.",
    href: "/about/careers",
    ctaText: "Bekijk vacatures",
  },
];

export default function AboutOverview() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              Over Orchestra
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              Het Charity Office van Nederland
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Orchestra is de enige onafhankelijke financiele instelling in
              Nederland die zich uitsluitend richt op het bedienen van goede
              doelen stichtingen. Wij combineren vermogensbeheer, administratie
              en governance onder een dak.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper bg="white" size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="left">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
              Onze Missie
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
              Stichtingen in Staat Stellen Zich op Hun Missie te Richten
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
              Wij bestaan om goede doelen stichtingen te ontlasten van de
              complexiteit van financieel beheer, zodat zij al hun energie
              kunnen richten op het creeren van positieve impact in de
              samenleving.
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Door geintegreerd vermogensbeheer, financiele administratie en
              governance diensten aan te bieden tegen transparante vaste
              tarieven, zorgen wij ervoor dat elke stichting die wij bedienen
              de financiele infrastructuur heeft om met vertrouwen en compliance
              te opereren.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
              Onze Visie
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
              Een Toekomst Waarin Elke Stichting Floreert
            </h2>
            <div className="mt-4 h-0.75 w-10 bg-gold-700" />
            <p className="mt-6 text-warm-gray-500 leading-relaxed text-lg">
              Wij zien een goede doelen sector voor ons waarin stichtingen van
              alle omvangen toegang hebben tot financiele diensten van
              institutionele kwaliteit, zodat zij hun maatschappelijke bijdrage
              kunnen maximaliseren.
            </p>
            <p className="mt-4 text-warm-gray-500 leading-relaxed">
              Door voortdurende innovatie, diepgaande sectorexpertise en een
              onwrikbare toewijding aan transparantie, streven wij ernaar de
              definitieve financiele partner te zijn voor elke goede doelen
              stichting in Nederland en daarbuiten.
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Quick Links to Sub-Pages */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow="Ontdek"
          title="Meer Informatie Over Orchestra"
          subtitle="Duik dieper in ons team, onze methodiek en wat ons de vertrouwde partner maakt voor goede doelen stichtingen."
          align="center"
        />
        <StaggerChildren className="mt-16 grid sm:grid-cols-2 gap-8">
          {subPages.map((page) => (
            <motion.div key={page.title} variants={staggerItem}>
              <Card
                title={page.title}
                description={page.description}
                href={page.href}
                ctaText={page.ctaText}
                accentTop
              />
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Value Propositions */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Waarom Orchestra"
          title="Wat Ons Onderscheidt"
          subtitle="Vijf pijlers die de Orchestra-aanpak voor financiele diensten aan goede doelen definieren."
          align="center"
        />
        <StaggerChildren className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop) => (
            <motion.div
              key={prop.title}
              variants={staggerItem}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center mx-auto text-gold-400">
                {iconMap[prop.icon] || iconMap.specialist}
              </div>
              <h3 className="mt-6 text-xl font-heading text-navy-900">
                {prop.title}
              </h3>
              <p className="mt-3 text-warm-gray-500 leading-relaxed text-sm">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
