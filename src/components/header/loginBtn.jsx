// React router dom
import { useNavigate } from "react-router-dom";

// Imported assets
import icon from "../../assets/icons/person-icon.svg";

const LoginBtn = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLoginPopUp = (e) => {
    if (isLoggedIn) {
      e.preventDefault();
      navigate("/my-account");
    }
  };

  return (
    <button
      className="btn text-dark p-0 border-0 text-decoration-none"
      aria-label="My account"
      data-bs-toggle={isLoggedIn ? "" : "modal"}
      data-bs-target={isLoggedIn ? "" : "#loginModal"}
      onClick={handleLoginPopUp}
    >
      <img src={icon} alt="" />
    </button>
  );
};

export default LoginBtn;
