const BASE_URL = 'https://api.jikan.moe/v4';

const genreMap = {
  Action: 1,
  Adventure: 2,
  Comedy: 4,
  Drama: 8,
  Fantasy: 10,
  Horror: 14,

};

/** what can the url take ?
 * @param {number} page 
 * @param {number} limit 
 * @param {string} category 
 * @returns {Array} 
 * @param {number} id 
 * @returns {Object|null} 
 */

export const fetchAnimes = async (page = 1, limit = 20, category = '') => {
  try {
    let url = `${BASE_URL}/anime?page=${page}&limit=${limit}`;
    if (category && genreMap[category]) {
      url += `&genres=${genreMap[category]}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data.data || []; 
  } catch (error) {
    console.error('Error fetching anime:', error);
    return [];
  }
};


export const fetchAnimeDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/anime/${id}`);
    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error('Error fetching anime details:', error);
    return null;
  }
};
