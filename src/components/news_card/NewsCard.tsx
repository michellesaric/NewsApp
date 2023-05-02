import React from "react";

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
  return (
    <div className="news-card">
      <div
        className="news-card__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="news-card__text-wrapper">
        <h3 className="news-card__category">{category}</h3>
        <p className="news-card__title">{title}</p>
      </div>
    </div>
  );
};

export default NewsCard;
