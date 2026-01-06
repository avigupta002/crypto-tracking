import { useEffect, useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (coin) => {
    setFavorites((prev) =>
      prev.find((item) => item.id === coin.id)
        ? prev.filter((item) => item.id !== coin.id)
        : [...prev, coin]
    );
  };

  const isFavorite = (id) => favorites.some((c) => c.id === id);

  return { favorites, toggleFavorite, isFavorite };
};
