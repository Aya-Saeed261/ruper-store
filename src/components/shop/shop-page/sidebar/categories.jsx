const Categories = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <ul className="list-unstyled mb-0">
      {categories.map((category) => (
        <li key={category.id} className="mb-2">
          <button
            type="button"
            className={`category-btn color-trans bg-transparent p-0 w-100 border-0 gray-text d-flex justify-content-between align-items-center ${
              activeCategory === category.name ? "active" : ""
            }`}
            aria-current={activeCategory === category.name ? "true" : "false"}
            onClick={() => {
              onCategoryChange(category.name);
            }}
            aria-label={`Explore ${category.name} category`}
          >
            <span>{category.name}</span>
            <span className="amount rounded-circle d-flex align-items-center justify-content-center">
              {category.amount}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
