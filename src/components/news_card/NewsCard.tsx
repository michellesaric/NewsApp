import React, { useState, useContext } from "react";
import { FavoriteContext } from "../../context/FavoritesContext";
import HeartEmpty from "../icons/heart_empty/HeartEmpty";
import HeartFilled from "../icons/heart_filled/HeartFilled";

interface MainNews {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  author: string;
}
interface NewsCardProps {
  news: MainNews;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  const { id, imageUrl, category, title, author } = news;
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoriteContext);

  const [isHeartFilled, setIsHeartFilled] = useState<boolean>(
    favorites.some((favorite) => favorite.id === id)
  );
  const heartIcon = isHeartFilled ? (
    <HeartFilled />
  ) : (
    <HeartEmpty color="#000000" />
  );

  const handleHeartClick = () => {
    if (isHeartFilled) {
      removeFavorite(id);
    } else {
      addFavorite(news);
    }
    setIsHeartFilled(!isHeartFilled);
    console.log(localStorage.getItem("favorites"));
  };

  return (
    <div className="news-card">
      <div
        className="news-card__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="news-card__text-wrapper">
        <div>
          <div className="news-card__category-wrapper">
            <h3 className="news-card__category">{category}</h3>
            <div onClick={handleHeartClick}>{heartIcon}</div>
          </div>
          <p className="news-card__title">{title}</p>
        </div>
        <p className="news-card__author">{author}</p>
      </div>
    </div>
  );
};

export default NewsCard;
