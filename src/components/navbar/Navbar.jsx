import React, { useState } from "react";
import icon_black from "../svg/login.png";
import "../Styles/AxyenniyNavbar.css";
import { Box, IconButton, Menu, MenuItem, MenuList } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import SearchProducts from "./components/search/SeachProducts";
import { useAuth } from "../../contexts/AuthContextProvider";
import newlogo from "../svg/Screenshot 2023-05-16 at 14.13.41.png";
import logoutIMG from "../svg/logout.png";

import classes from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const {
    handleLogout,
    user: { email },
  } = useAuth();
  // console.log(email);

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

  const handleDrawerOpen = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => setIsDrawerOpen(false);

  return (
    <>
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
              className={classes.container}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                }}
              >
                {email ? (
                  <Link to="/auth">
                    <img
                      style={{ maxWidth: "100px" }}
                      className={classes.logo}
                      src={logoutIMG}
                      alt="logo"
                      onClick={handleLogout}
                    />
                  </Link>
                ) : (
                  <Link to="/auth">
                    <img
                      style={{ maxWidth: "100px" }}
                      className={classes.logo}
                      src={icon_black}
                      alt="logo"
                    />
                  </Link>
                )}

                <Link to="/">
                  <img
                    className={classes.newLogo}
                    style={{ maxHeight: "100px" }}
                    src={newlogo}
                    alt=""
                  />
                </Link>
              </Box>

              <div className={classes.navControllers}>
                <Box className="remove">
                  <SearchProducts />
                </Box>

                <IconButton onClick={handleDrawerOpen}>
                  <MenuIcon sx={{ color: grey[50] }} />
                </IconButton>
              </div>

              {/* <div className={classes.navigation_buttons}>
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
              </div> */}
            </div>
          </navbar>
        </Box>

        <Sidebar isOpen={isDrawerOpen} handleClose={handleDrawerClose} />

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
          {/* {email ? (
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
          )} */}
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
