const data = {
  nl: [
    {
      number: 1,
      title: "De Nulmeting",
      description:
        "Wij analyseren grondig uw huidige financiële administratie, donatieproces, kosten en governance-structuren om uw uitgangspositie in kaart te brengen.",
    },
    {
      number: 2,
      title: "De Offerte",
      description:
        "Op basis van onze bevindingen ontvangt u een offerte op maat met een vast tarief. U weet precies wat u krijgt en wat het kost — geen verrassingen.",
    },
    {
      number: 3,
      title: "De Onboarding",
      description:
        "Wij begeleiden u stap voor stap door het gehele transitieproces, zodat de overdracht soepel verloopt met minimale verstoring van uw organisatie.",
    },
    {
      number: 4,
      title: "De Zekerheid",
      description:
        "U ontvangt absolute zekerheid dat uw administratie en vermogensbeheer goed zijn ingericht en volledig voldoen aan alle regelgeving.",
    },
    {
      number: 5,
      title: "Het Inzicht",
      description:
        "Krijg 24/7 toegang tot uw volledige financiële situatie via het Mijn Orchestra dashboard. Volledige transparantie, altijd.",
    },
  ],
  en: [
    {
      number: 1,
      title: "The Baseline Assessment",
      description:
        "We thoroughly analyse your current financial administration, grant processes, costs and governance structures to map your starting position.",
    },
    {
      number: 2,
      title: "The Proposal",
      description:
        "Based on our findings, you receive a tailored proposal with a fixed fee. You know exactly what you get and what it costs — no surprises.",
    },
    {
      number: 3,
      title: "The Onboarding",
      description:
        "We guide you step by step through the entire transition process, ensuring a smooth handover with minimal disruption to your organisation.",
    },
    {
      number: 4,
      title: "The Assurance",
      description:
        "You receive absolute assurance that your administration and wealth management are properly set up and fully comply with all regulations.",
    },
    {
      number: 5,
      title: "The Insight",
      description:
        "Get 24/7 access to your complete financial situation via the My Orchestra dashboard. Full transparency, always.",
    },
  ],
};

export const getProcessSteps = (lang) => data[lang] || data.nl;
export const processSteps = data.nl;
