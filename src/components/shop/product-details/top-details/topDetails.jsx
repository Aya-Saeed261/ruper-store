import { useState, Fragment } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

// Imported components
import ImgsCarousel from "./imgsCarousel";

// Imported assets
import wishlist from "../../../../assets/icons/heart-icon.svg";
import compare from "../../../../assets/icons/shuffle-icon.svg";

const TopDetails = ({
  product,
  rate,
  onAddtoWishList,
  onAddToCart,
  onCompare,
  inWishList,
  isScreenLg,
  toggleInWishList,
}) => {
  const [amount, setAmount] = useState(1);
  const [checkedColor, setCheckedColor] = useState("");
  const [checkedSize, setCheckedSize] = useState("");

  const onWishListToggle = () => {
    onAddtoWishList(product);
    toggleInWishList(!inWishList);
  };

  return (
    <div className="container-fluid py-5">
      <div className="row m-0 pt-3 px-xl-3">
        <div className="col-lg-7 px-0 pe-lg-4 mb-4 mb-lg-0">
          <ImgsCarousel product={product} isScreenLg={isScreenLg} />
        </div>
        <div className="col-lg-5 px-0 ps-lg-2">
          <h2 className="fs-3 fw-normal mb-2">{product.name}</h2>
          <div className="price-holder letter-space-1 mb-2">
            {product.discount ? (
              <Fragment>
                <span className="old-price price-color">
                  <del>${product.price.toFixed(2)}</del>
                </span>
                <span className="red-text">
                  {" "}
                  ${(product.price - product.discount).toFixed(2)}
                </span>
              </Fragment>
            ) : (
              `$${product.price.toFixed(2)}`
            )}
          </div>
          <div className="d-flex gap-3 align-items-center mb-4">
            <ul className="rate-holder list-unstyled mb-0 d-flex gap-1">
              {rate.map((rate, indx) => (
                <li key={indx}>{rate}</li>
              ))}
            </ul>
            <p className="mb-0 gray-text">({product.ratings} ratings)</p>
          </div>
          <div className="border-separator pt-4">
            <p className="description overflow-hidden gray-text mb-4">
              {product.description}
            </p>
            <div className="sizes d-flex align-items-center gap-3 mb-3">
              <h3 className="text-uppercase mb-0 fs-6">Size :</h3>
              <div className="d-flex gap-2">
                {product.size.map((size, indx) => (
                  <div key={indx}>
                    <input
                      type="radio"
                      name="size"
                      id={size}
                      value={size}
                      checked={checkedSize === size ? true : false}
                      onChange={() => setCheckedSize(size)}
                    />
                    <label
                      htmlFor={size}
                      className="gray-text main-border rounded-circle text-uppercase d-flex align-items-center justify-content-center"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="colors d-flex align-items-center gap-3 mb-3">
              <h3 className="text-uppercase fs-6">Color :</h3>
              <div className="d-flex gap-2">
                {product.colors.map((color, indx) => (
                  <div key={indx}>
                    <input
                      type="radio"
                      name="color"
                      id={`color-${indx}`}
                      value={color}
                      checked={checkedColor === color ? true : false}
                      onChange={() => setCheckedColor(color)}
                    />
                    <label
                      htmlFor={`color-${indx}`}
                      className="rounded-circle"
                      style={{ backgroundColor: color }}
                    ></label>
                  </div>
                ))}
              </div>
            </div>
            <div className="row m-0 mb-3">
              <div className="col-4 col-md-3 px-0">
                <div className="amount-holder h-100 d-flex">
                  <button
                    type="button"
                    className="amount-controler px-2 px-md-3 bg-transparent border-0 gray-text text-center"
                    aria-label="Decrease amount"
                    onClick={() => {
                      if (amount === 1) return;
                      setAmount(amount - 1);
                    }}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="w-100 fw-500 d-flex justify-content-center align-items-center">
                    {amount}
                  </span>
                  <button
                    type="button"
                    className="amount-controler px-2 px-md-3 bg-transparent border-0 gray-text"
                    aria-label="Increase amount"
                    onClick={() => setAmount(amount + 1)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
              <div className="col-8 col-md-9 pe-0">
                <button
                  type="button"
                  className="add-to-cart opacity-trans btn w-100 bg-black opacity-75 text-white text-uppercase letter-space-1 px-4 py-3 lh-1 rounded-0 fw-500"
                  onClick={() => onAddToCart(product, amount, inWishList)}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <button
              type="button"
              className="buy-it w-100 fw-500 letter-space-1 py-2 mb-4 lh-lg text-uppercase bg-white"
            >
              Buy it now
            </button>
            <ul className="options list-unstyled mb-4 d-flex gap-3">
              <li>
                <button
                  type="button"
                  className="d-flex align-items-center gap-2 border-0 bg-transparent fw-500"
                  onClick={onWishListToggle}
                >
                  <span className="icon-holder d-flex justify-content-center align-items-center main-border rounded-circle">
                    {inWishList ? (
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="icon align-middle"
                      />
                    ) : (
                      <img
                        src={wishlist}
                        alt=""
                        className="d-block img-fluid"
                      />
                    )}
                  </span>
                  <span>Add to wishlist</span>
                </button>
              </li>
              {isScreenLg ? (
                <li>
                  <button
                    type="button"
                    className="d-flex align-items-center gap-2 border-0 bg-transparent fw-500"
                    aria-label="Add to compare table"
                    data-bs-toggle="modal"
                    data-bs-target="#compareModal"
                    onClick={() => onCompare(product)}
                  >
                    <span className="icon-holder d-flex justify-content-center align-items-center main-border rounded-circle">
                      <img src={compare} alt="" className="d-block img-fluid" />
                    </span>
                    <span>Compare</span>
                  </button>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <ul className="info list-unstyled mb-0 border-separator py-4 d-flex flex-wrap align-items-center gap-3">
            <li className="d-flex align-items-center gap-1">
              <h3 className="fw-normal gray-text letter-space-1 text-uppercase mb-0">
                SKU:
              </h3>
              <span className="fw-500 text-uppercase lh-1 letter-space-1">
                {product.SKU}
              </span>
            </li>
            <li className="d-flex align-items-center gap-1">
              <h3 className="fw-normal gray-text letter-space-1 text-uppercase mb-0">
                Category:
              </h3>
              <span className="fw-500 text-uppercase lh-1 letter-space-1">
                {product.category}
              </span>
            </li>
            {product.tags.length > 0 ? (
              <li className="d-flex align-items-center gap-1">
                <h3 className="fw-normal gray-text letter-space-1 text-uppercase mb-0">
                  Tags:
                </h3>
                <span className="fw-500 text-uppercase lh-1 letter-space-1">
                  {product.tags.join(", ")}
                </span>
              </li>
            ) : (
              ""
            )}
          </ul>
          <ul className="social-links list-unstyled mb-0 border-separator pt-4 pb-2 d-flex flex-wrap gap-2 align-items-center">
            <li>
              <NavLink
                to="#"
                className="text-decoration-none d-flex align-items-center gap-2"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-body" />
                <span className="gray-text text-uppercase letter-space-1 fw-500">
                  Facebook
                </span>
              </NavLink>
            </li>
            <li className="mx-5">
              <NavLink
                to="#"
                className="text-decoration-none d-flex align-items-center gap-2"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-body" />
                <span className="gray-text text-uppercase letter-space-1 fw-500">
                  Twitter
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="text-decoration-none d-flex align-items-center gap-2"
              >
                <FontAwesomeIcon icon={faPinterest} className="text-body" />
                <span className="gray-text text-uppercase letter-space-1 fw-500">
                  Pinterest
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopDetails;
