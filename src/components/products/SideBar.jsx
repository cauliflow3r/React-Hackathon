import {
  Box,
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
    <Box sx={{ position: "fixed", bottom: "0", width: "100%" }}>
      <Grid md={3} item>
        <Paper elevation={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ margin: "0 auto" }} variant="h6">
                Price
              </Typography>
              <RangeSlider />
            </Box>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
                onChange={(e) => fetchByParams("type", e.target.value)}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "45px",
                }}
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
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
};

export default SideBar;
