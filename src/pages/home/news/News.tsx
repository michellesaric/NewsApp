import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import NewsCard from "../../../components/news_card/NewsCard";
import { mapNewsData, mapNewsDataByCategory } from "../../../api/data/map";
import { CategoryContext } from "../../../context/CategoryContext";
import { FavoriteContext } from "../../../context/FavoritesContext";
import LatestNews from "../latest_news/LatestNews";
import BreakingNews from "../../../components/breaking_news/BreakingNews";

interface MainNews {
  id: number;
  imageUrl: string;
  newsUrl: string;
  category: string;
  title: string;
  author: string;
  source: string;
}

const News = () => {
  const { selectedCategory } = useContext(CategoryContext);
  const { favorites } = useContext(FavoriteContext);
  const [newsList, setNewsList] = useState<MainNews[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let newsData = [];
      try {
        if (selectedCategory === "Home") {
          newsData = await mapNewsData();
        } else {
          newsData = await mapNewsDataByCategory(selectedCategory);
        }

        setNewsList(newsData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }

      console.log("News fetch fired");
    };
    fetchData();
  }, [selectedCategory]);

  const news = selectedCategory === "Favorites" ? favorites : newsList;

  return (
    <div className="news">
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <>
          <div className="news__wrapper latest-news-element">
            <LatestNews />
          </div>
          {news.map((news) => (
            <Link to={news.newsUrl} key={news.id} className="news__wrapper">
              {news.category === "Breaking" ? (
                <BreakingNews news={news} />
              ) : (
                <NewsCard news={news} />
              )}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default News;
