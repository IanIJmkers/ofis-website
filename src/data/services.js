const data = {
  nl: [
    {
      id: "wealth-management",
      title: "Vermogensbeheer",
      shortDescription:
        "Het vermogen van uw stichting beheerd zoals pensioenfondsen en endowments dat doen: institutionele discipline, vaste vergoeding, regie over kosten.",
      path: "/services/wealth-management",
      icon: "wealth-management",
      features: [
        {
          title: "Institutioneel proces",
          description:
            "Portefeuilles ontworpen tegen de verplichtingen van uw stichting, niet tegen een externe benchmark. Pensioenfonds-grade discipline op stichting-schaal.",
        },
        {
          title: "Risicobeheer",
          description:
            "Risicokaders, beleggingscommissie, vier-ogen-principe op iedere transactie. Periodieke risicorapportage aan het bestuur — niet alleen wanneer er iets gebeurt.",
        },
        {
          title: "Kosten als structurele variabele",
          description:
            "Vaste jaarlijkse vergoeding. Geen retrocessies. Transparante kostenrapportage op iedere positie. Elke basispunt die u bespaart, kan naar uw missie.",
        },
        {
          title: "Naleving regelgeving",
          description:
            "Volledige naleving van DNB, AFM en alle relevante regelgevingskaders. Wat de toezichthouder vereist, leveren wij standaard.",
        },
      ],
    },
    {
      id: "administration",
      title: "Administratie",
      shortDescription:
        "Het collectieve geheugen van uw stichting, geleverd met institutionele precisie. Boekhouding, betalingen, subsidies, jaarrekeningen — onder één dak.",
      path: "/services/administration",
      icon: "administration",
      features: [
        {
          title: "Financiële verwerking",
          description:
            "Volledige boekhouding, betalingsverwerking en beheer van financiële administratie met audit-trail per transactie.",
        },
        {
          title: "Subsidie- en donatieadministratie",
          description:
            "Volledig beheer van subsidie-aanvragen, toewijzingen, uitkeringen en impactrapportage. Donaties geadministreerd, gerapporteerd en compliant.",
        },
        {
          title: "Compliance-rapportage",
          description:
            "Jaarrekeningen, belastingaangiftes, ANBI- en CBF-rapportages — tijdig, accuraat, en in lijn met sectornormen.",
        },
        {
          title: "Collectief geheugen",
          description:
            "MyOrchestra bewaart alle financiële gegevens, bestuursnotulen, autorisaties en documenten op één plek. Wat in 2024 wordt besloten, is in 2031 nog terug te vinden.",
        },
      ],
    },
    {
      id: "governance",
      title: "Governance",
      shortDescription:
        "Fiduciaire discipline voor het bestuur dat zijn werk serieus neemt. Meer-ogen-principe, beleidskaders, autorisatielagen — als organisatieprincipe, niet als project.",
      path: "/services/governance",
      icon: "governance",
      features: [
        {
          title: "Adviesdiensten",
          description:
            "Een onafhankelijke sparringpartner voor het bestuur bij elke bestuurlijke keuze.",
        },
        {
          title: "Jaarrapportage",
          description:
            "Een jaarverslag dat klaarligt voor uw accountant, zonder last-minute werk.",
        },
        {
          title: "Risicobeheer",
          description:
            "Risico's in beeld voordat ze problemen worden.",
        },
        {
          title: "Documentbeheer",
          description:
            "Alle bestuursstukken veilig op één plek.",
        },
      ],
    },
  ],
  en: [
    {
      id: "wealth-management",
      title: "Wealth Management",
      shortDescription:
        "Your foundation's wealth managed the way pension funds and endowments do: institutional discipline, fixed fee, oversight of costs.",
      path: "/services/wealth-management",
      icon: "wealth-management",
      features: [
        {
          title: "Institutional Process",
          description:
            "Portfolios designed against the liabilities of your foundation, not against an external benchmark. Pension-fund-grade discipline at foundation scale.",
        },
        {
          title: "Risk Management",
          description:
            "Risk frameworks, investment committee, four-eyes principle on every transaction. Periodic risk reporting to the board — not only when something happens.",
        },
        {
          title: "Costs as a Structural Variable",
          description:
            "Fixed annual fee. No retrocessions. Transparent cost reporting on every position. Every basis point you save can reach your mission.",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Full compliance with DNB, AFM and all relevant regulatory frameworks. What the regulator requires, we deliver by default.",
        },
      ],
    },
    {
      id: "administration",
      title: "Administration",
      shortDescription:
        "The collective memory of your foundation, delivered with institutional precision. Bookkeeping, payments, grants, annual accounts — under one roof.",
      path: "/services/administration",
      icon: "administration",
      features: [
        {
          title: "Financial Processing",
          description:
            "Complete bookkeeping, payment processing and financial administration management with audit trail per transaction.",
        },
        {
          title: "Grant and Donation Administration",
          description:
            "Full management of grant applications, allocations, disbursements and impact reporting. Donations administered, reported and compliant.",
        },
        {
          title: "Compliance Reporting",
          description:
            "Annual accounts, tax returns, ANBI and CBF reporting — timely, accurate, and aligned with sector standards.",
        },
        {
          title: "Collective Memory",
          description:
            "MyOrchestra preserves all financial data, board minutes, authorisations and documents in one place. What is decided in 2024 is still findable in 2031.",
        },
      ],
    },
    {
      id: "governance",
      title: "Governance",
      shortDescription:
        "Fiduciary discipline for boards that take their work seriously. Four-eyes principle, policy frameworks, authorisation layers — as an organising principle, not a project.",
      path: "/services/governance",
      icon: "governance",
      features: [
        {
          title: "Advisory Services",
          description:
            "An independent sparring partner for the board on every governance decision.",
        },
        {
          title: "Annual Reporting",
          description:
            "An annual report ready for your auditor, without last-minute work.",
        },
        {
          title: "Risk Management",
          description:
            "Risks in view before they become problems.",
        },
        {
          title: "Document Management",
          description:
            "All board documents securely in one place.",
        },
      ],
    },
  ],
};

export const getServices = (lang) => data[lang] || data.nl;
export const services = data.nl;
