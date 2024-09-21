import { useState } from 'react';
import AnimeList from '../components/AnimeList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  const [category, setCategory] = useState('');
  const categories = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror']; // Example categories

  return (
    <div className="home-container">
      <Navbar categories={categories} onCategoryChange={setCategory} />
      <h1 className="anime-title">
        <span className="highlight">Anime List</span> 
      </h1>
      <AnimeList category={category} />
      <Footer />
    </div>
  );
};

export default Home;
