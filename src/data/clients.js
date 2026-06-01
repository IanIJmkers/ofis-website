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
            "Mijn Orchestra is geen dashboard maar het collectieve geheugen van uw stichting: alle financiële gegevens, bestuursnotulen, besluiten, subsidie-aanvragen, documenten en audit trails op één platform met rolgebaseerde toegang. Wat het bestuur in 2024 besluit, kan een nieuw bestuurslid in 2031 nog terugvinden — mét de gronden waarop het besluit werd genomen.",
        },
        {
          question: "Voor welke stichtingsomvang is dit zinvol?",
          answer:
            "Onze dienstverlening is structureel gebouwd voor die stichtingen waar de complexiteit van vermogensbeheer, governance en administratie reëel begint te wegen — doorgaans vanaf stichtingsvermogens van indicatief enkele miljoenen euro of fondsenwervende organisaties met substantiële operationele begrotingen. Voor het integrale Charity Office wint elke stichting waar het bestuur meer aan financiële versnippering kwijt is dan aan de missie.",
        },
        {
          question: "Kan ons bestuur eerst een second opinion krijgen?",
          answer:
            "Ja natuurlijk. Veel besturen beginnen daarmee. Wij geven graag een onafhankelijke beoordeling van hoe uw stichting op dit moment financieel is georganiseerd — beleggingsstrategie, kostenposities, administratieve inrichting, governance-discipline, compliance — zonder enige verplichting tot samenwerking. Voor veel besturen is dat het eerste moment waarop het volledige financiële plaatje van de eigen stichting op één pagina staat.",
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
        {
          question: "Waar zit de catch in de vaste vergoeding?",
          answer:
            "Er is geen catch. Wij ontvangen een vaste jaarlijkse vergoeding voor het integrale beheer van uw stichting, vooraf afgesproken en alleen voor inflatie aangepast. Geen retrocessies, geen productverkoop, geen verborgen marges. De vergoeding wordt niet hoger als uw vermogen groeit. Voor sommige besturen voelt dat eerst vreemd — dat begrijpen wij. Eén gesprek volstaat meestal om die vreemdheid weg te nemen.",
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
        {
          question: "Hoe verhoudt dit zich tot onze ANBI-status?",
          answer:
            "Onze processen zijn standaard ontworpen voor ANBI-compliance. Inkomstenregistratie, bestedingsverhouding, publicatievereisten, transactietransparantie — alles wat de Belastingdienst en het CBF vragen, leveren wij als onderdeel van onze reguliere dienstverlening. Niet als project. Niet tegen meerwerk. ANBI-status verlies door administratieve omissie behoort tot het soort risico dat onze dienstverlening juist elimineert.",
        },
        {
          question: "Wat als wij grote subsidiestromen ontvangen (VWS, gemeente, EU)?",
          answer:
            "Subsidiestromen zijn een aparte specialisatie binnen onze administratiedienstverlening. Aanvraag-administratie, project-administratie per subsidie, voortgangsrapportage, eindverantwoording — wij houden de relatie tussen subsidievoorwaarden en bestede middelen automatisch zichtbaar in Mijn Orchestra. Voor bestuursleden, voor de subsidieverstrekker en voor uw accountant.",
        },
        {
          question: "Wat verandert er voor onze huidige accountant?",
          answer:
            "In principe niets verplichts. Veel cliënten houden hun huidige externe accountant aan voor de wettelijke controle van de jaarrekening — die rol is gescheiden van ons werk en blijft onafhankelijk. Wij leveren de management letter en alle onderliggende stukken. In de praktijk verbetert de samenwerking met accountants doordat onze administratie audit-ready aangeleverd wordt; controle-uren bij de accountant nemen vaak af.",
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
            "My Orchestra is not a dashboard but the collective memory of your foundation: all financial data, board minutes, decisions, grant applications, documents and audit trails on one platform with role-based access. What the board decides in 2024, a new board member in 2031 can still find back — with the grounds on which the decision was made.",
        },
        {
          question: "For what foundation size does this make sense?",
          answer:
            "Our service is structurally built for foundations where the complexity of wealth management, governance and administration begins to weigh meaningfully — typically from foundation assets of indicatively several million euros, or fundraising organisations with substantial operational budgets. For the full Charity Office, every foundation where the board spends more time on financial fragmentation than on the mission stands to gain.",
        },
        {
          question: "Can our board have a second opinion first?",
          answer:
            "Yes, of course. Many boards begin there. We are happy to give an independent assessment of how your foundation is currently organised financially — investment strategy, cost positions, administrative setup, governance discipline, compliance — without any obligation to engage further. For many boards this is the first time the full financial picture of their own foundation appears on a single page.",
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
        {
          question: "Where is the catch in the fixed fee?",
          answer:
            "There is no catch. We receive a fixed annual fee for the integrated stewardship of your foundation, agreed in advance and adjusted only for inflation. No retrocessions, no product sales, no hidden margins. The fee does not rise as your assets grow. For some boards that feels unusual at first — we understand. One conversation usually removes the unfamiliarity.",
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
        {
          question: "How does this relate to our ANBI status?",
          answer:
            "Our processes are designed for ANBI compliance by default. Income registration, expense ratios, publication requirements, transaction transparency — everything the Belastingdienst and the CBF require, we deliver as part of our regular service. Not as a project. Not as additional work. Losing ANBI status through administrative oversight is exactly the kind of risk our service eliminates.",
        },
        {
          question: "What if we receive large government grant flows (VWS, municipality, EU)?",
          answer:
            "Government grant flows are a distinct specialisation within our administration service. Application administration, project accounting per grant, progress reporting, final accountability — we automatically keep the relationship between grant conditions and money spent visible on My Orchestra. For board members, for the granting authority, and for your accountant.",
        },
        {
          question: "What changes for our current auditor?",
          answer:
            "In principle nothing is required to change. Many clients keep their current external auditor for the statutory audit of the annual accounts — that role is separate from our work and remains independent. We deliver the management letter and all underlying documentation. In practice the relationship with auditors improves because our administration is delivered audit-ready; audit hours typically go down.",
        },
      ],
    },
  ],
};

export const getClientTypes = (lang) => clientTypesData[lang] || clientTypesData.nl;
export const getFaqs = (lang) => faqsData[lang] || faqsData.nl;
export const clientTypes = clientTypesData.nl;
export const faqs = faqsData.nl;
