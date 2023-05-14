import React from "react";
import AdminPage from "../pages/AdminPage";
import ProductList from "../components/products/ProductsList";
import { Route, Routes } from "react-router-dom";

import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";

import DrawingPage from "../pages/DrawingPage";
import EditProductPage from "../pages/EditProductPage";
import ProductDetails from "../components/products/ProductDetails";
import ProductsDetailsPage from "../pages/ProductsDetailsPage";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/draw" element={<DrawingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="/details/:id" element={<ProductsDetailsPage />} />
        <Route path="/add" element={<AdminPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
