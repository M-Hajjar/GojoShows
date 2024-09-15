import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => (
  <div className="anime-card">
    <img src={anime.images.jpg.image_url} alt={anime.title} />
    <div className="anime-details">
  <p><strong>{anime.title}</strong></p>
   <p><strong>Year:</strong> {anime.aired?.prop?.from?.year || 'N/A'}</p>
      <p><strong>Episodes:</strong> {anime.episodes || 'N/A'}</p>
      <p><strong>Categories:</strong> {anime.genres.map(genre => genre.name).join(', ')}</p>
      <Link to={`/anime/${anime.mal_id}`}>View Details</Link>
    </div>
  </div>
);

export default AnimeCard;
