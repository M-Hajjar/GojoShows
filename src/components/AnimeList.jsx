import { useState, useEffect } from 'react';
import { fetchAnimes } from '../api/JikanApi';
import AnimeCard from './AnimeCard';
import './AnimeList.css';

const AnimeList = ({ category }) => {
  const [animes, setAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const limitPerPage = 20; // Number of shows to display per page

  useEffect(() => {
    // Reset page and anime list when category changes
    setAnimes([]);
    setCurrentPage(1);
    loadAnimes(1);
  }, [category]);

  const loadAnimes = async (page) => {
    setLoading(true);
    const animeData = await fetchAnimes(page, limitPerPage, category);
    setAnimes(prevAnimes => [...prevAnimes, ...animeData]);
    setLoading(false);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    loadAnimes(nextPage);
  };

  return (
    <div className="anime-list">
      {animes.map(anime => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
      <div className="load-more-container">
        <button onClick={handleLoadMore} disabled={loading} className="load-more-btn">
          {loading ? 'Loading...' : 'Load More Shows'}
        </button>
      </div>
    </div>
  );
};

export default AnimeList;
