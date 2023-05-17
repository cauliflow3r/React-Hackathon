import styled from "@emotion/styled";
import { InputBase, TextField, alpha } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useProducts } from "../../../../contexts/ProductContextProvider";

import classes from "../../Navbar.module.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchProducts = () => {
  const { getProducts } = useProducts();
  // search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  return (
    <div className={classes.remove}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setSearchParams({
            q: search,
          });
          getProducts();
        }}
      >
        <input
          placeholder="Search"
          name="text"
          className={classes.input}
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button>
          <span class="button_top" type="submit">
            Search
          </span>
        </button>
      </form>

      {/* <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search> */}

      {/* <Search>
        <SearchIcon
                sx={{ paddingTop: "10px", paddingLeft: "10px", width: "50px" }}
              />
              <StyledInputBase
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="SEARCH PUMA.COM"
                inputProps={{ "aria-label": "search" }}
              />
        <form
          action=""
          onSubmit={() => {
            setSearchParams({
              q: search,
            });
          }}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" />
        </form>
      </Search> */}
    </div>
  );
};

export default SearchProducts;
