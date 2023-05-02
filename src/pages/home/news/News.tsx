import React from "react";
import NewsCard from "../../../components/news_card/NewsCard";
import { getAllNews } from "../../../api/domain/domain";

const News = () => {
  const allNews = getAllNews();
  return (
    <div>
      {allNews.map((news) => (
        <div key={news.id}>
          <NewsCard news={news} />
        </div>
      ))}
    </div>
  );
};

export default News;
