// Imported components
import TopSec from "./topSec";
import BottomSec from "./bottomSec";

const BestSeller = ({
  bestSellers,
  onAddtoWishList,
  onAddToCart,
  onQuickView,
  onCompare,
  wishList,
  isScreenLg,
  allProducts,
}) => {
  return (
    <section className="best-seller pt-4 pb-5">
      <h2 className="letter-space-2 text-uppercase text-center fw-normal fs-4 mt-5 mb-4">
        Best seller
      </h2>
      <TopSec
        bestSellers={bestSellers}
        onAddtoWishList={onAddtoWishList}
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
        onCompare={onCompare}
        wishList={wishList}
        isScreenLg={isScreenLg}
      />
      <BottomSec allProducts={allProducts} wishList={wishList} />
    </section>
  );
};

export default BestSeller;
