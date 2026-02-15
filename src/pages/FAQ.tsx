import "../styles/pages/faq.scss";

const questions = [
  {
    question: "What brands do you repair?",
    answer:
      "We service a wide range of major and premium appliance brands, including Sub-Zero, Wolf, Viking, Thermador, Bosch, KitchenAid, Whirlpool, GE, LG, Samsung, Maytag, Frigidaire, Electrolux, Miele, JennAir, Fisher & Paykel, and more.",
  },
  {
    question: "Do you service high-end and built-in appliances?",
    answer:
      "Yes, we service high-end and built-in appliances. Our technicians are experienced in working with premium brands and integrated kitchen systems.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Yes, we offer same-day service whenever availability allows. Contact us early in the day to increase the chances of securing an appointment.",
  },
  {
    question: "Is there a diagnostic fee?",
    answer:
      "Yes, we charge a diagnostic fee. If you proceed with the repair, the fee is typically applied toward the total cost.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer:
      "Yes, all of our technicians are fully licensed and insured for your peace of mind.",
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

function FAQ() {
  return (
    <>
      <section className="faq-intro">
        <div className="container">
          <nav className="faq-intro__breadcrumb">
            <a href="/" className="faq-intro__breadcrumb-link">
              Home
            </a>
            <span className="faq-intro__breadcrumb-separator">›</span>
            <span className="faq-intro__breadcrumb-current">FAQ</span>
          </nav>

          <div className="faq-intro__content">
            <h1 className="faq-intro__title">Frequently Asked Questions</h1>

            <p className="faq-intro__description">
              Our technicians serve homeowners across Orange County with fast
              response times, transparent pricing, and expert repair of high-end
              and built-in appliances
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-section__grid">
            {/* LEFT COLUMN */}
            <div className="faq-section__left">
              <div className="faq-section__cta">
                <h3 className="faq-section__cta-title">
                  Still have questions?
                </h3>

                <p className="faq-section__cta-description">
                  Call us or schedule your service – our team is ready to help
                  you today
                </p>

                <div className="faq-section__cta-actions">
                  <a href="#" className="btn btn--outline">
                    Schedule Service
                  </a>
                  <a href="tel:9499920637" className="btn btn--primary">
                    Call now
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="faq-section__right">
              {questions.map((item, index) => (
                <details key={index} className="faq-section__item">
                  <summary className="faq-section__question">
                    {item.question}
                  </summary>
                  <p className="faq-section__answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <div className="faq-section__features">
            <h2 className="faq-section__features-title">Why Choose Us</h2>

            <div className="faq-section__features-grid">
              {features.map((feature, index) => (
                <div key={index} className="faq-section__feature">
                  <h3 className="faq-section__feature-title">
                    {feature.title}
                  </h3>

                  <p className="faq-section__feature-description">
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

export default FAQ;
