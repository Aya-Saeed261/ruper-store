import { useRef, useLayoutEffect, useState, useEffect } from "react";

// Bootstrap carousel
import Carousel from "bootstrap/js/dist/carousel";

// Imported components
import ImgZoom from "./imgZoom";

const ImgsCarousel = ({ product, isScreenLg }) => {
  const [holderWidth, setHolderWidth] = useState(0);
  const [holderHeight, setHolderHeight] = useState(0);
  const holderRef = useRef(null);
  const carouselRef = useRef();

  useLayoutEffect(() => {
    if (!isScreenLg) return;
    if (holderRef.current) {
      const { width, height } = holderRef.current.getBoundingClientRect();
      if (height === holderHeight && width === holderWidth) return;
      setHolderWidth(width);
      setHolderHeight(height);
    }
  });

  // Initialize carousel to enable touch on load
  useEffect(() => {
    if (carouselRef.current) {
      const myCarouselElement = carouselRef.current;
      new Carousel(myCarouselElement, {
        touch: true,
      });
    }
  }, [carouselRef]);

  return (
    <div
      id="product-details-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="false"
      ref={carouselRef}
    >
      <div className="row m-0">
        <div className="col-md-2 px-0 pe-md-3 order-1 order-md-0 position-relative">
          <ul className="carousel-indicators list-unstyled mb-0 d-flex flex-md-column gap-2">
            {product.imgs.map((img, indx) => (
              <li key={img.id}>
                <button
                  type="button"
                  data-bs-target="#product-details-carousel"
                  data-bs-slide-to={`${img.id - 1}`}
                  className={`btn p-0 rounded-0 w-100 h-auto mx-0 ${
                    indx === 0 ? "active" : ""
                  }`}
                  aria-current={indx === 0 ? true : ""}
                  aria-label={`Slide ${img.id}`}
                >
                  <img
                    src={img.src}
                    alt={product.name}
                    className="d-block img-fluid"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-10 mb-3 mb-md-0 px-0 position-relative">
          <div ref={holderRef} className="carousel-inner">
            {product.imgs.map((img, indx) => (
              <div
                key={img.id}
                className={`carousel-item ${indx === 0 ? "active" : ""}`}
              >
                {isScreenLg ? (
                  <ImgZoom
                    src={img.src}
                    name={product.name}
                    holderWidth={holderWidth}
                    holderHeight={holderHeight}
                  />
                ) : (
                  <img
                    src={img.src}
                    alt={product.name}
                    className="w-100 img-fluid"
                  />
                )}
              </div>
            ))}
          </div>
          <button
            className="control-btn carousel-control-prev bg-black top-50 translate-middle-y rounded-circle opacity-100"
            type="button"
            data-bs-target="#product-details-carousel"
            data-bs-slide="prev"
          >
            <span
              className="icon carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="control-btn carousel-control-next bg-black top-50 translate-middle-y rounded-circle opacity-100"
            type="button"
            data-bs-target="#product-details-carousel"
            data-bs-slide="next"
          >
            <span
              className="icon carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgsCarousel;
