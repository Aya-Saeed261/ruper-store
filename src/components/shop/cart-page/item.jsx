import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Item = ({ product, onAmountChange, OnRemoveFromCart }) => {
  return (
    <tr className="product-holder">
      <td className="p-3 pe-1">
        <div className="d-flex align-items-center gap-4">
          <NavLink
            to={`/shop/${product.name.replaceAll(" ", "-")}`}
            state={{ from: { product, inWishList: product.inWishList } }}
          >
            <img
              src={product.imgs[0].src}
              alt={product.name}
              className="image img-fluid"
            />
          </NavLink>
          <NavLink
            to={`/shop/${product.name.replaceAll(" ", "-")}`}
            state={{ from: { product, inWishList: product.inWishList } }}
            className="name gray-text color-trans"
          >
            {product.name}
          </NavLink>
        </div>
      </td>
      <td className="align-middle py-3 px-1">
        $
        {product.discount
          ? (product.price - product.discount).toFixed(2)
          : product.price.toFixed(2)}
      </td>
      <td className="align-middle py-3 px-1">
        <div className="amount-holder main-border d-flex">
          <button
            type="button"
            className="amount-controler bg-transparent border-0 gray-text text-center"
            aria-label="Decrease amount"
            onClick={() => {
              if (product.amount === 1) return;
              onAmountChange(product.cartId, product.amount - 1);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className="flex-fill d-flex align-items-center justify-content-center">
            {product.amount}
          </div>
          <button
            type="button"
            className="amount-controler bg-transparent border-0 gray-text"
            aria-label="Increase amount"
            onClick={() => onAmountChange(product.cartId, product.amount + 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </td>
      <td className="align-middle py-3 px-1">
        $
        {product.discount
          ? ((product.price - product.discount) * product.amount).toFixed(2)
          : (product.price * product.amount).toFixed(2)}
      </td>
      <td className="align-middle py-3 ps-1 pe-3">
        <button
          type="button"
          className="remove-btn btn p-0 border-0"
          onClick={() => OnRemoveFromCart(product.cartId)}
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="icon rounded-circle"
          />
        </button>
      </td>
    </tr>
  );
};

export default Item;
