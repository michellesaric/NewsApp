import React from "react";
import { NewsProps } from "./props";

const BreakingNews = ({ news }: NewsProps) => {
  return (
    <article className="breaking_news">
      <h4 className="breaking_news--category">{news.category}</h4>
      <h2 className="breaking_news--title">{news.title}</h2>
      <p className="breaking_news--author">{news.author}</p>
    </article>
  );
};

export default BreakingNews;
