import "../styles/pages/about.scss";

import aboutHeroImg from "../assets/about/repair.jpg";
import aboutWhoImg from "../assets/about/whoare.png";

const values = [
  {
    title: "Honesty",
    description: "Transparent pricing with no hidden fees",
  },
  {
    title: "Responsibility",
    description: "We stand behind every repair we perform",
  },
  {
    title: "Professionalism",
    description: "Trained technicians and proper tools",
  },
  {
    title: "Respect",
    description: "For your time, home, and appliances",
  },
  {
    title: "Quality",
    description: "Durable repairs using reliable parts",
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

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__container">
          <div className="about-hero__grid">
            <div
              className="about-hero__image"
              style={{ backgroundImage: `url(${aboutHeroImg})` }}
            ></div>

            <div className="about-hero__content">
              <span className="about-hero__label">ABOUT US</span>

              <h1 className="about-hero__title">
                Reliable Appliance
                <br />
                Repair You Can Trust
              </h1>

              <p className="about-hero__description">
                We provide professional, fast, and honest appliance repair
                services for homes and businesses across Orange County — with a
                strong focus on high-end and built-in appliances. Our
                experienced technicians help get your appliances back to working
                order quickly and correctly.
              </p>

              <div className="about-hero__features">
                <span>Same-Day Service</span>
                <span>Fair Pricing</span>
                <span>Guaranteed Repairs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-who">
        <div className="container about-who__container">
          <div className="about-who__grid">
            <div className="about-who__content">
              <h2 className="about-who__title">Who We Are</h2>

              <p>
                We are a local appliance repair company with years of hands-on
                experience diagnosing and repairing household appliances from
                all major and premium brands.
              </p>

              <p>
                Our team consists of skilled technicians who understand how
                important precision, cleanliness, and proper workmanship are
                when working inside modern homes.
              </p>

              <p>
                From minor issues to complex repairs, we focus on practical
                solutions, clear communication, and quality results.
              </p>

              <p style={{ fontWeight: "600" }}>
                We don’t upsell unnecessary services — we fix what’s broken and
                explain everything in simple, honest terms.
              </p>
            </div>

            <div
              className="about-who__image"
              style={{ backgroundImage: `url(${aboutWhoImg})` }}
            ></div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container about-mission__container">
          <h2 className="about-mission__title">Mission & Values</h2>

          <div className="about-mission__grid">
            <div className="about-mission__mission">
              <h3>Our mission</h3>
              <p>
                To provide dependable, high-quality appliance repair services
                that save our customers time, money, and stress.
              </p>
            </div>

            <div className="about-mission__values">
              <h3>Our values</h3>

              <ul>
                {values.map((value, index) => (
                  <li key={index}>
                    <span>{value.title}</span> — {value.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="about-features">
        <div className="container about-features__container">
          <h2 className="about-features__features-title">Why Choose Us</h2>

          <div className="about-features__features-grid">
            {features.map((feature, index) => (
              <div key={index} className="about-features__feature">
                <h3 className="about-features__feature-title">
                  {feature.title}
                </h3>

                <p className="about-features__feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
