import "../styles/pages/brands.scss";

function Brands() {
  return (
    <section className="brands-intro">
      <div className="container">
        <nav className="brands-intro__breadcrumb">
          <a href="/" className="brands-intro__breadcrumb-link">
            Home
          </a>
          <span className="brands-intro__breadcrumb-separator">›</span>
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
  );
}

export default Brands;
