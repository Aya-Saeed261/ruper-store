import PaymentMethods from "./paymentMethods";

const PaymentDetails = ({ cart, cartTotal }) => {
  return (
    <div className="border border-dark p-4 p-md-5">
      <h2 className="fw-normal fs-5 mb-4">Products</h2>
      <ul className="list-unstyled main-border border-0 border-bottom pb-3 mb-0">
        {cart
          ? cart.map((item) => (
              <li
                key={item.cartId}
                className="item d-flex justify-content-between gap-1 mb-3"
              >
                <div className="d-flex align-items-start gap-2">
                  <img
                    src={item.imgs[0].src}
                    alt={item.name}
                    className="image img-fluid main-border"
                  />
                  <div>
                    <h3 className="fw-normal fs-6 mb-1">{item.name}</h3>
                    <p className="fw-500 mb-0">QTY: {item.amount}</p>
                  </div>
                </div>
                <p className="fw-500 mb-0">
                  $
                  {item.discount
                    ? (item.price - item.discount).toFixed(2)
                    : item.price.toFixed(2)}
                </p>
              </li>
            ))
          : ""}
      </ul>
      <div className="py-4 d-flex align-items-center justify-content-between gap-2 main-border border-0 border-bottom">
        <h3 className="fw-normal fs-6 mb-0">Subtotal</h3>
        <div className="fw-500">${cartTotal}</div>
      </div>
      <div className="py-4 d-flex align-items-center justify-content-between gap-2 main-border border-0 border-bottom">
        <h3 className="fw-normal fs-6 mb-0">Shipping</h3>
        <div>
          <div className="d-flex align-items-center gap-2">
            <input
              type="radio"
              name="shipping"
              value="free"
              id="shipping_free"
              defaultChecked
            />
            <label htmlFor="shipping_free">Free shipping</label>
          </div>
          <div className="d-flex align-items-center gap-2">
            <input
              type="radio"
              name="shipping"
              value="rate"
              id="shipping_rate"
            />
            <label htmlFor="shipping_rate">Flat rate</label>
          </div>
        </div>
      </div>
      <div className="py-4 d-flex align-items-center justify-content-between gap-2">
        <h3 className="fw-normal fs-6 mb-0">Total</h3>
        <div className="fw-500 fs-5">${cartTotal}</div>
      </div>
      <PaymentMethods />
      <input
        type="submit"
        value="place order"
        className="d-block opacity-trans w-100 py-3 letter-space-1 bg-black text-white text-uppercase fw-500 border-0"
      />
    </div>
  );
};

export default PaymentDetails;
