import React, { useState, useEffect } from "react";
import LatestNewsCard from "../../../components/latest_news_card/LatestNewsCard";
import RightArrow from "../../../components/icons/right_arrow/RightArrow";
import { mapLatestNewsData } from "../../../api/data/map";

interface LatestNewsProps {
  id: number;
  title: string;
  publishedAt: Date;
}

const LatestNews = () => {
  const [latestNewsList, setLatestNewsList] = useState<LatestNewsProps[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const newsData = await mapLatestNewsData();
    setLatestNewsList(newsData);
    console.log("Latest news fetch happend");
  }

  return (
    <div className="latest-news__wrapper">
      <div className="latest-news">
        <div className="latest-news__header">
          <div className="latest-news__header-circle"></div>
          <h2 className="latest-news__header-title">Latest news</h2>
        </div>
        <div className="latest-news__list">
          {latestNewsList.map((news) => (
            <LatestNewsCard news={news} />
          ))}
        </div>
        <div className="latest-news__footer">
          <p className="latest-news__footer-text">See all news</p>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
