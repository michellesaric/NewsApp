import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../../context/CategoryContext";
import { categoryList } from "./categorieList";

const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  const handleClick = (category: string | null) => {
    setSelectedCategory(() => category);
  };

  return (
    <div className="categories">
      {categoryList.map(({ id, icon: Component, category }) => (
        <Link
          to={`/${category}`}
          key={id}
          className={
            "categories__card " +
            (category === selectedCategory ? "red-card" : "")
          }
          onClick={() => {
            handleClick(category);
          }}
        >
          <div>
            {
              <Component
                color={category === selectedCategory ? "#bb1e1e" : "#8d8d8c"}
              />
            }
          </div>
          <h3
            className={
              "categories__card-title " +
              (category === selectedCategory ? "red-title" : "")
            }
          >
            {category}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
