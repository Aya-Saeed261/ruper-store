// React router dom
import { NavLink } from "react-router-dom";

const Slide = ({ slide }) => {
  const isReversed = slide.id % 2 === 0 ? false : true;

  return (
    <div className={`carousel-item h-100 ${slide.id === 3 ? "active" : ""}`}>
      <div
        className={`h-100 row m-0 justify-content-between ${
          isReversed ? "flex-md-row-reverse" : "flex-column-reverse flex-md-row"
        }`}
      >
        <div
          className={`col-md-6 col-xl-5 px-2 pe-md-0 ps-md-3 pb-3 pb-md-0 d-flex align-items-center ${
            isReversed ? "ps-0 ps-md-4 ps-lg-0" : "justify-content-xl-end"
          }`}
        >
          <div className="text-holder text-center text-md-start ps-md-2 ps-lg-5 ps-xl-4 py-5">
            <h2 className="heading fw-light text-capitalize">
              {slide.heading[0]}
              <br />
              {slide.heading[1]}
            </h2>
            <p className="fs-4 my-4">{slide.paragraph}</p>
            <NavLink
              to="/shop"
              className="shop-btn d-inline-block mt-2 text-decoration-none text-uppercase fw-500 letter-space-2 lh-1 bg-black text-white rounded-0 border-0"
            >
              shop now
            </NavLink>
          </div>
        </div>
        <div className="col-md-6 px-0 h-100">
          <img src={slide.src} className="slide d-block w-100 h-100" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
