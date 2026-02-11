const data = {
  nl: [
    {
      title: "De Specialist",
      description:
        "Wij werken uitsluitend met charitatieve stichtingen, waardoor wij ongeëvenaarde sectorexpertise en diep begrip van uw unieke behoeften hebben.",
      icon: "specialist",
    },
    {
      title: "Transparante Tarieven",
      description:
        "Eén vast jaarlijks tarief. Geen vermogensgebaseerde kosten, geen verborgen kosten, geen verrassingen. U weet altijd precies wat u betaalt.",
      icon: "transparency",
    },
    {
      title: "Altijd Compliant",
      description:
        "Gemoedsrust in de wetenschap dat u aan iedere wettelijke vereiste voldoet. Wij blijven op de hoogte van alle wet- en regelgeving zodat u dat niet hoeft te doen.",
      icon: "compliance",
    },
    {
      title: "One-Stop-Shop",
      description:
        "Alle financiële expertise onder één dak: vermogensbeheer, administratie en governance. Naadloos geïntegreerd.",
      icon: "onestop",
    },
    {
      title: "24/7 Inzicht",
      description:
        "Real-time online toegang tot al uw financiële gegevens via het Mijn Orchestra dashboard. Altijd en overal.",
      icon: "oversight",
    },
  ],
  en: [
    {
      title: "The Specialist",
      description:
        "We work exclusively with charitable foundations, giving us unparalleled sector expertise and a deep understanding of your unique needs.",
      icon: "specialist",
    },
    {
      title: "Transparent Fees",
      description:
        "One fixed annual fee. No asset-based charges, no hidden costs, no surprises. You always know exactly what you pay.",
      icon: "transparency",
    },
    {
      title: "Always Compliant",
      description:
        "Peace of mind knowing you meet every regulatory requirement. We stay on top of all legislation so you don't have to.",
      icon: "compliance",
    },
    {
      title: "One-Stop Shop",
      description:
        "All financial expertise under one roof: wealth management, administration and governance. Seamlessly integrated.",
      icon: "onestop",
    },
    {
      title: "24/7 Insight",
      description:
        "Real-time online access to all your financial data via the My Orchestra dashboard. Anytime, anywhere.",
      icon: "oversight",
    },
  ],
};

export const getValueProps = (lang) => data[lang] || data.nl;
export const valueProps = data.nl;
