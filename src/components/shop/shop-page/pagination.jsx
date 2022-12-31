import { useEffect, useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ pagesNum, activePage, onPageChange }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pagesArr = [];
    for (let i = 1; i <= pagesNum; i++) {
      pagesArr.push(i);
    }
    setPages(pagesArr);
  }, [pagesNum]);

  return (
    <nav
      className="pagination d-flex justify-content-center gap-2"
      aria-label="Pages navigation"
    >
      <button
        type="button"
        className={`nav-btn main-border bg-transparent gray-text ${
          activePage === 1 ? "disabled" : ""
        }`}
        aria-label="Previous"
        aria-disabled={activePage === 1 ? true : false}
        onClick={() => {
          if (activePage === 1) return;
          onPageChange(activePage - 1);
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <ul className="list-unstyled mb-0 d-flex gap-2">
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={`pagi-btn main-border bg-transparent gray-text ${
                activePage === page ? "active" : ""
              }`}
              aria-label={`Page ${page}`}
              aria-current={activePage === page ? true : false}
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`nav-btn main-border bg-transparent gray-text ${
          activePage === pagesNum ? "disabled" : ""
        }`}
        aria-label="Next"
        aria-disabled={activePage === pagesNum ? true : false}
        onClick={() => {
          if (activePage === pagesNum) return;
          onPageChange(activePage + 1);
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </nav>
  );
};

export default Pagination;
