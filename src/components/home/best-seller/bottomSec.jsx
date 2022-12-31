import { useEffect, useState } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Imported assets
import design from "../../../assets/discover/discover.jpg";
import Loader from "./../../global/loader";

const BottomSec = ({ allProducts, wishList }) => {
  const [chair, setChair] = useState();
  const [sofa, setSofa] = useState();
  const chairName = "Zunkel Schwarz";
  const sofaName = "Mundo Sofa With Cushion";

  useEffect(() => {
    allProducts.forEach((product) => {
      if (product.name === chairName) {
        const inWishList =
          wishList.findIndex((item) => item.name === chairName) === -1
            ? false
            : true;
        setChair({ product, inWishList });
      } else if (product.name === sofaName) {
        const inWishList =
          wishList.findIndex((item) => item.name === sofaName) === -1
            ? false
            : true;
        setSofa({ product, inWishList });
      }
    });
  }, [allProducts, wishList]);

  return (
    <div className="bottom-sec container-fluid">
      <div className="row m-0 px-md-2 px-xl-3">
        <div className="col-md-6 mt-0 px-0 position-relative">
          <img src={design} alt="" className="d-block w-100 img-fluid" />
          <div className="chair-info-holder info-holder position-absolute">
            <button
              type="button"
              aria-label="View product info"
              className="view-product-btn position-relative p-0 btn bg-white border-0 rounded-circle"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            {chair ? (
              <NavLink
                to={`/shop/${chairName.replaceAll(" ", "-")}`}
                state={{ from: chair }}
                className="discover-card opacity-trans d-block bg-white text-decoration-none position-absolute bottom-50 p-2 pb-4 shadow text-center"
              >
                <img
                  src={chair.product.imgs[0].src}
                  alt={chairName}
                  className="d-block img-fluid"
                />
                <p className="text-body mb-2 mt-3">{chairName}</p>
                <p className="mb-0 fw-500">
                  <span className="price-color text-decoration-line-through">
                    $150.00
                  </span>
                  <span className="red-text"> $100.00</span>
                </p>
              </NavLink>
            ) : (
              <Loader />
            )}
          </div>
          <div className="sofa-info-holder info-holder position-absolute">
            <button
              type="button"
              aria-label="View product info"
              className="view-product-btn position-relative p-0 btn bg-white border-0 rounded-circle"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            {sofa ? (
              <NavLink
                to={`/shop/${sofaName.replaceAll(" ", "-")}`}
                state={{ from: sofa }}
                className="discover-card opacity-trans d-block bg-white text-decoration-none position-absolute bottom-50 p-2 pb-3 pb-lg-4 shadow text-center"
              >
                <img
                  src={sofa.product.imgs[0].src}
                  alt={sofaName}
                  className="d-block img-fluid"
                />
                <p className="text-body mb-2 mt-3">{sofaName}</p>
                <p className="mb-0 fw-500 price-color">$150.00</p>
              </NavLink>
            ) : (
              <Loader />
            )}
          </div>
        </div>
        <div className="text-holder col-md-6 mt-0 py-5 py-md-0 px-2 px-md-0 text-white d-flex align-items-center justify-content-center text-center">
          <div className="py-2 py-md-0">
            <p className="fs-5">Discover the new Koti Sofa</p>
            <h3 className="heading fw-light mb-3">
              Like lounging on
              <br />a cloud
            </h3>
            <NavLink
              to="/shop"
              className="shop-btn d-inline-block mt-2 text-decoration-none text-uppercase fw-500 letter-space-2 lh-1 bg-black text-white rounded-0 border-0"
            >
              shop now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSec;
