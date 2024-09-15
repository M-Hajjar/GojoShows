import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAnimeDetails } from '../api/jikanApi';

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const getAnimeDetails = async () => {
      const animeData = await fetchAnimeDetails(id);
      setAnime(animeData);
    };
    getAnimeDetails();
  }, [id]);

  if (!anime) return <div>Loading...</div>;

  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <p>{anime.synopsis}</p>
    </div>
  );
};

export default AnimeDetail;
