import { useRef, useEffect } from "react";

// Imported components
import CarouselIndicator from "./carouselIndicator";
import Slide from "./slide";

// Imported assets
import slide1 from "../../../assets/main-slider/slide1.jpg";
import slide2 from "../../../assets/main-slider/slide2.jpg";
import slide3 from "../../../assets/main-slider/slide3.jpg";
import slide4 from "../../../assets/main-slider/slide4.jpg";

const slides = [
  {
    src: slide1,
    heading: ["For the", "comfort seakers!"],
    paragraph: "Soft seats that welcome you home",
    id: 0,
  },
  {
    src: slide2,
    heading: ["It's our", "anniversary!"],
    paragraph: "Check what offers we have",
    id: 1,
  },
  {
    src: slide3,
    heading: ["The spring", "collection is here!"],
    paragraph: "Check it out",
    id: 2,
  },
  {
    src: slide4,
    heading: ["Made", "for laze-ins!"],
    paragraph: "You'll never feel more comfortable",
    id: 3,
  },
];

const MainSlider = () => {
  const nextBtn = useRef();
  // A workaround to enable touch on load without performance issues
  useEffect(() => {
    if (nextBtn.current) {
      nextBtn.current.click();
    }
  }, [nextBtn]);

  return (
    <section>
      <div
        id="main-carousel"
        data-bs-ride="carousel"
        data-bs-pause="false"
        className="carousel slide"
      >
        <div className="carousel-inner h-100">
          {slides.map((slide) => (
            <Slide key={slide.id} slide={slide} />
          ))}
        </div>
        <ul className="carousel-indicators mb-0 gap-4 mx-0">
          {slides.map((slide) => (
            <li key={slide.id} className="position-relative">
              <CarouselIndicator id={slide.id} />
            </li>
          ))}
        </ul>
        <button
          className="carousel-control-prev w-auto px-4"
          type="button"
          data-bs-target="#main-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next w-auto px-4"
          type="button"
          data-bs-target="#main-carousel"
          data-bs-slide="next"
          ref={nextBtn}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default MainSlider;
