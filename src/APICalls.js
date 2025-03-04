import axios from 'axios';


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

export const getRandomMovieImage = async () =>  {
  try {
      const page = Math.floor(Math.random() * 10) + 1;
      const popularMovies = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
      
      const movies = popularMovies.data.results;
      if (movies.length === 0) return null;

      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      const movieId = randomMovie.id;

      // Fetch movie details to get genre info
      const movieDetails = await axios.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
      
      // Fetch images for the movie
      const imagesResponse = await axios.get(`${API_URL}/movie/${movieId}/images?api_key=${API_KEY}`);
      const backdrops = imagesResponse.data.backdrops;
      
      if (backdrops.length > 0) {
          return {
              title: randomMovie.title,
              categories: movieDetails.data.genres.map(g => g.name).join(", "),
              description: randomMovie.overview,
              imageUrl: backdrops.map(img => `https://image.tmdb.org/t/p/original${img.file_path}`)
          };
      } else {
          return null;
      }
  } catch (error) {
      console.error("Error fetching random movie image:", error);
      return null;
  }
};

export const WhereToWatch = async (movie_id) => {
  try {
    const response = await fetch(`${API_URL}/movie/${movie_id}/watch/providers?api_key=${API_KEY}`);
    if(!response.ok) throw new Error('Failed to fetch providers');
    const data = await response.json();
    return data.results;
  }
  catch(error){
    console.error('cant find information:', error);
    return [];
  }

};