import { useState } from "react";

// React multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Imported components
import ProductCardGrid from "../../global/productCardGrid";

// React multi carousel breakpoints
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
  },
  large: {
    breakpoint: { max: 1199, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 3,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 767, min: 480 },
    items: 2,
    partialVisibilityGutter: 60,
  },
  small: {
    breakpoint: { max: 479, min: 0 },
    items: 1,
    partialVisibilityGutter: 50,
  },
};

const TopSec = ({
  bestSellers,
  onAddtoWishList,
  onAddToCart,
  onQuickView,
  onCompare,
  wishList,
  isScreenLg,
}) => {
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
      className="container-fluid pb-5 pt-3 mb-4"
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
        {bestSellers.map((product) => {
          let inWishList;
          if (wishList) {
            inWishList =
              wishList.findIndex((item) => item.id === product.id) === -1
                ? false
                : true;
          }
          return (
            <div
              className={`product product-grid px-2 px-xl-3 ${
                isDragged ? "dragged" : ""
              }`}
              onMouseDown={() => setIsMouseDown(true)}
              onMouseMove={handleDrag}
              key={product.id}
            >
              <ProductCardGrid
                product={product}
                onAddtoWishList={onAddtoWishList}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                onCompare={onCompare}
                inWishList={inWishList}
                isScreenLg={isScreenLg}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TopSec;
