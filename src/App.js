import React from "react";
import CategoryProvider from "./context/CategoryContext";
import FavoriteProvider from "./context/FavoritesContext";
import SearchProvider from "./context/SearchContext";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

const App = () => {
  return (
    <SearchProvider>
      <FavoriteProvider>
        <CategoryProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category" element={<CategoryResolver />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </CategoryProvider>
      </FavoriteProvider>
    </SearchProvider>
  );
};

const CategoryResolver = () => {
  const { category } = useParams();

  const isValidCategory = [
    "Home",
    "General",
    "Business",
    "Health",
    "Science",
    "Sports",
    "Technology",
    "Favorites",
  ].includes(category);

  return isValidCategory ? <Home /> : <Error />;
};

export default App;
