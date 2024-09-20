import { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <FavouritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavouritesContext);
