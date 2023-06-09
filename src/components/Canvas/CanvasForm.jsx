import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import "../Styles/CanvasForm.css";
import { useNavigate } from "react-router";
import { useProducts } from "../../contexts/ProductContextProvider";

export default function CanvasForm({
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  type,
  setType,
  handleNsfw,
  handleSubmit,
}) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    constsState: { maxPrice },
    constsState,
    changeMaxPrice,
  } = useProducts();

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Send form
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submit</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            value={name}
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="description"
            type="text"
            value={description}
            fullWidth
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            type="number"
            value={price}
            fullWidth
            variant="standard"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={type}
              label="Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Portrait"}>Portrait</MenuItem>
              <MenuItem value={"Landscape"}>Landscape</MenuItem>
              <MenuItem value={"Still life"}>Still life</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            control={<Switch onClick={handleNsfw} color="error" />}
            label="NSFW"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={(e) => {
              handleSubmit(e);

              console.log("price", price);
              console.log("maxPrice", maxPrice);
              console.log(+price > +maxPrice);

              if (price > maxPrice) {
                changeMaxPrice(price);
              }
              navigate("/products");
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
