import React from "react";

interface BreakingNewsProps {
  category: string;
  title: string;
  author: string;
}

interface NewsProps {
  news: BreakingNewsProps;
}

const BreakingNews = ({ news }: NewsProps) => {
  return (
    <div className="breaking_news">
      <h4 className="breaking_news--category">{news.category}</h4>
      <h2 className="breaking_news--title">{news.title}</h2>
      <p className="breaking_news--author">{news.author}</p>
    </div>
  );
};

export default BreakingNews;
