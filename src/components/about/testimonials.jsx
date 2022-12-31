import { useRef, useEffect } from "react";

// Bootstrap carousel
import Carousel from "bootstrap/js/dist/carousel";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Testimonials = ({ testimonials }) => {
  const carouselRef = useRef();

  // Initialize carousel to enable touch on load
  useEffect(() => {
    if (carouselRef.current) {
      const myCarouselElement = carouselRef.current;
      new Carousel(myCarouselElement, {
        touch: true,
      });
    }
  }, [carouselRef]);

  const handleRate = (stars) => {
    const num = stars;
    const numInt = Math.floor(num);
    const rate = [];
    for (let i = 0; i < numInt; i++) {
      rate.push(<FontAwesomeIcon icon={faStar} className="star rated" />);
    }
    if (num !== numInt) {
      rate.push(
        <FontAwesomeIcon icon={faStarHalfStroke} className="star rated" />
      );
    }
    for (let i = 0; i < 5 - Math.ceil(num); i++) {
      rate.push(<FontAwesomeIcon icon={faStar} className="star unrated" />);
    }
    return rate;
  };

  return (
    <div
      id="testimonials"
      className="carousel slide pt-4 pb-3 overflow-hidden"
      data-bs-ride="false"
      ref={carouselRef}
    >
      <div className="carousel-inner">
        {testimonials.map((test, indx) => (
          <div
            key={test.id}
            className={`carousel-item ${
              indx === 0 ? "active" : ""
            } text-center`}
          >
            <ul className="rate-holder list-unstyled mb-4 d-flex justify-content-center gap-2">
              {handleRate(test.rate).map((rate, indx) => (
                <li key={indx}>{rate}</li>
              ))}
            </ul>
            <p className="feedback gray-text serif fst-italic mx-auto mb-4">
              ”{test.feedback}“
            </p>
            <img
              src={test.pic}
              alt="Client"
              className="user-pic img-fluid rounded-circle p-2 main-border mb-3"
            />
            <p className="user-name mb-0">{test.name}</p>
          </div>
        ))}
      </div>
      <button
        className="control-btn carousel-control-prev w-auto p-2"
        type="button"
        data-bs-target="#testimonials"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="control-btn carousel-control-next w-auto p-2"
        type="button"
        data-bs-target="#testimonials"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Testimonials;
