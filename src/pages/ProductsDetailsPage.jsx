import React, { useEffect } from "react";
import ProductDetails from "../components/products/ProductDetails";
import { useProducts } from "../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

const ProductsDetailsPage = () => {
  const { getProductDetails, productDetails } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <Container sx={{ marginTop: 10 }}>
      {Object.keys(productDetails).length ? <ProductDetails /> : <p>lalka</p>}
    </Container>
  );
};

export default ProductsDetailsPage;
