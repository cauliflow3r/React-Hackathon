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
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import "../Styles/CanvasForm.css";

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            </Select>
          </FormControl>
          <Switch onClick={handleNsfw} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
