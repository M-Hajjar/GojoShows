import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ categories, onCategoryChange }) => {
  return (
    <nav className="navbar">
      <h1>Anime Browser</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
      <div className="categories">
        <select onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
