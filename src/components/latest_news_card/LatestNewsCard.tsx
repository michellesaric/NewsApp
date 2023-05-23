import React from "react";
import { LatestNewsCardProps } from "./props";
import { Link } from "react-router-dom";

const LatestNewsCard = ({ news }: LatestNewsCardProps) => {
  const { title, newsUrl, publishedAt } = news;
  return (
    <div className="latest-news-card">
      <h4 className="latest-news-card__time">
        {publishedAt.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h4>
      <Link to={newsUrl} className="latest-news-card__title">
        {title}
      </Link>
    </div>
  );
};

export default LatestNewsCard;
