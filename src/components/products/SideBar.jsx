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
              value="Portrait"
              control={<Radio />}
              label="Portrait"
            />
            <FormControlLabel
              value="Landscape"
              control={<Radio />}
              label="Landscape"
            />
            <FormControlLabel
              value="Still life"
              control={<Radio />}
              label="Still life"
            />
            {/* <FormControlLabel
              value="landscape"
              control={<Radio />}
              label="Landscape"
            />
            <FormControlLabel
              value="stillLife"
              control={<Radio />}
              label="StillLife"
            /> */}
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
