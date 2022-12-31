import { useState } from "react";

// React multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Imported components
import ProductCardGrid from "../../global/productCardGrid";
import Loader from "../../global/loader";

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

const RelatedProducts = ({
  products,
  onAddtoWishList,
  onAddToCart,
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
    <div className="related-products py-5 px-lg-5 border-separator">
      <div className="container-fluid pb-5">
        <h2 className="heading w-fit fs-3 text-capitalize text-center mx-auto pb-3 mb-5 fw-normal position-relative">
          Related products
        </h2>
        {products ? (
          products.length > 1 ? (
            <div
              className="mx-auto"
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
                {products.map((product) => {
                  let inWishList;
                  if (wishList) {
                    inWishList =
                      wishList.findIndex((item) => item.id === product.id) ===
                      -1
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
                        onCompare={onCompare}
                        inWishList={inWishList}
                        isScreenLg={isScreenLg}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          ) : (
            <div className="col-12 col-md-4 col-xl-3 px-2 px-xl-3  product product-grid mx-auto">
              <ProductCardGrid
                product={products[0]}
                onAddtoWishList={onAddtoWishList}
                onAddToCart={onAddToCart}
                onCompare={onCompare}
                inWishList={
                  wishList.findIndex((item) => item.id === products[0].id) ===
                  -1
                    ? false
                    : true
                }
                isScreenLg={isScreenLg}
              />
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
