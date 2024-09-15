const BASE_URL = 'https://api.jikan.moe/v4';

// Genre map based on Jikan API documentation (example genres)
const genreMap = {
  Action: 1,
  Adventure: 2,
  Comedy: 4,
  Drama: 8,
  Fantasy: 10,
  Horror: 14,
  // Add more genres if needed
};

/**
 * Fetches a list of animes with optional pagination and category filtering.
 * @param {number} page - The page number for pagination.
 * @param {number} limit - The number of items per page.
 * @param {string} category - The category (genre) to filter by.
 * @returns {Array} - A list of anime objects.
 */
export const fetchAnimes = async (page = 1, limit = 20, category = '') => {
  try {
    let url = `${BASE_URL}/anime?page=${page}&limit=${limit}`;
    if (category && genreMap[category]) {
      // Append genre filter
      url += `&genres=${genreMap[category]}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data.data || []; // Return an empty array if no data
  } catch (error) {
    console.error('Error fetching anime:', error);
    return [];
  }
};

/**
 * Fetches details for a single anime by its ID.
 * @param {number} id - The ID of the anime.
 * @returns {Object|null} - The anime details or null if an error occurs.
 */
export const fetchAnimeDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/anime/${id}`);
    const data = await response.json();
    return data.data; // Adjust if the structure differs
  } catch (error) {
    console.error('Error fetching anime details:', error);
    return null;
  }
};
