import { useState } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Imported  components
import SectionHeader from "../global/sectionHeader";
import Loader from "./../global/loader";
import Dashboard from "./dashboard";
import Orders from "./orders";
import Addresses from "./addresses";
import AccountDetails from "./accountDetails";

const UserAccount = ({ isLoggedIn, onLogout, user }) => {
  const data = [
    { id: 0, name: "Dashboard" },
    { id: 1, name: "Orders" },
    { id: 2, name: "Addresses" },
    { id: 3, name: "Account details" },
  ];
  const [active, setActive] = useState("Dashboard");

  return isLoggedIn ? (
    <section className="my-account">
      <SectionHeader page="my account" pageLink="my-account" />
      <div className="container-fluid py-5">
        <div className="row m-0 pt-3 pb-4 px-xl-3">
          <div className="col-md-4 mb-4 mb-md-0 px-0 pe-md-2">
            <nav
              aria-label="Account navigation"
              className="account-nav px-1 px-md-2"
            >
              <ul className="list-unstyled mb-0 p-3 px-md-4 fw-500 lh-1">
                {data.map((item) => (
                  <li key={item.id} className="py-3">
                    <NavLink
                      to=""
                      className="d-block text-decoration-none text-body"
                      onClick={() => setActive(item.name)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                <li className="py-3">
                  <button
                    className="btn w-100 text-start p-0 border-0 fw-500 lh-1"
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-8 px-0 ps-md-3">
            {active === "Dashboard" ? (
              <Dashboard onLogout={onLogout} user={user} />
            ) : active === "Orders" ? (
              <Orders user={user} />
            ) : active === "Addresses" ? (
              <Addresses user={user} />
            ) : (
              <AccountDetails user={user} />
            )}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Loader />
  );
};

export default UserAccount;
