import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import CTASection from "../components/sections/CTASection";
import { faqs } from "../data/clients";

const categoryIcons = {
  Services: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  Fees: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
    </svg>
  ),
  Onboarding: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
  ),
  Compliance: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

export default function AboutFAQs() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              Veelgestelde Vragen
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              Veelgestelde Vragen
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Vind duidelijke antwoorden op veelgestelde vragen over onze
              diensten, tariefstructuur, onboardingproces en regelgevend kader.
              Heeft u aanvullende vragen, dan staan wij altijd klaar om
              persoonlijk met u te spreken.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Categories */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Uw Vragen Beantwoord"
          title="Alles Wat U Moet Weten"
          subtitle="Wij geloven in volledige transparantie. Bekijk onze veelgestelde vragen per categorie hieronder."
          align="center"
        />

        <div className="mt-16 space-y-16">
          {faqs.map((category, catIndex) => (
            <AnimatedSection key={category.category} delay={catIndex * 0.1}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center text-gold-400">
                  {categoryIcons[category.category] || categoryIcons.Services}
                </div>
                <div>
                  <h3 className="text-2xl font-heading text-navy-900">
                    {category.category}
                  </h3>
                  <p className="text-sm text-warm-gray-500 mt-0.5">
                    {category.questions.length} vragen
                  </p>
                </div>
              </div>

              {/* Accordion */}
              <Accordion items={category.questions} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Still Have Questions */}
      <SectionWrapper bg="cream" size="md">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
            Nog vragen?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
            Wij Helpen U Graag
          </h2>
          <div className="mt-4 h-0.75 w-10 mx-auto bg-gold-700" />
          <p className="mt-6 text-lg text-warm-gray-500 leading-relaxed">
            Elke stichting is uniek, en wij begrijpen dat algemene antwoorden
            mogelijk niet op uw specifieke situatie van toepassing zijn. Ons
            team staat klaar voor een persoonlijk, vrijblijvend gesprek om de
            behoeften van uw stichting te bespreken.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 text-navy-900">
              <svg
                className="w-5 h-5 text-gold-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="font-body text-sm font-medium">
                +31 (0)70 205 11 81
              </span>
            </div>
            <div className="flex items-center gap-3 text-navy-900">
              <svg
                className="w-5 h-5 text-gold-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="font-body text-sm font-medium">
                info@orchestra-charityoffice.com
              </span>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection
        title="Klaar voor een persoonlijk gesprek?"
        subtitle="Plan een consultatie met een van onze Charity Office specialisten."
      />
    </PageTransition>
  );
}
