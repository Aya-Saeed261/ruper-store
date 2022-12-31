// Imported components
import SectionHeader from "../../global/sectionHeader";
import BillingDetails from "./billing-details/billingDetails";
import PaymentDetails from "./payment-details/paymentDetails";

const Checkout = ({ isLoggedIn, cart, cartTotal }) => {
  return (
    <section className="checkout">
      <SectionHeader page="shop" pageLink="shop" category="check out" />
      <div className="container-fluid py-5">
        <form
          action="#"
          className="row m-0 py-3 pb-md-5 px-xl-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="col-lg-7 col-xl-8 px-0 pe-lg-4">
            <BillingDetails isLoggedIn={isLoggedIn} />
          </div>
          <div className="col-lg-5 col-xl-4 mt-5 mt-lg-0 px-0 ps-lg-2">
            <PaymentDetails cart={cart} cartTotal={cartTotal} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
