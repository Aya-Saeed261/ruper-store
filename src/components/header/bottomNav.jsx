// React router dom
import { NavLink } from "react-router-dom";

// Imported components
import SearchBtn from "./searchBtn";
import LoginBtn from "./loginBtn";
import WishListBtn from "./wishListBtn";

// Imported assets
import storeIcon from "../../assets/icons/storefront-icon.svg";

const BottomNav = ({ isLoggedIn, wishList }) => {
  return (
    <ul className="bottom-nav list-unstyled mb-0 row w-100 m-0 bg-white py-3 position-fixed bottom-0 start-0">
      <li className="col-3">
        <NavLink to="/shop" className="d-block mx-auto" aria-label="Go to shop">
          <img src={storeIcon} alt="" />
        </NavLink>
      </li>
      <li className="col-3 text-center">
        <LoginBtn isLoggedIn={isLoggedIn} />
      </li>
      <li className="col-3 text-center">
        <SearchBtn />
      </li>
      <li className="col-3">
        <WishListBtn wishList={wishList} />
      </li>
    </ul>
  );
};

export default BottomNav;
