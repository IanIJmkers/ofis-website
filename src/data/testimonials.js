const data = {
  nl: [
    {
      quote:
        "Orchestra biedt ons een integrale aanpak voor het beheer van de financiën van onze stichting. Hun expertise in de charitatieve sector is werkelijk ongeëvenaard.",
      name: "Bestuurslid",
      organization: "Insinger Foundation",
    },
    {
      quote:
        "De transitie naar Orchestra verliep naadloos. Hun team begeleidde ons bij iedere stap en nu hebben wij altijd volledig inzicht in onze financiële positie.",
      name: "Directeur",
      organization: "Stichting Boschuysen",
    },
    {
      quote:
        "Wat Orchestra onderscheidt is hun oprechte begrip van de charitatieve sector. Zij beheren niet alleen onze financiën — zij begrijpen onze missie.",
      name: "Vertegenwoordiger",
      organization: "FIN",
    },
    {
      quote:
        "Het Mijn Orchestra dashboard geeft ons real-time toegang tot alles wat we nodig hebben. De transparantie en professionaliteit zijn precies wat onze stichting vereist.",
      name: "Voorzitter",
      organization: "Stichting van het Kind",
    },
  ],
  en: [
    {
      quote:
        "Orchestra offers us an integrated approach to managing our foundation's finances. Their expertise in the charitable sector is truly unparalleled.",
      name: "Board Member",
      organization: "Insinger Foundation",
    },
    {
      quote:
        "The transition to Orchestra was seamless. Their team guided us every step of the way and now we always have full insight into our financial position.",
      name: "Director",
      organization: "Stichting Boschuysen",
    },
    {
      quote:
        "What sets Orchestra apart is their genuine understanding of the charitable sector. They don't just manage our finances — they understand our mission.",
      name: "Representative",
      organization: "FIN",
    },
    {
      quote:
        "The My Orchestra dashboard gives us real-time access to everything we need. The transparency and professionalism are exactly what our foundation requires.",
      name: "Chairman",
      organization: "Stichting van het Kind",
    },
  ],
};

export const getTestimonials = (lang) => data[lang] || data.nl;
export const testimonials = data.nl;
