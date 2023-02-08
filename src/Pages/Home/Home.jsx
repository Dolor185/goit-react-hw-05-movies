import { useEffect, useState } from 'react';
import { getTrend } from 'Service/MoviedbAPI';

import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    getTrend().then(res => {
      setMovies(res.results);
    });
  }, []);

  return (
    <div>
      <h1>Tending today</h1>
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};
