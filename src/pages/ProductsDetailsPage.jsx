import React, { useEffect } from "react";
import ProductDetails from "../components/products/ProductDetails";
import { useProducts } from "../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";

const ProductsDetailsPage = () => {
  const { getProductDetails } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default ProductsDetailsPage;
