import { useFavorites } from '../context/FavouritesContext';
import { useEffect, useState } from 'react';
import { fetchAnimeDetails } from '../api/JikanApi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimeCard from '../components/AnimeCard';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useFavorites();  // Fetch favorite IDs from context
  const [favoriteAnimes, setFavoriteAnimes] = useState([]);

  // Fetch details of all favorite anime based on their IDs
  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await Promise.all(favorites.map((id) => fetchAnimeDetails(id)));
      console.log(data);  // Log the fetched data to check the structure
      setFavoriteAnimes(data);
    };
  
    if (favorites.length) {
      fetchFavorites();
    }
  }, [favorites]);

  // If no favorites exist, display a message
  if (!favorites.length) return <p>No favorite shows yet.</p>;

  return (
    <div>
      <Navbar showCategories={false} />  {/* Navbar without categories dropdown */}
      <h1>Your Favorite Shows</h1>
      <div className="favorites-grid">  {/* Grid to display anime cards */}
        {favoriteAnimes.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />  
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
