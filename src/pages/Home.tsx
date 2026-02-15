import heroImg from "../assets/services/same-nextday.png";
import trustHeroImg from "../assets/services/you-can-trust.png";
import fridgeImg from "../assets/services/fridgeImg.png";
import ovenImg from "../assets/services/ovenImg.png";
import dishwasherImg from "../assets/services/dishwasherImg.png";
import washerImg from "../assets/services/washerImg.png";
import dryerImg from "../assets/services/dryerImg.png";
import coolerImg from "../assets/services/coolerImg.png";
import subzeroImg from "../assets/brands/subzero.png";
import wolfImg from "../assets/brands/wolf.png";
// import vikingImg from "../assets/brands/viking.png";
// import thermadorImg from "../assets/brands/thermador.png";
// import monogramImg from "../assets/brands/monogram.png";
// import mieleImg from "../assets/brands/miele.png";
// import boschImg from "../assets/brands/bosch.png";
// import kitchenaidImg from "../assets/brands/kitchenaid.png";
import "../styles/pages/home.scss";

const testimonials = [
  {
    name: "Magomed Magomedov",
    text: "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help.",
    rating: 5,
  },
  {
    name: "Magomed Magomedov",
    text: "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help.",
    rating: 5,
  },
  {
    name: "Magomed Magomedov",
    text: "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help.",
    rating: 5,
  },
];

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

function Home() {
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
      <section className="brands">
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
            <img src={subzeroImg} alt="Sub-Zero" />
            <img src={wolfImg} alt="Wolf" />
            <img src={subzeroImg} alt="Sub-Zero" />
            <img src={wolfImg} alt="Wolf" />
            <img src={subzeroImg} alt="Sub-Zero" />
            <img src={wolfImg} alt="Wolf" />
            {/* <img src={vikingImg} alt="Viking" />
            <img src={thermadorImg} alt="Thermador" />
            <img src={monogramImg} alt="Monogram" />
            <img src={mieleImg} alt="Miele" />
            <img src={boschImg} alt="Bosch" />
            <img src={kitchenaidImg} alt="KitchenAid" /> */}
          </div>
        </div>
      </section>
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
              <button className="faq__btn">
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
              </button>
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
            {questions.map((el, i) => (
              <details open={i == 0 ? true : false} className="faq__item">
                <summary>
                  <span>{el.question}</span>
                  <div className="faq__icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.3335V12.6668"
                        stroke="#444444"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6666 8L7.99992 12.6667L3.33325 8"
                        stroke="#444444"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </summary>
                <p>{el.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <h2 className="testimonials__title">What Our Customers Say</h2>
            <p className="testimonials__subtitle">
              Real feedback from homeowners who trust us with their appliances —
              quality service, honest pricing, and reliable results
            </p>
          </div>

          <div className="testimonials__grid">
            {testimonials.map((item, index) => (
              <div className="testimonials__card" key={index}>
                <div className="testimonials__stars">
                  {Array.from({ length: item.rating }).map((_e, i) => (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5251 2.29489C11.5689 2.20635 11.6366 2.13183 11.7205 2.07972C11.8045 2.02761 11.9013 2 12.0001 2C12.0989 2 12.1957 2.02761 12.2796 2.07972C12.3636 2.13183 12.4313 2.20635 12.4751 2.29489L14.7851 6.97389C14.9373 7.28186 15.1619 7.5483 15.4397 7.75035C15.7175 7.95239 16.0402 8.08401 16.3801 8.13389L21.5461 8.88989C21.644 8.90408 21.7359 8.94537 21.8116 9.00909C21.8872 9.07282 21.9435 9.15644 21.9741 9.2505C22.0047 9.34456 22.0084 9.4453 21.9847 9.54133C21.961 9.63736 21.9109 9.72485 21.8401 9.79389L18.1041 13.4319C17.8577 13.672 17.6734 13.9684 17.5669 14.2955C17.4605 14.6227 17.4352 14.9708 17.4931 15.3099L18.3751 20.4499C18.3924 20.5477 18.3818 20.6485 18.3446 20.7406C18.3074 20.8327 18.245 20.9125 18.1646 20.9709C18.0842 21.0293 17.9891 21.0639 17.89 21.0708C17.7908 21.0777 17.6918 21.0566 17.6041 21.0099L12.9861 18.5819C12.6818 18.4221 12.3433 18.3386 11.9996 18.3386C11.6559 18.3386 11.3174 18.4221 11.0131 18.5819L6.39609 21.0099C6.30842 21.0563 6.20949 21.0772 6.11054 21.0701C6.0116 21.0631 5.91661 21.0285 5.83639 20.9701C5.75616 20.9118 5.69392 20.8321 5.65675 20.7401C5.61957 20.6481 5.60895 20.5476 5.62609 20.4499L6.50709 15.3109C6.56529 14.9716 6.54007 14.6233 6.43363 14.2959C6.32718 13.9686 6.1427 13.672 5.89609 13.4319L2.16009 9.79489C2.08868 9.72593 2.03808 9.63829 2.01405 9.54197C1.99002 9.44565 1.99353 9.34451 2.02417 9.25008C2.05481 9.15566 2.11136 9.07174 2.18737 9.00788C2.26338 8.94402 2.35579 8.90279 2.45409 8.88889L7.61909 8.13389C7.95935 8.08439 8.28248 7.95295 8.56067 7.75088C8.83887 7.54881 9.06379 7.28216 9.21609 6.97389L11.5251 2.29489Z"
                        fill="#D97706"
                        stroke="#D97706"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ))}
                </div>
                <p className="testimonials__text">{item.text}</p>
                <div className="testimonials__author">
                  <div className="testimonials__photo">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                        stroke="black"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
                        stroke="black"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="testimonials__avatar" />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__nav">
            <button className="testimonials__arrow">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99992 12.6668L3.33325 8.00016L7.99992 3.3335"
                  stroke="black"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6666 8H3.33325"
                  stroke="black"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="testimonials__arrow testimonials__arrow--active">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00008 12.6668L12.6667 8.00016L8.00008 3.3335"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33342 8H12.6667"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
