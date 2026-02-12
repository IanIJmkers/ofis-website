import { Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren, {
  staggerItem,
} from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import CTASection from "../components/sections/CTASection";
import { getInterviews } from "../data/interviews";
import { useLanguage } from "../context/LanguageContext";

function formatDate(dateString, lang) {
  return new Date(dateString).toLocaleDateString(
    lang === "nl" ? "nl-NL" : "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );
}

export default function ClientsInterviews() {
  const { language, t } = useLanguage();
  const interviews = getInterviews();
  const featuredInterview = interviews[interviews.length - 1];
  const remainingInterviews = [...interviews].reverse().slice(1);

  return (
    <PageTransition>
      {/* Compact Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4"
          >
            {t("clientsInterviews", "heroEyebrow")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-4"
          >
            {t("clientsInterviews", "heroTitle")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-0.75 w-10 bg-gold-700 origin-left"
          />
        </div>
      </section>

      {/* Featured Interview */}
      <SectionWrapper bg="cream" size="md">
        <AnimatedSection>
          <Link
            to={`/clients/interviews/${featuredInterview.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden"
          >
            <div className="aspect-16/10 lg:aspect-auto lg:min-h-100 overflow-hidden">
              <img
                src={featuredInterview.featured_image}
                alt={featuredInterview.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block self-start text-[10px] font-body font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gold-100 text-gold-800 mb-4">
                {t("clientsInterviews", "featuredLabel")}
              </span>

              <div className="flex items-center gap-3 mb-4">
                <time className="text-xs font-body text-warm-gray-400 tracking-wide">
                  {formatDate(featuredInterview.published_at, language)}
                </time>
                <span className="text-[10px] font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-navy-100 text-navy-700">
                  {featuredInterview.organization}
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-heading text-navy-900 leading-snug mb-4 group-hover:text-gold-700 transition-colors duration-200">
                {featuredInterview.title}
              </h2>

              <p className="text-sm text-warm-gray-500 leading-relaxed mb-6 line-clamp-3">
                {featuredInterview.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-wider uppercase text-gold-700 group-hover:text-gold-600 transition-colors">
                {t("clientsInterviews", "readInterview")}
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
          </Link>
        </AnimatedSection>
      </SectionWrapper>

      {/* Interview Grid */}
      <SectionWrapper bg="cream" size="md" className="pt-0!">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingInterviews.map((interview) => (
            <motion.article
              key={interview.id}
              variants={staggerItem}
              className="group bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col"
            >
              <Link
                to={`/clients/interviews/${interview.slug}`}
                className="block"
              >
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={interview.featured_image}
                    alt={interview.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-xs font-body text-warm-gray-400 tracking-wide">
                    {formatDate(interview.published_at, language)}
                  </time>
                  <span className="text-[10px] font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-navy-100 text-navy-700">
                    {interview.organization}
                  </span>
                </div>

                <h3 className="text-lg lg:text-xl font-heading text-navy-900 leading-snug mb-3 group-hover:text-gold-700 transition-colors duration-200">
                  <Link to={`/clients/interviews/${interview.slug}`}>
                    {interview.title}
                  </Link>
                </h3>

                <p className="text-sm text-warm-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                  {interview.excerpt}
                </p>

                <Link
                  to={`/clients/interviews/${interview.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-wider uppercase text-gold-700 hover:text-gold-600 transition-colors mt-auto"
                >
                  {t("clientsInterviews", "readInterview")}
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
                </Link>
              </div>
            </motion.article>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      <CTASection
        title={t("clientsInterviews", "ctaTitle")}
        subtitle={t("clientsInterviews", "ctaSubtitle")}
      />
    </PageTransition>
  );
}
