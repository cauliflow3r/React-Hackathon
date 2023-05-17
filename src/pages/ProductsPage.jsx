import { Box } from "@mui/system";
import React from "react";
import ProductList from "../components/products/ProductsList";
import SideBar from "../components/products/SideBar";

const ProductsPage = () => {
  return (
    <div>
      <Box sx={{ height: "100px" }} />
      <ProductList />
      <SideBar />
    </div>
  );
};

export default ProductsPage;
