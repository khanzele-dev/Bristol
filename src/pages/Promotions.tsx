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
      description:
        "Clear estimates before work begins — no surprises.",
    },
    {
      title: "Warranty on Repairs",
      description:
        "We back our work with a service guarantee for your peace of mind.",
    },
  ];

  return (
    <>
      <section className="promotions-intro">
        <div className="container">
          <nav className="promotions-intro__breadcrumb">
            <a href="/" className="promotions-intro__breadcrumb-link">
              Home
            </a>
            <span className="promotions-intro__breadcrumb-separator">›</span>
            <span className="promotions-intro__breadcrumb-current">
              Promotions
            </span>
          </nav>

          <div className="promotions-intro__content">
            <h1 className="promotions-intro__title">Promotions</h1>

            <p className="promotions-intro__description">
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
            <h2 className="promotions-section__heading">
              Featured promotions
            </h2>
          </div>

          <div className="promotions-section__grid">
            {promotions.map((item, index) => (
              <div key={index} className="promotions-section__card">
                <h3 className="promotions-section__card-title">
                  {item.title}
                </h3>
                <p className="promotions-section__card-description">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Banner */}
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

          {/* Steps */}
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
                  <p className="promotions-section__step-text">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="promotions-section__features">
            <h2 className="promotions-section__features-title">
              Why Choose Us
            </h2>

            <div className="promotions-section__features-grid">
              {features.map((feature, index) => (
                <div key={index} className="promotions-section__feature">
                  <h3 className="promotions-section__feature-title">
                    {feature.title}
                  </h3>

                  <p className="promotions-section__feature-description">
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
