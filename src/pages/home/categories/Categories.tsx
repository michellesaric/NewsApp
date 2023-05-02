import React from "react";
import { Link } from "react-router-dom";
import { categoryList } from "./categorieList";

const Categories = () => {
  return (
    <div className="categories">
      {categoryList.map(({ id, icon: Component, category }) => (
        <Link to={`/${category}`} key={id} className="categories__card">
          <div className="categories__card-icon">
            {<Component color="#8D8D8C" />}
          </div>
          <h3 className="categories__card-title">{category}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
