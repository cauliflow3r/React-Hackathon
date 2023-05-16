import React from "react";
import ProductList from "../components/products/ProductsList";
import SideBar from "../components/products/SideBar";

const ProductsPage = () => {
  return (
    <div>
      <ProductList />
      <SideBar />
    </div>
  );
};

export default ProductsPage;
