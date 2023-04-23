import React from "react";
import Hamburger from "../../../components/hamburger/Hamburger";
import SearchBar from "../../../components/search_bar/SearchBar";

function Navbar() {
  return (
    <div className="Nav">
      <div className="Nav_wrapper">
        <h1 className="Nav_wrapper__logo">
          <span className="Nav_wrapper__logo--red">My</span>News
        </h1>
        <Hamburger />
      </div>
      <SearchBar />
    </div>
  );
}

export default Navbar;
