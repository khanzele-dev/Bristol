import subzeroImg from "../assets/brands/subzero.png";
import wolfImg from "../assets/brands/wolf.png";
import "../styles/pages/brands.scss";

function Brands() {
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
      <section className="brands-intro">
        <div className="container">
          <nav className="brands-intro__breadcrumb">
            <a href="/" className="brands-intro__breadcrumb-link">
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
            <span className="brands-intro__breadcrumb-current">Brands</span>
          </nav>

          <div className="brands-intro__content">
            <h1 className="brands-intro__title">Brands</h1>

            <p className="brands-intro__description">
              Our technicians serve homeowners across Orange County with fast
              response times, transparent pricing, and expert repair of high-end
              and built-in appliances
            </p>
          </div>
        </div>
      </section>
      <section className="brands-section">
        <div className="container">
          <div className="brands-section__grid">
            <div className="brands-section__item">
              <img src={subzeroImg} alt="Sub-Zero" />
            </div>
            <div className="brands-section__item">
              <img src={wolfImg} alt="Wolf" />
            </div>
            <div className="brands-section__item">
              <img src={subzeroImg} alt="Sub-Zero" />
            </div>
            <div className="brands-section__item">
              <img src={wolfImg} alt="Wolf" />
            </div>
            <div className="brands-section__item">
              <img src={subzeroImg} alt="Sub-Zero" />
            </div>
            <div className="brands-section__item">
              <img src={wolfImg} alt="Wolf" />
            </div>
            <div className="brands-section__item">
              <img src={subzeroImg} alt="Sub-Zero" />
            </div>
            <div className="brands-section__item">
              <img src={wolfImg} alt="Wolf" />
            </div>
            {/* <img src={vikingImg} alt="Viking" />
                <img src={thermadorImg} alt="Thermador" />
                <img src={monogramImg} alt="Monogram" />
                <img src={mieleImg} alt="Miele" />
                <img src={boschImg} alt="Bosch" />
                <img src={kitchenaidImg} alt="KitchenAid" /> */}
          </div>
          <div className="brands-section__features">
            <h2 className="brands-section__features-title">Why Choose Us</h2>

            <div className="brands-section__features-grid">
              {features.map((feature, index) => (
                <div key={index} className="brands-section__feature">
                  <h3 className="brands-section__feature-title">
                    {feature.title}
                  </h3>

                  <p className="brands-section__feature-description">
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

export default Brands;
