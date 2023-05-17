import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import { FormControl, MenuItem, Select } from "@mui/base";

const EditProduct = () => {
  const { saveEditedProduct, getProductDetails, productDetails } =
    useProducts();
  //   console.log(productDetails);

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [product, setProduct] = useState(productDetails);

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
        <Typography variant="h4">EDIT PRODUCT</Typography>
        {/* <img src={product.drawing} alt="" /> */}
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="name"
          variant="outlined"
          size="small"
          name="name"
          onChange={handleInp}
          value={product.name || ""}
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
          value={product.description || ""}
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
          value={product.price || ""}
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
          value={product.type || ""}
        />

        <Button
          onClick={() => saveEditedProduct(product)}
          fullWidth
          variant="outlined"
        >
          Save Changes
        </Button>
      </Box>
    </>
  );
};

export default EditProduct;
