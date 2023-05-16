import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useProducts } from "../../contexts/ProductContextProvider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 1000]);

  const { fetchByParams } = useProducts();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    fetchByParams("price", value);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Slider
        min={0}
        max={10000}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
