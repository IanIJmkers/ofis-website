const data = {
  nl: [
    {
      number: 1,
      title: "De nulmeting",
      description:
        "Wij beoordelen grondig uw huidige financiële organisatie: beleggingen, administratie, governance, kostenpositie, compliance. Resultaat is een schriftelijke nulmeting — niet een verkoopgesprek.",
    },
    {
      number: 2,
      title: "De offerte",
      description:
        "Op basis van de nulmeting ontvangt u een schriftelijke offerte met een vast jaarlijks tarief. Wat erin zit, wat niet, en waarom. Geen meerwerkclausules, geen open einden.",
    },
    {
      number: 3,
      title: "De onboarding",
      description:
        "Wij voeren de transitie vanuit uw huidige dienstverleners. Beleggingen worden overgeboekt, administratie wordt overgedragen, governance-documenten gemigreerd naar Mijn Orchestra. Bestuur ervaart minimale verstoring.",
    },
    {
      number: 4,
      title: "De zekerheid",
      description:
        "Na onboarding ontvangt u een formele bevestiging dat alle financiële, fiscale, juridische en compliance-aspecten op orde zijn. Vanaf dat moment werken wij doorlopend onder vier-ogen-principe.",
    },
    {
      number: 5,
      title: "Het inzicht",
      description:
        "Mijn Orchestra geeft het hele bestuur 24/7 real-time toegang tot portefeuille, administratie, governance-documenten en rapportages. Geautoriseerde toegang voor bestuursleden, penningmeester, accountant.",
    },
  ],
  en: [
    {
      number: 1,
      title: "The Baseline Assessment",
      description:
        "We thoroughly assess your current financial organisation: investments, administration, governance, cost position, compliance. The output is a written baseline assessment — not a sales pitch.",
    },
    {
      number: 2,
      title: "The Proposal",
      description:
        "Based on the baseline you receive a written proposal with a fixed annual fee. What is included, what is not, and why. No additional-work clauses, no open ends.",
    },
    {
      number: 3,
      title: "The Onboarding",
      description:
        "We execute the transition from your current providers. Investments are transferred, administration handed over, governance documents migrated to My Orchestra. The board experiences minimal disruption.",
    },
    {
      number: 4,
      title: "The Assurance",
      description:
        "After onboarding you receive formal confirmation that all financial, fiscal, legal and compliance aspects are in order. From that point on we operate continuously under the four-eyes principle.",
    },
    {
      number: 5,
      title: "The Insight",
      description:
        "My Orchestra gives the whole board 24/7 real-time access to portfolio, administration, governance documents and reports. Authorised access for board members, treasurer, and accountant.",
    },
  ],
};

export const getProcessSteps = (lang) => data[lang] || data.nl;
export const processSteps = data.nl;
