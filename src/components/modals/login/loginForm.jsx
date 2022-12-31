import { useState } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Imported components
import Loader from "../../global/loader";

const LoginForm = ({ user, onLogIn, onNewAccount, onCloseModal }) => {
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogIn(remember);
  };

  return (
    <div className="login form pt-3 pb-4 px-3 px-md-4">
      <h2 className="heading fw-semibold py-1 mb-3 text-uppercase text-center">
        Sign in
      </h2>
      {user ? (
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Username"
            id="loginName"
            placeholder="Username or email"
            className="d-block w-100 p-3 mb-3 main-border"
            value={user.info.displayName}
            onChange={(e) => e.preventDefault()}
            readOnly
          />
          <input
            type="password"
            name="password"
            id="loginPassword"
            placeholder="Password"
            className="d-block w-100 p-3 mb-3 main-border"
            value={user.info.password}
            onChange={(e) => e.preventDefault()}
            readOnly
          />
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="remember-holder d-flex align-items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                className="border border-1 border-white border-dark rounded-circle"
                id="remember"
                checked={remember ? true : false}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label htmlFor="remember" className="fw-500">
                Remember me
              </label>
            </div>
            <NavLink
              to="/forgot-password"
              className="forget-password text-body text-decoration-none position-relative fw-500"
              onClick={onCloseModal}
            >
              Lost your password?
            </NavLink>
          </div>
          <input
            type="submit"
            value="login"
            className="d-block w-100 p-3 border-0 mb-3 text-uppercase bg-black text-white letter-space-1"
          />
          <button
            type="button"
            className="btn opacity-trans w-100 p-3 opacity-25 text-uppercase bg-black text-white letter-space-1 rounded-0"
            onClick={onNewAccount}
          >
            Create an account
          </button>
        </form>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default LoginForm;
