import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import StaggerChildren from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import ArticleCard, { categoryColors } from "../components/ui/ArticleCard";
import CTASection from "../components/sections/CTASection";
import {
  fetchPostBySlug,
  fetchRelatedPosts,
  fetchRecentPosts,
  estimateReadingTime,
} from "../lib/blog";
import { useLanguage } from "../context/LanguageContext";

function formatDate(dateString, lang) {
  return new Date(dateString).toLocaleDateString(lang === "nl" ? "nl-NL" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-2 mb-8">
        <div className="h-3 w-12 bg-warm-gray-200 rounded" />
        <div className="h-3 w-3 bg-warm-gray-200 rounded" />
        <div className="h-3 w-16 bg-warm-gray-200 rounded" />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-5 w-20 bg-warm-gray-200 rounded-full" />
        <div className="h-3 w-28 bg-warm-gray-200 rounded" />
        <div className="h-3 w-20 bg-warm-gray-200 rounded" />
      </div>
      <div className="h-10 w-3/4 bg-warm-gray-300 rounded mb-3" />
      <div className="h-10 w-1/2 bg-warm-gray-300 rounded mb-4" />
      <div className="h-0.75 w-10 bg-warm-gray-200" />
    </div>
  );
}

export default function NewsArticle() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [recentArticles, setRecentArticles] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setLoading(true);
    setRelatedArticles([]);
    setRecentArticles([]);
    fetchPostBySlug(slug).then((data) => {
      setPost(data);
      setLoading(false);

      if (data) {
        Promise.all([
          fetchRelatedPosts(data.category, slug, 3),
          fetchRecentPosts(slug, 3),
        ]).then(([related, recent]) => {
          setRelatedArticles(related);
          const relatedSlugs = new Set(related.map((r) => r.slug));
          setRecentArticles(recent.filter((r) => !relatedSlugs.has(r.slug)));
        });
      }
    });
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Orchestra Charity Office`;
    }
  }, [post]);

  const readingTime = post ? estimateReadingTime(post.content) : 0;

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function articleFormatDate(dateString) {
    return formatDate(dateString, language);
  }

  // Not found state
  if (!loading && !post) {
    return (
      <PageTransition>
        <section className="relative bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 text-center">
            <h1 className="text-3xl sm:text-4xl font-heading text-white mb-4">
              {t("notFound", "articleNotFound")}
            </h1>
            <p className="text-navy-200 mb-8">
              {t("notFound", "articleNotFoundDescription")}
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              {t("notFound", "backToNews")}
            </Link>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Article Header */}
      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-8">
          {loading ? (
            <ArticleSkeleton />
          ) : (
            <>
              {/* Breadcrumbs */}
              <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 text-xs font-body text-warm-gray-400 mb-8"
              >
                <Link to="/" className="hover:text-navy-700 transition-colors">
                  {t("news", "breadcrumbHome")}
                </Link>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/news" className="hover:text-navy-700 transition-colors">
                  {t("news", "breadcrumbNews")}
                </Link>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-warm-gray-600 truncate max-w-50">
                  {post.title}
                </span>
              </motion.nav>

              {/* Meta row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 mb-5"
              >
                <span
                  className={`text-[10px] font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                    categoryColors[post.category] || "bg-warm-gray-200 text-warm-gray-700"
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-warm-gray-300">|</span>
                <time className="text-sm font-body text-warm-gray-500">
                  {formatDate(post.published_at, language)}
                </time>
                <span className="text-warm-gray-300">|</span>
                <span className="text-sm font-body text-warm-gray-500">
                  {readingTime} {t("news", "readingTime")}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 leading-[1.15] mb-5"
              >
                {post.title}
              </motion.h1>

              {/* Gold divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="h-0.75 w-10 bg-gold-700 origin-left"
              />
            </>
          )}
        </div>
      </section>

      {/* Featured Image + Content */}
      {!loading && post && (
        <>
          {/* Featured Image */}
          {post.featured_image && (
            <section className="bg-white">
              <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-10">
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full rounded-lg shadow-card object-cover max-h-130"
                />
              </div>
            </section>
          )}

          {/* Article Body */}
          <SectionWrapper bg="white" size="md">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none text-warm-gray-600 leading-relaxed
                  prose-headings:font-heading prose-headings:text-navy-900
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:mb-5
                  prose-a:text-gold-700 prose-a:no-underline hover:prose-a:text-gold-600
                  prose-strong:text-navy-800
                  prose-ul:my-5 prose-li:my-1
                  prose-blockquote:border-gold-400 prose-blockquote:text-navy-700
                  prose-img:rounded-lg prose-img:shadow-card"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </SectionWrapper>

          {/* Share & Back */}
          <div className="bg-white">
            <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-12">
              <div className="border-t border-warm-gray-200 pt-8 flex flex-wrap items-center justify-between gap-4">
                {/* Share buttons */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-body font-semibold tracking-wider uppercase text-warm-gray-400">
                    {t("news", "shareArticle")}
                  </span>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-navy-50 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-navy-50 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-colors"
                    aria-label="Share on X"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Copy Link */}
                  <button
                    onClick={handleCopyLink}
                    className="relative w-9 h-9 rounded-full bg-navy-50 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-colors"
                    aria-label={t("news", "copyLink")}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {copied && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-navy-900 text-white px-2 py-1 rounded whitespace-nowrap">
                        {t("news", "copiedToClipboard")}
                      </span>
                    )}
                  </button>
                </div>

                {/* Back to News */}
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-sm font-body font-semibold text-gold-700 hover:text-gold-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  {t("notFound", "backToNews")}
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <SectionWrapper bg="cream" size="lg">
              <SectionHeading
                eyebrow={t("news", "relatedArticlesEyebrow")}
                title={t("news", "relatedArticlesTitle")}
                subtitle={t("news", "relatedArticlesSubtitle")}
                align="center"
              />
              <StaggerChildren className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    formatDate={articleFormatDate}
                  />
                ))}
              </StaggerChildren>
            </SectionWrapper>
          )}

          {/* Recent Articles */}
          {recentArticles.length > 0 && (
            <SectionWrapper bg="white" size="lg">
              <SectionHeading
                eyebrow={t("news", "recentArticlesEyebrow")}
                title={t("news", "recentArticlesTitle")}
                subtitle={t("news", "recentArticlesSubtitle")}
                align="center"
              />
              <StaggerChildren className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    formatDate={articleFormatDate}
                  />
                ))}
              </StaggerChildren>
            </SectionWrapper>
          )}
        </>
      )}

      <CTASection />
    </PageTransition>
  );
}
