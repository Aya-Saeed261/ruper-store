import React, { Fragment, useState, useEffect, useLayoutEffect } from "react";

// Bootstrap toast
import Toast from "bootstrap/js/dist/toast";

// React router dom
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// Imported components
import Header from "./header/header";
import Homepage from "./home/homepage";
import Shop from "./shop/shop-page/shop";
import WishList from "./shop/wishList";
import ProductDetails from "./shop/product-details/productDetails";
import CartPage from "./shop/cart-page/cartPage";
import Checkout from "./shop/checkout/checkout";
import FAQ from "./faq";
import UserAccount from "./userAccount/userAccount";
import About from "./about/about";
import Contact from "./contact/contact";
import Footer from "./footer";
import Page404 from "./page404";
import ForgotPassword from "./forgotPassword";
import ShoppingCartModal from "./modals/shopping-cart/shoppingCartModal";
import LoginModal from "./modals/login/loginModal";
import QuickViewModal from "./modals/quick-view/quickViewModal";
import CompareModal from "./modals/compare/compareModal";
import SearchModal from "./modals/searchModal";
import Alert from "./global/alert";
import ScrollToTop from "./global/scrollToTopBtn";

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [locallyStored, setLocallyStored] = useState({});
  const [wishList, setWishList] = useState(null);
  const [cart, setCart] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);
  const [quickViewProd, setQuickViewProd] = useState(null);
  const [compareProds, setCompareProds] = useState([]);
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [isScreenLg, setIsScreenLg] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const alertHolder = React.createRef();

  const handleLogIn = (keepSignedIn = false) => {
    navigate("/my-account");
    window.sessionStorage.setItem("ruper", JSON.stringify({ loggedIn: true }));
    setIsLoggedIn(true);
    updateLocalStorage("keepSignedIn", keepSignedIn);
  };

  const handleLogout = () => {
    window.sessionStorage.setItem(
      "ruper",
      JSON.stringify({
        loggedIn: false,
        compare: compareProds,
      })
    );
    setIsLoggedIn(false);
    updateLocalStorage("keepSignedIn", false);
    navigate("/", { replace: true });
  };

  const handleAlert = () => {
    const myToast = alertHolder.current;
    const bsToast = new Toast(myToast);
    bsToast.show();
  };

  const handleAddToWishList = (product) => {
    const list = [...wishList];
    const indx = list.findIndex((items) => items.id === product.id);
    if (indx !== -1) {
      handleDeleteFromWishList(product);
      setAlertMsg("Product was removed from wishlist");
    } else {
      const addingDate = new Date().toLocaleString("en-us", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      list.unshift({ ...product, addDate: addingDate });
      setWishList(list);
      updateLocalStorage("wishList", list);
      setAlertMsg("Product was added to wishlist");
    }
    handleAlert();
  };

  const handleDeleteFromWishList = (item) => {
    const list = [...wishList].filter((product) => product.id !== item.id);
    setWishList(list);
    updateLocalStorage("wishList", list);
  };

  const handleAddToCart = (item, amount = 1, inWishList) => {
    const cartArr = [...cart];
    const prodObj = { ...item, amount, inWishList };
    const indx = cartArr.findIndex((product) => product.id === prodObj.id);
    if (indx !== -1) {
      setAlertMsg("Product is already in cart");
      handleAlert();
      return;
    }
    cartArr.unshift(prodObj);
    cartArr.forEach((ele, indx) => (ele.cartId = indx));
    updateCartTotalCost(cartArr);
    setCart(cartArr);
    updateLocalStorage("cart", cartArr);
    setAlertMsg("Product was added to cart");
    handleAlert();
  };

  const handleCartAmountChange = (id, newAmount) => {
    const cartArr = [...cart];
    const indx = cartArr.findIndex((product) => product.cartId === id);
    cartArr[indx].amount = newAmount;
    updateCartTotalCost(cartArr);
    setCart(cartArr);
    updateLocalStorage("cart", cartArr);
  };

  const handleRemoveFromCart = (id) => {
    const cartArr = [...cart].filter((prod) => prod.cartId !== id);
    updateCartTotalCost(cartArr);
    setCart(cartArr);
    updateLocalStorage("cart", cartArr);
  };

  const updateCartTotalCost = (arr) => {
    const totalCost = arr.reduce((pre, curr) => {
      let discount = 0;
      if (curr.discount) discount = curr.discount;
      const itemTotal = (curr.price - discount) * curr.amount;
      return pre + itemTotal;
    }, 0);
    setCartTotal(totalCost);
  };

  const updateLocalStorage = (key, value) => {
    const data = { ...locallyStored };
    data[key] = value;
    setLocallyStored(data);
    window.localStorage.setItem("ruper", JSON.stringify(data));
  };

  const handleQuickView = (prod) => {
    setQuickViewProd(prod);
  };

  const handleCompare = (prod) => {
    if (compareProds.length === 3) {
      setAlertMsg("Compare table is full!");
      handleAlert();
      return;
    }
    const indx = compareProds.findIndex((item) => item.id === prod.id);
    if (indx !== -1) return;
    const compareArr = [...compareProds];
    compareArr.push(prod);
    setCompareProds(compareArr);
    window.sessionStorage.setItem(
      "ruper",
      JSON.stringify({ loggedIn: isLoggedIn, compare: compareArr })
    );
  };

  const handleRemoveFromCompare = (id) => {
    const compareArr = compareProds.filter((prod) => prod.id !== id);
    setCompareProds(compareArr);
    window.sessionStorage.setItem(
      "ruper",
      JSON.stringify({ loggedIn: isLoggedIn, compare: compareArr })
    );
  };

  useLayoutEffect(() => {
    function updateSize() {
      setIsScreenLg(window.innerWidth > 991 ? true : false);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [window.innerWidth]);

  useEffect(() => {
    const checkGoToTopBtn = () => {
      if (
        (window.scrollY > 400 && showScrollToTopBtn === true) ||
        (window.scrollY <= 400 && showScrollToTopBtn === false)
      )
        return;
      if (window.scrollY > 400) {
        setShowScrollToTopBtn(true);
      } else {
        setShowScrollToTopBtn(false);
      }
    };
    window.addEventListener("scroll", checkGoToTopBtn);
    return () => window.removeEventListener("scroll", checkGoToTopBtn);
  }, [window.scrollY]);

  useEffect(() => {
    // Fetch data
    (async function () {
      await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const products = data.products;
          const bestSellerProducts = products.filter((product) =>
            product.tags.includes("Hot")
          );
          const categories = data.categories;
          const brands = data.brands;
          const user = data.user;
          const testimonials = data.testimonials;
          setAllProducts(products);
          setBestSellers(bestSellerProducts);
          setCategories(categories);
          setBrands(brands);
          setUser(user);
          setTestimonials(testimonials);
        })
        .catch((error) => console.log(error));
    })();

    (function () {
      const locallyStoredData = JSON.parse(
        window.localStorage.getItem("ruper")
      );
      if (locallyStoredData) {
        setLocallyStored(locallyStoredData);
        // Handle Logging in
        if (locallyStoredData.keepSignedIn) {
          setIsLoggedIn(true);
          window.sessionStorage.setItem(
            "ruper",
            JSON.stringify({ loggedIn: true })
          );
        } else {
          setIsLoggedIn(false);
        }
        // Get wishlist
        if (locallyStoredData.wishList) {
          setWishList(locallyStoredData.wishList);
        } else {
          setWishList([]);
        }
        // Get cart
        if (locallyStoredData.cart) {
          setCart(locallyStoredData.cart);
          updateCartTotalCost(locallyStoredData.cart);
        } else {
          setCart([]);
        }
      } else {
        setWishList([]);
        setCart([]);
        setIsLoggedIn(false);
      }
    })();

    // Check Session
    (function () {
      const inSession = JSON.parse(window.sessionStorage.getItem("ruper"));
      if (inSession) {
        if (inSession.loggedIn) {
          setIsLoggedIn(inSession.loggedIn);
        }
        if (inSession.compare) {
          setCompareProds(inSession.compare);
        }
      }
    })();
  }, []);

  useEffect(() => {
    const current = currentLocation.pathname === "/" ? "home" : "not-home";
    setCurrentPage(current);
  }, [currentLocation]);

  return (
    <div data-page={`${currentPage}`}>
      <Header
        isLoggedIn={isLoggedIn}
        cart={cart}
        wishList={wishList}
        isScreenLg={isScreenLg}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                bestSellers={bestSellers}
                categories={categories}
                onAddtoWishList={handleAddToWishList}
                onAddToCart={handleAddToCart}
                onQuickView={handleQuickView}
                onCompare={handleCompare}
                wishList={wishList}
                isScreenLg={isScreenLg}
                allProducts={allProducts}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                products={allProducts}
                categories={categories}
                brands={brands}
                onAddtoWishList={handleAddToWishList}
                onAddToCart={handleAddToCart}
                onQuickView={handleQuickView}
                onCompare={handleCompare}
                wishList={wishList}
                isScreenLg={isScreenLg}
              />
            }
          />
          <Route
            path="/shop/:name"
            element={
              <ProductDetails
                products={allProducts}
                onAddtoWishList={handleAddToWishList}
                onAddToCart={handleAddToCart}
                onCompare={handleCompare}
                wishList={wishList}
                isScreenLg={isScreenLg}
              />
            }
          />
          <Route
            path="/shop/wishlist"
            element={
              <WishList
                wishList={wishList}
                onDelete={handleDeleteFromWishList}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/shop/cart"
            element={
              <CartPage
                cart={cart}
                onAmountChange={handleCartAmountChange}
                OnRemoveFromCart={handleRemoveFromCart}
                totalCost={cartTotal}
                wishList={wishList}
              />
            }
          />
          <Route
            path="/shop/checkout"
            element={
              <Checkout
                isLoggedIn={isLoggedIn}
                cart={cart}
                cartTotal={cartTotal}
              />
            }
          />
          <Route
            path="/my-account"
            element={
              <UserAccount
                user={user}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
              />
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/about"
            element={<About testimonials={testimonials} brands={brands} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
      {/* Modals */}
      <LoginModal user={user} handleLogIn={handleLogIn} />
      <ShoppingCartModal
        cart={cart}
        cartTotal={cartTotal}
        OnRemoveFromCart={handleRemoveFromCart}
      />
      <SearchModal />
      {isScreenLg ? (
        <Fragment>
          <QuickViewModal
            product={quickViewProd}
            onAddToCart={handleAddToCart}
          />
          <CompareModal
            products={compareProds}
            onAddToCart={handleAddToCart}
            onRemoveFromCompare={handleRemoveFromCompare}
          />
        </Fragment>
      ) : (
        ""
      )}
      {/* Alerts */}
      <Alert ref={alertHolder} msg={alertMsg} />
      {/* Scroll to top btn */}
      <ScrollToTop show={showScrollToTopBtn} />
    </div>
  );
};

export default App;
