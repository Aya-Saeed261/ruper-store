// React router dom
import { NavLink } from "react-router-dom";

// Imported assets
import icon from "../../assets/icons/heart-icon.svg";

const WishListBtn = ({ wishList }) => {
  return (
    <NavLink
      to="/shop/wishlist"
      className="wish-list-btn d-block position-relative"
    >
      <img src={icon} alt="" />
      <span className="amount-badge position-absolute top-0 end-0 badge rounded-pill bg-dark">
        {wishList ? (wishList.length > 99 ? "99+" : wishList.length) : 0}
        <span className="visually-hidden">Wish list products</span>
      </span>
    </NavLink>
  );
};

export default WishListBtn;
