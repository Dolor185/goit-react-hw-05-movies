import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getMovies } from 'Service/MoviedbAPI';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const formSubmit = query => {
    setQuery(query);
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
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};
