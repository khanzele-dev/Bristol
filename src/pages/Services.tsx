import heroImg from "../assets/services/same-nextday.png";
import trustHeroImg from "../assets/services/you-can-trust.png";
import fridgeImg from "../assets/services/fridgeImg.png";
import ovenImg from "../assets/services/ovenImg.png";
import dishwasherImg from "../assets/services/dishwasherImg.png";
import washerImg from "../assets/services/washerImg.png";
import dryerImg from "../assets/services/dryerImg.png";
import coolerImg from "../assets/services/coolerImg.png";
// import subzeroImg from "../assets/brands/subzero.png";
// import wolfImg from "../assets/brands/wolf.png";
// import vikingImg from "../assets/brands/viking.png";
// import thermadorImg from "../assets/brands/thermador.png";
// import monogramImg from "../assets/brands/monogram.png";
// import mieleImg from "../assets/brands/miele.png";
// import boschImg from "../assets/brands/bosch.png";
// import kitchenaidImg from "../assets/brands/kitchenaid.png";
import "../styles/pages/services.scss";

const questions = [
  {
    question: "What brands do you repair?",
    answer:
      "We service a wide range of major and premium appliance brands, including Sub-Zero, Wolf, Viking, Thermador, Bosch, KitchenAid, Whirlpool, GE, LG, Samsung, Maytag, Frigidaire, Electrolux, Miele, JennAir, Fisher & Paykel, and more.",
  },
  {
    question: "Do you service high-end and build-in appliances?",
    answer:
      "Yes, we service high-end and built-in appliances.\nOur technicians are experienced in working with premium brands and integrated kitchen systems. We handle diagnostics, repairs, maintenance, and part replacements for built-in refrigerators, ovens, cooktops, dishwashers, and more.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Yes, we offer same-day service whenever availability allows.\nOur team prioritizes urgent repair requests and works efficiently to get your appliance back up and running as quickly as possible. Contact us early in the day to increase the chances of securing a same-day appointment.",
  },
  {
    question: "Is there a diagnostic fee?",
    answer:
      "Yes, we do charge a diagnostic fee.\nThis fee covers the technician’s visit, full inspection, and accurate identification of the issue. If you choose to proceed with the repair, the diagnostic fee is typically applied toward the total cost of the service.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer:
      "Yes, all of our technicians are fully licensed and insured.\nThey are professionally trained and qualified to service a wide range of appliances, including high-end and built-in models. Our licensing and insurance provide added protection and peace of mind for every customer.",
  },
];

function Services() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero__overlay" />

        <div className="container hero__container">
          <div className="hero__content">
            <span className="hero__subtitle">SAME & NEXT DAY SERVICE</span>

            <h1 className="hero__title">
              <span className="hero__title-main">Premium</span>
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
      <section className="services-grid">
        <div className="container">
          <div className="services-grid__header">
            <h2 className="services-grid__title">
              Our Appliance Repair Services
            </h2>
            <p className="services-grid__description">
              We provide professional appliance repair services with fast
              response, expert diagnostics, and reliable solutions for high-end
              and built-in appliances
            </p>
          </div>

          <div className="services-grid__items">
            <div className="services-grid__item">
              <img src={fridgeImg} alt="Refrigerators & Freezers" />
              <p>Refrigerators & Freezers</p>
            </div>

            <div className="services-grid__item">
              <img src={ovenImg} alt="Ovens & Ranges" />
              <p>Ovens & Ranges</p>
            </div>

            <div className="services-grid__item">
              <img src={dishwasherImg} alt="Dishwashers" />
              <p>Dishwashers</p>
            </div>

            <div className="services-grid__item">
              <img src={washerImg} alt="Washers" />
              <p>Washers</p>
            </div>

            <div className="services-grid__item">
              <img src={dryerImg} alt="Dryers" />
              <p>Dryers</p>
            </div>

            <div className="services-grid__item">
              <img src={coolerImg} alt="Beverage Coolers" />
              <p>Beverage Coolers</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="brands">
        <div className="container">
          <div className="brands__header">
            <h2 className="brands__title">Premium Brands We Service</h2>
            <p className="brands__description">
              We specialize in High-End and Build-In appliances from the most
              trusted brands, delivering expert service for homeowners who
              expect precision, reliability, and professional care.
            </p>
          </div>

          <div className="brands__grid">
            <img src={subzeroImg} alt="Sub-Zero" />
            <img src={wolfImg} alt="Wolf" />
            <img src={vikingImg} alt="Viking" />
            <img src={thermadorImg} alt="Thermador" />
            <img src={monogramImg} alt="Monogram" />
            <img src={mieleImg} alt="Miele" />
            <img src={boschImg} alt="Bosch" />
            <img src={kitchenaidImg} alt="KitchenAid" />
          </div>
        </div>
      </section> */}
      <section
        className="trust-hero"
        style={{ backgroundImage: `url(${trustHeroImg})` }}
      >
        <div className="trust-hero__overlay" />

        <div className="container trust-hero__container">
          <div className="trust-hero__content">
            <h1 className="trust-hero__title">
              <span className="trust-hero__title-main">Expert Service</span>
              <span className="trust-hero__title-sub">You Can Trust</span>
            </h1>

            <p className="trust-hero__description">
              Schedule professional service
              <br />
              for your appliance today
            </p>

            <div className="trust-hero__actions">
              <a href="tel:9499920637" className="btn btn--primary">
                Call now
              </a>
            </div>

            <p className="trust-hero__note">Same-day service available</p>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container faq__grid">
          <div className="faq__left">
            <div className="faq__top">
              <div className="faq__btn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_17_586)">
                    <path
                      d="M2.24401 12.2565C2.35429 12.5347 2.37884 12.8395 2.31451 13.1318L1.51576 15.5993C1.49003 15.7244 1.49668 15.854 1.53509 15.9759C1.57351 16.0977 1.64241 16.2077 1.73526 16.2955C1.82812 16.3832 1.94184 16.4458 2.06566 16.4773C2.18948 16.5087 2.31928 16.508 2.44276 16.4753L5.00251 15.7268C5.2783 15.6721 5.56391 15.696 5.82676 15.7958C7.4283 16.5437 9.24254 16.7019 10.9494 16.2426C12.6562 15.7832 14.146 14.7358 15.1558 13.285C16.1656 11.8343 16.6306 10.0736 16.4687 8.31343C16.3069 6.55328 15.5285 4.90687 14.2711 3.66466C13.0136 2.42246 11.3578 1.66429 9.5958 1.52394C7.83381 1.38358 6.07886 1.87005 4.64059 2.89752C3.20232 3.92499 2.17316 5.42742 1.73468 7.13974C1.2962 8.85206 1.47659 10.6642 2.24401 12.2565Z"
                      stroke="#121212"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.8175 6.74994C6.99383 6.24869 7.34187 5.82602 7.79997 5.55679C8.25807 5.28756 8.79668 5.18914 9.32039 5.27897C9.8441 5.3688 10.3191 5.64108 10.6613 6.04758C11.0035 6.45409 11.1908 6.96858 11.19 7.49994C11.19 8.99994 8.94 9.74994 8.94 9.74994"
                      stroke="#121212"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12.75H9.0075"
                      stroke="#121212"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_586">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>view all questions</p>
              </div>
              <h2 className="faq__title">Frequently Asked Questions</h2>

              <p className="faq__subtitle">
                Clear answers to the most common questions about our appliance
                repair services
              </p>
            </div>

            <div className="faq__cta">
              <h3>Still have questions?</h3>
              <p>
                Call us or schedule your service – our team is ready to help you
                today
              </p>

              <div className="faq__buttons">
                <a href="tel:9499920637" className="btn btn--primary">
                  Call now
                </a>
                <a href="#" className="btn btn--outline">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>

          <div className="faq__right">
            {questions.map((el) => (
              <details className="faq__item">
                <summary>{el.question}</summary>
                <p>{el.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
