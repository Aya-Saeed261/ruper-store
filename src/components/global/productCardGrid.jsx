import { Fragment } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Imported assets
import cart from "../../assets/icons/cart-icon.svg";
import wishList from "../../assets/icons/heart-icon.svg";
import compare from "../../assets/icons/shuffle-icon.svg";
import quickView from "../../assets/icons/search-icon.svg";

const ProductCardGrid = ({
  product,
  onAddtoWishList,
  onAddToCart,
  onQuickView,
  onCompare,
  inWishList,
  isScreenLg,
}) => {
  return (
    <Fragment>
      <div className="main-holder position-relative">
        <NavLink
          to={`/shop/${product.name.replaceAll(" ", "-")}`}
          state={{ from: { product, inWishList } }}
          className="img-holder d-inline-block text-decoration-none"
        >
          <img
            src={product.imgs[0].src}
            alt={product.name}
            className="d-block img-fluid"
          />
          <img
            src={product.imgs[1].src}
            alt={product.name}
            className="hover-mode opacity-trans d-block img-fluid position-absolute"
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
        <ul className="options w-100 left-0 list-unstyled mb-0 d-flex justify-content-center align-items-stretch gap-2 position-absolute">
          <li className="position-relative">
            <button
              type="button"
              className="btn bg-white rounded-0 border-0 lh-1"
              aria-label="Add to cart"
              onClick={() => onAddToCart(product, 1, inWishList)}
            >
              <img src={cart} alt="" />
            </button>
            <div className="title position-absolute start-50 translate-middle-x text-white bg-black rounded-1 px-2">
              Add to Cart
            </div>
          </li>
          <li className="position-relative">
            <button
              type="button"
              className="btn bg-white rounded-0 border-0 lh-1 h-100"
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
            <Fragment>
              <li className="position-relative">
                <button
                  type="button"
                  className="btn bg-white rounded-0 border-0 lh-1"
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
              <li className="position-relative">
                <button
                  type="button"
                  className="btn bg-white rounded-0 border-0 lh-1"
                  aria-label="Have a quick view"
                  data-bs-toggle="modal"
                  data-bs-target="#quickViewModal"
                  onClick={() => onQuickView(product)}
                >
                  <img src={quickView} alt="" />
                </button>
                <div className="title position-absolute start-50 translate-middle-x text-white bg-black rounded-1 px-2">
                  Quick View
                </div>
              </li>
            </Fragment>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="py-2">
        <NavLink
          to={`/shop/${product.name.replaceAll(" ", "-")}`}
          state={{ from: { product, inWishList } }}
          className="name w-fit d-block mx-auto text-decoration-none text-body text-uppercase letter-space-2 mb-2"
        >
          {product.name}
        </NavLink>
        <p className="price-color text-center letter-space-1 mb-0">
          {product.discount ? (
            <Fragment>
              <span className="price-color">
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
        </p>
      </div>
    </Fragment>
  );
};

export default ProductCardGrid;
