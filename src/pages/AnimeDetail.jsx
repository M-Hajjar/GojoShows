import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAnimeDetails } from '../api/JikanApi';
import { useFavorites } from '../context/FavouritesContext';  // Correct import
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';
import './AnimeDetail.css';

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const getAnimeDetails = async () => {
      const data = await fetchAnimeDetails(id);
      setAnime(data);
    };

    getAnimeDetails();
  }, [id]);

  if (!anime) return <div>Loading...</div>;

  const isFavorited = favorites.includes(anime.mal_id);

  return (
    <div className="anime-detail-page">
      <Navbar showCategories={false} />
      <div className="anime-detail-container">
        <img src={anime.images.jpg.large_image_url} alt={anime.title} className="anime-detail-image" />
        <div className="anime-detail-info">
          <h1>{anime.title}</h1>
          <p><strong>Year:</strong> {anime.aired.prop.from.year}</p>
          <p><strong>Episodes:</strong> {anime.episodes}</p>
          <p><strong>Genre:</strong> {anime.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Synopsis:</strong> {anime.synopsis}</p>
          <img 
            src={isFavorited ? heartSolid : heartRegular} 
            alt="Favorite"
            onClick={() => toggleFavorite(anime.mal_id)} 
            className="favorite-icon"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnimeDetail;
