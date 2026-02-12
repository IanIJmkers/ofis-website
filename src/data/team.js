import roderikBollePhoto from "../assets/images/team/roderik-bolle.jpg";
import kilianVanBuurenPhoto from "../assets/images/team/kilian-van-buuren.jpg";
import arjanVanGulickPhoto from "../assets/images/team/arjan-van-gulick.jpg";
import tanjaHaremakerPhoto from "../assets/images/team/tanja-haremaker.jpg";
import wouterHofhuisPhoto from "../assets/images/team/wouter-hofhuis.jpg";
import kaiVanKampenPhoto from "../assets/images/team/kai-van-kampen.jpg";
import davePricePhoto from "../assets/images/team/dave-price.jpg";
import pienVerweijPhoto from "../assets/images/team/pien-verweij.jpg";
import emmaVanSteijnPhoto from "../assets/images/team/emma-van-steijn.jpg";
import ianIjmkersPhoto from "../assets/images/team/ian-ijmkers.jpg";

const members = [
  {
    name: "Roderik Bolle",
    role: { nl: "Managing Director", en: "Managing Director" },
    email: "r.bolle@orchestra-contact.com",
    phone: "06-52629099",
    linkedin: "https://www.linkedin.com/in/roderikbolle/",
    photo: roderikBollePhoto,
  },
  {
    name: "Wouter Hofhuis",
    role: { nl: "Managing Director", en: "Managing Director" },
    email: "w.hofhuis@orchestra-contact.com",
    phone: "06-19408746",
    linkedin: "https://www.linkedin.com/in/wouter-hofhuis-59ab724",
    photo: wouterHofhuisPhoto,
  },
  {
    name: "Dave Price",
    role: { nl: "Director & Hoofd Portefeuillebeheer", en: "Director & Head of Portfolio Management" },
    email: "d.price@orchestra-contact.com",
    phone: "070-2051182",
    linkedin: "https://www.linkedin.com/in/dave-price-cfa-a766153",
    photo: davePricePhoto,
  },
  {
    name: "Tanja Haremaker",
    role: { nl: "Controller / Accountmanager", en: "Controller / Account Manager" },
    email: "t.haremaker@orchestra-contact.com",
    phone: "06-51990527",
    linkedin: "https://www.linkedin.com/in/tanjaharemaker/",
    photo: tanjaHaremakerPhoto,
  },
  {
    name: "Pien Verweij",
    role: { nl: "Accountmanager / Manager HR", en: "Account Manager / HR Manager" },
    email: "p.verweij@orchestra-contact.com",
    phone: "06-46761861",
    linkedin: "https://www.linkedin.com/in/pienverweij",
    photo: pienVerweijPhoto,
  },
  {
    name: "Kilian van Buuren",
    role: { nl: "Accountmanager", en: "Account Manager" },
    email: "k.vanbuuren@orchestra-contact.com",
    phone: "070-2197212",
    photo: kilianVanBuurenPhoto,
  },
  {
    name: "Arjan van Gulick",
    role: { nl: "Accountmanager", en: "Account Manager" },
    email: "a.vangulick@orchestra-contact.com",
    phone: "070-2197210",
    linkedin: "https://www.linkedin.com/in/arjan-van-gulick-77273ab6",
    photo: arjanVanGulickPhoto,
  },
  {
    name: "Emma van Steijn",
    role: { nl: "Accountmanager", en: "Account Manager" },
    email: "e.vansteijn@orchestra-contact.com",
    phone: "070-2051185",
    linkedin: "https://www.linkedin.com/in/emmavansteijn/",
    photo: emmaVanSteijnPhoto,
  },
  {
    name: "Kai van Kampen",
    role: { nl: "Junior Accountmanager", en: "Junior Account Manager" },
    email: "k.vankampen@orchestra-contact.com",
    phone: "070-2051184",
    linkedin: "https://www.linkedin.com/in/kai-van-kampen-9126591a6/",
    photo: kaiVanKampenPhoto,
  },
  {
    name: "Ian IJmkers",
    role: { nl: "Frontend Developer", en: "Frontend Developer" },
    email: "i.ijmkers@orchestra-contact.com",
    phone: "070-2051185",
    linkedin: "https://www.linkedin.com/in/ian-ijmkers/",
    photo: ianIjmkersPhoto,
  },
  {
    name: "Emma de Nie",
    role: { nl: "Backend Developer", en: "Backend Developer" },
    photo: null,
  },
  {
    name: "Boris Rostovskiy",
    role: { nl: "Backend Developer", en: "Backend Developer" },
    photo: null,
  },
];

export const getTeam = (lang) =>
  members.map((m) => ({ ...m, role: m.role[lang] || m.role.nl }));
export const team = getTeam("nl");
