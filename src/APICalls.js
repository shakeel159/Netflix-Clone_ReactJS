const API_KEY = 'f98b2e3c7c8d2dad9a49a745702fdef0'; // Use quotes for API key
const API_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
      const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      if (!response.ok) throw new Error('Failed to fetch popular movies');
      const data = await response.json();
      return data.results;
  } catch (error) {
      console.error('Error fetching popular movies:', error);
      return [];
  }
};

export const fetchRecentMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
    if(!response.ok) throw new Error('Failed to fetch recent released movies');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching recently released movies: ', error);
    return [];
  }
};
export const fetchActionMovies = async () => {
  try {
      const response = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28&page=1`);
      if (!response.ok) throw new Error('Failed to fetch action movies');
      const data = await response.json();
      return data.results;
  } catch (error) {
      console.error('Error fetching action movies:', error);
      return [];
  }
};
export const fetchComedyMovies = async () => {
  try {
      const response = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35&page=1`);
      if (!response.ok) throw new Error('Failed to fetch comedy movies');
      const data = await response.json();
      return data.results;
  } catch (error) {
      console.error('Error fetching comedy movies:', error);
      return [];
  }
};
export const fetchUpcomingMovies = async () => {
  try {
      const response = await fetch(`${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
      if (!response.ok) throw new Error('Failed to fetch upcoming movies');
      const data = await response.json();
      return data.results;
  } catch (error) {
      console.error('Error fetching upcoming movies:', error);
      return [];
  }
};