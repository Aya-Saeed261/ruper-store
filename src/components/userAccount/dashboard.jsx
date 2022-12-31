import { NavLink } from "react-router-dom";

// Imported Components
import Loader from "../global/loader";

const Dashboard = ({ user, onLogout }) => {
  return user ? (
    <div className="dashboard gray-text">
      <p>
        <span className="d-inline-flex align-items-center gap-1">
          <span>
            Hello <span className="fw-500">{user.info.displayName}</span> (not{" "}
            <span className="fw-500">{user.info.displayName}</span> ?
          </span>
          <button type="button" className="btn p-0 border-0" onClick={onLogout}>
            Log out
          </button>
        </span>
        )
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <NavLink to="orders" className="text-decoration-none text-body">
          recent orders
        </NavLink>{" "}
        , manage your{" "}
        <NavLink to="addresses" className="text-decoration-none text-body">
          shipping and billing addresses
        </NavLink>
        , and{" "}
        <NavLink
          to="account-details"
          className="text-decoration-none text-body"
        >
          edit your password and account details
        </NavLink>{" "}
        .
      </p>
    </div>
  ) : (
    <Loader />
  );
};

export default Dashboard;
