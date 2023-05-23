import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Categories from "../../pages/home/categories/Categories";
import ExitIcon from "../icons/exit/ExitIcon";
import SearchBar from "../search_bar/SearchBar";

const Modal = () => {
  const { setIsModalOpen } = useContext(ModalContext);
  return (
    <section className="modal">
      <div className="modal__exit-icon-wrapper">
        <div onClick={() => setIsModalOpen(false)}>
          <ExitIcon />
        </div>
      </div>
      <div className="modal__logo-wrapper">
        <h1 className="modal_wrapper__logo modal_logo">
          <span className="modal_wrapper__logo--red">My</span>News
        </h1>
      </div>
      <SearchBar />
      <div>
        <Categories />
      </div>
    </section>
  );
};

export default Modal;
