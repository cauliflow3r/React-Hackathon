import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      <Box sx={{ width: "60vw", margin: "10vh auto" }}>
        <Typography variant="h4">ADMIN PANEL</Typography>
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="name"
          variant="outlined"
          size="small"
          name="name"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="description"
          variant="outlined"
          size="small"
          name="description"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="price"
          variant="outlined"
          size="small"
          name="price"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="picture"
          variant="outlined"
          size="small"
          name="picture"
          onChange={handleInp}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="type"
          variant="outlined"
          size="small"
          name="type"
          onChange={handleInp}
        />
        <Button
          onClick={() => {
            navigate("/");
            addProduct(product);
          }}
          fullWidth
          variant="outlined"
        >
          Add Product
        </Button>
      </Box>
    </>
  );
};

export default AddProduct;
