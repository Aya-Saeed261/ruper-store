import { useState } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// Imported assets
import paymentMethods from "../assets/payment-methods.png";

const Footer = () => {
  const [newsLetterEmail, setEmail] = useState("");

  return (
    <footer className="main-footer">
      <div className="top-sec container-fluid py-5">
        <div className="row m-0 pt-3 px-md-2 px-xl-3">
          <div className="col-lg-3 col-md-6 px-0 pb-2 pb-lg-0 mb-4 mb-lg-0">
            <h2 className="fw-normal text-uppercase letter-space-2 mb-4">
              Contact us
            </h2>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <NavLink
                  to="/contact"
                  className="w-fit color-trans d-block text-decoration-none gray-text text-capitalize"
                >
                  616.774.0561
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/contact"
                  className="w-fit color-trans d-block text-decoration-none gray-text"
                >
                  866.453.4748
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/contact"
                  className="w-fit color-trans d-block text-decoration-none gray-text"
                >
                  HR Fax: 810.222.5439
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="w-fit color-trans d-block text-decoration-none gray-text"
                >
                  sales@ruperfurniture.com
                </NavLink>
              </li>
            </ul>
            <ul className="social-links list-unstyled mb-0 d-flex gap-4">
              <li>
                <NavLink
                  to="/"
                  className="d-block text-decoration-none text-body"
                  aria-label="Twitter link"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="d-block text-decoration-none text-body"
                  aria-label="Instagarm link"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="d-block text-decoration-none text-body"
                  aria-label="Dribble link"
                >
                  <FontAwesomeIcon icon={faDribbble} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="d-block text-decoration-none text-body"
                  aria-label="Behance link"
                >
                  <FontAwesomeIcon icon={faBehance} />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 px-0 pe-lg-2 pb-2 pb-lg-0 mb-4 mb-lg-0">
            <h2 className="fw-normal text-uppercase letter-space-2 mb-4">
              Showroom
            </h2>
            <address className="gray-text mb-0 lh-base">
              <div className="mb-2">
                1000 84th Street SW , Byron Center, MI 49315
              </div>
              <div className="mb-2"> AmericasMart Bldg. #1 </div>
              <div> Suite 5C-1, Atlanta, GA 30303</div>
            </address>
          </div>
          <div className="col-lg-3 col-md-6 px-0 ps-lg-2 pb-2 pb-md-0 mb-4 mb-md-0">
            <h2 className="fw-normal text-uppercase letter-space-2 mb-4">
              Services
            </h2>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <NavLink
                  to="/shop"
                  className="w-fit color-trans d-block text-decoration-none gray-text"
                >
                  Sale
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/shop"
                  className="w-fit color-trans d-block text-decoration-none gray-text text-capitalize"
                >
                  Quick ship
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/shop"
                  className="w-fit color-trans d-block text-decoration-none gray-text text-capitalize"
                >
                  New designs
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/shop"
                  className="w-fit color-trans d-block text-decoration-none gray-text text-capitalize"
                >
                  Accidental fabric protection
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/shop"
                  className="w-fit color-trans d-block text-decoration-none gray-text text-capitalize"
                >
                  Furniture care
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className="w-fit color-trans d-block text-decoration-none gray-text text-capitalize"
                >
                  Gift cards
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 px-0">
            <h2 className="fw-normal text-uppercase letter-space-2 mb-4">
              Newsletter
            </h2>
            <p className="gray-text mb-4">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <form
              action="#"
              className="row m-0 mb-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="col-10 ps-0 pe-1">
                <input
                  type="email"
                  name="newsletter-email"
                  id="newsletter-email"
                  placeholder="Email address"
                  value={newsLetterEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  className="d-block w-100 px-3 py-2 border-0"
                  required
                />
              </div>
              <div className="col-2 px-0">
                <button
                  type="submit"
                  className="submit-btn opacity-trans btn h-100 w-100 rounded-0 bg-black text-white"
                  aria-label="Subscribe to newsletter"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              </div>
            </form>
            <img
              src={paymentMethods}
              alt="Supported payment methods"
              className="d-block img-fluid pt-3"
            />
          </div>
        </div>
      </div>
      <p className="container-fluid py-4 gray-text text-center mb-0">
        Copyright © 2022. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
