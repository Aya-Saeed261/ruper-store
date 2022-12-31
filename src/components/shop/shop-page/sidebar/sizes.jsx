const Sizes = ({ onSizeAdd, onSizeDelete }) => {
  const sizes = ["Small", "Medium", "Large"];

  return (
    <ul className="list-unstyled mb-0 d-flex align-items-center gap-2">
      {sizes.map((size, indx) => (
        <li key={indx}>
          <input
            id={`box-${size}`}
            type="checkbox"
            name={`Size ${indx + 1}`}
            value={size}
            className="size-checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                onSizeAdd(e.target.value);
              } else {
                onSizeDelete(e.target.value);
              }
            }}
          />
          <label
            htmlFor={`box-${size}`}
            className={`size-btn main-border gray-text fw-light`}
          >
            {size.charAt(0)}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Sizes;
