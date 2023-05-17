import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

const ProductDetails = () => {
  const {
    user: { email },
  } = useAuth();
  const { productDetails, commentsState, setComments, setCommentsState } =
    useProducts();
  const [inputCom, setInputCom] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("productDetails.comments", productDetails.comments);
    console.log("commentsState", commentsState);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, marginRight: "16px" }}>
        <Card
          sx={{
            maxWidth: 500,
            borderRight: "2px solid black",
            borderBottom: "2px solid black",

            borderRadius: 2,
          }}
        >
          <CardMedia
            sx={{ height: 350 }}
            image={productDetails.drawing}
            title="Drawing"
          />
          <CardContent>
            <Typography
              sx={{
                backgroundColor: "antiquewhite",
                padding: "2px",
                border: "2px black solid",
              }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {productDetails.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {productDetails.type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productDetails.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productDetails.price}$
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => navigate(-1)}>
              go back
            </Button>
          </CardActions>
        </Card>
      </div>
      {email ? (
        <div style={{ flex: 1 }}>
          <div>
            <h3>comments</h3>
            {productDetails.comments.length ? (
              productDetails.comments.map((a, index) => (
                <div key={index}>
                  <p>{a.user}</p>
                  <p>{a.comment}</p>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>

          <div>
            <form
              onSubmit={() => {
                const newObj = {
                  ...commentsState,
                  user: email,
                  comment: inputCom,
                };
                console.log("newObj", newObj);
                setComments(newObj);
              }}
            >
              <input
                type="text"
                value={inputCom}
                onChange={(e) => setInputCom(e.target.value)}
              />
              <button type="submit">comment</button>
            </form>
          </div>
        </div>
      ) : (
        <Box>
          <Typography>"Please login to see comments"</Typography>
        </Box>
      )}
    </div>
  );
};

export default ProductDetails;
