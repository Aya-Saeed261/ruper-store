// React router dom
import { NavLink } from "react-router-dom";

// Imported assets
import feature1 from "../../../assets/our-collection/feature1.jpg";
import feature2 from "../../../assets/our-collection/feature2.jpg";
import feature3 from "../../../assets/our-collection/feature3.jpg";

const BottomSec = () => {
  return (
    <div className="bottom-sec container-fluid py-5">
      <div className="row py-5 m-0">
        <div className="col-md-4 mt-0 mb-5 mb-md-0 px-0 px-md-2 px-xl-3">
          <NavLink
            to="/shop"
            className="img-holder d-block text-decoration-none mb-3 mb-md-4 overflow-hidden"
          >
            <img src={feature1} alt="" className="d-block img-fluid" />
          </NavLink>
          <div>
            <h3 className="fw-light">
              <NavLink to="/shop" className="text-decoration-none text-body">
                Sink into Luxe
              </NavLink>
            </h3>
            <p className="gray-text mb-0">
              Statement-making, while keeping a low profile.
            </p>
          </div>
        </div>
        <div className="col-md-4 mt-0 mb-5 mb-md-0 px-0 px-md-2 px-xl-3">
          <NavLink
            to="/shop"
            className="img-holder d-block text-decoration-none mb-3 mb-md-4 overflow-hidden"
          >
            <img src={feature2} alt="" className="d-block img-fluid" />
          </NavLink>
          <div>
            <h3 className="fw-light">
              <NavLink to="/shop" className="text-decoration-none text-body">
                Sitting Pretty
              </NavLink>
            </h3>
            <p className="gray-text mb-0">
              There’s always room for one more guest.
            </p>
          </div>
        </div>
        <div className="col-md-4 mt-0 px-0 px-md-2 px-xl-3">
          <NavLink
            to="/shop"
            className="img-holder d-block text-decoration-none mb-3 mb-md-4 overflow-hidden"
          >
            <img src={feature3} alt="" className="d-block img-fluid" />
          </NavLink>
          <div>
            <h3 className="fw-light">
              <NavLink to="/shop" className="text-decoration-none text-body">
                Modern Curves
              </NavLink>
            </h3>
            <p className="gray-text mb-0">
              A curvaceous approach that covers all the bases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSec;
