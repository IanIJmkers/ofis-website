import AnimatedSection from "../animation/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";

export default function SequenceBlock() {
  const { t } = useLanguage();

  return (
    <AnimatedSection className="max-w-2xl mx-auto mb-16 text-left">
      <h3 className="text-xl lg:text-2xl font-heading text-navy-900 mb-4">
        {t("servicesOverview", "sequenceTitle")}
      </h3>
      <p className="text-warm-gray-600 leading-relaxed">
        {t("servicesOverview", "sequenceBody")}
      </p>
    </AnimatedSection>
  );
}
