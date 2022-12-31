import { Fragment, useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

// Imported components
import QuickViewCarousel from "./quickViewCarousel";

const QuickViewModal = ({ product, onAddToCart }) => {
  const [amount, setAmount] = useState(1);
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
      className="modal fade"
      id="quickViewModal"
      tabIndex="-1"
      aria-labelledby="Quick view modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered overflow-hidden">
        <div className="modal-content rounded-0">
          <div className="modal-body p-0">
            {product ? (
              <div className="row m-0">
                <div className="col-md-6 col-lg-7 px-0 pe-lg-5">
                  <QuickViewCarousel product={product} />
                </div>
                <div className="col-md-6 col-lg-5 py-5 px-4 px-lg-5 ps-lg-0 align-self-center">
                  <h2 className="fs-3 fw-normal mb-2">{product.name}</h2>
                  <div className="price-holder letter-space-1 mb-2 fs-4">
                    {product.discount ? (
                      <Fragment>
                        <span className="fs-5 price-color">
                          <del>${product.price.toFixed(2)}</del>
                        </span>
                        <span>
                          {" "}
                          ${(product.price - product.discount).toFixed(2)}
                        </span>
                      </Fragment>
                    ) : (
                      `$${product.price.toFixed(2)}`
                    )}
                  </div>
                  <div className="d-flex gap-3 align-items-center mb-4 pb-4 main-border border-0 border-bottom">
                    <ul className="rate-holder list-unstyled mb-0 d-flex gap-2">
                      {handleRate(product.stars).map((rate, indx) => (
                        <li key={indx}>{rate}</li>
                      ))}
                    </ul>
                    <p className="mb-0 gray-text">
                      ({product.ratings} ratings)
                    </p>
                  </div>
                  <p className="description overflow-hidden mb-4 gray-text pt-2">
                    {product.description}
                  </p>
                  <div className="row m-0 pt-3">
                    <div className="col-md-4 px-0 mb-2 mb-md-0">
                      <div className="amount-holder h-100 d-flex">
                        <button
                          type="button"
                          className="amount-controler px-3 bg-transparent border-0 gray-text text-center"
                          aria-label="Decrease amount"
                          onClick={() => {
                            if (amount === 1) return;
                            setAmount(amount - 1);
                          }}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="w-100 fw-500 d-flex justify-content-center py-3 lh-1 py-md-0 align-items-center">
                          {amount}
                        </span>
                        <button
                          type="button"
                          className="amount-controler px-3 bg-transparent border-0 gray-text"
                          aria-label="Increase amount"
                          onClick={() => setAmount(amount + 1)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                    <div className="col-md-8 px-0 ps-md-2">
                      <button
                        type="button"
                        className="add-to-cart opacity-trans btn w-100 bg-black text-white text-uppercase letter-space-1 px-4 py-3 lh-1 rounded-0 fw-500"
                        onClick={() => onAddToCart(product, amount)}
                      >
                        Add to cart
                      </button>
                    </div>
                    <button
                      type="button"
                      className="buy-it w-100 border border-dark bg-white text-uppercase letter-space-1 px-4 py-3 lh-1 mt-2 rounded-0 fw-500"
                    >
                      Buy it now
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            type="button"
            className="btn btn-secondary d-none invisible"
            aria-hidden={true}
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
