import "../styles/pages/services.scss";

import fridgeImg from "../assets/services/fridgeImg.png";
import ovenImg from "../assets/services/ovenImg.png";
import dishwasherImg from "../assets/services/dishwasherImg.png";
import washerImg from "../assets/services/washerImg.png";
import dryerImg from "../assets/services/dryerImg.png";
import coolerImg from "../assets/services/coolerImg.png";
import { NavLink } from "react-router-dom";

const services = [
  {
    title: "Refrigerators & Freezers",
    image: fridgeImg,
  },
  {
    title: "Oven / Range",
    image: ovenImg,
  },
  {
    title: "Dishwasher",
    image: dishwasherImg,
  },
  {
    title: "Washer",
    image: washerImg,
  },
  {
    title: "Dryer",
    image: dryerImg,
  },
  {
    title: "Beverage Cooler",
    image: coolerImg,
  },
];

const features = [
  {
    title: "Experienced Technicians",
    description:
      "Years of real-world repair experience across a wide range of appliances and brands.",
  },
  {
    title: "Same-Day Service",
    description:
      "We understand urgency and do our best to fix issues on the first visit.",
  },
  {
    title: "Transparent Pricing",
    description: "Clear estimates before work begins — no surprises.",
  },
  {
    title: "Warranty on Repairs",
    description:
      "We back our work with a service guarantee for your peace of mind.",
  },
];

function Services() {
  return (
    <>
      <section className="intro-section">
        <div className="container">
          <nav className="intro-section__breadcrumb">
            <a href="/" className="intro-section__breadcrumb-link">
              Home
            </a>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#737373"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="intro-section__breadcrumb-current">Services</span>
          </nav>

          <div className="intro-section__content">
            <h1 className="intro-section__title">Services</h1>

            <p className="intro-section__description">
              Our technicians serve homeowners across Orange County with fast
              response times, transparent pricing, and expert repair of high-end
              and built-in appliances
            </p>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="services__grid">
            {services.map((service, index) => (
              <NavLink to="#" key={index} className="services__item">
                <img
                  src={service.image}
                  alt={service.title}
                  className="services__image"
                />
                <p className="services__label">{service.title}</p>
              </NavLink>
            ))}
          </div>

          <div className="features-section__features">
            <h2 className="features-section__features-title">Why Choose Us</h2>

            <div className="features-section__features-grid">
              {features.map((feature, index) => (
                <div key={index} className="features-section__feature">
                  <h3 className="features-section__feature-title">
                    {feature.title}
                  </h3>

                  <p className="features-section__feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
