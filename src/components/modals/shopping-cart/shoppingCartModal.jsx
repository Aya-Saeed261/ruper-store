import { useRef, useEffect } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Animation library
import autoAnimate from "@formkit/auto-animate";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Imported components
import Loader from "../../global/loader";
import CartItem from "./cartItem";
import ShippingProgress from "./shippingProgress";

const ShoppingCartModal = ({ cart, cartTotal, OnRemoveFromCart }) => {
  const closeRef = useRef();
  const parentRef = useRef();

  const handleCheckOut = (e) => {
    if (cartTotal === 0) {
      e.preventDefault();
      return;
    }
    closeModal();
  };

  const closeModal = () => {
    closeRef.current.click();
  };

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, []);

  return (
    <div
      className="modal fade"
      id="shoppingCartModal"
      tabIndex="-1"
      aria-labelledby="Shopping cart modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered me-md-4 overflow-hidden">
        <div className="modal-content rounded-0">
          <button
            type="button"
            className="close-btn btn rounded-0 bg-black text-white ms-auto lh-1"
            data-bs-dismiss="modal"
            aria-label="Close"
            ref={closeRef}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="modal-body">
            <div className="shopping-cart px-md-2 pb-md-2">
              <ul ref={parentRef} className="list-unstyled mb-0">
                {cart ? (
                  cart.length > 0 ? (
                    cart.map((item) => (
                      <CartItem
                        key={item.cartId}
                        item={item}
                        OnRemoveFromCart={OnRemoveFromCart}
                        onCloseModal={closeModal}
                      />
                    ))
                  ) : (
                    <li className="py-2 pb-4 text-center fw-500">
                      Cart is empty
                    </li>
                  )
                ) : (
                  <Loader />
                )}
              </ul>
              <div className="border border-1 border-dark border-start-0 border-end-0 d-flex justify-content-between align-items-center py-3">
                <h2 className="fs-6 fw-bold mb-0">Total:</h2>
                <span className="fw-bold fs-5">${cartTotal.toFixed(2)}</span>
              </div>
              <ShippingProgress cartTotal={cartTotal} />
              <div className="row m-0 pb-2 pt-3">
                <div className="col-6 ps-0">
                  <NavLink
                    to="/shop/cart"
                    className="view-cart d-block w-100 py-2 bg-black position-relative overflow-hidden text-white fw-500 text-center text-uppercase letter-space-1"
                    onClick={closeModal}
                  >
                    View cart
                  </NavLink>
                </div>
                <div className="col-6 pe-0">
                  <NavLink
                    to="/shop/checkout"
                    className="checkout d-block w-100 py-2 bg-black position-relative overflow-hidden text-white fw-500 text-center text-uppercase letter-space-1"
                    onClick={handleCheckOut}
                  >
                    Check out
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartModal;
