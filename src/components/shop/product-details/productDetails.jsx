import { useState, useEffect, Fragment } from "react";

// React router dom
import { useLocation } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

// Imported components
import SectionHeader from "../../global/sectionHeader";
import TopDetails from "./top-details/topDetails";
import BottomDetails from "./bottom-details/bottomDetails";
import RelatedProducts from "./relatedProducts";
import Loader from "../../global/loader";

const ProductDetails = ({
  products,
  onAddtoWishList,
  onAddToCart,
  onCompare,
  wishList,
  isScreenLg,
}) => {
  const [product, setProduct] = useState(null);
  const [rate, setRate] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [inWishList, setInWishList] = useState(false);
  const { state } = useLocation();

  const handleToggleWishList = (newValue) => {
    setInWishList(newValue);
  };

  const handleRate = (product) => {
    const num = product.stars;
    const numInt = Math.floor(num);
    const rate = [];
    for (let i = 0; i < numInt; i++) {
      rate.push(<FontAwesomeIcon icon={faStar} className="star rated" />);
    }
    if (num !== numInt) {
      rate.push(
        <FontAwesomeIcon icon={faStarHalfStroke} className="star rated" />
      );
    }
    for (let i = 0; i < 5 - Math.ceil(num); i++) {
      rate.push(<FontAwesomeIcon icon={faStar} className="star unrated" />);
    }
    setRate(rate);
  };

  useEffect(() => {
    if (state) {
      const { product, inWishList } = state.from;
      setProduct(product);
      handleRate(product);
      setInWishList(inWishList);
    }
  }, [state]);

  useEffect(() => {
    if (products && product) {
      const filtered = products.filter(
        (prod) =>
          prod.category === product.category && prod.name !== product.name
      );
      setRelatedProducts(filtered);
    }
  }, [product, products]);

  return (
    <section className="product-details">
      {product ? (
        <Fragment>
          <SectionHeader page="shop" pageLink="shop" category={product.name} />
          <TopDetails
            product={product}
            rate={rate}
            onAddtoWishList={onAddtoWishList}
            onAddToCart={onAddToCart}
            onCompare={onCompare}
            inWishList={inWishList}
            isScreenLg={isScreenLg}
            toggleInWishList={handleToggleWishList}
          />
          <BottomDetails product={product} />
          {relatedProducts.length > 0 ? (
            <RelatedProducts
              products={relatedProducts}
              onAddtoWishList={onAddtoWishList}
              onAddToCart={onAddToCart}
              onCompare={onCompare}
              wishList={wishList}
              isScreenLg={isScreenLg}
            />
          ) : (
            ""
          )}
        </Fragment>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default ProductDetails;
