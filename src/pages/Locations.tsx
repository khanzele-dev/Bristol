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
            <span className="locations-intro__breadcrumb-separator">›</span>
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
              <div key={index} className="locations-section__card">
                <div className="locations-section__image-wrapper">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="locations-section__image"
                  />
                </div>

                <p className="locations-section__name">{location.name}</p>
              </div>
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
                <button className="btn btn--outline">Schedule Service</button>
                <button className="btn btn--primary">Call now</button>
              </div>
            </div>
          </div>
          <div className="locations-section__features">
            <h2 className="locations-section__features-title">Why Choose Us</h2>

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
      </section>
    </>
  );
}

export default Locations;
