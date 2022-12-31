import { useState } from "react";

// React router dom
import { NavLink } from "react-router-dom";

const CartTotals = ({ totalCost }) => {
  const [value, setValue] = useState("free");

  return (
    <div className="cart-totals">
      <h2 className="heading py-3 px-4 mb-0">Cart totals</h2>
      <div className="gray-bg p-4">
        <div className="row m-0 mb-4 pb-2 align-items-center">
          <div className="col-6 ps-0">
            <h3 className="fw-normal fs-6">Subtotal</h3>
          </div>
          <div className="subtotal col-6 pe-0 fw-500 letter-space-1">
            ${totalCost.toFixed(2)}
          </div>
        </div>
        <div className="row m-0 mb-5 align-items-center">
          <div className="col-6 ps-0">
            <h3 className="fw-normal fs-6">Shipping</h3>
          </div>
          <div className="col-6 pe-0">
            <div className="d-flex align-items-center gap-1 mb-1">
              <input
                type="radio"
                name="shipping"
                id="free"
                value="free_shipping"
                className="rounded-circle"
                checked={value === "free" ? true : false}
                onChange={() => setValue("free")}
              />
              <label htmlFor="free" className="gray-text">
                Free shipping
              </label>
            </div>
            <div className="d-flex align-items-center gap-1 mb-3">
              <input
                type="radio"
                name="shipping"
                value="flat_rate"
                id="rate"
                className="rounded-circle"
                checked={value === "rate" ? true : false}
                onChange={() => setValue("rate")}
              />
              <label htmlFor="rate" className="gray-text">
                Flat rate
              </label>
            </div>
            <p className="gray-text mb-0">
              Shipping options will be updated during checkout.
            </p>
          </div>
        </div>
        <div className="row m-0 mb-3 align-items-center mb-4 pb-2">
          <div className="col-6 ps-0">
            <h3 className="fw-normal fs-6">Total</h3>
          </div>
          <div className="col-6 pe-0 fw-500 fs-5 letter-space-1">
            ${totalCost.toFixed(2)}
          </div>
        </div>
        <NavLink
          to="/shop/checkout"
          className="checkout-btn opacity-trans d-block w-100 mb-3 bg-black text-white text-uppercase text-center fw-500 letter-space-2 p-3"
        >
          Proceed to checkout
        </NavLink>
      </div>
    </div>
  );
};

export default CartTotals;
