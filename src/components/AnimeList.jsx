import { useState, useEffect } from 'react';
import { fetchAnimes } from '../api/jikanApi';
import AnimeCard from './AnimeCard';

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const getAnimes = async () => {
      const animeData = await fetchAnimes();
      setAnimes(animeData);
    };
    getAnimes();
  }, []);

  return (
    <div className="anime-list">
      {animes.map(anime => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
