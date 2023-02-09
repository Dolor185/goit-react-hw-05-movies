import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getMovies } from 'Service/MoviedbAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const formSubmit = query => {
    setSearchParams({ query });
  };
  useEffect(() => {
    if (query === '') {
      return;
    }
    getMovies(query).then(res => setMovies(res.results));
  }, [query]);

  return (
    <div>
      <SearchBar formSubmit={formSubmit} />
      {movies && <MoviesList movies={movies} location={location} />}
      <ToastContainer />
    </div>
  );
};

export default Movies;
