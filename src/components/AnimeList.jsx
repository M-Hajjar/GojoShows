import { useState, useEffect } from 'react';
import { fetchAnimes } from '../api/jikanApi';
import AnimeCard from './AnimeCard';
import './AnimeList.css';

const AnimeList = ({ category }) => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const getAnimes = async () => {
      const animeData = await fetchAnimes();
      if (category) {
        const filteredAnimes = animeData.filter(anime => anime.genres.some(genre => genre.name === category));
        setAnimes(filteredAnimes);
      } else {
        setAnimes(animeData);
      }
    };
    getAnimes();
  }, [category]);

  return (
    <div className="anime-list">
      {animes.map(anime => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
