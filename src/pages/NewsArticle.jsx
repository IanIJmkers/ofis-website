import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import { fetchPostBySlug } from "../lib/blog";

const categoryColors = {
  Regelgeving: "bg-navy-100 text-navy-800",
  Vermogensbeheer: "bg-gold-100 text-gold-800",
  Governance: "bg-navy-100 text-navy-700",
  Sector: "bg-warm-gray-200 text-warm-gray-700",
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-10 w-3/4 bg-navy-700/30 rounded mb-4" />
      <div className="h-5 w-48 bg-navy-700/20 rounded" />
    </div>
  );
}

export default function NewsArticle() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostBySlug(slug).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  if (!loading && !post) {
    return (
      <PageTransition>
        <section className="relative bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 text-center">
            <h1 className="text-4xl font-heading text-white mb-4">Artikel niet gevonden</h1>
            <p className="text-navy-200 mb-8">
              Dit artikel bestaat niet of is niet meer beschikbaar.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-body font-semibold text-sm tracking-wider uppercase transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Terug naar Nieuws
            </Link>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
        {post?.featured_image && (
          <div className="absolute inset-0">
            <img
              src={post.featured_image}
              alt=""
              className="w-full h-full object-cover opacity-15"
            />
          </div>
        )}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-navy-300 hover:text-gold-400 font-body text-sm tracking-wide transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Terug naar Nieuws
            </Link>
          </motion.div>

          {loading ? (
            <ArticleSkeleton />
          ) : (
            <>
              {/* Category + date */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-5"
              >
                <span
                  className={`text-[10px] font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                    categoryColors[post.category] || "bg-warm-gray-200 text-warm-gray-700"
                  }`}
                >
                  {post.category}
                </span>
                <time className="text-sm font-body text-navy-300 tracking-wide">
                  {formatDate(post.published_at)}
                </time>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white leading-[1.15] max-w-4xl"
              >
                {post.title}
              </motion.h1>
            </>
          )}
        </div>
      </section>

      {/* Article content */}
      {!loading && post && (
        <SectionWrapper bg="white" size="lg">
          <AnimatedSection direction="up" delay={0.1}>
            <article className="max-w-3xl mx-auto">
              {post.featured_image && (
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full rounded-lg shadow-card mb-10 aspect-video object-cover"
                />
              )}
              <div
                className="prose prose-lg max-w-none text-warm-gray-600 leading-relaxed
                  prose-headings:font-heading prose-headings:text-navy-900
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:mb-5
                  prose-a:text-gold-700 prose-a:no-underline hover:prose-a:text-gold-600
                  prose-strong:text-navy-800
                  prose-ul:my-5 prose-li:my-1
                  prose-blockquote:border-gold-400 prose-blockquote:text-navy-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </AnimatedSection>
        </SectionWrapper>
      )}
    </PageTransition>
  );
}
