import { Fragment } from "react";

// React router
import { NavLink } from "react-router-dom";

const SectionHeader = ({ page, pageLink, category }) => {
  return (
    <header className="section-header pb-3 text-center">
      <div className="container-fluid">
        <h1 className="heading fw-normal mt-3 text-capitalize">
          {page === "shop" ? category : page}
        </h1>
        <div className="path mb-3 d-flex justify-content-center gap-2">
          <NavLink to="/" className="gray-text fw-500">
            Home
          </NavLink>
          <span className="gray-text">/</span>
          <NavLink
            to={`/${pageLink}`}
            state={pageLink === "shop" ? { from: "All" } : null}
            className={`fw-500 text-capitalize ${
              category ? "gray-text" : "text-body"
            }`}
          >
            {page}
          </NavLink>
          {category ? (
            <Fragment>
              <span className="gray-text">/</span>
              <span className="fw-500">{category}</span>
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
