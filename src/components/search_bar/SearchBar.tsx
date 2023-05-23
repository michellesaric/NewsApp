import React, { useContext, useState } from "react";
import SearchIcon from "../icons/search/SearchIcon";
import { SearchContext } from "../../context/SearchContext";
import { ModalContext } from "../../context/ModalContext";

function SearchBar() {
  const { setSearchText } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");
  const { setIsModalOpen } = useContext(ModalContext);

  const handleSearch = () => {
    setSearchText(searchValue.toLowerCase());
    setSearchValue("");
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchText(e.currentTarget.value.toLowerCase());
      setSearchValue("");
      setIsModalOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search_bar">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search news"
        className="search_bar__input"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="search_bar__button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
