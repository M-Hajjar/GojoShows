import { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css';

const Navbar = ({ categories, onCategoryChange, showCategories = true }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the mobile menu

  const handleCategorySelect = (category) => {
    onCategoryChange(category);
    setIsDropdownOpen(false); // Close the dropdown when a category is selected
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Wrap the logo in a Link component to navigate to the homepage */}
        <Link to="/">
          <span className="gojo">Gojo</span><span className="shows">Shows</span>
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-buttons ${menuOpen ? 'show' : ''}`}>
        {showCategories && ( // Conditionally render the categories button
          <div 
            className="navbar-categories-button" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            Categories
            {isDropdownOpen && (
              <ul className="navbar-categories-dropdown">
                {categories.map((category, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Add Favourite Shows button */}
        <Link to="/favorites" className="navbar-favourites-button">
          Favourite Shows
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
