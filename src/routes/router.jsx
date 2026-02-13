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
import InterviewArticle from "../pages/InterviewArticle";
import AboutOverview from "../pages/AboutOverview";
import AboutTeam from "../pages/AboutTeam";
import AboutMethodology from "../pages/AboutMethodology";
import AboutFAQs from "../pages/AboutFAQs";
import AboutCareers from "../pages/AboutCareers";
import News from "../pages/News";
import NewsArticle from "../pages/NewsArticle";
import Contact from "../pages/Contact";
import MijnOrchestra from "../pages/MijnOrchestra";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home />, handle: { titleKey: "home" } },
      {
        path: "services",
        children: [
          { index: true, element: <ServicesOverview />, handle: { titleKey: "servicesOverview" } },
          { path: "wealth-management", element: <ServiceWealthManagement />, handle: { titleKey: "wealthManagement" } },
          { path: "administration", element: <ServiceAdministration />, handle: { titleKey: "administration" } },
          { path: "governance", element: <ServiceGovernance />, handle: { titleKey: "governance" } },
        ],
      },
      {
        path: "clients",
        children: [
          { index: true, element: <ClientsOverview />, handle: { titleKey: "clientsOverview" } },
          { path: "endowment-funds", element: <ClientsEndowmentFunds />, handle: { titleKey: "endowmentFunds" } },
          { path: "charities", element: <ClientsCharities />, handle: { titleKey: "charities" } },
          { path: "interviews", element: <ClientsInterviews />, handle: { titleKey: "interviews" } },
          { path: "interviews/:slug", element: <InterviewArticle />, handle: { titleKey: "interviews" } },
        ],
      },
      {
        path: "about",
        children: [
          { index: true, element: <AboutOverview />, handle: { titleKey: "aboutOverview" } },
          { path: "team", element: <AboutTeam />, handle: { titleKey: "team" } },
          { path: "methodology", element: <AboutMethodology />, handle: { titleKey: "methodology" } },
          { path: "faqs", element: <AboutFAQs />, handle: { titleKey: "faqs" } },
          { path: "careers", element: <AboutCareers />, handle: { titleKey: "careers" } },
        ],
      },
      {
        path: "news",
        children: [
          { index: true, element: <News />, handle: { titleKey: "news" } },
          { path: ":slug", element: <NewsArticle />, handle: { titleKey: "article" } },
        ],
      },
      { path: "contact", element: <Contact />, handle: { titleKey: "contact" } },
      { path: "mijn-orchestra", element: <MijnOrchestra />, handle: { titleKey: "mijnOrchestra" } },
    ],
  },
]);
