import React, { useContext } from "react";
import NewsCard from "../../../components/news_card/NewsCard";
import { getNewsByCategory } from "../../../api/domain/domain";
import { CategoryContext } from "../../../context/CategoryContext";
import { FavoriteContext } from "../../../context/FavoritesContext";

const News = () => {
  const { selectedCategory } = useContext(CategoryContext);
  const { favorites } = useContext(FavoriteContext);
  let news = [];

  if (selectedCategory === "Favorites") {
    news = favorites;
  } else {
    news = getNewsByCategory(selectedCategory);
  }
  return (
    <div>
      {news.map((news) => (
        <div key={news.id}>
          <NewsCard news={news} />
        </div>
      ))}
    </div>
  );
};

export default News;
