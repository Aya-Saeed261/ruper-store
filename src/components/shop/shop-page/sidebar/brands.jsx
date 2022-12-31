const Brands = ({ brands, onBrandAdd, onBrandDelete }) => {
  return (
    <ul className="list-unstyled mb-0 row m-0">
      {brands.map((brand) => (
        <li key={brand.name} className="col-4 mb-2 ps-0 pe-2">
          <input
            id={`box-${brand.name}`}
            type="checkbox"
            name={`Brand ${brand.id + 1}`}
            value={brand.name}
            className="brand-checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                onBrandAdd(e.target.value);
              } else {
                onBrandDelete(e.target.value);
              }
            }}
          />
          <label
            htmlFor={`box-${brand.name}`}
            className={`brand-btn main-border gray-text fw-light`}
          >
            <img src={brand.img} alt={brand.name} className="img-fluid" />
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Brands;
