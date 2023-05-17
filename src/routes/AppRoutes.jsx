import React from "react";
import AdminPage from "../pages/AdminPage";
import { Route, Routes } from "react-router-dom";

import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";

import DrawingPage from "../pages/DrawingPage";
import EditProductPage from "../pages/EditProductPage";
import ProductsDetailsPage from "../pages/ProductsDetailsPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AuthPage from "../pages/AuthPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/draw" element={<DrawingPage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="/details/:id" element={<ProductsDetailsPage />} />
        <Route path="/add" element={<AdminPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
