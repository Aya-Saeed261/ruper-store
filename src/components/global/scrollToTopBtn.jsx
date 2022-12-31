// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopBtn = ({ show }) => {
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`go-up-btn lh-1 position-fixed rounded-0 bg-white border-2 border-dark ${
        show ? "show" : "hide"
      }`}
      onClick={handleGoToTop}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default ScrollToTopBtn;
