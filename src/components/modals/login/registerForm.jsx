import { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const RegisterForm = ({ onAlreadyRegistered }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register form pt-3 pb-4 px-3 px-md-4 h-100 d-flex flex-column">
      <h2 className="heading fw-semibold py-1 mb-3 text-uppercase text-center">
        Register
      </h2>
      <form
        action="#"
        onSubmit={(e) => e.preventDefault()}
        className="d-flex flex-column justify-content-between flex-fill"
      >
        <div>
          <input
            type="text"
            name="Username"
            id="regsiterName"
            placeholder="Username or email"
            className="d-block w-100 p-3 mb-3 main-border"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <div className="position-relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              id="registerPassword"
              placeholder="Password"
              className="d-block w-100 p-3 pe-4 mb-3 main-border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn opacity-trans z-3 p-0 border-0 position-absolute top-50 end-0 me-2 translate-middle-y"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="register"
            className="d-block opacity-trans w-100 p-3 mb-3 border-0 text-uppercase bg-black text-white letter-space-1"
          />
          <button
            type="button"
            className="create-account opacity-trans btn w-100 p-3 opacity-25 text-uppercase bg-black text-white letter-space-1 rounded-0"
            onClick={onAlreadyRegistered}
          >
            Already have an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
