const data = {
  nl: [
    { label: "Home", path: "/" },
    {
      label: "Diensten",
      path: "/services",
      children: [
        {
          label: "Vermogensbeheer",
          path: "/services/wealth-management",
          description: "Onafhankelijk vermogensbeheer tegen vaste tarieven",
        },
        {
          label: "Administratie",
          path: "/services/administration",
          description: "Financiële verwerking en donatiebeheer",
        },
        {
          label: "Governance",
          path: "/services/governance",
          description: "Compliance, advies en digitaal toezicht",
        },
      ],
    },
    {
      label: "Klanten",
      path: "/clients",
      children: [
        {
          label: "Vermogensfondsen",
          path: "/clients/endowment-funds",
          description: "Vermogensfondsen en familiestichtingen",
        },
        {
          label: "Goede Doelen",
          path: "/clients/charities",
          description: "Fondsenwervende en charitatieve instellingen",
        },
        {
          label: "Klantverhalen",
          path: "/clients/interviews",
          description: "Onze klanten aan het woord",
        },
      ],
    },
    {
      label: "Over Ons",
      path: "/about",
      children: [
        {
          label: "Ons Team",
          path: "/about/team",
          description: "Maak kennis met de mensen achter Orchestra",
        },
        {
          label: "Methodiek",
          path: "/about/methodology",
          description: "Onze vijf-stappen aanpak",
        },
        {
          label: "Veelgestelde Vragen",
          path: "/about/faqs",
          description: "Antwoorden op veelgestelde vragen",
        },
        {
          label: "Werken bij",
          path: "/about/careers",
          description: "Sluit je aan bij ons team",
        },
      ],
    },
    { label: "Nieuws", path: "/news" },
    { label: "Contact", path: "/contact" },
  ],
  en: [
    { label: "Home", path: "/" },
    {
      label: "Services",
      path: "/services",
      children: [
        {
          label: "Wealth Management",
          path: "/services/wealth-management",
          description: "Independent wealth management at fixed fees",
        },
        {
          label: "Administration",
          path: "/services/administration",
          description: "Financial processing and grant management",
        },
        {
          label: "Governance",
          path: "/services/governance",
          description: "Compliance, advisory and digital oversight",
        },
      ],
    },
    {
      label: "Clients",
      path: "/clients",
      children: [
        {
          label: "Endowment Funds",
          path: "/clients/endowment-funds",
          description: "Endowment funds and family foundations",
        },
        {
          label: "Charities",
          path: "/clients/charities",
          description: "Fundraising and charitable organisations",
        },
        {
          label: "Client Stories",
          path: "/clients/interviews",
          description: "Our clients share their experience",
        },
      ],
    },
    {
      label: "About Us",
      path: "/about",
      children: [
        {
          label: "Our Team",
          path: "/about/team",
          description: "Meet the people behind Orchestra",
        },
        {
          label: "Methodology",
          path: "/about/methodology",
          description: "Our five-step approach",
        },
        {
          label: "FAQs",
          path: "/about/faqs",
          description: "Answers to frequently asked questions",
        },
        {
          label: "Careers",
          path: "/about/careers",
          description: "Join our team",
        },
      ],
    },
    { label: "News", path: "/news" },
    { label: "Contact", path: "/contact" },
  ],
};

export const getNavigation = (lang) => data[lang] || data.nl;
export const navigation = data.nl;
