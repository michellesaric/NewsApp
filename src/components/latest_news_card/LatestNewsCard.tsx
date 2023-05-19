import React from "react";
import { LatestNewsCardProps } from "./props";

const LatestNewsCard = ({ news }: LatestNewsCardProps) => {
  const { title, publishedAt } = news;
  return (
    <article className="latest-news-card">
      <h4 className="latest-news-card__time">
        {publishedAt.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h4>
      <p className="latest-news-card__title">{title}</p>
    </article>
  );
};

export default LatestNewsCard;
