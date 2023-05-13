import React from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { productDetails } = useProducts();
  const navigate = useNavigate();
  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={productDetails.drawing}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productDetails.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productDetails.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productDetails.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate(-1)}>
            go back
          </Button>
          {/* <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button> */}
          {/* <IconButton onClick={() => addProductToCart(item)}>
          <AddShoppingCartIcon
            color={checkProductInCart(item.id) ? "primary" : ""}
          />
        </IconButton> */}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductDetails;
