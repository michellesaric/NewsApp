import React, { useContext } from "react";
import NewsCard from "../../../components/news_card/NewsCard";
import { getNewsByCategory } from "../../../api/domain/domain";
import { CategoryContext } from "../../../context/CategoryContext";

const News = () => {
  const { selectedCategory } = useContext(CategoryContext);
  const filteredNews = getNewsByCategory(selectedCategory);
  return (
    <div>
      {filteredNews.map((news) => (
        <div key={news.id}>
          <NewsCard news={news} />
        </div>
      ))}
    </div>
  );
};

export default News;
