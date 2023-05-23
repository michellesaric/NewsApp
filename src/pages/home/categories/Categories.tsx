import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../../context/CategoryContext";
import { SearchContext } from "../../../context/SearchContext";
import { categoryList } from "./categorieList";
import { ModalContext } from "../../../context/ModalContext";

const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { setSearchText } = useContext(SearchContext);
  const { setIsModalOpen } = useContext(ModalContext);

  const handleClick = (category: string) => {
    setSelectedCategory(category);
    setSearchText("");
    setIsModalOpen(false);
  };

  return (
    <div className="categories-wrapper">
      <section className="categories">
        {categoryList.map(({ id, icon: Component, category }) => {
          const isCategorySelected = category === selectedCategory;
          const iconColor = isCategorySelected ? "#bb1e1e" : "#8d8d8c";

          return (
            <Link
              to={`/${category}`}
              key={id}
              className={`categories__card ${
                isCategorySelected ? "red-card" : ""
              }`}
              onClick={() => handleClick(category)}
            >
              <div>
                <Component color={iconColor} />
              </div>
              <h3
                className={`categories__card-title ${
                  isCategorySelected ? "red-title" : ""
                }`}
              >
                {category}
              </h3>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Categories;
