import irvine from "../assets/locations/irvine.png";
import newportbeach from "../assets/locations/newportbeach.png";
import lagunabeach from "../assets/locations/lagunabeach.png";
import danapoint from "../assets/locations/danapoint.png";
import lagunaniguel from "../assets/locations/lagunaniguel.png";
import lagunahills from "../assets/locations/lagunahills.png";
import missionviejo from "../assets/locations/missionviejo.png";
import alisoviejo from "../assets/locations/alisoviejo.png";
import tustin from "../assets/locations/tustin.png";
import sanclemente from "../assets/locations/sanclemente.png";
import costamesa from "../assets/locations/costamesa.png";
import huntingtonbeach from "../assets/locations/huntingtonbeach.png";
import "../styles/pages/locations.scss";
import { NavLink } from "react-router-dom";

function Locations() {
  const locations = [
    { name: "Irvine", image: irvine },
    { name: "Newport Beach", image: newportbeach },
    { name: "Laguna Beach", image: lagunabeach },
    { name: "Dana Point", image: danapoint },

    { name: "Laguna Niguel", image: lagunaniguel },
    { name: "Laguna Hills", image: lagunahills },
    { name: "Mission Viejo", image: missionviejo },
    { name: "Aliso Viejo", image: alisoviejo },

    { name: "Tustin", image: tustin },
    { name: "San Clemente", image: sanclemente },
    { name: "Costa Mesa", image: costamesa },
    { name: "Huntington Beach", image: huntingtonbeach },
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

  return (
    <>
      <section className="locations-intro">
        <div className="container">
          <nav className="locations-intro__breadcrumb">
            <a href="/" className="locations-intro__breadcrumb-link">
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
            </svg>{" "}
            <span className="locations-intro__breadcrumb-current">
              Locations
            </span>
          </nav>

          <div className="locations-intro__content">
            <h1 className="locations-intro__title">Locations</h1>

            <p className="locations-intro__description">
              Our technicians serve homeowners across Orange County with fast
              response times, transparent pricing, and expert repair of high-end
              and built-in appliances
            </p>
          </div>
        </div>
      </section>

      <section className="locations-section">
        <div className="container">
          <div className="locations-section__grid">
            {locations.map((location, index) => (
              <NavLink to="#" key={index} className="locations-section__card">
                <div className="locations-section__image-wrapper">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="locations-section__image"
                  />
                </div>

                <p className="locations-section__name">{location.name}</p>
              </NavLink>
            ))}
          </div>

          <div className="locations-section__cta">
            <div className="locations-section__cta-content">
              <div className="locations-section__cta-text">
                <h3 className="locations-section__cta-title">
                  Didn’t find your city listed?
                </h3>

                <p className="locations-section__cta-description">
                  We serve many nearby areas across Orange County — give us a
                  call to confirm availability
                </p>
              </div>

              <div className="locations-section__cta-actions">
                <a href="#" className="btn btn--outline">
                  Schedule Service
                </a>
                <a href="tel:9499920637" className="btn btn--primary">
                  Call now
                </a>
              </div>
            </div>
          </div>
          <div className="locations-section__features">
            <div className="container">
              <h2 className="locations-section__features-title">
                Why Choose Us
              </h2>

              <div className="locations-section__features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="locations-section__feature">
                    <h3 className="locations-section__feature-title">
                      {feature.title}
                    </h3>

                    <p className="locations-section__feature-description">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Locations;
