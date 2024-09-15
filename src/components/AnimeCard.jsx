import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => (
  <div className="anime-card">
    <img src={anime.images.jpg.image_url} alt={anime.title} />
    <h3>{anime.title}</h3>
    <Link to={`/anime/${anime.mal_id}`}>View Details</Link>
  </div>
);

export default AnimeCard;
