import { useFavorites } from '../context/FavouritesContext'; // Correct import
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

const AnimeCard = ({ anime }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorited = favorites.includes(anime.mal_id);

  return (
    <div className="anime-card">
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <div className="anime-details">
        <p><strong>{anime.title}</strong></p>
        <p><strong>Year:</strong> {anime.aired?.prop?.from?.year || 'N/A'}</p>
        <p><strong>Episodes:</strong> {anime.episodes || 'N/A'}</p>
        <p><strong>Categories:</strong> {anime.genres.map(genre => genre.name).join(', ')}</p>
        <img 
          src={isFavorited ? heartSolid : heartRegular} 
          alt="Favorite"
          onClick={() => toggleFavorite(anime.mal_id)} 
          className="favorite-icon"
        />
      </div>
    </div>
  );
};

export default AnimeCard;
