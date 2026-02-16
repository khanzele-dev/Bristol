import "../styles/pages/contact.scss";

function Contact() {
  return (
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__header">
          <span className="contact__label">CONTACT</span>

          <div className="contact__heading">
            <h2 className="contact__title">
              <span className="contact__title-main">
                <span style={{ color: "#121212" }}>Ready</span> to schedule
              </span>
              <span className="contact__title-sub">your service?</span>
            </h2>

            <p className="contact__description">
              Speak directly with our team to schedule your appliance repair
            </p>
          </div>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__info-title">Call us directly</h3>

            <p className="contact__info-text">
              During this call, we’ll understand your appliance issue and guide
              you toward the right solution.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span>Phone</span>
                <a href="tel:9499920637">+1 949 992 0637</a>
              </div>

              <div className="contact__detail">
                <span>Email</span>
                <a href="mailto:hello@bristol.com">hello@bristol.com</a>
              </div>

              <div className="contact__detail">
                <span>Address</span>
                <p>Anaheim CA, 92801</p>
              </div>
            </div>

            <div className="contact__backbtn">
              <a href="/" className="contact__back">
                Back to home
              </a>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 5.25H12.75V12.75"
                  stroke="#86B6FF"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.25 12.75L12.75 5.25"
                  stroke="#86B6FF"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="contact__form-wrapper">
            <form className="contact__form">
              <div className="contact__field">
                <label>
                  Name <span style={{ color: "#FF383C" }}>*</span>
                </label>
                <input type="text" placeholder="Enter your name" required />
              </div>

              <div className="contact__field">
                <label>
                  Email <span style={{ color: "#FF383C" }}>*</span>
                </label>
                <input type="email" placeholder="Enter you email" required />
              </div>

              <div className="contact__field">
                <label>Phone</label>
                <input type="text" placeholder="Enter you phone" />
              </div>

              <div className="contact__field">
                <label>Your message</label>
                <textarea placeholder="Type your message here" rows={5} />
              </div>

              <button type="submit" className="btn btn--primary">
                Request Service
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
