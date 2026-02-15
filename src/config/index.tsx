import About from "../pages/About";
import Brands from "../pages/Brands";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Locations from "../pages/Locations";
import Promotions from "../pages/Promotions";
import Reviews from "../pages/Reviews";
import Home from "../pages/Home";
import Services from "../pages/Services";

export const routers = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
    isHeader: false,
  },
  {
    name: "Services",
    path: "services",
    component: <Services />,
    isHeader: true,
  },
  {
    name: "Brands",
    path: "brands",
    component: <Brands />,
    isHeader: true,
  },
  {
    name: "Locations",
    path: "locations",
    component: <Locations />,
    isHeader: true,
  },
  {
    name: "About",
    path: "about",
    component: <About />,
    isHeader: true,
  },
  {
    name: "Reviews",
    path: "reviews",
    component: <Reviews />,
    isHeader: true,
  },
  {
    name: "FAQ",
    path: "faq",
    component: <FAQ />,
    isHeader: true,
  },
  {
    name: "Promotions",
    path: "promotions",
    component: <Promotions />,
    isHeader: true,
  },
  {
    name: "Contact",
    path: "contact",
    component: <Contact />,
    isHeader: true,
  },
];
