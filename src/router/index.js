import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() => import("../pages/MainPage"));
const ServicesPage = lazy(() => import("../pages/Services"));
const OurFacilityPage = lazy(() => import("../pages/OurFacility"));
const AboutPage = lazy(() => import("../pages/About"));
const ContactPage = lazy(() => import("../pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },

  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/our-facility",
    element: <OurFacilityPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },

  {
    path: "*",
    element: <MainPage />,
  },
]);

export default router;
