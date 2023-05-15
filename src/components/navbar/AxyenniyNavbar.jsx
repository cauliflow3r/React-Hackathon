import React from "react";
import icon_black from "../svg/logo_white.svg";
import "../Styles/AxyenniyNavbar.css";
import { Box } from "@mui/material";
import siteName from "../svg/siteName.png";
import { Link } from "react-router-dom";

const AxyenniyNavbar = () => {
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          top: 0,
          width: "100%",
          height: "100px",
          backgroundColor: "rgb(33, 33, 33)",
          justifyContent: "center",
        }}
      >
        <navbar>
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              style={{ maxWidth: "100px" }}
              className="logo"
              src={icon_black}
              alt="logo"
            />
            <img style={{ maxWidth: "150px" }} src={siteName} alt="" />
            <div className="search">
              <input
                className="input"
                type="text"
                placeholder="Search"
                name="text"
              />
              <button>
                <span class="button_top">Search</span>
              </button>
            </div>
            <div className="navigation_buttons">
              <Link to="/draw">
                <button>
                  <span class="button_top"> Draw</span>
                </button>
              </Link>
              <Link to="/products">
                <button>
                  <span class="button_top"> Gallery</span>
                </button>
              </Link>
              <Link to="cart">
                <button>
                  <span class="button_top"> Cart</span>
                </button>
              </Link>
            </div>
          </div>
        </navbar>
      </Box>
    </div>
  );
};

export default AxyenniyNavbar;
