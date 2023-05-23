import React, { createContext, useState, useEffect } from "react";

type Favorite = {
  id: number;
  imageUrl: string;
  newsUrl: string;
  category: string;
  title: string;
  author: string;
};

type FavoriteContextType = {
  favorites: Favorite[];
  addFavorite: (newFavorite: Favorite) => void;
  removeFavorite: (id: number) => void;
};

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const updateLocalStorage = (updatedFavorites: Favorite[]) => {
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const addFavorite = (newFavorite: Favorite) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, newFavorite];
      updateLocalStorage(updatedFavorites);
      return updatedFavorites;
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (favorite) => favorite.id !== id
      );
      updateLocalStorage(updatedFavorites);
      return updatedFavorites;
    });
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
