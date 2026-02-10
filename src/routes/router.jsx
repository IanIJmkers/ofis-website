import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import ServicesOverview from "../pages/ServicesOverview";
import ServiceWealthManagement from "../pages/ServiceWealthManagement";
import ServiceAdministration from "../pages/ServiceAdministration";
import ServiceGovernance from "../pages/ServiceGovernance";
import ClientsOverview from "../pages/ClientsOverview";
import ClientsEndowmentFunds from "../pages/ClientsEndowmentFunds";
import ClientsCharities from "../pages/ClientsCharities";
import ClientsInterviews from "../pages/ClientsInterviews";
import AboutOverview from "../pages/AboutOverview";
import AboutTeam from "../pages/AboutTeam";
import AboutMethodology from "../pages/AboutMethodology";
import AboutFAQs from "../pages/AboutFAQs";
import AboutCareers from "../pages/AboutCareers";
import News from "../pages/News";
import NewsArticle from "../pages/NewsArticle";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home />, handle: { title: "Home" } },
      {
        path: "services",
        children: [
          { index: true, element: <ServicesOverview />, handle: { title: "Onze Diensten" } },
          { path: "wealth-management", element: <ServiceWealthManagement />, handle: { title: "Vermogensbeheer" } },
          { path: "administration", element: <ServiceAdministration />, handle: { title: "Administratie" } },
          { path: "governance", element: <ServiceGovernance />, handle: { title: "Governance" } },
        ],
      },
      {
        path: "clients",
        children: [
          { index: true, element: <ClientsOverview />, handle: { title: "Onze Klanten" } },
          { path: "endowment-funds", element: <ClientsEndowmentFunds />, handle: { title: "Vermogensfondsen" } },
          { path: "charities", element: <ClientsCharities />, handle: { title: "Goede Doelen" } },
          { path: "interviews", element: <ClientsInterviews />, handle: { title: "Klantverhalen" } },
        ],
      },
      {
        path: "about",
        children: [
          { index: true, element: <AboutOverview />, handle: { title: "Over Ons" } },
          { path: "team", element: <AboutTeam />, handle: { title: "Ons Team" } },
          { path: "methodology", element: <AboutMethodology />, handle: { title: "Methodiek" } },
          { path: "faqs", element: <AboutFAQs />, handle: { title: "Veelgestelde Vragen" } },
          { path: "careers", element: <AboutCareers />, handle: { title: "Werken bij" } },
        ],
      },
      {
        path: "news",
        children: [
          { index: true, element: <News />, handle: { title: "Nieuws" } },
          { path: ":slug", element: <NewsArticle />, handle: { title: "Artikel" } },
        ],
      },
      { path: "contact", element: <Contact />, handle: { title: "Contact" } },
    ],
  },
]);
