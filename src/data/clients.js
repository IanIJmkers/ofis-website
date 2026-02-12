import amsterdamUmcLogo from "../assets/images/clients/amsterdam-umc.jpg";
import fondsDblLogo from "../assets/images/clients/fonds-dbl.png";
import erasmusTrustfondsLogo from "../assets/images/clients/erasmus-trustfonds.png";
import jumpstartLogo from "../assets/images/clients/jumpstart.png";
import vlinderkindLogo from "../assets/images/clients/vlinderkind.png";
import alsLogo from "../assets/images/clients/als.png";
import dyslexiefondsLogo from "../assets/images/clients/dyslexiefonds.png";
import feyenoordFoundationLogo from "../assets/images/clients/feyenoord-foundation.png";
import stokroosLogo from "../assets/images/clients/stokroos.png";
import emmaLogo from "../assets/images/clients/emma.png";
import impactMattersLogo from "../assets/images/clients/impact-matters.png";
import finLogo from "../assets/images/clients/fin.jpg";
import papagenoLogo from "../assets/images/clients/papageno.jpg";
import tromboseStichtingLogo from "../assets/images/clients/trombose-stichting.jpg";
import erasmusMcFoundationLogo from "../assets/images/clients/erasmus-mc-foundation.jpg";
import kasteelDuivenvoordeLogo from "../assets/images/clients/kasteel-duivenvoorde.jpg";
import buddyNetwerkLogo from "../assets/images/clients/buddy-netwerk.png";
import boschuysenLogo from "../assets/images/clients/boschuysen.png";
import fundatieVanRenswoudeLogo from "../assets/images/clients/fundatie-van-renswoude.png";
import gphVerhagenLogo from "../assets/images/clients/gph-verhagen.png";
import zabawasLogo from "../assets/images/clients/zabawas.png";

const clientTypesData = {
  nl: [
    {
      id: "endowment-funds",
      title: "Vermogensfondsen",
      description:
        "Wij bedienen vermogensfondsen, familiestichtingen en vermogensfondsen van iedere omvang. Of uw stichting nu een ANBI-status heeft of niet, wij bieden hetzelfde uitgebreide serviceniveau.",
      path: "/clients/endowment-funds",
    },
    {
      id: "charities",
      title: "Goede Doelen",
      description:
        "Fondsenwervende organisaties, charitatieve instellingen met of zonder CBF-erkenning — wij begrijpen de unieke vereisten van elk en stemmen onze dienstverlening daarop af.",
      path: "/clients/charities",
    },
  ],
  en: [
    {
      id: "endowment-funds",
      title: "Endowment Funds",
      description:
        "We serve endowment funds, family foundations and endowments of every size. Whether your foundation has ANBI status or not, we provide the same comprehensive level of service.",
      path: "/clients/endowment-funds",
    },
    {
      id: "charities",
      title: "Charities",
      description:
        "Fundraising organisations, charitable institutions with or without CBF accreditation — we understand the unique requirements of each and tailor our services accordingly.",
      path: "/clients/charities",
    },
  ],
};

export const clientOrganizations = [
  // Charities (Goede Doelen)
  { id: "amsterdam-umc", name: "Amsterdam UMC", logo: amsterdamUmcLogo, url: "https://www.steunamsterdamumc.nl/stichting-amc-foundation", type: "charity" },
  { id: "vlinderkind", name: "Vlinderkind", logo: vlinderkindLogo, url: "https://www.vlinderkind.nl/index.php/nl/", type: "charity" },
  { id: "stichting-als", name: "Stichting ALS", logo: alsLogo, url: "https://www.als.nl", type: "charity" },
  { id: "feyenoord-foundation", name: "Feyenoord Foundation", logo: feyenoordFoundationLogo, url: "https://www.feyenoord.nl/maatschappelijk/over-ons/feyenoord-foundation", type: "charity" },
  { id: "steun-emma", name: "Steun Emma", logo: emmaLogo, url: "https://www.steunemma.nl", type: "charity" },
  { id: "impact-matters", name: "Impact Matters", logo: impactMattersLogo, url: "https://www.impactmatters.nl", type: "charity" },
  { id: "papageno", name: "Papageno", logo: papagenoLogo, url: "https://www.papageno.nl/", type: "charity" },
  { id: "trombose-stichting", name: "Trombose Stichting", logo: tromboseStichtingLogo, url: "https://www.trombosestichting.nl/", type: "charity" },
  { id: "erasmus-mc-foundation", name: "Erasmus MC Foundation", logo: erasmusMcFoundationLogo, url: "https://erasmusmcfoundation.nl/", type: "charity" },
  { id: "buddy-netwerk", name: "Buddy Netwerk", logo: buddyNetwerkLogo, url: "https://www.buddynetwerk.nl/", type: "charity" },
  // Endowment Funds (Vermogensfondsen)
  { id: "fonds-dbl", name: "Fonds DBL", logo: fondsDblLogo, url: "https://www.fondsdbl.nl", type: "endowment" },
  { id: "erasmus-trustfonds", name: "Stichting Erasmus Trustfonds", logo: erasmusTrustfondsLogo, url: "https://trustfonds.nl", type: "endowment" },
  { id: "jumpstart-jr", name: "Jumpstart Jr", logo: jumpstartLogo, url: "https://jumpstartjr.org", type: "endowment" },
  { id: "dyslexiefonds", name: "Dyslexiefonds", logo: dyslexiefondsLogo, url: "https://dyslexie.nl", type: "endowment" },
  { id: "stokroos", name: "Stichting Stokroos", logo: stokroosLogo, url: "https://stokroos.nl", type: "endowment" },
  { id: "fin", name: "Fondsen in Nederland", logo: finLogo, url: "https://fondseninnederland.nl", type: "endowment" },
  { id: "kasteel-duivenvoorde", name: "Kasteel Duivenvoorde", logo: kasteelDuivenvoordeLogo, url: "https://www.kasteelduivenvoorde.nl/", type: "endowment" },
  { id: "boschuysen", name: "Stichting Boschuysen", logo: boschuysenLogo, url: "https://boschuysen.nl/", type: "endowment" },
  { id: "fundatie-van-renswoude", name: "Fundatie van Renswoude", logo: fundatieVanRenswoudeLogo, url: "https://www.fundatievanrenswoude.nl", type: "endowment" },
  { id: "gph-verhagen", name: "G.Ph. Verhagen", logo: gphVerhagenLogo, url: "http://www.verhagenstichting.nl/", type: "endowment" },
  { id: "zabawas", name: "Stichting Zabawas", logo: zabawasLogo, url: "https://www.zabawas.nl/", type: "endowment" },
];

const faqsData = {
  nl: [
    {
      category: "Diensten",
      questions: [
        {
          question: "Welke diensten biedt Orchestra aan?",
          answer:
            "Orchestra biedt drie kerndiensten voor charitatieve stichtingen: Vermogensbeheer (beleggingstoezicht tegen vaste tarieven), Administratie (financiële verwerking, donatiebeheer, compliance-rapportage), en Governance (adviesdiensten, risicobeheer, digitaal toezicht). Alle diensten zijn geïntegreerd en kunnen worden afgestemd op uw specifieke behoeften.",
        },
        {
          question: "Kunnen we slechts één van uw diensten afnemen?",
          answer:
            "Absoluut. Hoewel veel van onze klanten profiteren van ons volledige geïntegreerde dienstenpakket, bent u welkom om ons voor een individuele dienst in te schakelen. Wij bepalen samen met u welke diensten het beste aansluiten bij de behoeften van uw stichting.",
        },
        {
          question: "Wat is het Mijn Orchestra dashboard?",
          answer:
            "Mijn Orchestra is ons eigen online platform dat u 24/7 real-time toegang geeft tot de financiële gegevens, documenten en rapportages van uw stichting. Het biedt volledige transparantie en stelt bestuursleden in staat om de positie van de stichting overal te monitoren.",
        },
      ],
    },
    {
      category: "Tarieven",
      questions: [
        {
          question: "Hoe zijn uw tarieven opgebouwd?",
          answer:
            "Wij hanteren een transparant, vast jaarlijks tarief op basis van de omvang van de dienstverlening die u nodig heeft — nooit een percentage van het beheerd vermogen. Dit betekent dat uw kosten niet stijgen naarmate uw stichting groeit, en u weet altijd precies wat u betaalt.",
        },
        {
          question: "Zijn er verborgen kosten?",
          answer:
            "Nee. Onze offerte dekt alle overeengekomen diensten. Er zijn geen verborgen kosten, transactiekosten of onverwachte toeslagen. Wij geloven in volledige transparantie.",
        },
      ],
    },
    {
      category: "Onboarding",
      questions: [
        {
          question: "Hoe lang duurt het onboardingproces?",
          answer:
            "Het onboardingproces duurt doorgaans 4 tot 8 weken, afhankelijk van de complexiteit van de huidige inrichting van uw stichting. Wij begeleiden u bij iedere stap om een soepele overgang te garanderen met minimale verstoring.",
        },
        {
          question: "Wat heeft u van ons nodig om te starten?",
          answer:
            "Wij beginnen met een nulmeting van uw huidige situatie. Wij hebben toegang nodig tot uw huidige financiële administratie, beleggingsportefeuille, governance-documenten en relevante contracten. Ons team begeleidt u precies bij wat er nodig is.",
        },
      ],
    },
    {
      category: "Compliance",
      questions: [
        {
          question: "Welke toezichthouders houden toezicht op Orchestra?",
          answer:
            "Orchestra staat onder toezicht van De Nederlandsche Bank (DNB) voor prudentieel toezicht, de Autoriteit Financiële Markten (AFM) voor gedragstoezicht, en wij voldoen aan de Autoriteit Persoonsgegevens (AP) voor gegevensbescherming. Wij zijn tevens geregistreerd bij DSI en KiFid.",
        },
        {
          question: "Hoe zorgt u ervoor dat onze stichting compliant blijft?",
          answer:
            "Wij monitoren voortdurend wijzigingen in wet- en regelgeving. Ons compliance-team zorgt ervoor dat alle rapportages, governance-structuren en financiële processen voldoen aan de actuele vereisten. Wij informeren u proactief over eventuele wijzigingen die uw stichting raken.",
        },
      ],
    },
  ],
  en: [
    {
      category: "Services",
      questions: [
        {
          question: "What services does Orchestra offer?",
          answer:
            "Orchestra offers three core services for charitable foundations: Wealth Management (investment oversight at fixed fees), Administration (financial processing, grant management, compliance reporting), and Governance (advisory services, risk management, digital oversight). All services are integrated and can be tailored to your specific needs.",
        },
        {
          question: "Can we use just one of your services?",
          answer:
            "Absolutely. While many of our clients benefit from our full integrated service package, you are welcome to engage us for an individual service. We will determine together which services best match your foundation's needs.",
        },
        {
          question: "What is the My Orchestra dashboard?",
          answer:
            "My Orchestra is our proprietary online platform that gives you 24/7 real-time access to your foundation's financial data, documents and reports. It provides full transparency and enables board members to monitor the foundation's position from anywhere.",
        },
      ],
    },
    {
      category: "Fees",
      questions: [
        {
          question: "How are your fees structured?",
          answer:
            "We charge a transparent, fixed annual fee based on the scope of services you require — never a percentage of assets under management. This means your costs do not increase as your foundation grows, and you always know exactly what you pay.",
        },
        {
          question: "Are there any hidden costs?",
          answer:
            "No. Our proposal covers all agreed services. There are no hidden costs, transaction fees or unexpected surcharges. We believe in full transparency.",
        },
      ],
    },
    {
      category: "Onboarding",
      questions: [
        {
          question: "How long does the onboarding process take?",
          answer:
            "The onboarding process typically takes 4 to 8 weeks, depending on the complexity of your foundation's current setup. We guide you every step of the way to ensure a smooth transition with minimal disruption.",
        },
        {
          question: "What do you need from us to get started?",
          answer:
            "We start with a baseline assessment of your current situation. We need access to your current financial records, investment portfolio, governance documents and relevant contracts. Our team will guide you through exactly what is required.",
        },
      ],
    },
    {
      category: "Compliance",
      questions: [
        {
          question: "Which regulators supervise Orchestra?",
          answer:
            "Orchestra is supervised by De Nederlandsche Bank (DNB) for prudential supervision, the Authority for the Financial Markets (AFM) for conduct supervision, and we comply with the Dutch Data Protection Authority (AP) for data protection. We are also registered with DSI and KiFid.",
        },
        {
          question: "How do you ensure our foundation remains compliant?",
          answer:
            "We continuously monitor changes in legislation and regulations. Our compliance team ensures that all reports, governance structures and financial processes meet current requirements. We proactively inform you of any changes that affect your foundation.",
        },
      ],
    },
  ],
};

export const getClientTypes = (lang) => clientTypesData[lang] || clientTypesData.nl;
export const getFaqs = (lang) => faqsData[lang] || faqsData.nl;
export const clientTypes = clientTypesData.nl;
export const faqs = faqsData.nl;
