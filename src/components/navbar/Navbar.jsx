import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Container sx={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={"/"}>home</Link>
        <Link to={"/add"}>add</Link>
      </Container>
    </div>
  );
};

export default Navbar;
