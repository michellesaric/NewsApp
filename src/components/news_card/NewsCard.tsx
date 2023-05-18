import React, { useState, useContext } from "react";
import { FavoriteContext } from "../../context/FavoritesContext";
import HeartEmpty from "../icons/heart_empty/HeartEmpty";
import HeartFilled from "../icons/heart_filled/HeartFilled";
import { Link } from "react-router-dom";
import placeholder from "../../assets/images/PlaceHolder.png";

interface MainNews {
  id: number;
  imageUrl: string;
  newsUrl: string;
  category: string;
  title: string;
  author: string;
}
interface NewsCardProps {
  news: MainNews;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  const { id, imageUrl, newsUrl, category, title, author } = news;
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
  };

  const image = imageUrl === null ? placeholder : imageUrl;
  return (
    <div className="news-card">
      <div
        className="news-card__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="news-card__text-wrapper">
        <div className="news-card__content-wrapper">
          <div className="news-card__category-wrapper">
            <h3 className="news-card__category">{category}</h3>
            <div onClick={handleHeartClick}>{heartIcon}</div>
          </div>
          <Link to={newsUrl} className="news-card__title">
            {title}
          </Link>
        </div>
        <p className="news-card__author">
          {author === null ? "Undisplayed author" : author}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
