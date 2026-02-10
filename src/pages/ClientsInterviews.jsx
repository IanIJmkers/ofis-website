import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren, {
  staggerItem,
} from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/sections/CTASection";
import { testimonials } from "../data/testimonials";

export default function ClientsInterviews() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              Klantverhalen
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              Stemmen van Vertrouwen
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Hoor rechtstreeks van de stichtingen en instellingen die Orchestra
              als hun vertrouwde financiele partner hebben gekozen. Hun
              ervaringen spreken voor de kwaliteit en toewijding die wij in
              elke relatie brengen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Full-Width Testimonial Cards */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="In Hun Eigen Woorden"
          title="Klantervaringen"
          subtitle="Elk partnerschap met Orchestra is gebouwd op vertrouwen, transparantie en een gedeelde toewijding aan excellentie."
          align="center"
        />
        <StaggerChildren className="mt-16 space-y-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative bg-cream border border-warm-gray-100 rounded-lg p-10 lg:p-14 shadow-card"
            >
              {/* Decorative accent line */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gold-700 rounded-l-lg" />

              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-14">
                {/* Quote icon */}
                <div className="shrink-0 mb-6 lg:mb-0">
                  <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-gold-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="grow">
                  <blockquote className="text-xl lg:text-2xl font-heading text-navy-900 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center">
                      <span className="text-sm font-heading text-gold-400">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-navy-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-warm-gray-500 mt-0.5">
                        {testimonial.organization}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Trust Banner */}
      <SectionWrapper bg="cream" size="md">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
            Een Bewezen Track Record
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
            Duurzame Partnerschappen Bouwen
          </h2>
          <div className="mt-4 h-0.75 w-10 mx-auto bg-gold-700" />
          <p className="mt-6 text-lg text-warm-gray-500 leading-relaxed">
            Onze klantrelaties beslaan decennia, geen jaren. Wij geloven dat
            de sterkste partnerschappen gebouwd zijn op wederzijds vertrouwen,
            volledige transparantie en een oprecht begrip van de unieke missie
            en ambities van elke stichting.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { value: "20+", label: "Jaar Dienstverlening" },
              { value: "21+", label: "Stichtingen Bediend" },
              { value: "100%", label: "Klantretentie" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl lg:text-4xl font-heading text-navy-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-warm-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection
        title="Ervaar het Orchestra verschil"
        subtitle="Sluit u aan bij de stichtingen die Orchestra vertrouwen met hun financiele toekomst."
      />
    </PageTransition>
  );
}
