import React, { createContext, useState, useEffect } from "react";

type Favorite = {
  id: number;
  imageUrl: string;
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

  useEffect(() => {
    if (favorites.length) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const addFavorite = (newFavorite: Favorite) => {
    setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
  };

  const removeFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id)
    );
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
