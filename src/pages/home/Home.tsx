import React, { useState, useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import Navbar from "./navbar/Navbar";
import News from "./news/News";
import LatestNews from "./latest_news/LatestNews";
import Categories from "./categories/Categories";

const Home = () => {
  const [isFeatured, setIsFeatured] = useState<boolean>(true);
  const { selectedCategory } = useContext(CategoryContext);

  return (
    <>
      <div className="wrapper__mobile">
        <Navbar />
        <div className="button_wrapper">
          <button
            onClick={() => setIsFeatured(true)}
            className={
              "btn " +
              (isFeatured ? "button_wrapper-red" : "button_wrapper-regular")
            }
          >
            Featured
          </button>
          <button
            onClick={() => setIsFeatured(false)}
            className={
              "btn " +
              (!isFeatured ? "button_wrapper-red" : "button_wrapper-regular")
            }
          >
            Latest
          </button>
        </div>
        {isFeatured ? <News /> : <LatestNews />}
      </div>
      <div className="wrapper__desktop">
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
      </div>
    </>
  );
};

export default Home;
