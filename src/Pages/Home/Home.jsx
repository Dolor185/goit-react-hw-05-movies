import { useEffect, useState } from 'react';
import { getTrend } from 'Service/MoviedbAPI';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState('');
  const location = useLocation();

  useEffect(() => {
    getTrend().then(res => {
      setMovies(res.results);
    });
  }, []);

  return (
    <div>
      <h1>Tending today</h1>
      {movies && <MoviesList movies={movies} location={location} />}
    </div>
  );
};

export default Home;
