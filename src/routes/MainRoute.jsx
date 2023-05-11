import React from "react";
import AdminPage from "../pages/AdminPage";
import ProductList from "../components/products/ProductsList";

const MainRoute = () => {
  return (
    <div>
      <AdminPage />
      <ProductList />
    </div>
  );
};

export default MainRoute;
