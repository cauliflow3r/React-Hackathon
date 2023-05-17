import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useProducts } from "../../contexts/ProductContextProvider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const { fetchByParams, maxPrice } = useProducts();
  const [value, setValue] = React.useState([0, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    fetchByParams("price", value);
  };

  return (
    <Box sx={{ padding: "20px", width: 400 }}>
      <Slider
        min={0}
        max={maxPrice}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
