// Imported components
import Loader from "../../global/loader";
import SectionHeader from "../../global/sectionHeader";
import CartTotals from "./cartTotals";
import ItemsTable from "./itemsTable";

const CartPage = ({ cart, onAmountChange, OnRemoveFromCart, totalCost }) => {
  return (
    <section className="cart-page">
      <SectionHeader page="shop" pageLink="shop" category="shopping cart" />
      <div className="items-holder container-fluid py-5">
        {cart ? (
          cart.length > 0 ? (
            <div className="row m-0 py-3 px-xl-3">
              <div className="col-lg-8 px-0 ps-lg-1 mb-4 mb-lg-0 pb-3 pb-lg-0">
                <ItemsTable
                  cart={cart}
                  onAmountChange={onAmountChange}
                  OnRemoveFromCart={OnRemoveFromCart}
                />
              </div>
              <div className="col-lg-4 px-0 ps-lg-4">
                <CartTotals totalCost={totalCost} />
              </div>
            </div>
          ) : (
            <p className="fs-5 text-center fw-500 mb-0">No items in cart</p>
          )
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default CartPage;
