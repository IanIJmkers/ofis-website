import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/sections/CTASection";
import { fetchPublishedPosts } from "../lib/blog";
import { useLanguage } from "../context/LanguageContext";

const categoryColors = {
  Regelgeving: "bg-navy-100 text-navy-800",
  Vermogensbeheer: "bg-gold-100 text-gold-800",
  Governance: "bg-navy-100 text-navy-700",
  Sector: "bg-warm-gray-200 text-warm-gray-700",
};

function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden flex flex-col animate-pulse">
      <div className="h-1 bg-warm-gray-200" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-3 w-28 bg-warm-gray-200 rounded" />
          <div className="h-5 w-20 bg-warm-gray-200 rounded-full" />
        </div>
        <div className="h-6 w-3/4 bg-warm-gray-200 rounded mb-2" />
        <div className="h-6 w-1/2 bg-warm-gray-200 rounded mb-3" />
        <div className="space-y-2 mb-6 flex-1">
          <div className="h-4 w-full bg-warm-gray-100 rounded" />
          <div className="h-4 w-full bg-warm-gray-100 rounded" />
          <div className="h-4 w-2/3 bg-warm-gray-100 rounded" />
        </div>
        <div className="h-4 w-24 bg-warm-gray-200 rounded mt-auto" />
      </div>
    </div>
  );
}

export default function News() {
  const { language, t } = useLanguage();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublishedPosts().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString(language === "nl" ? "nl-NL" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

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
            {t("news", "heroEyebrow")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
          >
            {t("news", "heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-navy-200 leading-relaxed max-w-2xl"
          >
            {t("news", "heroDescription")}
          </motion.p>
        </div>
      </section>

      {/* Articles grid */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow={t("news", "articlesEyebrow")}
          title={t("news", "articlesTitle")}
          subtitle={t("news", "articlesSubtitle")}
          align="center"
        />

        {loading ? (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="mt-16 text-center py-16">
            <p className="text-warm-gray-400 text-lg">
              {t("news", "noArticles")}
            </p>
          </div>
        ) : (
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
                      {formatDate(article.published_at)}
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
                  <h3 className="text-xl lg:text-2xl font-heading text-navy-900 leading-snug mb-3 group-hover:text-gold-700 transition-colors duration-200">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-warm-gray-500 leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="mt-auto">
                    <Link
                      to={`/news/${article.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-wider uppercase text-gold-700 hover:text-gold-600 transition-colors"
                    >
                      {t("news", "readMore")}
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
                </div>
              </motion.article>
            ))}
          </StaggerChildren>
        )}
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
