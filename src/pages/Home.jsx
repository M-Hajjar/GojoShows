import { useState } from 'react';
import AnimeList from '../components/AnimeList';
import Navbar from '../components/Navbar';

const Home = () => {
  const [category, setCategory] = useState('');
  const categories = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror']; // Example categories

  return (
    <div>
      <Navbar categories={categories} onCategoryChange={setCategory} />
      <h1>Anime List</h1>
      <AnimeList category={category} />
    </div>
  );
};

export default Home;
