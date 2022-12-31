const CarouselIndicator = ({ id }) => {
  return (
    <button
      type="button"
      data-bs-target="#main-carousel"
      data-bs-slide-to={`${id}`}
      className={`rounded-circle bg-black opacity-100 ${
        id === 0 ? "active" : ""
      }`}
      aria-current={id === 0 ? "true" : "false"}
      aria-label={`Slide ${id + 1}`}
    >
      <div className="rotating-circle position-absolute top-50 start-50 translate-middle">
        <svg width="30" height="30">
          <circle
            cx="15"
            cy="17"
            r="10"
            stroke="black"
            stopColor="currentColor"
            strokeWidth="2"
            strokeDashoffset="63"
            strokeDasharray="63"
            fill="transparent"
          />
        </svg>
      </div>
    </button>
  );
};

export default CarouselIndicator;
