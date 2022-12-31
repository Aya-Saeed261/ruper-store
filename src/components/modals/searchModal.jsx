import { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Imported assets
import icon from "../../assets/icons/search-icon.svg";

const SearchModal = () => {
  const [showCancel, setShowCancel] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 0) {
      setShowCancel(true);
    } else {
      setShowCancel(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex="-1"
      aria-labelledby="searchModal"
      aria-hidden="true"
    >
      <div className="modal-dialog m-0 h-100">
        <div className="modal-content border-0 rounded-0 h-100">
          <button
            type="button"
            className="btn rounded-0 bg-dark text-white border-0 ms-auto"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="modal-body h-100 bg-white py-5 px-3 px-md-4 px-lg-5">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="holder d-flex">
                <div className="row flex-fill m-0 border-bottom border-2 border-dark">
                  <div className="col-1 px-0">
                    <button
                      type="submit"
                      className="w-100 bg-white border-0 p-2 ps-0"
                      aria-label="Search"
                    >
                      <img src={icon} alt="" className="img-fluid d-block" />
                    </button>
                  </div>
                  <div className="col-11 px-0">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search..."
                      value={search}
                      onChange={handleSearchInput}
                      className="search-input d-block w-100 h-100 border-0"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className={`cancel-btn bg-white overflow-hidden p-0 border-0 align-self-center p-0 fw-500 ${
                    showCancel ? "show" : ""
                  }`}
                  onClick={() => {
                    setSearch("");
                    setShowCancel(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
