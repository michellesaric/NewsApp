import React, { useState, useEffect, useContext } from "react";
import NewsCard from "../../../components/news_card/NewsCard";
import {
  mapNewsData,
  mapNewsDataByCategory,
  mapNewsDataBySearch,
  mapNewsDataBySearchAndCategory,
} from "../../../api/map";
import { CategoryContext } from "../../../context/CategoryContext";
import { FavoriteContext } from "../../../context/FavoritesContext";
import { SearchContext } from "../../../context/SearchContext";
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
  const { searchText, setSearchText } = useContext(SearchContext);
  const [newsList, setNewsList] = useState<MainNews[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(searchText);
    const fetchData = async () => {
      let newsData = [];
      try {
        if (selectedCategory === "Home") {
          if (searchText !== "") {
            newsData = await mapNewsDataBySearch(searchText);
          } else {
            newsData = await mapNewsData();
          }
        } else {
          if (searchText !== "") {
            newsData = await mapNewsDataBySearchAndCategory(
              searchText,
              selectedCategory
            );
          } else {
            newsData = await mapNewsDataByCategory(selectedCategory);
          }
        }

        setNewsList(newsData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedCategory, searchText]);

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
            <div key={news.id} className="news__wrapper">
              {news.category === "Breaking" ? (
                <BreakingNews news={news} />
              ) : (
                <NewsCard news={news} />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default News;
