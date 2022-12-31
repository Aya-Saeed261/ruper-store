// Imported assets
import shippingIcon from "../../assets/icons/shipping-icon.svg";
import paymentIcon from "../../assets/icons/payment-icon.svg";
import returnIcon from "../../assets/icons/return-icon.svg";
import supportIcon from "../../assets/icons/support-icon.svg";

const Qualities = () => {
  return (
    <section>
      <div className="qualities py-3">
        <div className="row m-0 pb-5">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-0 pb-2 pb-lg-0">
            <img
              src={shippingIcon}
              alt=""
              className="d-block img-fluid mx-auto mb-3 shake-on-hover"
            />
            <h2 className="fs-5 fw-normal text-center">Free Shipping</h2>
            <p className="text-center gray-text mb-0">
              You will love at great low prices
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-0 pb-2 pb-lg-0">
            <img
              src={paymentIcon}
              alt=""
              className="d-block img-fluid mx-auto mb-3 shake-on-hover"
            />
            <h2 className="fs-5 fw-normal text-center">Flexible Payment</h2>
            <p className="text-center gray-text mb-0">
              Pay with Multiple Credit Cards
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 px-0 pb-2 pb-md-0">
            <img
              src={returnIcon}
              alt=""
              className="d-block img-fluid mx-auto mb-3 shake-on-hover"
            />
            <h2 className="fs-5 fw-normal text-center">14 Day Returns</h2>
            <p className="text-center gray-text mb-0">
              Within 30 days for an exchange.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 px-0">
            <img
              src={supportIcon}
              alt=""
              className="d-block img-fluid mx-auto mb-3 shake-on-hover"
            />
            <h2 className="fs-5 fw-normal text-center">Online Support</h2>
            <p className="text-center gray-text mb-0">
              24 hours a day, 7 days a week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
