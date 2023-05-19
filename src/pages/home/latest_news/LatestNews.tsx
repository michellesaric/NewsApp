import React, { useState, useEffect, useRef } from "react";
import LatestNewsCard from "../../../components/latest_news_card/LatestNewsCard";
import RightArrow from "../../../components/icons/right_arrow/RightArrow";
import { mapLatestNewsData } from "../../../api/map";
import { LatestNewsProps } from "./props";
import { options } from "./const";

const LatestNews = () => {
  const [latestNewsList, setLatestNewsList] = useState<LatestNewsProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState(1);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    fetchData();

    observerRef.current = new IntersectionObserver(handleObserver, options);
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (latestNewsList.length > 0 && observerRef.current) {
      observerRef.current.observe(
        document.querySelector(".latest-news__list-bottom")!
      );
    }
  }, [latestNewsList]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const newsData = await mapLatestNewsData(pageNumber);

      setLatestNewsList((prevNews) => [...prevNews, ...newsData]);
      setPageNumber((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleObserver: IntersectionObserverCallback = (entries) => {
    const target = entries[0];

    if (target.isIntersecting && !isLoading) {
      fetchData();
    }
  };

  return (
    <div className="latest-news__wrapper">
      <section className="latest-news">
        <div className="latest-news__header">
          <div className="latest-news__header-circle"></div>
          <h2 className="latest-news__header-title">Latest news</h2>
        </div>
        <div className="latest-news__list">
          {latestNewsList.map((news) => (
            <LatestNewsCard key={news.id} news={news} />
          ))}
          {isLoading && <p>Loading...</p>}
          <div className="latest-news__list-bottom" />
        </div>
        <div className="latest-news__footer">
          <p className="latest-news__footer-text">See all news</p>
          <RightArrow />
        </div>
      </section>
    </div>
  );
};

export default LatestNews;
