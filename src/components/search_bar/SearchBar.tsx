import React from "react";
import SearchIcon from "../icons/search/SearchIcon";

function SearchBar() {
  return (
    <div className="search_bar">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search news"
        className="search_bar__input"
      />
      <button className="search_bar__button">Search</button>
    </div>
  );
}

export default SearchBar;
