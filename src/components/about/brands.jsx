import { useState } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// React multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// React multi-carousel breakpoints
const responsive = {
  Xlarge: {
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
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
    partialVisibilityGutter: 40,
  },
};

const Brands = ({ brands }) => {
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
      className={`brands row m-0 border-separator py-3 ${
        isDragged ? "dragged" : ""
      }`}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseMove={handleDrag}
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
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {brands.map((brand) => (
          <NavLink
            to=""
            key={brand.id}
            className="d-block px-2 px-md-4 px-lg-5 overflow-hidden"
          >
            <img src={brand.img} alt={brand.name} className="img-fluid" />
          </NavLink>
        ))}
      </Carousel>
    </div>
  );
};

export default Brands;
