import { Fragment, useEffect, useState } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

// Imported assets
import wishList from "../../../assets/icons/heart-icon.svg";
import compare from "../../../assets/icons/shuffle-icon.svg";

const ProductCardList = ({
  product,
  onAddtoWishList,
  onAddToCart,
  onCompare,
  inWishList,
  isScreenLg,
}) => {
  const [rate, setRate] = useState([]);
  useEffect(() => {
    if (product.stars >= 0) {
      const num = product.stars;
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
      setRate(rate);
    }
  }, [product]);

  return (
    <div className="product product-list px-0 row align-items-start m-0 mb-3">
      <NavLink
        to={`/shop/${product.name.replaceAll(" ", "-")}`}
        state={{ from: { product, inWishList } }}
        className="img-holder col-md-4 px-0 d-inline-block text-decoration-none overflow-hidden position-relative"
      >
        <img
          src={product.imgs[0].src}
          alt={product.name}
          className="main-mode d-block img-fluid w-100"
        />
        <img
          src={product.imgs[1].src}
          alt={product.name}
          className="hover-mode d-block img-fluid w-100 position-absolute"
        />
        {product.inStock ? (
          product.tags.includes("Hot") ? (
            <div className="tag status-tag position-absolute px-3 fw-500 red-text bg-white">
              Hot
            </div>
          ) : (
            ""
          )
        ) : (
          <div className="tag status-tag position-absolute px-3 fw-500 text-body bg-white">
            Out Of stock
          </div>
        )}
        {product.discount ? (
          <div className="tag discount-tag position-absolute px-2 fw-500 text-body bg-white">
            -{Math.round((product.discount * 100) / product.price)}%
          </div>
        ) : (
          ""
        )}
      </NavLink>
      <div className="col-md-8 px-0 ps-md-4 pt-3 pt-md-0">
        <h3 className="fs-4 fw-normal mb-2">
          <NavLink
            to={`/shop/${product.name.replaceAll(" ", "-")}`}
            state={{ from: { product, inWishList } }}
            className="name text-decoration-none text-body"
          >
            {product.name}
          </NavLink>
        </h3>
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
        <ul className="options list-unstyled d-flex align-items-stretch gap-3 mb-md-4 pb-md-3">
          <li>
            <button
              type="button"
              className="add-to-cart border border-dark btn bg-black text-white text-uppercase letter-space-1 px-4 py-2 rounded-0 fw-500"
              onClick={() => onAddToCart(product, 1, inWishList)}
            >
              Add to cart
            </button>
          </li>
          <li className="position-relative">
            <button
              type="button"
              className="btn border border-dark h-100 bg-white rounded-0"
              aria-label="Add to wishlist"
              onClick={() => onAddtoWishList(product)}
            >
              {inWishList ? (
                <FontAwesomeIcon icon={faHeart} className="icon align-middle" />
              ) : (
                <img src={wishList} alt="" />
              )}
            </button>
            <div className="title position-absolute start-50 translate-middle-x text-white bg-black rounded-1 px-2">
              Wishlist
            </div>
          </li>
          {isScreenLg ? (
            <li className="position-relative">
              <button
                type="button"
                className="btn border border-dark h-100 bg-white rounded-0"
                aria-label="Add to compare table"
                data-bs-toggle="modal"
                data-bs-target="#compareModal"
                onClick={() => onCompare(product)}
              >
                <img src={compare} alt="" />
              </button>
              <div className="title position-absolute start-50 translate-middle-x text-white bg-black rounded-1 px-2">
                Compare
              </div>
            </li>
          ) : (
            ""
          )}
        </ul>
        <p className="description overflow-hidden mb-0 gray-text">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCardList;
