import About from "../pages/About";
import Brands from "../pages/Brands";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Locations from "../pages/Locations";
import Promotions from "../pages/Promotions";
import Reviews from "../pages/Reviews";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Dryer from "../pages/Dryer";
import Trusted from "../pages/Trusted";
import Brand from "../pages/Brand";

export const routers = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
    isHeader: false,
  },
  {
    name: "Brand",
    path: "/brand",
    component: <Brand />,
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
  {
    name: "Dryer",
    path: "dryer",
    component: <Dryer />,
    isHeader: false,
  },
  {
    name: "Trusted",
    path: "trusted",
    component: <Trusted />,
    isHeader: false,
  },
];
