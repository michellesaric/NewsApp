import React from "react";
import LatestNewsCard from "../../../components/latest_news_card/LatestNewsCard";
import RightArrow from "../../../components/icons/right_arrow/RightArrow";
import { getLatestNews } from "../../../api/domain/domain";

const LatestNews = () => {
  const latestNews = getLatestNews();
  return (
    <div className="latest-news">
      <div className="latest-news__header">
        <div className="latest-news__header-circle"></div>
        <h2 className="latest-news__header-title">Latest news</h2>
      </div>
      <div className="latest-news__list">
        {latestNews.map((news) => (
          <LatestNewsCard news={news} />
        ))}
      </div>
      <div className="latest-news__footer">
        <p className="latest-news__footer-text">See all news</p>
        <RightArrow />
      </div>
    </div>
  );
};

export default LatestNews;
