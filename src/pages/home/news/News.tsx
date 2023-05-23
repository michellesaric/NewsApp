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
import { MainNews } from "./props";

const News = () => {
  const { selectedCategory } = useContext(CategoryContext);
  const { favorites } = useContext(FavoriteContext);
  const { searchText } = useContext(SearchContext);
  const [newsList, setNewsList] = useState<MainNews[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

        console.log(searchText);

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
    <section className="news">
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <>
          <article className="news__wrapper latest-news-element">
            <LatestNews />
          </article>
          {news.map((news, index) => (
            <article
              key={`${news.id}-${selectedCategory}-${index}`}
              className="news__wrapper"
            >
              {news.category === "Breaking" ? (
                <BreakingNews news={news} />
              ) : (
                <NewsCard news={news} />
              )}
            </article>
          ))}
        </>
      )}
    </section>
  );
};

export default News;
