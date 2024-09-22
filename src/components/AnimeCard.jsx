import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavouritesContext'; // Custom context hook
import heartRegular from '../assets/heart-regular.svg'; // Not favorited
import heartSolid from '../assets/heart-solid.svg'; // Favorited

const AnimeCard = ({ anime }) => {
  const { favorites, toggleFavorite } = useFavorites(); 
  const isFavorited = favorites.includes(anime.mal_id); 

  return (
    <div className="anime-card">
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <div className="anime-details">
        <div className="anime-card-heart" onClick={() => toggleFavorite(anime.mal_id)}>
          <img src={isFavorited ? heartSolid : heartRegular} alt="Favorite Icon" />
        </div>

        <h3 className="anime-title">{anime.title}</h3>
        <p><strong>Year:</strong> {anime.aired?.prop?.from?.year || 'N/A'}</p>
        <p><strong>Episodes:</strong> {anime.episodes || 'N/A'}</p>
        <p><strong>Categories:</strong> {anime.genres.map(genre => genre.name).join(', ')}</p>

        <Link to={`/anime/${anime.mal_id}`} className="anime-card-details-btn">View Details</Link>
      </div>
    </div>
  );
};

export default AnimeCard;
