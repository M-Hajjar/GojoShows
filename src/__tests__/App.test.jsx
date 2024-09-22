import React from 'react';  // Add this line
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App'; // Import the App component

test('renders the Home page on the root route', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check if the Home page content is rendered
  expect(screen.getByText(/Home/i)).toBeInTheDocument(); // Adjust this to match the actual text on your Home page
});
