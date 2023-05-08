import React, { useState } from "react";
import { CategoryContext } from "./context/CategoryContext";
import FavoriteProvider from "./context/FavoritesContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <FavoriteProvider>
      <CategoryContext.Provider
        value={{ selectedCategory, setSelectedCategory }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </CategoryContext.Provider>
    </FavoriteProvider>
  );
};

export default App;
