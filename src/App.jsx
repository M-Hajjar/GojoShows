import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimeDetail from './pages/AnimeDetail';
import FavoritesPage from './pages/FavoritesPage';  // Import the FavoritesPage component

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/:id" element={<AnimeDetail />} />
      <Route path="/favorites" element={<FavoritesPage />} /> {/* Add route for Favorites */}
    </Routes>
  </Router>
);

export default App;
