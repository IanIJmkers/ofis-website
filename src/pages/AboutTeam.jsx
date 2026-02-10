import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren, {
  staggerItem,
} from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/sections/CTASection";
import { team } from "../data/team";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .join("")
    .toUpperCase();
}

export default function AboutTeam() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-800)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
              Ons Team
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight">
              De Mensen Achter Orchestra
            </h1>
            <div className="mt-6 h-0.75 w-12 bg-gold-700" />
            <p className="mt-6 text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Ons team combineert decennia aan ervaring in financiele
              dienstverlening met een oprechte passie voor de goede doelen
              sector. Elk lid brengt specialistische expertise en een
              persoonlijke toewijding aan het succes van onze klanten.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Grid */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Maak Kennis met de Specialisten"
          title="Toegewijde Professionals"
          subtitle="Een team van negen specialisten, die elk unieke expertise inbrengen om de hoogste standaard van dienstverlening te garanderen voor elke stichting die wij bedienen."
          align="center"
        />
        <StaggerChildren className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="bg-white border border-warm-gray-100 rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              {/* Avatar with initials */}
              <div className="w-24 h-24 rounded-full bg-navy-900 flex items-center justify-center mx-auto group-hover:bg-navy-800 transition-colors duration-300">
                <span className="text-2xl font-heading text-gold-400">
                  {getInitials(member.name)}
                </span>
              </div>

              {/* Name & Role */}
              <h3 className="mt-6 text-xl font-heading text-navy-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-body font-semibold text-gold-700 uppercase tracking-wider">
                {member.role}
              </p>

              {/* Divider */}
              <div className="mt-6 h-px bg-warm-gray-100" />

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 text-sm text-warm-gray-500 hover:text-navy-900 transition-colors"
                >
                  <svg
                    className="w-4 h-4 shrink-0"
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
                  <span className="truncate">{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 text-sm text-warm-gray-500 hover:text-navy-900 transition-colors"
                >
                  <svg
                    className="w-4 h-4 shrink-0"
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
                  <span>{member.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Culture Statement */}
      <SectionWrapper bg="cream" size="md">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
            Onze Cultuur
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading text-navy-900">
            Verenigd door een Doel
          </h2>
          <div className="mt-4 h-0.75 w-10 mx-auto bg-gold-700" />
          <p className="mt-6 text-lg text-warm-gray-500 leading-relaxed">
            Wat ons team verenigt is een gedeelde overtuiging dat goede doelen
            stichtingen dezelfde kwaliteit van financiele expertise verdienen
            als de grootste commerciele instellingen. Wij brengen
            institutioneel professionalisme met een persoonlijke, menselijke
            aanpak.
          </p>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection
        title="Wilt u bij ons team komen?"
        subtitle="Wij zijn altijd op zoek naar getalenteerde professionals die onze passie voor de goede doelen sector delen."
      />
    </PageTransition>
  );
}
