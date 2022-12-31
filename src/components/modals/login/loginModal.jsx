import { useState, useRef } from "react";

// Imported components
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

const LoginModal = ({ user, handleLogIn }) => {
  const [showRegister, setShowRegister] = useState(false);
  const closeRef = useRef();

  const onLogIn = () => {
    closeModal();
    handleLogIn();
  };

  const closeModal = () => {
    closeRef.current.click();
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="login modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered overflow-hidden">
        <div className="modal-content rounded-0 p-1 p-md-0">
          <div className="modal-body">
            <div
              className={`login-register p-md-2 position-relative ${
                showRegister ? "show-reg" : ""
              }`}
            >
              <button
                type="button"
                className="close-btn btn rounded-circle bg-white position-absolute"
                data-bs-dismiss="modal"
                ref={closeRef}
                aria-label="Close"
              ></button>
              <div className="overflow-hidden">
                <LoginForm
                  user={user}
                  onLogIn={onLogIn}
                  onNewAccount={() => setShowRegister(true)}
                  onCloseModal={closeModal}
                />
                <div className="register-holder position-absolute top-0 w-100 h-100 p-md-2">
                  <RegisterForm
                    onAlreadyRegistered={() => setShowRegister(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
