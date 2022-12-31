// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogCard = ({ img, icon, heading, description, bgColor, reverse }) => {
  return (
    <article className="blogCard row m-0 mb-5">
      <div
        className={`col-md-6 px-0 overflow-hidden ${reverse ? "order-1" : ""}`}
      >
        <NavLink to="" className="d-block h-100">
          <img src={img} alt="" className="image d-block w-100 h-100" />
        </NavLink>
      </div>
      <div
        className={`text-holder col-md-6 text-white d-flex align-items-center ${bgColor}-bg ${
          reverse ? "order-0" : ""
        }`}
      >
        <div>
          <FontAwesomeIcon icon={icon} className="icon mb-2 shake-on-hover" />
          <h3 className="heading text-capitalize fw-normal mb-xl-4 pt-2">
            <NavLink to="" className="text-white">
              {heading}
            </NavLink>
          </h3>
          <p className="lh-lg mb-4 pb-xl-3">{description}</p>
          <NavLink
            to=""
            className="read-more text-uppercase text-white fw-500 letter-space-2"
          >
            Read more
          </NavLink>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
