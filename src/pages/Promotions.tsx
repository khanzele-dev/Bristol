import promoImg from "../assets/promotions/promo-hero.png";
import "../styles/pages/promotions.scss";

function Promotions() {
  const promotions = [
    {
      title: "$25 Off Any Repair",
      description: "For first-time customers",
    },
    {
      title: "Free Service Call",
      description: "When you proceed with repair",
    },
    {
      title: "10% Senior",
      description: "Discount for seniors 60+",
    },
    {
      title: "Bundle Discount",
      description: "Repair 2+ appliances and save more",
    },
  ];

  const steps = [
    "Choose your promotion",
    "Schedule a service",
    "Mention the offer when booking your promotion",
    "Get your discount",
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
            </svg>{" "}
            <span className="intro-section__breadcrumb-current">
              Promotions
            </span>
          </nav>

          <div className="intro-section__content">
            <h1 className="intro-section__title">Promotions</h1>

            <p className="intro-section__description">
              Our technicians serve homeowners across Orange County with fast
              response times, transparent pricing, and expert repair of high-end
              and built-in appliances
            </p>
          </div>
        </div>
      </section>

      <section className="promotions-section">
        <div className="container">
          {/* Featured promotions */}
          <div className="promotions-section__header">
            <h2 className="promotions-section__heading">Featured promotions</h2>
          </div>

          <div className="promotions-section__grid">
            {promotions.map((item, index) => (
              <div key={index} className="promotions-section__card">
                <h3 className="promotions-section__card-title">{item.title}</h3>
                <p className="promotions-section__card-description">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="promotions-section__banner"
            style={{ backgroundImage: `url(${promoImg})` }}
          >
            <div className="promotions-section__banner-overlay" />

            <div className="promotions-section__banner-content">
              <h2 className="promotions-section__banner-title">
                Free diagnostic
                <br />
                with approved repair
              </h2>

              <button className="btn btn--primary">
                Schedule This Service
              </button>
            </div>
          </div>

          <div className="promotions-section__steps">
            <h2 className="promotions-section__steps-title">
              How to Claim the Offer
            </h2>

            <div className="promotions-section__steps-grid">
              {steps.map((step, index) => (
                <div key={index} className="promotions-section__step">
                  <div className="promotions-section__step-number">
                    {index + 1}
                  </div>
                  <p className="promotions-section__step-text">{step}</p>
                </div>
              ))}
            </div>
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

export default Promotions;
