import React, { useState } from "react";
import HamburgerIcon from "../../../components/icons/hamburger/HamburgerIcon";
import SearchBar from "../../../components/search_bar/SearchBar";
import Modal from "../../../components/modal/Modal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="nav">
        <div className="nav_wrapper">
          <h1 className="nav_wrapper__logo">
            <span className="nav_wrapper__logo--red">My</span>News
          </h1>
          <div onClick={() => setIsModalOpen(true)}>
            <HamburgerIcon />
          </div>
        </div>
        <SearchBar />
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Navbar;
