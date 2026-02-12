import About from "../pages/About"
import Brands from "../pages/Brands"
import Contact from "../pages/Contact"
import FAQ from "../pages/FAQ"
import Locations from "../pages/Locations"
import Promotions from "../pages/Promotions"
import Reviews from "../pages/Reviews"
import Services from "../pages/Services"

export const routers = [
    {
        name: "Services",
        path: "services",
        component: <Services />
    },
    {
        name: "Brands",
        path: "brands",
        component: <Brands />
    },
    {
        name: "Locations",
        path: "locations",
        component: <Locations />
    },
    {
        name: "About",
        path: "about",
        component: <About />
    },
    {
        name: "Reviews",
        path: "reviews",
        component: <Reviews />
    },
    {
        name: "FAQ",
        path: "faq",
        component: <FAQ />
    },
    {
        name: "Promotions",
        path: "promotions",
        component: <Promotions />
    },
    {
        name: "Contact",
        path: "contact",
        component: <Contact />
    }
]