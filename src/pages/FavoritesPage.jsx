import { useFavorites } from '../context/FavouritesContext';
import { useEffect, useState } from 'react';
import { fetchAnimeDetails } from '../api/JikanApi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimeCard from '../components/AnimeCard';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const [favoriteAnimes, setFavoriteAnimes] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await Promise.all(favorites.map((id) => fetchAnimeDetails(id)));
      setFavoriteAnimes(data);
    };

    if (favorites.length) {
      fetchFavorites();
    }
  }, [favorites]);

  if (!favorites.length) return <p>No favorite shows yet.</p>;

  return (
    <div>
      <Navbar showCategories={false} />
      <h1>Your Favorite Shows</h1>
      <div className="favorites-grid">
        {favoriteAnimes.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
