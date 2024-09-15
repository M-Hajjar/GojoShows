import { useState } from 'react';
import AnimeList from '../components/AnimeList';
import Navbar from '../components/Navbar';
import './Home.css'; // Optional: for additional page-level styling

const Home = () => {
  const [category, setCategory] = useState('');
  const categories = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror']; // Example categories

  return (
    <div className="home-container">
      <Navbar categories={categories} onCategoryChange={setCategory} />
      <h1>Anime List</h1>
      <AnimeList category={category} />
    </div>
  );
};

export default Home;
