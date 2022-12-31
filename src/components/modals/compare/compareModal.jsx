// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Imported components
import CompareRow from "./compareRow";

const CompareModal = ({ products, onAddToCart, onRemoveFromCompare }) => {
  return (
    <div
      className="modal fade"
      id="compareModal"
      tabIndex="-1"
      aria-labelledby="Compare modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered overflow-hidden">
        <div className="modal-content rounded-0">
          <div className="modal-body p-0 position-relative">
            <button
              type="button"
              className="btn rounded-0 bg-dark text-white border-0 position-absolute start-0 top-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <CompareRow
              products={products}
              detail="name"
              heading=""
              onRemoveFromCompare={onRemoveFromCompare}
            />
            <CompareRow products={products} detail="imgs" heading="Image" />
            <CompareRow products={products} detail="SKU" heading="SKU" />
            <CompareRow products={products} detail="stars" heading="Rating" />
            <CompareRow products={products} detail="price" heading="Price" />
            <CompareRow
              products={products}
              detail="description"
              heading="Description"
            />
            <CompareRow
              products={products}
              detail="dimensions"
              heading="Dimensions"
            />
            <CompareRow
              products={products}
              detail="addBtn"
              heading="Add to cart"
              onAddToCart={onAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
