// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

// Imported assets
import gridIcon from "../../../assets/icons/grid-icon.svg";

const LayoutOptions = ({ layout, onLayoutChange }) => {
  return (
    <ul className="layout-btns main-border p-2 list-unstyled mb-0 d-flex align-items-center gap-2">
      <li>
        <button
          type="button"
          className={`grid opacity-trans d-block lh-1 p-0 border-0 bg-transparent ${
            layout === "grid" ? "active" : ""
          }`}
          aria-label="Display grid layout"
          aria-current={layout === "grid" ? "true" : "false"}
          onClick={() => onLayoutChange("grid")}
        >
          <img src={gridIcon} alt="" className="img-fluid" />
        </button>
      </li>
      <li>
        <button
          type="button"
          className={`list d-block lh-1 p-0 border-0 bg-transparent ${
            layout === "list" ? "active" : ""
          }`}
          aria-label="Display list layout"
          aria-current={layout === "list" ? "true" : "false"}
          onClick={() => onLayoutChange("list")}
        >
          <FontAwesomeIcon icon={faList} />
        </button>
      </li>
    </ul>
  );
};

export default LayoutOptions;
