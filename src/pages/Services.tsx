import bgImage from "../assets/same-nextday.png";
import "../styles/pages/services.scss";

function Services() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero__overlay" />

      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__subtitle">
            SAME & NEXT DAY SERVICE
          </span>

          <h1 className="hero__title">
            <span className="hero__title-main">
              Premium
            </span>
            <span className="hero__title-sub">
              Appliance Repair in Orange County
            </span>
          </h1>

          <p className="hero__description">
            Certified technicians specializing in high-end and built-in
            appliances across Orange County
          </p>

          <p className="hero__info">
            <span>High-End Brands Specialists</span>
            <span>&bull;</span>
            <span>Licensed & Insured Technicians</span>
            <span>&bull;</span>
            <span>Upfront Pricing & Warranty</span>
          </p>

          <div className="hero__actions">
            <a href="tel:9499920637" className="btn btn--primary">
              Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;