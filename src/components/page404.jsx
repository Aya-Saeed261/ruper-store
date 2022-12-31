// React router
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Page404 = () => {
  return (
    <section className="page404 text-center text-black lh-1 py-5">
      <div className="container-fluid py-5">
        <div className="number mb-3">404</div>
        <h1 className="heading position-relative mb-5">
          Oops! That page can't be found.
        </h1>
        <p className="info gray-text lh-base mx-auto mb-4 pb-2">
          We're really sorry but we can't seem to find the page you were looking
          for.
        </p>
        <NavLink
          to="/"
          className="go-home w-fit border border-2 border-dark d-flex align-items-center gap-2 mx-auto text-decoration-none text-white bg-black text-uppercase py-3 px-5 letter-space-1"
        >
          Back the homepage <FontAwesomeIcon icon={faArrowRightLong} />
        </NavLink>
      </div>
    </section>
  );
};

export default Page404;
