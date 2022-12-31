import { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";

const SortingOptions = ({ onSorting }) => {
  const sortingOptions = [
    { id: 0, name: "Default sorting", arrow: false },
    { id: 1, name: "price", arrow: "up" },
    { id: 2, name: "price", arrow: "down" },
    { id: 3, name: "rating", arrow: "down" },
    { id: 4, name: "popularity", arrow: "down" },
  ];
  const [activeSorting, setActiveSorting] = useState(0);

  const handleSorting = (id) => {
    setActiveSorting(id);
    onSorting(id);
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn dropdown-toggle rounded-0 fw-500 text-capitalize"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Sorting options"
      >
        {sortingOptions[activeSorting].name}
        {sortingOptions[activeSorting].arrow ? (
          sortingOptions[activeSorting].arrow === "up" ? (
            <FontAwesomeIcon icon={faArrowUpLong} className="arrow-icon" />
          ) : (
            <FontAwesomeIcon icon={faArrowDownLong} className="arrow-icon" />
          )
        ) : (
          ""
        )}
      </button>
      <ul className="dropdown-menu rounded-0 py-0">
        {sortingOptions.map((sortingOption) => (
          <li key={sortingOption.id}>
            <button
              type="button"
              className={`dropdown-item px-2 text-capitalize ${
                activeSorting === sortingOption.id ? "active" : ""
              }`}
              onClick={() => handleSorting(sortingOption.id)}
              aria-current={
                activeSorting === sortingOption.id ? "true" : "false"
              }
            >
              {sortingOption.name === "Default sorting"
                ? sortingOption.name
                : `Sort by ${sortingOption.name}`}
              {sortingOption.arrow ? (
                <FontAwesomeIcon
                  icon={
                    sortingOption.arrow === "down"
                      ? faArrowDownLong
                      : faArrowUpLong
                  }
                  className="arrow-icon"
                />
              ) : (
                ""
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortingOptions;
