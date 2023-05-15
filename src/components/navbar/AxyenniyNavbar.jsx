import React, { useEffect } from "react";
import icon_black from "../svg/logo_white.svg";
import "../Styles/AxyenniyNavbar.css";
import { Box } from "@mui/material";
import siteName from "../svg/siteName.png";
import { Link } from "react-router-dom";
import $ from "jquery";

const AxyenniyNavbar = () => {
  useEffect(() => {
    // Responsive-navbar-active-animation
    function test() {
      var tabsNewAnim = $("#navbarSupportedContent");
      var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
      var activeItemNewAnim = tabsNewAnim.find(".active");

      if (activeItemNewAnim.length > 0) {
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();

        $(".hori-selector").css({
          top: itemPosNewAnimTop.top + "px",
          left: itemPosNewAnimLeft.left + "px",
          height: activeWidthNewAnimHeight + "px",
          width: activeWidthNewAnimWidth + "px",
        });
      }
    }

    // Add active class on another page linked
    var path = window.location.pathname.split("/").pop();
    if (path === "") {
      path = "index.html";
    }
    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    target.parent().addClass("active");
  }, []);

  // Get the current date
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

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
          </div>
          <div className="date">
            <p className="current-date">{formattedDate}</p>
          </div>
          <div className="search">
            <input
              className="input"
              type="text"
              placeholder="Search"
              name="text"
            />
            <button>
              <span className="button_top">Search</span>
            </button>
          </div>
          <div className="navigation_buttons">
            <Link to="/draw">
              <button>
                <span className="button_top">Draw</span>
              </button>
            </Link>
            <Link to="/products">
              <button>
                <span className="button_top">Gallery</span>
              </button>
            </Link>
            <Link to="/cart">
              <button>
                <span className="button_top">Cart</span>
              </button>
            </Link>
          </div>
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </navbar>
      </Box>
    </div>
  );
};

export default AxyenniyNavbar;
