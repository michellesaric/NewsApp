import React, { useContext } from "react";
import HamburgerIcon from "../../../components/icons/hamburger/HamburgerIcon";
import SearchBar from "../../../components/search_bar/SearchBar";
import Modal from "../../../components/modal/Modal";
import { ModalContext } from "../../../context/ModalContext";

const Navbar = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  return (
    <>
      <nav className="nav">
        <div className="nav_wrapper">
          <h1 className="nav_wrapper__logo">
            <span className="nav_wrapper__logo--red">My</span>News
          </h1>
          <div
            onClick={() => setIsModalOpen(true)}
            className="nav_wrapper__hamburger"
          >
            <HamburgerIcon />
          </div>
        </div>
        <SearchBar />
      </nav>
      {isModalOpen && <Modal />}
    </>
  );
};

export default Navbar;
