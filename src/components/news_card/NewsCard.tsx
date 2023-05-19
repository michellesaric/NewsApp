import React, { useContext, useMemo } from "react";
import { FavoriteContext } from "../../context/FavoritesContext";
import HeartEmptyIcon from "../icons/heart_empty/HeartEmpty";
import HeartFilledIcon from "../icons/heart_filled/HeartFilled";
import { Link } from "react-router-dom";
import placeholder from "../../assets/images/PlaceHolder.png";
import { NewsCardProps } from "./props";

const NewsCard = ({ news }: NewsCardProps) => {
  const { id, imageUrl, newsUrl, category, title, author } = news;
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoriteContext);

  const favoriteIds = useMemo(
    () => new Set(favorites.map((favorite) => favorite.id)),
    [favorites]
  );
  const isHeartFilled = favoriteIds.has(id);

  const handleHeartClick = () => {
    if (isHeartFilled) {
      removeFavorite(id);
    } else {
      addFavorite(news);
    }
  };

  const image = imageUrl || placeholder;

  return (
    <div className="news-card">
      <figure
        className="news-card__image"
        style={{ backgroundImage: `url(${image})` }}
      ></figure>
      <div className="news-card__text-wrapper">
        <div className="news-card__content-wrapper">
          <div className="news-card__category-wrapper">
            <h3 className="news-card__category">{category}</h3>
            <div onClick={handleHeartClick}>
              {isHeartFilled ? (
                <HeartFilledIcon />
              ) : (
                <HeartEmptyIcon color="#8d8d8c" />
              )}
            </div>
          </div>
          <Link to={newsUrl} className="news-card__title">
            {title}
          </Link>
        </div>
        <p className="news-card__author">{author || "Undisplayed author"}</p>
      </div>
    </div>
  );
};

export default NewsCard;
