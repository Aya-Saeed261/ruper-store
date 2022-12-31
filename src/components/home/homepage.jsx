import { Fragment } from "react";

// Imported components
import MainSlider from "./main-slider/mainSlider";
import OurCollection from "./our-collection/ourCollection";
import BestSeller from "./best-seller/bestSeller";
import Qualities from "./qualities";
import InstagramPosts from "./instagramPosts";

const Homepage = ({
  bestSellers,
  categories,
  onAddtoWishList,
  onAddToCart,
  onQuickView,
  onCompare,
  wishList,
  isScreenLg,
  allProducts,
}) => {
  return (
    <Fragment>
      <MainSlider />
      <OurCollection categories={categories} />
      <BestSeller
        bestSellers={bestSellers}
        onAddtoWishList={onAddtoWishList}
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
        onCompare={onCompare}
        wishList={wishList}
        isScreenLg={isScreenLg}
        allProducts={allProducts}
      />
      <div className="container-fluid">
        <Qualities />
      </div>
      <InstagramPosts />
    </Fragment>
  );
};

export default Homepage;
