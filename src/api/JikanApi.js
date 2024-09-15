export const fetchAnimes = async () => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/anime');
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export const fetchAnimeDetails = async (id) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  