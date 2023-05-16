import React from "react";
import icon_black from "../svg/login.png";
import "../Styles/AxyenniyNavbar.css";
import { Box, Menu, MenuItem, MenuList } from "@mui/material";
import siteName from "../svg/siteName.png";
import { Link, useNavigate } from "react-router-dom";
import newlogo from "../svg/Screenshot 2023-05-16 at 14.13.41.png";

import { useAuth } from "../../contexts/AuthContextProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import SearchProducts from "../search/SeachProducts";


const AxyenniyNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const menuId = "primary-search-account-menu";
  const isMenuOpen = Boolean(anchorEl);

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
            <Link to="/auth">
              <img
                style={{ maxWidth: "100px" }}
                className="logo"
                src={icon_black}
                alt="logo"
              />
            </Link>
            <Link to="/">
              <img
                className="newLogo"
                style={{ maxHeight: "100px" }}
                src={newlogo}
                alt=""
              />
            </Link>
            <div className="search">
              <SearchProducts />
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
      {/*!!! register */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {email ? (
          <MenuList>
            <MenuItem>hello, {email}!</MenuItem>
            <MenuItem
              onClick={() => {
                handleLogout();
                handleMenuClose();
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        ) : (
          <MenuItem onClick={() => navigate("/auth")}>Login</MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default AxyenniyNavbar;
