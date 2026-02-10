import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/sections/CTASection";

const articles = [
  {
    id: 1,
    category: "Regelgeving",
    date: "12 december 2024",
    title: "Nieuwe richtlijnen voor ANBI-stichtingen in 2025",
    excerpt:
      "De Belastingdienst heeft aangescherpte richtlijnen gepubliceerd voor ANBI-stichtingen. Wij analyseren de belangrijkste veranderingen en wat ze betekenen voor uw stichting.",
  },
  {
    id: 2,
    category: "Vermogensbeheer",
    date: "28 november 2024",
    title: "Duurzaam beleggen: de nieuwe standaard voor goede doelen",
    excerpt:
      "Steeds meer stichtingen integreren ESG-criteria in hun beleggingsbeleid. Hoe kunt u maatschappelijk verantwoord beleggen zonder rendement in te leveren?",
  },
  {
    id: 3,
    category: "Governance",
    date: "15 november 2024",
    title: "Digitale transformatie in het bestuur van stichtingen",
    excerpt:
      "Van digitale handtekeningen tot online dashboards — hoe technologie het bestuur van charitatieve organisaties efficiënter en transparanter maakt.",
  },
  {
    id: 4,
    category: "Sector",
    date: "2 november 2024",
    title: "Orchestra behaalt hoogste klanttevredenheid in vijf jaar",
    excerpt:
      "Uit ons jaarlijkse klanttevredenheidsonderzoek blijkt dat 97% van onze klanten ons beoordeelt met een 8 of hoger. Een resultaat waar wij trots op zijn.",
  },
];

const categoryColors = {
  Regelgeving: "bg-navy-100 text-navy-800",
  Vermogensbeheer: "bg-gold-100 text-gold-800",
  Governance: "bg-navy-100 text-navy-700",
  Sector: "bg-warm-gray-200 text-warm-gray-700",
};

export default function News() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4"
          >
            Inzichten
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
          >
            Nieuws & Opinie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-navy-200 leading-relaxed max-w-2xl"
          >
            Blijf op de hoogte van de laatste ontwikkelingen op het gebied van financiële
            regelgeving, governance van goede doelen en vermogensbeheer voor de non-profitsector.
          </motion.p>
        </div>
      </section>

      {/* Articles grid */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow="Laatste Artikelen"
          title="Expertperspectieven"
          subtitle="Thought leadership van ons team van charity office specialisten."
          align="center"
        />

        <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={staggerItem}
              className="group bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Card top accent */}
              <div className="h-1 bg-linear-to-r from-navy-900 to-gold-700" />

              <div className="p-8 flex flex-col flex-1">
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-4">
                  <time className="text-xs font-body text-warm-gray-400 tracking-wide">
                    {article.date}
                  </time>
                  <span
                    className={`text-[10px] font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                      categoryColors[article.category] || "bg-warm-gray-200 text-warm-gray-700"
                    }`}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-heading text-navy-900 leading-snug mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-warm-gray-500 leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>

                {/* Read more */}
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-wider uppercase text-gold-700">
                    Lees meer
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
