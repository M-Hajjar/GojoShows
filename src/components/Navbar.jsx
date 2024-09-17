import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ categories, onCategoryChange, showCategories = true }) => { // Added showCategories prop with default value true
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategorySelect = (category) => {
    onCategoryChange(category);
    setIsDropdownOpen(false); // Close the dropdown when a category is selected
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="gojo">Gojo</span><span className="shows">Shows</span>
      </div>
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
    </nav>
  );
};

export default Navbar;
