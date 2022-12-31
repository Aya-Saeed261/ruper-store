import { useState, useRef, useEffect } from "react";

// Animation library
import autoAnimate from "@formkit/auto-animate";

// Imported components
import Reviews from "./reviews";

const BottomDetails = ({ product }) => {
  const titles = ["Description", "Additional information", "Reviews"];
  const [active, setActive] = useState("Description");
  const [addedReviews, setAddedReviews] = useState([]);
  const parentRef = useRef();

  const handleNewReview = (reviews) => {
    setAddedReviews(reviews);
  };

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, []);

  return (
    <div className="bottom-details py-5 border-separator px-lg-5">
      <div className="container-fluid px-xl-5">
        <ul className="headings list-unstyled d-flex flex-column flex-md-row justify-content-center align-items-center mb-5">
          {titles.map((title, indx) => (
            <li key={indx}>
              <h3 className="heading mb-0 fw-light">
                <button
                  type="button"
                  className={`bg-transparent color-trans border-0 gray-text position-relative pb-md-2 px-0 ${
                    active === title ? "active" : ""
                  }`}
                  onClick={() => setActive(title)}
                >
                  {title === "Reviews"
                    ? `Reviews (${
                        product.reviews.length + addedReviews.length
                      })`
                    : title}
                </button>
              </h3>
            </li>
          ))}
        </ul>
        <div ref={parentRef}>
          {active === "Description" ? (
            <p className="product-description gray-text mb-0 lh-lg">
              {product.description}
            </p>
          ) : (
            ""
          )}
          {active === "Additional information" ? (
            <div className="add-info row m-0 main-border">
              <div className="color col-4 px-0">
                <p className="mb-0 py-3 px-4">Color</p>
              </div>
              <div className="col-8 px-0">
                <p className="mb-0 py-3 px-4">
                  {product.additionalInformation.colors.join(", ")}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {active === "Reviews" ? (
            <Reviews
              product={product}
              addedReviews={addedReviews}
              onNewReview={handleNewReview}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomDetails;
