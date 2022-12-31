import { useState } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// React multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// React multi-carousel breakpoints
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 5,
  },
  large: {
    breakpoint: { max: 1199, min: 992 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 4,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 767, min: 480 },
    items: 3,
    partialVisibilityGutter: 20,
  },
  small: {
    breakpoint: { max: 479, min: 0 },
    items: 2,
    partialVisibilityGutter: 20,
  },
};

const TopSec = ({ categories }) => {
  const [isDragged, setIsdragged] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Disable link pointer events if it's being dragged
  const handleDrag = () => {
    if (!isMouseDown) {
      if (isDragged) setIsdragged(false);
      return;
    }
    setIsdragged(true);
  };

  return (
    <div
      className="container-fluid pb-5"
      onMouseLeave={() => setIsMouseDown(false)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      <Carousel
        responsive={responsive}
        containerClass="multi-carousel"
        draggable
        swipeable
        partialVisible
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        removeArrowOnDeviceType={["tablet", "mobile", "small"]}
      >
        {categories.map((category) => {
          if (category.name === "All") return null;
          return (
            <div
              className={`category shake-on-hover px-2 px-md-2 px-xl-5 py-4 ${
                isDragged ? "dragged" : ""
              }`}
              key={category.id}
              onMouseDown={() => setIsMouseDown(true)}
              onMouseMove={handleDrag}
            >
              <NavLink
                to="/shop"
                state={{ from: category.name }}
                className="d-block text-decoration-none"
                aria-label={`View ${category.name} products`}
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="d-block img-fluid rounded-circle"
                />
              </NavLink>

              <h3 className="name fw-normal text-center mb-0 mt-3">
                <NavLink
                  to="/shop"
                  state={{ from: category.name }}
                  className="text-body text-decoration-none position-relative"
                >
                  {category.name}
                </NavLink>
              </h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TopSec;
