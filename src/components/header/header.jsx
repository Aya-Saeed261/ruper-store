import { useState } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Imported components
import SearchBtn from "./searchBtn";
import LoginBtn from "./loginBtn";
import WishListBtn from "./wishListBtn";
import ShoppingCartBtn from "./shoppingCartBtn";
import Navbar from "./navbar";
import BottomNav from "./bottomNav";

// Imported assets
import logo from "../../assets/logo.png";

const Header = ({ isLoggedIn, cart, wishList, isScreenLg }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="main-header">
      <div className="content-holder container-fluid">
        <div className="row align-items-center m-0 px-md-2 px-xl-3">
          <div className="col-4 px-0">
            {isScreenLg ? (
              <SearchBtn />
            ) : (
              <button
                type="button"
                aria-label="Show navigation menu"
                className="btn p-0 border-0 fs-5"
                onClick={() => setShowNav(true)}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            )}
          </div>
          <div className="col-4 px-0">
            <NavLink
              to={"/"}
              className="d-block text-center text-decoration-none text-uppercase text-dark"
            >
              <img src={logo} alt="ruper logo" width="100px" />
            </NavLink>
          </div>
          {isScreenLg ? (
            <div className="col-4 px-0 d-flex align-items-center justify-content-end gap-4">
              <LoginBtn isLoggedIn={isLoggedIn} />
              <WishListBtn wishList={wishList} />
              <ShoppingCartBtn cart={cart} />
            </div>
          ) : (
            <div className="col-4 px-0 text-end">
              <ShoppingCartBtn cart={cart} />
            </div>
          )}
        </div>
      </div>
      <Navbar
        showNav={showNav}
        isScreenLg={isScreenLg}
        hideNav={() => setShowNav(false)}
      />
      {!isScreenLg ? (
        <BottomNav isLoggedIn={isLoggedIn} wishList={wishList} />
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
