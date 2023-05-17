import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { IconButton, Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../../contexts/CartContextProvider";
import "../Styles/ProductCard.css";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();
  const navigate = useNavigate();

  return (
    <Card
      className="card"
      sx={{
        maxWidth: 300,
        height: "100%",
      }}
    >
      {item.nsfw ? (
        <CardMedia
          component="img"
          height="140"
          image={item.drawing}
          alt="green iguana"
          sx={{ filter: "blur(5px)" }}
        />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={item.drawing}
          alt="green iguana"
        />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <IconButton onClick={() => addProductToCart(item)}>
          <AddShoppingCartIcon
            color={checkProductInCart(item.id) ? "primary" : undefined}
          />
        </IconButton>
        <Button size="small" onClick={() => navigate(`/details/${item.id}`)}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
