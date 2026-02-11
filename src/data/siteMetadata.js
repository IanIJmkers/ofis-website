const base = {
  companyName: "Orchestra",
  fullName: "Orchestra Charity Office",
  address: {
    street: "Mauritskade 25",
    postalCode: "2514 HD",
    city: "Den Haag",
  },
  phone: "+31 (0)70 205 11 81",
  email: "info@orchestra-charityoffice.com",
  linkedin: "https://linkedin.com/company/orchestra-family-charity-office",
  myOrchestra: "https://ofis.orchestrabeheer.nl/Ofis/Client",
};

const data = {
  nl: {
    ...base,
    tagline: "Uw vermogensbeheer, administratie en governance. Georkestreerd.",
    description:
      "Wij stellen goede doelen en stichtingen in staat om tijd en middelen te besteden aan hun maatschappelijke missie, door ieder aspect van hun financiële huishouding te beheren.",
    address: { ...base.address, country: "Nederland" },
  },
  en: {
    ...base,
    tagline: "Your wealth management, administration and governance. Orchestrated.",
    description:
      "We enable charities and foundations to dedicate their time and resources to their social mission, by managing every aspect of their financial operations.",
    address: { ...base.address, country: "The Netherlands" },
  },
};

export const getSiteMetadata = (lang) => data[lang] || data.nl;
export const siteMetadata = data.nl;
