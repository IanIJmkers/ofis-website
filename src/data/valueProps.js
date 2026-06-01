const data = {
  nl: [
    {
      title: "De specialist",
      description:
        "Wij werken uitsluitend met stichtingen en goede doelen. Geen private banking erbij, geen corporate cliënten erbij. Eén doelgroep, één economische logica, één manier van werken.",
      icon: "specialist",
    },
    {
      title: "Tarief op verantwoordelijkheid",
      description:
        "Eén vaste jaarlijkse vergoeding. Geen percentages, geen retrocessies, geen verrassingen. Elke basispunt die u bespaart, gaat naar uw missie.",
      icon: "transparency",
    },
    {
      title: "Institutioneel toezicht",
      description:
        "Vermogensbeheer met institutionele discipline, governance volgens het meer-ogen-principe, administratie met audit-trail. De rigor van een groot kantoor, geleverd aan de schaal van uw stichting.",
      icon: "compliance",
    },
    {
      title: "One-Stop Office",
      description:
        "Vermogensbeheer, administratie en governance onder één dak. Geen versnipperde dienstverleners om te coördineren — wij voeren de regie.",
      icon: "onestop",
    },
    {
      title: "Mijn Orchestra",
      description:
        "Real-time online toegang tot uw volledige financiële positie, voor bestuur, penningmeester en geautoriseerde belanghebbenden. Altijd actueel, altijd inzichtelijk.",
      icon: "oversight",
    },
  ],
  en: [
    {
      title: "The Specialist",
      description:
        "We work exclusively with foundations and charities. No private banking on the side, no corporate clients on the side. One audience, one economic logic, one way of working.",
      icon: "specialist",
    },
    {
      title: "Fee on Responsibility",
      description:
        "One fixed annual fee. No percentages, no retrocessions, no surprises. Every basis point you save reaches your mission.",
      icon: "transparency",
    },
    {
      title: "Institutional Oversight",
      description:
        "Wealth management with institutional discipline, governance under the four-eyes principle, administration with full audit trail. The rigour of a large firm, delivered at the scale of your foundation.",
      icon: "compliance",
    },
    {
      title: "One-Stop Office",
      description:
        "All financial expertise under one roof: wealth management, administration and governance. Seamlessly integrated.",
      icon: "onestop",
    },
    {
      title: "My Orchestra",
      description:
        "Real-time online access to your full financial position, for board, treasurer and authorised stakeholders. Always current, always visible.",
      icon: "oversight",
    },
  ],
};

export const getValueProps = (lang) => data[lang] || data.nl;
export const valueProps = data.nl;
