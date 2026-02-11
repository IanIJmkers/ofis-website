import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { getServices } from "../../data/services";
import { Link } from "react-router";
import { useLanguage } from "../../context/LanguageContext";

const icons = {
  "wealth-management": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  administration: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  governance: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
};

export default function ServicesCards() {
  const { language, t } = useLanguage();
  const services = getServices(language);

  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow={t("home", "servicesEyebrow")}
        title={t("home", "servicesTitle")}
        subtitle={t("home", "servicesSubtitle")}
      />

      <StaggerChildren className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => (
          <motion.div key={service.id} variants={staggerItem}>
            <Link
              to={service.path}
              className="group block h-full"
            >
              <div className="bg-white border border-warm-gray-100 border-t-4 border-t-gold-700 rounded-lg p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="text-gold-700 mb-6">
                  {icons[service.icon]}
                </div>
                <h3 className="text-2xl font-heading text-navy-900 mb-4 group-hover:text-gold-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-warm-gray-500 leading-relaxed grow">
                  {service.shortDescription}
                </p>
                <div className="mt-6 pt-5 border-t border-warm-gray-100">
                  <span className="text-sm font-semibold text-navy-900 tracking-wider uppercase group-hover:text-gold-700 transition-colors">
                    {t("common", "moreInfo")} &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
