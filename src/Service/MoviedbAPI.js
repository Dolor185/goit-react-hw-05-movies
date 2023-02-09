import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'dcb4286484ea9922f495e014e68b52ad';

export const getMovies = async request => {
  const res = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${request}`
  );
  return res.data;
};

export const getTrend = async () => {
  const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieDetails = async movieId => {
  const res = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieCasts = async movieId => {
  const res = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieReviews = async movieId => {
  const res = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return res.data;
};
