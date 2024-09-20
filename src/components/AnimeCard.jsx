import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavouritesContext'; // Custom context hook
import heartRegular from '../assets/heart-regular.svg'; // Not favorited
import heartSolid from '../assets/heart-solid.svg'; // Favorited

const AnimeCard = ({ anime }) => {
  const { favorites, toggleFavorite } = useFavorites(); // Context functions to manage favorites
  const isFavorited = favorites.includes(anime.mal_id); // Check if anime is favorited

  return (
    <div className="anime-card">
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <div className="anime-details">
        {/* Heart icon for favorites in top-left corner */}
        <div className="anime-card-heart" onClick={() => toggleFavorite(anime.mal_id)}>
          <img src={isFavorited ? heartSolid : heartRegular} alt="Favorite Icon" />
        </div>

        <p><strong>{anime.title}</strong></p>
        <p><strong>Year:</strong> {anime.aired?.prop?.from?.year || 'N/A'}</p>
        <p><strong>Episodes:</strong> {anime.episodes || 'N/A'}</p>
        <p><strong>Categories:</strong> {anime.genres.map(genre => genre.name).join(', ')}</p>

        {/* Button to view details */}
        <Link to={`/anime/${anime.mal_id}`} className="anime-card-details-btn">View Details</Link>
      </div>
    </div>
  );
};

export default AnimeCard;
