import React from "react";

function NewsCard() {
  return (
    <div className="news-card">
      <div className="news-card__image"></div>
      <div className="news-card__text-wrapper">
        <h3 className="news-card__category">Technology</h3>
        <p className="news-card__title">
          Compare Prices Find The Best Compute Accessory
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
