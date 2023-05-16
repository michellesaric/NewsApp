import React from "react";

interface LatestNews {
  id: number;
  title: string;
  publishedAt: Date;
}

interface LatestNewsCardProps {
  news: LatestNews;
}
const LatestNewsCard = ({ news }: LatestNewsCardProps) => {
  const { id, title, publishedAt } = news;
  return (
    <div className="latest-news-card">
      <h4 className="latest-news-card__time">
        {publishedAt.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h4>
      <p className="latest-news-card__title">{title}</p>
    </div>
  );
};

export default LatestNewsCard;
