// Imported icon
import icon from "../../assets/icons/cart-icon.svg";

const ShoppingCartBtn = ({ cart }) => {
  return (
    <button
      type="button"
      className="btn p-0 text-dark border-0 position-relative"
      data-bs-toggle="modal"
      data-bs-target="#shoppingCartModal"
      aria-label="Show shopping cart"
    >
      <img src={icon} alt="" />
      <span className="amount-badge position-absolute top-0 end-0 badge rounded-pill bg-dark">
        {cart ? (cart.length > 99 ? "99+" : cart.length) : 0}
        <span className="visually-hidden">Cart products</span>
      </span>
    </button>
  );
};

export default ShoppingCartBtn;
