// Imported components
import Loader from "../global/loader";

const Addresses = ({ user }) => {
  return user ? (
    <div className="addresses">
      <p className="info gray-text mb-4">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="row m-0">
        <div className="col-lg-6 px-0 pe-lg-2 mb-4 mb-lg-0">
          <div className="address-holder main-border h-100">
            <div className="d-flex justify-content-between align-items-center gray-bg py-2 px-3">
              <h2 className="mb-0 py-1 fs-5 fw-normal">Billing address</h2>
              <button type="button" className="edit-btn btn p-0 border-0">
                Edit
              </button>
            </div>
            <address className="p-3 mb-0 gray-text">
              {user.addresses.billingAddress.street},
              <br />
              {user.addresses.billingAddress.city}.
              <br />
              {user.addresses.billingAddress.zipCode}
            </address>
          </div>
        </div>
        <div className="col-lg-6 px-0 ps-lg-2">
          <div className="address-holder main-border h-100">
            <div className="d-flex justify-content-between align-items-center gray-bg py-2 px-3">
              <h2 className="mb-0 py-1 fs-5 fw-normal">Shipping address</h2>
              <button
                type="button"
                className="edit-btn color-trans btn p-0 border-0"
              >
                Edit
              </button>
            </div>
            <address className="p-3 mb-0 gray-text">
              {user.addresses.shippingAddress.street},
              <br />
              {user.addresses.shippingAddress.city}.
              <br />
              {user.addresses.shippingAddress.zipCode}
              <br />
              Phone: {user.addresses.shippingAddress.tel}
            </address>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Addresses;
