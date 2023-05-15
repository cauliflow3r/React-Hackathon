import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProducts();
  //   const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  //   useEffect(() => {
  //     getProducts();
  //     setPage(1);
  //   }, [searchParams]);

  //pagination
  const [page, setPage] = useState(1); // текущая страница
  const itemsPerPage = 3; // колво элементов на одной странице
  const count = Math.ceil(products?.length / itemsPerPage); // общее колво страниц пагинации

  // функция для изменения состояния текущей тсраницы
  const handleChange = (e, p) => {
    setPage(p);
  };
  // функциякоторая возращает толььно те элементы который долдны отображаться на текущей странице
  function currentData() {
    // начальный индекс
    const begin = (page - 1) * itemsPerPage;
    // конечный индекс
    const end = begin + itemsPerPage;
    //
    return products.slice(begin, end);
  }

  return (
    <>
      <Grid
        sx={{
          marginTop: 15,
        }}
        item
        md={9}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            my: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          {currentData().map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Box>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
      </Grid>
    </>
  );
};

export default ProductList;
