import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchProducts = () => {
  // search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  //   useEffect(() => {
  //     setSearchParams({
  //       q: search,
  //     });
  //   }, [search]);
  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Search>
        {/* <SearchIcon
                sx={{ paddingTop: "10px", paddingLeft: "10px", width: "50px" }}
              />
              <StyledInputBase
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="SEARCH PUMA.COM"
                inputProps={{ "aria-label": "search" }}
              /> */}
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
      </Search>
    </div>
  );
};

export default SearchProducts;
