import React from "react";
import AdminPage from "../pages/AdminPage";
import ProductList from "../components/products/ProductsList";
import { Route, Routes } from "react-router-dom";
import DrawingPage from "../pages/DrawingPage";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/draw" element={<DrawingPage />} />
        <Route path="/" element={<ProductList />} />
        {/* <Route path="/edit/:id" element={< />} /> */}
        <Route path="/add" element={<AdminPage />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
