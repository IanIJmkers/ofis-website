export const navigation = [
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
];
