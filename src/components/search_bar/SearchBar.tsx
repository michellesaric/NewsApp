import React from "react";
import SearchIcon from "../search_icon/SearchIcon";

function SearchBar() {
  return (
    <div className="search_bar">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search news"
        className="search_bar__input"
      />
    </div>
  );
}

export default SearchBar;
