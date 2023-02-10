import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getMovies } from 'Service/MoviedbAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '/';
  const location = useLocation();

  const formSubmit = query => {
    setSearchParams({ query });
  };
  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    getMovies(query)
      .then(res => setMovies(res.results))
      .catch(err => {
        toast.error(`Цу didn't find the movie ${query} `);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return (
    <div>
      <SearchBar formSubmit={formSubmit} />

      {movies && !loading ? (
        <MoviesList movies={movies} location={location} />
      ) : (
        <Loader />
      )}
      <ToastContainer />
    </div>
  );
};

export default Movies;
