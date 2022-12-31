import { Fragment, useRef, useEffect } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Animation library
import autoAnimate from "@formkit/auto-animate";

// Imported components
import SectionHeader from "../global/sectionHeader";
import Loader from "../global/loader";

const WishList = ({ wishList, onDelete, onAddToCart }) => {
  const parentRef = useRef();

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, []);

  return (
    <section className="wish-list pb-4">
      <SectionHeader page="shop" pageLink="shop" category="wishlist" />
      <div className="container-fluid mt-3 px-xl-4 py-5">
        <ul
          ref={parentRef}
          className={`list-unstyled mt-2 mb-0 ${
            wishList && wishList.length > 0 ? "main-border" : ""
          }`}
        >
          {wishList ? (
            wishList.length > 0 ? (
              wishList.map((item) => (
                <li
                  key={item.id}
                  className="d-flex flex-column flex-md-row justify-content-between align-items-md-center"
                >
                  <div className="d-flex gap-3 align-items-start align-items-md-center p-3">
                    <button
                      type="button"
                      className="remove-btn color-trans btn lh-1 p-0 p-md-2"
                      aria-label="Remove item"
                      onClick={() => onDelete(item)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <div className="d-flex align-items-start align-items-md-center gap-3">
                      <NavLink
                        to={`/shop/${item.name.replaceAll(" ", "-")}`}
                        state={{ from: { product: item, inWishList: true } }}
                        className="text-decoration-none text-body"
                        aria-label={`Go to product page`}
                      >
                        <img
                          src={item.imgs[0].src}
                          alt={item.name}
                          className="image d-block img-fluid main-border"
                        />
                      </NavLink>
                      <div>
                        <h2 className="fs-6 fw-normal mb-0 mb-md-2">
                          <NavLink
                            to={`/shop/${item.name.replaceAll(" ", "-")}`}
                            state={{
                              from: { product: item, inWishList: true },
                            }}
                            className="text-decoration-none text-body"
                          >
                            {item.name}
                          </NavLink>
                        </h2>
                        <p className="mb-1 mb-md-2">
                          {item.discount ? (
                            <Fragment>
                              <span className="price-color">
                                <del>${item.price.toFixed(2)}</del>
                              </span>
                              <span className="red-text">
                                {" "}
                                ${(item.price - item.discount).toFixed(2)}
                              </span>
                            </Fragment>
                          ) : (
                            <span className="gray-text">
                              ${item.price.toFixed(2)}
                            </span>
                          )}
                        </p>
                        <p className="date gray-text mb-0 lh-1">
                          {item.addDate}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-dashed d-flex flex-row flex-md-column justify-content-between align-items-center align-items-md-end p-3">
                    <p className="gray-text text-end mb-0 mb-md-3">
                      {item.inStock ? "In stock" : "Out of stock"}
                    </p>
                    <button
                      type="button"
                      className="add-to-cart opacity-trans btn bg-black text-white py-1 px-3 rounded-0"
                      onClick={() => onAddToCart(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center fw-500 fs-5 mb-0">
                No items were added
              </p>
            )
          ) : (
            <Loader />
          )}
        </ul>
      </div>
    </section>
  );
};

export default WishList;
