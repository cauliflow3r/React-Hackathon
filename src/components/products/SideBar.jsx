import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import RangeSlider from "./RangeSlider";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Grid md={3} item>
      <Paper elevation={5}>
        <Typography variant="h6">Price</Typography>
        <RangeSlider />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">type</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
