import React from "react";
import CategoryProvider from "./context/CategoryContext";
import FavoriteProvider from "./context/FavoritesContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

const App = () => {
  return (
    <FavoriteProvider>
      <CategoryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </CategoryProvider>
    </FavoriteProvider>
  );
};

export default App;
