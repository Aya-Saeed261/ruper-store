import { useState, useEffect } from "react";

// Imported components
import Loader from "../global/loader";

const AccountDetails = ({ user }) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [dName, setDName] = useState("");
  const [email, setEmail] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [nPassword, setNPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [notMatching, setnotMatching] = useState(false);
  const [emptyNPassword, setEmptyNPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reinitialize
    if (incorrectPassword) setIncorrectPassword(false);
    if (notMatching) setnotMatching(false);
    if (emptyNPassword) setEmptyNPassword(false);

    if (cPassword.length > 0) {
      // Check if current password is correct
      if (cPassword !== user.info.password) {
        setIncorrectPassword(true);
      }
      // Check if new password exists
      if (nPassword.length === 0) {
        setEmptyNPassword(true);
      }
    }
    // Checks if current password is entered
    if (nPassword.length > 0 && cPassword.length === 0) {
      setIncorrectPassword(true);
    }
    // Check if repeated password matches new password
    if (rPassword !== nPassword) {
      setnotMatching(true);
    }
    if (rPassword.length > 0) {
      // Check if current password is entered
      if (cPassword.length === 0) {
        setIncorrectPassword(true);
      }
      // Check if new password is entered
      if (nPassword.length === 0) {
        setEmptyNPassword(true);
      }
    }
  };

  useEffect(() => {
    if (user) {
      setFName(user.info.firstName);
      setLName(user.info.lastName);
      setDName(user.info.displayName);
      setEmail(user.info.email);
    }
  }, [user]);

  return user ? (
    <form action="#" onSubmit={handleSubmit} className="account-details">
      <div className="mb-3">
        <label htmlFor="fname" className="gray-text mb-1">
          First name *
        </label>
        <input
          type="text"
          name="fname"
          id="fname"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          className="d-block w-100 py-1 px-3 main-border"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lname" className="gray-text mb-1">
          Last name *
        </label>
        <input
          type="text"
          name="lname"
          id="lname"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          className="d-block w-100 py-1 px-3 main-border"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dname" className="gray-text mb-1">
          Display name *
        </label>
        <input
          type="text"
          name="dname"
          id="dname"
          value={dName}
          onChange={(e) => setDName(e.target.value)}
          className="d-block w-100 py-1 px-3 main-border mb-1"
          required
        />
        <p className="note fst-italic gray-text">
          This will be how your name will be displayed in the account section
          and in reviews
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="gray-text mb-1">
          Email address *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="d-block w-100 py-1 px-3 main-border"
          required
        />
      </div>
      <h2 className="fs-4 pt-2 fw-normal">Password change</h2>
      <div className="mb-3">
        <label htmlFor="cpassword" className="gray-text mb-1">
          Current password (leave blank to leave unchanged)
        </label>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          value={cPassword}
          onChange={(e) => {
            setCPassword(e.target.value);
            setIncorrectPassword(false);
          }}
          className="d-block w-100 py-1 px-3 main-border"
        />
        {incorrectPassword ? (
          <div className="red-text">Incorrect password</div>
        ) : (
          ""
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="npassword" className="gray-text mb-1">
          New password (leave blank to leave unchanged)
        </label>
        <input
          type="password"
          name="npassword"
          id="npassword"
          value={nPassword}
          onChange={(e) => {
            setNPassword(e.target.value);
            setEmptyNPassword(false);
          }}
          className="d-block w-100 py-1 px-3 main-border"
        />
        {emptyNPassword ? (
          <div className="red-text">Please enter new password</div>
        ) : (
          ""
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="rpassword" className="gray-text mb-1">
          Confirm new password
        </label>
        <input
          type="password"
          name="rpassword"
          id="rpassword"
          value={rPassword}
          onChange={(e) => {
            setRPassword(e.target.value);
            setnotMatching(false);
          }}
          className="d-block w-100 py-1 px-3 main-border"
        />
        {notMatching ? (
          <div className="red-text">Doesn't match new password</div>
        ) : (
          ""
        )}
      </div>
      <input
        type="submit"
        value="Save changes"
        className="d-block opacity-trans bg-black border-0 text-white px-5"
      />
    </form>
  ) : (
    <Loader />
  );
};

export default AccountDetails;
