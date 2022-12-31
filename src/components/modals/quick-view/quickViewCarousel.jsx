const QuickViewCarousel = ({ product }) => {
  return (
    <div
      id="quickViewCarousel"
      className="carousel slide h-100"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        {product.imgs.map((img) => (
          <button
            key={img.id}
            type="button"
            data-bs-target="#quickViewCarousel"
            data-bs-slide-to={img.id - 1}
            className={`rounded-circle ${img.id - 1 === 0 ? "active" : ""}`}
            aria-current={img.id - 1 === 0 ? "true" : ""}
            aria-label={`Slide ${img.id}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner h-100">
        {product.imgs.map((img) => (
          <div
            key={img.id}
            className={`carousel-item h-100 ${img.id === 1 ? "active" : ""}`}
          >
            <img
              src={img.src}
              alt={img.name}
              className="d-block img-fluid w-100 h-100"
            />
          </div>
        ))}
      </div>
      <button
        className="control carousel-control-prev"
        type="button"
        data-bs-target="#quickViewCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="control carousel-control-next"
        type="button"
        data-bs-target="#quickViewCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default QuickViewCarousel;
