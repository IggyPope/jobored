'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({});

  //sync context with localStorage on render
  useEffect(() => {
    const favs = localStorage.getItem('favorites');
    setFavorites(favs ? JSON.parse(favs) : {});
  }, []);

  //sync localStorage with context on context update
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (vacancy) =>
    setFavorites((prev) => ({
      ...prev,
      [vacancy.id]: vacancy,
    }));

  const removeFavorite = (id) =>
    setFavorites((prev) => {
      let newFavorites = { ...prev };
      if (newFavorites.hasOwnProperty(id)) {
        delete newFavorites[id];
      }
      return { ...newFavorites };
    });

  const checkFavorite = (id) => favorites.hasOwnProperty(id);

  return (
    <FavoritesContext.Provider
      value={{ addFavorite, removeFavorite, checkFavorite, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);

export default FavoritesContextProvider;
