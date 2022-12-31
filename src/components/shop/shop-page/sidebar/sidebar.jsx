// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Imported components
import Categories from "./categories";
import PricesRange from "./pricesRange";
import Sizes from "./sizes";
import Brands from "./brands";

const Sidebar = ({
  showSideBar,
  categories,
  brands,
  products,
  onCategoryChange,
  activeCategory,
  onSizeAdd,
  onSizeDelete,
  onBrandAdd,
  onBrandDelete,
  onPriceRangeChange,
  onHideSideBar,
}) => {
  return (
    <aside className={`${showSideBar ? "show" : ""}`}>
      {showSideBar ? (
        <button
          type="button"
          className="close-filters-btn d-block position-absolute mb-2 fs-5 bg-transparent gray-text px-2 border-0"
          onClick={() => onHideSideBar()}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      ) : (
        ""
      )}
      <div className="mb-5">
        <h2 className="heading text-uppercase mb-3">Categories</h2>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>
      <div className="mb-5 pb-4">
        <h2 className="heading text-uppercase mb-4 pb-1">Price</h2>
        <PricesRange
          products={products}
          onPriceRangeChange={onPriceRangeChange}
        />
      </div>
      <div className="mb-5">
        <h2 className="heading text-uppercase mb-3">Size</h2>
        <Sizes onSizeAdd={onSizeAdd} onSizeDelete={onSizeDelete} />
      </div>
      <div className="mb-5">
        <h2 className="heading text-uppercase mb-3">Brands</h2>
        <Brands
          brands={brands}
          onBrandAdd={onBrandAdd}
          onBrandDelete={onBrandDelete}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
