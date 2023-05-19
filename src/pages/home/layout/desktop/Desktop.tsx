import React, { useContext } from "react";
import Navbar from "../../navbar/Navbar";
import Categories from "../../categories/Categories";
import News from "../../news/News";
import { CategoryContext } from "../../../../context/CategoryContext";

const Desktop = () => {
  const { selectedCategory } = useContext(CategoryContext);
  return (
    <section className="wrapper__desktop">
      <Navbar />
      <div className="wrapper__desktop-news">
        <div className="wrapper__desktop-categories">
          <Categories />
        </div>
        <div className="news-wrapper">
          <p className="news-title">
            {selectedCategory !== "Home" ? selectedCategory : "News"}
          </p>
          <News />
        </div>
      </div>
    </section>
  );
};

export default Desktop;
