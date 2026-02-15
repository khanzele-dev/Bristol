import "../styles/pages/reviews.scss";

const testimonials = [
  {
    rating: 5,
    text: "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help.",
    name: "Magomed Magomedov",
  },
  {
    rating: 5,
    text: "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Magomed Magomedov",
  },
  {
    rating: 5,
    text: "Outstanding product—well-crafted, user-friendly.",
    name: "Magomed Magomedov",
  },
  {
    rating: 5,
    text: "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Magomed Magomedov",
  },
];

function Reviews() {
  return (
    <>
      <section className="reviews-intro">
        <div className="container">
          <nav className="reviews-intro__breadcrumb">
            <a href="/" className="reviews-intro__breadcrumb-link">
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
      <section className="reviews-section">
        <div className="container reviews-section__container">
          <div className="reviews-section__grid">
            {testimonials.map((item, index) => (
              <div className="reviews-section__card" key={index}>
                <div className="reviews-section__stars">
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

                <p className="reviews-section__text">{item.text}</p>

                <div className="reviews-section__author">
                  <div className="reviews-section__photo">
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
                        strokeWidth="1.75"
                      />
                      <path
                        d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
                        stroke="black"
                        strokeWidth="1.75"
                      />
                    </svg>
                  </div>
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-section__nav">
            <button className="reviews-section__arrow">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#555555"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p className='reviews-section__pagination'>1</p>
            <p className='reviews-section__pagination reviews-section__pagination--active'>2</p>
            <p className='reviews-section__pagination'>3</p>
            <button className="reviews-section__arrow">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#555555"
                  stroke-width="2"
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

export default Reviews;
