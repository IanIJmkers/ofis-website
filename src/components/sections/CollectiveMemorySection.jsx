import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { useLanguage } from "../../context/LanguageContext";

export default function CollectiveMemorySection() {
  const { t } = useLanguage();

  const cards = [
    { titleKey: "memoryCard1Title", bodyKey: "memoryCard1Body" },
    { titleKey: "memoryCard2Title", bodyKey: "memoryCard2Body" },
    { titleKey: "memoryCard3Title", bodyKey: "memoryCard3Body" },
    { titleKey: "memoryCard4Title", bodyKey: "memoryCard4Body" },
  ];

  return (
    <SectionWrapper bg="cream" size="lg">
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
          {t("home", "memoryEyebrow")}
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 leading-tight">
          {t("home", "memoryTitle")}
        </h2>
        <div className="mt-4 h-0.75 w-10 mx-auto bg-gold-700" />
        <p className="mt-6 text-lg text-warm-gray-600 leading-relaxed">
          {t("home", "memoryBody")}
        </p>
      </AnimatedSection>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {cards.map((card) => (
          <motion.div
            key={card.titleKey}
            variants={staggerItem}
            className="bg-white border border-warm-gray-100 rounded-lg p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <h3 className="text-lg lg:text-xl font-heading text-navy-900 mb-4">
              {t("home", card.titleKey)}
            </h3>
            <p className="text-sm text-warm-gray-600 leading-relaxed">
              {t("home", card.bodyKey)}
            </p>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
