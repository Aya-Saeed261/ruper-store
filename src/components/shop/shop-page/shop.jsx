import { useEffect, useState, useRef } from "react";

// React router dom
import { useLocation } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

// Animation library
import autoAnimate from "@formkit/auto-animate";

// Imported componenets
import SectionHeader from "../../global/sectionHeader";
import Sidebar from "./sidebar/sidebar";
import SortingOptions from "./sortingOptions";
import LayoutOptions from "./layoutOptions";
import ProductCardGrid from "../../global/productCardGrid";
import ProductCardList from "./productCardList";
import Pagination from "./pagination";
import Loader from "../../global/loader";

const Shop = ({
  products,
  categories,
  brands,
  onAddtoWishList,
  onAddToCart,
  onQuickView,
  onCompare,
  wishList,
  isScreenLg,
}) => {
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [categoryData, setCategoryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSizes, setActiveSizes] = useState([]);
  const [activeBrands, setActiveBrands] = useState([]);
  const [activePriceRange, setPriceRange] = useState([]);
  const [activeLayout, setActiveLayout] = useState("grid");
  const [activeSorting, setActiveSorting] = useState(0);
  const [showSideBar, setShowSideBar] = useState(false);
  const productsHolder = useRef(null);
  const parentRef = useRef();
  const { state } = useLocation();
  const numPerPage = 9;

  const displayProducts = (pageNum, data = filteredData) => {
    const start = numPerPage * (pageNum - 1);
    const end = numPerPage * pageNum;
    const dataToShow = data.slice(start, end);
    handleSorting(activeSorting, dataToShow);
  };

  const handlePagination = (data) => {
    const numOfPages = Math.ceil(data.length / numPerPage);
    setTotalPages(numOfPages);
  };

  const handlePageChange = (pageNum) => {
    productsHolder.current.scrollIntoView({ behavior: "smooth" });
    displayProducts(pageNum);
    setActivePage(pageNum);
  };

  const handleDataChange = (newData) => {
    setFilteredData(newData);
    displayProducts(1, newData);
    setActivePage(1);
    handlePagination(newData);
  };

  const handleCategoryChange = (category) => {
    let data;
    if (category === "All") {
      data = products;
    } else {
      data = products.filter((product) => product.category === category);
    }
    setCategoryData(data);
    setActiveCategory(category);
    const filteredBasedOnSize = filterSize(data, activeSizes);
    const filteredBasedOnBrand = filterBrand(filteredBasedOnSize, activeBrands);
    const filterBasedOnPrice = filterPrices(
      filteredBasedOnBrand,
      activePriceRange
    );
    handleDataChange(filterBasedOnPrice);
  };

  const filterSize = (data, newSizes) => {
    let newData;
    if (newSizes.length === 0) {
      newData = data;
    } else {
      newData = data.filter((product) => {
        let pass = false;
        for (let i = 0; i < newSizes.length; i++) {
          if (product.size.indexOf(newSizes[i].charAt(0)) !== -1) {
            pass = true;
            break;
          }
        }
        return pass ? product : null;
      });
    }
    return newData;
  };

  const handleSizeChange = (newSizes) => {
    const filtered = filterSize(categoryData, newSizes);
    const filteredBasedOnBrand = filterBrand(filtered, activeBrands);
    const filterBasedOnPrice = filterPrices(
      filteredBasedOnBrand,
      activePriceRange
    );
    handleDataChange(filterBasedOnPrice);
  };

  const handleSizeAdd = (size) => {
    const sizes = activeSizes;
    sizes.push(size);
    setActiveSizes(sizes);
    handleSizeChange(sizes);
  };

  const handleSizeDelete = (size) => {
    const sizes = activeSizes;
    const indx = sizes.indexOf(size);
    sizes.splice(indx, 1);
    setActiveSizes(sizes);
    handleSizeChange(sizes);
  };

  const filterBrand = (data, newBrands) => {
    let newData;
    if (newBrands.length === 0) {
      newData = data;
    } else {
      newData = data.filter((product) => {
        return newBrands.indexOf(product.brand) !== -1 ? product : null;
      });
    }
    return newData;
  };

  const handleBrandChange = (newBrands) => {
    const filtered = filterBrand(categoryData, newBrands);
    const filteredBasedOnSize = filterSize(filtered, activeSizes);
    const filterBasedOnPrice = filterPrices(
      filteredBasedOnSize,
      activePriceRange
    );
    handleDataChange(filterBasedOnPrice);
  };

  const handleBrandAdd = (brand) => {
    const brands = activeBrands;
    brands.push(brand);
    setActiveBrands(brands);
    handleBrandChange(brands);
  };

  const handleBrandDelete = (brand) => {
    const brands = activeBrands;
    const indx = brands.indexOf(brand);
    brands.splice(indx, 1);
    setActiveBrands(brands);
    handleBrandChange(brands);
  };

  const priceAfterDiscount = (oldPrice, discount = 0) => {
    return oldPrice - discount;
  };

  const filterPrices = (data, value) => {
    let newData;
    if (activePriceRange.length === 0) {
      newData = data;
    } else {
      newData = data.filter((product) => {
        const newPrice = priceAfterDiscount(product.price, product.discount);
        return newPrice >= value[0] && newPrice <= value[1] ? product : null;
      });
    }
    return newData;
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
    const newData = filterPrices(categoryData, value);
    const filteredBasedOnSize = filterSize(newData, activeSizes);
    const filteredBasedOnBrand = filterBrand(filteredBasedOnSize, activeBrands);
    handleDataChange(filteredBasedOnBrand);
  };

  const handleSorting = (id, data = shownData) => {
    let sortedData;
    switch (id) {
      case 1: {
        sortedData = sortPrice("up", data);
        break;
      }
      case 2: {
        sortedData = sortPrice("down", data);
        break;
      }
      case 3: {
        sortedData = sortRating(data);
        break;
      }
      case 4: {
        sortedData = sortPopularity(data);
        break;
      }
      default: {
        sortedData = sortDefault(data);
        break;
      }
    }
    setShownData(sortedData);
    setActiveSorting(id);
  };

  const sortPrice = (method, data) => {
    const sorted = [...data].sort((x, y) => {
      const priceX = priceAfterDiscount(x.price, x.discount);
      const priceY = priceAfterDiscount(y.price, y.discount);
      return method === "up" ? priceX - priceY : priceY - priceX;
    });
    return sorted;
  };

  const sortRating = (data) => {
    const sorted = [...data].sort((x, y) => {
      return y.stars - x.stars;
    });
    return sorted;
  };

  const calcPopularity = (tags) => {
    let sum = 0;
    tags.forEach((tag) => {
      if (tag === "Hot") sum += 2;
      if (tag === "Trend") sum += 1;
    });
    return sum;
  };

  const sortPopularity = (data) => {
    const sorted = [...data].sort((x, y) => {
      const popX = calcPopularity(x.tags);
      const popY = calcPopularity(y.tags);
      return popY - popX;
    });
    return sorted;
  };

  const sortDefault = (data) => {
    const sorted = [...data].sort((x, y) => {
      return x.id - y.id;
    });
    return sorted;
  };

  const handleLayout = (layout) => {
    setActiveLayout(layout);
  };

  useEffect(() => {
    displayProducts(1, products);
    handlePagination(products);
    setCategoryData(products);
    setFilteredData(products);
  }, [products]);

  useEffect(() => {
    if (state) {
      const category = state.from;
      handleCategoryChange(category);
    }
  }, [state]);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, []);

  return (
    <section className="shop">
      <SectionHeader
        page="shop"
        pageLink="shop"
        category={activeCategory === "All" ? `All Categories` : activeCategory}
      />
      <div className="container-fluid py-5">
        <div className="row m-0 pt-4 ps-xl-3 pe-xl-1">
          <div className="col-md-4 col-lg-3 px-0 px-md-2">
            <Sidebar
              showSideBar={showSideBar}
              categories={categories}
              brands={brands}
              products={products}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              onSizeAdd={handleSizeAdd}
              onSizeDelete={handleSizeDelete}
              onBrandAdd={handleBrandAdd}
              onBrandDelete={handleBrandDelete}
              onPriceRangeChange={handlePriceRangeChange}
              onHideSideBar={() => setShowSideBar(false)}
            />
          </div>
          <div
            className="content-holder pb-4 col-md-8 col-lg-9 px-0 ps-md-2 d-flex flex-column justify-content-between"
            ref={productsHolder}
          >
            <div>
              <div className="d-flex justify-content-between justify-content-md-end gap-3 pe-md-2 pe-xl-3">
                <button
                  type="button"
                  className="show-filters-btn bg-transparent gray-text px-2 main-border"
                  onClick={() => setShowSideBar(true)}
                >
                  <FontAwesomeIcon icon={faSliders} />
                </button>
                <LayoutOptions
                  layout={activeLayout}
                  onLayoutChange={handleLayout}
                />
                <SortingOptions onSorting={handleSorting} />
              </div>
              <div className="products row pt-4 m-0 mt-1 mb-5" ref={parentRef}>
                {categoryData.length > 0 ? (
                  filteredData.length > 0 ? (
                    shownData.map((product) => {
                      let inWishList;
                      if (wishList) {
                        inWishList =
                          wishList.findIndex(
                            (item) => item.id === product.id
                          ) === -1
                            ? false
                            : true;
                      }
                      return activeLayout === "grid" ? (
                        <div
                          key={product.id}
                          className="product product-grid col-md-6 col-lg-4 px-0 ps-md-3 pe-md-2 pe-xl-3"
                        >
                          <ProductCardGrid
                            product={product}
                            onAddtoWishList={onAddtoWishList}
                            onAddToCart={onAddToCart}
                            onQuickView={onQuickView}
                            onCompare={onCompare}
                            inWishList={inWishList}
                            isScreenLg={isScreenLg}
                          />
                        </div>
                      ) : (
                        <ProductCardList
                          key={product.id}
                          product={product}
                          onAddtoWishList={onAddtoWishList}
                          onAddToCart={onAddToCart}
                          onCompare={onCompare}
                          inWishList={inWishList}
                          isScreenLg={isScreenLg}
                        />
                      );
                    })
                  ) : (
                    <p className="mb-0 text-center fs-5">
                      Sorry, no products were found
                    </p>
                  )
                ) : (
                  <Loader />
                )}
              </div>
            </div>
            {shownData.length > 0 ? (
              <Pagination
                pagesNum={totalPages}
                onPageChange={handlePageChange}
                activePage={activePage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
