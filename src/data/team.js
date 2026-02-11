const members = [
  {
    name: "Jan Willem van Drimmelen",
    role: { nl: "Algemeen Directeur", en: "Managing Director" },
    email: "jwvandrimmelen@orchestra-charityoffice.com",
    phone: "+31 (0)70 205 11 81",
  },
  {
    name: "Jeroen de Vries",
    role: { nl: "Directeur Vermogensbeheer", en: "Director of Wealth Management" },
    email: "jdevries@orchestra-charityoffice.com",
    phone: "+31 (0)70 205 11 81",
  },
  {
    name: "Femke Bakker",
    role: { nl: "Directeur Administratie", en: "Director of Administration" },
    email: "fbakker@orchestra-charityoffice.com",
    phone: "+31 (0)70 205 11 81",
  },
  {
    name: "Thomas Hendriks",
    role: { nl: "Senior Adviseur Governance", en: "Senior Governance Adviser" },
    email: "thendriks@orchestra-charityoffice.com",
    phone: "+31 (0)70 205 11 81",
  },
  {
    name: "Lisa Jansen",
    role: { nl: "Portfoliomanager", en: "Portfolio Manager" },
    email: "ljansen@orchestra-charityoffice.com",
    phone: "+31 (0)70 205 11 81",
  },
  {
    name: "Pieter van den Berg",
    role: { nl: "Compliance Officer", en: "Compliance Officer" },
    email: "pvandenberg@orchestra-charityoffice.com",
    phone: "+31 (0)70 205 11 81",
  },
  {
    name: "Sophie Vermeer",
    role: { nl: "Relatiebeheerder", en: "Relationship Manager" },
    email: "svermeer@orchestra-charityoffice.com",
    phone: "+31 (0)70 205 11 81",
  },
  {
    name: "Martijn Kosters",
    role: { nl: "Financieel Controller", en: "Financial Controller" },
    email: "mkosters@orchestra-charityoffice.com",
    phone: "+31 (0)70 205 11 81",
  },
  {
    name: "Anne de Groot",
    role: { nl: "Office Manager", en: "Office Manager" },
    email: "adegroot@orchestra-charityoffice.com",
    phone: "+31 (0)70 205 11 81",
  },
];

export const getTeam = (lang) =>
  members.map((m) => ({ ...m, role: m.role[lang] || m.role.nl }));
export const team = getTeam("nl");
