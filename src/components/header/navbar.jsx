// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ showNav, isScreenLg, hideNav }) => {
  return (
    <nav className={`${showNav ? "show" : ""}`}>
      {!isScreenLg ? (
        <button
          type="button"
          className="close-btn btn px-4 py-3 lh-1 bg-black text-white rounded-0 w-100 d-flex text-uppercase align-items-center justify-content-end gap-2"
          onClick={hideNav}
        >
          <span>close</span>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      ) : (
        ""
      )}
      <ul
        className="list-unstyled mb-0 d-flex flex-column flex-lg-row justify-content-center py-lg-3"
        id="navbarNavDropdown"
      >
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link text-uppercase lh-1 py-3 py-lg-1"
            aria-current="page"
            onClick={hideNav}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/shop"
            className="nav-link text-uppercase lh-1 py-3 py-lg-1"
            onClick={hideNav}
          >
            Shop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className="nav-link text-uppercase lh-1 py-3 py-lg-1"
            onClick={hideNav}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link text-uppercase lh-1 py-3 py-lg-1"
            onClick={hideNav}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/faq"
            className="nav-link text-uppercase lh-1 py-3 py-lg-1"
            onClick={hideNav}
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
