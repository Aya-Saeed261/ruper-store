// Imported assets
import icon from "../../assets/icons/search-icon.svg";

const SearchBtn = () => {
  return (
    <button
      type="button"
      className="btn p-0 text-dark border-0"
      aria-label="Search for furniture"
      data-bs-toggle="modal"
      data-bs-target="#searchModal"
    >
      <img src={icon} alt="" />
    </button>
  );
};

export default SearchBtn;
