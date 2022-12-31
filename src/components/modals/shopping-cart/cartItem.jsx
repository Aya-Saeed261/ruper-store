// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const CartItem = ({ item, OnRemoveFromCart, onCloseModal }) => {
  return (
    <li className="d-flex justify-content-between gap-1 mb-3">
      <div className="d-flex gap-2">
        <NavLink
          to={`/shop/${item.name.replaceAll(" ", "-")}`}
          state={{ from: { product: item, inWishList: item.inWishList } }}
          onClick={onCloseModal}
        >
          <img
            src={item.imgs[0].src}
            alt={item.name}
            className="image img-fluid"
          />
        </NavLink>
        <div>
          <h3 className="fw-normal fs-6 mb-1">
            <NavLink
              to={`/shop/${item.name.replaceAll(" ", "-")}`}
              state={{ from: { product: item, inWishList: item.inWishList } }}
              className="text-body"
              onClick={onCloseModal}
            >
              {item.name}
            </NavLink>
          </h3>
          <p className="fw-500 gray-text mb-1">QTY: {item.amount}</p>
          <p className="gray-text mb-0">
            $
            {item.discount
              ? (item.price - item.discount).toFixed(2)
              : item.price.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="remove-btn btn p-0 border-0"
        onClick={() => OnRemoveFromCart(item.cartId)}
      >
        <FontAwesomeIcon icon={faCircleXmark} className="icon rounded-circle" />
      </button>
    </li>
  );
};

export default CartItem;
