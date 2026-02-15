import "../styles/pages/reviews.scss";

function Reviews() {
  return (
    <section className="reviews-intro">
      <div className="container">
        <nav className="reviews-intro__breadcrumb">
          <a href="/" className="reviews-intro__breadcrumb-link">
            Home
          </a>
          <span className="reviews-intro__breadcrumb-separator">›</span>
          <span className="reviews-intro__breadcrumb-current">Reviews</span>
        </nav>

        <div className="reviews-intro__content">
          <h1 className="reviews-intro__title">Reviews</h1>

          <p className="reviews-intro__description">
            Our technicians serve homeowners across Orange County with fast
            response times, transparent pricing, and expert repair of high-end
            and built-in appliances
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
